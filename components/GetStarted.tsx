'use client'

import { useScrollReveal } from '@/lib/useScrollReveal'
import { CALENDLY_URL } from '@/lib/constants'

const options = [
  {
    badge: 'Free',
    badgeColor: 'var(--text)',
    duration: '30 minutes',
    title: 'AI Strategy Call',
    description:
      'Tell us how your business runs. We come back with the specific AI systems, tools, and integrations that would save you the most time.',
    bullets: [
      'Specific systems and the tools to build them on',
      'Rough time saved per workflow',
      'Priority order for what to ship first',
    ],
    cta: 'Book the free call',
    ctaHref: CALENDLY_URL,
    ctaExternal: true,
    ctaPrimary: true,
  },
  {
    badge: 'Paid',
    badgeColor: 'var(--muted)',
    duration: '1 week',
    title: 'AI Readiness Audit',
    description:
      'A week of working sessions and workflow mapping. You get a written plan: where AI fits today, the top three systems to build, and a 90-day rollout sequence.',
    bullets: [
      'Sessions with 3 to 5 people on your team',
      'Integration map across your existing stack',
      'Written deliverable your team can act on immediately',
    ],
    cta: 'Learn about the audit',
    ctaHref: `mailto:hello@brickratio.ai`,
    ctaExternal: false,
    ctaPrimary: false,
  },
]

export default function GetStarted() {
  const { ref: headRef, visible: headVisible } = useScrollReveal()
  const { ref: cardsRef, visible: cardsVisible } = useScrollReveal(0.1)

  return (
    <section style={{ padding: '0 32px 100px', maxWidth: 1100, margin: '0 auto' }}>
      {/* Header */}
      <div
        ref={headRef as React.RefObject<HTMLDivElement>}
        style={{
          textAlign: 'center',
          marginBottom: 48,
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 16,
          }}
        >
          Not sure where to start?
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: 16,
          }}
        >
          Figure out what to build <em>first.</em>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 520, margin: '0 auto' }}>
          Two ways to scope where AI fits your business before you commit to a build.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={cardsRef as React.RefObject<HTMLDivElement>}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          opacity: cardsVisible ? 1 : 0,
          transform: cardsVisible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
        className="gs-grid"
      >
        {options.map((opt) => (
          <div
            key={opt.title}
            style={{
              background: 'white',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '36px 36px 32px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Badge row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: opt.ctaPrimary ? 'var(--bg)' : 'var(--muted)',
                  background: opt.ctaPrimary ? 'var(--text)' : 'transparent',
                  border: opt.ctaPrimary ? 'none' : '1px solid var(--border)',
                  borderRadius: 100,
                  padding: '3px 10px',
                  letterSpacing: '0.04em',
                }}
              >
                {opt.badge}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                }}
              >
                {opt.duration}
              </span>
            </div>

            {/* Title */}
            <h3
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 28,
                color: 'var(--text)',
                lineHeight: 1.2,
                marginBottom: 14,
              }}
            >
              {opt.title}
            </h3>

            {/* Description */}
            <p
              style={{
                fontSize: 15,
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginBottom: 24,
              }}
            >
              {opt.description}
            </p>

            {/* Bullets */}
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                marginBottom: 32,
                flex: 1,
              }}
            >
              {opt.bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 10,
                    fontSize: 14,
                    color: 'var(--text)',
                    lineHeight: 1.5,
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    style={{ flexShrink: 0, marginTop: 1 }}
                  >
                    <path
                      d="M3 8L6.5 11.5L13 5"
                      stroke="var(--text)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.5"
                    />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={opt.ctaHref}
              target={opt.ctaExternal ? '_blank' : undefined}
              rel={opt.ctaExternal ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '13px 24px',
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'opacity 0.2s',
                background: opt.ctaPrimary ? 'var(--text)' : 'transparent',
                color: opt.ctaPrimary ? 'var(--bg)' : 'var(--text)',
                border: opt.ctaPrimary ? 'none' : '1px solid var(--border)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {opt.cta}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
