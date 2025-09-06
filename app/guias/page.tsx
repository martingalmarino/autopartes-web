import Link from 'next/link'
import { BookOpen, Calendar, User, ArrowRight } from 'lucide-react'
import { AdsterraContentBanner } from '@/components/AdsterraNativeBanner'

// Datos de los artículos (en el futuro esto vendrá de una base de datos)
const articulos = [
  {
    id: 'grabado-autopartes-provincias-2025',
    titulo: 'Grabado de autopartes en Argentina: requisitos provincia por provincia (2025)',
    descripcion: 'Grabado de autopartes en Argentina 2025: conocé requisitos, leyes y costos provincia por provincia. Evitá multas y problemas en el registro automotor.',
    fecha: '2025-01-15',
    autor: 'Equipo Grabado Argentina',
    categoria: 'Requisitos por Provincia',
    tiempoLectura: '12 min',
    destacado: true
  },
  {
    id: 'rpa-rpm-cedula-digital',
    titulo: 'Lo que nadie te explicó sobre RPA, RPM y cédula digital (y necesitás saber ya)',
    descripcion: 'Guía completa sobre RPA, RPM y cédula digital en Argentina. Qué significan, cuándo se tramitan y cómo evitar problemas en el Registro del Automotor.',
    fecha: '2025-01-15',
    autor: 'Equipo Grabado Argentina',
    categoria: 'Trámites Registrales',
    tiempoLectura: '8 min',
    destacado: false
  }
]

export default function GuiasPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Guías y Artículos
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Información detallada y guías paso a paso sobre grabado de autopartes, 
              trámites registrales y todo lo que necesitás saber para no tener problemas.
            </p>
          </div>
        </div>
      </section>

      {/* Artículos Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {articulos.map((articulo) => (
              <article 
                key={articulo.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  articulo.destacado ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                {articulo.destacado && (
                  <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
                    ⭐ Artículo Destacado
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-neutral-500">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                      {articulo.categoria}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(articulo.fecha).toLocaleDateString('es-AR', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {articulo.autor}
                    </div>
                    <span className="text-neutral-400">•</span>
                    <span>{articulo.tiempoLectura} de lectura</span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4 leading-tight">
                    {articulo.titulo}
                  </h2>
                  
                  <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                    {articulo.descripcion}
                  </p>

                  <Link 
                    href={`/guias/${articulo.id}`}
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Leer artículo completo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Adsterra Banner */}
          <div className="mt-16">
            <AdsterraContentBanner />
          </div>

          {/* Mensaje para futuros artículos */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Más artículos próximamente
              </h3>
              <p className="text-neutral-600">
                Estamos preparando más guías detalladas sobre grabado de autopartes, 
                requisitos por jurisdicción y consejos prácticos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
