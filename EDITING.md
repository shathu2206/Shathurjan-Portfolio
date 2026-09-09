# Editing your portfolio

You can make all routine updates in GitHub's website. You do not need to install software.

## Change text

1. Open [your portfolio content](https://github.com/shathu2206/Shathurjan-Portfolio/blob/main/site/content/portfolio.json).
2. Click the pencil icon. Change the words between quotation marks.
3. Keep the quotation marks, commas, brackets, and field names in place. For a quote inside text, write `\"quoted words\"`.
4. Click **Commit changes**, add a short description, and commit to **main**.
5. Open **Actions → Publish portfolio**. When the run is green, refresh your portfolio.

The `profile` section controls your introduction, contact details, availability, and highlights. `projects` contains the four featured projects. `experience`, `education`, and `skills` control the remaining content.

## Add CAD renders

1. Export a render as PNG, JPG, or WebP. Aim for about 1600 pixels wide and under 1 MB when practical. Use lowercase filenames with hyphens, such as `rocket-nose-cone.png`.
2. Open `site/public/assets/` in GitHub, choose **Add file → Upload files**, upload the image, and commit it.
3. Open `site/content/portfolio.json`. Find the matching project and replace its `"images": []` with:

```json
"images": [
  {
    "src": "assets/rocket-nose-cone.png",
    "alt": "CATIA render showing the rocket nose cone and avionics bay",
    "caption": "Parametric nose cone and avionics bay assembly."
  }
]
```

4. Commit the content edit. The image appears above that project's title after publishing.

Use your actual filename and a description of what your render shows. Paths are case-sensitive on GitHub. Include `assets/` in the path, but do not include `site/public/`, a leading slash, or the repository name. The build checks image files exist and stops publication if one is missing, preserving the previous working site.

For several renders, add more objects inside `images`, separated by commas. For no caption, use `"caption": ""`. Keep `alt` descriptive for screen-reader users. An empty image array hides the gallery without leaving a blank placeholder.

## Update your CV

Upload the new PDF to `site/public/assets/` using the existing name **Shathurjan-CV.pdf**. Both CV links update automatically after publication. The CV and everything in this public repository are accessible to visitors; use the version you want recruiters to download.

## Add, remove, or reorder projects

Each object in the `projects` array is one card. Copy an existing object, assign a unique `id` such as `wing-analysis`, and replace the content. Separate project objects with commas; do not add a comma after the final object. Their order in the file is their order on the page.

Use `contributions` for work you personally did. Keep `outcome` accurate to the project's current stage; add measured results when you have them. The `outcomeLabel` can be `RESULT`, `DESIGN APPROACH`, or `RESEARCH FOCUS`. Set `link` to a real project URL if available, or leave it empty to hide the link.

## Change colours or layout

Edit `site/app/globals.css`. The top `:root` block contains the main colours:

- `--background`: page background
- `--foreground`: primary text
- `--primary`: lime accent
- `--card`: project backgrounds
- `--border`: dividers and card borders

Keep text and background colours sufficiently distinct. Major layout changes belong in `site/app/page.tsx`.

## If an update does not appear

Check **Actions → Publish portfolio**. A green run means publication succeeded; refresh your browser. A red run commonly means a missing image or a JSON punctuation error. Open the failed step to see the message, correct the file, and commit again. You can restore earlier content using the file's **History** on GitHub.

The repository must have **Settings → Pages → Source → GitHub Actions** selected. Hosting instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
