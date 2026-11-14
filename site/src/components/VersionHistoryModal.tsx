import React, { useEffect } from 'react';
import {
  Archive,
  ArrowUpRight,
  CheckCircle2,
  GitBranch,
  History,
  RotateCcw,
  ShieldAlert,
  X,
} from 'lucide-react';
import versionsList from '../data/versions.json';

export interface VersionReleaseEntry {
  id: string;
  ref: string;
  tag: string;
  date: string;
  edition: string;
  title: string;
  summary: string;
  isCurrent: boolean;
  archive: boolean;
  changes: string[];
}

export const RELEASES: VersionReleaseEntry[] = versionsList as VersionReleaseEntry[];
export const CURRENT_RELEASE: VersionReleaseEntry =
  RELEASES.find((r) => r.isCurrent) ?? RELEASES[0];

const GITHUB_REPO_URL = 'https://github.com/matheusdero/Bacen2027';

export function getSiteRootPath(pathname = window.location.pathname): string {
  const markerIdx = pathname.indexOf('/versions/');
  if (markerIdx !== -1) {
    return pathname.slice(0, markerIdx + 1);
  }
  if (pathname.endsWith('/index.html')) {
    return pathname.slice(0, -'index.html'.length);
  }
  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

export function getRunningArchivedVersion(pathname = window.location.pathname): string | null {
  const match = pathname.match(/\/versions\/([^/]+)/);
  return match ? match[1] : null;
}

interface VersionHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VersionHistoryModal: React.FC<VersionHistoryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const siteRoot = getSiteRootPath();
  const runningArchiveId = getRunningArchivedVersion();
  const isDevServer = Boolean(
    (import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV
  );

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="version-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card version-modal-card">
        <div className="modal-header">
          <div>
            <h2 id="version-modal-title">
              <History size={20} /> Controle de Versões &amp; Histórico
            </h2>
            <p>
              Veja exatamente o que mudou em cada versão ou abra uma edição anterior congelada.
            </p>
          </div>
          <button
            type="button"
            className="icon-close-btn"
            onClick={onClose}
            aria-label="Fechar histórico de versões"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body version-modal-body">
          {runningArchiveId && (
            <div className="version-archive-alert">
              <div>
                <strong>
                  <ShieldAlert size={15} /> Você está executando a versão arquivada{' '}
                  {runningArchiveId}
                </strong>
                <span>
                  Seu progresso salvo continua compartilhado normalmente com a versão principal.
                </span>
              </div>
              <a href={siteRoot} className="btn btn-sm btn-primary">
                <RotateCcw size={14} /> Voltar à Versão Atual
              </a>
            </div>
          )}

          <div className="version-edital-note">
            <GitBranch size={16} />
            <div>
              <strong>Garantia Pré-Edital vs. Edital 2027</strong>
              <p>
                Cada versão publicada fica registrada no repositório e as edições arquivadas são
                compiladas em subrotas próprias (<code>/versions/&lt;versão&gt;/</code>) no mesmo
                domínio. Quando sair o <strong>Edital 2027</strong>, esta base{' '}
                <strong>Pré-Edital 2024</strong> permanecerá congelada e acessível aqui sem apagar
                seu progresso local nem do GitHub Gist.
              </p>
            </div>
          </div>

          {isDevServer && (
            <div className="muted-note">
              Nota: no servidor local de desenvolvimento (<code>npm run dev</code>), os links de
              abertura de versões arquivadas apontam para o build multi-versão publicado no GitHub
              Pages (ou via <code>vite preview</code> após rodar o script de arquivamento).
            </div>
          )}

          <div className="version-timeline">
            {RELEASES.map((release) => {
              const isRunningThis = runningArchiveId
                ? runningArchiveId === release.id
                : release.isCurrent;
              const archiveHref = `${siteRoot}versions/${release.id}/`;
              const githubTreeUrl = `${GITHUB_REPO_URL}/tree/${release.ref}`;

              return (
                <article
                  key={release.id}
                  className={`version-entry ${isRunningThis ? 'current-entry' : ''}`}
                >
                  <div className="version-entry-head">
                    <div className="version-entry-badges">
                      <span className="version-id-badge">{release.id}</span>
                      <span className="version-edition-badge">{release.edition}</span>
                      {release.isCurrent && (
                        <span className="badge badge-emerald">Mais recente</span>
                      )}
                      {isRunningThis && (
                        <span className="badge badge-primary">
                          <CheckCircle2 size={12} /> Em uso agora
                        </span>
                      )}
                    </div>
                    <time className="version-date" dateTime={release.date}>
                      {new Date(`${release.date}T12:00:00`).toLocaleDateString('pt-BR')}
                    </time>
                  </div>

                  <h3>{release.title}</h3>
                  <p className="version-summary">{release.summary}</p>

                  <ul className="version-changes-list">
                    {release.changes.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <div className="version-entry-actions">
                    {release.isCurrent && runningArchiveId ? (
                      <a href={siteRoot} className="btn btn-sm btn-primary">
                        <RotateCcw size={14} /> Abrir Versão Atual ({release.id})
                      </a>
                    ) : release.archive && !isRunningThis ? (
                      <a href={archiveHref} className="btn btn-sm btn-outline">
                        <Archive size={14} /> Usar Versão {release.id}
                      </a>
                    ) : null}

                    <a
                      href={githubTreeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-outline"
                    >
                      Código ({release.ref.slice(0, 7)}) <ArrowUpRight size={13} />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
