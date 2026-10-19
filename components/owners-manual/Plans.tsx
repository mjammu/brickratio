import Reveal from './Reveal'
import Check from './Check'
import { STARTER_KIT_URL, PRO_URL, CUSTOM_BUILD_URL } from '@/lib/constants'

type Plan = {
  id: string
  name: string
  price: string
  priceNote?: string
  outcome: string
  intro?: string
  items: React.ReactNode[]
  bestFor: string
  cta: string
  href: string
  recommended?: boolean
}

const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter Kit',
    price: '$37',
    outcome: 'The do-it-yourself kit. Run the method on your own time.',
    intro:
      'Three guided interviews. Paste each one into Claude or ChatGPT, answer its questions, and it writes that part of your manual:',
    items: [
      <><strong>Your Voice</strong> (~15 min): how you talk and write, so AI sounds like you</>,
      <><strong>Your Business</strong> (~30 min): what you sell, who you sell to and how you price</>,
      <><strong>Your Top 3</strong> (~30 min): your three most repeated tasks, written step by step</>,
      "A score showing what's still missing from your manual",
    ],
    bestFor: 'Owners who like to work through things on their own.',
    cta: 'Get the Starter Kit',
    href: STARTER_KIT_URL,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$197',
    priceNote: 'founder price',
    outcome: 'You leave with AI that already knows your business.',
    intro: 'Live group sessions with recordings. You finish with:',
    items: [
      <><strong>A complete Owner&apos;s Manual</strong>, with every gap filled in</>,
      <><strong>Set up for you</strong> in Claude or ChatGPT, so your AI uses it automatically</>,
      <><strong>Ready-to-use prompts</strong> for your most common tasks, like onboarding, proposals and follow-ups</>,
    ],
    bestFor: 'Owners who want structure, guidance and accountability.',
    cta: 'Join Pro',
    href: PRO_URL,
    recommended: true,
  },
  {
    id: 'custom',
    name: 'Custom Build',
    price: '$997',
    priceNote: 'by application',
    outcome: 'We build it with you, one on one.',
    items: ['90-minute 1:1 mapping call', "A custom build of your Owner's Manual", '2 custom systems', '30 days of support'],
    bestFor: 'Complex businesses, or owners with no time to spare.',
    cta: 'Apply for a Custom Build',
    href: CUSTOM_BUILD_URL,
  },
]

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <article
      aria-labelledby={`plan-${plan.id}`}
      style={{
        position: 'relative',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        background: plan.recommended ? 'white' : 'var(--bg)',
        border: `1px solid ${plan.recommended ? 'var(--text)' : 'var(--border)'}`,
        borderRadius: 20,
        padding: '36px 28px 28px',
      }}
    >
      {plan.recommended && (
        <span
          style={{
            position: 'absolute',
            top: -12,
            left: 24,
            background: 'var(--text)',
            color: 'var(--bg)',
            borderRadius: 100,
            padding: '4px 12px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}
        >
          Recommended
        </span>
      )}

      <h3
        id={`plan-${plan.id}`}
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--om-ink-2)',
          marginBottom: 12,
        }}
      >
        {plan.name}
      </h3>
      <p style={{ display: 'flex', alignItems: 'baseline', flexWrap: 'wrap', gap: 10, marginBottom: 12 }}>
        <span className="om-price">{plan.price}</span>
        {plan.priceNote && <span style={{ fontSize: 15, color: 'var(--om-ink-2)' }}>{plan.priceNote}</span>}
      </p>
      <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.5 }}>{plan.outcome}</p>

      <div style={{ borderTop: '1px solid var(--border)', margin: '20px 0' }} />

      {plan.intro && <p style={{ fontSize: 15, lineHeight: 1.6, marginBottom: 12 }}>{plan.intro}</p>}
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {plan.items.map((item, i) => (
          <li key={i} style={{ display: 'flex', gap: 10, fontSize: 15, lineHeight: 1.5 }}>
            <Check />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="om-body" style={{ fontSize: 14, marginTop: 20, marginBottom: 24, flex: 1 }}>
        <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Best for:</strong> {plan.bestFor}
      </p>
      <a
        href={plan.href}
        className={`om-btn om-btn--block ${plan.recommended ? 'om-btn--primary' : 'om-btn--secondary'}`}
      >
        {plan.cta}
      </a>
    </article>
  )
}

export default function Plans() {
  return (
    <section id="plans" aria-labelledby="om-plans">
      <div className="om-wrap">
        <Reveal style={{ textAlign: 'center', marginBottom: 56 }}>
          <p className="om-eyebrow">Plans</p>
          <h2 id="om-plans" className="om-h2" style={{ marginBottom: 12 }}>
            How much help <em className="om-em">do you want?</em>
          </h2>
          <p className="om-lead">One-time prices. No subscription.</p>
        </Reveal>

        <div className="om-plans-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'stretch' }}>
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .om-plans-grid { grid-template-columns: 1fr !important; gap: 28px !important; max-width: 520px; margin: 0 auto; }
        }
      `}</style>
    </section>
  )
}
