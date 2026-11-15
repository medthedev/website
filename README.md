# med's site

The source for [medrinnn.dev](https://medrinnn.dev) — a small personal site built
with React, TypeScript, Vite, and Bun.

## Features

- Home, About, and Tech pages with client-side routing
- Light, dark, and system themes, persisted and applied before first paint
- Content separated from presentation in typed data modules
- Accessible navigation, skip link, visible focus states, and reduced-motion support
- Social links, 88x31 badges, a tech stack, and project cards
- Fully static build with no runtime backend

## Getting started

The project uses [Bun](https://bun.sh) for installing dependencies, running scripts,
and the lockfile.

```bash
bun install
bun run dev
```

Then open <http://localhost:5173>.

## Scripts

| Command             | What it does                                                  |
| ------------------- | ------------------------------------------------------------- |
| `bun run dev`       | Start the Vite dev server                                     |
| `bun run build`     | Type-check, build to `dist/`, and write the SPA fallback page |
| `bun run preview`   | Preview the production build locally                          |
| `bun run lint`      | Run ESLint                                                    |
| `bun run typecheck` | Type-check without emitting                                   |

## Project structure

```
src/
├── components/         Reusable UI: layout, cards, badges, icons
├── data/               Site content: profile, socials, stack, projects
├── hooks/              useMediaQuery and usePageMeta
├── pages/              Route components and their CSS modules
├── styles/global.css   Design tokens, theme palettes, base styles
├── theme/              Theme context, provider, and hook
├── main.tsx            Application entry point
└── routes.tsx          Route table
```

### Updating content

Most edits only touch `src/data/`:

- `site.ts` — name, title, description, source URL, and social links
- `stack.ts` — tech stack groups and icons
- `projects.ts` — project cards
- `badges.ts` — 88x31 badges

Page copy lives in `src/pages/`.

## Theming

`ThemeProvider` stores `light`, `dark`, or `system` in `localStorage` and applies the
resolved value to `<html data-theme="…">`. An inline script in `index.html` applies the
theme before first paint to avoid a flash. All design tokens are defined in
`src/styles/global.css`.

## Deployment

The build output in `dist/` is completely static.

- **Custom domain or root host** (for example `medrinnn.dev`): run `bun run build` and
  publish `dist/`.
- **GitHub Pages project site** (for example `user.github.io/website/`): build with a
  base path so assets resolve under the subdirectory:

  ```bash
  VITE_BASE=/website/ bun run build
  ```

  `scripts/postbuild.ts` copies `index.html` to `404.html`, which lets deep links such
  as `/website/about` boot the client-side router. The workflow in
  `.github/workflows/deploy.yml` handles both steps automatically.

The workflow reads an optional repository variable named `VITE_BASE`; set it to `/`
when deploying to a custom domain. Enable Pages with **Settings → Pages → Source:
GitHub Actions** before the first run.

`public/_redirects` is included for hosts that support Netlify-style SPA rewrites.

## License

Personal content © Mohamed Reda. The code is shared for reference and learning.
