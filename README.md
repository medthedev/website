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

The build output in `dist/` is completely static. The included workflow
(`.github/workflows/deploy.yml`) publishes it to GitHub Pages on every push to
`main`, built with `VITE_BASE=/` because the site is served from the root of
`medrinnn.dev`.

`scripts/postbuild.ts` copies `index.html` to `404.html`, which lets deep links such
as `/about` boot the client-side router. `public/CNAME` records the custom domain so
other static hosts keep using it.

Enable Pages with **Settings → Pages → Source: GitHub Actions** before the first run.

### Custom domain with Porkbun

In the Porkbun dashboard, open **Domain Management → medrinnn.dev → DNS Records**.
Delete the default parking records (any `A`, `ALIAS`, `CNAME`, or URL forwarding that
points at Porkbun), then add:

| Type  | Host  | Answer             | TTL |
| ----- | ----- | ------------------ | --- |
| A     | `@`   | `185.199.108.153`  | 600 |
| A     | `@`   | `185.199.109.153`  | 600 |
| A     | `@`   | `185.199.110.153`  | 600 |
| A     | `@`   | `185.199.111.153`  | 600 |
| CNAME | `www` | `medthedev.github.io` | 600 |

Porkbun accepts a blank host for the apex (some UIs want `@`). Optional IPv6 records:

| Type | Host | Answer                |
| ---- | ---- | --------------------- |
| AAAA | `@`  | `2606:50c0:8000::153` |
| AAAA | `@`  | `2606:50c0:8001::153` |
| AAAA | `@`  | `2606:50c0:8002::153` |
| AAAA | `@`  | `2606:50c0:8003::153` |

Do not use a `CNAME` on the apex, and do not enable Porkbun URL forwarding — GitHub
Pages handles the `www` → apex redirect once both names are configured.

Then in GitHub, open **Settings → Pages**:

1. Set **Source** to **GitHub Actions**.
2. Enter `medrinnn.dev` under **Custom domain** and click **Save**.
3. Wait for the DNS check to pass, then enable **Enforce HTTPS**. Certificate
   provisioning can take up to 24 hours, but usually takes a few minutes.

Check propagation from a terminal:

```bash
dig +short medrinnn.dev A
dig +short www.medrinnn.dev CNAME
```

`www.medrinnn.dev` should point at `medthedev.github.io`, and the apex should return
the four GitHub Pages IPs above.

### Deploying to a project page instead

To serve from `https://medthedev.github.io/website/` (no custom domain), build with a
base path so assets resolve under the subdirectory:

```bash
VITE_BASE=/website/ bun run build
```

Set a repository variable named `VITE_BASE` to `/website/` so the workflow uses the
same base. `public/_redirects` is included for hosts that support Netlify-style SPA
rewrites.

## License

Personal content © Mohamed Reda. The code is shared for reference and learning.
