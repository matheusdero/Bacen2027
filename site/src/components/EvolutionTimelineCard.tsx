import React, { useMemo, useState } from 'react';
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  BookmarkPlus,
  Calendar,
  Trash2,
  TrendingUp,
} from 'lucide-react';
import { EXAM_BENCHMARKS_2024, SUBJECTS } from '../data/benchmarks2024';
import {
  CebraspeStats,
  EditalEvolutionSummary,
} from '../hooks/useTrainerState';
import { EvolutionMilestone, QuestionItem, SubjectId, TrainerProfile } from '../types';

interface EvolutionTimelineCardProps {
  profile: TrainerProfile;
  allQuestions: QuestionItem[];
  editalSummary: EditalEvolutionSummary;
  overallStats: CebraspeStats;
  onAddMilestone: (
    allQuestions: QuestionItem[],
    label: string,
    source?: EvolutionMilestone['source'],
    overrideExam?: { netScore: number; answeredCount: number },
    note?: string
  ) => void;
  onDeleteMilestone: (milestoneId: string) => void;
}

type ChartMetric = 'score' | 'edital';

interface PlotPoint {
  id: string;
  label: string;
  shortDate: string;
  fullDate: string;
  source: string;
  isLive: boolean;
  netScore: number;
  answeredCount: number;
  editalCompleted: number;
  editalTotal: number;
  editalCompletionPct: number;
  editalAccuracyPct: number | null;
  editalQuestionsTotal: number;
  subjectAccuracies: Partial<Record<SubjectId, number>>;
  note?: string;
}

export const EvolutionTimelineCard: React.FC<EvolutionTimelineCardProps> = ({
  profile,
  allQuestions,
  editalSummary,
  overallStats,
  onAddMilestone,
  onDeleteMilestone,
}) => {
  const [chartMode, setChartMode] = useState<ChartMetric>('score');
  const [labelInput, setLabelInput] = useState('');
  const [noteInput, setNoteInput] = useState('');
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const milestones = profile.evolutionHistory ?? [];

  const trackBench = useMemo(() => {
    if (profile.targetTrack === 'PcD') return EXAM_BENCHMARKS_2024.realResultsEd10.PcD;
    if (profile.targetTrack === 'PP') return EXAM_BENCHMARKS_2024.realResultsEd10.PP;
    return EXAM_BENCHMARKS_2024.realResultsEd10.AC;
  }, [profile.targetTrack]);

  // Pontos plotados: histórico salvo + estado atual ("Agora")
  const plotPoints = useMemo<PlotPoint[]>(() => {
    const saved: PlotPoint[] = milestones.map((m) => ({
      id: m.id,
      label: m.label,
      shortDate: new Date(m.createdAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
      }),
      fullDate: new Date(m.createdAt).toLocaleString('pt-BR'),
      source:
        m.source === 'simulator'
          ? 'Simulado'
          : m.source === 'milestone'
          ? 'Marco'
          : 'Check-in',
      isLive: false,
      netScore: m.exam2024NetScore,
      answeredCount: m.exam2024AnsweredCount,
      editalCompleted: m.editalCompletedCount,
      editalTotal: m.editalTotalCount,
      editalCompletionPct:
        m.editalTotalCount > 0
          ? Math.round((m.editalCompletedCount / m.editalTotalCount) * 100)
          : 0,
      editalAccuracyPct: m.editalAccuracyPercent,
      editalQuestionsTotal: m.editalQuestionsTotal,
      subjectAccuracies: m.subjectAccuracies ?? {},
      note: m.note,
    }));

    const liveSubjectAcc: Partial<Record<SubjectId, number>> = {};
    for (const s of SUBJECTS) {
      const acc = editalSummary.bySubject[s.id]?.accuracyPercent;
      if (acc !== null && acc !== undefined) {
        liveSubjectAcc[s.id] = Number(acc.toFixed(1));
      }
    }

    const livePoint: PlotPoint = {
      id: 'live-now',
      label: 'Agora (ao vivo)',
      shortDate: 'Agora',
      fullDate: 'Estado atual salvo',
      source: 'Tempo real',
      isLive: true,
      netScore: Number(overallStats.netScore.toFixed(2)),
      answeredCount: overallStats.answeredCount,
      editalCompleted: editalSummary.completedItems,
      editalTotal: editalSummary.totalItems,
      editalCompletionPct: editalSummary.completionPercent,
      editalAccuracyPct:
        editalSummary.overallAccuracyPercent !== null
          ? Number(editalSummary.overallAccuracyPercent.toFixed(1))
          : null,
      editalQuestionsTotal: editalSummary.totalQuestions,
      subjectAccuracies: liveSubjectAcc,
    };

    return [...saved, livePoint];
  }, [editalSummary, milestones, overallStats.answeredCount, overallStats.netScore]);

  const activeIndex =
    selectedIdx !== null && selectedIdx < plotPoints.length
      ? selectedIdx
      : plotPoints.length - 1;
  const activePoint = plotPoints[activeIndex];
  const firstSaved = plotPoints.length > 1 ? plotPoints[0] : null;
  const latestPoint = plotPoints[plotPoints.length - 1];

  // Comparativo Primeiro Marco vs. Agora
  const scoreDelta =
    firstSaved && !firstSaved.isLive
      ? Number((latestPoint.netScore - firstSaved.netScore).toFixed(2))
      : null;
  const accuracyDelta =
    firstSaved &&
    !firstSaved.isLive &&
    firstSaved.editalAccuracyPct !== null &&
    latestPoint.editalAccuracyPct !== null
      ? Number((latestPoint.editalAccuracyPct - firstSaved.editalAccuracyPct).toFixed(1))
      : null;
  const editalItemsDelta =
    firstSaved && !firstSaved.isLive
      ? latestPoint.editalCompleted - firstSaved.editalCompleted
      : null;

  const subjectDeltas = useMemo(() => {
    if (!firstSaved || firstSaved.isLive) return [];
    return SUBJECTS.map((subj) => {
      const initialAcc = firstSaved.subjectAccuracies[subj.id];
      const currentAcc = latestPoint.subjectAccuracies[subj.id];
      if (initialAcc === undefined && currentAcc === undefined) return null;
      const delta =
        initialAcc !== undefined && currentAcc !== undefined
          ? Number((currentAcc - initialAcc).toFixed(1))
          : null;
      return {
        subject: subj,
        initialAcc,
        currentAcc,
        delta,
      };
    }).filter((x): x is NonNullable<typeof x> => x !== null);
  }, [firstSaved, latestPoint.subjectAccuracies]);

  const handleSaveMilestone = (e: React.FormEvent) => {
    e.preventDefault();
    const defaultLabel = `Check-in #${milestones.length + 1} (${new Date().toLocaleDateString('pt-BR')})`;
    onAddMilestone(
      allQuestions,
      labelInput.trim() || defaultLabel,
      'manual',
      undefined,
      noteInput
    );
    setLabelInput('');
    setNoteInput('');
    setSelectedIdx(null);
  };

  // === Dimensões do Gráfico SVG ===
  const svgW = 760;
  const svgH = 240;
  const padL = 52;
  const padR = 26;
  const padT = 22;
  const padB = 36;
  const plotW = svgW - padL - padR;
  const plotH = svgH - padT - padB;

  const xPos = (idx: number) => {
    if (plotPoints.length <= 1) return padL + plotW / 2;
    return padL + (idx / (plotPoints.length - 1)) * plotW;
  };

  // Escala do gráfico de Nota Líquida
  const scoreValues = plotPoints.map((p) => p.netScore);
  const minScoreRaw = Math.min(0, ...scoreValues);
  const maxScoreRaw = Math.max(trackBench.medianNFPO + 8, ...scoreValues, 100);
  const minScore = Math.floor(minScoreRaw / 10) * 10;
  const maxScore = Math.ceil(maxScoreRaw / 10) * 10;
  const yScore = (val: number) => {
    const ratio = (val - minScore) / Math.max(1, maxScore - minScore);
    return padT + plotH - ratio * plotH;
  };

  // Escala 0–100% para Edital
  const yPct = (val: number) => padT + plotH - (Math.max(0, Math.min(100, val)) / 100) * plotH;

  const scoreLinePath = plotPoints
    .map((pt, i) => `${i === 0 ? 'M' : 'L'} ${xPos(i).toFixed(1)} ${yScore(pt.netScore).toFixed(1)}`)
    .join(' ');

  const coverageLinePath = plotPoints
    .map(
      (pt, i) =>
        `${i === 0 ? 'M' : 'L'} ${xPos(i).toFixed(1)} ${yPct(pt.editalCompletionPct).toFixed(1)}`
    )
    .join(' ');

  const accuracyPoints = plotPoints
    .map((pt, i) => ({ pt, i }))
    .filter((x): x is { pt: PlotPoint & { editalAccuracyPct: number }; i: number } =>
      x.pt.editalAccuracyPct !== null
    );
  const accuracyLinePath = accuracyPoints
    .map(
      ({ pt, i }, idx) =>
        `${idx === 0 ? 'M' : 'L'} ${xPos(i).toFixed(1)} ${yPct(pt.editalAccuracyPct).toFixed(1)}`
    )
    .join(' ');

  return (
    <section className="card evolution-card">
      <div className="card-header">
        <div>
          <span className="eyebrow">Histórico de Evolução · {profile.candidateName}</span>
          <h2>
            <TrendingUp size={18} /> Curva de Evolução Temporal &amp; Marcos
          </h2>
        </div>

        <div className="evo-mode-tabs" role="tablist" aria-label="Tipo de gráfico">
          <button
            type="button"
            className={`btn btn-sm ${chartMode === 'score' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setChartMode('score')}
          >
            Nota Líquida vs. Corte 2024
          </button>
          <button
            type="button"
            className={`btn btn-sm ${chartMode === 'edital' ? 'btn-primary' : 'btn-outline'}`}
            onClick={() => setChartMode('edital')}
          >
            % Acerto &amp; Cobertura do Edital
          </button>
        </div>
      </div>

      {/* Resumo de Ganho Desde o 1º Marco */}
      {firstSaved && !firstSaved.isLive ? (
        <div className="evo-delta-strip">
          <div className="evo-delta-chip">
            <span className="muted-note">Nota Líquida (desde {firstSaved.shortDate})</span>
            <strong className={scoreDelta !== null && scoreDelta >= 0 ? 'text-good' : 'text-warn'}>
              {scoreDelta !== null ? (scoreDelta >= 0 ? `+${scoreDelta.toFixed(2)}` : scoreDelta.toFixed(2)) : '—'} pts
            </strong>
          </div>
          <div className="evo-delta-chip">
            <span className="muted-note">Edital Concluído</span>
            <strong className="text-good">
              +{editalItemsDelta ?? 0} itens ({latestPoint.editalCompleted}/{latestPoint.editalTotal})
            </strong>
          </div>
          <div className="evo-delta-chip">
            <span className="muted-note">Acerto Global no Edital</span>
            <strong
              className={
                accuracyDelta === null
                  ? ''
                  : accuracyDelta >= 0
                  ? 'text-good'
                  : 'text-warn'
              }
            >
              {accuracyDelta !== null
                ? `${accuracyDelta >= 0 ? '+' : ''}${accuracyDelta.toFixed(1)} p.p.`
                : latestPoint.editalAccuracyPct !== null
                ? `${latestPoint.editalAccuracyPct.toFixed(1)}% atual`
                : 'Aguardando baterias'}
            </strong>
          </div>
        </div>
      ) : (
        <div className="coach-callout">
          <Activity size={18} />
          <div>
            <strong>Comece sua linha do tempo agora!</strong> Clique em{' '}
            <strong>Registrar Marco</strong> abaixo (ex.: <em>&quot;Ponto de partida — Nov/2026&quot;</em>)
            para fotografar seu nível inicial. Toda semana (ou ao finalizar um simulado), salve um
            novo marco para ver sua curva de evolução subindo em direção à nota de corte!
          </div>
        </div>
      )}

      {/* Formulário Rápido de Check-in */}
      <form className="evo-checkin-form" onSubmit={handleSaveMilestone}>
        <input
          type="text"
          value={labelInput}
          onChange={(e) => setLabelInput(e.target.value)}
          placeholder={`Título do marco (ex.: Semana ${milestones.length + 1} — Revisão Macro & COSIF)`}
        />
        <input
          type="text"
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
          placeholder="Observação rápida (opcional)"
        />
        <button type="submit" className="btn btn-primary">
          <BookmarkPlus size={16} /> Registrar Marco Agora
        </button>
      </form>

      {/* Gráfico SVG Responsivo */}
      <div className="evo-chart-wrap">
        <svg
          viewBox={`0 0 ${svgW} ${svgH}`}
          className="evo-svg"
          role="img"
          aria-label="Gráfico de evolução temporal"
        >
          {/* Linhas de grade horizontais */}
          {chartMode === 'score'
            ? [0, 30, 60, 90, 120]
                .filter((v) => v >= minScore && v <= maxScore)
                .map((tick) => (
                  <g key={tick}>
                    <line
                      x1={padL}
                      x2={svgW - padR}
                      y1={yScore(tick)}
                      y2={yScore(tick)}
                      stroke="var(--chart-grid, #e2e8f0)"
                      strokeWidth="1"
                    />
                    <text
                      x={padL - 8}
                      y={yScore(tick) + 4}
                      textAnchor="end"
                      className="svg-axis-label"
                    >
                      {tick}
                    </text>
                  </g>
                ))
            : [0, 25, 50, 75, 100].map((tick) => (
                <g key={tick}>
                  <line
                    x1={padL}
                    x2={svgW - padR}
                    y1={yPct(tick)}
                    y2={yPct(tick)}
                    stroke="var(--chart-grid, #e2e8f0)"
                    strokeWidth="1"
                  />
                  <text
                    x={padL - 8}
                    y={yPct(tick) + 4}
                    textAnchor="end"
                    className="svg-axis-label"
                  >
                    {tick}%
                  </text>
                </g>
              ))}

          {/* Linhas de referência no modo Nota Líquida */}
          {chartMode === 'score' && (
            <>
              <line
                x1={padL}
                x2={svgW - padR}
                y1={yScore(trackBench.cutoffNFPO)}
                y2={yScore(trackBench.cutoffNFPO)}
                stroke="#d97706"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
              <text
                x={svgW - padR - 4}
                y={yScore(trackBench.cutoffNFPO) + 14}
                textAnchor="end"
                className="svg-ref-amber"
              >
                Corte {profile.targetTrack} 2024: {trackBench.cutoffNFPO.toFixed(1)}
              </text>

              <line
                x1={padL}
                x2={svgW - padR}
                y1={yScore(trackBench.medianNFPO)}
                y2={yScore(trackBench.medianNFPO)}
                stroke="#059669"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <text
                x={svgW - padR - 4}
                y={yScore(trackBench.medianNFPO) - 5}
                textAnchor="end"
                className="svg-ref-emerald"
              >
                Mediana aprovados: {trackBench.medianNFPO.toFixed(1)}
              </text>
            </>
          )}

          {/* Linha de meta 80% no modo Edital */}
          {chartMode === 'edital' && (
            <>
              <line
                x1={padL}
                x2={svgW - padR}
                y1={yPct(80)}
                y2={yPct(80)}
                stroke="#059669"
                strokeWidth="1.2"
                strokeDasharray="5 4"
              />
              <text
                x={svgW - padR - 4}
                y={yPct(80) - 5}
                textAnchor="end"
                className="svg-ref-emerald"
              >
                Meta competitiva: 80% acerto
              </text>
            </>
          )}

          {/* Curvas */}
          {chartMode === 'score' ? (
            <>
              {plotPoints.length > 1 && (
                <path
                  d={scoreLinePath}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
              {plotPoints.map((pt, i) => {
                const cx = xPos(i);
                const cy = yScore(pt.netScore);
                const selected = i === activeIndex;
                return (
                  <g
                    key={pt.id}
                    className="svg-point-group"
                    onClick={() => setSelectedIdx(i)}
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={selected ? 7 : 5}
                      fill={pt.isLive ? '#059669' : '#2563eb'}
                      stroke="var(--surface, #ffffff)"
                      strokeWidth="2"
                    />
                    <text x={cx} y={svgH - 12} textAnchor="middle" className="svg-x-label">
                      {pt.shortDate}
                    </text>
                  </g>
                );
              })}
            </>
          ) : (
            <>
              {plotPoints.length > 1 && (
                <path
                  d={coverageLinePath}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                />
              )}
              {accuracyPoints.length > 1 && (
                <path
                  d={accuracyLinePath}
                  fill="none"
                  stroke="#059669"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              )}
              {plotPoints.map((pt, i) => {
                const cx = xPos(i);
                const selected = i === activeIndex;
                return (
                  <g
                    key={pt.id}
                    className="svg-point-group"
                    onClick={() => setSelectedIdx(i)}
                  >
                    <circle
                      cx={cx}
                      cy={yPct(pt.editalCompletionPct)}
                      r={selected ? 6.5 : 4.5}
                      fill="#2563eb"
                      stroke="var(--surface, #ffffff)"
                      strokeWidth="2"
                    />
                    {pt.editalAccuracyPct !== null && (
                      <circle
                        cx={cx}
                        cy={yPct(pt.editalAccuracyPct)}
                        r={selected ? 7 : 5}
                        fill="#059669"
                        stroke="var(--surface, #ffffff)"
                        strokeWidth="2"
                      />
                    )}
                    <text x={cx} y={svgH - 12} textAnchor="middle" className="svg-x-label">
                      {pt.shortDate}
                    </text>
                  </g>
                );
              })}
            </>
          )}
        </svg>

        <div className="evo-chart-legend">
          {chartMode === 'score' ? (
            <>
              <span>
                <i className="leg-swatch" style={{ background: '#2563eb' }} /> Marcos salvos
              </span>
              <span>
                <i className="leg-swatch" style={{ background: '#059669' }} /> Ponto atual
              </span>
              <span>Clique em qualquer ponto do gráfico para inspecionar</span>
            </>
          ) : (
            <>
              <span>
                <i className="leg-swatch" style={{ background: '#059669' }} /> % Acerto Global no Edital
              </span>
              <span>
                <i className="leg-swatch" style={{ background: '#2563eb' }} /> % Cobertura do Edital
              </span>
            </>
          )}
        </div>
      </div>

      {/* Detalhe do Ponto Selecionado */}
      {activePoint && (
        <div className="evo-selected-detail">
          <div className="evo-sel-head">
            <div>
              <strong>{activePoint.label}</strong>{' '}
              <span className="badge badge-info">{activePoint.source}</span>
            </div>
            <span className="muted-note">
              <Calendar size={13} /> {activePoint.fullDate}
            </span>
          </div>
          <div className="evo-sel-metrics">
            <span>
              <strong>Nota Líquida:</strong> {activePoint.netScore.toFixed(2)} pts ({activePoint.answeredCount} q. 2024)
            </span>
            <span>
              <strong>Edital:</strong> {activePoint.editalCompleted}/{activePoint.editalTotal} (
              {activePoint.editalCompletionPct}%)
            </span>
            <span>
              <strong>Acerto Edital:</strong>{' '}
              {activePoint.editalAccuracyPct !== null
                ? `${activePoint.editalAccuracyPct.toFixed(1)}% (${activePoint.editalQuestionsTotal} q.)`
                : 'Sem baterias'}
            </span>
          </div>
          {activePoint.note && <div className="muted-note">Obs.: {activePoint.note}</div>}
        </div>
      )}

      {/* Comparativo de Evolução por Disciplina */}
      {subjectDeltas.length > 0 && (
        <div className="evo-subj-deltas">
          <div className="subhead">
            Evolução por disciplina ({firstSaved?.label} → Agora)
          </div>
          <div className="evo-subj-grid">
            {subjectDeltas.map(({ subject, initialAcc, currentAcc, delta }) => (
              <div key={subject.id} className="evo-subj-pill">
                <span className="evo-subj-name">
                  <span className="subj-dot" style={{ backgroundColor: subject.accentColor }} />
                  {subject.shortName}
                </span>
                <span className="evo-subj-vals">
                  {initialAcc !== undefined ? `${initialAcc.toFixed(0)}%` : '—'} →{' '}
                  <strong>{currentAcc !== undefined ? `${currentAcc.toFixed(1)}%` : '—'}</strong>
                </span>
                {delta !== null && (
                  <span className={`trend-badge ${delta >= 0 ? 'trend-up' : 'trend-down'}`}>
                    {delta >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                    {delta >= 0 ? '+' : ''}
                    {delta.toFixed(1)} p.p.
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lista de Marcos Salvos */}
      {milestones.length > 0 && (
        <div className="evo-history-list">
          <div className="subhead">Marcos registrados ({milestones.length})</div>
          <div className="evo-history-items">
            {[...milestones].reverse().map((m) => (
              <div key={m.id} className="evo-history-row">
                <div>
                  <strong>{m.label}</strong>{' '}
                  <span className="muted-note">
                    · {new Date(m.createdAt).toLocaleString('pt-BR')}
                  </span>
                  {m.note && <div className="muted-note">{m.note}</div>}
                </div>
                <div className="evo-history-nums">
                  <span className="badge">{m.exam2024NetScore.toFixed(2)} pts</span>
                  <span className="badge badge-info">
                    {m.editalCompletedCount}/{m.editalTotalCount} edital
                  </span>
                  {m.editalAccuracyPercent !== null && (
                    <span className="badge">
                      {m.editalAccuracyPercent.toFixed(1)}% ({m.editalQuestionsTotal} q.)
                    </span>
                  )}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline"
                    onClick={() => onDeleteMilestone(m.id)}
                    title="Excluir marco"
                    aria-label={`Excluir marco ${m.label}`}
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
