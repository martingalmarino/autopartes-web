import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock, BookOpen, CheckCircle, AlertCircle, Lightbulb } from 'lucide-react'
import { AdsterraContentBannerMobile } from '@/components/AdsterraNativeBanner'

export const metadata = {
  title: 'Lo que nadie te explicó sobre RPA, RPM y cédula digital (y necesitás saber ya) - Guías',
  description: 'Guía completa sobre RPA, RPM y cédula digital en Argentina. Qué significan, cuándo se tramitan y cómo evitar problemas en el Registro del Automotor.',
  keywords: [
    'RPA RPM Argentina',
    'cédula digital',
    'registro automotor',
    'grabado chasis',
    'trámites registrales',
    'verificación policial'
  ],
  openGraph: {
    title: 'Lo que nadie te explicó sobre RPA, RPM y cédula digital (y necesitás saber ya)',
    description: 'Guía completa sobre RPA, RPM y cédula digital en Argentina. Qué significan, cuándo se tramitan y cómo evitar problemas en el Registro del Automotor.',
    url: 'https://www.grabadoautopartes.com.ar/guias/rpa-rpm-cedula-digital',
  },
}

export default function ArticuloRPARPM() {
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
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
              Trámites Registrales
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
              8 min de lectura
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 leading-tight">
            Lo que nadie te explicó sobre RPA, RPM y cédula digital (y necesitás saber ya)
          </h1>
          
          <p className="text-xl text-neutral-600 leading-relaxed">
            En Argentina, los trámites registrales suelen generar dudas y retrasos, sobre todo cuando aparecen siglas como RPA, RPM o se habla de la cédula digital. Esta guía reúne todo lo que necesitás saber para evitar problemas en el Registro del Automotor y en la verificación policial.
          </p>
        </div>
      </section>

      {/* Adsterra Banner - Movido más arriba */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdsterraContentBannerMobile />
        </div>
      </section>

      {/* Contenido del Artículo */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          
          {/* Sección 1 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <BookOpen className="h-6 w-6 text-blue-600" />
              ¿Qué significan RPA y RPM?
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
              <p className="text-neutral-800 mb-4">
                <strong>RPA</strong> significa <strong>Registro de Propiedad Automotor</strong>. En este contexto se utiliza para designar un nuevo código alfanumérico que se asigna al chasis cuando el número original está dañado, ilegible, adulterado o se reemplazó la pieza.
              </p>
              <p className="text-neutral-800">
                <strong>RPM</strong> significa <strong>Registro de Propiedad Motovehicular</strong> y cumple la misma función en el caso de motos, ya sea sobre el cuadro o el motor.
              </p>
            </div>

            <p className="text-neutral-700 mb-4">
              Ambos códigos se graban en la carrocería o pieza indicada, con tipografía oficial, y quedan asentados en el legajo del vehículo.
            </p>
          </section>

          {/* Sección 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-orange-600" />
              ¿Cuándo corresponde pedir un RPA o RPM?
            </h2>
            
            <p className="text-neutral-700 mb-6">Los casos más comunes son:</p>
            
            <div className="grid gap-4 mb-6">
              <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Número ilegible o dañado:</strong> por desgaste, corrosión o accidente.
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Piezas reemplazadas:</strong> motor, chasis o cuadro nuevos sin numeración de fábrica.
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Adulteración detectada:</strong> el verificador observa que hubo borrado, repunteado o modificación.
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Orden judicial:</strong> en investigaciones o recupero de vehículos.
                </div>
              </div>
            </div>

            <p className="text-neutral-700">
              En todos los supuestos, el Registro Seccional es quien autoriza el grabado y emite la documentación que valida el nuevo código.
            </p>
          </section>

          {/* Sección 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Paso a paso para tramitar un RPA o RPM
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <strong>Verificación policial:</strong> llevás el vehículo a planta habilitada. Si detectan un problema, el verificador lo informa.
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <strong>Autorización registral:</strong> con el informe, el Registro Seccional extiende la orden de grabado.
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <strong>Grabado en planta:</strong> se realiza en un lugar específico del chasis/motor con tipografía oficial.
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <strong>Asentamiento en legajo:</strong> el nuevo número queda registrado en la documentación del vehículo.
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-6">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>💡 Consejo:</strong> no intentes resolver por tu cuenta un número ilegible. El trámite debe estar avalado oficialmente para que tenga validez.
                </div>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              La cédula digital: tu "verde" y "azul" en el celular
            </h2>
            
            <p className="text-neutral-700 mb-6">
              Desde 2019, la cédula de identificación de vehículos (ex "verde" y "azul") se puede portar en versión digital a través de la app Mi Argentina.
            </p>
            
            <h3 className="text-xl font-semibold text-neutral-900 mb-4">Características principales:</h3>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Validez legal plena en todo el país.</strong>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>QR dinámico:</strong> se actualiza cada 24 horas y permite a las autoridades verificar la vigencia.
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Autorización a terceros:</strong> en la app podés habilitar a otra persona para conducir tu vehículo, reemplazando la vieja "cédula azul".
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <strong>Multivehículos:</strong> si sos titular de más de un auto o moto, los tenés todos en tu perfil digital.
                </div>
              </div>
            </div>
          </section>

          {/* Sección 5 */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-6">
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Qué diferencia hay entre grabado de autopartes y RPA/RPM?
                </h3>
                <p className="text-neutral-700">
                  El grabado de autopartes (puertas, capot, baúl) es un sistema de seguridad para prevenir robos y depende de cada provincia. El RPA/RPM es una reasignación oficial de numeración cuando la original está en duda o ausente.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Puedo circular solo con la cédula digital?
                </h3>
                <p className="text-neutral-700">
                  Sí. La versión digital tiene validez nacional y reemplaza a la física. De todas formas, siempre conviene tener al menos una copia en papel como respaldo.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Cuánto demora un trámite de RPA/RPM?
                </h3>
                <p className="text-neutral-700">
                  Depende de la jurisdicción y la disponibilidad de turnos. En general, la verificación se resuelve en el día y el Registro demora algunos días más en autorizar y asentar la numeración.
                </p>
              </div>
              
              <div className="border border-neutral-200 rounded-lg p-6">
                <h3 className="font-semibold text-neutral-900 mb-2">
                  ¿Qué pasa si no hago el trámite?
                </h3>
                <p className="text-neutral-700">
                  No vas a poder transferir, patentar o circular legalmente el vehículo. Además, podés enfrentar sanciones por adulteración de números identificatorios.
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
              El RPA/RPM y la cédula digital forman parte de los mecanismos que el Estado argentino implementa para dar seguridad jurídica al parque automotor y facilitar la circulación segura.
            </p>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
              <ul className="space-y-2 text-neutral-800">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Si tu auto o moto tiene problemas de numeración, iniciá el trámite de regrabado cuanto antes.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  Descargá la app Mi Argentina y activá tu cédula digital: vas a simplificar controles y autorizaciones.
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA Final */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-neutral-900 mb-4">
            ¿Necesitás más información?
          </h3>
          <p className="text-neutral-600 mb-6">
            Consultá nuestra sección de jurisdicciones para encontrar los requisitos específicos de tu provincia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/jurisdicciones"
              className="btn-primary"
            >
              Ver Jurisdicciones
            </Link>
            <Link 
              href="/faq"
              className="btn-secondary"
            >
              Preguntas Frecuentes
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}
