import SynapseBrain from '@/components/synapse-brain'

export default function OMHero() {
  return (
    <section
      className="om-hero"
      style={{ maxWidth: 900, margin: '0 auto', padding: '112px 32px 24px', textAlign: 'center' }}
    >
      {/* Margin is inline: the unlayered `* { margin: 0 }` reset in globals.css overrides Tailwind's mx-auto/mb-*. */}
      <div className="om-hero-in w-[220px] md:w-[320px]" style={{ margin: '0 auto 28px' }}>
        <SynapseBrain />
      </div>

      <p
        className="om-hero-in"
        style={{
          display: 'inline-flex',
          border: '1px solid var(--border)',
          borderRadius: 100,
          padding: '6px 14px',
          marginBottom: 24,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'var(--om-ink-2)',
        }}
      >
        The Owner&apos;s Manual Method
      </p>

      <h1
        className="om-hero-in"
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontWeight: 400,
          fontSize: 'clamp(38px, 5.6vw, 68px)',
          lineHeight: 1.08,
          letterSpacing: '-0.02em',
          color: 'var(--text)',
          maxWidth: 780,
          margin: '0 auto',
          animationDelay: '80ms',
        }}
      >
        Does your whole business <em className="om-em">run through your brain?</em>
      </h1>

      <p
        className="om-lead om-hero-in"
        style={{ fontSize: 18, maxWidth: 580, margin: '24px auto 0', animationDelay: '180ms' }}
      >
        The Owner&apos;s Manual Method gets your business into words, so AI can work from it. Your business is no longer
        limited to what your brain can hold or remember.
      </p>

      <div
        className="om-hero-in"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px 28px',
          marginTop: 36,
          justifyContent: 'center',
          alignItems: 'center',
          animationDelay: '300ms',
        }}
      >
        <a href="#plans" className="om-btn om-btn--primary">
          See the plans
        </a>
        <a href="#how-it-works" className="om-link" style={{ fontSize: 15, padding: '12px 0' }}>
          How it works
        </a>
      </div>

      <p className="om-fine om-hero-in" style={{ marginTop: 20, animationDelay: '380ms' }}>
        For solo owners of service businesses. No technical skills needed.
      </p>
    </section>
  )
}
