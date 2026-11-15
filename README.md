# med's site

The source for [medrinnn.dev](https://medrinnn.dev) — a small personal site built
with React, TypeScript, Vite, and Bun.

## Development

```bash
bun install
bun run dev
```

Then open <http://localhost:5173>.

| Command             | What it does                                   |
| ------------------- | ---------------------------------------------- |
| `bun run dev`       | Start the Vite dev server                      |
| `bun run build`     | Type-check and build to `dist/`                |
| `bun run preview`   | Preview the production build                   |
| `bun run lint`      | Run ESLint                                     |
| `bun run typecheck` | Type-check without emitting                    |
| `bun run deploy`    | Build and publish `dist/` to the `gh-pages` branch |

## Editing content

Most changes live in `src/data/`:

- `site.ts` — name, description, and social links
- `stack.ts` — tech stack
- `projects.ts` — project cards
- `badges.ts` — 88x31 badges

Page copy lives in `src/pages/`. Design tokens and theme palettes are in
`src/styles/global.css`.

## Deployment

`bun run deploy` builds the site and force-pushes `dist/` to the `gh-pages`
branch. The same command runs on every push to `main` via
`.github/workflows/deploy.yml`.

GitHub Pages serves the `gh-pages` branch at `medrinnn.dev`. The custom domain is
recorded in `public/CNAME`, and `scripts/postbuild.ts` copies `index.html` to
`404.html` so client-side routes work on deep links.

The `gh-pages` branch is generated — don't edit it by hand.

## AI disclosure

This project was built with the help of AI coding tools (OpenCode). Some code,
copy, and documentation may be AI-assisted. Everything is reviewed and
maintained by me.

## License

Personal content © Mohamed Reda. The code is shared for reference and learning.
