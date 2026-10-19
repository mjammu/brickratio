# Design system
> Read for new visual components, color/type questions, or styling problems beyond RULES.md.

## DESIGN SYSTEM

**Palette** (`app/globals.css`), warm cream:

| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#faf7f2` | Page background |
| `--bg-card` | `#f4f0e8` | Rows, chips, hover |
| `--bg-hover` | `#ede8df` | Hover |
| `--text` | `#1c1410` | Ink: text, primary buttons, dark cards |
| `--muted` | `#8c7b6e` | Decorative only (fails AA for body text) |
| `--border` | `#ddd5c8` | All borders, 1px |

- **Readable secondary text:** `--om-ink-2` = `--text` at 68% (AA on cream/white). Defined on `.om` in `app/owners-manual.css`. Don't use `--muted` for body text.
- **Accent:** none in the page design. The only accent is **clay `#B4532A`**, the synapse brain's hover glow. That's an accepted exception; don't spread clay elsewhere without asking.
- **Dark surfaces:** `--text` background with cream text (`--om-on-dark`, `--om-on-dark-2`). Used for the After card.
- No dark mode.

**Type** (`next/font/google` in `app/layout.tsx`): **Instrument Serif** for headings (400, italic for `<em>`), **Inter** for body and UI. No other fonts, no `<link>` font tags. Inside `.om`, all `h3`s render in Inter (CSS rule).

**Components and conventions:**
- Page styles: `app/owners-manual.css` (classes prefixed `om-`): `om-wrap`, `om-h2`, `om-em`, `om-lead`, `om-body`, `om-fine`, `om-eyebrow`, `om-btn om-btn--primary|secondary|block`, `om-chip`, `om-price`, `om-tool*`, `om-ba-*`, `om-faq-*`.
- Layout in components uses inline `style={{}}` plus small `<style>` media blocks (repo idiom). The breakpoint is 768px.
- **Gotcha:** `globals.css` has an unlayered `* { margin: 0 }` that overrides Tailwind margin utilities (`mx-auto`, `mb-*`). Use inline margins; Tailwind width utilities are fine.
- Buttons: primary = ink background, cream text, radius 10, min-height 44px, hover opacity 0.82. Secondary = transparent + 1px border.
- Radii: cards 20, dark cards 20–24, chips 100, tool tiles 14.
- Eyebrow labels: at most 2 on the page (currently How it works, Plans). Don't put one on every section.
- Motion: hero load stagger (`om-hero-in`); scroll fade via `Reveal.tsx`, which is **visible by default** and only hides content below the fold once JS runs. Everything respects `prefers-reduced-motion`.
- Accessibility baseline: visible `:focus-visible` rings, 44px touch targets, accessible FAQ (`aria-expanded`/`aria-controls`), skip link, labelled sections.
- **Synapse brain** (`components/synapse-brain.tsx`): Mahesh's component. **Don't change its internals or colors.** Size it from a wrapper (`w-[220px] md:w-[320px]`).

**Images:** founder photo `public/mahesh.png`; tool logos `public/tools/{claude,chatgpt,wispr-flow}.png` (Claude/ChatGPT render "framed" in a white tile, Wispr Flow as-is). No stock photos.
