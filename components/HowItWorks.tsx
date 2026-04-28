const steps = [
  {
    number: '01',
    title: 'Discovery',
    body: 'We learn how your business runs and identify the highest-value workflows to automate first.',
  },
  {
    number: '02',
    title: 'Build',
    body: 'We build and deploy your system. Most projects are live within one to two weeks of kickoff.',
  },
  {
    number: '03',
    title: 'Train & Support',
    body: 'Your team learns the system. We stay on for the first 30 days to iterate and improve.',
  },
]

export default function HowItWorks() {
  return (
    <section style={{ padding: '100px 32px', maxWidth: 1100, margin: '0 auto' }}>
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
          marginBottom: 16,
        }}
      >
        How it works
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontSize: 'clamp(32px, 4vw, 48px)',
          letterSpacing: '-0.02em',
          lineHeight: 1.15,
          color: 'var(--text)',
          marginBottom: 48,
        }}
      >
        From first call to working system <em>in under two weeks.</em>
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
        className="hiw-grid"
      >
        {steps.map((step, i) => (
          <div
            key={step.number}
            style={{
              background: 'var(--bg-card)',
              padding: '40px 32px',
              borderRadius:
                i === 0
                  ? '16px 0 0 16px'
                  : i === steps.length - 1
                  ? '0 16px 16px 0'
                  : 0,
            }}
            className="hiw-card"
          >
            <div
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 48,
                color: 'var(--border)',
                lineHeight: 1,
                marginBottom: 24,
              }}
            >
              {step.number}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-serif), serif',
                fontSize: 22,
                color: 'var(--text)',
                marginBottom: 12,
              }}
            >
              {step.title}
            </h3>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65 }}>
              {step.body}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hiw-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .hiw-card { border-radius: 16px !important; }
        }
      `}</style>
    </section>
  )
}
