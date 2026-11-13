import { SyllabusTopic } from '../types';

export const SYLLABUS_TOPICS: SyllabusTopic[] = [
  // ==================== LÍNGUA PORTUGUESA ====================
  {
    id: 'pt-1',
    subjectId: 'portugues',
    code: '1–2',
    title: 'Compreensão, Interpretação e Gêneros Textuais',
    editalDescription:
      '1 Compreensão e interpretação de textos de gêneros variados. 2 Reconhecimento de tipos e gêneros textuais.',
    level: 'Basico',
    prerequisites: ['Leitura ativa de artigos acadêmicos e normativos', 'Distinção entre fato, opinião e inferência'],
    estimatedHours: 8,
    summary:
      'O Cebraspe usa textos técnicos longos (artigos econômicos, documentos da UNESCO/OCDE, ensaios). A chave é não extrapolar: distinguir o que o texto afirma literalmente ("conclui-se/infere-se") de generalizações indevidas ou inversões de sentido ("mais vantagens que desvantagens").',
    coreConcepts: [
      'Compreensão (o que está explícito no texto) vs. Interpretação/Inferência (conclusão logicamente sustentada pelo texto).',
      'Extrapolação, redução e contradição: os 3 erros clássicos de itens de interpretação.',
      'Tipologia textual (dissertativo-expositivo, argumentativo, injuntivo, narrativo, descritivo).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Trocar "oferece vantagens, mas gera riscos" por "oferece mais vantagens que desvantagens" (item 2 de 2024).',
      'Transformar lista exemplificativa ("entre outros aspectos...") em "principais aspectos" (item 16 de 2024).',
      'Atribuir caráter obrigatório/inevitável onde o texto usou modalidade de possibilidade ("podem").',
    ],
    studyChecklist: [
      'Sublinhar conectivos adversativos ("no entanto", "mas", "se... por outro lado") antes de ler os itens.',
      'Conferir quantificadores extremos ("sempre", "apenas", "mais que", "cada parágrafo").',
      'Resolver os itens 1–5 e 14–17 de 2024 comparando frase a frase com o texto.',
    ],
    relatedQuestionIds: [1, 2, 3, 4, 5, 14, 15, 16, 17, 25],
  },
  {
    id: 'pt-2',
    subjectId: 'portugues',
    code: '3–4',
    title: 'Ortografia, Coesão Textual e Tempos/Modos Verbais',
    editalDescription:
      '3 Domínio da ortografia oficial. 4 Domínio dos mecanismos de coesão textual (referenciação, substituição, repetição, conectores e tempos/modos verbais).',
    level: 'Intermediario',
    prerequisites: ['Classes de palavras (pronomes relativos, conjunções)', 'Reconhecimento de referente anafórico'],
    estimatedHours: 10,
    summary:
      'Cobra o papel lógico dos conectores ("pois" explicativo vs. conclusivo, "mas também" aditivo) e a cadeia referencial ("o qual", "que", "esses"). Essencial também para não perder pontos de coesão nas discursivas P3 e P4.',
    coreConcepts: [
      'Coesão referencial: anáfora (retomada por pronome relativo/demonstrativo) e catáfora.',
      'Valores semânticos dos conectores: explicação, causa, oposição, adição ("não só... mas também"), consequência.',
      'Tempos e modos verbais (indicativo vs. subjuntivo, futuro do pretérito para hipótese).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Fazer "o qual" ou "que" retomar termo próximo errado — sempre teste substituindo o pronome pelo antecedente.',
      'Confundir "ou" inclusivo/alternativo com sinonímia (item 5 de 2024: "suplementado ou substituído").',
    ],
    studyChecklist: [
      'Mapear conjunções coordenativas e subordinativas com seus sentidos exatos.',
      'Treinar identificação de referente de "que", "o qual", "onde", "cujo".',
      'Resolver itens 6, 12, 21 de 2024.',
    ],
    relatedQuestionIds: [6, 12, 21],
  },
  {
    id: 'pt-3',
    subjectId: 'portugues',
    code: '5',
    title: 'Morfossintaxe, Pontuação, Concordância, Regência, Crase e Colocação Pronominal',
    editalDescription:
      '5 Domínio da estrutura morfossintática do período: classes de palavras, coordenação, subordinação, pontuação, concordância, regência, crase e colocação pronominal.',
    level: 'Avancado',
    prerequisites: ['Análise sintática (sujeito, objeto direto/indireto, adjunto adverbial, aposto)', 'Diferença entre oração restritiva e explicativa'],
    estimatedHours: 18,
    summary:
      'Núcleo duro da gramática Cebraspe. Pontuação (vírgulas após travessões, ponto e vírgula em enumerações), funções sintáticas de advérbios vs. pronomes, sujeito composto/oracional na concordância e fatores de próclise/ênclise.',
    coreConcepts: [
      'Travessões intercalados NÃO substituem a vírgula obrigatória do termo anterior (ex.: adjunto adverbial deslocado).',
      'Oração adjetiva restritiva (sem vírgula) vs. explicativa (com vírgula).',
      'Crase: proibida antes de objeto direto não preposicionado; obrigatória na fusão a (prep.) + a (artigo).',
      'Próclise proibida em início absoluto de oração (após vírgula/pausa em início de oração principal).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Achar que travessão "engole" a vírgula do adjunto adverbial antecipado (item 7 de 2024).',
      'Colocar "se" antes do verbo logo após vírgula de adjunto adverbial longo ("..., se verifica" -> erro de colocação, item 13 de 2024).',
      'Confundir "a" artigo definido em "o que resulta em / quanto a / sobre..." ou antes de OD com crase facultativa (item 10).',
    ],
    studyChecklist: [
      'Revisar regras de próclise obrigatória e proibida (especialmente após pausa/vírgula).',
      'Dominar pontuação de adjuntos adverbiais deslocados e orações intercaladas.',
      'Resolver itens 7, 8, 9, 10, 11, 13, 20, 22 de 2024.',
    ],
    relatedQuestionIds: [7, 8, 9, 10, 11, 13, 20, 22],
  },
  {
    id: 'pt-4',
    subjectId: 'portugues',
    code: '6',
    title: 'Reescrita de Frases, Significação e Reorganização Textual',
    editalDescription:
      '6 Reescrita de frases e parágrafos do texto. 6.1 Significação das palavras. 6.2 Substituição de palavras/trechos. 6.3 Reorganização. 6.4 Níveis de formalidade.',
    level: 'Intermediario',
    prerequisites: ['Sintaxe de regência e pontuação', 'Vocabulário formal e sinônimos contextuais'],
    estimatedHours: 8,
    summary:
      'Itens clássicos: "A correção gramatical e o sentido seriam mantidos caso se reescrevesse...". Basta falhar UM dos dois critérios (correção OU sentido original) para o item ficar ERRADO.',
    coreConcepts: [
      'Verificação dupla obrigatória: (1) Gramática preservada? (2) Sentido original preservado?',
      'Deslocamento de advérbios ("ainda", "também") altera escopo e sentido.',
      'Substituição lexical deve manter transitividade e regência ("resultar em" vs. "acarretar" — acarretar é VTD, não aceita "em"!).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Trocar verbo transitivo indireto ("resultaria em") por transitivo direto ("acarretaria") mantendo a preposição "em" no texto (item 23 de 2024!).',
      'Substituir "deixados para trás" por "negligenciados" ou alterar posição de "ainda" mudando o foco semântico (itens 19 e 24).',
    ],
    studyChecklist: [
      'Ao julgar reescrita, cheque primeiro a regência do verbo novo encaixado na frase original.',
      'Leia a frase substituída em voz mental completa para detectar choque de preposições.',
      'Resolver itens 18, 19, 23, 24 de 2024.',
    ],
    relatedQuestionIds: [18, 19, 23, 24],
  },

  // ==================== NOÇÕES DE LÓGICA E ESTATÍSTICA ====================
  {
    id: 'le-1',
    subjectId: 'logica_estatistica',
    code: '1',
    title: 'Raciocínio Lógico e Lógica Proposicional',
    editalDescription:
      '1 Raciocínio lógico: estruturas lógicas, lógica de argumentação (analogias, inferências, deduções), lógica sentencial/proposicional, tabelas-verdade, equivalências e Leis de Morgan.',
    level: 'Basico',
    prerequisites: ['Operações lógicas básicas (e, ou, se... então, se e somente se)'],
    estimatedHours: 8,
    summary:
      'Embora em 2024 os 10 itens de P1 tenham cobrado apenas Estatística/Probabilidade, o tópico consta integralmente no edital e pode voltar em 2027. Exige domínio mecânico de equivalências da condicional e negações (Leis de Morgan).',
    coreConcepts: [
      'Conectivos: conjunção (∧), disjunção inclusiva (∨), disjunção exclusiva (⊻), condicional (→), bicondicional (↔).',
      'Equivalência da condicional: p → q ≡ ¬q → ¬p ≡ ¬p ∨ q.',
      'Negação da condicional: ¬(p → q) ≡ p ∧ ¬q ("mantém a primeira e nega a segunda").',
      'Leis de Morgan: ¬(p ∧ q) ≡ ¬p ∨ ¬q; ¬(p ∨ q) ≡ ¬p ∧ ¬q.',
    ],
    keyFormulas: [
      { label: 'Contrapositiva', latex: 'p \\to q \\equiv \\neg q \\to \\neg p' },
      { label: 'Negação de p → q', latex: '\\neg(p \\to q) \\equiv p \\land \\neg q' },
      { label: 'Leis de Morgan', latex: '\\neg(p \\land q) \\equiv \\neg p \\lor \\neg q' },
    ],
    cebraspeTraps: [
      'Negar "Se A, então B" usando "Se não A, então não B" (falso!).',
      'Confundir "todo A é B" com "todo B é A" ou negar "todo" usando "nenhum" em vez de "algum não".',
    ],
    studyChecklist: [
      'Memorizar as 5 tabelas-verdade e as 2 equivalências da condicional.',
      'Treinar negação de quantificadores (Todo, Algum, Nenhum).',
    ],
    relatedQuestionIds: [],
  },
  {
    id: 'le-2',
    subjectId: 'logica_estatistica',
    code: '2.1–2.4',
    title: 'Estatística Descritiva: Posição, Dispersão e Separatrizes',
    editalDescription:
      '2.1 População e amostra. 2.2 Histogramas e curvas de frequência. 2.3 Medidas de posição: média, moda, mediana e separatrizes. 2.4 Medidas de dispersão absoluta e relativa.',
    level: 'Basico',
    prerequisites: ['Média ponderada, raiz quadrada, ordenação de dados e porcentagens'],
    estimatedHours: 10,
    summary:
      'Tema muito cobrado na P1 de 2024! Envolve calcular média, moda, mediana e quartis a partir de distribuições de probabilidade, além da relação entre coeficiente de variação (CV), desvio padrão e variância.',
    coreConcepts: [
      'Moda: valor de maior frequência/probabilidade. Mediana: valor que acumula ≥ 50% por ambos os lados.',
      'Primeiro quartil (Q1): ponto onde a função acumulada atinge 25% (0,25).',
      'Coeficiente de variação: CV = σ / μ (medida adimensional de dispersão relativa).',
      'Atenção: se CV(V) = 2·CV(W) com médias iguais, σ(V) = 2·σ(W), logo Var(V) = 4·Var(W)!',
    ],
    keyFormulas: [
      { label: 'Esperança (Média)', latex: 'E(X) = \\sum x_i \\, P(X=x_i)' },
      { label: 'Coeficiente de Variação', latex: 'CV = \\frac{\\sigma}{\\mu}' },
      { label: 'Variância da Diferença (Indep.)', latex: '\\text{Var}(V - W) = \\text{Var}(V) + \\text{Var}(W)' },
    ],
    cebraspeTraps: [
      'Esquecer de elevar ao quadrado ao passar do desvio padrão para a variância (item 31 de 2024!).',
      'Subtrair variâncias em Var(V - W) em vez de somá-las quando V e W são independentes (item 35 de 2024!).',
    ],
    studyChecklist: [
      'Calcular P(X=x) normalizando constante c (soma das probabilidades = 1).',
      'Memorizar que Var(aX ± bY) = a²Var(X) + b²Var(Y) quando X e Y são independentes.',
      'Resolver itens 26, 29, 30, 31, 32, 35 de 2024.',
    ],
    relatedQuestionIds: [26, 29, 30, 31, 32, 35],
  },
  {
    id: 'le-3',
    subjectId: 'logica_estatistica',
    code: '2.5–2.6',
    title: 'Probabilidade Condicional, Independência e Variáveis Aleatórias',
    editalDescription:
      '2.5 Probabilidade condicional, independência. 2.6 Variável aleatória e funções de distribuição.',
    level: 'Intermediario',
    prerequisites: ['Teoria básica de conjuntos', 'Diferença entre variável discreta e contínua'],
    estimatedHours: 10,
    summary:
      'Cobra definição de variável aleatória discreta vs. contínua (suporte finito/enumerável é sempre discreta!), independência de eventos e cálculo exato de P(A∩B) e P(A|B).',
    coreConcepts: [
      'VA discreta: suporte finito ou enumerável (ex.: {-2,-1,0,1,2}), mesmo que os parâmetros sejam reais.',
      'Independência: se V e W são independentes, quaisquer eventos de V e de W são independentes: P(V<0 ∩ W<0) = P(V<0)·P(W<0).',
      'Para VA contínua, P(V = 0) = 0, logo P(V ≥ 0) = P(V > 0) e P(V < 0) = 1 - P(V > 0).',
      'Se V e W são independentes, P(V ≥ 0 | W ≥ 0) = P(V ≥ 0).',
    ],
    keyFormulas: [
      { label: 'Independência', latex: 'P(A \\cap B) = P(A)\\cdot P(B)' },
      { label: 'Prob. Condicional', latex: 'P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = P(A) \\text{ (se indep.)}' },
    ],
    cebraspeTraps: [
      'Achar que constante real "c" torna a distribuição contínua (item 28 de 2024: suporte finito = discreta!).',
      'Confundir P(V≥0|W≥0) com maior que P(V≥0) quando há independência (item 34 de 2024: é exatamente igual a 0,3).',
    ],
    studyChecklist: [
      'Praticar complementares em VAs contínuas: P(V < 0) = 1 - P(V > 0).',
      'Resolver itens 27, 28, 33, 34 de 2024.',
    ],
    relatedQuestionIds: [27, 28, 33, 34],
  },

  // ==================== DIREITO ADMINISTRATIVO ====================
  {
    id: 'da-1',
    subjectId: 'direito_adm',
    code: '1–3',
    title: 'Princípios, Poderes e Organização Administrativa (Autarquias / BCB)',
    editalDescription:
      '1 Administração pública: princípios básicos; direta e indireta. 2 Poderes administrativos. 3 Organização administrativa: serviços públicos, autarquias, agências reguladoras, fundações, EP e SEM.',
    level: 'Basico',
    prerequisites: ['Constituição Federal art. 37 (LIMPE)', 'Noção de personalidade jurídica de direito público vs. privado'],
    estimatedHours: 8,
    summary:
      'O Banco Central é autarquia de natureza especial (LC 179/2021). O Cebraspe cobra regime jurídico dos bens das autarquias (bens públicos -> impenhoráveis, imprescritíveis, mas alienáveis sob condições legais!) e indisponibilidade do interesse público.',
    coreConcepts: [
      'Princípios basilares: Supremacia do interesse público e Indisponibilidade do interesse público.',
      'Autarquias: pessoas jurídicas de direito público criadas por lei específica. Seus bens são bens públicos.',
      'Alienação de bens públicos: não são "invariavelmente inalienáveis"; bens dominicais podem ser alienados cumpridos os requisitos legais (desafetação, avaliação, autorização, licitação).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Usar advérbios absolutos como "invariavelmente inalienáveis" para bens de autarquias (item 36 de 2024 — bens dominicais são alienáveis!).',
      'Dizer que os bens públicos são alienáveis livremente (só após desafetação e rito legal).',
    ],
    studyChecklist: [
      'Diferenciar bens de uso comum, uso especial e dominicais quanto à alienabilidade.',
      'Revisar características do BCB como autarquia especial.',
      'Resolver itens 36 e 38 de 2024.',
    ],
    relatedQuestionIds: [36, 38],
  },
  {
    id: 'da-2',
    subjectId: 'direito_adm',
    code: '4 & 6',
    title: 'Atos Administrativos e Improbidade Administrativa',
    editalDescription:
      '4 Ato administrativo: conceito, requisitos, atributos, comunicação, anulação, revogação, convalidação, discricionariedade e vinculação. 6 Improbidade administrativa.',
    level: 'Basico',
    prerequisites: ['Princípio da legalidade e autotutela'],
    estimatedHours: 6,
    summary:
      'Embora não tenha caído diretamente em 2024, são apenas 5 questões na P1 e os temas alternam a cada edição. Foco nos requisitos (COFIFOMO), atributos (PATI), anulação vs. revogação e exigência de dolo na Lei de Improbidade (Lei 14.230/2021).',
    coreConcepts: [
      'Requisitos do ato: Competência, Finalidade, Forma, Motivo, Objeto.',
      'Anulação (ilegalidade — ex tunc, Adm. ou Judiciário) vs. Revogação (mérito/conveniência — ex nunc, só Adm.).',
      'Improbidade (Lei 8.429/92 atualizada pela 14.230/21): exige dolo específico; não existe mais improbidade culposa.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Afirmar que o Judiciário pode revogar ato administrativo por mérito.',
      'Afirmar que ato culposo configura improbidade administrativa (regra antiga revogada em 2021).',
    ],
    studyChecklist: [
      'Fazer quadro comparativo Anulação × Revogação × Convalidação.',
      'Revisar as 3 espécies de improbidade (enriquecimento ilícito, dano ao erário, violação a princípios).',
    ],
    relatedQuestionIds: [],
  },
  {
    id: 'da-3',
    subjectId: 'direito_adm',
    code: '5',
    title: 'Servidores Públicos e Lei nº 8.112/1990 (PAD e Regime Disciplinar)',
    editalDescription:
      '5 Servidores públicos. 5.1 Lei nº 8.112/1990: provimento, vacância, direitos, vantagens, regime disciplinar, seguridade social e Processo Administrativo Disciplinar (PAD).',
    level: 'Basico',
    prerequisites: ['Leitura dos arts. 116 a 182 da Lei 8.112/1990'],
    estimatedHours: 8,
    summary:
      'Cebraspe adora prazos literais da Lei 8.112/90! No PAD, o afastamento preventivo do servidor (art. 147) NÃO é "até a conclusão do PAD" — é pelo prazo de até 60 dias, prorrogável por igual período (máximo 120 dias), sem prejuízo da remuneração.',
    coreConcepts: [
      'Afastamento preventivo (art. 147): até 60 dias, prorrogável por mais 60 dias, findo o qual cessam os efeitos, ainda que não concluído o processo.',
      'Prazos do PAD: 60 dias + 60 dias (inquérito); 20 dias para julgamento. Sindicância: 30 + 30 dias.',
      'Penalidades: advertência, suspensão (até 90 dias), demissão, cassação de aposentadoria/disponibilidade, destituição de cargo em comissão/função.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Trocar o prazo máximo do afastamento preventivo (60 + 60 dias) por "até a conclusão do PAD" (item 37 de 2024!).',
      'Dizer que o afastamento preventivo suspende a remuneração (é COM remuneração).',
    ],
    studyChecklist: [
      'Decorar os prazos de sindicância, PAD, afastamento preventivo e prescrição (5 anos demissão, 2 anos suspensão, 180 dias advertência).',
      'Resolver item 37 de 2024.',
    ],
    relatedQuestionIds: [37],
  },
  {
    id: 'da-4',
    subjectId: 'direito_adm',
    code: '7–11',
    title: 'Ética, Conflito de Interesses, LAI e LGPD',
    editalDescription:
      '7 Código de Ética (Dec. 1.171/1994). 8 Código de Conduta da Alta Adm. Federal. 9 Lei de Conflito de Interesses (Lei 12.813/2013 — retificada pelo Edital 4). 10 LAI (Lei 12.527/2011). 11 LGPD (Lei 13.709/2018).',
    level: 'Basico',
    prerequisites: ['Leitura literal dos decretos/leis citados no edital'],
    estimatedHours: 8,
    summary:
      'Em 2024 caíram 2 itens diretos desse bloco (40% da prova de Direito Adm!): um da LGPD (tratamento de dados sensíveis para tutela da saúde/fins sanitários) e um do Código de Ética (demora excessiva no atendimento caracteriza inclusive dano moral!).',
    coreConcepts: [
      'Decreto 1.171/1994 (Seção I, inciso X): deixar esperar por tempo superior ao estritamente necessário não é apenas atitude contra a ética ou ato de desumanidade, mas principalmente grave dano moral aos usuários.',
      'LGPD (art. 11, II, f): dados pessoais sensíveis podem ser tratados sem consentimento para tutela da saúde, exclusivamente, em procedimento realizado por profissionais de saúde, serviços de saúde ou autoridade sanitária.',
      'Lei 12.813/2013 (retificada no Edital 4!): quarentena de 6 meses após saída de cargo/emprego com acesso a informação privilegiada (muito relevante para o BCB!).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Achar que "dano moral" no Dec. 1.171 é exagero jurídico — está expresso no texto literal do inciso X!',
      'Ignorar o Edital nº 4 que ajustou o tópico 9 para Lei nº 12.813/2013 (Conflito de Interesses).',
    ],
    studyChecklist: [
      'Ler na íntegra o Decreto 1.171/1994 e a Lei 12.813/2013.',
      'Ler arts. 5º, 7º e 11 da LGPD (bases legais para dados sensíveis e poder público).',
      'Resolver itens 39 e 40 de 2024.',
    ],
    relatedQuestionIds: [39, 40],
  },

  // ==================== FUNDAMENTOS DE MACRO E MICRO (P1) ====================
  {
    id: 'fe-1',
    subjectId: 'fundamentos_econ',
    code: 'I.1 & I.5',
    title: 'Contas Nacionais, Índices de Preços e Balanço de Pagamentos',
    editalDescription:
      'I MACROECONOMIA: 1 Contas nacionais. 5 Balanço de pagamentos.',
    level: 'Basico',
    prerequisites: ['Aritmética básica e leitura de balancetes/tabelas'],
    estimatedHours: 10,
    summary:
      'Ponto obrigatório de entrada para Economia! Em 2024 caiu conta numérica direta de PNBpm e Renda Nacional (itens 41 e 42), crítica ao PIB como medida de bem-estar (43) e índice de preços tipo Laspeyres / viés de substituição (44–46).',
    coreConcepts: [
      'PNBpm = PIBpm + RLEE, onde RLEE = Renda Recebida do Exterior (RR) - Renda Enviada ao Exterior (RE).',
      'PNLpm = PNBpm - Depreciação.',
      'RN (ou PNLcf) = PNLpm - Impostos Indiretos + Subsídios.',
      'Índice de Laspeyres (cesta fixa de quantidades): superestima o aumento do custo de vida quando há substituição por bens relativamente mais baratos.',
      'Balanço de Pagamentos (BPM6): Transações Correntes + Conta Capital + Conta Financeira + Erros e Omissões = 0.',
    ],
    keyFormulas: [
      { label: 'PNB a preços de mercado', latex: 'PNB_{pm} = PIB_{pm} + R_R - R_E' },
      { label: 'Renda Nacional (PNLcf)', latex: 'RN = PNB_{pm} - \\text{Dep} - II + \\text{Sub}' },
      { label: 'Índice de Laspeyres', latex: 'I_L = \\frac{\\sum p_t q_0}{\\sum p_0 q_0} \\times 100' },
    ],
    cebraspeTraps: [
      'Confundir Renda Recebida do Exterior (soma) com Renda Enviada (subtrai) ou esquecer de somar os subsídios ao calcular a Renda Nacional (itens 41 e 42!).',
      'Afirmar que PIB é medida perfeita/suficiente de bem-estar (ignora distribuição, lazer, economia informal, externalidades — item 43).',
    ],
    studyChecklist: [
      'Montar a ponte completa PIBpm -> PNBpm -> PNLpm -> PNLcf (RN) de cabeça.',
      'Praticar cálculo de índice de preços base 100 e inflação percentual entre períodos.',
      'Resolver itens 41 a 46 de 2024.',
    ],
    relatedQuestionIds: [41, 42, 43, 44, 45, 46],
  },
  {
    id: 'fe-2',
    subjectId: 'fundamentos_econ',
    code: 'I.2–I.4',
    title: 'Agregados Monetários, Multiplicador e Contas do Sistema Monetário',
    editalDescription:
      'I MACROECONOMIA: 2 Agregados monetários. 3 Multiplicador monetário, criação e destruição de moeda. 4 Contas do sistema monetário.',
    level: 'Basico',
    prerequisites: ['Conceito de balanço patrimonial (Ativo = Passivo)', 'Razões/proporções'],
    estimatedHours: 8,
    summary:
      'Base institucional essencial para entender o BCB! Define M1, M2, M3, M4 no padrão brasileiro, Base Monetária (papel-moeda emitido + reservas bancárias) e o multiplicador dos meios de pagamento.',
    coreConcepts: [
      'M1 = Papel-moeda em poder do público (PMPP) + Depósitos à vista (DV).',
      'Base Monetária (B) = Papel-moeda em poder do público (PMPP) + Reservas bancárias (R).',
      'Multiplicador monetário: m = 1 / [c + r(1 - c)], onde c = PMPP/M1 e r = R/DV.',
      'Criação/destruição de moeda: operações entre sistema bancário (emissor) e setor não-bancário.',
    ],
    keyFormulas: [
      { label: 'Multiplicador Monetário', latex: 'M_1 = m \\cdot B, \\quad m = \\frac{1}{c + r(1 - c)}' },
    ],
    cebraspeTraps: [
      'Confundir Base Monetária (passivo do BCB) com M1 (passivo do BCB + bancos comerciais via depósitos à vista).',
      'Esquecer que no Brasil os títulos públicos no mercado aberto saíram de M4 para fundos/operações dependendo da classificação vigente do BCB.',
    ],
    studyChecklist: [
      'Decorar os componentes exatos de M1, M2, M3 e M4 do Banco Central do Brasil.',
      'Derivar o multiplicador monetário em 3 linhas a partir de M1/B.',
    ],
    relatedQuestionIds: [],
  },
  {
    id: 'fe-3',
    subjectId: 'fundamentos_econ',
    code: 'II.1–II.2',
    title: 'Organização Econômica, FPP, Custo de Oportunidade e Oferta/Demanda',
    editalDescription:
      'II MICROECONOMIA: 1 Estrutura de mercado, papel dos preços, custo de oportunidade e fronteiras das possibilidades de produção. 2 Oferta e demanda.',
    level: 'Basico',
    prerequisites: ['Leitura de gráficos P × Q e deslocamentos vs. movimentos ao longo da curva'],
    estimatedHours: 8,
    summary:
      'Caiu com força na P1 de 2024 (itens 47–50) com 3 gráficos! Diferenciar deslocamento AO LONGO da FPP (custo de oportunidade entre bens), movimento de DENTRO para a FPP (eliminação de ineficiência/desemprego, NÃO avanço tecnológico!) e deslocamento DA FPP (avanço tecnológico/acumulação de fatores).',
    coreConcepts: [
      'Oferta perfeitamente inelástica (visão estruturalista) é uma reta VERTICAL, não positivamente inclinada.',
      'Quando oferta (S) desloca para direita MAIS que demanda (D), preço de equilíbrio cai e quantidade sobe.',
      'Na FPP: ponto interno = ineficiência/ocioso; ponto sobre a curva = eficiência produtiva; ponto externo = inatingível com tecnologia/fatores atuais.',
      'Ir de um ponto interno (c) para a fronteira (b) representa redução de ociosidade/ineficiência, não avanço tecnológico.',
    ],
    keyFormulas: [
      { label: 'Custo de oportunidade (TMT)', latex: 'TMT = -\\frac{\\Delta Y}{\\Delta X}' },
    ],
    cebraspeTraps: [
      'Chamar de "visão estruturalista (oferta inelástica)" um gráfico onde a curva de oferta S1 é inclinada (item 47 de 2024!).',
      'Chamar o movimento de um ponto interno para a borda da FPP de "avanço tecnológico" (item 50 de 2024!).',
    ],
    studyChecklist: [
      'Treinar interpretação visual de deslocamentos simultâneos de D e S.',
      'Resolver itens 47, 48, 49 e 50 de 2024.',
    ],
    relatedQuestionIds: [47, 48, 49, 50],
  },
  {
    id: 'fe-4',
    subjectId: 'fundamentos_econ',
    code: 'II.2.1–2.6',
    title: 'Consumidor Básico: Indiferença, Restrição Orçamentária e Elasticidade',
    editalDescription:
      '2.1 Curvas de indiferença. 2.2 Restrição orçamentária. 2.3 Equilíbrio do consumidor. 2.4 Efeitos preço, renda e substituição. 2.5 Curva de demanda. 2.6 Elasticidade da demanda.',
    level: 'Basico',
    prerequisites: ['Inclinação de retas e conceito de razão/variação percentual'],
    estimatedHours: 8,
    summary:
      'Serve de ponte direta para a Microeconomia de P2. Envolve condição de tangência TMS = Px/Py, decomposição de Slutsky/Hicks (efeito substituição + efeito renda para bens normais, inferiores e de Giffen) e elasticidade-preço da demanda.',
    coreConcepts: [
      'Equilíbrio interior: TMS = UMg_x / UMg_y = P_x / P_y.',
      'Efeito Substituição (sempre negativo com relação ao preço próprio) vs. Efeito Renda (positivo no bem normal ao cair o preço; negativo no bem inferior).',
      'Elasticidade-preço da demanda (ε_p) e impacto sobre a receita total (P·Q).',
    ],
    keyFormulas: [
      { label: 'Condição de tangência', latex: 'TMS_{x,y} = \\frac{UMg_x}{UMg_y} = \\frac{P_x}{P_y}' },
      { label: 'Elasticidade-preço', latex: '\\varepsilon_p = \\frac{\\partial Q}{\\partial P}\\cdot\\frac{P}{Q}' },
    ],
    cebraspeTraps: [
      'Confundir bem inferior com bem de Giffen (todo Giffen é inferior com |ER| > |ES|, mas nem todo inferior é Giffen).',
      'Esquecer soluções de canto em substitutos perfeitos e preferências quase-lineares.',
    ],
    studyChecklist: [
      'Desenhar decomposição de efeito renda e substituição para bem normal, inferior e Giffen.',
      'Memorizar relação entre elasticidade-preço e receita total.',
    ],
    relatedQuestionIds: [],
  },

  // ==================== MACROECONOMIA (P2 - 18 ITENS) ====================
  {
    id: 'mac-1',
    subjectId: 'macroeconomia',
    code: '1',
    title: 'Modelos Macroeconômicos: Clássico, Keynesiano, DA/OA, Solow e Escolha Intertemporal',
    editalDescription:
      '1 Principais modelos macroeconômicos: modelo clássico, modelo novo-keynesiano, modelos de oferta e demanda agregadas; modelos de crescimento; modelos de escolha intertemporal (consumo, investimento, gastos do governo e conta corrente).',
    level: 'Intermediario',
    prerequisites: ['Derivadas simples e equilíbrio em estado estacionário', 'IS-LM e DA-OA básicos'],
    estimatedHours: 20,
    summary:
      'Bloco central de teoria macroeconômica. Cuidado com as diferenças sutis: no modelo keynesiano simples de curto prazo com preços rígidos, salários reais/mínimos mais altos podem reduzir emprego ou afetar custos (e no modelo clássico/TQM há dicotomia clássica e neutralidade da moeda). No modelo de Solow, maior crescimento populacional (n) REDUZ o capital e o produto POR TRABALHADOR (per capita) no estado estacionário, mas AUMENTA a taxa de crescimento do produto agregado (n + g)!',
    coreConcepts: [
      'Modelo Keynesiano vs. Clássico: dicotomia clássica e Teoria Quantitativa da Moeda (MV = PY).',
      'Modelo de Solow: k* = [s / (n + g + δ)]^(1/(1-α)) para Cobb-Douglas; n ↑ reduz y*, mas produto agregado Y cresce à taxa n + g.',
      'Escolha intertemporal (Ramsey / Fisher / Equivalência Ricardiana): restrição orçamentária intertemporal das famílias e do governo.',
    ],
    keyFormulas: [
      { label: 'Estado estacionário Solow', latex: 's\\,f(k^*) = (n + g + \\delta)\\,k^*' },
      { label: 'Teoria Quantitativa (TQM)', latex: 'M \\cdot V = P \\cdot Y' },
    ],
    cebraspeTraps: [
      'Item 52 de 2024 foi ANULADO justamente porque não especificou "produto per capita" vs. "produto agregado" no Solow!',
      'Em economia aberta com câmbio flutuante e produto determinado pelo mercado de trabalho (pleno emprego), a moeda determina o nível de preços (TQM vale!).',
    ],
    studyChecklist: [
      'Dominar estática comparativa de Solow (s, n, g, δ) tanto para y* (per capita) quanto para Y (nível e taxa de crescimento).',
      'Revisar equivalência ricardiana e consumo intertemporal (renda permanente).',
      'Resolver itens 51, 52 e 53 de 2024.',
    ],
    relatedQuestionIds: [51, 52, 53],
  },
  {
    id: 'mac-2',
    subjectId: 'macroeconomia',
    code: '2',
    title: 'Política Monetária: Metas para Inflação, Credibilidade e Operacionalização BCB',
    editalDescription:
      '2 Política monetária: regras versus discricionariedade; modelos de credibilidade; convencionais e não convencionais; objetivos e instrumentos; regime de metas para a inflação.',
    level: 'Avancado',
    prerequisites: ['Multiplicador monetário (P1)', 'Operações de mercado aberto e taxa Selic'],
    estimatedHours: 16,
    summary:
      'Aqui o BCB cobra a própria casa! Quando o BCB fixa a taxa Selic (política via taxa de juros — modelo Poole / operacionalização atual por operações compromissadas), a oferta de moeda torna-se ENDÓGENA: choques no multiplicador monetário ou na demanda por moeda são acomodados pelas reservas sem afetar o produto/juros (item 56!). Além disso, pela LRF (art. 34), o BCB é PROIBIDO de emitir títulos próprios desde 2002 (item 59!).',
    coreConcepts: [
      'Regime de metas de juros (Selic): o BCB acomoda choques de demanda por reservas/multiplicador para manter a Selic na meta.',
      'LRF art. 34: o BCB NÃO emite títulos para política monetária; utiliza títulos do Tesouro Nacional em operações compromissadas.',
      'Regras vs. Discricionariedade (Kydland & Prescott / Barro & Gordon): viés inflacionário e importância da independência/credibilidade (LC 179/2021).',
      'Política não convencional: Quantitative Easing (QE), Forward Guidance, taxas negativas.',
    ],
    keyFormulas: [
      { label: 'Regra de Taylor', latex: 'i_t = r^* + \\pi_t + \\alpha(\\pi_t - \\pi^*) + \\beta(y_t - y^*)' },
    ],
    cebraspeTraps: [
      'Achar que o BCB ainda emite títulos próprios (TBC/BBC acabaram com a LRF — item 59 ERRADO).',
      'Pensar que choques no multiplicador afetam a economia quando o instrumento operacional é a taxa de juros Selic (item 56 CERTO!).',
    ],
    studyChecklist: [
      'Estudar operacionalização do Copom, Selic-meta vs. Selic-over e operações compromissadas.',
      'Revisar viés inflacionário de Barro-Gordon e análise de Poole (choque IS vs. choque LM).',
      'Resolver itens 56 e 59 de 2024.',
    ],
    relatedQuestionIds: [56, 59],
  },
  {
    id: 'mac-3',
    subjectId: 'macroeconomia',
    code: '3',
    title: 'Política Macroprudencial, Basileia e Estabilidade Financeira',
    editalDescription: '3 Política macroprudencial e estabilidade financeira.',
    level: 'Intermediario',
    prerequisites: ['Noções de risco bancário (crédito, mercado, operacional, liquidez)', 'Relatório de Estabilidade Financeira do BCB'],
    estimatedHours: 10,
    summary:
      'Instrumentos macroprudenciais atuam sobre risco sistêmico (pró-ciclicidade, interconectividade): colchão contracíclico, LTV, DSTI, compulsórios e requerimentos de capital de Basileia III. Atenção ao Risco Operacional no Brasil (Resolução BCB 356/2023 / Basileia III): o cálculo padronizado combina o Componente de Indicador de Negócio (BIC) com o Multiplicador de Perdas Internas (ILM), não sendo majoritariamente baseado apenas nas perdas incorridas (item 54!).',
    coreConcepts: [
      'Microprudencial (solidez individual de cada banco) vs. Macroprudencial (risco sistêmico agregado).',
      'Basileia III: Capital Principal, Nível I, Patrimônio de Referência, Adicional de Capital Principal (ACP Conservação, Contracíclico e Sistêmico).',
      'Risco operacional (SMA / nova abordagem padronizada): indicador de negócio (receitas/despesas) + componente histórico de perdas.',
    ],
    keyFormulas: [
      { label: 'Índice de Basileia', latex: 'IB = \\frac{\\text{Patrimônio de Referência (PR)}}{\\text{RWA}}' },
    ],
    cebraspeTraps: [
      'Dizer que a exigência de capital para risco operacional é calculada majoritariamente com base nas perdas incorridas (item 54 ERRADO — a base principal é o Business Indicator / receitas).',
    ],
    studyChecklist: [
      'Ler o capítulo de Política Macroprudencial e Basileia III (Res. CMN 4.955 / Res. BCB 356).',
      'Resolver item 54 de 2024.',
    ],
    relatedQuestionIds: [54],
  },
  {
    id: 'mac-4',
    subjectId: 'macroeconomia',
    code: '4',
    title: 'Política Fiscal, Déficit e Dívida Pública (DBGG vs. DLSP)',
    editalDescription: '4 Política fiscal. Déficit e dívida pública.',
    level: 'Intermediario',
    prerequisites: ['Resultado primário vs. nominal', 'Operações compromissadas do BCB'],
    estimatedHours: 10,
    summary:
      'Questão clássica do BCB: como as estatísticas fiscais brasileiras tratam compromissadas! Na metodologia oficial do Banco Central, as **operações compromissadas realizadas pelo BCB entram no cálculo da Dívida Bruta do Governo Geral (DBGG)** (item 58 CERTO!), diferentemente da metodologia do FMI que as exclui ou trata distinto.',
    coreConcepts: [
      'DBGG (conceito BCB): inclui Governo Federal, INSS, governos estaduais/municipais, e INCLUI operações compromissadas do BCB.',
      'DLSP (Dívida Líquida do Setor Público): inclui também BCB e estatais não financeiras (exceto Petrobras/Eletrobras), deduzindo ativos como reservas internacionais.',
      'Dinâmica da relação dívida/PIB: Δb = d_primario + [(r - g)/(1 + g)] · b_{t-1}.',
    ],
    keyFormulas: [
      { label: 'Dinâmica da Dívida/PIB', latex: '\\Delta b_t = -s_t + \\frac{r - g}{1 + g}\\,b_{t-1}' },
    ],
    cebraspeTraps: [
      'Confundir metodologia do BCB (compromissadas ENTRAM na DBGG) com a metodologia do FMI (item 58 de 2024!).',
    ],
    studyChecklist: [
      'Estudar o Manual de Estatísticas Fiscais do BCB (diferença DBGG BCB vs. FMI, DLSP, NFSP primária e nominal).',
      'Resolver item 58 de 2024.',
    ],
    relatedQuestionIds: [58],
  },
  {
    id: 'mac-5',
    subjectId: 'macroeconomia',
    code: '5',
    title: 'Economia Aberta: Mundell-Fleming, Paridade de Juros, PPC e Câmbio',
    editalDescription:
      '5 Modelo de paridade coberta e descoberta de taxa de juros. Modelos de exportação e importação. Regimes cambiais e taxa de câmbio de equilíbrio; termos de troca. Paridade de poder de compra.',
    level: 'Avancado',
    prerequisites: ['IS-LM-BP (Mundell-Fleming)', 'Condição de Marshall-Lerner e Curva J'],
    estimatedHours: 18,
    summary:
      'Tópico pesadíssimo na prova de 2024 (itens 55, 57, 61, 62, 63, 64!). Dominar a Trindade Impossível / Mundell-Fleming com mobilidade perfeita de capitais: (a) Câmbio fixo -> política monetária é PASSIVA (item 55); (b) Câmbio flexível -> política fiscal expansionista aprecia o câmbio e promove crowding-out TOTAL das exportações líquidas na mesma magnitude do aumento de G (item 57!). Paridade Coberta (CIP) vale com alta precisão por arbitragem livre de risco cambial (item 62!).',
    coreConcepts: [
      'Mundell-Fleming (mobilidade perfeita de capitais): Câmbio Fixo -> Fiscal eficaz, Monetária ineficaz/passiva; Câmbio Flutuante -> Monetária eficaz, Fiscal ineficaz (ΔNX = -ΔG).',
      'CIP (Coberta): (1+i) = (1+i*)·(F/E) — mantida por arbitragem sem risco cambial.',
      'UIP (Descoberta): i ≈ i* + (E^e - E)/E — envolve risco cambial e prêmio de risco.',
      'PPC (Paridade do Poder de Compra): limitações por barreiras comerciais, bens não comercializáveis (efeito Balassa-Samuelson) e cestas diferentes.',
      'Condição de Marshall-Lerner: desvalorização melhora balança comercial se |ε_X| + |ε_M| > 1.',
    ],
    keyFormulas: [
      { label: 'Paridade Coberta (CIP)', latex: '1 + i = (1 + i^*)\\frac{F}{E}' },
      { label: 'Paridade Descoberta (UIP)', latex: 'i \\approx i^* + \\frac{E^e_{t+1} - E_t}{E_t}' },
      { label: 'Marshall-Lerner', latex: '|\\varepsilon_X| + |\\varepsilon_M| > 1' },
    ],
    cebraspeTraps: [
      'Dizer que elasticidade-preço é irrelevante no efeito do câmbio sobre a balança comercial (falso, Marshall-Lerner depende diretamente delas! Item 63).',
      'Esquecer que em câmbio flexível + mobilidade perfeita, ΔG causa ΔNX = -ΔG (crowding-out externo completo, item 57).',
    ],
    studyChecklist: [
      'Montar tabela 2×2 de Mundell-Fleming (Fixo vs. Flutuante × Fiscal vs. Monetária).',
      'Diferenciar CIP (arbitragem) de UIP (expectativas/risco) e PPC absoluta vs. relativa.',
      'Resolver itens 55, 57, 61, 62, 63 e 64 de 2024.',
    ],
    relatedQuestionIds: [55, 57, 61, 62, 63, 64],
  },
  {
    id: 'mac-6',
    subjectId: 'macroeconomia',
    code: '6',
    title: 'Curva de Phillips, Expectativas Racionais e Inflação',
    editalDescription: '6 Curva de Phillips, expectativas racionais e inflação.',
    level: 'Intermediario',
    prerequisites: ['Taxa natural de desemprego (NAIRU)', 'Expectativas adaptativas vs. racionais'],
    estimatedHours: 8,
    summary:
      'Curva de Phillips com expectativas aumentadas (Friedman-Phelps) e Novo-Clássica (Lucas): trade-off entre inflação e desemprego no curto prazo quando expectativas são rígidas ou há surpresas inflacionárias, mas curva VERTICAL no longo prazo à taxa natural de desemprego.',
    coreConcepts: [
      'Phillips original (trade-off estável) vs. Phillips com expectativas: π_t = π_t^e - α(u_t - u_n) + ε_t.',
      'Expectativas racionais (Lucas/Sargent): política monetária antecipada não afeta produto/emprego nem no curto prazo (sob preços flexíveis).',
      'NAIRU (Non-Accelerating Inflation Rate of Unemployment) e histerese.',
    ],
    keyFormulas: [
      { label: 'Curva de Phillips Aumentada', latex: '\\pi_t = \\pi_t^e - \\alpha(u_t - u_n) + \\nu_t' },
    ],
    cebraspeTraps: [
      'Achar que a curva de Phillips garante trade-off permanente no longo prazo.',
    ],
    studyChecklist: [
      'Comparar Phillips em 3 versões: original, Friedman-Phelps (adaptativas) e Novo-Clássica/Novo-Keynesiana.',
      'Resolver item 60 de 2024.',
    ],
    relatedQuestionIds: [60],
  },
  {
    id: 'mac-7',
    subjectId: 'macroeconomia',
    code: '7',
    title: 'Teoria dos Ciclos Econômicos Reais (RBC)',
    editalDescription: '7 Teoria dos ciclos econômicos reais.',
    level: 'Intermediario',
    prerequisites: ['Função de produção e PTF (Produtividade Total dos Fatores)', 'Substituição intertemporal do trabalho'],
    estimatedHours: 6,
    summary:
      'Para a escola RBC (Kydland & Prescott), ciclos são respostas ÓTIMAS de agentes racionais em mercados competitivos com preços flexíveis a choques REAIS (sobretudo choques de produtividade/tecnológicos). Um choque tecnológico positivo desloca a produtividade marginal do trabalho, eleva o salário real e incentiva substituição intertemporal para trabalhar mais — aumentando produto E emprego (item 66!). A PTF inclui eficiência e qualidade dos insumos/mão de obra (item 65 ERRADO!).',
    coreConcepts: [
      'Motor dos ciclos: choques reais de produtividade (PTF), não choques monetários (moeda é neutra).',
      'Substituição intertemporal do lazer: salário real temporariamente alto estimula oferta de trabalho hoje.',
      'Políticas de estabilização são desnecessárias ou prejudiciais (flutuações são equilíbrios eficientes).',
    ],
    keyFormulas: [
      { label: 'Função de Produção RBC', latex: 'Y_t = A_t\\,F(K_t, L_t)' },
    ],
    cebraspeTraps: [
      'Dizer que choques de produtividade excluem mudanças na qualidade da mão de obra (item 65 ERRADO).',
      'Achar que choque tecnológico positivo reduz emprego (no RBC, eleva salário real e emprego via substituição intertemporal — item 66 CERTO).',
    ],
    studyChecklist: [
      'Entender por que RBC gera correlação positiva entre produto, emprego e salário real.',
      'Resolver itens 65 e 66 de 2024.',
    ],
    relatedQuestionIds: [65, 66],
  },
  {
    id: 'mac-8',
    subjectId: 'macroeconomia',
    code: '8',
    title: 'Mercado de Trabalho: Modelo Clássico vs. Novo-Keynesiano',
    editalDescription:
      '8 Mercado de trabalho – determinação dos salários no modelo novo-keynesiano e clássico e taxa natural de desemprego.',
    level: 'Intermediario',
    prerequisites: ['Oferta e demanda de trabalho', 'Salário nominal vs. salário real'],
    estimatedHours: 8,
    summary:
      'Contraste direto cobrado nos itens 67 e 68 de 2024! No modelo clássico, salários e preços são flexíveis e o desemprego é voluntário/friccional/estrutural. No novo-keynesiano, há microfundamentos para rigidez nominal e real (contratos escalonados de Calvo/Taylor, custos de menu, salário eficiência, insider-outsider), permitindo desemprego involuntário/cíclico persistente no curto/médio prazo e justificando política estabilizadora.',
    coreConcepts: [
      'Modelo Clássico: mercados se ajustam sozinhos (market clearing contínuo).',
      'Modelo Novo-Keynesiano: rigidez de preços/salários + concorrência imperfeita -> desequilíbrios persistentes e espaço para política econômica.',
      'Salário eficiência (Shapiro-Stiglitz) explica desemprego involuntário mesmo sem rigidez nominal.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Atribuir ao modelo novo-keynesiano a tese clássica de inexistência de desemprego cíclico (item 67 ERRADO!).',
    ],
    studyChecklist: [
      'Listar as 4 principais explicações novo-keynesianas para rigidez salarial/de preços.',
      'Resolver itens 67 e 68 de 2024.',
    ],
    relatedQuestionIds: [67, 68],
  },

  // ==================== MICROECONOMIA (P2 - 10 ITENS) ====================
  {
    id: 'mic-1',
    subjectId: 'microeconomia',
    code: '1',
    title: 'Teoria do Consumidor e da Firma (Avançada)',
    editalDescription: '1 Teoria do consumidor. Teoria da firma.',
    level: 'Avancado',
    prerequisites: ['Derivadas parciais, Lagrangiano e funções homogêneas / retornos de escala'],
    estimatedHours: 14,
    summary:
      'Diferente da P1 (mais gráfica), na P2 o Cebraspe cobra álgebra explícita! Em 2024: (a) utilidade quase-linear u(x,y) = x + ln y (o bem não-linear Y absorve a demanda inicial até Px/Py, e toda renda extra vai para o bem linear X — item 69!); (b) função de produção y = √(KL) tem retornos constantes de escala (grau 1/2 + 1/2 = 1), logo o custo de longo prazo é LINEAR em y, NÃO quadrático (item 70!).',
    coreConcepts: [
      'Preferências quase-lineares u(x,y) = x + v(y): demanda por y independe da renda (em solução interior), e todo aumento de renda vai para x!',
      'Retornos de escala na função custo de longo prazo: CRS (grau 1) -> C(y) = c·y (linear); DRS (<1) -> convexa/quadrática; IRS (>1) -> côncava.',
      'Lema de Shephard, Identidade de Roy e dualidade (maximização de lucro vs. minimização de custos).',
    ],
    keyFormulas: [
      { label: 'Quase-linear (interior)', latex: 'y^* = \\frac{P_x}{P_y}, \\quad x^* = \\frac{M}{P_x} - 1' },
      { label: 'Custo LP para y = √(KL)', latex: 'C(w, r, y) = 2\\sqrt{wr}\\,y' },
    ],
    cebraspeTraps: [
      'Confundir grau de homogeneidade de y = (KL)^(1/2) (1/2 + 1/2 = 1 -> retornos constantes!) com retornos decrescentes, achando que o custo é quadrático (item 70 ERRADO!).',
    ],
    studyChecklist: [
      'Derivar demandas marshallianas para Cobb-Douglas, substitutos perfeitos, complementares e quase-lineares.',
      'Derivar função custo C(w,r,y) a partir de Cobb-Douglas K^a L^b (expoente de y na função custo é 1/(a+b)!).',
      'Resolver itens 69 e 70 de 2024.',
    ],
    relatedQuestionIds: [69, 70],
  },
  {
    id: 'mic-2',
    subjectId: 'microeconomia',
    code: '2–3',
    title: 'Organização Industrial, Teoria dos Jogos e Leilões',
    editalDescription: '2 Análise de concentração e competição. Organização industrial. 3 Teoria dos jogos e leilões.',
    level: 'Avancado',
    prerequisites: ['Representação extensiva (árvore) e estratégica (matriz)', 'Indução retroativa (SPNE) e Equilíbrio de Nash'],
    estimatedHours: 14,
    summary:
      'Inclui oligopólio (Cournot, Bertrand, Stackelberg), HHI/CR4, leilões (1º/2º preço, equivalência de receita) e Teoria dos Jogos. Atenção máxima ao item 71 de 2024 (gabarito alterado de E para C!): todo jogo finito tem pelo menos um Equilíbrio de Nash (em estratégias puras ou mistas — Teorema de Nash, e equilíbrio puro também é caso degenerado de mista!).',
    coreConcepts: [
      'Jogo sequencial e Subgame Perfect Nash Equilibrium (SPNE) via indução retroativa.',
      'Estratégia estritamente dominante vs. dominada: checar a melhor resposta de B2 em CADA nó de decisão!',
      'Teorema de Nash: qualquer jogo finito possui ao menos um equilíbrio de Nash (puro ou em estratégias mistas).',
      'Leilões: 2º preço (Vickrey) é incentivo-compatível para lançar o próprio valor verdadeiro (em valores privados).',
    ],
    keyFormulas: [
      { label: 'Índice Herfindahl-Hirschman', latex: 'HHI = \\sum_{i=1}^n s_i^2' },
    ],
    cebraspeTraps: [
      'Confundir "não existe equilíbrio em estratégias mistas propriamente ditas" com "não existe equilíbrio de Nash em estratégias mistas" — todo jogo finito tem EN, e estratégia pura é caso particular de mista (justificativa oficial do item 71!).',
      'Dizer que uma ação é dominante para o seguidor sem conferir todos os ramos da árvore (item 72: se B1 mantém, B2 reduz (30>20); se B1 reduz, B2 reduz (25>8) — logo reduzir É dominante para B2!).',
    ],
    studyChecklist: [
      'Praticar conversão de árvore extensiva para forma normal (matriz) — o seguidor tem 4 estratégias (uma ação para cada nó)!',
      'Resolver Cournot e Stackelberg com demanda linear P = a - bQ.',
      'Resolver itens 71 e 72 de 2024.',
    ],
    relatedQuestionIds: [71, 72],
  },
  {
    id: 'mic-3',
    subjectId: 'microeconomia',
    code: '4',
    title: 'Falhas de Mercado: Informação Assimétrica, Externalidades e Bens Públicos',
    editalDescription:
      '4 Falhas de mercado: informação assimétrica, seleção adversa e risco moral (moral hazard). Externalidades e bens públicos.',
    level: 'Intermediario',
    prerequisites: ['Modelo Principal-Agente', 'Sinalização (Spence) e Seleção Adversa (Akerlof)'],
    estimatedHours: 10,
    summary:
      'Seleção adversa (informação oculta ex ante -> sinalização e screening), Risco Moral (ação oculta ex post -> incentivos no contrato Principal-Agente), Externalidades (Pigou, Coase) e Bens Públicos (não-rivalidade e não-excludência, condição de Samuelson).',
    coreConcepts: [
      'Sinalização (Spence): só separa tipos se o custo do sinal para o bom tipo for menor que o ganho salarial/contratual (condição de single-crossing).',
      'Relação Principal-Agente: o principal contrata o agente para agir em seu interesse sob assimetria de informação.',
      'Bens públicos: ΣTMS = TMT (soma vertical das demandas individuais).',
    ],
    keyFormulas: [
      { label: 'Condição de Samuelson', latex: '\\sum_{i=1}^n TMS_i = TMT' },
    ],
    cebraspeTraps: [
      'Inverter quem é Principal (quem contrata, ex.: empresa) e quem é Agente (quem presta o serviço/executa — item 74).',
      'Confundir seleção adversa (ex ante, característica oculta) com risco moral (ex post, esforço/ação oculta).',
    ],
    studyChecklist: [
      'Revisar modelos de Akerlof (limões), Spence (educação como sinal) e Rothschild-Stiglitz.',
      'Resolver itens 73 e 74 de 2024.',
    ],
    relatedQuestionIds: [73, 74],
  },
  {
    id: 'mic-4',
    subjectId: 'microeconomia',
    code: '5–6',
    title: 'Equilíbrio Geral, Lei de Walras, Caixa de Edgeworth e Bem-Estar',
    editalDescription: '5 Equilíbrio geral, lei de Walras e equilíbrio de Pareto. 6 Bem-estar social.',
    level: 'Avancado',
    prerequisites: ['Restrição orçamentária agregada', 'Eficiência de Pareto vs. Melhoria de Pareto'],
    estimatedHours: 10,
    summary:
      'Atenção cirúrgica às definições exatas! (1) Lei de Walras diz que a soma do **VALOR** das demandas excedentes (p1·z1 + p2·z2 = 0) é zero para quaisquer preços positivos — NÃO a soma das quantidades físicas z1 + z2 = 0 (item 75 ERRADO!). (2) O 1º Teorema do Bem-Estar garante que todo equilíbrio competitivo é Pareto-eficiente, NÃO que "qualquer dotação inicial possibilita troca que implica melhoria de Pareto" (se a dotação já for Pareto-eficiente, não há melhoria de Pareto! Item 76 ERRADO!).',
    coreConcepts: [
      'Lei de Walras: ∑ p_i · z_i(p) = 0 para todo p > 0.',
      '1º Teorema do Bem-Estar: equilíbrio walrasiano é Pareto-eficiente (sob não-saciedade local).',
      '2º Teorema do Bem-Estar: qualquer alocação Pareto-eficiente pode ser sustentada como equilíbrio competitivo mediante redistribuição de dotações (sob convexidade).',
    ],
    keyFormulas: [
      { label: 'Lei de Walras', latex: '\\sum_{k=1}^L p_k \\, z_k(\\mathbf{p}) = 0' },
    ],
    cebraspeTraps: [
      'Omitir os PREÇOS na Lei de Walras ("soma das demandas excedentes é zero" em vez de "soma do VALOR das demandas excedentes" — item 75!).',
      'Confundir eficiência de Pareto de uma alocação de equilíbrio com "melhoria de Pareto a partir de qualquer dotação inicial" (item 76!).',
    ],
    studyChecklist: [
      'Desenhar a Caixa de Edgeworth, curva de contrato e núcleo.',
      'Resolver itens 75 e 76 de 2024.',
    ],
    relatedQuestionIds: [75, 76],
  },
  {
    id: 'mic-5',
    subjectId: 'microeconomia',
    code: '7',
    title: 'Economia Comportamental (Kahneman & Tversky)',
    editalDescription: '7 Economia comportamental.',
    level: 'Basico',
    prerequisites: ['Valor esperado e Teoria da Utilidade Esperada (VNM)'],
    estimatedHours: 6,
    summary:
      'Kahneman & Tversky (1979) — Teoria dos Prospectos! Saber calcular valor esperado de loterias (ex.: A = 0,33·2500 + 0,66·2400 = 2409 > B = 2400; C = 0,33·2500 = 825 > D = 0,34·2400 = 816 — logo agente neutro ao risco escolheria A e C, não A e D!). Entender o Efeito Certeza (sobreponderar ganhos certos, gerando violação do axioma da independência da utilidade esperada).',
    coreConcepts: [
      'Neutro ao risco maximiza Valor Esperado E[X].',
      'Paradoxo de Allais / Efeito Certeza (certainty effect): redução de probabilidade de 100% para 99% pesa psicologicamente muito mais que de 34% para 33%.',
      'Função valor da Teoria dos Prospectos: definida sobre ganhos/perdas (ponto de referência), aversão à perda (~2x), côncava nos ganhos e convexa nas perdas.',
    ],
    keyFormulas: [
      { label: 'Valor Esperado', latex: 'E[X] = \\sum p_i \\, x_i' },
    ],
    cebraspeTraps: [
      'Errar a conta rápida do valor esperado das loterias A/B e C/D (item 77 ERRADO — neutro ao risco escolhe A e C).',
    ],
    studyChecklist: [
      'Calcular rapidamente E[X] e entender o Paradoxo de Allais.',
      'Resolver itens 77 e 78 de 2024.',
    ],
    relatedQuestionIds: [77, 78],
  },

  // ==================== FINANÇAS (P2 - 18 ITENS) ====================
  {
    id: 'fin-1',
    subjectId: 'financas',
    code: '1',
    title: 'Instrumentos do Mercado Financeiro e de Capitais (Tesouro, Ações, Fundos, Derivativos)',
    editalDescription:
      '1 Características de operações e instrumentos: 1.1 Títulos do Tesouro Nacional. 1.2 Títulos de dívida privada. 1.3 Securitização. 1.4 Compromissadas. 1.5 CDB/DI. 1.6 Ações. 1.7 Fundos. 1.8 Futuros, termo, swaps e opções. 1.9 Derivativos de crédito.',
    level: 'Intermediario',
    prerequisites: ['Matemática financeira básica', 'Diferença entre mercado primário e secundário'],
    estimatedHours: 18,
    summary:
      'Caiu em peso na prova (itens 79–83, 85)! Detalhes institucionais brasileiros são cobrados literalmente: (a) Tesouro Prefixado tem marcação a mercado no resgate antecipado — NÃO garante a taxa contratada antes do vencimento (79); (b) Tesouro IPCA+ paga taxa prefixada + IPCA (80); (c) ON dá direito a voto E dividendos; PN tem preferência nos dividendos/reembolso (82); (d) Fundo Cambial (CVM 175) exige no mínimo **80%** do patrimônio em ativos atrelados à variação cambial, não "pelo menos uma parte" (85!).',
    coreConcepts: [
      'Tesouro Direto: Selic (LFT), Prefixado (LTN/NTN-F), IPCA+ (NTN-B Principal / NTN-B). Marcação a mercado antes do vencimento.',
      'Ações: ON (voto + participação nos lucros) vs. PN (prioridade em dividendos/reembolso, sem voto em regra); valor de mercado ≠ valor intrínseco.',
      'Opções: Call (direito de comprar) e Put (direito de vender). Payoff da Put = max(K - S_T, 0); Lucro líquido = max(K - S_T, 0) - prêmio.',
      'Fundos CVM (Res. CVM 175): Renda Fixa (≥80% RF), Ações (≥67% ações), Cambial (≥80% variação cambial), Multimercado.',
    ],
    keyFormulas: [
      { label: 'Payoff Call / Put (titular)', latex: '\\Pi_{call} = \\max(S_T - K, 0) - p, \\quad \\Pi_{put} = \\max(K - S_T, 0) - p' },
    ],
    cebraspeTraps: [
      'Item 83 foi ANULADO por não especificar se a opção era americana ou europeia / data de vencimento.',
      'Dizer que "pelo menos uma parte" do patrimônio define fundo cambial (CVM exige ≥ 80%! Item 85 ERRADO).',
      'Afirmar que ação ordinária dá direito APENAS a voto (item 82 ERRADO — também dá direito a dividendos!).',
    ],
    studyChecklist: [
      'Montar tabela resumo de todos os títulos públicos (LTN, NTN-F, LFT, NTN-B) e privados (CDB, LCI/LCA, CRI/CRA, Debêntures).',
      'Memorizar percentuais mínimos das classes de fundos na Resolução CVM 175.',
      'Resolver itens 79, 80, 81, 82, 83 e 85 de 2024.',
    ],
    relatedQuestionIds: [79, 80, 81, 82, 83, 85],
  },
  {
    id: 'fin-2',
    subjectId: 'financas',
    code: '2',
    title: 'Eficiência de Mercado e Estratégias de Investimento',
    editalDescription:
      '2 Eficiência de Mercado. 2.1 Tipos de eficiência (fraca, semiforte, forte). 2.2 Propriedades dos mercados. 2.3 Estratégias de investimento.',
    level: 'Basico',
    prerequisites: ['Conjuntos de informação: preços históricos, pública e privada/privilegiada'],
    estimatedHours: 6,
    summary:
      'Hipótese dos Mercados Eficientes (Fama): fraca (preços passados), semiforte (toda informação pública), forte (toda informação, inclusive privada). Atenção ao item 84 de 2024: informações perfeitas e completas NÃO bastam sozinhas para garantir eficiência — é necessário também ausência de fricções/custos proibitivos de transação, racionalidade/arbitragem efetiva e livre competição!',
    coreConcepts: [
      'Eficiência Fraca: análise técnica não gera retorno anormal.',
      'Eficiência Semiforte: análise fundamentalista de dados públicos não gera retorno anormal.',
      'Eficiência Forte: nem insider trading gera retorno anormal.',
      'Limites à arbitragem e custos de transação impedem eficiência mesmo com boa informação.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Palavras absolutas como "bastam para garantir" (informação perfeita sem ausência de custos/limites à arbitragem não basta — item 84 ERRADO).',
    ],
    studyChecklist: [
      'Associar cada tipo de eficiência ao conjunto de informação e ao tipo de análise invalidada.',
      'Resolver item 84 de 2024.',
    ],
    relatedQuestionIds: [84],
  },
  {
    id: 'fin-3',
    subjectId: 'financas',
    code: '3',
    title: 'Teoria de Carteiras (Markowitz, Diversificação e Utilidade)',
    editalDescription:
      '3 Teoria de Carteiras: risco e retorno, média-variância, diversificação, fronteira eficiente, funções de utilidade e aversão ao risco, ativo livre de risco e custos de transação.',
    level: 'Intermediario',
    prerequisites: ['Derivada primeira e segunda (concavidade = aversão ao risco)', 'Variância de soma de duas variáveis'],
    estimatedHours: 12,
    summary:
      'Coração quantitativo de Finanças. Concavidade da função utilidade (u\'\'(w) < 0 -> avesso ao risco; u(w) = ln w -> u\' = 1/w > 0, u\'\' = -1/w² < 0 -> avesso ao risco!). Diversificação reduz o risco idiossincrático (não sistemático), restando o risco sistemático (de mercado), que não pode ser eliminado por diversificação.',
    coreConcepts: [
      'Aversão ao risco: u\'\'(w) < 0 (função côncava, ex.: ln w, √w); Neutro: u\'\' = 0; Propenso: u\'\' > 0.',
      'Risco Total = Risco Sistemático (não diversificável) + Risco Não-Sistemático (idiossincrático/diversificável).',
      'Fronteira Eficiente de Markowitz + Linha de Alocação de Capital (CAL / CML com ativo livre de risco -> Teorema da Separação de Tobin).',
    ],
    keyFormulas: [
      { label: 'Variância de 2 ativos', latex: '\\sigma_p^2 = w_1^2\\sigma_1^2 + w_2^2\\sigma_2^2 + 2w_1 w_2 \\text{Cov}(R_1, R_2)' },
      { label: 'Aversão Absoluta (Arrow-Pratt)', latex: 'A(w) = -\\frac{u\'\'(w)}{u\'(w)}' },
    ],
    cebraspeTraps: [
      'Inverter risco sistemático com risco diversificável.',
    ],
    studyChecklist: [
      'Testar u\' e u\'\' em funções utilidade clássicas (ln w, w^α, -e^{-aw}).',
      'Resolver itens 86 e 87 de 2024.',
    ],
    relatedQuestionIds: [86, 87],
  },
  {
    id: 'fin-4',
    subjectId: 'financas',
    code: '4',
    title: 'Apreçamento de Ativos: CAPM e APT',
    editalDescription: '4 Apreçamento de ativos. 4.1 Modelo CAPM e suas extensões. 4.2 Teoria de Apreçamento por Arbitragem (APT).',
    level: 'Intermediario',
    prerequisites: ['Teoria de carteiras e conceito de Beta', 'Regressão linear de fatores'],
    estimatedHours: 10,
    summary:
      'Atenção cirúrgica à diferença entre CAPM e APT (itens 88 e 89 de 2024)! O **CAPM** estabelece relação linear entre o risco sistemático (um único fator — carteira de mercado, Beta) e o retorno esperado (item 88 descreveu o CAPM chamando de APT -> ERRADO!). Já a **APT** (Ross) usa múltiplos fatores de risco e baseia-se na ausência de arbitragem em grandes portfólios, sendo mais flexível que o CAPM (item 89 CERTO!).',
    coreConcepts: [
      'CAPM: E(R_i) = R_f + β_i · [E(R_m) - R_f] — equilíbrio de mercado com fator único.',
      'APT: E(R_i) = R_f + ∑ β_{ik} · λ_k — múltiplos fatores sistemáticos e ausência de arbitragem.',
      'Extensões do CAPM: Fama-French (3 e 5 fatores: tamanho SMB, valor HML, momentum, etc.).',
    ],
    keyFormulas: [
      { label: 'CAPM (SML)', latex: 'E(R_i) = R_f + \\beta_i\\,[E(R_m) - R_f]' },
      { label: 'APT Multifatorial', latex: 'E(R_i) = R_f + \\sum_{k=1}^K \\beta_{ik}\\,\\lambda_k' },
    ],
    cebraspeTraps: [
      'Trocar o nome CAPM por APT na definição clássica de "relação linear entre risco sistemático e retorno esperado" (item 88 de 2024!).',
    ],
    studyChecklist: [
      'Comparar premissas do CAPM vs. APT (equilíbrio média-variância vs. ausência de arbitragem; 1 fator vs. K fatores).',
      'Resolver itens 88 e 89 de 2024.',
    ],
    relatedQuestionIds: [88, 89],
  },
  {
    id: 'fin-5',
    subjectId: 'financas',
    code: '5',
    title: 'Estrutura a Termo das Taxas de Juros (ETTJ)',
    editalDescription:
      '5 Estrutura a termo de taxas de juros. 5.1 Principais teorias. 5.2 Taxas à vista (spot) e a termo (forward). 5.3 Movimentos nas curvas de juros.',
    level: 'Intermediario',
    prerequisites: ['Capitalização composta e taxa equivalente', 'Taxas spot vs. forward'],
    estimatedHours: 10,
    summary:
      'Cobra as 3 teorias da ETTJ (Expectativas Puras, Preferência pela Liquidez, Segmentação de Mercado/Habitat Preferido), taxas spot vs. forward e movimentos da curva (deslocamento paralelo, inclinação/steepening-flattening e curvatura). Se investidores esperam que juros curtos AUMENTEM, a curva é ASCENDENTE (não descendente — item 91 ERRADO!).',
    coreConcepts: [
      'Teoria das Expectativas: taxa longa é média geométrica das taxas curtas esperadas futuras -> expectativa de alta => curva ascendente.',
      'Preferência pela Liquidez: títulos longos exigem prêmio de liquidez positivo.',
      'Movimentos da curva (Litterman & Scheinkman): Nível (shift paralelo), Inclinação (slope) e Curvatura (butterfly).',
    ],
    keyFormulas: [
      { label: 'Taxa a termo (forward)', latex: '(1 + r_{0,2})^2 = (1 + r_{0,1})(1 + f_{1,2})' },
    ],
    cebraspeTraps: [
      'Inverter a inclinação da curva na Teoria das Expectativas (expectativa de alta de juros = curva ascendente! Item 91).',
    ],
    studyChecklist: [
      'Praticar cálculo de taxa forward implícita a partir de duas taxas spot.',
      'Resolver itens 90, 91 e 92 de 2024.',
    ],
    relatedQuestionIds: [90, 91, 92],
  },
  {
    id: 'fin-6',
    subjectId: 'financas',
    code: '6',
    title: 'Renda Fixa: Apreçamento, Duration e Convexidade',
    editalDescription: '6 Renda fixa: apreçamento de instrumentos, gestão de carteiras de renda fixa, duration e convexidade.',
    level: 'Avancado',
    prerequisites: ['Valor presente de fluxos de caixa', 'Derivada primeira e segunda do preço em relação à taxa y'],
    estimatedHours: 12,
    summary:
      'Inversão clássica no item 93 de 2024! **Duration** (Macaulay / Modificada) mede a sensibilidade de 1ª ordem (linear) do preço às taxas de juros (Macaulay expressa em anos). **Convexidade** mede a sensibilidade de 2ª ordem (como a duration muda quando os juros variam). No apreçamento, cada fluxo futuro é descontado pela taxa que reflete o risco do título (custo de oportunidade — item 94 CERTO!).',
    coreConcepts: [
      'Duration de Macaulay: média ponderada dos prazos dos fluxos pelo VP (expressa em anos).',
      'Duration Modificada (D_mod = D_Mac / (1 + y)): variação percentual aproximada do preço: ΔP/P ≈ -D_mod · Δy.',
      'Convexidade: correção de 2ª ordem (curvatura): ΔP/P ≈ -D_mod·Δy + 0,5·Convexidade·(Δy)².',
      'Imunização de carteiras de renda fixa (igualar duration do ativo ao horizonte do passivo).',
    ],
    keyFormulas: [
      { label: 'Aproximação Duration + Convexidade', latex: '\\frac{\\Delta P}{P} \\approx -D_{\\text{mod}}\\,\\Delta y + \\frac{1}{2}\\,C\\,(\\Delta y)^2' },
    ],
    cebraspeTraps: [
      'Trocar as definições de Duration e Convexidade entre si (item 93 de 2024!).',
    ],
    studyChecklist: [
      'Saber calcular duration de um título cupom-zero (igual ao prazo) e de um título com cupons.',
      'Resolver itens 93 e 94 de 2024.',
    ],
    relatedQuestionIds: [93, 94],
  },
  {
    id: 'fin-7',
    subjectId: 'financas',
    code: '7–8',
    title: 'Riscos ESG e Gestão de Risco de Mercado (Volatilidade, VaR, Stress Test)',
    editalDescription:
      '7 Riscos dos fatores sociais, ambientais e de governança (ESG). 8 Risco: medidas de volatilidade, VaR, premissas do modelo VaR, testes de estresse e de cenários.',
    level: 'Intermediario',
    prerequisites: ['Quantis da distribuição Normal', 'Diferença entre condições normais de mercado e eventos extremos de cauda'],
    estimatedHours: 10,
    summary:
      'Atenção cirúrgica à diferença entre **VaR** e **Teste de Estresse** (item 95 de 2024)! O **VaR** mede a perda máxima esperada em condições NORMAIS de mercado para dado horizonte e nível de confiança (ex.: 95% ou 99%), NÃO avalia eventos extremos além do quantil! Quem avalia eventos extremos/cauda ou mudanças significativas fora do padrão são os **Testes de Estresse (Stress Testing) / Cenários** e o **Expected Shortfall (CVaR)**!',
    coreConcepts: [
      'VaR (Value at Risk): quantil da distribuição de perdas em condições normais de mercado. Limitações: não é subaditivo (não captura cauda além do corte).',
      'Testes de Estresse e Análise de Cenários: avaliam impactos de eventos extremos / choques severos.',
      'Expected Shortfall (ES / CVaR): perda média condicionada a exceder o VaR.',
      'Riscos ESG (ASGs): relevantes para avaliação de desempenho e risco tanto no setor privado quanto no público (item 96!).',
    ],
    keyFormulas: [
      { label: 'VaR Paramétrico (Normal)', latex: '\\text{VaR}_{\\alpha} = \\mu_p - z_{\\alpha}\\,\\sigma_p\\,\\sqrt{T} \\quad (\\text{ou } z_{\\alpha}\\sigma\\sqrt{T}\\cdot V_0)' },
    ],
    cebraspeTraps: [
      'Atribuir ao VaR a função de Teste de Estresse ("avaliar o impacto de eventos extremos ou mudanças significativas" — item 95 ERRADO!).',
    ],
    studyChecklist: [
      'Comparar VaR paramétrico, histórico e Monte Carlo, além de ES e Stress Test.',
      'Resolver itens 95 e 96 de 2024.',
    ],
    relatedQuestionIds: [95, 96],
  },

  // ==================== ESTATÍSTICA E ECONOMETRIA (P2 - 12 ITENS) ====================
  {
    id: 'ee-1',
    subjectId: 'estatistica_econometria',
    code: '1–2',
    title: 'Distribuições, Momentos, Esperança Condicional e Lei dos Grandes Números',
    editalDescription: '1 Distribuições de probabilidade, esperança matemática, momentos, esperança condicionais. 2 Lei dos grandes números.',
    level: 'Avancado',
    prerequisites: ['Esperança e variância de variáveis aleatórias', 'Diferença entre S² (variância amostral) e S (desvio padrão amostral)'],
    estimatedHours: 10,
    summary:
      'Detalhes matemáticos finos cobrados nos itens 97 e 98! (1) Como a população é Normal Padrão N(0,1), E[X²] = 1, e pela LGN, a variância amostral S_n² converge em probabilidade para σ² = 1 (item 97 CERTO!). (2) O estimador S² é não-viesado para σ², MAS por causa da desigualdade de Jensen (raiz quadrada é estritamente côncava!), E[S] < √E[S²] = σ — logo o **desvio padrão amostral S é VIESADO** para σ (para baixo!), mesmo para n = 100 (item 98 ERRADO!).',
    coreConcepts: [
      'Lei Fraca dos Grandes Números (Khinchin): média amostral de i.i.d. com média finita converge em probabilidade para a média populacional.',
      'Desigualdade de Jensen: para g côncava (como √x), E[g(Y)] < g(E[Y]) se Y não é degenerada. Logo E[S_n] < σ!',
      'Lei das Esperanças Iteradas: E[Y] = E[E(Y|X)] e Decomposição da Variância.',
    ],
    keyFormulas: [
      { label: 'Variância Amostral (não-viesada)', latex: 'S_n^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2 \\xrightarrow{p} \\sigma^2' },
      { label: 'Viés de S_n (Jensen)', latex: 'E[S_n] = E[\\sqrt{S_n^2}] < \\sqrt{E[S_n^2]} = \\sigma' },
    ],
    cebraspeTraps: [
      'Achar que porque S² é não-viesado para σ², então S também é não-viesado para σ (item 98 ERRADO — erro clássico!).',
    ],
    studyChecklist: [
      'Revisar desigualdade de Jensen e consistência vs. não-viesamento.',
      'Resolver itens 97 e 98 de 2024.',
    ],
    relatedQuestionIds: [97, 98],
  },
  {
    id: 'ee-2',
    subjectId: 'estatistica_econometria',
    code: '3',
    title: 'Inferência Estatística: EMV, Método dos Momentos, IC e Testes de Hipóteses',
    editalDescription:
      '3 Inferência: Estimação de parâmetros por ponto e por intervalo de confiança; Testes de hipóteses; Amostragem.',
    level: 'Avancado',
    prerequisites: ['Derivada de logaritmos (log-verossimilhança)', 'Distribuição de Poisson: média = δ, variância = δ'],
    estimatedHours: 14,
    summary:
      'Bloco de cálculo pesado na prova de 2024 (itens 99–102 com amostra {3,0,0,1,4} de Poisson(δ)): média amostral x̄ = 8/5 = 1,6. Na Poisson(δ): (a) EMV de δ é δ̂ = x̄ = 1,6; (b) Método dos Momentos iguala E[X] = δ à média x̄ = 1,6 (item 101 CERTO!); (c) Pela invariância do EMV, o EMV da variância populacional é δ̂ = 1,6 (< 2 -> item 99 ERRADO!), e o EMV de P(X=0) = e^{-δ̂} = e^{-1,6} ≈ 0,2019 ≠ 2/5 = 0,40 (item 102 ERRADO!); (d) Variância do EMV δ̂ = X̄ é Var(X̄) = δ/n, cuja estimativa é δ̂/n = 1,6 / 5 = 0,32 (item 100 CERTO!).',
    coreConcepts: [
      'EMV (Máxima Verossimilhança) + Propriedade da Invariância: se θ̂ é EMV de θ, g(θ̂) é EMV de g(θ).',
      'Método dos Momentos: igualar k-ésimo momento populacional ao k-ésimo momento amostral.',
      'Informação de Fisher e Variância Assintótica do EMV.',
      'Testes de hipóteses (erro Tipo I α, Tipo II β, p-valor) e Intervalos de Confiança.',
    ],
    keyFormulas: [
      { label: 'EMV Poisson(δ)', latex: '\\hat{\\delta}_{\\text{EMV}} = \\bar{X}, \\quad \\widehat{\\text{Var}}(\\hat{\\delta}) = \\frac{\\hat{\\delta}}{n}' },
      { label: 'Invariância em P(X=0)', latex: '\\widehat{P}(X=0) = e^{-\\hat{\\delta}} = e^{-1,6} \\approx 0,202' },
    ],
    cebraspeTraps: [
      'Calcular variância amostral (2,44 ou 3,05) no item 99 sem lembrar que na Poisson a variância POPULACIONAL é igual a δ, cujo EMV é 1,6 (< 2)!',
      'Achar que o EMV paramétrico de P(X=0) é a frequência empírica (2/5) — isso seria não-paramétrico, não o EMV da Poisson!',
    ],
    studyChecklist: [
      'Derivar EMV de Bernoulli, Poisson, Exponencial e Normal (μ e σ²).',
      'Resolver itens 99, 100, 101 e 102 de 2024 passo a passo.',
    ],
    relatedQuestionIds: [99, 100, 101, 102],
  },
  {
    id: 'ee-3',
    subjectId: 'estatistica_econometria',
    code: '4',
    title: 'Regressão Linear Simples e Múltipla (MQO / Gauss-Markov)',
    editalDescription: '4 Regressão simples e múltipla.',
    level: 'Intermediario',
    prerequisites: ['Álgebra matricial básica (X\'X)^{-1}X\'y', 'Variância, covariância e testes t e F'],
    estimatedHours: 14,
    summary:
      'Embora em 2024 tenham caído mais séries temporais e painel, Regressão Múltipla é a base de toda a Econometria. Dominar hipóteses de Gauss-Markov (BLUE), viés de variável omitida, multicolinearidade, heterocedasticidade (erros-padrão robustos de White), endogeneidade/variáveis instrumentais (MQ2E) e testes t, F e R² ajustado.',
    coreConcepts: [
      'Estimador MQO: β̂ = (X\'X)⁻¹X\'y.',
      'Teorema de Gauss-Markov: sob linearidade, amostra aleatória, posto completo, E(u|X)=0 e homocedasticidade, MQO é MELNT (BLUE).',
      'Viés de variável omitida: sinal do viés = sinal(β_omitida) × sinal(Cov(x_incluída, x_omitida)).',
    ],
    keyFormulas: [
      { label: 'Estimador MQO', latex: '\\hat{\\beta} = (X\'X)^{-1}X\'y' },
      { label: 'R² Ajustado', latex: '\\bar{R}^2 = 1 - (1 - R^2)\\frac{n - 1}{n - k - 1}' },
    ],
    cebraspeTraps: [
      'Confundir heterocedasticidade (gera viés nos erros-padrão/testes t, mas NÃO gera viés em β̂) com endogeneidade (gera viés e inconsistência em β̂).',
    ],
    studyChecklist: [
      'Decorar as 5 hipóteses de Gauss-Markov e o impacto da violação de cada uma.',
      'Praticar cálculo da fórmula do viés de variável omitida.',
    ],
    relatedQuestionIds: [],
  },
  {
    id: 'ee-4',
    subjectId: 'estatistica_econometria',
    code: '5',
    title: 'Séries Temporais: Estacionaridade e Vetores Autorregressivos (VAR)',
    editalDescription: '5 Econometria de séries temporais: Vetor auto regressivo; estacionaridade.',
    level: 'Avancado',
    prerequisites: ['Regressão múltipla', 'Operador defasagem e processos AR(p)'],
    estimatedHours: 12,
    summary:
      'Caiu com 3 itens seguidos em 2024 (103–105)! Dominar definição de estacionaridade fraca (média constante, variância constante/finita e autocovariância dependente apenas do lag h, sem tendência/sazonalidade determinística), exigência de estacionaridade no VAR padrão (não-estacionariedade gera regressão espúria/instabilidade — item 104 ERRADO!) e estrutura de um VAR(p): cada variável explicada por p defasagens de todas as variáveis do sistema, inclusive suas próprias (item 105 CERTO!).',
    coreConcepts: [
      'Estacionaridade fraca (covariância estacionária): E[Y_t] = μ, Var(Y_t) = σ² < ∞, Cov(Y_t, Y_{t-h}) = γ(h).',
      'VAR(p): sistema de equações onde cada variável endógena é regredida nas p defasagens dela própria e de todas as demais.',
      'Séries não-estacionárias (raiz unitária I(1)): usar diferenças ou VEC se houver cointegração.',
    ],
    keyFormulas: [
      { label: 'Modelo VAR(p)', latex: '\\mathbf{y}_t = \\mathbf{c} + A_1 \\mathbf{y}_{t-1} + \\dots + A_p \\mathbf{y}_{t-p} + \\boldsymbol{\\varepsilon}_t' },
    ],
    cebraspeTraps: [
      'Dizer que para previsões efetivas em VAR padrão não é necessário que as séries sejam estacionárias (item 104 ERRADO — raízes unitárias quebram a estabilidade/inferência do VAR sem diferenciação/cointegração).',
    ],
    studyChecklist: [
      'Revisar testes ADF/KPSS, função impulso-resposta (IRF), decomposição de variância e causalidade de Granger.',
      'Resolver itens 103, 104 e 105 de 2024.',
    ],
    relatedQuestionIds: [103, 104, 105],
  },
  {
    id: 'ee-5',
    subjectId: 'estatistica_econometria',
    code: '6',
    title: 'Econometria de Dados em Painel: Efeito Fixo vs. Efeito Aleatório',
    editalDescription: '6 Econometria de dados em painel: Efeito fixo; Efeito aleatório. Técnicas de identificação.',
    level: 'Avancado',
    prerequisites: ['Regressão múltipla e exogeneidade E(u|X)=0'],
    estimatedHours: 10,
    summary:
      'Tema de ouro e super previsível (itens 106 e 107!). A diferença central entre Efeito Fixo (FE) e Efeito Aleatório (RE) está na correlação entre o efeito individual não observado constante no tempo (a_i) e os regressores X_{it}: em **RE**, assume-se Cov(a_i, X_{it}) = 0; em **FE**, permite-se que Cov(a_i, X_{it}) ≠ 0 (e o estimador within/primeira diferença elimina a_i!).',
    coreConcepts: [
      'Modelo: y_{it} = X_{it}β + a_i + u_{it}.',
      'Efeito Aleatório (RE): Cov(a_i, X_{it}) = 0 -> usa MQG (GLS) e mantém variáveis constantes no tempo.',
      'Efeito Fixo (FE): permite Cov(a_i, X_{it}) ≠ 0 -> transformação within (desvio da média temporal) elimina a_i (e qualquer variável invariante no tempo!).',
      'Teste de Hausman: H0: RE é consistente e eficiente (Cov(a_i, X_{it}) = 0); se rejeitar H0, usar FE.',
    ],
    keyFormulas: [
      { label: 'Transformação Within (FE)', latex: 'y_{it} - \\bar{y}_i = (X_{it} - \\bar{X}_i)\\beta + (u_{it} - \\bar{u}_i)' },
    ],
    cebraspeTraps: [
      'Inverter a hipótese de correlação de a_i com X entre FE e RE.',
    ],
    studyChecklist: [
      'Entender Teste de Hausman e técnicas de identificação (DID / diferenças em diferenças, IV, RDD).',
      'Resolver itens 106 e 107 de 2024.',
    ],
    relatedQuestionIds: [106, 107],
  },
  {
    id: 'ee-6',
    subjectId: 'estatistica_econometria',
    code: '7',
    title: 'Processos Estocásticos e Cadeias de Markov',
    editalDescription: '7 Processos estocásticos.',
    level: 'Intermediario',
    prerequisites: ['Probabilidade condicional', 'Multiplicação de matrizes (matriz de transição)'],
    estimatedHours: 6,
    summary:
      'A propriedade fundamental de Markov ("sem memória") afirma que a distribuição do próximo estado depende APENAS do estado atual, NÃO da sequência completa de estados passados (item 108 ERRADO!).',
    coreConcepts: [
      'Propriedade de Markov: P(X_{t+1} = j | X_t = i, X_{t-1}, ..., X_0) = P(X_{t+1} = j | X_t = i).',
      'Matriz de transição P (linhas somam 1) e distribuição estacionária πP = π.',
      'Passeio aleatório (Random Walk), Ruído Branco e Martingale.',
    ],
    keyFormulas: [
      { label: 'Propriedade de Markov', latex: 'P(X_{t+1}=j \\mid X_t=i, X_{t-1},\\dots,X_0) = P(X_{t+1}=j \\mid X_t=i)' },
    ],
    cebraspeTraps: [
      'Dizer que a transição depende da "sequência completa de eventos anteriores" (isso viola diretamente a propriedade markoviana — item 108!).',
    ],
    studyChecklist: [
      'Praticar cálculo de P² e distribuição estacionária 2×2.',
      'Resolver item 108 de 2024.',
    ],
    relatedQuestionIds: [108],
  },

  // ==================== COSIF (P2 - 12 ITENS + P4) ====================
  {
    id: 'cos-1',
    subjectId: 'cosif',
    code: '1',
    title: 'Princípios Gerais do COSIF e Normatização CMN/BCB',
    editalDescription: '1 Princípios gerais (COSIF - Plano Contábil das Instituições do Sistema Financeiro Nacional).',
    level: 'Basico',
    prerequisites: ['Contabilidade Geral básica', 'Competência normativa do CMN e do BCB (Lei 4.595/64)'],
    estimatedHours: 8,
    summary:
      'Regra de ouro das IFs no Brasil: pronunciamentos do CPC NÃO entram automaticamente em vigor para instituições reguladas pelo BCB quando aprovados pelo CFC! Eles só são aplicáveis ao SFN após **recepção/ato normativo específico do CMN ou do BCB** (Resolução CMN 4.818 / 4.966 etc.) — item 110 ERRADO!',
    coreConcepts: [
      'Hierarquia contábil no SFN: CMN e BCB têm competência legal para expedir normas contábeis do Padrão COSIF.',
      'CPCs só valem no COSIF se e quando recepcionados por Resolução do CMN ou do BCB (e com eventuais ajustes/vetos).',
      'Estrutura de contas do COSIF (Ativo 1, Passivo 4, PL 6, Receitas 7, Despesas 8, Compensação 3/9).',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Afirmar que pronunciamentos do CPC valem no SFN automaticamente após aprovação do CFC, "independentemente de ato do CMN ou BCB" (item 110 ERRADO!).',
    ],
    studyChecklist: [
      'Estudar o COSIF capítulo 1 (Normas Básicas) e a recepção dos CPCs pelo CMN/BCB.',
      'Resolver item 110 de 2024.',
    ],
    relatedQuestionIds: [110],
  },
  {
    id: 'cos-2',
    subjectId: 'cosif',
    code: '2',
    title: 'Instrumentos Financeiros: TVM, Derivativos, Crédito e Bonificações',
    editalDescription:
      '2 Instrumentos Financeiros. 2.1 Operações Interfinanceiras de Liquidez, TVM e Derivativos. 2.2 Operações de Crédito. 2.3 Investimentos Mantidos para Venda.',
    level: 'Avancado',
    prerequisites: ['Diferença entre custo amortizado e valor justo', 'Operações de crédito (empréstimos, financiamentos, adiantamentos)'],
    estimatedHours: 16,
    summary:
      'Concentrou 3 itens em 2024 (109, 111, 112): (a) Empréstimos = sem destinação específica; Financiamentos = com destinação específica e comprovação da aplicação (109 CERTO!); (b) Ações/cotas recebidas em bonificação sem custo: NÃO alteram o custo total, MAS a quantidade das novas ações É considerada para recalcular (reduzir) o custo médio unitário (111 ERRADO!); (c) Classificação clássica de TVM (Circular 3.068): para negociação, mantidos até o vencimento, e categoria residual = disponíveis para venda (112 CERTO! — atenção à transição da Res. CMN 4.966 a partir de 2025 para o concurso de 2027!).',
    coreConcepts: [
      'Empréstimo (livre destinação) vs. Financiamento (vinculado a bem/projeto específico).',
      'Bonificação gratuita de ações: Custo Total mantém-se igual; Quantidade aumenta -> Custo Médio Unitário = Custo Total / (Q_antiga + Q_nova).',
      'TVM: atenção dupla para 2027 — em 2024 cobrou-se a classificação em 3 categorias (negociação, vencimento, disponíveis para venda), mas a Res. CMN 4.966 (vigente a partir de jan/2025) alinha ao IFRS 9 (Custo Amortizado, VJORA, VJR)!',
    ],
    keyFormulas: [
      { label: 'Custo Médio Unitário após bonificação', latex: 'CMU_{\\text{novo}} = \\frac{\\text{Custo Total}}{Q_{\\text{anterior}} + Q_{\\text{bonificada}}}' },
    ],
    cebraspeTraps: [
      'Dizer que a quantidade bonificada é "desconsiderada" no cálculo do custo médio unitário (item 111 ERRADO — ela entra no denominador!).',
      'Para 2027: ficar atento à vigência plena da Resolução CMN 4.966/2021 (modelo de perdas esperadas e classificação IFRS 9 no COSIF)!',
    ],
    studyChecklist: [
      'Dominar regras da Circular BCB 3.068 (base de 2024) E atualizar para a Resolução CMN 4.966/2021 (vigente para 2027).',
      'Resolver itens 109, 111 e 112 de 2024.',
    ],
    relatedQuestionIds: [109, 111, 112],
  },
  {
    id: 'cos-3',
    subjectId: 'cosif',
    code: '3–6',
    title: 'Ativos Não Financeiros Mantidos para Venda, Imobilizado, Intangível e Arrendamento',
    editalDescription:
      '3 Arrendamento mercantil. 4 Ativos Não Financeiros Mantidos para Venda. 5 Ativo Imobilizado. 6 Ativo Intangível.',
    level: 'Intermediario',
    prerequisites: ['Ativo Circulante vs. Não Circulante', 'Critério de avaliação: custo vs. valor justo líquido de venda'],
    estimatedHours: 10,
    summary:
      'Regras específicas do BCB/CMN! (a) Ativos não financeiros mantidos para venda recebidos em liquidação de créditos duvidosos (ex.: imóveis retomados, BND/BNDU — Res. CMN 4.747 / Res. BCB 220): são avaliados pelo MENOR valor entre o **valor contábil líquido** (ou valor atribuído na operação deduzido de perdas) e o **valor justo líquido de venda** — NÃO "valor presente líquido e valor de mercado" (item 114 ERRADO!). (b) Ativos intangíveis recebidos em doação (CPC 04 / Res. CMN 4.534): pelo valor justo (mercado), podendo ser no circulante se mantidos para venda/realização no curto prazo ou conforme norma (item 116 CERTO!).',
    coreConcepts: [
      'Ativos não financeiros mantidos para venda (BNDU): menor valor entre valor contábil e valor justo menos despesas de venda (não se depreciam enquanto mantidos para venda).',
      'Ativo Intangível (Res. CMN 4.534 / CPC 04): identificável, não monetário, sem substância física; recebido em doação entra pelo valor justo.',
      'Arrendamento mercantil (CPC 06 / Res. CMN 4.977): reconhecimento do ativo de direito de uso e passivo de arrendamento.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Trocar "valor contábil / custo" por "valor presente líquido" na avaliação de BNDU mantido para venda (item 114 ERRADO!).',
    ],
    studyChecklist: [
      'Ler Resolução CMN 4.747 (Ativos Não Financeiros Mantidos para Venda) e Res. CMN 4.534 (Intangível).',
      'Resolver itens 114 e 116 de 2024.',
    ],
    relatedQuestionIds: [114, 116],
  },
  {
    id: 'cos-4',
    subjectId: 'cosif',
    code: '7',
    title: 'Provisões, Passivos Contingentes e Ativos Contingentes (CPC-25) ★ Tema da P4!',
    editalDescription: '7 Provisões, Passivos Contingentes e Ativos Contingentes.',
    level: 'Intermediario',
    prerequisites: ['Conceito de Passivo na Estrutura Conceitual (obrigação presente)', 'Graus de probabilidade: Provável (>50%), Possível, Remoto'],
    estimatedHours: 10,
    summary:
      'O TÓPICO MAIS RENTÁVEL DE 2024: além de cair na objetiva (item 115), foi o tema inteiro da **Prova Discursiva P4 (50 pontos)**! Regra de ouro do CPC 25 (Res. CMN 3.823): Provisão É um passivo (obrigação presente, saída PROVÁVEL, estimativa confiável -> reconhece no balanço). Passivo Contingente NÃO é provisão (obrigação possível OU obrigação presente sem probabilidade/estimativa confiável -> NÃO reconhece, apenas divulga em nota explicativa, salvo se remoto). Ativo Contingente NÃO se reconhece (divulga em nota se entrada for provável!).',
    coreConcepts: [
      'Provisão (RECONHECE + DIVULGA): (1) obrigação presente (legal ou não formalizada/construtiva) de evento passado; (2) saída provável de recursos; (3) estimativa confiável.',
      'Passivo Contingente (NÃO RECONHECE): obrigação possível (depende de evento futuro incerto) ou presente que falha nos critérios (2) ou (3). Divulga em nota explicativa (salvo se remoto).',
      'Ativo Contingente (NÃO RECONHECE): direito possível de evento passado. Divulga em nota se entrada for provável; só reconhece como ativo se realização for praticamente certa.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Chamar "passivo contingente" de "espécie de provisão de prazo ou valor incertos" (item 115 ERRADO — quem é passivo de prazo ou valor incertos é a PROVISÃO!).',
    ],
    studyChecklist: [
      'Decorar a matriz 3×2 (Provável / Possível / Remoto × Passivo / Ativo).',
      'Estudar o Padrão de Resposta Definitivo da P4 de 2024 na aba Oficina Discursiva!',
      'Resolver item 115 e a P4 de 2024.',
    ],
    relatedQuestionIds: [115],
  },
  {
    id: 'cos-5',
    subjectId: 'cosif',
    code: '8–9',
    title: 'Patrimônio Líquido, Reservas de Lucros e Demonstrações Financeiras',
    editalDescription: '8 Patrimônio Líquido e Remuneração do Capital Próprio. 9 Demonstrações Financeiras de Divulgação.',
    level: 'Intermediario',
    prerequisites: ['Lei nº 6.404/1976 (Lei das S.A.) — estrutura do PL e DRE/DFC/DRA'],
    estimatedHours: 10,
    summary:
      'Reservas de lucros no PL (Lei 6.404 + COSIF): Legal, Estatutárias, Para Contingências, de Incentivos Fiscais, de Retenção de Lucros e de Lucros a Realizar (item 113 CERTO!). Para demonstrações financeiras de divulgação (Res. CMN 4.818/2020): atenção ao limite da DFC para companhias fechadas (R$ 2 milhões no art. 176 §6º da Lei 6.404 vs. regras próprias de divulgação do CMN/BCB — item 119 foi ANULADO em 2024 por dupla interpretação!).',
    coreConcepts: [
      'PL das IFs: Capital Social, Reservas de Capital, Ajustes de Avaliação Patrimonial, Reservas de Lucros, Ações em Tesouraria, Lucros/Prejuízos Acumulados.',
      'Remuneração do capital próprio: Dividendos e Juros sobre Capital Próprio (JCP).',
      'Demonstrações obrigatórias pela Res. CMN 4.818 / Res. BCB 2: BP, DRE, DRA, DMPL, DFC e Notas Explicativas.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Confundir Reservas de Capital (ágio na emissão de ações etc.) com Reservas de Lucros.',
    ],
    studyChecklist: [
      'Ler a Resolução CMN 4.818/2020 (consolidação e divulgação das demonstrações no SFN).',
      'Resolver itens 113 e 119 de 2024.',
    ],
    relatedQuestionIds: [113, 119],
  },
  {
    id: 'cos-6',
    subjectId: 'cosif',
    code: '10–14',
    title: 'Conglomerado Prudencial, Cooperativas, Consórcios, Liquidação Extrajudicial e Auditoria',
    editalDescription:
      '10 Conglomerado Prudencial. 11 Combinado Cooperativo. 12 Grupos de Consórcio. 13 Empresas em Liquidação Extrajudicial. 14 Auditoria Independente.',
    level: 'Avancado',
    prerequisites: ['Normas específicas do BCB (Res. CMN 4.911 / Res. BCB 197, Res. BCB 285/304, Circ. 3.433)'],
    estimatedHours: 14,
    summary:
      'Diferencial do Bacen! São normas específicas que raramente caem em outros concursos e valeram 4 itens em 2024 (117, 118, 120): (a) **Comitê de Auditoria** (Res. CMN 4.910): órgão estatutário que avalia cumprimento de recomendações dos auditores e estabelece procedimentos para recebimento/tratamento de denúncias sobre descumprimento legal (117 CERTO!); (b) **Liquidação Extrajudicial** (Lei 6.024 / COSIF): bens intangíveis SEM valor de realização (ex.: fundo de comércio, despesas diferidas) devem ser BAIXADOS imediatamente contra prejuízos, NÃO mantidos para amortização usual (118 ERRADO!); (c) **Grupos de Consórcio encerrados** (Circ. 3.433 / Res. BCB 285): recursos não procurados pelos consorciados após encerramento são transferidos/mantidos como **passivo** (recursos a devolver) ou receita somente após prescrição/regras legais, NÃO baixados e reconhecidos como ATIVOS da administradora no encerramento (120 ERRADO!).',
    coreConcepts: [
      'Comitê de Auditoria (Res. CMN 4.910/2021): obrigatório para IFs de grande porte / S1-S3 / capital aberto; canal de denúncias e supervisão da auditoria.',
      'Liquidação Extrajudicial: interrompe continuidade normal (going concern cai!) -> avaliação a valor de realização / baixa imediata de intangíveis irrealizáveis.',
      'Consórcios: grupo tem contabilidade própria segregada da administradora; no encerramento, recursos pendentes são obrigações com consorciados.',
      'Conglomerado Prudencial (Res. CMN 4.950 / Res. BCB 168) e Combinado Cooperativo.',
    ],
    keyFormulas: [],
    cebraspeTraps: [
      'Aplicar princípio da continuidade (amortização usual de intangível) em instituição sob Liquidação Extrajudicial (item 118 ERRADO!).',
      'Misturar patrimônio do grupo de consórcio com ativo da administradora no encerramento (item 120 ERRADO!).',
    ],
    studyChecklist: [
      'Ler Res. CMN 4.910 (Auditoria/Comitê), Res. CMN 4.950 (Conglomerado Prudencial) e normas COSIF de Liquidação e Consórcio.',
      'Resolver itens 117, 118 e 120 de 2024.',
    ],
    relatedQuestionIds: [117, 118, 120],
  },

  // ==================== DISCURSIVAS (P3 e P4) ====================
  {
    id: 'disc-p3',
    subjectId: 'discursivas',
    code: 'P3',
    title: 'Prova Discursiva P3 — Dissertação de Atualidades (30,00 pts)',
    editalDescription:
      'Prova discursiva P3: dissertação em até 40 linhas, valor de 30,00 pontos, acerca de atualidades (segurança, transportes, política, economia, sociedade, educação, saúde, cultura, tecnologia, energia, relações internacionais, desenvolvimento sustentável e ecologia).',
    level: 'Intermediario',
    prerequisites: ['Norma culta da Língua Portuguesa (evitar erros de crase, vírgula e regência)', 'Estrutura dissertativa por tópicos do comando'],
    estimatedHours: 14,
    summary:
      'Na P3 o Cebraspe não quer floreios literários — quer resposta direta a cada aspecto numerado no comando! Em 2024, foram 3 aspectos de 9,50 pts cada + 1,50 pt de apresentação/estrutura (= 30,00). Como a penalidade é ND = NC - 6 × NE ÷ TL, escrever ~35–40 linhas bem divididas reduz o peso de cada erro gramatical.',
    coreConcepts: [
      '1 parágrafo de introdução contextualizando o tema + 1 parágrafo dedicado claramente a CADA aspecto pedido no comando.',
      'Se o espelho pede "dois ou mais impactos e explicá-los por completo", cite 2 ou 3 bem explicados (causa -> mecanismo -> efeito), nunca liste 5 sem explicar!',
      'Escrever próximo ao limite máximo (35 a 40 linhas) dilui a penalidade 6 × NE / TL.',
    ],
    keyFormulas: [
      { label: 'Nota da P3', latex: 'ND = NC - \\frac{6 \\times NE}{TL}' },
    ],
    cebraspeTraps: [
      'Escrever texto bonito de poucas linhas (TL pequeno aumenta muito a dedução por erro!) ou esquecer de detalhar todas as formas/impactos pedidos (cai do Conceito 4 para Conceito 3).',
    ],
    studyChecklist: [
      'Montar repertório de 6 eixos temáticos (Economia verde/ESG, IA/Digitalização, Segurança Alimentar/Agro, Geopolítica, Infraestrutura, Inclusão Financeira).',
      'Treinar a P3 de 2024 na aba Oficina Discursiva comparando com o Padrão Definitivo.',
    ],
    relatedQuestionIds: [],
  },
  {
    id: 'disc-p4',
    subjectId: 'discursivas',
    code: 'P4',
    title: 'Prova Discursiva P4 — Situação-Problema Específica (50,00 pts)',
    editalDescription:
      'Prova discursiva P4: questão dissertativa envolvendo situação-problema, em até 80 linhas, valor de 50,00 pontos, acerca de conhecimentos específicos do cargo/área.',
    level: 'Avancado',
    prerequisites: ['Domínio sólido dos 5 blocos de P2 (Macro, Micro, Finanças, Econometria, COSIF)', 'Clareza técnica na redação'],
    estimatedHours: 20,
    summary:
      'A P4 vale quase metade de uma prova objetiva inteira (50 pontos)! Em 2024 cobrou **COSIF / CPC-25** numa situação prática de fiscalização do BCB (15,50 pts para julgar os dois casos práticos I e II + 4 quesitos teóricos de 8,00 pts cada + 2,50 pts de apresentação). Para 2027, qualquer um dos 5 blocos específicos pode ser tema de P4 (ex.: Política Monetária/Selic, Mundell-Fleming, Risco/VaR/Basileia, Painel/Econometria ou COSIF/Res. 4.966).',
    coreConcepts: [
      'Responder na ordem exata do comando (ou identificar claramente os blocos) facilita a vida dos dois examinadores.',
      'Em situações-problema ("I e II"), primeiro dê o veredito claro (obedece / não obedece à norma X), depois justifique com os critérios técnicos.',
      'Penalidade gramatical na P4: NSP = NC - 5 × NE ÷ TL (escrever 65–80 linhas completas dilui erros!).',
    ],
    keyFormulas: [
      { label: 'Nota da P4', latex: 'NSP = NC - \\frac{5 \\times NE}{TL}' },
    ],
    cebraspeTraps: [
      'Responder só à parte teórica e esquecer de se posicionar objetivamente sobre os itens I e II do caso prático (perde até 15,50 pontos de uma vez!).',
    ],
    studyChecklist: [
      'Praticar 1 situação-problema de P4 por semana alternando os 5 blocos de P2.',
      'Estudar o Padrão Definitivo da P4 de 2024 na aba Oficina Discursiva.',
    ],
    relatedQuestionIds: [],
  },
];
