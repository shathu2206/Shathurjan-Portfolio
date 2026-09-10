import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { mkdir, readFile, writeFile, cp, rm, access } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import { assertTextIntegrity } from './text-integrity.mjs';

// This portfolio is a static document. Render React at build time so GitHub
// Pages needs no server; the intro carousel uses a small progressive-enhancement script.
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
const { render, content, loadPosts, renderUpdates, renderPost, renderIcon, renderGallery,renderProjects,renderProject,renderSection,cvPageIds,embedUrl } = await import(pathToFileURL(resolve(intermediate, 'render.js')).href);
const posts = await loadPosts();
await mkdir(output, { recursive: true });
await cp(resolve(root, 'public'), output, { recursive: true });
await writeFile(resolve(output, 'favicon.svg'), renderIcon());
const css = (await readFile(resolve(root, 'app/globals.css'), 'utf8'))
  .replace(/^@import.*;\r?\n/gm, '')
  .replace(/^@custom-variant.*;\r?\n/gm, '')
  .replace(/^@theme inline \{[^\n]*\}\r?\n/gm, '');
await writeFile(resolve(output, 'styles.css'), css);
await writeFile(resolve(output, 'index.html'), render());
await mkdir(resolve(output,'gallery'),{recursive:true});
await writeFile(resolve(output,'gallery/index.html'),renderGallery());
await mkdir(resolve(output,'projects'),{recursive:true});
await writeFile(resolve(output,'projects/index.html'),renderProjects());
const projectIds=new Set();
for(const project of content.projects){
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.id)||projectIds.has(project.id))throw new Error(`Project URL must be unique lowercase words separated by hyphens: ${project.id}`);
  projectIds.add(project.id);
  for(const video of [...project.videos,...project.sections.map(s=>({url:s.videoUrl,file:s.videoFile}))]){
    if(video.url&&!video.file&&!embedUrl(video.url))throw new Error(`Use a YouTube or Vimeo video link for ${project.title}`);
    if(video.file&&!/\.(mp4|webm)$/i.test(video.file))throw new Error(`Upload an MP4 or WebM video for ${project.title}`);
  }
  await mkdir(resolve(output,'projects',project.id),{recursive:true});
  await writeFile(resolve(output,'projects',project.id,'index.html'),renderProject(project));
}
for(const page of cvPageIds){await mkdir(resolve(output,page),{recursive:true});await writeFile(resolve(output,page,'index.html'),renderSection(page));}
await mkdir(resolve(output,'updates'),{recursive:true});
await writeFile(resolve(output,'updates/index.html'),renderUpdates(posts));
for(const post of posts){
  await mkdir(resolve(output,'updates',post.slug),{recursive:true});
  await writeFile(resolve(output,'updates',post.slug,'index.html'),renderPost(post));
}
await writeFile(resolve(output, '.nojekyll'), '');
const textFiles=['styles.css','index.html','projects/index.html','gallery/index.html','updates/index.html',
  ...content.projects.map(p=>`projects/${p.id}/index.html`),
  ...cvPageIds.map(p=>`${p}/index.html`),...posts.map(p=>`updates/${p.slug}/index.html`)];
for(const file of textFiles)assertTextIntegrity(await readFile(resolve(output,file),'utf8'),file);
const newAssets=[...content.pages.map(p=>p.cover),...content.organizations.map(o=>o.logo),...content.experience.map(e=>e.image),...content.leadership.map(e=>e.image),...content.projects.flatMap(p=>[p.cover,...p.sections.flatMap(s=>[s.image,s.videoFile]),...p.videos.map(v=>v.file)])].filter(Boolean);
for(const item of [...content.pages.map(p=>({image:p.cover,alt:p.coverAlt})),...content.experience.map(e=>({image:e.image,alt:e.imageAlt})),...content.leadership.map(e=>({image:e.image,alt:e.imageAlt})),...content.projects.flatMap(p=>[{image:p.cover,alt:p.coverAlt},...p.sections.map(s=>({image:s.image,alt:s.imageAlt}))])]){
  if(item.image&&!item.alt?.trim())throw new Error(`Add an image description for ${item.image}`);
}
for (const file of [...newAssets,...content.introPhotos.photos.map(photo=>photo.image), content.contact.resume, ...content.contact.links.filter(link=>link.type==='file').map(link=>link.file), ...content.gallery.photos.map(photo=>photo.image), ...content.projects.flatMap(p => p.images.map(i => i.src)), ...posts.flatMap(p=>p.image?[p.image]:[])]) {
  if (!file || file.includes('..') || file.includes('\\') || /^[a-z]+:/i.test(file)) throw new Error(`Use a public asset path: ${file}`);
  const assetPath = file.replace(/^\/+/, '');
  if (!assetPath.startsWith('assets/')) throw new Error(`Choose a file from the assets folder: ${file}`);
  await access(resolve(output, assetPath));
}
console.log(`Built homepage, Projects index, ${content.projects.length} case studies, ${cvPageIds.length} CV pages, Gallery, Updates, and ${posts.length} published posts.`);
