'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import BottomCTA from '@/components/BottomCTA'
import ResourceTabs, { TabId } from '@/components/resources/ResourceTabs'
import GlossaryTab from '@/components/resources/GlossaryTab'
import ToolReviewsTab from '@/components/resources/ToolReviewsTab'
import WorkflowsTab from '@/components/resources/WorkflowsTab'
import StackGuideTab from '@/components/resources/StackGuideTab'
import TimeCostTab from '@/components/resources/TimeCostTab'
import ChecklistTab from '@/components/resources/ChecklistTab'

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('tool-reviews')

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Nav />

      {/* Hero */}
      <div
        style={{
          paddingTop: 160,
          paddingBottom: 80,
          paddingLeft: 32,
          paddingRight: 32,
          maxWidth: 900,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 20,
          }}
        >
          Free resources
        </p>
        <h1
          style={{
            fontFamily: 'var(--font-serif), serif',
            fontSize: 'clamp(42px, 6vw, 64px)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            color: 'var(--text)',
            marginBottom: 20,
          }}
        >
          Tools, workflows, and guides for{' '}
          <em style={{ opacity: 0.45, fontStyle: 'italic' }}>
            figuring out AI.
          </em>
        </h1>
        <p
          style={{
            fontSize: 18,
            color: 'var(--muted)',
            lineHeight: 1.65,
            maxWidth: 600,
            margin: '0 auto',
          }}
        >
          No paid tools required. Everything here is designed to help SMB owners understand what AI can do, where to start, and whether it makes sense for them.
        </p>
      </div>

      {/* Sticky tabs */}
      <ResourceTabs active={activeTab} onChange={setActiveTab} />

      {/* Tab content */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 32px 100px' }} className="resources-content">
        {activeTab === 'tool-reviews' && <ToolReviewsTab />}
        {activeTab === 'workflows' && <WorkflowsTab />}
        {activeTab === 'glossary' && <GlossaryTab />}
        {activeTab === 'checklist' && <ChecklistTab />}
        {activeTab === 'stack-guide' && <StackGuideTab />}
        {activeTab === 'time-cost' && <TimeCostTab />}
      </div>

      <BottomCTA />
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .resources-content { padding: 40px 20px 80px !important; }
        }
      `}</style>
    </div>
  )
}
