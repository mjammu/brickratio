const stats = [
  { value: '100%', label: 'Of receipts captured automatically' },
  { value: '~40h', label: 'Saved per month in manual entry' },
  { value: '2wk', label: 'From kickoff to live system' },
  { value: '$0', label: 'Added headcount to run it' },
]

const tags = ['Receipt Agent', 'Google Sheets', 'Automation']

export default function CaseStudy() {
  return (
    <section style={{ padding: '0 32px 100px', maxWidth: 1100, margin: '0 auto' }}>
      <div
        style={{
          background: 'var(--text)',
          borderRadius: 24,
          padding: '64px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 48,
          alignItems: 'center',
        }}
        className="case-grid"
      >
        {/* Left */}
        <div>
          <p
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(250,247,242,0.4)',
              marginBottom: 20,
            }}
          >
            Nonprofit · Operations
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 32,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: 20,
            }}
          >
            Every receipt is tracked. Zero manual data entry.
          </h3>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(250,247,242,0.55)',
              lineHeight: 1.7,
              marginBottom: 28,
            }}
          >
            SSMNC was manually logging hundreds of receipts per month across events,
            donations, and operations. We built a receipt ingestion agent that extracts,
            categorizes, and logs everything automatically into their existing Google
            Sheets workflow.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {tags.map((tag) => (
              <span
                key={tag}
                style={{
                  border: '1px solid rgba(250,247,242,0.15)',
                  borderRadius: 100,
                  padding: '5px 14px',
                  fontSize: 13,
                  color: 'rgba(250,247,242,0.7)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Right — 2x2 stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 12,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.value}
              style={{
                background: 'rgba(250,247,242,0.06)',
                borderRadius: 12,
                padding: '28px 24px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif), serif',
                  fontSize: 40,
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(250,247,242,0.45)', lineHeight: 1.4 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .case-grid { grid-template-columns: 1fr !important; padding: 40px 28px !important; }
        }
      `}</style>
    </section>
  )
}
