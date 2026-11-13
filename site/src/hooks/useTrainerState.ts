import { useCallback, useEffect, useState } from 'react';
import { SUBJECTS } from '../data/benchmarks2024';
import { EDITAL_CHECKLIST } from '../data/editalChecklist';
import { SYLLABUS_TOPICS } from '../data/syllabus';
import {
  EditalChecklistItem,
  EditalItemProgress,
  EditalPracticeEntry,
  EvolutionMilestone,
  KnowledgeRating,
  QuestionAttempt,
  QuestionItem,
  SubjectId,
  SubjectMeta,
  SyllabusTopic,
  TopicStatus,
  TrainerProfile,
  UserMark,
} from '../types';

const STORAGE_KEY = 'bacen_2027_econ_trainer_v1';

export const DEFAULT_EDITAL_ITEM_PROGRESS: EditalItemProgress = {
  completed: false,
  questionsDone: 0,
  correctCount: 0,
  history: [],
};

export const DEFAULT_PROFILE: TrainerProfile = {
  candidateName: 'Matheus Torrente',
  did2024Exam: true,
  score2024P1: undefined,
  score2024P2: undefined,
  score2024Disc: undefined,
  weeklyHours: 18,
  targetTrack: 'AC',
  subjectRatings: {
    portugues: 2,
    logica_estatistica: 2,
    direito_adm: 2,
    fundamentos_econ: 2,
    macroeconomia: 2,
    microeconomia: 2,
    financas: 2,
    estatistica_econometria: 2,
    cosif: 1,
    discursivas: 2,
  },
  topicStatuses: {},
  questionAttempts: {},
  discursiveDrafts: {
    P3: '',
    P4: '',
  },
  editalProgress: {},
  evolutionHistory: [],
  lastUpdatedAt: undefined,
};

export function normalizeProfile(parsed: Partial<TrainerProfile>): TrainerProfile {
  return {
    ...DEFAULT_PROFILE,
    ...parsed,
    candidateName:
      parsed.candidateName && parsed.candidateName.trim() && parsed.candidateName !== 'Candidato(a) BCB 2027'
        ? parsed.candidateName
        : DEFAULT_PROFILE.candidateName,
    subjectRatings: {
      ...DEFAULT_PROFILE.subjectRatings,
      ...(parsed.subjectRatings ?? {}),
    },
    topicStatuses: parsed.topicStatuses ?? {},
    questionAttempts: parsed.questionAttempts ?? {},
    discursiveDrafts: {
      ...DEFAULT_PROFILE.discursiveDrafts,
      ...(parsed.discursiveDrafts ?? {}),
    },
    editalProgress: parsed.editalProgress ?? {},
    evolutionHistory: Array.isArray(parsed.evolutionHistory) ? parsed.evolutionHistory : [],
  };
}

function loadInitialProfile(): TrainerProfile {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROFILE;
    const parsed = JSON.parse(raw) as Partial<TrainerProfile>;
    return normalizeProfile(parsed);
  } catch {
    return DEFAULT_PROFILE;
  }
}

export interface CebraspeStats {
  totalItems: number;
  answeredCount: number;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  annulledCount: number;
  netScore: number; // +1,00 certo / -0,50 errado / 0 branco / +1,00 anulada (se contabilizada)
  netScoreExcludingAnnulled: number;
  accuracyPercent: number | null;
}

/**
 * Calcula o escore líquido no padrão oficial Cebraspe (+1,00 / -0,50 / 0,00).
 * Por regra do edital, itens anulados ('X') atribuem +1,00 a todos os candidatos no escore oficial da prova.
 */
export function computeCebraspeScore(
  questions: QuestionItem[],
  attempts: Record<number, QuestionAttempt>
): CebraspeStats {
  let answeredCount = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let blankCount = 0;
  let annulledCount = 0;

  for (const q of questions) {
    if (q.officialAnswer === 'X') {
      annulledCount += 1;
      continue;
    }
    const att = attempts[q.id];
    if (!att) {
      continue;
    }
    answeredCount += 1;
    if (att.mark === 'B') {
      blankCount += 1;
    } else if (att.mark === q.officialAnswer) {
      correctCount += 1;
    } else {
      wrongCount += 1;
    }
  }

  const netWithoutAnnulled = correctCount * 1.0 - wrongCount * 0.5;
  const netScore = netWithoutAnnulled + annulledCount * 1.0;
  const judgedNonBlank = correctCount + wrongCount;
  const accuracyPercent = judgedNonBlank > 0 ? (correctCount / judgedNonBlank) * 100 : null;

  return {
    totalItems: questions.length,
    answeredCount,
    correctCount,
    wrongCount,
    blankCount,
    annulledCount,
    netScore,
    netScoreExcludingAnnulled: netWithoutAnnulled,
    accuracyPercent,
  };
}

export type EditalHealthTier =
  | 'sem_amostra'
  | 'critico'
  | 'atencao'
  | 'competitivo'
  | 'dominado';

export interface EditalItemEvaluation {
  item: EditalChecklistItem;
  completed: boolean;
  externalDone: number;
  externalCorrect: number;
  platform2024Done: number;
  platform2024Correct: number;
  totalQuestions: number;
  totalCorrect: number;
  accuracyPercent: number | null;
  tier: EditalHealthTier;
  tierLabel: string;
  trendDelta: number | null; // diferença em p.p. da última bateria registrada em relação à anterior
  history: EditalPracticeEntry[];
  lastUpdated?: string;
}

export interface EditalGroupSummary {
  groupTitle: string;
  subjectId: SubjectId;
  itemsCount: number;
  completedCount: number;
  totalQuestions: number;
  totalCorrect: number;
  accuracyPercent: number | null;
  tier: EditalHealthTier;
}

export interface EditalSubjectSummary {
  subject: SubjectMeta;
  itemsCount: number;
  completedCount: number;
  completionPercent: number;
  totalQuestions: number;
  totalCorrect: number;
  accuracyPercent: number | null;
  tier: EditalHealthTier;
  weakestItems: EditalItemEvaluation[];
  strongestItems: EditalItemEvaluation[];
}

export interface EditalEvolutionSummary {
  totalItems: number;
  completedItems: number;
  completionPercent: number;
  totalQuestions: number;
  totalCorrect: number;
  overallAccuracyPercent: number | null;
  itemEvaluations: EditalItemEvaluation[];
  bySubject: Record<SubjectId, EditalSubjectSummary>;
  criticalQueue: EditalItemEvaluation[];
  strongestHighlights: EditalItemEvaluation[];
}

export function classifyAccuracyTier(
  accuracy: number | null,
  totalQuestions: number
): { tier: EditalHealthTier; label: string } {
  if (accuracy === null || totalQuestions === 0) {
    return { tier: 'sem_amostra', label: 'Sem amostra' };
  }
  if (accuracy < 60) {
    return { tier: 'critico', label: 'Crítico (< 60%)' };
  }
  if (accuracy < 75) {
    return { tier: 'atencao', label: 'Atenção (60–74%)' };
  }
  if (accuracy < 85) {
    return { tier: 'competitivo', label: 'Competitivo (75–84%)' };
  }
  return {
    tier: 'dominado',
    label: totalQuestions >= 10 ? 'Dominado (≥ 85%)' : 'Ótimo início (≥ 85%)',
  };
}

/**
 * Consolida a evolução em TODOS os itens do edital (treino externo lançado pelo usuário
 * + desempenho opcional nas questões reais de 2024 vinculadas a cada item).
 */
export function computeEditalEvolutionSummary(
  profile: TrainerProfile,
  allQuestions: QuestionItem[],
  includePlatform2024 = true
): EditalEvolutionSummary {
  const questionMap = new Map<number, QuestionItem>();
  for (const q of allQuestions) questionMap.set(q.id, q);

  const itemEvaluations: EditalItemEvaluation[] = EDITAL_CHECKLIST.map((item) => {
    const raw = profile.editalProgress[item.id] ?? DEFAULT_EDITAL_ITEM_PROGRESS;
    const externalDone = Math.max(0, raw.questionsDone || 0);
    const externalCorrect = Math.min(externalDone, Math.max(0, raw.correctCount || 0));

    let platform2024Done = 0;
    let platform2024Correct = 0;
    if (includePlatform2024 && item.relatedQuestionIds.length > 0) {
      for (const qId of item.relatedQuestionIds) {
        const q = questionMap.get(qId);
        const att = profile.questionAttempts[qId];
        if (!q || q.officialAnswer === 'X' || !att || att.mark === 'B') continue;
        platform2024Done += 1;
        if (att.mark === q.officialAnswer) platform2024Correct += 1;
      }
    }

    const totalQuestions = externalDone + platform2024Done;
    const totalCorrect = externalCorrect + platform2024Correct;
    const accuracyPercent =
      totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1)) : null;

    const { tier, label } = classifyAccuracyTier(accuracyPercent, totalQuestions);

    const history = raw.history ?? [];
    let trendDelta: number | null = null;
    if (history.length >= 2) {
      const latest = history[history.length - 1];
      const prev = history[history.length - 2];
      trendDelta = Number((latest.accuracyPercent - prev.accuracyPercent).toFixed(1));
    }

    return {
      item,
      completed: Boolean(raw.completed),
      externalDone,
      externalCorrect,
      platform2024Done,
      platform2024Correct,
      totalQuestions,
      totalCorrect,
      accuracyPercent,
      tier,
      tierLabel: label,
      trendDelta,
      history,
      lastUpdated: raw.lastUpdated,
    };
  });

  const bySubject = {} as Record<SubjectId, EditalSubjectSummary>;
  for (const subj of SUBJECTS) {
    const items = itemEvaluations.filter((e) => e.item.subjectId === subj.id);
    const completedCount = items.filter((e) => e.completed).length;
    const totalQuestions = items.reduce((acc, e) => acc + e.totalQuestions, 0);
    const totalCorrect = items.reduce((acc, e) => acc + e.totalCorrect, 0);
    const accuracyPercent =
      totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1)) : null;
    const { tier } = classifyAccuracyTier(accuracyPercent, totalQuestions);

    const practiced = items.filter((e) => e.accuracyPercent !== null);
    const weakestItems = [...practiced]
      .sort((a, b) => (a.accuracyPercent ?? 100) - (b.accuracyPercent ?? 100))
      .slice(0, 3);
    const strongestItems = [...practiced]
      .sort((a, b) => (b.accuracyPercent ?? 0) - (a.accuracyPercent ?? 0))
      .slice(0, 3);

    bySubject[subj.id] = {
      subject: subj,
      itemsCount: items.length,
      completedCount,
      completionPercent: items.length > 0 ? Math.round((completedCount / items.length) * 100) : 0,
      totalQuestions,
      totalCorrect,
      accuracyPercent,
      tier,
      weakestItems,
      strongestItems,
    };
  }

  const completedItems = itemEvaluations.filter((e) => e.completed).length;
  const totalQuestions = itemEvaluations.reduce((acc, e) => acc + e.totalQuestions, 0);
  const totalCorrect = itemEvaluations.reduce((acc, e) => acc + e.totalCorrect, 0);
  const overallAccuracyPercent =
    totalQuestions > 0 ? Number(((totalCorrect / totalQuestions) * 100).toFixed(1)) : null;

  const criticalQueue = itemEvaluations
    .filter((e) => e.accuracyPercent !== null && e.accuracyPercent < 75)
    .sort((a, b) => (a.accuracyPercent ?? 100) - (b.accuracyPercent ?? 100));

  const strongestHighlights = itemEvaluations
    .filter((e) => e.accuracyPercent !== null && e.accuracyPercent >= 80)
    .sort((a, b) => (b.accuracyPercent ?? 0) - (a.accuracyPercent ?? 0));

  return {
    totalItems: itemEvaluations.length,
    completedItems,
    completionPercent:
      itemEvaluations.length > 0
        ? Math.round((completedItems / itemEvaluations.length) * 100)
        : 0,
    totalQuestions,
    totalCorrect,
    overallAccuracyPercent,
    itemEvaluations,
    bySubject,
    criticalQueue,
    strongestHighlights,
  };
}

export interface AdaptiveSubjectPlan {
  subject: SubjectMeta;
  rating: KnowledgeRating;
  gap: number;
  priorityScore: number;
  recommendedSharePercent: number;
  recommendedWeeklyHours: number;
  topicsDone: number;
  topicsTotal: number;
  editalDoneCount: number;
  editalTotalCount: number;
  editalAccuracyPercent: number | null;
  editalQuestionsCount: number;
  coachAdvice: string;
}

/**
 * Algoritmo do Treinador: cruza peso real na prova (P1/P2/P3-P4) × lacuna combinada
 * (autoavaliação 0–4 + desempenho real nos itens do edital) para calibrar as horas semanais.
 */
export function buildAdaptivePlan(
  profile: TrainerProfile,
  editalSummary?: EditalEvolutionSummary
): AdaptiveSubjectPlan[] {
  const effectiveWeight = (s: SubjectMeta): number => {
    if (s.id === 'discursivas') return 28;
    return s.prova === 'P2' ? s.itemsCount * 1.35 : s.itemsCount * 1.0;
  };

  const rows = SUBJECTS.map((subject) => {
    const rating = profile.subjectRatings[subject.id] ?? 2;
    let gap = Math.max(0.4, 4.3 - rating);

    const subjEdital = editalSummary?.bySubject[subject.id];
    const edAcc = subjEdital?.accuracyPercent ?? null;
    const edQs = subjEdital?.totalQuestions ?? 0;

    // Se houver amostra mínima de questões no edital (>= 5), ajusta a lacuna objetivamente
    if (edAcc !== null && edQs >= 5) {
      const empiricalGap = Math.max(0.35, ((95 - edAcc) / 22));
      gap = Number((gap * 0.5 + empiricalGap * 0.5).toFixed(2));
    }

    const weight = effectiveWeight(subject);
    const priorityScore = Number((weight * gap).toFixed(1));

    const subjectTopics = SYLLABUS_TOPICS.filter((t) => t.subjectId === subject.id);
    const topicsDone = subjectTopics.filter(
      (t) => profile.topicStatuses[t.id] === 'dominado'
    ).length;

    const weakLabels = (subjEdital?.weakestItems ?? [])
      .filter((w) => (w.accuracyPercent ?? 100) < 75)
      .slice(0, 2)
      .map((w) => `${w.item.code} (${w.accuracyPercent?.toFixed(0)}%)`);

    let coachAdvice = '';
    if (weakLabels.length > 0) {
      coachAdvice = `Gargalos detectados no seu rastreador: ${weakLabels.join(' e ')}. Ataque esses subitens antes de avançar para simulados gerais.`;
    } else if (rating <= 1) {
      coachAdvice = `Base crítica + alto peso (${subject.weightLabel}): comece pelos pré-requisitos e estude teoria + questões comentadas antes de cronometrar.`;
    } else if (rating === 2) {
      coachAdvice = `Nível intermediário: feche lacunas conceituais nos tópicos-chave e registre baterias de questões por subitem na aba Evolução do Edital.`;
    } else if (rating === 3) {
      coachAdvice = `Bom nível: foque em refinamento Cebraspe (recursos/nuances), treino de velocidade e redução de erros negativos (-0,50).`;
    } else {
      coachAdvice = `Manutenção estratégica: revisão espaçada por questões e simulados para transformar a matéria em pontuação líquida segura.`;
    }

    return {
      subject,
      rating,
      gap,
      priorityScore,
      topicsDone,
      topicsTotal: subjectTopics.length,
      editalDoneCount: subjEdital?.completedCount ?? 0,
      editalTotalCount: subjEdital?.itemsCount ?? 0,
      editalAccuracyPercent: edAcc,
      editalQuestionsCount: edQs,
      coachAdvice,
    };
  });

  const sumPriority = rows.reduce((acc, r) => acc + r.priorityScore, 0) || 1;

  return rows
    .map((r) => {
      const share = (r.priorityScore / sumPriority) * 100;
      const hours = (r.priorityScore / sumPriority) * Math.max(4, profile.weeklyHours);
      return {
        ...r,
        recommendedSharePercent: Math.round(share),
        recommendedWeeklyHours: Number(hours.toFixed(1)),
      };
    })
    .sort((a, b) => b.priorityScore - a.priorityScore);
}

export function getTopicPriorityOrder(
  topics: SyllabusTopic[],
  profile: TrainerProfile
): SyllabusTopic[] {
  const statusWeight: Record<TopicStatus, number> = {
    revisar: 3.2,
    em_estudo: 2.5,
    nao_iniciado: 2.0,
    dominado: 0.4,
  };
  return [...topics].sort((a, b) => {
    const ratingA = profile.subjectRatings[a.subjectId] ?? 2;
    const ratingB = profile.subjectRatings[b.subjectId] ?? 2;
    const statusA = profile.topicStatuses[a.id] ?? 'nao_iniciado';
    const statusB = profile.topicStatuses[b.id] ?? 'nao_iniciado';
    const scoreA = (4.5 - ratingA) * statusWeight[statusA] * (1 + a.relatedQuestionIds.length * 0.25);
    const scoreB = (4.5 - ratingB) * statusWeight[statusB] * (1 + b.relatedQuestionIds.length * 0.25);
    return scoreB - scoreA;
  });
}

export function buildEvolutionMilestone(
  profile: TrainerProfile,
  allQuestions: QuestionItem[],
  label: string,
  source: EvolutionMilestone['source'],
  overrideExam?: { netScore: number; answeredCount: number },
  note?: string
): EvolutionMilestone {
  const edital = computeEditalEvolutionSummary(profile, allQuestions, true);
  const overall = computeCebraspeScore(allQuestions, profile.questionAttempts);

  const subjectAccuracies: Partial<Record<SubjectId, number>> = {};
  for (const subj of SUBJECTS) {
    const acc = edital.bySubject[subj.id]?.accuracyPercent;
    if (acc !== null && acc !== undefined) {
      subjectAccuracies[subj.id] = Number(acc.toFixed(1));
    }
  }

  return {
    id: `m-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    createdAt: new Date().toISOString(),
    label: label.trim() || `Marco de Evolução (${new Date().toLocaleDateString('pt-BR')})`,
    source,
    editalCompletedCount: edital.completedItems,
    editalTotalCount: edital.totalItems,
    editalQuestionsTotal: edital.totalQuestions,
    editalAccuracyPercent:
      edital.overallAccuracyPercent !== null
        ? Number(edital.overallAccuracyPercent.toFixed(1))
        : null,
    exam2024NetScore: Number((overrideExam?.netScore ?? overall.netScore).toFixed(2)),
    exam2024AnsweredCount: overrideExam?.answeredCount ?? overall.answeredCount,
    subjectAccuracies,
    note: note?.trim() || undefined,
  };
}

export function useTrainerState() {
  const [profile, setProfile] = useState<TrainerProfile>(loadInitialProfile);
  const [localMutationSeq, setLocalMutationSeq] = useState(0);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
    } catch {
      // ignora erro de quota
    }
  }, [profile]);

  const commitMutation = useCallback((updater: (prev: TrainerProfile) => TrainerProfile) => {
    const now = new Date().toISOString();
    setProfile((prev) => ({
      ...updater(prev),
      lastUpdatedAt: now,
    }));
    setLocalMutationSeq((n) => n + 1);
  }, []);

  const updateProfileField = useCallback(
    <K extends keyof TrainerProfile>(field: K, value: TrainerProfile[K]) => {
      commitMutation((prev) => ({ ...prev, [field]: value }));
    },
    [commitMutation]
  );

  const setSubjectRating = useCallback(
    (subjectId: SubjectId, rating: KnowledgeRating) => {
      commitMutation((prev) => ({
        ...prev,
        subjectRatings: {
          ...prev.subjectRatings,
          [subjectId]: rating,
        },
      }));
    },
    [commitMutation]
  );

  const setTopicStatus = useCallback(
    (topicId: string, status: TopicStatus) => {
      commitMutation((prev) => ({
        ...prev,
        topicStatuses: {
          ...prev.topicStatuses,
          [topicId]: status,
        },
      }));
    },
    [commitMutation]
  );

  const recordQuestionAttempt = useCallback(
    (questionId: number, mark: UserMark) => {
      commitMutation((prev) => {
        const existing = prev.questionAttempts[questionId];
        return {
          ...prev,
          questionAttempts: {
            ...prev.questionAttempts,
            [questionId]: {
              ...existing,
              mark,
              updatedAt: new Date().toISOString(),
            },
          },
        };
      });
    },
    [commitMutation]
  );

  const toggleQuestionFlag = useCallback(
    (questionId: number) => {
      commitMutation((prev) => {
        const existing = prev.questionAttempts[questionId];
        return {
          ...prev,
          questionAttempts: {
            ...prev.questionAttempts,
            [questionId]: {
              mark: existing?.mark ?? 'B',
              updatedAt: existing?.updatedAt ?? new Date().toISOString(),
              selfNote: existing?.selfNote,
              flaggedForReview: !existing?.flaggedForReview,
            },
          },
        };
      });
    },
    [commitMutation]
  );

  const setQuestionNote = useCallback(
    (questionId: number, note: string) => {
      commitMutation((prev) => {
        const existing = prev.questionAttempts[questionId];
        return {
          ...prev,
          questionAttempts: {
            ...prev.questionAttempts,
            [questionId]: {
              mark: existing?.mark ?? 'B',
              updatedAt: new Date().toISOString(),
              flaggedForReview: existing?.flaggedForReview,
              selfNote: note,
            },
          },
        };
      });
    },
    [commitMutation]
  );

  const setDiscursiveDraft = useCallback(
    (part: 'P3' | 'P4', text: string) => {
      commitMutation((prev) => ({
        ...prev,
        discursiveDrafts: {
          ...prev.discursiveDrafts,
          [part]: text,
        },
      }));
    },
    [commitMutation]
  );

  // === AÇÕES DO RASTREADOR DE EVOLUÇÃO DO EDITAL ===
  const toggleEditalItemCompleted = useCallback(
    (itemId: string) => {
      commitMutation((prev) => {
        const existing = prev.editalProgress[itemId] ?? DEFAULT_EDITAL_ITEM_PROGRESS;
        return {
          ...prev,
          editalProgress: {
            ...prev.editalProgress,
            [itemId]: {
              ...existing,
              completed: !existing.completed,
              lastUpdated: new Date().toISOString(),
            },
          },
        };
      });
    },
    [commitMutation]
  );

  const setEditalItemStats = useCallback(
    (itemId: string, questionsDone: number, correctCount: number) => {
      const safeDone = Math.max(0, Math.round(questionsDone));
      const safeCorrect = Math.min(safeDone, Math.max(0, Math.round(correctCount)));
      commitMutation((prev) => {
        const existing = prev.editalProgress[itemId] ?? DEFAULT_EDITAL_ITEM_PROGRESS;
        return {
          ...prev,
          editalProgress: {
            ...prev.editalProgress,
            [itemId]: {
              ...existing,
              questionsDone: safeDone,
              correctCount: safeCorrect,
              lastUpdated: new Date().toISOString(),
            },
          },
        };
      });
    },
    [commitMutation]
  );

  const addEditalPracticeBatch = useCallback(
    (itemId: string, batchQuestions: number, batchCorrect: number, note?: string) => {
      const safeBatchQ = Math.max(1, Math.round(batchQuestions));
      const safeBatchC = Math.min(safeBatchQ, Math.max(0, Math.round(batchCorrect)));
      const acc = Number(((safeBatchC / safeBatchQ) * 100).toFixed(1));
      commitMutation((prev) => {
        const existing = prev.editalProgress[itemId] ?? DEFAULT_EDITAL_ITEM_PROGRESS;
        const entry: EditalPracticeEntry = {
          date: new Date().toISOString(),
          questionsDone: safeBatchQ,
          correctCount: safeBatchC,
          accuracyPercent: acc,
          note: note?.trim() || undefined,
        };
        return {
          ...prev,
          editalProgress: {
            ...prev.editalProgress,
            [itemId]: {
              ...existing,
              questionsDone: (existing.questionsDone || 0) + safeBatchQ,
              correctCount: (existing.correctCount || 0) + safeBatchC,
              lastUpdated: entry.date,
              history: [...(existing.history ?? []), entry],
            },
          },
        };
      });
    },
    [commitMutation]
  );

  const clearEditalItemProgress = useCallback(
    (itemId: string) => {
      commitMutation((prev) => {
        const copy = { ...prev.editalProgress };
        delete copy[itemId];
        return { ...prev, editalProgress: copy };
      });
    },
    [commitMutation]
  );

  // === MARCOS DA EVOLUÇÃO TEMPORAL ===
  const addEvolutionMilestone = useCallback(
    (
      allQuestions: QuestionItem[],
      label: string,
      source: EvolutionMilestone['source'] = 'manual',
      overrideExam?: { netScore: number; answeredCount: number },
      note?: string
    ) => {
      commitMutation((prev) => {
        const milestone = buildEvolutionMilestone(
          prev,
          allQuestions,
          label,
          source,
          overrideExam,
          note
        );
        return {
          ...prev,
          evolutionHistory: [...(prev.evolutionHistory ?? []), milestone],
        };
      });
    },
    [commitMutation]
  );

  const deleteEvolutionMilestone = useCallback(
    (milestoneId: string) => {
      commitMutation((prev) => ({
        ...prev,
        evolutionHistory: (prev.evolutionHistory ?? []).filter((m) => m.id !== milestoneId),
      }));
    },
    [commitMutation]
  );

  const applyCloudProfile = useCallback((parsed: Partial<TrainerProfile>) => {
    setProfile(normalizeProfile(parsed));
  }, []);

  const exportProfileJson = useCallback(() => {
    const slug = (profile.candidateName || 'matheus-torrente')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    const blob = new Blob([JSON.stringify(profile, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `bacen-2027-${slug || 'treino'}-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [profile]);

  const importProfileJson = useCallback(
    (jsonText: string): boolean => {
      try {
        const parsed = JSON.parse(jsonText) as Partial<TrainerProfile> & {
          profile?: Partial<TrainerProfile>;
        };
        const candidate =
          parsed && parsed.profile && typeof parsed.profile === 'object' ? parsed.profile : parsed;
        if (!candidate || typeof candidate !== 'object' || !candidate.subjectRatings) {
          return false;
        }
        setProfile({
          ...normalizeProfile(candidate),
          lastUpdatedAt: new Date().toISOString(),
        });
        setLocalMutationSeq((n) => n + 1);
        return true;
      } catch {
        return false;
      }
    },
    []
  );

  const resetProgress = useCallback(() => {
    setProfile(DEFAULT_PROFILE);
    setLocalMutationSeq((n) => n + 1);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignora
    }
  }, []);

  return {
    profile,
    localMutationSeq,
    updateProfileField,
    setSubjectRating,
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
  };
}
