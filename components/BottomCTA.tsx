'use client'

import { CALENDLY_URL, EMAIL } from '@/lib/constants'

export default function BottomCTA() {
  return (
    <section
      style={{
        padding: '120px 32px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: 700 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 20,
          }}
        >
          Let&apos;s build
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(32px, 4vw, 52px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: 20,
          }}
        >
          Figure out where AI fits your business.
        </h2>
        <p
          style={{
            fontSize: 17,
            color: 'var(--muted)',
            lineHeight: 1.65,
            marginBottom: 40,
          }}
        >
          Book a free 30-minute strategy call. Tell us how your business runs. We&apos;ll come back with a specific plan — no fluff, no pitch deck.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--text)',
              color: 'var(--bg)',
              padding: '12px 28px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a strategy call
          </a>
          <a
            href={`mailto:${EMAIL}`}
            style={{
              fontSize: 15,
              color: 'var(--text)',
              textDecoration: 'none',
              borderBottom: '1px solid transparent',
              paddingBottom: 1,
              display: 'flex',
              alignItems: 'center',
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--text)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
          >
            Or email us directly →
          </a>
        </div>
      </div>
    </section>
  )
}
