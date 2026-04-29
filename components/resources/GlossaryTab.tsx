'use client'

import { useState } from 'react'
import { glossaryTerms } from '@/app/resources/data/glossary'

export default function GlossaryTab() {
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = glossaryTerms.filter(
    (t) =>
      t.term.toLowerCase().includes(search.toLowerCase()) ||
      t.plainDefinition.toLowerCase().includes(search.toLowerCase())
  )

  const letters = [...new Set(filtered.map((t) => t.term[0].toUpperCase()))].sort()

  return (
    <div>
      {/* Search */}
      <div style={{ marginBottom: 40, maxWidth: 480 }}>
        <input
          type="text"
          placeholder="Search terms..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            border: '1px solid var(--border)',
            borderRadius: 10,
            fontSize: 15,
            background: 'var(--bg)',
            color: 'var(--text)',
            outline: 'none',
            fontFamily: 'var(--font-sans), sans-serif',
            boxSizing: 'border-box',
          }}
        />
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--muted)', fontSize: 15 }}>No terms match &ldquo;{search}&rdquo;.</p>
      )}

      {letters.map((letter) => {
        const terms = filtered.filter((t) => t.term[0].toUpperCase() === letter)
        return (
          <div key={letter} style={{ marginBottom: 40 }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: 12,
                paddingBottom: 8,
                borderBottom: '1px solid var(--border)',
              }}
            >
              {letter}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {terms.map((t, i) => {
                const isOpen = expanded === t.term
                return (
                  <div
                    key={t.term}
                    style={{
                      borderBottom: i < terms.length - 1 ? '1px solid var(--border)' : 'none',
                    }}
                  >
                    <button
                      onClick={() => setExpanded(isOpen ? null : t.term)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '16px 0',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: 16,
                      }}
                    >
                      <div>
                        <span
                          style={{
                            fontSize: 16,
                            fontWeight: 600,
                            color: 'var(--text)',
                            fontFamily: 'var(--font-sans), sans-serif',
                          }}
                        >
                          {t.term}
                        </span>
                        {t.abbreviation && (
                          <span
                            style={{
                              fontSize: 12,
                              color: 'var(--muted)',
                              marginLeft: 8,
                              fontFamily: 'var(--font-sans), sans-serif',
                            }}
                          >
                            {t.abbreviation}
                          </span>
                        )}
                      </div>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{
                          flexShrink: 0,
                          transition: 'transform 0.2s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          opacity: 0.5,
                        }}
                      >
                        <path
                          d="M4 6l4 4 4-4"
                          stroke="var(--text)"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          paddingBottom: 20,
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: 24,
                        }}
                        className="glossary-row"
                      >
                        <div
                          style={{
                            background: 'var(--bg-card)',
                            borderRadius: 10,
                            padding: '16px 20px',
                          }}
                        >
                          <p
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: 'var(--muted)',
                              marginBottom: 8,
                            }}
                          >
                            Technical
                          </p>
                          <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.65 }}>
                            {t.techDefinition}
                          </p>
                        </div>
                        <div
                          style={{
                            background: 'var(--bg-card)',
                            borderRadius: 10,
                            padding: '16px 20px',
                          }}
                        >
                          <p
                            style={{
                              fontSize: 10,
                              fontWeight: 700,
                              letterSpacing: '0.1em',
                              textTransform: 'uppercase',
                              color: 'var(--muted)',
                              marginBottom: 8,
                            }}
                          >
                            Plain English
                          </p>
                          <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.65 }}>
                            {t.plainDefinition}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}

      <style>{`
        @media (max-width: 768px) {
          .glossary-row { grid-template-columns: 1fr !important; gap: 12px !important; }
        }
      `}</style>
    </div>
  )
}
