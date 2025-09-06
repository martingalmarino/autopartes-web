import { getJurisdicciones } from '@/lib/jurisdicciones'
import { MapaInteractive } from './MapaInteractive'
import { AdsterraContentBannerMobile } from '@/components/AdsterraNativeBanner'

export default async function MapaPage() {
  const jurisdicciones = await getJurisdicciones()

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Mapa de Centros
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encontrá todos los centros de servicio de grabado, RPA/RPM y cédulas 
            en todo el país. Filtrá por jurisdicción, servicio o ubicación.
          </p>
        </div>

        {/* Interactive Content */}
        <MapaInteractive jurisdicciones={jurisdicciones} />

        {/* Adsterra Banner */}
        <div className="mt-12 md:mt-16">
          <AdsterraContentBannerMobile />
        </div>
      </div>
    </div>
  )
}
