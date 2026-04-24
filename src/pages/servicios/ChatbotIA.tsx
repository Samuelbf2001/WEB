import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, Bot, CheckCircle, ArrowLeft, Clock, DollarSign,
  Brain, Zap, Users, TrendingUp, Calendar, Shield, AlertCircle,
  ChevronDown, ChevronUp, Smartphone, RefreshCcw, Star, BarChart3
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro para el servicio de Chatbot IA para WhatsApp Business.
Página: /servicios/chatbot-ia

SERVICIO: Despliegue de agente de inteligencia artificial en WhatsApp Business que atiende 24/7, califica leads, agenda citas y registra todo en el CRM.

PARA QUIÉN: Negocios que pierden leads fuera de horario, equipos que gastan horas respondiendo las mismas preguntas, o que quieren filtrar prospectos antes de que intervenga un humano.

QUÉ HACE EL AGENTE IA:
- Responde en lenguaje natural en menos de 5 segundos, 24/7
- Califica leads con preguntas estratégicas (presupuesto, urgencia, interés)
- Agenda citas directamente en WhatsApp (Google Calendar / Calendly)
- Registra automáticamente cada conversación en el CRM
- Transfiere a agente humano cuando el cliente lo pide o la situación lo requiere
- Responde preguntas frecuentes sobre productos, precios, disponibilidad

PRECIO: $800.000 COP implementación + $150.000 COP/mes operación.
TIEMPO: 2 semanas para estar en vivo.

RESULTADOS TÍPICOS: 0 leads perdidos fuera de horario, -70% tiempo del equipo en respuestas repetitivas, leads calificados antes de llegar al asesor.`;

const EXAMPLE_QUESTIONS = [
  '¿El bot entiende lenguaje colombiano?',
  '¿Puede agendar citas solo?',
  '¿Cuándo transfiere a un humano?',
  '¿Cuánto cuesta?',
];

const ChatbotIA = () => {
  useSEO({
    title: "Chatbot IA para WhatsApp — Sixteam.pro | Atención Automática 24/7",
    description: "Desplegamos tu agente IA en WhatsApp Business: responde en menos de 5 segundos, califica leads y agenda citas sin intervención humana. Desde $800,000 COP.",
    canonical: "https://sixteam.pro/servicios/chatbot-ia",
    ogUrl: "https://sixteam.pro/servicios/chatbot-ia",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20Chatbot%20IA%20para%20WhatsApp',
      '_blank'
    );
  };

  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Pierdes leads porque no respondes fuera de horario',
      desc: 'Un prospecto escribe a las 9 PM con interés de compra. Nadie responde. Al día siguiente ya olvidó por qué escribió — o ya compró en la competencia.',
    },
    {
      icon: Users,
      title: 'Tu equipo gasta horas respondiendo las mismas preguntas',
      desc: 'Precios, horarios, disponibilidad, cómo funciona el servicio. El 70% de los mensajes son preguntas repetidas que un agente de IA puede resolver en segundos.',
    },
    {
      icon: Smartphone,
      title: 'Los leads no llegan calificados al equipo de ventas',
      desc: 'Tu equipo comercial habla con cualquiera que escriba, sin saber si tiene presupuesto, urgencia o interés real. Un chatbot puede filtrar antes de que intervenga un humano.',
    },
    {
      icon: RefreshCcw,
      title: 'No tienes registro de lo que piden tus prospectos',
      desc: 'Las conversaciones de WhatsApp quedan en el celular del vendedor, sin datos, sin historial y sin forma de hacer seguimiento automático al lead.',
    },
  ];

  const features = [
    {
      icon: Brain,
      title: 'Conversación natural con IA',
      desc: 'El agente entiende lenguaje natural colombiano, contexto de la conversación y responde de forma coherente y personalizada — no con respuestas de árbol de decisión.',
    },
    {
      icon: Zap,
      title: 'Disponibilidad 24/7 sin costo adicional',
      desc: 'Atiende consultas, resuelve dudas frecuentes y da información sobre tus productos o servicios a cualquier hora, sin pagar horas extra ni contrataciones nuevas.',
    },
    {
      icon: Users,
      title: 'Calificación automática de leads',
      desc: 'Hace preguntas estratégicas para identificar el presupuesto, la urgencia y el interés real del prospecto. Solo los leads calificados llegan al equipo de ventas.',
    },
    {
      icon: Calendar,
      title: 'Agendamiento de citas en WhatsApp',
      desc: 'El prospecto agenda su cita directamente en la conversación de WhatsApp. Sincronizamos con Google Calendar o Calendly. Sin ir a otro sistema, sin fricción.',
    },
    {
      icon: TrendingUp,
      title: 'Registro automático en el CRM',
      desc: 'Cada conversación crea automáticamente el contacto en el CRM con su historial completo: preguntas, intereses, estado de calificación y próximos pasos.',
    },
    {
      icon: Shield,
      title: 'Transferencia inteligente a agente humano',
      desc: 'Cuando el usuario lo pide o el agente detecta una situación compleja, transfiere la conversación al equipo humano sin perder el hilo de la conversación.',
    },
    {
      icon: Star,
      title: 'Entrenado con tu base de conocimiento',
      desc: 'El agente se entrena con tu catálogo, FAQs, políticas, procesos y casos reales. Responde como si fuera un experto en tu negocio, no como un bot genérico.',
    },
    {
      icon: BarChart3,
      title: 'Panel de supervisión y métricas',
      desc: 'Dashboard con volumen de conversaciones, tasa de resolución automática, leads calificados generados y temas más consultados — para optimizar continuamente.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Levantamiento de conocimiento',
      desc: 'Recopilamos tu base de conocimiento: productos, precios, FAQs, políticas, flujos de venta y casos de uso reales para entrenar el agente con tu negocio.',
    },
    {
      step: '02',
      title: 'Construcción y entrenamiento',
      desc: 'Desarrollamos el agente IA con flujos de calificación, respuestas personalizadas, conexión al CRM y lógica de escalación. Configuramos el agendamiento si aplica.',
    },
    {
      step: '03',
      title: 'Pruebas y ajustes',
      desc: 'Sesiones de prueba con escenarios reales y casos límite. Ajustamos respuestas, tono de voz, flujos y criterios de escalación hasta que funcione como esperamos.',
    },
    {
      step: '04',
      title: 'Lanzamiento y monitoreo',
      desc: 'Activamos el agente en tu número de WhatsApp Business. Monitoreamos las primeras conversaciones reales y hacemos ajustes en tiempo real durante el lanzamiento.',
    },
  ];

  const stats = [
    { num: '24/7', label: 'Disponibilidad sin costo de nómina adicional', color: 'text-[#00bfa5]' },
    { num: '+80%', label: 'De consultas resueltas sin intervención humana', color: 'text-[#1d70a2]' },
    { num: '-70%', label: 'Reducción en carga de atención manual del equipo', color: 'text-[#00bfa5]' },
    { num: '< 5s', label: 'Tiempo promedio de primera respuesta al prospecto', color: 'text-[#1d70a2]' },
  ];

  const deliverables = [
    'Agente IA conversacional personalizado con tu marca y tono',
    'Entrenamiento con tu base de conocimiento, FAQs y productos',
    'Flujo de calificación de leads configurado a tu proceso',
    'Agendamiento de citas integrado a tu calendario (si aplica)',
    'Integración con tu CRM para registro automático de contactos',
    'Escalación a agente humano con contexto preservado',
    'Panel de supervisión y métricas de conversaciones',
    'Soporte y operación mensual disponible desde $150.000/mes',
  ];

  const faqs = [
    {
      q: '¿El chatbot entiende el español colombiano con modismos y jerga?',
      a: 'Sí. El agente se entrena con tu base de conocimiento y se ajusta al tono y vocabulario de tu marca y mercado objetivo. Probamos específicamente con frases y modismos colombianos para asegurarnos que las respuestas sean naturales y no parezcan traducidas.',
    },
    {
      q: '¿Puedo mantener mi número de WhatsApp actual?',
      a: 'En la mayoría de los casos sí. Conectamos tu número actual a WhatsApp Business API. Si tu número ya tiene historial de conversaciones y contactos guardados, hacemos la migración preservando la reputación del número. Si prefieres un número nuevo, también lo gestionamos.',
    },
    {
      q: '¿Qué pasa cuando el chatbot no sabe responder algo?',
      a: 'Configuramos un umbral de confianza: cuando el agente no tiene suficiente certeza en su respuesta, transfiere automáticamente al equipo humano con todo el contexto de la conversación. Nunca deja al usuario en silencio sin alternativa.',
    },
    {
      q: '¿Cuánto tiempo toma tener el chatbot funcionando?',
      a: 'La implementación completa toma 2 semanas: 3 días de levantamiento y construcción, 4 días de entrenamiento y configuración, y 3 días de pruebas y ajustes. El agente puede estar activo en tu WhatsApp Business desde el día 14.',
    },
    {
      q: '¿El plan mensual es obligatorio después de la implementación?',
      a: 'No es obligatorio, pero sí muy recomendado. El plan mensual desde $150.000 COP incluye monitoreo de conversaciones, actualizaciones de la base de conocimiento, ajustes de flujos y soporte técnico. Sin este plan, el agente puede seguir funcionando pero sin actualizaciones ni mejoras continuas.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#071a33] to-[#0a2342]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#00bfa5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1d70a2]/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            to="/servicios"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver a Servicios
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full">
                <Bot className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] font-poppins font-medium text-sm">IA · WhatsApp Business · Automatización</span>
              </div>
              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
                Chatbot IA para
                <br />
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  WhatsApp Business
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                Desplegamos tu agente de inteligencia artificial en WhatsApp Business: atiende 24/7, califica leads automáticamente, agenda citas y registra todo en el CRM — sin intervención humana.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <DollarSign className="w-5 h-5 text-[#00bfa5]" />
                  <span className="text-white font-semibold">$800.000 COP implementación</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <DollarSign className="w-5 h-5 text-[#1d70a2]" />
                  <span className="text-white font-semibold">+ $150.000/mes operación</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-[#00bfa5]" />
                  <span className="text-white font-semibold">2 semanas para estar en vivo</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#00bfa5] hover:bg-[#00a08a] text-white rounded-lg font-poppins font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Solicitar Demo en Vivo
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('que-hace')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-white/30 bg-transparent text-white hover:bg-white/10 rounded-lg font-poppins font-semibold text-lg"
                >
                  Ver qué hace el agente
                </Button>
              </div>
            </div>
            <div className="w-full">
              <ChatWidget
                pageContext={PAGE_CONTEXT}
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre el Chatbot IA para WhatsApp o quieres ver cómo funciona?"
                exampleQuestions={EXAMPLE_QUESTIONS}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">El problema</p>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900">
                Cada mensaje sin respuesta es un cliente perdido
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Estos son los problemas más comunes de los negocios que dependen de atención humana en WhatsApp.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {painPoints.map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-red-100 rounded-xl p-6 flex items-start gap-4 hover:border-red-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-700 text-lg font-medium">
                Un agente IA en WhatsApp resuelve todo esto{' '}
                <span className="text-[#00bfa5] font-bold">desde el día en que se activa</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="que-hace" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Capacidades del agente</p>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900">
                ¿Qué hace tu agente IA?
              </h2>
              <p className="text-xl text-gray-600">
                Un empleado digital que nunca descansa, nunca olvida y siempre responde en menos de 5 segundos.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#00bfa5]/10 border border-[#00bfa5]/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#00bfa5]" />
                  </div>
                  <h3 className="font-poppins font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 space-y-3">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">El proceso</p>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900">De cero a agente activo en 2 semanas</h2>
              <p className="text-lg text-gray-600">Implementación ágil, sin fricciones y con tu negocio operando desde el día del lanzamiento</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#00bfa5]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a2342] to-[#00bfa5] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white font-poppins font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-poppins font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative py-16 sm:py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#071a33] to-[#0a2342]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4">Resultados</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">Resultados que puedes esperar</h2>
            <p className="text-xl text-gray-300 mb-12">Basados en implementaciones reales con empresas en Colombia y Latam</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#00bfa5]/30 transition-all duration-300">
                  <div className={`text-4xl sm:text-5xl font-poppins font-black ${stat.color} mb-3`}>{stat.num}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables + Pricing */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4">Entregables</p>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900 mb-6">
                Todo lo que recibes con la implementación
              </h2>
              <ul className="space-y-4">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-2xl p-8 text-white sticky top-8">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">Inversión</p>
              <div className="text-5xl font-poppins font-black text-white mb-1">$800.000</div>
              <p className="text-gray-300 text-sm mb-1">COP · Implementación única del agente IA</p>
              <div className="mt-4 mb-1">
                <span className="text-2xl font-poppins font-bold text-[#00bfa5]">+ $150.000/mes</span>
              </div>
              <p className="text-gray-400 text-xs mb-6">Operación, actualizaciones y soporte mensual</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Sin costos ocultos',
                  'En producción en 2 semanas',
                  'Entrenamiento personalizado incluido',
                  'Escalable a más canales',
                  'Demo en vivo antes de contratar',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00bfa5] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#00bfa5] hover:bg-[#00a08a] text-white py-3 rounded-xl font-poppins font-bold text-base transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Ver demo en vivo
              </Button>
              <p className="text-center text-gray-400 text-xs mt-4">Demo sin compromiso · Respuesta en 2 horas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-[#00bfa5]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                    "El chatbot IA atiende el 80% de las consultas sin que mi equipo intervenga. Ahora respondemos en segundos a cualquier hora — incluso a las 2 AM — y los leads llegan calificados al CRM listos para que ventas los contacte. El ROI fue inmediato."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-gray-900">Andrés Morales</p>
                    <p className="text-sm text-gray-500">CEO · Empresa de servicios financieros, Bogotá</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
                {[
                  { value: '24/7', label: 'Atención sin interrupciones' },
                  { value: '-70%', label: 'Carga manual del equipo' },
                  { value: '+80%', label: 'Consultas auto-resueltas' },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-poppins font-bold text-[#0a2342]">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Preguntas frecuentes</p>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900">Todo lo que necesitas saber</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#00bfa5]/40 transition-colors"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-poppins font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-[#00bfa5] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 bg-gray-50">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#0a2342] to-[#1d70a2] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d70a2]/20 to-[#00bfa5]/20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl">
            ¿Listo para que tu WhatsApp trabaje mientras duermes?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Te hacemos una demo en vivo con tu propio negocio. Sin compromiso, sin costo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              className="px-10 py-4 bg-[#00bfa5] hover:bg-[#00a08a] text-white rounded-xl font-poppins font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Ver demo ahora
            </Button>
          </div>
          <p className="text-blue-200 text-sm">Demo en vivo · Sin compromiso · Respuesta en 2 horas</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ChatbotIA;
