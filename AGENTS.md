# brickratio — AGENTS.md

Landing page for **Brick Ratio** (brickratio.ai) — an AI automation agency.
Built with: Next.js 16 (App Router) · TypeScript · Tailwind CSS · Vercel

## Quick Reference

**Stack:** Next.js 16 App Router · TypeScript · Tailwind v4 · Vercel
**Fonts:** Instrument Serif (headings) · Inter (body/UI)
**Palette:** Warm cream — bg `#faf7f2` · text `#1c1410` · muted `#8c7b6e`

## Routing — Read Before Working

| Task | Read |
|------|------|
| Copy edits, spacing, bug fixes, styling | `RULES.md` |
| New sections, new pages, copy rewrites | `BRAND.md` |
| TypeScript or build errors | Just fix it |
| New color, font, section reorder | `BRAND.md` first |
| Rename agents | `BRAND.md` first — never rename without checking |

## Build & Dev

```bash
npm run dev     # local dev server
npm run build    # production build
npm run lint     # eslint
```

## Conventions

- Always import constants from `lib/constants.ts` — never hardcode URLs
- Components live in `components/` (Nav, Hero, TrustBar, Agents, HowItWorks, CaseStudy, BottomCTA, Footer)
- Use `next/font/google` for fonts (Instrument Serif, Inter)
- Never hardcode `CALENDLY_URL` or `EMAIL` — use constants
- Tailwind v4 with `@tailwindcss/postcss`

## Never Do Without Checking

- Add a new color or font
- Reorder page sections
- Rename any of the 4 agents
- Hardcode CALENDLY_URL or EMAIL
- Build a v2 page without checking `BRAND.md`
