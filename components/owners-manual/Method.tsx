import Image from 'next/image'
import Reveal from './Reveal'

const steps = [
  {
    title: 'You talk',
    body: 'Your AI interviews you, one question at a time. Speak or type. No blank page.',
  },
  {
    title: 'AI writes your manual',
    body: 'Your answers become a plain-language manual: your voice, offers, pricing and processes, with any gaps flagged.',
  },
  {
    title: 'AI works from it',
    body: 'Any AI can use it to handle onboarding, client replies, proposals and follow-ups the way you would.',
  },
]

// `framed` puts a bare logo mark in a small bordered tile; leave it off for logos that are already tiles.
type Tool = { name: string; note: string; icon: string; framed?: boolean }

const requiredTools: Tool[] = [
  { name: 'Claude Pro', note: 'Preferred', icon: '/tools/claude.png', framed: true },
  { name: 'ChatGPT Plus', note: 'Also works', icon: '/tools/chatgpt.png', framed: true },
]
const optionalTools: Tool[] = [{ name: 'Wispr Flow', note: 'Talk instead of type', icon: '/tools/wispr-flow.png' }]

function ToolTile({ tool }: { tool: Tool }) {
  return (
    <li className="om-tool">
      <Image
        src={tool.icon}
        alt=""
        width={40}
        height={40}
        className={`om-tool-icon${tool.framed ? ' om-tool-icon--framed' : ''}`}
      />
      <span>
        <span style={{ display: 'block', fontSize: 15, fontWeight: 600 }}>{tool.name}</span>
        <span style={{ display: 'block', fontSize: 13, color: 'var(--om-ink-2)' }}>{tool.note}</span>
      </span>
    </li>
  )
}

export default function Method() {
  return (
    <section id="how-it-works" className="om-band-white" aria-labelledby="om-method">
      <div className="om-wrap">
        <Reveal>
          <p className="om-eyebrow">How it works</p>
          <h2 id="om-method" className="om-h2" style={{ marginBottom: 16, maxWidth: 640 }}>
            The Owner&apos;s Manual <em className="om-em">Method.</em>
          </h2>
          <p className="om-lead" style={{ maxWidth: 620, marginBottom: 56 }}>
            A guided way to get how your business runs into writing, so AI can take on the work that usually waits on you.
          </p>
        </Reveal>

        <ol className="om-steps" style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32 }}>
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 80} style={{ borderTop: '1px solid var(--text)', paddingTop: 24 }}>
                <span
                  aria-hidden="true"
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-serif), serif',
                    fontSize: 40,
                    lineHeight: 1,
                    color: 'var(--om-ink-2)',
                    marginBottom: 20,
                  }}
                >
                  0{i + 1}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>
                  {s.title}
                </h3>
                <p className="om-body" style={{ fontSize: 15 }}>{s.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal>
          <div style={{ marginTop: 56 }}>
            <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 20 }}>Tools</h3>
            <div className="om-tools">
              <div>
                <p className="om-tool-tag">Required <span style={{ fontWeight: 400 }}>· one AI plan</span></p>
                <ul className="om-tool-list">
                  {requiredTools.flatMap((t, i) => [
                    ...(i > 0 ? [<li key={`or-${t.name}`} className="om-tool-or" aria-hidden="true">or</li>] : []),
                    <ToolTile key={t.name} tool={t} />,
                  ])}
                </ul>
              </div>
              <div>
                <p className="om-tool-tag">Optional</p>
                <ul className="om-tool-list">
                  {optionalTools.map((t) => <ToolTile key={t.name} tool={t} />)}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .om-steps { grid-template-columns: 1fr !important; gap: 36px !important; }
        }
      `}</style>
    </section>
  )
}
