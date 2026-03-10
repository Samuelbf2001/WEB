import React from 'react';
import Footer from '@/components/Footer';

const TerminosCondiciones = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Términos y Condiciones
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Uso de la plataforma Sixteam.Pro
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 text-gray-700 leading-relaxed space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">Información Legal</h2>
              <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-sixteam-teal">
                <p><strong>Sixteam Innovación y Estrategia Digital S.A.S.</strong></p>
                <p>NIT: 901967849</p>
                <p>Correo de contacto: <a href="mailto:contacto@sixteam.pro" className="text-sixteam-blue hover:underline">contacto@sixteam.pro</a></p>
                <p>Sitio web: <a href="https://sixteam.pro" target="_blank" rel="noopener noreferrer" className="text-sixteam-blue hover:underline">https://sixteam.pro</a></p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">1. Alcance del Servicio</h2>
              <p className="mb-4">
                Sixteam Innovación y Estrategia Digital S.A.S. ofrece acceso a la plataforma tecnológica Sixteam.Pro, la cual permite gestionar relaciones con clientes, comunicaciones digitales, automatización de procesos y otras funcionalidades asociadas a la gestión comercial y operativa de organizaciones.
              </p>
              <p>
                Adicionalmente, Sixteam puede ofrecer servicios profesionales de consultoría, implementación, configuración, soporte y acompañamiento estratégico relacionados con el uso de la plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">2. Plataforma y Servicios Profesionales</h2>
              <p className="mb-4">
                El acceso a la plataforma corresponde al uso del software bajo las condiciones del plan o servicio contratado.
              </p>
              <p className="mb-4">
                Los servicios de consultoría, implementación, configuración o acompañamiento estratégico prestados por Sixteam se consideran servicios independientes del acceso a la plataforma y podrán estar sujetos a acuerdos comerciales o contratos específicos.
              </p>
              <p>
                Salvo que se indique expresamente lo contrario, los servicios profesionales no se consideran incluidos dentro del acceso estándar a la plataforma.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">3. Uso y Restricciones de la Plataforma</h2>
              <p className="mb-4">
                El uso de la plataforma deberá realizarse conforme a la ley y a las condiciones establecidas por Sixteam.
              </p>
              <p className="mb-4">Los usuarios se comprometen a no:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Utilizar la plataforma para actividades ilegales.</li>
                <li>Enviar comunicaciones masivas no autorizadas o realizar prácticas de spam.</li>
                <li>Acceder de forma no autorizada a sistemas o información de terceros.</li>
                <li>Realizar ingeniería inversa, copiar o replicar el funcionamiento del sistema.</li>
                <li>Utilizar herramientas automatizadas para extraer información sin autorización.</li>
                <li>Realizar acciones que afecten la estabilidad o seguridad de la plataforma.</li>
              </ul>
              <p className="mt-4">
                Sixteam podrá suspender el acceso al sistema en caso de detectar usos indebidos.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">4. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todos los derechos de propiedad intelectual relacionados con el sitio web, la plataforma Sixteam.Pro, su software, diseño, funcionalidades, estructura y documentación son propiedad de Sixteam Innovación y Estrategia Digital S.A.S. o de sus licenciantes.
              </p>
              <p>
                El acceso a la plataforma no implica transferencia de propiedad intelectual. El cliente obtiene únicamente un derecho limitado de uso conforme al servicio contratado.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">5. Responsabilidad del Cliente sobre los Datos</h2>
              <p className="mb-4">
                El cliente es responsable de la información, contactos, datos personales y cualquier contenido que gestione dentro de la plataforma.
              </p>
              <p className="mb-4">
                El cliente declara que cuenta con las autorizaciones necesarias para el tratamiento de dichos datos y que su uso cumple con la normativa aplicable.
              </p>
              <p>
                Sixteam actúa como proveedor de la infraestructura tecnológica y no será responsable por el uso que el cliente realice de la información gestionada dentro del sistema.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">6. Integraciones y Servicios de Terceros</h2>
              <p className="mb-4">
                La plataforma puede integrar servicios operados por terceros, incluyendo proveedores de hosting, infraestructura cloud, herramientas de comunicación digital, APIs y plataformas de mensajería.
              </p>
              <p>
                Sixteam no será responsable por interrupciones, cambios de políticas, limitaciones técnicas o bloqueos derivados de dichos proveedores.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">7. Disponibilidad del Servicio</h2>
              <p className="mb-4">
                Sixteam realiza esfuerzos razonables para mantener la disponibilidad y correcto funcionamiento de la plataforma.
              </p>
              <p className="mb-4">
                No obstante, el servicio puede presentar interrupciones temporales derivadas de mantenimiento, actualizaciones del sistema, fallas técnicas, eventos fuera del control de Sixteam o incidencias en servicios de terceros.
              </p>
              <p>
                En consecuencia, Sixteam no garantiza la disponibilidad ininterrumpida de la plataforma ni se hace responsable por interrupciones temporales del servicio.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">8. Suspensión del Servicio</h2>
              <p className="mb-4">Sixteam podrá suspender temporal o permanentemente el acceso a la plataforma en caso de:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>incumplimiento de estas condiciones</li>
                <li>uso indebido del sistema</li>
                <li>falta de pago de los servicios contratados</li>
                <li>riesgos de seguridad para la plataforma</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-sixteam-navy mb-4">9. Modificaciones</h2>
              <p>
                Sixteam podrá actualizar estos Términos y Condiciones en cualquier momento. Las versiones actualizadas serán publicadas en el sitio web Sixteam.Pro.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;
