import { SubjectMeta } from '../types';

export const SUBJECTS: SubjectMeta[] = [
  {
    id: 'portugues',
    name: 'Língua Portuguesa',
    shortName: 'Português',
    prova: 'P1',
    itemsCount: 25,
    weightLabel: '25 itens (P1)',
    description:
      'Metade da prova objetiva básica (P1) + impacto direto na fórmula de penalidade das discursivas P3 e P4.',
    basePrerequisites: ['Leitura analítica de textos acadêmicos e normativos', 'Sintaxe básica do período'],
    accentColor: '#2563eb',
  },
  {
    id: 'logica_estatistica',
    name: 'Noções de Lógica e Estatística',
    shortName: 'Lógica e Estat.',
    prova: 'P1',
    itemsCount: 10,
    weightLabel: '10 itens (P1)',
    description:
      'Lógica proposicional/argumentação + estatística descritiva e probabilidade. Em 2024 os 10 itens foram 100% Estatística/Probabilidade.',
    basePrerequisites: ['Matemática do ensino médio', 'Teoria básica de conjuntos e frações'],
    accentColor: '#7c3aed',
  },
  {
    id: 'direito_adm',
    name: 'Direito Administrativo',
    shortName: 'Dir. Admin.',
    prova: 'P1',
    itemsCount: 5,
    weightLabel: '5 itens (P1)',
    description:
      'Princípios, autarquias (como o próprio BCB), Lei 8.112/90, Código de Ética, Conflito de Interesses, LAI e LGPD.',
    basePrerequisites: ['Noções de organização do Estado brasileiro', 'Leitura de legislação seca'],
    accentColor: '#0891b2',
  },
  {
    id: 'fundamentos_econ',
    name: 'Fundamentos de Macro e Microeconomia',
    shortName: 'Fund. Macro/Micro',
    prova: 'P1',
    itemsCount: 10,
    weightLabel: '10 itens (P1)',
    description:
      'Contas nacionais, agregados monetários, multiplicador bancário, balanço de pagamentos, oferta/demanda, FPP e teoria do consumidor.',
    basePrerequisites: ['Gráficos cartesianos e variação percentual', 'Leitura de identidades contábeis simples'],
    accentColor: '#0d9488',
  },
  {
    id: 'macroeconomia',
    name: 'Macroeconomia (Específica)',
    shortName: 'Macroeconomia',
    prova: 'P2',
    itemsCount: 18,
    weightLabel: '18 itens (P2)',
    description:
      'Maior disciplina específica empatada com Finanças: modelos clássico/novo-keynesiano, Solow, política monetária no BCB, Mundell-Fleming, DBGG, Curva de Phillips e RBC.',
    basePrerequisites: [
      'Fundamentos de Macroeconomia (P1)',
      'Álgebra básica e derivadas simples (taxas de variação)',
      'Regime de metas de inflação e Balanço de Pagamentos',
    ],
    accentColor: '#059669',
  },
  {
    id: 'microeconomia',
    name: 'Microeconomia (Específica)',
    shortName: 'Microeconomia',
    prova: 'P2',
    itemsCount: 10,
    weightLabel: '10 itens (P2)',
    description:
      'Consumidor e firma com cálculo, jogos sequenciais e Nash, falhas de mercado, equilíbrio geral/Walras e economia comportamental.',
    basePrerequisites: [
      'Cálculo diferencial (derivadas parciais e otimização com restrição)',
      'Fundamentos de Microeconomia (P1)',
    ],
    accentColor: '#d97706',
  },
  {
    id: 'financas',
    name: 'Finanças',
    shortName: 'Finanças',
    prova: 'P2',
    itemsCount: 18,
    weightLabel: '18 itens (P2)',
    description:
      'Mercado financeiro brasileiro (Tesouro, CDB/DI, fundos CVM, derivativos), teoria de carteiras, CAPM/APT, ETTJ, duration/convexidade, VaR e ESG.',
    basePrerequisites: [
      'Matemática financeira (juros compostos, VP, TIR)',
      'Estatística básica (média, variância, covariância)',
    ],
    accentColor: '#dc2626',
  },
  {
    id: 'estatistica_econometria',
    name: 'Estatística e Econometria',
    shortName: 'Estat. & Econom.',
    prova: 'P2',
    itemsCount: 12,
    weightLabel: '12 itens (P2)',
    description:
      'Inferência (EMV, método dos momentos, LGN, estimadores não-viesados), regressão, séries temporais (VAR/estacionaridade), painel (FE/RE) e Markov.',
    basePrerequisites: [
      'Probabilidade (P1) e distribuições clássicas (Normal, Poisson)',
      'Cálculo (logaritmos e derivadas para EMV) e Álgebra Linear básica',
    ],
    accentColor: '#9333ea',
  },
  {
    id: 'cosif',
    name: 'Contabilidade de Instituições Financeiras (COSIF)',
    shortName: 'COSIF / Contab.',
    prova: 'P2',
    itemsCount: 12,
    weightLabel: '12 itens (P2) + P4 (50 pts em 2024)',
    description:
      'Regulação contábil do CMN/BCB, instrumentos financeiros, operações de crédito, CPC-25 (provisões/contingências — tema da P4 de 2024!), PL, liquidação extrajudicial e consórcios.',
    basePrerequisites: [
      'Contabilidade Geral básica (Ativo, Passivo, PL, DRE, débito/crédito)',
      'Estrutura básica do Sistema Financeiro Nacional (CMN e BCB)',
    ],
    accentColor: '#b45309',
  },
  {
    id: 'discursivas',
    name: 'Provas Discursivas (P3 e P4)',
    shortName: 'Discursivas P3/P4',
    prova: 'P3/P4',
    itemsCount: 80,
    weightLabel: '80,00 pts (P3: 30 + P4: 50)',
    description:
      'Turno da tarde (4h). P3 cobra dissertação de atualidades (40 linhas) e P4 cobra situação-problema técnica específica (80 linhas). Mínimo de 40,00 pts.',
    basePrerequisites: [
      'Domínio da norma culta (fórmula penaliza fortemente erros/linha)',
      'Capacidade de estruturar resposta ponto a ponto pelo espelho Cebraspe',
    ],
    accentColor: '#0f766e',
  },
];

export const EXAM_BENCHMARKS_2024 = {
  cargo: 'Cargo 1: Analista – Área: Economia e Finanças',
  banca: 'Cebraspe (Certo/Errado: +1,00 / -0,50 / 0,00)',
  applicationDate: '04/08/2024 (Edital nº 1 de 15/01/2024)',
  salaryEdital: 'R$ 20.924,80 (subsídio inicial, 40h, Brasília/DF)',
  applicantsTotal: 24441,
  vacanciesImmediate: { total: 50, AC: 37, PcD: 3, PP: 10 },
  vacanciesCRLimit: { total: 150, AC: 112, PcD: 8, PP: 30 },
  demandPerImmediateSeat: { total: 488.82, AC: 660.57, PcD: 221.0, PP: 409.3 },
  demandPerCRSeat: { total: 162.94, AC: 218.22, PcD: 82.88, PP: 136.43 },
  minimums: {
    P1: 10.0,
    P2: 21.0,
    objetivaTotal: 36.0,
    discursivaTotal: 40.0,
  },
  realResultsEd10: {
    AC: {
      correctedCount: 164,
      cutoffNFPO: 84.5,
      medianNFPO: 89.75,
      maxNFPO: 105.0,
      medianP1: 38.25,
      medianP2: 51.75,
      eliminatedInDisc: 5,
      medianP3: 27.18,
      medianP4: 40.25,
      topTotalProvisional: 179.86,
      pos37TotalProvisional: 164.05,
      pos50TotalProvisional: 162.15,
      pos112TotalProvisional: 149.81,
    },
    PcD: {
      correctedCount: 18,
      cutoffNFPO: 72.0,
      medianNFPO: 76.5,
      maxNFPO: 101.0,
      eliminatedInDisc: 5,
      pos3TotalProvisional: 160.69,
      pos8TotalProvisional: 138.56,
    },
    PP: {
      correctedCount: 180,
      cutoffNFPO: 63.0,
      medianNFPO: 69.0,
      maxNFPO: 101.0,
      eliminatedInDisc: 47,
      pos10TotalProvisional: 154.8,
      pos30TotalProvisional: 142.52,
    },
  },
  gabaritoStats2024: {
    P1: { certo: 23, errado: 26, anuladas: [44] },
    P2: { certo: 36, errado: 30, anuladas: [52, 64, 83, 119], alteradas: [71] },
  },
};

export const KNOWLEDGE_LEVEL_LABELS: Record<number, { label: string; short: string; color: string }> = {
  0: { label: '0 · Nunca estudei / Sem base', short: 'Zero', color: '#dc2626' },
  1: { label: '1 · Base fraca (preciso de fundamentos)', short: 'Fraca', color: '#ea580c' },
  2: { label: '2 · Intermediário (entendo o básico)', short: 'Médio', color: '#d97706' },
  3: { label: '3 · Bom domínio (preciso lapidar Cebraspe)', short: 'Bom', color: '#2563eb' },
  4: { label: '4 · Nível de prova BCB (revisão e simulado)', short: 'Forte', color: '#059669' },
};
