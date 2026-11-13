import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BookOpen,
  Calculator,
  CheckCircle2,
  FileText,
  GraduationCap,
  Layers,
  PenTool,
} from 'lucide-react';
import { DISCURSIVAS_2024 } from '../data/discursivas';
import { EXAM_BENCHMARKS_2024 } from '../data/benchmarks2024';
import { MathText } from './MathText';

interface DiscursiveWorkshopViewProps {
  drafts: Record<'P3' | 'P4', string>;
  onSaveDraft: (part: 'P3' | 'P4', text: string) => void;
}

export const DiscursiveWorkshopView: React.FC<DiscursiveWorkshopViewProps> = ({
  drafts,
  onSaveDraft,
}) => {
  const [selectedId, setSelectedId] = useState<'P3' | 'P4'>('P3');
  const [showOfficialPattern, setShowOfficialPattern] = useState(true);

  // Simulador interativo de nota + penalidade gramatical (ND = NC - factor * NE / TL)
  const [aspectScores, setAspectScores] = useState<Record<string, number>>({
    P3_pres: 1.5,
    P4_pres: 2.5,
  });
  const [errorsCount, setErrorsCount] = useState<Record<'P3' | 'P4', number>>({
    P3: 2,
    P4: 4,
  });
  const [linesWritten, setLinesWritten] = useState<Record<'P3' | 'P4', number>>({
    P3: 36,
    P4: 72,
  });

  const activePart = useMemo(
    () => DISCURSIVAS_2024.find((d) => d.id === selectedId) ?? DISCURSIVAS_2024[0],
    [selectedId]
  );

  const draft = drafts[activePart.id] ?? '';
  const wordCount = useMemo(
    () => (draft.trim() ? draft.trim().split(/\s+/).length : 0),
    [draft]
  );
  // Estimativa realista de linhas manuscritas (~10 palavras/linha em folha pautada Cebraspe)
  const estimatedWrittenLines = Math.max(
    1,
    Math.round(Math.max(wordCount / 10.5, draft.split('\n').length))
  );

  // Calcula NC simulado
  const simulatedNC = useMemo(() => {
    const presKey = `${activePart.id}_pres`;
    const presVal = aspectScores[presKey] ?? activePart.presentationMax;
    const aspectSum = activePart.aspects.reduce((acc, asp) => {
      const k = `${activePart.id}_${asp.code}`;
      const val = aspectScores[k] ?? Number((asp.points * 0.85).toFixed(2));
      return acc + Math.min(asp.points, Math.max(0, val));
    }, 0);
    return Math.min(activePart.maxScore, presVal + aspectSum);
  }, [activePart, aspectScores]);

  const ne = Math.max(0, errorsCount[activePart.id] ?? 0);
  const tl = Math.max(1, linesWritten[activePart.id] ?? activePart.maxLines);
  const penalty = (activePart.penaltyFactor * ne) / tl;
  const finalScore = Math.max(0, simulatedNC - penalty);

  return (
    <div className="view-stack">
      <section className="card">
        <div className="card-header">
          <div>
            <span className="eyebrow">Turno da Tarde · 4h · Peso 80,00 pontos (40% do Concurso!)</span>
            <h2>Oficina de Provas Discursivas (P3 e P4) — Padrão Definitivo 2024</h2>
          </div>

          <div className="part-tabs">
            {DISCURSIVAS_2024.map((part) => (
              <button
                key={part.id}
                type="button"
                className={`part-tab ${selectedId === part.id ? 'active' : ''}`}
                onClick={() => setSelectedId(part.id)}
              >
                <strong>{part.id}</strong>
                <span>{part.maxScore} pts · {part.maxLines} linhas</span>
              </button>
            ))}
          </div>
        </div>

        <div className="disc-benchmarks-strip">
          <span>
            Mínimo combinado P3+P4: <strong>{EXAM_BENCHMARKS_2024.minimums.discursivaTotal.toFixed(2)} pts</strong>
          </span>
          <span>
            Mediana AC 2024 P3: <strong>{EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP3.toFixed(2)} / 30</strong>
          </span>
          <span>
            Mediana AC 2024 P4: <strong>{EXAM_BENCHMARKS_2024.realResultsEd10.AC.medianP4.toFixed(2)} / 50</strong>
          </span>
          <span>
            Eliminados abaixo de 40 pts (Ed. 10): <strong>5 AC · 5 PcD · 47 PP</strong>
          </span>
        </div>
      </section>

      <div className="disc-grid">
        {/* Coluna 1: Proposta Oficial + Pré-requisitos + Padrão de Resposta */}
        <section className="card disc-left">
          <div className="disc-part-header">
            <h2>{activePart.title}</h2>
            <p className="disc-sub">{activePart.subtitle}</p>
            <div className="disc-theme-box">
              <span>Tema Oficial 2024:</span>
              <strong>{activePart.themeTitle}</strong>
            </div>
          </div>

          <div className="disc-block">
            <h3>
              <FileText size={16} /> Textos Motivadores da Prova
            </h3>
            <div className="motivating-list">
              {activePart.motivatingTexts.map((m, i) => (
                <blockquote key={i} className="motivating-quote">
                  <p>
                    <MathText text={m.text} />
                  </p>
                  {m.source && <footer>— {m.source}</footer>}
                </blockquote>
              ))}
            </div>
            <p className="prompt-instruction">
              <MathText text={activePart.promptInstruction} />
            </p>
          </div>

          <div className="disc-block">
            <h3>Espelho de Correção &amp; Quesitos Avaliados</h3>
            <div className="aspects-list">
              <div className="aspect-card">
                <div className="aspect-top">
                  <strong>Apresentação / Estrutura / Clareza</strong>
                  <span className="badge">Até {activePart.presentationMax.toFixed(2)} pts</span>
                </div>
                <p>Legibilidade, respeito às margens, paragrafação e estrutura dissertativa.</p>
              </div>
              {activePart.aspects.map((asp) => (
                <div key={asp.code} className="aspect-card">
                  <div className="aspect-top">
                    <strong>Quesito {asp.code}</strong>
                    <span className="badge badge-info">Até {asp.points.toFixed(2)} pts</span>
                  </div>
                  <p>
                    <MathText text={asp.description} />
                  </p>
                  <div className="concepts-mini">
                    <strong>Critérios de conceito:</strong>{' '}
                    {asp.concepts.join(' | ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pré-requisitos & Estratégia */}
          <div className="prereq-box">
            <h3>
              <Layers size={16} /> Nível Prévio ({activePart.studyGuidance.requiredLevel}) &amp; Pré-requisitos
            </h3>
            <ul>
              {activePart.studyGuidance.prerequisites.map((p, i) => (
                <li key={i}>
                  <MathText text={p} />
                </li>
              ))}
            </ul>
          </div>

          {/* Padrão Oficial de Resposta Definitivo */}
          <div className="disc-block">
            <div className="pattern-head">
              <h3>
                <BookOpen size={16} /> Padrão de Resposta Definitivo (BCB 2024)
              </h3>
              <button
                type="button"
                className="btn btn-sm btn-outline"
                onClick={() => setShowOfficialPattern((v) => !v)}
              >
                {showOfficialPattern ? 'Ocultar Padrão' : 'Mostrar Padrão'}
              </button>
            </div>
            {showOfficialPattern && (
              <div className="official-pattern-box">
                {activePart.officialAnswerPattern.map((para, idx) => (
                  <p key={idx}>
                    <MathText text={para} />
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="two-subcols">
            <div className="checklist-box">
              <h3>
                <CheckCircle2 size={15} /> Como Tirar Nota Máxima
              </h3>
              <ul>
                {activePart.studyGuidance.howToScoreHigh.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="trap-box">
              <h3>
                <AlertTriangle size={15} /> Erros Mais Punidos
              </h3>
              <ul>
                {activePart.studyGuidance.commonMistakes.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Coluna 2: Simulador de Penalidade + Caderno de Rascunho */}
        <section className="card disc-right">
          <div className="calc-card">
            <h3>
              <Calculator size={17} /> Simulador Oficial da Nota {activePart.id} (Fórmula Cebraspe)
            </h3>
            <div className="formula-inline-note">
              Fórmula do Edital: <strong>Nota = NC − ({activePart.penaltyFactor} × NE / TL)</strong>{' '}
              (quanto mais linhas escritas TL até {activePart.maxLines}, menor o peso de cada erro NE!).
            </div>

            <div className="calc-sliders">
              <label className="slider-row">
                <span>Apresentação (0 a {activePart.presentationMax.toFixed(2)})</span>
                <input
                  type="number"
                  step="0.25"
                  min={0}
                  max={activePart.presentationMax}
                  value={aspectScores[`${activePart.id}_pres`] ?? activePart.presentationMax}
                  onChange={(e) =>
                    setAspectScores((prev) => ({
                      ...prev,
                      [`${activePart.id}_pres`]: Number(e.target.value),
                    }))
                  }
                />
              </label>

              {activePart.aspects.map((asp) => {
                const key = `${activePart.id}_${asp.code}`;
                const cur = aspectScores[key] ?? Number((asp.points * 0.85).toFixed(2));
                return (
                  <label key={asp.code} className="slider-row">
                    <span>
                      Quesito {asp.code} (máx {asp.points.toFixed(2)})
                    </span>
                    <input
                      type="number"
                      step="0.5"
                      min={0}
                      max={asp.points}
                      value={cur}
                      onChange={(e) =>
                        setAspectScores((prev) => ({
                          ...prev,
                          [key]: Number(e.target.value),
                        }))
                      }
                    />
                  </label>
                );
              })}

              <label className="slider-row">
                <span>Nº de erros gramaticais (NE)</span>
                <input
                  type="number"
                  min={0}
                  max={40}
                  value={ne}
                  onChange={(e) =>
                    setErrorsCount((prev) => ({
                      ...prev,
                      [activePart.id]: Number(e.target.value),
                    }))
                  }
                />
              </label>

              <label className="slider-row">
                <span>Total de linhas escritas (TL, máx {activePart.maxLines})</span>
                <input
                  type="number"
                  min={1}
                  max={activePart.maxLines}
                  value={tl}
                  onChange={(e) =>
                    setLinesWritten((prev) => ({
                      ...prev,
                      [activePart.id]: Math.min(activePart.maxLines, Math.max(1, Number(e.target.value))),
                    }))
                  }
                />
              </label>
            </div>

            <div className="calc-result-row">
              <div>
                <span>NC (Conteúdo):</span> <strong>{simulatedNC.toFixed(2)}</strong>
              </div>
              <div>
                <span>Desconto ({activePart.penaltyFactor}×{ne}/{tl}):</span>{' '}
                <strong className="text-warn">−{penalty.toFixed(2)}</strong>
              </div>
              <div className="final-disc-score">
                <span>Nota {activePart.id}:</span>{' '}
                <strong>
                  {finalScore.toFixed(2)} / {activePart.maxScore.toFixed(2)}
                </strong>
              </div>
            </div>
          </div>

          <div className="draft-card">
            <div className="draft-header">
              <h3>
                <PenTool size={16} /> Seu Treino Escrito — {activePart.id} (Salvo automaticamente)
              </h3>
              <span className="draft-stats">
                {wordCount} palavras · ~{estimatedWrittenLines}/{activePart.maxLines} linhas manuscritas
              </span>
            </div>
            <p className="draft-tip">
              <GraduationCap size={14} /> Monte primeiro um esquema tópico por quesito ({activePart.aspects.map((a) => a.code).join(', ')}) e depois redija em parágrafos objetivos.
            </p>
            <textarea
              className="draft-textarea"
              rows={18}
              value={draft}
              onChange={(e) => onSaveDraft(activePart.id, e.target.value)}
              placeholder={`Escreva aqui sua resposta para a ${activePart.id}...\n\nSugestão de roteiro:\n1. Introdução contextualizando o tema (3–4 linhas)\n2. Parágrafo dedicado a cada quesito exigido no espelho\n3. Fechamento sintético sem inventar propostas vagas`}
            />
          </div>
        </section>
      </div>
    </div>
  );
};
