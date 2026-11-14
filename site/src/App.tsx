import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  Cloud,
  CloudOff,
  Compass,
  FileEdit,
  History,
  LayoutDashboard,
  ListChecks,
  RefreshCw,
  ShieldCheck,
  Target,
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
import { useTrainerState } from './hooks/useTrainerState';
import { SubjectId } from './types';

type TabId = 'dashboard' | 'edital' | 'questions' | 'syllabus' | 'discursivas' | 'simulator';

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
    setDiscursiveDraft,
    toggleEditalItemCompleted,
    setEditalItemStats,
    addEditalPracticeBatch,
    clearEditalItemProgress,
    addEvolutionMilestone,
    deleteEvolutionMilestone,
    applyCloudProfile,
    exportProfileJson,
    importProfileJson,
    resetProgress,
  } = useTrainerState();

  const {
    config: syncConfig,
    isConnected,
    status: syncStatus,
    statusNote,
    errorMsg: syncErrorMsg,
    pendingConflict,
    connectGitHub,
    pullFromCloud,
    pushToCloud,
    resolveConflict,
    toggleAutoSync,
    disconnectGitHub,
  } = useGitHubSync({
    profile,
    localMutationSeq,
    onApplyCloudProfile: applyCloudProfile,
  });

  const [activeTab, setActiveTab] = useState<TabId>('dashboard');
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [versionModalOpen, setVersionModalOpen] = useState(false);

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
    setActiveTab('syllabus');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openQuestionLab = (questionId: number) => {
    setActiveQuestionId(questionId);
    setActiveTab('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-shell">
      <header className="top-nav">
        <div className="top-nav-inner">
          <div className="brand-block">
            <div className="brand-mark">
              <ShieldCheck size={20} />
            </div>
            <div>
              <div className="brand-title-row">
                <div className="brand-title">BACEN 2027 · Treinador Pessoal</div>
                <button
                  type="button"
                  className="version-pill-btn"
                  onClick={() => setVersionModalOpen(true)}
                  title="Ver histórico de alterações (Changelog) e versões anteriores"
                >
                  <History size={11} />
                  <span>{CURRENT_RELEASE.id}</span>
                </button>
              </div>
              <div className="brand-sub">
                Cargo 1 · Analista em Economia e Finanças · {CURRENT_RELEASE.edition}
              </div>
            </div>
          </div>

          <nav className="nav-tabs" aria-label="Navegação principal">
            <button
              type="button"
              className={`nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <LayoutDashboard size={16} />
              <span>Painel &amp; Plano</span>
            </button>

            <button
              type="button"
              className={`nav-tab ${activeTab === 'edital' ? 'active' : ''}`}
              onClick={() => setActiveTab('edital')}
            >
              <ListChecks size={16} />
              <span>Evolução do Edital</span>
              <span className="nav-counter">
                {editalCompletedCount}/{EDITAL_CHECKLIST.length}
              </span>
            </button>

            <button
              type="button"
              className={`nav-tab ${activeTab === 'questions' ? 'active' : ''}`}
              onClick={() => setActiveTab('questions')}
            >
              <Compass size={16} />
              <span>Questões + Aulas</span>
              <span className="nav-counter">{answeredCount}/120</span>
            </button>

            <button
              type="button"
              className={`nav-tab ${activeTab === 'syllabus' ? 'active' : ''}`}
              onClick={() => setActiveTab('syllabus')}
            >
              <BookOpen size={16} />
              <span>Todo o Conteúdo</span>
            </button>

            <button
              type="button"
              className={`nav-tab ${activeTab === 'discursivas' ? 'active' : ''}`}
              onClick={() => setActiveTab('discursivas')}
            >
              <FileEdit size={16} />
              <span>Discursivas P3/P4</span>
            </button>

            <button
              type="button"
              className={`nav-tab ${activeTab === 'simulator' ? 'active' : ''}`}
              onClick={() => setActiveTab('simulator')}
            >
              <Target size={16} />
              <span>Simulado 2024</span>
            </button>
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

            <button
              type="button"
              className={`user-sync-pill sync-pill-${syncStatus}`}
              onClick={() => setSyncModalOpen(true)}
              title="Gerenciar perfil e sincronização em nuvem (GitHub Gist)"
            >
              <span className="user-initials">
                {(profile.candidateName || 'MT')
                  .split(' ')
                  .filter(Boolean)
                  .slice(0, 2)
                  .map((w) => w[0].toUpperCase())
                  .join('')}
              </span>
              <span className="user-sync-text">
                <strong className="user-name-label">{profile.candidateName || 'Matheus Torrente'}</strong>
                <span className="user-sync-sub">
                  {syncStatus === 'syncing' ? (
                    <>
                      <RefreshCw size={11} className="spin-icon" /> Sincronizando...
                    </>
                  ) : syncStatus === 'synced' ? (
                    <>
                      <Cloud size={11} /> Gist OK
                    </>
                  ) : syncStatus === 'conflict' ? (
                    'Conflito Sync'
                  ) : syncStatus === 'error' ? (
                    'Erro Sync'
                  ) : (
                    <>
                      <CloudOff size={11} /> Local (Conectar Gist)
                    </>
                  )}
                </span>
              </span>
            </button>
          </div>
        </div>
      </header>

      <main className="main-container">
        {activeTab === 'dashboard' && (
          <TrainerDashboard
            profile={profile}
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
            onNavigateToEditalTracker={() => setActiveTab('edital')}
            onNavigateToSyllabus={openSyllabusTopic}
            onNavigateToQuestion={openQuestionLab}
            onNavigateToDiscursivas={() => setActiveTab('discursivas')}
            onNavigateToSimulator={() => setActiveTab('simulator')}
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
            onSelectQuestion={setActiveQuestionId}
            onRecordAttempt={recordQuestionAttempt}
            onToggleFlag={toggleQuestionFlag}
            onSaveNote={setQuestionNote}
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
            targetTrack={profile.targetTrack}
            onRecordAttempt={recordQuestionAttempt}
            onSaveSimulatorMilestone={(label, overrideExam, note) =>
              addEvolutionMilestone(allQuestions, label, 'simulator', overrideExam, note)
            }
            onOpenQuestion={openQuestionLab}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <span>
            Dados reais estruturados a partir dos Editais nº 1 a 10 e Provas P1/P2/P3/P4 do Concurso
            Banco Central do Brasil 2024 (Cargo 1 — Economia e Finanças). Progresso salvo localmente e
            sincronizável na nuvem via GitHub Gist Privado.
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
        onConnect={connectGitHub}
        onPull={() => pullFromCloud(false)}
        onPush={() => pushToCloud()}
        onResolveConflict={resolveConflict}
        onToggleAutoSync={toggleAutoSync}
        onDisconnect={disconnectGitHub}
      />

      <VersionHistoryModal
        isOpen={versionModalOpen}
        onClose={() => setVersionModalOpen(false)}
      />

      <div className="comfort-warmth-overlay" aria-hidden="true" />
      <div className="comfort-dim-overlay" aria-hidden="true" />
    </div>
  );
};

export default App;
