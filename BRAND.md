# BRAND.md — Brick Ratio
# Read this file before making ANY changes to the landing page, copy, design, or components.
# This is the permanent source of truth. Do not modify it without explicit instruction.

---

## WHO WE ARE

**Brick Ratio** is an AI automation agency that builds and deploys custom AI agent systems for small and mid-sized businesses. We are not a software product. We are not a SaaS tool. We are a boutique agency that does high-quality, fast custom work.

**Domain:** brickratio.ai
**Email:** hello@brickratio.ai
**Founder:** Mahesh Jammu

---

## POSITIONING

**One-line:** Custom AI systems that automate the work slowing you down.

**Who we serve:** Small and mid-sized businesses (SMBs) that have repetitive, manual workflows eating up time — and no in-house AI team to fix it.

**What we sell:** Done-for-you AI agent systems. Not consulting decks. Not strategy PDFs. Working software that runs inside their existing stack.

**Key differentiators:**
- Ships fast — most systems live in under two weeks
- No rip-and-replace — works with tools they already use
- Stays on — 30 days of support post-launch included
- Founder-led — not a faceless agency

**What we are NOT:**
- A SaaS product
- A chatbot company
- A general IT consultancy
- An offshore development shop

---

## TONE OF VOICE

**Write like:** A senior engineer who also knows how to talk to business owners. Confident. Direct. No buzzwords. No fluff.

**Always:**
- Lead with outcomes, not features ("40 hours saved" not "automated receipt parsing")
- Use plain language — if a non-technical business owner wouldn't understand it, rewrite it
- Be specific — vague claims kill trust
- Sound like a human, not a corporate AI agency

**Never:**
- Use the word "leverage" or "synergy"
- Say "cutting-edge," "next-generation," or "state-of-the-art"
- Use excessive exclamation points
- Say "we harness the power of AI" — ever
- Write in passive voice
- Make promises we can't back up with specifics

**Headline style:**
- Instrument Serif, sentence case
- Italic fade on the emotionally resonant phrase (wrap in `<em>`, 40–45% opacity)
- Examples: "Custom AI systems that automate the work *slowing you down.*"
- Example: "From first call to working system *in under two weeks.*"

---

## BRAND PALETTE

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg` | `#faf7f2` | Page background (warm cream) |
| `--bg-card` | `#f4f0e8` | Card backgrounds, step sections |
| `--bg-hover` | `#ede8df` | Hover states |
| `--text` | `#1c1410` | Primary text, buttons, logo |
| `--muted` | `#8c7b6e` | Secondary text, labels, eyebrows |
| `--border` | `#ddd5c8` | All borders and dividers |

**Dark mode:** Not supported. Do not add it. The warm cream palette is intentional.

**Accent color:** None. The palette is intentionally monochromatic warm. Do not introduce blue, purple, green, or any accent color without explicit approval.

---

## TYPOGRAPHY

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Headlines (h1, h2, h3) | Instrument Serif | 400 | Loaded via next/font/google |
| Body, UI, nav, buttons | Inter | 300–700 | Loaded via next/font/google |

**Heading sizes:**
- H1 (hero): `clamp(42px, 6vw, 72px)`, line-height 1.1, letter-spacing -0.02em
- H2 (sections): `clamp(32px, 4vw, 52px)`, line-height 1.15, letter-spacing -0.02em
- H3 (cards): 28–32px, line-height 1.2

**Never use:** Google Fonts loaded via `<link>` tags. Always use `next/font/google`.
**Never use:** System font stacks for headings.

---

## CONSTANTS (always import from `lib/constants.ts`)

```ts
CALENDLY_URL  // All "Book a call" and "Schedule a call" CTAs
EMAIL         // hello@brickratio.ai — all contact links
SITE_URL      // https://brickratio.ai
```

Never hardcode these values in components.

---

## PAGE SECTIONS (v1 — current)

The landing page has these sections in this order. Do not reorder without explicit instruction.

1. **Nav** — Fixed. Logo · Solutions dropdown · Agencies · Resources · Book a call
2. **Hero** — Headline, subheadline, two CTAs
3. **Trust Bar** — "Advised by people from" + Anthropic + OpenAI logos
4. **Agents** — Tabbed section: Company Brain · SEO Agent · Lead Agent · Custom Build
5. **How It Works** — 3 steps: Discovery · Build · Train & Support
6. **Case Study** — SSMNC receipt agent (dark card)
7. **Bottom CTA** — "Figure out where AI fits your business."
8. **Footer** — Logo · Nav links · Copyright

---

## SERVICES (the 4 agents)

These are fixed. Do not rename, reorder, or rewrite without explicit instruction.

### Company Brain
- **Tagline:** Unified company knowledge
- **One-liner:** A searchable memory layer across the tools and data your company already runs on.
- **Outcome:** Teams stop losing context. New hires ramp in days, not months.

### SEO Agent
- **Tagline:** Organic content at scale
- **One-liner:** Research, write, and publish SEO content on a steady cadence without a content team.
- **Outcome:** Consistent organic traffic without hiring writers.

### Lead Agent
- **Tagline:** Daily qualified prospects
- **One-liner:** A daily digest of qualified prospects, researched for your ICP.
- **Outcome:** Sales team shows up with a prioritized list every morning.

### Custom Build
- **Tagline:** Purpose-built for your workflow
- **One-liner:** A purpose-built AI system for the workflow no off-the-shelf tool can handle.
- **Outcome:** The specific problem gets solved. No workarounds.

---

## CASE STUDIES

### SSMNC — Receipt Ingestion Agent (v1 — placeholder numbers)

- **Client:** SSMNC (Sai Baba Temple, Durham NC)
- **Category:** Nonprofit · Operations
- **Problem:** Manually logging hundreds of receipts per month across events, donations, and operations
- **Solution:** Receipt ingestion agent that extracts, categorizes, and logs everything automatically into Google Sheets
- **Stats (placeholders — update when real numbers confirmed):**
  - 100% of receipts captured automatically
  - ~40h saved per month in manual entry
  - 2wk from kickoff to live system
  - $0 added headcount to run it
- **Tags:** Receipt Agent · Google Sheets · Automation

When real numbers are confirmed, update the stat values in `CaseStudy.tsx` and update this file.

---

## NAVIGATION RULES

**v1 (current) — placeholder links:**
- Solutions → dropdown with 4 agents, each linking to `#agents`
- Agencies → `#` (v2 page)
- Resources → `#` (v2 page)

**v2 (upcoming) — individual pages:**
- `/solutions/company-brain`
- `/solutions/seo-agent`
- `/solutions/lead-agent`
- `/solutions/custom-build`
- `/agencies` — dedicated page for agency partners
- `/resources` — blog / case studies

Do not build v2 pages until explicitly instructed.

---

## COMPONENT RULES

**Spacing system:**
- Section padding: 100px vertical on desktop, 80px on mobile
- Max content width: 1100px (sections), 900px (hero), 700px (centered CTAs)
- All sections use `margin: 0 auto` with `padding: Xpx 40px` (40px mobile: 20px)

**Borders:**
- Always 1px `--border` — never 2px or thicker
- Border-radius: 20px for major cards, 14px for dropdowns, 10px for tabs, 8px for buttons

**Buttons:**
- Primary: `--text` bg, `--bg` text, 12px 24px padding, 10px border-radius, hover: 82% opacity
- Nav CTA: same but smaller — 8px 18px, 8px border-radius
- Ghost: text only, `--muted` color, underline or arrow on hover
- Agent CTA: smaller primary — 10px 20px, 8px border-radius

**Animations:**
- Hero children: `fadeUp` stagger (opacity 0→1, translateY 24→0), 0.6s ease
- Hover transitions: always 0.2s ease
- No bounce, spring, or heavy animations anywhere

**Images:**
- No stock photography
- No hero images or background images
- Icons only from inline SVGs — no icon libraries
- If a logo or image is needed, get explicit approval first

---

## WHAT TO DO BEFORE ANY CHANGE

1. Read this file (`BRAND.md`) fully
2. Check the section rules and component rules above
3. If the change involves copy: check tone of voice rules
4. If the change involves color: verify against the palette — no new colors
5. If the change involves a new section: confirm order with the page sections list
6. If the change involves a new page: check the navigation rules for v2 status

If anything is unclear, ask before building.

---

## WHAT NOT TO DO (ever)

- Do not introduce a new font
- Do not add dark mode
- Do not add an accent color
- Do not add stock images or hero images
- Do not reorder the page sections
- Do not rename the 4 agents
- Do not hardcode `CALENDLY_URL` or `EMAIL`
- Do not add animations heavier than a simple fadeUp or opacity transition
- Do not change the palette
- Do not write marketing copy that uses forbidden words (see Tone of Voice)
- Do not build v2 pages without explicit instruction
