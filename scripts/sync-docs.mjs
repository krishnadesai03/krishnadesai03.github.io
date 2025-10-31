import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const outDir = resolve(projectRoot, 'out');
const docsDir = resolve(projectRoot, 'docs');

if (!existsSync(outDir)) {
  console.error('The \'out\' directory does not exist. Run "npm run build" first.');
  process.exit(1);
}

rmSync(docsDir, { recursive: true, force: true });
mkdirSync(docsDir, { recursive: true });

cpSync(outDir, docsDir, { recursive: true });

writeFileSync(resolve(docsDir, '.nojekyll'), '');

console.log('Copied static export from "out" to "docs" for GitHub Pages.');

