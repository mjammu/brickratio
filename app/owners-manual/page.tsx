import type { Metadata } from 'next'
import './owners-manual.css'
import { SITE_URL } from '@/lib/constants'
import OMNav from '@/components/owners-manual/OMNav'
import OMHero from '@/components/owners-manual/OMHero'
import BeforeAfter from '@/components/owners-manual/BeforeAfter'
import Method from '@/components/owners-manual/Method'
import Plans from '@/components/owners-manual/Plans'
import OMFounderNote from '@/components/owners-manual/OMFounderNote'
import OMFaq from '@/components/owners-manual/OMFaq'
import OMBottomCTA from '@/components/owners-manual/OMBottomCTA'
import OMFooter from '@/components/owners-manual/OMFooter'

const title = "The Owner's Manual Method | Brick Ratio"
const shareDescription = 'Does your whole business run through your brain?'

export const metadata: Metadata = {
  title,
  description:
    "Does your whole business run through your brain? The Owner's Manual Method gets your business into words so AI can work from it. For solo owners of service businesses.",
  openGraph: {
    title,
    description: shareDescription,
    url: `${SITE_URL}/owners-manual`,
    siteName: 'Brick Ratio',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description: shareDescription },
}

export default function OwnersManualPage() {
  return (
    <div className="om">
      <a href="#main" className="om-skip">Skip to content</a>
      <OMNav />
      <main id="main">
        <OMHero />
        <BeforeAfter />
        <Method />
        <Plans />
        <OMFounderNote />
        <OMFaq />
        <OMBottomCTA />
      </main>
      <OMFooter />
    </div>
  )
}
