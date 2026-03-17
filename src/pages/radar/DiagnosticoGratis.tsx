import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, CheckCircle, Sparkles, Search, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DiagnosticoGratis = () => {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573023515392?text=Hola%2C%20quiero%20hacer%20mi%20diagn%C3%B3stico%20gratuito%20por%20WhatsApp',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>

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

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/15 border border-teal-400/30 rounded-full">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 font-medium text-sm">Gratis · Rápido · Por WhatsApp</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
              ¿Quieres mejorar tu empresa, pero{' '}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                no sabes por dónde empezar?
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Haz un diagnóstico gratis por WhatsApp. En pocos minutos sabrás dónde
              está el problema principal y qué deberías resolver primero.
            </p>

            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Hacer mi diagnóstico gratis
            </Button>

            <p className="text-gray-500 text-sm">
              Para dueños y gerentes de empresas de servicios
            </p>
          </div>
        </div>
      </section>

      {/* 3 beneficios */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Search,
                title: 'Encuentra el problema real',
                desc: 'Detectamos si tu cuello de botella está en ventas, servicio, seguimiento o procesos.',
              },
              {
                icon: Zap,
                title: 'Prioriza antes de gastar',
                desc: 'Sabrás qué conviene mejorar primero, antes de invertir en herramientas o tecnología.',
              },
              {
                icon: ArrowRight,
                title: 'Un siguiente paso claro',
                desc: 'Te damos una recomendación concreta y aterrizada para tu empresa.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-14 h-14 bg-[#0a2342] rounded-xl flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-14 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            Así de simple
          </h2>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-6 max-w-4xl mx-auto">
            {[
              { num: '1', text: 'Nos escribes por WhatsApp' },
              { num: '2', text: 'Respondes unas pocas preguntas' },
              { num: '3', text: 'Recibes tu resultado y siguiente paso' },
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 md:flex-col md:text-center flex-1">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.num}</span>
                </div>
                <p className="text-gray-800 font-medium text-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist + CTA final */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Lo que te llevas
            </h2>
            <ul className="space-y-3 text-left max-w-md mx-auto">
              {[
                'Tu principal cuello de botella identificado',
                'Qué área deberías mejorar primero',
                'Si necesitas CRM, automatización o simplemente ordenar procesos',
                'Un siguiente paso concreto para tu caso',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={handleWhatsAppClick}
              className="px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Empezar mi diagnóstico gratis
            </Button>

            <p className="text-gray-400 text-xs">
              Rápido, práctico y pensado para empresas de servicios.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiagnosticoGratis;
