import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, TrendingUp, Clock,
  AlertCircle, ChevronDown, ChevronUp, Mail,
  Wrench, Star, FileText, Quote, Send,
  ShieldCheck, Sparkles, Target, Repeat, DollarSign
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para empresas de servicios profesionales y consultoría.
Página: /industrias/servicios-generales

PROPUESTA DE VALOR: Ayudamos a empresas de servicios a cerrar más propuestas, gestionar clientes recurrentes y crecer sin necesidad de contratar más personal administrativo.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Follow-up perdido en propuestas: se envía la propuesta y si el cliente no responde nadie hace seguimiento sistemático
- Sin gestión de clientes recurrentes: no hay sistema para programar renovaciones, mantenimientos o re-contrataciones
- Recordatorios de cobro manuales: el equipo debe acordarse de enviar recordatorios de pago uno a uno
- Sin rastreo de referidos: no saben qué clientes traen nuevos clientes ni cuánto revenue generan
- Historial de clientes disperso: cada ejecutivo maneja su cartera por separado sin visibilidad centralizada
- Propuestas que mueren en el correo: sin un pipeline de propuestas, nadie sabe cuántas están pendientes ni en qué estado

SOLUCIONES / FUNCIONALIDADES:
- CRM de propuestas con seguimiento automático: pipeline visual y follow-ups automáticos a las 24h, 72h y 7 días
- Automatización de clientes recurrentes: recordatorios de renovación, alertas de vencimiento y re-contratación programada
- Secuencias de cobro automáticas: recordatorio amable previo al vencimiento, recordatorio en fecha y alerta de mora
- Pipeline de referidos: rastreo de qué clientes refieren, cuántos negocios traen y cuánto revenue representan
- Historial centralizado: todas las propuestas, contratos, comunicaciones y facturas de cada cliente en un solo lugar
- Bandeja omnicanal: WhatsApp, email, Instagram y web en una sola pantalla para todo el equipo

CÓMO FUNCIONA (4 pasos):
1. Lead o solicitud entra por WhatsApp, web, email o referido
2. CRM captura y crea la oportunidad en el pipeline de propuestas
3. El equipo envía la propuesta — el sistema hace el seguimiento automático
4. Cliente cerrado: activación de recordatorios de renovación y programa de referidos

PLANES Y PRECIOS:
- Ops Esencial: promo desde $200 USD/mes. Incluye 60 créditos, 1 agente IA activo, plataforma CRM y wallet de mensajería.
- Ops Integral: $499 USD/mes. Incluye 160 créditos, agentes IA multi-canal, integraciones y automatizaciones avanzadas.
- Ops Total: desde $1,200 USD/mes. Incluye desde 400 créditos, PM dedicado, equipo completo y llamadas estratégicas semanales.

RESULTADOS ESPERADOS: +28% tasa de cierre de propuestas, -60% tiempo administrativo, crecimiento del 40% sin añadir personal, nunca más un seguimiento olvidado.

IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español.`;

const EXAMPLE_QUESTIONS = [
  '¿Funciona para consultoría y servicios profesionales?',
  '¿El sistema puede enviar recordatorios de cobro?',
  '¿Cómo funciona el pipeline de propuestas?',
  '¿Puedo rastrear mis clientes referidos?',
];

const WA_URL = 'https://wa.me/+573004188522?text=Hola%2C%20tengo%20una%20empresa%20de%20servicios%20y%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ayudarme%20a%20crecer%20sin%20m%C3%A1s%20carga%20administrativa';

const handleWA = () => window.open(WA_URL, '_blank');

const painPoints = [
  {
    icon: FileText,
    title: 'Propuestas enviadas que nadie sigue',
    desc: 'Envías la propuesta por correo, el cliente queda en silencio y nadie hace seguimiento. Sin un proceso automático de follow-up a las 24h, 72h y 7 días, ese negocio simplemente muere sin que nadie lo note.',
  },
  {
    icon: Repeat,
    title: 'Clientes recurrentes que se te escapan',
    desc: 'Prestaste un servicio de 6 meses que vence pronto. Sin un sistema que te alerte y que le envíe al cliente una propuesta de renovación a tiempo, ese contrato simplemente no se renueva — y tienes que volver a cazarlo.',
  },
  {
    icon: DollarSign,
    title: 'Recordatorios de cobro manuales y vergonzosos',
    desc: 'Tu equipo tiene que acordarse de enviar cada recordatorio de pago, una a una, por WhatsApp o correo. Se olvidan, se retrasan o simplemente evitan la incomodidad — y el flujo de caja sufre.',
  },
  {
    icon: Users,
    title: 'Referidos invisibles: nadie sabe quién trae clientes',
    desc: 'Tus mejores clientes te refieren, pero no tienes un sistema para rastrear quién trajo a quién, cuántos negocios generó ese referido ni cómo recompensarlo. La fuente más barata de nuevos clientes queda desaprovechada.',
  },
  {
    icon: Inbox,
    title: 'Historial de clientes disperso entre ejecutivos',
    desc: 'El historial de propuestas, contratos y conversaciones de cada cliente vive en el correo personal del ejecutivo que lo atiende. Si esa persona se va, pierdes el contexto completo de la relación.',
  },
  {
    icon: BarChart3,
    title: 'Sin visibilidad del pipeline de propuestas',
    desc: 'El gerente no sabe cuántas propuestas están abiertas, cuántas están en negociación ni cuánto revenue está en juego. Tomar decisiones sin esa visibilidad es operar a ciegas.',
  },
];

const solutionPairs = [
  {
    pain: 'Propuesta enviada — y silencio total del cliente',
    solution: 'El CRM activa automáticamente una secuencia: mensaje a las 24h, seguimiento a las 72h, recordatorio final al 7° día. El ejecutivo solo interviene cuando el cliente responde.',
    icon: Send,
  },
  {
    pain: 'Contratos que vencen sin oportunidad de renovar',
    solution: 'El sistema alerta al ejecutivo 30 días antes del vencimiento y envía al cliente una propuesta de renovación personalizada. La renovación se convierte en un proceso proactivo, no reactivo.',
    icon: Repeat,
  },
  {
    pain: 'Cobros que dependen de que alguien se acuerde',
    solution: 'Secuencias de cobro automáticas: recordatorio amable 3 días antes, aviso el día de vencimiento y alerta de mora al día 5. El equipo se desentiende del proceso — el sistema lo gestiona.',
    icon: ShieldCheck,
  },
  {
    pain: 'Historial fragmentado en correos personales',
    solution: 'Toda la relación con el cliente — propuestas, contratos, conversaciones, facturas — centralizada en un solo perfil. Cualquier miembro del equipo puede dar continuidad al instante.',
    icon: Inbox,
  },
];

const features = [
  {
    icon: FileText,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Pipeline de propuestas con seguimiento automático',
    desc: 'Propuesta enviada → En negociación → Aprobada → Rechazada. Seguimiento automático en cada etapa. El ejecutivo sabe exactamente dónde está cada oportunidad.',
  },
  {
    icon: Repeat,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    title: 'Automatización de renovaciones y recurrencia',
    desc: 'El sistema alerta 30 días antes del vencimiento de cada contrato y envía propuesta de renovación. Nunca más un cliente recurrente que se va por inercia.',
  },
  {
    icon: DollarSign,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Secuencias de cobro automáticas',
    desc: 'Recordatorio previo al vencimiento, aviso el día D y alerta de mora. Todo por WhatsApp o email, sin que el equipo tenga que tocar nada. Reduce la cartera vencida sin conversaciones incómodas.',
  },
  {
    icon: Users,
    color: 'from-[#1d70a2] to-[#00bfa5]',
    title: 'Pipeline de referidos rastreable',
    desc: 'Registra qué cliente refirió a quién, cuántos negocios generó ese referido y cuánto revenue representa. Identifica a tus mejores embajadores y prémialos con datos en la mano.',
  },
  {
    icon: Inbox,
    color: 'from-[#0a2342] to-[#00bfa5]',
    title: 'Historial centralizado de cada cliente',
    desc: 'Todas las propuestas, contratos, facturas y conversaciones en un solo perfil de cliente. Cualquier ejecutivo puede tomar el caso y dar continuidad sin perder contexto.',
  },
  {
    icon: Bot,
    color: 'from-[#00bfa5] to-[#0a2342]',
    title: 'Agente IA para primera atención 24/7',
    desc: 'El bot recibe solicitudes, hace preguntas de calificación y asigna al ejecutivo correcto. Los leads que llegan fuera de horario no quedan sin respuesta hasta el día siguiente.',
  },
  {
    icon: TrendingUp,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Dashboard ejecutivo de revenue',
    desc: 'Revenue en pipeline, propuestas ganadas vs. perdidas, tasa de cierre por ejecutivo y proyección del mes. Decisiones basadas en datos, no en intuición.',
  },
  {
    icon: Zap,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Bandeja omnicanal unificada',
    desc: 'WhatsApp, email, Instagram y formulario web en una sola pantalla. El equipo responde todo desde un lugar — sin abrir 4 aplicaciones distintas.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Lead o solicitud entra al sistema',
    desc: 'Por WhatsApp, email, formulario web o referido directo. Todo queda registrado automáticamente en el pipeline.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'Oportunidad creada y asignada',
    desc: 'El CRM crea la oportunidad, la asigna al ejecutivo correcto y activa recordatorios de seguimiento desde el primer día.',
    icon: Target,
  },
  {
    num: '03',
    title: 'Propuesta enviada — seguimiento automático',
    desc: 'El ejecutivo envía la propuesta. El sistema hace el follow-up solo: 24h, 72h, 7 días. El ejecutivo solo cierra.',
    icon: CheckCircle,
  },
  {
    num: '04',
    title: 'Cliente activo, renovaciones y referidos',
    desc: 'Una vez cerrado, el sistema activa recordatorios de renovación, secuencias de cobro y el programa de referidos.',
    icon: Star,
  },
];

const testimonials = [
  {
    quote: 'Teníamos propuestas enviadas que nadie seguía. Con Sixteam, el sistema hace el follow-up automático y en 3 meses nuestra tasa de cierre pasó del 22% al 51%. Crecimos un 40% sin contratar a nadie nuevo.',
    author: 'Santiago L.',
    role: 'Socio director, firma de consultoría en Bogotá',
    stars: 5,
  },
  {
    quote: 'Lo que más nos cambió fue la gestión de renovaciones. Antes perdíamos contratos porque nadie se acordaba de proponer la renovación a tiempo. Ahora el sistema lo hace solo y nuestra retención subió al 87%.',
    author: 'Valentina O.',
    role: 'Gerente general, agencia de marketing digital en Medellín',
    stars: 5,
  },
  {
    quote: 'Los recordatorios de cobro automáticos nos ahorraron horas de trabajo administrativo al mes y redujeron nuestra cartera vencida en un 65%. El equipo ahora se enfoca en conseguir clientes, no en perseguir pagos.',
    author: 'Carlos M.',
    role: 'Director financiero, empresa de servicios contables en Cali',
    stars: 5,
  },
];

const faqs = [
  {
    q: '¿Funciona para consultoría, agencias y servicios profesionales?',
    a: 'Sí, es ideal para ese perfil. El pipeline de propuestas, el seguimiento automático post-envío y la gestión de clientes recurrentes están diseñados exactamente para empresas que venden servicios de alto valor con ciclos de venta de días o semanas.',
  },
  {
    q: '¿Cómo funciona el seguimiento automático de propuestas?',
    a: 'Una vez marcas una propuesta como "enviada" en el CRM, el sistema activa una secuencia automática: un recordatorio amable a las 24 horas, un segundo mensaje a las 72 horas y una alerta final al ejecutivo al 7° día. Cada mensaje puede personalizarse con el nombre del cliente y el servicio cotizado.',
  },
  {
    q: '¿El sistema puede gestionar clientes con contratos mensuales o anuales?',
    a: 'Sí. Registras la fecha de inicio y fin de cada contrato. El sistema alerta al ejecutivo 30 días antes del vencimiento y puede enviar automáticamente al cliente una propuesta de renovación. También programa recordatorios de cobro según el ciclo de facturación de cada cliente.',
  },
  {
    q: '¿Cómo funciona el rastreo de referidos?',
    a: 'Cuando registras un nuevo lead, puedes indicar quién lo refirió. El sistema lleva un histórico de cuántos clientes ha referido cada contacto, cuántos negocios se cerraron y cuánto revenue generaron esas referencias. Con esa información puedes priorizar a tus mejores embajadores.',
  },
  {
    q: '¿Puedo ver el rendimiento de cada ejecutivo de cuenta?',
    a: 'Sí. El dashboard muestra para cada ejecutivo: cuántas propuestas envió, cuántas cerró, cuál es su tasa de conversión, cuánto revenue generó y cuántos contratos tiene por renovar. El gerente tiene visibilidad total sin depender de reportes manuales.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 3 semanas. Configuramos el pipeline de propuestas con las etapas de tu proceso, las automatizaciones de seguimiento, las secuencias de cobro y la bandeja omnicanal. Capacitamos a tu equipo y migramos los clientes actuales desde Excel o el sistema que estés usando.',
  },
];

const ServiciosGenerales = () => {
  useSEO({
    title: "CRM para Empresas de Servicios — Sixteam.pro | Crece sin más Personal",
    description: "Pipeline de propuestas, renovaciones automáticas y secuencias de cobro para consultoras y servicios profesionales. Crece un 40% sin contratar más personal.",
    canonical: "https://sixteam.pro/industrias/servicios-generales",
    ogUrl: "https://sixteam.pro/industrias/servicios-generales",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#1d70a2]" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-[#1d70a2]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00bfa5]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Wrench className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Para empresas de servicios y consultoría</span>
              </div>

              <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Crece un 40% sin añadir más personal
              </h1>

              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-4">
                CRM y automatizaciones para empresas de servicios que quieren cerrar más propuestas, fidelizar clientes recurrentes y eliminar la carga administrativa — sin depender del esfuerzo manual del equipo.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#e0e0e0]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00bfa5]" />
                  <span>+28% tasa de cierre de propuestas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00bfa5]" />
                  <span>-60% tiempo administrativo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00bfa5]" />
                  <span>Nunca más un seguimiento olvidado</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  onClick={handleWA}
                  className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-8 py-4 text-base rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agenda una demo gratis
                </Button>
                <Link to="/plataforma">
                  <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-4 text-base rounded-lg w-full">
                    Ver la plataforma
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm text-[#e0e0e0]">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                  <span>Implementación en 2–3 semanas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                  <span>Sin contratos anuales</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                  <span>Soporte en español</span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ChatWidget
                pageContext={PAGE_CONTEXT}
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu empresa de servicios a cerrar más propuestas y gestionar clientes recurrentes?"
                exampleQuestions={EXAMPLE_QUESTIONS}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">¿Te suena familiar?</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Por qué las empresas de servicios dejan dinero sobre la mesa
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Estos son los puntos exactos donde tu empresa pierde revenue sin que nadie lo esté midiendo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((pain, i) => (
              <div key={i} className="bg-white/5 border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all duration-300">
                <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center mb-4">
                  <pain.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">{pain.title}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Showcase */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-sm font-medium">Cómo lo resolvemos</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Cada problema tiene una solución concreta
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No vendemos software genérico. Automatizamos los procesos exactos donde tu empresa pierde tiempo y dinero.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {solutionPairs.map((item, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-[#00bfa5]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <div>
                    <p className="text-red-400 text-xs font-medium uppercase tracking-wide mb-1">Antes</p>
                    <p className="text-[#e0e0e0] text-sm">{item.pain}</p>
                  </div>
                </div>
                <div className="border-t border-[#1d70a2]/20 pt-4">
                  <p className="text-[#00bfa5] text-xs font-medium uppercase tracking-wide mb-1">Con Sixteam</p>
                  <p className="text-white text-sm font-medium leading-relaxed">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-full mb-4">
              <Target className="w-4 h-4 text-[#1d70a2]" />
              <span className="text-[#1d70a2] text-sm font-medium">Herramientas especializadas</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Una plataforma que ordena tu operación de principio a fin
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No es un CRM genérico. Lo configuramos para el proceso real de una empresa de servicios — propuestas, recurrencia y cobro incluidos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {features.map((feat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl p-6 hover:border-[#00bfa5]/40 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-br ${feat.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-sm mb-2">{feat.title}</h3>
                <p className="text-[#e0e0e0] text-xs leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#00bfa5]/30 rounded-2xl p-8 sm:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-6">
                    <Star className="w-4 h-4 text-[#00bfa5]" />
                    <span className="text-[#00bfa5] text-xs font-medium uppercase tracking-widest">Caso de éxito</span>
                  </div>
                  <h2 className="font-poppins font-bold text-white text-2xl sm:text-3xl mb-4">
                    Firma de consultoría en Bogotá: 40% de crecimiento sin contratar nuevo personal
                  </h2>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
                    Esta firma con 8 consultores enviaba 15–20 propuestas por mes, pero cerraba menos del 22%. El seguimiento era manual y dependía de que cada consultor se acordara de llamar. Los contratos recurrentes no se renovaban a tiempo y el flujo de caja era impredecible.
                  </p>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
                    Implementamos el pipeline de propuestas con seguimiento automático, las secuencias de renovación y los recordatorios de cobro. En 4 meses, la tasa de cierre pasó del 22% al 51% y los ingresos crecieron un 40% sin aumentar el equipo.
                  </p>
                  <Button
                    onClick={handleWA}
                    className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Quiero resultados similares
                  </Button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: '+40%', label: 'Crecimiento en ingresos en 4 meses', icon: TrendingUp },
                    { num: '22% → 51%', label: 'Tasa de cierre de propuestas', icon: FileText },
                    { num: '-60%', label: 'Tiempo administrativo del equipo', icon: Clock },
                    { num: '87%', label: 'Tasa de retención de clientes recurrentes', icon: Repeat },
                  ].map((stat, i) => (
                    <div key={i} className="bg-[#1d70a2]/10 border border-[#1d70a2]/30 rounded-xl p-5 text-center">
                      <div className="w-8 h-8 bg-[#00bfa5]/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <stat.icon className="w-4 h-4 text-[#00bfa5]" />
                      </div>
                      <div className="font-poppins font-black text-[#00bfa5] text-xl mb-1">{stat.num}</div>
                      <p className="text-[#e0e0e0] text-xs leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-full mb-4">
              <DollarSign className="w-4 h-4 text-[#1d70a2]" />
              <span className="text-[#1d70a2] text-sm font-medium">Planes y precios</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Empieza con el plan que necesitas hoy
            </h2>
            <p className="text-[#e0e0e0] text-lg">Sin contratos anuales. Sin costos ocultos. Creces de plan cuando quieras.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-2xl p-8 flex flex-col hover:border-[#1d70a2]/60 transition-all duration-300">
              <div className="mb-6">
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">Ops Esencial</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$200</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">Sin setup obligatorio · 60 créditos</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Bandeja omnicanal (WhatsApp, email, IG, web)',
                  'Agente IA 24/7 para primera atención',
                  'Captura y asignación de solicitudes',
                  'Wallet inicial de mensajería',
                  'Soporte en español',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#e0e0e0]">
                    <CheckCircle className="w-4 h-4 text-[#00bfa5] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={handleWA} variant="outline" className="border-[#1d70a2] bg-transparent text-white hover:bg-[#1d70a2]/20 font-poppins font-semibold w-full">
                Empezar
              </Button>
            </div>

            <div className="bg-gradient-to-br from-[#1d70a2]/30 to-[#0a2342] border-2 border-[#00bfa5] rounded-2xl p-8 flex flex-col relative shadow-xl shadow-[#00bfa5]/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#00bfa5] text-[#0a2342] text-xs font-poppins font-bold px-4 py-1 rounded-full">MÁS POPULAR</span>
              </div>
              <div className="mb-6">
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">Ops Integral</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$499</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">Sin setup obligatorio · 160 créditos</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Todo lo de Ops Esencial',
                  'Pipeline de propuestas con seguimiento automático',
                  'Automatización de renovaciones y recurrencia',
                  'Secuencias de cobro automáticas',
                  'Pipeline de referidos rastreable',
                  'Onboarding VIP incluido',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#e0e0e0]">
                    <CheckCircle className="w-4 h-4 text-[#00bfa5] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={handleWA} className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold w-full">
                Empezar
              </Button>
            </div>

            <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-2xl p-8 flex flex-col hover:border-[#1d70a2]/60 transition-all duration-300">
              <div className="mb-6">
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">Ops Total</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$1,200</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">Desde · a cotizar según requerimientos</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Desde 400 créditos mensuales',
                  'PM dedicado',
                  'Equipo completo de especialistas',
                  'Automatización avanzada de renovaciones',
                  'Llamadas estratégicas semanales',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#e0e0e0]">
                    <CheckCircle className="w-4 h-4 text-[#00bfa5] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button onClick={handleWA} variant="outline" className="border-[#1d70a2] bg-transparent text-white hover:bg-[#1d70a2]/20 font-poppins font-semibold w-full">
                Consultar
              </Button>
            </div>
          </div>

          <p className="text-center text-[#e0e0e0]/60 text-sm mt-8">
            ¿No sabes cuál elegir?{' '}
            <Link to="/radar/diagnostico-gratis" className="text-[#00bfa5] hover:underline font-medium">
              Empieza con un diagnóstico gratuito →
            </Link>
          </p>
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Así funciona para tu empresa
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              De la primera solicitud al cliente fidelizado — con el menor esfuerzo manual posible.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#1d70a2] to-transparent z-0" />
                )}
                <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl p-6 relative z-10 hover:border-[#00bfa5]/40 transition-all duration-300">
                  <div className="text-[#00bfa5] font-poppins font-black text-3xl mb-3">{step.num}</div>
                  <div className="w-10 h-10 bg-[#1d70a2]/20 rounded-lg flex items-center justify-center mb-4">
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

      {/* Testimonials */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-4">
              <Quote className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-sm font-medium">Lo que dicen nuestros clientes</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
              Empresas de servicios que ya transformaron su operación
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300 flex flex-col">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, s) => (
                    <Star key={s} className="w-4 h-4 text-[#00bfa5] fill-[#00bfa5]" />
                  ))}
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
                <div>
                  <p className="text-white font-poppins font-semibold text-sm">{t.author}</p>
                  <p className="text-[#00bfa5] text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-16 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: '+28%', label: 'Aumento en tasa de cierre de propuestas', icon: TrendingUp },
              { num: '-60%', label: 'Reducción en tiempo administrativo', icon: Clock },
              { num: '+40%', label: 'Crecimiento de ingresos sin nuevo personal', icon: BarChart3 },
              { num: '87%', label: 'Retención de clientes recurrentes', icon: Repeat },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl p-6 hover:border-[#00bfa5]/30 transition-all duration-300">
                <div className="w-10 h-10 bg-[#00bfa5]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-5 h-5 text-[#00bfa5]" />
                </div>
                <div className="font-poppins font-black text-[#00bfa5] text-3xl mb-1">{stat.num}</div>
                <p className="text-[#e0e0e0] text-xs leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">Preguntas frecuentes</h2>
            <p className="text-[#e0e0e0]">Todo lo que necesitas saber antes de empezar.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#0d2d52] border border-[#1d70a2]/20 rounded-xl overflow-hidden hover:border-[#1d70a2]/40 transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-poppins font-semibold text-white text-sm sm:text-base pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp className="w-5 h-5 text-[#00bfa5] flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-[#e0e0e0] flex-shrink-0" />
                  }
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-[#e0e0e0] text-sm leading-relaxed">{faq.a}</p>
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
              <span className="text-[#00bfa5] text-sm font-medium">Demo disponible esta semana</span>
            </div>

            <h2 className="font-poppins font-black text-white text-3xl sm:text-5xl mb-6">
              ¿Listo para crecer sin caos operativo?
            </h2>
            <p className="text-[#e0e0e0] text-lg mb-10 max-w-2xl mx-auto">
              Agenda una demo de 30 minutos. Te mostramos la plataforma configurada para empresas de servicios y te decimos exactamente qué necesitas para dejar de perder propuestas esta semana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleWA}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agenda tu demo gratis
              </Button>
              <Link to="/contacto">
                <Button variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white/10 font-semibold px-10 py-4 text-lg rounded-lg w-full">
                  <Mail className="w-5 h-5 mr-2" />
                  Escríbenos por email
                </Button>
              </Link>
            </div>

            <p className="text-[#e0e0e0]/60 text-sm mt-6">
              Sin compromiso · Sin tarjeta de crédito · Respuesta en menos de 2 horas
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiciosGenerales;
