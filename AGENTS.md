# AGENTS.md

## Project overview

**Music Widgets Components** is a static Astro site that showcases a large gallery of
hand-authored, copy-pasteable music-player UI snippets (players, playlists, mini-players,
"now playing" bars, equalizer/waveform bars, artist/profile cards) styled with Tailwind
CSS. It is a UI-inspiration gallery / portfolio piece by FrankUXUI, not a published
component library — there is no npm package API, no prop-driven component system for the
widgets themselves.

The site is deployed to GitHub Pages under the base path
`/music-widgets-components-v2.1` (see `astro.config.mjs`), via
`.github/workflows/deploy.yml` on push to `main`.

## Tech stack

- **Astro 7** (`output: 'static'`) — no React/Vue/Svelte, no client-side UI framework.
  Interactivity is plain vanilla DOM JS inside `<script>` tags in `.astro` files.
- **Tailwind CSS v4**, CSS-first config (no `tailwind.config.js`) — tokens and the
  `@theme` block live in `src/styles/global.css`; the plugin is wired via
  `@tailwindcss/vite` in `astro.config.mjs`.
- **TypeScript**, `strict` mode (`tsconfig.json` extends `astro/tsconfigs/strict`).
- `@astrojs/sitemap` for sitemap generation.
- `@lucide/astro` is an installed dependency but **is not actually used** — icons are
  hand-inlined raw `<svg>` markup instead (see Conventions below).

## Setup & commands

Package manager is **npm** (only `package-lock.json` is committed). CI uses Node 24.

```bash
npm install
npm run dev       # astro dev --port 4321 --host
npm run build     # astro build
npm run preview   # astro preview
```

There is **no test script, no lint script, no typecheck script, and no Storybook**.
Do not assume `npm test`, `npm run lint`, or similar commands exist — they don't.
Prettier is a devDependency but there is no `format` npm script; run it directly if
needed: `npx prettier --write .`.

## Project structure

```
src/
├── components/
│   ├── BaseHead.astro      # <head> meta/SEO/OG/JSON-LD (only component with a Props interface)
│   ├── Header.astro        # site header, includes ThemeToggle
│   ├── Footer.astro        # site footer with social links
│   ├── ThemeToggle.astro   # light/dark toggle button + inline theme script
│   ├── WidgetAboutMe.astro # "about me" popover/dialog widget
│   └── Presentation.astro  # large hero showcase (~50 widget <article> cards)
├── config/
│   └── index.ts            # siteConfig: title, description, keywords, social links
├── layouts/
│   ├── Root.astro           # base HTML shell, imports global.css + BaseHead
│   └── Expo.astro           # wraps Root + Header/Footer + the `.expo` masonry container
├── pages/
│   ├── index.astro          # landing/hero page
│   ├── widgets.astro        # main widget gallery — very large, ~90 widget <article> cards
│   ├── draft.astro          # scratch/staging gallery for widgets in progress
│   ├── test.astro           # trivial scratch page
│   └── util.astro           # trivial scratch page
└── styles/
    └── global.css           # Tailwind import, @theme tokens, dark-mode variant, masonry rules
```

`test.astro` and `util.astro` are dev scratch pages, not real routes to build on top of
unless asked. `draft.astro` is a staging area for widgets not yet promoted to
`widgets.astro`.

**File size warning**: `widgets.astro` and `draft.astro` are extremely large single
files. Use targeted search (grep, offset-based reads) instead of reading them in full.

## Architecture & conventions

- **Widgets are inline markup, not components.** Individual music widgets are plain
  `<article>` blocks written directly inside `widgets.astro`, `draft.astro`, and
  `Presentation.astro` — there is no per-widget `.astro` component and no prop API to
  extend. When adding a new widget, follow the existing pattern of a self-contained
  `<article>` block rather than inventing a new abstraction, unless the task is
  specifically to refactor toward reusable components.
- **Path aliases**: `@/*` and `~/*` both resolve to `./src/*` (see `tsconfig.json`).
  Existing components import as `@/components/...`, `@/layouts/...`, `@/config`.
- **Icons**: use raw inline `<svg>` markup with a `data-icon="name"` attribute, matching
  the existing convention. Don't introduce `@lucide/astro` usage unless explicitly asked
  to migrate the icon system.
- **Images**: widget imagery is hotlinked from Pexels/Unsplash/randomuser.me. Preserve
  the `data-author` / `data-author-profile` attributes used for photo credit when
  copying or adding image-based widgets.
- **Dark mode**: implemented in `ThemeToggle.astro` by toggling a `.dark`/`.light` class
  on `<html>` and persisting to `localStorage`. The global `Window.theme` interface
  declared in `env.d.ts` is **not implemented anywhere** — treat it as dead/aspirational
  typing, not a real API to call.
- Astro components generally take no props (the `.astro` file itself is the entry
  point); only `BaseHead.astro` defines a `Props` interface.

## Code style

- Formatting via Prettier + `prettier-plugin-astro` (`.prettierrc`): double quotes,
  required semicolons, `arrowParens: always`, `printWidth: 200` (matches the long
  single-line Tailwind `class` strings used throughout).
- No ESLint is configured (`.vscode/settings.json` sets `"eslint.enable": false`) —
  don't add ESLint-driven fixes or assume lint rules exist.
- TypeScript strict mode is enabled; keep new `.ts`/frontmatter code consistent with
  that (no implicit `any`, etc.).

## Commit conventions

Recent commit history uses short, lowercase, casual messages (e.g. `more widgets`,
`fixed hero`, `update og image`) — no Conventional Commits prefixes. Match this style
unless told otherwise.
