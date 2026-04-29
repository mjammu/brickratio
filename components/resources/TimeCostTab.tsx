'use client'

import { useState } from 'react'
import { timeCostScenarios } from '@/app/resources/data/timeCost'
import { CALENDLY_URL } from '@/lib/constants'

const ALL = 'All'

export default function TimeCostTab() {
  const categories = [ALL, ...Array.from(new Set(timeCostScenarios.map((s) => s.category)))]
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = activeCategory === ALL
    ? timeCostScenarios
    : timeCostScenarios.filter((s) => s.category === activeCategory)

  const totalHours = filtered.reduce((sum, s) => sum + s.annualHours, 0)
  const totalCost = filtered.reduce((sum, s) => {
    const num = parseInt(s.annualCost.replace(/[$,]/g, ''))
    return sum + num
  }, 0)

  return (
    <div>
      {/* Intro */}
      <div style={{ marginBottom: 36, maxWidth: 660 }}>
        <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65 }}>
          These are real scenarios, modeled with conservative assumptions. The numbers represent what a task costs at your current headcount rate — before any AI automation. Pick categories relevant to your business to see how much is on the table.
        </p>
      </div>

      {/* Category filter */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
        {categories.map((cat) => {
          const isActive = cat === activeCategory
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 16px',
                borderRadius: 20,
                border: '1px solid var(--border)',
                background: isActive ? 'var(--text)' : 'transparent',
                color: isActive ? 'var(--bg)' : 'var(--muted)',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.2s',
                fontFamily: 'var(--font-sans), sans-serif',
              }}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Summary bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 16,
          marginBottom: 32,
          padding: '20px 24px',
          border: '1px solid var(--border)',
          borderRadius: 16,
          background: 'var(--bg-card)',
        }}
        className="timecost-summary"
      >
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>
            Annual hours in view
          </p>
          <p style={{ fontFamily: 'var(--font-serif), serif', fontSize: 36, color: 'var(--text)', margin: 0, letterSpacing: '-0.02em' }}>
            {totalHours.toLocaleString()}
          </p>
        </div>
        <div>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>
            Annual cost in view
          </p>
          <p style={{ fontFamily: 'var(--font-serif), serif', fontSize: 36, color: 'var(--text)', margin: 0, letterSpacing: '-0.02em' }}>
            ${totalCost.toLocaleString()}
          </p>
        </div>
      </div>

      {/* Scenario cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {filtered.map((s) => {
          const isOpen = expanded === s.task
          return (
            <div
              key={s.task}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 14,
                background: 'var(--bg-card)',
                overflow: 'hidden',
              }}
            >
              <button
                onClick={() => setExpanded(isOpen ? null : s.task)}
                style={{
                  width: '100%',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto',
                  alignItems: 'center',
                  padding: '16px 20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                  fontFamily: 'var(--font-sans), sans-serif',
                }}
                className="timecost-row"
              >
                <div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', margin: '0 0 4px' }}>
                    {s.task}
                  </p>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: 'var(--muted)',
                      border: '1px solid var(--border)',
                      borderRadius: 6,
                      padding: '2px 8px',
                    }}
                  >
                    {s.category}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexShrink: 0 }}>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', margin: '0 0 2px' }}>
                      Annual hours
                    </p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                      {s.annualHours}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', margin: '0 0 2px' }}>
                      Annual cost
                    </p>
                    <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                      {s.annualCost}
                    </p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    style={{
                      transition: 'transform 0.2s',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      opacity: 0.5,
                    }}
                  >
                    <path d="M3 5l4 4 4-4" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </button>

              {isOpen && (
                <div style={{ borderTop: '1px solid var(--border)', padding: '14px 20px 18px' }}>
                  <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>
                    Assumption
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 12 }}>
                    {s.assumption}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.65 }}>
                    <strong style={{ color: 'var(--text)' }}>{s.hoursPerWeek} hours/week</strong> at this task &times; 52 weeks = {s.annualHours} hours per year.
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* CTA nudge */}
      <div
        style={{
          marginTop: 48,
          padding: '28px 32px',
          border: '1px solid var(--border)',
          borderRadius: 16,
          background: 'var(--bg-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 24,
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--text)', marginBottom: 4 }}>
            Want to know which of these we can actually automate for you?
          </p>
          <p style={{ fontSize: 14, color: 'var(--muted)' }}>
            Book a free 30-minute call. We will tell you specifically what is automatable in your stack.
          </p>
        </div>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--text)',
            color: 'var(--bg)',
            padding: '12px 24px',
            borderRadius: 10,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Book a call
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timecost-summary { grid-template-columns: 1fr !important; }
          .timecost-row { grid-template-columns: 1fr !important; }
          .timecost-row > div:last-child { flex-direction: column; gap: 12px; align-items: flex-start !important; }
        }
      `}</style>
    </div>
  )
}
