import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  AlertCircle, ChevronDown, ChevronUp, Mail,
  Home, Building2, Key, MapPin, FileText, Target, RefreshCw, Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para inmobiliarias.
Página: /industrias/inmobiliarias

PROPUESTA DE VALOR: Ayudamos a inmobiliarias a no perder un solo lead y cerrar más negocios de venta y arriendo con CRM, automatizaciones e IA.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Leads que se enfrían: si no respondes en la primera hora el cliente se va con la competencia
- Seguimiento manual inconsistente: cada asesor lleva sus contactos en el celular sin visibilidad gerencial
- Visitas que no se concretan: sin recordatorios automáticos los clientes no se presentan
- No saber qué canal convierte: portales, Meta Ads y referidos sin datos claros de ROI
- Procesos de cierre lentos: muchos correos y llamadas manuales entre interesado y contrato firmado
- Base de clientes sin activar: cientos de contactos que no compraron o pueden referir

SOLUCIONES / FUNCIONALIDADES:
- Bandeja omnicanal unificada: WhatsApp, portales, Instagram, email en una sola pantalla
- Agente IA 24/7: califica leads preguntando tipo de inmueble, zona, presupuesto y asigna al asesor correcto
- Pipelines separados para venta y arriendo: Consulta → Visita agendada → Visita realizada → Oferta → Promesa → Cierre
- Agendamiento con recordatorios automáticos: confirmación, recordatorio 24h antes, mensaje el día de la visita
- Seguimiento post-visita automático: follow-up a las 24, 48 y 72 horas si el cliente no responde
- Reportes por asesor, canal e inmueble

CÓMO FUNCIONA (4 pasos):
1. Lead llega por portal, Meta Ads, web o WhatsApp
2. IA califica: tipo de inmueble, zona, presupuesto, urgencia y asigna al asesor
3. Asesor agenda visita con recordatorios automáticos y hace seguimiento desde el CRM
4. Post-cierre: el sistema activa campañas de referidos y reactivación

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $149 USD/mes + $250 USD implementación. Bandeja omnicanal, IA 24/7, captura de tipo/zona/presupuesto, 2 usuarios
- CRM Sixteam Core: $200 USD/mes + $500 USD implementación. Todo lo anterior + pipelines venta/arriendo, agendamiento con recordatorios, seguimiento automático, campañas broadcast, reportes, 3 usuarios
- RevOps Externo: desde $500.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica

RESULTADOS ESPERADOS: -70% tiempo de respuesta, +35% visitas que se realizan, calificación 24/7, +50% seguimientos por asesor.

IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español. Se integra con portales como Metrocuadrado y Fincaraíz.`;

const EXAMPLE_QUESTIONS = [
  '¿Se integra con Metrocuadrado?',
  '¿El bot puede mostrar propiedades?',
  '¿Puedo tener pipelines de venta y arriendo?',
  '¿Cómo funciona el agendamiento?',
];

const WA_URL = 'https://wa.me/+573023515392?text=Hola%2C%20soy%20de%20una%20inmobiliaria%20y%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ayudarme%20a%20automatizar%20mis%20procesos%20de%20ventas';

const handleWA = () => window.open(WA_URL, '_blank');

const painPoints = [
  {
    icon: MessageCircle,
    title: 'Leads que se enfrían solos',
    desc: 'Un cliente pregunta por un inmueble hoy y si no le respondes en la hora siguiente ya contactó a otra inmobiliaria. Sin automatización, pierdes el lead antes de hablar con él.',
  },
  {
    icon: Clock,
    title: 'Seguimiento manual e inconsistente',
    desc: 'Cada asesor lleva sus propios contactos en el celular. No hay visibilidad de cuántos seguimientos se están haciendo ni en qué estado está cada negocio.',
  },
  {
    icon: Calendar,
    title: 'Visitas que no se concretan',
    desc: 'Agendas una visita y el cliente no llega. Sin recordatorios automáticos ni confirmaciones, tu equipo pierde tiempo y desplazamientos.',
  },
  {
    icon: BarChart3,
    title: 'No sabes de dónde vienen tus mejores clientes',
    desc: 'Inviertes en portales, Meta Ads y referidos pero no tienes claro cuál canal te da los negocios que más cierran ni cuánto te cuesta cada cliente.',
  },
  {
    icon: FileText,
    title: 'Procesos de cierre lentos y manuales',
    desc: 'El paso de cliente interesado a contrato firmado es lento, con muchos correos y llamadas. Sin flujos claros, los negocios se caen en el último momento.',
  },
  {
    icon: RefreshCw,
    title: 'Base de clientes sin activar',
    desc: 'Tienes cientos de contactos que nunca compraron o que ya compraron y pueden referirte. No tienes un sistema para reactivarlos cuando llega una nueva propiedad.',
  },
];

const features = [
  {
    icon: Inbox,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Bandeja omnicanal unificada',
    desc: 'Todos los mensajes de WhatsApp, portales inmobiliarios, Instagram, email y tu web llegan a un solo lugar. Tu equipo responde desde una sola pantalla, sin perderse nada.',
  },
  {
    icon: Bot,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    title: 'Agente IA que califica leads 24/7',
    desc: 'El bot pregunta tipo de inmueble, ubicación, presupuesto y si es compra o arriendo. Califica el lead y lo asigna al asesor correcto antes de que tu equipo abra el computador.',
  },
  {
    icon: TrendingUp,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Pipeline visual por tipo de negocio',
    desc: 'Pipelines separados para venta y arriendo. Cada oportunidad avanza de Consulta → Visita agendada → Visita realizada → Oferta → Promesa → Cierre.',
  },
  {
    icon: Calendar,
    color: 'from-[#1d70a2] to-[#00bfa5]',
    title: 'Agendamiento y recordatorios automáticos',
    desc: 'Cuando el cliente acepta una visita, el sistema envía confirmación, recordatorio 24 horas antes y mensaje el día de la visita. Las inasistencias bajan drásticamente.',
  },
  {
    icon: Zap,
    color: 'from-[#0a2342] to-[#00bfa5]',
    title: 'Automatizaciones de seguimiento',
    desc: 'Si después de la visita el cliente no responde, el sistema hace follow-up automático a las 24, 48 y 72 horas con mensajes personalizados. Nunca más un negocio olvidado.',
  },
  {
    icon: BarChart3,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Reportes por asesor y canal',
    desc: 'Cuántos leads recibiste, cuántas visitas se realizaron, cuántos cierres logró cada asesor y cuál portal te trae los mejores negocios. Todo en un solo dashboard.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Lead llega por cualquier canal',
    desc: 'Portal, Meta Ads, tu web o WhatsApp directo. Todo entra a la misma bandeja centralizada.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'IA califica y asigna',
    desc: 'El bot recoge tipo de inmueble, zona, presupuesto y urgencia. Asigna al asesor correcto en segundos.',
    icon: Bot,
  },
  {
    num: '03',
    title: 'Asesor agenda visita',
    desc: 'El CRM guarda toda la información. Los recordatorios van automáticos. El asesor solo se enfoca en cerrar.',
    icon: Key,
  },
  {
    num: '04',
    title: 'Cierre y fidelización',
    desc: 'Post-cierre, el sistema activa campañas de referidos y reactivación para la próxima compra o arriendo.',
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
    desc: 'Para inmobiliarias que quieren centralizar canales y que la IA atienda la primera consulta.',
    features: [
      'WhatsApp, portales, Instagram y email unificados',
      'Agente IA 24/7 para calificación de leads',
      'Captura de tipo de inmueble, zona y presupuesto',
      'Asignación automática al asesor correcto',
      'Widget de chat para tu sitio web',
      '2 usuarios incluidos',
    ],
    waMsg: 'Hola, soy de una inmobiliaria y quiero conocer el plan Inbox + IA',
  },
  {
    name: 'CRM Sixteam Core',
    tag: 'Más popular',
    price: '200',
    impl: '500',
    accent: '#00bfa5',
    popular: true,
    desc: 'CRM completo con pipelines de venta y arriendo, agendamiento automático y seguimientos multicanal.',
    features: [
      'Todo lo del plan Inbox + IA',
      'Pipelines separados para venta y arriendo',
      'Agendamiento de visitas con recordatorios automáticos',
      'Automatizaciones de seguimiento post-visita',
      'Campañas de email y WhatsApp broadcast',
      'Reportes por asesor, canal e inmueble',
      '3 usuarios incluidos',
    ],
    waMsg: 'Hola, soy de una inmobiliaria y quiero conocer el plan CRM Core',
  },
  {
    name: 'RevOps Externo',
    tag: 'Operación mensual',
    price: '500.000 COP',
    impl: null,
    accent: '#1d70a2',
    popular: false,
    desc: 'Sixteam opera tu CRM y automatizaciones mes a mes como si fuera tu propio equipo de operaciones.',
    features: [
      'Operación mensual de CRM y automatizaciones',
      'Mejoras proactivas de flujos y procesos',
      'SLA de 4 horas en días hábiles',
      'Reunión mensual de revisión y estrategia',
      'Reportería ejecutiva de revenue',
      'Soporte dedicado vía WhatsApp',
    ],
    waMsg: 'Hola, soy de una inmobiliaria y quiero conocer el servicio RevOps externo',
  },
];

const faqs = [
  {
    q: '¿Se integra con los portales inmobiliarios como Metrocuadrado o Fincaraíz?',
    a: 'Sí. Conectamos los formularios de leads de los portales a la plataforma para que lleguen directamente a tu bandeja y pipeline. Sin copiar y pegar datos manualmente.',
  },
  {
    q: '¿El bot puede mostrar propiedades disponibles?',
    a: 'Sí. Entrenamos el agente con tu inventario de propiedades. Puede responder preguntas básicas, filtrar por zona y presupuesto, y enviar fichas de inmuebles antes de transferir al asesor.',
  },
  {
    q: '¿Puedo tener pipelines separados para venta y arriendo?',
    a: 'Sí. Configuramos los pipelines que necesites, con las etapas propias de cada tipo de negocio. Cada asesor ve solo sus oportunidades y el gerente tiene vista global.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 3 semanas. Configuramos la plataforma, integramos tus canales, creamos los pipelines y capacitamos a tu equipo.',
  },
  {
    q: '¿Puedo migrar mis contactos actuales?',
    a: 'Sí. Si tienes clientes en Excel, otro CRM o en los contactos del celular, los importamos a la plataforma para que empieces con toda tu base desde el primer día.',
  },
  {
    q: '¿Funciona para inmobiliarias con varios asesores?',
    a: 'Es ideal para equipos. Puedes asignar leads automáticamente por zona o por disponibilidad, medir el rendimiento de cada asesor y tener visibilidad total como gerente.',
  },
];

const Inmobiliarias = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#1d70a2]" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#1d70a2]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00bfa5]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Columna izquierda — texto */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Para inmobiliarias</span>
              </div>

              <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Cierra más negocios sin{' '}
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  perder un solo lead
                </span>
              </h1>

              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-8">
                CRM, automatizaciones e IA para inmobiliarias que quieren responder más rápido, dar mejor seguimiento y cerrar más ventas y arriendos — sin depender solo del esfuerzo humano.
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
                initialMessage="¡Hola! 👋 Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu inmobiliaria?"
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
              Lo que frena a las inmobiliarias hoy
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
              Una plataforma hecha para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                vender y arrendar más
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No es un CRM genérico. Cada módulo se configura para el proceso real de una inmobiliaria.
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
              Así funciona para tu inmobiliaria
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Del primer mensaje al contrato firmado — todo con el menor esfuerzo manual posible.
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
              Planes para inmobiliarias
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
              Lo que logran las inmobiliarias con Sixteam
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: '-70%', label: 'Tiempo de respuesta al primer mensaje', icon: Clock },
              { num: '+35%', label: 'Visitas que efectivamente se realizan', icon: Calendar },
              { num: '24/7', label: 'Calificación de leads sin intervención humana', icon: Bot },
              { num: '+50%', label: 'Seguimientos por asesor sin trabajo extra', icon: TrendingUp },
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
              ¿Listo para no perder más leads?
            </h2>
            <p className="text-[#e0e0e0] text-lg mb-10 max-w-2xl mx-auto">
              Agenda una demo de 30 minutos. Te mostramos la plataforma configurada para inmobiliarias y te decimos exactamente qué necesitas para empezar.
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

export default Inmobiliarias;
