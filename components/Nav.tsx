'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CALENDLY_URL } from '@/lib/constants'

const solutions = [
  { name: 'Company Brain', tagline: 'Unified company knowledge', href: '#agents' },
  { name: 'SEO Agent', tagline: 'Organic content at scale', href: '#agents' },
  { name: 'Lead Agent', tagline: 'Daily qualified prospects', href: '#agents' },
  { name: 'Custom Build', tagline: 'Purpose-built for your workflow', href: '#agents' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        background: 'rgba(250,247,242,0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 1200, margin: '0 auto' }}>
        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-serif), serif', fontSize: 20, color: 'var(--text)', textDecoration: 'none', letterSpacing: '-0.01em' }}>
          Brick Ratio<span style={{ fontStyle: 'italic', opacity: 0.5 }}>.</span>
        </Link>

        {/* Center nav — hidden on mobile */}
        <div className="nav-center" style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {/* Solutions dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <button
              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'var(--text)', padding: '4px 0', fontFamily: 'var(--font-sans), sans-serif' }}
            >
              Solutions
            </button>
            {open && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  marginTop: 8,
                  background: 'white',
                  border: '1px solid var(--border)',
                  borderRadius: 14,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                  minWidth: 240,
                  padding: 8,
                  zIndex: 200,
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
            )}
          </div>

          <Link href="#" style={{ fontSize: 14, color: 'var(--text)', textDecoration: 'none', opacity: 0.7 }}>
            Agencies
          </Link>
          <Link href="#" style={{ fontSize: 14, color: 'var(--text)', textDecoration: 'none', opacity: 0.7 }}>
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
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Book a call
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-center { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
