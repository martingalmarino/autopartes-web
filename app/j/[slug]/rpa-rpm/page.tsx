import { CheckCircle, FileText, Calendar, AlertTriangle, Info } from 'lucide-react'
import { getJurisdiccionBySlug } from '@/lib/jurisdicciones'
import { notFound } from 'next/navigation'
import { RpaRpmInteractive } from './RpaRpmInteractive'

interface RpaRpmPageProps {
  params: { slug: string }
}

export default async function RpaRpmPage({ params }: RpaRpmPageProps) {
  const jurisdiccion = await getJurisdiccionBySlug(params.slug)

  if (!jurisdiccion) {
    notFound()
  }

  if (!jurisdiccion.rpa_rpm) {
    return (
      <div className="card text-center py-12">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
          RPA/RPM no disponible
        </h2>
        <p className="text-neutral-600">
          Esta jurisdicción no tiene información sobre RPA/RPM disponible.
        </p>
      </div>
    )
  }

  const { rpa_rpm } = jurisdiccion

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="card bg-blue-50 border-blue-200">
        <div className="flex items-start space-x-4">
          <Info className="h-8 w-8 text-blue-600 mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
              RPA/RPM - Registro de Propiedad Automotor
            </h2>
            <p className="text-neutral-700 mb-4">
              {rpa_rpm.cuandoAplica}
            </p>
            <div className="bg-blue-100 text-blue-800 px-3 py-2 rounded-lg text-sm">
              <strong>¿Qué es RPA/RPM?</strong> El Registro de Propiedad Automotor (RPA) y 
              el Registro de Marcas y Modelos (RPM) son sistemas que permiten verificar la 
              propiedad y autenticidad de los vehículos.
            </div>
          </div>
        </div>
      </div>

      {/* Pasos */}
      <section className="card">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">
          Pasos para obtener RPA/RPM
        </h3>
        <div className="space-y-4">
          {rpa_rpm.pasos.map((paso, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <p className="text-neutral-700 font-medium">{paso}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentación */}
      <section className="card">
        <h3 className="text-xl font-semibold text-neutral-900 mb-6">
          Documentación Requerida
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {rpa_rpm.documentacion.map((doc, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
              <FileText className="h-5 w-5 text-primary-600" />
              <span className="text-neutral-700">{doc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Checklist Interactivo */}
      <RpaRpmInteractive />

      {/* CTA */}
      <section className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">
            ¿Necesitás ayuda con el trámite?
          </h3>
          <p className="text-neutral-700 mb-6">
            Nuestros gestores especializados pueden ayudarte con todo el proceso de RPA/RPM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contacto" className="btn-primary">
              Solicitar asesoramiento
            </a>
            <a href="/faq" className="btn-secondary">
              Ver preguntas frecuentes
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
