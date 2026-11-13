import { TrainerProfile } from '../types';

export const GIST_FILENAME = 'bacen-2027-trainer-profile.json';
const GIST_DESCRIPTION = 'Bacen 2027 — Treinador Pessoal (Progresso Sincronizado)';

export interface GitHubUserMeta {
  login: string;
  name: string | null;
  avatarUrl: string;
}

export interface CloudEnvelope {
  schemaVersion: number;
  app: string;
  updatedAt: string;
  profile: Partial<TrainerProfile>;
}

export interface RemoteGistSnapshot {
  gistId: string;
  gistUrl: string;
  updatedAt: string;
  envelope: CloudEnvelope;
}

function buildHeaders(token: string): HeadersInit {
  return {
    Accept: 'application/vnd.github+json',
    Authorization: `Bearer ${token.trim()}`,
    'X-GitHub-Api-Version': '2022-11-28',
  };
}

async function parseErrorMessage(res: Response): Promise<string> {
  try {
    const body = (await res.json()) as { message?: string };
    if (res.status === 401) {
      return 'Token do GitHub inválido ou expirado (401). Gere um novo token com permissão "gist".';
    }
    if (res.status === 403 || res.status === 404) {
      return (
        body.message ||
        `Acesso negado ou Gist não encontrado (${res.status}). Verifique se o token tem permissão de leitura e escrita em Gists.`
      );
    }
    return body.message || `Erro na API do GitHub (${res.status}).`;
  } catch {
    return `Erro na comunicação com o GitHub (HTTP ${res.status}).`;
  }
}

export async function verifyGitHubToken(token: string): Promise<GitHubUserMeta> {
  const res = await fetch('https://api.github.com/user', {
    headers: buildHeaders(token),
  });
  if (!res.ok) {
    throw new Error(await parseErrorMessage(res));
  }
  const data = (await res.json()) as {
    login: string;
    name?: string | null;
    avatar_url: string;
  };
  return {
    login: data.login,
    name: data.name ?? null,
    avatarUrl: data.avatar_url,
  };
}

interface RawGistFile {
  filename?: string;
  content?: string;
  raw_url?: string;
  truncated?: boolean;
}

interface RawGistItem {
  id: string;
  html_url: string;
  public: boolean;
  updated_at: string;
  files: Record<string, RawGistFile>;
}

async function extractGistFileContent(file: RawGistFile, token: string): Promise<string> {
  if (!file.truncated && typeof file.content === 'string') {
    return file.content;
  }
  if (!file.raw_url) {
    throw new Error('Conteúdo do Gist indisponível.');
  }
  const rawRes = await fetch(file.raw_url, {
    headers: { Authorization: `Bearer ${token.trim()}` },
  });
  if (!rawRes.ok) {
    throw new Error(await parseErrorMessage(rawRes));
  }
  return rawRes.text();
}

function parseEnvelope(rawText: string, fallbackUpdatedAt: string): CloudEnvelope {
  const parsed = JSON.parse(rawText) as Partial<CloudEnvelope> & Partial<TrainerProfile>;
  // Aceita tanto envelope versionado quanto perfil bruto exportado
  if (parsed && parsed.profile && typeof parsed.profile === 'object') {
    return {
      schemaVersion: parsed.schemaVersion ?? 2,
      app: parsed.app ?? 'bacen-2027-treinador',
      updatedAt: parsed.updatedAt ?? fallbackUpdatedAt,
      profile: parsed.profile,
    };
  }
  if (parsed && parsed.subjectRatings) {
    return {
      schemaVersion: 1,
      app: 'bacen-2027-treinador',
      updatedAt: parsed.lastUpdatedAt ?? fallbackUpdatedAt,
      profile: parsed,
    };
  }
  throw new Error('O arquivo no Gist não contém um perfil válido do Treinador Bacen 2027.');
}

export async function findExistingTrainerGist(token: string): Promise<string | null> {
  const res = await fetch('https://api.github.com/gists?per_page=100', {
    headers: buildHeaders(token),
  });
  if (!res.ok) {
    throw new Error(await parseErrorMessage(res));
  }
  const gists = (await res.json()) as RawGistItem[];
  const matching = gists.filter((g) => Boolean(g.files && g.files[GIST_FILENAME]));
  if (matching.length === 0) return null;
  // Prioriza Gist privado mais recente
  matching.sort((a, b) => {
    if (a.public !== b.public) return a.public ? 1 : -1;
    return b.updated_at.localeCompare(a.updated_at);
  });
  return matching[0].id;
}

export async function pullProfileFromGist(
  token: string,
  gistId: string
): Promise<RemoteGistSnapshot> {
  const res = await fetch(`https://api.github.com/gists/${encodeURIComponent(gistId.trim())}`, {
    headers: buildHeaders(token),
  });
  if (!res.ok) {
    throw new Error(await parseErrorMessage(res));
  }
  const gist = (await res.json()) as RawGistItem;
  const file = gist.files?.[GIST_FILENAME];
  if (!file) {
    throw new Error(`O Gist ${gistId} não possui o arquivo ${GIST_FILENAME}.`);
  }
  const rawContent = await extractGistFileContent(file, token);
  const envelope = parseEnvelope(rawContent, gist.updated_at);
  return {
    gistId: gist.id,
    gistUrl: gist.html_url,
    updatedAt: envelope.updatedAt || gist.updated_at,
    envelope,
  };
}

export async function pushProfileToGist(
  token: string,
  profile: TrainerProfile,
  existingGistId?: string
): Promise<{ gistId: string; gistUrl: string; updatedAt: string }> {
  const now = new Date().toISOString();
  const envelope: CloudEnvelope = {
    schemaVersion: 2,
    app: 'bacen-2027-treinador',
    updatedAt: now,
    profile: {
      ...profile,
      lastUpdatedAt: now,
    },
  };

  const body = JSON.stringify({
    description: GIST_DESCRIPTION,
    public: false,
    files: {
      [GIST_FILENAME]: {
        content: JSON.stringify(envelope, null, 2),
      },
    },
  });

  const url = existingGistId
    ? `https://api.github.com/gists/${encodeURIComponent(existingGistId.trim())}`
    : 'https://api.github.com/gists';

  const res = await fetch(url, {
    method: existingGistId ? 'PATCH' : 'POST',
    headers: {
      ...buildHeaders(token),
      'Content-Type': 'application/json',
    },
    body,
  });

  if (!res.ok) {
    throw new Error(await parseErrorMessage(res));
  }

  const gist = (await res.json()) as RawGistItem;
  return {
    gistId: gist.id,
    gistUrl: gist.html_url,
    updatedAt: now,
  };
}
