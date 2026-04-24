import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useSEO } from '@/hooks/useSEO';

const Contacto = () => {
  useSEO({
    title: "Contacto — Sixteam.pro | Habla con Nuestro Equipo",
    description: "Escríbenos por WhatsApp o llena el formulario. Respondemos en menos de 2 horas. Bogotá, Colombia. Atendemos toda Latinoamérica.",
    canonical: "https://sixteam.pro/contacto",
    ogUrl: "https://sixteam.pro/contacto",
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004188522?text=Hola%2C%20estoy%20listo%20para%20empezar%20la%20transformaci%C3%B3n%20digital%20de%20mi%20negocio', '_blank');
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://web.sixteam.pro/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.body.removeChild(script); };
  }, []);

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-teal-300 font-medium text-sm tracking-wide">Hablemos</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              ¿Listo para empezar?
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Contáctanos
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conversemos sobre cómo podemos impulsar el crecimiento de tu empresa con CRM, automatizaciones e IA.
            </p>
            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Chatea con nosotros en WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Contacto + Formulario */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

            {/* Info lateral */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Información de Contacto</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[#0a2342] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
                    <p className="text-gray-600">+57 302 351 5392</p>
                    <p className="text-sm text-teal-600 font-medium">Respuesta inmediata</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[#0a2342] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">alpha@sixteam.pro</p>
                    <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-10 h-10 bg-[#0a2342] rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Ubicación</h3>
                    <p className="text-gray-600">Colombia</p>
                    <p className="text-sm text-gray-500">Atendemos toda Latinoamérica</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-[#0a2342] rounded-xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-teal-400" />
                  <h3 className="font-semibold">Horarios de Atención</h3>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span className="text-white font-medium">9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>WhatsApp</span>
                    <span className="text-teal-400 font-medium">24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario GHL */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <iframe
                  src="https://web.sixteam.pro/widget/form/n7ZRMcX0KMY9l7qAW05T"
                  style={{ width: '100%', height: '420px', border: 'none', borderRadius: '3px' }}
                  id="inline-n7ZRMcX0KMY9l7qAW05T"
                  data-layout='{"id":"INLINE"}'
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Form pagina web sixteam - Copy"
                  data-height="360"
                  data-layout-iframe-id="inline-n7ZRMcX0KMY9l7qAW05T"
                  data-form-id="n7ZRMcX0KMY9l7qAW05T"
                  title="Formulario de contacto Sixteam.pro"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12 text-center">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { q: '¿Cuánto tiempo toma un proyecto?', a: 'Depende del alcance. Nuestras implementaciones de CRM tardan entre 2 y 4 semanas. El chatbot IA entre 2 y 3 semanas.' },
                { q: '¿Ofrecen soporte post-implementación?', a: 'Sí, incluimos 30 días de soporte en cada implementación. También tenemos planes de soporte mensual desde $500.000 COP.' },
                { q: '¿Trabajan con empresas de todos los tamaños?', a: 'Sí, adaptamos nuestras soluciones para startups y PYMEs en crecimiento, principalmente en Colombia y Latinoamérica.' },
                { q: '¿Cómo garantizan los resultados?', a: 'Definimos métricas claras desde el inicio y monitoreamos el progreso continuamente. La primera consultoría es sin costo.' },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-3">{faq.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacto;
