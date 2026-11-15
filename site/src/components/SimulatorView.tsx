import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  BookmarkPlus,
  CheckCircle2,
  Clock,
  Pause,
  Play,
  RotateCcw,
  Target,
  TrendingUp,
  XCircle,
  MinusCircle,
} from 'lucide-react';
import { EXAM_BENCHMARKS_2024, SUBJECTS } from '../data/benchmarks2024';
import { QUESTION_CONTEXTS } from '../data/contexts';
import {
  classifyRoundTransition,
  computeCebraspeScore,
  computeRoundComparisonSummary,
  getLatestPreviousRoundAttempt,
} from '../hooks/useTrainerState';
import { ExamRoundSnapshot, QuestionAttempt, QuestionItem, UserMark } from '../types';
import { ExamDiagram } from './ExamDiagrams';
import { MathText } from './MathText';

interface SimulatorViewProps {
  allQuestions: QuestionItem[];
  attempts: Record<number, QuestionAttempt>;
  currentExamRound: number;
  examRoundsHistory: ExamRoundSnapshot[];
  questionFlags: Record<number, boolean>;
  targetTrack: 'AC' | 'PcD' | 'PP';
  onRecordAttempt: (questionId: number, mark: UserMark, source?: 'lab' | 'simulator') => void;
  onStartNewRound: (options?: { keepFlags?: boolean }) => void;
  onSaveSimulatorMilestone: (
    label: string,
    overrideExam: { netScore: number; answeredCount: number },
    note?: string
  ) => void;
  onOpenQuestion: (questionId: number) => void;
}

type SimMode = 'p1' | 'p2' | 'full' | 'errors';

const MODE_CONFIG: Record<
  SimMode,
  { label: string; minutes: number; description: string }
> = {
  full: {
    label: 'Prova Completa (P1 + P2 · 120 itens)',
    minutes: 210, // 3h30 oficiais
    description: 'Simulação integral da manhã: 50 básicos + 70 específicos.',
  },
  p1: {
    label: 'Apenas P1 — Conhecimentos Básicos (50 itens)',
    minutes: 90,
    description: 'Português (25), Lógica/Estatística (10), Dir. Admin. (5) e Fundamentos (10).',
  },
  p2: {
    label: 'Apenas P2 — Economia e Finanças (70 itens)',
    minutes: 120,
    description: 'Macroeconomia (18), Microeconomia (10), Finanças (18), Econometria (12), COSIF (12).',
  },
  errors: {
    label: 'Caderno de Erros & Marcadas p/ Revisão',
    minutes: 45,
    description: 'Refaça exclusivamente os itens que você errou ou marcou para revisar.',
  },
};

function formatClock(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const pad = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

export const SimulatorView: React.FC<SimulatorViewProps> = ({
  allQuestions,
  attempts,
  currentExamRound,
  examRoundsHistory,
  questionFlags,
  targetTrack,
  onRecordAttempt,
  onStartNewRound,
  onSaveSimulatorMilestone,
  onOpenQuestion,
}) => {
  const [mode, setMode] = useState<SimMode>('p1');
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(MODE_CONFIG.p1.minutes * 60);
  const [examFinished, setExamFinished] = useState(false);
  const [useIsolatedSession, setUseIsolatedSession] = useState(true);
  const [syncToRound, setSyncToRound] = useState(true);
  const [sessionMarks, setSessionMarks] = useState<Record<number, QuestionAttempt>>({});
  const [milestoneSavedToast, setMilestoneSavedToast] = useState(false);
  const [confirmNewRoundOpen, setConfirmNewRoundOpen] = useState(false);
  const [keepFlagsOnNewRound, setKeepFlagsOnNewRound] = useState(true);

  const latestArchivedRound =
    examRoundsHistory.length > 0 ? examRoundsHistory[examRoundsHistory.length - 1] : null;

  useEffect(() => {
    setSecondsLeft(MODE_CONFIG[mode].minutes * 60);
    setRunning(false);
    setExamFinished(false);
  }, [mode]);

  useEffect(() => {
    if (!running) return;
    const id = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setRunning(false);
          setExamFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [running]);

  const activeQuestions = useMemo(() => {
    if (mode === 'p1') return allQuestions.filter((q) => q.prova === 'P1');
    if (mode === 'p2') return allQuestions.filter((q) => q.prova === 'P2');
    if (mode === 'errors') {
      return allQuestions.filter((q) => {
        const currAtt = attempts[q.id];
        const isCurrWrong =
          Boolean(currAtt) &&
          q.officialAnswer !== 'X' &&
          currAtt.mark !== 'B' &&
          currAtt.mark !== q.officialAnswer;
        const isFlagged = Boolean(questionFlags[q.id] ?? currAtt?.flaggedForReview);

        let unresolvedPrevWrong = false;
        if (!currAtt && latestArchivedRound && q.officialAnswer !== 'X') {
          const prevAtt = latestArchivedRound.attempts?.[q.id];
          unresolvedPrevWrong = Boolean(
            prevAtt && prevAtt.mark !== 'B' && prevAtt.mark !== q.officialAnswer
          );
        }

        return isCurrWrong || isFlagged || unresolvedPrevWrong;
      });
    }
    return allQuestions;
  }, [allQuestions, mode, attempts, questionFlags, latestArchivedRound]);

  const effectiveAttempts = useIsolatedSession ? sessionMarks : attempts;

  const stats = useMemo(
    () => computeCebraspeScore(activeQuestions, effectiveAttempts),
    [activeQuestions, effectiveAttempts]
  );

  const p1Stats = useMemo(
    () =>
      computeCebraspeScore(
        allQuestions.filter((q) => q.prova === 'P1'),
        effectiveAttempts
      ),
    [allQuestions, effectiveAttempts]
  );
  const p2Stats = useMemo(
    () =>
      computeCebraspeScore(
        allQuestions.filter((q) => q.prova === 'P2'),
        effectiveAttempts
      ),
    [allQuestions, effectiveAttempts]
  );

  const subjectBreakdown = useMemo(() => {
    return SUBJECTS.filter((s) => s.id !== 'discursivas')
      .map((subj) => {
        const qs = activeQuestions.filter((q) => q.subjectId === subj.id);
        if (qs.length === 0) return null;
        return {
          subject: subj,
          stats: computeCebraspeScore(qs, effectiveAttempts),
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }, [activeQuestions, effectiveAttempts]);

  const trackBench = useMemo(() => {
    if (targetTrack === 'PcD') return EXAM_BENCHMARKS_2024.realResultsEd10.PcD;
    if (targetTrack === 'PP') return EXAM_BENCHMARKS_2024.realResultsEd10.PP;
    return EXAM_BENCHMARKS_2024.realResultsEd10.AC;
  }, [targetTrack]);

  const handleMark = (qId: number, mark: UserMark) => {
    if (useIsolatedSession) {
      setSessionMarks((prev) => ({
        ...prev,
        [qId]: { mark, updatedAt: new Date().toISOString() },
      }));
    }
    if (!useIsolatedSession || syncToRound) {
      onRecordAttempt(qId, mark, 'simulator');
    }
  };

  const activeRoundStats = useMemo(
    () => computeCebraspeScore(allQuestions, attempts),
    [allQuestions, attempts]
  );

  const roundComparison = useMemo(() => {
    if (!latestArchivedRound) return null;
    return computeRoundComparisonSummary(activeQuestions, effectiveAttempts, latestArchivedRound);
  }, [activeQuestions, effectiveAttempts, latestArchivedRound]);

  const resetSession = () => {
    setSessionMarks({});
    setSecondsLeft(MODE_CONFIG[mode].minutes * 60);
    setRunning(false);
    setExamFinished(false);
  };

  return (
    <div className="view-stack">
      {/* Cabeçalho do Simulador */}
      <section className="card">
        <div className="card-header">
          <div>
            <span className="eyebrow">Simulador Cronometrado · Regra +1,00 / −0,50 / 0,00</span>
            <h2>Simulado Oficial &amp; Diagnóstico Contra a Nota de Corte 2024</h2>
          </div>

          <div className="timer-box">
            <Clock size={18} />
            <span className={`timer-digits ${secondsLeft < 600 ? 'timer-urgent' : ''}`}>
              {formatClock(secondsLeft)}
            </span>
            <button
              type="button"
              className="btn btn-sm btn-primary"
              onClick={() => setRunning((r) => !r)}
            >
              {running ? (
                <>
                  <Pause size={14} /> Pausar
                </>
              ) : (
                <>
                  <Play size={14} /> Iniciar
                </>
              )}
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline"
              onClick={resetSession}
              title="Zerar cronômetro e cartões desta sessão"
            >
              <RotateCcw size={14} /> Reiniciar
            </button>
            <button
              type="button"
              className="btn btn-sm btn-secondary"
              onClick={() => {
                setRunning(false);
                setExamFinished((v) => !v);
              }}
            >
              <Target size={14} /> {examFinished ? 'Continuar Prova' : 'Encerrar e Corrigir'}
            </button>
          </div>
        </div>

        <div className="sim-modes">
          {(Object.keys(MODE_CONFIG) as SimMode[]).map((m) => (
            <button
              key={m}
              type="button"
              className={`sim-mode-btn ${mode === m ? 'active' : ''}`}
              onClick={() => setMode(m)}
            >
              <strong>{MODE_CONFIG[m].label}</strong>
              <span>{MODE_CONFIG[m].description}</span>
            </button>
          ))}
        </div>

        <div className="sim-options-bar">
          <div className="sim-options-toggles">
            <label className="toggle-pill">
              <input
                type="checkbox"
                checked={useIsolatedSession}
                onChange={(e) => setUseIsolatedSession(e.target.checked)}
              />
              <span>Simulado limpo nesta sessão (sem pré-marcar histórico anterior)</span>
            </label>

            {useIsolatedSession && (
              <label className="toggle-pill">
                <input
                  type="checkbox"
                  checked={syncToRound}
                  onChange={(e) => setSyncToRound(e.target.checked)}
                />
                <span>Registrar marcações na Rodada {currentExamRound} do Painel</span>
              </label>
            )}
          </div>

          <div className="sim-round-actions">
            <span className="badge badge-primary">
              Rodada {currentExamRound} ({activeRoundStats.answeredCount}/120)
            </span>
            <button
              type="button"
              className="btn btn-sm btn-outline"
              onClick={() => setConfirmNewRoundOpen((v) => !v)}
              title="Arquivar rodada atual na Evolução Temporal e começar outra em branco"
            >
              <RotateCcw size={13} /> Nova Rodada
            </button>
          </div>
        </div>

        {confirmNewRoundOpen && (
          <div className="round-confirm-box">
            <div className="round-confirm-copy">
              <strong>Arquivar Rodada {currentExamRound} e iniciar Rodada {currentExamRound + 1} em branco?</strong>
              <p className="muted-note">
                {activeRoundStats.answeredCount > 0
                  ? `A Rodada ${currentExamRound} (${activeRoundStats.answeredCount}/120 questões · ${activeRoundStats.netScore.toFixed(2)} pts) será salva na Evolução Temporal antes de limpar as respostas para um novo ciclo.`
                  : `Iniciará a Rodada ${currentExamRound + 1} mantendo todas as anotações e rodadas já arquivadas.`}
              </p>
              <label className="toggle-pill">
                <input
                  type="checkbox"
                  checked={keepFlagsOnNewRound}
                  onChange={(e) => setKeepFlagsOnNewRound(e.target.checked)}
                />
                <span>Manter marcadores &quot;Revisar depois&quot;</span>
              </label>
            </div>
            <div className="round-confirm-actions">
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => {
                  onStartNewRound({ keepFlags: keepFlagsOnNewRound });
                  resetSession();
                  setConfirmNewRoundOpen(false);
                }}
              >
                <RotateCcw size={14} /> Confirmar Rodada {currentExamRound + 1}
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => setConfirmNewRoundOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Painel de Resultado / Correção */}
      {examFinished && (
        <section className="card sim-results-card">
          <div className="card-header">
            <h2>Resultado Oficial do Simulado vs. Régua Bacen 2024 ({targetTrack})</h2>
            <div className="sim-result-actions">
              <span className="badge badge-info">
                {stats.answeredCount} julgadas · {stats.annulledCount} anulada(s)
              </span>
              <button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={() => {
                  onSaveSimulatorMilestone(
                    `Simulado ${mode.toUpperCase()} (${stats.answeredCount} q.)`,
                    { netScore: stats.netScore, answeredCount: stats.answeredCount },
                    `${stats.correctCount}C · ${stats.wrongCount}E · ${stats.blankCount}B`
                  );
                  setMilestoneSavedToast(true);
                  window.setTimeout(() => setMilestoneSavedToast(false), 3500);
                }}
              >
                <BookmarkPlus size={14} />
                {milestoneSavedToast ? 'Salvo na Evolução!' : 'Salvar na Evolução Temporal'}
              </button>
            </div>
          </div>

          <div className="kpi-grid">
            <div className="kpi-card highlight">
              <div className="kpi-label">Nota Líquida da Seleção</div>
              <div className="kpi-value">{stats.netScore.toFixed(2)} pts</div>
              <div className="kpi-meta">
                {stats.correctCount} certas · {stats.wrongCount} erradas · {stats.blankCount} brancos
                {stats.annulledCount > 0 ? ` · +${stats.annulledCount} anulada(s)` : ''}
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Taxa de Acerto Líquida (sem brancos)</div>
              <div className="kpi-value">
                {stats.accuracyPercent !== null ? `${stats.accuracyPercent.toFixed(1)}%` : '—'}
              </div>
              <div className="kpi-meta">
                Cebraspe exige &gt; 33,4% só para não ficar negativo; competitividade real &gt; 80%!
              </div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Mínimos do Edital</div>
              <div className="kpi-value">
                {mode === 'p1'
                  ? p1Stats.netScore >= 10
                    ? 'Aprovado P1 (≥10)'
                    : 'Abaixo de 10 em P1'
                  : mode === 'p2'
                  ? p2Stats.netScore >= 21
                    ? 'Aprovado P2 (≥21)'
                    : 'Abaixo de 21 em P2'
                  : p1Stats.netScore >= 10 && p2Stats.netScore >= 21 && stats.netScore >= 36
                  ? 'Cumpre Mínimos'
                  : 'Reprovado no Mínimo'}
              </div>
              <div className="kpi-meta">P1 ≥ 10,00 · P2 ≥ 21,00 · P1+P2 ≥ 36,00</div>
            </div>

            <div className="kpi-card">
              <div className="kpi-label">Corte Discursiva {targetTrack} (2024)</div>
              <div className="kpi-value">{trackBench.cutoffNFPO.toFixed(2)} pts</div>
              <div className="kpi-meta">
                Mediana {targetTrack}: {trackBench.medianNFPO.toFixed(2)} · Máx: {trackBench.maxNFPO.toFixed(2)}
              </div>
            </div>
          </div>

          {latestArchivedRound && roundComparison && roundComparison.comparableCount > 0 && (
            <div className="sim-round-compare-strip">
              <div className="sim-round-compare-title">
                <TrendingUp size={16} />
                <span>
                  Comparativo com a {latestArchivedRound.label} (
                  {latestArchivedRound.netScore.toFixed(2)} pts):
                </span>
              </div>
              <div className="sim-round-compare-chips">
                <span className="round-chip chip-right">
                  {roundComparison.evolved} evolução(ões) (Erro/Branco → Acerto)
                </span>
                <span className="round-chip chip-neutral">
                  {roundComparison.maintained} acerto(s) mantido(s)
                </span>
                {roundComparison.regressed > 0 && (
                  <span className="round-chip chip-wrong">
                    {roundComparison.regressed} regressão(ões) (Acerto → Erro)
                  </span>
                )}
                {roundComparison.persistentWrong > 0 && (
                  <span className="round-chip chip-wrong">
                    {roundComparison.persistentWrong} erro(s) reincidente(s)
                  </span>
                )}
              </div>
            </div>
          )}

          <div className="plan-table-wrap">
            <table className="plan-table">
              <thead>
                <tr>
                  <th>Disciplina</th>
                  <th>Itens</th>
                  <th>Certas</th>
                  <th>Erradas</th>
                  <th>Brancos</th>
                  <th>Nota Líquida</th>
                </tr>
              </thead>
              <tbody>
                {subjectBreakdown.map(({ subject, stats: st }) => (
                  <tr key={subject.id}>
                    <td>
                      <span className="subj-dot" style={{ backgroundColor: subject.accentColor }} />{' '}
                      {subject.name}
                    </td>
                    <td>{st.totalItems}</td>
                    <td className="text-good">{st.correctCount}</td>
                    <td className="text-warn">{st.wrongCount}</td>
                    <td>{st.blankCount}</td>
                    <td>
                      <strong>{st.netScore.toFixed(2)}</strong>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Lista de Itens do Simulado */}
      {activeQuestions.length === 0 ? (
        <section className="card empty-state">
          <AlertCircle size={28} />
          <p>
            Seu Caderno de Erros e Revisão está vazio no momento! Resolva questões no Lab ou
            marque itens com o ícone de marcador para revisá-los aqui.
          </p>
        </section>
      ) : (
        <section className="sim-questions-list">
          {activeQuestions.map((q, index) => {
            const att = effectiveAttempts[q.id];
            const prevCtxId = index > 0 ? activeQuestions[index - 1].contextId : undefined;
            const showContextHere = Boolean(q.contextId && q.contextId !== prevCtxId);
            const ctx = q.contextId ? QUESTION_CONTEXTS[q.contextId] : undefined;
            const subj = SUBJECTS.find((s) => s.id === q.subjectId);

            return (
              <React.Fragment key={q.id}>
                {showContextHere && ctx && (
                  <div className="card sim-context-card">
                    <h3>{ctx.title}</h3>
                    {ctx.subtitle && <div className="ctx-sub">{ctx.subtitle}</div>}
                    {ctx.paragraphs?.map((p, i) => (
                      <p key={i}>
                        <MathText text={p} />
                      </p>
                    ))}
                    {ctx.table && (
                      <table className="ctx-table">
                        <thead>
                          <tr>
                            {ctx.table.headers.map((h, i) => (
                              <th key={i}>
                                <MathText text={h} />
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {ctx.table.rows.map((r, ri) => (
                            <tr key={ri}>
                              {r.map((c, ci) => (
                                <td key={ci}>
                                  <MathText text={c} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                    {ctx.diagramKey && <ExamDiagram diagramKey={ctx.diagramKey} />}
                  </div>
                )}

                <article className="card sim-item-card">
                  <div className="sim-item-top">
                    <span className="item-number-badge">
                      Item {q.id} ({q.prova}) · {subj?.shortName}
                    </span>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline"
                      onClick={() => onOpenQuestion(q.id)}
                    >
                      Abrir Aula da Questão →
                    </button>
                  </div>

                  {q.diagramKey && !showContextHere && (
                    <ExamDiagram diagramKey={q.diagramKey} />
                  )}

                  {q.command && (
                    <p className="q-command">
                      <MathText text={q.command} />
                    </p>
                  )}

                  <p className="sim-statement">
                    <MathText text={q.statement} />
                  </p>

                  <div className="sim-judge-row">
                    <button
                      type="button"
                      className={`judge-btn-sm judge-c ${att?.mark === 'C' ? 'selected' : ''}`}
                      onClick={() => handleMark(q.id, 'C')}
                    >
                      <CheckCircle2 size={15} /> Certo
                    </button>
                    <button
                      type="button"
                      className={`judge-btn-sm judge-e ${att?.mark === 'E' ? 'selected' : ''}`}
                      onClick={() => handleMark(q.id, 'E')}
                    >
                      <XCircle size={15} /> Errado
                    </button>
                    <button
                      type="button"
                      className={`judge-btn-sm judge-b ${att?.mark === 'B' ? 'selected' : ''}`}
                      onClick={() => handleMark(q.id, 'B')}
                    >
                      <MinusCircle size={15} /> Branco
                    </button>

                    {examFinished && (
                      <div className="sim-correction-inline">
                        <span className={`gabarito-pill gab-${q.officialAnswer}`}>
                          Oficial: {q.officialAnswer === 'X' ? 'Anulada (+1)' : q.officialAnswer}
                        </span>
                        {q.officialAnswer !== 'X' && att && att.mark !== 'B' && (
                          <span
                            className={
                              att.mark === q.officialAnswer ? 'text-good' : 'text-warn'
                            }
                          >
                            {att.mark === q.officialAnswer ? '+1,00' : '−0,50'}
                          </span>
                        )}
                        {(() => {
                          const prev = getLatestPreviousRoundAttempt(q.id, examRoundsHistory);
                          if (!prev || q.officialAnswer === 'X') return null;
                          const trans = classifyRoundTransition(q, att, prev.attempt);
                          if (trans === 'evolved') {
                            return (
                              <span className="round-trans-badge is-evolved">
                                Evoluiu vs R{prev.round}
                              </span>
                            );
                          }
                          if (trans === 'regressed') {
                            return (
                              <span className="round-trans-badge is-regressed">
                                Acertou na R{prev.round}
                              </span>
                            );
                          }
                          if (trans === 'persistent_wrong') {
                            return (
                              <span className="round-trans-badge is-persistent">
                                Reincidente (R{prev.round})
                              </span>
                            );
                          }
                          return null;
                        })()}
                      </div>
                    )}
                  </div>
                </article>
              </React.Fragment>
            );
          })}
        </section>
      )}
    </div>
  );
};
