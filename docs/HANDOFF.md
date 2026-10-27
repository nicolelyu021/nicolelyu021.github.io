# Nicole Blog — handoff

Updated 2026-10-27.

## What is ready

- Astro static site skeleton with responsive home, experience, research/project, and writing pages.
- Content collections for experience, research, and blog. The blog contains only an unpublished draft template.
- GitHub Pages workflow; repository and public site are not yet created.
- Design system from the supplied palette and layout screenshots.
- First-draft public summaries from Nicole's resumes. These need Nicole's review before publication.

## Source materials

- Design screenshots and palette: project root, `~/Documents/Nicole_Blog/` (excluded from Git).
- Research resume: `~/Documents/Nicole_Blog/Nicole Lyu Resume 2026 Oct-Research.pdf`.
- General resume: `~/Documents/Nicole_Blog/Nicole_Lyu_Resume_2026_Sept.pdf`.
- Pinlog HackCMU project: `~/Documents/CMU/Hackathon/HackCMU_2026/HackCMU_2026/`.
- The earlier ChatGPT conversation, “Nicole Blog Brainstorm,” contains additional discussion, but its assistant messages were not fully retrievable in this handoff. The explicit decisions preserved in this project were supplied with the current request.

## Open decisions before publishing

1. The final website folder is `~/Documents/Nicole_Blog`, as Nicole chose. The current chat's desktop project still points to `~/Documents/ChatGPT/Nicole Blog`; update the project's primary folder to the chosen location for future chats.
2. Approve or revise the home-page positioning line and all public project descriptions.
3. Add Nicole's exact contribution and final outcome for Pinlog; add other research or project pieces if desired.
4. Choose the first blog post and any LinkedIn or other links to publish.
5. Create a GitHub repository and enable GitHub Pages after the content review.

## How to continue

Run `npm install`, then `npm run dev` and open Astro's local preview URL. Add or edit Markdown in `src/content/`. Run `npm run check` and `npm run build` before pushing. Keep this file current so another Work, Codex, or Cursor session can pick up the project from the files alone.
