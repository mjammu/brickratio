import Reveal from './Reveal'

const beforeSteps = [
  { title: 'Dig up what you have', body: "Find the last customer's documents and decide what needs to change." },
  { title: 'Fix every placeholder', body: 'Swap out the names, dates and prices, one document at a time.' },
  { title: 'Rework it to fit their deal', body: 'Adjust everything to match their contract and what you promised them.' },
]

const alsoReady = ['Onboarding checklist', 'Kickoff call agenda', 'Payment reminders']

const cardLabel: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--om-on-dark-2)',
  marginBottom: 8,
}

const columnLabel: React.CSSProperties = { fontSize: 15, fontWeight: 600, marginBottom: 14 }

export default function BeforeAfter() {
  return (
    <section aria-labelledby="om-before-after">
      <div className="om-wrap" style={{ paddingTop: 32 }}>
        <Reveal>
          <h2 id="om-before-after" className="om-h2" style={{ marginBottom: 12 }}>
            Sound <em className="om-em">familiar?</em>
          </h2>
          <p className="om-lead" style={{ marginBottom: 40 }}>
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Scenario:</strong> You just signed a new customer and
            need to onboard them.
          </p>
        </Reveal>

        <div className="om-ba-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Before */}
          <Reveal style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={columnLabel}>Before</h3>
            <div
              style={{
                flex: 1,
                background: 'white',
                border: '1px solid var(--border)',
                borderRadius: 20,
                padding: '12px 32px',
              }}
            >
              <ol style={{ listStyle: 'none' }}>
                {beforeSteps.map((s, i) => (
                  <li key={s.title} className="om-ba-step">
                    <span className="om-ba-num" aria-hidden="true">{i + 1}</span>
                    <div>
                      <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{s.title}</p>
                      <p className="om-body" style={{ fontSize: 15 }}>{s.body}</p>
                    </div>
                  </li>
                ))}
                <li className="om-ba-step" style={{ alignItems: 'center' }}>
                  <svg className="om-ba-num" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M16 10a6 6 0 1 1-1.76-4.24M16 3.5v3h-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="om-body" style={{ fontSize: 15 }}>Then do it all again for the next customer.</p>
                </li>
              </ol>
            </div>
            <p className="om-fine" style={{ marginTop: 14, fontSize: 14 }}>Everything lives in your head and your old files.</p>
          </Reveal>

          {/* After */}
          <Reveal delay={100} style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={columnLabel}>After</h3>
            <div
              className="om-band-dark om-ba-after"
              style={{ flex: 1, borderRadius: 20, padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}
            >
              <div
                style={{
                  background: 'var(--om-on-dark-tile)',
                  border: '1px solid var(--om-on-dark-line)',
                  borderRadius: 14,
                  padding: '16px 20px',
                }}
              >
                <p style={cardLabel}>You type</p>
                <p style={{ fontSize: 15, lineHeight: 1.6 }}>
                  New customer: Jordan Rivera. 12-week program, starts Nov 4, paying in 3 installments.
                </p>
              </div>

              <div>
                <p style={cardLabel}>Your AI writes, in your voice</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, lineHeight: 1.7 }}>
                  <p>Hi Jordan, welcome! I&apos;m so glad you&apos;re in.</p>
                  <p>
                    Here&apos;s how the next 12 weeks work: <mark className="om-mark">we meet every Tuesday for 60 minutes</mark>,
                    and you can message me any time between calls.{' '}
                    <mark className="om-mark">Your first payment of $1,300 is due Nov 1</mark>, with the next two on Dec 1 and
                    Jan 1.
                  </p>
                  <p>Your first step: fill out the short intake form before we start.</p>
                </div>
              </div>

              <div>
                <p style={cardLabel}>Also ready</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {alsoReady.map((a) => (
                    <li key={a} className="om-chip">{a}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="om-fine" style={{ marginTop: 14, fontSize: 14 }}>
              Your AI already knows your business and how you work. You just add the customer.
            </p>
          </Reveal>
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          .om-ba-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .om-ba-after { padding: 24px !important; }
        }
      `}</style>
    </section>
  )
}
