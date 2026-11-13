import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  History,
  ListChecks,
  Plus,
  RotateCcw,
  Search,
  TrendingUp,
} from 'lucide-react';
import { SUBJECTS } from '../data/benchmarks2024';
import {
  computeEditalEvolutionSummary,
  EditalHealthTier,
  EditalItemEvaluation,
} from '../hooks/useTrainerState';
import { QuestionItem, SubjectId, TrainerProfile } from '../types';

interface EditalTrackerViewProps {
  profile: TrainerProfile;
  allQuestions: QuestionItem[];
  onToggleCompleted: (itemId: string) => void;
  onSetStats: (itemId: string, questionsDone: number, correctCount: number) => void;
  onAddBatch: (itemId: string, batchQuestions: number, batchCorrect: number, note?: string) => void;
  onClearItem: (itemId: string) => void;
  onOpenTopicLesson: (subjectId: SubjectId, topicId: string) => void;
  onOpenQuestion: (questionId: number) => void;
}

type TierFilter =
  | 'all'
  | 'critico'
  | 'atencao'
  | 'competitivo'
  | 'dominado'
  | 'completed_no_questions'
  | 'pending';

export const EditalTrackerView: React.FC<EditalTrackerViewProps> = ({
  profile,
  allQuestions,
  onToggleCompleted,
  onSetStats,
  onAddBatch,
  onClearItem,
  onOpenTopicLesson,
  onOpenQuestion,
}) => {
  const [subjectFilter, setSubjectFilter] = useState<SubjectId | 'all'>('all');
  const [tierFilter, setTierFilter] = useState<TierFilter>('all');
  const [search, setSearch] = useState('');
  const [include2024, setInclude2024] = useState(true);

  // Linha com formulário "+ Bateria" ou histórico aberto
  const [activeBatchItemId, setActiveBatchItemId] = useState<string | null>(null);
  const [batchQ, setBatchQ] = useState<number>(10);
  const [batchC, setBatchC] = useState<number>(8);
  const [batchNote, setBatchNote] = useState<string>('');
  const [expandedHistoryId, setExpandedHistoryId] = useState<string | null>(null);

  const summary = useMemo(
    () => computeEditalEvolutionSummary(profile, allQuestions, include2024),
    [profile, allQuestions, include2024]
  );

  const filteredEvaluations = useMemo(() => {
    const qLower = search.trim().toLowerCase();
    return summary.itemEvaluations.filter((ev) => {
      if (subjectFilter !== 'all' && ev.item.subjectId !== subjectFilter) return false;

      if (tierFilter === 'critico' && ev.tier !== 'critico') return false;
      if (tierFilter === 'atencao' && ev.tier !== 'atencao') return false;
      if (tierFilter === 'competitivo' && ev.tier !== 'competitivo') return false;
      if (tierFilter === 'dominado' && ev.tier !== 'dominado') return false;
      if (tierFilter === 'completed_no_questions' && (!ev.completed || ev.totalQuestions > 0)) {
        return false;
      }
      if (tierFilter === 'pending' && ev.completed) return false;

      if (qLower) {
        const hay = [
          ev.item.code,
          ev.item.groupTitle,
          ev.item.title,
        ]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(qLower)) return false;
      }
      return true;
    });
  }, [summary.itemEvaluations, subjectFilter, tierFilter, search]);

  // Agrupa por Disciplina -> groupTitle (para acompanhar tema macro E subitem!)
  const groupedBySubject = useMemo(() => {
    const subjectsOrder =
      subjectFilter === 'all'
        ? SUBJECTS
        : SUBJECTS.filter((s) => s.id === subjectFilter);

    return subjectsOrder
      .map((subj) => {
        const rows = filteredEvaluations.filter((ev) => ev.item.subjectId === subj.id);
        if (rows.length === 0) return null;

        const groupMap = new Map<string, EditalItemEvaluation[]>();
        for (const r of rows) {
          const arr = groupMap.get(r.item.groupTitle) ?? [];
          arr.push(r);
          groupMap.set(r.item.groupTitle, arr);
        }

        const groups = Array.from(groupMap.entries()).map(([groupTitle, items]) => {
          const completedCount = items.filter((i) => i.completed).length;
          const totalQuestions = items.reduce((a, i) => a + i.totalQuestions, 0);
          const totalCorrect = items.reduce((a, i) => a + i.totalCorrect, 0);
          const acc =
            totalQuestions > 0
              ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1))
              : null;
          let tier: EditalHealthTier = 'sem_amostra';
          if (acc !== null) {
            if (acc < 60) tier = 'critico';
            else if (acc < 75) tier = 'atencao';
            else if (acc < 85) tier = 'competitivo';
            else tier = 'dominado';
          }
          return {
            groupTitle,
            items,
            completedCount,
            totalQuestions,
            totalCorrect,
            accuracyPercent: acc,
            tier,
          };
        });

        return {
          subject: subj,
          subjectSummary: summary.bySubject[subj.id],
          groups,
        };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
  }, [filteredEvaluations, subjectFilter, summary.bySubject]);

  const handleOpenBatch = (ev: EditalItemEvaluation) => {
    if (activeBatchItemId === ev.item.id) {
      setActiveBatchItemId(null);
      return;
    }
    setActiveBatchItemId(ev.item.id);
    setBatchQ(10);
    setBatchC(8);
    setBatchNote('');
  };

  const handleSubmitBatch = (itemId: string) => {
    const safeQ = Math.max(1, batchQ);
    const safeC = Math.min(safeQ, Math.max(0, batchC));
    onAddBatch(itemId, safeQ, safeC, batchNote);
    setActiveBatchItemId(null);
    setBatchNote('');
  };

  const handleDirectPercentChange = (
    ev: EditalItemEvaluation,
    pctValue: string
  ) => {
    if (pctValue === '') return;
    const pct = Math.min(100, Math.max(0, Number(pctValue)));
    const baseQ = ev.externalDone > 0 ? ev.externalDone : 10;
    const newCorrect = Math.round((baseQ * pct) / 100);
    onSetStats(ev.item.id, baseQ, newCorrect);
  };

  return (
    <div className="view-stack">
      {/* Cabeçalho + KPIs de Evolução */}
      <section className="card">
        <div className="card-header">
          <div>
            <span className="eyebrow">
              Rastreador Completo do Edital Verticalizado ({summary.totalItems} subitens oficiais)
            </span>
            <h2>
              <ListChecks size={20} /> Evolução do Edital &amp; Desempenho por Tema
            </h2>
          </div>

          <label className="toggle-pill">
            <input
              type="checkbox"
              checked={include2024}
              onChange={(e) => setInclude2024(e.target.checked)}
            />
            <span>Somar questões de 2024 feitas na aba &quot;Questões + Aulas&quot;</span>
          </label>
        </div>

        <div className="kpi-grid">
          <div className="kpi-card highlight">
            <div className="kpi-label">Cobertura do Edital</div>
            <div className="kpi-value">
              {summary.completedItems} / {summary.totalItems} ({summary.completionPercent}%)
            </div>
            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{ width: `${summary.completionPercent}%` }}
              />
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-label">Questões Acumuladas</div>
            <div className="kpi-value">{summary.totalQuestions}</div>
            <div className="kpi-meta">
              {summary.totalCorrect} acertos ·{' '}
              {summary.totalQuestions - summary.totalCorrect} erros registrados
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-label">% de Acerto Global</div>
            <div className="kpi-value">
              {summary.overallAccuracyPercent !== null
                ? `${summary.overallAccuracyPercent.toFixed(1)}%`
                : '—'}
            </div>
            <div className="kpi-meta">
              Meta competitiva Cebraspe (+1 / −0,50): ≥ 80% por subitem
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-label">Radar de Risco no Edital</div>
            <div className="kpi-value">
              <span className="text-warn">{summary.criticalQueue.length}</span> /{' '}
              <span className="text-good">{summary.strongestHighlights.length}</span>
            </div>
            <div className="kpi-meta">
              itens abaixo de 75% (atenção/crítico) vs. ≥ 80% (fortes)
            </div>
          </div>
        </div>
      </section>

      {/* Mapa de Evolução por Disciplina + Pontos Fracos/Fortes */}
      <div className="two-col-grid">
        <section className="card">
          <div className="card-header">
            <h2>
              <TrendingUp size={18} /> Termômetro por Disciplina (Clique para filtrar)
            </h2>
            {subjectFilter !== 'all' && (
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => setSubjectFilter('all')}
              >
                Mostrar todas
              </button>
            )}
          </div>

          <div className="edital-subj-bars">
            {SUBJECTS.map((subj) => {
              const st = summary.bySubject[subj.id];
              const isSelected = subjectFilter === subj.id;
              return (
                <button
                  key={subj.id}
                  type="button"
                  className={`edital-subj-bar-card ${isSelected ? 'active' : ''}`}
                  onClick={() =>
                    setSubjectFilter((prev) => (prev === subj.id ? 'all' : subj.id))
                  }
                >
                  <div className="esb-top">
                    <span className="esb-name">
                      <span className="subj-dot" style={{ backgroundColor: subj.accentColor }} />
                      {subj.shortName}
                    </span>
                    <span className={`tier-pill tier-${st.tier}`}>
                      {st.accuracyPercent !== null ? `${st.accuracyPercent.toFixed(1)}%` : '—'}
                    </span>
                  </div>
                  <div className="progress-bar-track sm">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${st.completionPercent}%`,
                        backgroundColor: subj.accentColor,
                      }}
                    />
                  </div>
                  <div className="esb-meta">
                    <span>
                      {st.completedCount}/{st.itemsCount} itens ({st.completionPercent}%)
                    </span>
                    <span>{st.totalQuestions} q.</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            <h2>
              <AlertTriangle size={18} /> Diagnóstico do Treinador Dentro do Edital
            </h2>
            <span className="badge badge-info">Alimentando seu Painel</span>
          </div>

          {summary.criticalQueue.length === 0 && summary.strongestHighlights.length === 0 ? (
            <div className="coach-callout">
              <AlertTriangle size={18} />
              <div>
                <strong>Comece a registrar seus números!</strong> Marque abaixo os itens que
                você já estudou e informe quantas questões resolveu e quantas acertou (ou use{' '}
                <strong>+ Bateria</strong> para salvar seu histórico). O treinador detectará
                automaticamente seus gargalos exatos dentro de cada matéria.
              </div>
            </div>
          ) : (
            <div className="diag-split">
              <div className="diag-panel diag-weak">
                <h3>Itens que Mais Puxam Sua Nota Para Baixo (&lt; 75%)</h3>
                {summary.criticalQueue.length === 0 ? (
                  <p className="muted-note">Nenhum item abaixo de 75% no momento!</p>
                ) : (
                  <ul>
                    {summary.criticalQueue.slice(0, 5).map((ev) => {
                      const s = SUBJECTS.find((x) => x.id === ev.item.subjectId);
                      return (
                        <li key={ev.item.id}>
                          <div>
                            <strong>
                              {s?.shortName} {ev.item.code}
                            </strong>{' '}
                            — {ev.item.title}
                          </div>
                          <div className="diag-metrics">
                            <span className={`tier-pill tier-${ev.tier}`}>
                              {ev.accuracyPercent?.toFixed(1)}% ({ev.totalCorrect}/{ev.totalQuestions})
                            </span>
                            <button
                              type="button"
                              className="btn-link-sm"
                              onClick={() =>
                                onOpenTopicLesson(ev.item.subjectId, ev.item.topicId)
                              }
                            >
                              Revisar aula
                            </button>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>

              <div className="diag-panel diag-strong">
                <h3>Itens de Alta Confiança (≥ 80%)</h3>
                {summary.strongestHighlights.length === 0 ? (
                  <p className="muted-note">
                    Registre baterias acima de 80% para consolidar seus pontos fortes.
                  </p>
                ) : (
                  <ul>
                    {summary.strongestHighlights.slice(0, 5).map((ev) => {
                      const s = SUBJECTS.find((x) => x.id === ev.item.subjectId);
                      return (
                        <li key={ev.item.id}>
                          <div>
                            <strong>
                              {s?.shortName} {ev.item.code}
                            </strong>{' '}
                            — {ev.item.title}
                          </div>
                          <span className={`tier-pill tier-${ev.tier}`}>
                            {ev.accuracyPercent?.toFixed(1)}% ({ev.totalCorrect}/{ev.totalQuestions})
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          )}
        </section>
      </div>

      {/* Barra de Filtros da Lista do Edital */}
      <section className="card">
        <div className="filter-bar">
          <div className="search-input-wrap">
            <Search size={15} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filtrar item do edital (ex.: crase, Solow, LGPD, securitização, VAR, CPC 25)..."
            />
          </div>

          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value as SubjectId | 'all')}
            aria-label="Filtrar por disciplina"
          >
            <option value="all">Todas as 10 disciplinas</option>
            {SUBJECTS.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.prova})
              </option>
            ))}
          </select>

          <select
            value={tierFilter}
            onChange={(e) => setTierFilter(e.target.value as TierFilter)}
            aria-label="Filtrar por desempenho"
          >
            <option value="all">Todos os status ({summary.totalItems})</option>
            <option value="critico">Crítico (&lt; 60%)</option>
            <option value="atencao">Atenção (60% – 74,9%)</option>
            <option value="competitivo">Competitivo (75% – 84,9%)</option>
            <option value="dominado">Dominado (≥ 85%)</option>
            <option value="completed_no_questions">Estudado, mas sem questões</option>
            <option value="pending">Ainda não estudados</option>
          </select>
        </div>
      </section>

      {/* Lista Agrupada por Disciplina -> Tema Macro -> Subitens do Edital */}
      {groupedBySubject.length === 0 ? (
        <section className="card empty-state">
          Nenhum subitem do edital corresponde aos filtros selecionados.
        </section>
      ) : (
        groupedBySubject.map(({ subject, subjectSummary, groups }) => (
          <section key={subject.id} className="card edital-subject-section">
            <div className="edital-subj-head">
              <div className="subj-cell">
                <span className="subj-dot" style={{ backgroundColor: subject.accentColor }} />
                <div>
                  <h2>
                    {subject.name} ({subject.prova} · {subject.weightLabel})
                  </h2>
                  <div className="subj-meta">
                    {subjectSummary.completedCount} de {subjectSummary.itemsCount} itens estudados (
                    {subjectSummary.completionPercent}%) · {subjectSummary.totalQuestions} questões
                    feitas
                  </div>
                </div>
              </div>

              <div className="edital-subj-score-badge">
                <span>Acerto na disciplina:</span>
                <span className={`tier-pill tier-${subjectSummary.tier}`}>
                  {subjectSummary.accuracyPercent !== null
                    ? `${subjectSummary.accuracyPercent.toFixed(1)}%`
                    : 'Sem amostra'}
                </span>
              </div>
            </div>

            <div className="edital-groups-stack">
              {groups.map((grp) => (
                <div key={grp.groupTitle} className="edital-group-box">
                  <div className="edital-group-header">
                    <strong>{grp.groupTitle}</strong>
                    <div className="edital-group-metrics">
                      <span>
                        {grp.completedCount}/{grp.items.length} estudados
                      </span>
                      <span>·</span>
                      <span>{grp.totalQuestions} questões</span>
                      <span className={`tier-pill tier-${grp.tier}`}>
                        {grp.accuracyPercent !== null
                          ? `${grp.accuracyPercent.toFixed(1)}%`
                          : '—'}
                      </span>
                    </div>
                  </div>

                  <div className="edital-items-table-wrap">
                    <table className="edital-items-table">
                      <thead>
                        <tr>
                          <th style={{ width: '44px' }}>Visto</th>
                          <th>Item / Tema do Conteúdo Programático</th>
                          <th style={{ width: '105px' }}>Questões</th>
                          <th style={{ width: '105px' }}>Acertos</th>
                          <th style={{ width: '105px' }}>% Acerto</th>
                          <th style={{ width: '185px' }}>Diagnóstico &amp; Evolução</th>
                          <th style={{ width: '175px' }}>Registrar / Ações</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grp.items.map((ev) => {
                          const isBatchOpen = activeBatchItemId === ev.item.id;
                          const isHistoryOpen = expandedHistoryId === ev.item.id;
                          return (
                            <React.Fragment key={ev.item.id}>
                              <tr className={ev.completed ? 'row-completed' : ''}>
                                <td data-label="Estudado" className="check-cell">
                                  <button
                                    type="button"
                                    className={`edital-check-btn ${ev.completed ? 'checked' : ''}`}
                                    onClick={() => onToggleCompleted(ev.item.id)}
                                    title={
                                      ev.completed
                                        ? 'Marcar como pendente'
                                        : 'Marcar item como estudado'
                                    }
                                    aria-label={`Marcar item ${ev.item.code} como estudado`}
                                  >
                                    {ev.completed ? <CheckCircle2 size={19} /> : <span className="check-empty" />}
                                  </button>
                                </td>

                                <td data-label="Item do Edital" className="td-edital-title">
                                  <div className="edital-item-title-row">
                                    <span className="edital-code-tag">{ev.item.code}</span>
                                    <span className="edital-item-title">{ev.item.title}</span>
                                  </div>
                                  <div className="edital-item-links">
                                    <button
                                      type="button"
                                      className="btn-link-sm"
                                      onClick={() =>
                                        onOpenTopicLesson(ev.item.subjectId, ev.item.topicId)
                                      }
                                    >
                                      <BookOpen size={12} /> Estudar Aula
                                    </button>

                                    {ev.item.relatedQuestionIds.length > 0 && (
                                      <span className="q-links-wrap">
                                        · 2024:{' '}
                                        {ev.item.relatedQuestionIds.slice(0, 5).map((qId) => (
                                          <button
                                            key={qId}
                                            type="button"
                                            className="q-mini-chip"
                                            onClick={() => onOpenQuestion(qId)}
                                            title={`Abrir questão ${qId} de 2024`}
                                          >
                                            Q.{qId}
                                          </button>
                                        ))}
                                        {ev.item.relatedQuestionIds.length > 5 && (
                                          <span className="muted-note">
                                            +{ev.item.relatedQuestionIds.length - 5}
                                          </span>
                                        )}
                                      </span>
                                    )}

                                    {include2024 && ev.platform2024Done > 0 && (
                                      <span className="platform-sync-tag">
                                        (+{ev.platform2024Correct}/{ev.platform2024Done} do Lab 2024)
                                      </span>
                                    )}
                                  </div>
                                </td>

                                <td data-label="Questões" className="td-edital-num">
                                  <input
                                    type="number"
                                    min={0}
                                    max={9999}
                                    className="num-input-sm"
                                    value={ev.externalDone}
                                    aria-label={`Questões externas em ${ev.item.code}`}
                                    onChange={(e) =>
                                      onSetStats(
                                        ev.item.id,
                                        Number(e.target.value),
                                        ev.externalCorrect
                                      )
                                    }
                                  />
                                </td>

                                <td data-label="Acertos" className="td-edital-num">
                                  <input
                                    type="number"
                                    min={0}
                                    max={ev.externalDone}
                                    className="num-input-sm"
                                    value={ev.externalCorrect}
                                    aria-label={`Acertos externos em ${ev.item.code}`}
                                    onChange={(e) =>
                                      onSetStats(
                                        ev.item.id,
                                        ev.externalDone,
                                        Number(e.target.value)
                                      )
                                    }
                                  />
                                </td>

                                <td data-label="% Acerto" className="td-edital-num">
                                  <div className="pct-input-wrap">
                                    <input
                                      type="number"
                                      min={0}
                                      max={100}
                                      step="1"
                                      className="num-input-sm"
                                      placeholder="—"
                                      value={
                                        ev.accuracyPercent !== null
                                          ? Math.round(ev.accuracyPercent)
                                          : ''
                                      }
                                      aria-label={`Percentual de acerto em ${ev.item.code}`}
                                      onChange={(e) =>
                                        handleDirectPercentChange(ev, e.target.value)
                                      }
                                    />
                                    <span>%</span>
                                  </div>
                                </td>

                                <td data-label="Diagnóstico" className="td-edital-diag">
                                  <div className="diag-cell">
                                    <span className={`tier-pill tier-${ev.tier}`}>
                                      {ev.tierLabel}
                                    </span>
                                    {ev.completed && ev.totalQuestions === 0 && (
                                      <span className="warn-mini">Falta bateria de questões</span>
                                    )}
                                    {ev.trendDelta !== null && (
                                      <span
                                        className={`trend-badge ${
                                          ev.trendDelta >= 0 ? 'trend-up' : 'trend-down'
                                        }`}
                                      >
                                        {ev.trendDelta >= 0 ? (
                                          <ArrowUpRight size={13} />
                                        ) : (
                                          <ArrowDownRight size={13} />
                                        )}
                                        {ev.trendDelta >= 0 ? '+' : ''}
                                        {ev.trendDelta.toFixed(1)} p.p.
                                      </span>
                                    )}
                                  </div>
                                </td>

                                <td data-label="Registro" className="td-edital-actions">
                                  <div className="row-actions-cell">
                                    <button
                                      type="button"
                                      className={`btn btn-sm ${
                                        isBatchOpen ? 'btn-primary' : 'btn-outline'
                                      }`}
                                      onClick={() => handleOpenBatch(ev)}
                                      title="Somar nova bateria ao acumulado e registrar evolução"
                                    >
                                      <Plus size={13} /> Bateria
                                    </button>
                                    {ev.history.length > 0 && (
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-outline"
                                        onClick={() =>
                                          setExpandedHistoryId((prev) =>
                                            prev === ev.item.id ? null : ev.item.id
                                          )
                                        }
                                        title="Ver histórico de baterias"
                                      >
                                        <History size={13} /> {ev.history.length}
                                      </button>
                                    )}
                                    {(ev.externalDone > 0 || ev.completed) && (
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-outline"
                                        onClick={() => onClearItem(ev.item.id)}
                                        title="Zerar item"
                                      >
                                        <RotateCcw size={12} />
                                      </button>
                                    )}
                                  </div>
                                </td>
                              </tr>

                              {isBatchOpen && (
                                <tr className="batch-drawer-row">
                                  <td colSpan={7}>
                                    <div className="batch-drawer">
                                      <strong>
                                        Nova bateria em &quot;{ev.item.code} — {ev.item.title}&quot;:
                                      </strong>
                                      <label>
                                        Questões feitas agora:
                                        <input
                                          type="number"
                                          min={1}
                                          max={500}
                                          value={batchQ}
                                          onChange={(e) => {
                                            const val = Math.max(1, Number(e.target.value));
                                            setBatchQ(val);
                                            if (batchC > val) setBatchC(val);
                                          }}
                                        />
                                      </label>
                                      <label>
                                        Acertos agora:
                                        <input
                                          type="number"
                                          min={0}
                                          max={batchQ}
                                          value={batchC}
                                          onChange={(e) => setBatchC(Number(e.target.value))}
                                        />
                                      </label>
                                      <span className="batch-preview-pct">
                                        ({((Math.min(batchQ, Math.max(0, batchC)) / Math.max(1, batchQ)) * 100).toFixed(1)}
                                        %)
                                      </span>
                                      <input
                                        type="text"
                                        className="batch-note-input"
                                        placeholder="Obs. rápida (ex.: Tec Concursos — errei exceções)"
                                        value={batchNote}
                                        onChange={(e) => setBatchNote(e.target.value)}
                                      />
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-primary"
                                        onClick={() => handleSubmitBatch(ev.item.id)}
                                      >
                                        Salvar Bateria
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-sm btn-outline"
                                        onClick={() => setActiveBatchItemId(null)}
                                      >
                                        Cancelar
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              )}

                              {isHistoryOpen && ev.history.length > 0 && (
                                <tr className="batch-drawer-row">
                                  <td colSpan={7}>
                                    <div className="history-drawer">
                                      <strong>Histórico de evolução neste item:</strong>
                                      <div className="history-pills">
                                        {ev.history.map((h, idx) => (
                                          <div key={idx} className="history-chip">
                                            <span>
                                              #{idx + 1} ({new Date(h.date).toLocaleDateString('pt-BR')}):
                                            </span>{' '}
                                            <strong>
                                              {h.correctCount}/{h.questionsDone} ({h.accuracyPercent.toFixed(1)}%)
                                            </strong>
                                            {h.note && <span className="hist-note"> · {h.note}</span>}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))
      )}
    </div>
  );
};
