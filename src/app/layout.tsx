// ============================================================
// ROOT LAYOUT — AJAY RATHORE PORTFOLIO
// ============================================================

import type { Metadata, Viewport } from 'next'
import { Providers } from './providers'
import './globals.css'

// --- Metadata ---
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://ajay-rathore.dev'
  ),
  title: 'Ajay Rathore — Backend-Focused Product Engineer',
  description:
    'Backend-focused product engineer. MERN Stack & Java developer. NASA Finalist. SIH Top 6. Building scalable systems and real-world solutions.',
  keywords: [
    'Ajay Rathore',
    'Backend Developer',
    'MERN Stack',
    'Java Developer',
    'Full Stack Engineer',
    'Hackathon Finalist',
    'NASA Space Apps',
    'Smart India Hackathon',
    'Bhopal',
    'IES College of Technology',
    'Portfolio',
  ],
  authors: [{ name: 'Ajay Rathore' }],
  creator: 'Ajay Rathore',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    title: 'Ajay Rathore — Backend-Focused Product Engineer',
    description:
      'Backend-focused product engineer. NASA Finalist. SIH Top 6. Building scalable systems and real-world solutions.',
    siteName: 'Ajay Rathore Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ajay Rathore portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajay Rathore — Backend-Focused Product Engineer',
    description:
      'Backend-focused product engineer. NASA Finalist. SIH Top 6. Building scalable real-world systems.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060810',
}

// --- Root Layout ---
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
  <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        {/* Scanline atmospheric effect */}
        <div className="scanline" aria-hidden="true" />

        {/* Noise texture overlay */}
        <div className="noise-overlay" aria-hidden="true" />

        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
