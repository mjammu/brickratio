'use client'

import { CALENDLY_URL } from '@/lib/constants'
import Nav from '@/components/Nav'

const checkmarks = [
  'The specific AI systems that fit how your team actually works',
  'Tool recommendations across your existing stack',
  'An honest look at where you would save the most time',
  'A clear starting point — no long roadmap, just what to build first',
  'A priority order you can act on this quarter',
]

const steps = [
  {
    number: '01',
    title: 'You walk us through the work',
    time: '10 min',
    description:
      'How your team runs today. Where time goes. What decisions sit waiting on people.',
  },
  {
    number: '02',
    title: 'We map AI to your workflows',
    time: '15 min',
    description:
      'We name the systems that fit, where an AI workflow replaces a task, and where one change removes friction across several.',
  },
  {
    number: '03',
    title: 'You leave with a priority order',
    time: '5 min',
    description:
      'What to build first. What to build later. The tools you would need. An honest read on where the time savings land.',
  },
]

const pastCalls = [
  {
    client: 'SSMNC',
    result:
      'Identified manual receipt logging as the highest-impact place to start. Hundreds of hours a year going into a task that could be fully automated — and directly tied to how money was being tracked.',
  },
]

export default function AIStrategyCall() {
  return (
    <div
      style={{
        background: 'var(--bg)',
        color: 'var(--text)',
        fontFamily: 'var(--font-sans), sans-serif',
        minHeight: '100vh',
      }}
    >
      <Nav />

      {/* Hero */}
      <section
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '140px 40px 100px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            border: '1px solid var(--border)',
            borderRadius: 100,
            padding: '6px 14px',
            marginBottom: 40,
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="var(--muted)" strokeWidth="1.25" />
            <path d="M6.5 4v3l1.5 1.5" stroke="var(--muted)" strokeWidth="1.25" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Free · 30 minutes
          </span>
        </div>

        <h1
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(42px, 6vw, 64px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 24,
          }}
        >
          Get a specific AI plan for your business <em style={{ opacity: 0.42, fontStyle: 'italic' }}>in 30 minutes.</em>
        </h1>

        <p
          style={{
            fontSize: 18,
            color: 'var(--muted)',
            lineHeight: 1.65,
            marginBottom: 40,
            maxWidth: 520,
            margin: '0 auto 40px',
          }}
        >
          Walk us through how your business runs. We come back with the exact
          systems and workflows that would save you the most time.
        </p>

        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--text)',
            color: 'var(--bg)',
            padding: '14px 28px',
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Book your call
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--bg)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* What you leave with */}
      <section
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '100px 40px',
          textAlign: 'center',
        }}
      >
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
          What you leave with
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(28px, 3.5vw, 44px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 48,
          }}
        >
          A plan specific to your business. <em style={{ opacity: 0.42, fontStyle: 'italic' }}>Not generic advice.</em>
        </h2>

        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            textAlign: 'left',
            maxWidth: 520,
            margin: '0 auto',
          }}
        >
          {checkmarks.map((item) => (
            <li
              key={item}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 12,
                fontSize: 15,
                color: 'var(--text)',
                lineHeight: 1.55,
              }}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                <path d="M3.5 9l4 4L14.5 5" stroke="var(--text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* What past calls have led to */}
      <section
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '100px 40px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
            What past calls have led to
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            The first 30 minutes is <em style={{ opacity: 0.42, fontStyle: 'italic' }}>where it starts.</em>
          </h2>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 20,
          }}
        >
          {pastCalls.map((c) => (
            <div
              key={c.client}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: 28,
                maxWidth: 400,
                width: '100%',
              }}
            >
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 12,
                  letterSpacing: '0.02em',
                }}
              >
                {c.client}
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--muted)',
                  lineHeight: 1.65,
                }}
              >
                {c.result}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* How the call runs */}
      <section
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '100px 40px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
            How the call runs
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}
          >
            A focused 30 minutes, <em style={{ opacity: 0.42, fontStyle: 'italic' }}>structured for output.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
          {steps.map((step) => (
            <div
              key={step.number}
              style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: '1px solid var(--border)',
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  color: 'var(--muted)',
                  letterSpacing: '0.04em',
                }}
              >
                {step.number}
              </div>
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 8,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans), sans-serif',
                      fontSize: 16,
                      fontWeight: 700,
                      color: 'var(--text)',
                    }}
                  >
                    {step.title}
                  </h3>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      fontSize: 12,
                      color: 'var(--muted)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <circle cx="6" cy="6" r="5" stroke="var(--muted)" strokeWidth="1.25" />
                      <path d="M6 3.5V6l1.5 1.5" stroke="var(--muted)" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                    {step.time}
                  </span>
                </div>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        style={{
          borderTop: '1px solid var(--border)',
          padding: '100px 40px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(32px, 4vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: 20,
            }}
          >
            30 minutes to know exactly <em style={{ opacity: 0.42, fontStyle: 'italic' }}>where to start.</em>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--muted)',
              lineHeight: 1.65,
              marginBottom: 40,
            }}
          >
            No commitment. No pitch deck. Just a clear-eyed look at your business and
            what AI can actually do for it.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'var(--text)',
              color: 'var(--bg)',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Book your call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--bg)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
        }
      `}</style>
    </div>
  )
}
