'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

interface AdsterraNativeBannerProps {
  className?: string
  style?: React.CSSProperties
}

export function AdsterraNativeBanner({ 
  className = '', 
  style = {} 
}: AdsterraNativeBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  
  // Excluir de páginas de términos y privacidad
  const excludePages = ['/terminos', '/privacidad']
  const shouldShowAd = !excludePages.includes(pathname)

  useEffect(() => {
    if (!shouldShowAd || !containerRef.current) return

    // Verificar si el script ya está cargado
    const existingScript = document.querySelector('script[src*="pl27584767.revenuecpmgate.com"]')
    
    if (!existingScript) {
      // Crear y cargar el script de Adsterra
      const script = document.createElement('script')
      script.async = true
      script.setAttribute('data-cfasync', 'false')
      script.src = '//pl27584767.revenuecpmgate.com/920a2347e258b18946d8309250a71a23/invoke.js'
      
      // Agregar el script al head
      document.head.appendChild(script)
    }

    // Limpiar el contenedor y asegurar que tenga el ID correcto
    if (containerRef.current) {
      containerRef.current.innerHTML = ''
      containerRef.current.id = 'container-920a2347e258b18946d8309250a71a23'
    }

    // Función para limpiar cuando el componente se desmonte
    return () => {
      const script = document.querySelector('script[src*="pl27584767.revenuecpmgate.com"]')
      if (script) {
        script.remove()
      }
    }
  }, [shouldShowAd])

  if (!shouldShowAd) {
    return null
  }

  return (
    <div 
      ref={containerRef}
      id="container-920a2347e258b18946d8309250a71a23"
      className={`adsterra-native-banner w-full min-h-[250px] my-5 ${className}`}
      style={style}
    />
  )
}

// Componente específico para banner en el header
export function AdsterraHeaderBanner({ className = '' }: { className?: string }) {
  return (
    <AdsterraNativeBanner 
      className={`w-full max-w-4xl h-[90px] mx-auto my-2.5 ${className}`}
    />
  )
}

// Componente específico para banner en el contenido
export function AdsterraContentBanner({ className = '' }: { className?: string }) {
  return (
    <AdsterraNativeBanner 
      className={`w-full max-w-4xl h-[250px] mx-auto my-5 ${className}`}
    />
  )
}

// Componente específico para banner en el sidebar
export function AdsterraSidebarBanner({ className = '' }: { className?: string }) {
  return (
    <AdsterraNativeBanner 
      className={`w-full max-w-[300px] h-[600px] my-5 ${className}`}
    />
  )
}
