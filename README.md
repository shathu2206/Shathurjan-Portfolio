# Shathurjan Muhunthan — Engineering Portfolio

An aerospace engineering portfolio for internship and co-op applications.

**Website:** https://shathu2206.github.io/Shathurjan-Portfolio/

## Edit your portfolio

Your biography, contact information, project descriptions, skills, and experience are in [site/content/portfolio.json](site/content/portfolio.json). Open that file on GitHub and click the pencil to edit. Commit your change to `main`; GitHub Actions rebuilds and republishes the website automatically.

See [EDITING.md](EDITING.md) for a step-by-step guide to editing text, adding CAD renders, adding projects, and updating your CV.

## GitHub Pages setup

Keep this repository public for free GitHub Pages hosting. In **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**. The included **Publish portfolio** workflow builds and deploys every change to `main`. You can also run it manually from the Actions tab.

## Local preview

Use Node.js 24, then run:

```sh
cd site
npm ci
npm run dev
```

Open the local URL printed in the terminal. To build the public website:

```sh
npm run build
```

The complete static website is written to `site/out/`. React renders the content at build time, so the published site requires no server, login, or browser-side JavaScript. Only `site/out/` is deployed; the original source stays in this repository.

## Files

| File | Purpose |
| --- | --- |
| `site/content/portfolio.json` | Personal content and project images |
| `site/public/assets/` | CV and CAD renders |
| `site/app/page.tsx` | Page layout |
| `site/app/globals.css` | Colours, type, and responsive styling |
| `site/scripts/render.tsx` | Static document and search metadata |
| `site/scripts/build.mjs` | Generates and validates the static website |
| `.github/workflows/deploy.yml` | Automatic GitHub Pages publishing |

The initial content was adapted from the supplied CV. Update dates, project status, achievements, and results as your work progresses. Empty image arrays are intentional; the site displays complete text-based project cards until your renders are added.
