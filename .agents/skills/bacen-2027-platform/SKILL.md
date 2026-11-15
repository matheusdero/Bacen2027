---
name: bacen-2027-platform
description: >-
  Use this skill whenever maintaining, expanding, debugging, or releasing new
  versions of the Bacen 2027 Trainer platform (React + TypeScript + Vite +
  KaTeX + GitHub Pages + Gist Sync). Covers workspace layout, data & storage
  compatibility, Cebraspe rules, official 2024/2026 exam data, multi-version
  archiving, QA verification, and release workflow.
---

# Bacen 2027 — Guia Completo da Plataforma & Workflow de Desenvolvimento

Plataforma web de estudo e engenharia reversa para o concurso do **Banco Central do Brasil (Auditor — ex-Analista · Economia e Finanças)**, construída sobre os **Editais e Provas de 2024** (`P1`, `P2`, `P3`, `P4`) e atualizada com a **Autorização Oficial Bacen 2027 (Portaria MGI nº 5.508, de 03/07/2026)**.

---

## 1. Mapa do Repositório

| Caminho | Função |
| :--- | :--- |
| `site/` | Aplicação **React 18 + TypeScript 5.6 + Vite 5.4 + KaTeX + Lucide** (`base: './'`). |
| `site/src/data/` | Dados estáticos: `benchmarks2024.ts` (cortes 2024 + `BACEN_2027_AUTHORIZATION`), `syllabus.ts`, `editalChecklist.ts`, `questionsP1.ts`, `questionsP2*.ts`, `contexts.ts`, `discursivas.ts`, `versions.json`. |
| `site/src/hooks/` | Estado (`useTrainerState.ts`), sync multi-dispositivo (`useGitHubSync.ts`), rastreador anti-ociosidade (`useStudyActivityTracker.ts`) e conforto visual (`useDisplayComfort.ts`). |
| `site/src/components/` | Views das 6 abas, gráficos SVG, diagramas SVG, modais de Sync e Histórico de Versões. |
| `site/src/utils/githubSync.ts` | Cliente da API de GitHub Gists Privados + identificação local de dispositivo. |
| `site/src/index.css` | Folha de estilos única com variáveis CSS para 4 temas (`claro`, `suave`, `sepia`, `noturno`), animações de transição e responsividade. |
| `Edital 2024 e Informações/` | PDFs originais do Edital nº 1 a 10/2024, demanda e justificativas Cebraspe. |
| `Provas Bacen 2024/` | Cadernos de prova P1/P2/discursiva, gabaritos preliminares e padrão definitivo P3/P4. |
| `scripts/build-archived-versions.mjs` | Gera builds paralelos em `site/dist/versions/<id>/` via `git worktree` para entradas com `"archive": true` em `versions.json`. |
| `.github/workflows/deploy.yml` | CI/CD automático para GitHub Pages (`https://matheusdero.github.io/Bacen2027/`) a cada push na branch `main`. |
| `CHANGELOG.md` | Registro cronológico oficial de releases e tags Git. |

---

## 2. Regras de Ouro & Compatibilidade

1. **Nunca quebrar o progresso salvo dos usuários:**
   - Mantenha inalteradas as chaves de `localStorage`:
     - Perfil & estudo: `bacen_2027_econ_trainer_v1`
     - Config do GitHub Sync: `bacen_2027_github_sync_v1`
     - ID do dispositivo: `bacen2027_device_id_v1`
     - Conforto visual / tema: `bacen2027_display_comfort_v1`
   - Ao adicionar novos campos em `TrainerProfile` (`site/src/types.ts`), sempre forneça fallback seguro em `DEFAULT_PROFILE` e `normalizeProfile()` (`site/src/hooks/useTrainerState.ts`) para não corromper backups `.json` ou Gists antigos.
   - Não renomeie valores persistidos existentes (ex.: `targetTrack: 'AC' | 'PP' | 'PcD'`).
2. **Proteção contra sobrescrita multi-dispositivo:**
   - Quando outro aparelho envia progresso mais novo para o GitHub Gist (`status === 'stale'`), o auto-push local fica travado até o usuário baixar ou resolver explicitamente o conflito. Nunca remova essa trava.
3. **Suporte obrigatório aos 4 modos de leitura:**
   - Todo CSS novo em `site/src/index.css` deve usar custom properties (`--surface`, `--surface-alt`, `--surface-subtle`, `--surface-tint`, `--border`, `--text`, `--text-muted`, `--navy`, `--primary`, `--emerald`, `--amber`, `--danger`) em vez de cores hex fixas para funcionar em **Claro**, **Claro Suave**, **Papel Quente (Sépia)** e **Noturno**.
4. **Fidelidade aos dados oficiais:**
   - **Regra Cebraspe:** `+1,00` (acerto), `-0,50` (erro), `0,00` (em branco), mantendo questões anuladas contabilizadas conforme gabarito oficial de 2024.
   - **Autorização 2026/2027 (`Portaria MGI nº 5.508/2026`):** `170` vagas totais no BCB (`100` Auditor ex-Analista, `50` Técnico, `20` Procurador), edital até `03/01/2027` (previsão BCB até `30/12/2026`) e mínimo de `2 meses` até a 1ª prova. Ao sair o edital oficial 2027, arquive a última versão pré-edital antes de alterar conteúdos programáticos.
5. **Base relativa do Vite:**
   - Preserve `base: './'` em `site/vite.config.ts` para que tanto a raiz `/Bacen2027/` quanto as versões arquivadas `/Bacen2027/versions/<id>/` funcionem sem caminhos quebrados.

---

## 3. Workflow Padrão de Alteração e Release (`vX.Y.Z`)

Sempre que implementar uma melhoria, correção visual ou atualização de edital:

1. **Implementar com tipagem limpa:** faça as alterações em `site/src/`.
2. **Sincronizar metadados da versão (3 arquivos):**
   - `site/package.json`: atualizar `"version": "X.Y.Z"`.
   - `site/src/data/versions.json`: adicionar a nova entrada no topo com `"isCurrent": true`, `"archive": false`, `"ref": "main"`. Se quiser congelar a versão imediatamente anterior para acesso histórico em `/versions/<id>/`, atualize a anterior para `"ref": "<commit_sha_da_tag_anterior>"`, `"isCurrent": false`, `"archive": true`.
   - `CHANGELOG.md`: adicionar a tag na linha de resumo e criar a seção `## [vX.Y.Z] — AAAA-MM-DD · Título`.
3. **Validar build completo + arquivos de versão:**
   ```bash
   npm run build --prefix "site" && node scripts/build-archived-versions.mjs
   ```
   Confirme saída `0`, ausência de erros de `tsc -b` e geração correta de `site/dist/versions/<id>/`.
4. **Verificação visual no navegador (`vite preview`):**
   - Suba `npm run preview --prefix "site" -- --port 4173 --host 127.0.0.1`.
   - Teste desktop (`1440×900` e/ou `1920×1080`) e mobile (`390×844`).
   - Valide versão exibida no cabeçalho, comportamento interativo alterado, `document.documentElement.scrollWidth <= window.innerWidth` (sem estouro horizontal) e `0` erros no console.
5. **Publicar release no GitHub:**
   ```bash
   git add -A
   git commit -m "Descrição clara da alteração (vX.Y.Z)"
   git tag -a vX.Y.Z -m "vX.Y.Z - Título resumido"
   git push origin main --tags
   ```
   O workflow `.github/workflows/deploy.yml` fará o build completo (incluindo todas as versões marcadas com `"archive": true`) e publicará no GitHub Pages.

---

## 4. Referências Aprofundadas

- **Arquitetura técnica, chaves, hooks e fórmulas:** leia [references/architecture.md](./references/architecture.md)
- **Histórico completo de todas as entregas (`v1.0.0` → `v1.3.11`):** leia [references/versions-and-history.md](./references/versions-and-history.md)
