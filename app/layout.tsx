import type { Metadata } from 'next'
import { Instrument_Serif, Inter } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Brick Ratio — Custom AI Systems',
  description:
    'We build and deploy AI agents for small and mid-sized businesses. Custom AI systems that automate the work slowing you down.',
  metadataBase: new URL('https://brickratio.ai'),
  openGraph: {
    title: 'Brick Ratio — Custom AI Systems',
    description: 'Custom AI systems that automate the work slowing you down.',
    url: 'https://brickratio.ai',
    siteName: 'Brick Ratio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brick Ratio — Custom AI Systems',
    description: 'Custom AI systems that automate the work slowing you down.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
