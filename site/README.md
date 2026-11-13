# Bacen 2027 — Plataforma do Treinador (Analista em Economia e Finanças)

Aplicação web estática estruturada a partir dos editais e provas reais do concurso **Banco Central do Brasil (BCB) 2024 — Cargo 1: Analista em Economia e Finanças**, projetada para preparação rumo ao **Bacen 2027**.

## Recursos principais

- **Painel do Treinador & Calibração:** Autoavaliação por disciplina (níveis 0 a 4), inserção opcional das notas de 2024, alocação semanal adaptativa (`Peso Real × Lacuna`) e régua real de aprovação (cortes dos Editais nº 1 e nº 10).
- **Laboratório de Questões (120 itens reais 2024):** Leia cada enunciado + textos de apoio + gráficos/árvore de jogos em SVG, julgue (`C` / `E` / `Em Branco`), veja o gabarito definitivo (incluindo os 5 itens anulados/alterados), pré-requisitos, nível prévio exigido e aula passo a passo de resolução com LaTeX (`KaTeX`).
- **Todo o Conteúdo do Edital (37 tópicos):** Guia verticalizado cobrindo P1, P2 e P3/P4 com pré-requisitos, fórmulas, pegadinhas clássicas do Cebraspe, checklists de domínio e ponte direta para as questões reais.
- **Oficina Discursiva (P3 e P4):** Textos motivadores, padrão definitivo de resposta, espelho de quesitos, simulador da fórmula de penalidade gramatical (`ND`/`NSP`) e caderno de treino salvo no navegador.
- **Simulado Cronometrado + Caderno de Erros:** Simulações com cronômetro e correção oficial Cebraspe (`+1,00 / −0,50 / 0,00`).
- **Persistência Local + Backup JSON:** Salvo automaticamente em `localStorage`, com exportação e importação em `.json`.

## Rodando localmente

```bash
cd site
npm install
npm run dev
```

Ou testar o build de produção localmente:

```bash
npm run build
npm run preview
```

## Publicando no GitHub / GitHub Pages

O projeto já está configurado com `base: './'` no `vite.config.ts` para funcionar diretamente em qualquer repositório GitHub Pages:

1. Gere o bundle estático com `npm run build` (pasta `dist/`).
2. Inicialize o repositório Git na pasta `site/` (ou na raiz escolhendo o workflow adequado) e envie para o GitHub.
3. No repositório do GitHub, vá em **Settings → Pages** e selecione deploy via **GitHub Actions** (ou publique a pasta `site/dist`).
