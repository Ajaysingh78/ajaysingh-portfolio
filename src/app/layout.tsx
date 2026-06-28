import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300','400','500','600','700','800'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400','500','600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://ajay-rathore.dev'),
  title: 'Ajay Rathore — Backend-Focused Product Engineer',
  description: 'Backend-focused product engineer. MERN Stack & Java developer. NASA Finalist. SIH Top 6.',
  keywords: ['Ajay Rathore','Backend Developer','MERN Stack','Java Developer','NASA Space Apps','Smart India Hackathon','Bhopal','IES College of Technology'],
  authors: [{ name: 'Ajay Rathore' }],
  creator: 'Ajay Rathore',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website', locale: 'en_IN', url: '/',
    title: 'Ajay Rathore — Backend-Focused Product Engineer',
    description: 'Backend-focused product engineer. NASA Finalist. SIH Top 6.',
    siteName: 'Ajay Rathore Portfolio',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'Ajay Rathore portfolio preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajay Rathore — Backend-Focused Product Engineer',
    description: 'Backend-focused product engineer. NASA Finalist. SIH Top 6.',
    images: ['/opengraph-image'],
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">
        <div className="scanline"      aria-hidden="true" />
        <div className="noise-overlay" aria-hidden="true" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}