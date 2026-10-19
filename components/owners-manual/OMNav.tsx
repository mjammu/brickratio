import Link from 'next/link'

const links = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Plans', href: '#plans' },
  { label: 'FAQ', href: '#faq' },
]

export default function OMNav() {
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
        aria-label="Owner's Manual"
        style={{
          pointerEvents: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          width: '100%',
          maxWidth: 1100,
          height: 60,
          background: 'rgba(250,247,242,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid var(--border)',
          borderRadius: 16,
          padding: '0 10px 0 24px',
          boxShadow: '0 4px 24px rgba(28,20,16,0.07)',
        }}
      >
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

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div className="om-nav-links">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="om-nav-link">
                {l.label}
              </a>
            ))}
          </div>
          <a href="#plans" className="om-btn om-btn--primary" style={{ fontSize: 14, padding: '10px 18px' }}>
            See the plans
          </a>
        </div>
      </nav>
    </div>
  )
}
