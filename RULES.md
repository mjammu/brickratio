# RULES.md — Brick Ratio (read before every change)
# For deeper context on brand, copy, or new pages → read BRAND.md instead.

## PALETTE
--bg:#faf7f2 --bg-card:#f4f0e8 --bg-hover:#ede8df
--text:#1c1410 --muted:#8c7b6e --border:#ddd5c8
No dark mode. No accent colors. No new colors.

## FONTS
Headlines: Instrument Serif (next/font/google, variable --font-serif)
Body/UI: Inter (next/font/google, variable --font-sans)
No other fonts. Never use <link> tags for fonts.

## CONSTANTS (always import, never hardcode)
import { CALENDLY_URL, EMAIL, SITE_URL } from '@/lib/constants'

## COPY RULES
- Outcomes over features ("40h saved" not "automated parsing")
- Plain language — no buzzwords
- Headline italic fade: wrap key phrase in <em> (40–45% opacity, italic)
- NEVER use: leverage, synergy, cutting-edge, next-generation, harness the power of AI

## BUTTONS
Primary: --text bg / --bg text / 12px 24px / 10px radius / hover 82% opacity
Ghost: text only, --muted, underline or arrow on hover
Nav CTA: same primary, smaller — 8px 18px / 8px radius

## SPACING
Section padding: 100px vertical (mobile: 80px) / horizontal: 40px (mobile: 20px)
Max widths: sections 1100px / hero 900px / centered CTAs 700px

## BORDERS & RADIUS
Always 1px --border. Never thicker.
Cards: 20px / Dropdowns: 14px / Tabs: 10px / Buttons: 8–10px

## PAGE SECTION ORDER (do not reorder)
Nav → Hero → TrustBar → Agents → HowItWorks → CaseStudy → BottomCTA → Footer

## 4 AGENTS (do not rename)
Company Brain · SEO Agent · Lead Agent · Custom Build

## DO NOTS
- No stock images / no hero images / no icon libraries (SVG inline only)
- No animations heavier than fadeUp or opacity transition
- No new fonts, colors, or dark mode
- No v2 pages (Agencies, Resources, individual solution pages) until instructed
- No hardcoded URLs — always use constants
