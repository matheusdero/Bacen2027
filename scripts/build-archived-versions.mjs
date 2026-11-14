import { execSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const siteRoot = path.join(repoRoot, 'site');
const versionsFile = path.join(siteRoot, 'src', 'data', 'versions.json');
const mainDistDir = path.join(siteRoot, 'dist');
const archiveOutRoot = path.join(mainDistDir, 'versions');

function buildReturnBannerSnippet(entry) {
  const safeId = String(entry.id).replace(/[^a-zA-Z0-9._-]/g, '');
  const safeTitle = String(entry.title || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return `
<div id="bacen-archive-banner" style="position:fixed;right:14px;bottom:14px;z-index:2147483000;display:flex;align-items:center;gap:10px;padding:9px 13px;border-radius:999px;background:rgba(11,31,58,0.95);color:#f8fafc;border:1px solid rgba(147,197,253,0.45);box-shadow:0 12px 30px rgba(0,0,0,0.35);font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif;font-size:12px;line-height:1.2;backdrop-filter:blur(8px);max-width:calc(100vw - 28px);">
  <span style="display:inline-flex;align-items:center;gap:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
    <strong style="color:#fbbf24;">Arquivo ${safeId}</strong>
    <span style="opacity:0.85;" title="${safeTitle}">(versão anterior)</span>
  </span>
  <a href="../../" style="background:#2563eb;color:#ffffff;text-decoration:none;font-weight:700;padding:5px 10px;border-radius:999px;white-space:nowrap;">Voltar à Atual</a>
  <button type="button" onclick="var b=document.getElementById('bacen-archive-banner');if(b)b.remove();" aria-label="Fechar aviso" style="background:transparent;border:none;color:#cbd5e1;cursor:pointer;font-size:15px;line-height:1;padding:0 2px;">&times;</button>
</div>
`;
}

function main() {
  if (!fs.existsSync(mainDistDir)) {
    throw new Error('site/dist não encontrado. Execute "npm run build" em site/ antes deste script.');
  }

  const versions = JSON.parse(fs.readFileSync(versionsFile, 'utf8'));
  const toArchive = versions.filter((v) => v && v.archive && v.ref && v.id);

  fs.mkdirSync(archiveOutRoot, { recursive: true });
  const mainLockPath = path.join(siteRoot, 'package-lock.json');
  const mainLock = fs.existsSync(mainLockPath) ? fs.readFileSync(mainLockPath, 'utf8') : '';
  const mainNodeModules = path.join(siteRoot, 'node_modules');

  for (const entry of toArchive) {
    const safeId = String(entry.id).replace(/[^a-zA-Z0-9._-]/g, '');
    const wtDir = fs.mkdtempSync(path.join(os.tmpdir(), `bacen-ver-${safeId}-`));
    console.log(`\n==> Compilando versão arquivada ${safeId} (ref: ${entry.ref})...`);

    try {
      execSync(`git -C "${repoRoot}" worktree add --detach "${wtDir}" "${entry.ref}"`, {
        stdio: 'inherit',
      });

      const wtSite = path.join(wtDir, 'site');
      const wtLockPath = path.join(wtSite, 'package-lock.json');
      const wtLock = fs.existsSync(wtLockPath) ? fs.readFileSync(wtLockPath, 'utf8') : '';
      const wtNodeModules = path.join(wtSite, 'node_modules');

      if (wtLock && mainLock && wtLock === mainLock && fs.existsSync(mainNodeModules)) {
        fs.symlinkSync(mainNodeModules, wtNodeModules, 'dir');
      } else {
        execSync('npm ci', { cwd: wtSite, stdio: 'inherit' });
      }

      execSync('npm run build', { cwd: wtSite, stdio: 'inherit' });

      const targetDir = path.join(archiveOutRoot, safeId);
      fs.rmSync(targetDir, { recursive: true, force: true });
      fs.cpSync(path.join(wtSite, 'dist'), targetDir, { recursive: true });

      const archivedHtmlPath = path.join(targetDir, 'index.html');
      if (fs.existsSync(archivedHtmlPath)) {
        let html = fs.readFileSync(archivedHtmlPath, 'utf8');
        const snippet = buildReturnBannerSnippet(entry);
        if (html.includes('</body>')) {
          html = html.replace('</body>', `${snippet}</body>`);
        } else {
          html += snippet;
        }
        fs.writeFileSync(archivedHtmlPath, html, 'utf8');
      }

      console.log(`==> Versão ${safeId} pronta em site/dist/versions/${safeId}/`);
    } finally {
      try {
        execSync(`git -C "${repoRoot}" worktree remove --force "${wtDir}"`, {
          stdio: 'ignore',
        });
      } catch {
        // fallback cleanup below
      }
      fs.rmSync(wtDir, { recursive: true, force: true });
    }
  }
}

main();
