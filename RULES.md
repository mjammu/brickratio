# RULES.md — Brick Ratio (read before every change)
# Everyday edit rules. Deeper topics live in docs/ (see the routing table in CLAUDE.md).

## OFFER (don't change without Mahesh)
Name: "Owner's Manual Method" (the deliverable is the "Owner's Manual")
For: solo owners of service businesses, non-technical
Plans: Starter $37 · Pro $197 founder price · Custom Build $997 by application
$67 Live Group Setup add-on = Stripe checkout only, never on the page
No Pro duration on the page

## COPY RULES
- Headlines: questions or calm statements. NO commands, NO imperative tails, never judge the reader
- Italic fade on the emotional phrase: <em className="om-em">
- No em dashes (—) in visible copy · no exclamation points · plain language · outcomes over features
- NEVER: leverage, synergy, cutting-edge, next-generation, harness the power of AI
- No period after "Brick Ratio" in the logo

## PALETTE (app/globals.css)
--bg:#faf7f2 --bg-card:#f4f0e8 --bg-hover:#ede8df --text:#1c1410 --muted:#8c7b6e --border:#ddd5c8
Body/secondary text: var(--om-ink-2) (68% ink, passes AA). --muted = decorative only.
No dark mode. No new colors. Only accent = clay #B4532A inside the synapse brain (don't touch it).

## FONTS
Headlines: Instrument Serif (--font-serif) · Body/UI: Inter (--font-sans) · next/font/google only

## CONSTANTS (always import, never hardcode)
import { CALENDLY_URL, CONTACT_EMAIL, SITE_URL, STARTER_KIT_URL, PRO_URL, CUSTOM_BUILD_URL } from '@/lib/constants'

## PAGE
Section order: Nav → Hero → Sound familiar? → How it works → Plans → Note from Mahesh → FAQ → Final CTA → Footer
(File for each section: CLAUDE.md file map.)

## STYLING GOTCHAS
- `* { margin: 0 }` in globals.css beats Tailwind margins → use inline margins (Tailwind widths OK)
- Inline style={{}} + small <style> media blocks at 768px (repo idiom)
- Buttons: om-btn om-btn--primary|secondary, 44px min height, hover opacity 0.82
- Borders always 1px var(--border) · radius: cards 20, chips 100
- Max 2 eyebrow labels on the page · Reveal.tsx is visible by default
- Hero CTA must stay above the fold at 1440×900 and 390×844
- synapse-brain.tsx: never edit internals or colors

## WORKFLOW
- Mahesh previews at localhost:3000 first; commit/push only when asked
- Push to main = Vercel auto-deploys brickratio.ai
- Never ask for the Stripe secret key; use `stripe login` (device approval)
