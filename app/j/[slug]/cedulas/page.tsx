import { Smartphone, CreditCard, Download, CheckCircle, Info, ExternalLink } from 'lucide-react'
import { getJurisdiccionBySlug } from '@/lib/jurisdicciones'
import { notFound } from 'next/navigation'
import { AdsterraContentBanner } from '@/components/AdsterraNativeBanner'

interface CedulasPageProps {
  params: { slug: string }
}

export default async function CedulasPage({ params }: CedulasPageProps) {
  const jurisdiccion = await getJurisdiccionBySlug(params.slug)

  if (!jurisdiccion) {
    notFound()
  }

  const { cedulas } = jurisdiccion

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card bg-green-50 border-green-200">
        <div className="flex items-start space-x-4">
          <Smartphone className="h-8 w-8 text-green-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              Cédulas Digitales y para Autorizados
            </h2>
            <p className="text-neutral-700 mb-4">
              Información sobre los diferentes tipos de cédulas disponibles en esta jurisdicción 
              y cómo obtenerlas.
            </p>
            <div className="bg-green-100 text-green-800 px-3 py-2 rounded-lg text-sm">
              <strong>Tipos de Cédulas:</strong> Digital (con chip), para Autorizados (física), 
              y especiales según el tipo de vehículo o uso.
            </div>
          </div>
        </div>
      </div>

      {/* Tipos de Cédulas */}
      {cedulas.tipos.map((tipo, index) => (
        <section key={index} className="card">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
              {tipo.nombre.includes('Digital') ? (
                <Smartphone className="h-6 w-6 text-primary-600" />
              ) : (
                <CreditCard className="h-6 w-6 text-primary-600" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {tipo.nombre}
              </h3>
              <p className="text-neutral-600 mb-4">
                {tipo.descripcion}
              </p>
              
              {/* Pasos */}
              <div className="space-y-3">
                <h4 className="font-medium text-neutral-900">Pasos para obtener:</h4>
                {tipo.pasos.map((paso, pasoIndex) => (
                  <div key={pasoIndex} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-xs flex-shrink-0">
                      {pasoIndex + 1}
                    </div>
                    <span className="text-neutral-700">{paso}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Cédula Digital - Información Especial */}
      <section className="card bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-4">
          <Smartphone className="h-8 w-8 text-blue-600 mt-1" />
          <div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">
              Cédula Digital - Mi Argentina
            </h3>
            <p className="text-neutral-700 mb-4">
              La cédula digital es la versión electrónica de tu cédula de identidad, 
              disponible a través de la aplicación oficial Mi Argentina.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-neutral-900 mb-2">Ventajas:</h4>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• Siempre disponible en tu celular</li>
                  <li>• No se puede perder ni robar</li>
                  <li>• Válida para todos los trámites</li>
                  <li>• Actualización automática</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-medium text-neutral-900 mb-2">Requisitos:</h4>
                <ul className="space-y-1 text-sm text-neutral-600">
                  <li>• Celular con Android 6+ o iOS 12+</li>
                  <li>• Conexión a internet</li>
                  <li>• DNI físico vigente</li>
                  <li>• Cuenta de Mi Argentina</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.argentina.gob.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <ExternalLink size={20} />
                <span>Descargar Mi Argentina</span>
              </a>
              <a
                href="https://www.argentina.gob.ar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <Info size={20} />
                <span>Ver instrucciones</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {cedulas.faqs && cedulas.faqs.length > 0 && (
        <section className="card">
          <h3 className="text-xl font-semibold text-neutral-900 mb-6">
            Preguntas Frecuentes sobre Cédulas
          </h3>
          <div className="space-y-6">
            {cedulas.faqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-200 pb-4 last:border-b-0">
                <h4 className="font-semibold text-neutral-900 mb-2">{faq.pregunta}</h4>
                <p className="text-neutral-600">{faq.respuesta}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Información Adicional */}
      <section className="card bg-neutral-50">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4">
          Información Importante
        </h3>
        <div className="space-y-3 text-sm text-neutral-600">
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>La cédula digital tiene la misma validez que la cédula física</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Puedes usar ambas cédulas de manera indistinta</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>La cédula digital se actualiza automáticamente</span>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>No necesitas renovar la cédula digital</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="card bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            ¿Tenés dudas sobre cédulas?
          </h3>
          <p className="text-neutral-700 mb-6">
            Nuestro equipo está listo para ayudarte con cualquier consulta sobre cédulas digitales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary">
              Contactanos
            </a>
            <a href="/faq" className="btn-secondary">
              Ver preguntas frecuentes
            </a>
          </div>
        </div>
      </section>

      {/* Adsterra Banner */}
      <section className="py-8">
        <AdsterraContentBanner />
      </section>
    </div>
  )
}
