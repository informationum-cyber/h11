# AGENTS.md

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

Hansel Eleven is a boutique transformation and professional enablement company. The website is a marketing landing page built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public/                 # Static assets
├── src/
│   ├── routes/
│   │   ├── __root.tsx      # Root layout, shell component, global CSS import
│   │   └── index.tsx       # Landing page (Hero, 3 Pillars, About Us)
│   ├── router.tsx          # TanStack Router initialization
│   └── styles.css          # Tailwind CSS configuration
├── .netlify/               # Netlify configuration and local build cache
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with TanStack and Netlify plugins
```

## Key Concepts

### File-Based Routing (TanStack Router)

Routes are defined in `src/routes/`:
- `__root.tsx` sets up the HTML document shell and metadata.
- `index.tsx` contains the entire landing page built with Tailwind CSS.

### Styling Conventions
- The project heavily utilizes Tailwind CSS utility classes.
- The primary brand colors are Navy Blue (`#2C5282`) and Teal (`#14B8A6`). These are used as arbitrary values in classes (e.g., `text-[#2C5282]`, `bg-[#14B8A6]`).

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
netlify dev      # Start Netlify local emulator
```

## Decisions
- Replaced the default marketing template with a custom, tailored brand identity for "Hansel Eleven Inc." per the user's request.
- Centralized the page layout into `index.tsx` for a clean, single-page application experience.
