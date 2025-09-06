import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, BookOpen, CheckCircle, AlertCircle, MapPin, DollarSign, FileText } from 'lucide-react'
import { AdsterraContentBannerMobile } from '@/components/AdsterraNativeBanner'

export const metadata = {
  title: 'Grabado de autopartes en Argentina: requisitos provincia por provincia (2025) - Guías',
  description: 'Grabado de autopartes en Argentina 2025: conocé requisitos, leyes y costos provincia por provincia. Evitá multas y problemas en el registro automotor.',
  keywords: [
    'grabado autopartes Argentina 2025',
    'requisitos por provincia',
    'grabado obligatorio',
    'costos grabado autopartes',
    'leyes grabado Argentina',
    'verificación policial'
  ],
  openGraph: {
    title: 'Grabado de autopartes en Argentina: requisitos provincia por provincia (2025)',
    description: 'Grabado de autopartes en Argentina 2025: conocé requisitos, leyes y costos provincia por provincia. Evitá multas y problemas en el registro automotor.',
    url: 'https://www.grabadoautopartes.com.ar/guias/grabado-autopartes-provincias-2025',
  },
}

export default function ArticuloGrabadoProvincias() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header del Artículo */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            href="/guias" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Guías
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-500">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 font-medium">
              Requisitos por Provincia
            </span>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              15 de enero de 2025
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              Equipo Grabado Argentina
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              12 min de lectura
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
            Grabado de autopartes en Argentina: requisitos provincia por provincia (2025)
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed">
            El grabado de autopartes es un sistema de seguridad implementado en distintas jurisdicciones de Argentina. Aunque el grabado de cristales es obligatorio a nivel nacional para todos los vehículos, la exigencia de grabar puertas, capot y baúl varía según la provincia.
          </p>
        </div>
      </section>

      {/* Contenido del Artículo */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Sección 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              ¿Qué es el grabado de autopartes y para qué sirve?
            </h2>
            
            <p className="text-neutral-700 mb-6">
              El grabado de autopartes consiste en marcar de manera indeleble el número de dominio en distintas piezas de la carrocería:
            </p>
            
            <div className="grid gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Capot</strong>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Puertas</strong>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Baúl o portón trasero</strong>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>👉 El objetivo</strong> es prevenir el robo de vehículos y el tráfico ilegal de autopartes, ya que las piezas quedan identificadas con la patente.
                </div>
              </div>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Diferencia con el grabado de cristales
            </h2>
            
            <div className="grid gap-6">
              <div className="border border-green-200 rounded-lg p-6 bg-green-50">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Cristales
                </h3>
                <p className="text-green-700">
                  Obligatorio en todo el país, regulado por la DNRPA. Se exige para la verificación policial en transferencias y altas.
                </p>
              </div>
              
              <div className="border border-orange-200 rounded-lg p-6 bg-orange-50">
                <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Autopartes
                </h3>
                <p className="text-orange-700">
                  Solo es obligatorio en CABA y algunas provincias (Buenos Aires, Córdoba, Mendoza, Río Negro, San Juan). En el resto depende de la planta de verificación o de la jurisdicción local.
                </p>
              </div>
            </div>
          </section>

          {/* Sección 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <MapPin className="h-6 w-6 text-green-600" />
              Provincias donde el grabado de autopartes es obligatorio
            </h2>
            
            <div className="space-y-8">
              {/* CABA */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  CABA
                </h3>
                <div className="space-y-3">
                  <p className="text-neutral-700">• Obligatorio para vehículos radicados en la Ciudad.</p>
                  <div className="flex items-center gap-2 text-green-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="font-medium">Costo: alrededor de $62.000 (actualizado a 2025).</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    <span className="font-medium">Multa por incumplir: 150 UF.</span>
                  </div>
                  <p className="text-neutral-700">• Turnos: vía portal del Gobierno de la Ciudad.</p>
                </div>
              </div>

              {/* Buenos Aires */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Provincia de Buenos Aires
                </h3>
                <div className="space-y-3">
                  <p className="text-neutral-700">• Ley 14.497 y Decreto 280/2014.</p>
                  <p className="text-neutral-700">• Es obligatorio para todo vehículo radicado en PBA.</p>
                  <p className="text-neutral-700">• Autoridad: RPVA (Registro Provincial de Verificación Automotor).</p>
                  <p className="text-neutral-700">• Turnos: se gestionan online en el sistema oficial.</p>
                </div>
              </div>

              {/* Córdoba */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Córdoba
                </h3>
                <div className="space-y-3">
                  <p className="text-neutral-700">• Sistema vigente desde 2015.</p>
                  <p className="text-neutral-700">• Gestionado por la Policía de Córdoba en plantas de verificación.</p>
                  <p className="text-neutral-700">• Es obligatorio grabar las piezas principales además de los cristales.</p>
                </div>
              </div>

              {/* Mendoza */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Mendoza
                </h3>
                <div className="space-y-3">
                  <p className="text-neutral-700">• Regulado por las Leyes 8.248 y 8.626.</p>
                  <p className="text-neutral-700">• El trámite se hace en la planta de Verificación Mendoza.</p>
                  <p className="text-neutral-700">• Es requisito para circular y transferir.</p>
                </div>
              </div>

              {/* Río Negro */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Río Negro
                </h3>
                <div className="space-y-3">
                  <p className="text-neutral-700">• Ley 5.275 (2018).</p>
                  <p className="text-neutral-700">• Obliga a grabar el dominio en autopartes para todo vehículo radicado en la provincia.</p>
                  <p className="text-neutral-700">• Se realiza en plantas habilitadas.</p>
                </div>
              </div>

              {/* San Juan */}
              <div className="border border-neutral-200 rounded-lg p-6 bg-white shadow-sm">
                <h3 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  San Juan
                </h3>
                <div className="space-y-3">
                  <p className="text-neutral-700">• Ley 1707-C + Decreto Reglamentario 2-C.</p>
                  <p className="text-neutral-700">• Obliga a grabar autopartes en autos y motos.</p>
                  <p className="text-neutral-700">• El trámite se hace en la Policía de la Provincia.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Provincias donde no hay una ley específica
            </h2>
            
            <p className="text-neutral-700 mb-6">
              En provincias como Santa Fe, Tucumán, Chaco, Misiones y el resto del país, no existe una ley general que obligue al grabado de autopartes. Sin embargo:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>El grabado de cristales sí es obligatorio</strong> (nacional).
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>En algunas plantas de verificación</strong> pueden pedir el grabado de autopartes como requisito práctico para aprobar el trámite.
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Por eso, siempre conviene consultar</strong> en la planta local al momento de pedir turno.
                </div>
              </div>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Paso a paso para hacer el grabado
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <strong>Sacar turno</strong> en la web oficial de tu jurisdicción.
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <strong>Presentar documentación:</strong> cédula verde, DNI y turno.
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <strong>Realización del grabado:</strong> marcan el dominio en capot, puertas y baúl.
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <strong>Entrega de certificado</strong> y oblea que acredita el trámite.
                </div>
              </div>
            </div>
          </section>

          {/* Sección 6 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-6">
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Qué pasa si no hago el grabado de autopartes en una jurisdicción donde es obligatorio?
                </h3>
                <p className="text-neutral-700">
                  Podés recibir multas, no aprobar la verificación policial y tener trabas para circular o transferir tu auto.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Cuánto cuesta el grabado?
                </h3>
                <p className="text-neutral-700">
                  Depende de la provincia y se actualiza cada año. En CABA ronda los $62.000 en 2025.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿El grabado de autopartes reemplaza al de cristales?
                </h3>
                <p className="text-neutral-700">
                  No. El de cristales es obligatorio en todo el país y siempre se exige en la verificación.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Aplica también a motos?
                </h3>
                <p className="text-neutral-700">
                  En algunas provincias (como San Juan) sí; en otras, el sistema aplica solo a autos y utilitarios.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusión */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Conclusión
            </h2>
            
            <p className="text-neutral-700 mb-6">
              El grabado de autopartes es una herramienta clave para combatir el robo de vehículos y autopartes. Aunque no todas las provincias lo exigen, en CABA, Buenos Aires, Córdoba, Mendoza, Río Negro y San Juan es obligatorio.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>👉 Antes de pedir turno de verificación, revisá si tu jurisdicción lo solicita</strong> para evitar multas y demoras.
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Adsterra Banner */}
        <div className="mb-8 md:mb-12">
          <AdsterraContentBannerMobile />
        </div>

        {/* CTA Final */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            ¿Necesitás más información específica?
          </h3>
          <p className="text-neutral-600 mb-6">
            Consultá los requisitos detallados de tu jurisdicción en nuestra sección de jurisdicciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jurisdicciones"
              className="btn-primary"
            >
              Ver Jurisdicciones
            </Link>
            <Link 
              href="/guias"
              className="btn-secondary"
            >
              Más Guías
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
