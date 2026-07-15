import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, X, Zap, Users, BarChart3, Bot,
  Mail, Globe, Star, Calendar, FileText, Megaphone, TrendingUp,
  ChevronDown, ChevronUp, ArrowRight, Shield, Layers, Inbox
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro para la Plataforma CRM.
Página: /plataforma

PLATAFORMA: CRM todo-en-uno configurado y operado por Sixteam.pro para empresas en Colombia y Latam.

PLANES DISPONIBLES:
1. Ops Esencial: promo desde $199 USD/mes
   Incluye: 60 créditos mensuales, 1 agente IA activo, plataforma CRM incluida y wallet de mensajería.

2. Ops Integral: $499 USD/mes
   Incluye: 160 créditos mensuales, agentes IA multi-canal, integraciones y automatizaciones avanzadas.

3. Ops Total: desde $1,200 USD/mes
   Incluye: desde 400 créditos mensuales, PM dedicado, equipo completo y llamadas estratégicas semanales.

TIEMPO DE IMPLEMENTACIÓN: según alcance del plan y stack actual.
TECNOLOGÍA BASE: Infraestructura de clase enterprise configurada y operada por Sixteam.pro.

DIFERENCIAL: No vendemos acceso a software, sino que configuramos, implementamos y operamos la plataforma bajo tu proceso de negocio.`;

const EXAMPLE_QUESTIONS = [
  '¿Cuál plan me recomiendas?',
  '¿En qué se diferencia Inbox de Core?',
  '¿Qué canales puedo conectar?',
  '¿Cuánto cuesta agregar usuarios?',
];

const WA_URL = 'https://wa.me/+573004188522?text=Hola%2C%20quiero%20conocer%20m%C3%A1s%20sobre%20la%20plataforma%20Sixteam.pro';

const Plataforma = () => {
  useSEO({
    title: "Plataforma CRM: Sixteam.pro | Promo desde $199 USD/mes",
    description: "Planes Ops todo-en-uno con promo desde $199 USD/mes. CRM, agentes IA, automatizaciones y operación mensual para empresas de servicios en Colombia.",
    canonical: "https://sixteam.pro/plataforma",
    ogUrl: "https://sixteam.pro/plataforma",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'inbox' | 'core' | 'growth'>('inbox');

  const handleWA = (msg = '') => {
    const text = msg
      ? `https://wa.me/+573004188522?text=${encodeURIComponent(msg)}`
      : WA_URL;
    window.open(text, '_blank');
  };

  const plans = [
    {
      id: 'inbox',
      name: 'Ops Esencial',
      tagline: 'Tu primer paso con tecnología e IA',
      desc: 'Activa un agente IA en tu canal más urgente y opera solicitudes con un equipo especialista dentro de tu plan de créditos.',
      price: '199',
      impl: 'Sin setup obligatorio',
      users: '60 créditos/mes',
      accent: '#1d70a2',
      badge: 'Producto gancho',
      icon: Inbox,
      features: [
        '1 agente IA activo en tu canal más urgente',
        '60 créditos mensuales no acumulables',
        'Plataforma CRM all-in-one incluida',
        '$30/mes Wallet de mensajería',
        'Especialista humano dentro del plan de créditos',
      ],
      notIncluded: ['Integraciones avanzadas', 'PM dedicado', 'Capacidad de alto volumen'],
      waMsg: 'Hola, quiero conocer más sobre Ops Esencial',
    },
    {
      id: 'core',
      name: 'Ops Integral',
      tagline: 'Operación multi-canal con más capacidad',
      desc: 'Agentes IA operando CRM, WhatsApp y email, con integraciones, automatizaciones avanzadas y nuevas configuraciones.',
      price: '499',
      impl: 'Sin setup obligatorio',
      users: '160 créditos/mes',
      accent: '#00bfa5',
      badge: 'Más popular',
      icon: BarChart3,
      features: [
        'Agentes IA operando en CRM, WhatsApp y email',
        '160 créditos mensuales no acumulables',
        'Integraciones y automatizaciones avanzadas',
        'Bono Onboarding VIP',
        'Plataforma CRM all-in-one incluida',
      ],
      notIncluded: ['PM dedicado', 'Capacidad total de alto volumen'],
      waMsg: 'Hola, quiero conocer más sobre Ops Integral',
    },
    {
      id: 'growth',
      name: 'Ops Total',
      tagline: 'Equipo de tecnología permanente',
      desc: 'Capacidad dedicada para operaciones de mayor volumen, con PM, equipo completo y estrategia continua de crecimiento.',
      price: '1,200',
      impl: 'Desde $1,200 USD/mes',
      users: '400+ créditos/mes',
      accent: '#00bfa5',
      badge: 'Plataforma completa',
      icon: TrendingUp,
      features: [
        'Desde 400 créditos mensuales',
        'PM dedicado',
        'Equipo completo de especialistas',
        'Llamadas estratégicas semanales',
        'Agentes IA de alto volumen',
      ],
      notIncluded: [],
      waMsg: 'Hola, quiero conocer más sobre Ops Total',
    },
  ];

  const matrix = [
    { feature: 'Bandeja omnicanal + Chat Widget', inbox: true, core: true, growth: true },
    { feature: 'IA conversacional (suggestive / autopilot)', inbox: true, core: true, growth: true },
    { feature: 'Entrenamiento del bot (web, FAQs, docs)', inbox: true, core: true, growth: true },
    { feature: 'CRM de contactos y campos personalizados', inbox: false, core: true, growth: true },
    { feature: 'Pipelines / oportunidades / etapas', inbox: false, core: true, growth: true },
    { feature: 'Workflows y automatización', inbox: false, core: true, growth: true },
    { feature: 'Smart Lists y segmentación', inbox: false, core: true, growth: true },
    { feature: 'Calendarios y agendamiento', inbox: false, core: false, growth: true },
    { feature: 'Formularios y encuestas', inbox: false, core: false, growth: true },
    { feature: 'Funnels / Websites', inbox: false, core: false, growth: true },
    { feature: 'Blogs y SEO', inbox: false, core: false, growth: true },
    { feature: 'Email Marketing', inbox: false, core: false, growth: true },
    { feature: 'Social Planner', inbox: false, core: false, growth: true },
    { feature: 'Reputation Management', inbox: false, core: false, growth: true },
  ];

  const faqs = [
    {
      q: '¿Sobre qué tecnología está construida la plataforma?',
      a: 'La plataforma Sixteam.pro está construida sobre infraestructura de clase enterprise usada por miles de agencias y negocios digitales en el mundo. Sixteam configura, adapta y opera toda la plataforma bajo tu marca y proceso.',
    },
    {
      q: '¿Puedo empezar con Ops Esencial y escalar después?',
      a: 'Sí. La propuesta está diseñada como una escalera de valor: comienzas con Ops Esencial y, cuando estés listo, escalas a Integral o Total sin perder el trabajo previo configurado.',
    },
    {
      q: '¿Qué canales puedo conectar?',
      a: 'WhatsApp Business, Instagram, Facebook Messenger, email, SMS y Voice AI. La disponibilidad de cada canal depende de las conexiones y aprobaciones del proveedor (Meta, Google, etc.), que Sixteam gestiona contigo.',
    },
    {
      q: '¿La IA tiene costo adicional?',
      a: 'La capa funcional de IA conversacional está incluida en el plan. Los créditos de consumo de IA se cobran por uso real (volumen y longitud de respuestas) y se facturan aparte del fee mensual del plan.',
    },
    {
      q: '¿Cuántos usuarios adicionales puedo agregar?',
      a: 'Los planes actuales se estructuran por créditos, agentes y alcance operativo. Si necesitas usuarios o frentes adicionales, lo definimos dentro del plan Integral o Total.',
    },
    {
      q: '¿Las integraciones con sistemas externos están incluidas?',
      a: 'No por defecto. Las integraciones con terceros (ERPs, e-commerce, plataformas de pago, etc.) se cotizan por separado según complejidad. La plataforma cuenta con API y Webhooks para conectar prácticamente cualquier sistema.',
    },
    {
      q: '¿En cuánto tiempo queda operativa la plataforma?',
      a: 'Depende del plan y la complejidad del proyecto. El proceso incluye configuración, pruebas de calidad, ajustes y capacitación del equipo. El punto de partida se define en la llamada de alineación.',
    },
  ];

  const activePlan = plans.find(p => p.id === activeTab)!;

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#081c36]" />
        <div className="absolute top-16 left-8 w-72 h-72 bg-[#1d70a2]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-8 w-96 h-96 bg-[#00bfa5]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full">
                <Layers className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] font-medium text-sm font-poppins">Plataforma Sixteam.pro</span>
              </div>

              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                Una sola plataforma para vender, atender y crecer
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl leading-relaxed">
                Sixteam.pro entrega una plataforma configurada, operativa y lista para tu equipo.
                CRM, IA conversacional, automatizaciones y marketing en un solo lugar, sin fricción técnica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button
                  onClick={() => handleWA()}
                  className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agenda una demo gratis
                </Button>
                <Button
                  variant="outline"
                  onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-white/30 bg-transparent text-white hover:bg-white/10 font-poppins font-semibold px-8 py-4 text-lg rounded-lg"
                >
                  Ver planes y precios
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-4">
                {[
                  { value: '3', label: 'Planes escalables' },
                  { value: '14+', label: 'Módulos integrados' },
                  { value: '100%', label: 'Implementado por Sixteam' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="font-poppins font-black text-3xl sm:text-4xl text-[#00bfa5]">{s.value}</div>
                    <div className="text-gray-400 text-sm mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <ChatWidget
                pageContext={PAGE_CONTEXT}
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre los planes de la plataforma o quieres saber cuál se adapta mejor a tu negocio?"
                exampleQuestions={EXAMPLE_QUESTIONS}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCALERA DE VALOR ─────────────────────────────────── */}
      <section id="planes" className="py-20 sm:py-28 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-4">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
              Elige tu punto de entrada
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Empieza donde tu negocio lo necesita. Escala cuando estés listo. Todo construido sobre la misma base tecnológica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              const isGrowth = plan.id === 'growth';
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                    isGrowth
                      ? 'bg-gradient-to-br from-[#0d2d4f] to-[#0a2342] border-2 border-[#00bfa5] shadow-[0_0_40px_rgba(0,191,165,0.15)]'
                      : 'bg-[#0d2d4f] border border-[#1d70a2]/30 hover:border-[#1d70a2]/60'
                  }`}
                >
                  {isGrowth && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00bfa5] text-white text-xs font-poppins font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      ★ {plan.badge}
                    </div>
                  )}
                  {!isGrowth && (
                    <div className="absolute -top-3 left-6 bg-[#1d70a2]/80 text-white text-xs font-poppins font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isGrowth ? 'bg-[#00bfa5]/20' : 'bg-[#1d70a2]/20'}`}>
                      <Icon className={`w-6 h-6 ${isGrowth ? 'text-[#00bfa5]' : 'text-[#1d70a2]'}`} />
                    </div>
                    <h3 className="font-poppins font-bold text-white text-xl mb-1">{plan.name}</h3>
                    <p className="text-[#00bfa5] text-sm font-medium mb-3">{plan.tagline}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{plan.desc}</p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-gray-400 text-sm">USD</span>
                      <span className="font-poppins font-black text-white text-4xl">{plan.price}</span>
                      <span className="text-gray-400 text-sm">/mes</span>
                    </div>
                    <div className="text-gray-400 text-sm">{plan.impl} · {plan.users}</div>
                  </div>

                  <ul className="space-y-2.5 flex-1 mb-8">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#00bfa5] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                    {plan.notIncluded.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5 text-sm text-gray-500">
                        <X className="w-4 h-4 text-gray-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleWA(plan.waMsg)}
                    className={`w-full font-poppins font-semibold py-3 rounded-lg transition-all duration-300 ${
                      isGrowth
                        ? 'bg-[#00bfa5] hover:bg-[#00a08a] text-white'
                        : 'bg-[#1d70a2] hover:bg-[#155a88] text-white'
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quiero este plan
                  </Button>
                </div>
              );
            })}
          </div>

          <p className="text-center text-gray-400 text-sm mt-8">
            Planes mensuales en USD. Total se cotiza según requerimientos.
          </p>
        </div>
      </section>

      {/* ── MÓDULOS DETALLADOS CON TABS ───────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
              ¿Qué implementa Sixteam en cada plan?
            </h2>
            <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
              No solo te entregamos acceso a la plataforma, sino que configuramos, probamos y capacitamos a tu equipo.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {plans.map(plan => (
              <button
                key={plan.id}
                onClick={() => setActiveTab(plan.id as typeof activeTab)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-poppins font-semibold text-xs sm:text-sm transition-all duration-200 ${
                  activeTab === plan.id
                    ? 'bg-[#1d70a2] text-white shadow-lg'
                    : 'bg-[#0d2d4f] text-[#e0e0e0] border border-[#1d70a2]/30 hover:border-[#00bfa5] hover:text-[#00bfa5]'
                }`}
              >
                {plan.name}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="max-w-4xl mx-auto bg-[#0d2d4f] rounded-2xl border border-[#1d70a2]/20 overflow-hidden">
            <div className="bg-gradient-to-r from-[#0a2342] to-[#1d70a2] p-5 sm:p-8 text-white">
              <h3 className="font-poppins font-bold text-2xl mb-2">{activePlan.name}</h3>
              <p className="text-gray-300">{activePlan.desc}</p>
            </div>
            <div className="p-8">
              <h4 className="font-poppins font-semibold text-white text-lg mb-6">Lo que configuramos e implementamos</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activePlan.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#1d70a2]/10 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-[#00bfa5] shrink-0 mt-0.5" />
                    <span className="text-[#e0e0e0] text-sm">{f}</span>
                  </div>
                ))}
              </div>
              {activePlan.notIncluded.length > 0 && (
                <div className="mt-6 pt-6 border-t border-[#1d70a2]/20">
                  <h4 className="font-poppins font-semibold text-gray-400 text-sm mb-3">No incluido en este plan</h4>
                  <div className="flex flex-wrap gap-2">
                    {activePlan.notIncluded.map((f, i) => (
                      <span key={i} className="text-xs text-gray-400 bg-[#1d70a2]/10 px-3 py-1.5 rounded-full">{f}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-8 pt-6 border-t border-[#1d70a2]/20 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => handleWA(activePlan.waMsg)}
                  className="bg-[#0a2342] hover:bg-[#1d70a2] text-white font-poppins font-semibold px-8 py-3 rounded-lg transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Habla con un experto
                </Button>
                {activePlan.id !== 'growth' && (
                  <Button
                    variant="outline"
                    onClick={() => setActiveTab(activePlan.id === 'inbox' ? 'core' : 'growth')}
                    className="border-[#1d70a2] bg-transparent text-[#1d70a2] hover:bg-[#1d70a2]/5 hover:text-[#1d70a2] font-poppins font-semibold px-8 py-3 rounded-lg"
                  >
                    Ver plan superior
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MATRIZ DE COMPARACIÓN ─────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
              Compara todos los módulos
            </h2>
            <p className="text-gray-400 text-lg">Todos los planes sobre la misma base tecnológica de clase enterprise.</p>
          </div>

          <div className="max-w-4xl mx-auto -mx-4 sm:mx-auto overflow-x-auto rounded-xl">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-3 sm:py-4 sm:px-4 text-gray-400 font-poppins font-semibold text-xs sm:text-sm w-1/2">Módulo / Capacidad</th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-300 font-poppins font-semibold text-xs sm:text-sm whitespace-nowrap">Ops Esencial</th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-gray-300 font-poppins font-semibold text-xs sm:text-sm whitespace-nowrap">Ops Integral</th>
                  <th className="text-center py-3 px-2 sm:py-4 sm:px-4 text-[#00bfa5] font-poppins font-semibold text-xs sm:text-sm whitespace-nowrap">Ops Total</th>
                </tr>
              </thead>
              <tbody>
                {matrix.map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 ${i % 2 === 0 ? '' : 'bg-white/[0.02]'}`}>
                    <td className="py-3 px-3 sm:py-3.5 sm:px-4 text-gray-300 text-xs sm:text-sm">{row.feature}</td>
                    <td className="py-3 px-2 sm:py-3.5 sm:px-4 text-center">
                      {row.inbox
                        ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d70a2] mx-auto" />
                        : <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 mx-auto" />}
                    </td>
                    <td className="py-3 px-2 sm:py-3.5 sm:px-4 text-center">
                      {row.core
                        ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#1d70a2] mx-auto" />
                        : <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 mx-auto" />}
                    </td>
                    <td className="py-3 px-2 sm:py-3.5 sm:px-4 text-center">
                      {row.growth
                        ? <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#00bfa5] mx-auto" />
                        : <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-700 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ SOBRE HIGHLEVEL ───────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/10 border border-[#1d70a2]/30 rounded-full">
                  <Shield className="w-4 h-4 text-[#00bfa5]" />
                  <span className="text-[#00bfa5] font-medium text-sm font-poppins">Tecnología de clase enterprise</span>
                </div>
                <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
                  ¿Por qué elegir la plataforma de Sixteam.pro?
                </h2>
                <p className="text-[#e0e0e0] text-lg leading-relaxed">
                  Construida sobre infraestructura de clase enterprise usada por miles de negocios digitales en el mundo. Sixteam la configura y adapta a tu proceso de negocio, tu marca y tu equipo, para que obtengas resultados desde el primer día.
                </p>
                <ul className="space-y-4">
                  {[
                    { icon: Zap, title: 'Todo integrado de origen', desc: 'CRM, IA, marketing, automatizaciones y canales en un solo sistema. Sin integraciones frágiles entre herramientas separadas.' },
                    { icon: Bot, title: 'IA conversacional nativa', desc: 'Entrenada con tu información, conectada a tus canales, con handoff inteligente a tu equipo.' },
                    { icon: Globe, title: 'API y conectividad total', desc: 'Se conecta con ERPs, e-commerce y cualquier sistema externo vía API, Webhooks y Marketplace apps.' },
                    { icon: Star, title: 'Sixteam lo configura por ti', desc: 'No compras acceso a una herramienta, sino que contratas una operación lista para producción.' },
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-[#1d70a2]/20 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-[#00bfa5]" />
                        </div>
                        <div>
                          <div className="font-poppins font-semibold text-white mb-1">{item.title}</div>
                          <div className="text-[#e0e0e0] text-sm leading-relaxed">{item.desc}</div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Inbox, label: 'Bandeja omnicanal', color: '#1d70a2' },
                  { icon: Bot, label: 'IA Conversacional', color: '#00bfa5' },
                  { icon: BarChart3, label: 'CRM & Pipelines', color: '#1d70a2' },
                  { icon: Zap, label: 'Automatizaciones', color: '#00bfa5' },
                  { icon: Mail, label: 'Email Marketing', color: '#1d70a2' },
                  { icon: Calendar, label: 'Agendamiento', color: '#00bfa5' },
                  { icon: Globe, label: 'Funnels & Webs', color: '#1d70a2' },
                  { icon: Star, label: 'Reputación', color: '#00bfa5' },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="bg-[#0d2d4f] border border-[#1d70a2]/20 rounded-xl p-5 flex flex-col items-center text-center gap-3 hover:border-[#00bfa5]/50 transition-all duration-300">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: item.color + '20' }}>
                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <span className="text-[#e0e0e0] text-sm font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
                Preguntas frecuentes
              </h2>
              <p className="text-[#e0e0e0] text-lg">Todo lo que necesitas saber antes de empezar.</p>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-[#0d2d4f] border border-[#1d70a2]/20 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1d70a2]/10 transition-colors"
                  >
                    <span className="font-poppins font-semibold text-white pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-[#00bfa5] shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-[#e0e0e0] leading-relaxed border-t border-[#1d70a2]/20 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,165,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-poppins font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Empieza a operar con la plataforma que tu equipo necesita
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Una demo de 30 minutos es suficiente para ver cómo la plataforma Sixteam.pro se adapta a tu negocio. Sin compromisos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWA('Hola, quiero agendar una demo de la plataforma Sixteam.pro')}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agenda tu demo gratis
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/30 bg-transparent text-white hover:bg-white/10 font-poppins font-semibold px-10 py-4 text-lg rounded-lg"
              >
                <Link to="/contacto">Hablar con un experto</Link>
              </Button>
            </div>
            <p className="text-gray-500 text-sm">
              También puedes escribirnos a{' '}
              <a href="mailto:alpha@sixteam.pro" className="text-[#00bfa5] hover:underline">alpha@sixteam.pro</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Plataforma;
