import { QuestionItem } from '../types';

export const QUESTIONS_P2_PART1: QuestionItem[] = [
  // =========================================================================
  // MACROECONOMIA (Itens 51 a 68)
  // =========================================================================
  {
    id: 51,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-1',
    editalRef: 'Macroeconomia — 1. Curto prazo: Modelo Keynesiano Simples / Cruz Keynesiana e AS-AD',
    command: 'Acerca da determinação da renda, dos modelos de curto e longo prazos e da política econômica, julgue os itens a seguir.',
    statement:
      'De acordo com o modelo keynesiano básico com salários rígidos e oferta agregada positivamente inclinada, um aumento exógeno do salário mínimo promove elevação do nível de renda de equilíbrio no curto prazo.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Modelo AS-AD com mercado de trabalho e curva de oferta agregada de curto prazo'],
    quickVerdict:
      'ERRADO. Um aumento exógeno do salário mínimo eleva os custos marginais das firmas, deslocando a Oferta Agregada (OA) para cima/esquerda (choque de oferta adverso). No equilíbrio AS-AD, os preços sobem e a RENDA DE EQUILÍBRIO CAI (e reduz o emprego), não aumenta.',
    howToSolve: {
      intuition:
        'No modelo keynesiano padrão (IS-LM + AS-AD / mercado de trabalho), salário mínimo maior é choque negativo de custos sobre a OA.',
      steps: [
        'Um aumento exógeno do salário mínimo (acima do equilíbrio concorrencial) encarece o fator trabalho e reduz a demanda por trabalho das firmas.',
        'Na curva de Oferta Agregada de curto prazo ($P = P^e + \\dots$ ou mark-up sobre salários $P = (1+\\mu)W/A$), um aumento em $W$ desloca a OA para a esquerda/cima.',
        'Dada a Demanda Agregada (DA), o novo equilíbrio tem nível de preços $P$ mais alto e produto/renda de equilíbrio $Y$ MENOR.'
      ],
      formulaLatex: '\\uparrow W \\implies \\text{OA desloca p/ esquerda} \\implies \\uparrow P \\text{ e } \\downarrow Y',
      trapAlert:
        'Não confunda hipóteses heterodoxas de "estímulo ao consumo via massa salarial" com o modelo keynesiano canônico de livro-texto cobrado no edital (Blanchard / Mankiw / Dornbusch).'
    },
    tags: ['macro', 'as-ad', 'salário-mínimo', 'choque-oferta']
  },
  {
    id: 52,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-2',
    editalRef: 'Macroeconomia — 2. Crescimento Econômico: Modelo de Solow (ANULADA)',
    statement:
      'No modelo de crescimento de Solow, um aumento da taxa de crescimento populacional reduz o produto de equilíbrio no estado estacionário.',
    officialAnswer: 'X',
    preliminaryAnswer: 'E',
    annulmentOrChangeReason:
      'ANULADA no gabarito definitivo: "O fato de não ter sido especificado o produto como per capita prejudicou o julgamento objetivo do item." (No estado estacionário de Solow, ↑n reduz o capital e o produto POR TRABALHADOR/PER CAPITA k* e y*, mas o produto TOTAL Y cresce à taxa n+g).',
    requiredLevel: 'Intermediario',
    prerequisites: ['Equação fundamental de Solow: Δk = s f(k) - (δ + n + g)k', 'Distinção entre y* (por trabalhador) e Y (total)'],
    quickVerdict:
      'ANULADA (X). No modelo de Solow, maior $n$ reduz $k^*$ e $y^*$ (produto *por trabalhador* ou *per capita*), mas o produto *agregado* ($Y$) passa a crescer mais rápido à taxa $n+g$. Como o item não especificou "per capita", foi anulado.',
    howToSolve: {
      intuition:
        'Domine a equação de acumulação per capita de Solow para nunca errar essa distinção em 2027!',
      steps: [
        'No modelo de Solow sem progresso tecnológico (ou por unidade de trabalho efetivo), o estado estacionário satisfaz $s f(k^*) = (\\delta + n) k^*$.',
        'Se $n$ aumenta, a reta de investimento necessário $(\\delta + n)k$ fica mais inclinada, reduzindo o estoque de capital *por trabalhador* $k^*$ e, portanto, o produto *por trabalhador* $y^* = f(k^*)$.',
        'Entretanto, em nível agregado, $Y_t = L_t y^*$ cresce à taxa $n$ (ou $n+g$ com tecnologia). Sem a expressão "per capita" ou "por trabalhador", o item ficou ambíguo e mereceu anulação.'
      ],
      formulaLatex: 's\\,f(k^*) = (\\delta + n + g)\\,k^* \\implies \\uparrow n \\implies \\downarrow k^*,\\, \\downarrow y^*',
      trapAlert:
        'Memorize sempre: no Solow, taxas de poupança ($s$) e crescimento populacional ($n$) afetam o *nível* de $y^*$, mas a *taxa de crescimento* de $y^*$ no longo prazo só depende do progresso tecnológico ($g$).'
    },
    tags: ['solow', 'crescimento', 'anulada']
  },
  {
    id: 53,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-3',
    editalRef: 'Macroeconomia — 3. Economia aberta, mercado de trabalho e Teoria Quantitativa da Moeda',
    statement:
      'Em uma economia aberta com câmbio flutuante cujo produto seja determinado no mercado de trabalho (pleno emprego no longo prazo), a Teoria Quantitativa da Moeda estabelece relação causal entre variações da oferta de moeda e variações do nível de preços.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Dicotomia clássica e TQM: MV = PY', 'Neutralidade da moeda no longo prazo'],
    quickVerdict:
      'CERTO. Se o produto real $Y$ é fixado no lado real (mercado de trabalho/pleno emprego) e a velocidade $V$ é estável, a equação quantitativa $MV = PY$ implica que variações na oferta monetária $M$ causam variações proporcionais no nível de preços $P$.',
    howToSolve: {
      intuition:
        'Com $Y = \\bar{Y}$ (determinado pelo equilíbrio do mercado de trabalho clássico) e $V = \\bar{V}$, a única variável livre em $M\\bar{V} = P\\bar{Y}$ é $P$.',
      steps: [
        'A identidade quantitativa é $M \\cdot V = P \\cdot Y$.',
        'No longo prazo clássico (onde $Y$ é determinado pela oferta de fatores e tecnologia no mercado de trabalho), $Y = \\bar{Y}$ independe da moeda (dicotomia clássica).',
        'Em câmbio flutuante, o banco central mantém controle exógeno sobre a oferta monetária $M$ (diferente do câmbio fixo, onde $M$ é endógena para sustentar a paridade cambial). Logo, $\\Delta\\%M \\implies \\Delta\\%P$.'
      ],
      formulaLatex: 'M\\bar{V} = P\\bar{Y} \\implies \\frac{\\Delta P}{P} = \\frac{\\Delta M}{M}',
      trapAlert:
        'Note o papel do detalhe "câmbio flutuante": em câmbio fixo com mobilidade de capitais, $M$ seria endógena e a causalidade na TQM poderia se inverter!'
    },
    tags: ['tqm', 'câmbio-flutuante', 'neutralidade-moeda']
  },
  {
    id: 54,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-4',
    editalRef: 'Macroeconomia — 4. Sistema Financeiro, Basileia e Risco Operacional',
    statement:
      'No gerenciamento de riscos bancários sob os acordos de Basileia, o requerimento de capital para risco operacional é calculado majoritariamente a partir das perdas operacionais efetivamente já incorridas no passado recente da instituição.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Basileia III: Indicador de Negócios (BIC) e Componente de Perdas Internas (ILM)'],
    quickVerdict:
      'ERRADO. Embora perdas históricas possam ajustar o cálculo via Multiplicador de Perdas Internas (ILM) em certas jurisdições/portes, a base principal do método padronizado (SMA / Basileia III — adotado também pelo BCB via Res. CMN/BCB) é o **Business Indicator (BI / BIC)** — baseado em receitas, serviços e ativos financeiros — e não majoritariamente perdas incorridas (nem no antigo BIA/TSA baseado em receita bruta!).',
    howToSolve: {
      intuition:
        'Pense na lógica prudencial: um banco novo ou que nunca sofreu uma fraude milionária ainda tem grande risco operacional proporcional ao seu volume de negócios (receitas/transações)!',
      steps: [
        'Em Basileia II (BIA e TSA), o capital de risco operacional era fração da *receita bruta média* (Indicador Básico / Abordagem Padronizada), não das perdas passadas.',
        'Em Basileia III (Abordagem Padronizada única / SMA, implementada no Brasil pela Res. BCB 356/2023 e afins), a base central é o *Business Indicator Component (BIC)* (calculado sobre componentes de juros/dividendos, serviços e financeiro). O histórico de perdas internas (10 anos) entra apenas como fator multiplicador (ILM), e muitas jurisdições/segmentos sequer o aplicam com peso majoritário.',
        'Portanto, nunca é calculado "majoritariamente por perdas incorridas".'
      ],
      trapAlert:
        'Mesmo se alguém lembrar do AMA (Abordagem Avançada de Basileia II), ele foi extinto em Basileia III e nunca dependia *só* de perdas internas (usava perdas externas, cenários e fatores de controle). Em qualquer arcabouço de Basileia, o item está errado.'
    },
    tags: ['basileia', 'risco-operacional', 'regulação-bancária']
  },
  {
    id: 55,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-5',
    editalRef: 'Macroeconomia — 5. Modelo Mundell-Fleming: Trilema e Câmbio Fixo',
    statement:
      'Em um regime de câmbio fixo com plena mobilidade internacional de capitais, a política monetária torna-se passiva e ineficaz para alterar o nível de renda de equilíbrio.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Modelo IS-LM-BP (Mundell-Fleming) com BP horizontal', 'Trindade Impossível'],
    quickVerdict:
      'CERTO. Com câmbio fixo e perfeita mobilidade de capitais ($i = i^*$), qualquer tentativa de expansão/contração monetária desloca os juros internos, provoca fluxos maciços de capital e obriga o BC a intervir no câmbio, revertendo $M$ exatamente ao nível inicial.',
    howToSolve: {
      intuition:
        'A famosa "Trindade Impossível" de Mundell-Fleming: não se pode ter simultaneamente (1) câmbio fixo, (2) livre mobilidade de capitais e (3) política monetária autônoma.',
      steps: [
        'Suponha tentativa de expansão monetária (LM para a direita): $i$ tende a cair abaixo de $i^*$.',
        'Com mobilidade perfeita, ocorre fuga imediata de capitais e pressão de desvalorização cambial.',
        'Para defender a taxa de câmbio fixa, o Banco Central vende reservas internacionais e recolhe moeda doméstica, trazendo a LM exatamente de volta à posição inicial.',
        'Logo, a oferta de moeda torna-se endógena/passiva, e a política monetária tem eficácia nula sobre $Y$.'
      ],
      formulaLatex: '\\text{Câmbio fixo} + \\text{BP horizontal } (i = i^*) \\implies \\text{Pol. Monetária ineficaz (passiva)}',
      trapAlert:
        'Lembre-se do espelho inverso para a prova: no mesmo cenário (câmbio fixo + plena mobilidade), a política *fiscal* tem eficácia MÁXIMA (não sofre crowding-out pelos juros nem apreciação cambial que destrua NX).'
    },
    tags: ['mundell-fleming', 'câmbio-fixo', 'trilema']
  },
  {
    id: 56,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-4',
    editalRef: 'Macroeconomia — 4. Política monetária moderna: taxa de juros como instrumento vs. agregados',
    statement:
      'Quando o Banco Central conduz a política monetária fixando a taxa básica de juros (como a taxa Selic) e acomodando a liquidez necessária para mantê-la na meta, eventuais choques sobre o multiplicador monetário ou sobre a velocidade da moeda não transmitem flutuações diretamente à economia real via contração ou expansão indesejada da liquidez.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Regime de metas de taxa de juros (Poole, 1970) vs. metas de agregados monetários', 'Oferta endógena de reservas bancárias'],
    quickVerdict:
      'CERTO. Ao adotar a taxa de juros como instrumento operacional (como no regime de metas para a inflação via Selic), o BC ajusta automaticamente a base monetária nas operações compromissadas para manter $i = \\bar{i}$, neutralizando choques na demanda por moeda / multiplicador bancário (análise clássica de William Poole).',
    howToSolve: {
      intuition:
        'Se o público ou os bancos retêm mais moeda (choque no multiplicador) e o BC fixa $M$, os juros disparam e derrubam a economia. Se o BC fixa $i$ (Selic), ele injeta reservas automaticamente e isola a curva IS!',
      steps: [
        'Sob meta de taxa de juros ($i = \\text{Selic}$), a oferta de moeda torna-se horizontal/elástica ao nível da taxa-meta.',
        'Se ocorrer um choque no multiplicador monetário (ex: aumento de encaixe voluntário ou mudança na preferência por papel-moeda) que deslocaria a curva LM sob controle de agregados, sob meta de juros o BC via mesa de operações abertas injeta/recolhe reservas até manter a Selic na meta.',
        'Como a demanda agregada depende da taxa de juros (curva IS/MP), choques puramente monetários/financeiros no multiplicador são absorvidos sem desestabilizar o produto.'
      ],
      trapAlert:
        'Isso está diretamente ligado ao artigo seminal de Poole (1970): choques na LM (monetários/multiplicador) -> melhor fixar a taxa de juros! Choques na IS (reais) -> fixar $M$ estabilizaria mais, embora bancos centrais modernos operem exclusivamente via taxa de juros.'
    },
    tags: ['selic', 'multiplicador-monetário', 'poole', 'política-monetária']
  },
  {
    id: 57,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-5',
    editalRef: 'Macroeconomia — 5. Modelo Mundell-Fleming: Política Fiscal em Câmbio Flexível',
    statement:
      'Em uma pequena economia aberta com câmbio flexível e plena mobilidade de capitais, uma expansão fiscal financiada por dívida eleva a taxa de câmbio (apreciação) e provoca redução das exportações líquidas em montante equivalente ao aumento do gasto público, mantendo o produto inalterado.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Mundell-Fleming com câmbio flutuante e BP horizontal: crowding-out completo via NX'],
    quickVerdict:
      'CERTO. Com câmbio flexível e plena mobilidade ($i = i^*$), a curva LM fixa o produto $Y$ (pois $M/P$ não muda e $i$ volta a $i^*$). Um aumento $\\Delta G > 0$ aprecia o câmbio até que $\\Delta NX = -\\Delta G$, deixando $Y$ inalterado (crowding-out externo completo).',
    howToSolve: {
      intuition:
        'Em câmbio flexível com $i = i^*$, a equação da LM ($M/P = L(i^*, Y)$) determina sozinha a renda $Y$! Então se $M$ e $P$ não mudam, $Y$ NÃO PODE MUDAR.',
      steps: [
        'Expansão fiscal ($\\uparrow G$) desloca a IS para a direita e pressiona $i > i^*$.',
        'Entrada de capitais aprecia a moeda doméstica (cai $E$, taxa nominal R$/US$).',
        'A apreciação cambial barateia importações e encarece exportações, reduzindo $NX$ e trazendo a IS de volta até o nível inicial de renda determinado pela LM fixa.',
        'Como $Y$, $C$ (função de $Y-T$) e $I$ (função de $i=i^*$) retornam aos valores iniciais em $Y = C + I + G + NX$, tem-se $\\Delta NX = -\\Delta G$.'
      ],
      formulaLatex: '\\Delta Y = 0,\\; \\Delta I = 0,\\; \\Delta C = 0 \\implies \\Delta NX = -\\Delta G',
      trapAlert:
        'Crowding-out completo em Mundell-Fleming com câmbio flexível ocorre via **exportações líquidas ($NX$)**, e não via investimento ($I$) como na economia fechada clássica!'
    },
    tags: ['mundell-fleming', 'câmbio-flexível', 'política-fiscal', 'crowding-out']
  },
  {
    id: 58,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-6',
    editalRef: 'Macroeconomia — 6. Política Fiscal no Brasil: DBGG e Operações Compromissadas do BCB',
    statement:
      'As operações compromissadas realizadas pelo Banco Central do Brasil na condução da política monetária integram o cômputo da Dívida Bruta do Governo Geral (DBGG).',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Metodologia oficial do BCB para Dívida Bruta do Governo Geral (DBGG) vs. DLSP'],
    quickVerdict:
      'CERTO. Diferente da metodologia do FMI (que exclui títulos do Tesouro na carteira do BC / passivo monetário de esterilização de forma distinta), a metodologia oficial brasileira da **DBGG do Banco Central do Brasil** INCLUI integralmente as operações compromissadas realizadas pelo BCB como dívida bruta.',
    howToSolve: {
      intuition:
        'Tema clássico da realidade fiscal brasileira! Quando o BC vende títulos públicos da sua carteira com compromisso de recompra (operações compromissadas) para enxugar liquidez, isso entra na DBGG do BCB.',
      steps: [
        'Na metodologia vigente do Banco Central do Brasil (estatísticas fiscais do DSTAT/BCB), a DBGG engloba: Governo Federal + INSS + Governos Estaduais + Governos Municipais + **operações compromissadas do Banco Central**.',
        'A justificativa do BCB é que tais operações funcionam economicamente como dívida pública remunerada pela Selic junto ao mercado (substituindo títulos do Tesouro no giro da política monetária).',
        'Por isso o debate sobre depósitos voluntários remunerados do BCB (Lei 14.185/2021) — pois depósitos voluntários NÃO entram na DBGG, ao contrário das compromissadas!'
      ],
      trapAlert:
        'Não confunda a regra da DBGG *metodologia FMI* (que geralmente não soma compromissadas do BC da mesma forma, gerando diferença de vários pontos percentuais do PIB) com a DBGG oficial *metodologia BCB*, padrão nas provas do Bacen.'
    },
    tags: ['dbgg', 'compromissadas', 'política-fiscal', 'bcb']
  },
  {
    id: 59,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-6',
    editalRef: 'Macroeconomia — 6. Finanças Públicas: LRF e Emissão de Títulos pelo BCB',
    statement:
      'O Banco Central do Brasil pode emitir títulos de dívida pública própria para fins de condução da política monetária.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Lei de Responsabilidade Fiscal (LC nº 101/2000, art. 34)', 'Proibição de emissão de títulos pelo BCB desde maio de 2002'],
    quickVerdict:
      'ERRADO. A **Lei de Responsabilidade Fiscal (LC 101/2000, art. 34)** proibiu expressamente o Banco Central de emitir títulos da dívida pública a partir de dois anos após sua publicação (maio de 2002). O BCB conduz política monetária usando títulos do **Tesouro Nacional** de sua carteira (ou depósitos voluntários remunerados).',
    howToSolve: {
      intuition:
        'Antes de 2002 existiam as BBC/NBC-E emitidas pelo próprio BCB. A LRF acabou com isso para unificar a gestão da dívida pública no Tesouro Nacional.',
      steps: [
        'Art. 34 da LRF (LC 101/2000): "O Banco Central do Brasil não emitirá títulos da dívida pública a partir de dois anos após a publicação desta Lei Complementar."',
        'Desde maio de 2002, apenas a União (via Secretaria do Tesouro Nacional) emite títulos públicos federais.',
        'Para suas operações de mercado aberto (compromissadas), o BCB utiliza títulos do Tesouro Nacional presentes em sua própria carteira (ou utiliza o instrumento dos depósitos voluntários remunerados, Lei 14.185/2021).'
      ],
      trapAlert:
        'Atenção à conexão com o item 58: é justamente porque o BCB não pode emitir títulos próprios que ele gira sua carteira de títulos do Tesouro via compromissadas (que entram na DBGG)!'
    },
    tags: ['lrf', 'títulos-públicos', 'bcb', 'política-monetária']
  },
  {
    id: 60,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-7',
    editalRef: 'Macroeconomia — 7. Curva de Phillips e Expectativas no Longo Prazo',
    statement:
      'A relação entre inflação e desemprego descrita pela Curva de Phillips torna-se mais complexa quando se incorporam expectativas de inflação e ajustes de preços e salários no longo prazo, desaparecendo o tradeoff estável entre as duas variáveis.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Curva de Phillips aceleracionista / aumentada pelas expectativas de Friedman-Phelps'],
    quickVerdict:
      'CERTO. Na formulação original (Phillips 1958 / Samuelson-Solow), parecia haver um menu estável de escolha entre inflação e desemprego. Ao incluir expectativas adaptativas/racionais no longo prazo ($\\pi_t = \\pi_t^e - \\alpha(u_t - u_n) + \\nu_t$), não há tradeoff permanente no longo prazo: a curva torna-se vertical em $u_n$ (NAIRU).',
    howToSolve: {
      intuition:
        'No curto prazo, com $\\pi^e$ rígida, há tradeoff; no longo prazo, quando $\\pi^e = \\pi$, o desemprego converge à taxa natural $u_n$ para qualquer inflação estável.',
      steps: [
        'Curva de Phillips aumentada pelas expectativas: $\\pi_t = \\pi_t^e - \\alpha(u_t - u_n) + \\varepsilon_t$.',
        'Tentar manter $u_t < u_n$ indefinidamente gera inflação crescente ($\\pi_t > \\pi_{t-1}$), pois os agentes revisam $\\pi^e$ para cima.',
        'Portanto, a dinâmica de expectativas torna a relação intertemporal complexa e elimina o tradeoff estável de longo prazo.'
      ],
      formulaLatex: '\\pi_t = \\pi_t^e - \\alpha(u_t - u_n) + \\varepsilon_t \\xrightarrow{\\text{LP: } \\pi^e = \\pi} u_t = u_n',
      trapAlert:
        'Enunciados equilibrados que apontam o papel das expectativas em quebrar a simplicidade da curva estática de curto prazo costumam refletir diretamente Friedman (1968) / Phelps (1967).'
    },
    tags: ['curva-de-phillips', 'expectativas', 'nairu']
  },
  {
    id: 61,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-5',
    editalRef: 'Macroeconomia — 5. Taxa de Câmbio e Paridade do Poder de Compra (PPC)',
    statement:
      'A teoria da Paridade do Poder de Compra (PPC) possui limitações empíricas importantes no curto e médio prazos devido a fatores como custos de transporte, barreiras comerciais, bens não comercializáveis e diferenças nas cestas de consumo entre países.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Lei do Preço Único e hipóteses restritivas da PPC absoluta e relativa'],
    quickVerdict:
      'CERTO. A PPC parte da Lei do Preço Único sem fricções; na prática, custos de transporte, tarifas/barreiras, bens *non-tradables* (serviços, imóveis — efeito Balassa-Samuelson) e pesos distintos nos índices de preços impedem que a PPC se verifique perfeitamente no curto/médio prazo.',
    howToSolve: {
      intuition:
        'A Lei do Preço Único só vale perfeitamente se os bens forem idênticos, livremente comercializáveis e com custo de transporte/tarifa zero.',
      steps: [
        'Na realidade existem: (1) custos de frete e seguro; (2) tarifas, cotas e regulações sanitárias; (3) bens não comercializáveis (*non-tradables*, como corte de cabelo, habitação); (4) cestas de consumo nacionais diferentes no cálculo do IPC.',
        'Por isso, desvios persistentes da PPC são amplamente documentados no curto e médio prazos.'
      ],
      trapAlert:
        'Não confunda **PPC** (mercado de bens, cheia de desvios no curto prazo) com **CIP — Paridade Coberta da Taxa de Juros** (item 62: arbitragem financeira quase instantânea).'
    },
    tags: ['câmbio', 'ppc', 'non-tradables']
  },
  {
    id: 62,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-5',
    editalRef: 'Macroeconomia — 5. Paridade Coberta da Taxa de Juros (CIP)',
    statement:
      'A condição de Paridade Coberta da Taxa de Juros (CIP) tende a se manter com elevada precisão em mercados financeiros integrados porque seus desvios representam oportunidades diretas de arbitragem livre de risco cambial.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Diferença entre Paridade Coberta (CIP, com contrato a termo F) e Descoberta (UIP, com expectativa E^e)'],
    quickVerdict:
      'CERTO. A CIP envolve exclusivamente taxas conhecidas hoje: juros domésticos ($i$), juros externos ($i^*$), câmbio à vista ($S$) e câmbio a termo ($F$). Como o risco cambial é travado via contrato futuro/termo, qualquer desvio gera lucro de arbitragem sem risco (salvo pequenos custos de transação ou fricções de balanço pós-2008).',
    howToSolve: {
      intuition:
        'Compare CIP vs. UIP: UIP usa a *expectativa* incerta $E^e_{t+1}$, logo envolve risco cambial e falha muito na prática. A CIP usa o *preço a termo travado hoje* $F_t$, sendo uma relação pura de não arbitragem!',
      steps: [
        'Equação da CIP: $(1 + i_t) = (1 + i_t^*) \\frac{F_t}{S_t}$, onde $F_t$ é a taxa a termo contratada em $t$.',
        'Se o lado direito superar o esquerdo, o arbitrador toma emprestado em moeda local, compra moeda estrangeira em $S_t$, aplica a $i_t^*$ e simultaneamente vende o montante futuro a $F_t$ — lucro certo sem risco de câmbio!',
        'Essa arbitragem imediata força o alinhamento estreito da CIP em mercados abertos e líquidos.'
      ],
      formulaLatex: '1 + i = (1 + i^*)\\frac{F}{S} \\iff i - i^* \\approx \\frac{F - S}{S}',
      trapAlert:
        'Cuidado para não trocar Coberta (CIP, com contrato a termo e arbitragem sem risco) por Descoberta (UIP, sujeita a prêmio de risco e carry trade).'
    },
    tags: ['cip', 'arbitragem', 'paridade-juros']
  },
  {
    id: 63,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-5',
    editalRef: 'Macroeconomia — 5. Balança Comercial: Condição de Marshall-Lerner e Curva J',
    statement:
      'Na análise dos efeitos de uma desvalorização cambial sobre a balança comercial, as elasticidades-preço da demanda por exportações e por importações são irrelevantes para determinar se o saldo comercial irá melhorar.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Condição de Marshall-Lerner ($|\\varepsilon_X| + |\\varepsilon_M| > 1$)', 'Efeito preço vs. efeito volume (Curva J)'],
    quickVerdict:
      'ERRADO. A melhoria do saldo comercial após uma desvalorização real depende **crucialmente** das elasticidades-preço! Pela **Condição de Marshall-Lerner**, a desvalorização melhora a balança comercial se e somente se $|\\varepsilon_X| + |\\varepsilon_M| > 1$ (partindo de saldo próximo de zero).',
    howToSolve: {
      intuition:
        'Quando a moeda desvaloriza, cada bem importado fica mais caro em moeda local (efeito preço negativo) antes de as quantidades se ajustarem (efeito volume positivo). Se as quantidades forem inelásticas, o déficit PODE PIORAR!',
      steps: [
        'Saldo comercial em moeda local ou estrangeira depende da reação quantitativa de exportadores e importadores ao novo câmbio real.',
        'Condição de Marshall-Lerner: o saldo comercial melhora após desvalorização real se a soma das magnitudes das elasticidades-preço das exportações e importações superar a unidade: $|\\varepsilon_X| + |\\varepsilon_M| > 1$.',
        'No curtíssimo prazo, elasticidades baixas produzem inclusive piora inicial antes da recuperação (fenômeno da **Curva J**). Logo, afirmar que são "irrelevantes" é grosseiramente errado.'
      ],
      formulaLatex: '|\\varepsilon_X| + |\\varepsilon_M| > 1 \\quad (\\text{Condição de Marshall-Lerner})',
      trapAlert:
        'A dupla Marshall-Lerner + Curva J é figurinha carimbada em provas do Bacen.'
    },
    tags: ['marshall-lerner', 'curva-j', 'balança-comercial']
  },
  {
    id: 64,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-5',
    editalRef: 'Macroeconomia — 5. Regimes cambiais e taxa de câmbio de equilíbrio (ANULADA)',
    statement:
      'A escolha entre regimes cambiais e a definição da taxa de câmbio de equilíbrio real consideram prioritariamente os efeitos transitórios de curto prazo sobre o mercado monetário.',
    officialAnswer: 'X',
    preliminaryAnswer: 'E',
    annulmentOrChangeReason:
      'ANULADA no gabarito definitivo: "O item possibilita mais de uma interpretação, o que prejudicou seu julgamento objetivo."',
    requiredLevel: 'Intermediario',
    prerequisites: ['Determinantes de longo prazo da taxa real de câmbio (produtividade/termos de troca) vs. dinâmica nominal'],
    quickVerdict:
      'ANULADA (X). No gabarito preliminar era "E" porque a taxa de câmbio de equilíbrio real (e a escolha estrutural de regime cambial / áreas monetárias ótimas) fundamenta-se em variáveis reais e estruturais de médio/longo prazo (fundamentos externos, produtividade, estrutura de choques reais vs. nominais). A banca anulou por redação imprecisa.',
    howToSolve: {
      intuition:
        'Para estudar o conteúdo real por trás da questão: entenda o que determina a taxa real de câmbio de equilíbrio (FEER/BEER) e a escolha de regime cambial.',
      steps: [
        'A taxa real de câmbio de equilíbrio de longo prazo depende de fundamentos reais (produtividade relativa — Balassa-Samuelson, termos de troca, posição internacional de investimento, poupança-investimento estrutural).',
        'Na escolha do regime cambial (fixo vs. flutuante, Poole / Áreas Monetárias Ótimas de Mundell), comparam-se prevalência de choques reais vs. nominais, abertura comercial, flexibilidade salarial e mobilidade de fatores — nunca "apenas" ou "prioritariamente efeitos transitórios" de curto prazo.',
        'Como a frase misturou duas discussões ("escolha de regimes" + "taxa de equilíbrio") com adjetivação vaga, acabou anulada.'
      ],
      trapAlert:
        'Mesmo anulada, revise os critérios de Áreas Monetárias Ótimas (Mundell) e choques reais vs. monetários para 2027.'
    },
    tags: ['regimes-cambiais', 'câmbio-real', 'anulada']
  },
  {
    id: 65,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-8',
    editalRef: 'Macroeconomia — 8. Ciclos Reais de Negócios (RBC)',
    statement:
      'Nos modelos de Ciclos Reais de Negócios (RBC), os choques de produtividade total dos fatores (PTF) restringem-se a inovações tecnológicas puras em máquinas e equipamentos, não podendo refletir variações na qualidade da mão de obra, mudanças climáticas ou choques regulatórios.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Conceito amplo de Produtividade Total dos Fatores (PTF / Resíduo de Solow) nos modelos RBC (Kydland-Prescott)'],
    quickVerdict:
      'ERRADO. Na literatura de RBC (Kydland & Prescott, Plosser), o choque em $A_t$ (Produtividade Total dos Fatores) é interpretado de forma ampla: engloba tecnologia, choques climáticos/agrícolas, alterações nos preços relativos de insumos (petróleo), mudanças na regulação governamental, qualidade/capital humano da mão de obra e ambiente institucional.',
    howToSolve: {
      intuition:
        'Desconfie de "não podendo refletir..." quando se fala de $A_t$ (PTF). Todo o resíduo não explicado por variação física bruta de $K$ e $L$ cai dentro de $A_t$!',
      steps: [
        'Na função de produção $Y_t = A_t F(K_t, L_t)$, $A_t$ mede a eficiência com que capital e trabalho se combinam em produto.',
        'Nos manuais de Macroeconomia (Romer, Mankiw, Sachs-Larrain) sobre teoria RBC, lista-se expressamente que choques em $A_t$ representam: novas tecnologias, clima/safras, desastres naturais, mudanças regulatórias/tributárias que afetam eficiência, choques de energia e mudanças na qualificação/organização do trabalho.',
        'Portanto, afirmar que não incluem qualidade da mão de obra ou outros fatores não estritamente mecânicos está errado.'
      ],
      formulaLatex: 'Y_t = A_t F(K_t, L_t) \\quad (A_t = \\text{PTF em sentido amplo})',
      trapAlert:
        'Lembre-se do trio de restrições falsas típicas: "restringem-se a" + "não podendo refletir". Em PTF/RBC, $A_t$ é sempre amplo.'
    },
    tags: ['rbc', 'ciclos-reais', 'ptf']
  },
  {
    id: 66,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-8',
    editalRef: 'Macroeconomia — 8. Mecanismo de transmissão de choques no modelo RBC',
    statement:
      'No modelo de Ciclos Reais de Negócios (RBC), um choque tecnológico positivo eleva a produtividade marginal do trabalho e, por meio da substituição intertemporal do trabalho, induz aumento simultâneo da produção e do nível de emprego.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Substituição intertemporal de lazer/trabalho (Lucas-Rapping)', 'Demanda por trabalho no RBC'],
    quickVerdict:
      'CERTO. Um choque positivo em $A_t$ aumenta a $PMg_L = A_t F_L(K_t, L_t)$ e o salário real $w_t$, elevando também a taxa de juros real $r_t$. Como trabalhar *hoje* paga relativamente mais do que trabalhar no futuro (substituição intertemporal do trabalho > efeito renda para choque temporário), o emprego $L_t$ e o produto $Y_t$ sobem juntos.',
    howToSolve: {
      intuition:
        'O coração da explicação do emprego pró-cíclico no RBC (sem rigidez de salários!) é a substituição intertemporal da oferta de trabalho.',
      steps: [
        'Choque positivo temporário de PTF ($\\uparrow A_t$): desloca a demanda por trabalho $PMg_L$ para cima, elevando o salário real corrente $w_t$.',
        'A oferta de trabalho depende da comparação entre salário real hoje vs. salário real esperado amanhã (descontado por $1+r_t$).',
        'Com $w_t$ temporariamente alto (e $r_t$ alto), trabalhadores substituem lazer presente por trabalho presente — aumenta o emprego $N_t$ e amplia ainda mais a produção $Y_t$.'
      ],
      formulaLatex: '\\uparrow A_t \\implies \\uparrow PMg_L = w_t \\xrightarrow{\\text{subst. intertemporal}} \\uparrow N_t \\text{ e } \\uparrow Y_t',
      trapAlert:
        'Atenção: para choques *permanentes* de produtividade, o efeito renda pode compensar o efeito substituição (mantendo horas de trabalho constantes no longo prazo), mas em choques cíclicos (transitórios/persistentes com decaimento) o mecanismo RBC típico gera pró-ciclicidade de $Y$ e $N$.'
    },
    tags: ['rbc', 'substituição-intertemporal', 'emprego']
  },
  {
    id: 67,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-8',
    editalRef: 'Macroeconomia — 8. Escola Novo-Keynesiana vs. Novo-Clássica',
    statement:
      'Segundo a abordagem novo-keynesiana, não existe desemprego involuntário ou flutuação cíclica do emprego, pois salários e preços ajustam-se instantaneamente para equilibrar os mercados.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Premissas fundamentais dos Novos-Clássicos/RBC vs. Novos-Keynesianos'],
    quickVerdict:
      'ERRADO. A frase descreve os **Novos-Clássicos / RBC** (*market clearing* contínuo com preços e salários flexíveis). Os **Novos-Keynesianos** defendem exatamente o oposto: rigidez nominal de preços e salários (custos de menu, contratos escalonados, salários de eficiência) gera falhas de coordenação, desemprego involuntário e não neutralidade monetária no curto prazo!',
    howToSolve: {
      intuition:
        'Inversão direta de escolas macroeconômicas! Preços/salários instantaneamente flexíveis = Clássico / Novo-Clássico. Rigidez microfundamentada = Novo-Keynesiano.',
      steps: [
        'Identifique as duas características centrais do programa Novo-Keynesiano (Mankiw, Romer, Calvo, Akerlof, Yellen): (1) competição imperfeita (poder de fixação de preços) e (2) rigidez nominal/real microfundamentada (custos de menu, contratos sobrepostos de Taylor/Calvo, salários de eficiência).',
        'Por causa dessas rigidezes, choques de demanda ou política monetária afetam produto e emprego no curto prazo, podendo haver desemprego involuntário e cíclico.',
        'Quem postula mercados continuamente em equilíbrio instantâneo (*continuous market clearing*) são os Novos-Clássicos e o RBC.'
      ],
      trapAlert:
        'Troca de etiquetas entre escolas econômicas (Novo-Clássico vs. Novo-Keynesiano) é das pegadinhas mais frequentes de Macroeconomia.'
    },
    tags: ['novo-keynesiano', 'rigidez-nominal', 'desemprego']
  },
  {
    id: 68,
    prova: 'P2',
    subjectId: 'macroeconomia',
    topicId: 'mac-8',
    editalRef: 'Macroeconomia — 8. Síntese entre perspectiva Clássica e Novo-Keynesiana',
    statement:
      'Enquanto a perspectiva clássica enfatiza a flexibilidade de preços e salários e o papel do lado da oferta na determinação do produto de pleno emprego, a abordagem novo-keynesiana microfundamenta rigidezes nominais e reais que conferem à demanda agregada papel central nas flutuações econômicas de curto prazo.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Horizonte temporal: curto prazo novo-keynesiano vs. longo prazo clássico'],
    quickVerdict:
      'CERTO. Síntese precisa da Nova Síntese Neoclássica / macroeconomia moderna: o lado clássico explica o longo prazo (preços flexíveis, oferta determina $Y^*$), enquanto o arcabouço novo-keynesiano microfundamenta as rigidezes que tornam a demanda agregada e a política monetária relevantes no curto prazo.',
    howToSolve: {
      intuition:
        'Compare o item 67 (errado por inverter os conceitos) com o item 68 (certo por resumir perfeitamente o contraste entre as duas perspectivas!).',
      steps: [
        'Clássicos: mercados se limpam pela flexibilidade de preços; produto potencial vem de capital, trabalho e tecnologia (lado da oferta).',
        'Novos-Keynesianos: derivam rigidezes (custos de menu, *Calvo pricing*, salários de eficiência) a partir de agentes otimizadores com expectativas racionais; logo, no curto prazo a demanda agregada move o produto efetivo em torno do potencial.'
      ],
      trapAlert:
        'Repare como em provas Cebraspe muitas vezes um item errado logo antes (67) prepara o contraste com o item correto logo depois (68).'
    },
    tags: ['novo-keynesiano', 'clássicos', 'macro-moderna']
  },

  // =========================================================================
  // MICROECONOMIA (Itens 69 a 78)
  // =========================================================================
  {
    id: 69,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-1',
    editalRef: 'Microeconomia — 1. Teoria do Consumidor: Preferências Quase-Lineares',
    command: 'No que se refere à teoria do consumidor, teoria da firma, teoria dos jogos e economia comportamental, julgue os itens a seguir.',
    statement:
      'Para um consumidor com função utilidade quase-linear dada por $u(x, y) = x + \\ln y$, em uma solução interior, qualquer aumento adicional na renda será inteiramente direcionado ao consumo do bem $x$.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Condição de tangência TMS = p_x / p_y', 'Propriedade de efeito renda nulo sobre o bem não linear em utilidade quase-linear'],
    quickVerdict:
      'CERTO. Na solução interior, igualando $TMS = \\frac{\\partial u/\\partial x}{\\partial u/\\partial y} = \\frac{1}{1/y} = y$ à razão de preços $p_x / p_y$, obtemos $y^* = p_x / p_y$, que NÃO DEPENDE DA RENDA $R$! Logo, toda renda adicional ($\\%\\Delta R$ após atingir $y^*$) vai 100% para o bem $x = (R - p_y y^*)/p_x$.',
    howToSolve: {
      intuition:
        'Em utilidade quase-linear $u(x, y) = x + v(y)$, a demanda do bem que entra de forma não linear ($y$) tem **efeito renda zero** na solução interior!',
      steps: [
        'Calcule as utilidades marginais: $UMg_x = 1$ e $UMg_y = \\frac{1}{y}$.',
        'Igualando a $TMS_{x,y}$ à razão de preços $\\frac{p_x}{p_y}$: $\\frac{UMg_x}{UMg_y} = \\frac{1}{1/y} = y = \\frac{p_x}{p_y} \\implies y^* = \\frac{p_x}{p_y}$.',
        'Veja que $y^*$ independe de $R$! Substituindo na restrição orçamentária $p_x x + p_y y = R$: $x^* = \\frac{R - p_x}{p_x} = \\frac{R}{p_x} - 1$.',
        'Derivando em relação à renda $R$: $\\frac{\\partial y^*}{\\partial R} = 0$ e $\\frac{\\partial (p_x x^*)}{\\partial R} = 1$. Todo incremento de renda (em solução interior) vai integralmente para o bem $x$.'
      ],
      formulaLatex: 'TMS = y = \\frac{p_x}{p_y} \\implies y^* = \\frac{p_x}{p_y} \\;\\;(\\text{indep. de } R), \\quad x^* = \\frac{R}{p_x} - 1',
      trapAlert:
        'O enunciado teve o rigor matemático de escrever **"em uma solução interior"** (ou seja, $R > p_x$, para que $x^* > 0$). Abaixo de $R = p_x$ haveria solução de canto $x^*=0$ e a renda iria para $y$.'
    },
    tags: ['quase-linear', 'consumidor', 'efeito-renda-nulo']
  },
  {
    id: 70,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-2',
    editalRef: 'Microeconomia — 2. Teoria da Firma: Rendimentos de Escala e Função Custo de Longo Prazo',
    statement:
      'Se a função de produção de uma firma for $y = \\sqrt{K \\cdot L}$, em que $K$ e $L$ representam capital e trabalho, respectivamente, então sua função custo de longo prazo será quadrática em $y$.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Homogeneidade de grau 1 (Rendimentos Constantes de Escala)', 'Função custo de Cobb-Douglas com CRS'],
    quickVerdict:
      'ERRADO. A função $y = K^{1/2} L^{1/2}$ apresenta **rendimentos constantes de escala** (soma dos expoentes $1/2 + 1/2 = 1$). Com preços dos fatores $w$ e $r$ fixos, dobrar $y$ exige dobrar $K$ e $L$, logo o custo total de longo prazo é **LINEAR** em $y$ ($C(w, r, y) = 2\\sqrt{wr}\\,y$), e não quadrático!',
    howToSolve: {
      intuition:
        'Regra mágica de rendimentos de escala vs. função custo de longo prazo: se $f(K, L)$ é homogênea de grau $k$, então o Custo de Longo Prazo $C(y)$ é proporcional a $y^{1/k}$!',
      steps: [
        'Verifique o grau de homogeneidade: $f(tK, tL) = \\sqrt{(tK)(tL)} = t\\sqrt{KL} = t^1 y$. Logo, são **rendimentos constantes de escala** ($k=1$).',
        'Pela regra $C(y) \\propto y^{1/k}$, com $k=1$ o custo de longo prazo é **linear** em $y$!',
        'Vamos provar explicitamente pela minimização de custos ($TMST = w/r$): $\\frac{PMg_L}{PMg_K} = \\frac{K}{L} = \\frac{w}{r} \\implies wL = rK$.',
        'Como $y = \\sqrt{KL} = \\sqrt{K \\cdot (rK/w)} = K\\sqrt{r/w}$, temos $K^* = y\\sqrt{w/r}$ e $L^* = y\\sqrt{r/w}$.',
        'Custo mínimo: $C(w,r,y) = rK^* + wL^* = 2\\sqrt{wr}\\,y$ — função **linear** em $y$!'
      ],
      formulaLatex: 'f(K,L) = K^{1/2}L^{1/2} \\; (\\text{RCE}) \\implies C_{LP}(w,r,y) = 2\\sqrt{wr}\\,y \\; (\\text{linear em } y)',
      trapAlert:
        'Para o custo ser *quadrático* em $y$ ($y^2$), a função de produção precisaria ter grau $k = 1/2$ (ex: $y = (KL)^{1/4}$, rendimentos decrescentes de escala).'
    },
    tags: ['cobb-douglas', 'rendimentos-escala', 'função-custo']
  },
  {
    id: 71,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-3',
    editalRef: 'Microeconomia — 3. Teoria dos Jogos: Jogo Sequencial e Estratégias Mistas (ALTERADA)',
    contextId: 'mic-jogos',
    diagramKey: 'tree-bancos',
    command:
      'Dois bancos, B1 e B2, jogam sequencialmente decidindo se mantêm ou reduzem a taxa de juros. B1 joga primeiro; em seguida, B2 observa a escolha de B1 e decide. Os payoffs (B1, B2) são: se B1 mantém e B2 mantém = (30, 20); se B1 mantém e B2 reduz = (18, 30); se B1 reduz e B2 mantém = (40, 8); se B1 reduz e B2 reduz = (35, 25). Julgue os itens 71 e 72.',
    statement: 'Existe equilíbrio de Nash em estratégias mistas nesse jogo.',
    officialAnswer: 'C',
    preliminaryAnswer: 'E',
    annulmentOrChangeReason:
      'ALTERADA de E para C no gabarito definitivo: "De fato, existe um equilíbrio de Nash em estratégias mistas no referido jogo." (Pelo Teorema de Nash, todo jogo finito possui ao menos um equilíbrio de Nash; ademais, todo equilíbrio em estratégias puras é caso particular de estratégias mistas com probabilidades 0 ou 1 — e ainda existem equilíbrios mistos não degenerados envolvendo a decisão fora do caminho de equilíbrio!).',
    requiredLevel: 'Avancado',
    prerequisites: ['Teorema da Existência de Nash', 'Forma normal de jogo sequencial e estratégias mistas (incluindo probabilidades degeneradas ou suporte misto)'],
    quickVerdict:
      'CERTO (gabarito alterado após recurso!). Todo jogo finito tem equilíbrio de Nash; além disso, mesmo em estratégias estritamente mistas para B2? Cuidado: B2 tem estratégia dominante ("reduz"), mas se B1 joga "reduz" com prob 1, qualquer ação de B2 no nó não alcançado ("após B1 manter") é indiferente na forma normal? Não — espere: se B1 joga "reduz" sempre ($p=0$ em manter), então no nó após "B1 mantém" (probabilidade zero!) qualquer mistura $(q, 1-q)$ de B2 dá payoff esperado idêntico a B2 se B2 mantém a melhor resposta após "reduz"! E, em sentido amplo, estratégias puras são caso particular de mistas.',
    howToSolve: {
      intuition:
        'Lição valiosíssima de Teoria dos Jogos avançada que mudou o gabarito desta questão! Em jogos sequenciais convertidos à forma estratégica (normal), um nó que B1 nunca alcança (probabilidade 0) permite que B2 misture qualquer probabilidade lá sem perder payoff — além de o Teorema de Nash garantir equilíbrio em estratégias mistas em todo jogo finito.',
      steps: [
        'Monte as estratégias de cada jogador na forma normal: B1 escolhe {Manter (M), Reduzir (R)}. B2 tem 4 estratégias completas contingentes (ação se M, ação se R): {MM, MR, RM, RR}.',
        'Por indução retroativa, se B1 joga M, B2 prefere R ($30 > 20$). Se B1 joga R, B2 prefere R ($25 > 8$). Logo, a estratégia RR (sempre reduzir) estritamente/fracamente domina as demais (note: contra B1=R, as estratégias MR e RR dão o mesmo payoff 25 para B2!).',
        'Se B1 escolhe R com probabilidade $1$, qualquer mistura de B2 entre MR e RR (ou seja, jogar R se B1 reduz, e misturar M com prob $q$ e R com prob $1-q$ caso B1 jogasse M, desde que $18(1-q)+30q \\le 35$, i.e., $q \\le 17/12$, válido para todo $q \\in [0,1]$!) forma infinitos Equilíbrios de Nash em estratégias mistas (embora não perfeitos em subjogos!).',
        'Além disso, toda estratégia pura é formalmente uma estratégia mista degenerada (probabilidade 1 e 0), garantindo a existência do equilíbrio de Nash em estratégias mistas.'
      ],
      trapAlert:
        'Nunca diga que "não existe equilíbrio de Nash em estratégias mistas" num jogo finito! O Teorema de Nash garante que sempre existe ao menos um (degenerado ou propriamente misto).'
    },
    tags: ['teoria-dos-jogos', 'nash', 'estratégias-mistas', 'gabarito-alterado']
  },
  {
    id: 72,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-3',
    editalRef: 'Microeconomia — 3. Teoria dos Jogos: Dominância e Indução Retroativa',
    contextId: 'mic-jogos',
    diagramKey: 'tree-bancos',
    statement: 'A redução da taxa de juros é uma estratégia dominante para o banco B2.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Definição de estratégia dominante em jogo sequencial / árvore'],
    quickVerdict:
      'CERTO. Tanto se B1 mantiver a taxa ($30 > 20$) quanto se B1 reduzir a taxa ($25 > 8$), o banco B2 obtém payoff estritamente maior reduzindo a taxa de juros. Logo, reduzir sempre (estratégia RR na forma normal) é dominante para B2.',
    howToSolve: {
      intuition:
        'Olhe os dois nós de decisão de B2 na árvore: em ambos os ramos, "reduz" dá payoff estritamente maior que "mantém".',
      steps: [
        'Ramo superior (B1 escolheu "mantém"): B2 ganha $20$ se mantiver e $30$ se reduzir ($30 > 20 \\implies$ B2 prefere reduzir).',
        'Ramo inferior (B1 escolheu "reduz"): B2 ganha $8$ se mantiver e $25$ se reduzir ($25 > 8 \\implies$ B2 prefere reduzir).',
        'Como independentemente da escolha de B1 a melhor decisão para B2 é sempre reduzir a taxa de juros, reduzir é estratégia estritamente dominante em cada nó de B2 (e RR é fracamente dominante na forma normal — aliás, no ENPS B1 antecipa isso e compara $18$ vs. $35$, escolhendo também reduzir!).'
      ],
      formulaLatex: '\\text{Se B1=M: } 30 > 20; \\quad \\text{Se B1=R: } 25 > 8 \\implies \\text{B2 sempre reduz}',
      trapAlert:
        'Atenção à leitura da ordem das tuplas $(u_{B1}, u_{B2})$: o segundo número pertence a B2 ($20$ vs $30$; $8$ vs $25$). Nunca troque o primeiro pelo segundo!'
    },
    tags: ['teoria-dos-jogos', 'estratégia-dominante', 'indução-retroativa']
  },
  {
    id: 73,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-4',
    editalRef: 'Microeconomia — 4. Informação Assimétrica: Sinalização e Reputação (Spence)',
    command: 'Considere que uma empresa contrate uma prestadora de serviços para conduzir processos de seleção de pessoal, com assimetria de informação sobre a qualidade ou o esforço da prestadora. Julgue os itens 73 e 74.',
    statement:
      'A sinalização de qualidade ou o investimento em reputação pela prestadora de serviços constitui mecanismo economicamente viável para mitigar a assimetria de informação desde que o custo de sinalizar seja menor ou igual ao ganho adicional obtido com o contrato.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Modelo de sinalização de Spence (equilíbrio separador) e compatibilidade de incentivos'],
    quickVerdict:
      'CERTO. Para que o sinal seja viável para o tipo de alta qualidade (e respeite a restrição de participação/incentivo), o benefício marginal obtido pelo contrato/prêmio precisa superar ou igualar o custo de emitir o sinal (e, para separar tipos, o custo marginal de sinalizar deve ser menor para o tipo bom: condição *single-crossing*).',
    howToSolve: {
      intuition:
        'Nenhum agente racional investe em sinalização/certificação/reputação se o gasto for maior que o retorno esperado do contrato.',
      steps: [
        'Em mercados com assimetria informacional *ex ante* (seleção adversa), o agente de boa qualidade pode enviar um sinal custoso e observável (certificações, histórico auditado, garantias).',
        'Condição mínima de viabilidade econômica para a prestadora: $\\text{Ganho líquido esperado do contrato} - \\text{Custo do sinal} \\ge 0$, isto é, $\\text{Custo do sinal} \\le \\text{Ganho adicional}$.',
        'Quando também custa mais caro para a prestadora ruim imitar o sinal do que seu ganho com o contrato, forma-se equilíbrio separador que mitiga a seleção adversa.'
      ],
      trapAlert:
        'Lembre-se da condição crucial de Spence para *separação* entre bom e mau tipo: o custo de sinalizar deve ser inversamente correlacionado com a qualidade.'
    },
    tags: ['informação-assimétrica', 'sinalização', 'spence']
  },
  {
    id: 74,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-4',
    editalRef: 'Microeconomia — 4. Modelo Principal-Agente (Assimetria de Informação)',
    statement:
      'Na relação contratual descrita, a empresa contratante ocupa o papel de principal e a prestadora de serviços ocupa o papel de agente, configurando uma relação sujeita à assimetria de informação em desfavor do principal, como ocorre usualmente em contratos de delegação.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Identificação de Principal (quem delega) e Agente (quem executa com informação privada)'],
    quickVerdict:
      'CERTO. O **principal** é quem contrata/delega a tarefa (a empresa contratante); o **agente** é quem executa a atividade delegada (a prestadora de serviços) e possui vantagem informacional sobre sua capacidade oculta (seleção adversa) ou esforço oculto (risco moral).',
    howToSolve: {
      intuition:
        'Mnemônico simples: **P**rincipal = **P**atrão/contratante que delega; **A**gente = quem **A**ge/executa e conhece seu esforço ou tipo privado.',
      steps: [
        'Empresa contrata -> empresa é o Principal (menos informada sobre o esforço/rigor real da seleção conduzida pela terceirizada).',
        'Prestadora executa -> prestadora é o Agente (tem informação privada sobre seu esforço e qualidade).',
        'Isso reproduz a configuração clássica do problema Principal-Agente (risco moral e seleção adversa).'
      ],
      trapAlert:
        'Não caia na armadilha de inverter quem é o principal em relações comuns: paciente é principal / médico é agente; acionista é principal / diretor é agente; seguradora costuma enfrentar seleção adversa dos segurados (informação privada do segurado).'
    },
    tags: ['principal-agente', 'risco-moral', 'seleção-adversa']
  },
  {
    id: 75,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-5',
    editalRef: 'Microeconomia — 5. Equilíbrio Geral e Lei de Walras',
    statement:
      'De acordo com a Lei de Walras, em uma economia de trocas puras com $n$ bens, a soma das demandas excedentes dos mercados é sempre igual a zero para quaisquer preços positivos.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Enunciado preciso da Lei de Walras: $\\sum_{i=1}^n p_i z_i(p) = 0$'],
    quickVerdict:
      'ERRADO. A Lei de Walras afirma que a soma do **VALOR** das demandas excedentes (ou seja, ponderada pelos respectivos **preços**: $\\sum_{i=1}^n p_i z_i(p) = 0$) é igual a zero para qualquer vetor de preços, e NÃO a soma simples das quantidades físicas $\\sum z_i(p)$ (que sequer têm a mesma unidade — somar maçãs com tratores!).',
    howToSolve: {
      intuition:
        'A Lei de Walras decorre diretamente da soma das restrições orçamentárias individuais (Lei de Walras: ninguém gasta mais que o valor da sua dotação!). Como restrições orçamentárias são em **valor monetário**, os preços $p_i$ precisam multiplicar $z_i$!',
      steps: [
        'Cada consumidor $h$ satisfaz $\\sum_{i=1}^n p_i x_i^h = \\sum_{i=1}^n p_i \\omega_i^h \\implies \\sum_{i=1}^n p_i (x_i^h - \\omega_i^h) = 0$.',
        'Somando sobre todos os consumidores $h$, obtemos a Lei de Walras: $\\sum_{i=1}^n p_i z_i(p) = 0$, onde $z_i(p)$ é a demanda excedente do bem $i$.',
        'O enunciado omitiu a ponderação pelos preços ("o valor das demandas excedentes") — e sem preços você estaria somando unidades físicas incompatíveis ($\\sum z_i(p) \\ne 0$ em geral).'
      ],
      formulaLatex: '\\sum_{i=1}^{n} p_i\\, z_i(p) = 0 \\quad (\\neq \\sum_{i=1}^n z_i(p))',
      trapAlert:
        'Pegadinha cirúrgica de Economia Matemática/Microeconomia! Falta da palavra **"valor"** (ou multiplicação por $p_i$) invalida a Lei de Walras imediatamente.'
    },
    tags: ['equilíbrio-geral', 'lei-de-walras', 'pegadinha-matemática']
  },
  {
    id: 76,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-5',
    editalRef: 'Microeconomia — 5. Primeiro Teorema Fundamental do Bem-Estar',
    statement:
      'O Primeiro Teorema Fundamental da Economia do Bem-Estar garante que, partindo de qualquer dotação inicial em uma economia de trocas, os agentes sempre conseguirão realizar trocas voluntárias mutuamente benéficas que resultem em melhoria de Pareto em relação à dotação inicial.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Enunciado exato do 1º Teorema do Bem-Estar vs. caso de dotação inicial já eficiente de Pareto'],
    quickVerdict:
      'ERRADO. O **1º Teorema do Bem-Estar** afirma que *todo equilíbrio competitivo (walrasiano) é eficiente no sentido de Pareto* (sob insaciabilidade local e ausência de externalidades). Contudo, se a **dotação inicial já for Pareto-eficiente** (estiver sobre a curva de contrato na Caixa de Edgeworth), NÃO existem trocas que gerem melhoria de Pareto! Além disso, o 1º Teorema não assegura justiça distributiva nem que toda dotação admita novas trocas benéficas.',
    howToSolve: {
      intuition:
        'Teste o contraexemplo mais simples na Caixa de Edgeworth: coloque a dotação inicial $\\omega$ exatamente em cima da curva de contrato!',
      steps: [
        'O que diz de fato o 1º Teorema do Bem-Estar: dada uma economia competitiva sem externalidades e com preferências localmente não saciadas, qualquer alocação de equilíbrio competitivo (walrasiano) é eficiente de Pareto.',
        'E se a dotação inicial já for Pareto-eficiente (ou se houver uma alocação onde um agente detém tudo)? Nesse caso, qualquer troca voluntária ou é nula (sem trade) ou não gera *estrita* melhoria de Pareto em relação à dotação inicial.',
        'Logo, o enunciado atribui ao 1º Teorema algo que ele não garante.'
      ],
      trapAlert:
        'Saiba de cor ambos os teoremas do bem-estar: 1º = Todo equilíbrio walrasiano é Pareto-eficiente (exige apenas não-saciedade local); 2º = Toda alocação Pareto-eficiente pode ser sustentada como equilíbrio walrasiano após transferências adequadas de renda (exige preferências convexas!).'
    },
    tags: ['bem-estar', 'pareto', 'primeiro-teorema']
  },
  {
    id: 77,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-1',
    editalRef: 'Microeconomia — 1. Teoria da Utilidade Esperada e Economia Comportamental (Kahneman)',
    contextId: 'mic-kahneman',
    command:
      'Considere o clássico experimento de Kahneman e Tversky (1979) com dois problemas de escolha: Problema 1: A (ganhar 2.500 com prob. 0,33; 2.400 com prob. 0,66; 0 com prob. 0,01) vs. B (ganhar 2.400 com certeza, prob. 1,00). Problema 2: C (ganhar 2.500 com prob. 0,33; 0 com prob. 0,67) vs. D (ganhar 2.400 com prob. 0,34; 0 com prob. 0,66). Julgue os itens 77 e 78.',
    statement: 'Um agente neutro ao risco escolheria as opções A no Problema 1 e D no Problema 2.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Valor Esperado e definição de neutralidade ao risco'],
    quickVerdict:
      'ERRADO. Um agente neutro ao risco maximiza o **valor esperado** monetário! Calculando: $E[A] = 2409 > 2400 = E[B]$ (escolhe A); mas no Problema 2, $E[C] = 0,33 \\times 2500 = 825 > 816 = 0,34 \\times 2400 = E[D]$! Logo, escolheria **A e C**, e não A e D.',
    howToSolve: {
      intuition:
        'Para neutralidade ao risco, faça apenas a conta aritmética dos quatro valores esperados — sem nem precisar da Teoria da Utilidade Esperada avançada!',
      steps: [
        'Problema 1: $E[A] = 0,33(2500) + 0,66(2400) + 0,01(0) = 825 + 1584 = 2409$. Já $E[B] = 2400$. Logo, $E[A] > E[B] \\implies$ neutro ao risco escolhe **A**.',
        'Problema 2: $E[C] = 0,33(2500) = 825$. Já $E[D] = 0,34(2400) = 816$. Logo, $E[C] > E[D] \\implies$ neutro ao risco escolhe **C**.',
        'Aliás, sob o axioma da independência de von Neumann-Morgenstern, $C$ e $D$ são simplesmente $A$ e $B$ após remover $0,66$ de chance de ganhar $2.400$ de ambos! Quem prefere $A$ sobre $B$ deve preferir $C$ sobre $D$, e quem prefere $B$ sobre $A$ deve preferir $D$ sobre $C$.'
      ],
      formulaLatex: 'E[A]=2409 > E[B]=2400; \\quad E[C]=825 > E[D]=816',
      trapAlert:
        'Pessoas *reais* no experimento de Kahneman escolhem **B e C** (violando a Utilidade Esperada, item 78!), enquanto um neutro ao risco escolhe **A e C**.'
    },
    tags: ['economia-comportamental', 'valor-esperado', 'neutralidade-risco']
  },
  {
    id: 78,
    prova: 'P2',
    subjectId: 'microeconomia',
    topicId: 'mic-1',
    editalRef: 'Microeconomia — 1. Paradoxo de Allais e Efeito Certeza (Teoria do Prospecto)',
    contextId: 'mic-kahneman',
    statement:
      'A preferência conjunta majoritária pela opção B no Problema 1 e pela opção C no Problema 2 evidencia o chamado efeito certeza, que viola o axioma da independência da teoria da utilidade esperada.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Efeito Certeza (Certainty Effect) de Kahneman & Tversky / Paradoxo de Allais'],
    quickVerdict:
      'CERTO. No experimento original de Kahneman & Tversky (1979), a maioria escolhe B (2.400 garantidos vs. risco de 1% de zero em A), mas no Problema 2 escolhe C (aposta um pouco maior em 2.500 quando ambos têm alta chance de zero). Essa sobreponderação desproporcional de resultados certos chama-se **efeito certeza** (*certainty effect*) e viola o axioma da independência.',
    howToSolve: {
      intuition:
        'Reduzir a probabilidade de ganho de $100\\%$ para $34\\%$ (B vs. D) pesa muito mais psicologicamente do que reduzir de $99\\%$ para $33\\%$ (A vs. C), embora ambos sejam uma redução de $0,66$!',
      steps: [
        'Compare A e B sob Utilidade Esperada ($u(0)=0$): preferir $B$ implica $u(2400) > 0,33\\,u(2500) + 0,66\\,u(2400) \\implies 0,34\\,u(2400) > 0,33\\,u(2500)$ — que é exatamente preferir **D** sobre **C** no Problema 2!',
        'Logo, qualquer indivíduo que respeite a Utilidade Esperada (axioma da independência) só pode escolher (A e C) ou (B e D).',
        'A escolha modal empírica (**B e C**) mostra o **efeito certeza**: os agentes atribuem peso psicológico excessivo à certeza absoluta de ganho em B.'
      ],
      formulaLatex: 'B \\succ A \\iff 0{,}34\\,u(2400) > 0{,}33\\,u(2500) \\iff D \\succ C',
      trapAlert:
        'Conceito-chave de Kahneman-Tversky (Teoria do Prospecto): *Efeito Certeza* (sobrepeso para prob = 1), *Aversão à Perda* (perdas pesam ~2x mais que ganhos) e *Função Valor em S* (côncava nos ganhos, convexa nas perdas).'
    },
    tags: ['kahneman', 'efeito-certeza', 'paradoxo-allais']
  },

  // =========================================================================
  // FINANÇAS — Parte 1 (Itens 79 a 85)
  // =========================================================================
  {
    id: 79,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-1',
    editalRef: 'Finanças — 1. Renda Fixa e Títulos Públicos Brasileiros (Tesouro Direto)',
    command: 'Acerca de títulos de renda fixa, ações, derivativos, gestão de portfólios e risco, julgue os itens a seguir.',
    statement:
      'O investidor que adquire um título Tesouro Prefixado 2031 com rendimento contratado de 10% ao ano tem garantia de receber exatamente essa rentabilidade proporcional caso decida resgatar o título antecipadamente em qualquer data anterior ao vencimento.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Marcação a mercado (MtM) de títulos prefixados vs. carregamento até o vencimento'],
    quickVerdict:
      'ERRADO. A rentabilidade prefixada contratada só é garantida no **vencimento** (2031). Em caso de venda/resgate antecipado, o título é recomprado pelo preço de mercado do dia (**marcação a mercado**): se os juros futuros subirem acima de 10%, o preço cai e o investidor pode inclusive ter rentabilidade menor ou negativa no período.',
    howToSolve: {
      intuition:
        'Todo título prefixado (LTN / NTN-F) ou IPCA+ (NTN-B) sofre oscilação de preço no mercado secundário inversamente à taxa de juros.',
      steps: [
        'Preço do título prefixado zero-cupom (Tesouro Prefixado / LTN): $PU = \\frac{1000}{(1 + r)^t}$.',
        'No vencimento ($t=0$), $PU = 1000$ garantido, logo quem segura até lá recebe os $10\\%$ a.a. contratados.',
        'Antes do vencimento, se a taxa de mercado $r_{\\text{mercado}}$ subir para $13\\%$ a.a., o preço $PU$ cai instantaneamente (marcação a mercado), reduzindo ou negativando o retorno do resgate antecipado.'
      ],
      formulaLatex: 'PU = \\frac{1000}{(1 + r_{\\text{mercado}})^t} \\implies \\uparrow r_{\\text{mercado}} \\implies \\downarrow PU',
      trapAlert:
        'O único título do Tesouro Direto quase imune à marcação a mercado no resgate antecipado é o **Tesouro Selic (LFT)** (pós-fixado com duration ~0), e ainda assim tem pequeno ágio/deságio.'
    },
    tags: ['tesouro-direto', 'marcação-a-mercado', 'renda-fixa']
  },
  {
    id: 80,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-1',
    editalRef: 'Finanças — 1. Títulos Indexados à Inflação (Tesouro IPCA+ / NTN-B)',
    statement:
      'O título Tesouro IPCA+ proporciona ao investidor que o carrega até o vencimento uma remuneração composta pela variação da inflação medida pelo IPCA acrescida de uma taxa de juros prefixada (juro real) contratada no momento da compra.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Estrutura de remuneração da NTN-B Principal (Tesouro IPCA+)'],
    quickVerdict:
      'CERTO. O Tesouro IPCA+ (NTN-B Principal ou com juros semestrais) é um título híbrido: atualiza o Valor Nominal Atualizado (VNA) pelo IPCA e paga sobre ele a taxa real prefixada pactuada na compra para quem o mantiver até o vencimento.',
    howToSolve: {
      intuition:
        'Compare diretamente com o item 79: aqui a frase diz corretamente "que o carrega até o vencimento" e descreve com exatidão a composição IPCA + taxa prefixada (equação de Fisher exata: $(1+r_{\\text{nominal}}) = (1+\\text{IPCA})(1+r_{\\text{real}})$).',
      steps: [
        'VNA (Valor Nominal Atualizado) acompanha a variação acumulada do IPCA desde a data-base.',
        'Na compra, o investidor trava uma taxa real prefixada $r_{\\text{real}}$ (desconto sobre o VNA projetado).',
        'Mantendo até o vencimento, o rendimento bruto é exatamente a composição multiplicativa do IPCA com a taxa real acordada.'
      ],
      formulaLatex: '1 + i_{\\text{bruto}} = (1 + \\pi_{\\text{IPCA}})(1 + r_{\\text{real}})',
      trapAlert:
        'Lembre-se apenas de que antes do vencimento a parte prefixada (juro real) também sofre marcação a mercado!'
    },
    tags: ['tesouro-ipca', 'ntn-b', 'renda-fixa']
  },
  {
    id: 81,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-2',
    editalRef: 'Finanças — 2. Valuation: Valor Intrínseco vs. Valor de Mercado',
    statement:
      'O valor de mercado de uma ação negociada em bolsa coincide necessariamente com seu valor intrínseco calculado pelos fundamentos de fluxo de caixa descontado.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Distinção entre preço de mercado e valor intrínseco (valuation / finanças comportamentais)'],
    quickVerdict:
      'ERRADO. **Valor de mercado** é o preço observado na tela da bolsa (interação entre oferta e demanda, liquidez, sentimento e ruído de curto prazo); **valor intrínseco** é uma estimativa teórica baseada em fluxos de caixa futuros descontados e risco. Eles só coincidiriam exatamente em um mercado perfeitamente eficiente sem divergência de expectativas ("coincide necessariamente" é falso).',
    howToSolve: {
      intuition:
        'Se o preço de mercado sempre coincidisse com o valor intrínseco, toda a análise fundamentalista e o conceito de ativo subavaliado ou superavaliado não existiriam!',
      steps: [
        'Valor intrínseco = $V_0 = \\sum_{t=1}^{\\infty} \\frac{E[FC_t]}{(1+k)^t}$ — depende de premissas subjetivas de crescimento, margens e custo de capital.',
        'Valor de mercado = cotação negociada em bolsa × número de ações.',
        'No curto e médio prazos (e em episódios de bolhas, iliquidez ou pânico), preços de mercado desviam-se do valor intrínseco.'
      ],
      trapAlert:
        'Palavras fortes como "necessariamente" e "sempre" em finanças empíricas são quase sempre erradas.'
    },
    tags: ['valuation', 'valor-intrínseco', 'mercado-de-capitais']
  },
  {
    id: 82,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-2',
    editalRef: 'Finanças — 2. Direito Societário / Mercado de Capitais: Ações ON vs. PN (Lei nº 6.404/76)',
    statement:
      'As ações ordinárias (ON) conferem ao seu titular exclusivamente o direito de voto nas assembleias gerais, enquanto as ações preferenciais (PN) asseguram número de votos proporcional à quantidade de ações detidas.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Direitos essenciais das ações ordinárias e preferenciais na Lei das S.A. (Lei nº 6.404/1976)'],
    quickVerdict:
      'ERRADO (duplo erro!). (1) Ações ordinárias (ON) dão direito a voto E também a dividendos/participação nos resultados e demais direitos essenciais (não "exclusivamente voto"); (2) Ações preferenciais (PN), em regra, **não têm direito a voto** (ou têm voto restrito) — em troca de preferência nos dividendos ou reembolso de capital (embora a Lei 14.195/2021 permita voto plural em ON específicas).',
    howToSolve: {
      intuition:
        'Questão básica de mercado de capitais brasileiro: ON = voto + dividendos; PN = preferência econômica (dividendos/reembolso) e, em regra, sem voto.',
      steps: [
        'Erro 1: Titular de ação ON também recebe dividendos, participa do acervo na liquidação, tem direito de preferência na subscrição e de fiscalização (não tem *apenas* voto).',
        'Erro 2: Ações PN caracterizam-se justamente por vantagens patrimoniais (prioridade em dividendos fixos/mínimos ou dividendo 10% maior etc.) com **supressão ou restrição do direito de voto** (arts. 17 e 111 da Lei 6.404/76; só adquirem voto se ficarem 3 exercícios consecutivos sem receber dividendos mínimos/fixos).'
      ],
      trapAlert:
        'Lembre-se da regra da Lei das S.A. (art. 15, § 2º): o número de ações PN sem direito a voto (ou sujeitas a restrição) não pode ultrapassar 50% do total das ações emitidas.'
    },
    tags: ['ações', 'on-pn', 'lei-das-sa']
  },
  {
    id: 83,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-3',
    editalRef: 'Finanças — 3. Derivativos: Opções de Venda (Put) (ANULADA)',
    statement:
      'Um investidor que detém uma opção de venda (put) com preço de exercício de R$ 200, quando o ativo-objeto está cotado a R$ 195, tem direito imediato de exercer a opção com payoff positivo.',
    officialAnswer: 'X',
    preliminaryAnswer: 'C',
    annulmentOrChangeReason:
      'ANULADA no gabarito definitivo: "A ausência de informações relevantes na redação do item prejudicou seu julgamento objetivo." (Não especificou se a opção é do tipo AMERICANA — exercível a qualquer momento — ou EUROPEIA — exercível apenas no vencimento!).',
    requiredLevel: 'Intermediario',
    prerequisites: ['Payoff de opção de venda (put): max(K - S, 0)', 'Diferença entre opção americana e europeia'],
    quickVerdict:
      'ANULADA (X). Com $K = 200$ e $S = 195$, o valor intrínseco da *put* é positivo: $\\max(200 - 195, 0) = 5$ (está *in-the-money*). Porém, como o enunciado não informou se a *put* é **americana** (exercício imediato possível) ou **europeia** (exercício só no vencimento), o item foi anulado por recurso técnico.',
    howToSolve: {
      intuition:
        'Veja como o domínio técnico preciso ajuda a pontuar e até a ganhar recursos no Cebraspe: *in-the-money* ($K > S$ na put) significa valor intrínseco positivo, mas exercício antecipado só existe em opção americana!',
      steps: [
        'Para uma *put* (opção de venda), o titular tem o direito de VENDER o ativo por $K = 200$. Se no mercado à vista ele vale $S = 195$, o valor intrínseco é $\\max(K - S, 0) = 200 - 195 = 5 > 0$.',
        'Se for uma put **americana**, o titular pode exercer imediatamente (embora muitas vezes valha mais vender a opção pelo prêmio = valor intrínseco + valor no tempo, se houver).',
        'Se for uma put **europeia**, NÃO há direito de exercício imediato antes do vencimento! Como o enunciado omitiu o estilo e a data de vencimento, a banca aceitou a anulação.'
      ],
      formulaLatex: '\\text{Payoff Put} = \\max(K - S_T, 0) = \\max(200 - 195, 0) = 5',
      trapAlert:
        'Regra de exercício em provas: Call/Put Americana = pode exercer a qualquer momento até o vencimento; Europeia = exclusivamente na data de vencimento.'
    },
    tags: ['derivativos', 'opções', 'put', 'anulada']
  },
  {
    id: 84,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-4',
    editalRef: 'Finanças — 4. Hipótese dos Mercados Eficientes (HME - Fama)',
    statement:
      'A existência de informações perfeitamente disponíveis e acessíveis a todos os participantes é condição suficiente para garantir que o mercado financeiro seja eficiente do ponto de vista informacional em todas as suas formas.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Condições para eficiência de mercado: ausência de custos de transação, racionalidade/interpretação homogênea e arbitragem sem limites'],
    quickVerdict:
      'ERRADO. Informação disponível gratuitamente a todos é condição importante (ou facilitadora), mas **não é condição suficiente** para garantir eficiência de mercado! Existem custos de transação, custos de processamento informacional (Grossman-Stiglitz), restrições à venda a descoberto (*limits to arbitrage* — Shleifer & Vishny) e vieses comportamentais dos investidores.',
    howToSolve: {
      intuition:
        'Em Economia e Finanças, raramente uma única condição isolada é "condição suficiente" para eficiência perfeita dos mercados!',
      steps: [
        'Mesmo com informação amplamente disponível, os preços podem não refletir imediatamente o valor fundamental se houver: (1) custos de transação e impostos que superem o lucro de arbitragem; (2) limites de capital/alavancagem para arbitradores (*limits to arbitrage*); (3) irracionalidade correlacionada (vieses comportamentais); (4) assimetria na capacidade de interpretar dados complexos.',
        'Além disso, pelo paradoxo de Grossman-Stiglitz (1980), se os preços já refletissem toda a informação perfeitamente sem custo, ninguém teria incentivo a gastar recursos analisando informações.'
      ],
      trapAlert:
        'Diferencie sempre "condição necessária" vs. "condição suficiente". Acesso informacional ajuda a eficiência, mas nunca é suficiente sozinho.'
    },
    tags: ['hme', 'eficiência-de-mercado', 'arbitragem']
  },
  {
    id: 85,
    prova: 'P2',
    subjectId: 'financas',
    topicId: 'fin-1',
    editalRef: 'Finanças — 1. Regulação CVM: Fundos de Investimento Cambiais (Resolução CVM 175 / ICVM 555)',
    statement:
      'Na classificação regulatória da Comissão de Valores Mobiliários (CVM), um fundo de investimento classificado como cambial deve manter pelo menos uma pequena parcela de sua carteira, a critério do gestor, aplicada em ativos relacionados direta ou indiretamente à variação de preços de moeda estrangeira.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Regra dos 80% de exposição cambial para Fundos Cambiais na norma da CVM'],
    quickVerdict:
      'ERRADO. Pela regulação da CVM (tanto ICVM 555 quanto Anexo Normativo I da Resolução CVM 175), um fundo classificado como **Cambial** deve ter como principal fator de risco de sua carteira a variação de preços de moeda estrangeira ou de cupom cambial, aplicando **NO MÍNIMO 80% do patrimônio líquido** em ativos relacionados diretamente (ou sintetizados via derivativos) a esse fator — e nunca "uma pequena parcela a critério do gestor".',
    howToSolve: {
      intuition:
        'As classificações de fundos da CVM (Renda Fixa, Ações, Cambial) usam percentuais mínimos rígidos para evitar propaganda enganosa ao cotista!',
      steps: [
        'Relembre os mínimos regulatórios da CVM por classe/tipificação:',
        '• **Fundo Renda Fixa**: mínimo **80%** do PL em ativos de renda fixa (juros domésticos / índices de preços).',
        '• **Fundo Cambial**: mínimo **80%** do PL em ativos relacionados direta ou indiretamente (via derivativos) à variação de moeda estrangeira ou cupom cambial.',
        '• **Fundo de Ações**: mínimo **67%** do PL em ações e ativos equiparados de renda variável.',
        'Dizer "pelo menos uma pequena parcela, a critério do gestor" contradiz frontalmente a regra objetiva dos 80%.'
      ],
      formulaLatex: '\\text{Fundo Cambial (CVM): } \\ge 80\\%\\text{ do PL em exposição cambial}',
      trapAlert:
        'Decore para 2027 os três pisos clássicos da CVM (Res. CVM 175): Renda Fixa >= 80%, Cambial >= 80%, Ações >= 67%.'
    },
    tags: ['cvm', 'fundos-de-investimento', 'fundo-cambial']
  }
];
