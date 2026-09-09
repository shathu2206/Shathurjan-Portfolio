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
| **Profile & CV** | Name, introduction, availability, interests, About text, contact details, highlights, and CV PDF |
| **Projects** | Add, edit, remove, and reorder project cards; upload renders and photos |
| **Experience** | Roles, organisations, dates, and descriptions |
| **Education** | University, degree, dates, coursework, and recognition |
| **Skills** | Skill groups and the entries in each group |

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

Open **Profile & CV**, find **CV (PDF)**, and choose or upload your new PDF. Then save the profile. Both CV links update automatically. You can use a new filename; you do not need to overwrite the previous PDF.

## Check publishing

Open [Publish portfolio in GitHub Actions](https://github.com/shathu2206/Shathurjan-Portfolio/actions/workflows/deploy.yml). A green run means the update has published. If a run fails, the previous working version stays live. Check that any selected CV or image is still present in the media library.

## Layout and design

The dashboard changes content and the order of repeated items. Colours, typography, page layout, and new kinds of sections are design changes handled separately. You can ask Codex to make those changes while keeping your current content.

## Optional direct editing

If you prefer GitHub's file editor, the content is in `site/content/profile.json`, `projects.json`, `experience.json`, `education.json`, and `skills.json`. Each file contains the matching named section. `.pages.yml` describes the dashboard fields. Normal content editing does not require opening these files.
