# Humanitarian engineering portfolio

A statically exported Next.js portfolio for documenting substantial open-source product-engineering contributions.

## Run locally

```bash
npm install
npm run dev
```

Run the complete quality gate with `npm run check`. The production export is written to `out/` and can be deployed to GitHub Pages.

Push to `main` to run the included Pages workflow. It calculates the correct base path for either an account Pages site or a project Pages site, then runs lint, type-check, build, and link-check before deployment.

## Updating contribution status

Case-study content lives in typed, validated MDX files under `content/case-studies/`. Keep `status` at `proposed` until work begins; use `under-review` only with a live pull request and `merged` only after upstream merge. Replace the sitemap origin in `app/sitemap.ts` and the contact placeholder in `app/resume/page.tsx` before publishing.
