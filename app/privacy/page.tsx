import type { Metadata } from 'next'
import Link from 'next/link'
import { CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Brick Ratio',
  description: 'How Brick Ratio collects, uses and protects your information.',
}

const EFFECTIVE_DATE = 'October 18, 2026'

const sections: { title: string; body: React.ReactNode }[] = [
  {
    title: 'Who we are',
    body: (
      <p>
        Brick Ratio builds AI systems and runs the Owner&apos;s Manual Method for small businesses. This policy explains what
        information we collect when you visit our website, buy from us or work with us, and how we handle it.
      </p>
    ),
  },
  {
    title: 'What we collect',
    body: (
      <ul>
        <li><strong>Contact details</strong> you send us, like your name and email when you email us or book a call.</li>
        <li><strong>Purchase details</strong> when you buy a plan, like your name, email and what you bought. Payments are processed by Stripe. We never see or store your full card number.</li>
        <li><strong>Business information</strong> you choose to share with us during Pro sessions, a Custom Build or a call, so we can deliver your service.</li>
        <li><strong>Basic technical data</strong> our hosting provider records automatically when you visit, like your IP address, browser type and the pages you view.</li>
      </ul>
    ),
  },
  {
    title: 'How we use it',
    body: (
      <ul>
        <li>To deliver what you bought, including sessions, files and support.</li>
        <li>To reply to your messages and send information about your purchase.</li>
        <li>To keep the website running, secure and working properly.</li>
      </ul>
    ),
  },
  {
    title: 'What we never do',
    body: (
      <p>
        We do not sell your information. We do not use the business information you share with us for anything other than
        delivering your service. Your Owner&apos;s Manual files are yours, and they stay on your computer unless you choose to
        share them with us.
      </p>
    ),
  },
  {
    title: 'Who we share it with',
    body: (
      <>
        <p>We only share information with the services we use to run the business:</p>
        <ul>
          <li><strong>Stripe</strong>, to process payments.</li>
          <li><strong>Vercel</strong>, to host this website.</li>
          <li><strong>Our email and scheduling tools</strong>, to talk with you and book calls.</li>
        </ul>
        <p>We may also share information if the law requires it.</p>
      </>
    ),
  },
  {
    title: 'Cookies',
    body: (
      <p>
        This website does not use advertising or analytics cookies. Stripe may use cookies during checkout to process your
        payment securely and prevent fraud.
      </p>
    ),
  },
  {
    title: 'How long we keep it',
    body: (
      <p>
        We keep your information only as long as we need it to provide our services, meet legal and tax requirements, or
        resolve disputes. After that, we delete it.
      </p>
    ),
  },
  {
    title: 'Your choices',
    body: (
      <p>
        You can ask us to show you, correct or delete the information we hold about you at any time. Email us and we will
        take care of it.
      </p>
    ),
  },
  {
    title: 'Children',
    body: <p>Our services are for businesses and are not directed at children under 13.</p>,
  },
  {
    title: 'Changes to this policy',
    body: <p>If we change this policy, we will update it on this page and change the effective date below.</p>,
  },
  {
    title: 'Contact',
    body: (
      <p>
        Questions about your privacy? Email{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--text)', textUnderlineOffset: 3 }}>
          {CONTACT_EMAIL}
        </a>
        .
      </p>
    ),
  },
]

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '64px 24px 96px' }}>
      <Link
        href="/"
        style={{ fontFamily: 'var(--font-serif), serif', fontSize: 24, color: 'var(--text)', textDecoration: 'none' }}
      >
        Brick Ratio
      </Link>

      <h1
        style={{
          fontFamily: 'var(--font-serif), serif',
          fontWeight: 400,
          fontSize: 'clamp(36px, 5vw, 52px)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          margin: '48px 0 12px',
        }}
      >
        Privacy Policy
      </h1>
      <p style={{ fontSize: 14, color: 'color-mix(in srgb, var(--text) 68%, transparent)', marginBottom: 48 }}>
        Effective {EFFECTIVE_DATE}
      </p>

      <div className="privacy-body">
        {sections.map((s) => (
          <section key={s.title}>
            <h2>{s.title}</h2>
            {s.body}
          </section>
        ))}
      </div>

      <style>{`
        .privacy-body section { margin-bottom: 36px; }
        .privacy-body h2 { font-family: var(--font-sans), sans-serif; font-size: 17px; font-weight: 600; margin-bottom: 10px; }
        .privacy-body p, .privacy-body li { font-size: 16px; line-height: 1.7; color: color-mix(in srgb, var(--text) 75%, transparent); }
        .privacy-body p + p, .privacy-body ul + p, .privacy-body p + ul { margin-top: 10px; }
        .privacy-body ul { list-style: disc; padding-left: 20px; display: flex; flex-direction: column; gap: 6px; }
        .privacy-body strong { color: var(--text); font-weight: 600; }
      `}</style>
    </main>
  )
}
