# Changelog — Bacen 2027 · Plataforma do Treinador

Todas as versões marcantes do sistema são registradas aqui e associadas a tags Git no repositório (`v1.0.0`, `v1.1.0`, `v1.2.0`, `v1.3.0`, `v1.3.1`, `v1.3.2`, `v1.3.3`, `v1.3.4`, `v1.3.5`, `v1.3.6`, `v1.3.7`, `v1.3.8`, `v1.3.9`, `v1.3.10`, `v1.3.11`, `v1.3.12`).

Quando uma versão é marcada com `"archive": true` em `site/src/data/versions.json`, o workflow do GitHub Pages compila e mantém essa versão viva em `/Bacen2027/versions/<id>/` em paralelo à versão atual na raiz `/Bacen2027/`, compartilhando o mesmo progresso salvo (`localStorage` + GitHub Gist).

---

## [v1.3.12] — 2026-11-15 · Correção do Rodapé no Modo Noturno, Sépia e Suave
- Substituído o fundo branco fixo de `.site-footer` (`rgba(255, 255, 255, 0.86)`) pela variável temática `--footer-bg` em todos os 4 temas (`claro`, `suave`, `sepia` e `noturno`), eliminando o contraste claro no rodapé durante o modo noturno.

## [v1.3.11] — 2026-11-15 · Autorização Oficial Bacen 2027 (Portaria MGI nº 5.508/2026) (`67c9313`)
- Integração dos dados oficiais da **Portaria MGI nº 5.508, de 3 de julho de 2026** (DOU Seção 1 — Edição Extra nº 123-F, pág. 11) em [benchmarks2024.ts](site/src/data/benchmarks2024.ts), no **Painel & Plano** (Hero + Grupo 01), cabeçalho, rodapé e histórico de versões.
- Quadro completo das **170 vagas imediatas autorizadas**: **100 para Auditor (antigo Analista)** (`65 AC · 25 Negras · 5 PcD · 3 Indígenas · 2 Quilombolas`), **50 para Técnico (NI)** (`31 · 13 · 3 · 2 · 1`) e **20 para Procurador (NS)** (`13 · 5 · 1 · 1 · 0`).
- Prazos legais destacados no painel: publicação do edital em até **6 meses** (`03/01/2027`, com previsão BCB até `30/12/2026`) e mínimo de **2 meses** entre o edital e a 1ª prova.

## [v1.3.10] — 2026-11-15 · Correção de Colunas no Termômetro por Disciplina (`2aa5f8e`)
- Na aba **Evolução do Edital** (`Termômetro por Disciplina`), removida a regra de 5 colunas em telas `>= 1400px` que espremia os cards em ~115px dentro de um bloco de meia largura e causava vazamento de texto e sobra vertical abaixo.
- Novo grid responsivo com largura mínima de `240px` por card (exibindo 2 colunas × 5 linhas equilibradas em monitores grandes, sem vazamento e alinhado verticalmente ao Diagnóstico do Treinador).

## [v1.3.9] — 2026-11-15 · Painel & Plano Organizado em 4 Grupos Temáticos por Cor (`5408ba1`)
- Tela **Painel & Plano** estruturada em 4 grupos distintos com cabeçalho próprio, faixa superior colorida, atalho rápido no hero e opção de recolher/expandir:
  - **Grupo 01 (Azul):** Alvo Real & Régua Oficial 2024 + Insight Cebraspe lado a lado.
  - **Grupo 02 (Esmeralda):** Frequência de Estudo Real & Curva de Evolução Temporal.
  - **Grupo 03 (Âmbar):** Plano Semanal Adaptativo (0–4) & Fila de Ataque Imediato (Top 6).
  - **Grupo 04 (Roxo):** Perfil do Candidato, Notas BCB 2024, Sincronização GitHub Gist & Backups JSON.

## [v1.3.8] — 2026-11-15 · Ajuste Visual no Diagnóstico do Edital (`02ac0a8`)
- Na aba **Evolução do Edital** (`Diagnóstico do Treinador Dentro do Edital`), o botão **`Revisar aula`** passou a ficar empilhado logo abaixo da pílula de percentual, eliminando o excesso de espaço em branco e dando mais área útil ao texto dos itens.

## [v1.3.7] — 2026-11-15 · Transição Suave com Desfoque Entre Telas & Modais (`34d64b4`)
- Transição direcional em `360ms` com desfoque gradual (`blur(10px) -> blur(0px)`), leve deslizamento horizontal conforme a ordem da aba e curva exponencial suave ao trocar de tela no menu.
- Abertura suave com desfoque e escala leve também aplicada aos modais de Sincronização e Controle de Versões (respeitando `prefers-reduced-motion`).

## [v1.3.6] — 2026-11-15 · Menu em Linha Única Adaptativa (`>= 980px`) (`0b784ab`)
- Aproveita o novo cabeçalho enxuto para manter o menu de abas na **mesma linha superior** em telas a partir de `980px` de largura (notebooks, monitores médios e navegadores com zoom).
- Abaixo de `980px`, onde não há folga lateral suficiente, as abas descem automaticamente para uma segunda linha centralizada.

## [v1.3.5] — 2026-11-15 · Cabeçalho Minimalista, Logo Bacen & Avatar por Borda (`c423581`)
- Novo ícone SVG institucional do app (`favicon.svg`) usado simultaneamente como favicon do navegador e logo de **`BACEN 2027`**, removendo o subtítulo anterior e deixando a versão discreta.
- Botão de conforto visual reduzido para ícone + percentual de brilho.
- Perfil no topo substituído por avatar circular com as iniciais do usuário e borda colorida indicadora de sincronização (verde = sincronizado, âmbar = desatualizado, azul pulsante = sincronizando, vermelho = erro/conflito, neutro = local).

## [v1.3.4] — 2026-11-15 · Menu Superior Centralizado & Abas por Ícone com Hover (`b017d60`)
- Centralização completa do menu de abas na barra superior em desktops, notebooks e dispositivos móveis.
- Abas não selecionadas agora mostram apenas seus ícones, revelando o nome (e contadores de progresso) ao passar o mouse por cima; ao clicar, o nome permanece fixo na aba ativa.

## [v1.3.3] — 2026-11-15 · Frequência de Estudo Real & Calendário de Consistência (`16319a5`)
- Novo medidor anti-ociosidade: o dia só passa a contar como estudado após **2 minutos (`120s`) ativos** com a aba aberta e visível (pausa após `90s` sem atividade) somados a **pelo menos 3 interações reais** (cliques ou digitação na área de estudo/abas).
- Card **Frequência de Estudo Real** na aba *Visão Geral* mostrando dias validados, sequência atual (`streak`), maior sequência, tempo ativo total e progresso ao vivo de validação do dia de hoje.
- Mapa de calor/calendário de 12 semanas diferenciando acessos breves (amarelo claro) de dias validados e sessões de 30+ minutos, sincronizado entre dispositivos pelo GitHub Gist com notificação toast ao validar o dia.

## [v1.3.2] — 2026-11-15 · Detecção Multi-Dispositivo & Notificações de Sync (`771d14e`)
- Verificação automática no GitHub Gist ao abrir o site, ao voltar para a aba e periodicamente (`90s`) para identificar quando outro aparelho salvou progresso mais recente.
- Etiqueta do aparelho de origem (`ex.: Mac · Chrome`, `iPhone · Safari`, personalizável) salva no envelope do Gist + banner e pílula **`Desatualizado`** quando a nuvem está mais nova.
- Trava automática contra sobrescrita acidental (pausa o auto-push enquanto houver atualização pendente) e notificações toast discretas ao sincronizar.

## [v1.3.1] — 2026-11-15 · Barra Superior Recolhível (Modo Foco) (`e927922`)
- Botão discreto (`▲`) no canto direito da barra superior para recolher manualmente o cabeçalho e liberar espaço vertical durante os estudos.
- Botão flutuante discreto (`▼ Menu`) no topo direito para restaurar a navegação a qualquer momento (preferência salva no navegador).
- Ajuste automático do posicionamento fixo das barras laterais de aulas e comentários quando a barra está recolhida.

## [v1.3.0] — 2026-11-14 · Controle de Versões & Arquivo Pré-Edital (`fe7a6bb`)
- Central de **Controle de Versões & Histórico** acessível diretamente pelo site (cabeçalho e rodapé).
- Suporte a deploy multi-versão automático no GitHub Pages (`scripts/build-archived-versions.mjs` + `.github/workflows/deploy.yml`).
- Botão para abrir e usar versões anteriores congeladas com barra de retorno para a versão mais recente.
- Estrutura pronta para congelar a edição **Pré-Edital (Base 2024)** antes da atualização para o **Edital 2027**.

## [v1.2.0] — 2026-11-14 · Auto-Calibração 0–4 pela Prova 2024 (`753dab4`)
- Botão **`Auto-calibrar 0–4 pela Prova 2024`** no Painel & Plano com base na nota líquida Cebraspe (`+1 / -0,5 / 0`) em disciplinas com pelo menos 3 questões respondidas.
- Sugestão individual por matéria quando o nível `0–4` atual difere da nota líquida em 2024.
- **Fila de Ataque Imediato** reordenada pelos erros e questões em branco reais por tópico em 2024, com pílula de placar no card.

## [v1.1.0] — 2026-11-14 · Brilho Contínuo, Luz Quente & 4 Modos de Tela (`ebaf02b`)
- 4 modos graduais de leitura: **Claro Nítido**, **Claro Suave** (fundo fosco sem estourar a vista), **Papel Quente (Sépia)** e **Noturno**.
- Slider contínuo de **Brilho da Tela (`45%` a `100%`)** e **Filtro Quente contra luz azul (`0%` a `65%`)**.
- Preferências visuais persistidas localmente no dispositivo (`bacen2027_display_comfort_v1`).

## [v1.0.0] — 2026-11-13 · Plataforma Base Pré-Edital 2024 + Gist Sync (`d6749a9`)
- Painel & Plano Adaptativo semanal com benchmarks reais do Edital nº 10 / 2024 (AC, PcD e PP).
- Banco completo com 120 questões Cebraspe 2024 comentadas (P1 + P2), diagramas SVG e Simulado cronometrado.
- 37 aulas em Todo o Conteúdo, Oficina Discursiva P3/P4 e aba Evolução do Edital.
- Gráficos SVG de Evolução Temporal e sincronização privada na nuvem via GitHub Gist.
