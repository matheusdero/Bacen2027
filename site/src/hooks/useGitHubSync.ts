import { useCallback, useEffect, useRef, useState } from 'react';
import { GitHubSyncConfig, SyncStateStatus, TrainerProfile } from '../types';
import {
  findExistingTrainerGist,
  pullProfileFromGist,
  pushProfileToGist,
  RemoteGistSnapshot,
  verifyGitHubToken,
} from '../utils/githubSync';

const SYNC_STORAGE_KEY = 'bacen_2027_github_sync_v1';

const EMPTY_SYNC_CONFIG: GitHubSyncConfig = {
  token: '',
  autoSync: true,
};

function loadSyncConfig(): GitHubSyncConfig {
  try {
    const raw = window.localStorage.getItem(SYNC_STORAGE_KEY);
    if (!raw) return EMPTY_SYNC_CONFIG;
    const parsed = JSON.parse(raw) as Partial<GitHubSyncConfig>;
    return {
      ...EMPTY_SYNC_CONFIG,
      ...parsed,
      token: typeof parsed.token === 'string' ? parsed.token : '',
      autoSync: parsed.autoSync !== false,
    };
  } catch {
    return EMPTY_SYNC_CONFIG;
  }
}

export function isLocalProfileEmpty(profile: TrainerProfile): boolean {
  const hasQuestions = Object.keys(profile.questionAttempts).length > 0;
  const hasEdital = Object.values(profile.editalProgress).some(
    (p) => p.completed || p.questionsDone > 0 || (p.history?.length ?? 0) > 0
  );
  const hasTopics = Object.values(profile.topicStatuses).some((s) => s !== 'nao_iniciado');
  const hasMilestones = (profile.evolutionHistory?.length ?? 0) > 0;
  const hasDrafts =
    Boolean(profile.discursiveDrafts?.P3?.trim()) ||
    Boolean(profile.discursiveDrafts?.P4?.trim());
  return !hasQuestions && !hasEdital && !hasTopics && !hasMilestones && !hasDrafts;
}

export interface PendingSyncConflict {
  remote: RemoteGistSnapshot;
  remoteCompletedCount: number;
  remoteQuestionsCount: number;
  remoteMilestonesCount: number;
}

interface UseGitHubSyncArgs {
  profile: TrainerProfile;
  localMutationSeq: number;
  onApplyCloudProfile: (remoteProfile: Partial<TrainerProfile>) => void;
}

export function useGitHubSync({
  profile,
  localMutationSeq,
  onApplyCloudProfile,
}: UseGitHubSyncArgs) {
  const [config, setConfig] = useState<GitHubSyncConfig>(loadSyncConfig);
  const [status, setStatus] = useState<SyncStateStatus>(() =>
    config.token && config.gistId ? 'synced' : 'disconnected'
  );
  const [statusNote, setStatusNote] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pendingConflict, setPendingConflict] = useState<PendingSyncConflict | null>(null);

  const profileRef = useRef(profile);
  profileRef.current = profile;

  const configRef = useRef(config);
  configRef.current = config;

  const inFlightRef = useRef(false);
  const lastPushedSeqRef = useRef(0);

  useEffect(() => {
    try {
      window.localStorage.setItem(SYNC_STORAGE_KEY, JSON.stringify(config));
    } catch {
      // ignora erro de quota
    }
  }, [config]);

  const isConnected = Boolean(config.token.trim() && config.gistId);

  const summarizeRemote = (snapshot: RemoteGistSnapshot): PendingSyncConflict => {
    const p = snapshot.envelope.profile;
    const remoteCompletedCount = Object.values(p.editalProgress ?? {}).filter(
      (x) => x?.completed
    ).length;
    const remoteQuestionsCount = Object.keys(p.questionAttempts ?? {}).length;
    const remoteMilestonesCount = (p.evolutionHistory ?? []).length;
    return {
      remote: snapshot,
      remoteCompletedCount,
      remoteQuestionsCount,
      remoteMilestonesCount,
    };
  };

  const pushToCloud = useCallback(async (explicitConfig?: GitHubSyncConfig) => {
    const cfg = explicitConfig ?? configRef.current;
    if (!cfg.token.trim()) return false;
    if (inFlightRef.current) return false;

    inFlightRef.current = true;
    setStatus('syncing');
    setErrorMsg(null);

    try {
      const res = await pushProfileToGist(cfg.token, profileRef.current, cfg.gistId);
      setConfig((prev) => ({
        ...prev,
        gistId: res.gistId,
        gistUrl: res.gistUrl,
        lastSyncedAt: res.updatedAt,
      }));
      setStatus('synced');
      setPendingConflict(null);
      setStatusNote(`Nuvem atualizada às ${new Date(res.updatedAt).toLocaleTimeString('pt-BR')}`);
      return true;
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Falha ao enviar para o Gist.');
      return false;
    } finally {
      inFlightRef.current = false;
    }
  }, []);

  const pullFromCloud = useCallback(
    async (silentIfMissing = false) => {
      const cfg = configRef.current;
      if (!cfg.token.trim() || !cfg.gistId) return false;
      if (inFlightRef.current) return false;

      inFlightRef.current = true;
      setStatus('syncing');
      setErrorMsg(null);

      try {
        const snapshot = await pullProfileFromGist(cfg.token, cfg.gistId);
        onApplyCloudProfile(snapshot.envelope.profile);
        setConfig((prev) => ({
          ...prev,
          gistUrl: snapshot.gistUrl,
          lastSyncedAt: snapshot.updatedAt,
        }));
        setStatus('synced');
        setPendingConflict(null);
        setStatusNote(
          `Baixado da nuvem (salvo em ${new Date(snapshot.updatedAt).toLocaleString('pt-BR')})`
        );
        return true;
      } catch (err) {
        if (!silentIfMissing) {
          setStatus('error');
          setErrorMsg(err instanceof Error ? err.message : 'Falha ao baixar do Gist.');
        }
        return false;
      } finally {
        inFlightRef.current = false;
      }
    },
    [onApplyCloudProfile]
  );

  const connectGitHub = useCallback(
    async (rawToken: string, optionalGistId?: string) => {
      const token = rawToken.trim();
      if (!token) {
        setErrorMsg('Cole um Personal Access Token do GitHub.');
        return;
      }
      setStatus('syncing');
      setErrorMsg(null);
      setStatusNote(null);

      try {
        const user = await verifyGitHubToken(token);
        const targetGistId = optionalGistId?.trim() || (await findExistingTrainerGist(token));

        if (targetGistId) {
          const snapshot = await pullProfileFromGist(token, targetGistId);
          const baseCfg: GitHubSyncConfig = {
            token,
            gistId: snapshot.gistId,
            gistUrl: snapshot.gistUrl,
            githubLogin: user.login,
            githubAvatarUrl: user.avatarUrl,
            autoSync: configRef.current.autoSync,
            lastSyncedAt: snapshot.updatedAt,
          };

          if (isLocalProfileEmpty(profileRef.current)) {
            onApplyCloudProfile(snapshot.envelope.profile);
            setConfig(baseCfg);
            setStatus('synced');
            setPendingConflict(null);
            setStatusNote(
              `Conectado como @${user.login} e progresso restaurado do Gist privado!`
            );
          } else {
            setConfig({
              ...baseCfg,
              lastSyncedAt: configRef.current.lastSyncedAt,
            });
            setPendingConflict(summarizeRemote(snapshot));
            setStatus('conflict');
            setStatusNote(
              `Encontramos progresso salvo no Gist de @${user.login} e também dados locais neste aparelho.`
            );
          }
        } else {
          // Primeiro uso: cria um Gist privado automático com o perfil atual
          const created = await pushProfileToGist(token, profileRef.current);
          setConfig({
            token,
            gistId: created.gistId,
            gistUrl: created.gistUrl,
            githubLogin: user.login,
            githubAvatarUrl: user.avatarUrl,
            autoSync: configRef.current.autoSync,
            lastSyncedAt: created.updatedAt,
          });
          setStatus('synced');
          setPendingConflict(null);
          setStatusNote(
            `Conectado como @${user.login}! Novo Gist privado criado para Matheus Torrente.`
          );
        }
      } catch (err) {
        setStatus('error');
        setErrorMsg(err instanceof Error ? err.message : 'Erro ao conectar com o GitHub.');
      }
    },
    [onApplyCloudProfile]
  );

  const resolveConflict = useCallback(
    async (choice: 'cloud' | 'local') => {
      if (!pendingConflict) return;
      if (choice === 'cloud') {
        onApplyCloudProfile(pendingConflict.remote.envelope.profile);
        setConfig((prev) => ({
          ...prev,
          lastSyncedAt: pendingConflict.remote.updatedAt,
        }));
        setPendingConflict(null);
        setStatus('synced');
        setStatusNote('Progresso da nuvem aplicado neste aparelho.');
      } else {
        setPendingConflict(null);
        await pushToCloud();
      }
    },
    [onApplyCloudProfile, pendingConflict, pushToCloud]
  );

  const toggleAutoSync = useCallback((enabled: boolean) => {
    setConfig((prev) => ({ ...prev, autoSync: enabled }));
  }, []);

  const disconnectGitHub = useCallback(() => {
    setConfig(EMPTY_SYNC_CONFIG);
    setStatus('disconnected');
    setErrorMsg(null);
    setStatusNote(null);
    setPendingConflict(null);
    try {
      window.localStorage.removeItem(SYNC_STORAGE_KEY);
    } catch {
      // ignora
    }
  }, []);

  // Auto-push com debounce de 2.5s apenas quando houve mutação local real
  useEffect(() => {
    if (!config.token.trim() || !config.gistId || !config.autoSync) return;
    if (localMutationSeq === 0 || localMutationSeq === lastPushedSeqRef.current) return;
    if (status === 'conflict') return;

    const timer = window.setTimeout(() => {
      lastPushedSeqRef.current = localMutationSeq;
      void pushToCloud();
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [config.autoSync, config.gistId, config.token, localMutationSeq, pushToCloud, status]);

  return {
    config,
    isConnected,
    status,
    statusNote,
    errorMsg,
    pendingConflict,
    connectGitHub,
    pullFromCloud,
    pushToCloud,
    resolveConflict,
    toggleAutoSync,
    disconnectGitHub,
  };
}
