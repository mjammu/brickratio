'use client'

import Image from 'next/image'
import { CALENDLY_URL } from '@/lib/constants'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function FounderNote() {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <section style={{ padding: '0 32px 100px', maxWidth: 1100, margin: '0 auto' }}>
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{
          background: 'white',
          border: '1px solid var(--border)',
          borderRadius: 20,
          padding: '48px 56px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 48,
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
        className="founder-note"
      >
        {/* Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 'clamp(24px, 3vw, 36px)',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--text)',
              marginBottom: 20,
            }}
          >
            A note from Mahesh
          </h2>
          <p
            style={{
              fontSize: 16,
              color: 'var(--muted)',
              lineHeight: 1.75,
              marginBottom: 16,
              maxWidth: 560,
            }}
          >
            I build AI systems for businesses and help founders figure out exactly where
            automation fits into how they operate. With a background in AI infrastructure,
            I know how to properly deploy these systems, not just recommend them.
          </p>
          <p
            style={{
              fontSize: 16,
              color: 'var(--muted)',
              lineHeight: 1.75,
              maxWidth: 560,
            }}
          >
            Not sure if AI is the right move for your business?{' '}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text)',
                fontWeight: 600,
                textDecoration: 'underline',
                textUnderlineOffset: 3,
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.6')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Book a call.
            </a>{' '}
            We&apos;ll walk through your operations together and I&apos;ll give you a straight
            answer on where it makes sense and where it doesn&apos;t.
          </p>
        </div>

        {/* Photo */}
        <div
          style={{
            flexShrink: 0,
            width: 120,
            height: 120,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}
        >
          <Image
            src="/mahesh.jpg"
            alt="Mahesh"
            width={120}
            height={120}
            style={{ objectFit: 'cover', objectPosition: 'center top', width: '100%', height: '100%' }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .founder-note {
            flex-direction: column-reverse !important;
            padding: 32px 28px !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  )
}
