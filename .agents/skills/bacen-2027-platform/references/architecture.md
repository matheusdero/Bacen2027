# Arquitetura Técnica — Plataforma Bacen 2027

## 1. Estrutura de Camadas em `site/src/`

### Camada de Dados (`site/src/data/`)
- **`benchmarks2024.ts`:**
  - `SUBJECTS`: 10 disciplinas oficiais (4 de P1, 5 de P2, 1 de Discursivas P3/P4) com pesos, pré-requisitos e cores.
  - `EXAM_BENCHMARKS_2024`: cortes reais do Edital nº 10/2024 para Ampla Concorrência (`AC`), `PcD` e `PP`, além das estatísticas de gabarito (`+1 / -0,5 / 0` e questões anuladas/alteradas).
  - `BACEN_2027_AUTHORIZATION`: dados oficiais da **Portaria MGI nº 5.508, de 3 de julho de 2026** (DOU Edição Extra nº 123-F, pág. 11; Processo nº `18600.058600/2025-20`), com as `170` vagas imediatas (`100` Auditor ex-Analista, `50` Técnico, `20` Procurador), distribuição de cotas e prazos (`03/01/2027` limite legal do edital; mínimo `2 meses` até a 1ª prova).
  - `KNOWLEDGE_LEVEL_LABELS`: escala `0–4` de autoavaliação por disciplina.
- **`syllabus.ts` & `editalChecklist.ts`:** conteúdo programático completo em aulas estruturadas e rastreador oficial do edital por tópico/subitem.
- **`questionsP1.ts`, `questionsP2.ts`, `questionsP2Part1.ts`, `questionsP2Part2.ts`, `contexts.ts`:** banco completo dos `120` itens Cebraspe 2024 comentados passo a passo, com fórmulas em LaTeX (`KaTeX`) e apoio de diagramas SVG (`ExamDiagrams.tsx`).
- **`discursivas.ts`:** oficina prática para `P3` (Atualidades — 30 pts) e `P4` (Conhecimentos Específicos — 50 pts) com espelho oficial de correção.
- **`versions.json`:** catálogo de releases lido tanto em runtime (pelo `VersionHistoryModal` e pelo rodapé/cabeçalho) quanto em build-time (por `scripts/build-archived-versions.mjs`).

### Hooks & Regras de Negócio (`site/src/hooks/` e `site/src/utils/`)
- **`useTrainerState.ts`** (chave `bacen_2027_econ_trainer_v1`):
  - Gerencia `TrainerProfile`: meta de concorrência (`AC | PP | PcD`), horas semanais (`6–42h`), notas opcionais de 2024, níveis `0–4` por disciplina, tentativas no Lab de Questões, status/baterias do Edital, rascunhos discursivos, marcos de evolução e `studyDays`.
  - `computeCebraspeScore`: calcula nota líquida (`+1 / -0,5 / 0`) considerando anuladas oficiais.
  - `buildAdaptivePlan`: distribui horas semanais pelo critério **Peso Real na Prova × Lacuna de Conhecimento (`0–4`)**.
  - `computeSubjectCalibrationFromExam`: sugere recalibração `0–4` quando há pelo menos `3` questões respondidas por matéria.
  - `getTopicPriorityOrder`: ordena a **Fila de Ataque Imediato (Top 6)** cruzando lacunas reais da prova 2024 (erros e em branco) com peso no edital.
  - `computeStudyDaysStats`: calcula dias validados, `streak` atual, recorde de sequência e minutos ativos acumulados.
- **`useStudyActivityTracker.ts`:**
  - Medidor anti-ociosidade em tempo real. Um dia só é validado como dia efetivo de estudo após atingir simultaneamente `MIN_STUDY_SECONDS = 120` (com a aba visível e pausa automática após `90s` sem atividade) e `MIN_STUDY_INTERACTIONS = 3` (cliques ou digitação reais).
- **`useGitHubSync.ts` + `githubSync.ts`** (chaves `bacen_2027_github_sync_v1` e `bacen2027_device_id_v1`):
  - Persiste `bacen-2027-trainer-profile.json` em um GitHub Gist privado.
  - Inclui `deviceId`, `deviceLabel` e timestamps no envelope para detectar quando outro aparelho está mais adiantado (`stale`), exibindo banner, badge no avatar e toast discreto, além de pausar o auto-push para impedir sobrescrita acidental.
  - Dispara verificação ao abrir a página, ao voltar o foco/visibilidade para a aba e em intervalo de `90s`.
- **`useDisplayComfort.ts`** (chave `bacen2027_display_comfort_v1`):
  - Controla os 4 temas (`claro`, `suave`, `sepia`, `noturno`) via atributo `data-theme`, brilho contínuo (`45%`–`100%`) e filtro quente contra luz azul (`0%`–`65%`).

### Camada de Interface (`site/src/components/` + `App.tsx`)
- **`App.tsx`:** barra superior centralizada responsiva, recolhível (modo foco), branding institucional (`public/favicon.svg`), abas com hover-reveal em telas largas e linha única adaptativa (`>= 980px`), transição direcional com `blur(10px) -> blur(0px)` em `360ms` entre telas/modais (`prefers-reduced-motion` respeitado).
- **6 Abas Principais:**
  1. `TrainerDashboard.tsx` (*Painel & Plano*): Hero + KPIs + atalhos rápidos para 4 grupos temáticos por cor com colapso individual (**01 Azul** Autorização 2027 & Régua 2024, **02 Esmeralda** Frequência `StudyConsistencyCard` & Evolução `EvolutionTimelineCard`, **03 Âmbar** Plano Semanal & Fila de Ataque, **04 Roxo** Perfil, Notas 2024 & Sync/Backups).
  2. `EditalTrackerView.tsx` (*Evolução do Edital*): Termômetro por Disciplina (grid `minmax(240px, 1fr)` equilibrado em 2 colunas nos blocos de meia largura), Diagnóstico do Treinador Dentro do Edital (botão `Revisar aula` alinhado abaixo da pílula de `%`) e registro de baterias por subitem.
  3. `QuestionLabView.tsx` (*Questões + Aulas*): 120 itens reais comentados com filtros, pré-requisitos e diagramas.
  4. `SyllabusView.tsx` (*Todo o Conteúdo*): aulas teóricas completas em Markdown/KaTeX com barra lateral sincronizada ao modo foco.
  5. `DiscursiveWorkshopView.tsx` (*Discursivas P3/P4*): editor com contador de linhas e comparador com padrão definitivo.
  6. `SimulatorView.tsx` (*Simulado 2024*): modo P1, P2 ou Completo cronometrado com registro direto na linha do tempo.

---

## 2. Deploy Multi-Versão no GitHub Pages

1. `.github/workflows/deploy.yml` dispara em todo `push` para `main` (com `fetch-depth: 0` para acesso completo a commits/tags históricas).
2. Compila o app atual em `site/dist/`.
3. Executa `node scripts/build-archived-versions.mjs`, que lê `site/src/data/versions.json`, abre cada entrada com `"archive": true` via `git worktree` em diretório temporário, reutiliza `node_modules` se o `package-lock.json` for idêntico, compila e copia para `site/dist/versions/<id>/` injetando um banner flutuante para voltar à raiz (`../../`).
4. Envia `site/dist/` inteiro para o GitHub Pages.
