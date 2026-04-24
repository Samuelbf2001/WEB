import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, Search, BarChart3, Zap, Users, Target,
  Headphones, Brain, Bot, CheckCircle, ArrowRight, Building2,
  Plane, Briefcase, Sparkles, AlertTriangle, TrendingUp,
  Clock, XCircle, ChevronDown, ChevronUp, Shield, Lightbulb,
  Map, Rocket, DollarSign, Eye, Activity,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const WA_BASE = 'https://wa.me/+573004188522?text=';

const RadarSixteam = () => {
  useSEO({
    title: "Radar Sixteam — Diagnóstico Gratuito de tu Operación Comercial",
    description: "Diagnóstico gratuito por WhatsApp en 5 minutos. Descubre dónde está el cuello de botella de tu empresa antes de invertir en CRM, IA o automatización.",
    canonical: "https://sixteam.pro/radar",
    ogUrl: "https://sixteam.pro/radar",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWA = (msg = 'Hola%2C%20quiero%20hacer%20mi%20diagn%C3%B3stico%20Radar%20Sixteam%20gratuito') =>
    window.open(`${WA_BASE}${msg}`, '_blank');

  const signalsDontKnow = [
    { icon: AlertTriangle, text: 'Compraste un CRM o herramienta y el equipo casi no la usa.' },
    { icon: XCircle,       text: 'Inviertes en publicidad pero no sabes qué porcentaje de leads se cierran.' },
    { icon: AlertTriangle, text: 'Hay procesos manuales que dependen de que una persona se acuerde.' },
    { icon: XCircle,       text: 'Tienes una vaga sensación de que "algo no está funcionando bien" pero no tienes datos.' },
    { icon: AlertTriangle, text: 'Ya intentaste una solución antes y no funcionó como esperabas.' },
    { icon: XCircle,       text: 'Cada área trabaja con su propia herramienta y nadie tiene una vista completa.' },
  ];

  const levels = [
    {
      name: 'Radar Inicial',
      tag: 'GRATIS',
      tagBg: 'bg-[#00bfa5]',
      tagText: 'text-[#0a2342]',
      highlight: true,
      icon: Search,
      description: 'Un mini diagnóstico por WhatsApp. En 5 minutos detectamos cuál es tu mayor cuello de botella y te damos una lectura clara de por dónde empezar.',
      includes: [
        '2–5 preguntas directas sobre tu operación',
        'Lectura inicial de tu situación específica',
        'Recomendación concreta del siguiente paso',
        'Sin formularios · Sin reunión al inicio',
      ],
      cta: 'Empezar gratis',
      waMessage: 'Hola%2C%20quiero%20hacer%20mi%20diagn%C3%B3stico%20Radar%20Inicial%20gratuito',
      price: 'Gratis',
    },
    {
      name: 'Radar Express',
      tag: 'ENTRADA',
      tagBg: 'bg-[#1d70a2]',
      tagText: 'text-white',
      highlight: false,
      icon: Lightbulb,
      description: 'Para empresas con un problema claro que necesitan orientación concreta y rápida. Salís de la reunión con prioridades y una ruta definida.',
      includes: [
        'Sesión diagnóstica enfocada (60–90 min)',
        'Hallazgos principales documentados',
        'Priorización de áreas clave',
        'Informe con recomendaciones y ruta de acción',
      ],
      cta: 'Solicitar Radar Express',
      waMessage: 'Hola%2C%20me%20interesa%20el%20Radar%20Express',
      price: 'Consultar',
    },
    {
      name: 'Radar Estratégico',
      tag: 'CONSULTORÍA',
      tagBg: 'bg-[#1d70a2]/60',
      tagText: 'text-white',
      highlight: false,
      icon: Map,
      description: 'Diagnóstico profundo de tu operación comercial completa. Hallazgos, scoring, priorización y roadmap de implementación paso a paso.',
      includes: [
        'Diagnóstico completo multi-área',
        'Scoring de madurez operativa',
        'Roadmap estratégico priorizado',
        'Plan de implementación con fases y costos',
      ],
      cta: 'Solicitar Radar Estratégico',
      waMessage: 'Hola%2C%20me%20interesa%20el%20Radar%20Estrat%C3%A9gico',
      price: 'Consultar',
    },
    {
      name: 'Implementación',
      tag: 'EJECUCIÓN',
      tagBg: 'bg-[#00bfa5]/20',
      tagText: 'text-[#00bfa5]',
      highlight: false,
      icon: Rocket,
      description: 'Ejecutamos el roadmap: CRM, automatizaciones, IA, integraciones. Con acompañamiento completo de principio a fin y métricas de resultado.',
      includes: [
        'Ejecución del roadmap aprobado',
        'CRM + automatizaciones + IA configurados',
        'Capacitación del equipo',
        'Soporte y seguimiento post-lanzamiento',
      ],
      cta: 'Hablar de implementación',
      waMessage: 'Hola%2C%20quiero%20hablar%20sobre%20implementaci%C3%B3n%20con%20Sixteam',
      price: 'Desde $800k COP',
    },
  ];

  const areas = [
    { icon: Target,     name: 'Ventas',             desc: 'Pipeline, seguimiento de oportunidades, asignación y conversión. ¿Cuántos leads entran, cuántos cierras y por qué se pierden los demás?' },
    { icon: Brain,      name: 'Marketing',           desc: 'Fuentes de leads, campañas, nurturing y retorno real por canal. ¿Sabes qué canal genera más revenue, no solo más clics?' },
    { icon: Headphones, name: 'Servicio al cliente', desc: 'Tiempos de respuesta, tickets, satisfacción y escalaciones. ¿En cuánto tiempo responde tu equipo hoy?' },
    { icon: Zap,        name: 'Automatización',      desc: 'Tareas que hoy dependen de personas y memoria del equipo. ¿Qué procesos se rompen cuando alguien falta?' },
    { icon: BarChart3,  name: 'CRM y datos',         desc: 'Uso real del CRM, calidad de datos y visibilidad del negocio. ¿Tu equipo realmente usa el CRM o sigue en WhatsApp personal?' },
    { icon: Users,      name: 'RevOps',              desc: 'Coordinación entre marketing, ventas y servicio. ¿Funcionan como un sistema integrado o como islas separadas?' },
  ];

  const steps = [
    { num: '01', icon: MessageCircle, title: 'Escríbenos por WhatsApp', desc: 'Sin formularios, sin reuniones largas al inicio. Iniciás una conversación simple que toma menos de 5 minutos.' },
    { num: '02', icon: Search,        title: 'Respondés unas preguntas', desc: 'El diagnóstico es conversacional. Respondés según tu situación actual — no hay respuestas buenas ni malas.' },
    { num: '03', icon: Eye,           title: 'Recibís una lectura clara', desc: 'Te decimos dónde está tu mayor oportunidad de mejora, sin rodeos. Con datos concretos de lo que encontramos.' },
    { num: '04', icon: ArrowRight,    title: 'Definimos el siguiente paso', desc: 'Te recomendamos si conviene un diagnóstico más profundo, una ruta corta o una implementación directa. Sin presión.' },
  ];

  const objections = [
    {
      q: '"Ya tenemos un CRM y herramientas. No necesitamos más software."',
      a: 'El punto no es sumar más herramientas. Es entender si las que ya tienes están bien conectadas, si el proceso está ordenado y dónde sigue habiendo fricción. Muchas empresas tienen herramientas que casi nadie usa — Radar diagnostica por qué.',
    },
    {
      q: '"Todavía no sé si esto me sirve."',
      a: 'Precisamente por eso la idea es empezar por el diagnóstico. No te estamos pidiendo que compres nada — te pedimos 5 minutos para entender tu caso. Al final sabrás si tiene sentido avanzar o no, con criterio.',
    },
    {
      q: '"No tengo tiempo para una consultoría larga."',
      a: 'El Radar Inicial es una conversación de 5 minutos por WhatsApp. No hay reuniones, no hay presentaciones, no hay propuestas antes de entender tu problema. Empezás por donde vos querés y avanzás solo si tiene sentido.',
    },
    {
      q: '"Quiero saber cuánto cuesta la implementación."',
      a: 'Para darte una cifra responsable primero necesitamos validar alcance y prioridad. Sin un diagnóstico, cualquier precio que te damos es un número al azar — y terminás pagando por algo que quizás no resuelve el verdadero problema.',
    },
    {
      q: '"Ya intentamos implementar algo antes y no funcionó."',
      a: 'Exactamente. El 60% de las implementaciones de CRM fallan por falta de diagnóstico previo. Cuando no hay claridad sobre qué resolver primero, la herramienta más cara del mercado no cambia los resultados. Radar existe para evitar ese error.',
    },
  ];

  const personas = [
    { icon: Plane,    name: 'Agencias de viaje',         pain: 'Leads sin seguimiento, cotizaciones que nadie persigue y caos en temporada alta.' },
    { icon: Building2, name: 'Inmobiliarias',             pain: 'Pipeline sin visibilidad, leads perdidos en WhatsApps personales y visitas que no se concretan.' },
    { icon: Briefcase, name: 'Servicios profesionales',   pain: 'Propuestas que mueren sin respuesta, clientes recurrentes que se escapan y cobros manuales.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#1d70a2]" />
        <div className="absolute top-10 left-0 w-[500px] h-[500px] bg-[#1d70a2]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00bfa5]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bfa5]/15 border border-[#00bfa5]/30 rounded-full mb-6 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] font-medium text-sm tracking-wide">
                Diagnóstico gratuito por WhatsApp · Sin formularios · 5 minutos
              </span>
            </div>

            <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
              Antes de invertir,{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                sabe qué resolver
              </span>
            </h1>

            <p className="text-[#e0e0e0] text-lg sm:text-xl max-w-3xl mx-auto mb-4 leading-relaxed">
              El 60% de las implementaciones de CRM, IA o automatización fallan porque la empresa no tenía claro qué problema resolver primero.
              Radar Sixteam te da esa claridad — gratis, rápido y por WhatsApp.
            </p>

            <p className="text-[#e0e0e0]/70 text-base max-w-2xl mx-auto mb-10">
              No te vendemos nada primero. Primero entendemos tu caso. Luego, si tiene sentido, avanzamos juntos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                onClick={() => handleWA()}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-xl shadow-[#00bfa5]/20"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hacer mi diagnóstico gratis
              </Button>
              <Link to="/radar/antes-de-invertir">
                <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-4 text-base rounded-lg">
                  ¿Vale la pena invertir en CRM?
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#e0e0e0]/70">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00bfa5]" /><span>Sin compromiso</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00bfa5]" /><span>Sin tarjeta de crédito</span></div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#00bfa5]" /><span>Respuesta en menos de 2 horas</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 bg-[#071a33] border-y border-[#1d70a2]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {[
              { num: '60%',   label: 'de implementaciones de CRM fallan sin diagnóstico previo',       icon: XCircle },
              { num: '40%',   label: 'de ahorro promedio en implementación cuando se diagnostica primero', icon: DollarSign },
              { num: '3×',    label: 'mayor adopción del equipo cuando el proceso fue validado antes',  icon: TrendingUp },
              { num: '5 min', label: 'es todo lo que toma el diagnóstico inicial por WhatsApp',         icon: Clock },
            ].map((s, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <s.icon className="w-5 h-5 text-[#00bfa5]" />
                <div className="font-poppins font-black text-[#00bfa5] text-3xl">{s.num}</div>
                <p className="text-[#e0e0e0]/70 text-xs leading-snug max-w-[160px]">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿Te suena familiar? */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">Señales de alerta</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              ¿Necesitas un diagnóstico antes de{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                seguir invirtiendo?
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">Si te identificas con alguna de estas situaciones, el diagnóstico gratuito es tu primer paso.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {signalsDontKnow.map((s, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 border border-red-500/15 rounded-xl p-5 hover:border-red-500/35 transition-all duration-300">
                <div className="w-9 h-9 bg-red-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              onClick={() => handleWA()}
              className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hacer mi diagnóstico gratis — 5 minutos
            </Button>
          </div>
        </div>
      </section>

      {/* Qué es Radar */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4 block">¿Qué es Radar Sixteam?</span>
              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-6">
                Un diagnóstico que te da{' '}
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  claridad antes de gastar
                </span>
              </h2>
              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-6">
                Radar Sixteam es una puerta de entrada consultiva. No te vendemos software — te ayudamos a descubrir
                <strong className="text-white"> dónde tiene sentido mejorar</strong> ventas, marketing, servicio o procesos en tu empresa.
              </p>
              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-8">
                La lógica es simple: antes de implementar cualquier herramienta, necesitás saber qué resolver. Radar te da esa claridad en minutos, no en meses.
              </p>
              <ul className="space-y-4">
                {[
                  { text: 'Gratis, rápido y 100% por WhatsApp', icon: MessageCircle },
                  { text: 'Adaptado a tu caso — no es un formulario genérico', icon: Target },
                  { text: 'No te obliga a contratar nada con Sixteam', icon: Shield },
                  { text: 'Construido para empresas de servicios en Latinoamérica', icon: Users },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-[#00bfa5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#00bfa5]" />
                    </div>
                    <span className="text-[#e0e0e0]">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#00bfa5]/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-[#00bfa5]/10 rounded-xl flex items-center justify-center">
                    <Activity className="w-6 h-6 text-[#00bfa5]" />
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-white text-lg">Radiografía de tu operación</h3>
                    <p className="text-[#e0e0e0]/60 text-sm">Diagnóstico conversacional por WhatsApp</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '5 min', label: 'Diagnóstico inicial' },
                    { num: '6',     label: 'Áreas evaluadas' },
                    { num: '48h',   label: 'Informe disponible' },
                    { num: '100%',  label: 'Gratuito y sin compromiso' },
                  ].map((s, i) => (
                    <div key={i} className="bg-[#1d70a2]/15 border border-[#1d70a2]/20 rounded-xl p-4 text-center">
                      <div className="font-poppins font-black text-[#00bfa5] text-2xl mb-1">{s.num}</div>
                      <p className="text-[#e0e0e0]/70 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-xl p-6">
                <p className="text-[#e0e0e0]/80 text-sm leading-relaxed italic">
                  "Sixteam no se posiciona primero como proveedor de herramientas, sino como guía que ayuda a priorizar qué debe mejorar la empresa."
                </p>
                <p className="text-[#00bfa5] text-xs mt-3 font-medium">— Filosofía Sixteam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Para quién es */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4 block">¿Para quién es?</span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Dueños y gerentes que saben que algo no funciona bien —{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                pero no tienen claro por dónde empezar
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {personas.map((p, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300">
                <div className="w-12 h-12 bg-[#1d70a2]/20 rounded-xl flex items-center justify-center mb-4">
                  <p.icon className="w-6 h-6 text-[#00bfa5]" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">{p.name}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{p.pain}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-[#e0e0e0]/50 text-sm">
            También aplica para cualquier empresa de servicios con procesos comerciales manuales, desorden operativo o herramientas que el equipo no usa.
          </p>
        </div>
      </section>

      {/* La escalera de niveles */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4 block">La escalera Radar</span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Avanzás a tu ritmo,{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                sin saltos a ciegas
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">Cada nivel te da más claridad. Vos decidís hasta dónde llegar — y cuándo.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
            {levels.map((level, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-7 flex flex-col transition-all duration-300 hover:scale-[1.02] ${
                  level.highlight
                    ? 'bg-gradient-to-br from-[#1d70a2]/40 to-[#0a2342] border-2 border-[#00bfa5] shadow-xl shadow-[#00bfa5]/15'
                    : 'bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 hover:border-[#00bfa5]/50'
                }`}
              >
                {level.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00bfa5] text-[#0a2342] text-xs font-poppins font-bold px-4 py-1 rounded-full">EMPIEZA AQUÍ</span>
                  </div>
                )}
                {i < levels.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#1d70a2] z-10" />
                )}

                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${level.highlight ? 'bg-[#00bfa5]/20' : 'bg-[#1d70a2]/20'}`}>
                    <level.icon className={`w-5 h-5 ${level.highlight ? 'text-[#00bfa5]' : 'text-[#1d70a2]'}`} />
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${level.tagBg} ${level.tagText}`}>
                    {level.tag}
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-white text-lg mb-3">{level.name}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed mb-5 flex-1">{level.description}</p>

                <ul className="space-y-2 mb-6">
                  {level.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-[#e0e0e0]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <span className="font-poppins font-black text-[#00bfa5] text-lg">{level.price}</span>
                </div>

                <Button
                  onClick={() => handleWA(level.waMessage)}
                  className={`w-full py-3 rounded-lg font-poppins font-semibold text-sm transition-all ${
                    level.highlight
                      ? 'bg-[#00bfa5] hover:bg-[#00a08a] text-white'
                      : 'bg-[#1d70a2]/30 hover:bg-[#1d70a2]/60 text-white border border-[#1d70a2]/50'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {level.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">Así funciona</h2>
            <p className="text-[#e0e0e0] text-lg">Todo por WhatsApp. Sin formularios largos, sin reuniones de una hora para empezar.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#1d70a2] to-transparent z-0" />
                )}
                <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl p-6 relative z-10 hover:border-[#00bfa5]/40 transition-all duration-300 text-center">
                  <div className="text-[#00bfa5] font-poppins font-black text-3xl mb-3">{step.num}</div>
                  <div className="w-10 h-10 bg-[#1d70a2]/20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-[#e0e0e0] text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas que evaluamos */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4 block">¿Qué revisamos?</span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Las 6 áreas que más impactan en la{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                operación comercial
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">Evaluamos con preguntas concretas, no con checklists genéricos.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {areas.map((area, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl p-6 hover:border-[#00bfa5]/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-[#1d70a2]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-6 h-6 text-[#00bfa5]" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">{area.name}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objeciones / FAQ */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-4 block">Preguntas frecuentes</span>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
              Lo que suelen preguntarnos antes de empezar
            </h2>
            <p className="text-[#e0e0e0]">Respuestas honestas para las dudas más comunes.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {objections.map((obj, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl overflow-hidden hover:border-[#1d70a2]/40 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-start justify-between p-6 text-left gap-4"
                >
                  <span className="font-poppins font-semibold text-white text-sm sm:text-base leading-snug">{obj.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                    : <ChevronDown className="w-5 h-5 text-[#e0e0e0] flex-shrink-0 mt-0.5" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[#e0e0e0] text-sm leading-relaxed">{obj.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#0d2d52] via-[#1d70a2] to-[#0a2342] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,165,0.08),transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-[#00bfa5] rounded-full animate-pulse" />
              <span className="text-[#00bfa5] text-sm font-medium">Diagnóstico disponible hoy</span>
            </div>

            <h2 className="font-poppins font-black text-white text-3xl sm:text-5xl mb-6">
              Antes de invertir, diagnostica.
            </h2>
            <p className="text-[#e0e0e0] text-lg mb-4 max-w-2xl mx-auto">
              5 minutos por WhatsApp. Gratis. Y sabrás exactamente qué parte de tu empresa necesita atención primero — y cuál no.
            </p>
            <p className="text-[#e0e0e0]/60 text-sm mb-10 max-w-xl mx-auto">
              No te vamos a vender nada primero. Si después del diagnóstico tiene sentido avanzar, lo hacemos juntos. Si no, te lo decimos honestamente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWA()}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hacer mi diagnóstico gratis
              </Button>
              <Link to="/contacto">
                <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold px-10 py-4 text-lg rounded-lg w-full">
                  Prefiero escribir por email
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-[#e0e0e0]/50 mt-8">
              <span>Sin compromiso</span>
              <span>·</span>
              <span>Sin tarjeta de crédito</span>
              <span>·</span>
              <span>Respuesta en menos de 2 horas</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RadarSixteam;
