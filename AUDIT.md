# Portfolio audit — 10 September 2026

## Checks completed

| Area | Result |
| --- | --- |
| Live pages | All 15 pages loaded: Home, Projects, four case studies, six CV/contact pages, Gallery, Updates and the sample post. |
| Responsive layouts | 75 browser checks across 320×640, 768×1024, 1440×900, 2560×1080 and 844×390. No detected horizontal overflow or missing main headings. Mobile menu also checked at 390×844. |
| Links and files | All 32 checked internal page/file URLs returned HTTP 200. Four external source/credit URLs also returned HTTP 200. |
| CV | Published PDF matches the supplied original byte for byte. |
| Navigation | More opens by keyboard, changes plus to minus, focuses its first link, closes with Escape and fits the available screen height. Outside-click and focus dismissal checked. |
| Slideshow | Manual dots and keyboard navigation checked in-browser. Automatic slideshow advanced twice in roughly 30 seconds. Automated checks covered 15-second timing, touch/pen swipes, cancelled gestures, focus/hover pausing, background tabs and reduced motion. |
| Images and text | No missing image descriptions or broken loaded images detected in live browser checks. Generated pages pass UTF-8 text-integrity and local asset/link checks. |
| Pages CMS | All 14 file editors and the Updates collection load. Every stored content field has a matching control. Existing content was not changed during form inspection. |
| Editable layouts | In-memory rendering checks covered homepage switches, branding, footer, sidebar, covers, crop overrides, theme settings and extra text/image/video blocks on all ten main pages. |
| Content retention | Four projects, nine technical roles, five leadership roles, five awards, two education entries and the existing intro-photo configuration retained. |
| Build and code checks | Type checking, lint checks for authored site code, production build and internal-link validation passed. Local development preview rendered successfully. |
| Dependencies | npm reported zero known vulnerabilities after compatible security updates and a targeted image-library patch. |

## Issues fixed

- Prevented spaces and non-ASCII characters in formatted-image links from being encoded twice.
- Kept one main page heading when a post or extra block contains a top-level heading.
- Rejected impossible calendar dates instead of silently displaying a different date.
- Extended publishing validation to images and local links inserted through rich-text editors.
- Added editable WebVTT captions, language codes and caption-menu labels for uploaded videos.
- Repaired the local `npm start` preview command, updated development dependencies and added authored-code linting to the publishing workflow.
- Corrected the editing guide's Updates settings label.

The current colours, layout defaults, factual content and requested placeholder media remain unchanged.

## Limits of this audit

- LinkedIn blocks automated requests and showed a sign-in screen in the browser. The public profile content could not be verified without signing in.
- Responsive checks used the available Chromium browser. They do not substitute for testing physical devices or every Safari/Firefox version. Touch and pen gesture behavior was exercised by automated event tests.
- Placeholder photos and illustrative project covers remain intentionally. No actual project video was available; video and caption rendering was verified with test content, not a real playback session.
- CMS forms were inspected without saving test posts or changing the user's content. Rendered fixtures exercised the editing controls separately.
- Dependency results describe known advisories at the time of the audit, not a guarantee against future vulnerabilities.
