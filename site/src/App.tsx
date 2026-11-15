import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Compass,
  Download,
  FileEdit,
  History,
  LayoutDashboard,
  ListChecks,
  Target,
  X,
} from 'lucide-react';
import { CloudSyncModal } from './components/CloudSyncModal';
import { DisplayComfortControl } from './components/DisplayComfortControl';
import { DiscursiveWorkshopView } from './components/DiscursiveWorkshopView';
import { EditalTrackerView } from './components/EditalTrackerView';
import { QuestionLabView } from './components/QuestionLabView';
import { SimulatorView } from './components/SimulatorView';
import { SyllabusView } from './components/SyllabusView';
import { TrainerDashboard } from './components/TrainerDashboard';
import { CURRENT_RELEASE, VersionHistoryModal } from './components/VersionHistoryModal';
import { EDITAL_CHECKLIST } from './data/editalChecklist';
import { QUESTIONS_P1 } from './data/questionsP1';
import { QUESTIONS_P2 } from './data/questionsP2';
import { SYLLABUS_TOPICS } from './data/syllabus';
import { useDisplayComfort } from './hooks/useDisplayComfort';
import { useGitHubSync } from './hooks/useGitHubSync';
import { useStudyActivityTracker } from './hooks/useStudyActivityTracker';
import { useTrainerState } from './hooks/useTrainerState';
import { SubjectId } from './types';

type TabId = 'dashboard' | 'edital' | 'questions' | 'syllabus' | 'discursivas' | 'simulator';

const TAB_ORDER: Record<TabId, number> = {
  dashboard: 0,
  edital: 1,
  questions: 2,
  syllabus: 3,
  discursivas: 4,
  simulator: 5,
};

export const App: React.FC = () => {
  const {
    profile,
    localMutationSeq,
    updateProfileField,
    setSubjectRating,
    autoCalibrateRatingsFromExam,
    setTopicStatus,
    recordQuestionAttempt,
    toggleQuestionFlag,
    setQuestionNote,
    startNewExamRound,
    setDiscursiveDraft,
    toggleEditalItemCompleted,
    setEditalItemStats,
    addEditalPracticeBatch,
    clearEditalItemProgress,
    addEvolutionMilestone,
    deleteEvolutionMilestone,
    recordStudyHeartbeat,
    applyCloudProfile,
    exportProfileJson,
    importProfileJson,
    resetProgress,
  } = useTrainerState();

  const { todayProgress, justQualifiedNotice, dismissQualifiedNotice } = useStudyActivityTracker({
    studyDays: profile.studyDays,
    onRecordHeartbeat: recordStudyHeartbeat,
  });

  const {
    config: syncConfig,
    isConnected,
    status: syncStatus,
    statusNote,
    errorMsg: syncErrorMsg,
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
  } = useGitHubSync({
    profile,
    localMutationSeq,
    onApplyCloudProfile: applyCloudProfile,
  });

  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [tabDirection, setTabDirection] = useState<'forward' | 'backward' | 'none'>('none');

  const selectTab = (nextTab: TabId) => {
    if (nextTab === activeTab) return;
    setTabDirection(TAB_ORDER[nextTab] >= TAB_ORDER[activeTab] ? 'forward' : 'backward');
    setActiveTab(nextTab);
  };
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [versionModalOpen, setVersionModalOpen] = useState(false);
  const [navCollapsed, setNavCollapsed] = useState<boolean>(() => {
    try {
      return window.localStorage.getItem('bacen2027_nav_collapsed_v1') === '1';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('bacen2027_nav_collapsed_v1', navCollapsed ? '1' : '0');
    } catch {
      // ignora erro de armazenamento
    }
  }, [navCollapsed]);

  const {
    settings: comfortSettings,
    setTheme: setComfortTheme,
    setBrightness: setComfortBrightness,
    setWarmth: setComfortWarmth,
    applyPreset: applyComfortPreset,
    resetComfort,
  } = useDisplayComfort();
  const [syllabusSubject, setSyllabusSubject] = useState<SubjectId | 'all'>('all');
  const [syllabusTopicId, setSyllabusTopicId] = useState<string | null>(
    SYLLABUS_TOPICS[0]?.id ?? null
  );
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);

  const allQuestions = useMemo(() => [...QUESTIONS_P1, ...QUESTIONS_P2], []);

  const answeredCount = useMemo(
    () => Object.keys(profile.questionAttempts).length,
    [profile.questionAttempts]
  );

  const editalCompletedCount = useMemo(
    () => EDITAL_CHECKLIST.filter((item) => profile.editalProgress[item.id]?.completed).length,
    [profile.editalProgress]
  );

  const openSyllabusTopic = (subjectId?: SubjectId, topicId?: string) => {
    if (subjectId) {
      setSyllabusSubject(subjectId);
      if (topicId) {
        setSyllabusTopicId(topicId);
      } else {
        const first = SYLLABUS_TOPICS.find((t) => t.subjectId === subjectId);
        if (first) setSyllabusTopicId(first.id);
      }
    } else {
      setSyllabusSubject('all');
      if (topicId) setSyllabusTopicId(topicId);
    }
    selectTab('syllabus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuestionLab = (questionId: number) => {
    setActiveQuestionId(questionId);
    selectTab('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`app-shell ${navCollapsed ? 'nav-collapsed' : ''}`}>
      {navCollapsed && (
        <button
          type="button"
          className="nav-restore-fab"
          onClick={() => setNavCollapsed(false)}
          aria-label="Mostrar barra de navegação superior"
          title="Mostrar barra de navegação"
        >
          <ChevronDown size={14} />
          <span>Menu</span>
        </button>
      )}

      <header className="top-nav" hidden={navCollapsed}>
        <div className="top-nav-inner">
          <div className="brand-block">
            <div className="brand-mark">
              <img src="./favicon.svg" alt="BACEN 2027" className="brand-app-icon" />
            </div>
            <div>
              <div className="brand-title-row">
                <div className="brand-title">BACEN 2027</div>
                <button
                  type="button"
                  className="version-micro-btn"
                  onClick={() => setVersionModalOpen(true)}
                  title="Ver histórico de versões e edições anteriores"
                  aria-label={`Versão ${CURRENT_RELEASE.id} — abrir histórico`}
                >
                  {CURRENT_RELEASE.id}
                </button>
              </div>
              <div className="brand-sub">Auditor (ex-Analista) · Economia e Finanças</div>
            </div>
          </div>

          <nav className="nav-tabs" aria-label="Navegação principal">
            {(
              [
                {
                  id: 'dashboard' as TabId,
                  label: 'Painel & Plano',
                  icon: <LayoutDashboard size={17} className="nav-tab-icon" />,
                },
                {
                  id: 'edital' as TabId,
                  label: 'Evolução do Edital',
                  icon: <ListChecks size={17} className="nav-tab-icon" />,
                  counter: `${editalCompletedCount}/${EDITAL_CHECKLIST.length}`,
                },
                {
                  id: 'questions' as TabId,
                  label: 'Questões + Aulas',
                  icon: <Compass size={17} className="nav-tab-icon" />,
                  counter: `${answeredCount}/120`,
                },
                {
                  id: 'syllabus' as TabId,
                  label: 'Todo o Conteúdo',
                  icon: <BookOpen size={17} className="nav-tab-icon" />,
                },
                {
                  id: 'discursivas' as TabId,
                  label: 'Discursivas P3/P4',
                  icon: <FileEdit size={17} className="nav-tab-icon" />,
                },
                {
                  id: 'simulator' as TabId,
                  label: 'Simulado 2024',
                  icon: <Target size={17} className="nav-tab-icon" />,
                },
              ] satisfies Array<{
                id: TabId;
                label: string;
                icon: React.ReactNode;
                counter?: string;
              }>
            ).map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`nav-tab ${isActive ? 'active' : ''}`}
                  onClick={() => selectTab(item.id)}
                  aria-label={item.counter ? `${item.label} (${item.counter})` : item.label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.icon}
                  <span className="nav-tab-expand">
                    <span className="nav-tab-expand-inner">
                      <span>{item.label}</span>
                      {item.counter && <span className="nav-counter">{item.counter}</span>}
                    </span>
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="top-nav-actions">
            <DisplayComfortControl
              settings={comfortSettings}
              onChangeTheme={setComfortTheme}
              onChangeBrightness={setComfortBrightness}
              onChangeWarmth={setComfortWarmth}
              onApplyPreset={applyComfortPreset}
              onReset={resetComfort}
            />

            {(() => {
              const displayName = profile.candidateName || 'Matheus Torrente';
              const initials =
                displayName
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0].toUpperCase())
                  .join('') || 'MT';
              const syncLabel =
                syncStatus === 'syncing'
                  ? 'Sincronizando com o GitHub Gist...'
                  : syncStatus === 'synced'
                  ? 'Sincronizado (Gist OK)'
                  : syncStatus === 'stale'
                  ? 'Desatualizado — outro aparelho salvou progresso mais recente'
                  : syncStatus === 'conflict'
                  ? 'Conflito de sincronização detectado'
                  : syncStatus === 'error'
                  ? 'Erro na sincronização'
                  : 'Local (clique para conectar GitHub Gist)';
              const tooltip = `${displayName} · ${syncLabel}`;

              return (
                <button
                  type="button"
                  className={`user-avatar-btn sync-pill-${syncStatus}`}
                  onClick={() => setSyncModalOpen(true)}
                  title={tooltip}
                  aria-label={tooltip}
                >
                  <span className="user-initials">{initials}</span>
                </button>
              );
            })()}

            <button
              type="button"
              className="nav-collapse-btn"
              onClick={() => setNavCollapsed(true)}
              aria-label="Recolher barra superior para modo foco"
              title="Recolher barra superior (Modo Foco)"
            >
              <ChevronUp size={16} />
            </button>
          </div>
        </div>
      </header>

      <main className="main-container">
        {(syncStatus === 'stale' || syncStatus === 'conflict') &&
          pendingConflict &&
          !staleBannerMinimized && (
            <div className="sync-stale-banner" role="alert">
              <div className="sync-stale-copy">
                <strong>
                  <AlertTriangle size={16} />{' '}
                  {syncStatus === 'stale'
                    ? 'Este aparelho não está na versão mais recente do seu estudo'
                    : 'Conflito de sincronização detectado'}
                </strong>
                <span>
                  {pendingConflict.remoteDeviceLabel ? (
                    <>
                      Salvo por <strong>{pendingConflict.remoteDeviceLabel}</strong> em{' '}
                    </>
                  ) : (
                    'Último salvamento na nuvem em '
                  )}
                  {new Date(pendingConflict.remote.updatedAt).toLocaleString('pt-BR')} ·{' '}
                  Nuvem: {pendingConflict.remoteQuestionsCount}/120 q. e{' '}
                  {pendingConflict.remoteCompletedCount} edital (aqui: {answeredCount}/120 q. e{' '}
                  {editalCompletedCount} edital).
                </span>
              </div>
              <div className="sync-stale-actions">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={() => void resolveConflict('cloud')}
                >
                  <Download size={14} /> Baixar Versão Mais Recente
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => setSyncModalOpen(true)}
                >
                  Comparar / Opções
                </button>
                <button
                  type="button"
                  className="sync-stale-close"
                  onClick={() => setStaleBannerMinimized(true)}
                  aria-label="Minimizar aviso por enquanto"
                  title="Minimizar aviso (o envio automático continua pausado para segurança)"
                >
                  <X size={15} />
                </button>
              </div>
            </div>
          )}

        <div key={activeTab} className="tab-stage" data-direction={tabDirection}>
          {activeTab === 'dashboard' && (
            <TrainerDashboard
              profile={profile}
              todayStudyProgress={todayProgress}
              allQuestions={allQuestions}
              syncStatus={syncStatus}
              githubLogin={syncConfig.githubLogin}
              onOpenSyncModal={() => setSyncModalOpen(true)}
              onUpdateField={updateProfileField}
              onSetRating={setSubjectRating}
              onAutoCalibrate={() => autoCalibrateRatingsFromExam(allQuestions)}
              onAddMilestone={addEvolutionMilestone}
              onDeleteMilestone={deleteEvolutionMilestone}
              onExportJson={exportProfileJson}
              onImportJson={importProfileJson}
              onReset={resetProgress}
              onNavigateToEditalTracker={() => selectTab('edital')}
              onNavigateToSyllabus={openSyllabusTopic}
              onNavigateToQuestion={openQuestionLab}
              onNavigateToDiscursivas={() => selectTab('discursivas')}
              onNavigateToSimulator={() => selectTab('simulator')}
            />
          )}

          {activeTab === 'edital' && (
            <EditalTrackerView
              profile={profile}
              allQuestions={allQuestions}
              onToggleCompleted={toggleEditalItemCompleted}
              onSetStats={setEditalItemStats}
              onAddBatch={addEditalPracticeBatch}
              onClearItem={clearEditalItemProgress}
              onOpenTopicLesson={openSyllabusTopic}
              onOpenQuestion={openQuestionLab}
            />
          )}

          {activeTab === 'questions' && (
            <QuestionLabView
              allQuestions={allQuestions}
              activeQuestionId={activeQuestionId}
              attempts={profile.questionAttempts}
              currentExamRound={profile.currentExamRound ?? 1}
              examRoundsHistory={profile.examRoundsHistory ?? []}
              questionNotes={profile.questionNotes ?? {}}
              questionFlags={profile.questionFlags ?? {}}
              onSelectQuestion={setActiveQuestionId}
              onRecordAttempt={recordQuestionAttempt}
              onToggleFlag={toggleQuestionFlag}
              onSaveNote={setQuestionNote}
              onStartNewRound={(opts) => startNewExamRound(allQuestions, opts)}
              onOpenTopicLesson={openSyllabusTopic}
            />
          )}

          {activeTab === 'syllabus' && (
            <SyllabusView
              selectedSubjectId={syllabusSubject}
              selectedTopicId={syllabusTopicId}
              topicStatuses={profile.topicStatuses}
              allQuestions={allQuestions}
              onSelectSubject={setSyllabusSubject}
              onSelectTopic={setSyllabusTopicId}
              onSetTopicStatus={setTopicStatus}
              onOpenQuestion={openQuestionLab}
            />
          )}

          {activeTab === 'discursivas' && (
            <DiscursiveWorkshopView
              drafts={profile.discursiveDrafts}
              onSaveDraft={setDiscursiveDraft}
            />
          )}

          {activeTab === 'simulator' && (
            <SimulatorView
              allQuestions={allQuestions}
              attempts={profile.questionAttempts}
              currentExamRound={profile.currentExamRound ?? 1}
              examRoundsHistory={profile.examRoundsHistory ?? []}
              questionFlags={profile.questionFlags ?? {}}
              targetTrack={profile.targetTrack}
              onRecordAttempt={recordQuestionAttempt}
              onStartNewRound={(opts) => startNewExamRound(allQuestions, opts)}
              onSaveSimulatorMilestone={(label, overrideExam, note) =>
                addEvolutionMilestone(allQuestions, label, 'simulator', overrideExam, note)
              }
              onOpenQuestion={openQuestionLab}
            />
          )}
        </div>
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>
            Concurso Bacen 2027 autorizado pela Portaria MGI nº 5.508/2026 (170 vagas, sendo 100 para
            Auditor), estruturado sobre a base oficial dos Editais nº 1 a 10 e Provas P1/P2/P3/P4 de
            2024 (Economia e Finanças). Progresso salvo localmente e sincronizável via GitHub Gist.
          </span>
          <button
            type="button"
            className="footer-version-link"
            onClick={() => setVersionModalOpen(true)}
          >
            <History size={13} />
            Versão {CURRENT_RELEASE.id} ({CURRENT_RELEASE.edition}) · Histórico e versões anteriores
          </button>
        </div>
      </footer>

      <CloudSyncModal
        isOpen={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
        profile={profile}
        onUpdateCandidateName={(name) => updateProfileField('candidateName', name)}
        config={syncConfig}
        isConnected={isConnected}
        status={syncStatus}
        statusNote={statusNote}
        errorMsg={syncErrorMsg}
        pendingConflict={pendingConflict}
        lastCheckedAt={lastCheckedAt}
        onConnect={connectGitHub}
        onPull={() => pullFromCloud(false)}
        onPush={() => pushToCloud()}
        onCheckUpdates={() => checkForRemoteUpdates(true)}
        onResolveConflict={resolveConflict}
        onToggleAutoSync={toggleAutoSync}
        onUpdateDeviceLabel={updateDeviceLabel}
        onDisconnect={disconnectGitHub}
      />

      <VersionHistoryModal
        isOpen={versionModalOpen}
        onClose={() => setVersionModalOpen(false)}
      />

      {(syncToast || justQualifiedNotice) && (
        <div className="toast-stack">
          {justQualifiedNotice && (
            <div className="sync-toast study-qualified-toast" role="status" aria-live="polite">
              <CalendarCheck2 size={15} />
              <span>{justQualifiedNotice}</span>
              <button
                type="button"
                className="sync-toast-close"
                onClick={dismissQualifiedNotice}
                aria-label="Fechar notificação de estudo"
              >
                <X size={13} />
              </button>
            </div>
          )}

          {syncToast && (
            <div className="sync-toast" role="status" aria-live="polite">
              <CheckCircle2 size={15} />
              <span>{syncToast}</span>
              <button
                type="button"
                className="sync-toast-close"
                onClick={dismissToast}
                aria-label="Fechar notificação"
              >
                <X size={13} />
              </button>
            </div>
          )}
        </div>
      )}

      <div className="comfort-warmth-overlay" aria-hidden="true" />
      <div className="comfort-dim-overlay" aria-hidden="true" />
    </div>
  );
};

export default App;
