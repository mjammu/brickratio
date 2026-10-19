# CLAUDE.md — Brick Ratio (auto-loaded; keep this file short)

**brickratio.ai** sells the **Owner's Manual Method** by Brick Ratio (founder Mahesh Jammu): an AI interviews a solo
service-business owner and writes their business into a plain-language manual so any AI can work from it.
Plans: Starter $37 · Pro $197 · Custom Build $997. Page goal: understand the offer fast, buy a plan. Keep it simple.
Stack: Next.js 16 App Router · React 19 · TS · Tailwind v4 · Vercel (push to `main` = live deploy).

## Routing: read only what the task needs

| Task | Read |
|------|------|
| Build/TS error | Nothing. Fix it. |
| Copy tweak, spacing, styling, bug fix, link swap | `RULES.md` + the one component (see map) |
| Write or rewrite copy | `docs/voice.md` |
| Prices, plans, what we sell, audience | `docs/offer.md` |
| Stripe, checkout links, tax, receipts | `docs/payments.md` |
| Add, remove or reorder sections; routes | `docs/page.md` |
| New visual component, color/type question | `docs/design.md` |
| "What's left?" / planning | `docs/open-items.md` |

## File map (go straight to the file, don't explore)

| Section / thing | File |
|---|---|
| Homepage composition + metadata | `app/page.tsx` |
| All page styles (`om-` classes, tokens) | `app/owners-manual.css` (+ base tokens in `app/globals.css`) |
| Nav · Hero · Before/After · How it works + Tools | `components/owners-manual/` `OMNav` · `OMHero` · `BeforeAfter` · `Method` |
| Plans · Note from Mahesh · FAQ · Final CTA · Footer | `components/owners-manual/` `Plans` · `OMFounderNote` · `OMFaq` · `OMBottomCTA` · `OMFooter` |
| Scroll fade · check icon | `components/owners-manual/Reveal.tsx` · `Check.tsx` |
| Links, emails, Stripe URLs | `lib/constants.ts` |
| Privacy policy | `app/privacy/page.tsx` |
| `/owners-manual` → `/` redirect | `next.config.ts` |
| Site-wide default metadata, fonts | `app/layout.tsx` |

## Don't read unless the task is about them (token sinks)
- `components/synapse-brain.tsx` (~9k tokens, mostly one data line). Mahesh's component: never edit it. Size it from its wrapper in `OMHero`.
- Legacy agency pages, ~40k tokens: `app/resources/**`, `components/resources/**`, `app/solutions/**`, `components/{Nav,Footer,BottomCTA}.tsx`.
- `node_modules`, `.next`, `public/*` binaries, and loose files in the repo root (PDF/PNG/JPG source files).
Prefer Grep plus a targeted Read over reading whole files.

## Hard rules (ask Mahesh first)
- Don't change the offer name, prices or plan contents. The $67 add-on and any Pro duration never go on the page.
- Headlines are questions or calm statements: no commands, no judging the reader, no em dashes.
- No new colors or fonts. Never hardcode links or emails (use `lib/constants.ts`). Don't reorder sections.
- Commit or push only when asked. Never ask for a Stripe secret key.
