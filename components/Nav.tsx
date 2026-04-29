'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CALENDLY_URL } from '@/lib/constants'

const solutions = [
  { name: 'AI Strategy Call', tagline: 'Free · 30 min', href: '/solutions/ai-strategy-call' },
  { name: 'AI Readiness Audit', tagline: 'Written roadmap · 1 week', href: '/solutions/ai-readiness-audit' },
  { name: 'Company Brain', tagline: 'Unified company knowledge', href: '#agents' },
  { name: 'SEO Agent', tagline: 'Organic content at scale', href: '#agents' },
  { name: 'Lead Agent', tagline: 'Daily qualified prospects', href: '#agents' },
  { name: 'Custom Build', tagline: 'Purpose-built for your workflow', href: '#agents' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        position: 'fixed',
        top: 20,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 24px',
        pointerEvents: 'none',
      }}
    >
      <nav
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1100,
          height: 60,
          background: 'rgba(250,247,242,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '0 20px 0 24px',
          boxShadow: '0 4px 24px rgba(28,20,16,0.07)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 28,
            color: 'var(--text)',
            textDecoration: 'none',
            letterSpacing: '-0.02em',
            flexShrink: 0,
          }}
        >
          Brick Ratio
        </Link>

        {/* Center nav — hidden on mobile */}
        <div
          className="nav-center"
          style={{ display: 'flex', alignItems: 'center', gap: 28 }}
        >
          {/* Solutions dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: 14,
                color: 'var(--text)',
                padding: '4px 0',
                fontFamily: 'var(--font-sans), sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: 4,
              }}
            >
              Solutions
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.5, marginTop: 1 }}>
                <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {open && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: 10,
                  zIndex: 200,
                  minWidth: 240,
                }}
              >
              <div
                style={{
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  padding: 8,
                }}
              >
                {solutions.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      padding: '10px 14px',
                      borderRadius: 8,
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--bg-card)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{s.tagline}</div>
                  </Link>
                ))}
              </div>
              </div>
            )}
          </div>

          <Link href="#" style={{ fontSize: 14, color: 'var(--text)', textDecoration: 'none', opacity: 0.7 }}>
            Agencies
          </Link>
          <Link href="/resources" style={{ fontSize: 14, color: 'var(--text)', textDecoration: 'none', opacity: 0.7 }}>
            Resources
          </Link>
        </div>

        {/* CTA */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--text)',
            color: 'var(--bg)',
            padding: '8px 18px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            letterSpacing: '0.03em',
            textTransform: 'uppercase',
            transition: 'opacity 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Book a call
        </a>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-center { display: none !important; }
        }
      `}</style>
    </div>
  )
}
