# Handoff: dependency upgrades → Skeleton + Tailwind

**Next session focus:** execute the deferred hard upgrade — Skeleton 2→5 + Tailwind 3→4 — per the plan below. Do not re-litigate scope unless the user changes it.

## Status

| Pass | State |
| --- | --- |
| Soft deps (Vite 8, Vitest 4, Kit, Svelte, TS 7 dual setup, etc.) | Done on `develop` |
| ESLint 10 flat config | Done |
| Image fix (`vite-imagetools@11` override) + `each_key_duplicate` in ForMore | Done |
| Skeleton + Tailwind | **Not started** — plan approved for iteration; awaiting execute |

Working tree is clean on `develop` (tracks `origin/develop`).

## Plan (source of truth)

Full steps, file list, and todos:

- [`/home/dano/.cursor/plans/Skeleton Tailwind upgrade-39fcb140.plan.md`](/home/dano/.cursor/plans/Skeleton Tailwind upgrade-39fcb140.plan.md)

Earlier soft-pass notes (mostly historical):

- [`/home/dano/.cursor/plans/Dependency upgrade plan-39fcb140.plan.md`](/home/dano/.cursor/plans/Dependency upgrade plan-39fcb140.plan.md)

Official docs to follow during execute: [Migrate from v2](https://www.skeleton.dev/docs/svelte/get-started/migrate-from-v2), [Theme Generator Import](https://themes.skeleton.dev/themes/import).

## Repo snapshot (held packages)

Still on old stack in `package.json`:

- `@skeletonlabs/skeleton` `^2.10.2`, `@skeletonlabs/tw-plugin` `^0.4.0`
- `tailwindcss` `^3.4.7`, `@tailwindcss/forms` / `typography`, `vite-plugin-tailwind-purgecss`, PostCSS path
- Custom theme: `src/themes.ts` (`brown1`) wired via tw-plugin in `tailwind.config.ts`
- `data-theme="brown1"` on `<body>` in `src/app.html`

Already on new stack: Vite 8, Kit 2, Svelte 5, Vitest 4, ESLint 10 flat (`eslint.config.js`), TS dual setup (`typescript@~6` + `@typescript/native` → TS 7, `svelte-check --tsgo`), `vite-imagetools` override `11.0.0`, `forceEsbuildCssMinify` in `vite.config.ts`, `src/app.pcss` (rename to `app.css` during TW4 prep).

## App Skeleton surface (small)

Only these need real rewrites after the CLIs:

1. **AppShell** — `src/routes/+layout.svelte` → custom sticky header + scroll main
2. **Drawer + `getDrawerStore` / `initializeStores`** — layout, `Header.svelte`, `DrawerContents.svelte` → `Dialog` from `@skeletonlabs/skeleton-svelte` + `$state`
3. **Accordion** — `src/routes/about/+page.svelte` → composed Accordion API
4. **Theme** — import `brown1` via Theme Generator; move `data-theme` to `<html>`

`variant-*` is sparse (~8); CLI should map most to `preset-*`. ~22 `.svelte` files total.

## Recent commits (context)

```
6ce15e7 Fix svelte key error
d324416 Apply prettier formatting after the tooling upgrade.
739d26b Fix svelte lint rules for resolve(), each keys, and external links.
407f5d6 Migrate to ESLint 10 flat config and upgrade the ESLint stack.
a3114ad Upgrade deps (Vite 8, Vitest 4, TS 7 dual setup); hold Skeleton/Tailwind/ESLint.
```

## Gotchas already hit this thread

- Keep `vite-imagetools@11.0.0` override — without it, enhanced-img in Vite 8 **dev** serves `Content-Type: image/undefined`.
- Keep or re-validate `forceEsbuildCssMinify` after TW4; lightningcss previously broke `@tailwindcss/forms` minify.
- `{#each}` keys: prefer unique fields (`path`), not `alt` (can be `undefined` → `each_key_duplicate`).
- Internal links need `$app/paths.resolve()` (eslint-plugin-svelte); external links need `rel="external …"`.

## Suggested skills

- None required for the migration itself.
- After UI/theme work that changes user-facing look or behavior: [`changie`](/home/dano/.cursor/skills/changie/SKILL.md) if the repo uses Changie for release notes (check first).
- If the user later asks to split the migration into reviewable PRs: [`split-to-prs`](/home/dano/.cursor/skills-cursor/split-to-prs/SKILL.md).

## First actions for next agent

1. Confirm user wants execute (or they already said so in that session).
2. Switch to agent mode; branch `migration/skeleton-tailwind`.
3. Follow the plan file order: TW prep → `@tailwindcss/upgrade` → `@tailwindcss/vite` → `skeleton migrate` → theme → AppShell/Drawer/Accordion → `check` / `lint` / `build` / visual smoke.
4. Do not commit/push unless asked.
