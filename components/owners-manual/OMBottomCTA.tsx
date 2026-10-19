import Reveal from './Reveal'

export default function OMBottomCTA() {
  return (
    <section aria-labelledby="om-cta" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="om-wrap" style={{ maxWidth: 700, textAlign: 'center' }}>
        <Reveal>
          <h2 id="om-cta" className="om-h2" style={{ marginBottom: 16 }}>
            What if it didn&apos;t all <em className="om-em">run through you?</em>
          </h2>
          <p className="om-lead" style={{ marginBottom: 32 }}>Three plans, one-time prices, no subscription.</p>
          <a href="#plans" className="om-btn om-btn--primary">See the plans</a>
        </Reveal>
      </div>
    </section>
  )
}
