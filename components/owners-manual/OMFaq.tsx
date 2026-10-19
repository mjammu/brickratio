'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need to be technical?',
    a: "Not at all. If you can talk about your business, you can do this. You answer questions the way you'd explain things to a new hire, and the AI takes care of the writing and organizing.",
  },
  {
    q: 'Which AI tool do I use?',
    a: 'Claude Pro is our favorite for this, and ChatGPT Plus works well too. Your manual is plain text, so if you ever switch tools, everything comes with you.',
  },
  {
    q: 'How long does it take?',
    a: "Less time than you'd think. The Starter Kit is about 75 minutes of conversation in total, and you can spread it over a few evenings. Pro runs as a series of live group sessions, all recorded, so you never fall behind. Custom Build gets scoped with you on our first call.",
  },
]

export default function OMFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" aria-labelledby="om-faq">
      <div className="om-wrap" style={{ maxWidth: 764 }}>
        <h2 id="om-faq" className="om-h2" style={{ marginBottom: 40 }}>
          FAQ
        </h2>

        <div style={{ borderBottom: '1px solid var(--border)' }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} style={{ borderTop: '1px solid var(--border)' }}>
                <h3>
                  <button
                    type="button"
                    className="om-faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    {faq.q}
                    <svg className="om-faq-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M8 2.5v11M2.5 8h11" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  <p className="om-body" style={{ fontSize: 15, paddingBottom: 24, maxWidth: 620 }}>{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
