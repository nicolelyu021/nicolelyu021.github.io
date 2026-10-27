# Nicole Blog project context

This is Nicole Lyu's personal portfolio/blog. Use Astro as a static site with GitHub Pages deployment. Keep the site readable in ChatGPT Work, Codex, and Cursor by updating `docs/HANDOFF.md` when decisions change.

## Design decisions

- Editorial, immersive, full-width composition inspired by The Chemistry Brand, without copying its assets or UI.
- Palette: electric fuchsia `#FE2BBE`, near black `#111111`, white `#FFFFFF`, light gray, optional pale blush `#F7E9EF`.
- Square corners, large typography, generous space, tab-like navigation, minimal motion.
- No profile photograph for the first version.
- Content collections: experience, research/projects, blog.

## Content rules

- Treat the existing copy as a reviewable first draft, not approved public claims.
- Use public, high-level descriptions of employer work. Do not add confidential architecture, internal data, unreleased links, phone numbers, or private interview prep material.
- Do not invent blog posts, project metrics, personal contributions, or social URLs.
- Use Nicole's two local resumes and the HackCMU project as source material when available. Their source locations and open questions are in `docs/HANDOFF.md`.

## Working commands

`npm install`, `npm run dev`, `npm run check`, `npm run build`.

Prefer plain Astro and CSS. Keep keyboard navigation, readable contrast, mobile layouts, and reduced-motion behavior. Use `pathFor()` for internal links so GitHub Pages repository paths work.
