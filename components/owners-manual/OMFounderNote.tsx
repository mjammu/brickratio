import Image from 'next/image'
import Reveal from './Reveal'

export default function OMFounderNote() {
  return (
    <section className="om-band-white" aria-labelledby="om-note">
      <div className="om-wrap">
        <Reveal>
          <div className="om-note" style={{ display: 'flex', alignItems: 'flex-start', gap: 40 }}>
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
                src="/mahesh.png"
                alt="Mahesh Jammu, founder of Brick Ratio"
                width={120}
                height={120}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
            <div>
              <h2
                id="om-note"
                style={{ fontFamily: 'var(--font-sans), sans-serif', fontSize: 15, fontWeight: 600, marginBottom: 12 }}
              >
                A note from Mahesh
              </h2>
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 'clamp(20px, 2.1vw, 25px)',
                  lineHeight: 1.4,
                  maxWidth: 720,
                  marginBottom: 16,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 14,
                }}
              >
                <p>
                  Most owners I meet have their documents and processes, but the business still runs on what&apos;s in their
                  head: all the little things only they know to do. I kept seeing how much bandwidth that takes, leaving no
                  room for the higher-value work.
                </p>
                <p>
                  So I tried it myself. I explained my business once and let AI work from it, like a second brain I could
                  talk decisions through with. It cleared my head, made me more creative about what was possible, and my
                  business went from scaling linearly to scaling exponentially, because the foundation finally ran like a
                  well-oiled machine.
                </p>
                <p>I found this method really helpful, and now I want to share it with everyone else too.</p>
              </blockquote>
              <p className="om-fine">Mahesh Jammu, founder of Brick Ratio</p>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .om-note { flex-direction: column !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  )
}
