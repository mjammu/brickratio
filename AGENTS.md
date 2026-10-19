# brickratio — AGENTS.md

**brickratio.ai** is the sales page for the **Owner's Manual Method** by Brick Ratio (founder: Mahesh Jammu).
An AI interviews a solo service-business owner and writes how their business runs into a plain-language
"Owner's Manual", so any AI can work from it. Plans: Starter $37 · Pro $197 · Custom Build $997.

Built with: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind v4 · Vercel

## Read before working

| Task | Read |
|------|------|
| Copy edits, spacing, bug fixes, styling, link swaps | `RULES.md` |
| Copy writing · offer/prices · Stripe · sections/routes · design · open items | `docs/voice.md` · `docs/offer.md` · `docs/payments.md` · `docs/page.md` · `docs/design.md` · `docs/open-items.md` |
| TypeScript or build errors | Just fix it |

`CLAUDE.md` has the file map (which component holds which section) and the list of large files to skip
(`components/synapse-brain.tsx`, legacy `app/resources/**`, `app/solutions/**`).

## Build & Dev

```bash
npm run dev     # local dev server (localhost:3000)
npm run build   # production build
npm run lint    # eslint
```

Push to `main` → Vercel auto-deploys brickratio.ai. Don't commit or push unless asked.

## Conventions

- Homepage: `app/page.tsx`; sections in `components/owners-manual/`; styles in `app/owners-manual.css` (`om-` classes)
- Import links and emails from `lib/constants.ts` (Stripe Payment Links, Calendly, contact email). Never hardcode them.
- Fonts via `next/font/google` (Instrument Serif headings, Inter body). No new fonts or colors.
- Headlines are questions or calm statements: no commands, no em dashes, no hype.
- `globals.css` has `* { margin: 0 }`, which overrides Tailwind margin utilities, so use inline margins.
- `components/synapse-brain.tsx` is the owner's component. Don't change its internals or colors.
- `/resources` and `/solutions/*` are legacy pages from the old agency site.
