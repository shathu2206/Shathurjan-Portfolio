# Edit your portfolio without code

**[Open Pages CMS](https://app.pagescms.org/shathu2206/shathurjan-portfolio/main)** Â· **[View your website](https://shathu2206.github.io/Shathurjan-Portfolio/)**

Choose a dashboard section, make changes, and press **Save**. Saving automatically publishes the website through GitHub Pages. Allow about a minute, then refresh the website. Uploading a file to Media alone does not place it on a page: select that file in a photo or cover field and save the content too.

## Where to edit

| Dashboard section | What it controls |
| --- | --- |
| **Introduction & name** | Your name, combined intro/about, availability, languages and highlights |
| **Intro photos** | The slideshow beside your introduction: photos, captions, order, crop and timing |
| **Page covers** | The wide cover photo, crop position and credit for each page; introductions for Experience, Education, Leadership and Awards |
| **Organization logos** | Logos beside matching CV entries, plus the homepage organization strip |
| **Projects** | The Projects index and every individual project page, including cover images, story blocks, photos and videos |
| **Technical experience** | Engineering roles, responsibilities, dates and optional work photos |
| **Leadership & community** | Leadership and volunteer roles, descriptions and optional photos |
| **Education** | Schools, degrees, dates, GPA and coursework |
| **Awards & achievements** | Awards, organizations and dates |
| **Skills** | Categories, individual skills, your proficiency ratings and notes |
| **Gallery** | Photos, titles, short captions and gallery page introduction |
| **Engineering Updates** | Formatted posts, cover images and optional LinkedIn links |
| **Get in touch** | Contact page title, introduction, CV and any number of contact links |
| **Website text & layout** | Navigation, page headings, button labels, homepage directory, logo initials, footer, colours, fonts and width |

## Pages and navigation

Home is now an introduction and directory. Projects, Experience, Skills, Gallery and Updates are separate pages. Education, Awards & Achievements, Leadership and Contact also have their own pages, linked through **More** and the homepage directory.

Under **Website text & layout â†’ Navigation tabs**, change a label, drag links to reorder, or choose **Top bar** / **More menu**. Keep the top bar short for smaller screens. **Pages shown in navigation and homepage directory** controls which CV/project pages are linked. Hiding a link does not delete its page; the direct address still works. Home, Gallery and Updates remain available unless you remove their navigation entries.

Old homepage section links forward to the corresponding new pages.

## Add or update a project

1. Open **Projects**, then expand an existing project or add one.
2. Enter the title, a unique short project name such as `wing-analysis`, your role, team, dates, summary and contributions. The short name creates its address: `/projects/wing-analysis/`. Keep it stable after sharing links.
3. Select a **Cover image**. It appears on both the project index and its detail page. Add an image description and optional caption. Replace the illustrative cover and its caption when you have your own render.
4. Turn **Highlight this project first** on to place it before non-highlighted projects. Drag to reorder projects within each group.
5. Add **Project story blocks** for the problem, design choices, testing, results or lessons learned. Each block has a heading, formatted text, optional image, caption and video. Choose **Full width**, **Image left, text right**, or **Text left, image right**, then drag blocks to set their order.
6. Add extra photos under **CAD renders and photos**, or demonstrations under **Additional videos**.
7. **Save**. The index and the project's own page update automatically.

For video, paste a full YouTube or Vimeo URL, or upload an MP4/WebM. An uploaded file takes priority if both fields are filled. Videos have playback controls and do not autoplay. Use hosted video links for longer clips; keep uploaded clips small (preferably under 20 MB, always under GitHub's 100 MB file limit).

Your current covers are labelled illustrative diagrams, not CAD renders of your actual designs. They are ready to replace. No demonstration videos or measured results have been invented.

## Set your skill levels

Open **Skills**. Add or rename a category, then open each individual skill and set **Your proficiency**: Not yet rated, Introduced, Developing, Proficient, or Advanced. All initial ratings are **Not yet rated**, for you to assess yourself. Optional notes can describe training or project use. Drag skills and categories to reorder them.

The visible labels can be renamed under **Website text & layout â†’ Skills page text â†’ Proficiency labels**. Keep the five labels in the same order; ratings refer to their positions.

## Covers and logos

In **Page covers**, open the entry for the relevant page and choose a photo. Add its description, crop position and optional credit/source link. Remove the image for a text-only header. Keep one entry per page. Other page headings and introductions are edited under their own content sections or **Website text & layout**.

In **Organization logos**, add the organization name, its logo and a matching name from your experience/education/project entries. For example, `NASA Space Apps` matches any organization entry containing that phrase. The logo is used alongside those entries. **Show in homepage organization strip** adds it to the introduction page, with your involvement as a caption. Without a logo, that strip uses the organization's name. Upload the real team logo when you have it.

The starter cover photos are credited NASA research imagery, separate from your own project work. Logo and photo sources are recorded in [MEDIA-CREDITS.md](MEDIA-CREDITS.md).

## Intro photos and Gallery

Open **Intro photos â†’ Photos** to add, replace or reorder slideshow images. Select the image, add a description and optional caption, then save. The dots remain below the image; arrows appear on mouse hover, and mobile visitors can swipe. Automatic changes default to 15 seconds. One photo displays without controls; no photos hides the frame.

Open **Gallery â†’ Photos** for the separate gallery. Each item has an image, title and short caption. Drag to reorder or remove entries. Your current intro photo list is preserved.

## Write an engineering update

1. Open **Engineering Updates** and create a new entry.
2. Add the title, date and optional feed introduction / cover image. Describe any cover image.
3. Write in **Your post**. Type `/` to add headings, lists or images; select text to format it.
4. Optionally paste your LinkedIn post link. This creates a link, not an automatic cross-post.
5. Turn **Show on website** on and press **Save**.

Leave that switch off while preparing a post. Draft content is still stored in this public GitHub repository. The date controls display and sorting, not scheduled publishing. Keep filenames unchanged after sharing post links. A clearly labelled sample post is available to edit or remove.

## Contact details and your CV

Open **Get in touch**. Edit the title/intro and add as many contact entries as needed. Choose phone, email, website, LinkedIn, main CV or uploaded document; enter its label and destination. Display text is optional. Drag entries to reorder. The first LinkedIn entry also controls the Updates sidebar link.

To replace your CV, select a new **Main CV (PDF)** in this same editor. The homepage CV button and all main-CV contact entries update together.

## If a change does not appear

Make sure you saved the content entry after selecting its media, wait briefly and refresh. Check [Publish portfolio](https://github.com/shathu2206/Shathurjan-Portfolio/actions/workflows/deploy.yml): green means published. A failed update leaves the previous working version live. Common causes are a missing uploaded file, missing image description, duplicate project short name, or unsupported video link. The build message identifies the field to correct.

Choose PNG, JPG, JPEG, WebP or SVG for images. Around 1600 pixels wide and under 1 MB is a useful target for photos. Remove an image from all content entries and save before deleting the file from Media.

Normal content changes require no code. New kinds of components beyond these layouts still need a design/code change.
