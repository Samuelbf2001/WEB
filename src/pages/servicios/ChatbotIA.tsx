import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Bot, CheckCircle, ArrowLeft, Clock, DollarSign, Brain, Zap, Users, TrendingUp, Calendar, Shield } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const ChatbotIA = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Chatbot%20IA%20para%20WhatsApp', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/servicios" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Volver a Servicios
          </Link>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full">
              <Bot className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-medium text-sm">IA · WhatsApp</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Chatbot IA para
              <br />
              <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                WhatsApp Business
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Desplegamos tu agente de inteligencia artificial en WhatsApp Business: responde 24/7, califica leads, agenda citas y actualiza el CRM automáticamente, sin intervención humana.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <DollarSign className="w-5 h-5 text-teal-400" />
                <span className="text-white font-semibold">$1.000.000 COP implementación</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span className="text-white font-semibold">2–3 semanas</span>
              </div>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Solicitar Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">¿Qué hace tu agente IA?</h2>
              <p className="text-xl text-gray-600">Un empleado digital que nunca descansa, nunca olvida y siempre responde a tiempo.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Brain, title: 'Conversación natural', desc: 'El agente entiende lenguaje natural, contexto de la conversación y responde de manera coherente y personalizada.' },
                { icon: Zap, title: 'Respuestas 24/7', desc: 'Atiende consultas, resuelve dudas frecuentes y da información de tu empresa a cualquier hora, sin intervención humana.' },
                { icon: Users, title: 'Calificación de leads', desc: 'Hace preguntas estratégicas para calificar prospectos y asignarles un puntaje antes de pasarlos al equipo de ventas.' },
                { icon: Calendar, title: 'Agendamiento de citas', desc: 'Integra tu calendario y permite que los prospectos agenden citas directamente en WhatsApp sin salir de la conversación.' },
                { icon: TrendingUp, title: 'Actualización del CRM', desc: 'Cada interacción se registra automáticamente en el CRM: datos de contacto, historial de conversación y estado del lead.' },
                { icon: Shield, title: 'Escalación a humano', desc: 'Cuando el usuario lo requiere o el agente detecta complejidad, transfiere la conversación al equipo humano sin perder el contexto.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-green-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Cómo funciona el proceso</h2>
        <p className="text-lg text-gray-600">2 a 3 semanas para tener tu agente IA funcionando en WhatsApp</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { step: '01', title: 'Levantamiento', desc: 'Recopilamos tu base de conocimiento: FAQs, productos, procesos y preguntas frecuentes de tus clientes.' },
          { step: '02', title: 'Entrenamiento', desc: 'Construimos y entrenamos el agente IA con tu información. Configuramos flujos de calificación y agendamiento.' },
          { step: '03', title: 'Pruebas', desc: 'Sesiones de prueba con casos reales. Ajustamos respuestas, tonos y flujos de escalación.' },
          { step: '04', title: 'Lanzamiento', desc: 'Activamos el agente en tu número de WhatsApp Business y monitoreamos las primeras conversaciones.' },
        ].map((item, i) => (
          <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200">
            <div className="w-14 h-14 bg-[#0a2342] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">{item.step}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Deliverables + Pricing */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Entregables incluidos</h2>
              <ul className="space-y-4">
                {[
                  'Agente IA conversacional personalizado con tu marca',
                  'Entrenamiento con tu base de conocimiento y FAQs',
                  'Calificación automática de leads configurada',
                  'Agendamiento de citas integrado a tu calendario',
                  'Escalación a humano cuando se requiera',
                  'Integración con tu CRM para registro de leads',
                  'Panel de supervisión de conversaciones',
                  'Soporte mensual disponible desde $300.000 COP/mes',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a2342] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Inversión</h3>
              <div className="text-4xl font-bold text-green-400 mb-1">$1.000.000 COP</div>
              <p className="text-gray-400 text-sm mb-2">Implementación única</p>
              <div className="text-2xl font-bold text-teal-400 mb-1">+ $300.000 COP/mes</div>
              <p className="text-gray-400 text-sm mb-6">Soporte y operación mensual</p>
              <ul className="space-y-3 mb-8">
                {['Sin costos ocultos', 'Entregable en 2–3 semanas', 'Entrenamiento personalizado incluido', 'Escalable a más canales'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ver demo en vivo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
              "El chatbot IA atiende el 80% de las consultas sin que mi equipo intervenga. Ahora respondemos en segundos a cualquier hora y los leads llegan calificados directo al CRM."
            </p>
            <div>
              <p className="font-bold text-gray-900">Andrés Morales</p>
              <p className="text-sm text-gray-500">CEO · empresa de servicios financieros, Bogotá</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '24/7', label: 'Atención sin interrupciones' },
            { value: '-70%', label: 'Carga de atención manual' },
            { value: '+80%', label: 'Consultas resueltas automáticamente' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-[#0a2342]">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Stats */}
      <section className="relative py-16 sm:py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Resultados que puedes esperar</h2>
            <p className="text-xl text-gray-300 mb-12">Basados en implementaciones realizadas en empresas similares a la tuya</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: '24/7', label: 'Atención sin interrupciones ni costos adicionales', color: 'text-green-400' },
                { num: '-70%', label: 'Reducción en carga de atención manual por el equipo', color: 'text-teal-400' },
                { num: '+80%', label: 'De consultas resueltas sin intervención humana', color: 'text-green-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-8">
                  <div className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.num}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">¿Listo para automatizar tu atención en WhatsApp?</h2>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">Te hacemos una demo en vivo con tu propio número de WhatsApp. Sin compromiso.</p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 bg-white text-green-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Ver demo ahora
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotIA;
