# Nicole Blog — handoff

Updated 2026-10-27.

## What is ready

- Astro static site skeleton with responsive home, experience, research/project, and writing pages.
- Content collections for experience, research, and blog. The blog contains only an unpublished draft template.
- GitHub Pages workflow. The existing public repository `nicolelyu021/nicolelyu021.github.io` is connected. The site is on the `site-v1` review branch in draft PR #1 (https://github.com/nicolelyu021/nicolelyu021.github.io/pull/1); it has not been merged or published as the homepage.
- Design system from the supplied palette and layout screenshots. The homepage hero has been tightened for a 13-inch laptop viewport; Section 02 now shows only the three experience roles; Section 03 uses a light surface with fuchsia accents and keeps its existing narrative copy. See `docs/DESIGN_BRIEF.md`.
- First-draft public summaries from Nicole's resumes. Experience cards now identify Millennium Management, Meet Magellan, and Deloitte Consulting by company, setting, role, and contribution. These summaries need Nicole's review before publication; the Millennium detail is based on her resume and its technical specifics need particular review.

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
5. After content review, mark draft PR #1 ready and merge it into `main`, then choose GitHub Actions as the Pages source.

## How to continue

Run `npm install`, then `npm run dev` and open Astro's local preview URL. Add or edit Markdown in `src/content/`. Run `npm run check` and `npm run build` before pushing. Keep this file current so another Work, Codex, or Cursor session can pick up the project from the files alone.
