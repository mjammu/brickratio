'use client'

import { useState } from 'react'
import { toolReviews } from '@/app/resources/data/toolReviews'

const ALL = 'All'

function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1.5l1.5 3 3.3.5-2.4 2.3.6 3.2L7 9l-3 1.5.6-3.2L2.2 5l3.3-.5L7 1.5z"
            fill={n <= rating ? 'var(--text)' : 'none'}
            stroke="var(--text)"
            strokeWidth="1"
            opacity={n <= rating ? 1 : 0.25}
          />
        </svg>
      ))}
    </div>
  )
}

export default function ToolReviewsTab() {
  const categories = [ALL, ...Array.from(new Set(toolReviews.map((t) => t.category)))]
  const [activeCategory, setActiveCategory] = useState(ALL)
  const [expanded, setExpanded] = useState<string | null>(null)

  const filtered = activeCategory === ALL
    ? toolReviews
    : toolReviews.filter((t) => t.category === activeCategory)

  return (
    <div>
      {/* Category filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
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

      {/* Card grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
        }}
        className="tool-reviews-grid"
      >
        {filtered.map((tool) => {
          const isOpen = expanded === tool.name
          return (
            <div
              key={tool.name}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 20,
                background: 'var(--bg-card)',
                overflow: 'hidden',
              }}
            >
              {/* Card header */}
              <div style={{ padding: '24px 24px 20px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    marginBottom: 12,
                    gap: 12,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontSize: 22,
                        color: 'var(--text)',
                        marginBottom: 4,
                      }}
                    >
                      {tool.name}
                    </h3>
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                      }}
                    >
                      {tool.category}
                    </p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <StarRating rating={tool.rating} />
                    <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>
                      {tool.monthlyPrice}
                    </p>
                  </div>
                </div>

                <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.65 }}>
                  {tool.tagline}
                </p>
              </div>

              {/* Expand / collapse */}
              <button
                onClick={() => setExpanded(isOpen ? null : tool.name)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 24px',
                  background: 'none',
                  border: 'none',
                  borderTop: '1px solid var(--border)',
                  cursor: 'pointer',
                  fontSize: 13,
                  color: 'var(--muted)',
                  fontFamily: 'var(--font-sans), sans-serif',
                }}
              >
                {isOpen ? 'Hide details' : 'Read review'}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  style={{
                    transition: 'transform 0.2s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <path
                    d="M3 5l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {isOpen && (
                <div style={{ padding: '20px 24px 24px', borderTop: '1px solid var(--border)' }}>
                  <div style={{ marginBottom: 16 }}>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                        marginBottom: 6,
                      }}
                    >
                      Verdict
                    </p>
                    <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.65 }}>
                      {tool.verdict}
                    </p>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="review-two-col">
                    <div>
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                          marginBottom: 6,
                        }}
                      >
                        Best for
                      </p>
                      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                        {tool.bestFor}
                      </p>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                          marginBottom: 6,
                        }}
                      >
                        Watch out for
                      </p>
                      <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                        {tool.watchOut}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .tool-reviews-grid { grid-template-columns: 1fr !important; }
          .review-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
