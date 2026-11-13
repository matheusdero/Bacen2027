import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertOctagon,
  BookOpen,
  CheckSquare,
  Clock,
  GraduationCap,
  Layers,
  Search,
  Sparkles,
} from 'lucide-react';
import { SUBJECTS } from '../data/benchmarks2024';
import { SYLLABUS_TOPICS } from '../data/syllabus';
import { PrereqLevel, QuestionItem, SubjectId, SyllabusTopic, TopicStatus } from '../types';
import { FormulaBlock, MathText } from './MathText';

interface SyllabusViewProps {
  selectedSubjectId: SubjectId | 'all';
  selectedTopicId: string | null;
  topicStatuses: Record<string, TopicStatus>;
  allQuestions: QuestionItem[];
  onSelectSubject: (subjectId: SubjectId | 'all') => void;
  onSelectTopic: (topicId: string) => void;
  onSetTopicStatus: (topicId: string, status: TopicStatus) => void;
  onOpenQuestion: (questionId: number) => void;
}

const STATUS_OPTIONS: { value: TopicStatus; label: string }[] = [
  { value: 'nao_iniciado', label: 'Não iniciado' },
  { value: 'em_estudo', label: 'Em estudo' },
  { value: 'revisar', label: 'Revisar' },
  { value: 'dominado', label: 'Dominado' },
];

export const SyllabusView: React.FC<SyllabusViewProps> = ({
  selectedSubjectId,
  selectedTopicId,
  topicStatuses,
  allQuestions,
  onSelectSubject,
  onSelectTopic,
  onSetTopicStatus,
  onOpenQuestion,
}) => {
  const [levelFilter, setLevelFilter] = useState<PrereqLevel | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<TopicStatus | 'all'>('all');
  const [search, setSearch] = useState('');

  const filteredTopics = useMemo(() => {
    const q = search.trim().toLowerCase();
    return SYLLABUS_TOPICS.filter((topic) => {
      if (selectedSubjectId !== 'all' && topic.subjectId !== selectedSubjectId) {
        return false;
      }
      if (levelFilter !== 'all' && topic.level !== levelFilter) {
        return false;
      }
      const st = topicStatuses[topic.id] ?? 'nao_iniciado';
      if (statusFilter !== 'all' && st !== statusFilter) {
        return false;
      }
      if (q) {
        const haystack = [
          topic.code,
          topic.title,
          topic.editalDescription,
          topic.summary,
          ...topic.coreConcepts,
          ...topic.prerequisites,
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [selectedSubjectId, levelFilter, statusFilter, search, topicStatuses]);

  const activeTopic: SyllabusTopic | undefined = useMemo(() => {
    if (selectedTopicId) {
      const match = filteredTopics.find((t) => t.id === selectedTopicId) ??
        SYLLABUS_TOPICS.find((t) => t.id === selectedTopicId);
      if (match) return match;
    }
    return filteredTopics[0];
  }, [selectedTopicId, filteredTopics]);

  useEffect(() => {
    if (!selectedTopicId && filteredTopics[0]) {
      onSelectTopic(filteredTopics[0].id);
    }
  }, [selectedTopicId, filteredTopics, onSelectTopic]);

  const activeSubject = useMemo(
    () => SUBJECTS.find((s) => s.id === activeTopic?.subjectId),
    [activeTopic]
  );

  const relatedQuestions = useMemo(() => {
    if (!activeTopic) return [];
    const idSet = new Set(activeTopic.relatedQuestionIds);
    return allQuestions.filter((q) => idSet.has(q.id));
  }, [activeTopic, allQuestions]);

  const totalHoursRemaining = useMemo(() => {
    return SYLLABUS_TOPICS.reduce((acc, t) => {
      const st = topicStatuses[t.id] ?? 'nao_iniciado';
      if (st === 'dominado') return acc;
      return acc + (st === 'revisar' ? t.estimatedHours * 0.35 : t.estimatedHours);
    }, 0);
  }, [topicStatuses]);

  return (
    <div className="view-stack">
      {/* Cabeçalho e Filtros do Edital */}
      <section className="card">
        <div className="card-header">
          <div>
            <span className="eyebrow">Edital Verticalizado &amp; Aulas-Guia</span>
            <h2>Todo o Conteúdo Programático — Analista em Economia e Finanças</h2>
          </div>
          <div className="pill-summary">
            <Clock size={15} />
            <span>Carga estimada pendente: ~{Math.round(totalHoursRemaining)}h</span>
          </div>
        </div>

        {/* Pílulas de Disciplinas */}
        <div className="subject-chips">
          <button
            type="button"
            className={`subj-chip ${selectedSubjectId === 'all' ? 'active' : ''}`}
            onClick={() => onSelectSubject('all')}
          >
            Todas ({SYLLABUS_TOPICS.length})
          </button>
          {SUBJECTS.map((subj) => {
            const count = SYLLABUS_TOPICS.filter((t) => t.subjectId === subj.id).length;
            const done = SYLLABUS_TOPICS.filter(
              (t) => t.subjectId === subj.id && topicStatuses[t.id] === 'dominado'
            ).length;
            return (
              <button
                key={subj.id}
                type="button"
                className={`subj-chip ${selectedSubjectId === subj.id ? 'active' : ''}`}
                onClick={() => {
                  onSelectSubject(subj.id);
                  const first = SYLLABUS_TOPICS.find((t) => t.subjectId === subj.id);
                  if (first) onSelectTopic(first.id);
                }}
              >
                <span className="subj-dot" style={{ backgroundColor: subj.accentColor }} />
                {subj.shortName} ({done}/{count})
              </button>
            );
          })}
        </div>

        <div className="filter-bar">
          <div className="search-input-wrap">
            <Search size={15} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar no edital (ex.: Solow, Duration, LGPD, COSIF, Markov...)"
            />
          </div>

          <select
            value={levelFilter}
            onChange={(e) => setLevelFilter(e.target.value as PrereqLevel | 'all')}
            aria-label="Filtrar por nível prévio"
          >
            <option value="all">Todos os níveis</option>
            <option value="Basico">Nível Básico</option>
            <option value="Intermediario">Nível Intermediário</option>
            <option value="Avancado">Nível Avançado</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as TopicStatus | 'all')}
            aria-label="Filtrar por status de estudo"
          >
            <option value="all">Todos os status</option>
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Master-Detail: Lista de Tópicos + Conteúdo Didático Completo */}
      <div className="syllabus-layout">
        <aside className="card topic-sidebar">
          <div className="sidebar-count">
            {filteredTopics.length} tópico(s) listado(s)
          </div>
          <div className="topic-list">
            {filteredTopics.length === 0 ? (
              <div className="empty-state">
                Nenhum tópico encontrado com esses filtros.
              </div>
            ) : (
              filteredTopics.map((topic) => {
                const subj = SUBJECTS.find((s) => s.id === topic.subjectId);
                const status = topicStatuses[topic.id] ?? 'nao_iniciado';
                const isActive = activeTopic?.id === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    className={`topic-list-item ${isActive ? 'active' : ''}`}
                    onClick={() => onSelectTopic(topic.id)}
                  >
                    <div className="tli-header">
                      <span
                        className="tli-code"
                        style={{ color: subj?.accentColor ?? '#2563eb' }}
                      >
                        {topic.code}
                      </span>
                      <span className={`status-dot status-${status}`} title={status} />
                    </div>
                    <div className="tli-title">{topic.title}</div>
                    <div className="tli-meta">
                      <span>{topic.level}</span>
                      <span>· ~{topic.estimatedHours}h</span>
                      {topic.relatedQuestionIds.length > 0 && (
                        <span>· {topic.relatedQuestionIds.length} q. 2024</span>
                      )}
                    </div>
                  </button>
                );
              })
            )}
          </div>
        </aside>

        <main className="card topic-detail">
          {!activeTopic ? (
            <div className="empty-state">Selecione um tópico ao lado para estudar.</div>
          ) : (
            <div className="topic-lesson">
              <div className="lesson-top-bar">
                <div className="lesson-badges">
                  <span
                    className="badge"
                    style={{
                      backgroundColor: `${activeSubject?.accentColor ?? '#2563eb'}18`,
                      color: activeSubject?.accentColor ?? '#2563eb',
                    }}
                  >
                    {activeSubject?.name} ({activeSubject?.prova})
                  </span>
                  <span className={`level-badge level-${activeTopic.level}`}>
                    <GraduationCap size={13} /> Nível exigido: {activeTopic.level}
                  </span>
                  <span className="badge">
                    <Clock size={13} /> Estudo estimado: {activeTopic.estimatedHours}h
                  </span>
                </div>

                <div className="status-selector">
                  {STATUS_OPTIONS.map((opt) => {
                    const current = topicStatuses[activeTopic.id] ?? 'nao_iniciado';
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        className={`status-btn ${current === opt.value ? `active status-${opt.value}` : ''}`}
                        onClick={() => onSetTopicStatus(activeTopic.id, opt.value)}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <h2 className="lesson-title">
                {activeTopic.code} — {activeTopic.title}
              </h2>

              <div className="edital-box">
                <strong>Texto oficial do Edital nº 1/2024:</strong>{' '}
                <span>{activeTopic.editalDescription}</span>
              </div>

              {/* Pré-requisitos e Nível Prévio */}
              <div className="lesson-section prereq-box">
                <h3>
                  <Layers size={16} /> Conhecimento Prévio Necessário (Pré-requisitos)
                </h3>
                <p className="prereq-note">
                  Antes de avançar neste tópico, garanta domínio desta base — caso falte algum
                  ponto, comece por ele para evitar travar nas questões do Cebraspe:
                </p>
                <ul>
                  {activeTopic.prerequisites.map((pre, i) => (
                    <li key={i}>
                      <MathText text={pre} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visão Geral / Aula Síntese */}
              <div className="lesson-section">
                <h3>
                  <BookOpen size={16} /> Síntese do Treinador: Como Este Assunto Cai na Prova
                </h3>
                <p className="lesson-summary">
                  <MathText text={activeTopic.summary} />
                </p>
              </div>

              {/* Núcleo Teórico */}
              <div className="lesson-section">
                <h3>
                  <Sparkles size={16} /> Conceitos Fundamentais que Você Precisa Dominar
                </h3>
                <ul className="concept-list">
                  {activeTopic.coreConcepts.map((c, idx) => (
                    <li key={idx}>
                      <MathText text={c} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fórmulas Essenciais */}
              {activeTopic.keyFormulas.length > 0 && (
                <div className="lesson-section">
                  <h3>Fórmulas &amp; Equações-Chave</h3>
                  <div className="formulas-grid">
                    {activeTopic.keyFormulas.map((f, idx) => (
                      <FormulaBlock
                        key={idx}
                        label={f.label}
                        latex={f.latex}
                        note={f.note}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Pegadinhas do Cebraspe */}
              <div className="lesson-section trap-box">
                <h3>
                  <AlertOctagon size={16} /> Armadilhas Clássicas do Cebraspe Neste Tópico
                </h3>
                <ul>
                  {activeTopic.cebraspeTraps.map((trap, i) => (
                    <li key={i}>
                      <MathText text={trap} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Checklist de Domínio */}
              <div className="lesson-section checklist-box">
                <h3>
                  <CheckSquare size={16} /> Checklist de Prontidão (Só marque &quot;Dominado&quot; quando cumprir)
                </h3>
                <ul>
                  {activeTopic.studyChecklist.map((item, i) => (
                    <li key={i}>
                      <MathText text={item} />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Questões de 2024 mapeadas */}
              <div className="lesson-section">
                <h3>Questões Reais do Bacen 2024 Ligadas a Este Tópico</h3>
                {relatedQuestions.length === 0 ? (
                  <p className="muted-note">
                    Este tópico do edital não recebeu item direto na prova objetiva de 2024 (alto
                    potencial de aparecer em 2027!).
                  </p>
                ) : (
                  <div className="related-questions-grid">
                    {relatedQuestions.map((q) => (
                      <button
                        key={q.id}
                        type="button"
                        className="related-q-card"
                        onClick={() => onOpenQuestion(q.id)}
                      >
                        <div className="rq-top">
                          <strong>Item {q.id} ({q.prova})</strong>
                          <span className={`gabarito-pill gab-${q.officialAnswer}`}>
                            Gab: {q.officialAnswer === 'X' ? 'Anulada' : q.officialAnswer}
                          </span>
                        </div>
                        <p className="rq-preview">
                          <MathText
                            text={
                              q.statement.length > 120
                                ? `${q.statement.slice(0, 118)}...`
                                : q.statement
                            }
                          />
                        </p>
                        <span className="rq-cta">Abrir questão + aula de resolução →</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
