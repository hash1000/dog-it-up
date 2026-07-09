@AGENTS.md
# Project: [DOGITUP]

## Stack
- Next.js 15 (App Router), TypeScript strict, Tailwind CSS
- Framer Motion for animations
- No CSS-in-JS, no inline styles

## Figma MCP Integration Rules
- Before building any component, first call get_variable_defs on the
  frame to extract tokens (colors, spacing, typography, radius).
- All colors/fonts/spacing MUST come from tailwind.config.ts tokens —
  never hardcode hex values or px in components.
- Match Figma auto-layout to flex/grid; respect exact padding and gaps.
- Export image/icon assets from Figma into /public/assets, use next/image.

## Component Conventions
- One component per file in /components, PascalCase filenames.
- Server Components by default; add "use client" only when needed
  (state, event handlers, Framer Motion).
- Every component responsive: mobile-first, breakpoints sm/md/lg/xl.
- Semantic HTML (header, nav, section, footer) — no div soup.

## Quality Bar
- No `any` types. Props typed with interfaces.
- Run `npm run build` after each section to verify no type errors.