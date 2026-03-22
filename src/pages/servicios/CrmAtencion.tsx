import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, Headphones, CheckCircle, ArrowLeft, Clock, DollarSign,
  BarChart3, Users, Zap, TrendingUp, Star, AlertCircle, ChevronDown,
  ChevronUp, Inbox, SlidersHorizontal, Bell, Globe, ThumbsUp, Timer
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro para el servicio de CRM de Atención al Cliente.
Página: /servicios/crm-atencion

SERVICIO: Implementación de CRM de Atención al Cliente con bandeja omnicanal, sistema de tickets, SLAs y automatizaciones de servicio.

PARA QUIÉN: Equipos de servicio al cliente que atienden por múltiples canales (WhatsApp, email, redes), tienen tiempos de respuesta altos o no tienen métricas de calidad de servicio.

QUÉ INCLUYE:
- Bandeja unificada omnicanal (WhatsApp, email, chat web, redes sociales)
- Sistema de tickets con prioridades, SLAs y alertas de vencimiento
- Respuestas automáticas e IA para preguntas frecuentes
- Encuestas CSAT automatizadas al cerrar cada ticket
- Dashboard de KPIs: tiempo de respuesta, resolución, CSAT por agente
- Capacitación del equipo de servicio

PRECIO: $1.500.000 COP implementación única.
TIEMPO: 3 semanas para estar operativo.

RESULTADOS TÍPICOS: -50% en tiempo de respuesta, +30 puntos CSAT, 0 tickets perdidos.`;

const EXAMPLE_QUESTIONS = [
  '¿Qué canales puedo centralizar?',
  '¿Cómo funcionan los SLAs?',
  '¿Puedo conectar WhatsApp?',
  '¿Cuánto cuesta?',
];

const CrmAtencion = () => {
  useSEO({
    title: "CRM de Atención al Cliente — Sixteam.pro | Tickets, SLA y Omnicanal",
    description: "Centraliza tickets, conversaciones y solicitudes en un solo lugar. Reduce tiempos de respuesta con automatizaciones de servicio al cliente. Implementación en 3 semanas.",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20CRM%20para%20Atenci%C3%B3n%20al%20Cliente',
      '_blank'
    );
  };

  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Conversaciones dispersas en múltiples canales',
      desc: 'Tu equipo salta entre WhatsApp, email, redes sociales y teléfono. Se pierden solicitudes, se duplican respuestas y los clientes quedan esperando.',
    },
    {
      icon: Timer,
      title: 'Tiempos de respuesta inaceptables',
      desc: 'Sin visibilidad centralizada, los tickets caen al vacío. Los clientes esperan horas (o días) y la satisfacción se desploma sin que nadie lo note a tiempo.',
    },
    {
      icon: BarChart3,
      title: 'Cero métricas de servicio confiables',
      desc: 'No sabes cuántos tickets abre cada agente, cuánto demora la resolución ni cuál es tu CSAT real. Tomar decisiones sin datos es gestionar a ciegas.',
    },
    {
      icon: Users,
      title: 'Agentes sobrecargados sin prioridades claras',
      desc: 'Todo parece urgente. Sin un sistema de prioridades, SLAs y escalaciones, el equipo trabaja estresado y los casos críticos no se atienden primero.',
    },
  ];

  const features = [
    {
      icon: Inbox,
      title: 'Bandeja unificada omnicanal',
      desc: 'Todas las conversaciones de WhatsApp, email, chat web y redes sociales en un solo panel. Sin cambiar entre aplicaciones, sin perder contexto.',
    },
    {
      icon: SlidersHorizontal,
      title: 'Sistema de tickets y SLAs',
      desc: 'Asignación automática de tickets por área o agente, prioridades configurables, reglas de escalación y alertas cuando un SLA está en riesgo.',
    },
    {
      icon: Zap,
      title: 'Respuestas automáticas e IA',
      desc: 'Templates de respuesta rápida, mensajes automáticos fuera de horario, respuestas a preguntas frecuentes y detección de intención del cliente.',
    },
    {
      icon: Globe,
      title: 'Integración multicanal completa',
      desc: 'WhatsApp Business API, correo electrónico, chat web y redes sociales integrados nativamente. Un solo número de agente para todos los canales.',
    },
    {
      icon: ThumbsUp,
      title: 'Encuestas CSAT automatizadas',
      desc: 'Envío automático de encuesta de satisfacción al cerrar cada ticket. Analiza tendencias, identifica agentes destacados y detecta áreas de mejora.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard de KPIs en tiempo real',
      desc: 'Tiempo de primera respuesta, tiempo de resolución, tasa de satisfacción (CSAT), tickets por agente y canales más activos — todo en vivo.',
    },
    {
      icon: Bell,
      title: 'Alertas y escalaciones automáticas',
      desc: 'Notificaciones automáticas cuando un ticket supera su SLA, cuando llega una queja crítica o cuando un cliente VIP escribe por cualquier canal.',
    },
    {
      icon: Star,
      title: 'Historial completo del cliente',
      desc: 'Cada agente ve el historial de compras, conversaciones previas y tickets anteriores del cliente antes de responder. Contexto total en segundos.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Diagnóstico de canales',
      desc: 'Mapeamos todos tus canales de atención actuales, volúmenes de tickets, tiempos de respuesta y flujos de escalación para diseñar la configuración ideal.',
    },
    {
      step: '02',
      title: 'Configuración y SLAs',
      desc: 'Construimos la bandeja unificada, definimos categorías de tickets, configuramos SLAs por tipo de solicitud y diseñamos las reglas de asignación automática.',
    },
    {
      step: '03',
      title: 'Integración y pruebas',
      desc: 'Conectamos WhatsApp Business API, email y chat web. Activamos las encuestas CSAT y hacemos pruebas end-to-end con casos reales de tu operación.',
    },
    {
      step: '04',
      title: 'Capacitación y entrega',
      desc: 'Entrenamos a todos los agentes y líderes de atención. Entregamos guía de operación documentada y acompañamos las primeras semanas en producción.',
    },
  ];

  const stats = [
    { num: '-50%', label: 'Reducción en tiempo promedio de primera respuesta', color: 'text-[#00bfa5]' },
    { num: '+45%', label: 'Mejora en satisfacción del cliente (CSAT)', color: 'text-[#1d70a2]' },
    { num: '100%', label: 'Trazabilidad de cada conversación y ticket abierto', color: 'text-[#00bfa5]' },
    { num: '-35%', label: 'Reducción en costo operativo del equipo de soporte', color: 'text-[#1d70a2]' },
  ];

  const deliverables = [
    'Bandeja unificada omnicanal configurada (WhatsApp, email, chat web)',
    'Sistema de tickets con SLAs, prioridades y escalaciones',
    'Plantillas de respuesta rápida y mensajes automáticos',
    'Encuestas CSAT automatizadas post-ticket',
    'Dashboard de KPIs de servicio en tiempo real',
    'Alertas automáticas por SLA vencido o cliente VIP',
    'Historial unificado de cliente con contexto completo',
    'Capacitación completa al equipo de atención',
    'Guía de operación documentada',
    'Soporte post-implementación durante 30 días',
  ];

  const faqs = [
    {
      q: '¿Qué canales puedo integrar en la bandeja unificada?',
      a: 'Integramos WhatsApp Business API, correo electrónico (cualquier proveedor), chat web, Facebook Messenger e Instagram DM. Todo en un solo panel, con historial unificado por cliente.',
    },
    {
      q: '¿Cómo funciona el sistema de SLAs?',
      a: 'Configuras los tiempos de respuesta y resolución esperados según el tipo de solicitud y la prioridad (urgente, alta, media, baja). El sistema alerta automáticamente al agente y al supervisor cuando un ticket está en riesgo de vencer el SLA.',
    },
    {
      q: '¿Puedo medir la satisfacción de mis clientes automáticamente?',
      a: 'Sí. Configuramos el envío automático de una encuesta CSAT al cliente al cerrar cada ticket. Los resultados se consolidan en el dashboard con tendencias por agente, canal y tipo de solicitud.',
    },
    {
      q: '¿Cuánto tiempo toma la implementación?',
      a: 'La implementación completa toma 3 semanas: 1 semana de diagnóstico y diseño, 1 semana de configuración e integración, y 1 semana de pruebas y capacitación. El equipo puede empezar a operar desde la semana 3.',
    },
    {
      q: '¿Necesito cambiar mi número de WhatsApp actual?',
      a: 'No necesariamente. Migramos tu número actual a WhatsApp Business API si ya tiene historial y reputación. Si prefieres un número nuevo, también lo gestionamos. El proceso es guiado y sin interrupciones del servicio.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
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
                <Headphones className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] font-poppins font-medium text-sm">CRM · Atención al Cliente</span>
              </div>
              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
                CRM para
                <br />
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  Atención al Cliente
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                Centraliza todos los tickets, conversaciones y solicitudes en un solo lugar. Reduce tiempos de respuesta hasta un 50%, mejora el CSAT y automatiza los flujos de atención omnicanal.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <DollarSign className="w-5 h-5 text-[#00bfa5]" />
                  <span className="text-white font-semibold">$1.500.000 COP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-[#1d70a2]" />
                  <span className="text-white font-semibold">3 semanas de implementación</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#00bfa5] hover:bg-[#00a08a] text-white rounded-lg font-poppins font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Solicitar Cotización
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('que-incluye')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border-white/30 bg-transparent text-white hover:bg-white/10 rounded-lg font-poppins font-semibold text-lg"
                >
                  Ver qué incluye
                </Button>
              </div>
            </div>
            <div className="w-full">
              <ChatWidget
                pageContext={PAGE_CONTEXT}
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre el CRM de atención al cliente?"
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
                ¿Te identificas con alguno de estos problemas?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Son los más comunes en equipos de servicio al cliente sin un CRM especializado. Y todos tienen solución.
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
                Sixteam implementa tu CRM de atención para que{' '}
                <span className="text-[#1d70a2] font-bold">ningún cliente quede sin respuesta</span> y cada interacción quede documentada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="que-incluye" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Lo que incluye</p>
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900">
                ¿Qué incluye la implementación?
              </h2>
              <p className="text-xl text-gray-600">
                Todo lo que necesitas para que tu equipo de atención opere al máximo nivel desde el primer día.
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
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-gray-900">Cómo funciona la implementación</h2>
              <p className="text-lg text-gray-600">3 semanas estructuradas, sin sorpresas y con tu equipo operando desde el día 1</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#00bfa5]/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#0a2342] to-[#1d70a2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[#1d70a2]/5 to-transparent" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4">Resultados</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">Resultados que puedes esperar</h2>
            <p className="text-xl text-gray-300 mb-12">Basados en implementaciones reales en empresas de servicio en Colombia</p>
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
              <div className="text-5xl font-poppins font-black text-white mb-1">$1.500.000</div>
              <p className="text-gray-300 text-sm mb-1">COP · Pago único por implementación completa</p>
              <p className="text-gray-400 text-xs mb-6">Incluye configuración, integraciones, capacitación y 30 días de soporte</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Sin costos ocultos',
                  'Entregable en 3 semanas',
                  '30 días de soporte incluido',
                  'Capacitación sin límite de agentes',
                  'WhatsApp Business API incluida',
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
                Hablar con un asesor
              </Button>
              <p className="text-center text-gray-400 text-xs mt-4">Primera consultoría sin costo · Sin compromiso</p>
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
                    "Pasamos de responder en horas a responder en minutos. La bandeja unificada cambió completamente cómo trabajamos: ahora vemos todo en un lugar, los SLAs nos alertan antes de que un cliente se moleste y el CSAT subió un 40% en el primer trimestre."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-gray-900">Carlos Jiménez</p>
                    <p className="text-sm text-gray-500">Gerente de Servicio al Cliente · TechInnovate Solutions, Bogotá</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
                {[
                  { value: '-50%', label: 'Tiempo de primera respuesta' },
                  { value: '+40%', label: 'Satisfacción del cliente (CSAT)' },
                  { value: '100%', label: 'Trazabilidad de tickets' },
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
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#1d70a2]/40 transition-colors"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-poppins font-semibold text-gray-900 text-base pr-4">{faq.q}</span>
                    {openFaq === i ? (
                      <ChevronUp className="w-5 h-5 text-[#1d70a2] flex-shrink-0" />
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
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-poppins font-black text-3xl sm:text-4xl md:text-5xl">
            ¿Listo para transformar tu atención al cliente?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            La primera consultoría es sin costo. Te damos un diagnóstico honesto de lo que necesitas y cómo lograrlo en 3 semanas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsAppClick}
              className="px-10 py-4 bg-white text-[#1d70a2] hover:bg-gray-100 rounded-xl font-poppins font-bold text-lg transition-all hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Hablar por WhatsApp
            </Button>
          </div>
          <p className="text-blue-100 text-sm">Sin compromiso · Respuesta en menos de 2 horas</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrmAtencion;
