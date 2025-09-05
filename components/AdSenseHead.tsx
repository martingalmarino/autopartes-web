'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function AdSenseHead() {
  const pathname = usePathname()
  
  // Excluir AdSense de las páginas de términos y privacidad
  const excludePages = ['/terminos', '/privacidad']
  const shouldShowAdSense = !excludePages.includes(pathname)
  
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || 'ca-pub-6771833588582297'
  
  useEffect(() => {
    if (shouldShowAdSense && publisherId) {
      // Crear el meta tag dinámicamente
      const metaTag = document.createElement('meta')
      metaTag.name = 'google-adsense-account'
      metaTag.content = publisherId
      
      // Agregar al head si no existe
      const existingTag = document.querySelector('meta[name="google-adsense-account"]')
      if (!existingTag) {
        document.head.appendChild(metaTag)
      }
      
      // Cargar el script de AdSense si no está cargado
      if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
        const script = document.createElement('script')
        script.async = true
        script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`
        script.crossOrigin = 'anonymous'
        document.head.appendChild(script)
      }
    } else {
      // Remover el meta tag si existe
      const existingTag = document.querySelector('meta[name="google-adsense-account"]')
      if (existingTag) {
        existingTag.remove()
      }
    }
  }, [shouldShowAdSense, publisherId])
  
  return null
}
