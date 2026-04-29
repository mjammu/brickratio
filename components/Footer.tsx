'use client'

import Link from 'next/link'
import { EMAIL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '40px 32px',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 24,
        }}
        className="footer-inner"
      >
        {/* Logo */}
        <Link href="/" style={{ fontFamily: 'var(--font-serif), serif', fontSize: 18, color: 'var(--text)', textDecoration: 'none' }}>
          Brick Ratio
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {[
            { label: 'Solutions', href: '#agents' },
            { label: 'Agencies', href: '#' },
            { label: 'Resources', href: '/resources' },
            { label: 'Contact', href: `mailto:${EMAIL}` },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                fontSize: 14,
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'color 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{ fontSize: 12, color: 'var(--muted)' }}>
          © 2026 Brick Ratio. All rights reserved.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-inner { flex-direction: column; align-items: flex-start !important; }
        }
      `}</style>
    </footer>
  )
}
