'use client'

import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'
import Nav from '@/components/Nav'

const deliverables = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="9" cy="8" r="3.5" stroke="var(--text)" strokeWidth="1.5" />
        <path d="M3 19c0-3.314 2.686-6 6-6h2c3.314 0 6 2.686 6 6" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Current-state AI readiness assessment',
    description:
      'A clear picture of where your team spends time, where decisions stall, and where the data quality is good enough to act on.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="5" width="16" height="3" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
        <rect x="3" y="10" width="11" height="3" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
        <rect x="3" y="15" width="7" height="3" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Prioritized list of AI systems to build',
    description:
      'Each system scoped to your actual workflows, with an honest read on time savings, build complexity, and which one to start with.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="16" height="16" rx="3" stroke="var(--text)" strokeWidth="1.5" />
        <path d="M7 8h8M7 12h5" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Integration and data flow map',
    description:
      'How each system connects to the tools you already run — Notion, Slack, your CRM, Drive. Data flows and where they break documented clearly.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="var(--text)" strokeWidth="1.5" />
      </svg>
    ),
    title: '90-day rollout sequence',
    description:
      'A phased plan with clear go or no-go criteria. What can run in-house, what needs outside help, and what order produces results fastest.',
  },
]

const tiers = [
  {
    label: 'Small Business',
    timeline: '1 to 2 weeks',
    headline: 'For teams of 5 to 25 people.',
    description:
      '3 to 5 working sessions. A focused readiness report and a short list of systems worth building first.',
  },
  {
    label: 'Mid-Market',
    timeline: '2 to 4 weeks',
    headline: 'For teams of 25 to 150 people.',
    description:
      '5 to 10 sessions across departments. Workflow mapping, data audit, integration plan, and a 90-day rollout sequence.',
  },
  {
    label: 'Enterprise',
    timeline: '4+ weeks',
    headline: 'For multi-department or regulated businesses.',
    description:
      'Deep stakeholder interviews, governance review, compliance considerations, and a leadership-ready document. Scoped on the scoping session.',
  },
]

const phases = [
  {
    label: 'Phase 1',
    title: 'Scoping and access',
    description:
      'We agree on scope, confirm session count, and get access to the relevant tools. Pricing is set here — nothing is committed before you see it in writing.',
  },
  {
    label: 'Phase 2',
    title: 'Team sessions and workflow mapping',
    description:
      'Sessions with the people who actually run the work. We map where time goes, where decisions stall, and where data is clean enough to use.',
  },
  {
    label: 'Phase 3',
    title: 'Systems design and integration planning',
    description:
      'We name the systems worth building, size them against your data, and draft the integration map. This is where the document takes shape.',
  },
  {
    label: 'Phase 4',
    title: 'Delivery and walkthrough',
    description:
      'You receive the written roadmap, the rollout plan, and a clear recommendation on where to start. What you do with it is your call.',
  },
]

const goodFit = [
  'Teams with repetitive manual work eating up hours every week',
  'Businesses already using modern tools — Slack, Notion, a real CRM',
  'Leadership teams ready to act on a clear plan this quarter',
  'Operators who want a plan, not a vendor pitch',
]

const notFit = [
  'Pre-revenue or pre-product businesses',
  'Teams of fewer than 5 people (the free AI Strategy Call is the right fit)',
  'Businesses looking for an off-the-shelf SaaS product',
]

const faqs = [
  {
    q: 'How is this different from the free AI Strategy Call?',
    a: 'The free call gives you a verbal read in 30 minutes. The audit is a written deliverable backed by team sessions, data review, and integration-level detail. Use the free call to check fit. Use the audit when you need something you can circulate internally and act on.',
  },
  {
    q: 'How do you price it?',
    a: 'Pricing scales with scope, not hours. Small-business engagements start in the low four figures. Larger engagements are scoped collaboratively based on team size, data complexity, and session count. You see a written proposal before anything is committed.',
  },
  {
    q: 'How long does it take?',
    a: 'A small-business engagement runs one to two weeks. Mid-market runs two to four. Larger engagements depend on stakeholder volume and documentation depth. We scope it on the scoping session.',
  },
  {
    q: 'Do we have to build with you after?',
    a: 'No. You own the document. If you want to hand it to an in-house engineer or another vendor, that is the intended use. We are happy to build it too — but there is no obligation.',
  },
  {
    q: 'Who runs the audit?',
    a: 'The same person who would build your systems. No handoffs to junior consultants, no offshoring. The person running your sessions has shipped AI systems across real estate, agencies, SaaS, and nonprofits.',
  },
]

export default function AIReadinessAudit() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

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
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Paid engagement
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
          A written AI roadmap <em style={{ opacity: 0.42, fontStyle: 'italic' }}>built around your business.</em>
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
          Sessions with your team, a read on your data, and a scoped plan for where
          AI actually pays back. You leave with a document you can hand to your team or act on yourself.
        </p>

        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
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
            Book a scoping session
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--bg)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="/solutions/ai-strategy-call"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'transparent',
              color: 'var(--text)',
              padding: '14px 28px',
              borderRadius: 10,
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              border: '1px solid var(--border)',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Prefer the free 30-min call
          </a>
        </div>
        <p style={{ fontSize: 13, color: 'var(--muted)', marginTop: 16 }}>
          Scoping sessions are free. Pricing is set after we understand the scope.
        </p>
      </section>

      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* What the audit delivers */}
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
            What the audit delivers
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
            A document built around <em style={{ opacity: 0.42, fontStyle: 'italic' }}>your actual operations.</em>
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 16,
          }}
          className="audit-grid"
        >
          {deliverables.map((d) => (
            <div
              key={d.title}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: 32,
              }}
            >
              <div style={{ marginBottom: 16, opacity: 0.7 }}>{d.icon}</div>
              <h3
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 10,
                }}
              >
                {d.title}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>
                {d.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* Scope and timeline */}
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
            Scope and timeline
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: 16,
            }}
          >
            The engagement <em style={{ opacity: 0.42, fontStyle: 'italic' }}>scales with your team.</em>
          </h2>
          <p style={{ fontSize: 16, color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>
            No one-size-fits-all audit. A small operations team and a multi-department business need different depth. We scope it on the scoping session.
          </p>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}
          className="tiers-grid"
        >
          {tiers.map((t) => (
            <div
              key={t.label}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: 28,
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 6,
                }}
              >
                {t.label}
              </p>
              <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 16 }}>{t.timeline}</p>
              <h3
                style={{
                  fontFamily: 'var(--font-sans), sans-serif',
                  fontSize: 16,
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                {t.headline}
              </h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{t.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* How the engagement runs */}
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
            How the engagement runs
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
            A structured process, <em style={{ opacity: 0.42, fontStyle: 'italic' }}>adjusted to your business.</em>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          {phases.map((p) => (
            <div key={p.label} style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, paddingTop: 2 }}>
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--muted)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {p.label}
                </p>
              </div>
              <div style={{ borderLeft: '1px solid var(--border)', paddingLeft: 24 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-sans), sans-serif',
                    fontSize: 16,
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* Is this for you */}
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
            Is this for you?
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
            Where it fits, <em style={{ opacity: 0.42, fontStyle: 'italic' }}>and where it does not.</em>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="fit-grid">
          {/* Good fit */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: 32,
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Good fit</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {goodFit.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text)', lineHeight: 1.55 }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Not a fit */}
          <div
            style={{
              background: 'var(--bg)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: 32,
            }}
          >
            <p style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>Not a fit</p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
              {notFit.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>
                  <span style={{ fontSize: 16, lineHeight: 1, marginTop: 1, flexShrink: 0, color: 'var(--muted)' }}>–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid var(--border)' }} />

      {/* FAQ */}
      <section
        style={{
          maxWidth: 700,
          margin: '0 auto',
          padding: '100px 40px',
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
          Common questions
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            marginBottom: 48,
          }}
        >
          Questions we get <em style={{ opacity: 0.42, fontStyle: 'italic' }}>before the scoping session.</em>
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              style={{
                borderTop: '1px solid var(--border)',
                padding: '20px 0',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 16,
                  textAlign: 'left',
                  padding: 0,
                  fontFamily: 'var(--font-sans), sans-serif',
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', lineHeight: 1.4 }}>
                  {faq.q}
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    flexShrink: 0,
                    transform: openFaq === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                    opacity: 0.5,
                  }}
                >
                  <path d="M3 5.5L8 10.5L13 5.5" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {openFaq === i && (
                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginTop: 12 }}>
                  {faq.a}
                </p>
              )}
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
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
            Start with <em style={{ opacity: 0.42, fontStyle: 'italic' }}>a scoping session.</em>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--muted)',
              lineHeight: 1.65,
              marginBottom: 40,
            }}
          >
            The scoping session is free and confirms fit. From there we agree on scope, session count, timeline, and pricing. No commitment until you see the proposal in writing.
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
            Book a scoping session
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--bg)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          .audit-grid { grid-template-columns: 1fr !important; }
          .tiers-grid { grid-template-columns: 1fr !important; }
          .fit-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
