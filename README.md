# Nicole Blog

Nicole Lyu's personal portfolio and blog, built with Astro for static hosting on GitHub Pages.

## Start locally

Node.js and Git are installed on the development Mac. From this folder:

```bash
npm install
npm run dev
```

Open the local URL Astro prints (usually `http://localhost:4321`). The page updates when you save files. A static Astro site needs the dev server; opening `index.html` directly will not show the working site.

Before sharing changes:

```bash
npm run check
npm run build
```

## Content

- `src/content/experience/` — professional experience
- `src/content/research/` — research and technical projects
- `src/content/blog/` — writing; the included template is a draft and is excluded from the public site
- `src/content.config.ts` — fields and validation for all three collections

Add a Markdown file to a collection to create a page. Set `featured: true` on experience or research entries to show them on the home page. The design and content decisions are in `docs/DESIGN_BRIEF.md`; the next-step checklist is in `docs/HANDOFF.md`.

## Publish later

1. Review public copy, especially employer and research descriptions.
2. Create a GitHub repository and push this folder to its `main` branch.
3. In the GitHub repository, go to **Settings → Pages** and choose **GitHub Actions** as the source.
4. The included workflow builds and publishes the site. It derives the repository path automatically for a GitHub Pages project site.

No remote repository or public site has been created yet.
