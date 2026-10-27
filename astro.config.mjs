import { defineConfig } from 'astro/config';

// GitHub Pages project sites live under /<repository-name>/.
// The Actions environment supplies the repository name at build time.
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = repository && !repository.endsWith('.github.io') ? `/${repository}` : '/';

export default defineConfig({
  site: 'https://nicolelyu021.github.io',
  base,
  output: 'static',
});
