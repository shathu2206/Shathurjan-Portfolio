# Edit your portfolio without code

**Your dashboard:** [Pages CMS](https://app.pagescms.org)

**Your website:** [Shathurjan's portfolio](https://shathu2206.github.io/Shathurjan-Portfolio/)

## Connect once

1. Open Pages CMS and sign in with your GitHub account, **shathu2206**.
2. If prompted to install the Pages CMS GitHub app, select **Only select repositories**, then **Shathurjan-Portfolio**. This lets the editor save your portfolio content and images to that repository.
3. Open **Shathurjan-Portfolio** and select the **main** branch.
4. The editing sections are already configured. You do not need to create a configuration or edit code.

## Everyday editing

Choose a section in the dashboard, make changes, and press **Save**. Saving updates the repository and starts automatic publishing. Allow a short time for GitHub to finish, then refresh your website. Save publishes your changes; this setup does not have a separate draft workflow.

| Dashboard section | What you can change |
| --- | --- |
| **Introduction, name & CV** | Name everywhere on the site, combined Introduction/About text, languages, availability, contact details, highlights, and CV PDF |
| **Website text & layout** | All section headings, descriptions, buttons, navigation tabs, header/footer, Updates page labels, search descriptions, colours, font, page width, and section order/visibility |
| **Gallery** | Add, replace, remove and reorder photos; edit their titles, captions, image descriptions and page headings |
| **Projects** | Add, edit, remove, and reorder project cards; upload renders and photos |
| **Engineering Updates** | Write new posts, format text, upload images, and add optional LinkedIn links |
| **Technical experience** | Engineering roles, dates, descriptions, and responsibilities |
| **Leadership & community** | Volunteer, leadership, tutoring, coaching, and community roles |
| **Awards & achievements** | Awards, organisations, and dates |
| **Education** | University, degree, dates, coursework, and recognition |
| **Skills** | Skill groups and the entries in each group |

## Write an engineering update

1. Open **Engineering Updates** in the dashboard and create a new entry.
2. Give it a title and date. Add a short introduction for the feed if you want one.
3. Click **Your post** and start writing. Type `/` to insert headings, lists, or images. Select text to reveal formatting controls.
4. Optionally select a **Cover image** and describe it in **Cover image description**. You can also insert more images into the post itself.
5. Optionally paste the URL of your LinkedIn version in **LinkedIn post link**. This adds a link to LinkedIn; it does not automatically post to or import from LinkedIn.
6. Turn **Show on website** on, then **Save**. The post appears at the top of [Engineering Updates](https://shathu2206.github.io/Shathurjan-Portfolio/updates/) after publishing finishes.

Leave **Show on website** off to keep a post off the website while working on it. Draft files are still visible in this public GitHub repository. The date is a display/sorting date, not a publishing schedule. Each published post has its own shareable link. Keep its filename unchanged after sharing that link.

## Navigate the portfolio

The top navigation stays visible while you scroll. **Intro**, **Projects**, **Experience**, **Leadership**, **Education**, **Awards & Achievements**, **Skills**, and **Contact** jump to sections. **Updates** opens the separate post feed. **Gallery** opens the photo gallery. Education and Awards & Achievements are separate sections, each with its own tab. Their headings, order and visibility can be edited independently under **Website text & layout**. All About text, the professional summary, and languages are together below your name in the introduction.

## Add gallery photos

Open **Gallery** in Pages CMS. Under **Photos**, add an entry or open a placeholder. Upload or select a photo, enter its title, a short caption and an image description, then **Save**. Drag entries to reorder them or remove an entry to take it off the gallery. The three starter images are clearly labelled placeholders, ready to replace.

A sample engineering update is also published in **Engineering Updates**. Edit it into your own post, turn **Show on website** off to hide it, or remove it when you no longer need it.

## Add a project

1. Open **Projects** and add an item to **Featured projects**.
2. Enter its title and a unique **Short project name**, such as `wing-analysis`. This is part of the project's direct link, so keep it stable after sharing.
3. Fill in your role, team, dates, description, contributions, and result or current progress.
4. Add tools and images if you have them. The project link is optional.
5. Save. The new card appears in the same design as the others.

Open an existing project card to edit it. Use the editor's list controls to reorder or remove cards. Their order in the editor is their order on your website.

## Upload CAD renders or photos

1. Open the project in **Projects**.
2. Under **CAD renders and photos**, add an image item.
3. Click the **Image** picker and upload a PNG, JPG, JPEG, or WebP, or select an existing upload.
4. Write an **Image description** for visitors using screen readers. Add a caption if useful.
5. Save the project list.

Aim for around 1600 pixels wide and under 1 MB when practical. No images are required: cards without images remain complete. Uploaded media and portfolio content are public once committed to this public repository. Remove an image from its project and save before deleting the underlying media file.

## Replace your CV

Open **Introduction, name & CV**, find **CV (PDF)**, and choose or upload your new PDF. Then save the profile. Both CV links update automatically. You can use a new filename; you do not need to overwrite the previous PDF.

## Check publishing

Open [Publish portfolio in GitHub Actions](https://github.com/shathu2206/Shathurjan-Portfolio/actions/workflows/deploy.yml). A green run means the update has published. If a run fails, the previous working version stays live. Check that any selected CV or image is still present in the media library.

## Layout and design

Open **Website text & layout**. Each existing section has its own editable headings and labels. Use **Homepage sections** to reorder sections; remove an entry to hide that section without deleting its content. Add it back to show it again. The introduction stays at the top. The Updates page remains available independently of its homepage invitation.

Under **Navigation tabs**, change labels, reorder tabs, or remove them. Select destinations from the dropdown. Tabs for hidden homepage sections automatically disappear. The Intro, Updates and Gallery destinations remain available.

Under **Colours, font and page width**, change the palette using six-digit hex colours (for example `#b6f16c`), choose a font, and adjust page width. Under **Header and footer**, edit the logo initials, subtitle, and footer. Your full name comes from **Introduction, name & CV** and updates throughout the site automatically. Logo initials also update the browser icon.

Changes stay within the existing responsive design; entirely new types of page components still require a design/code change.

## Optional direct editing

If you prefer GitHub's file editor, the portfolio content is in the JSON files under `site/content/`. Posts are individual JSON files in `site/content/posts/`. `.pages.yml` describes the dashboard fields. Normal content editing does not require opening these files.
