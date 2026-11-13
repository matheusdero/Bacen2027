import { QuestionItem } from '../types';

export const QUESTIONS_P1: QuestionItem[] = [
  // =========================================================================
  // LÍNGUA PORTUGUESA — TEXTO CB1A1-I (Itens 1 a 13)
  // =========================================================================
  {
    id: 1,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 1. Compreensão e interpretação de textos',
    contextId: 'cb1a1-i',
    command: 'Com base nas ideias e nas estruturas linguísticas do texto CB1A1-I, julgue os itens a seguir.',
    statement:
      'Segundo as informações do texto, as leis trabalhistas tradicionais preveem um modelo de relação de trabalho pautado na diferença entre empregado e contratado.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Leitura referencial e identificação de paráfrases no texto dissertativo'],
    quickVerdict:
      'CERTO. O 1º parágrafo afirma que as leis trabalhistas tradicionais estruturaram-se sobre um sistema "binário" que contrapõe "empregado" e "contratado".',
    howToSolve: {
      intuition:
        'Em itens de compreensão textual do Cebraspe ("Segundo o texto..."), localize o trecho exato e verifique se há paráfrase fiel sem extrapolar.',
      steps: [
        'Localize no 1º parágrafo: "As leis trabalhistas foram estruturadas sobre um antigo sistema \'binário\' de emprego, caracterizado por uma oposição clara entre ser \'empregado\' ou \'contratado\'."',
        'Observe a equivalência semântica: "antigo sistema binário... caracterizado por uma oposição clara" = "modelo de relação de trabalho pautado na diferença entre empregado e contratado".',
        'Não há restrição indevida nem inversão lógica; a paráfrase é fiel ao sentido original.'
      ],
      trapAlert:
        'Cuidado apenas com trocas sutis de "oposição/diferença" por "igualdade/fusão". Aqui a banca manteve o sentido literal.'
    },
    tags: ['compreensão', 'paráfrase', 'texto-cb1a1']
  },
  {
    id: 2,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 1. Compreensão e interpretação de textos',
    contextId: 'cb1a1-i',
    statement:
      'Infere-se do texto que o trabalho por demanda via aplicativos oferece mais vantagens do que desvantagens para os trabalhadores.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Diferenciação entre fato explícito, inferência válida e extrapolação'],
    quickVerdict:
      'ERRADO. O 2º parágrafo contrasta "benefícios tangíveis" (flexibilidade) com desvantagens graves (distribuição desigual de riscos, rendimentos erráticos, ausência de proteção trabalhista), sem concluir que as vantagens superam as desvantagens.',
    howToSolve: {
      intuition:
        'Quando o Cebraspe usa "Infere-se que há mais X do que Y", cheque se o autor realmente fez um juízo comparativo quantitativo ou qualitativo de superioridade.',
      steps: [
        'No 2º parágrafo, lê-se: "Embora... ofereça benefícios tangíveis, principalmente flexibilidade..., existe uma série de riscos e consequências negativas associadas a essa tendência".',
        'A conjunção concessiva "embora" dá ênfase justamente ao peso das consequências negativas listadas na sequência (riscos transferidos, renda instável, baixa ou nenhuma proteção).',
        'Logo, o texto não autoriza inferir saldo positivo ("mais vantagens do que desvantagens").'
      ],
      trapAlert:
        'O uso de "embora" em períodos concessivos geralmente coloca o foco argumentativo na oração principal (os riscos), nunca minimizando-os frente à concessiva.'
    },
    tags: ['inferência', 'concessão', 'argumentação']
  },
  {
    id: 3,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 4. Morfossintaxe e relações lógico-semânticas',
    contextId: 'cb1a1-i',
    statement:
      'No último período do primeiro parágrafo, o trecho delimitado por travessões expressa uma causa da desregulamentação do trabalho mencionado no texto.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Valores semânticos de preposições e locuções prepositivas (causa, fim, concessão)'],
    quickVerdict:
      'CERTO. A locução "em função de" introduz explicitamente a relação de causa/motivo da desregulamentação do mercado de trabalho.',
    howToSolve: {
      intuition:
        'Identifique o conectivo ou locução que inicia o trecho intercalado entre travessões.',
      steps: [
        'Releia o final do 1º parágrafo: "os mercados de trabalho tornaram-se cada vez mais desregulamentados — em função do impacto disruptivo das plataformas digitais...".',
        'A locução prepositiva "em função de" equivale a "em razão de", "devido a", "por causa de".',
        'Portanto, o segmento entre travessões indica a causa da crescente desregulamentação.'
      ],
      trapAlert:
        'Não confunda a presença dos travessões (recurso de pontuação para intercalar/destacar) com aposto meramente explicativo sem valor causal; avalie sempre o núcleo semântico da locução.'
    },
    tags: ['morfossintaxe', 'causa', 'travessões']
  },
  {
    id: 4,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 2. Tipologia textual e argumentação',
    contextId: 'cb1a1-i',
    statement:
      'O segundo parágrafo do texto apresenta argumentos que corroboram a necessidade de incentivar o uso do trabalho por demanda via aplicativos.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Identificação da tese e da orientação argumentativa de parágrafo'],
    quickVerdict:
      'ERRADO. Ao contrário de incentivar o modelo sem restrições, o 2º parágrafo alerta para riscos e precarização ("riscos e consequências negativas", "ausência ou redução de proteções").',
    howToSolve: {
      intuition:
        'Verifique a direção argumentativa central do parágrafo: pró-expansão irrestrita ou crítica regulatória?',
      steps: [
        'O 2º parágrafo inicia admitindo um benefício ("flexibilidade de horários e locais"), mas imediatamente introduz os problemas estruturais.',
        'Lista distribuição desigual de riscos, rendimentos erráticos e ausência de proteções aos trabalhadores.',
        'No 3º parágrafo, reforça que a adaptação das instituições e políticas é "urgente". Não há defesa de "incentivo", e sim diagnóstico crítico de vulnerabilidade.'
      ],
      trapAlert:
        'A concessão ("Embora ofereça flexibilidade...") é uma estratégia retórica para dar credibilidade à crítica que vem depois, não um endosso.'
    },
    tags: ['argumentação', 'tese', 'interpretação']
  },
  {
    id: 5,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 3. Semântica e relações de coesão',
    contextId: 'cb1a1-i',
    statement:
      'No último período do primeiro parágrafo, a conjunção "ou" presente no segmento "suplementado ou substituído" indica relação de sinonímia entre os termos que conecta.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Valores da conjunção coordenativa alternativa "ou" (exclusão/alternância vs. retificação/equivalência)'],
    quickVerdict:
      'ERRADO. "Suplementar" (adicionar/complementar) e "substituir" (trocar/ocupar o lugar) não são sinônimos; o "ou" indica alternância de possibilidades distintas.',
    howToSolve: {
      intuition:
        'O conectivo "ou" pode indicar sinonímia/retificação ("A ou B", quando B explica A), mas somente se os termos forem equivalentes.',
      steps: [
        'Compare os sentidos lexicais: "suplementado" = acrescido de algo complementar (o modelo antigo continua e ganha um complemento); "substituído" = descartado e trocado por outro.',
        'São cenários diferentes (alternância), não sinônimos.',
        'Logo, o "ou" exprime alternância, não sinonímia.'
      ],
      trapAlert:
        'Não caia no automatismo de achar que todo "ou" em texto técnico é inclusivo/equivalente. Teste substituindo por "isto é": "suplementado, isto é, substituído" torna o trecho contraditório.'
    },
    tags: ['semântica', 'conjunções', 'sinonímia']
  },
  {
    id: 6,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 4. Coesão e conectores oracionais',
    contextId: 'cb1a1-i',
    statement:
      'No primeiro período do terceiro parágrafo, a conjunção "pois" introduz uma explicação para a afirmação anterior.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Classificação de conjunções coordenativas ("pois" explicativo vs. conclusivo)'],
    quickVerdict:
      'CERTO. Anteposto ao verbo da oração que introduz ("pois... poderiam perder"), "pois" tem valor coordenativo explicativo ("porque").',
    howToSolve: {
      intuition:
        'Regra clássica de ouro: "pois" antes do verbo = explicativo (= porque); "pois" deslocado após o verbo entre vírgulas = conclusivo (= portanto).',
      steps: [
        'Leia o trecho: "...a necessidade... torna-se ainda mais urgente, pois caso contrário tanto os ofertantes quanto os demandantes de trabalho poderiam perder os benefícios...".',
        'A palavra "pois" está no início da oração, antes do verbo "poderiam perder", após vírgula.',
        'Ela justifica/explica o motivo da urgência afirmada antes. Equivalente perfeito a "porque".'
      ],
      trapAlert:
        'Só classifique "pois" como conclusivo quando estiver posposto ao verbo ou entre vírgulas no interior da oração (ex.: "É urgente; devemos, pois, agir").'
    },
    tags: ['conectores', 'pois', 'sintaxe']
  },
  {
    id: 7,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 5. Pontuação',
    contextId: 'cb1a1-i',
    statement:
      'No segundo período do primeiro parágrafo, a supressão da vírgula imediatamente após o segundo travessão preservaria a correção gramatical do texto.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Pontuação em orações reduzidas e intercaladas', 'Uso concomitante de travessão e vírgula'],
    quickVerdict:
      'ERRADO. A vírgula após "relações—" fecha uma estrutura deslocada anterior ao sujeito ("Com o aumento..."), sendo obrigatória mesmo havendo um aposto/explicação entre travessões no final dela.',
    howToSolve: {
      intuition:
        'Para testar pontuação com travessões ou parênteses, apague mentalmente o conteúdo entre os travessões e veja se a vírgula remanescente continua necessária.',
      steps: [
        'Trecho: "Com o aumento do trabalho informal e atípico e de contratos que não garantem segurança nas relações — muitos deles mediados por plataformas digitais —, a estrutura clássica das relações de trabalho foi alterada."',
        'Removendo o segmento entre travessões: "Com o aumento do trabalho informal e atípico e de contratos que não garantem segurança nas relações, a estrutura clássica... foi alterada."',
        'Trata-se de adjunto adverbial extenso antecipado antes da oração principal ("a estrutura clássica..."). A vírgula separando esse adjunto extenso do sujeito é obrigatória pela norma-padrão.'
      ],
      trapAlert:
        'O erro típico é achar que o travessão "substitui" ou "absorve" a vírgula da estrutura principal. Travessão duplo abre e fecha apenas o segmento intercalado; a pontuação da oração hospedeira permanece!'
    },
    tags: ['pontuação', 'travessão', 'vírgula']
  },
  {
    id: 8,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 4. Morfossintaxe: função sintática',
    contextId: 'cb1a1-i',
    statement:
      'No primeiro período do segundo parágrafo, os vocábulos "drasticamente" e "mais" desempenham a mesma função sintática.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Análise sintática de advérbios modificadores de verbo e de adjetivo/advérbio'],
    quickVerdict:
      'CERTO. Ambos são advérbios exercendo a função sintática de adjunto adverbial ("cresça drasticamente" modifica verbo; "mais flexíveis" intensifica adjetivo).',
    howToSolve: {
      intuition:
        'Em análise sintática no Cebraspe, todo advérbio ou locução adverbial exerce a função de adjunto adverbial — ainda que o primeiro modifique verbo e o segundo modifique adjetivo.',
      steps: [
        'Localize no 2º parágrafo: "cresça drasticamente" (adjunto adverbial de modo ligado a "cresça") e "modelos de trabalho mais flexíveis" (adjunto adverbial de intensidade ligado ao adjetivo "flexíveis").',
        'Morfologicamente, ambos são advérbios; sintaticamente, ambos têm a função de adjunto adverbial.',
        'Atenção à distinção: eles têm circunstâncias semânticas distintas (modo vs. intensidade), mas a *função sintática* é idêntica (adjunto adverbial).'
      ],
      trapAlert:
        'Não confunda "função sintática" (adjunto adverbial para ambos) com "classe gramatical" (advérbio) nem com "valor semântico" (modo vs. intensidade).'
    },
    tags: ['morfossintaxe', 'adjunto-adverbial', 'advérbio']
  },
  {
    id: 9,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 5. Orações subordinadas adjetivas (restritiva vs. explicativa)',
    contextId: 'cb1a1-i',
    statement:
      'No último período do primeiro parágrafo, a oração "que conectam ofertantes e demandantes de trabalho" restringe o sentido do termo "plataformas digitais".',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Pontuação de orações adjetivas: ausência de vírgula (restritiva) vs. presença de vírgula (explicativa)'],
    quickVerdict:
      'ERRADO. A oração está antecedida por vírgula ("plataformas digitais, que conectam..."), o que a caracteriza como subordinada adjetiva EXPLICATIVA, não restritiva.',
    howToSolve: {
      intuition:
        'Questão clássica e garantida de prova do Cebraspe: tem vírgula antes do pronome relativo "que"? Então é explicativa.',
      steps: [
        'Leia o final do 1º parágrafo: "...em função do impacto disruptivo das plataformas digitais, que conectam ofertantes e demandantes de trabalho."',
        'A presença da vírgula antes de "que" marca a oração adjetiva como explicativa (generaliza/explica uma propriedade do antecedente "plataformas digitais", e não restringe um subconjunto específico).',
        'Se fosse restritiva, não haveria vírgula. Logo, o item está errado.'
      ],
      trapAlert:
        'Mesmo quando o sentido no mundo real pareça limitar um grupo, em gramática normativa a vírgula transforma a oração em explicativa.'
    },
    tags: ['oração-adjetiva', 'pontuação', 'restritiva-explicativa']
  },
  {
    id: 10,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 6. Crase e regência',
    contextId: 'cb1a1-i',
    statement:
      'No segundo período do segundo parágrafo, o emprego do sinal indicativo de crase no "a" em "como a distribuição desigual dos riscos" seria facultativo.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Condições obrigatórias da crase (preposição "a" + artigo "a")', 'Regência de verbos transitivos diretos'],
    quickVerdict:
      'ERRADO. Não há preposição "a" exigida pelo contexto: "distribuição desigual" é parte de uma enumeração de sujeitos/objetos introduzida por "como" (= por exemplo), havendo apenas o artigo definido "a". Crase é proibida.',
    howToSolve: {
      intuition:
        'Para haver crase, é obrigatório existir simultaneamente uma preposição "a" (exigida por um termo regente) e um artigo "a" (ou pronome demonstrativo).',
      steps: [
        'Leia o 2º parágrafo: "...existe uma série de riscos e consequências negativas associadas a essa tendência, como a distribuição desigual dos riscos...".',
        'A palavra "como" funciona como preposição acidental/conjunção comparativa exemplificativa (= "tais como"). Quem exemplifica "série de riscos e consequências" traz substantivos com artigo: "a distribuição desigual", "a ausência...".',
        'Troque "distribuição" por palavra masculina ("o repasse desigual"): ficaria "como o repasse desigual" (sem "ao"). Portanto, não existe preposição "a" — crase é rigorosamente vedada!'
      ],
      trapAlert:
        'Apenas três casos têm crase facultativa na norma culta: antes de pronome possessivo feminino singular, antes de nome próprio feminino e após a preposição "até". Enumeração pós-"como" nunca é um deles!'
    },
    tags: ['crase', 'regência', 'artigo']
  },
  {
    id: 11,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 6. Concordância verbal',
    contextId: 'cb1a1-i',
    statement:
      'No primeiro período do terceiro parágrafo, a forma verbal "poderiam" concorda com "ofertantes e demandantes".',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Identificação de sujeito composto e locução verbal'],
    quickVerdict:
      'CERTO. O sujeito da locução verbal "poderiam perder" é o sujeito composto "tanto os ofertantes quanto os demandantes de trabalho", que leva o verbo ao plural.',
    howToSolve: {
      intuition:
        'Pergunte ao verbo "quem poderia perder?" e identifique os núcleos do sujeito.',
      steps: [
        'Trecho: "...pois caso contrário tanto os ofertantes quanto os demandantes de trabalho poderiam perder os benefícios...".',
        'Quem poderia perder? "tanto os ofertantes quanto os demandantes de trabalho".',
        'Núcleos plurais ligados por "tanto... quanto..." concordam obrigatoriamente no plural: "poderiam".'
      ],
      trapAlert:
        'Não se confunda com expressões correlatas como "não só... mas também" ou "tanto... quanto": sempre levam o verbo para o plural quando os núcleos indicam soma.'
    },
    tags: ['concordância-verbal', 'sujeito-composto']
  },
  {
    id: 12,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 3. Coesão referencial e pronomes relativos',
    contextId: 'cb1a1-i',
    statement:
      'No último período do primeiro parágrafo, a substituição de "o qual" por "que" preservaria a coesão, a coerência e a correção gramatical do texto.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Pronomes relativos com antecedente de coisa e uso de preposição'],
    quickVerdict:
      'CERTO. Em "o qual foi suplementado ou substituído", "o qual" funciona como sujeito da oração adjetiva explicativa, retomando "um antigo sistema binário" (sem preposição), podendo ser substituído perfeitamente por "que".',
    howToSolve: {
      intuition:
        'Pronomes relativos "o qual / a qual" e "que" são intercambiáveis na função de sujeito ou objeto direto quando não há ambiguidade severa de gênero/número.',
      steps: [
        'Trecho: "As leis trabalhistas foram estruturadas sobre um antigo sistema \'binário\' de emprego... o qual foi suplementado ou substituído..." (ou no último período, onde o contexto retoma o sistema binário/modelo anterior).',
        'Verifique se há preposição antes de "o qual": não há ("o qual foi...").',
        'Verifique se "que" gera ambiguidade grave: em "...de emprego (...), que foi suplementado...", o verbo no singular "foi" concorda com "antigo sistema \'binário\'" ou "modelo", mantendo clareza, coesão e correção.'
      ],
      trapAlert:
        'A substituição de "o qual" por "que" costuma falhar apenas quando há preposição monossilábica vs. polissilábica (ex: "sobre o qual" aceita "sobre que", mas "durante o qual" não fica natural com "que") ou quando cria ambiguidade de gênero que "o qual/a qual" desfazia.'
    },
    tags: ['pronome-relativo', 'coesão', 'reescrita']
  },
  {
    id: 13,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 7. Colocação pronominal (próclise, ênclise, mesóclise)',
    contextId: 'cb1a1-i',
    statement:
      'No último período do terceiro parágrafo, o deslocamento do pronome "se" em "verifica-se" para imediatamente antes do verbo — escrevendo-se "—, se verifica" — preservaria a correção gramatical do texto.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Regras de colocação pronominal após pausa (vírgula/travessão) e ausência de palavra atrativa'],
    quickVerdict:
      'ERRADO. Após sinal de pontuação que marca pausa forte (travessão/vírgula) no início da oração principal após oração subordinada adverbial, é proibida a próclise sem fator atrativo ("não se inicia oração após pausa com pronome átono").',
    howToSolve: {
      intuition:
        'Na norma culta brasileira avaliada pelo Cebraspe, pausa (vírgula ou travessão) interrompe a atração e impede iniciar a oração seguinte com pronome oblíquo átono.',
      steps: [
        'Observe a estrutura: "Quando se trata do Brasil, — ...", ou segmento adverbial deslocado terminado em "—, verifica-se que...".',
        'Imediatamente após a vírgula (pausa obrigatória após oração/adjunto deslocado), inicia-se uma nova oração sem palavra atrativa entre a vírgula e o verbo.',
        'Por regra de colocação pronominal (norma-padrão), não se usa próclise imediatamente após vírgula/pausa sem atrativo ("—, se verifica" é agramatical); exige-se ênclise: "verifica-se".'
      ],
      trapAlert:
        'Pegadinha clássica: alguns candidatos acham que o "quando" anterior atrai o "se" da oração principal. Errado! A vírgula após a oração adverbial bloqueia a atração da conjunção subordinativa anterior.'
    },
    tags: ['colocação-pronominal', 'próclise', 'ênclise']
  },

  // =========================================================================
  // LÍNGUA PORTUGUESA — TEXTO CB1A2-I (Itens 14 a 25)
  // =========================================================================
  {
    id: 14,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 1. Compreensão textual',
    contextId: 'cb1a2-i',
    command: 'Com base nas ideias e nas estruturas linguísticas do texto CB1A2-I, julgue os itens seguintes.',
    statement:
      'De acordo com o texto, a UNESCO é favorável a que o desenvolvimento e o uso das tecnologias de inteligência artificial promovam a justiça, a confiança e a equidade.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Leitura de documentos normativos/institucionais'],
    quickVerdict:
      'CERTO. O texto afirma que a Conferência Geral da UNESCO observa os impactos positivos potenciais e adota recomendação voltada a valores e princípios como confiança, equidade e respeito à dignidade humana.',
    howToSolve: {
      intuition:
        'Verifique no texto da UNESCO se esses valores figuram entre os objetivos/princípios promovidos pela Recomendação sobre Ética da IA.',
      steps: [
        'O texto explicita a posição da UNESCO ao reconhecer que tecnologias de IA trazem riscos éticos, mas têm potencial positivo e precisam respeitar valores humanos e éticos.',
        'Ao aprovar a Recomendação, a UNESCO defende explicitamente a promoção da transparência, confiança, justiça social e equidade.',
        'A afirmação sintetiza corretamente o posicionamento institucional expresso no documento.'
      ],
      trapAlert:
        'Atente para verbos de atitude do emissor ("é favorável a que", "defende"): confira se não houve inversão entre o que a UNESCO critica e o que ela promove.'
    },
    tags: ['compreensão', 'unesco', 'cb1a2']
  },
  {
    id: 15,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 1. Compreensão textual (modalizadores)',
    contextId: 'cb1a2-i',
    statement:
      'A UNESCO considera inevitáveis os impactos negativos decorrentes do desenvolvimento das tecnologias de inteligência artificial.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Identificação de modalizadores de possibilidade ("podem", "potencialmente") vs. necessidade ("inevitáveis")'],
    quickVerdict:
      'ERRADO. O texto usa modalizadores de possibilidade ("podem gerar", "potencialmente", "riscos") e justifica a Recomendação justamente para prevenir/mitigar danos — logo, eles não são inevitáveis.',
    howToSolve: {
      intuition:
        'Desconfie sempre de palavras absolutistas no Cebraspe ("inevitáveis", "sempre", "nunca", "exclusivamente").',
      steps: [
        'Localize os verbos modais no texto CB1A2-I: "essas tecnologias também podem gerar...", "resultaria potencialmente em discriminação", "suscitar novas ameaças".',
        'A Recomendação é adotada precisamente como ferramenta ética e regulatória para orientar a IA e evitar ou mitigar tais impactos negativos.',
        'Dizer que os impactos negativos são "inevitáveis" contraria tanto a letra do texto ("podem", "potencialmente") quanto a própria razão de existir de uma recomendação normativa.'
      ],
      trapAlert:
        'Palavra-armadilha: "inevitáveis" vs. "possíveis/potenciais" ("podem").'
    },
    tags: ['modalizadores', 'extrapolação', 'interpretação']
  },
  {
    id: 16,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 1. Compreensão textual (relação de hierarquia)',
    contextId: 'cb1a2-i',
    statement:
      'Entre os impactos positivos das tecnologias de inteligência artificial mencionados no texto, destacam-se como os principais o respeito à dignidade humana e a proteção aos ecossistemas.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Diferenciação entre impactos potenciais e princípios/valores éticos orientadores'],
    quickVerdict:
      'ERRADO. Dignidade humana e proteção aos ecossistemas não são descritos como "os principais impactos positivos" já trazidos pela IA, nem há tal ranqueamento; tratam-se de dimensões/princípios éticos sob risco ou a serem protegidos.',
    howToSolve: {
      intuition:
        'Confira duas coisas: (1) se o texto estabelece hierarquia ("os principais") e (2) se a categoria citada (impacto positivo vs. valor ameaçado/princípio) está correta.',
      steps: [
        'No texto, o avanço da IA traz questões éticas profundas que podem impactar negativamente os direitos humanos, a dignidade humana e os ecossistemas — que precisam ser protegidos.',
        'Não existe passagem listando "dignidade humana e proteção aos ecossistemas" como "os principais impactos positivos".',
        'Há inversão/confusão entre os bens jurídicos e éticos vulneráveis e os eventuais ganhos técnicos da IA, além de ranqueamento inexistente ("principais").'
      ],
      trapAlert:
        'Superlativos e comparativos ("o principal", "os mais importantes") quase sempre caracterizam extrapolação quando o texto faz apenas uma enumeração não hierarquizada.'
    },
    tags: ['interpretação', 'hierarquização', 'inversão']
  },
  {
    id: 17,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 2. Organização e progressão textual',
    contextId: 'cb1a2-i',
    statement:
      'Cada um dos parágrafos do texto está estruturado de modo a apresentar consequências contraditórias decorrentes do desenvolvimento e do uso das tecnologias de inteligência artificial.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Identificação da função estrutural de cada parágrafo (preâmbulo vs. considerandos)'],
    quickVerdict:
      'ERRADO. Nem *todos* os parágrafos ("cada um dos parágrafos") trazem pares de consequências contraditórias; há parágrafos focados apenas em deliberação/adoção da recomendação ou apenas no reconhecimento de riscos éticos/desigualdades.',
    howToSolve: {
      intuition:
        'Afirmações universais sobre a macroestrutura do texto ("cada um dos parágrafos", "todos os períodos") caem se você achar um único parágrafo contraexemplo.',
      steps: [
        'Analise rapidamente os parágrafos do texto CB1A2-I: trata-se de considerandos de uma resolução da UNESCO seguidos de dispositivo de adoção.',
        'Há parágrafo introdutório contextualizando a Conferência Geral e há parágrafos dedicados especificamente a elencar riscos de viés/desigualdade ou à decisão formal de adotar a Recomendação.',
        'Logo, não é verdade que *cada um* deles esteja estruturado com consequências contraditórias.'
      ],
      trapAlert:
        'Contraexemplo único já falseia quantificadores universais ("cada um", "todos"). Verifique sempre os parágrafos finais ou de fechamento!'
    },
    tags: ['estrutura-textual', 'parágrafos', 'tipologia']
  },
  {
    id: 18,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-4',
    editalRef: 'Português — 8. Reescrita de frases e manutenção de sentido',
    contextId: 'cb1a2-i',
    statement:
      'Sem prejuízo da correção gramatical e dos sentidos do texto, o segmento "Reconhecendo as profundas e dinâmicas influências positivas e negativas da inteligência artificial (IA) nas sociedades, no meio ambiente, nos ecossistemas e nas vidas humanas, inclusive na mente humana, em parte devido às novas maneiras pelas quais seu uso influencia o pensamento, a interação e a tomada de decisões humanas, bem como afeta a educação, as ciências humanas, sociais e naturais, a cultura e a comunicação e informação" poderia ser reescrito da seguinte forma: "A Conferência reconhece as variadas circunstâncias positivas e negativas da IA nas esferas sociais, ambientais e cognitivas...".',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Reescrita com transformação de oração reduzida de gerúndio em desenvolvida', 'Coesão e paralelismo sintático'],
    quickVerdict:
      'CERTO. O item propõe uma paráfrase gramaticalmente correta e fiel ao núcleo semântico do considerando original (substituindo a estrutura gerundiva do preâmbulo por uma oração principal com sujeito explícito "A Conferência reconhece...").',
    howToSolve: {
      intuition:
        'Em questões de reescrita longa do Cebraspe, cheque quatro pilares na ordem: (1) ortografia/acentuação, (2) concordância/regência/crase, (3) pontuação e (4) preservação do sentido essencial.',
      steps: [
        'No texto original, o trecho inicia um considerando com gerúndio ("Reconhecendo..."), cujo sujeito é "A Conferência Geral" (citada antes).',
        'A reescrita explicita o sujeito ("A Conferência") e conjuga o verbo no presente ("reconhece"), mantendo a concordância e a regência transitiva direta ("reconhece as variadas circunstâncias...").',
        'Não há erro de pontuação, regência ou crase, e o sentido essencial de impactos multidimensionais (sociais, ambientais, cognitivos) é preservado.'
      ],
      trapAlert:
        'Lembre-se que em "Sem prejuízo da correção gramatical e dos sentidos...", uma paráfrase condensada pode ser considerada válida pela banca quando não há distorção nem erro gramatical.'
    },
    tags: ['reescrita', 'gerúndio', 'paráfrase']
  },
  {
    id: 19,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 3. Substituição vocabular e semântica',
    contextId: 'cb1a2-i',
    statement:
      'No contexto em que ocorre, a expressão "deixados para trás" poderia ser substituída, sem prejuízo para a coerência e a correção gramatical do texto, por "negligenciados".',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Sinonímia contextual', 'Concordância nominal de particípio'],
    quickVerdict:
      'CERTO. "Deixados para trás" aparece no sentido figurado de populações/grupos excluídos ou desassistidos pelo progresso tecnológico, sendo "negligenciados" equivalente semântico e morfossintático perfeito (masculino plural).',
    howToSolve: {
      intuition:
        'Substitua literalmente no texto original e verifique concordância de gênero/número e regência ao redor.',
      steps: [
        'Contexto: grupos vulneráveis/populações não podem ser "deixados para trás" (metáfora consagrada do desenvolvimento sustentável / Agenda 2030 = *left behind*).',
        '"Negligenciados" (particípio masculino plural) concorda com o mesmo referente plural e mantém a fluidez e a norma-padrão.',
        'Tanto o sentido de desamparo/exclusão quanto a correção gramatical se mantêm intactos.'
      ],
      trapAlert:
        'Cheque sempre o gênero e o número do substituto! Se fosse "deixada para trás" vs. "negligenciados", estaria errado pela concordância.'
    },
    tags: ['semântica', 'sinonímia', 'concordância']
  },
  {
    id: 20,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 5. Pontuação (ponto e vírgula vs. vírgula)',
    contextId: 'cb1a2-i',
    statement:
      'No segundo período do segundo parágrafo, o ponto e vírgula poderia ser substituído por vírgula sem prejuízo da correção gramatical do texto.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Uso do ponto e vírgula em enumerações complexas ou orações coordenadas'],
    quickVerdict:
      'CERTO. Em enumeração ou coordenação em que o ponto e vírgula marca pausa mais nítida entre itens longos (ou orações coordenadas), a vírgula continua gramaticalmente admissível, embora com menor hierarquia visual.',
    howToSolve: {
      intuition:
        'Avalie se o ponto e vírgula ali separa itens de uma lista/orações coordenadas. Se não houver ambiguidade sintática grave ao trocar por vírgula, a substituição preserva a correção gramatical.',
      steps: [
        'No documento da UNESCO, os trechos longos coordenam séries de riscos e impactos ou orações paralelas usando ponto e vírgula para organizar a leitura.',
        'Gramaticalmente, orações coordenadas assindéticas ou sindéticas e itens enumerativos aceitam tanto o ponto e vírgula quanto a vírgula.',
        'Note que o item pergunta sobre *correção gramatical*, e não sobre estilo ou preferência visual. A vírgula preserva a correção.'
      ],
      trapAlert:
        'A troca inversa (vírgula -> ponto e vírgula) costuma ser errada quando separa sujeito de verbo ou oração subordinada adverbial curta da principal. Já ponto e vírgula -> vírgula em coordenação geralmente preserva a correção.'
    },
    tags: ['pontuação', 'ponto-e-vírgula', 'vírgula']
  },
  {
    id: 21,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-2',
    editalRef: 'Português — 4. Conectores: locução aditiva "não apenas... mas também"',
    contextId: 'cb1a2-i',
    statement:
      'No trecho "mas também suscetíveis de gerar impactos negativos", a palavra "mas" expressa sentido aditivo.',
    officialAnswer: 'E',
    requiredLevel: 'Avancado',
    prerequisites: ['Estrutura correlativa "não só... mas também"', 'Análise isolada do conectivo vs. locução correlativa'],
    quickVerdict:
      'ERRADO. Embora a locução correlativa inteira ("não só/não apenas... mas também") tenha valor aditivo, o Cebraspe cobrou isoladamente o vocábulo "mas" (ou sua estrutura sem o par aditivo completo, conforme o texto CB1A2-I), mantendo a clássica oposição "mas" (adversativa) vs. "também" (advérbio de inclusão que constrói a adição no conjunto).',
    howToSolve: {
      intuition:
        'Atenção extrema à nuance linguística cobrada nesta prova! Verifique como o trecho aparece exatamente no texto e a diferença entre "a expressão mas também" e "a palavra mas".',
      steps: [
        'Na tradição gramatical mais estrita (e no caso concreto do texto, onde se contrapõem potencialidades benéficas e riscos negativos), a conjunção "mas" carrega o traço adversativo/contrastivo de origem, enquanto a adição nasce da combinação com o advérbio de inclusão "também" (e da correlação com "não só/apenas").',
        'Mais ainda: quando há contraste entre algo positivo e "suscetíveis de gerar impactos negativos", "mas" introduz uma ressalva/oposição somada ao termo anterior, e não uma adição pura da palavra "mas" isolada.',
        'Portanto, afirmar categoricamente que a palavra isolada "mas" expressa sentido aditivo foi julgado ERRADO pela banca.'
      ],
      trapAlert:
        'Observe sempre se a questão pergunta sobre a locução ("não só... mas também" = aditiva) ou sobre a palavra isolada "mas". Quando isola "mas", a banca frequentemente cobra o valor adversativo/contrastivo.'
    },
    tags: ['conectores', 'mas-também', 'pegadinha-cebraspe']
  },
  {
    id: 22,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 6. Concordância verbal e sujeito elíptico',
    contextId: 'cb1a2-i',
    statement:
      'No último parágrafo do texto, a forma verbal "podem" concorda com o vocábulo "distorções".',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Recuperação de sujeito oculto/elíptico por coesão referencial'],
    quickVerdict:
      'ERRADO. O sujeito da locução verbal "podem gerar/exacerbar..." não é "distorções" (que é complemento/objeto), mas sim o sujeito elíptico "as tecnologias de IA" (ou referente plural retomado do período anterior).',
    howToSolve: {
      intuition:
        'Não se deixe enganar pelo substantivo plural mais próximo do verbo! Leia desde o início da oração para achar quem pratica a ação.',
      steps: [
        'Leia atentamente o período do último parágrafo onde "podem" aparece.',
        '"Distorções" funciona como complemento/objeto ("causar/ampliar distorções") ou núcleo de outro sintagma, e não como o agente que realiza a ação do verbo "poder".',
        'Quem "pode" causar impactos/desigualdades são as tecnologias de IA (sujeito retomado do contexto).'
      ],
      trapAlert:
        'Técnica de prova: sempre que o Cebraspe disser "o verbo X concorda com o termo Y", procure Y no texto e pergunte: Y é mesmo o SUJEITO de X ou está lá só como objeto/adjunto para distrair?'
    },
    tags: ['concordância-verbal', 'sujeito-elíptico']
  },
  {
    id: 23,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-3',
    editalRef: 'Português — 6. Regência verbal',
    contextId: 'cb1a2-i',
    statement:
      'A substituição de "resultaria" por "acarretaria" em "resultaria potencialmente em discriminação" preservaria a correção gramatical do período.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Regência de verbos muito cobrados: "resultar em" (VTI) vs. "acarretar" (VTD)'],
    quickVerdict:
      'ERRADO. "Resultar" exige a preposição "em" ("resultar em discriminação"), ao passo que "acarretar" é verbo transitivo direto ("acarretar discriminação", SEM "em").',
    howToSolve: {
      intuition:
        'Questão clássica de regência: ao trocar o verbo, nunca deixe a preposição órfã se o novo verbo for transitivo direto!',
      steps: [
        'Substitua no trecho: "resultaria potencialmente em discriminação" -> "acarretaria potencialmente em discriminação".',
        'O verbo "acarretar" significa "trazer como consequência, ocasionar" e é Transitivo Direto: quem acarreta, acarreta ALGO (e não "em algo").',
        'Para manter a correção, seria preciso apagar a preposição "em" ("acarretaria potencialmente discriminação"). Como a questão propõe trocar apenas "resultaria", o trecho ficaria agramatical.'
      ],
      trapAlert:
        'Guarde o par mortal do Cebraspe: resultar EM algo (VTI) vs. acarretar/implicar/ocasionar ALGO (VTD, sem "em").'
    },
    tags: ['regência-verbal', 'acarretar', 'resultar']
  },
  {
    id: 24,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-4',
    editalRef: 'Português — 7. Posição de advérbios e alteração de sentido',
    contextId: 'cb1a2-i',
    statement:
      'Caso o vocábulo "ainda" fosse deslocado para imediatamente após a forma verbal "podem", no último período do texto, seriam mantidos a correção gramatical e o sentido original do período.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Escopo de advérbios focalizadores ("ainda", "também", "apenas")'],
    quickVerdict:
      'ERRADO. O deslocamento de "ainda" muda o seu escopo sintático-semântico (se modifica um comparativo como "ainda mais", ou o aspecto temporal/aditivo da oração), alterando o sentido original ou gerando inadequação.',
    howToSolve: {
      intuition:
        'Palavras como "ainda", "só", "apenas" e "também" mudam o foco do que modificam quando mudam de posição na frase.',
      steps: [
        'No trecho original, verifique qual termo é diretamente modificado por "ainda" (por exemplo, "ainda mais", com valor intensificador de comparativo, ou posição inicial com valor inclusivo/temporal).',
        'Ao mover "ainda" para imediatamente depois de "podem" ("podem ainda..."), altera-se a ênfase e o escopo semântico do advérbio (passa de intensificador/focalizador do elemento anterior para modificador da ação principal, podendo equivaler a "além disso" ou "até agora").',
        'Quando há mudança de escopo que altera o sentido original, o item que promete "sentido original mantido" está ERRADO.'
      ],
      trapAlert:
        'Em itens "mantém correção e sentido original", basta alterar o *sentido* (mesmo ficando gramaticalmente correto) para o item ser ERRADO.'
    },
    tags: ['semântica', 'advérbio', 'deslocamento']
  },
  {
    id: 25,
    prova: 'P1',
    subjectId: 'portugues',
    topicId: 'pt-1',
    editalRef: 'Português — 1. Compreensão e coerência global',
    contextId: 'cb1a2-i',
    statement:
      'Os argumentos desenvolvidos ao longo do texto servem de justificativa para a aprovação da Recomendação sobre a Ética da Inteligência Artificial.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Leitura estrutural de considerandos e dispositivo normativo'],
    quickVerdict:
      'CERTO. Toda a sequência de considerandos enumera riscos éticos, oportunidades e necessidades de governança para embasar e justificar o ato final ("adota a presente Recomendação").',
    howToSolve: {
      intuition:
        'Textos normativos internacionais funcionam em dois blocos: considerandos (justificativas) + verbo deliberativo ("Adota a presente Recomendação").',
      steps: [
        'Observe a macroestrutura: uma série de afirmações apontando desafios éticos, sociais, cognitivos e ambientais da IA.',
        'Esses argumentos preparam e fundamentam a conclusão deliberativa da Conferência Geral da UNESCO: aprovar/adotar a Recomendação.',
        'Portanto, atuam exatamente como justificativa para a aprovação.'
      ],
      trapAlert:
        'Item direto de fechamento de bloco textual; não busque pelo em ovo quando a relação entre considerandos e deliberação for explícita.'
    },
    tags: ['compreensão', 'coerência', 'macroestrutura']
  },

  // =========================================================================
  // NOÇÕES DE LÓGICA E ESTATÍSTICA — VARIÁVEL ALEATÓRIA DISCRETA X (Itens 26 a 30)
  // =========================================================================
  {
    id: 26,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-1',
    editalRef: 'Lógica e Estatística — Variáveis aleatórias discretas e medidas de tendência central',
    contextId: 'le-va-x',
    command: 'Considerando a distribuição de probabilidade da variável aleatória X mostrada na tabela, julgue os itens de 26 a 30.',
    statement: 'A moda de X é igual a 0.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Conceito de moda (valor de maior probabilidade/frequência)'],
    quickVerdict:
      'ERRADO. A soma das probabilidades vale $15c = 1 \\Rightarrow c = 1/15$. O valor $X=-2$ tem a maior probabilidade ($5c = 5/15 = 1/3$), logo a moda é $-2$, não $0$.',
    howToSolve: {
      intuition:
        'Moda não é o valor "do meio" da tabela! Moda é o valor de $X$ com a MAIOR probabilidade associada.',
      steps: [
        'Some todas as probabilidades da tabela e iguale a 1: $5c + c + 2c + 3c + 4c = 15c = 1 \\implies c = \\frac{1}{15}$.',
        'Liste as probabilidades de cada ponto: $P(X=-2) = 5/15$, $P(X=-1) = 1/15$, $P(X=0) = 2/15$, $P(X=1) = 3/15$, $P(X=2) = 4/15$.',
        'O máximo ocorre em $X = -2$ ($5/15$). Logo, $\\text{Moda}(X) = -2$.'
      ],
      formulaLatex: '\\sum_{x} P(X=x) = 15c = 1 \\implies c = \\frac{1}{15}, \\quad \\arg\\max_x P(X=x) = -2',
      trapAlert:
        'Não confunda mediana ($0$, item 30) com moda ($-2$) nem com média ($0$, item 29).'
    },
    tags: ['moda', 'va-discreta', 'distribuição']
  },
  {
    id: 27,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-1',
    editalRef: 'Lógica e Estatística — Axiomas de probabilidade',
    contextId: 'le-va-x',
    statement: 'A probabilidade $P(X = 1)$ é igual a 0,2.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Normalização da função massa de probabilidade'],
    quickVerdict:
      'CERTO. Como $15c = 1 \\implies c = 1/15$, temos $P(X=1) = 3c = 3/15 = 1/5 = 0,2$.',
    howToSolve: {
      intuition:
        'Achou $c = 1/15$ no primeiro cálculo do bloco? Esse único número resolve os cinco itens da tabela em segundos.',
      steps: [
        'Da normalização: $15c = 1 \\implies c = 1/15$.',
        'Na tabela, $P(X=1) = 3c$.',
        'Substituindo: $P(X=1) = 3 \\times \\frac{1}{15} = \\frac{3}{15} = \\frac{1}{5} = 0,2$.'
      ],
      formulaLatex: 'P(X=1) = 3c = \\frac{3}{15} = 0{,}2',
      trapAlert:
        'Nunca pule a verificação da soma total = 1 antes de responder qualquer pergunta sobre a tabela.'
    },
    tags: ['probabilidade', 'normalização']
  },
  {
    id: 28,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-1',
    editalRef: 'Lógica e Estatística — Classificação de variáveis aleatórias',
    contextId: 'le-va-x',
    statement: 'A distribuição de X é contínua.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Distinção entre variável aleatória discreta e contínua'],
    quickVerdict:
      'ERRADO. O suporte de $X$ é finito e enumerável: $\\{-2, -1, 0, 1, 2\\}$, com probabilidades pontuais positivas. Trata-se de uma distribuição discreta.',
    howToSolve: {
      intuition:
        'Se você consegue listar todos os valores possíveis numa tabela com massas pontuais $P(X=x) > 0$, a variável é discreta.',
      steps: [
        'Uma variável aleatória contínua assume valores em intervalos reais (incontáveis) e tem $P(X=x) = 0$ para todo ponto isolado.',
        'Aqui, $X$ assume apenas 5 valores inteiros ($-2, -1, 0, 1, 2$) com massas pontuais positivas.',
        'Portanto, a distribuição de $X$ é discreta, não contínua.'
      ],
      trapAlert:
        'Questão conceitual simples; não supercomplique pensando em aproximações.'
    },
    tags: ['va-discreta', 'va-contínua', 'conceito']
  },
  {
    id: 29,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-2',
    editalRef: 'Lógica e Estatística — Esperança matemática',
    contextId: 'le-va-x',
    statement: 'O valor esperado de X é igual a 0.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Cálculo da esperança de variável aleatória discreta'],
    quickVerdict:
      'CERTO. $E[X] = (-2)(5c) + (-1)(c) + 0(2c) + 1(3c) + 2(4c) = (-10 - 1 + 0 + 3 + 8)c = 0c = 0$.',
    howToSolve: {
      intuition:
        'Multiplique cada valor de $X$ por sua respectiva probabilidade e some tudo.',
      steps: [
        'Monte a soma ponderada mantendo $c$ em evidência para simplificar contas:',
        '$E[X] = (-2)\\cdot 5c + (-1)\\cdot 1c + 0\\cdot 2c + 1\\cdot 3c + 2\\cdot 4c$',
        '$E[X] = (-10 - 1 + 0 + 3 + 8)c = 0 \\cdot c = 0$.'
      ],
      formulaLatex: 'E[X] = \\sum_{x} x\\,P(X=x) = (-10 - 1 + 0 + 3 + 8)c = 0',
      trapAlert:
        'Repare que não foi nem preciso substituir $c = 1/15$ na soma final porque o numerador zerou! Manter a constante simbólica poupa tempo na prova.'
    },
    tags: ['esperança', 'média']
  },
  {
    id: 30,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-2',
    editalRef: 'Lógica e Estatística — Quantis e mediana de distribuição discreta',
    contextId: 'le-va-x',
    statement: 'A mediana de X é maior ou igual a 1.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Definição de mediana usando função de distribuição acumulada F(x)'],
    quickVerdict:
      'ERRADO. A acumulada até $0$ é $P(X \\le 0) = (5+1+2)/15 = 8/15 > 0,5$, e $P(X \\ge 0) = (2+3+4)/15 = 9/15 > 0,5$. Logo, a mediana de $X$ é $0$ (menor que $1$).',
    howToSolve: {
      intuition:
        'Em variável discreta, a mediana é o ponto $m$ onde a função acumulada $F(m) = P(X \\le m)$ atinge ou ultrapassa $0,50$ (e $P(X \\ge m) \\ge 0,50$).',
      steps: [
        'Calcule as probabilidades acumuladas da esquerda para a direita:',
        '$F(-2) = 5/15 = 0,333 < 0,5$',
        '$F(-1) = (5+1)/15 = 6/15 = 0,40 < 0,5$',
        '$F(0) = (5+1+2)/15 = 8/15 \\approx 0,533 \\ge 0,5$.',
        'Como $0$ é o menor valor em que $F(x)$ passa de $0,5$ (e $P(X \\ge 0) = 9/15 \\ge 0,5$), a mediana é exatamente $0$, portanto menor que $1$.'
      ],
      formulaLatex: 'F(-1) = \\frac{6}{15} < 0{,}5 \\le \\frac{8}{15} = F(0) \\implies \\text{Md}(X) = 0 < 1',
      trapAlert:
        'Não calcule a mediana dos valores $(-2,-1,0,1,2)$ sem considerar as probabilidades! Aqui deu $0$ também por acaso numérico, mas a regra correta é sempre pela acumulada $F(x)$.'
    },
    tags: ['mediana', 'acumulada', 'quantis']
  },

  // =========================================================================
  // NOÇÕES DE LÓGICA E ESTATÍSTICA — VARIÁVEIS CONTÍNUAS INDEP. V e W (Itens 31 a 35)
  // =========================================================================
  {
    id: 31,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-2',
    editalRef: 'Lógica e Estatística — Coeficiente de variação e variância',
    contextId: 'le-vw',
    command:
      'Considerando que V e W sejam variáveis aleatórias contínuas e independentes tais que P(V > 0) = 0,3 e P(W > 0) = 0,7, julgue os itens subsequentes.',
    statement:
      'Se as médias de V e W forem ambas iguais a 1 e o coeficiente de variação de V for o dobro do de W, então a variância de V será o dobro da variância de W.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Fórmula do coeficiente de variação (CV = σ / μ)', 'Relação entre desvio-padrão e variância (Var = σ²)'],
    quickVerdict:
      'ERRADO. Com médias iguais a $1$, $CV(V) = \\sigma_V = 2\\,\\sigma_W$. Elevando ao quadrado para achar a variância: $\\text{Var}(V) = \\sigma_V^2 = (2\\sigma_W)^2 = 4\\,\\text{Var}(W)$ — é o QUÁDRUPLO, não o dobro.',
    howToSolve: {
      intuition:
        'O coeficiente de variação é linear no desvio-padrão ($\\sigma$). Se você dobra $\\sigma$, a variância ($\\sigma^2$) multiplica por $2^2 = 4$.',
      steps: [
        'Definição: $CV = \\frac{\\sigma}{\\mu}$. Como $\\mu_V = \\mu_W = 1$, temos $CV(V) = \\sigma_V$ e $CV(W) = \\sigma_W$.',
        'A condição dada é $\\sigma_V = 2\\sigma_W$.',
        'Elevando os dois lados ao quadrado: $\\sigma_V^2 = 4\\sigma_W^2 \\implies \\text{Var}(V) = 4\\,\\text{Var}(W)$.'
      ],
      formulaLatex: 'CV = \\frac{\\sigma}{|\\mu|} \\implies \\sigma_V = 2\\sigma_W \\implies \\text{Var}(V) = 4\\,\\text{Var}(W)',
      trapAlert:
        'Pegadinha clássica: confundir desvio-padrão (dobra) com variância (quadruplica).'
    },
    tags: ['coeficiente-variação', 'variância', 'desvio-padrão']
  },
  {
    id: 32,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-2',
    editalRef: 'Lógica e Estatística — Quartis de variáveis contínuas',
    contextId: 'le-vw',
    statement: 'O primeiro quartil de V é negativo.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Definição de 1º quartil Q₁ (P(V ≤ Q₁) = 0,25)', 'Propriedade de V.A. contínua: P(V = 0) = 0'],
    quickVerdict:
      'CERTO. Como $V$ é contínua, $P(V \\le 0) = 1 - P(V > 0) = 0,70$. Sendo $0,70 > 0,25$, o ponto $Q_1$ que acumula $0,25$ de probabilidade está estritamente à esquerda de $0$, isto é, $Q_1 < 0$.',
    howToSolve: {
      intuition:
        'A função acumulada $F_V(x) = P(V \\le x)$ é não decrescente. Se em $x=0$ ela já acumulou $70\\%$, então o ponto onde acumulou $25\\%$ só pode ser menor que $0$!',
      steps: [
        'Pelo complementar: $P(V \\le 0) = 1 - P(V > 0) = 1 - 0,3 = 0,70$.',
        'O primeiro quartil $Q_1$ satisfaz $F_V(Q_1) = P(V \\le Q_1) = 0,25$.',
        'Como $F_V$ é crescente (ou não decrescente) e $F_V(Q_1) = 0,25 < 0,70 = F_V(0)$, conclui-se obrigatoriamente que $Q_1 < 0$.'
      ],
      formulaLatex: 'F_V(Q_1) = 0{,}25 < 0{,}70 = F_V(0) \\implies Q_1 < 0',
      trapAlert:
        'Não é preciso conhecer o formato da densidade de $V$ (Normal, Uniforme etc.) — a monotonicidade da função de distribuição acumulada basta!'
    },
    tags: ['quartis', 'acumulada', 'va-contínua']
  },
  {
    id: 33,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-3',
    editalRef: 'Lógica e Estatística — Independência de eventos e probabilidade conjunta',
    contextId: 'le-vw',
    statement: 'A probabilidade $P(V < 0 \\text{ e } W < 0)$ é igual a 0,21.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Independência: P(A ∩ B) = P(A)·P(B)', 'P(X < 0) = 1 - P(X > 0) em V.A. contínua'],
    quickVerdict:
      'CERTO. Por continuidade, $P(V<0) = 1 - 0,3 = 0,7$ e $P(W<0) = 1 - 0,7 = 0,3$. Por independência, $P(V<0 \\cap W<0) = 0,7 \\times 0,3 = 0,21$.',
    howToSolve: {
      intuition:
        'Em variáveis contínuas, $P(V=0) = P(W=0) = 0$. Depois disso, independência permite apenas multiplicar as probabilidades marginais.',
      steps: [
        'Como $V$ e $W$ são contínuas: $P(V < 0) = 1 - P(V > 0) - P(V = 0) = 1 - 0,3 - 0 = 0,7$.',
        'Analogamente: $P(W < 0) = 1 - 0,7 = 0,3$.',
        'Como $V$ e $W$ são independentes: $P(V < 0 \\text{ e } W < 0) = P(V < 0)\\cdot P(W < 0) = 0,7 \\times 0,3 = 0,21$.'
      ],
      formulaLatex: 'P(V<0 \\cap W<0) = (1-0{,}3)(1-0{,}7) = 0{,}7 \\times 0{,}3 = 0{,}21',
      trapAlert:
        'Se as variáveis fossem discretas e não informassem $P(V=0)$, você não poderia assumir $P(V<0) = 1 - P(V>0)$. Aqui "contínuas" no comando garante $P(X=0)=0$.'
    },
    tags: ['independência', 'probabilidade-conjunta']
  },
  {
    id: 34,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-3',
    editalRef: 'Lógica e Estatística — Probabilidade condicional e independência',
    contextId: 'le-vw',
    statement: 'A probabilidade condicional $P(V \\ge 0 \\mid W \\ge 0)$ é maior que 0,3.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Definição de independência em probabilidade condicional: P(A|B) = P(A)'],
    quickVerdict:
      'ERRADO. Como $V$ e $W$ são independentes e contínuas, $P(V \\ge 0 \\mid W \\ge 0) = P(V \\ge 0) = P(V > 0) = 0,3$, e não maior que $0,3$.',
    howToSolve: {
      intuition:
        'Independência significa exatamente que saber algo sobre $W$ não altera em nada as probabilidades sobre $V$.',
      steps: [
        'Pela independência entre $V$ e $W$: $P(V \\ge 0 \\mid W \\ge 0) = P(V \\ge 0)$.',
        'Como $V$ é contínua, $P(V = 0) = 0$, logo $P(V \\ge 0) = P(V > 0) = 0,3$.',
        'Como $0,3$ não é estritamente maior que $0,3$, a afirmação está errada.'
      ],
      formulaLatex: 'P(V \\ge 0 \\mid W \\ge 0) = P(V \\ge 0) = 0{,}3',
      trapAlert:
        'Atenção ao comparador estrito "maior que 0,3" vs. "maior ou igual a 0,3". Igualdade exata torna "maior que" falso.'
    },
    tags: ['probabilidade-condicional', 'independência']
  },
  {
    id: 35,
    prova: 'P1',
    subjectId: 'logica_estatistica',
    topicId: 'le-3',
    editalRef: 'Lógica e Estatística — Variância da diferença de variáveis independentes',
    contextId: 'le-vw',
    statement:
      'Se os desvios padrão de V e W forem iguais a 3 e 4, respectivamente, então o desvio padrão da diferença $V - W$ será igual a 5.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Var(aV + bW) = a²Var(V) + b²Var(W) quando independentes'],
    quickVerdict:
      'CERTO. Na soma ou na DIFERENÇA de variáveis independentes, as variâncias SE SOMAM: $\\text{Var}(V - W) = \\text{Var}(V) + (-1)^2\\text{Var}(W) = 3^2 + 4^2 = 25 \\implies \\sigma_{V-W} = \\sqrt{25} = 5$.',
    howToSolve: {
      intuition:
        'Erro nº 1 dos alunos: achar que $\\text{Var}(V - W) = \\text{Var}(V) - \\text{Var}(W)$. Incertezas de variáveis independentes nunca se subtraem — o coeficiente $-1$ entra ao quadrado!',
      steps: [
        'Calcule as variâncias: $\\text{Var}(V) = 3^2 = 9$ e $\\text{Var}(W) = 4^2 = 16$.',
        'Como $V$ e $W$ são independentes, $\\text{Cov}(V, W) = 0$, então:',
        '$\\text{Var}(V - W) = 1^2\\text{Var}(V) + (-1)^2\\text{Var}(W) = 9 + 16 = 25$.',
        'Logo, o desvio-padrão é $\\sigma_{V-W} = \\sqrt{25} = 5$.'
      ],
      formulaLatex: '\\text{Var}(V - W) = \\text{Var}(V) + \\text{Var}(W) - 2\\,\\text{Cov}(V,W) = 9 + 16 = 25 \\implies \\sigma = 5',
      trapAlert:
        'Desvio padrão nunca se soma diretamente ($3+4=7$ errado) e variância da diferença nunca se subtrai ($16-9$ errado). Triângulo pitagórico 3-4-5 clássico!'
    },
    tags: ['variância', 'combinação-linear', 'independência']
  },

  // =========================================================================
  // DIREITO ADMINISTRATIVO (Itens 36 a 40)
  // =========================================================================
  {
    id: 36,
    prova: 'P1',
    subjectId: 'direito_adm',
    topicId: 'da-1',
    editalRef: 'Direito Administrativo — 4. Administração Indireta: Autarquias e Bens Públicos',
    command: 'Acerca da organização administrativa e do regime jurídico dos servidores e dos bens públicos, julgue os itens a seguir.',
    statement:
      'Os bens pertencentes às autarquias federais são bens públicos e, por essa razão, são invariavelmente inalienáveis.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Classificação dos bens públicos no Código Civil (uso comum, uso especial, dominicais)', 'Regime de alienabilidade condicionada'],
    quickVerdict:
      'ERRADO. Bens das autarquias são, de fato, bens públicos, mas a inalienabilidade NÃO é absoluta ("invariavelmente"): bens dominicais (e bens desafetados) podem ser alienados cumpridos os requisitos legais (art. 101 CC).',
    howToSolve: {
      intuition:
        'A palavra "invariavelmente" já acende o alerta vermelho em Direito Administrativo. Bens públicos têm alienabilidade *condicionada* (não absoluta).',
      steps: [
        'Bens de autarquias (como o próprio Banco Central) integram o conceito de bens públicos (art. 98 do Código Civil).',
        'Bens de uso comum do povo e bens de uso especial são inalienáveis *enquanto conservarem a sua qualificação* (afetação) — art. 100 do CC.',
        'Contudo, uma vez desafetados (tornando-se bens dominicais), eles PODEM ser alienados, observadas as exigências da lei (interesse público justificado, avaliação prévia, licitação, autorização legislativa quando exigida) — art. 101 do CC.'
      ],
      trapAlert:
        'Lembre-se do trio clássico dos bens públicos: Imprescritíveis (não sofrem usucapião) — Impenhoráveis (dívida via precatório) — Inalienáveis de forma *relativa/condicionada* (não absoluta!).'
    },
    tags: ['bens-públicos', 'autarquias', 'inalienabilidade']
  },
  {
    id: 37,
    prova: 'P1',
    subjectId: 'direito_adm',
    topicId: 'da-2',
    editalRef: 'Direito Administrativo — 6. Regime Disciplinar (Lei nº 8.112/1990)',
    statement:
      'O afastamento preventivo de servidor público envolvido em processo administrativo disciplinar, para que este não venha a influir na apuração da irregularidade, pode durar até a conclusão do referido processo, sem prejuízo de sua remuneração.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Prazo legal do afastamento preventivo no art. 147 da Lei nº 8.112/1990'],
    quickVerdict:
      'ERRADO. Pelo art. 147 da Lei nº 8.112/1990, o afastamento preventivo tem prazo máximo de até **60 dias**, prorrogável por **igual prazo** (total máximo de 120 dias), findo o qual cessam seus efeitos, ainda que o PAD não esteja concluído.',
    howToSolve: {
      intuition:
        'A Lei 8.112 fixa limite temporal estrito ao afastamento cautelar do servidor para evitar punição antecipada indefinida.',
      steps: [
        'Leia a letra do art. 147 da Lei nº 8.112/1990: "Como medida cautelar e a fim de que o servidor não venha a influir na apuração da irregularidade, a autoridade instauradora do processo disciplinar poderá determinar o seu afastamento do exercício do cargo, pelo prazo de até 60 (sessenta) dias, sem prejuízo da remuneração."',
        'Parágrafo único: "O afastamento poderá ser prorrogado por igual prazo, findo o qual cessarão os seus efeitos, ainda que não concluído o processo."',
        'Logo, o afastamento dura no máximo 60 + 60 = 120 dias, e NÃO "até a conclusão do processo".'
      ],
      trapAlert:
        'A parte final ("sem prejuízo da remuneração") está certa e serve como isca para validar a parte errada ("até a conclusão do processo"). Leia cada palavra até o fim!'
    },
    tags: ['lei-8112', 'pad', 'afastamento-preventivo']
  },
  {
    id: 38,
    prova: 'P1',
    subjectId: 'direito_adm',
    topicId: 'da-1',
    editalRef: 'Direito Administrativo — 1. Regime Jurídico-Administrativo (Princípios)',
    statement:
      'Em regra, os direitos e interesses geridos por administradores públicos são inalienáveis e indisponíveis.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Pedra de toque do Direito Administrativo: Supremacia e Indisponibilidade do Interesse Público'],
    quickVerdict:
      'CERTO. A indisponibilidade do interesse público é princípio basilar: o administrador público é mero gestor da coisa pública, não seu proprietário, não podendo dispor livremente dos interesses e direitos da coletividade (regra geral, com exceções apenas autorizadas em lei).',
    howToSolve: {
      intuition:
        'A expressão "Em regra" valida perfeitamente o princípio geral da indisponibilidade do interesse público segundo a doutrina (Celso Antônio Bandeira de Mello, Di Pietro).',
      steps: [
        'Na teoria geral do Direito Administrativo, os dois pilares são: (1) supremacia do interesse público sobre o privado e (2) indisponibilidade do interesse público.',
        'Como o interesse público pertence à coletividade (e não ao agente/gestor), os bens, direitos e interesses públicos são, em regra, indisponíveis e inalienáveis pelo administrador sem autorização legal.',
        'Diferente do item 36 ("invariavelmente inalienáveis"), aqui a banca escreveu corretamente "Em regra".'
      ],
      trapAlert:
        'Repare no contraste direto entre os itens 36 e 38 da mesma prova: "invariavelmente" = ERRADO; "em regra" = CERTO.'
    },
    tags: ['princípios', 'indisponibilidade', 'interesse-público']
  },
  {
    id: 39,
    prova: 'P1',
    subjectId: 'direito_adm',
    topicId: 'da-3',
    editalRef: 'Direito Administrativo — 8. LGPD (Lei nº 13.709/2018)',
    statement:
      'Em respeito ao sigilo profissional, a comunicação ou o uso compartilhado de dados pessoais sensíveis referentes à saúde entre controladores com o objetivo de obter vantagem econômica somente são admitidos na prestação de serviços de saúde ou de assistência farmacêutica, desde que em benefício dos interesses dos titulares de dados.',
    officialAnswer: 'C',
    requiredLevel: 'Intermediario',
    prerequisites: ['Hipóteses excepcionais de compartilhamento de dados sensíveis de saúde na LGPD (art. 11, § 4º)'],
    quickVerdict:
      'CERTO. Literalidade quase exata do art. 11, §§ 4º e 5º da Lei nº 13.709/2018 (LGPD), que veda o compartilhamento de dados de saúde para vantagem econômica, salvo nas exceções legais (prestação de serviços de saúde, assistência farmacêutica e assistência à saúde, incluindo portabilidade e transações financeiras/administrativas em benefício dos titulares).',
    howToSolve: {
      intuition:
        'Em legislação recente (LGPD, LIA reformada, Conflito de Interesses), o Cebraspe cobra a literalidade das exceções legais.',
      steps: [
        'Pelo art. 11, § 4º, da LGPD, é vedada a comunicação ou o uso compartilhado entre controladores de dados pessoais sensíveis referentes à saúde com objetivo de obter vantagem econômica, EXCETO nas hipóteses relativas à prestação de serviços de saúde, de assistência farmacêutica e de assistência à saúde, em benefício dos interesses dos titulares de dados.',
        'O enunciado reproduz exatamente o núcleo dessa exceção legal prevista na LGPD.'
      ],
      trapAlert:
        'Fique atento para a 2027 às exceções do art. 11, §§ 4º e 5º da LGPD (operadoras de planos de saúde também têm vedação específica quanto à seleção de risco na contratação/exclusão de beneficiários).'
    },
    tags: ['lgpd', 'dados-sensíveis', 'lei-13709']
  },
  {
    id: 40,
    prova: 'P1',
    subjectId: 'direito_adm',
    topicId: 'da-4',
    editalRef: 'Direito Administrativo — 7. Ética no Serviço Público (Decreto nº 1.171/1994)',
    statement:
      'Segundo o Decreto n.º 1.171/1994, deixar qualquer pessoa à espera de solução que compete ao setor em que o servidor público exerça suas funções, permitindo a formação de longas filas ou qualquer outra espécie de atraso na prestação do serviço, não caracteriza apenas atitude contra a ética ou ato de desumanidade, mas principalmente grave dano moral aos usuários dos serviços públicos.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Regras Deontológicas do Decreto nº 1.171/1994 (inciso X)'],
    quickVerdict:
      'CERTO. Transcrição praticamente literal do inciso X do Código de Ética Profissional do Servidor Público Civil do Poder Executivo Federal (Decreto nº 1.171/1994).',
    howToSolve: {
      intuition:
        'O Decreto 1.171/1994 tem linguagem axiológica marcante ("ato de desumanidade", "grave dano moral"). Reconheça essa fraseologia literal.',
      steps: [
        'Decreto nº 1.171/1994, Seção I, inciso X: "Deixar o servidor público qualquer pessoa à espera de solução que compete ao setor em que exerça suas funções, permitindo a formação de longas filas, ou qualquer outra espécie de atraso na prestação do serviço, não caracteriza apenas atitude contra a ética ou ato de desumanidade, mas principalmente grave dano moral aos usuários dos serviços públicos."',
        'A reprodução é literal e integralmente fiel ao dispositivo.'
      ],
      trapAlert:
        'Leia integralmente os incisos I a XV do Decreto 1.171/1994 — é ponto quase certo de P1 no Bacen.'
    },
    tags: ['ética', 'decreto-1171', 'literalidade']
  },

  // =========================================================================
  // FUNDAMENTOS DE MACROECONOMIA E MICROECONOMIA (Itens 41 a 50)
  // =========================================================================
  {
    id: 41,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-1',
    editalRef: 'Fundamentos — Contabilidade Social e agregados macroeconômicos',
    contextId: 'fe-contas',
    command:
      'Considere uma economia hipotética cujas contas nacionais apresentem os seguintes valores (em bilhões de unidades monetárias): PIB a preços de mercado = 250; renda recebida do exterior = 35; renda enviada ao exterior = 60; depreciação = 30; impostos indiretos = 80; subsídios = 20. Com base nesses dados, julgue os itens 41 a 43.',
    statement: 'A renda nacional líquida a custo de fatores dessa economia é igual a 135 bilhões de unidades monetárias.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Passagens entre PIB/PNB, Bruto/Líquido e Preços de Mercado/Custo de Fatores'],
    quickVerdict:
      'CERTO. $PNB_{pm} = 250 + 35 - 60 = 225$; $PNL_{pm} = 225 - 30 = 195$; $RN = PNL_{cf} = 195 - 80 + 20 = 135$.',
    howToSolve: {
      intuition:
        'Três conversões em cascata: (1) Interno -> Nacional soma RLEE ($RR - RE$); (2) Bruto -> Líquido subtrai Depreciação; (3) Preço de Mercado -> Custo de Fatores subtrai Impostos Indiretos e soma Subsídios.',
      steps: [
        'Passo 1 — Renda Líquida Enviada/Recebida: $RR - RE = 35 - 60 = -25$ (ou $RLEE = 60 - 35 = 25$). Logo, $PNB_{pm} = 250 + 35 - 60 = 225$.',
        'Passo 2 — Desconte a depreciação ($30$): $PNL_{pm} = 225 - 30 = 195$.',
        'Passo 3 — Passe para Custo de Fatores ($-II + \\text{Sub}$): $PNL_{cf} = \\text{Renda Nacional} = 195 - 80 + 20 = 135$.'
      ],
      formulaLatex: 'RN = PNL_{cf} = PIB_{pm} + (RR - RE) - \\text{Dep} - II + \\text{Sub} = 250 - 25 - 30 - 80 + 20 = 135',
      trapAlert:
        'Não inverta os sinais de Subsídios e Impostos Indiretos: preço de mercado É MAIOR (em geral) que custo de fatores por incluir impostos indiretos líquidos de subsídios ($pm = cf + II - Sub$), então de $pm$ para $cf$ você SUBTRAI $II$ e SOMA $Sub$.'
    },
    tags: ['contas-nacionais', 'agregados', 'renda-nacional']
  },
  {
    id: 42,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-1',
    editalRef: 'Fundamentos — Contabilidade Social: PNB vs. PIB',
    contextId: 'fe-contas',
    statement: 'O produto nacional bruto (PNB) a preços de mercado é igual a 190 bilhões de unidades monetárias.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Identidade PNB = PIB + RR - RE'],
    quickVerdict:
      'ERRADO. $PNB_{pm} = PIB_{pm} + RR - RE = 250 + 35 - 60 = 225$ bilhões, e não $190$ (o examinador obteve 190 somando $250 - 60$ e esquecendo $+35$, ou invertendo o sinal de $35$).',
    howToSolve: {
      intuition:
        'Use diretamente a relação entre Produto Interno e Produto Nacional sem misturar depreciação ou impostos.',
      steps: [
        '$PNB_{pm} = PIB_{pm} + \\text{Renda Recebida do Exterior} - \\text{Renda Enviada ao Exterior}$.',
        '$PNB_{pm} = 250 + 35 - 60 = 225$ bilhões.',
        'Como $225 \\ne 190$, o item está errado.'
      ],
      formulaLatex: 'PNB_{pm} = 250 + 35 - 60 = 225',
      trapAlert:
        'Atenção para não subtrair $(35 + 60)$ nem somar $RLEE$ com o sinal invertido! Lembre: Renda Recebida entra (+), Renda Enviada sai (-).'
    },
    tags: ['contas-nacionais', 'pnb']
  },
  {
    id: 43,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-1',
    editalRef: 'Fundamentos — Limitações do PIB como medida de bem-estar',
    contextId: 'fe-contas',
    statement: 'O PIB constitui uma medida completa e suficiente de bem-estar econômico de um país.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Críticas clássicas ao PIB como indicador de bem-estar'],
    quickVerdict:
      'ERRADO. O PIB mede produção de mercado no período, mas ignora distribuição de renda, economia informal/doméstica não remunerada, lazer, qualidade ambiental (externalidades negativas), saúde e sustentabilidade.',
    howToSolve: {
      intuition:
        'Todo manual de Introdução à Economia / Macroeconomia dedica uma seção inteira às limitações do PIB como medida de bem-estar.',
      steps: [
        'O PIB contabiliza bens e serviços finais produzidos em transações de mercado formal no território.',
        'Ele NÃO captura: trabalho doméstico não pago, lazer, desigualdade na distribuição de renda, externalidades ambientais (poluição, esgotamento de recursos) ou expectativa de vida/educação.',
        'Portanto, nunca é uma medida "completa e suficiente" de bem-estar.'
      ],
      trapAlert:
        'Adjetivos absolutos ("completa e suficiente") em questões conceituais sobre indicadores sintéticos quase sempre indicam item ERRADO.'
    },
    tags: ['pib', 'bem-estar', 'conceito']
  },
  {
    id: 44,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-2',
    editalRef: 'Fundamentos — Índices de preços e inflação (ANULADA)',
    contextId: 'fe-precos',
    command:
      'Considere uma cesta básica fixa composta por 4 unidades de alimentos, 3 unidades de bens industriais e 5 unidades de serviços, cujos preços unitários em 2021, 2022 e 2023 estão indicados na tabela: 2021 (1, 3, 10), 2022 (2, 6, 20), 2023 (3, 6, 25). Julgue os itens 44 a 46.',
    statement:
      'Se fosse calculado um índice ponderado pela participação de cada item no gasto total, os bens industriais teriam maior peso no índice de preços de 2023.',
    officialAnswer: 'X',
    preliminaryAnswer: 'C',
    annulmentOrChangeReason:
      'ANULADA no gabarito definitivo: "O emprego da expressão \'bens industriais teriam maior peso\' prejudicou o julgamento objetivo do item." (Redação ambígua: maior peso que em 2022 ou maior peso dentre os três itens? Os serviços respondem por 125/155 ≈ 80,6% do gasto, enquanto bens industriais caíram de 18/126 = 14,3% para 18/155 = 11,6%!).',
    requiredLevel: 'Basico',
    prerequisites: ['Cálculo de participação no dispêndio total $w_i = \\frac{p_i q_i}{\\sum p_j q_j}$'],
    quickVerdict:
      'ANULADA (X). Apesar do gabarito preliminar "C", a banca reconheceu que "bens industriais teriam maior peso" é ambíguo e numericamente falso sob qualquer leitura (11,6% < 80,6% dos serviços e 11,6% < 14,3% de 2022).',
    howToSolve: {
      intuition:
        'Mesmo em questão anulada, treine o cálculo real da cesta para dominar os itens 45 e 46!',
      steps: [
        'Custo total da cesta em 2021: $4(1) + 3(3) + 5(10) = 4 + 9 + 50 = 63$.',
        'Custo total da cesta em 2022: $4(2) + 3(6) + 5(20) = 8 + 18 + 100 = 126$.',
        'Custo total da cesta em 2023: $4(3) + 3(6) + 5(25) = 12 + 18 + 125 = 155$.',
        'Participação dos bens industriais em 2023: $18/155 \\approx 11,6\\%$ (menor que $14,3\\%$ em 2022 e muito menor que serviços $125/155 \\approx 80,6\\%$). A banca acabou anulando pela redação ambígua (provavelmente pretendia falar "maior peso em 2023" de outro item ou comparando outra grandeza).'
      ],
      formulaLatex: 'C_{2021} = 63, \\quad C_{2022} = 126, \\quad C_{2023} = 155',
      trapAlert:
        'Em prova Cebraspe, quando perceber erro matemático indiscutível na redação de um item, julgue pela lógica rigorosa e, se o preliminar discordar, saiba exatamente redigir recurso objetivo apontando a falha.'
    },
    tags: ['índice-de-preços', 'anulada', 'laspeyres']
  },
  {
    id: 45,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-2',
    editalRef: 'Fundamentos — Índices de preços (Laspeyres) e variação percentual',
    contextId: 'fe-precos',
    statement: 'A inflação medida por essa cesta entre 2022 e 2023 foi igual a 25%.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Taxa de inflação a partir de cesta fixa: π = (C_t / C_{t-1}) - 1'],
    quickVerdict:
      'ERRADO. O custo da cesta passou de $126$ em 2022 para $155$ em 2023. Logo, a inflação foi $(155 - 126)/126 = 29/126 \\approx 23,02\\%$, diferente de $25\\%$ (que exigiria $126 \\times 1,25 = 157,5$).',
    howToSolve: {
      intuition:
        'Não faça uma média simples dos reajustes dos preços! Pondere pelas quantidades na cesta fixa.',
      steps: [
        'Custo em 2022: $4(2) + 3(6) + 5(20) = 126$.',
        'Custo em 2023: $4(3) + 3(6) + 5(25) = 155$.',
        'Teste rápido sem divisão longa: $25\\%$ de $126$ equivale a $1/4$ de $126 = 31,5$. Somando, $126 + 31,5 = 157,5 \\neq 155$.',
        'Inflação real: $29/126 \\approx 23,02\\%$.'
      ],
      formulaLatex: '\\pi_{2023} = \\frac{155 - 126}{126} = \\frac{29}{126} \\approx 23{,}02\\% \\ne 25\\%',
      trapAlert:
        'Truque de prova: multiplicar $126 \\times 1,25 = 157,5$ leva 3 segundos e evita fazer a divisão $29/126$ na mão!'
    },
    tags: ['inflação', 'cálculo-rápido', 'índice-de-preços']
  },
  {
    id: 46,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-2',
    editalRef: 'Fundamentos — Mudança de base em número-índice',
    contextId: 'fe-precos',
    statement: 'Tomando-se o ano de 2022 como base (índice = 100), o índice de preços referente a 2021 é igual a 50.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Regra de número-índice com base 100: I_t = (C_t / C_base) × 100'],
    quickVerdict:
      'CERTO. Em 2021 todos os preços são exatamente a metade dos de 2022 ($1,3,10$ vs. $2,6,20$): $C_{2021} = 63$ e $C_{2022} = 126$. Logo, $I_{2021} = (63/126)\\times 100 = 50$.',
    howToSolve: {
      intuition:
        'Olhe os preços de 2022 comparados com 2021: $(2, 6, 20) = 2 \\times (1, 3, 10)$. Todos os preços dobraram!',
      steps: [
        'Como todos os preços dobraram de 2021 para 2022, $C_{2021} = 63$ é exatamente a metade de $C_{2022} = 126$.',
        'Aplicando a fórmula com base 2022 = 100: $I_{2021} = \\frac{C_{2021}}{C_{2022}} \\times 100 = \\frac{63}{126} \\times 100 = 50$.'
      ],
      formulaLatex: 'I_{2021 \\mid 2022=100} = \\frac{63}{126} \\times 100 = 50',
      trapAlert:
        'Se a base fosse 2021 = 100, então 2022 seria 200. Aqui a base pedida é 2022 = 100, então 2021 é 50. Leia sempre qual ano foi fixado como 100!'
    },
    tags: ['número-índice', 'mudança-de-base']
  },
  {
    id: 47,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-3',
    editalRef: 'Fundamentos — Oferta, demanda e inelasticidade estruturalista agrícola',
    contextId: 'fe-agro',
    diagramKey: 'chart-estruturalista',
    command:
      'Considerando os dois gráficos apresentados — sobre o debate clássico entre a oferta agrícola na visão estruturalista e os ganhos de produtividade da agropecuária brasileira —, julgue os itens 47 e 48.',
    statement:
      'O gráfico à esquerda ilustra corretamente a tese estruturalista clássica sobre a inelasticidade-preço da oferta agrícola no processo de industrialização e urbanização.',
    officialAnswer: 'E',
    requiredLevel: 'Intermediario',
    prerequisites: ['Leitura de elasticidade em gráficos P×Q', 'Tese estruturalista da inflação de alimentos (oferta perfeitamente inelástica)'],
    quickVerdict:
      'ERRADO. A tese estruturalista clássica assume oferta agrícola praticamente rígida/inelástica (curva vertical no limite), de modo que o deslocamento da demanda ($D_1 \\to D_2$) gera grande alta de preços sem aumento relevante de quantidade. Porém, o gráfico impresso na prova mostra curvas de oferta $S_1$ (e $S_2$) positivamente inclinadas (elásticas), com aumento significativo de $q_1$ para $q_2$.',
    howToSolve: {
      intuition:
        'Olhe literalmente para o desenho do gráfico na prova antes de responder pela teoria decorada! A questão pergunta se *o gráfico* ilustra corretamente a tese.',
      steps: [
        'Na teoria estruturalista (Furtado / Prebisch / debate brasileiro dos anos 1950–60), a urbanização desloca a demanda agrícola para a direita ($D_1 \\to D_2$), mas a estrutura fundiária arcaica torna a oferta agrícola inelástica (curva vertical ou quase vertical), pressionando preços sem expandir $Q$.',
        'Entretanto, observe o primeiro gráfico da prova: a curva de oferta $S_1$ é nitidamente ascendente (positivamente inclinada), e o novo equilíbrio $(q_2, p_2)$ mostra expansão expressiva da quantidade ofertada de $q_1$ para $q_2$.',
        'Logo, o gráfico desenhado NÃO retrata oferta perfeitamente/fortemente inelástica conforme a tese estruturalista clássica.'
      ],
      trapAlert:
        'Armadilha visual: muitos candidatos lêem "tese estruturalista" + "D1->D2" e marcam Certo sem reparar que a inclinação da curva S desenhada no gráfico contradiz a inelasticidade estruturalista!'
    },
    tags: ['oferta-e-demanda', 'elasticidade', 'estruturalismo']
  },
  {
    id: 48,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-3',
    editalRef: 'Fundamentos — Deslocamentos simultâneos de oferta e demanda',
    contextId: 'fe-agro',
    diagramKey: 'chart-embrapa',
    statement:
      'O gráfico à direita representa adequadamente o efeito de ganhos tecnológicos (como os promovidos pela EMBRAPA), em que o deslocamento da oferta supera o deslocamento da demanda, resultando em maior quantidade consumida e menor preço de equilíbrio.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Estática comparativa de oferta e demanda no plano (Q, P)'],
    quickVerdict:
      'CERTO. No gráfico à direita, $D_1 \\to D_2$ desloca a demanda para a direita e $S_1 \\to S_2$ desloca a oferta em magnitude maior para a direita, levando o equilíbrio de $(q_1, p_1)$ para $(q_2, p_2)$ com $q_2 > q_1$ e $p_2 < p_1$.',
    howToSolve: {
      intuition:
        'Compare as coordenadas $(q_1, p_1)$ e $(q_2, p_2)$ no segundo gráfico e confira a coerência com o choque tecnológico.',
      steps: [
        'Inovações agropecuárias (pesquisa da EMBRAPA, redução de custos marginais) deslocam a curva de oferta para a direita/baixo ($S_1 \\to S_2$).',
        'Simultaneamente, o crescimento populacional e da renda desloca a demanda para a direita ($D_1 \\to D_2$).',
        'Como $\\Delta S > \\Delta D$ no gráfico à direita, a quantidade de equilíbrio aumenta ($q_1 \\to q_2$) e o preço real de equilíbrio cai ($p_1 \\to p_2$). O gráfico ilustra com precisão o texto-base.'
      ],
      trapAlert:
        'Sempre confira no eixo vertical quem está mais acima ($p_1$ ou $p_2$) e no eixo horizontal quem está mais à direita ($q_1$ ou $q_2$).'
    },
    tags: ['oferta-e-demanda', 'choque-tecnológico', 'estática-comparativa']
  },
  {
    id: 49,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-4',
    editalRef: 'Fundamentos — Fronteira de Possibilidades de Produção (FPP) e custo de oportunidade',
    diagramKey: 'chart-fpp',
    command:
      'Com base no gráfico da Fronteira de Possibilidades de Produção (FPP) para alimentos e vestuário, julgue os itens 49 e 50.',
    statement:
      'O movimento ao longo da curva do ponto b para o ponto e ilustra o conceito de custo de oportunidade, pois obter mais unidades de vestuário exige abdicar de parte da produção de alimentos.',
    officialAnswer: 'C',
    requiredLevel: 'Basico',
    prerequisites: ['Conceito de FPP, eficiência produtiva e custo de oportunidade'],
    quickVerdict:
      'CERTO. Os pontos $b$ e $e$ estão sobre a FPP (eficiência produtiva). Sair de $b(x_1, y_1)$ para $e(x_2, y_2)$ amplia vestuário ($x_1 \\to x_2$) ao custo de reduzir alimentos ($y_1 \\to y_2$).',
    howToSolve: {
      intuition:
        'Sobre a fronteira não existe "almoço grátis": todos os recursos estão plenamente empregados, então aumentar um bem exige sacrificar o outro.',
      steps: [
        'Localize os pontos no gráfico: $b = (x_1, y_1)$ e $e = (x_2, y_2)$, ambos sobre a curva FPP.',
        'Ao passar de $b$ para $e$, vestuário sobe de $x_1$ para $x_2$, enquanto alimentos caem de $y_1$ para $y_2$.',
        'A razão $\\Delta \\text{alimento} / \\Delta \\text{vestuário}$ mede precisamente o custo de oportunidade.'
      ],
      formulaLatex: '\\text{Custo de oportunidade de } b \\to e = \\left|\\frac{y_2 - y_1}{x_2 - x_1}\\right|',
      trapAlert:
        'Lembre-se dos 4 tipos de pontos na FPP: interno ($c, d$) = ineficiência/desemprego; sobre a curva ($b, e$) = eficiência; externo ($a$) = inatingível no curto prazo sem crescimento/tecnologia.'
    },
    tags: ['fpp', 'custo-de-oportunidade', 'eficiência']
  },
  {
    id: 50,
    prova: 'P1',
    subjectId: 'fundamentos_econ',
    topicId: 'fe-4',
    editalRef: 'Fundamentos — FPP: eficiência produtiva vs. avanço tecnológico',
    diagramKey: 'chart-fpp',
    statement:
      'O deslocamento do ponto c para o ponto b pode ser explicado exclusivamente pela ocorrência de um avanço tecnológico ou aumento da dotação de fatores.',
    officialAnswer: 'E',
    requiredLevel: 'Basico',
    prerequisites: ['Diferença entre movimento DE dentro PARA a fronteira vs. deslocamento DA própria fronteira'],
    quickVerdict:
      'ERRADO. O ponto $c$ é *interno* à FPP (ineficiente/ocioso) e o ponto $b$ já está sobre a FPP atual! Sair de $c$ para $b$ decorre da redução da ineficiência ou do desemprego de fatores — NÃO exige avanço tecnológico (que deslocaria toda a FPP para fora em direção a $a$).',
    howToSolve: {
      intuition:
        'Regra de ouro em FPP: ir de dentro da curva até a fronteira = ganhar eficiência/reduzir desemprego com a *mesma* tecnologia. Alcançar pontos além da fronteira (como $a$) = deslocar a FPP via crescimento ou inovação.',
      steps: [
        'Veja no gráfico que $c = (x_1, y_2)$ está abaixo/à esquerda da curva, isto é, na região de subutilização dos recursos.',
        'O ponto $b = (x_1, y_1)$ está na própria curva vigente (mesma fronteira tecnológica).',
        'Portanto, ir de $c$ para $b$ significa apenas passar a usar plenamente e eficientemente os recursos existentes — não exige nem é explicado por deslocamento tecnológico da FPP.'
      ],
      trapAlert:
        'Se o enunciado falasse em atingir o ponto $a$ (externo à curva), aí sim seria necessário avanço tecnológico ou acumulação de fatores.'
    },
    tags: ['fpp', 'eficiência', 'tecnologia']
  }
];
