import { CheckCircle, AlertCircle, Info, ExternalLink, DollarSign, Clock, FileText } from 'lucide-react'
import { getJurisdiccionBySlug } from '@/lib/jurisdicciones'
import { ToC } from '@/components/ToC'
import { AdsterraContentBannerMobile } from '@/components/AdsterraNativeBanner'
import { notFound } from 'next/navigation'

interface GrabadoPageProps {
  params: { slug: string }
}

export default async function GrabadoPage({ params }: GrabadoPageProps) {
  const jurisdiccion = await getJurisdiccionBySlug(params.slug)

  if (!jurisdiccion) {
    notFound()
  }

  const { grabado } = jurisdiccion

  const sections = [
    { id: 'estado', title: 'Estado del Grabado', level: 1 },
    { id: 'requisitos', title: 'Requisitos', level: 1 },
    { id: 'costo', title: 'Costo', level: 1 },
    { id: 'exenciones', title: 'Exenciones', level: 1 },
    { id: 'turnero', title: 'Turnero Oficial', level: 1 },
    { id: 'faq', title: 'Preguntas Frecuentes', level: 1 }
  ]

  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'obligatorio':
        return <CheckCircle className="h-6 w-6 text-green-600" />
      case 'opcional':
        return <AlertCircle className="h-6 w-6 text-yellow-600" />
      case 'no_aplica':
        return <Info className="h-6 w-6 text-gray-600" />
      default:
        return <Info className="h-6 w-6 text-gray-600" />
    }
  }

  const getEstadoText = (estado: string) => {
    switch (estado) {
      case 'obligatorio':
        return 'El grabado de autopartes es obligatorio en esta jurisdicción'
      case 'opcional':
        return 'El grabado de autopartes es opcional en esta jurisdicción'
      case 'no_aplica':
        return 'El grabado de autopartes no aplica en esta jurisdicción'
      default:
        return 'Estado del grabado no especificado'
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      {/* Main Content */}
      <div className="lg:col-span-3 space-y-8">
        {/* Estado del Grabado */}
        <section id="estado" className="card">
          <div className="flex items-start space-x-4">
            {getEstadoIcon(jurisdiccion.estadoGrabado)}
            <div>
              <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                Estado del Grabado
              </h2>
              <p className="text-neutral-600 mb-4">
                {getEstadoText(jurisdiccion.estadoGrabado)}
              </p>
              <span className={`badge ${jurisdiccion.estadoGrabado === 'obligatorio' ? 'badge-success' : jurisdiccion.estadoGrabado === 'opcional' ? 'badge-warning' : 'badge-error'}`}>
                {jurisdiccion.estadoGrabado === 'obligatorio' ? 'Obligatorio' : jurisdiccion.estadoGrabado === 'opcional' ? 'Opcional' : 'No aplica'}
              </span>
            </div>
          </div>
        </section>

        {/* Requisitos */}
        {grabado.requisitos.length > 0 && (
          <section id="requisitos" className="card">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Requisitos para el Grabado
            </h2>
            <div className="space-y-3">
              {grabado.requisitos.map((requisito, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{requisito}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Costo */}
        {grabado.costo && (
          <section id="costo" className="card">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Costo del Grabado
            </h2>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-3xl font-bold text-green-600">{grabado.costo}</p>
                <p className="text-neutral-600">Costo total del servicio</p>
              </div>
            </div>
          </section>
        )}

        {/* Exenciones */}
        {grabado.exenciones && grabado.exenciones.length > 0 && (
          <section id="exenciones" className="card">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Exenciones
            </h2>
            <div className="space-y-3">
              {grabado.exenciones.map((exencion, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">{exencion}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Turnero Oficial */}
        {grabado.turneroUrl && (
          <section id="turnero" className="card bg-primary-50 border-primary-200">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">
              Turnero Oficial
            </h2>
            <p className="text-neutral-600 mb-6">
              Accedé directamente al sistema oficial de turnos para agendar tu cita de grabado.
            </p>
            <a
              href={grabado.turneroUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <ExternalLink size={20} />
              <span>Ir al Turnero Oficial</span>
            </a>
          </section>
        )}

        {/* FAQ */}
        {grabado.faqs && grabado.faqs.length > 0 && (
          <section id="faq" className="card">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-6">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {grabado.faqs.map((faq, index) => (
                <div key={index} className="border-b border-neutral-200 pb-4 last:border-b-0">
                  <h3 className="font-semibold text-neutral-900 mb-2">{faq.pregunta}</h3>
                  <p className="text-neutral-600">{faq.respuesta}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Información Adicional */}
        <section className="card bg-neutral-50">
          <h2 className="text-xl font-semibold text-neutral-900 mb-4">
            Información Adicional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-neutral-600">
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>Última actualización: {jurisdiccion.fuentes[0]?.fecha || 'N/A'}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText size={16} />
              <span>Fuente: {jurisdiccion.fuentes[0]?.nombre || 'N/A'}</span>
            </div>
          </div>
        </section>

        {/* Adsterra Banner */}
        <section className="py-4 md:py-8">
          <AdsterraContentBannerMobile />
        </section>
      </div>

      {/* Table of Contents */}
      <div className="lg:col-span-1">
        <ToC sections={sections} />
      </div>
    </div>
  )
}
