'use client'

export type TabId = 'tool-reviews' | 'workflows' | 'glossary' | 'checklist' | 'stack-guide' | 'time-cost'

const TABS: { id: TabId; label: string }[] = [
  { id: 'tool-reviews', label: 'Tool Reviews' },
  { id: 'workflows', label: 'Workflows' },
  { id: 'glossary', label: 'Glossary' },
  { id: 'checklist', label: 'Decision Checklist' },
  { id: 'stack-guide', label: 'Stack Guide' },
  { id: 'time-cost', label: 'Time Cost' },
]

interface Props {
  active: TabId
  onChange: (id: TabId) => void
}

export default function ResourceTabs({ active, onChange }: Props) {
  return (
    <>
      <div
        className="resource-tabs"
        style={{
          position: 'sticky',
          top: 80,
          zIndex: 50,
          background: 'var(--bg)',
          borderBottom: '1px solid var(--border)',
          padding: '0 32px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            gap: 4,
            overflowX: 'auto',
            paddingBottom: 0,
          }}
          className="resource-tabs-inner"
        >
          {TABS.map((tab) => {
            const isActive = tab.id === active
            return (
              <button
                key={tab.id}
                onClick={() => onChange(tab.id)}
                style={{
                  padding: '14px 18px',
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid var(--text)' : '2px solid transparent',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text)' : 'var(--muted)',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.2s, border-color 0.2s',
                  fontFamily: 'var(--font-sans), sans-serif',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text)'
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <style>{`
        .resource-tabs-inner::-webkit-scrollbar { display: none; }
        .resource-tabs-inner { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  )
}
