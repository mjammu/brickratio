'use client'

import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'
import { useScrollReveal } from '@/lib/useScrollReveal'

const agents = [
  {
    name: 'Company Brain',
    subtitle: 'Unified company knowledge',
    tagline: 'A searchable memory layer across the tools and data your company already runs on.',
    h3: 'Company Brain',
    description:
      'We connect your meetings, docs, email, Slack, and CRM into one place your team can actually search. Ask a question from Slack and get a real answer with the context behind it.',
    bullets: [
      'Works with the tools you already use: Notion, Drive, Gmail, Slack, HubSpot, Salesforce, and more',
      'Custom connectors for internal systems like SQL databases, Snowflake, or internal APIs',
      'Every answer links back to the original source so nothing gets lost',
      'Entities like clients, deals, and projects are tagged automatically',
    ],
    bestFor: 'Agencies and operations-heavy teams where knowledge is scattered across tools and people.',
  },
  {
    name: 'SEO Agent',
    subtitle: 'Organic content at scale',
    tagline: 'Research, write, and publish SEO content on a steady cadence without a content team.',
    h3: 'SEO Agent',
    description:
      'We handle keyword research, write posts in your voice, and publish on a schedule you set. Consistent organic growth without hiring writers or managing a content calendar.',
    bullets: [
      'Keyword and topic research matched to your audience',
      'Content written in your voice and reviewed before it goes live',
      'Publishes on a cadence that works for your team',
      'Covers both traditional SEO and AI search (ChatGPT, Perplexity, Claude)',
    ],
    bestFor: 'SaaS companies and service businesses that want steady organic growth without a full content team.',
  },
  {
    name: 'Lead Agent',
    subtitle: 'Daily qualified prospects',
    tagline: 'A daily digest of qualified prospects, researched for your ideal customer.',
    h3: 'Lead Agent',
    description:
      'We define your ideal-customer signals once. Every morning the agent searches across LinkedIn, Crunchbase, Apollo, and news sources and delivers a shortlist with full context.',
    bullets: [
      'Custom signals like funding rounds, new hires, or job postings',
      'Daily research across Crunchbase, Apollo, and news APIs',
      'Contact enrichment with decision-maker titles and emails',
      'Delivered to Notion, Slack, or straight into your CRM',
    ],
    bestFor: 'Sales teams and founders who want to replace manual prospecting with a morning digest.',
  },
  {
    name: 'Custom Build',
    subtitle: 'Purpose-built for your workflow',
    tagline: 'A purpose-built AI system for the workflow no off-the-shelf tool can handle.',
    h3: 'Custom Build',
    description:
      'Sometimes the right agent does not exist yet. We scope your highest-value workflow, build it on your existing stack, and ship it in 1 to 2 weeks.',
    bullets: [
      'Discovery call to scope the workflow and define what success looks like',
      'Built on your existing tools: Notion, Airtable, Slack, your CRM',
      'Trained on your data so output is accurate and context-aware',
      'Handoff training so your team can own and extend it',
    ],
    bestFor: 'Businesses with a specific operational problem that does not fit a standard template.',
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
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 3 }}>{a.subtitle}</div>
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
              marginBottom: 10,
            }}
          >
            {agent.h3}
          </h3>
          <p
            style={{
              fontSize: 15,
              fontWeight: 500,
              color: 'var(--muted)',
              marginBottom: 16,
              lineHeight: 1.5,
            }}
          >
            {agent.tagline}
          </p>
          <p
            style={{
              fontSize: 15,
              color: 'var(--muted)',
              lineHeight: 1.7,
              maxWidth: 540,
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
              gap: 12,
              marginBottom: 24,
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
                  lineHeight: 1.55,
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{ marginTop: 2, flexShrink: 0 }}
                >
                  <path
                    d="M3 8l3.5 3.5L13 4.5"
                    stroke="var(--text)"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {b}
              </li>
            ))}
          </ul>
          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: 6,
              }}
            >
              Best for
            </p>
            <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
              {agent.bestFor}
            </p>
          </div>
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
              padding: '12px 24px',
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Schedule a free strategy call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="var(--bg)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
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
