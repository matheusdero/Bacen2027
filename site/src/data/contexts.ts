import { QuestionContext } from '../types';

export const QUESTION_CONTEXTS: Record<string, QuestionContext> = {
  'cb1a1-i': {
    id: 'cb1a1-i',
    title: 'Texto CB1A1-I — Economia de Plataforma e Trabalho',
    subtitle: 'Língua Portuguesa (Itens 1 a 13)',
    paragraphs: [
      'A emergência de uma grande variedade de plataformas digitais, desde o final da década de 1990, provocou uma mudança econômica radical e uma reorganização de mercados e arranjos de trabalho. A economia de plataforma não está apenas mudando a forma como o trabalho é realizado e remunerado. Os mercados de trabalho também estão se transformando drasticamente, levando a uma situação em que o “emprego padrão” é cada vez mais suplementado ou substituído por trabalho temporário “fora do padrão”, mediado por plataformas. Em um contexto de crescente instabilidade macroeconômica, de desregulamentação das relações de trabalho — em função do impacto disruptivo de tecnologias digitais na intermediação dessas relações —, verifica-se a emergência de novas formas de emprego “fora do padrão”, que reforçam diversos tipos de “flexibilidade” — temporal, espacial, gerencial e funcional, entre outras. Grande parte dessas novas formas de emprego está vinculada à mediação de plataformas digitais, que conectam ofertantes e demandantes de trabalho.',
      'As plataformas digitais facilitam a articulação entre ofertantes e demandantes de trabalho que, de outra forma, poderiam ter dificuldades para interagir entre si, tornando a realização de transações mais eficiente do que seria possível em relacionamentos bilaterais entre as partes, fornecendo infraestrutura e regras para sua realização. No âmbito dessas plataformas, a correspondência (matching) entre ofertantes e demandantes de trabalho pode ser feita de forma eficaz, por exemplo, por meio de algoritmos que diminuem a quantidade de tempo utilizado para encontrar trabalhadores adequados para tarefas específicas, além de oferecer a base para o controle e gerenciamento dessas tarefas.',
      'No entanto, a força de trabalho torna-se mais vulnerável, pois as leis trabalhistas ainda se baseiam em um antigo sistema “binário”, segundo o qual quem é empregado recebe direitos — por exemplo, aviso de demissão ou férias pagas —, mas para quem é contratado o acesso a esses direitos tende a ser restringido. Assim, se o modelo de plataformas de trabalho com a interveniência de uma gestão algorítmica oferece vantagens no que se refere à flexibilidade sobre formas convencionais de organização e gestão do trabalho, esse mesmo modelo suscita questões relevantes como a distribuição desigual de oportunidades, benefícios e riscos entre os agentes envolvidos, bem como os possíveis custos sociais advindos de uma eventual precarização das relações de trabalho.',
    ],
    source:
      'Herbert P. S. de Oliveira e Jorge N. de P. Britto. Gerenciamento e disciplina algorítmica: uma análise focalizada em plataformas de emprego de elevada qualificação. Economia e Sociedade, Campinas, v. 32, n.º 3 (79), 2023 (com adaptações).',
  },
  'cb1a2-i': {
    id: 'cb1a2-i',
    title: 'Texto CB1A2-I — Recomendação sobre a Ética da Inteligência Artificial',
    subtitle: 'Língua Portuguesa (Itens 14 a 25)',
    paragraphs: [
      'A Conferência Geral da Organização das Nações Unidas para a Educação, a Ciência e a Cultura (UNESCO), em sua 41.ª sessão, reconhece os impactos profundos e dinâmicos, positivos e negativos da inteligência artificial (IA) nas sociedades, no meio ambiente, nos ecossistemas e nas vidas humanas, inclusive na mente humana, em parte devido às novas formas como seu uso influencia o pensamento, a interação e a tomada de decisões e afeta a educação, as ciências humanas, sociais e naturais, a cultura, a comunicação e a informação.',
      'A Conferência considera que as tecnologias de IA podem ser de grande utilidade para a humanidade e podem beneficiar todos os países, mas também suscitam questões éticas fundamentais, por exemplo, em relação às distorções que podem incorporar e exacerbar, o que resultaria potencialmente em discriminação, desigualdade, exclusão digital, exclusão em geral e ameaça à diversidade cultural, social e biológica, além de divisões sociais ou econômicas. Suscitam, ainda, questões relativas à necessidade de transparência e compreensibilidade do funcionamento dos algoritmos e dos dados com que eles foram alimentados, além de seu potencial impacto sobre, entre outros aspectos, a dignidade humana; os direitos humanos e as liberdades fundamentais; a igualdade de gênero; a democracia; os processos sociais, econômicos, políticos e culturais; as práticas científicas e de engenharia; o bem-estar dos animais; o meio ambiente e os ecossistemas.',
      'A Conferência reconhece, ainda, que as tecnologias de IA podem aprofundar as divisões e as desigualdades existentes no mundo, dentro dos países e entre eles, e que a justiça, a confiança e a equidade devem ser defendidas para que nenhum país e nenhum indivíduo sejam deixados para trás, seja em razão do acesso justo às tecnologias de IA e de seus benefícios, seja em razão de medidas de proteção contra suas implicações negativas. Reconhecem-se as diferentes circunstâncias de diferentes países e respeita-se o desejo de algumas pessoas de não participar de todos os desenvolvimentos tecnológicos.',
      'Com base nas considerações acima, entre outras, a UNESCO aprova a presente Recomendação sobre a Ética da Inteligência Artificial.',
    ],
    source: 'UNESCO. Recomendação sobre a Ética da Inteligência Artificial (com adaptações).',
  },
  'le-va-x': {
    id: 'le-va-x',
    title: 'Distribuição de Probabilidade da Variável Aleatória X',
    subtitle: 'Noções de Lógica e Estatística (Itens 26 a 30)',
    paragraphs: [
      'Considerando que X representa uma variável aleatória com suporte x ∈ {-2, -1, 0, +1, +2}, cuja função de distribuição de probabilidade é dada no quadro abaixo, na qual c é uma constante real positiva, julgue os itens 26 a 30.',
    ],
    table: {
      headers: ['x', 'P(X = x)'],
      rows: [
        ['-2', '5c'],
        ['-1', 'c'],
        ['0', '2c'],
        ['+1', '3c'],
        ['+2', '4c'],
      ],
    },
  },
  'le-vw': {
    id: 'le-vw',
    title: 'Variáveis Contínuas Independentes V e W',
    subtitle: 'Noções de Lógica e Estatística (Itens 31 a 35)',
    paragraphs: [
      'Supondo que V e W sejam duas variáveis contínuas e mutuamente independentes, tais que P(V > 0) = 0,3 e P(W > 0) = 0,7, julgue os itens 31 a 35.',
    ],
  },
  'fe-contas': {
    id: 'fe-contas',
    title: 'Contas Nacionais — Economia Hipotética',
    subtitle: 'Fundamentos de Macroeconomia e Microeconomia (Itens 41 a 43)',
    paragraphs: [
      'Em determinada economia, o produto interno bruto (PIB) a preço de mercado foi mensurado no valor de $ 250, as rendas dos residentes e das firmas domésticas auferidas no exterior foram de $ 35, as rendas obtidas no país pelos não residentes e firmas estrangeiras foram de $ 60, a depreciação foi estimada em $ 30, os impostos indiretos totalizaram $ 80, enquanto as transferências indiretas (ou subsídios) foram de $ 20.',
    ],
  },
  'fe-precos': {
    id: 'fe-precos',
    title: 'Índice de Preços e Cesta Típica — País A',
    subtitle: 'Fundamentos de Macroeconomia e Microeconomia (Itens 44 a 46)',
    paragraphs: [
      'Um índice de preços é utilizado para mensurar uma típica cesta de produtos. No país A, consegue-se comprar 4 unidades de alimentos, 3 unidades de bens industriais e 5 unidades de serviços a cada ano. Os preços desses bens, nos anos de 2021, 2022 e 2023, são informados na tabela a seguir.',
    ],
    table: {
      headers: ['Ano', 'Alimentos ($)', 'Bens Industriais ($)', 'Serviços ($)'],
      rows: [
        ['2021', '1', '3', '10'],
        ['2022', '2', '6', '20'],
        ['2023', '3', '6', '25'],
      ],
    },
  },
  'fe-agro': {
    id: 'fe-agro',
    title: 'Oferta Agrícola no Brasil: Estruturalistas vs. Pastore e EMBRAPA',
    subtitle: 'Fundamentos de Microeconomia (Itens 47 e 48)',
    paragraphs: [
      'Durante o período do milagre econômico brasileiro, de 1968 a 1973, teóricos estruturalistas afirmavam que a oferta agrícola, nos países com baixo nível de renda, não respondia aos estímulos de preço e, consequentemente, um aumento da demanda resultava em uma inflação crônica. Nesse período, a economia crescia a taxas muito elevadas, o que puxava o crescimento da demanda por alimentos.',
      'Em obra publicada em 1971, Pastore provou que a oferta agrícola não era inelástica e, em geral, reagia aos preços, assim como o agricultor se comportava de modo racional.',
      'Em 2022, Vieira Filho, em sua proposta de discussão da modernização da agricultura no Brasil, mostrou a importância da construção do sistema nacional de inovação, no contexto da criação, em 1973, da Empresa Brasileira de Pesquisa Agropecuária (EMBRAPA), para aumentar a oferta de alimentos no país.',
    ],
  },
  'mic-jogos': {
    id: 'mic-jogos',
    title: 'Jogo Sequencial de Crédito entre Bancos B1 e B2',
    subtitle: 'Microeconomia (Itens 71 e 72)',
    paragraphs: [
      'Em um pequeno país, há dois bancos que ofertam serviço de crédito. Um deles, B1, é o líder. O outro, B2, é seguidor, tomando decisões sempre após B1 publicar as próprias decisões. Ao analisarem a possibilidade de reduzir a taxa de juros que cobram de seus clientes, B1 e B2 chegaram ao jogo sequencial representado a seguir, em que os pay-offs representam o ganho anual esperado, em milhões de unidades monetárias do país, após ambos tomarem suas decisões, sendo a primeira coordenada o ganho de B1, e a segunda coordenada, o ganho de B2.',
    ],
    diagramKey: 'tree-bancos',
  },
  'mic-kahneman': {
    id: 'mic-kahneman',
    title: 'Experimentos de Kahneman e Tversky (1979)',
    subtitle: 'Economia Comportamental (Itens 77 e 78)',
    paragraphs: [
      'Em artigo publicado em conjunto com Amos Tversky em 1979, Daniel Kahneman, ganhador do prêmio Nobel de Economia em 2002 por seus estudos em economia comportamental, descreve vários padrões de comportamento que se afastam do pressuposto racional da microeconomia clássica.',
      'No referido artigo, os estudiosos apresentam, como exemplo, dois experimentos em que os sujeitos da pesquisa deveriam escolher uma opção entre duas que lhes foram oferecidas.',
      'No primeiro experimento, os sujeitos deveriam escolher entre as opções A e B: opção A — ganhar $ 2.500 com probabilidade de 33%, $ 2.400 com probabilidade de 66%, ou $ 0 com probabilidade de 1%; opção B — ganhar $ 2.400 com certeza.',
      'No segundo experimento, os mesmos sujeitos deveriam escolher entre as opções C e D: opção C — ganhar $ 2.500 com probabilidade de 33%, $ 0 com probabilidade de 67%; opção D — ganhar $ 2.400 com probabilidade de 34%, $ 0 com probabilidade de 66%.',
      'No primeiro experimento, 82% dos participantes escolheram a opção B. No segundo experimento, 83% dos participantes escolheram a opção C; além disso, 61% dos participantes escolheram B e C, em conjunto.',
    ],
  },
  'fin-ettj': {
    id: 'fin-ettj',
    title: 'Estrutura a Termo das Taxas de Juros (Ross, Westerfield e Jaffe)',
    subtitle: 'Finanças (Itens 90 a 92)',
    paragraphs: [
      'A estrutura a termo das taxas de juros é um conceito que descreve a relação entre as taxas de juros (ou rendimentos) e os diferentes prazos até o vencimento dos títulos de dívida. Essa relação é tipicamente representada por uma curva de rendimentos, que mostra as taxas de juros para títulos de dívida de qualidade similar, mas com diferentes datas de vencimento.',
    ],
    source: 'Ross, Westerfield e Jaffe. Administração financeira. 25.ª ed. São Paulo: Atlas, 2002 (com adaptações).',
  },
  'ee-poisson': {
    id: 'ee-poisson',
    title: 'Amostra Aleatória Simples de Distribuição de Poisson(δ)',
    subtitle: 'Estatística e Econometria (Itens 99 a 102)',
    paragraphs: [
      'Supondo que os valores 3, 0, 0, 1, 4 constituam uma realização de uma amostra aleatória simples de tamanho n igual a 5 retirada de uma população com função de probabilidade abaixo, na qual δ > 0 denota o parâmetro a ser estimado e x ∈ {0, 1, 2, ...}, julgue os itens 99 a 102.',
    ],
    formulas: [{ label: 'Função de Probabilidade', latex: 'P(X = x) = \\frac{e^{-\\delta}\\delta^x}{x!}' }],
  },
};
