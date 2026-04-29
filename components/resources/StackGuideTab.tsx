'use client'

import { useState } from 'react'
import { stackGuide, compatibilityLabel, CompatibilityLevel } from '@/app/resources/data/stackGuide'

const ALL = 'All'

const compatibilityOrder: CompatibilityLevel[] = ['works-well', 'with-caveats', 'needs-custom']

export default function StackGuideTab() {
  const categories = [ALL, ...Array.from(new Set(stackGuide.map((s) => s.category)))]
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [activeCompat, setActiveCompat] = useState<CompatibilityLevel | null>(null)

  const filtered = stackGuide.filter((s) => {
    const catMatch = activeCategory === ALL || s.category === activeCategory
    const compatMatch = activeCompat === null || s.compatibility === activeCompat
    return catMatch && compatMatch
  })

  const grouped = compatibilityOrder
    .map((level) => ({
      level,
      entries: filtered.filter((s) => s.compatibility === level),
    }))
    .filter((g) => g.entries.length > 0)

  return (
    <div>
      {/* Category filter */}
      <div style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
          Category
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
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
      </div>

      {/* Compatibility filter */}
      <div style={{ marginBottom: 36 }}>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
          Compatibility
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {compatibilityOrder.map((level) => {
            const isActive = activeCompat === level
            return (
              <button
                key={level}
                onClick={() => setActiveCompat(isActive ? null : level)}
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
                {compatibilityLabel[level]}
              </button>
            )
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--muted)', fontSize: 15 }}>No tools match that filter combination.</p>
      )}

      {/* Grouped by compatibility */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {grouped.map(({ level, entries }) => (
          <div key={level}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 16,
              }}
            >
              <CompatIcon level={level} />
              <h3
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 20,
                  color: 'var(--text)',
                  margin: 0,
                }}
              >
                {compatibilityLabel[level]}
              </h3>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 12,
              }}
              className="stack-grid"
            >
              {entries.map((entry) => (
                <div
                  key={entry.tool}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: 14,
                    padding: '18px 20px',
                    background: 'var(--bg-card)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h4
                      style={{
                        fontSize: 15,
                        fontWeight: 600,
                        color: 'var(--text)',
                        margin: 0,
                        fontFamily: 'var(--font-sans), sans-serif',
                      }}
                    >
                      {entry.tool}
                    </h4>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                        border: '1px solid var(--border)',
                        borderRadius: 6,
                        padding: '2px 8px',
                      }}
                    >
                      {entry.category}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                    {entry.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}

function CompatIcon({ level }: { level: CompatibilityLevel }) {
  if (level === 'works-well') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="var(--text)" strokeWidth="1.5" />
        <path d="M5.5 9l2.5 2.5L12.5 6" stroke="var(--text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  if (level === 'with-caveats') {
    return (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="var(--muted)" strokeWidth="1.5" />
        <path d="M9 5v5" stroke="var(--muted)" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="9" cy="13" r="0.75" fill="var(--muted)" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="8" stroke="var(--muted)" strokeWidth="1.5" strokeDasharray="3 2" />
      <path d="M6 9h6" stroke="var(--muted)" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  )
}
