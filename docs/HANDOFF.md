# Nicole Blog — handoff

Updated 2026-10-27.

## What is ready

- Astro static site skeleton with responsive home, experience, research/project, and writing pages.
- Content collections for experience, research, and blog. The blog contains only an unpublished draft template.
- GitHub Pages workflow. The existing public repository `nicolelyu021/nicolelyu021.github.io` is connected. PR #1 (https://github.com/nicolelyu021/nicolelyu021.github.io/pull/1) was merged into `main` on 2026-10-27. The Actions deployment succeeded, and the portfolio is live at https://nicolelyu021.github.io/.
- README architecture map and update guide for future work.
- Design system from the supplied palette and layout screenshots. The homepage hero has been tightened for a 13-inch laptop viewport; Section 02 now shows only the three experience roles; Section 03 uses a light surface with fuchsia accents and keeps its existing narrative copy. Large accents on the Experience and Writing pages now use the same electric fuchsia; job titles have stronger black type and a fuchsia edge. See `docs/DESIGN_BRIEF.md`.
- Experience cards identify Millennium Management, Meet Magellan, and Deloitte Consulting by company, setting, role, and contribution. Nicole reviewed the three experience pages and supplied the Millennium timing and audience: a deployment that typically took about a week could take roughly 15 minutes through her portal, especially for business users with working code but little deployment experience.

## Source materials

- Design screenshots and palette: project root, `~/Documents/Nicole_Blog/` (excluded from Git).
- Research resume: `~/Documents/Nicole_Blog/Nicole Lyu Resume 2026 Oct-Research.pdf`.
- General resume: `~/Documents/Nicole_Blog/Nicole_Lyu_Resume_2026_Sept.pdf`.
- Pinlog HackCMU project: `~/Documents/CMU/Hackathon/HackCMU_2026/HackCMU_2026/`. Nicole supplied the pitch video `Hackathon_pinlog_pitch_final.mp4` in the project root; its public copy is `public/videos/pinlog-pitch.mp4`. She described her contribution as proposing the idea from personal experience and persuading the team to pursue it.
- The earlier ChatGPT conversation, “Nicole Blog Brainstorm,” contains additional discussion, but its assistant messages were not fully retrievable in this handoff. The explicit decisions preserved in this project were supplied with the current request.

## Future updates

1. The final website folder is `~/Documents/Nicole_Blog`, as Nicole chose. The current chat's desktop project still points to `~/Documents/ChatGPT/Nicole Blog`; update the project's primary folder to the chosen location for future chats.
2. Refine the home-page positioning or public project descriptions as Nicole develops them.
3. Pinlog includes Nicole's stated ideation contribution and playable pitch video. Add the final demo outcome if she wants to share it.
4. Choose the first blog post and any additional links to publish.

## How to continue

Run `npm install`, then `npm run dev` and open Astro's local preview URL. Add or edit Markdown in `src/content/`. Run `npm run check` and `npm run build` before pushing. Keep this file current so another Work, Codex, or Cursor session can pick up the project from the files alone.
