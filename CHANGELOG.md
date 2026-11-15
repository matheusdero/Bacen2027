# Changelog — Bacen 2027 · Plataforma do Treinador

Todas as versões marcantes do sistema são registradas aqui e associadas a tags Git no repositório (`v1.0.0`, `v1.1.0`, `v1.2.0`, `v1.3.0`, `v1.3.1`, `v1.3.2`).

Quando uma versão é marcada com `"archive": true` em `site/src/data/versions.json`, o workflow do GitHub Pages compila e mantém essa versão viva em `/Bacen2027/versions/<id>/` em paralelo à versão atual na raiz `/Bacen2027/`, compartilhando o mesmo progresso salvo (`localStorage` + GitHub Gist).

---

## [v1.3.2] — 2026-11-15 · Detecção Multi-Dispositivo & Notificações de Sync
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
