'use client'

import { useEffect, useState } from 'react'
import { Centro } from '@/types'
import dynamic from 'next/dynamic'

// Dynamic import to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

interface MapProps {
  centers: Centro[]
  onCenterSelect?: (center: Centro) => void
  className?: string
}

export function Map({ centers, onCenterSelect, className = '' }: MapProps) {
  const [mapLoaded, setMapLoaded] = useState(false)

  useEffect(() => {
    // Import Leaflet CSS
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    link.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
    link.crossOrigin = ''
    document.head.appendChild(link)

    setMapLoaded(true)

    return () => {
      // Cleanup
      const existingLink = document.querySelector('link[href*="leaflet"]')
      if (existingLink) {
        existingLink.remove()
      }
    }
  }, [])

  if (!mapLoaded) {
    return (
      <div className={`relative ${className}`}>
        <div className="w-full h-96 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-2"></div>
            <p className="text-neutral-600">Cargando mapa...</p>
          </div>
        </div>
      </div>
    )
  }

  // Default center (Buenos Aires)
  const defaultCenter: [number, number] = [-34.6037, -58.3816]

  // Calculate center based on markers if available
  let center: [number, number] = defaultCenter
  if (centers.length > 0) {
    const avgLat = centers.reduce((sum, c) => sum + c.lat, 0) / centers.length
    const avgLng = centers.reduce((sum, c) => sum + c.lng, 0) / centers.length
    center = [avgLat, avgLng]
  }

  return (
    <div className={`relative map-container ${className}`}>
      <MapContainer
        center={center as [number, number]}
        zoom={centers.length > 0 ? 8 : 10}
        className="w-full h-96 rounded-lg overflow-hidden border border-neutral-200"
        style={{ height: '384px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {centers.map((center, index) => (
          <Marker
            key={`${center.id}-${index}`}
            position={[center.lat, center.lng]}
            eventHandlers={{
              click: () => {
                if (onCenterSelect) {
                  onCenterSelect(center)
                }
              }
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-neutral-900 mb-2">{center.nombre}</h3>
                <p className="text-sm text-neutral-600 mb-1">
                  <strong>Jurisdicción:</strong> {(center as any).jurisdiccion || 'N/A'}
                </p>
                <p className="text-sm text-neutral-600 mb-1">
                  <strong>Servicios:</strong> {center.servicios.join(', ')}
                </p>
                <p className="text-sm text-neutral-600 mb-1">
                  <strong>Horarios:</strong> {center.horarios}
                </p>
                <p className="text-sm text-neutral-600 mb-1">
                  <strong>Teléfono:</strong> {center.telefono}
                </p>
                <p className="text-sm text-neutral-600">
                  <strong>Dirección:</strong> {center.direccion}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}
