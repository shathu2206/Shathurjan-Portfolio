import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';
// GitHub Pages serves static files; no Worker or server bindings are needed.
export default defineConfig({ css: { postcss: { plugins: [tailwindcss()] } }, plugins: [vinext()] });
