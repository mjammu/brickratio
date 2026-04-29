import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Resources for Small Businesses | Brick Ratio',
  description:
    'Tool reviews, copy-paste prompts, AI glossary, stack compatibility guide, and a decision checklist to help SMB owners figure out where AI fits their business.',
}

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
