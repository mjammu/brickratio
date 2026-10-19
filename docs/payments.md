# Payments (Stripe)
> Read for any Stripe, checkout link, price, tax or receipt work.

## PAYMENTS (Stripe)

- Live Stripe account: **"Brick Ratio - Owners Manual"** (`acct_1US7h8RU12rQKUUK`). Not the "Olera Acquisitions" account.
- Checkout = **Stripe Payment Links** (no code, no keys in the site). URLs live in `lib/constants.ts`.
- **Managed Payments is OFF** on both links: live sessions aren't eligible (Stripe requires fully automated digital products). Brick Ratio is the merchant of record and handles sales tax; Stripe Tax can be added later. Products carry tax codes (Starter: on-demand online course, written; add-on and Pro: live virtual training).
- Receipt emails: ON (Stripe Settings → Customer emails).
- To change prices or products: create a new Price and Payment Link in Stripe (prices are immutable), then update the constant.
- **Never ask Mahesh to paste a secret key into chat.** Use `stripe login` (browser device approval). On this account the CLI runs in live mode (`--live`). A sandbox "Brick Ratio test" (`acct_1US7uDRbSVZiX0F2`) exists but is unused.
