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
  title: "Brick Ratio | The Owner's Manual Method",
  description:
    "The Owner's Manual Method gets your business into words so AI can work from it. For solo owners of service businesses.",
  metadataBase: new URL('https://brickratio.ai'),
  openGraph: {
    title: "Brick Ratio | The Owner's Manual Method",
    description: 'Does your whole business run through your brain?',
    url: 'https://brickratio.ai',
    siteName: 'Brick Ratio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brick Ratio | The Owner's Manual Method",
    description: 'Does your whole business run through your brain?',
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
