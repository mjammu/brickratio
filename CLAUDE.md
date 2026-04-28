# CLAUDE.md — Brick Ratio

This file is read automatically by Claude Code at the start of every session.
It tells you what to read and when. Do not skip this routing logic.

---

## WHAT THIS PROJECT IS

Landing page for **Brick Ratio** (brickratio.ai) — an AI automation agency.
Built with: Next.js 14 (App Router) · TypeScript · Tailwind CSS · Vercel

---

## FILE ROUTING — READ THIS BEFORE ANYTHING ELSE

### For small changes (copy edits, spacing, bug fixes, styling tweaks)
→ Read **`RULES.md`** only. It has everything you need in ~250 tokens.

### For significant work (new sections, new pages, copy rewrites, v2 features)
→ Read **`BRAND.md`** only. Full brand, tone, component, and page rules.

### For the initial project build (first time only)
→ Read **`BUILDOUT.md`** and follow every step. Delete it when done.

### If you are unsure which applies
→ Default to **`RULES.md`**. Escalate to `BRAND.md` if you hit something not covered.

---

## QUICK REFERENCE (before reading any file)

**Stack:** Next.js 14 App Router · TypeScript · Tailwind · next/font/google · Vercel
**Fonts:** Instrument Serif (headings) · Inter (body/UI)
**Palette:** Warm cream — bg `#faf7f2` · text `#1c1410` · muted `#8c7b6e`
**Constants:** Always import from `lib/constants.ts` — never hardcode URLs
**Components:** `components/` — Nav, Hero, TrustBar, Agents, HowItWorks, CaseStudy, BottomCTA, Footer

---

## DECISION TABLE

| Task | Read |
|------|------|
| Fix a TypeScript or build error | Nothing — just fix it |
| Change text, headline, or CTA copy | `RULES.md` |
| Adjust spacing, padding, or font size | `RULES.md` |
| Fix a layout or responsive bug | `RULES.md` |
| Add or update a color, button style | `RULES.md` |
| Add a new section to the landing page | `BRAND.md` |
| Build a new page (Agencies, Resources, etc.) | `BRAND.md` |
| Rewrite an entire component | `BRAND.md` |
| Update case study stats or agent copy | `RULES.md` |
| Add animations or interactions | `RULES.md` |
| Initial project scaffold | `BUILDOUT.md` |

---

## FILE INDEX

| File | Purpose | Tokens | Lifespan |
|------|---------|--------|----------|
| `CLAUDE.md` | Router — you are here | ~200 | Permanent |
| `RULES.md` | Compressed rules for everyday changes | ~250 | Permanent |
| `BRAND.md` | Full brand, tone, copy, component specs | ~1,500 | Permanent |
| `BUILDOUT.md` | One-time scaffold prompt | ~2,000 | Delete after build |

---

## NEVER DO (without reading the relevant file first)
- Add a new color
- Add a new font
- Reorder page sections
- Rename any of the 4 agents
- Hardcode CALENDLY_URL or EMAIL
- Build a v2 page without checking BRAND.md
