'use client'

import { useEffect } from 'react'

interface AdsterraSmartLinksProps {
  key: string
  className?: string
}

export function AdsterraSmartLinks({ key: smartLinkKey, className = '' }: AdsterraSmartLinksProps) {
  useEffect(() => {
    // Verificar si el script ya está cargado
    const existingScript = document.querySelector(`script[src*="${smartLinkKey}"]`)
    if (existingScript) {
      return
    }

    // Cargar el script de smartlinks de Adsterra
    const script = document.createElement('script')
    script.src = `https://www.revenuecpmgate.com/tzx11u2jy?key=${smartLinkKey}`
    script.async = true
    script.defer = true
    
    // Agregar el script al head
    document.head.appendChild(script)
    
    // Función para limpiar cuando el componente se desmonte
    return () => {
      const scriptToRemove = document.querySelector(`script[src*="${smartLinkKey}"]`)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [smartLinkKey])

  return (
    <div className={`adsterra-smartlinks ${className}`}>
      {/* Los smartlinks se aplicarán automáticamente al contenido */}
    </div>
  )
}

// Componente específico para artículos
export function AdsterraArticleSmartLinks({ className = '' }: { className?: string }) {
  return (
    <AdsterraSmartLinks 
      key="8d2b02772ce76ba031152b1be6b67226"
      className={className}
    />
  )
}

// Hook para aplicar smartlinks a contenido específico
export function useAdsterraSmartLinks(key: string) {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src*="${key}"]`)
    if (existingScript) {
      return
    }

    const script = document.createElement('script')
    script.src = `https://www.revenuecpmgate.com/tzx11u2jy?key=${key}`
    script.async = true
    script.defer = true
    
    document.head.appendChild(script)
    
    return () => {
      const scriptToRemove = document.querySelector(`script[src*="${key}"]`)
      if (scriptToRemove) {
        scriptToRemove.remove()
      }
    }
  }, [key])
}
