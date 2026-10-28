# Nicole Blog

Nicole Lyu's personal portfolio and blog, built with Astro for static hosting on GitHub Pages.

## Start locally

From this folder:

```bash
npm install
npm run dev
```

Open the local URL Astro prints (usually `http://localhost:4321`). The page updates when you save files. Opening `index.html` directly will not show the working site.

## Architecture

```text
src/
├── pages/                 Home and the Experience, Research, and Writing routes
├── components/            Reusable experience and research cards
├── content/
│   ├── experience/        One Markdown file per professional role
│   ├── research/          One Markdown file per research/project entry
│   └── blog/              Writing posts; drafts stay hidden
├── content.config.ts      Fields and validation for the three collections
├── layouts/BaseLayout.astro  Shared header, navigation, and footer
├── styles/global.css      Colors, typography, and responsive layout
└── lib/paths.ts           Internal links that work on GitHub Pages
.github/workflows/deploy.yml  Builds and deploys after a push to main
public/videos/              Video assets served by the site
docs/                       Design decisions and handoff notes
```

Content flows from the Markdown collections into Astro pages. `npm run build` generates the static `dist/` folder; the GitHub Actions workflow builds and publishes it after changes reach `main`.

## Where to make updates

- Edit `src/pages/index.astro` for homepage structure and its introduction.
- Edit `src/content/experience/*.md` for company, role, dates, and experience copy. All experience entries appear on the homepage and Experience page, ordered by `order`.
- Edit `src/content/research/*.md` for research and project pages. The Research + Projects page lists the collection entries. Pinlog uses `pitchVideo` to point to its MP4 in `public/videos/`.
- Add a Markdown file in `src/content/blog/` for a post. Set `draft: false` when it is ready to appear on the Writing page.
- Edit `src/styles/global.css` for the visual design, `src/layouts/BaseLayout.astro` for shared navigation and footer, and `src/content.config.ts` when adding or changing content fields.

The design decisions are in `docs/DESIGN_BRIEF.md`; current status and open content questions are in `docs/HANDOFF.md`.

## Check changes

```bash
npm run check
npm run build
```

## GitHub Pages

The repository is [`nicolelyu021/nicolelyu021.github.io`](https://github.com/nicolelyu021/nicolelyu021.github.io). The new portfolio is in [draft pull request #1](https://github.com/nicolelyu021/nicolelyu021.github.io/pull/1) on the `site-v1` branch. Pushing `site-v1` updates that review copy; it does not update the live page.

The shareable address is **https://nicolelyu021.github.io/**. It currently shows the older placeholder. To publish this portfolio after reviewing the public copy, select **GitHub Actions** in **Settings → Pages → Build and deployment → Source**, then merge the draft PR into `main`. The workflow in `.github/workflows/deploy.yml` builds and deploys the site. Check that the deployment succeeds before sharing the URL.
