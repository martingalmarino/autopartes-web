import { JurisdictionCard } from '@/components/JurisdictionCard'
import { getJurisdicciones } from '@/lib/jurisdicciones'
import { JurisdiccionesFilters } from './JurisdiccionesFilters'
import { AdsterraContentBannerMobile } from '@/components/AdsterraNativeBanner'

// Force deploy update - Vercel manual trigger

export async function JurisdiccionesClient() {
  const jurisdicciones = await getJurisdicciones()

  const estados = [
    { value: 'obligatorio', label: 'Obligatorio', count: 0 },
    { value: 'opcional', label: 'Opcional', count: 0 },
    { value: 'no_aplica', label: 'No aplica', count: 0 },
    { value: 'indeterminado', label: 'Indeterminado', count: 0 },
  ]

  // Contar jurisdicciones por estado
  const estadosConCount = estados.map(estado => ({
    ...estado,
    count: jurisdicciones.filter(j => j.estadoGrabado === estado.value).length
  }))

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            Todas las Jurisdicciones
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Encontrá información detallada sobre grabado de autopartes, RPA/RPM y cédulas digitales 
            para cada jurisdicción de Argentina.
          </p>
        </div>

        {/* Adsterra Banner - Movido más arriba */}
        <div className="mb-8 md:mb-12">
          <AdsterraContentBannerMobile />
        </div>

        {/* Filters */}
        <JurisdiccionesFilters jurisdicciones={jurisdicciones} estadosConCount={estadosConCount} />

        {/* Stats */}
        <div className="mt-12 bg-neutral-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Estadísticas por Estado
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {estadosConCount.map(estado => (
              <div key={estado.value} className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">
                  {estado.count}
                </div>
                <div className="text-sm text-neutral-600">
                  {estado.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
