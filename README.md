# Shathurjan Muhunthan — Engineering Portfolio

An aerospace engineering portfolio for internship and co-op applications.

**Website:** https://shathu2206.github.io/Shathurjan-Portfolio/

## Edit your portfolio

Open **[Pages CMS](https://app.pagescms.org)** and sign in with GitHub. Select `shathu2206 / Shathurjan-Portfolio` and the `main` branch. Edit your profile, projects, technical experience, leadership, education, awards, and skills through forms and image upload controls. Use **Engineering Updates** to write formatted posts with images and optional LinkedIn links. Saving automatically rebuilds the website; posts appear only when **Show on website** is enabled.

See [EDITING.md](EDITING.md) for the dashboard map and a guide to everyday editing. **Page covers & extra blocks** adds formatted text, images and videos to any existing main page. **Website text & layout** manages navigation, wording, branding and homepage visibility. **Theme & layout** manages colours, typography and supported layout options. No code editing is needed for these updates.

## GitHub Pages setup

Keep this repository public for free GitHub Pages hosting. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The included **Publish portfolio** workflow builds and deploys every change to `main`. You can also run it manually from the Actions tab.

## Local preview

Use Node.js 24, then run:

```sh
cd site
npm ci
npm run dev
```

Open the local URL printed in the terminal. `npm start` is also an alias for this local development preview. To build the public website:

```sh
npm run build
```

The complete static website is written to `site/out/`: the introduction at `/`, the Projects index at `/projects/`, case studies at `/projects/<id>/`, individual Experience, Leadership, Education, Awards, Skills and Contact pages, Gallery at `/gallery/`, the Updates feed at `/updates/`, and each published post at `/updates/<filename>/`. React renders the content at build time, so the published site requires no server or visitor login. A small browser script powers the introduction photo carousel; the first photo and the rest of the content remain visible without JavaScript. Only `site/out/` is deployed; the original source stays in this repository.

## Files

| File | Purpose |
| --- | --- |
| `.pages.yml` | Visual editing dashboard configuration |
| `site/content/*.json` | Profile, projects, experience, education, and skills |
| `site/content/appearance.json` | Shared theme and layout settings edited through Pages CMS |
| `site/content/portfolio.ts` | Combines the content for the website |
| `site/public/assets/` | CV and CAD renders |
| `site/app/page.tsx` | Page layout |
| `site/app/globals.css` | Colours, type, and responsive styling |
| `site/scripts/render.tsx` | Static document and search metadata |
| `site/scripts/build.mjs` | Generates and validates the static website |
| `.github/workflows/deploy.yml` | Automatic GitHub Pages publishing |

The initial content was adapted from the supplied CV. Update dates, project status, achievements, and results as your work progresses. Project covers are labelled illustrative diagrams until original renders are uploaded. All skill proficiency levels are intentionally unrated. Photos, story blocks, video embeds/uploads, page covers and organization logos can be managed in Pages CMS. See [MEDIA-CREDITS.md](MEDIA-CREDITS.md) for supplied imagery sources.

The lint configuration checks the portfolio's authored code. It excludes the unused starter UI library and hooks, and disables Next.js image/head rules because the published site uses static HTML and standard image elements. The Miniflare `sharp` override pins a compatible security patch until the preview tooling includes it upstream.
