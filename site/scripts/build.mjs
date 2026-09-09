import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile, cp, rm, access } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

// This portfolio is a static document. Render React at build time so GitHub
// Pages needs neither a server nor browser-side JavaScript.
const root = process.cwd();
const output = resolve(root, 'out');
const intermediate = resolve(root, '.build');
for (const directory of [output, intermediate]) {
  if (!directory.startsWith(root + sep)) throw new Error('Output must stay inside the site directory.');
  await rm(directory, { recursive: true, force: true });
}
await build({
  configFile: false,
  plugins: [react()],
  define: { 'process.env.NODE_ENV': JSON.stringify('production') },
  build: { ssr: 'scripts/render.tsx', outDir: intermediate, copyPublicDir: false, minify: false },
});
const { render, content } = await import(pathToFileURL(resolve(intermediate, 'render.js')).href);
await mkdir(output, { recursive: true });
await cp(resolve(root, 'public'), output, { recursive: true });
const css = (await readFile(resolve(root, 'app/globals.css'), 'utf8'))
  .replace(/^@import.*;\r?\n/gm, '')
  .replace(/^@custom-variant.*;\r?\n/gm, '')
  .replace(/^@theme inline \{[^\n]*\}\r?\n/gm, '');
await writeFile(resolve(output, 'styles.css'), css);
await writeFile(resolve(output, 'index.html'), render());
await writeFile(resolve(output, '.nojekyll'), '');
for (const file of [content.profile.resume, ...content.projects.flatMap(p => p.images.map(i => i.src))]) {
  if (!file || file.includes('..') || file.includes('\\') || /^[a-z]+:/i.test(file)) throw new Error(`Use a public asset path: ${file}`);
  const assetPath = file.replace(/^\/+/, '');
  if (!assetPath.startsWith('assets/')) throw new Error(`Choose a file from the assets folder: ${file}`);
  await access(resolve(output, assetPath));
}
console.log('Built out/index.html, styles.css, CV, and project assets for GitHub Pages.');
