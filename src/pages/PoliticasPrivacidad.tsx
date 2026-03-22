import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const PoliticasPrivacidad = () => {
  useSEO({
    title: "Política de Privacidad — Sixteam.pro",
    description: "Política de privacidad y tratamiento de datos personales de Sixteam.pro S.A.S. Bogotá, Colombia. Actualizada marzo 2026.",
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
            <span className="text-[#e0e0e0]">Política de Privacidad</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3 font-poppins">
              Política de Privacidad
            </h1>
            <p className="text-[#e0e0e0] text-base md:text-lg">
              Tratamiento de Datos Personales — Sixteam.Pro
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

            {/* Responsable */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">1. Responsable del Tratamiento</h2>
              <p className="mb-4">
                El responsable del tratamiento de los datos personales recolectados a través de Sixteam.Pro es:
              </p>
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
            </div>

            {/* Datos que recolectamos */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">2. Datos que Recolectamos</h2>
              <p className="mb-4">
                A través del sitio web Sixteam.Pro podemos recopilar información personal de manera directa o automática, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Información de contacto:</strong> Nombre, correo electrónico, número de teléfono u otros datos proporcionados voluntariamente a través de formularios de contacto o solicitud de información.
                </li>
                <li>
                  <strong className="text-white">Datos técnicos de navegación:</strong> Dirección IP, tipo de navegador, sistema operativo, páginas visitadas, fecha y hora de acceso y otros datos generados durante la navegación.
                </li>
                <li>
                  <strong className="text-white">Información comercial:</strong> Datos relacionados con solicitudes sobre nuestros servicios, agendamiento de reuniones o interacción con nuestros canales de contacto.
                </li>
              </ul>
            </div>

            {/* Uso de la información */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">3. Uso de la Información</h2>
              <p className="mb-4">Los datos recolectados podrán utilizarse para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Atender solicitudes de información de los usuarios.</li>
                <li>Contactar a personas interesadas en nuestros servicios.</li>
                <li>Gestionar comunicaciones relacionadas con nuestros productos.</li>
                <li>Realizar seguimiento a consultas o requerimientos enviados.</li>
                <li>Mejorar el funcionamiento, seguridad y experiencia del sitio.</li>
                <li>Cumplir con obligaciones legales o regulatorias aplicables.</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">4. Cookies</h2>
              <p className="mb-4">
                El sitio web utiliza cookies y tecnologías similares para mejorar la experiencia de navegación y recopilar datos de análisis de uso. Las cookies son archivos de texto pequeños almacenados en el dispositivo del usuario.
              </p>
              <p className="mb-4">
                Utilizamos cookies propias y de terceros (como Google Analytics y Google Tag Manager) para entender cómo los usuarios interactúan con el sitio. Esta información es agregada y anónima.
              </p>
              <p>
                El usuario puede configurar su navegador para rechazar cookies o para ser notificado cuando se envíen. Sin embargo, algunas funcionalidades del sitio pueden verse afectadas si se deshabilitan.
              </p>
            </div>

            {/* Derechos del usuario */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">5. Derechos del Usuario</h2>
              <p className="mb-4">
                De acuerdo con la normativa colombiana sobre protección de datos personales (Ley 1581 de 2012), los titulares tienen derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Conocer, actualizar y rectificar sus datos personales.</li>
                <li>Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.</li>
                <li>Revocar la autorización o solicitar la supresión de sus datos cuando sea procedente.</li>
                <li>Acceder de forma gratuita a los datos personales objeto de tratamiento.</li>
                <li>Presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puede escribirnos a{' '}
                <a href="mailto:hola@sixteam.pro" className="text-[#00bfa5] hover:underline">hola@sixteam.pro</a>.
                Daremos respuesta dentro de los plazos establecidos por la normativa aplicable.
              </p>
            </div>

            {/* Cambios a esta política */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">6. Cambios a esta Política</h2>
              <p className="mb-4">
                Sixteam.pro podrá actualizar esta Política de Privacidad en cualquier momento para reflejar cambios legales, tecnológicos u operativos.
              </p>
              <p>
                Las modificaciones serán publicadas en el sitio web y entrarán en vigencia desde su fecha de publicación. Le recomendamos revisar esta página periódicamente.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h2 className="text-xl font-bold text-white mb-3 font-poppins">7. Contacto</h2>
              <p className="mb-4">
                Para cualquier consulta, reclamo o ejercicio de derechos relacionado con el tratamiento de sus datos personales, puede contactarnos en:
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

export default PoliticasPrivacidad;
