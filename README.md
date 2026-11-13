# Bacen 2027 — Plataforma de Estudo & Treinador (Economia e Finanças)

Repositório de preparação para o concurso **Banco Central do Brasil (Cargo 1 — Analista em Economia e Finanças)** usando engenharia reversa dos editais e provas oficiais de 2024 (`P1`, `P2`, `P3` e `P4`).

## Estrutura

- `Edital 2024 e Informações/` — Editais nº 1, 4, 8, 9 e 10 (retificações, conteúdo programático e notas de corte reais).
- `Provas Bacen 2024/` — Cadernos de prova, gabaritos definitivos e padrões discursivos oficiais P3/P4.
- `site/` — Plataforma web React + TypeScript + Vite + KaTeX com:
  - **Painel & Plano Adaptativo** + **Curva de Evolução Temporal & Marcos**
  - **Evolução do Edital** (`125` subitens oficiais em `33` blocos temáticos, controle de questões, `%` acerto e histórico de baterias)
  - **Questões + Aulas** (`120` itens reais de 2024 comentados com pré-requisitos e fórmulas KaTeX)
  - **Todo o Conteúdo** (`49` aulas teóricas estruturadas)
  - **Discursivas P3/P4** + **Simulado 2024** (`+1,00 / −0,50 / 0,00`)
  - **Sync na Nuvem (GitHub Gist Privado)** + backup `.json`

## GitHub Pages

O workflow `.github/workflows/deploy.yml` compila automaticamente `site/` e publica `site/dist` no GitHub Pages sempre que houver push na branch `main`:

- URL esperada após ativar **Settings → Pages → Source: GitHub Actions**:
  `https://matheusdero.github.io/Bacen2027/`
