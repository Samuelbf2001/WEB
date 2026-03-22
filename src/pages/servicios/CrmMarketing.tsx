import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, Megaphone, CheckCircle, ArrowLeft, Clock, DollarSign,
  BarChart3, Users, Zap, TrendingUp, Target, Mail, AlertCircle,
  ChevronDown, ChevronUp, Filter, LineChart, Workflow, MousePointerClick
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro para el servicio de CRM de Marketing.
Página: /servicios/crm-marketing

SERVICIO: Implementación de CRM de Marketing con campañas multicanal, lead scoring, nurturing automatizado y atribución de ingresos.

PARA QUIÉN: Equipos de marketing que lanzan campañas sin saber qué genera ventas, pasan leads sin calificar al equipo comercial, o no tienen visibilidad del ROI real.

QUÉ INCLUYE:
- Segmentación inteligente de audiencias por comportamiento
- Flujos de nurturing automatizados (email + WhatsApp)
- Campañas multicanal desde el CRM (email, WhatsApp, SMS)
- Landing pages y formularios integrados con UTMs
- Lead scoring y calificación automática
- Atribución multicanal de ingresos (qué canal genera ventas)
- Dashboard de ROI de campañas en tiempo real

PRECIO: $1.800.000 COP implementación única.
TIEMPO: 4 semanas para estar operativo.

RESULTADOS TÍPICOS: leads más calificados al equipo de ventas, ROI visible por canal, -60% tiempo en tareas manuales de nurturing.`;

const EXAMPLE_QUESTIONS = [
  '¿Puedo automatizar mis campañas de email?',
  '¿Cómo funciona el lead scoring?',
  '¿Se integra con Meta Ads?',
  '¿Cuánto cuesta?',
];

const CrmMarketing = () => {
  useSEO({
    title: "CRM de Marketing — Sixteam.pro | Campañas, Lead Scoring y Nurturing",
    description: "Gestiona campañas multicanal, segmentación con IA y lead scoring. Automatiza el nurturing y mide el ROI de cada acción de marketing. Implementación en 4 semanas.",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20CRM%20para%20Marketing',
      '_blank'
    );
  };

  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Lanzas campañas sin saber cuáles generan ventas',
      desc: 'Inviertes en pauta, email y contenido, pero no puedes rastrear cuál canal trajo cada cliente. Sin atribución real, el presupuesto se malgasta.',
    },
    {
      icon: Filter,
      title: 'Los leads llegan fríos y sin contexto al equipo de ventas',
      desc: 'Marketing pasa listas de contactos a ventas, pero sin historial de interacción ni calificación. El equipo comercial pierde tiempo con prospectos no listos para comprar.',
    },
    {
      icon: Workflow,
      title: 'El nurturing es manual y se cae por falta de tiempo',
      desc: 'Enviar seguimientos personalizados a cientos de leads requiere tiempo que nadie tiene. El resultado: leads que se enfrían y se pierden sin razón.',
    },
    {
      icon: LineChart,
      title: 'No tienes visibilidad del ROI de tus campañas',
      desc: 'Tu dashboard de redes muestra impresiones y clics, pero no ingresos generados. Justificar la inversión en marketing se vuelve imposible sin números reales.',
    },
  ];

  const features = [
    {
      icon: Filter,
      title: 'Segmentación inteligente de audiencias',
      desc: 'Segmenta contactos por comportamiento, historial de compra, interacciones con emails y etapa del funnel. Mensajes precisos para cada audiencia.',
    },
    {
      icon: Workflow,
      title: 'Flujos de nurturing automatizados',
      desc: 'Secuencias de email y WhatsApp que se activan automáticamente según el comportamiento del lead: apertura, clic, visita al sitio o llenado de formulario.',
    },
    {
      icon: Mail,
      title: 'Campañas multicanal integradas',
      desc: 'Lanza campañas de email, WhatsApp y SMS desde el CRM. Mide apertura, clics, conversiones y optimiza en tiempo real desde un solo lugar.',
    },
    {
      icon: MousePointerClick,
      title: 'Landing pages y formularios integrados',
      desc: 'Formularios de captura y landing pages conectados directamente al CRM. Cada lead entra al sistema con fuente, campaña y UTM documentados automáticamente.',
    },
    {
      icon: Target,
      title: 'Lead scoring y calificación automática',
      desc: 'Asigna puntos a los leads según sus acciones: visitas, descargas, aperturas, demos solicitadas. Solo los leads más calificados llegan al equipo de ventas.',
    },
    {
      icon: TrendingUp,
      title: 'Atribución multicanal de ingresos',
      desc: 'Rastrea cada cliente desde el primer clic hasta el cierre. UTMs, fuentes de tráfico y canales de conversión conectados al CRM para saber exactamente qué canales generan dinero.',
    },
    {
      icon: BarChart3,
      title: 'Dashboard de ROI por campaña',
      desc: 'Inversión vs. ingresos generados, costo por lead, costo por cliente adquirido y tasa de conversión por canal — todo en un dashboard ejecutivo en tiempo real.',
    },
    {
      icon: Users,
      title: 'Alineación marketing-ventas',
      desc: 'Ventas ve el historial de interacciones de cada lead antes de llamar. Marketing ve cuántos de sus leads se cerraron. Un solo embudo compartido.',
    },
  ];

  const steps = [
    {
      step: '01',
      title: 'Auditoría de marketing',
      desc: 'Analizamos tus canales actuales, fuentes de leads, herramientas y métricas existentes para diseñar el sistema de marketing ideal en el CRM.',
    },
    {
      step: '02',
      title: 'Configuración y segmentos',
      desc: 'Construimos los segmentos de audiencia, flujos de nurturing, templates de campaña y la estructura de atribución según tu proceso de conversión.',
    },
    {
      step: '03',
      title: 'Activación y pruebas piloto',
      desc: 'Lanzamos campañas piloto, conectamos fuentes de leads (web, redes, Google Ads), validamos la atribución y ajustamos los flujos según resultados reales.',
    },
    {
      step: '04',
      title: 'Capacitación y entrega',
      desc: 'Entrenamos al equipo de marketing completo en la plataforma. Documentamos todos los flujos, campañas y procesos configurados para autonomía total.',
    },
  ];

  const stats = [
    { num: '+45%', label: 'Aumento en tasa de conversión de leads a clientes', color: 'text-[#1d70a2]' },
    { num: '-30%', label: 'Reducción en costo por lead adquirido', color: 'text-[#00bfa5]' },
    { num: '3x', label: 'Retorno sobre inversión en campañas en los primeros 6 meses', color: 'text-[#1d70a2]' },
    { num: '+60%', label: 'Más leads calificados llegando al equipo de ventas', color: 'text-[#00bfa5]' },
  ];

  const deliverables = [
    'Segmentación avanzada de audiencias configurada en el CRM',
    'Mínimo 3 flujos de nurturing automatizados activos',
    'Campañas de email, WhatsApp y SMS listas para lanzar',
    'Formularios de captura y landing pages integrados',
    'Lead scoring configurado con criterios personalizados',
    'Sistema de atribución multicanal (UTMs, fuentes, campañas)',
    'Dashboard ejecutivo de ROI por campaña y canal',
    'Integración con Google Ads y Meta Ads (si aplica)',
    'Capacitación completa al equipo de marketing',
    'Soporte post-implementación durante 30 días',
  ];

  const faqs = [
    {
      q: '¿Qué plataformas de CRM para marketing implementan?',
      a: 'Trabajamos principalmente con HighLevel y HubSpot, que tienen módulos nativos de marketing muy robustos. Dependiendo de tu operación y presupuesto, te recomendamos la plataforma que mejor se adapte. El proceso de selección es parte del diagnóstico inicial sin costo.',
    },
    {
      q: '¿Puedo integrar mis campañas de Google Ads y Meta Ads al CRM?',
      a: 'Sí. Conectamos tus campañas de Google Ads y Meta Ads al CRM para que puedas ver qué anuncio específico generó cada lead y hasta cuánto ingresó ese lead cuando se convirtió en cliente. Atribución real, no solo impresiones.',
    },
    {
      q: '¿Cuántos flujos de nurturing incluye la implementación?',
      a: 'La implementación incluye mínimo 3 flujos de nurturing automatizados: uno para leads nuevos (bienvenida y calificación), uno para leads que interactuaron pero no compraron (reactivación) y uno para clientes actuales (retención o upsell). Flujos adicionales se pueden incluir según el alcance.',
    },
    {
      q: '¿Cuánto tiempo toma ver resultados?',
      a: 'Los primeros leads calificados empiezan a llegar al equipo de ventas desde la semana de activación. Los resultados en tasa de conversión y ROI de campañas suelen ser visibles entre 30 y 60 días después de la implementación, dependiendo del volumen de tráfico y campañas activas.',
    },
    {
      q: '¿Necesito tener una base de contactos para comenzar?',
      a: 'No es indispensable, pero sí ayuda. Si ya tienes una base de contactos, la migramos e integramos al CRM con su historial. Si estás empezando desde cero, configuramos los canales de captación para que los leads entren directamente al sistema desde el primer día.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1d70a2]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00bfa5]/10 rounded-full blur-3xl" />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-full">
                <Megaphone className="w-4 h-4 text-[#1d70a2]" />
                <span className="text-blue-300 font-poppins font-medium text-sm">CRM · Marketing Automation</span>
              </div>
              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
                CRM para
                <br />
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  Equipos de Marketing
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
                Automatiza campañas multicanal, nutre leads con secuencias personalizadas, califica prospectos con scoring y mide el ROI real de cada campaña — todo desde el CRM.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <DollarSign className="w-5 h-5 text-[#00bfa5]" />
                  <span className="text-white font-semibold">$1.800.000 COP</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                  <Clock className="w-5 h-5 text-[#1d70a2]" />
                  <span className="text-white font-semibold">4 semanas de implementación</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={handleWhatsAppClick}
                  className="px-8 py-4 bg-[#1d70a2] hover:bg-[#155a87] text-white rounded-lg font-poppins font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
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
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre el CRM de marketing o cómo automatizar tus campañas?"
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
                ¿Tu marketing genera leads o genera ventas?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hay una diferencia enorme entre los dos. Estos son los síntomas de un marketing sin CRM integrado.
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
                El CRM de marketing conecta cada acción de marketing con{' '}
                <span className="text-[#1d70a2] font-bold">resultados de negocio medibles</span>.
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
                Herramientas de marketing que sí generan ROI
              </h2>
              <p className="text-xl text-gray-600">
                Implementamos el stack completo de marketing automation integrado al CRM para que cada campaña sea medible y optimizable.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-[#1d70a2]/10 border border-[#1d70a2]/20 rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#1d70a2]" />
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
              <p className="text-lg text-gray-600">4 semanas para tener tu marketing completamente automatizado y conectado al CRM</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((item, i) => (
                <div
                  key={i}
                  className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#1d70a2]/40 hover:shadow-md transition-all duration-200"
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4">Resultados</p>
            <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-4">Resultados que puedes esperar</h2>
            <p className="text-xl text-gray-300 mb-12">Basados en implementaciones reales con empresas en crecimiento en Colombia</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#1d70a2]/40 transition-all duration-300">
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
                    <CheckCircle className="w-5 h-5 text-[#1d70a2] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-2xl p-8 text-white sticky top-8">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">Inversión</p>
              <div className="text-5xl font-poppins font-black text-white mb-1">$1.800.000</div>
              <p className="text-gray-300 text-sm mb-1">COP · Pago único por implementación completa</p>
              <p className="text-gray-400 text-xs mb-6">Incluye configuración, flujos, integraciones, capacitación y 30 días de soporte</p>
              <ul className="space-y-3 mb-8">
                {[
                  'Sin costos ocultos',
                  'Entregable en 4 semanas',
                  '30 días de soporte incluido',
                  'Mín. 3 flujos de nurturing incluidos',
                  'Capacitación sin límite de usuarios',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#00bfa5] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#1d70a2] hover:bg-[#155a87] text-white py-3 rounded-xl font-poppins font-bold text-base transition-all hover:scale-105"
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
                    "Antes lanzábamos campañas sin saber cuáles generaban ventas reales. Ahora tenemos atribución completa: sabemos que Google Ads trae el 40% de los ingresos y Meta el 25%. Con ese dato, en 3 meses triplicamos el ROI de nuestro presupuesto de pauta."
                  </p>
                  <div>
                    <p className="font-poppins font-bold text-gray-900">Laura Martínez</p>
                    <p className="text-sm text-gray-500">Directora de Marketing · RetailMax Colombia, Medellín</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
                {[
                  { value: '+45%', label: 'Conversión de leads' },
                  { value: '-30%', label: 'Costo por lead' },
                  { value: '3x', label: 'ROI de campañas' },
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
            ¿Listo para que tu marketing genere ROI real?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Primera consultoría sin costo. Te mostramos exactamente cómo tu marketing puede rendir más con el CRM correcto.
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

export default CrmMarketing;
