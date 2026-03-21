import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, ArrowLeft, CheckCircle, Clock, Zap, Globe,
  Code2, Settings, ChevronDown, ChevronUp, ShieldCheck,
  BarChart3, RefreshCcw, Users, TrendingUp, Target,
  ArrowRight, Layers, AlertCircle
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const WA_BASE = 'https://wa.me/+573023515392?text=';

const SoporteOperaciones = () => {
  useSEO({
    title: "RevOps y Soporte de Operaciones — Sixteam.pro | Operación CRM Mensual",
    description: "Operación mensual de tu CRM con mejoras proactivas, reportes ejecutivos y SLA de 4 horas. Acompañamiento RevOps desde $500,000 COP/mes.",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWA = (msg: string) => {
    window.open(WA_BASE + encodeURIComponent(msg), '_blank');
  };

  const planes = [
    {
      nombre: 'RevOps Starter',
      horas: '5 horas/mes',
      precio: '$500.000 COP/mes',
      horaExtra: '$150.000 COP/hora adicional',
      descripcion: 'Para equipos que ya tienen base implementada y necesitan un aliado técnico que mantenga y mejore la operación.',
      incluye: [
        'Hasta 5 horas de operación RevOps al mes',
        'SLA de respuesta: 4 horas en días hábiles',
        'Atención de urgencias fines de semana',
        'Ajustes y mejoras de configuración en plataforma',
        'Ejecución operativa y apoyo funcional al equipo',
        'Diagnóstico mensual de oportunidades de mejora',
      ],
      waMsg: 'Hola, quiero el plan RevOps Starter de Sixteam.pro',
      highlight: false,
    },
    {
      nombre: 'RevOps Operativo',
      horas: '10 horas/mes',
      precio: 'Desde $1.250.000 COP/mes',
      horaExtra: '$125.000 COP/hora adicional',
      descripcion: 'Para equipos en crecimiento que necesitan un socio técnico activo que opere, automatice y evolucione su stack mensualmente.',
      incluye: [
        'Hasta 10 horas de operación RevOps al mes',
        'SLA de respuesta: 4 horas en días hábiles',
        'Atención de urgencias fines de semana',
        'Ejecución de automatizaciones y mejoras de proceso',
        'Apoyo en campañas, comunicaciones y reportería',
        'Reunión mensual de alineación estratégica + reporte',
      ],
      waMsg: 'Hola, quiero el plan RevOps Operativo de Sixteam.pro',
      highlight: true,
    },
    {
      nombre: 'RevOps Avanzado',
      horas: '20–30 horas/mes',
      precio: 'Desde $2.500.000 COP/mes',
      horaExtra: '$99.999 COP/hora adicional',
      descripcion: 'Sixteam actúa como tu equipo de RevOps externo dedicado: opera, diseña e impulsa la madurez de toda la operación de revenue.',
      incluye: [
        'Hasta 20–30 horas de operación RevOps al mes',
        'SLA prioritario en días hábiles',
        'Atención de urgencias fines de semana',
        'Diseño y ejecución de iniciativas de mejora continua',
        'Gestión del stack: CRM, automatizaciones, integraciones',
        'Acompañamiento estratégico y roadmap de operaciones',
      ],
      waMsg: 'Hola, quiero el plan RevOps Avanzado de Sixteam.pro',
      highlight: false,
    },
  ];

  const quehacemos = [
    {
      icon: Settings,
      titulo: 'Operamos tu stack tecnológico',
      desc: 'Mantenemos tu CRM, automatizaciones, pipelines y herramientas digitales siempre configurados y alineados con tu proceso real de ventas y atención.',
    },
    {
      icon: Zap,
      titulo: 'Automatizamos procesos de revenue',
      desc: 'Identificamos cuellos de botella en tu ciclo comercial y los resolvemos con automatizaciones: seguimientos, asignaciones, alertas, flujos de nurturing.',
    },
    {
      icon: BarChart3,
      titulo: 'Damos visibilidad al negocio',
      desc: 'Configuramos reportes, dashboards y métricas que le permiten a tu liderazgo tomar decisiones con datos reales: tasas de conversión, tiempo de ciclo, fuentes de ingreso.',
    },
    {
      icon: Users,
      titulo: 'Alineamos ventas, marketing y servicio',
      desc: 'Aseguramos que los tres equipos compartan la misma data, los mismos procesos y el mismo CRM — eliminando fricciones que generan pérdida de oportunidades.',
    },
    {
      icon: RefreshCcw,
      titulo: 'Evolucionamos contigo mes a mes',
      desc: 'Cada mes revisamos prioridades, ejecutamos mejoras y proponemos iniciativas que impulsen el crecimiento. No somos reactivos — somos proactivos.',
    },
    {
      icon: ShieldCheck,
      titulo: 'Respondemos cuando más lo necesitas',
      desc: 'SLA de 4 horas en días hábiles. Urgencias atendidas también los fines de semana. Tu operación no se detiene.',
    },
  ];

  const iniciativas = [
    {
      icon: Zap,
      titulo: 'Automatizaciones avanzadas de Revenue',
      precio: '$180.000 COP / hora',
      desc: 'Workflows complejos, lógica de procesos a medida y automatizaciones que conectan ventas, marketing y servicio en un solo flujo de ingresos.',
      waMsg: 'Hola, quiero cotizar automatizaciones avanzadas de RevOps',
    },
    {
      icon: Globe,
      titulo: 'Integraciones entre sistemas',
      precio: '$250.000 COP / hora',
      desc: 'Conectamos tu CRM con ERP, e-commerce, herramientas de marketing o cualquier sistema externo (Shopify, NetSuite, HubSpot, Mailchimp y más) vía API o Webhook.',
      waMsg: 'Hola, quiero cotizar una integración de sistemas',
    },
    {
      icon: Code2,
      titulo: 'Website y landing pages',
      precio: 'Sujeto a cotización',
      desc: 'Creamos activos digitales articulados con tu CRM y operación de captación: desde páginas informativas hasta embudos de conversión medibles.',
      waMsg: 'Hola, quiero cotizar desarrollo web o landing pages',
    },
    {
      icon: Layers,
      titulo: 'Desarrollo de plataforma a medida',
      precio: '$300.000 COP / hora',
      desc: 'Diseñamos y construimos módulos o funcionalidades personalizadas que ningún software estándar cubre, alineados a tu flujo operativo único.',
      waMsg: 'Hola, quiero cotizar desarrollo de plataforma personalizada',
    },
  ];

  const faqs = [
    {
      q: '¿Qué es RevOps y por qué necesito un equipo externo?',
      a: 'Revenue Operations (RevOps) es la función que alinea ventas, marketing y servicio al cliente alrededor de datos, procesos y tecnología compartidos para maximizar los ingresos. La mayoría de las empresas en Latam no pueden costear un equipo RevOps interno — Sixteam lo resuelve como aliado externo a una fracción del costo.',
    },
    {
      q: '¿En qué se diferencia esto de un soporte técnico tradicional?',
      a: 'Un soporte técnico resuelve problemas cuando algo falla. Sixteam como aliado RevOps va más allá: opera proactivamente, propone mejoras, diseña automatizaciones, alinea procesos entre áreas y te acompaña estratégicamente en cómo usar la tecnología para crecer más rápido.',
    },
    {
      q: '¿Necesito ya tener una plataforma implementada para contratar este servicio?',
      a: 'Idealmente sí. Este servicio está pensado para organizaciones que ya cuentan con una base de CRM o plataforma digital y quieren operarla y evolucionarla de forma continua. Si aún no tienes implementación, comenzamos con un proyecto de implementación base.',
    },
    {
      q: '¿Las horas de operación se acumulan si no las uso?',
      a: 'No. Las horas mensuales no son acumulables — el plan garantiza disponibilidad y SLA para todos los clientes. Las horas adicionales se pueden contratar cuando el mes lo requiera.',
    },
    {
      q: '¿Qué incluye la reunión mensual de alineación estratégica?',
      a: 'Una sesión de 30–60 minutos con tu equipo donde revisamos lo ejecutado, medimos el impacto de los cambios, identificamos prioridades del siguiente mes y ajustamos el roadmap de RevOps según los objetivos de negocio.',
    },
    {
      q: '¿Pueden operar HubSpot además de HighLevel?',
      a: 'Sí. Sixteam opera sobre las principales plataformas de CRM y automatización del mercado, incluyendo HighLevel y HubSpot. El alcance específico se define en el onboarding según el stack que uses.',
    },
  ];

  const stats = [
    { num: '+40%', label: 'Aumento en tasa de conversión de oportunidades en los primeros 90 días', color: 'text-[#00bfa5]' },
    { num: '-60%', label: 'Reducción de tareas manuales repetitivas del equipo comercial', color: 'text-[#1d70a2]' },
    { num: '100%', label: 'Visibilidad del pipeline y métricas de revenue en tiempo real', color: 'text-[#00bfa5]' },
    { num: '3x', label: 'Más velocidad en ejecución de mejoras operativas vs. hacerlo internamente', color: 'text-[#1d70a2]' },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#081c36]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1d70a2]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#00bfa5]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/servicios" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Volver a Servicios
          </Link>

          <div className="max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full">
              <TrendingUp className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] font-poppins font-medium text-sm">Revenue Operations · Aliado estratégico · Equipo tech externo</span>
            </div>

            <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Tu equipo de{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                RevOps externo
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Sixteam opera tu tecnología de revenue mes a mes — como si fuera tu propio equipo interno, sin el costo de serlo. CRM, automatizaciones, integraciones y procesos alineados para que ventas, marketing y servicio trabajen como uno solo.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: Target, label: 'Ventas + Marketing + Servicio alineados' },
                { icon: Clock, label: 'SLA 4 horas en días hábiles' },
                { icon: TrendingUp, label: 'Mejora continua mes a mes' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                    <Icon className="w-4 h-4 text-[#00bfa5]" />
                    <span className="text-white font-medium text-sm">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                onClick={() => handleWA('Hola, quiero conocer cómo Sixteam puede ser mi equipo de RevOps externo')}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Habla con un experto RevOps
              </Button>
              <Button
                variant="outline"
                onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-white/30 bg-transparent text-white hover:bg-white/10 font-poppins font-semibold px-8 py-4 text-lg rounded-lg"
              >
                Ver planes
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ──────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">El problema</p>
              <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
                Lo que pasa cuando no tienes un equipo RevOps
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                La tecnología sola no genera resultados. Sin alguien que la opere y evolucione, se convierte en un costo sin retorno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { problema: 'CRM desactualizado', desc: 'Tu equipo deja de usarlo porque no refleja el proceso real. Los datos se degradan y pierdes visibilidad del pipeline.' },
                { problema: 'Automatizaciones rotas', desc: 'Los flujos que configuraron hace meses ya no funcionan. Los leads caen al vacío sin seguimiento automático.' },
                { problema: 'Ventas y marketing desconectados', desc: 'Marketing genera leads que ventas no sabe gestionar. Nadie comparte datos ni mide el mismo embudo.' },
                { problema: 'Decisiones sin datos', desc: 'Los reportes muestran métricas de vanidad, no las que importan. No hay visibilidad real del ciclo de ingresos.' },
                { problema: 'Dependencia de un solo técnico', desc: 'Todo el conocimiento del sistema está en una persona. Si sale, la operación se para.' },
                { problema: 'Tecnología que no escala', desc: 'Tu stack creció de forma desordenada. Hay herramientas duplicadas, sin integrar y sin documentación.' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-red-100 rounded-xl p-5 flex items-start gap-4 hover:border-red-200 hover:shadow-md transition-all duration-300">
                  <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-poppins font-semibold text-gray-900 mb-1 text-base">{item.problema}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-gray-700 text-lg font-medium">
                Sixteam resuelve todo esto actuando como tu{' '}
                <span className="text-[#1d70a2] font-bold">equipo de RevOps externo</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ HACE SIXTEAM COMO TU EQUIPO REVOPS ──────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Lo que hacemos</p>
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
              Qué hace Sixteam como tu equipo RevOps
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No resolvemos tickets — operamos tu tecnología de revenue de forma proactiva, como parte de tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {quehacemos.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-[#00bfa5]/10 border border-[#00bfa5]/20 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-lg mb-2">{item.titulo}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto mt-8 p-5 bg-blue-50 border border-[#1d70a2]/20 rounded-xl">
            <p className="text-[#0a2342] text-sm leading-relaxed">
              <strong>Alcance del servicio:</strong> Operamos sobre configuraciones de plataforma (CRM, automatizaciones, flujos, reportería). Las caídas del servicio atribuibles al proveedor (HighLevel, HubSpot, etc.) se gestionan directamente con ellos — Sixteam acompaña la comunicación cuando aplique.
            </p>
          </div>
        </div>
      </section>

      {/* ── LA DIFERENCIA: SOPORTE VS REVOPS ─────────────── */}
      <section className="py-16 sm:py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">La diferencia</p>
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl">
                No somos un proveedor de soporte.
                <br />
                Somos tu aliado de Revenue Operations.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="text-gray-400 font-poppins font-bold text-sm uppercase tracking-widest mb-6">Soporte técnico tradicional</div>
                <ul className="space-y-4">
                  {[
                    'Reacciona cuando algo falla',
                    'Resuelve el problema puntual y cierra el ticket',
                    'No entiende el proceso de negocio',
                    'Cobra por incidente o por hora de problema',
                    'No propone mejoras proactivas',
                    'No tiene contexto acumulado de tu operación',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="w-5 h-5 rounded-full border border-gray-500 flex items-center justify-center shrink-0 mt-0.5 text-gray-400 text-xs">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-[#0d2d4f] to-[#0a2342] border-2 border-[#00bfa5]/40 rounded-2xl p-8 shadow-[0_0_30px_rgba(0,191,165,0.1)]">
                <div className="text-[#00bfa5] font-poppins font-bold text-sm uppercase tracking-widest mb-6">Sixteam como aliado RevOps</div>
                <ul className="space-y-4">
                  {[
                    'Opera proactivamente para que nada falle',
                    'Entiende tus objetivos de revenue y trabaja hacia ellos',
                    'Conoce tu proceso comercial, tu CRM y tu equipo',
                    'Entrega horas de operación mensual predecibles',
                    'Propone mejoras antes de que sean problemas',
                    'Acumula contexto y memoria operativa de tu negocio',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-200 text-sm">
                      <CheckCircle className="w-5 h-5 text-[#00bfa5] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Resultados</p>
              <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl">
                Lo que logran nuestros clientes
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Basados en empresas que operamos como aliado RevOps en Colombia y Latam
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-2xl p-8 text-center hover:border-[#1d70a2]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className={`text-4xl font-poppins font-black ${stat.color} mb-3`}>{stat.num}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PLANES ───────────────────────────────────────── */}
      <section id="planes" className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Precios</p>
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
              Planes de RevOps mensual
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Elige según la madurez de tu operación y el nivel de acompañamiento que necesita tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planes.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-[#0a2342] border-2 border-[#00bfa5] shadow-xl'
                    : 'bg-white border border-gray-200 hover:border-[#1d70a2]/40 hover:shadow-md'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00bfa5] text-white text-xs font-poppins font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    Más solicitado
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`font-poppins font-bold text-xl mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.nombre}</h3>
                  <p className="text-[#00bfa5] text-sm font-medium mb-2">{plan.horas}</p>
                  <p className={`text-sm leading-relaxed ${plan.highlight ? 'text-gray-400' : 'text-gray-500'}`}>{plan.descripcion}</p>
                </div>

                <div className={`mb-6 pb-6 border-b ${plan.highlight ? 'border-white/10' : 'border-gray-100'}`}>
                  <div className={`font-poppins font-black text-2xl mb-1 ${plan.highlight ? 'text-white' : 'text-gray-900'}`}>{plan.precio}</div>
                  <div className="text-gray-500 text-xs">{plan.horaExtra}</div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.incluye.map((item, fi) => (
                    <li key={fi} className={`flex items-start gap-2.5 text-sm ${plan.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                      <CheckCircle className="w-4 h-4 text-[#00bfa5] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWA(plan.waMsg)}
                  className={`w-full font-poppins font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                    plan.highlight
                      ? 'bg-[#00bfa5] hover:bg-[#00a08a] text-white'
                      : 'bg-[#0a2342] hover:bg-[#1d70a2] text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Quiero este plan
                </Button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm mt-6">
            Las horas mensuales no son acumulables · Horas adicionales disponibles según el plan contratado.
          </p>
        </div>
      </section>

      {/* ── INICIATIVAS ESTRATÉGICAS ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Proyectos adicionales</p>
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
              Iniciativas estratégicas
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Proyectos de mayor alcance que van más allá del retainer mensual — para escalar la madurez de tu operación de revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {iniciativas.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#1d70a2]/40 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#00bfa5]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-gray-900 text-lg mb-1">{item.titulo}</h3>
                      <p className="text-[#00bfa5] font-semibold text-sm mb-2">{item.precio}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <button
                        onClick={() => handleWA(item.waMsg)}
                        className="inline-flex items-center gap-1.5 text-[#1d70a2] font-semibold text-sm hover:text-[#00bfa5] transition-colors"
                      >
                        Cotizar esta iniciativa
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CÓMO NOS INTEGRAMOS ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">El proceso</p>
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl">
              Cómo Sixteam se integra a tu operación
            </h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">
              Nos incorporamos como un miembro más de tu equipo, sin fricciones y con contexto desde el día uno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', titulo: 'Diagnóstico RevOps', desc: 'Auditamos tu stack, tus procesos y el estado de tus datos para entender el punto de partida y priorizar el impacto.' },
              { step: '02', titulo: 'Onboarding y accesos', desc: 'Nos integramos a tus plataformas y canales de comunicación. Definimos el roadmap del primer mes con métricas claras.' },
              { step: '03', titulo: 'Operación continua', desc: 'Ejecutamos cada mes: ajustes, mejoras, automatizaciones, reportes y comunicaciones dentro de las horas contratadas.' },
              { step: '04', titulo: 'Revisión estratégica', desc: 'Reunión mensual para revisar resultados, ajustar prioridades y planificar la siguiente etapa de madurez digital.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#1d70a2]/30 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-[#0a2342] to-[#1d70a2] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-[#00bfa5] font-poppins font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-poppins font-bold text-gray-900 text-lg mb-2">{item.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">Preguntas frecuentes</p>
              <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl">
                Todo lo que necesitas saber
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#1d70a2]/40 transition-colors bg-white">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-poppins font-semibold text-gray-900 pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-[#1d70a2] shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-sm bg-gray-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,165,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="w-16 h-16 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-2xl flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-[#00bfa5]" />
            </div>
            <h2 className="font-poppins font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Suma a Sixteam como tu equipo de RevOps
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tu equipo comercial se enfoca en cerrar negocios. Sixteam opera la tecnología que los hace posibles.
              Hablemos en 30 minutos y diseñamos el plan que se ajusta a tu operación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWA('Hola, quiero una sesión para conocer cómo Sixteam puede ser mi equipo de RevOps externo')}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar sesión de diagnóstico
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/30 bg-transparent text-white hover:bg-white/10 font-poppins font-semibold px-10 py-4 text-lg rounded-lg"
              >
                <Link to="/contacto">Ver más información</Link>
              </Button>
            </div>
            <p className="text-gray-500 text-sm">
              ¿Prefieres el correo?{' '}
              <a href="mailto:alpha@sixteam.pro" className="text-[#00bfa5] hover:underline">alpha@sixteam.pro</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoporteOperaciones;
