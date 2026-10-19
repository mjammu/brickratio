# Page structure, routes & constants
> Read when adding, removing or reordering sections, editing section copy, or working on routes.

## PAGE STRUCTURE (`/`)

Order (don't reorder without asking):

1. **Nav** (`OMNav`): floating island. Logo · How it works · Plans · FAQ · **See the plans** button.
2. **Hero** (`OMHero`): synapse brain on top → pill "The Owner's Manual Method" → H1 **"Does your whole business *run through your brain?*"** → sub: "The Owner's Manual Method gets your business into words, so AI can work from it. Your business is no longer limited to what your brain can hold or remember." → **See the plans** + "How it works" link → "For solo owners of service businesses. No technical skills needed." The CTA must stay above the fold at 1440×900 and 390×844.
3. **Sound familiar?** (`BeforeAfter`): scenario "You just signed a new customer and need to onboard them." Before (white card: 3 manual steps + "Then do it all again for the next customer.") vs After (dark card: "You type" → "Your AI writes, in your voice" with highlighted manual-sourced details → "Also ready" chips). Copy comes from Mahesh's onboarding example; keep it.
4. **How it works** (`Method`, `#how-it-works`): "The Owner's Manual *Method.*" + 3 steps + **Tools** (Required: Claude Pro *or* ChatGPT Plus; Optional: Wispr Flow) with logos from `public/tools/`.
5. **Plans** (`Plans`, `#plans`): "How much help *do you want?*" + 3 cards.
6. **A note from Mahesh** (`OMFounderNote`): headshot `/mahesh.png` + his story (owners run on what's in their head → bandwidth → he explained his business once and let AI work from it like a second brain → cleared his head, more creative, scaled exponentially → "I found this method really helpful, and now I want to share it with everyone else too.").
7. **FAQ** (`OMFaq`, `#faq`): title just "FAQ". Three questions: Do I need to be technical? · Which AI tool do I use? · How long does it take? Answers are warm and human, never robotic, no exclamation points.
8. **Final CTA** (`OMBottomCTA`): "What if it didn't all *run through you?*" + See the plans.
9. **Footer** (`OMFooter`): logo · mahesh@brickratio.com · Privacy.

`/owners-manual` permanently redirects to `/` (`next.config.ts`).

**Other routes:**
- `/privacy`: plain-language privacy policy (Stripe, Vercel, no analytics or cookies of our own, contact email). Update it if analytics, email tools or data collection change.
- **Legacy (from the old agency site):** `/resources` and `/solutions/ai-strategy-call`, `/solutions/ai-readiness-audit`. They still use the old `Nav`/`Footer`/`BottomCTA` components, whose agent links point at sections that no longer exist. Ask Mahesh before investing in them; he may want them removed or re-pointed.

---

## CONSTANTS (`lib/constants.ts`, never hardcode)

```ts
CALENDLY_URL       // Custom Build + Pro post-purchase booking (for now)
CONTACT_EMAIL      // mahesh@brickratio.com, used on the page and privacy policy
EMAIL              // hello@brickratio.ai, legacy (old Footer only)
SITE_URL           // https://brickratio.ai
STARTER_KIT_URL    // Stripe Payment Link, Starter ($37 + optional $67 add-on)
PRO_URL            // Stripe Payment Link, Pro ($197)
CUSTOM_BUILD_URL   // = CALENDLY_URL
```
