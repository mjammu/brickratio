'use client'

import { useEffect, useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60)
    return () => clearTimeout(t)
  }, [])

  const fadeStyle = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(24px)',
    transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
  })

  return (
    <section
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: '180px 32px 80px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 'clamp(32px, 4.5vw, 56px)',
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          maxWidth: 820,
          ...fadeStyle(80),
        }}
      >
        Custom AI systems that automate the work{' '}
        <em style={{ opacity: 0.45 }}>slowing you down.</em>
      </h1>

      <p
        style={{
          fontFamily: 'var(--font-sans), sans-serif',
          fontSize: 18,
          color: 'var(--muted)',
          maxWidth: 520,
          lineHeight: 1.65,
          marginTop: 28,
          margin: '28px auto 0',
          ...fadeStyle(180),
        }}
      >
        We build and deploy AI agents for small and mid-sized businesses. Most systems ship in under two weeks.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 12,
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
          ...fadeStyle(300),
        }}
      >
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: 'var(--text)',
            color: 'var(--bg)',
            padding: '12px 24px',
            borderRadius: 10,
            fontSize: 15,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Schedule a free strategy call
        </a>
        <a
          href="#agents"
          style={{
            fontSize: 15,
            color: 'var(--text)',
            textDecoration: 'none',
            borderBottom: '1px solid transparent',
            transition: 'border-color 0.2s',
            paddingBottom: 1,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'transparent')}
        >
          See our agents →
        </a>
      </div>
    </section>
  )
}
