# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev          # Start dev server (http://localhost:3000)
pnpm build        # Production build
pnpm lint         # ESLint (flat config, eslint.config.mjs)
```

## Stack

- **Next.js 16.2** (App Router) — uses `node_modules/next/dist/docs/` for up-to-date API reference; always consult these docs before using Next.js APIs
- **React 19** / **TypeScript 5** (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — CSS-first config in `globals.css` using `@theme inline` and `@custom-variant`, no `tailwind.config.js`
- **pnpm** as package manager
- **Path alias:** `@/*` maps to project root

## Architecture

Single-page portfolio site using App Router in `app/`:

- `layout.tsx` — root layout with IBM Plex Sans/Mono, SEO metadata, ThemeProvider, dark mode anti-flash script
- `page.tsx` — main page composing all section components (Hero, About, Experience, Skills, Projects, Education, Contact, Footer)
- `globals.css` — Tailwind v4 config, CSS custom properties for theming, dark mode via `@custom-variant dark`, global `:focus-visible` ring, section `scroll-margin-top`
- `data/portfolio.ts` — all portfolio content as typed constants (single source of truth for content updates)
- `components/` — modular section components:
  - **Server Components:** hero, about, experience, skills, projects, education, contact, footer, section (shared `Section` frame + `TechList`)
  - **Client Components (`'use client'`):** navbar (fixed nav + mobile menu + scrollspy), theme-provider (dark/light toggle via `useSyncExternalStore`)

No `pages/` directory — this is App Router only. No additional dependencies beyond Next.js, React, and Tailwind.

## Key Patterns

- **Design direction:** `DESIGN.md` is the source of direction (dials, palette, type, motif). Read it before any visual change; `antislop` is the filter applied on top of it, not a substitute for it
- **Dark mode:** class-based toggle (`.dark` on `<html>`), persisted in `localStorage`, anti-flash inline script in layout
- **Motion:** MOTION 1. Hover and focus states only, plus `scroll-behavior: smooth` behind a `prefers-reduced-motion` guard. No scroll-triggered or load animations
- **Section frame:** every section but Hero renders through `Section` in `components/section.tsx`, which draws the monospace rail (index + slug). Rail indices come from `sectionIndex()` in `portfolio.ts`, so nav and page cannot drift
- **Content updates:** edit only `app/data/portfolio.ts` — all sections import from this file
- **Icons:** none. Controls are labelled in monospace text (`menu`/`close`, `dark`/`light`)
