# Portfolio (Astro + GitHub Pages)

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Push this repo to GitHub and keep default branch as `main`.
2. In GitHub repo settings open `Settings -> Pages`.
3. In `Build and deployment`, set `Source` to `GitHub Actions`.
4. Push to `main` to trigger `.github/workflows/deploy.yml`.

## Notes about URLs

- If repo is `username.github.io`, site is served from root `/`.
- If repo is `my-portfolio`, site is served from `/my-portfolio/`.
- `astro.config.mjs` handles this automatically via `GITHUB_REPOSITORY`.
