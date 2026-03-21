# Moh Hasanudin Muslim — Personal Portfolio

A modern, professional developer portfolio built with Next.js 16, React 19, and Tailwind CSS v4. Features smooth scroll animations, dark/light mode, and a fully responsive design.

**Live:** [hasanupin.vercel.app](https://hasanupin.vercel.app)

## Features

- **Dark/Light Mode** — toggle with localStorage persistence, no flash on load
- **Smooth Scroll Navigation** — sticky navbar with active section highlighting
- **Scroll Animations** — fade-in-up effects via IntersectionObserver (no external libraries)
- **Responsive Design** — mobile-first with hamburger menu on small screens
- **SEO Optimized** — Open Graph and Twitter Card metadata
- **Fully Static** — pre-rendered at build time for fast loading

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Bold intro with gradient text, status badge, and CTAs |
| **About** | Professional summary with stats grid (years, companies, projects) |
| **Experience** | Timeline-style work history with tech tags |
| **Skills** | Categorized skill cards (Frontend, Backend, Database, DevOps, Mobile) |
| **Projects** | Project showcase cards with descriptions and links |
| **Education** | Academic background |
| **Contact** | Social links (GitHub, LinkedIn, Email) |

## Tech Stack

- **Next.js 16.2** (App Router, Server Components)
- **React 19** with TypeScript 5 (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Geist** font family (Sans + Mono)

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # Run ESLint
```

## Project Structure

```
app/
  layout.tsx              # Root layout (metadata, fonts, ThemeProvider)
  page.tsx                # Main page composing all sections
  globals.css             # Tailwind config, dark mode, animations
  data/
    portfolio.ts          # All content as typed constants
  components/
    navbar.tsx            # Sticky nav, mobile menu, theme toggle
    hero.tsx              # Hero section
    about.tsx             # About + stats
    experience.tsx        # Timeline work history
    skills.tsx            # Skill category cards
    projects.tsx          # Project cards grid
    education.tsx         # Education card
    contact.tsx           # Social links
    footer.tsx            # Copyright footer
    theme-provider.tsx    # Dark/light mode provider
    scroll-reveal.tsx     # IntersectionObserver animation wrapper
    icons.tsx             # SVG icon components
```

## Updating Content

All portfolio content lives in `app/data/portfolio.ts`. Edit this single file to update personal info, experience, skills, projects, education, and social links.

## Deploy

Push to GitHub and connect to [Vercel](https://vercel.com) for automatic deployments.
