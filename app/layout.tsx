import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { AdSenseHead } from '@/components/AdSenseHead'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.grabadoautopartes.com.ar'),
  title: {
    default: 'Grabado de Autopartes Argentina - RPA/RPM y Cédulas Digitales',
    template: '%s | Grabado Autopartes Argentina'
  },
  description: 'Información completa sobre grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Requisitos, costos, turnos y centros por jurisdicción. Guía oficial actualizada.',
  keywords: [
    'grabado autopartes Argentina',
    'RPA RPM Argentina',
    'cédulas digitales',
    'verificación policial',
    'grabado obligatorio',
    'turnos grabado',
    'requisitos grabado',
    'costo grabado autopartes',
    'centros grabado',
    'jurisdicciones Argentina',
    'CABA grabado',
    'Buenos Aires grabado',
    'Córdoba grabado',
    'Mendoza grabado'
  ],
  authors: [{ name: 'Grabado Autopartes Argentina' }],
  creator: 'Grabado Autopartes Argentina',
  publisher: 'Grabado Autopartes Argentina',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://www.grabadoautopartes.com.ar',
    siteName: 'Grabado Autopartes Argentina',
    title: 'Grabado de Autopartes Argentina - RPA/RPM y Cédulas Digitales',
    description: 'Información completa sobre grabado de autopartes, RPA/RPM y cédulas digitales en Argentina. Requisitos, costos, turnos y centros por jurisdicción.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grabado de Autopartes Argentina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grabado de Autopartes Argentina - RPA/RPM y Cédulas Digitales',
    description: 'Información completa sobre grabado de autopartes, RPA/RPM y cédulas digitales en Argentina.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'OUp8j_5FVI1zbM-6LRt9ccsRAmmBXJq_8dDHkbINCVk',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.svg',
  },
  other: {
    'preload': '/data/jurisdicciones.json',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Grabado Autopartes Argentina",
    "description": "Información oficial sobre grabado de autopartes, RPA/RPM y cédulas digitales por jurisdicción en Argentina",
    "url": "https://www.grabadoautopartes.com.ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.grabadoautopartes.com.ar/jurisdicciones?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grabado Autopartes Argentina",
      "url": "https://www.grabadoautopartes.com.ar"
    }
  }

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <AdSenseHead />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6771833588582297"
          crossOrigin="anonymous"></script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
