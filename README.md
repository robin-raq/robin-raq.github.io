# robin-raq.github.io

Portfolio site for Raq Robinson, Applied AI Software Engineer.

Built with Next.js App Router, TypeScript, Tailwind CSS, and the Warm Vinyl design system. Deployed to GitHub Pages via static export.

## Stack

- **Framework**: Next.js 15 (App Router, `output: "export"`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom `--term-*` design tokens (Warm Vinyl v1.0)
- **Tests**: Vitest
- **Lint/typecheck**: ESLint, `tsc --noEmit`
- **Deploy**: GitHub Actions (`deploy.yml`) to GitHub Pages

## Commands

```bash
npm install         # install deps
npm run dev         # local dev server (localhost:3000)
npm run build       # static export to ./out/
npm run lint        # ESLint
npm run typecheck   # tsc --noEmit
npm run test        # Vitest (all tests)
```

## Project structure

```
app/              # Next.js App Router pages
  page.tsx          # Homepage (hero, $status, how_i_work, flagship cards)
  about/            # About page (4-section: what/where/how/looking-for)
  projects/         # Projects listing
    oh-sheet/         # Oh Sheet case study
    tunechat/         # TuneChat case study
  skills/           # Skills + Core Strengths
  resume/           # Resume viewer + download
components/       # Shared UI components
lib/              # Data and helpers
  projects.ts       # All project data (WorkProject type, tiers)
  skills.ts         # Skills matrix
  nav.ts            # Nav link definitions
public/           # Static assets
  projects/         # Project screenshots
  resume.pdf        # Downloadable resume
.github/
  workflows/
    deploy.yml      # Canonical CI: lint, typecheck, test, build, deploy
```

## Design system

Warm Vinyl v1.0. Terminal-flavored palette with a warm paper base:

| Token | Value | Role |
|---|---|---|
| `--term-teal` | `#1F9C92` | Interactive, accents |
| `--term-clay` | `#B9743A` | Live/active state |
| `--term-ink` | `#23211C` | Dark surface |
| `--term-paper` | `#F4EFE4` | Light background |

## Key engineering notes

- `output: "export"` with `trailingSlash: true` for GitHub Pages compatibility. Use `publicPath()` helper instead of `next/image` for images (basePath injection).
- Nav active state normalizes trailing slashes: `usePathname()` returns `/about/` but hrefs are `/about`.
- No duplicate CI workflows. Only `deploy.yml` fires on `main` push; the boilerplate `nextjs.yml` was removed.
- Content quality tests (`lib/content-quality.test.ts`) enforce: no em dashes, no banned phrases, no placeholder text, summary length limits, flagship completeness.

## Featured projects

- **Oh Sheet** — five-stage AI pipeline (FastAPI, Celery, Redis, ML transcription) turning YouTube links into engraved piano sheet music. [Live](https://ohsheet-production-2026.up.railway.app) | [Case study](/projects/oh-sheet/)
- **TuneChat** — real-time multiplayer piano rooms with synced sheet music, a piano-roll waterfall, and an AI practice coach. [Live](https://tunechat.raqdrobinson.com) | [Case study](/projects/tunechat/)
