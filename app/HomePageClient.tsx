import Link from 'next/link'
import { Search, MapPin, FileText, Calendar } from 'lucide-react'
import { JurisdictionCard } from '@/components/JurisdictionCard'
import { getJurisdicciones } from '@/lib/jurisdicciones'
import { AdsterraContentBannerMobile } from '@/components/AdsterraNativeBanner'

// Force deploy update - Vercel manual trigger

export async function HomePageClient() {
  const jurisdicciones = await getJurisdicciones()

  // Obtener las 3 jurisdicciones más populares
  const jurisdiccionesPopulares = jurisdicciones.slice(0, 3)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6">
              Grabado de Autopartes
              <span className="block text-primary-600">Argentina</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
              Información oficial sobre grabado de autopartes, RPA/RPM y cédulas digitales 
              por jurisdicción en Argentina. Encontrá requisitos, costos y turnos.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/jurisdicciones"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary-500/30 focus:ring-offset-2"
              >
                Ver todas las jurisdicciones
              </Link>
              <Link
                href="/mapa"
                className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold text-lg rounded-xl border-2 border-neutral-200 hover:border-primary-300 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary-500/30 focus:ring-offset-2 hover:text-primary-700"
              >
                <MapPin size={20} className="mr-2" />
                Mapa de centros
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Jurisdictions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              Jurisdicciones Populares
            </h2>
            <p className="text-lg text-neutral-600">
              Las jurisdicciones más consultadas para grabado de autopartes
            </p>
          </div>

          {jurisdiccionesPopulares.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jurisdiccionesPopulares.map((jurisdiccion) => (
                <JurisdictionCard
                  key={jurisdiccion.slug}
                  jurisdiccion={jurisdiccion}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-neutral-600">No hay jurisdicciones disponibles</p>
            </div>
          )}

          <div className="text-center mt-8">
            <Link
              href="/jurisdicciones"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold text-lg rounded-xl border-2 border-neutral-200 hover:border-primary-300 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-primary-500/30 focus:ring-offset-2 hover:text-primary-700"
            >
              Ver todas las jurisdicciones
            </Link>
          </div>
        </div>
      </section>

      {/* Adsterra Banner */}
      <section className="py-4 md:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdsterraContentBannerMobile />
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Encontrá la información que necesitás en solo 3 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">1. Buscá tu jurisdicción</h3>
              <p className="text-neutral-600">
                Encontrá información específica para tu provincia o ciudad
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">2. Revisá requisitos</h3>
              <p className="text-neutral-600">
                Conocé qué documentos necesitás y cuánto cuesta
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">3. Sacá tu turno</h3>
              <p className="text-neutral-600">
                Accedé directamente al turnero oficial de tu jurisdicción
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            ¿Necesitás más información?
          </h2>
          <p className="text-lg text-neutral-600 mb-8">
            Para cualquier consulta sobre grabado de autopartes, RPA/RPM o cédulas digitales visita nuestra sección de preguntas frecuentes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/faq" className="btn-primary">
              Ver preguntas frecuentes
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
