import { QuestionItem } from '../types';

export const QUESTIONS_P2_PART2: QuestionItem[] = [
  // =========================================================================
  // FINANÇAS — Parte 2 (Itens 86 a 96)
  // =========================================================================
  {
    id: 86,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-5',
    editalRef: 'Finanças — 5. Teoria da Utilidade e Aversão ao Risco',
    statement: 'Um investidor cuja função utilidade sobre a riqueza seja dada por $u(w) = \\ln w$, para $w > 0$, é avesso ao risco.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Concavidade da função utilidade ($u\'\'(w) < 0 \\iff$ aversão ao risco)', 'Desigualdade de Jensen'],
    quickVerdict:
      'CERTO. Derivando $u(w) = \\ln w$: $u\'(w) = \\frac{1}{w} > 0$ (não saciedade) e $u\'\'(w) = -\\frac{1}{w^2} < 0$ (estritamente côncava!). Pela desigualdade de Jensen, $u(E[W]) > E[u(W)]$, caracterizando investidor estritamente avesso ao risco.',
    howToSolve: {
      intuition:
        'A regra universal em Finanças/Micro: sinal de $u\'\'(w)$ decide a atitude frente ao risco ($u\'\'<0$ avesso, $u\'\'=0$ neutro, $u\'\'>0$ propenso/amante).',
      steps: [
        'Primeira derivada (utilidade marginal da riqueza): $u\'(w) = 1/w > 0$.',
        'Segunda derivada (concavidade): $u\'\'(w) = -1/w^2 < 0$ para todo $w > 0$.',
        'Bônus útil para BCB: a função $\\ln w$ tem Aversão Relativa ao Risco Constante $RRA = -w\\frac{u\'\'(w)}{u\'(w)} = 1$ e Aversão Absoluta Decrescente $ARA = 1/w$.'
      ],
      formulaLatex: "u'(w) = \\frac{1}{w} > 0, \\quad u''(w) = -\\frac{1}{w^2} < 0 \\implies \\text{Avesso ao risco}",
      trapAlert:
        'Não erre na derivada segunda de $w^{-1}$: a derivada traz um sinal de menos ($-w^{-2}$), nunca positivo!'
    },
    tags: ['aversão-ao-risco', 'utilidade', 'jensen']
  },
  {
    id: 87,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-5',
    editalRef: 'Finanças — 5. Teoria de Portfólios (Markowitz): Risco Sistemático vs. Idiossincrático',
    statement:
      'O risco sistemático (ou de mercado) afeta o conjunto amplo dos ativos da economia e não pode ser eliminado apenas por meio da diversificação da carteira entre ações.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Decomposição do risco total = Risco Sistemático (não diversificável) + Risco Específico/Idiossincrático (diversificável)'],
    quickVerdict:
      'CERTO. A diversificação (combinando ativos imperfeitamente correlacionados) reduz e no limite elimina o **risco não sistemático / idiossincrático** (específico de cada empresa), mas não elimina o **risco sistemático** (macroeconômico: juros, câmbio, recessão, covariância comum), que determina o prêmio de risco no CAPM.',
    howToSolve: {
      intuition:
        'Conceito fundamental de Markowitz e Sharpe: quando o número de ativos $N$ cresce na carteira, a média das variâncias individuais tende a zero, sobrando apenas a covariância média entre os ativos.',
      steps: [
        'Em uma carteira igualmente ponderada de $N$ ativos: $\\sigma_p^2 = \\frac{1}{N}\\overline{\\sigma_i^2} + \\left(1 - \\frac{1}{N}\\right)\\overline{\\text{Cov}(r_i, r_j)}$.',
        'Quando $N \\to \\infty$, o termo idiossincrático $\\frac{1}{N}\\overline{\\sigma_i^2} \\to 0$, restando a covariância média $\\overline{\\text{Cov}}$ (risco sistemático / de mercado).',
        'Como o risco sistemático permanece mesmo em portfólios perfeitamente diversificados, ele é chamado de risco não diversificável.'
      ],
      formulaLatex: '\\lim_{N \\to \\infty} \\sigma_p^2 = \\overline{\\text{Cov}(r_i, r_j)} \\quad (\\text{Risco Sistemático})',
      trapAlert:
        'Guarde os sinônimos usados nas provas: Risco Sistemático = Risco de Mercado = Risco Não Diversificável; Risco Não Sistemático = Risco Específico = Risco Idiossincrático = Risco Diversificável.'
    },
    tags: ['markowitz', 'diversificação', 'risco-sistemático']
  },
  {
    id: 88,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-5',
    editalRef: 'Finanças — 5. Precificação de Ativos: CAPM vs. APT',
    statement:
      'A Arbitrage Pricing Theory (APT) postula uma relação linear entre o risco sistemático medido por um único fator de mercado e o retorno esperado, supondo ainda que os retornos sigam o modelo de índice único e incluam um risco específico não diversificável no equilíbrio.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Diferenças estruturais entre CAPM (fator único de mercado, equilíbrio de carteiras médias-variância) e APT (múltiplos fatores, não arbitragem)'],
    quickVerdict:
      'ERRADO. O item mistura erroneamente características do **CAPM** (único fator sistemático — a carteira de mercado) com falsa premissa sobre risco específico! A **APT (Stephen Ross, 1976)** é um modelo **multifatorial** ($E[R_i] = R_f + \\sum_k \\beta_{ik}\\lambda_k$) baseado na ausência de arbitragem em carteiras bem diversificadas — onde o risco específico é **diversificado** (zero no limite), não permanecendo como fonte de prêmio ou risco não diversificável.',
    howToSolve: {
      intuition:
        'Veja o contraste direto entre os itens 88 e 89 na prova! O 88 tenta confundir APT com modelo unifatorial/CAPM e erra no risco específico.',
      steps: [
        'A APT assume um processo gerador de retornos **multifatorial**: $R_i = E[R_i] + \\sum_{k=1}^K \\beta_{ik} F_k + \\varepsilon_i$.',
        'Por arbitragem em carteiras bem diversificadas (onde $\\varepsilon_i$ se anula pela Lei dos Grandes Números), o retorno esperado depende linearmente das exposições ($\\beta_{ik}$) aos $K$ fatores sistemáticos.',
        'Dizer que a APT postula modelo de índice único com risco específico não diversificável é falso.'
      ],
      formulaLatex: 'E[R_i] = R_f + \\beta_{i1}\\lambda_1 + \\beta_{i2}\\lambda_2 + \\dots + \\beta_{iK}\\lambda_K',
      trapAlert:
        'A APT não exige normalidade dos retornos nem carteira de mercado observável; exige apenas estrutura fatorial linear e ausência de oportunidades de arbitragem com diversificação.'
    },
    tags: ['apt', 'capm', 'precificação-de-ativos']
  },
  {
    id: 89,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-5',
    editalRef: 'Finanças — 5. Flexibilidade da APT em relação ao CAPM',
    statement:
      'A Arbitrage Pricing Theory (APT) apresenta maior flexibilidade que o CAPM tradicional por permitir a incorporação de múltiplos fatores macroeconômicos e financeiros sistemáticos na explicação dos retornos esperados dos ativos.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Vantagens e pressupostos mais brandos da APT vs. CAPM'],
    quickVerdict:
      'CERTO. Ao contrário do CAPM (que concentra todo o risco sistemático no único $\\beta$ relativo à carteira de mercado e exige hipóteses fortes sobre utilidade quadrática/normalidade e carteira de mercado eficiente), a APT acomoda múltiplos fatores sistemáticos (surpresas de inflação, PIB, juros, spreads de crédito, fatores Fama-French) usando argumentos de não arbitragem.',
    howToSolve: {
      intuition:
        'Enquanto o item 88 descrevia a APT como unifatorial (errado), o item 89 acerta em cheio ao caracterizá-la como multifatorial e mais flexível que o CAPM.',
      steps: [
        'CAPM (Sharpe-Lintner-Mossin): $E[R_i] = R_f + \\beta_i (E[R_m] - R_f)$ — único fator (mercado).',
        'APT (Ross): múltiplos fatores $F_1, \\dots, F_K$, sem depender da identificação impossível da verdadeira "carteira de mercado" de Roll (crítica de Roll).',
        'Logo, é mais flexível para capturar múltiplas fontes de risco sistemático.'
      ],
      trapAlert:
        'Note a coerência interna da prova: se você acertou que o 88 era errado por chamar APT de unifatorial, já confirmava naturalmente que o 89 era certo.'
    },
    tags: ['apt', 'capm', 'multifatorial']
  },
  {
    id: 90,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-6',
    editalRef: 'Finanças — 6. Estrutura a Termo da Taxa de Juros (ETTJ): Movimentos da Curva',
    contextId: 'fin-ettj',
    command: 'Com relação à Estrutura a Termo da Taxa de Juros (ETTJ), duration, convexidade e gestão de riscos, julgue os itens 90 a 95.',
    statement:
      'Um deslocamento paralelo da Estrutura a Termo da Taxa de Juros ocorre quando as taxas de juros de todos os prazos (curto, médio e longo) sofrem variação na mesma magnitude e na mesma direção.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Fatores de Litterman-Scheinkman da ETTJ: Nível (parallel shift), Inclinação (slope) e Curvatura (butterfly)'],
    quickVerdict:
      'CERTO. Definição exata de deslocamento paralelo (*level shift*): $\\Delta r(t) = c$ constante para toda maturidade $t$, preservando a inclinação e a curvatura da curva de rendimentos.',
    howToSolve: {
      intuition:
        'Lembre dos 3 fatores principais (PCA de Litterman & Scheinkman, 1991) que explicam ~99% dos movimentos da ETTJ: (1) Nível = deslocamento paralelo; (2) Inclinação = abertura/fechamento de spread longo vs. curto; (3) Curvatura = movimento do meio em relação às pontas.',
      steps: [
        'Deslocamento paralelo (*level shift*): soma-se (ou subtrai-se) o mesmo $\\Delta y$ em todos os vértices da curva.',
        'Note que é justamente essa hipótese restritiva que a **Duration de Macaulay / Modificada** usa na aproximação linear de primeira ordem para imunização de carteiras!'
      ],
      trapAlert:
        'Não confunda deslocamento paralelo (mesmo $\\Delta y$ em todos os prazos) com *steepening/flattening* (mudança de inclinação entre taxas longas e curtas).'
    },
    tags: ['ettj', 'deslocamento-paralelo', 'renda-fixa']
  },
  {
    id: 91,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-6',
    editalRef: 'Finanças — 6. Teoria das Expectativas da ETTJ',
    contextId: 'fin-ettj',
    statement:
      'Segundo a teoria das expectativas puras da Estrutura a Termo da Taxa de Juros, quando os agentes esperam elevação das taxas de juros futuras de curto prazo, a curva de rendimentos apresenta formato descendente (negativamente inclinada).',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Teoria das Expectativas Puras: taxa longa = média geométrica das taxas curtas esperadas'],
    quickVerdict:
      'ERRADO. Pela teoria das expectativas puras, a taxa de juros longa é aproximadamente a **média** das taxas curtas presente e futuras esperadas: $(1 + i_{2t})^2 = (1 + i_{1t})(1 + E_t[i_{1,t+1}])$. Se se espera que as taxas futuras SUBAM ($E_t[i_{1,t+1}] > i_{1t}$), a média (taxa longa) fica ACIMA da taxa curta — gerando curva **ASCENDENTE** (positivamente inclinada), e não descendente!',
    howToSolve: {
      intuition:
        'Faça um exemplo numérico com dois períodos: taxa hoje de 1 ano = $10\\%$, taxa esperada para o ano 2 = $14\\%$. Qual a taxa média de 2 anos? $\\approx 12\\% > 10\\%$! Logo a curva sobe ($10\\% \\to 12\\%$), é ascendente.',
      steps: [
        'Equação das expectativas puras (2 anos): $(1 + y_2)^2 = (1 + y_1)(1 + f_{1,2}^e)$.',
        'Se o mercado espera alta de juros futuros ($f_{1,2}^e > y_1$), então $y_2$ (média geométrica entre $y_1$ e $f_{1,2}^e$) será necessariamente maior que $y_1$.',
        'Curva de $y_t$ contra prazo $t$: $y_2 > y_1 \\implies$ inclinação **positiva (ascendente)**.'
      ],
      formulaLatex: '(1 + y_2)^2 = (1 + y_1)(1 + E[y_{1,t+1}]); \\quad E[y_{1,t+1}] > y_1 \\implies y_2 > y_1 \\; (\\text{ascendente})',
      trapAlert:
        'Curva invertida/descendente na teoria das expectativas sinaliza expectativa de **corte** nos juros futuros (frequentemente associada a desaceleração econômica futura).'
    },
    tags: ['ettj', 'teoria-das-expectativas', 'curva-invertida']
  },
  {
    id: 92,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-6',
    editalRef: 'Finanças — 6. Determinantes macroeconômicos da ETTJ',
    contextId: 'fin-ettj',
    statement:
      'A Estrutura a Termo da Taxa de Juros reflete as expectativas dos agentes quanto à trajetória da política monetária, às perspectivas de inflação futura, ao prêmio de risco/liquidez e às condições financeiras globais.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Interpretação econômica da curva de juros (DI Futuro / NTN-B / Treasuries)'],
    quickVerdict:
      'CERTO. A ETTJ incorpora em seus vértices o juro neutro esperado, a trajetória esperada da Selic (política monetária), as expectativas de inflação (*breakeven inflation*), o prêmio a prazo (*term premium* / fiscal / liquidez) e fatores globais (juros externos / apetite ao risco).',
    howToSolve: {
      intuition:
        'Enunciado descritivo preciso sobre como o próprio Banco Central (ex: Relatório de Inflação / COPOM) interpreta a curva de juros.',
      steps: [
        'Decomposição padrão da taxa nominal longa: $i_{\\text{longo}} \\approx E[r^*] + E[\\pi] + \\text{prêmio a prazo} + \\text{risco país/global}$.',
        'Todos os componentes citados no item — expectativas de política monetária, inflação, e condições financeiras globais — atuam diretamente na formação da ETTJ.'
      ],
      trapAlert:
        'Observe que nenhum termo excludente foi usado — descrição completa e correta.'
    },
    tags: ['ettj', 'política-monetária', 'inflação-implícita']
  },
  {
    id: 93,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-6',
    editalRef: 'Finanças — 6. Renda Fixa: Duration vs. Convexidade',
    contextId: 'fin-ettj',
    statement:
      'A convexidade de um título de renda fixa mede o prazo médio ponderado pelo valor presente dos fluxos de caixa recebidos até o vencimento, expresso em unidades de tempo (anos), ao passo que a duration representa a taxa de variação da sensibilidade do preço diante de grandes oscilações da taxa de juros.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Definição de Duration de Macaulay (1ª derivada / prazo médio ponderado em anos) vs. Convexidade (2ª derivada em tempo²)'],
    quickVerdict:
      'ERRADO. A banca **inverteu** os dois conceitos! Quem mede o prazo médio ponderado pelo valor presente dos fluxos de caixa (em anos) é a **Duration de Macaulay** ($D = \\sum t \\cdot \\frac{VP(FC_t)}{P}$). A **Convexidade** está ligada à **segunda derivada** do preço em relação à taxa de juros (curvatura da relação preço-taxa, expressa em anos²), corrigindo o erro da aproximação linear dada pela Duration para grandes choques de juros.',
    howToSolve: {
      intuition:
        'Troca direta de definições na expansão de Taylor de 2ª ordem da função preço $P(y)$!',
      steps: [
        'Expansão de Taylor para variação relativa do preço: $\\frac{\\Delta P}{P} \\approx -D_{\\text{mod}} \\cdot \\Delta y + \\frac{1}{2} \\cdot \\text{Convexidade} \\cdot (\\Delta y)^2$.',
        '**Duration (Macaulay)**: $D_{\\text{Mac}} = \\sum_{t=1}^T t \\cdot \\frac{FC_t / (1+y)^t}{P}$ (unidade: **anos**, média ponderada dos prazos).',
        '**Duration Modificada**: $D_{\\text{mod}} = \\frac{D_{\\text{Mac}}}{1+y} = -\\frac{1}{P}\\frac{dP}{dy}$ (sensibilidade de 1ª ordem).',
        '**Convexidade**: $C = \\frac{1}{P}\\frac{d^2P}{dy^2}$ (unidade: **anos²**, taxa de variação da própria duration/sensibilidade de 2ª ordem). O enunciado inverteu completamente os papéis!'
      ],
      formulaLatex: '\\frac{\\Delta P}{P} \\approx -D_{\\text{mod}}\\,\\Delta y + \\frac{1}{2}\\,\\text{Conv}\\,(\\Delta y)^2',
      trapAlert:
        'Para título com cupom sem opcionalidade (*option-free bond*), a convexidade é sempre positiva (o preço sobe mais na queda dos juros do que cai na alta de mesma magnitude). Em títulos com opção de resgate antecipado (*callable*), a convexidade pode ficar negativa!'
    },
    tags: ['duration', 'convexidade', 'taylor', 'renda-fixa']
  },
  {
    id: 94,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-2',
    editalRef: 'Finanças — 2. Princípio Fundamental de Apreçamento de Ativos',
    statement:
      'O apreçamento econômico de ativos baseia-se no desconto de seus fluxos de caixa futuros esperados a uma taxa que reflita o valor do dinheiro no tempo e o custo de oportunidade ajustado ao risco.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Fluxo de Caixa Descontado (DCF / FCD) e Fator de Desconto Estocástico'],
    quickVerdict:
      'CERTO. Princípio universal de Finanças Corporativas e Apreçamento de Ativos (*Valuation*): o preço justo hoje equivale ao valor presente dos fluxos futuros esperados descontados pelo custo de oportunidade do capital ajustado pelo risco sistemático.',
    howToSolve: {
      intuition:
        'Tanto o modelo de Gordon/DCF ($P_0 = \\sum \\frac{E[CF_t]}{(1+r)^t}$) quanto o fator de desconto estocástico moderno ($P_0 = E[m_{t+1} X_{t+1}]$) expressam exatamente esse princípio.',
      steps: [
        'Dois elementos determinam a taxa de desconto: (1) taxa livre de risco (valor do dinheiro no tempo / impaciência); (2) prêmio pelo risco ajustado à covariância dos fluxos com o consumo/mercado (custo de oportunidade ajustado ao risco).',
        'A definição apresentada no enunciado é exata.'
      ],
      formulaLatex: 'V_0 = \\sum_{t=1}^{\\infty} \\frac{E[FC_t]}{(1 + r_f + \\text{prêmio}_t)^t}',
      trapAlert:
        'Item clássico conceitual direto.'
    },
    tags: ['apreçamento', 'dcf', 'valor-presente']
  },
  {
    id: 95,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-6',
    editalRef: 'Finanças — 6. Gestão de Riscos: VaR vs. Expected Shortfall e Teste de Estresse',
    statement:
      'O Value at Risk (VaR) é uma métrica concebida especificamente para medir a perda média condicionada a eventos extremos de cauda além do quantil crítico ou o impacto de cenários severos e plausíveis de crise.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Distinção entre VaR (quantil de perda), Expected Shortfall / CVaR (média além do quantil) e Stress Testing'],
    quickVerdict:
      'ERRADO. O **VaR** informa apenas a perda máxima esperada dentro de um horizonte e nível de confiança normal (por exemplo, $99\\%$ em 10 dias) — ou seja, é um **quantil**, que **NÃO** mede o tamanho das perdas além da cauda (eventos extremos) nem avalia choques hipotéticos severos! Quem mede a perda média condicionada além do VaR é o **Expected Shortfall (ES / CVaR)**, e quem avalia cenários severos/extremos de crise é o **Teste de Estresse (*Stress Testing*)**.',
    howToSolve: {
      intuition:
        'Crítica clássica de Basileia pós-2008 ao VaR: o VaR diz "com 99% de confiança você não perde mais que X", mas não diz absolutamente NADA sobre quanto você perde no 1% pior! Por isso Basileia III migrou risco de mercado para *Expected Shortfall* + *Stress Testing*.',
      steps: [
        '**VaR** ao nível $\\alpha$: quantil da distribuição de perdas $P(L > \\text{VaR}_\\alpha) = 1 - \\alpha$. É cego para o formato e severidade da cauda além de $\\text{VaR}_\\alpha$ (e sequer é subaditivo em geral!).',
        '**Expected Shortfall (ES / CVaR)**: $E[L \\mid L > \\text{VaR}_\\alpha]$ — mede a perda *média* na cauda extrema (e é uma medida coerente de risco).',
        '**Teste de Estresse (*Stress Test*)**: avalia explicitamente impactos de cenários extremos e plausíveis de ruptura histórica ou hipotética.'
      ],
      formulaLatex: '\\text{VaR}_\\alpha = \\inf\\{l : P(L > l) \\le 1 - \\alpha\\}; \\quad \\text{ES}_\\alpha = E[L \\mid L > \\text{VaR}_\\alpha]',
      trapAlert:
        'Nunca atribua ao VaR a medição de "eventos extremos além do corte" ou "cenários de estresse" — essa é a principal limitação do VaR!'
    },
    tags: ['var', 'expected-shortfall', 'stress-test', 'gestão-de-risco']
  },
  {
    id: 96,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-7',
    editalRef: 'Finanças — 7. Finanças Sustentáveis e Métricas ESG',
    statement:
      'A mensuração e o reporte de critérios ambientais, sociais e de governança (ESG) geram benefícios relevantes tanto para empresas privadas quanto para instituições financeiras e organizações do setor público na avaliação de riscos de longo prazo e transparência.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Papel do ESG na alocação de capital, gestão de riscos socioambientais e climáticos (Agenda BC# Sustentabilidade)'],
    quickVerdict:
      'CERTO. A integração de fatores ESG (inclusive riscos climáticos físicos e de transição, governança e impacto social) aprimora a gestão de riscos de médio/longo prazo e a alocação de recursos tanto no setor privado quanto em bancos centrais/entes públicos (ex.: Res. CMN 4.945/2021 — PRSAC, TCFD/ISSB).',
    howToSolve: {
      intuition:
        'O BCB possui forte agenda institucional em Sustentabilidade (Agenda BC#), supervisão de riscos climáticos (PRSAC) e adoção de padrões ISSB/CVM no Brasil.',
      steps: [
        'No setor privado e financeiro: métricas ESG auxiliam na precificação de riscos climáticos (físicos e de transição), redução do custo de capital e atração de investidores.',
        'No setor público e reguladores (incluindo BCB e Tesouro com títulos sustentáveis/verdes): fornecem transparência, governança e monitoramento de estabilidade financeira diante de riscos socioambientais.'
      ],
      trapAlert:
        'Item alinhado à agenda regulatória atual do SFN; sem exageros absolutistas ("único fator"), logo está correto.'
    },
    tags: ['esg', 'sustentabilidade', 'governança']
  },

  // =========================================================================
  // ESTATÍSTICA E ECONOMETRIA (Itens 97 a 108)
  // =========================================================================
  {
    id: 97,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-1',
    editalRef: 'Estatística — 1. Convergência em Probabilidade e Lei dos Grandes Números',
    command: 'Considere amostras aleatórias i.i.d., estimação por máxima verossimilhança, séries temporais, dados em painel e processos estocásticos para julgar os itens 97 a 108.',
    statement:
      'Para uma amostra aleatória simples $X_1, \\dots, X_n$ extraída de uma distribuição Normal padrão $N(0, 1)$, a variância amostral $S_n^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X}_n)^2$ converge em probabilidade para 1 quando $n \\to \\infty$, em decorrência da Lei dos Grandes Números e do Teorema de Slutsky.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Consistência da variância amostral via LGN Fraca e Teorema do Mapeamento Contínuo / Slutsky'],
    quickVerdict:
      'CERTO. Em uma $N(0,1)$, $\\mu = 0$ e $\\sigma^2 = E[X_i^2] = 1$. Expandindo $S_n^2 = \\frac{n}{n-1}\\left(\\frac{1}{n}\\sum X_i^2 - \\bar{X}_n^2\\right)$, pela Lei dos Grandes Números $\\frac{1}{n}\\sum X_i^2 \\xrightarrow{p} E[X^2] = 1$ e $\\bar{X}_n \\xrightarrow{p} 0$, enquanto $\\frac{n}{n-1} \\to 1$. Pelo Teorema de Slutsky / Mapeamento Contínuo, $S_n^2 \\xrightarrow{p} 1 \\cdot (1 - 0) = 1$.',
    howToSolve: {
      intuition:
        'A variância amostral $S_n^2$ é estimador não viesado e **consistente** de $\\sigma^2$ sempre que $E[X^2] < \\infty$ — aqui provado exatamente via LGN + Slutsky.',
      steps: [
        'Escreva $S_n^2 = \\frac{n}{n-1}\\left(\\frac{1}{n}\\sum_{i=1}^n X_i^2 - (\\bar{X}_n)^2\\right)$.',
        'Pela Lei dos Grandes Números (LGN), como $X_i \\sim N(0,1)$ são i.i.d. com momentos finitos: $\\bar{X}_n \\xrightarrow{p} E[X] = 0$ e $\\frac{1}{n}\\sum X_i^2 \\xrightarrow{p} E[X^2] = 1$.',
        'Pelo Teorema de Slutsky (ou Continuidade): $\\frac{n}{n-1} \\to 1$, $\\bar{X}_n^2 \\xrightarrow{p} 0$, logo $S_n^2 \\xrightarrow{p} 1\\cdot(1 - 0) = 1$.'
      ],
      formulaLatex: 'S_n^2 = \\frac{n}{n-1}\\left(\\frac{1}{n}\\sum X_i^2 - \\bar{X}_n^2\\right) \\xrightarrow{p} 1\\cdot(1 - 0) = 1',
      trapAlert:
        'Veja o contraste perfeito com o item 98: $S_n^2$ é **consistente** ($\\xrightarrow{p} \\sigma^2$) e **não viesado** para $\\sigma^2$ ($E[S_n^2] = \\sigma^2$), MAS a raiz quadrada $S_n$ NÃO é não viesada para $\\sigma$!'
    },
    tags: ['lgn', 'slutsky', 'consistência', 'variância-amostral']
  },
  {
    id: 98,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-2',
    editalRef: 'Estatística — 2. Viés de Estimadores e Desigualdade de Jensen ($S_n$ vs $S_n^2$)',
    statement:
      'Dada uma amostra aleatória simples de tamanho $n = 100$ de uma população com desvio padrão $\\sigma > 0$, o desvio padrão amostral $S_{100} = \\sqrt{S_{100}^2}$ é um estimador não viesado de $\\sigma$, isto é, $E[S_{100}] = \\sigma$.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Desigualdade de Jensen para funções estritamente côncavas: $E[\\sqrt{Y}] < \\sqrt{E[Y]}$'],
    quickVerdict:
      'ERRADO. Embora $S_{100}^2$ seja não viesado para a *variância* ($E[S^2] = \\sigma^2$), a função raiz quadrada $g(y) = \\sqrt{y}$ é **estritamente côncava**! Pela **Desigualdade de Jensen**, para qualquer variável não degenerada ($\\sigma > 0$), $E[S] = E[\\sqrt{S^2}] < \\sqrt{E[S^2]} = \\sqrt{\\sigma^2} = \\sigma$. Portanto, $S_n$ é **viesado para baixo** (embora seja assintoticamente não viesado e consistente)!',
    howToSolve: {
      intuition:
        'A não-linearidade não preserva esperança! Só porque $E[S^2] = \\sigma^2$ NÃO significa que $E[\\sqrt{S^2}] = \\sqrt{\\sigma^2}$.',
      steps: [
        'Sabemos que $\\text{Var}(S_{100}) = E[S_{100}^2] - (E[S_{100}])^2$.',
        'Como $S_{100}$ é aleatório (não constante, pois $\\sigma > 0$), $\\text{Var}(S_{100}) > 0$.',
        'Logo: $(E[S_{100}])^2 = E[S_{100}^2] - \\text{Var}(S_{100}) = \\sigma^2 - \\text{Var}(S_{100}) < \\sigma^2$.',
        'Extraindo a raiz: $E[S_{100}] < \\sigma$ estritamente! O estimador $S_n$ é **viesado** para qualquer $n$ finito (inclusive $n=100$).'
      ],
      formulaLatex: '\\text{Var}(S_n) > 0 \\implies (E[S_n])^2 = E[S_n^2] - \\text{Var}(S_n) < \\sigma^2 \\implies E[S_n] < \\sigma',
      trapAlert:
        'Prova de 2 linhas sem nem precisar de Jensen: $\\text{Var}(S) = E[S^2] - (E[S])^2 > 0 \\implies E[S] < \\sqrt{E[S^2]} = \\sigma$! Funciona para qualquer prova de estatística.'
    },
    tags: ['viés', 'jensen', 'desvio-padrão-amostral']
  },
  {
    id: 99,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-3',
    editalRef: 'Estatística — 3. Máxima Verossimilhança (EMV) e Propriedade da Invariância (Poisson)',
    contextId: 'ee-poisson',
    command:
      'Considere uma amostra aleatória de tamanho $n = 5$ obtida de uma variável aleatória $X \\sim \\text{Poisson}(\\delta)$ com valores observados $\\{3, 0, 0, 1, 4\\}$. Julgue os itens 99 a 102.',
    statement: 'A estimativa de máxima verossimilhança da variância populacional de $X$ é maior ou igual a 2.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Média e Variância da Poisson($\\delta$): $E[X] = \\text{Var}(X) = \\delta$', 'EMV de $\\delta$ na Poisson é $\\bar{X}$', 'Invariância do EMV'],
    quickVerdict:
      'ERRADO. Na distribuição $\\text{Poisson}(\\delta)$, a variância é igual à média: $\\text{Var}(X) = \\delta$. O EMV de $\\delta$ é a média amostral: $\\hat{\\delta}_{EMV} = \\bar{x} = \\frac{3+0+0+1+4}{5} = \\frac{8}{5} = 1,6$. Pela propriedade da invariância do EMV, o EMV da variância é também $1,6$ — que é **menor que 2**!',
    howToSolve: {
      intuition:
        'Não confunda a variância *amostral* $s^2$ (que aqui até daria $(1,96+2,56+2,56+0,36+5,76)/4 = 3,3$) com o **EMV da variância populacional paramétrica** $\\text{Var}(X) = \\delta$!',
      steps: [
        'Para $X \\sim \\text{Poisson}(\\delta)$: $P(X=x) = \\frac{e^{-\\delta}\\delta^x}{x!}$, com $E[X] = \\delta$ e $\\text{Var}(X) = \\delta$.',
        'Log-verossimilhança: $\\ell(\\delta) = -n\\delta + (\\sum x_i)\\ln\\delta - \\sum \\ln(x_i!)$.',
        'Derivando e igualando a zero: $\\ell\'(\\delta) = -n + \\frac{\\sum x_i}{\\delta} = 0 \\implies \\hat{\\delta}_{EMV} = \\bar{x} = \\frac{3+0+0+1+4}{5} = 1,6$.',
        'Como $\\text{Var}(X) = \\delta$, pela propriedade da invariância do EMV: $\\widehat{\\text{Var}(X)}_{EMV} = \\hat{\\delta}_{EMV} = 1,6 < 2$.'
      ],
      formulaLatex: '\\hat{\\delta}_{EMV} = \\bar{x} = \\frac{8}{5} = 1{,}6 \\implies \\widehat{\\text{Var}}_{EMV} = 1{,}6 < 2',
      trapAlert:
        'Armadilha clássica em inferência paramétrica: se você calcular $S^2 = 3,3$ sem usar a restrição da Poisson ($\\text{Var} = \\delta$), cai direto na pegadinha e marca Certo!'
    },
    tags: ['emv', 'poisson', 'invariância']
  },
  {
    id: 100,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-3',
    editalRef: 'Estatística — 3. Variância do Estimador / Informação de Fisher na Poisson',
    contextId: 'ee-poisson',
    statement: 'A estimativa para a variância do estimador de máxima verossimilhança $\\hat{\\delta}_{EMV}$ é igual a 0,32.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Variância da média amostral $\\text{Var}(\\bar{X}) = \\frac{\\text{Var}(X)}{n} = \\frac{\\delta}{n}$ (também igual ao Limite de Cramér-Rao)'],
    quickVerdict:
      'CERTO. Como $\\hat{\\delta}_{EMV} = \\bar{X}$, sua variância teórica é $\\text{Var}(\\bar{X}) = \\frac{\\text{Var}(X)}{n} = \\frac{\\delta}{n}$ (que atinge o limite inferior de Cramér-Rao!). Substituindo $\\hat{\\delta} = 1,6$ e $n = 5$: $\\widehat{\\text{Var}}(\\hat{\\delta}_{EMV}) = \\frac{1,6}{5} = 0,32$.',
    howToSolve: {
      intuition:
        'Não confunda $\\text{Var}(X) = \\delta$ (item 99) com a variância do **estimador** $\\text{Var}(\\hat{\\delta}) = \\delta/n$ (item 100)!',
      steps: [
        'O estimador é $\\hat{\\delta}_{EMV} = \\bar{X} = \\frac{1}{n}\\sum_{i=1}^n X_i$.',
        'Como $X_i$ são i.i.d. $\\text{Poisson}(\\delta)$, temos $\\text{Var}(X_i) = \\delta$, logo $\\text{Var}(\\hat{\\delta}_{EMV}) = \\text{Var}(\\bar{X}) = \\frac{\\delta}{n}$.',
        '(Verificação via Informação de Fisher: $I_n(\\delta) = -E[\\ell\'\'(\\delta)] = \\frac{n}{\\delta} \\implies I_n(\\delta)^{-1} = \\frac{\\delta}{n}$.)',
        'Plugando a estimativa $\\hat{\\delta} = 1,6$ e $n = 5$: $\\widehat{\\text{Var}}(\\hat{\\delta}) = \\frac{1,6}{5} = 0,32$.'
      ],
      formulaLatex: '\\text{Var}(\\hat{\\delta}_{EMV}) = \\frac{\\delta}{n} \\implies \\widehat{\\text{Var}}(\\hat{\\delta}_{EMV}) = \\frac{1{,}6}{5} = 0{,}32',
      trapAlert:
        'Dividir por $n=5$ (e não por $n-1=4$) porque aqui é a variância teórica de $\\bar{X}$ avaliada no EMV $\\hat{\\delta}/n$.'
    },
    tags: ['emv', 'fisher', 'variância-do-estimador', 'poisson']
  },
  {
    id: 101,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-3',
    editalRef: 'Estatística — 3. Método dos Momentos',
    contextId: 'ee-poisson',
    statement: 'Pelo método dos momentos, a estimativa de $\\delta$ obtida a partir dessa amostra é igual a 1,6.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Método dos Momentos: igualar o 1º momento populacional $E[X] = \\delta$ ao 1º momento amostral $\\bar{x}$'],
    quickVerdict:
      'CERTO. Na $\\text{Poisson}(\\delta)$, o primeiro momento populacional é $\\mu_1 = E[X] = \\delta$. Igualando ao primeiro momento amostral $m_1 = \\bar{x} = \\frac{8}{5} = 1,6$, obtemos $\\hat{\\delta}_{MM} = 1,6$ (coincidindo com o EMV!).',
    howToSolve: {
      intuition:
        'Para estimar 1 parâmetro ($\\delta$) pelo Método dos Momentos, basta igualar o 1º momento populacional ao 1º momento amostral.',
      steps: [
        '1º momento populacional: $E[X] = \\delta$.',
        '1º momento amostral: $\\bar{x} = \\frac{3 + 0 + 0 + 1 + 4}{5} = \\frac{8}{5} = 1,6$.',
        'Igualando: $\\hat{\\delta}_{MM} = 1,6$. (Em famílias exponenciais naturais parametrizadas pela média, EMV e Método dos Momentos frequentemente coincidem).'
      ],
      formulaLatex: 'E[X] = \\bar{x} \\implies \\hat{\\delta}_{MM} = 1{,}6',
      trapAlert:
        'Se alguém usasse erroneamente o 2º momento central amostral em vez do 1º momento, complicaria à toa: a regra padrão do Método dos Momentos começa sempre pelos primeiros momentos necessários até igualar o número de parâmetros ($k=1 \\implies$ 1º momento).'
    },
    tags: ['método-dos-momentos', 'poisson']
  },
  {
    id: 102,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-3',
    editalRef: 'Estatística — 3. Propriedade da Invariância do EMV para funções de $\\delta$',
    contextId: 'ee-poisson',
    statement: 'A estimativa de máxima verossimilhança para a probabilidade $P(X = 0)$ é igual a $\\frac{2}{5}$.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Invariância do EMV: $\\widehat{g(\\delta)}_{EMV} = g(\\hat{\\delta}_{EMV})$', 'FMP da Poisson: $P(X=0) = e^{-\\delta}$'],
    quickVerdict:
      'ERRADO. $2/5 = 0,40$ é a estimativa **não paramétrica** (frequência relativa empírica de zeros na amostra: 2 zeros em 5 observações). Pelo modelo paramétrico $X \\sim \\text{Poisson}(\\delta)$, temos $P(X=0) = e^{-\\delta}$. Pela invariância do EMV, o EMV paramétrico é $e^{-\\hat{\\delta}} = e^{-1,6} \\approx 0,2019 \\neq 0,40$!',
    howToSolve: {
      intuition:
        'A mesma armadilha conceptual do item 99! O examinador testa se você usa a **Invariância do EMV** dentro do modelo Poisson ($e^{-\\hat{\\delta}}$) ou se cai na frequência empírica bruta ($2/5$).',
      steps: [
        'Na distribuição $\\text{Poisson}(\\delta)$: $P(X=0) = \\frac{e^{-\\delta}\\delta^0}{0!} = e^{-\\delta} = g(\\delta)$.',
        'Pelo Teorema da Invariância do EMV, o EMV de $g(\\delta)$ é $g(\\hat{\\delta}_{EMV}) = e^{-\\hat{\\delta}_{EMV}} = e^{-1,6}$.',
        'Como $e^1 \\approx 2,718$ e $e^{1,6} > e^{1,5} > 4$, temos $e^{-1,6} < 1/4 = 0,25$ (na verdade $\\approx 0,202$), muito distante de $2/5 = 0,40$!'
      ],
      formulaLatex: '\\widehat{P(X=0)}_{EMV} = e^{-\\hat{\\delta}_{EMV}} = e^{-1{,}6} \\approx 0{,}202 \\ne \\frac{2}{5} = 0{,}40',
      trapAlert:
        'A frequência relativa $2/5$ seria o EMV *não paramétrico* (ou de uma Bernoulli $I_{\\{X=0\\}}$ ignorando que $X \\sim \\text{Poisson}$). Em prova do Cebraspe, dentro de bloco paramétrico Poisson, use sempre a função paramétrica + invariância!'
    },
    tags: ['emv', 'invariância', 'poisson']
  },
  {
    id: 103,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-4',
    editalRef: 'Econometria — 4. Séries Temporais: Estacionariedade Fraca (Covariância-Estacionária)',
    statement:
      'Uma série temporal fracamente estacionária apresenta média e variância constantes ao longo do tempo (além de autocovariância dependente apenas da defasagem), não exibindo tendência determinística ou sazonalidade.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Condições de estacionariedade em covariância (fraca)'],
    quickVerdict:
      'CERTO. Em uma série fracamente estacionária: (1) $E[Y_t] = \\mu$ constante (sem tendência ou componente sazonal na média); (2) $\\text{Var}(Y_t) = \\sigma^2 < \\infty$ constante; e (3) $\\text{Cov}(Y_t, Y_{t-k}) = \\gamma_k$ depende apenas da defasagem $k$ (e não de $t$).',
    howToSolve: {
      intuition:
        'Tendência (média varia com $t$) e sazonalidade periódica (média ou variância varia com o trimestre/mês $t$) violam diretamente $E[Y_t] = \\mu$ constante.',
      steps: [
        'Definição de estacionariedade fraca (de 2ª ordem): $E[Y_t] = \\mu$, $\\text{Var}(Y_t) = \\gamma_0 < \\infty$, $\\text{Cov}(Y_t, Y_{t-k}) = \\gamma_k$ independentes de $t$.',
        'Logo, séries com tendência ou sazonalidade determinística/estocástica não são estacionárias até serem diferenciadas/dessazonalizadas.'
      ],
      formulaLatex: 'E[Y_t] = \\mu, \\quad \\text{Var}(Y_t) = \\gamma_0, \\quad \\text{Cov}(Y_t, Y_{t-k}) = \\gamma_k',
      trapAlert:
        'Cuidado com a diferença entre estacionariedade **fraca** (momentos de 1ª e 2ª ordem constantes) e **estrita** (distribuição conjunta invariante a translações no tempo — esta última exige mais que média/variância, embora uma implique a outra no caso Gaussiano!).'
    },
    tags: ['séries-temporais', 'estacionariedade']
  },
  {
    id: 104,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-4',
    editalRef: 'Econometria — 4. Vetores Autorregressivos (VAR) e Estacionariedade',
    statement:
      'Na estimação de modelos Vetoriais Autorregressivos (VAR) empregados em análises e previsões macroeconômicas, não é necessário que as séries sejam estacionárias nem cointegradas, sendo irrelevante a presença de raízes unitárias.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Condição de estabilidade do VAR (raízes do polinômio característico fora do círculo unitário)', 'Risco de regressão espúria / inferência não padrão com I(1)'],
    quickVerdict:
      'ERRADO. Modelos VAR padrão (Sims) assumem **séries estacionárias** (ou diferenciadas para atingir estacionariedade), de modo que as raízes do polinômio característico estejam fora do círculo unitário para garantir estabilidade, funções impulso-resposta convergentes e inferência assintótica válida! Se houver variáveis não estacionárias $I(1)$ que cointegram, o arcabouço apropriado é o **VECM** (*Vector Error Correction Model*) — nunca é "irrelevante" a presença de raízes unitárias.',
    howToSolve: {
      intuition:
        'Regressão entre variáveis não estacionárias sem cointegração gera risco clássico de **regressão espúria** (Granger & Newbold), distribuições não padrão de testes F/t/causalidade de Granger (Toda-Yamamoto / Sims-Stock-Watson) e previsões/impulso-resposta explosivos!',
      steps: [
        'Em um VAR($p$) padrão $y_t = c + A_1 y_{t-1} + \\dots + A_p y_{t-p} + \\varepsilon_t$, a estabilidade exige que $\\det(I - A_1 z - \\dots - A_p z^p) = 0$ tenha todas as raízes com $|z| > 1$ (estacionariedade).',
        'Com séries $I(1)$: ou se diferencia ($\\Delta y_t$ em VAR, perdendo relação de longo prazo se houver cointegração), ou se estima em **VECM** quando cointegradas.',
        'Portanto, raízes unitárias e estacionariedade são altamente relevantes e não podem ser simplesmente ignoradas em um VAR.'
      ],
      trapAlert:
        'Embora Sims (1980) tenha argumentado que previsões pontuais em nível às vezes preservam consistência de MQO se houver cointegração implícita, afirmar que "não é necessário" e é "irrelevante" ignora as condições de estabilidade, inferência e VECM cobradas nos manuais (Enders / Lütkepohl / Bueno).'
    },
    tags: ['var', 'estacionariedade', 'raízes-unitárias', 'vecm']
  },
  {
    id: 105,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-4',
    editalRef: 'Econometria — 4. Estrutura do Modelo VAR(p)',
    statement:
      'Em um modelo Vetorial Autorregressivo de ordem $p$, $\\text{VAR}(p)$, cada variável endógena é modelada como função linear dos valores defasados de todas as variáveis do sistema, inclusive de suas próprias defasagens.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Equação matricial de um VAR(p) na forma reduzida'],
    quickVerdict:
      'CERTO. Definição exata da forma reduzida de um $\\text{VAR}(p)$: para $k$ variáveis endógenas, cada equação exprime $y_{i,t}$ como combinação linear de $y_{1,t-1},\\dots,y_{1,t-p}, \\dots, y_{k,t-1},\\dots,y_{k,t-p}$ (ou seja, defasagens próprias e das demais variáveis do vetor) mais constante/exógenas e erro.',
    howToSolve: {
      intuition:
        'A grande ideia do VAR (Christopher Sims) é tratar todas as variáveis simetricamente como endógenas, explicando cada uma pelas defasagens de *todo* o vetor (próprias e cruzadas).',
      steps: [
        'Sistema $\\text{VAR}(p)$: $\\mathbf{y}_t = \\mathbf{c} + A_1 \\mathbf{y}_{t-1} + A_2 \\mathbf{y}_{t-2} + \\dots + A_p \\mathbf{y}_{t-p} + \\boldsymbol{\\varepsilon}_t$.',
        'Cada linha $i$ contém $y_{i,t-1}, \\dots, y_{i,t-p}$ (defasagens próprias) e $y_{j,t-1}, \\dots, y_{j,t-p}$ para $j \\neq i$ (defasagens das outras variáveis).'
      ],
      formulaLatex: '\\mathbf{y}_t = \\mathbf{c} + \\sum_{\\ell=1}^{p} A_\\ell \\mathbf{y}_{t-\\ell} + \\boldsymbol{\\varepsilon}_t',
      trapAlert:
        'No VAR na forma **reduzida**, não há valores *contemporâneos* das outras variáveis ($y_{j,t}$) no lado direito; interações contemporâneas entram apenas na forma **estrutural (SVAR)** ou na matriz de covariâncias de $\\boldsymbol{\\varepsilon}_t$.'
    },
    tags: ['var', 'séries-temporais', 'econometria']
  },
  {
    id: 106,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-5',
    editalRef: 'Econometria — 5. Dados em Painel: Modelo de Efeitos Aleatórios (RE)',
    statement:
      'No modelo de dados em painel com efeitos aleatórios, assume-se que as diferenças individuais não observadas (efeito específico de cada unidade) são não correlacionadas com as variáveis explicativas do modelo.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Hipótese de ortogonalidade do modelo Random Effects: $E[c_i \\mid X_{i1}, \\dots, X_{iT}] = 0$ (ou $\\text{Cov}(c_i, x_{it}) = 0$)'],
    quickVerdict:
      'CERTO. Em $y_{it} = x_{it}\'\\beta + c_i + u_{it}$, a hipótese crucial que torna o estimador de **Efeitos Aleatórios (RE — GLS)** consistente e eficiente é justamente a ausência de correlação entre o efeito individual não observado $c_i$ e todas as variáveis explicativas $x_{it}$ ($\\text{Cov}(c_i, x_{it}) = 0$).',
    howToSolve: {
      intuition:
        'Se $c_i$ NÃO é correlacionado com $x_{it}$, você pode deixá-lo dentro do erro composto $v_{it} = c_i + u_{it}$ sem gerar viés de variável omitida — usando MQG/GLS (Efeitos Aleatórios) para ganhar eficiência!',
      steps: [
        'Compare os dois modelos clássicos de Wooldridge/Hausman:',
        '**Efeitos Aleatórios (RE)**: exige $\\text{Cov}(c_i, x_{it}) = 0$ (para todo $t$). Permite estimar coeficientes de variáveis invariantes no tempo (como sexo ou região) e é mais eficiente que FE sob $H_0$.',
        '**Teste de Hausman**: testa exatamente $H_0: \\text{Cov}(c_i, x_{it}) = 0$ (RE consistente e eficiente) vs. $H_1: \\text{Cov}(c_i, x_{it}) \\ne 0$ (só FE consistente).'
      ],
      formulaLatex: '\\text{RE válido } \\iff \\text{Cov}(c_i, x_{it}) = 0 \\;\\; \\forall t',
      trapAlert:
        'Acompanhe o item seguinte (107): juntos, 106 e 107 cobram o par exato RE vs. FE.'
    },
    tags: ['painel', 'efeitos-aleatórios', 'hausman']
  },
  {
    id: 107,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-5',
    editalRef: 'Econometria — 5. Dados em Painel: Modelo de Efeitos Fixos (FE)',
    statement:
      'O modelo de dados em painel com efeitos fixos permite que características individuais não observadas constantes no tempo sejam arbitrariamente correlacionadas com as variáveis explicativas.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Transformação within (desvio da média temporal) ou primeiras diferenças em Efeitos Fixos'],
    quickVerdict:
      'CERTO. Ao aplicar a transformação *within* ($y_{it} - \\bar{y}_i = (x_{it} - \\bar{x}_i)\'\\beta + (u_{it} - \\bar{u}_i)$) ou incluir *dummies* por indivíduo, o efeito fixo invariante no tempo $c_i$ é **eliminado** ($c_i - \\bar{c}_i = 0$), permitindo correlação arbitrária entre $c_i$ e $x_{it}$ sem enviesar $\\hat{\\beta}_{FE}$!',
    howToSolve: {
      intuition:
        'Essa é exatamente a grande vantagem do Efeitos Fixos (FE): controlar toda heterogeneidade não observada *constante no tempo* mesmo que ela seja correlacionada com os regressores $X$ (habilidade do trabalhador, cultura da firma, geografia etc.).',
      steps: [
        'Modelo: $y_{it} = x_{it}\'\\beta + c_i + u_{it}$.',
        'Subtraindo a média temporal de cada indivíduo (*within*): $c_i$ desaparece algebricamente porque é constante em $t$.',
        'Logo, $\\hat{\\beta}_{FE}$ permanece consistente mesmo quando $\\text{Cov}(c_i, x_{it}) \\neq 0$ (ao custo de não identificar coeficientes de regressores também constantes no tempo!).'
      ],
      formulaLatex: '\\ddot{y}_{it} = \\ddot{x}_{it}\'\\beta + \\ddot{u}_{it} \\quad (c_i \\text{ eliminado} \\implies \\text{permite } \\text{Cov}(c_i, x_{it}) \\ne 0)',
      trapAlert:
        'Lembre-se da limitação do FE: se a heterogeneidade não observada *variar no tempo* e for correlacionada com $x_{it}$, o FE não a elimina!'
    },
    tags: ['painel', 'efeitos-fixos', 'within']
  },
  {
    id: 108,
    prova: 'P2',
    subjectId: 'estatistica_econometria',
    topicId: 'ee-6',
    editalRef: 'Estatística — 6. Processos Estocásticos: Cadeias de Markov',
    statement:
      'Em uma cadeia de Markov de primeira ordem, a distribuição de probabilidade do estado futuro depende necessariamente de toda a sequência completa de estados passados observados desde o instante inicial.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Propriedade Markoviana (ausência de memória para além do estado presente)'],
    quickVerdict:
      'ERRADO. A definição fundamental de uma Cadeia de Markov (de 1ª ordem) é justamente a **propriedade markoviana**: dado o estado presente $X_t$, a distribuição do estado futuro $X_{t+1}$ **independe** da história passada anterior ($X_{t-1}, \\dots, X_0$): $P(X_{t+1} = j \\mid X_t = i, X_{t-1}, \\dots, X_0) = P(X_{t+1} = j \\mid X_t = i)$.',
    howToSolve: {
      intuition:
        'Propriedade de Markov = "o futuro só depende do presente, não de todo o caminho passado que trouxe até aqui".',
      steps: [
        'Enuncie a propriedade de Markov: $P(X_{t+1} = x_{t+1} \\mid X_t = x_t, X_{t-1} = x_{t-1}, \\dots, X_0 = x_0) = P(X_{t+1} = x_{t+1} \\mid X_t = x_t)$.',
        'O enunciado diz o exato oposto ("depende necessariamente de toda a sequência completa de estados passados").'
      ],
      formulaLatex: 'P(X_{t+1} \\mid X_t, X_{t-1}, \\dots, X_0) = P(X_{t+1} \\mid X_t)',
      trapAlert:
        'Em cadeias de Markov de ordem $k$, depende apenas dos últimos $k$ estados — e por definição básica "cadeia de Markov" é sempre de ordem 1 (memória apenas do estado atual).'
    },
    tags: ['cadeia-de-markov', 'processos-estocásticos']
  },

  // =========================================================================
  // CONTABILIDADE DE INSTITUIÇÕES FINANCEIRAS — COSIF (Itens 109 a 120)
  // =========================================================================
  {
    id: 109,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-1',
    editalRef: 'COSIF — 1. Operações de Crédito: Empréstimos vs. Financiamentos',
    command: 'Com base nas normas do COSIF, do CMN/BCB e nos pronunciamentos contábeis aplicáveis às instituições financeiras, julgue os itens 109 a 120.',
    statement:
      'No plano contábil das instituições do Sistema Financeiro Nacional (COSIF), distinguem-se empréstimos e financiamentos porque os empréstimos são operações realizadas sem destinação específica nem vínculo a comprovação da aplicação dos recursos, enquanto os financiamentos possuem destinação específica vinculada à comprovação do emprego dos recursos.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Classificação das Operações de Crédito no COSIF (rubrica 1.6.1.00.00-4)'],
    quickVerdict:
      'CERTO. Definição literal do Manual do COSIF (seção de Operações de Crédito — Empréstimos e Títulos Descontados vs. Financiamentos): empréstimos são concedidos sem destinação específica e sem obrigação de comprovar aplicação (ex.: cheque especial, capital de giro livre); financiamentos vinculam-se a finalidade específica e comprovação da aplicação (ex.: imóvel, veículo, BNDES).',
    howToSolve: {
      intuition:
        'Distinção clássica cobrada em praticamente todo concurso bancário e do Bacen!',
      steps: [
        'No COSIF (Elenco de Contas / Documentos — Capítulo 1, Operações de Crédito):',
        '• **Empréstimos**: operações realizadas sem destinação específica ou vínculo à comprovação da aplicação dos recursos.',
        '• **Financiamentos**: operações realizadas com destinação específica, vinculadas à comprovação da aplicação dos recursos (aquisição de bens, investimento, rural, habitacional etc.).'
      ],
      trapAlert:
        'Não troque os conceitos nem confunda financiamento com títulos descontados (operação de antecipação de recebíveis/duplicatas com direito de regresso).'
    },
    tags: ['cosif', 'operações-de-crédito', 'empréstimo-vs-financiamento']
  },
  {
    id: 110,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-2',
    editalRef: 'COSIF — 2. Competência Normativa do CMN/BCB e Recepção de Pronunciamentos do CPC',
    statement:
      'Os pronunciamentos técnicos emitidos pelo Comitê de Pronunciamentos Contábeis (CPC) passam a ser de observância obrigatória por todas as instituições financeiras autorizadas a funcionar pelo Banco Central imediatamente após sua aprovação pelo Conselho Federal de Contabilidade (CFC), independentemente de ato normativo específico do CMN ou do BCB.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Competência privativa da Lei nº 4.595/1964 (art. 4º, XII) e exigência de recepção expressa pelo CMN/BCB'],
    quickVerdict:
      'ERRADO. Pela Lei nº 4.595/1964 (art. 4º, XII) e normas do COSIF (e Res. CMN 4.858/2020 / 4.966/2021), compete ao **CMN/BCB** expedir normas gerais de contabilidade para instituições financeiras! Pronunciamentos do **CPC** só se tornam obrigatórios para instituições reguladas pelo BCB quando **expressamente recepcionados** por Resolução do CMN ou do BCB (frequentemente com adaptações ou vetos parciais, como na Res. CMN 4.966).',
    howToSolve: {
      intuition:
        'Regra de ouro da regulação prudencial bancária: a CVM e o CFC não mandam diretamente na contabilidade regulatória do SFN sem o crivo do CMN/BCB!',
      steps: [
        'A Lei nº 4.595/1964 confere competência ao CMN/BCB para ditar o padrão contábil das instituições financeiras (COSIF).',
        'Quando o CPC aprova um pronunciamento (e o CFC o torna NBC TG), ele vale para companhias abertas/gerais após CVM/CFC, mas **NÃO vale automaticamente** para o SFN.',
        'É imprescindível ato normativo expresso do CMN ou do BCB recepcionando integral ou parcialmente o CPC (com eventuais restrições, como no caso do valor justo ou da antiga IOF/pequenas adaptações prudenciais).'
      ],
      trapAlert:
        'Sempre desconfie de frases dizendo que normas de CFC/CVM aplicam-se automaticamente às instituições do SFN "independentemente de ato do CMN/BCB".'
    },
    tags: ['cosif', 'cmn', 'bcb', 'cpc']
  },
  {
    id: 111,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-3',
    editalRef: 'COSIF — 3. Bonificação em Ações / Cotas e Custo Médio Unitário',
    statement:
      'Quando uma instituição financeira recebe ações ou cotas por meio de bonificação sem custo decorrente de capitalização de lucros ou reservas, a quantidade recebida em bonificação deve ser desconsiderada no cálculo do custo médio unitário da participação detida.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Tratamento contábil de bonificações em ações no COSIF e contabilidade societária'],
    quickVerdict:
      'ERRADO. No recebimento de ações bonificadas (sem custo para a investidora), não se altera o custo *total* contábil do investimento, MAS a **quantidade de ações é acrescida**, o que **reduz o custo médio unitário** por ação (custo total / nova quantidade total)! Logo, a quantidade recebida NÃO é desconsiderada — ela entra no denominador para recalcular o custo médio unitário.',
    howToSolve: {
      intuition:
        'Exemplo simples: você tinha 100 ações por R$ 1.000 (R$ 10/ação) e recebeu 100 ações bonificadas sem pagar nada. Agora tem 200 ações com o mesmo custo total de R$ 1.000 — seu custo unitário caiu para R$ 5/ação!',
      steps: [
        'Segundo o COSIF (e a prática contábil societária para investimentos avaliados ao custo ou TVM): ações recebidas em bonificação sem custo não geram receita nem aumentam o saldo financeiro total registrado na conta.',
        'Entretanto, as quantidades recebidas DEVEM ser somadas ao estoque de ações em carteira, reduzindo proporcionalmente o custo médio unitário por ação: $\\text{Custo Unitário Médio} = \\frac{\\text{Saldo Contábil Total}}{Q_{\\text{anterior}} + Q_{\\text{bonificada}}}$.'
      ],
      formulaLatex: '\\text{Novo Custo Unitário} = \\frac{\\text{Custo Total Anterior}}{Q_{\\text{ant}} + Q_{\\text{bonif}}}',
      trapAlert:
        'Diferencie: bonificação *sem custo* não altera o valor contábil total (salvo casos fiscais específicos fora da regra contábil geral), mas altera obrigatoriamente a **quantidade** e o **custo médio unitário**.'
    },
    tags: ['cosif', 'bonificação', 'investimentos']
  },
  {
    id: 112,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-3',
    editalRef: 'COSIF — 3. Classificação de Títulos e Valores Mobiliários (Circular BCB nº 3.068/2001 / Res. CMN 4.966)',
    statement:
      'Na classificação tradicional dos Títulos e Valores Mobiliários (TVM) do COSIF, os títulos que não se enquadram na categoria "para negociação" nem na categoria "mantidos até o vencimento" devem ser classificados na categoria "disponíveis para venda".',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['As três categorias de TVM na Circular BCB nº 3.068/2001 (vigente na prova 2024; em transição para Res. CMN 4.966 em 2025)'],
    quickVerdict:
      'CERTO. Pela **Circular BCB nº 3.068/2001** (art. 2º, inciso II — cobrada no edital 2024), "disponíveis para venda" funciona exatamente como categoria **residual**: todos os TVM que não forem classificados como "títulos para negociação" nem como "títulos mantidos até o vencimento" entram como "disponíveis para venda" (mensurados a valor de mercado com contrapartida em conta destacada do Patrimônio Líquido — Ajuste de Avaliação Patrimonial).',
    howToSolve: {
      intuition:
        'Decore a estrutura tripartite clássica da Circular 3.068/2001 e saiba já conectá-la à transição para a **Resolução CMN 4.966/2021** (vigente a partir de jan/2025) visando à prova de 2027!',
      steps: [
        'Na Circular BCB nº 3.068/2001 (edital 2024): (I) Títulos para negociação (valor justo no **Resultado**); (II) Disponíveis para venda (valor justo no **PL**, categoria residual); (III) Mantidos até o vencimento (**Custo amortizado**, exige intenção E capacidade financeira).',
        'A definição literal do inciso II enquadra em "disponíveis para venda" os títulos que não se enquadrem nas categorias I ou III.',
        '**Nota de treinador para Bacen 2027:** a partir de 01/01/2025 entrou plenamente em vigor a **Resolução CMN 4.966/2021** (convergência ao IFRS 9 / CPC 48), que organiza ativos financeiros em: Custo Amortizado, Valor Justo em Outros Resultados Abrangentes (VJORA) e Valor Justo no Resultado (VJR).'
      ],
      trapAlert:
        'Para 2027, estude intensivamente a Resolução CMN nº 4.966/2021 (classificação SPPI / modelo de negócios e perda esperada em 3 estágios), pois ela substituiu normas antigas como 3.068 e 2.682 a partir de 2025!'
    },
    tags: ['cosif', 'tvm', 'circular-3068', 'res-4966']
  },
  {
    id: 113,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-4',
    editalRef: 'COSIF — 4. Patrimônio Líquido: Reservas de Lucros (Lei nº 6.404/76 e COSIF)',
    statement:
      'As reservas legal, estatutárias, para contingências, de incentivos fiscais e de lucros a realizar classificam-se como reservas de lucros no patrimônio líquido.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Distinção entre Reservas de Capital (ágio, bônus de subscrição etc.) e Reservas de Lucros na Lei 6.404/76'],
    quickVerdict:
      'CERTO. Todas as cinco reservas listadas — **Legal** (art. 193), **Estatutárias** (art. 194), **para Contingências** (art. 195), **de Incentivos Fiscais** (art. 195-A) e **de Lucros a Realizar** (art. 197) — são constituídas mediante destinação do lucro líquido do exercício e integram o grupo das **Reservas de Lucros** (junto à reserva de retenção de lucros / expansão e reserva especial de dividendos não distribuídos).',
    howToSolve: {
      intuition:
        'Não confunda Reservas de **Lucros** (vêm da DRE via Lucros Acumulados) com Reservas de **Capital** (contribuições dos sócios/terceiros sem transitar pelo resultado: ágio na emissão de ações, alienação de partes beneficiárias e bônus de subscrição).',
      steps: [
        'Lista oficial de Reservas de Lucros (Lei 6.404/76 arts. 193–200 + COSIF): Legal (5% até 20% CS), Estatutárias, Para Contingências, Incentivos Fiscais, Retenção de Lucros (orçamento de capital), Lucros a Realizar e Especial de Dividendo Obrigatório não distribuído.',
        'Todos os 5 itens citados pertencem exatamente a esse rol.'
      ],
      trapAlert:
        'Pegadinha comum seria incluir "ágio na emissão de ações" (Reserva de Capital!) ou "reserva de reavaliação / ajuste de avaliação patrimonial" no meio dessa lista. Aqui todos são de Lucros.'
    },
    tags: ['cosif', 'patrimônio-líquido', 'reservas-de-lucros']
  },
  {
    id: 114,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-5',
    editalRef: 'COSIF — 5. Ativos Não Financeiros Mantidos para Venda (BNDU / Res. BCB nº 220/2022 ou Res. CMN 4.747/2019)',
    statement:
      'Os ativos não financeiros mantidos para venda recebidos em liquidação de instrumentos financeiros de difícil ou duvidosa solução (antigos BNDU) devem ser avaliados inicialmente pelo menor valor entre o valor presente líquido (VPL) dos fluxos futuros do ativo e seu valor de mercado.',
    officialAnswer: 'E',
    requiredLevel: 'Avancado',
    prerequisites: ['Critério de avaliação inicial dos ativos não financeiros mantidos para venda segundo a Resolução CMN nº 4.747/2019 (recepcionada no COSIF)'],
    quickVerdict:
      'ERRADO. Pela **Resolução CMN nº 4.747/2019** (art. 4º — que regula ativos não financeiros mantidos para venda recebidos em dação/liquidação de empréstimos, os antigos BNDU), tais ativos são mensurados inicialmente pelo **MENOR valor entre: (I) o valor contábil bruto do ativo financeiro liquidado (ou valor justo líquido de despesas de venda) e (II) o valor justo avaliado do bem líquido de despesas de venda** — e **NÃO** "menor entre VPL e valor de mercado"!',
    howToSolve: {
      intuition:
        'Quando o banco toma um imóvel ou veículo em quitação de empréstimo inadimplido (BNDU / mantido para venda), ele não pode inflar seu balanço acima do saldo contábil do crédito nem acima do valor realizável do bem!',
      steps: [
        'Regra da Resolução CMN nº 4.747/2019 (art. 4º) sobre ativos não financeiros recebidos em liquidação de créditos de difícil ou duvidosa solução:',
        'Na data do reconhecimento inicial, avaliam-se pelo **menor** entre: (a) o **valor contábil líquido** da operação liquidada (saldo antes da baixa ou valor justo do bem — especificamente, art. 4º: menor entre o valor contábil do respectivo instrumento financeiro líquido de provisão e o valor justo líquido de despesas de venda, ou conforme critério normativo de avaliação justa líquida de custos de venda — CPC 31).',
        'Não se utiliza "valor presente líquido (VPL)" de fluxos de caixa como base comparativa dessa regra do COSIF para ativos não financeiros mantidos para venda!'
      ],
      trapAlert:
        'Estude a Resolução CMN nº 4.747/2019 (Ativos Não Financeiros Mantidos para Venda) e a distinção para CPC 31 — é tópico queridinho do BCB em COSIF!'
    },
    tags: ['cosif', 'bndu', 'res-4747', 'ativos-não-financeiros']
  },
  {
    id: 115,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-5',
    editalRef: 'COSIF — 5. Provisões, Passivos Contingentes e Ativos Contingentes (Res. CMN nº 3.823/2009 / CPC 25)',
    statement:
      'O passivo contingente constitui uma espécie de provisão de prazo ou de valor incertos que deve ser reconhecida no balanço patrimonial da instituição financeira.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Distinção absoluta do CPC 25 (Res. CMN 3.823/2009): Provisão (reconhecida no Balanço) vs. Passivo Contingente (NÃO reconhecido no Balanço, apenas divulgado em Notas Explicativas se possível)'],
    quickVerdict:
      'ERRADO. Pelo **CPC 25** (recepcionado no SFN pela **Resolução CMN nº 3.823/2009**): **Provisão** é um *passivo* de prazo ou valor incertos (obrigação presente, saída provável e mensurável -> **RECONHECIDO no Balanço**). Já o **Passivo Contingente** é uma obrigação *possível* (ou presente com saída não provável / não mensurável) e **NÃO é uma provisão** e **NÃO é reconhecido no balanço** (vai apenas para Notas Explicativas, salvo remota)!',
    howToSolve: {
      intuition:
        'A pergunta nº 1 de CPC 25 em qualquer concurso: "Passivo contingente entra no Balanço?" **NUNCA!** Só vai para Notas Explicativas (quando possível); o que entra no Balanço é **Provisão** (quando provável + mensurável).',
      steps: [
        'Classificação tripartite da probabilidade de saída de recursos (CPC 25 / Res. CMN 3.823/2009):',
        '1. **Provável** + mensurável + obrigação presente $\\implies$ **Provisão** (contabiliza no Passivo do Balanço + Despesa na DRE + Notas Explicativas).',
        '2. **Possível** (ou presente sem mensuração confiável / saída não provável) $\\implies$ **Passivo Contingente** (NÃO contabiliza no Balanço! Apenas divulga em Notas Explicativas).',
        '3. **Remota** $\\implies$ não contabiliza nem divulga.'
      ],
      trapAlert:
        'Repare na pegadinha verbal do item: ele copiou a definição de *Provisão* ("passivo de prazo ou de valor incertos") e colou na etiqueta de *Passivo Contingente*!'
    },
    tags: ['cosif', 'cpc-25', 'provisões', 'passivo-contingente']
  },
  {
    id: 116,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-5',
    editalRef: 'COSIF — 5. Ativos Intangíveis e Recebimento por Doação / Registro Normativo (Res. CMN nº 4.534/2016)',
    statement:
      'Ativos intangíveis recebidos em doação por instituição financeira devem ser registrados inicialmente pelo seu valor de mercado (valor justo), admitindo-se, conforme a finalidade ou destinação prevista nas normas do COSIF, o registro em subgrupo adequado inclusive no ativo circulante quando destinados à alienação.',
    officialAnswer: 'C',
    requiredLevel: 'Avancado',
    prerequisites: ['Resolução CMN nº 4.534/2016 (Ativo Intangível no SFN) / regras do COSIF sobre doação e classificação'],
    quickVerdict:
      'CERTO. Conforme a **Resolução CMN nº 4.534/2016** (e estrutura do COSIF para ativos recebidos em doação / mantidos para venda ou negociação de intangíveis específicos como créditos de carbono/direitos destinados à venda), ativos intangíveis recebidos sem custo (doação) podem/devem ser mensurados inicialmente ao valor justo/mercado e, conforme a destinação (ex: realização no curto prazo / venda), admitirem classificação no ativo circulante segundo as regras específicas aplicáveis.',
    howToSolve: {
      intuition:
        'Atenção a essa norma específica do SFN (Res. CMN nº 4.534/2016 e elenco COSIF): diferente da intuição de que "todo intangível vai só para o Não Circulante", itens com característica ou destinação de curto prazo / alienação (ou previsão normativa explícita) seguem o critério de valor justo na doação e classificação conforme realizabilidade.',
      steps: [
        'Na recepção por doação/subvenção ou sem desembolso monetário, o critério inicial de mensuração é o valor justo (mercado), pois não há custo histórico de aquisição desembolsado.',
        'Quanto à classificação: ativos realizáveis no curso do exercício seguinte (ou mantidos para venda no curto prazo) figuram no Circulante, enquanto os de uso contínuo nas operações figuram no Intangível (Não Circulante).'
      ],
      trapAlert:
        'Revise na reta final as Resoluções CMN 4.534/2016 (Intangível), 4.535/2016 (Imobilizado) e 4.747/2019 (Mantidos para Venda) — caem em nível detalhado no BCB!'
    },
    tags: ['cosif', 'intangível', 'res-4534']
  },
  {
    id: 117,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-6',
    editalRef: 'COSIF — 6. Governança e Auditoria no SFN: Comitê de Auditoria (Res. CMN nº 4.910/2021)',
    statement:
      'Compete ao comitê de auditoria de instituição financeira avaliar a efetividade das auditorias independente e interna, revisar as demonstrações financeiras semestrais e anuais previamente à divulgação e monitorar as recomendações oriundas da supervisão e das auditorias.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Atribuições legais do Comitê de Auditoria na Resolução CMN nº 4.910/2021 (antiga Res. 3.198/2004)'],
    quickVerdict:
      'CERTO. Descrição fiel das atribuições do Comitê de Auditoria previstas no art. 18 da **Resolução CMN nº 4.910/2021**: opinar sobre contratação/destituição de auditor independente, revisar demonstrações financeiras antes da divulgação, avaliar efetividade das auditorias interna e independente e verificar o cumprimento das recomendações feitas pelos auditores e pelo BCB.',
    howToSolve: {
      intuition:
        'O Comitê de Auditoria (estatutário, reportando ao Conselho de Administração) atua como elo de fiscalização da qualidade das demonstrações financeiras e dos controles internos.',
      steps: [
        'Verifique as competências na Res. CMN 4.910/2021: (1) recomendar/supervisionar auditoria independente; (2) revisar previamente as demonstrações contábeis (inclusive notas explicativas e pareceres); (3) avaliar efetividade das auditorias interna e independente; (4) monitorar cumprimento de recomendações.',
        'Lembre-se do limite conceitual importante: o Comitê de Auditoria *revisa e recomenda*, não *executa* a contabilidade nem substitui a Diretoria ou o Auditor Independente!'
      ],
      trapAlert:
        'Se o item disser que o Comitê de Auditoria "elabora os lançamentos contábeis" ou "audita diretamente no lugar da auditoria independente", estará ERRADO. "Avaliar, revisar e monitorar" está 100% CERTO.'
    },
    tags: ['cosif', 'comitê-de-auditoria', 'res-4910', 'governança']
  },
  {
    id: 118,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-5',
    editalRef: 'COSIF — 5. Regime Especial: Liquidação Extrajudicial e Ativos Intangíveis',
    statement:
      'Em caso de decretação de liquidação extrajudicial de instituição financeira, os ativos intangíveis devem ser integralmente mantidos pelos valores contábeis históricos e continuar sendo amortizados normalmente pelas taxas usuais até o encerramento da liquidação.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Quebra do pressuposto de continuidade operacional (going concern)', 'Avaliação de ativos a valor de realização em liquidação extrajudicial (Lei nº 6.024/74 e COSIF)'],
    quickVerdict:
      'ERRADO. A decretação de **liquidação extrajudicial** rompe o pressuposto contábil da **continuidade operacional** (*going concern*)! Quando a instituição deixa de operar em marcha normal e entra em liquidação, seus ativos passam a ser avaliados pelo valor provável de realização/recuperação (em regra com baixa ou ajuste ao valor realizável líquido de intangíveis sem valor autônomo de venda, como ágio/gastos pré-operacionais/software interno sem venda separada), **não** continuando amortização usual como se estivesse em continuidade.',
    howToSolve: {
      intuition:
        'Pense contabilmente: para que serve "amortizar em 5 anos" uma licença ou ágio numa instituição que foi fechada e está vendendo ativos para pagar credores?!',
      steps: [
        'Princípio básico do CPC 00 / COSIF: demonstrações normais pressupõem continuidade das operações no futuro previsível.',
        'Na liquidação extrajudicial (Lei 6.024/1974 e regras do COSIF para levantamento do balanço de abertura da liquidação), cessa a continuidade.',
        'Ativos que não possuem valor de realização em separado ou não geram caixa na liquidação devem ser baixados/reduzidos a zero ou ao seu valor de realização líquido — nunca mantidos como se nada tivesse acontecido.'
      ],
      trapAlert:
        'Sempre que aparecer "liquidação extrajudicial" ou "descontinuidade", lembre que a base contábil sai do custo amortizado em continuidade e vai para valor de liquidação/realização!'
    },
    tags: ['cosif', 'liquidação-extrajudicial', 'continuidade']
  },
  {
    id: 119,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-2',
    editalRef: 'COSIF — 2. Demonstrações Contábeis Obrigatórias: DFC e DRA / Lei nº 6.404/76 (ANULADA)',
    statement:
      'As instituições financeiras constituídas sob a forma de companhia fechada com patrimônio líquido superior a R$ 2 milhões estão obrigadas à elaboração e publicação da Demonstração dos Fluxos de Caixa (DFC) e da Demonstração do Resultado Abrangente (DRA) em idênticas condições às companhias abertas.',
    officialAnswer: 'X',
    preliminaryAnswer: 'C',
    annulmentOrChangeReason:
      'ANULADA no gabarito definitivo: "O item possibilita mais de uma interpretação, o que prejudicou seu julgamento objetivo." (Conflito entre a regra societária geral do art. 176, § 6º da Lei 6.404/76 para DFC com PL > R$ 2 mi e as regras específicas do COSIF / Res. CMN 4.818/2020 e Res. BCB 2/2020 quanto à obrigatoriedade da DRA e de DFC conforme o segmento prudencial!).',
    requiredLevel: 'Avancado',
    prerequisites: ['Art. 176, § 6º da Lei 6.404/76 (dispensa de DFC apenas para Cia. Fechada com PL <= R$ 2 mi)', 'Resolução CMN nº 4.818/2020 (consolidação das demonstrações no SFN)'],
    quickVerdict:
      'ANULADA (X). Excelente exemplo para aprender as duas camadas normativas: (1) na Lei das S.A. (art. 176, § 6º), Cia. fechada com PL <= R$ 2 mi é dispensada da **DFC** (logo, acima de R$ 2 mi elabora DFC); (2) porém, a **DRA** não está literalmente listada no art. 176 da Lei 6.404/76 nos mesmos termos, dependendo da **Resolução CMN nº 4.818/2020** (que define regras próprias para instituições financeiras e dispensa/obrigatoriedade por segmento S1–S5). A mistura gerou dupla interpretação e anulação.',
    howToSolve: {
      intuition:
        'Para 2027, domine a **Resolução CMN nº 4.818/2020** e a **Resolução BCB nº 2/2020**, que consolidam o conjunto completo de demonstrações financeiras no SFN!',
      steps: [
        'Conjunto de demonstrações na Lei 6.404/76 (art. 176): Balanço Patrimonial, DRE, DLPA (ou DMPL), DFC (dispensada se cia. fechada com PL <= R$ 2 mi na data do balanço) e DVA (apenas cia. aberta).',
        'No SFN (Res. CMN 4.818/2020 + Res. BCB 2/2020): exige-se Balanço, DRE, DRA, DMPL e DFC (além de Notas Explicativas) para instituições autorizadas — com dispensas/regras próprias conforme porte/segmento.',
        'Como o item misturou o critério de "companhia fechada com PL > 2 milhões" (art. 176 §6º da Lei das S.A., que só cita DFC!) com a DRA (de normativo infralegal), foi anulado.'
      ],
      trapAlert:
        'Guarde na ponta da língua os limites: Art. 176 §6º Lei das S.A. = R$ 2 milhões para dispensa de DFC em companhia fechada; DVA = obrigatória apenas para companhias abertas!'
    },
    tags: ['cosif', 'dfc', 'dra', 'res-4818', 'anulada']
  },
  {
    id: 120,
    prova: 'P2',
    subjectId: 'cosif',
    topicId: 'cos-1',
    editalRef: 'COSIF — 1. Contabilidade de Administradoras de Consórcios (Circular BCB nº 3.432 / Lei nº 11.795/2008)',
    statement:
      'Ao encerramento contábil de um grupo de consórcios, os recursos financeiros remanescentes não procurados pelos consorciados contemplados ou excluídos devem ser imediatamente baixados das contas do grupo e reconhecidos como ativos próprios e receita operacional da administradora de consórcios.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Autonomia patrimonial do grupo de consórcios (Lei nº 11.795/2008)', 'Regra dos recursos não procurados após encerramento do grupo'],
    quickVerdict:
      'ERRADO. Pela Lei nº 11.795/2008 e normas contábeis do COSIF para consórcios, o patrimônio do **grupo de consórcios** é autônomo e não se confunde com o da **administradora**! Os recursos não procurados após o encerramento devem ser transferidos para a **administradora** na condição de **depositária** (assumindo um **PASSIVO / obrigação** de devolução aos consorciados credores, com incidência da taxa de permanência prevista em contrato, e NÃO incorporados imediatamente como ativo livre e receita operacional!).',
    howToSolve: {
      intuition:
        'A administradora de consórcios é mera gestora/mandatária dos recursos do grupo — dinheiro esquecido por um consorciado NÃO vira lucro imediato da administradora!',
      steps: [
        'Princípio da separação patrimonial (Lei nº 11.795/2008, art. 3º): o grupo de consórcio tem personalidade/patrimônio autônomo separado da administradora.',
        'Encerrado o grupo, encerram-se as contas do grupo e os saldos não procurados passam para a contabilidade da administradora **com contrapartida no PASSIVO** (obrigações a restituir aos consorciados contemplados/desistentes/excluídos — recursos não procurados).',
        'A administradora atua como **depositária** desses valores (podendo cobrar apenas taxa de permanência mensal prevista em contrato / norma do BCB até a prescrição/entrega ou saque pelos beneficiários), não podendo reconhecê-los de imediato como receita operacional própria.'
      ],
      trapAlert:
        'Guarde a regra contábil dos consórcios no COSIF: os grupos são contabilizados separadamente da administradora; recursos não procurados após o encerramento entram na administradora como **passivo** (obrigação com consorciados), nunca como receita imediata.'
    },
    tags: ['cosif', 'consórcios', 'recursos-não-procurados']
  }
];
