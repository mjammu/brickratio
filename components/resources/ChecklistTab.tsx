'use client'

import { useState } from 'react'
import { CALENDLY_URL } from '@/lib/constants'

type Answer = 'yes' | 'no' | null

const questions = [
  {
    id: 'q1',
    question: 'Do you have a task your team does manually on a regular schedule (daily, weekly, monthly)?',
    weight: 2,
    context: 'Regular cadence is the clearest signal a task can be automated. One-offs are harder to justify.',
  },
  {
    id: 'q2',
    question: 'Is that task rule-based — meaning the steps are mostly the same every time, with few exceptions?',
    weight: 2,
    context: 'AI excels at tasks with consistent logic. Highly variable or judgment-heavy tasks are harder (but not impossible) to automate.',
  },
  {
    id: 'q3',
    question: 'Is the task eating more than 3 hours per week across your team?',
    weight: 1,
    context: 'Below 3 hours/week, the ROI on building automation may not justify the setup cost unless the task is highly error-prone.',
  },
  {
    id: 'q4',
    question: 'Does the task involve data that already lives in a digital system (a spreadsheet, CRM, email, database)?',
    weight: 2,
    context: 'If the data is already digital, connecting to it is straightforward. Paper-based or highly manual input processes require more work.',
  },
  {
    id: 'q5',
    question: 'Does the task cause errors, delays, or dropped work when humans forget or fall behind?',
    weight: 1,
    context: 'Tasks with downstream consequences from human error are high-value automation targets — the reliability benefit is immediate.',
  },
  {
    id: 'q6',
    question: 'Do you use any of the following tools: Slack, Gmail, Notion, HubSpot, Google Sheets, Airtable, or Zapier?',
    weight: 1,
    context: 'These tools have strong API and automation support. If your stack includes them, integration complexity is low.',
  },
  {
    id: 'q7',
    question: 'Would you be willing to review and approve AI output before it is used — at least in the first month?',
    weight: 1,
    context: 'A human-in-the-loop review phase dramatically reduces risk. Teams willing to verify early output tend to get better results faster.',
  },
  {
    id: 'q8',
    question: 'Is there someone on your team (or yourself) who can spend 2–3 hours in a discovery call and setup review?',
    weight: 1,
    context: 'The main input we need is knowledge of the process. If no one has time to explain it, we cannot build it accurately.',
  },
]

type Verdict = 'strong' | 'promising' | 'not-ready'

function getVerdict(score: number, max: number): Verdict {
  const pct = score / max
  if (pct >= 0.75) return 'strong'
  if (pct >= 0.45) return 'promising'
  return 'not-ready'
}

const verdictCopy: Record<Verdict, { label: string; headline: string; body: string; cta: boolean }> = {
  strong: {
    label: 'Strong candidate',
    headline: 'Your business looks ready for AI automation.',
    body: 'Based on your answers, you have one or more workflows with the right signals: regular cadence, digital data, and meaningful time cost. A 30-minute call is the right next step — we can confirm the opportunity and tell you what it would take to build.',
    cta: true,
  },
  promising: {
    label: 'Promising — some gaps to address',
    headline: 'There is opportunity here, but a few things to clarify first.',
    body: 'You have some of the right conditions for automation but not all. That does not mean it is off the table — it just means we would want to understand your situation more before recommending a path. A short call would help us give you a real answer.',
    cta: true,
  },
  'not-ready': {
    label: 'Not ready yet',
    headline: 'AI automation may not be the right investment right now.',
    body: 'Based on your answers, the conditions for a high-ROI AI system are not quite in place. That could mean the task is too small, too variable, or still paper-based. That does not mean never — it usually means there is a prerequisite step (like getting data into a system). Feel free to come back when things change.',
    cta: false,
  },
}

export default function ChecklistTab() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({})
  const [submitted, setSubmitted] = useState(false)

  const answeredCount = Object.values(answers).filter((a) => a !== null).length
  const allAnswered = answeredCount === questions.length

  const score = questions.reduce((sum, q) => {
    return answers[q.id] === 'yes' ? sum + q.weight : sum
  }, 0)
  const maxScore = questions.reduce((sum, q) => sum + q.weight, 0)

  const verdict = getVerdict(score, maxScore)
  const verdictInfo = verdictCopy[verdict]

  function handleAnswer(id: string, val: Answer) {
    setAnswers((prev) => ({ ...prev, [id]: val }))
  }

  function handleReset() {
    setAnswers({})
    setSubmitted(false)
  }

  return (
    <div style={{ maxWidth: 720 }}>
      {/* Intro */}
      <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.65, marginBottom: 40 }}>
        Answer 8 honest questions about your business. We will tell you whether AI automation is likely worth pursuing right now — and why.
      </p>

      {!submitted ? (
        <>
          {/* Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {questions.map((q, i) => {
              const answer = answers[q.id] ?? null
              return (
                <div
                  key={q.id}
                  style={{
                    border: '1px solid var(--border)',
                    borderRadius: 16,
                    padding: '20px 24px',
                    background: answer ? 'var(--bg-card)' : 'transparent',
                    transition: 'background 0.2s',
                  }}
                >
                  <p
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                      color: 'var(--text)',
                      lineHeight: 1.55,
                      marginBottom: 6,
                    }}
                  >
                    <span style={{ color: 'var(--muted)', marginRight: 6 }}>{i + 1}.</span>
                    {q.question}
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.6, marginBottom: 16 }}>
                    {q.context}
                  </p>
                  <div style={{ display: 'flex', gap: 10 }}>
                    {(['yes', 'no'] as const).map((val) => {
                      const isSelected = answer === val
                      return (
                        <button
                          key={val}
                          onClick={() => handleAnswer(q.id, val)}
                          style={{
                            padding: '8px 24px',
                            borderRadius: 8,
                            border: '1px solid var(--border)',
                            background: isSelected ? 'var(--text)' : 'transparent',
                            color: isSelected ? 'var(--bg)' : 'var(--muted)',
                            cursor: 'pointer',
                            fontSize: 14,
                            fontWeight: isSelected ? 600 : 400,
                            transition: 'all 0.15s',
                            fontFamily: 'var(--font-sans), sans-serif',
                            textTransform: 'capitalize',
                          }}
                        >
                          {val}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Progress + submit */}
          <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div
                style={{
                  height: 4,
                  background: 'var(--border)',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${(answeredCount / questions.length) * 100}%`,
                    background: 'var(--text)',
                    borderRadius: 2,
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 6 }}>
                {answeredCount} of {questions.length} answered
              </p>
            </div>
            <button
              onClick={() => setSubmitted(true)}
              disabled={!allAnswered}
              style={{
                padding: '12px 28px',
                borderRadius: 10,
                border: 'none',
                background: allAnswered ? 'var(--text)' : 'var(--border)',
                color: allAnswered ? 'var(--bg)' : 'var(--muted)',
                cursor: allAnswered ? 'pointer' : 'not-allowed',
                fontSize: 14,
                fontWeight: 500,
                transition: 'opacity 0.2s',
                fontFamily: 'var(--font-sans), sans-serif',
              }}
              onMouseEnter={(e) => { if (allAnswered) e.currentTarget.style.opacity = '0.82' }}
              onMouseLeave={(e) => { if (allAnswered) e.currentTarget.style.opacity = '1' }}
            >
              Get my verdict
            </button>
          </div>
        </>
      ) : (
        /* Verdict */
        <div>
          {/* Score display */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 24,
              marginBottom: 32,
              padding: '24px 28px',
              border: '1px solid var(--border)',
              borderRadius: 16,
              background: 'var(--bg-card)',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>
                Your score
              </p>
              <p style={{ fontFamily: 'var(--font-serif), serif', fontSize: 40, color: 'var(--text)', margin: 0, lineHeight: 1 }}>
                {score}<span style={{ fontSize: 20, opacity: 0.4 }}>/{maxScore}</span>
              </p>
            </div>
            <div
              style={{
                padding: '8px 16px',
                borderRadius: 10,
                border: '1px solid var(--border)',
                background: 'var(--bg)',
              }}
            >
              <p style={{ fontSize: 13, fontWeight: 600, color: 'var(--text)', margin: 0 }}>
                {verdictInfo.label}
              </p>
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-serif), serif',
              fontSize: 28,
              color: 'var(--text)',
              lineHeight: 1.2,
              marginBottom: 16,
            }}
          >
            {verdictInfo.headline}
          </h2>

          <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 32 }}>
            {verdictInfo.body}
          </p>

          {/* Per-question breakdown */}
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 16 }}>
              Your answers
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {questions.map((q, i) => {
                const ans = answers[q.id]
                return (
                  <div
                    key={q.id}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      padding: '12px 16px',
                      borderRadius: 10,
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    <div
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: ans === 'yes' ? 'var(--text)' : 'transparent',
                        border: ans === 'yes' ? 'none' : '1px solid var(--border)',
                        flexShrink: 0,
                        marginTop: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {ans === 'yes' && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="var(--bg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text)', margin: 0, lineHeight: 1.5 }}>
                        <span style={{ color: 'var(--muted)', marginRight: 6 }}>{i + 1}.</span>
                        {q.question}
                      </p>
                    </div>
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: ans === 'yes' ? 'var(--text)' : 'var(--muted)',
                        flexShrink: 0,
                        textTransform: 'capitalize',
                      }}
                    >
                      {ans}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {verdictInfo.cta && (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'var(--text)',
                  color: 'var(--bg)',
                  padding: '12px 24px',
                  borderRadius: 10,
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Book a free strategy call
              </a>
            )}
            <button
              onClick={handleReset}
              style={{
                background: 'none',
                border: '1px solid var(--border)',
                padding: '12px 24px',
                borderRadius: 10,
                fontSize: 14,
                color: 'var(--muted)',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans), sans-serif',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
            >
              Retake checklist
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
