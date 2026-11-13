import { DiscursivePart } from '../types';

export const DISCURSIVAS_2024: DiscursivePart[] = [
  {
    id: 'P3',
    title: 'Prova Discursiva P3 — Dissertação (Atualidades)',
    subtitle: 'Valor: 30,00 pontos · Até 40 linhas · Turno da tarde',
    maxScore: 30,
    maxLines: 40,
    penaltyFactor: 6,
    presentationMax: 1.5,
    themeTitle: 'DESPERDÍCIO DE ALIMENTOS E PREJUÍZO À ECONOMIA GLOBAL: COMO REVERTER A SITUAÇÃO NO BRASIL',
    motivatingTexts: [
      {
        text: 'Domicílios de todos os continentes desperdiçaram mais de 1 bilhão de refeições por dia em 2022, enquanto 783 milhões de pessoas foram afetadas pela fome e um terço da humanidade enfrentou insegurança alimentar, de acordo com o Relatório do Índice de Desperdício de Alimentos 2024.',
        source: 'brasil.un.org (com adaptações)',
      },
      {
        text: 'No Brasil, ocorre muito desperdício antes mesmo de os alimentos chegarem aos consumidores. É preciso repensar a forma como a agropecuária é realizada, para minimizar as perdas nessa etapa.',
        source: 'ticket.com.br (com adaptações)',
      },
      {
        text: '“A perda pré-consumo, pré-processamento, tem que ser evitada, reduzida, com investimento em infraestrutura e educação”, afirma Paulo José do Amaral Sobral, professor titular do Departamento de Engenharia de Alimentos da Faculdade de Zootecnia e Engenharia de Alimentos da USP de Pirassununga.',
        source: 'jornal.usp.br (com adaptações)',
      },
    ],
    promptInstruction:
      'Considerando que os fragmentos de texto precedentes têm caráter unicamente motivador, redija um texto dissertativo a respeito do tema acima, abordando os 3 aspectos obrigatórios.',
    aspects: [
      {
        code: 'Quesito 2.1',
        description: 'Panorama geral do desperdício de alimentos',
        points: 9.5,
        maxConcept: 'Conceito 3',
        concepts: [
          'Conceito 0 – Não abordou o aspecto.',
          'Conceito 1 – Abordou o aspecto de forma superficial, sem desenvolvê-lo.',
          'Conceito 2 – Desenvolveu o aspecto de forma parcialmente adequada, tendo apresentado um panorama limitado do desperdício de alimentos.',
          'Conceito 3 – Desenvolveu adequadamente o aspecto, tendo apresentado um panorama geral sobre o desperdício de alimentos.',
        ],
      },
      {
        code: 'Quesito 2.2',
        description: 'Impactos do desperdício de alimentos na economia global',
        points: 9.5,
        maxConcept: 'Conceito 4',
        concepts: [
          'Conceito 0 – Não abordou o aspecto.',
          'Conceito 1 – Abordou o aspecto de forma superficial, sem desenvolvê-lo.',
          'Conceito 2 – Desenvolveu parcialmente, tendo citado e explicado apenas UM impacto.',
          'Conceito 3 – Desenvolveu parcialmente, tendo citado DOIS ou mais impactos, mas sem explicá-los por completo.',
          'Conceito 4 – Desenvolveu adequadamente, tendo citado DOIS ou mais impactos e os explicado por completo.',
        ],
      },
      {
        code: 'Quesito 2.3',
        description: 'Formas de reverter a situação do desperdício de alimentos no Brasil',
        points: 9.5,
        maxConcept: 'Conceito 4',
        concepts: [
          'Conceito 0 – Não abordou o aspecto.',
          'Conceito 1 – Abordou o aspecto de forma superficial, sem desenvolvê-lo.',
          'Conceito 2 – Desenvolveu parcialmente, tendo mencionado e detalhado apenas UMA forma.',
          'Conceito 3 – Desenvolveu parcialmente, tendo mencionado DUAS ou mais formas, mas sem detalhá-las por completo.',
          'Conceito 4 – Desenvolveu adequadamente, tendo mencionado DUAS ou mais formas e detalhado cada uma delas.',
        ],
      },
    ],
    officialAnswerPattern: [
      'Quanto ao desenvolvimento do tema, o candidato deve abordar os aspectos de maneira clara, coerente e coesa, demonstrando conhecer a atualidade do desperdício de alimentos como problema global que afeta economia, meio ambiente e segurança alimentar de milhões de pessoas, ocorrendo em todas as etapas da cadeia produtiva (da colheita ao consumidor final) e representando perda de recursos naturais, trabalho e energia.',
      'Impactos na economia global (citar DOIS ou mais e explicar por completo): pressão sobre a agricultura (necessidade de produzir mais para consumir mais); geração de resíduos e lixo de lenta degradação; emissão desnecessária de gases de efeito estufa na produção de alimentos não consumidos; aumento do custo do produto final e redução de lucratividade, dificultando o consumo pelas populações mais pobres; precariedade logística, entre outros.',
      'Formas de reverter no Brasil (mencionar DOIS ou mais e detalhar cada uma): uso integral dos alimentos em receitas para gerar menos resíduos; ações de estabelecimentos para doar alimentos não consumidos a pessoas em insegurança alimentar; empresas oferecendo orientações e benefícios que incentivem escolhas nutricionais econômicas; governos investindo em produção/tecnologia agropecuária, educação e conscientização, políticas de distribuição de renda e fiscalização pelos órgãos reguladores.',
    ],
    studyGuidance: {
      requiredLevel: 'Intermediario',
      prerequisites: [
        'Estrutura dissertativa em 4 ou 5 parágrafos (Introdução curta + 1 parágrafo por quesito + conclusão breve ou integrada)',
        'Domínio da norma culta (cada erro gramatical desconta 6 ÷ TL pontos!)',
      ],
      howToScoreHigh: [
        'Use conectores explícitos no início de cada parágrafo para sinalizar ao corretor qual quesito está sendo respondido.',
        'Nos quesitos 2.2 e 2.3, escolha exatamente 2 ou 3 itens e EXPLIQUE o mecanismo completo (causa → consequência) de cada um — listar vários sem detalhar derruba sua nota do Conceito 4 para o Conceito 3.',
        'Escreva entre 35 e 40 linhas para diluir eventuais desvios gramaticais na fórmula ND = NC - 6 × NE ÷ TL.',
      ],
      commonMistakes: [
        'Copiar trechos literais dos textos motivadores sem parafrasear ou ampliar a análise econômica.',
        'Deixar um dos dois impactos ou uma das duas soluções apenas citado de passagem ("além da logística e da educação"), perdendo pontuação cheia.',
      ],
    },
  },
  {
    id: 'P4',
    title: 'Prova Discursiva P4 — Situação-Problema (Específica: COSIF / CPC-25)',
    subtitle: 'Valor: 50,00 pontos · Até 80 linhas · Turno da tarde',
    maxScore: 50,
    maxLines: 80,
    penaltyFactor: 5,
    presentationMax: 2.5,
    themeTitle: 'FISCALIZAÇÃO DO BCB: PROVISÕES, PASSIVOS CONTINGENTES E ATIVOS CONTINGENTES (CPC-25)',
    motivatingTexts: [
      {
        text: 'Durante a fiscalização de determinada instituição financeira pelo Banco Central do Brasil, foram identificados os seguintes fatos, que ensejaram dúvidas em relação ao adequado cumprimento das normas brasileiras de contabilidade que tratam de provisões, passivos contingentes e ativos contingentes.',
      },
      {
        text: 'I — A instituição financeira utilizou contratos de swap de taxa de juros como proteção contra um empréstimo de taxa variável, contudo esses contratos estavam atrelados a uma variável econômica volátil e pouco comum, o que torna extremamente difícil e sujeita a incertezas a estimativa do valor justo. Embora a probabilidade de saída de recursos relativos aos compromissos resultantes desse contrato seja incerta, eles foram registrados como provisão nas demonstrações contábeis e notas explicativas da entidade.',
      },
      {
        text: 'II — A instituição financeira possui um investimento relevante na empresa de tecnologia Tech-X, atualmente envolvida em uma disputa judicial de patente. Existe a expectativa de uma compensação financeira substancial caso a Tech-X vença a disputa. A instituição não reconheceu nem prestou qualquer informação sobre o evento nos balanços, tampouco apresentou notas explicativas a tal respeito. O processo relativo à patente está em discussão em um tribunal, com maioria dos votos favorável à demanda da Tech-X, mas ainda há incerteza sobre o resultado final desse processo.',
      },
    ],
    promptInstruction:
      'Considerando a situação hipotética apresentada, esclareça, fundamentadamente, se os procedimentos contábeis descritos em I e II obedecem às normas brasileiras de contabilidade que tratam de provisões, passivos contingentes e ativos contingentes [15,50 pts] e responda aos 4 quesitos a seguir.',
    aspects: [
      {
        code: 'Quesito 2.1',
        description: 'Defina provisão, estabelecendo a relação entre provisão e passivo.',
        points: 8.0,
        maxConcept: 'Conceito 4',
        concepts: [
          'Conceito 0 – Não atendeu ou fez de forma totalmente equivocada.',
          'Conceito 1 – Limitou-se à definição de provisão ou à sua relação com passivo.',
          'Conceito 2 – Definiu provisão e estabeleceu relação com passivo de forma superficial.',
          'Conceito 3 – Parcialmente correta, com algum equívoco conceitual.',
          'Conceito 4 – Definiu corretamente provisão e estabeleceu corretamente a relação entre provisão e passivo.',
        ],
      },
      {
        code: 'Quesito 2.2',
        description: 'Defina ativo e passivo contingente.',
        points: 8.0,
        maxConcept: 'Conceito 4',
        concepts: [
          'Conceito 0 – Não atendeu ou fez de forma totalmente equivocada.',
          'Conceito 1 – Limitou-se à definição apenas de ativo ou apenas de passivo contingente.',
          'Conceito 2 – Definiu ambos de forma superficial.',
          'Conceito 3 – Parcialmente correta, com algum equívoco conceitual.',
          'Conceito 4 – Definiu corretamente ativo e passivo contingente.',
        ],
      },
      {
        code: 'Quesito 2.3',
        description: 'Discorra sobre a diferença entre provisão e passivo contingente.',
        points: 8.0,
        maxConcept: 'Conceito 3',
        concepts: [
          'Conceito 0 – Não atendeu ou fez de forma totalmente equivocada.',
          'Conceito 1 – Discorreu de forma superficial.',
          'Conceito 2 – Parcialmente correta, com algum equívoco conceitual.',
          'Conceito 3 – Discorreu corretamente acerca da diferença entre provisão e passivo contingente.',
        ],
      },
      {
        code: 'Quesito 2.4',
        description: 'Discorra sobre reconhecimento e mensuração de uma provisão.',
        points: 8.0,
        maxConcept: 'Conceito 4',
        concepts: [
          'Conceito 0 – Não atendeu ou fez de forma totalmente equivocada.',
          'Conceito 1 – Discorreu corretamente sobre apenas um dos procedimentos.',
          'Conceito 2 – Discorreu sobre os dois procedimentos de forma superficial.',
          'Conceito 3 – Parcialmente correta, com algum equívoco.',
          'Conceito 4 – Discorreu corretamente sobre os dois procedimentos relacionados à provisão (reconhecimento e mensuração).',
        ],
      },
      {
        code: 'Quesito 2.5',
        description: 'Posicionamento fundamentado sobre os procedimentos contábeis descritos em I e II.',
        points: 15.5,
        maxConcept: 'Conceito 4',
        concepts: [
          'Conceito 0 – Não se posicionou sobre nenhum dos fatos ou o fez de forma totalmente equivocada.',
          'Conceito 1 – Posicionamento correto apenas sobre um fato.',
          'Conceito 2 – Adequado sobre os dois fatos, porém superficial.',
          'Conceito 3 – Adequado sobre os dois fatos, porém parcialmente correto.',
          'Conceito 4 – Posicionamento totalmente correto sobre os dois fatos (I e II).',
        ],
      },
    ],
    officialAnswerPattern: [
      '1) Provisão é um passivo de prazo ou valor incertos — obrigação presente, resultante de eventos passados, legal ou não formalizada/construtiva, cuja liquidação espera-se que resulte em saída de recursos e que pode ser estimada de forma confiável.',
      '2) Ativo contingente é um direito (ativo) possível, resultante de eventos passados, cuja existência será confirmada apenas pela ocorrência ou não de um ou mais eventos futuros incertos não inteiramente sob controle da entidade. Passivo contingente é uma obrigação possível resultante de eventos passados (ou obrigação presente que não satisfaz os critérios de reconhecimento por saída não ser provável ou por falta de estimativa confiável).',
      '3) Diferença principal: na provisão há obrigação presente e é provável a saída de recursos (com estimativa confiável), sendo reconhecida no balanço; já o passivo contingente é apenas obrigação possível (ou sem estimativa confiável/probabilidade de saída), não sendo reconhecido no balanço (apenas divulgado em notas explicativas, salvo se remoto).',
      '4) Reconhecimento de provisão exige 3 requisitos cumulativos: (a) obrigação presente decorrente de evento passado; (b) saída provável de recursos; (c) estimativa confiável do montante. Mensuração: melhor estimativa do desembolso exigido para liquidar a obrigação na data do balanço, considerando riscos e incertezas (e valor presente quando relevante).',
      '5) Fato I (NÃO obedece ao CPC-25): registrou como provisão compromissos de swap cuja estimativa é extremamente difícil/incerta e cuja probabilidade de saída de recursos é incerta — não atende aos critérios de provisão (ausência de probabilidade de saída e ausência de estimativa confiável), devendo ser tratado como passivo contingente (ou instrumento financeiro conforme norma própria, mas à luz do CPC-25 não cabe provisão). Fato II (NÃO obedece integralmente ao CPC-25): a entidade corretamente NÃO reconheceu o ativo contingente nas demonstrações contábeis, pois sua realização é incerta; contudo, dada a vantagem em votos favoráveis (entrada de benefícios econômicos provável), deveria ter divulgado breve descrição da natureza do ativo contingente em notas explicativas na data do balanço e, quando praticável, estimativa de seus efeitos financeiros.',
    ],
    studyGuidance: {
      requiredLevel: 'Avancado',
      prerequisites: [
        'Tópico 7 de Contabilidade COSIF: CPC-25 / Resolução CMN nº 3.823/2009',
        'Capacidade de separar análise de caso concreto (Fatos I e II) dos quesitos conceituais (1 a 4)',
      ],
      howToScoreHigh: [
        'Estruture o texto em 5 blocos bem demarcados (ou na ordem: 1 a 4 + análise dos fatos I e II, ou análise dos fatos seguida dos 4 pontos).',
        'No Fato II, não caia na armadilha de dizer apenas "está certo porque não reconheceu": o erro da IF foi omitir as NOTAS EXPLICATIVAS quando a maioria dos votos já sinaliza entrada provável!',
        'Use até 70–80 linhas com letra legível e termos técnicos precisos ("obrigação presente", "evento passado", "estimativa confiável", "notas explicativas").',
      ],
      commonMistakes: [
        'Confundir o item 115 da P2 (que também caiu nessa mesma prova!) dizendo que passivo contingente é "espécie de provisão".',
        'Esquecer de citar os três requisitos cumulativos do reconhecimento da provisão ou omitir a mensuração ("melhor estimativa na data do balanço").',
      ],
    },
  },
];
