import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const TerminosCondiciones = () => {
  useSEO({
    title: "Términos y Condiciones — Sixteam.pro",
    description: "Términos y condiciones de uso de los servicios de Sixteam.pro S.A.S. Bogotá, Colombia. Vigentes desde marzo 2026.",
  });

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">

      {/* Hero */}
      <section className="bg-[#0a2342] border-b border-white/10 py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-[#e0e0e0]/60 mb-6">
            <Link to="/" className="inline-flex items-center gap-1 hover:text-[#00bfa5] transition-colors">
              <Home className="w-3.5 h-3.5" />
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#e0e0e0]">Términos y Condiciones</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 font-poppins">
              Términos y Condiciones
            </h1>
            <p className="text-[#e0e0e0] text-base md:text-lg">
              Condiciones de uso de la plataforma y servicios de Sixteam.Pro
            </p>
            <p className="text-[#e0e0e0]/50 text-sm mt-3">
              Última actualización: marzo de 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-10 text-[#e0e0e0] leading-relaxed">

            {/* Información legal */}
            <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#00bfa5] space-y-1">
              <p><strong className="text-white">Sixteam.pro S.A.S.</strong></p>
              <p>Bogotá, Colombia</p>
              <p>Correo de contacto:{' '}
                <a href="mailto:hola@sixteam.pro" className="text-[#00bfa5] hover:underline">
                  hola@sixteam.pro
                </a>
              </p>
              <p>Sitio web:{' '}
                <a href="https://sixteam.pro" target="_blank" rel="noopener noreferrer" className="text-[#00bfa5] hover:underline">
                  https://sixteam.pro
                </a>
              </p>
            </div>

            {/* 1. Aceptación de términos */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">1. Aceptación de Términos</h2>
              <p className="mb-4">
                El acceso y uso del sitio web Sixteam.Pro y de los servicios ofrecidos por Sixteam.pro S.A.S. implica la aceptación plena y sin reservas de los presentes Términos y Condiciones por parte del usuario.
              </p>
              <p>
                Si no está de acuerdo con alguna de las condiciones aquí establecidas, le solicitamos no continuar usando el sitio ni los servicios. Sixteam.pro se reserva el derecho de modificar estos términos en cualquier momento.
              </p>
            </div>

            {/* 2. Descripción del servicio */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">2. Descripción del Servicio</h2>
              <p className="mb-4">
                Sixteam.pro S.A.S. ofrece servicios de estrategia digital, implementación de CRM, automatización de procesos, RevOps y soluciones tecnológicas para empresas en Colombia y Latinoamérica.
              </p>
              <p className="mb-4">
                El acceso a la plataforma tecnológica y los servicios profesionales de consultoría, implementación y acompañamiento están sujetos a los planes y acuerdos comerciales vigentes. Salvo indicación expresa, los servicios profesionales no están incluidos en el acceso estándar a herramientas.
              </p>
              <p>
                Sixteam.pro se reserva el derecho de modificar, ampliar o descontinuar cualquier funcionalidad o servicio en cualquier momento, con o sin previo aviso.
              </p>
            </div>

            {/* 3. Responsabilidades del cliente */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">3. Responsabilidades del Cliente</h2>
              <p className="mb-4">
                El cliente es responsable de la información, contactos, datos personales y cualquier contenido que gestione dentro de los servicios o plataforma de Sixteam.pro.
              </p>
              <p className="mb-4">El usuario se compromete a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usar los servicios exclusivamente para fines lícitos y conforme a la normativa aplicable.</li>
                <li>Contar con las autorizaciones necesarias para el tratamiento de datos de terceros que gestione dentro del sistema.</li>
                <li>No enviar comunicaciones masivas no autorizadas ni realizar prácticas de spam.</li>
                <li>No acceder de forma no autorizada a sistemas o información de terceros.</li>
                <li>No realizar ingeniería inversa, copiar o replicar el funcionamiento del sistema.</li>
                <li>No ejecutar acciones que afecten la estabilidad o seguridad de la plataforma.</li>
              </ul>
              <p className="mt-4">
                Sixteam.pro podrá suspender el acceso en caso de detectar usos indebidos o incumplimiento de estas condiciones.
              </p>
            </div>

            {/* 4. Propiedad intelectual */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">4. Propiedad Intelectual</h2>
              <p className="mb-4">
                Todos los derechos de propiedad intelectual sobre el sitio web, la plataforma Sixteam.Pro, su software, diseño, funcionalidades, estructura, contenidos y documentación son propiedad de Sixteam.pro S.A.S. o de sus licenciantes.
              </p>
              <p className="mb-4">
                El acceso a los servicios no implica transferencia de propiedad intelectual. El cliente obtiene únicamente un derecho limitado, no exclusivo e intransferible de uso, conforme al servicio contratado.
              </p>
              <p>
                Cualquier reproducción, distribución, modificación o uso no autorizado de los contenidos está expresamente prohibido.
              </p>
            </div>

            {/* 5. Limitación de responsabilidad */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">5. Limitación de Responsabilidad</h2>
              <p className="mb-4">
                Sixteam.pro realiza esfuerzos razonables para mantener la disponibilidad y correcto funcionamiento de sus servicios. Sin embargo, el servicio puede presentar interrupciones temporales por mantenimiento, actualizaciones, fallas técnicas o eventos fuera del control de la empresa.
              </p>
              <p className="mb-4">
                Sixteam.pro no garantiza la disponibilidad ininterrumpida del servicio ni se hace responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso o imposibilidad de uso de la plataforma.
              </p>
              <p>
                La plataforma puede integrar servicios de terceros (hosting, cloud, APIs, mensajería). Sixteam.pro no será responsable por interrupciones, cambios de políticas o limitaciones técnicas derivadas de dichos proveedores.
              </p>
            </div>

            {/* 6. Ley aplicable */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">6. Ley Aplicable</h2>
              <p className="mb-4">
                Los presentes Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia derivada de su interpretación o aplicación será resuelta ante los tribunales competentes de la ciudad de Bogotá, Colombia.
              </p>
              <p>
                Sixteam.pro podrá actualizar estos Términos y Condiciones en cualquier momento. Las versiones actualizadas serán publicadas en el sitio web Sixteam.Pro y entrarán en vigencia desde su fecha de publicación.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">Contacto</h2>
              <p className="mb-4">
                Para cualquier consulta relacionada con estos Términos y Condiciones, puede escribirnos a:
              </p>
              <div className="p-4 bg-white/5 rounded-lg border-l-4 border-[#00bfa5] space-y-1">
                <p><strong className="text-white">Sixteam.pro S.A.S.</strong></p>
                <p>Bogotá, Colombia</p>
                <p>
                  <a href="mailto:hola@sixteam.pro" className="text-[#00bfa5] hover:underline">hola@sixteam.pro</a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TerminosCondiciones;
