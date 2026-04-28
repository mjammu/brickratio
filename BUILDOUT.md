# BUILDOUT.md — Brick Ratio Landing Page
# One-time scaffold prompt. Delete this file after the project is built.
# Before making any changes beyond initial build, read BRAND.md first.

---

## YOUR TASK

You are building the production landing page for **Brick Ratio** (brickratio.ai), an AI automation agency. The design is fully finalized. Work through every step below in order. Do not skip steps. Do not ask for confirmation between steps — complete everything autonomously and report when done.

---

## STEP 1 — SCAFFOLD THE PROJECT

Run in terminal:

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --no-src-dir \
  --import-alias "@/*"
```

Note: Use `.` not a subfolder — we are already inside the `brickratio` project folder.

---

## STEP 2 — FILE STRUCTURE

Create the following files:

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Agents.tsx
│   ├── HowItWorks.tsx
│   ├── CaseStudy.tsx
│   ├── BottomCTA.tsx
│   └── Footer.tsx
├── lib/
│   └── constants.ts
├── BRAND.md        ← already exists, do not modify
└── BUILDOUT.md     ← this file, delete after build
```

---

## STEP 3 — CONSTANTS

Create `lib/constants.ts`:

```ts
export const CALENDLY_URL = 'https://calendly.com' // TODO: replace with real link
export const EMAIL = 'hello@brickratio.ai'
export const SITE_URL = 'https://brickratio.ai'
```

Use `CALENDLY_URL` and `EMAIL` everywhere. Never hardcode URLs in components.

---

## STEP 4 — FONTS & LAYOUT

In `app/layout.tsx`, load fonts via `next/font/google`:

```tsx
import { Instrument_Serif, Inter } from 'next/font/google'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})
```

Apply both variables to the `<html>` className. Set metadata:

```tsx
export const metadata: Metadata = {
  title: 'Brick Ratio — Custom AI Systems',
  description: 'We build and deploy AI agents for small and mid-sized businesses. Custom AI systems that automate the work slowing you down.',
  metadataBase: new URL('https://brickratio.ai'),
  openGraph: {
    title: 'Brick Ratio — Custom AI Systems',
    description: 'Custom AI systems that automate the work slowing you down.',
    url: 'https://brickratio.ai',
    siteName: 'Brick Ratio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brick Ratio — Custom AI Systems',
    description: 'Custom AI systems that automate the work slowing you down.',
  },
}
```

---

## STEP 5 — CSS VARIABLES

In `app/globals.css`, define:

```css
:root {
  --bg:        #faf7f2;
  --bg-card:   #f4f0e8;
  --bg-hover:  #ede8df;
  --text:      #1c1410;
  --muted:     #8c7b6e;
  --border:    #ddd5c8;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans), sans-serif;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3 { font-family: var(--font-serif), serif; }
```

---

## STEP 6 — BUILD COMPONENTS

### `Nav.tsx`

Fixed top nav, 64px height, frosted glass background `rgba(250,247,242,0.85)` with `backdrop-filter: blur(12px)`. Border bottom 1px `--border`. z-index 100.

**Left:** Logo — "Brick Ratio." in Instrument Serif 20px. The period is `<span>` styled italic, 50% opacity.

**Center:** Three nav items:
- **Solutions** — on hover shows a dropdown with 4 items (use CSS hover or useState):
  - Company Brain / "Unified company knowledge" → `#agents`
  - SEO Agent / "Organic content at scale" → `#agents`
  - Lead Agent / "Daily qualified prospects" → `#agents`
  - Custom Build / "Purpose-built for your workflow" → `#agents`
  - Dropdown: white bg, 1px border `--border`, 14px border-radius, box-shadow, min-width 240px
- **Agencies** → `#` (v2)
- **Resources** → `#` (v2)

**Right:** "Book a call" button — `--text` bg, `--bg` text, 8px 18px padding, 8px border-radius. Links to `CALENDLY_URL`. Hover: 85% opacity.

Mobile: hide center nav links. Show only logo + CTA button.

---

### `Hero.tsx`

Padding: 160px top, 100px bottom. Max-width 900px, centered.

```
H1: "Custom AI systems that automate the work slowing you down."
```
- Font: Instrument Serif, clamp(42px, 6vw, 72px), line-height 1.1, letter-spacing -0.02em
- Wrap `slowing you down.` in `<em>` — italic, 45% opacity

```
Subheadline: "We build and deploy AI agents for small and mid-sized businesses. Most systems ship in under two weeks."
```
- Inter 18px, color `--muted`, max-width 520px, line-height 1.65, margin-top 28px

Two CTAs (flex row, gap 12px, margin-top 40px):
- Primary: "Schedule a free strategy call" → `CALENDLY_URL` — dark button
- Ghost: "See our agents →" → `#agents` — text only, underline on hover

Animate hero children with `fadeUp` stagger (opacity 0 → 1, translateY 24px → 0).

---

### `TrustBar.tsx`

Full-width bar. Border top and bottom 1px `--border`. Padding 32px. Flex row, centered, gap 32px.

Content:
- Text: "Advised by people from" — Inter 13px, `--muted`
- Anthropic logo: SVG path below, 20x20px, fill currentColor, + bold "Anthropic" text
- OpenAI logo: SVG path below, 20x20px, fill currentColor, + bold "OpenAI" text

Each logo item: flex row, gap 8px, opacity 55%, hover 80%, transition 0.2s.

**Anthropic SVG path:**
```
M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-3.654 0H6.57L0 20h3.603l1.732-4.355h5.735L9.36 12.01H6.87l2.302-5.793V3.52z
```
viewBox="0 0 24 24"

**OpenAI SVG path:**
```
M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.2 14.01a4.5 4.5 0 0 1-1.86-6.114zm16.597 3.855l-5.843-3.371 2.019-1.168a.076.076 0 0 1 .072 0l4.616 2.665a4.506 4.506 0 0 1-.695 8.123v-5.68a.77.77 0 0 0-.169-.569zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.616-2.665a4.505 4.505 0 0 1 6.682 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.504 4.504 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z
```
viewBox="0 0 24 24"

---

### `Agents.tsx`

`'use client'` — uses useState. Default active tab: 0.

**Layout:** Two-column grid. Left col 280px (tabs). Right col flexible (content). Border 1px `--border`, border-radius 20px, overflow hidden. Section id="agents".

**Section above grid:**
- Eyebrow: "What we build" — 11px, 700 weight, letter-spacing 0.12em, uppercase, `--muted`
- H2: `AI systems that run parts of <em>your business.</em>` — Instrument Serif
- Sub: "Pick what your team needs. Most engagements ship in under two weeks." — Inter 17px, `--muted`

**Left tabs panel:** `--bg` background, right border 1px `--border`, padding 12px, flex col, gap 4px.

Each tab: padding 14px 16px, border-radius 10px, cursor pointer.
- Default: transparent bg
- Hover: `--bg-card`
- Active: white bg, 1px border `--border`

Tab shows: name (14px, 700, `--text`) + tagline (12px, `--muted`)

**Right content panel:** white bg, padding 40px.

Each panel shows:
- H3 in Instrument Serif 28px
- Description paragraph — Inter 15px, `--muted`, line-height 1.7, max-width 500px
- Bullet list — 5px dot, 14px Inter, `--text`
- "Schedule a call →" CTA → `CALENDLY_URL` — small dark button

**4 Agents:**

**Company Brain** / "Unified company knowledge"
Description: "A searchable memory layer built across the tools and data your company already runs on. Your team asks questions and gets answers with full context — instantly."
Bullets:
- Connects meetings, docs, email, Slack, CRM, and more into one searchable layer
- Custom connectors for internal systems — SQL, data warehouses, internal APIs
- Answers cite back to original sources so nothing gets lost in translation
- New team members get up to speed in days, not months

**SEO Agent** / "Organic content at scale"
Description: "Research, write, and publish SEO content on a steady cadence — without a content team. Built around your target keywords, voice, and publishing workflow."
Bullets:
- Automated keyword research tied to your ICP and competitive gaps
- Drafts optimized articles at scale, reviewed before they go live
- Publishes on a consistent schedule to build long-term organic traffic
- Tracks rankings and adjusts content strategy based on what performs

**Lead Agent** / "Daily qualified prospects"
Description: "A daily digest of qualified prospects, researched and scored for your ideal customer profile. Delivered to your inbox or CRM before your team starts their day."
Bullets:
- Pulls from live signals — job postings, funding, news, hiring patterns
- Scores and filters against your ICP criteria automatically
- Outputs to Slack, email digest, or directly into your CRM
- Zero manual research — your team shows up with a prioritized list

**Custom Build** / "Purpose-built for your workflow"
Description: "A purpose-built AI system for the workflow no off-the-shelf tool can handle. We scope it with you, build it fast, and stay on for improvements."
Bullets:
- Works from your existing stack — no rip-and-replace required
- Built using battle-tested agent frameworks, not experimental prototypes
- Delivered with documentation so your team can own it long-term
- Ongoing support included for the first 30 days post-launch

Mobile: stack vertically. Tabs become a horizontally scrollable row above the content panel.

---

### `HowItWorks.tsx`

Section eyebrow: "How it works"
H2: `From first call to working system <em>in under two weeks.</em>`

Three step cards in a horizontal grid, 2px gap, no outer border-radius on middle card:

| Step | Title | Body |
|------|-------|------|
| 01 | Discovery | We learn how your business runs and identify the highest-value workflows to automate first. |
| 02 | Build | We build and deploy your system. Most projects are live within one to two weeks of kickoff. |
| 03 | Train & Support | Your team learns the system. We stay on for the first 30 days to iterate and improve. |

Step number: Instrument Serif 48px, color `--border` (decorative).
Card bg: `--bg-card`. First card: rounded left corners. Last card: rounded right corners.
Mobile: stack vertically, all cards fully rounded.

---

### `CaseStudy.tsx`

Full-width dark card — background `--text`, border-radius 24px, padding 64px.
Two-column grid: left text, right 2x2 stats.

**Left:**
- Label: "Nonprofit · Operations" — 11px uppercase, 40% white opacity
- H3: "Every receipt is tracked. Zero manual data entry." — Instrument Serif 32px, white
- Description: "SSMNC was manually logging hundreds of receipts per month across events, donations, and operations. We built a receipt ingestion agent that extracts, categorizes, and logs everything automatically into their existing Google Sheets workflow." — 15px, 55% white opacity
- Tags (pill style, white border 15% opacity): Receipt Agent · Google Sheets · Automation

**Right — 2x2 stat grid:**

| Value | Label |
|-------|-------|
| 100% | Of receipts captured automatically |
| ~40h | Saved per month in manual entry |
| 2wk  | From kickoff to live system |
| $0   | Added headcount to run it |

Stat values: Instrument Serif 40px, white. Labels: 12px, 45% white opacity.
Each stat card: `rgba(250,247,242,0.06)` bg, rounded corners, padding 28px 24px.

Mobile: stack vertically, stats 2x2 grid stays.

---

### `BottomCTA.tsx`

Centered, max-width 700px, padding 120px vertical.

- Eyebrow: "Let's build" — centered
- H2: "Figure out where AI fits your business."
- Body: "Book a free 30-minute strategy call. Tell us how your business runs. We'll come back with a specific plan — no fluff, no pitch deck."
- Buttons (centered, flex row):
  - Primary: "Schedule a strategy call" → `CALENDLY_URL`
  - Ghost: "Or email us directly →" → `mailto:hello@brickratio.ai`

---

### `Footer.tsx`

Border top 1px `--border`, padding 40px. Flex row, space-between.

- Left: Logo "Brick Ratio." — Instrument Serif 18px, period italic 40% opacity
- Center: Links — Solutions · Agencies · Resources · Contact (`mailto:hello@brickratio.ai`)
- Right: "© 2026 Brick Ratio. All rights reserved." — 12px, `--muted`

Mobile: stack vertically, left-aligned.

---

## STEP 7 — ASSEMBLE `app/page.tsx`

```tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Agents from '@/components/Agents'
import HowItWorks from '@/components/HowItWorks'
import CaseStudy from '@/components/CaseStudy'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Agents />
        <HowItWorks />
        <CaseStudy />
        <BottomCTA />
      </main>
      <Footer />
    </>
  )
}
```

---

## STEP 8 — LOCAL DEV CHECK

```bash
npm run dev
```

Verify at `http://localhost:3000`:
- [ ] Cream background loads
- [ ] Instrument Serif renders on all headlines
- [ ] Nav is fixed, Solutions dropdown appears on hover
- [ ] Agent tabs switch on click
- [ ] All CTA buttons present and link to CALENDLY_URL
- [ ] Fully responsive at 375px
- [ ] `npm run build` passes with zero errors

Fix all issues before proceeding.

---

## STEP 9 — GITHUB

```bash
git init
git add .
git commit -m "feat: initial brick ratio landing page"
```

Create repo and push using GitHub CLI:

```bash
gh repo create brickratio --public --source=. --remote=origin --push
```

If `gh` is not installed, output the repo creation URL and these commands:

```bash
git remote add origin https://github.com/maheshjammu/brickratio.git
git push -u origin main
```

---

## STEP 10 — VERCEL DEPLOY

```bash
npx vercel --yes --prod
```

When prompted: project name `brickratio`, framework Next.js (auto-detected), all defaults.

If Vercel CLI fails, output these instructions:
1. Go to vercel.com → Add New Project
2. Import `maheshjammu/brickratio` from GitHub
3. Click Deploy (zero config needed)

---

## STEP 11 — DOMAIN

Output these DNS records for connecting `brickratio.ai` at the registrar:

```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

In Vercel: Project Settings → Domains → add `brickratio.ai` and `www.brickratio.ai`.

SSL is automatic. Live within minutes to a few hours after DNS propagation.

---

## FINAL CHECKLIST

- [ ] `npm run build` passes clean
- [ ] All links use constants from `lib/constants.ts`
- [ ] Fonts load correctly
- [ ] Mobile responsive at 375px
- [ ] GitHub repo pushed
- [ ] Vercel live URL confirmed
- [ ] DNS records documented for user

**After confirming everything works: delete this file (BUILDOUT.md) from the repo.**

```bash
rm BUILDOUT.md
git add .
git commit -m "chore: remove buildout prompt"
git push
```
