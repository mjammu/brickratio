import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'

const links = [
  { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { label: 'Privacy', href: '/privacy' },
]

export default function OMFooter() {
  return (
    <footer className="om-footer" style={{ borderTop: '1px solid var(--border)', padding: '32px' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <Link href="/" style={{ fontFamily: 'var(--font-serif), serif', fontSize: 18, color: 'var(--text)', textDecoration: 'none' }}>
          Brick Ratio
        </Link>
        <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0 24px' }}>
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="om-nav-link" style={{ display: 'inline-block' }}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
