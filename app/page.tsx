import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Agents from '@/components/Agents'
import HowItWorks from '@/components/HowItWorks'
import CaseStudy from '@/components/CaseStudy'
import GetStarted from '@/components/GetStarted'
import FounderNote from '@/components/FounderNote'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <GetStarted />
        <Agents />
        <HowItWorks />
        <CaseStudy />
        <FounderNote />
        <BottomCTA />
      </main>
      <Footer />
    </>
  )
}
