import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle, ShieldCheck, Target, BarChart3, Zap, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

const AntesDeInvertir = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573023515392?text=Hola%2C%20quiero%20hacer%20el%20diagn%C3%B3stico%20antes%20de%20invertir%20en%20herramientas',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl"></div>

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

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/15 border border-blue-400/30 rounded-full">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm">No implementes a ciegas</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Antes de gastar en CRM, IA o automatización,{' '}
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                entiende qué está fallando
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Un diagnóstico rápido por WhatsApp para que sepas si tu prioridad está en
              ventas, servicio, seguimiento o en ordenar lo que ya tienes.
            </p>

            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Descubre qué mejorar primero
            </Button>

            <p className="text-gray-500 text-sm">Gratis · Por WhatsApp · En pocos minutos</p>
          </div>
        </div>
      </section>

      {/* Problema / Solución */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Esto pasa seguido</h2>
              <p className="text-gray-600 leading-relaxed">
                Muchas empresas saben que algo no funciona bien, pero no saben exactamente qué.
                Terminan comprando herramientas que nadie usa, o cambiando de plataforma
                cada pocos meses sin ver resultados.
              </p>
              <ul className="space-y-3">
                {[
                  'Pagas un CRM pero el equipo lo llena a medias',
                  'Automatizas tareas sin saber cuál era el proceso correcto',
                  'Inviertes en IA sin tener claro dónde aplicarla',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                    <span className="text-red-400 font-bold mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d52] rounded-2xl p-8 text-white space-y-5">
              <h2 className="text-2xl font-bold">La solución es simple</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                Antes de invertir, haces un diagnóstico rápido para entender:
              </p>
              <ul className="space-y-3">
                {[
                  'Dónde está el cuello de botella real',
                  'Qué deberías resolver primero',
                  'Si necesitas tecnología, o primero ordenar procesos',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            ¿Qué áreas revisamos?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Target, name: 'Ventas' },
              { icon: Headphones, name: 'Servicio' },
              { icon: Zap, name: 'Automatización' },
              { icon: BarChart3, name: 'CRM y datos' },
            ].map((area, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-5 text-center hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#0a2342] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <area.icon className="w-5 h-5 text-blue-400" />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{area.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-4xl font-bold">
            No implementes a ciegas
          </h2>
          <p className="text-lg text-blue-100 max-w-xl mx-auto">
            Primero entiende qué está frenando tu negocio. Empieza gratis por WhatsApp.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hacer mi diagnóstico
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AntesDeInvertir;
