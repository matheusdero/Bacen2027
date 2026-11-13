import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  Bookmark,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Eye,
  EyeOff,
  GraduationCap,
  HelpCircle,
  Layers,
  Lightbulb,
  Search,
  CheckCircle2,
  XCircle,
  MinusCircle,
} from 'lucide-react';
import { SUBJECTS } from '../data/benchmarks2024';
import { QUESTION_CONTEXTS } from '../data/contexts';
import { SYLLABUS_TOPICS } from '../data/syllabus';
import {
  PrereqLevel,
  QuestionAttempt,
  QuestionItem,
  SubjectId,
  UserMark,
} from '../types';
import { ExamDiagram } from './ExamDiagrams';
import { FormulaBlock, MathText } from './MathText';

interface QuestionLabViewProps {
  allQuestions: QuestionItem[];
  activeQuestionId: number;
  attempts: Record<number, QuestionAttempt>;
  onSelectQuestion: (questionId: number) => void;
  onRecordAttempt: (questionId: number, mark: UserMark) => void;
  onToggleFlag: (questionId: number) => void;
  onSaveNote: (questionId: number, note: string) => void;
  onOpenTopicLesson: (subjectId: SubjectId, topicId: string) => void;
}

type StatusFilter =
  | 'all'
  | 'unanswered'
  | 'wrong'
  | 'correct'
  | 'flagged'
  | 'annulled_or_changed';

export const QuestionLabView: React.FC<QuestionLabViewProps> = ({
  allQuestions,
  activeQuestionId,
  attempts,
  onSelectQuestion,
  onRecordAttempt,
  onToggleFlag,
  onSaveNote,
  onOpenTopicLesson,
}) => {
  const [provaFilter, setProvaFilter] = useState<'all' | 'P1' | 'P2'>('all');
  const [subjectFilter, setSubjectFilter] = useState<SubjectId | 'all'>('all');
  const [levelFilter, setLevelFilter] = useState<PrereqLevel | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [search, setSearch] = useState('');
  const [studyModeAutoReveal, setStudyModeAutoReveal] = useState(true);
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [contextExpanded, setContextExpanded] = useState(true);

  const filteredQuestions = useMemo(() => {
    const qLower = search.trim().toLowerCase();
    return allQuestions.filter((item) => {
      if (provaFilter !== 'all' && item.prova !== provaFilter) return false;
      if (subjectFilter !== 'all' && item.subjectId !== subjectFilter) return false;
      if (levelFilter !== 'all' && item.requiredLevel !== levelFilter) return false;

      const att = attempts[item.id];
      if (statusFilter === 'unanswered' && att) return false;
      if (statusFilter === 'correct') {
        if (!att || att.mark === 'B' || item.officialAnswer === 'X' || att.mark !== item.officialAnswer) {
          return false;
        }
      }
      if (statusFilter === 'wrong') {
        if (!att || att.mark === 'B' || item.officialAnswer === 'X' || att.mark === item.officialAnswer) {
          return false;
        }
      }
      if (statusFilter === 'flagged' && !att?.flaggedForReview) return false;
      if (
        statusFilter === 'annulled_or_changed' &&
        item.officialAnswer !== 'X' &&
        !item.preliminaryAnswer
      ) {
        return false;
      }

      if (qLower) {
        const hay = [
          String(item.id),
          item.statement,
          item.editalRef,
          item.quickVerdict,
          ...item.tags,
          ...item.prerequisites,
        ]
          .join(' ')
          .toLowerCase();
        if (!hay.includes(qLower)) return false;
      }
      return true;
    });
  }, [
    allQuestions,
    provaFilter,
    subjectFilter,
    levelFilter,
    statusFilter,
    search,
    attempts,
  ]);

  const currentQuestion = useMemo(() => {
    return (
      filteredQuestions.find((q) => q.id === activeQuestionId) ??
      allQuestions.find((q) => q.id === activeQuestionId) ??
      filteredQuestions[0] ??
      allQuestions[0]
    );
  }, [filteredQuestions, allQuestions, activeQuestionId]);

  const currentIndexInFiltered = useMemo(
    () => filteredQuestions.findIndex((q) => q.id === currentQuestion?.id),
    [filteredQuestions, currentQuestion]
  );

  // Atalho de teclado Left / Right fora de inputs
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'ArrowRight' && currentIndexInFiltered >= 0 && currentIndexInFiltered < filteredQuestions.length - 1) {
        onSelectQuestion(filteredQuestions[currentIndexInFiltered + 1].id);
      } else if (e.key === 'ArrowLeft' && currentIndexInFiltered > 0) {
        onSelectQuestion(filteredQuestions[currentIndexInFiltered - 1].id);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [currentIndexInFiltered, filteredQuestions, onSelectQuestion]);

  if (!currentQuestion) {
    return <div className="card">Nenhuma questão encontrada.</div>;
  }

  const attempt = attempts[currentQuestion.id];
  const isRevealed =
    Boolean(revealedIds[currentQuestion.id]) ||
    (studyModeAutoReveal && Boolean(attempt));

  const context = currentQuestion.contextId
    ? QUESTION_CONTEXTS[currentQuestion.contextId]
    : undefined;
  const subject = SUBJECTS.find((s) => s.id === currentQuestion.subjectId);
  const linkedTopic = SYLLABUS_TOPICS.find((t) => t.id === currentQuestion.topicId);

  const diagramToRender = currentQuestion.diagramKey ?? context?.diagramKey;

  const handleMark = (mark: UserMark) => {
    onRecordAttempt(currentQuestion.id, mark);
    if (studyModeAutoReveal) {
      setRevealedIds((prev) => ({ ...prev, [currentQuestion.id]: true }));
    }
  };

  const toggleReveal = () => {
    setRevealedIds((prev) => ({
      ...prev,
      [currentQuestion.id]: !isRevealed,
    }));
  };

  const getPillClass = (q: QuestionItem): string => {
    const a = attempts[q.id];
    const classes = ['q-nav-pill'];
    if (q.id === currentQuestion.id) classes.push('current');
    if (q.officialAnswer === 'X') {
      classes.push('pill-annulled');
    } else if (a) {
      if (a.mark === 'B') classes.push('pill-blank');
      else if (a.mark === q.officialAnswer) classes.push('pill-correct');
      else classes.push('pill-wrong');
    }
    if (a?.flaggedForReview) classes.push('pill-flagged');
    return classes.join(' ');
  };

  const outcomeLabel = (() => {
    if (!attempt) return null;
    if (currentQuestion.officialAnswer === 'X') {
      return {
        text: 'Item Anulado pela Banca (+1,00 pt automático para todos no escore oficial)',
        cls: 'outcome-annulled',
      };
    }
    if (attempt.mark === 'B') {
      return { text: 'Deixado em Branco (0,00 pt — preservou sua nota)', cls: 'outcome-blank' };
    }
    if (attempt.mark === currentQuestion.officialAnswer) {
      return { text: 'Você acertou! (+1,00 ponto líquido)', cls: 'outcome-correct' };
    }
    return {
      text: 'Você errou (-0,50 ponto líquido na regra Cebraspe)',
      cls: 'outcome-wrong',
    };
  })();

  return (
    <div className="view-stack">
      {/* Barra de Filtros e Navegação */}
      <section className="card">
        <div className="card-header">
          <div>
            <span className="eyebrow">Estudo Guiado Questão a Questão</span>
            <h2>Laboratório da Prova 2024 — Enunciado, Resposta, Aula &amp; Pré-requisitos</h2>
          </div>

          <label className="toggle-pill">
            <input
              type="checkbox"
              checked={studyModeAutoReveal}
              onChange={(e) => setStudyModeAutoReveal(e.target.checked)}
            />
            <span>Revelar resposta e aula ao julgar</span>
          </label>
        </div>

        <div className="filter-bar">
          <div className="search-input-wrap">
            <Search size={15} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar nº da questão, termo ou tag (ex.: 71, Poisson, Solow, crase)..."
            />
          </div>

          <select
            value={provaFilter}
            onChange={(e) => setProvaFilter(e.target.value as 'all' | 'P1' | 'P2')}
            aria-label="Filtrar prova"
          >
            <option value="all">P1 + P2 (120 itens)</option>
            <option value="P1">Somente P1 (1–50)</option>
            <option value="P2">Somente P2 (51–120)</option>
          </select>

          <select
            value={subjectFilter}
            onChange={(e) => setSubjectFilter(e.target.value as SubjectId | 'all')}
            aria-label="Filtrar disciplina"
          >
            <option value="all">Todas as disciplinas</option>
            {SUBJECTS.filter((s) => s.id !== 'discursivas').map((s) => (
              <option key={s.id} value={s.id}>
                {s.shortName} ({s.prova})
              </option>
            ))}
          </select>

          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as PrereqLevel | 'all')}
            aria-label="Filtrar nível"
          >
            <option value="all">Todos os níveis</option>
            <option value="Basico">Nível Básico</option>
            <option value="Intermediario">Nível Intermediário</option>
            <option value="Avancado">Nível Avançado</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            aria-label="Filtrar status"
          >
            <option value="all">Todos ({allQuestions.length})</option>
            <option value="unanswered">Não respondidas</option>
            <option value="wrong">Minhas erradas</option>
            <option value="correct">Minhas certas</option>
            <option value="flagged">Marcadas p/ revisar</option>
            <option value="annulled_or_changed">Anuladas / Alteradas</option>
          </select>
        </div>

        {/* Grade compacta de navegação por números */}
        <div className="q-nav-header">
          <span>
            Mostrando {filteredQuestions.length} item(ns) · Selecionado: <strong>Item {currentQuestion.id}</strong>
          </span>
          <span className="legend-row">
            <span className="legend-dot dot-correct" /> Certo
            <span className="legend-dot dot-wrong" /> Errado
            <span className="legend-dot dot-blank" /> Branco
            <span className="legend-dot dot-annulled" /> Anulada
          </span>
        </div>

        <div className="q-nav-grid">
          {filteredQuestions.map((q) => (
            <button
              key={q.id}
              type="button"
              className={getPillClass(q)}
              onClick={() => onSelectQuestion(q.id)}
              title={`Item ${q.id} · ${q.editalRef}`}
            >
              {q.id}
            </button>
          ))}
        </div>
      </section>

      {/* Card Principal da Questão */}
      <div className="lab-grid">
        {/* Coluna Esquerda: Contexto, Enunciado e Julgamento */}
        <section className="card question-stage">
          <div className="q-stage-top">
            <div className="q-badges">
              <span className="item-number-badge">
                Item {currentQuestion.id} · {currentQuestion.prova}
              </span>
              <span
                className="badge"
                style={{
                  backgroundColor: `${subject?.accentColor ?? '#2563eb'}18`,
                  color: subject?.accentColor ?? '#2563eb',
                }}
              >
                {subject?.name}
              </span>
              <span className={`level-badge level-${currentQuestion.requiredLevel}`}>
                <GraduationCap size={13} /> Nível Prévio: {currentQuestion.requiredLevel}
              </span>
              {currentQuestion.officialAnswer === 'X' && (
                <span className="badge badge-warn">Anulada no Definitivo</span>
              )}
              {currentQuestion.preliminaryAnswer && currentQuestion.officialAnswer !== 'X' && (
                <span className="badge badge-accent">Gabarito Alterado (Recurso)</span>
              )}
            </div>

            <div className="q-nav-arrows">
              <button
                type="button"
                className={`btn btn-icon ${attempt?.flaggedForReview ? 'btn-flag-active' : ''}`}
                onClick={() => onToggleFlag(currentQuestion.id)}
                title="Marcar item no caderno de revisão"
              >
                <Bookmark size={16} />
                <span>{attempt?.flaggedForReview ? 'Marcada' : 'Revisar depois'}</span>
              </button>

              <button
                type="button"
                className="btn btn-outline-sm"
                disabled={currentIndexInFiltered <= 0}
                onClick={() =>
                  currentIndexInFiltered > 0 &&
                  onSelectQuestion(filteredQuestions[currentIndexInFiltered - 1].id)
                }
              >
                <ChevronLeft size={16} /> Anterior
              </button>
              <button
                type="button"
                className="btn btn-outline-sm"
                disabled={
                  currentIndexInFiltered < 0 ||
                  currentIndexInFiltered >= filteredQuestions.length - 1
                }
                onClick={() =>
                  currentIndexInFiltered >= 0 &&
                  currentIndexInFiltered < filteredQuestions.length - 1 &&
                  onSelectQuestion(filteredQuestions[currentIndexInFiltered + 1].id)
                }
              >
                Próxima <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="edital-ref-line">{currentQuestion.editalRef}</div>

          {/* Contexto compartilhado (Texto / Tabela / Dados) */}
          {context && (
            <div className="context-panel">
              <button
                type="button"
                className="context-toggle"
                onClick={() => setContextExpanded((v) => !v)}
              >
                <div>
                  <strong>Texto / Dados de Apoio: {context.title}</strong>
                  {context.subtitle && <span className="ctx-sub"> — {context.subtitle}</span>}
                </div>
                <span>{contextExpanded ? 'Recolher ▲' : 'Expandir ▼'}</span>
              </button>

              {contextExpanded && (
                <div className="context-body">
                  {context.paragraphs?.map((p, idx) => (
                    <p key={idx}>
                      <MathText text={p} />
                    </p>
                  ))}

                  {context.table && (
                    <div className="ctx-table-wrap">
                      {context.table.caption && (
                        <div className="ctx-table-caption">{context.table.caption}</div>
                      )}
                      <table className="ctx-table">
                        <thead>
                          <tr>
                            {context.table.headers.map((h, i) => (
                              <th key={i}>
                                <MathText text={h} />
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {context.table.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci}>
                                  <MathText text={cell} />
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {context.formulas?.map((f, i) => (
                    <FormulaBlock key={i} label={f.label} latex={f.latex} note={f.note} />
                  ))}

                  {context.source && <div className="ctx-source">Fonte: {context.source}</div>}
                </div>
              )}
            </div>
          )}

          {/* Diagrama SVG quando aplicável */}
          {diagramToRender && <ExamDiagram diagramKey={diagramToRender} />}

          {/* Comando e Enunciado do Item */}
          {currentQuestion.command && (
            <p className="q-command">
              <MathText text={currentQuestion.command} />
            </p>
          )}

          <div className="q-statement-box">
            <div className="q-statement-label">Assertiva para Julgamento (Cebraspe):</div>
            <p className="q-statement-text">
              <MathText text={currentQuestion.statement} />
            </p>
          </div>

          {/* Botões de Julgamento do Usuário */}
          <div className="judge-bar">
            <button
              type="button"
              className={`judge-btn judge-c ${attempt?.mark === 'C' ? 'selected' : ''}`}
              onClick={() => handleMark('C')}
            >
              <CheckCircle2 size={18} />
              <span>CERTO (C)</span>
            </button>
            <button
              type="button"
              className={`judge-btn judge-e ${attempt?.mark === 'E' ? 'selected' : ''}`}
              onClick={() => handleMark('E')}
            >
              <XCircle size={18} />
              <span>ERRADO (E)</span>
            </button>
            <button
              type="button"
              className={`judge-btn judge-b ${attempt?.mark === 'B' ? 'selected' : ''}`}
              onClick={() => handleMark('B')}
            >
              <MinusCircle size={18} />
              <span>DEIXAR EM BRANCO (0,00)</span>
            </button>

            <button
              type="button"
              className="btn btn-secondary reveal-btn"
              onClick={toggleReveal}
            >
              {isRevealed ? <EyeOff size={16} /> : <Eye size={16} />}
              <span>
                {isRevealed ? 'Ocultar Resposta e Aula' : 'Ler Resposta + Como Resolver'}
              </span>
            </button>
          </div>

          {outcomeLabel && (
            <div className={`outcome-banner ${outcomeLabel.cls}`}>{outcomeLabel.text}</div>
          )}

          {/* Pré-requisitos sempre visíveis antes ou depois para orientar estudo */}
          <div className="prereq-strip">
            <div className="prereq-strip-head">
              <div>
                <Layers size={15} />{' '}
                <strong>Nível Prévio &amp; Pré-requisitos para Resolver Este Item:</strong>{' '}
                <span className={`level-badge level-${currentQuestion.requiredLevel}`}>
                  {currentQuestion.requiredLevel}
                </span>
              </div>
              {linkedTopic && (
                <button
                  type="button"
                  className="btn btn-sm btn-outline"
                  onClick={() => onOpenTopicLesson(currentQuestion.subjectId, linkedTopic.id)}
                >
                  <BookOpen size={14} /> Abrir Aula Completa ({linkedTopic.code})
                </button>
              )}
            </div>
            <ul className="prereq-inline-list">
              {currentQuestion.prerequisites.map((p, idx) => (
                <li key={idx}>
                  <MathText text={p} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Coluna Direita: Resposta Oficial + Conteúdo Que Ensina Como Resolver */}
        <section className="card solution-stage">
          {!isRevealed ? (
            <div className="solution-locked">
              <HelpCircle size={36} className="locked-icon" />
              <h3>Tente julgar a assertiva antes ou abra a aula</h3>
              <p>
                Para memorização ativa, clique em <strong>Certo</strong>, <strong>Errado</strong> ou{' '}
                <strong>Deixar em Branco</strong> ao lado — ou clique abaixo se quiser estudar
                diretamente a resposta comentada e a teoria passo a passo.
              </p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={toggleReveal}
              >
                <Eye size={16} /> Mostrar Gabarito + Conteúdo que Ensina a Resolver
              </button>
            </div>
          ) : (
            <div className="solution-unlocked">
              <div className="answer-banner-row">
                <div className={`official-answer-pill ans-${currentQuestion.officialAnswer}`}>
                  Gabarito Oficial Definitivo:{' '}
                  <strong>
                    {currentQuestion.officialAnswer === 'C'
                      ? 'CERTO (C)'
                      : currentQuestion.officialAnswer === 'E'
                      ? 'ERRADO (E)'
                      : 'ANULADA (X)'}
                  </strong>
                </div>
                {currentQuestion.preliminaryAnswer && (
                  <span className="badge badge-accent">
                    Preliminar era: {currentQuestion.preliminaryAnswer}
                  </span>
                )}
              </div>

              {currentQuestion.annulmentOrChangeReason && (
                <div className="annulment-box">
                  <strong>Justificativa Oficial da Banca (Edital de Alteração/Anulação):</strong>{' '}
                  {currentQuestion.annulmentOrChangeReason}
                </div>
              )}

              <div className="quick-verdict-box">
                <strong>Resposta Direta:</strong> <MathText text={currentQuestion.quickVerdict} />
              </div>

              <div className="solve-section">
                <h3>
                  <Lightbulb size={17} /> Como Pensar e Resolver (Intuição da Questão)
                </h3>
                <p>
                  <MathText text={currentQuestion.howToSolve.intuition} />
                </p>
              </div>

              <div className="solve-section">
                <h3>Passo a Passo da Resolução</h3>
                <ol className="solve-steps">
                  {currentQuestion.howToSolve.steps.map((step, i) => (
                    <li key={i}>
                      <MathText text={step} />
                    </li>
                  ))}
                </ol>
              </div>

              {currentQuestion.howToSolve.formulaLatex && (
                <div className="solve-section">
                  <FormulaBlock
                    label="Resumo Matemático / Fórmula Aplicada"
                    latex={currentQuestion.howToSolve.formulaLatex}
                  />
                </div>
              )}

              <div className="trap-box">
                <h3>
                  <AlertTriangle size={16} /> Alerta de Pegadinha Cebraspe
                </h3>
                <p>
                  <MathText text={currentQuestion.howToSolve.trapAlert} />
                </p>
              </div>

              {linkedTopic && (
                <div className="topic-bridge-box">
                  <div>
                    <strong>Tópico do Edital Relacionado:</strong> {linkedTopic.code} —{' '}
                    {linkedTopic.title}
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-primary"
                    onClick={() => onOpenTopicLesson(currentQuestion.subjectId, linkedTopic.id)}
                  >
                    <BookOpen size={14} /> Revisar Teoria Completa do Tópico
                  </button>
                </div>
              )}

              {/* Anotações pessoais do candidato */}
              <div className="notes-box">
                <label className="notes-label" htmlFor={`note-${currentQuestion.id}`}>
                  Suas anotações de estudo neste item (salvas automaticamente):
                </label>
                <textarea
                  id={`note-${currentQuestion.id}`}
                  rows={3}
                  value={attempt?.selfNote ?? ''}
                  onChange={(e) => onSaveNote(currentQuestion.id, e.target.value)}
                  placeholder="Ex.: Errei por esquecer que na Lei de Walras os preços multiplicam as demandas excedentes..."
                />
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
