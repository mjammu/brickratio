'use client'

import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'
import { useScrollReveal } from '@/lib/useScrollReveal'

const agents = [
  {
    name: 'Company Brain',
    tagline: 'Unified company knowledge',
    h3: 'Company Brain',
    description:
      'A searchable memory layer built across the tools and data your company already runs on. Your team asks questions and gets answers with full context, instantly.',
    bullets: [
      'Connects meetings, docs, email, Slack, CRM, and more into one searchable layer',
      'Custom connectors for internal systems: SQL, data warehouses, internal APIs',
      'Answers cite back to original sources so nothing gets lost in translation',
      'New team members get up to speed in days, not months',
    ],
  },
  {
    name: 'SEO Agent',
    tagline: 'Organic content at scale',
    h3: 'SEO Agent',
    description:
      'Research, write, and publish SEO content on a steady cadence without a content team. Built around your target keywords, voice, and publishing workflow.',
    bullets: [
      'Automated keyword research tied to your ICP and competitive gaps',
      'Drafts optimized articles at scale, reviewed before they go live',
      'Publishes on a consistent schedule to build long-term organic traffic',
      'Tracks rankings and adjusts content strategy based on what performs',
    ],
  },
  {
    name: 'Lead Agent',
    tagline: 'Daily qualified prospects',
    h3: 'Lead Agent',
    description:
      'A daily digest of qualified prospects, researched and scored for your ideal customer profile. Delivered to your inbox or CRM before your team starts their day.',
    bullets: [
      'Pulls from live signals: job postings, funding, news, hiring patterns',
      'Scores and filters against your ICP criteria automatically',
      'Outputs to Slack, email digest, or directly into your CRM',
      'Zero manual research. Your team shows up with a prioritized list',
    ],
  },
  {
    name: 'Custom Build',
    tagline: 'Purpose-built for your workflow',
    h3: 'Custom Build',
    description:
      'A purpose-built AI system for the workflow no off-the-shelf tool can handle. We scope it with you, build it fast, and stay on for improvements.',
    bullets: [
      'Works from your existing stack, no rip-and-replace required',
      'Built using battle-tested agent frameworks, not experimental prototypes',
      'Delivered with documentation so your team can own it long-term',
      'Ongoing support included for the first 30 days post-launch',
    ],
  },
]

export default function Agents() {
  const [active, setActive] = useState(0)
  const agent = agents[active]
  const { ref: headerRef, visible: headerVisible } = useScrollReveal()
  const { ref: gridRef, visible: gridVisible } = useScrollReveal(0.1)

  return (
    <section
      id="agents"
      style={{ padding: '100px 32px', maxWidth: 1100, margin: '0 auto' }}
    >
      {/* Section header */}
      <div
        ref={headerRef as React.RefObject<HTMLDivElement>}
        style={{
          marginBottom: 48,
          textAlign: 'center',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(24px)',
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
          What we build
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(32px, 4vw, 48px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: 16,
          }}
        >
          AI systems that run parts of <em>your business.</em>
        </h2>
        <p style={{ fontSize: 17, color: 'var(--muted)', maxWidth: 480, margin: '0 auto' }}>
          Pick what your team needs. Most engagements ship in under two weeks.
        </p>
      </div>

      {/* Mobile: horizontal scrollable tabs */}
      <div className="agents-mobile-tabs" style={{ display: 'none', gap: 8, marginBottom: 24, overflowX: 'auto', paddingBottom: 4 }}>
        {agents.map((a, i) => (
          <button
            key={a.name}
            onClick={() => setActive(i)}
            style={{
              padding: '10px 16px',
              borderRadius: 10,
              border: active === i ? '1px solid var(--border)' : '1px solid transparent',
              background: active === i ? 'white' : 'transparent',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              fontSize: 14,
              fontWeight: 600,
              color: 'var(--text)',
              fontFamily: 'var(--font-sans), sans-serif',
            }}
          >
            {a.name}
          </button>
        ))}
      </div>

      {/* Desktop: two-column grid */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        style={{
          border: '1px solid var(--border)',
          borderRadius: 20,
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '280px 1fr',
          opacity: gridVisible ? 1 : 0,
          transform: gridVisible ? 'translateY(0)' : 'translateY(32px)',
          transition: 'opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s',
        }}
        className="agents-grid"
      >
        {/* Left tabs */}
        <div
          style={{
            background: 'var(--bg)',
            borderRight: '1px solid var(--border)',
            padding: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
          }}
        >
          {agents.map((a, i) => (
            <button
              key={a.name}
              onClick={() => setActive(i)}
              style={{
                padding: '14px 16px',
                borderRadius: 10,
                border: active === i ? '1px solid var(--border)' : '1px solid transparent',
                background: active === i ? 'white' : 'transparent',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'background 0.15s',
                fontFamily: 'var(--font-sans), sans-serif',
              }}
              onMouseEnter={(e) => {
                if (active !== i) e.currentTarget.style.background = 'var(--bg-card)'
              }}
              onMouseLeave={(e) => {
                if (active !== i) e.currentTarget.style.background = 'transparent'
              }}
            >
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--text)' }}>{a.name}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{a.tagline}</div>
            </button>
          ))}
        </div>

        {/* Right content */}
        <div style={{ background: 'white', padding: 40 }}>
          <h3
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 28,
              color: 'var(--text)',
              marginBottom: 16,
            }}
          >
            {agent.h3}
          </h3>
          <p
            style={{
              fontSize: 15,
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: 500,
              marginBottom: 24,
            }}
          >
            {agent.description}
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              marginBottom: 32,
            }}
          >
            {agent.bullets.map((b) => (
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
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--text)',
                    marginTop: 7,
                    flexShrink: 0,
                  }}
                />
                {b}
              </li>
            ))}
          </ul>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'var(--text)',
              color: 'var(--bg)',
              padding: '10px 20px',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a call →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .agents-grid { grid-template-columns: 1fr !important; }
          .agents-grid > div:first-child { display: none !important; }
          .agents-mobile-tabs { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
