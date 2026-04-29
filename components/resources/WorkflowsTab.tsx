'use client'

import { useState } from 'react'
import { workflows, WorkflowLevel } from '@/app/resources/data/workflows'

const ALL = 'All'

const levelOrder: WorkflowLevel[] = ['Beginner', 'Intermediate', 'Advanced']

function LevelBadge({ level }: { level: WorkflowLevel }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--muted)',
        border: '1px solid var(--border)',
        borderRadius: 6,
        padding: '2px 8px',
        fontFamily: 'var(--font-sans), sans-serif',
      }}
    >
      {level}
    </span>
  )
}

function CopyButton({ stepId, prompt }: { stepId: string; prompt: string }) {
  const [copied, setCopied] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      onClick={handleCopy}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '7px 14px',
        borderRadius: 8,
        border: '1px solid var(--border)',
        background: copied ? 'var(--text)' : 'var(--bg)',
        color: copied ? 'var(--bg)' : 'var(--text)',
        cursor: 'pointer',
        fontSize: 12,
        fontWeight: 500,
        transition: 'all 0.2s',
        fontFamily: 'var(--font-sans), sans-serif',
        flexShrink: 0,
      }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="1" y="4" width="7" height="7.5" rx="1.25" stroke="currentColor" strokeWidth="1.1" />
            <path d="M4 4V2.5A1.25 1.25 0 0 1 5.25 1.25h5A1.25 1.25 0 0 1 11.5 2.5v5A1.25 1.25 0 0 1 10.25 8.75H9" stroke="currentColor" strokeWidth="1.1" />
          </svg>
          Copy prompt
        </>
      )}
    </button>
  )
}

export default function WorkflowsTab() {
  const useCases = [ALL, ...Array.from(new Set(workflows.map((w) => w.useCase)))]
  const [activeUseCase, setActiveUseCase] = useState(ALL)
  const [activeLevel, setActiveLevel] = useState<WorkflowLevel | null>(null)
  const [expandedWorkflow, setExpandedWorkflow] = useState<string | null>(null)
  const [expandedStep, setExpandedStep] = useState<string | null>(null)

  const filtered = workflows.filter((w) => {
    const ucMatch = activeUseCase === ALL || w.useCase === activeUseCase
    const lvlMatch = activeLevel === null || w.level === activeLevel
    return ucMatch && lvlMatch
  })

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {useCases.map((uc) => {
            const isActive = uc === activeUseCase
            return (
              <button
                key={uc}
                onClick={() => setActiveUseCase(uc)}
                style={{
                  padding: '7px 15px',
                  borderRadius: 20,
                  border: '1px solid var(--border)',
                  background: isActive ? 'var(--text)' : 'transparent',
                  color: isActive ? 'var(--bg)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-sans), sans-serif',
                }}
              >
                {uc}
              </button>
            )
          })}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {levelOrder.map((lvl) => {
            const isActive = activeLevel === lvl
            return (
              <button
                key={lvl}
                onClick={() => setActiveLevel(isActive ? null : lvl)}
                style={{
                  padding: '7px 15px',
                  borderRadius: 20,
                  border: '1px solid var(--border)',
                  background: isActive ? 'var(--text)' : 'transparent',
                  color: isActive ? 'var(--bg)' : 'var(--muted)',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-sans), sans-serif',
                }}
              >
                {lvl}
              </button>
            )
          })}
        </div>
      </div>

      {/* Workflow cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {filtered.map((w) => {
          const isOpen = expandedWorkflow === w.id

          return (
            <div
              key={w.id}
              style={{
                border: '1px solid var(--border)',
                borderRadius: 20,
                background: 'var(--bg-card)',
                overflow: 'hidden',
              }}
            >
              {/* Card header — click to expand */}
              <button
                onClick={() => {
                  setExpandedWorkflow(isOpen ? null : w.id)
                  setExpandedStep(null)
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  padding: '22px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <div style={{ flex: 1 }}>
                  {/* Title row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 8 }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-serif), serif',
                        fontSize: 20,
                        color: 'var(--text)',
                        margin: 0,
                      }}
                    >
                      {w.title}
                    </h3>
                    <span
                      style={{
                        fontSize: 11,
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--muted)',
                        border: '1px solid var(--border)',
                        borderRadius: 6,
                        padding: '2px 8px',
                      }}
                    >
                      {w.useCase}
                    </span>
                    <LevelBadge level={w.level} />
                  </div>

                  <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6, margin: '0 0 14px' }}>
                    {w.description}
                  </p>

                  {/* Metadata row */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                        Time saved
                      </span>
                      <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, margin: '2px 0 0' }}>
                        {w.timeSaved}
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                        To complete
                      </span>
                      <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, margin: '2px 0 0' }}>
                        {w.estimatedTime}
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                        Steps
                      </span>
                      <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, margin: '2px 0 0' }}>
                        {w.steps.length}
                      </p>
                    </div>
                    <div>
                      <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)' }}>
                        Tool
                      </span>
                      <p style={{ fontSize: 13, color: 'var(--text)', fontWeight: 500, margin: '2px 0 0' }}>
                        {w.tool}
                      </p>
                    </div>
                  </div>
                </div>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  style={{
                    transition: 'transform 0.2s',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    opacity: 0.4,
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                >
                  <path d="M4 6l4 4 4-4" stroke="var(--text)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Expanded content */}
              {isOpen && (
                <div style={{ borderTop: '1px solid var(--border)' }}>
                  {/* Best for */}
                  <div style={{ padding: '20px 24px', borderBottom: '1px solid var(--border)', background: 'var(--bg)' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 10 }}>
                      Best for
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {w.bestFor.map((bf, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 14, color: 'var(--muted)', lineHeight: 1.55 }}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                            <path d="M2.5 7l2.5 2.5L11.5 3" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {bf}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div style={{ padding: '20px 24px 24px' }}>
                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
                      Steps
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {w.steps.map((step, idx) => {
                        const stepKey = `${w.id}-${idx}`
                        const isStepOpen = expandedStep === stepKey

                        return (
                          <div
                            key={stepKey}
                            style={{
                              border: '1px solid var(--border)',
                              borderRadius: 14,
                              overflow: 'hidden',
                              background: isStepOpen ? 'var(--bg)' : 'var(--bg-card)',
                            }}
                          >
                            {/* Step header */}
                            <button
                              onClick={() => setExpandedStep(isStepOpen ? null : stepKey)}
                              style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 14,
                                padding: '14px 18px',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'left',
                              }}
                            >
                              {/* Step number */}
                              <div
                                style={{
                                  width: 26,
                                  height: 26,
                                  borderRadius: '50%',
                                  background: isStepOpen ? 'var(--text)' : 'var(--border)',
                                  color: isStepOpen ? 'var(--bg)' : 'var(--muted)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: 12,
                                  fontWeight: 700,
                                  flexShrink: 0,
                                  transition: 'all 0.2s',
                                  fontFamily: 'var(--font-sans), sans-serif',
                                }}
                              >
                                {idx + 1}
                              </div>

                              <div style={{ flex: 1 }}>
                                <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)', margin: '0 0 2px', fontFamily: 'var(--font-sans), sans-serif' }}>
                                  {step.title}
                                </p>
                                <p style={{ fontSize: 13, color: 'var(--muted)', margin: 0, lineHeight: 1.5 }}>
                                  {step.description}
                                </p>
                              </div>

                              <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                style={{
                                  transition: 'transform 0.2s',
                                  transform: isStepOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                  opacity: 0.4,
                                  flexShrink: 0,
                                }}
                              >
                                <path d="M3 5l4 4 4-4" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </button>

                            {/* Step content */}
                            {isStepOpen && (
                              <div style={{ borderTop: '1px solid var(--border)', padding: '16px 18px 20px' }}>
                                {/* Prompt */}
                                <div style={{ marginBottom: 16 }}>
                                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                                    <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', margin: 0 }}>
                                      Prompt
                                    </p>
                                    <CopyButton stepId={stepKey} prompt={step.prompt} />
                                  </div>
                                  <pre
                                    style={{
                                      fontFamily: 'monospace',
                                      fontSize: 13,
                                      lineHeight: 1.7,
                                      color: 'var(--text)',
                                      background: 'var(--bg-card)',
                                      border: '1px solid var(--border)',
                                      borderRadius: 10,
                                      padding: '14px 16px',
                                      whiteSpace: 'pre-wrap',
                                      wordBreak: 'break-word',
                                      margin: 0,
                                    }}
                                  >
                                    {step.prompt}
                                  </pre>
                                </div>

                                {/* Tip + Watch out */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="step-two-col">
                                  <div
                                    style={{
                                      background: 'var(--bg-card)',
                                      border: '1px solid var(--border)',
                                      borderRadius: 10,
                                      padding: '12px 14px',
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <circle cx="6.5" cy="6.5" r="5.5" stroke="var(--text)" strokeWidth="1.25" />
                                        <path d="M6.5 4v3" stroke="var(--text)" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="6.5" cy="9" r="0.65" fill="var(--text)" />
                                      </svg>
                                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text)', margin: 0 }}>
                                        Tip
                                      </p>
                                    </div>
                                    <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                                      {step.tip}
                                    </p>
                                  </div>

                                  <div
                                    style={{
                                      background: 'var(--bg-card)',
                                      border: '1px solid var(--border)',
                                      borderRadius: 10,
                                      padding: '12px 14px',
                                    }}
                                  >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
                                      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                        <path d="M6.5 1.5L12 11H1L6.5 1.5z" stroke="var(--muted)" strokeWidth="1.25" strokeLinejoin="round" />
                                        <path d="M6.5 5v2.5" stroke="var(--muted)" strokeWidth="1.5" strokeLinecap="round" />
                                        <circle cx="6.5" cy="9.25" r="0.65" fill="var(--muted)" />
                                      </svg>
                                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', margin: 0 }}>
                                        Watch out for
                                      </p>
                                    </div>
                                    <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                                      {step.watchOut}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
