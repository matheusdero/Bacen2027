import { useCallback, useEffect, useRef, useState } from 'react';
import { GitHubSyncConfig, SyncStateStatus, TrainerProfile } from '../types';
import {
  findExistingTrainerGist,
  getDefaultDeviceLabel,
  pullProfileFromGist,
  pushProfileToGist,
  RemoteGistSnapshot,
  verifyGitHubToken,
} from '../utils/githubSync';

const SYNC_STORAGE_KEY = 'bacen_2027_github_sync_v1';
const CHECK_COOLDOWN_MS = 20_000;
const POLL_INTERVAL_MS = 90_000;

const EMPTY_SYNC_CONFIG: GitHubSyncConfig = {
  token: '',
  autoSync: true,
  deviceLabel: getDefaultDeviceLabel(),
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
      deviceLabel:
        typeof parsed.deviceLabel === 'string' && parsed.deviceLabel.trim()
          ? parsed.deviceLabel
          : getDefaultDeviceLabel(),
    };
  } catch {
    return EMPTY_SYNC_CONFIG;
  }
}

export function isLocalProfileEmpty(profile: TrainerProfile): boolean {
  const hasQuestions = Object.keys(profile.questionAttempts).length > 0;
  const hasRounds = (profile.examRoundsHistory?.length ?? 0) > 0;
  const hasQuestionNotes = Object.values(profile.questionNotes ?? {}).some((v) => Boolean(v?.trim()));
  const hasEdital = Object.values(profile.editalProgress).some(
    (p) => p.completed || p.questionsDone > 0 || (p.history?.length ?? 0) > 0
  );
  const hasTopics = Object.values(profile.topicStatuses).some((s) => s !== 'nao_iniciado');
  const hasMilestones = (profile.evolutionHistory?.length ?? 0) > 0;
  const hasQualifiedStudyDays = Object.values(profile.studyDays ?? {}).some((d) => d?.qualified);
  const hasDrafts =
    Boolean(profile.discursiveDrafts?.P3?.trim()) ||
    Boolean(profile.discursiveDrafts?.P4?.trim());
  return (
    !hasQuestions &&
    !hasRounds &&
    !hasQuestionNotes &&
    !hasEdital &&
    !hasTopics &&
    !hasMilestones &&
    !hasQualifiedStudyDays &&
    !hasDrafts
  );
}

export interface PendingSyncConflict {
  remote: RemoteGistSnapshot;
  remoteCompletedCount: number;
  remoteQuestionsCount: number;
  remoteMilestonesCount: number;
  remoteDeviceLabel?: string;
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
  const [lastCheckedAt, setLastCheckedAt] = useState<string | null>(null);
  const [syncToast, setSyncToast] = useState<string | null>(null);
  const [staleBannerMinimized, setStaleBannerMinimized] = useState(false);

  const profileRef = useRef(profile);
  profileRef.current = profile;

  const configRef = useRef(config);
  configRef.current = config;

  const statusRef = useRef(status);
  statusRef.current = status;

  const mutationSeqRef = useRef(localMutationSeq);
  mutationSeqRef.current = localMutationSeq;

  const inFlightRef = useRef(false);
  const lastPushedSeqRef = useRef(0);
  const lastCheckMsRef = useRef(0);
  const toastTimerRef = useRef<number | null>(null);

  const showToast = useCallback((message: string) => {
    setSyncToast(message);
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setSyncToast(null);
      toastTimerRef.current = null;
    }, 4200);
  }, []);

  const dismissToast = useCallback(() => {
    setSyncToast(null);
    if (toastTimerRef.current !== null) {
      window.clearTimeout(toastTimerRef.current);
      toastTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current !== null) {
        window.clearTimeout(toastTimerRef.current);
      }
    };
  }, []);

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
      remoteDeviceLabel: snapshot.envelope.sourceDeviceLabel,
    };
  };

  const pushToCloud = useCallback(
    async (explicitConfig?: GitHubSyncConfig) => {
      const cfg = explicitConfig ?? configRef.current;
      if (!cfg.token.trim()) return false;
      if (inFlightRef.current) return false;

      inFlightRef.current = true;
      setStatus('syncing');
      setErrorMsg(null);

      try {
        const res = await pushProfileToGist(
          cfg.token,
          profileRef.current,
          cfg.gistId,
          cfg.deviceLabel
        );
        lastPushedSeqRef.current = mutationSeqRef.current;
        lastCheckMsRef.current = Date.now();
        setConfig((prev) => ({
          ...prev,
          gistId: res.gistId,
          gistUrl: res.gistUrl,
          lastSyncedAt: res.updatedAt,
        }));
        setStatus('synced');
        setPendingConflict(null);
        setStaleBannerMinimized(false);
        const timeStr = new Date(res.updatedAt).toLocaleTimeString('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        });
        setStatusNote(`Nuvem atualizada às ${timeStr} (${cfg.deviceLabel || getDefaultDeviceLabel()})`);
        showToast(`Sincronizado na nuvem · ${timeStr}`);
        return true;
      } catch (err) {
        setStatus('error');
        setErrorMsg(err instanceof Error ? err.message : 'Falha ao enviar para o Gist.');
        return false;
      } finally {
        inFlightRef.current = false;
      }
    },
    [showToast]
  );

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
        lastPushedSeqRef.current = mutationSeqRef.current;
        lastCheckMsRef.current = Date.now();
        setLastCheckedAt(new Date().toISOString());
        setConfig((prev) => ({
          ...prev,
          gistUrl: snapshot.gistUrl,
          lastSyncedAt: snapshot.updatedAt,
        }));
        setStatus('synced');
        setPendingConflict(null);
        setStaleBannerMinimized(false);
        const origin = snapshot.envelope.sourceDeviceLabel
          ? ` de ${snapshot.envelope.sourceDeviceLabel}`
          : '';
        setStatusNote(
          `Baixado da nuvem${origin} (salvo em ${new Date(snapshot.updatedAt).toLocaleString('pt-BR')})`
        );
        showToast(`Progresso atualizado da nuvem${origin}!`);
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
    [onApplyCloudProfile, showToast]
  );

  const checkForRemoteUpdates = useCallback(
    async (force = false) => {
      const cfg = configRef.current;
      if (!cfg.token.trim() || !cfg.gistId) return false;
      if (inFlightRef.current) return false;
      if (!force && Date.now() - lastCheckMsRef.current < CHECK_COOLDOWN_MS) {
        return false;
      }

      inFlightRef.current = true;
      lastCheckMsRef.current = Date.now();

      try {
        const snapshot = await pullProfileFromGist(cfg.token, cfg.gistId);
        const checkedIso = new Date().toISOString();
        setLastCheckedAt(checkedIso);

        const remoteMs = Date.parse(snapshot.updatedAt) || 0;
        const localSyncMs = cfg.lastSyncedAt ? Date.parse(cfg.lastSyncedAt) || 0 : 0;

        if (remoteMs > localSyncMs + 2000) {
          const summary = summarizeRemote(snapshot);
          const origin = summary.remoteDeviceLabel
            ? ` por ${summary.remoteDeviceLabel}`
            : ' em outro dispositivo';
          setPendingConflict(summary);
          setStatus('stale');
          setStaleBannerMinimized(false);
          setStatusNote(
            `Versão mais recente encontrada na nuvem (salva${origin} em ${new Date(
              snapshot.updatedAt
            ).toLocaleString('pt-BR')}).`
          );
          if (force) {
            showToast(`Atualização disponível${origin}!`);
          }
          return true;
        }

        if (statusRef.current === 'stale' || statusRef.current === 'error') {
          setPendingConflict(null);
          setStatus('synced');
        }
        if (force) {
          setStatusNote(
            `Tudo em dia com a nuvem (verificado às ${new Date().toLocaleTimeString('pt-BR')}).`
          );
          showToast('Este aparelho já está na versão mais recente!');
        }
        return false;
      } catch (err) {
        if (force) {
          setStatus('error');
          setErrorMsg(
            err instanceof Error ? err.message : 'Não foi possível verificar o Gist agora.'
          );
        }
        return false;
      } finally {
        inFlightRef.current = false;
      }
    },
    [showToast]
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
        const deviceLabel = configRef.current.deviceLabel || getDefaultDeviceLabel();

        if (targetGistId) {
          const snapshot = await pullProfileFromGist(token, targetGistId);
          lastCheckMsRef.current = Date.now();
          setLastCheckedAt(new Date().toISOString());
          const baseCfg: GitHubSyncConfig = {
            token,
            gistId: snapshot.gistId,
            gistUrl: snapshot.gistUrl,
            githubLogin: user.login,
            githubAvatarUrl: user.avatarUrl,
            autoSync: configRef.current.autoSync,
            lastSyncedAt: snapshot.updatedAt,
            deviceLabel,
          };

          if (isLocalProfileEmpty(profileRef.current)) {
            onApplyCloudProfile(snapshot.envelope.profile);
            lastPushedSeqRef.current = mutationSeqRef.current;
            setConfig(baseCfg);
            setStatus('synced');
            setPendingConflict(null);
            setStaleBannerMinimized(false);
            setStatusNote(
              `Conectado como @${user.login} e progresso restaurado do Gist privado!`
            );
            showToast('Progresso restaurado do Gist privado!');
          } else {
            setConfig({
              ...baseCfg,
              lastSyncedAt: configRef.current.lastSyncedAt,
            });
            setPendingConflict(summarizeRemote(snapshot));
            setStatus('conflict');
            setStaleBannerMinimized(false);
            setStatusNote(
              `Encontramos progresso salvo no Gist de @${user.login} e também dados locais neste aparelho.`
            );
          }
        } else {
          const created = await pushProfileToGist(
            token,
            profileRef.current,
            undefined,
            deviceLabel
          );
          lastPushedSeqRef.current = mutationSeqRef.current;
          lastCheckMsRef.current = Date.now();
          setLastCheckedAt(new Date().toISOString());
          setConfig({
            token,
            gistId: created.gistId,
            gistUrl: created.gistUrl,
            githubLogin: user.login,
            githubAvatarUrl: user.avatarUrl,
            autoSync: configRef.current.autoSync,
            lastSyncedAt: created.updatedAt,
            deviceLabel,
          });
          setStatus('synced');
          setPendingConflict(null);
          setStaleBannerMinimized(false);
          setStatusNote(
            `Conectado como @${user.login}! Novo Gist privado criado para Matheus Torrente.`
          );
          showToast('Novo Gist privado conectado!');
        }
      } catch (err) {
        setStatus('error');
        setErrorMsg(err instanceof Error ? err.message : 'Erro ao conectar com o GitHub.');
      }
    },
    [onApplyCloudProfile, showToast]
  );

  const resolveConflict = useCallback(
    async (choice: 'cloud' | 'local') => {
      if (!pendingConflict) return;
      if (choice === 'cloud') {
        onApplyCloudProfile(pendingConflict.remote.envelope.profile);
        lastPushedSeqRef.current = mutationSeqRef.current;
        setConfig((prev) => ({
          ...prev,
          lastSyncedAt: pendingConflict.remote.updatedAt,
        }));
        setPendingConflict(null);
        setStaleBannerMinimized(false);
        setStatus('synced');
        setStatusNote('Progresso da nuvem aplicado neste aparelho.');
        showToast('Progresso da nuvem aplicado!');
      } else {
        setPendingConflict(null);
        setStaleBannerMinimized(false);
        await pushToCloud();
      }
    },
    [onApplyCloudProfile, pendingConflict, pushToCloud, showToast]
  );

  const toggleAutoSync = useCallback((enabled: boolean) => {
    setConfig((prev) => ({ ...prev, autoSync: enabled }));
  }, []);

  const updateDeviceLabel = useCallback((label: string) => {
    setConfig((prev) => ({ ...prev, deviceLabel: label }));
  }, []);

  const disconnectGitHub = useCallback(() => {
    setConfig(EMPTY_SYNC_CONFIG);
    setStatus('disconnected');
    setErrorMsg(null);
    setStatusNote(null);
    setPendingConflict(null);
    setLastCheckedAt(null);
    setStaleBannerMinimized(false);
    dismissToast();
    try {
      window.localStorage.removeItem(SYNC_STORAGE_KEY);
    } catch {
      // ignora
    }
  }, [dismissToast]);

  // Checagem automática ao abrir o site, ao voltar para a aba e periodicamente (90s)
  useEffect(() => {
    if (!isConnected) return;

    void checkForRemoteUpdates(false);

    const onFocusOrVisible = () => {
      if (document.visibilityState === 'visible') {
        void checkForRemoteUpdates(false);
      }
    };

    window.addEventListener('focus', onFocusOrVisible);
    document.addEventListener('visibilitychange', onFocusOrVisible);
    const intervalId = window.setInterval(() => {
      if (document.visibilityState === 'visible') {
        void checkForRemoteUpdates(false);
      }
    }, POLL_INTERVAL_MS);

    return () => {
      window.removeEventListener('focus', onFocusOrVisible);
      document.removeEventListener('visibilitychange', onFocusOrVisible);
      window.clearInterval(intervalId);
    };
  }, [checkForRemoteUpdates, isConnected]);

  // Auto-push com debounce de 2.5s apenas quando houve mutação local real e o aparelho não está desatualizado
  useEffect(() => {
    if (!config.token.trim() || !config.gistId || !config.autoSync) return;
    if (localMutationSeq === 0 || localMutationSeq === lastPushedSeqRef.current) return;
    if (status === 'conflict' || status === 'stale') return;

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
    lastCheckedAt,
    syncToast,
    staleBannerMinimized,
    setStaleBannerMinimized,
    dismissToast,
    connectGitHub,
    pullFromCloud,
    pushToCloud,
    checkForRemoteUpdates,
    resolveConflict,
    toggleAutoSync,
    updateDeviceLabel,
    disconnectGitHub,
  };
}
