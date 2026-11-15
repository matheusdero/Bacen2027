import React, { useMemo, useRef, useState } from 'react';
import {
  AlertTriangle,
  Award,
  BookOpen,
  CheckCircle2,
  Cloud,
  Compass,
  Download,
  FileSpreadsheet,
  Flame,
  ListChecks,
  RotateCcw,
  Target,
  TrendingUp,
  Upload,
  Wand2,
  X,
} from 'lucide-react';
import {
  EXAM_BENCHMARKS_2024,
  KNOWLEDGE_LEVEL_LABELS,
  SUBJECTS,
} from '../data/benchmarks2024';
import { SYLLABUS_TOPICS } from '../data/syllabus';
import {
  AutoCalibrationResult,
  buildAdaptivePlan,
  classifyAccuracyTier,
  computeCebraspeScore,
  computeEditalEvolutionSummary,
  computeSubjectCalibrationFromExam,
  getTopicExamStats,
  getTopicPriorityOrder,
} from '../hooks/useTrainerState';
import {
  EvolutionMilestone,
  KnowledgeRating,
  QuestionItem,
  StudyDayRecord,
  SubjectId,
  SyncStateStatus,
  TrainerProfile,
} from '../types';
import { EvolutionTimelineCard } from './EvolutionTimelineCard';
import { StudyConsistencyCard } from './StudyConsistencyCard';

interface TrainerDashboardProps {
  profile: TrainerProfile;
  todayStudyProgress: StudyDayRecord;
  allQuestions: QuestionItem[];
  syncStatus: SyncStateStatus;
  githubLogin?: string;
  onOpenSyncModal: () => void;
  onUpdateField: <K extends keyof TrainerProfile>(field: K, value: TrainerProfile[K]) => void;
  onSetRating: (subjectId: SubjectId, rating: KnowledgeRating) => void;
  onAutoCalibrate: () => AutoCalibrationResult;
  onAddMilestone: (
    allQuestions: QuestionItem[],
    label: string,
    source?: EvolutionMilestone['source'],
    overrideExam?: { netScore: number; answeredCount: number },
    note?: string
  ) => void;
  onDeleteMilestone: (milestoneId: string) => void;
  onExportJson: () => void;
  onImportJson: (text: string) => boolean;
  onReset: () => void;
  onNavigateToSyllabus: (subjectId?: SubjectId, topicId?: string) => void;
  onNavigateToEditalTracker: () => void;
  onNavigateToQuestion: (questionId: number) => void;
  onNavigateToDiscursivas: () => void;
  onNavigateToSimulator: () => void;
}

export const TrainerDashboard: React.FC<TrainerDashboardProps> = ({
  profile,
  todayStudyProgress,
  allQuestions,
  syncStatus,
  githubLogin,
  onOpenSyncModal,
  onUpdateField,
  onSetRating,
  onAutoCalibrate,
  onAddMilestone,
  onDeleteMilestone,
  onExportJson,
  onImportJson,
  onReset,
  onNavigateToSyllabus,
  onNavigateToEditalTracker,
  onNavigateToQuestion,
  onNavigateToDiscursivas,
  onNavigateToSimulator,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [importFeedback, setImportFeedback] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [calibrationNotice, setCalibrationNotice] = useState<AutoCalibrationResult | null>(null);

  const questionMap = useMemo(
    () => new Map<number, QuestionItem>(allQuestions.map((q) => [q.id, q])),
    [allQuestions]
  );

  const calibrationMap = useMemo(
    () => computeSubjectCalibrationFromExam(profile, allQuestions),
    [profile, allQuestions]
  );

  const calibratableSubjectsCount = useMemo(
    () => Object.values(calibrationMap).filter((c) => c.hasEnoughSample).length,
    [calibrationMap]
  );

  const editalSummary = useMemo(
    () => computeEditalEvolutionSummary(profile, allQuestions, true),
    [profile, allQuestions]
  );
  const adaptivePlan = useMemo(
    () => buildAdaptivePlan(profile, editalSummary),
    [profile, editalSummary]
  );
  const topPriorityTopics = useMemo(
    () => getTopicPriorityOrder(SYLLABUS_TOPICS, profile, allQuestions).slice(0, 6),
    [profile, allQuestions]
  );

  const p1Questions = useMemo(() => allQuestions.filter((q) => q.prova === 'P1'), [allQuestions]);
  const p2Questions = useMemo(() => allQuestions.filter((q) => q.prova === 'P2'), [allQuestions]);

  const overallStats = useMemo(
    () => computeCebraspeScore(allQuestions, profile.questionAttempts),
    [allQuestions, profile.questionAttempts]
  );
  const p1Stats = useMemo(
    () => computeCebraspeScore(p1Questions, profile.questionAttempts),
    [p1Questions, profile.questionAttempts]
  );
  const p2Stats = useMemo(
    () => computeCebraspeScore(p2Questions, profile.questionAttempts),
    [p2Questions, profile.questionAttempts]
  );

  const dominatedTopics = useMemo(
    () => SYLLABUS_TOPICS.filter((t) => profile.topicStatuses[t.id] === 'dominado').length,
    [profile.topicStatuses]
  );

  const trackBench = useMemo(() => {
    if (profile.targetTrack === 'PcD') {
      return {
        label: 'PcD (3 vagas imediatas / 8 CR)',
        cutoffObj: EXAM_BENCHMARKS_2024.realResultsEd10.PcD.cutoffNFPO,
        medianObj: EXAM_BENCHMARKS_2024.realResultsEd10.PcD.medianNFPO,
        immediateCutoffTotal: EXAM_BENCHMARKS_2024.realResultsEd10.PcD.pos3TotalProvisional,
        crCutoffTotal: EXAM_BENCHMARKS_2024.realResultsEd10.PcD.pos8TotalProvisional,
      };
    }
    if (profile.targetTrack === 'PP') {
      return {
        label: 'Pessoas Pretas / PP (10 imediatas / 30 CR)',
        cutoffObj: EXAM_BENCHMARKS_2024.realResultsEd10.PP.cutoffNFPO,
        medianObj: EXAM_BENCHMARKS_2024.realResultsEd10.PP.medianNFPO,
        immediateCutoffTotal: EXAM_BENCHMARKS_2024.realResultsEd10.PP.pos10TotalProvisional,
        crCutoffTotal: EXAM_BENCHMARKS_2024.realResultsEd10.PP.pos30TotalProvisional,
      };
    }
    return {
      label: 'Ampla Concorrência / AC (37 imediatas / 112 CR)',
      cutoffObj: EXAM_BENCHMARKS_2024.realResultsEd10.AC.cutoffNFPO,
      medianObj: EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianNFPO,
      immediateCutoffTotal: EXAM_BENCHMARKS_2024.realResultsEd10.AC.pos37TotalProvisional,
      crCutoffTotal: EXAM_BENCHMARKS_2024.realResultsEd10.AC.pos112TotalProvisional,
    };
  }, [profile.targetTrack]);

  const user2024TotalObj =
    (profile.score2024P1 ?? 0) + (profile.score2024P2 ?? 0);
  const has2024Scores =
    profile.score2024P1 !== undefined || profile.score2024P2 !== undefined;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = onImportJson(String(reader.result ?? ''));
      setImportFeedback(
        ok
          ? 'Backup restaurado com sucesso!'
          : 'Arquivo JSON inválido para restauração.'
      );
      window.setTimeout(() => setImportFeedback(null), 4000);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="view-stack">
      {/* Banner do Treinador */}
      <section className="coach-hero card">
        <div className="coach-hero-top">
          <div>
            <span className="eyebrow">
              Painel do Treinador · {EXAM_BENCHMARKS_2024.cargo}
            </span>
            <h1>Plano de Preparação Bacen 2027 — Engenharia Reversa da Prova 2024</h1>
            <p className="hero-subtitle">
              Calibre seu ponto de partida com base no seu desempenho em 2024 e no seu nível
              atual em cada disciplina. O plano recalcula automaticamente suas horas semanais
              pelo critério <strong>Peso Real na Prova × Lacuna de Conhecimento</strong>.
            </p>
          </div>
          <div className="hero-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={onNavigateToEditalTracker}
            >
              <ListChecks size={16} />
              Evolução do Edital ({editalSummary.completedItems}/{editalSummary.totalItems})
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => onNavigateToQuestion(1)}
            >
              <Compass size={16} />
              Lab de Questões (120 itens)
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={onNavigateToSimulator}
            >
              <Target size={16} />
              Simulado Cebraspe
            </button>
          </div>
        </div>

        {/* KPIs em 4 cartões */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">Evolução no Edital</div>
            <div className="kpi-value">
              {editalSummary.completedItems} / {editalSummary.totalItems} ({editalSummary.completionPercent}%)
            </div>
            <div className="kpi-meta">
              {editalSummary.totalQuestions > 0 && editalSummary.overallAccuracyPercent !== null
                ? `${editalSummary.totalQuestions} q. · ${editalSummary.overallAccuracyPercent.toFixed(1)}% acerto · ${dominatedTopics}/${SYLLABUS_TOPICS.length} aulas`
                : `Aulas concluídas: ${dominatedTopics}/${SYLLABUS_TOPICS.length}`}
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Questões 2024 Julgadas</div>
            <div className="kpi-value">
              {overallStats.answeredCount} / {allQuestions.length - overallStats.annulledCount}
            </div>
            <div className="kpi-meta">
              {overallStats.accuracyPercent !== null
                ? `Acerto: ${overallStats.accuracyPercent.toFixed(1)}% (${overallStats.correctCount}C · ${overallStats.wrongCount}E · ${overallStats.blankCount}B)`
                : 'Nenhuma questão marcada ainda'}
            </div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Nota Líquida Atual (P1+P2)</div>
            <div className="kpi-value">
              {overallStats.netScore.toFixed(2)} pts
            </div>
            <div className="kpi-meta">
              P1: {p1Stats.netScore.toFixed(1)} · P2: {p2Stats.netScore.toFixed(1)} (incl. +5,00 de anuladas)
            </div>
          </div>
          <div className="kpi-card highlight">
            <div className="kpi-label">Alvo Real {profile.targetTrack} (Ed. nº 10)</div>
            <div className="kpi-value">{trackBench.cutoffObj.toFixed(2)} obj.</div>
            <div className="kpi-meta">
              Mediana classificados: {trackBench.medianObj.toFixed(2)} · Imediatas total:{' '}
              {trackBench.immediateCutoffTotal.toFixed(2)}
            </div>
          </div>
        </div>
      </section>

      {/* Linha de Diagnóstico 2024 + Benchmarks Reais */}
      <div className="two-col-grid">
        <section className="card">
          <div className="card-header">
            <h2>
              <FileSpreadsheet size={18} /> Seu Diagnóstico &amp; Perfil de Estudo
            </h2>
            <span className="badge badge-info">Salvo localmente</span>
          </div>

          <div className="form-grid">
            <label className="field">
              <span>Seu nome / apelido</span>
              <input
                type="text"
                value={profile.candidateName}
                onChange={(e) => onUpdateField('candidateName', e.target.value)}
                placeholder="Ex.: Analista BCB 2027"
              />
            </label>

            <label className="field">
              <span>Modalidade de concorrência</span>
              <select
                value={profile.targetTrack}
                onChange={(e) =>
                  onUpdateField('targetTrack', e.target.value as 'AC' | 'PcD' | 'PP')
                }
              >
                <option value="AC">Ampla Concorrência (AC)</option>
                <option value="PP">Pessoas Pretas / Pardas (PP)</option>
                <option value="PcD">Pessoa com Deficiência (PcD)</option>
              </select>
            </label>

            <label className="field">
              <span>Horas líquidas por semana: {profile.weeklyHours}h</span>
              <input
                type="range"
                min={6}
                max={42}
                step={1}
                value={profile.weeklyHours}
                onChange={(e) => onUpdateField('weeklyHours', Number(e.target.value))}
              />
            </label>

            <label className="field checkbox-field">
              <input
                type="checkbox"
                checked={profile.did2024Exam}
                onChange={(e) => onUpdateField('did2024Exam', e.target.checked)}
              />
              <span>Fiz a prova BCB 2024 (Economia e Finanças)</span>
            </label>
          </div>

          {profile.did2024Exam && (
            <div className="scores-2024-box">
              <div className="subhead">Suas notas no Bacen 2024 (opcional — calibra a meta)</div>
              <div className="three-col-inputs">
                <label className="field">
                  <span>P1 (máx 50)</span>
                  <input
                    type="number"
                    step="0.5"
                    min={-25}
                    max={50}
                    placeholder="Ex: 34.5"
                    value={profile.score2024P1 ?? ''}
                    onChange={(e) =>
                      onUpdateField(
                        'score2024P1',
                        e.target.value === '' ? undefined : Number(e.target.value)
                      )
                    }
                  />
                </label>
                <label className="field">
                  <span>P2 (máx 70)</span>
                  <input
                    type="number"
                    step="0.5"
                    min={-35}
                    max={70}
                    placeholder="Ex: 42.0"
                    value={profile.score2024P2 ?? ''}
                    onChange={(e) =>
                      onUpdateField(
                        'score2024P2',
                        e.target.value === '' ? undefined : Number(e.target.value)
                      )
                    }
                  />
                </label>
                <label className="field">
                  <span>P3+P4 (máx 80)</span>
                  <input
                    type="number"
                    step="0.5"
                    min={0}
                    max={80}
                    placeholder="Ex: 60.0"
                    value={profile.score2024Disc ?? ''}
                    onChange={(e) =>
                      onUpdateField(
                        'score2024Disc',
                        e.target.value === '' ? undefined : Number(e.target.value)
                      )
                    }
                  />
                </label>
              </div>
              {has2024Scores && (
                <div className="coach-feedback-inline">
                  <strong>Leitura do Treinador:</strong> Sua objetiva em 2024 somou{' '}
                  <strong>{user2024TotalObj.toFixed(2)} pts</strong> contra o corte de{' '}
                  <strong>{trackBench.cutoffObj.toFixed(2)} pts</strong> para correção da
                  discursiva em {profile.targetTrack} (diferença de{' '}
                  <span
                    className={
                      user2024TotalObj >= trackBench.cutoffObj ? 'text-good' : 'text-warn'
                    }
                  >
                    {(user2024TotalObj - trackBench.cutoffObj >= 0 ? '+' : '') +
                      (user2024TotalObj - trackBench.cutoffObj).toFixed(2)}{' '}
                    pts
                  </span>
                  ).{' '}
                  {profile.score2024P1 !== undefined &&
                  profile.score2024P1 < EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP1
                    ? 'Atenção à P1: Português (25 itens) + Estatística P1 (10 itens) são alavancas rápidas de pontos líquidos!'
                    : 'Mantenha P1 alta e ataque os gargalos da P2 (Macro, Finanças, Econometria e COSIF).'}
                </div>
              )}
            </div>
          )}

          {/* Exportar / Importar Backup & Nuvem */}
          <div className="backup-row">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={onOpenSyncModal}
            >
              <Cloud size={15} />
              {syncStatus === 'synced' && githubLogin
                ? `Nuvem (@${githubLogin})`
                : syncStatus === 'conflict'
                ? 'Resolver Sync Nuvem'
                : 'Sincronizar no GitHub Gist'}
            </button>
            <button type="button" className="btn btn-outline" onClick={onExportJson}>
              <Download size={15} /> Exportar (.json)
            </button>
            <button
              type="button"
              className="btn btn-outline"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={15} /> Importar Backup
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="application/json"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            {!confirmReset ? (
              <button
                type="button"
                className="btn btn-ghost-danger"
                onClick={() => setConfirmReset(true)}
              >
                <RotateCcw size={15} /> Resetar
              </button>
            ) : (
              <div className="confirm-inline">
                <span>Apagar tudo?</span>
                <button
                  type="button"
                  className="btn btn-danger-sm"
                  onClick={() => {
                    onReset();
                    setConfirmReset(false);
                  }}
                >
                  Confirmar
                </button>
                <button
                  type="button"
                  className="btn btn-outline-sm"
                  onClick={() => setConfirmReset(false)}
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
          {importFeedback && <div className="toast-inline">{importFeedback}</div>}
        </section>

        {/* Régua Real de Aprovação 2024 */}
        <section className="card">
          <div className="card-header">
            <h2>
              <Award size={18} /> Régua Oficial do Bacen 2024 (Cargo 1 — Ed. nº 10)
            </h2>
            <span className="badge">{EXAM_BENCHMARKS_2024.applicantsTotal.toLocaleString('pt-BR')} inscritos</span>
          </div>

          <div className="bench-summary-list">
            <div className="bench-row">
              <span>Corte mínimos do Edital</span>
              <strong>
                P1 ≥ 10,00 · P2 ≥ 21,00 · Obj ≥ 36,00 · Disc ≥ 40,00
              </strong>
            </div>
            <div className="bench-row">
              <span>Corte real 161ª posição AC (ir p/ discursiva)</span>
              <strong>{EXAM_BENCHMARKS_2024.realResultsEd10.AC.cutoffNFPO.toFixed(2)} / 120 pts</strong>
            </div>
            <div className="bench-row">
              <span>Mediana dos 164 AC com discursiva corrigida</span>
              <strong>
                {EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianNFPO.toFixed(2)} pts (P1{' '}
                {EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP1.toFixed(2)} + P2{' '}
                {EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP2.toFixed(2)})
              </strong>
            </div>
            <div className="bench-row">
              <span>Mediana Discursivas AC (P3 30pts + P4 50pts)</span>
              <strong>
                P3: {EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP3.toFixed(2)} · P4:{' '}
                {EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP4.toFixed(2)}
              </strong>
            </div>
            <div className="bench-row">
              <span>Corte Vagas Imediatas (#37 AC / #10 PP / #3 PcD)</span>
              <strong>
                164,05 AC · 154,80 PP · 160,69 PcD (de 200 pts)
              </strong>
            </div>
            <div className="bench-row">
              <span>Corte Cadastro Reserva (#112 AC / #30 PP / #8 PcD)</span>
              <strong>149,81 AC · 142,52 PP · 138,56 PcD</strong>
            </div>
          </div>

          <div className="coach-callout">
            <AlertTriangle size={18} />
            <div>
              <strong>Insight crucial do Treinador sobre a regra Cebraspe (+1 / -0,50):</strong>{' '}
              Na AC de 2024, o corte real da objetiva (<strong>84,50</strong>) foi 48,5 pontos acima do
              mínimo formal do edital (36,00). Com P1+P2 = 120 itens, chutar sem critério destrói a nota:
              cada erro anula meio acerto. Deixar 12–18 itens duvidosos em branco e acertar ~92–96
              coloca você na disputa pelas <strong>vagas imediatas</strong>!
            </div>
          </div>
        </section>
      </div>

      {/* Frequência de Estudo Real (Dias Validados & Calendário) */}
      <StudyConsistencyCard
        studyDays={profile.studyDays}
        todayProgress={todayStudyProgress}
      />

      {/* Curva de Evolução Temporal & Marcos */}
      <EvolutionTimelineCard
        profile={profile}
        allQuestions={allQuestions}
        editalSummary={editalSummary}
        overallStats={overallStats}
        onAddMilestone={onAddMilestone}
        onDeleteMilestone={onDeleteMilestone}
      />

      {/* Autoavaliação e Plano Semanal Adaptativo */}
      <section className="card">
        <div className="card-header">
          <div>
            <h2>
              <TrendingUp size={18} /> Calibração do Seu Nível Atual &amp; Distribuição Semanal ({profile.weeklyHours}h/semana)
            </h2>
            <span className="subtitle-right">
              Ajuste manual (0–4) ou calibre automaticamente pela sua nota líquida na Prova 2024
            </span>
          </div>
          <button
            type="button"
            className="btn btn-sm btn-primary"
            disabled={calibratableSubjectsCount === 0}
            title={
              calibratableSubjectsCount === 0
                ? 'Responda ao menos 3 questões válidas (C, E ou Em branco) em alguma matéria da Prova 2024 para liberar a calibração'
                : `Calibrar ${calibratableSubjectsCount} disciplina(s) automaticamente pela Prova 2024`
            }
            onClick={() => setCalibrationNotice(onAutoCalibrate())}
          >
            <Wand2 size={14} />
            Auto-calibrar 0–4 pela Prova 2024
            {calibratableSubjectsCount > 0 ? ` (${calibratableSubjectsCount})` : ''}
          </button>
        </div>

        {calibrationNotice && (
          <div className="calibration-banner" role="status">
            <div className="calibration-banner-content">
              <strong>
                <Wand2 size={14} /> Calibração concluída em {calibrationNotice.calibratedCount}{' '}
                disciplina(s) pela Prova 2024:
              </strong>{' '}
              {calibrationNotice.changes.length > 0 ? (
                <span>
                  {calibrationNotice.changes
                    .map(
                      (c) =>
                        `${c.subjectShortName}: ${c.previousRating} → ${c.newRating} (${c.netPercent.toFixed(
                          0
                        )}% líq. em ${c.attemptedCount} q.)`
                    )
                    .join(' · ')}
                </span>
              ) : (
                <span>Todos os níveis com amostra suficiente já estavam alinhados com seu desempenho em 2024.</span>
              )}
              {calibrationNotice.skippedCount > 0 && (
                <span className="muted-note">
                  {' '}
                  · {calibrationNotice.skippedCount} matéria(s) com menos de 3 questões em 2024 (e Discursivas) foram mantidas.
                </span>
              )}
            </div>
            <button
              type="button"
              className="btn btn-xs btn-outline"
              onClick={() => setCalibrationNotice(null)}
              aria-label="Fechar aviso de calibração"
            >
              <X size={13} />
            </button>
          </div>
        )}

        <div className="plan-table-wrap">
          <table className="plan-table">
            <thead>
              <tr>
                <th>Disciplina / Prova</th>
                <th>Seu Nível Prévio (0–4)</th>
                <th>Edital &amp; Desempenho</th>
                <th>Alocação Sugerida</th>
                <th>Orientação do Treinador</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {adaptivePlan.map((row) => {
                const calib = calibrationMap[row.subject.id];
                const suggested = calib?.suggestedRating ?? null;
                return (
                <tr key={row.subject.id}>
                  <td data-label="Disciplina" className="td-subject">
                    <div className="subj-cell">
                      <span
                        className="subj-dot"
                        style={{ backgroundColor: row.subject.accentColor }}
                      />
                      <div>
                        <div className="subj-name">{row.subject.name}</div>
                        <div className="subj-meta">
                          {row.subject.prova} · {row.subject.weightLabel}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td data-label="Nível Prévio (0–4)" className="td-rating">
                    <div className="rating-pills" role="group" aria-label={`Nível em ${row.subject.name}`}>
                      {([0, 1, 2, 3, 4] as KnowledgeRating[]).map((lvl) => (
                        <button
                          key={lvl}
                          type="button"
                          className={`rating-pill ${row.rating === lvl ? 'active' : ''}`}
                          style={
                            row.rating === lvl
                              ? {
                                  backgroundColor: KNOWLEDGE_LEVEL_LABELS[lvl].color,
                                  borderColor: KNOWLEDGE_LEVEL_LABELS[lvl].color,
                                  color: '#fff',
                                }
                              : undefined
                          }
                          title={KNOWLEDGE_LEVEL_LABELS[lvl].label}
                          onClick={() => onSetRating(row.subject.id, lvl)}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                    <div className="rating-caption">
                      {KNOWLEDGE_LEVEL_LABELS[row.rating].short}
                      {calib?.hasEnoughSample && suggested !== null && calib.netPercent !== null && (
                        <>
                          {' · '}
                          {suggested !== row.rating ? (
                            <button
                              type="button"
                              className="calib-suggest-link"
                              title={`Aplicar nível ${suggested} (${KNOWLEDGE_LEVEL_LABELS[suggested].short}) com base nos ${calib.attemptedCount} itens de 2024`}
                              onClick={() => onSetRating(row.subject.id, suggested)}
                            >
                              2024 sugere {suggested} ({calib.netPercent.toFixed(0)}% líq.)
                            </button>
                          ) : (
                            <span className="calib-aligned-note">
                              alinhado a 2024 ({calib.netPercent.toFixed(0)}% líq.)
                            </span>
                          )}
                        </>
                      )}
                    </div>
                  </td>
                  <td data-label="Edital & Desempenho" className="td-edital">
                    <div className="dash-edital-cell">
                      <span className="topic-progress-chip">
                        {row.editalDoneCount}/{row.editalTotalCount} itens
                      </span>
                      {row.editalAccuracyPercent !== null ? (
                        <span
                          className={`tier-pill tier-${
                            classifyAccuracyTier(
                              row.editalAccuracyPercent,
                              row.editalQuestionsCount
                            ).tier
                          }`}
                        >
                          {row.editalAccuracyPercent.toFixed(1)}% ({row.editalQuestionsCount} q.)
                        </span>
                      ) : (
                        <span className="muted-note">
                          {row.topicsDone}/{row.topicsTotal} aulas
                        </span>
                      )}
                    </div>
                  </td>
                  <td data-label="Alocação Sugerida" className="td-hours">
                    <div className="hours-cell">
                      <strong>{row.recommendedWeeklyHours.toFixed(1)}h/sem</strong>
                      <span>({row.recommendedSharePercent}%)</span>
                    </div>
                  </td>
                  <td data-label="Orientação do Treinador" className="advice-cell td-advice">
                    {row.coachAdvice}
                  </td>
                  <td data-label="Ação" className="td-action">
                    {row.subject.id === 'discursivas' ? (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={onNavigateToDiscursivas}
                      >
                        Treinar P3/P4
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-sm btn-outline"
                        onClick={() => onNavigateToSyllabus(row.subject.id)}
                      >
                        Estudar
                      </button>
                    )}
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      {/* Próximos Passos Imediatos */}
      <section className="card">
        <div className="card-header">
          <h2>
            <Flame size={18} /> Fila de Ataque Imediato (Top 6 Tópicos por Lacuna × Incidência em 2024)
          </h2>
          <button
            type="button"
            className="btn btn-sm btn-outline"
            onClick={() => onNavigateToSyllabus()}
          >
            <BookOpen size={14} /> Ver Todo o Edital (37 tópicos)
          </button>
        </div>

        <div className="priority-cards-grid">
          {topPriorityTopics.map((topic) => {
            const subj = SUBJECTS.find((s) => s.id === topic.subjectId);
            const status = profile.topicStatuses[topic.id] ?? 'nao_iniciado';
            const examStats = getTopicExamStats(topic, profile, questionMap);
            return (
              <div key={topic.id} className="priority-topic-card">
                <div className="ptc-top">
                  <span
                    className="badge"
                    style={{
                      backgroundColor: `${subj?.accentColor ?? '#2563eb'}18`,
                      color: subj?.accentColor ?? '#2563eb',
                    }}
                  >
                    {subj?.shortName} · {topic.level}
                  </span>
                  <div className="ptc-pills">
                    {examStats.attempted > 0 && (
                      <span
                        className={`topic-exam-chip ${
                          examStats.wrong > 0 || examStats.blank > 0 ? 'has-misses' : 'all-right'
                        }`}
                        title="Seu desempenho neste tópico nas questões válidas de 2024"
                      >
                        2024: {examStats.right}C · {examStats.wrong}E
                        {examStats.blank > 0 ? ` · ${examStats.blank}B` : ''}
                      </span>
                    )}
                    <span className={`status-pill status-${status}`}>
                      {status === 'nao_iniciado'
                        ? 'Não iniciado'
                        : status === 'em_estudo'
                        ? 'Em estudo'
                        : status === 'revisar'
                        ? 'Revisar'
                        : 'Dominado'}
                    </span>
                  </div>
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.summary}</p>
                <div className="ptc-prereq">
                  <strong>Pré-requisito:</strong> {topic.prerequisites[0]}
                </div>
                <div className="ptc-actions">
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={() => onNavigateToSyllabus(topic.subjectId, topic.id)}
                  >
                    <CheckCircle2 size={14} /> Abrir Aula do Tópico
                  </button>
                  {topic.relatedQuestionIds.length > 0 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-outline"
                      onClick={() => onNavigateToQuestion(topic.relatedQuestionIds[0])}
                    >
                      Questões ({topic.relatedQuestionIds.length})
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
