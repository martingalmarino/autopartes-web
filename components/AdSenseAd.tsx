'use client'

import { useEffect, useRef } from 'react'

interface AdSenseAdProps {
  adSlot: string
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal'
  adStyle?: React.CSSProperties
  className?: string
  responsive?: boolean
}

export function AdSenseAd({ 
  adSlot, 
  adFormat = 'auto', 
  adStyle = { display: 'block' },
  className = '',
  responsive = true 
}: AdSenseAdProps) {
  const adRef = useRef<HTMLDivElement>(null)
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-6771833588582297'

  useEffect(() => {
    if (adRef.current && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch (error) {
        console.error('Error loading AdSense ad:', error)
      }
    }
  }, [])

  if (!publisherId) {
    return null
  }

  return (
    <div className={`adsense-container ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={adStyle}
        data-ad-client={publisherId}
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={responsive ? 'true' : 'false'}
      />
    </div>
  )
}

// Componentes predefinidos para diferentes tipos de anuncios
export function AdSenseBanner({ className = '' }: { className?: string }) {
  return (
    <AdSenseAd
      adSlot="1234567890" // Reemplaza con tu ad slot real
      adFormat="auto"
      className={`w-full max-w-728 h-90 ${className}`}
      adStyle={{ display: 'block', width: '100%', height: '90px' }}
    />
  )
}

export function AdSenseRectangle({ className = '' }: { className?: string }) {
  return (
    <AdSenseAd
      adSlot="1234567890" // Reemplaza con tu ad slot real
      adFormat="rectangle"
      className={`w-full max-w-300 h-250 ${className}`}
      adStyle={{ display: 'block', width: '100%', height: '250px' }}
    />
  )
}

export function AdSenseVertical({ className = '' }: { className?: string }) {
  return (
    <AdSenseAd
      adSlot="1234567890" // Reemplaza con tu ad slot real
      adFormat="vertical"
      className={`w-full max-w-160 h-600 ${className}`}
      adStyle={{ display: 'block', width: '100%', height: '600px' }}
    />
  )
}

// Declaración global para TypeScript
declare global {
  interface Window {
    adsbygoogle: any[]
  }
}
