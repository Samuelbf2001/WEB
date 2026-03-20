import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  AlertCircle, ChevronDown, ChevronUp, Mail,
  Wrench, Star, RefreshCw, FileText, Target, Phone, Settings
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para empresas de servicios generales.
Página: /industrias/servicios-generales

PROPUESTA DE VALOR: Ayudamos a empresas de servicios a ordenar su operación y cerrar más negocios con CRM, automatizaciones e IA, sin depender del esfuerzo manual del equipo.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Llamadas y mensajes sin control: solicitudes por WhatsApp, llamadas y email simultáneas sin sistema centralizado
- Agenda desorganizada: técnicos con su propia agenda en papel, choques de horarios y visitas olvidadas
- Seguimiento que depende de la memoria: si el asesor no recuerda llamar, el cliente se pierde
- Cotizaciones sin respuesta: se envía el presupuesto y el cliente desaparece sin follow-up automático
- Información dispersa: cada técnico maneja sus propios clientes, cuando alguien sale la info se va con él
- Clientes que no renuevan: no hay sistema para recordar mantenimientos periódicos o nuevas contrataciones

SOLUCIONES / FUNCIONALIDADES:
- Bandeja omnicanal unificada: WhatsApp, Instagram, Facebook, email y web en una sola pantalla
- Agente IA 24/7: recibe solicitud, pregunta tipo de servicio, ubicación y urgencia, asigna al técnico correcto
- Agendamiento automático con recordatorios: confirmación, recordatorio 24h antes, mensaje el día de la cita
- Pipeline de servicios por etapa: Solicitud → Cotización → Aprobada → En curso → Completado → Facturado
- Seguimiento automático post-cotización: recordatorio a las 24h, alerta al asesor a las 48h
- Reportes de rendimiento: solicitudes recibidas, cotizadas, cerradas y facturación por técnico y canal

CÓMO FUNCIONA (4 pasos):
1. Cliente solicita servicio por WhatsApp, web, Instagram o llamada
2. IA califica: tipo de servicio, ubicación, urgencia y asigna al técnico disponible
3. Equipo agenda con recordatorios automáticos y el CRM hace el seguimiento de cotización
4. Post-servicio: encuesta de satisfacción y recordatorio automático de mantenimiento periódico

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $149 USD/mes + $250 USD implementación. Bandeja omnicanal, IA 24/7, captura de tipo/ubicación/urgencia, 2 usuarios
- CRM Sixteam Core: $200 USD/mes + $500 USD implementación. Todo lo anterior + pipeline de servicios, agendamiento con recordatorios, seguimiento post-cotización, campañas de reactivación, reportes por técnico, 3 usuarios
- RevOps Externo: desde $500.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica

RESULTADOS ESPERADOS: -65% tiempo de respuesta, +45% cotizaciones convertidas, atención 24/7, 3× más clientes fidelizados.

IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español. Funciona para técnicos en campo con acceso móvil.`;

const EXAMPLE_QUESTIONS = [
  '¿Funciona para técnicos en campo?',
  '¿El bot puede dar cotizaciones automáticas?',
  '¿Cómo funciona el agendamiento?',
  '¿Puedo enviar recordatorios de mantenimiento?',
];

const WA_URL = 'https://wa.me/+573023515392?text=Hola%2C%20tengo%20una%20empresa%20de%20servicios%20y%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ayudarme%20a%20automatizar%20mis%20procesos';

const handleWA = () => window.open(WA_URL, '_blank');

const painPoints = [
  {
    icon: Phone,
    title: 'Llamadas y mensajes sin control',
    desc: 'Los clientes llaman, escriben por WhatsApp y mandan correos al mismo tiempo. Sin un sistema centralizado, las solicitudes se pierden y queda mal el servicio.',
  },
  {
    icon: Calendar,
    title: 'Agenda desorganizada',
    desc: 'Los técnicos y ejecutivos tienen su propia agenda en papel o en el celular. Hay choques de horarios, visitas olvidadas y clientes que esperan sin saber cuándo llegan.',
  },
  {
    icon: Clock,
    title: 'Seguimiento que depende de la memoria',
    desc: 'Si el asesor no recuerda llamar, el cliente se pierde. No hay automatización que haga el follow-up cuando el equipo está ocupado atendiendo otros servicios.',
  },
  {
    icon: FileText,
    title: 'Cotizaciones sin respuesta',
    desc: 'Envías la cotización y el cliente desaparece. Sin un proceso automatizado de seguimiento, ese presupuesto queda en el aire y el negocio no cierra.',
  },
  {
    icon: Users,
    title: 'Información dispersa entre el equipo',
    desc: 'Cada técnico o asesor maneja sus propios clientes de forma independiente. Cuando alguien sale, la información del cliente se va con él.',
  },
  {
    icon: RefreshCw,
    title: 'Clientes que no vuelven a contratar',
    desc: 'Prestaste un servicio hace seis meses y no tienes un sistema para recordarle al cliente que es momento de renovar o de contratar otro servicio.',
  },
];

const features = [
  {
    icon: Inbox,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Bandeja omnicanal unificada',
    desc: 'WhatsApp, Instagram, Facebook, email y formulario web en una sola pantalla. Todo el equipo ve todas las solicitudes y nadie queda sin respuesta.',
  },
  {
    icon: Bot,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    title: 'Agente IA para primera atención 24/7',
    desc: 'El bot recibe la solicitud, pregunta el tipo de servicio, la ubicación y la urgencia. Califica el lead y lo asigna al técnico o asesor correcto antes de que abra el computador.',
  },
  {
    icon: Calendar,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Agendamiento automático con recordatorios',
    desc: 'El cliente agenda su visita técnica o cita de servicio directamente. El sistema envía confirmación, recordatorio 24 horas antes y mensaje el día de la cita.',
  },
  {
    icon: TrendingUp,
    color: 'from-[#1d70a2] to-[#00bfa5]',
    title: 'Pipeline de servicios por etapa',
    desc: 'Solicitud → Cotización enviada → Aprobada → Servicio en curso → Completado → Facturado. Visibilidad total del estado de cada trabajo en tiempo real.',
  },
  {
    icon: Zap,
    color: 'from-[#0a2342] to-[#00bfa5]',
    title: 'Seguimiento automático post-cotización',
    desc: 'Si el cliente no aprueba la cotización en 24 horas, el sistema envía un recordatorio. A las 48 horas, alerta al asesor. Nunca más una cotización olvidada.',
  },
  {
    icon: BarChart3,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Reportes de rendimiento del equipo',
    desc: 'Cuántas solicitudes se recibieron, cuántas se cotizaron, cuántas se cerraron y cuánto facturó cada técnico o asesor. Todo en un dashboard ejecutivo.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Cliente solicita el servicio',
    desc: 'Por WhatsApp, web, Instagram o llamada. Todo entra a la misma bandeja centralizada.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'IA califica y asigna',
    desc: 'El bot recoge tipo de servicio, ubicación y urgencia. Asigna al técnico o asesor disponible.',
    icon: Bot,
  },
  {
    num: '03',
    title: 'Equipo agenda y cotiza',
    desc: 'El CRM guarda todo. Los recordatorios van automáticos. El seguimiento de cotización también.',
    icon: Wrench,
  },
  {
    num: '04',
    title: 'Servicio completado y cliente fidelizado',
    desc: 'Post-servicio el sistema pide calificación y programa recontratación automática.',
    icon: Star,
  },
];

const plans = [
  {
    name: 'Sixteam Inbox + IA',
    tag: 'Ideal para empezar',
    price: '149',
    impl: '250',
    accent: '#1d70a2',
    popular: false,
    desc: 'Para empresas de servicios que quieren centralizar canales y que la IA atienda la primera solicitud.',
    features: [
      'WhatsApp, Instagram, Facebook y email unificados',
      'Agente IA 24/7 para primera atención',
      'Captura de tipo de servicio, ubicación y urgencia',
      'Asignación automática al técnico o asesor',
      'Widget de chat para tu sitio web',
      '2 usuarios incluidos',
    ],
    waMsg: 'Hola, tengo una empresa de servicios y quiero conocer el plan Inbox + IA',
  },
  {
    name: 'CRM Sixteam Core',
    tag: 'Más popular',
    price: '200',
    impl: '500',
    accent: '#00bfa5',
    popular: true,
    desc: 'CRM operativo con pipeline de servicios, agendamiento automático, seguimiento de cotizaciones y reportes.',
    features: [
      'Todo lo del plan Inbox + IA',
      'Pipeline de servicios por etapas personalizado',
      'Agendamiento de visitas con recordatorios automáticos',
      'Seguimiento automático post-cotización',
      'Campañas de reactivación de clientes anteriores',
      'Reportes por técnico, servicio y canal',
      '3 usuarios incluidos',
    ],
    waMsg: 'Hola, tengo una empresa de servicios y quiero conocer el plan CRM Core',
  },
  {
    name: 'RevOps Externo',
    tag: 'Operación mensual',
    price: '500.000 COP',
    impl: null,
    accent: '#1d70a2',
    popular: false,
    desc: 'Sixteam opera tu CRM y automatizaciones mes a mes como si fuera tu equipo interno de operaciones.',
    features: [
      'Operación mensual de CRM y automatizaciones',
      'Mejoras proactivas de flujos y procesos',
      'SLA de 4 horas en días hábiles',
      'Reunión mensual de revisión y estrategia',
      'Reportería ejecutiva de revenue',
      'Soporte dedicado vía WhatsApp',
    ],
    waMsg: 'Hola, tengo una empresa de servicios y quiero conocer el servicio RevOps externo',
  },
];

const faqs = [
  {
    q: '¿Funciona para empresas con técnicos en campo?',
    a: 'Sí. Cada técnico tiene su propio acceso desde el celular. Puede ver sus trabajos asignados, actualizar el estado del servicio y comunicarse con el cliente desde la misma plataforma.',
  },
  {
    q: '¿El bot puede entregar cotizaciones automáticas?',
    a: 'Para servicios con precios fijos o rangos definidos, sí. El bot puede entregar un precio estimado al instante. Para servicios que requieren diagnóstico, recoge la información y agenda una visita técnica.',
  },
  {
    q: '¿Puedo gestionar diferentes tipos de servicios en el mismo CRM?',
    a: 'Sí. Creamos pipelines separados por tipo de servicio si lo necesitas. Mantenimiento, instalación, reparación — cada uno con sus propias etapas y automatizaciones.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 3 semanas. Configuramos los canales, el pipeline, las automatizaciones y capacitamos a tu equipo.',
  },
  {
    q: '¿Puedo enviar recordatorios de mantenimiento periódico a mis clientes?',
    a: 'Sí. Configuramos campañas automáticas que envían mensajes a clientes cada cierto período para recordarles el mantenimiento o renovación del servicio.',
  },
  {
    q: '¿Sirve si mi empresa también vende productos además de servicios?',
    a: 'Sí. El CRM puede manejar tanto el proceso de venta de productos como el de servicios en paralelo, con sus propios flujos y equipos asignados.',
  },
];

const ServiciosGenerales = () => {
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

            {/* Columna izquierda — texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Wrench className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Para empresas de servicios</span>
              </div>

              <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Más servicios cerrados,{' '}
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  menos caos operativo
                </span>
              </h1>

              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-8">
                CRM, automatizaciones e IA para empresas de servicios que quieren atender más solicitudes, dar mejor seguimiento y fidelizar clientes — sin depender solo del esfuerzo de su equipo.
              </p>

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

            {/* Columna derecha — chat */}
            <div className="w-full">
              <ChatWidget
                pageContext={PAGE_CONTEXT}
                initialMessage="¡Hola! 👋 Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu empresa de servicios?"
                exampleQuestions={EXAMPLE_QUESTIONS}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/30 rounded-full mb-4">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-sm font-medium">¿Te suena familiar?</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Lo que frena a las empresas de servicios
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Si alguno de estos es tu realidad, Sixteam tiene la solución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((pain, i) => (
              <div key={i} className="bg-white/5 border border-red-500/20 rounded-lg p-6 hover:border-red-500/40 transition-all duration-300">
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

      {/* Solución */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-4">
              <Zap className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-sm font-medium">La solución</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Una plataforma que ordena tu operación{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                de principio a fin
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No es un CRM genérico. Lo configuramos para el proceso real de una empresa de servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {features.map((feat, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-lg p-6 hover:border-[#00bfa5]/40 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-br ${feat.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-poppins font-semibold text-white text-base mb-2">{feat.title}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
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
                <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-lg p-6 relative z-10 hover:border-[#00bfa5]/40 transition-all duration-300">
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

      {/* Planes */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Planes para empresas de servicios
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Empieza con lo que necesitas hoy. Escala cuando estés listo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-br from-[#0d2d52] to-[#0a2342] rounded-xl p-8 flex flex-col border transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? 'border-[#00bfa5] shadow-[0_0_30px_rgba(0,191,165,0.15)]'
                    : 'border-[#1d70a2]/30 hover:border-[#1d70a2]/60'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00bfa5] text-white text-xs font-poppins font-semibold px-4 py-1 rounded-full">
                      Más popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <span className="text-xs font-medium px-3 py-1 rounded-full border mb-3 inline-block"
                    style={{ color: plan.accent, borderColor: `${plan.accent}40`, background: `${plan.accent}10` }}>
                    {plan.tag}
                  </span>
                  <h3 className="font-poppins font-bold text-white text-xl mb-2">{plan.name}</h3>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed">{plan.desc}</p>
                </div>

                <div className="mb-6">
                  <div className="text-white font-poppins font-black text-4xl">
                    {plan.impl ? `$${plan.price}` : plan.price}
                    {plan.impl && <span className="text-base font-normal text-[#e0e0e0] ml-1">USD/mes</span>}
                    {!plan.impl && <span className="text-base font-normal text-[#e0e0e0] ml-1">/mes</span>}
                  </div>
                  {plan.impl && (
                    <div className="text-[#e0e0e0] text-sm mt-1">+ ${plan.impl} USD implementación única</div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[#e0e0e0]">
                      <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: plan.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => window.open(`https://wa.me/+573023515392?text=${encodeURIComponent(plan.waMsg)}`, '_blank')}
                  className="w-full font-poppins font-semibold py-3 rounded-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: plan.popular ? '#00bfa5' : 'transparent',
                    border: `1px solid ${plan.accent}`,
                    color: 'white',
                  }}
                >
                  Quiero este plan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Lo que logran las empresas de servicios con Sixteam
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: '-65%', label: 'Tiempo de respuesta a la primera solicitud', icon: Clock },
              { num: '+45%', label: 'Cotizaciones que se convierten en servicio', icon: TrendingUp },
              { num: '24/7', label: 'Atención y calificación sin intervención humana', icon: Bot },
              { num: '3×', label: 'Más clientes fidelizados con reactivación automática', icon: RefreshCw },
            ].map((stat, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/20 rounded-xl p-8 hover:border-[#00bfa5]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00bfa5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#00bfa5]" />
                </div>
                <div className="font-poppins font-black text-[#00bfa5] text-4xl mb-2">{stat.num}</div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{stat.label}</p>
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
              <div key={i} className="bg-[#0d2d52] border border-[#1d70a2]/20 rounded-lg overflow-hidden hover:border-[#1d70a2]/40 transition-all duration-300">
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
              ¿Listo para ordenar tu operación y crecer?
            </h2>
            <p className="text-[#e0e0e0] text-lg mb-10 max-w-2xl mx-auto">
              Agenda una demo de 30 minutos. Te mostramos la plataforma configurada para empresas de servicios y te decimos exactamente qué necesitas.
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
