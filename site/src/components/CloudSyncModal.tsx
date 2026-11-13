import React, { useEffect, useState } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  Cloud,
  CloudOff,
  Download,
  ExternalLink,
  Eye,
  EyeOff,
  KeyRound,
  RefreshCw,
  Upload,
  UserCheck,
  X,
} from 'lucide-react';
import { EDITAL_CHECKLIST } from '../data/editalChecklist';
import { PendingSyncConflict } from '../hooks/useGitHubSync';
import { GitHubSyncConfig, SyncStateStatus, TrainerProfile } from '../types';

interface CloudSyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: TrainerProfile;
  onUpdateCandidateName: (name: string) => void;
  config: GitHubSyncConfig;
  isConnected: boolean;
  status: SyncStateStatus;
  statusNote: string | null;
  errorMsg: string | null;
  pendingConflict: PendingSyncConflict | null;
  onConnect: (token: string, gistId?: string) => Promise<void>;
  onPull: () => Promise<boolean>;
  onPush: () => Promise<boolean>;
  onResolveConflict: (choice: 'cloud' | 'local') => Promise<void>;
  onToggleAutoSync: (enabled: boolean) => void;
  onDisconnect: () => void;
}

export const CloudSyncModal: React.FC<CloudSyncModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateCandidateName,
  config,
  isConnected,
  status,
  statusNote,
  errorMsg,
  pendingConflict,
  onConnect,
  onPull,
  onPush,
  onResolveConflict,
  onToggleAutoSync,
  onDisconnect,
}) => {
  const [tokenInput, setTokenInput] = useState(config.token || '');
  const [gistIdInput, setGistIdInput] = useState(config.gistId || '');
  const [showToken, setShowToken] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setTokenInput(config.token || '');
    setGistIdInput(config.gistId || '');
  }, [config.gistId, config.token, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const localCompletedCount = EDITAL_CHECKLIST.filter(
    (item) => profile.editalProgress[item.id]?.completed
  ).length;
  const localQuestionsCount = Object.keys(profile.questionAttempts).length;
  const localMilestonesCount = (profile.evolutionHistory ?? []).length;

  const handleConnectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    void onConnect(tokenInput, gistIdInput || undefined);
  };

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cloud-sync-title"
      onClick={onClose}
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-wrap">
            <div className="modal-icon-badge">
              {isConnected ? <Cloud size={20} /> : <CloudOff size={20} />}
            </div>
            <div>
              <h2 id="cloud-sync-title">Perfil &amp; Nuvem (GitHub Gist Privado)</h2>
              <p className="muted-note">
                Sincronize seu estudo entre notebook, trabalho e celular sem servidor pago
              </p>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Fechar janela de sincronização"
          >
            <X size={18} />
          </button>
        </div>

        <div className="modal-body">
          {/* Bloco de Identificação do Usuário */}
          <div className="sync-user-banner">
            <div className="sync-avatar">
              {config.githubAvatarUrl ? (
                <img src={config.githubAvatarUrl} alt={profile.candidateName} />
              ) : (
                <span>
                  {(profile.candidateName || 'MT')
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map((w) => w[0].toUpperCase())
                    .join('')}
                </span>
              )}
            </div>
            <div className="sync-user-fields">
              <label className="field">
                <span>Usuário ativo na plataforma</span>
                <input
                  type="text"
                  value={profile.candidateName}
                  onChange={(e) => onUpdateCandidateName(e.target.value)}
                  placeholder="Matheus Torrente"
                />
              </label>
              <div className="sync-user-meta">
                <span>
                  <UserCheck size={14} /> {localCompletedCount}/{EDITAL_CHECKLIST.length} edital ·{' '}
                  {localQuestionsCount}/120 questões · {localMilestonesCount} marcos
                </span>
                {config.githubLogin && (
                  <span className="badge badge-info">GitHub: @{config.githubLogin}</span>
                )}
              </div>
            </div>
          </div>

          {errorMsg && (
            <div className="sync-alert sync-alert-error">
              <AlertTriangle size={17} />
              <div>{errorMsg}</div>
            </div>
          )}

          {statusNote && !errorMsg && (
            <div className="sync-alert sync-alert-info">
              <CheckCircle2 size={17} />
              <div>{statusNote}</div>
            </div>
          )}

          {/* Resolução de Conflito */}
          {pendingConflict && (
            <div className="conflict-box">
              <h3>
                <AlertTriangle size={17} /> Conflito encontrado: escolha qual versão manter
              </h3>
              <p className="muted-note">
                Existe um backup na sua conta do GitHub e também dados já marcados neste
                navegador. Escolha qual versão deve prevalecer:
              </p>
              <div className="conflict-compare">
                <div className="conflict-col">
                  <strong>Este Aparelho (Local)</strong>
                  <ul>
                    <li>
                      Edital: {localCompletedCount}/{EDITAL_CHECKLIST.length} itens
                    </li>
                    <li>Questões 2024: {localQuestionsCount}/120</li>
                    <li>Marcos históricos: {localMilestonesCount}</li>
                    <li>
                      Editado:{' '}
                      {profile.lastUpdatedAt
                        ? new Date(profile.lastUpdatedAt).toLocaleString('pt-BR')
                        : 'sem data'}
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline"
                    disabled={status === 'syncing'}
                    onClick={() => void onResolveConflict('local')}
                  >
                    <Upload size={14} /> Enviar Local para Nuvem
                  </button>
                </div>

                <div className="conflict-col conflict-col-remote">
                  <strong>Nuvem (GitHub Gist)</strong>
                  <ul>
                    <li>
                      Edital: {pendingConflict.remoteCompletedCount}/{EDITAL_CHECKLIST.length} itens
                    </li>
                    <li>Questões 2024: {pendingConflict.remoteQuestionsCount}/120</li>
                    <li>Marcos históricos: {pendingConflict.remoteMilestonesCount}</li>
                    <li>
                      Salvo em:{' '}
                      {new Date(pendingConflict.remote.updatedAt).toLocaleString('pt-BR')}
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    disabled={status === 'syncing'}
                    onClick={() => void onResolveConflict('cloud')}
                  >
                    <Download size={14} /> Baixar Nuvem para Este Aparelho
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Estado Conectado vs. Conectar */}
          {isConnected ? (
            <div className="connected-sync-panel">
              <div className="connected-meta-grid">
                <div>
                  <span className="muted-note">Status</span>
                  <div>
                    <strong>
                      {status === 'syncing'
                        ? 'Sincronizando...'
                        : status === 'error'
                        ? 'Atenção no último sync'
                        : 'Conectado ao Gist Privado'}
                    </strong>
                  </div>
                </div>
                <div>
                  <span className="muted-note">Última sincronização</span>
                  <div>
                    <strong>
                      {config.lastSyncedAt
                        ? new Date(config.lastSyncedAt).toLocaleString('pt-BR')
                        : 'Ainda não sincronizado'}
                    </strong>
                  </div>
                </div>
                <div>
                  <span className="muted-note">ID do Gist</span>
                  <div className="gist-id-row">
                    <code>{config.gistId}</code>
                    {config.gistUrl && (
                      <a
                        href={config.gistUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-link-sm"
                      >
                        Abrir <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <label className="toggle-pill">
                <input
                  type="checkbox"
                  checked={config.autoSync}
                  onChange={(e) => onToggleAutoSync(e.target.checked)}
                />
                <span>
                  Sincronizar automaticamente na nuvem (2,5s após marcar questão, edital ou marco)
                </span>
              </label>

              <div className="sync-actions-row">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={status === 'syncing'}
                  onClick={() => void onPush()}
                >
                  <Upload size={15} />
                  {status === 'syncing' ? 'Sincronizando...' : 'Salvar na Nuvem Agora'}
                </button>
                <button
                  type="button"
                  className="btn btn-outline"
                  disabled={status === 'syncing'}
                  onClick={() => void onPull()}
                >
                  <Download size={15} /> Puxar da Nuvem
                </button>
                <button
                  type="button"
                  className="btn btn-ghost-danger"
                  disabled={status === 'syncing'}
                  onClick={onDisconnect}
                >
                  Desconectar este aparelho
                </button>
              </div>
            </div>
          ) : (
            <form className="connect-gist-form" onSubmit={handleConnectSubmit}>
              <div className="gist-guide-box">
                <strong>
                  <KeyRound size={15} /> Como gerar seu Token no GitHub em 1 minuto (só faz 1 vez):
                </strong>
                <ol>
                  <li>
                    No GitHub, acesse{' '}
                    <strong>Settings → Developer settings → Personal access tokens → Tokens (classic)</strong>.
                  </li>
                  <li>
                    Clique em <strong>Generate new token (classic)</strong>, dê o nome{' '}
                    <code>bacen2027</code> e marque <strong>APENAS a caixinha &quot;gist&quot;</strong>.
                  </li>
                  <li>
                    Cole o token abaixo. O site criará (ou localizará automaticamente) um{' '}
                    <strong>Gist Privado</strong> na sua conta do GitHub.
                  </li>
                </ol>
                <p className="muted-note">
                  Segurança: seu token fica salvo apenas no navegador deste dispositivo e nunca é
                  gravado no Gist nem no arquivo de backup JSON.
                </p>
              </div>

              <label className="field">
                <span>GitHub Personal Access Token (escopo gist)</span>
                <div className="token-input-wrap">
                  <input
                    type={showToken ? 'text' : 'password'}
                    value={tokenInput}
                    onChange={(e) => setTokenInput(e.target.value)}
                    placeholder="ghp_xxxxxxxxxxxxxxxxxxxx ou github_pat_..."
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-outline"
                    onClick={() => setShowToken((v) => !v)}
                    aria-label={showToken ? 'Ocultar token' : 'Mostrar token'}
                  >
                    {showToken ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </label>

              <label className="field">
                <span>ID do Gist (opcional — deixe em branco para detectar/criar automático)</span>
                <input
                  type="text"
                  value={gistIdInput}
                  onChange={(e) => setGistIdInput(e.target.value)}
                  placeholder="Opcional: ex. a1b2c3d4e5f6..."
                />
              </label>

              <div className="sync-actions-row">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'syncing' || !tokenInput.trim()}
                >
                  <RefreshCw size={15} className={status === 'syncing' ? 'spin-icon' : ''} />
                  {status === 'syncing'
                    ? 'Conectando...'
                    : 'Conectar & Sincronizar Matheus Torrente'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
