import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, AlertTriangle, CheckCircle, TrendingDown, Eye, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const OportunidadesPerdidas = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573023515392?text=Hola%2C%20quiero%20detectar%20d%C3%B3nde%20estoy%20perdiendo%20oportunidades',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-red-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Link to="/" className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <img
                src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png"
                alt="Sixteam.pro"
                className="w-6 h-6"
              />
              <span className="text-white font-poppins font-semibold text-sm">Sixteam.pro</span>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 border border-amber-400/30 rounded-full">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-amber-300 font-medium text-sm">¿Estás perdiendo oportunidades?</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              No siempre faltan leads.{' '}
              <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
                A veces falta seguimiento.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Llegan prospectos, pero se pierden por desorden, seguimiento manual o porque
              nadie les da respuesta a tiempo. Eso tiene solución.
            </p>

            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Descúbrelo gratis por WhatsApp
            </Button>

            <p className="text-gray-500 text-sm">Diagnóstico gratuito · En pocos minutos</p>
          </div>
        </div>
      </section>

      {/* Síntomas */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            ¿Te pasa esto?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: TrendingDown,
                title: 'Leads que se enfrían',
                desc: 'Llegan prospectos pero nadie les hace seguimiento a tiempo. Se pierden y no sabes por qué.',
              },
              {
                icon: Eye,
                title: 'Cero visibilidad',
                desc: 'No sabes cuántas oportunidades tienes abiertas, ni en qué etapa está cada una.',
              },
              {
                icon: Search,
                title: 'Todo depende de la memoria',
                desc: 'El equipo usa WhatsApp, Excel y su cabeza para recordar quién necesita respuesta.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-amber-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que detecta */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Esto es lo que detectamos
            </h2>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {[
                'En qué parte del proceso se enfrían tus oportunidades',
                'Si el problema es de ventas, de servicio o de ambos',
                'Si te faltan herramientas o te falta orden',
                'Qué deberías corregir primero para dejar de perder negocio',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#0a2342] rounded-2xl p-6 sm:p-8 text-white space-y-4">
              <p className="text-gray-300 text-sm leading-relaxed">
                "No vendemos más herramientas. Te ayudamos a entender{' '}
                <strong className="text-white">qué ordenar primero</strong> para que
                lo que implementes funcione de verdad."
              </p>
              <p className="text-teal-400 font-semibold text-sm">— Equipo Sixteam</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-amber-500 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold">
            Deja de perder negocio sin darte cuenta
          </h2>
          <p className="text-lg text-amber-100 max-w-xl mx-auto">
            Un diagnóstico rápido por WhatsApp te muestra exactamente dónde está la fuga.
            Gratis y sin compromiso.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 bg-white text-amber-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hacer mi diagnóstico gratis
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OportunidadesPerdidas;
