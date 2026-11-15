# kovakey-website

Marketing website for **KovaKey**, a local-first, zero-knowledge password manager. The vault is encrypted on the user's device and synced through their own cloud (Google Drive, iCloud or OneDrive). KovaKey runs no servers.

The site is bilingual (English at `/`, Spanish at `/es`) and includes interactive demos: a live encryption demo (AES-256-GCM in the browser) and a password generator.

## Stack

- [Vue 3](https://vuejs.org/) + TypeScript
- [Vite](https://vite.dev/) with [vite-ssg](https://github.com/antfu-collective/vite-ssg) (static pre-rendering)
- [vue-router](https://router.vuejs.org/) and [@unhead/vue](https://unhead.unjs.io/) for routing and SEO meta
- [lucide-vue-next](https://lucide.dev/) icons, Fontsource fonts

## Getting started

Requires Node 26 (see `.nvmrc`) and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

## Scripts

| Command        | Description                                      |
| -------------- | ------------------------------------------------ |
| `pnpm dev`     | Start the dev server                             |
| `pnpm build`   | Type-check with `vue-tsc` and pre-render to `dist/` |
| `pnpm preview` | Serve the production build locally               |

## Project structure

```
src/
  components/   Page sections and UI pieces (Hero, Pricing, FAQ, CipherDemo, ...)
  i18n/         Copy for each language (en.ts, es.ts) and locale helpers
  pages/        Route pages (Home)
  styles/       Global styles
  site.ts       Site-wide config
```

## Configuration

Set `contactEmail` in [`src/site.ts`](src/site.ts) to the address that should receive launch-notification requests. While it is empty, the "notify me" buttons scroll to the availability section instead.

## Content

All user-facing copy lives in `src/i18n/`. `es.ts` defines the `Content` type and `en.ts` must satisfy it, so both languages stay in sync.
