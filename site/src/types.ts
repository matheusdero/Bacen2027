export type SubjectId =
  | 'portugues'
  | 'logica_estatistica'
  | 'direito_adm'
  | 'fundamentos_econ'
  | 'macroeconomia'
  | 'microeconomia'
  | 'financas'
  | 'estatistica_econometria'
  | 'cosif'
  | 'discursivas';

export type PrereqLevel = 'Basico' | 'Intermediario' | 'Avancado';

export type KnowledgeRating = 0 | 1 | 2 | 3 | 4;

export type TopicStatus = 'nao_iniciado' | 'em_estudo' | 'revisar' | 'dominado';

export type OfficialGabarito = 'C' | 'E' | 'X';
export type UserMark = 'C' | 'E' | 'B'; // B = em branco (0,00 pts)

export interface SubjectMeta {
  id: SubjectId;
  name: string;
  shortName: string;
  prova: 'P1' | 'P2' | 'P3/P4';
  itemsCount: number; // ou pontos no caso de discursivas
  weightLabel: string;
  description: string;
  basePrerequisites: string[];
  accentColor: string;
}

export interface FormulaItem {
  label: string;
  latex: string;
  note?: string;
}

export interface SyllabusTopic {
  id: string;
  subjectId: SubjectId;
  code: string;
  title: string;
  editalDescription: string;
  level: PrereqLevel;
  prerequisites: string[];
  estimatedHours: number;
  summary: string;
  coreConcepts: string[];
  keyFormulas: FormulaItem[];
  cebraspeTraps: string[];
  studyChecklist: string[];
  relatedQuestionIds: number[];
}

export interface QuestionContext {
  id: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  source?: string;
  table?: {
    headers: string[];
    rows: string[][];
    caption?: string;
  };
  diagramKey?: 'chart-estruturalista' | 'chart-embrapa' | 'chart-fpp' | 'tree-bancos';
  formulas?: FormulaItem[];
}

export interface QuestionItem {
  id: number;
  prova: 'P1' | 'P2';
  subjectId: SubjectId;
  topicId: string;
  editalRef: string;
  contextId?: string;
  command?: string;
  statement: string;
  diagramKey?: 'chart-estruturalista' | 'chart-embrapa' | 'chart-fpp' | 'tree-bancos';
  officialAnswer: OfficialGabarito;
  preliminaryAnswer?: 'C' | 'E';
  annulmentOrChangeReason?: string;
  requiredLevel: PrereqLevel;
  prerequisites: string[];
  quickVerdict: string;
  howToSolve: {
    intuition: string;
    steps: string[];
    formulaLatex?: string;
    trapAlert: string;
  };
  tags: string[];
}

export interface DiscursivePart {
  id: 'P3' | 'P4';
  title: string;
  subtitle: string;
  maxScore: number;
  maxLines: number;
  penaltyFactor: number; // 6 para P3, 5 para P4
  presentationMax: number;
  themeTitle: string;
  motivatingTexts: { text: string; source?: string }[];
  promptInstruction: string;
  aspects: {
    code: string;
    description: string;
    points: number;
    maxConcept: string;
    concepts: string[];
  }[];
  officialAnswerPattern: string[];
  studyGuidance: {
    requiredLevel: PrereqLevel;
    prerequisites: string[];
    howToScoreHigh: string[];
    commonMistakes: string[];
  };
}

export interface QuestionAttempt {
  mark: UserMark;
  updatedAt: string;
  flaggedForReview?: boolean;
  selfNote?: string;
}

export interface EditalChecklistItem {
  id: string;
  subjectId: SubjectId;
  topicId: string; // referência ao tópico em SYLLABUS_TOPICS para abrir aula
  code: string;
  groupTitle: string; // tema macro dentro da disciplina (ex.: "5. Morfossintaxe", "1. Instrumentos")
  title: string; // subitem exato do edital
  relatedQuestionIds: number[];
}

export interface EditalPracticeEntry {
  date: string; // ISO timestamp
  questionsDone: number;
  correctCount: number;
  accuracyPercent: number;
  note?: string;
}

export interface EditalItemProgress {
  completed: boolean;
  questionsDone: number;
  correctCount: number;
  lastUpdated?: string;
  history: EditalPracticeEntry[];
}

export interface EvolutionMilestone {
  id: string;
  createdAt: string; // ISO timestamp
  label: string;
  source: 'manual' | 'simulator' | 'milestone';
  editalCompletedCount: number;
  editalTotalCount: number;
  editalQuestionsTotal: number;
  editalAccuracyPercent: number | null;
  exam2024NetScore: number;
  exam2024AnsweredCount: number;
  subjectAccuracies: Partial<Record<SubjectId, number>>;
  note?: string;
}

export interface GitHubSyncConfig {
  token: string;
  gistId?: string;
  gistUrl?: string;
  githubLogin?: string;
  githubAvatarUrl?: string;
  autoSync: boolean;
  lastSyncedAt?: string;
  deviceLabel?: string;
}

export type SyncStateStatus =
  | 'disconnected'
  | 'syncing'
  | 'synced'
  | 'stale'
  | 'conflict'
  | 'error';

export interface TrainerProfile {
  candidateName: string;
  did2024Exam: boolean;
  score2024P1?: number;
  score2024P2?: number;
  score2024Disc?: number;
  weeklyHours: number;
  targetTrack: 'AC' | 'PcD' | 'PP';
  subjectRatings: Record<SubjectId, KnowledgeRating>;
  topicStatuses: Record<string, TopicStatus>;
  questionAttempts: Record<number, QuestionAttempt>;
  discursiveDrafts: Record<'P3' | 'P4', string>;
  editalProgress: Record<string, EditalItemProgress>;
  evolutionHistory: EvolutionMilestone[];
  lastUpdatedAt?: string;
}
