import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  Star, AlertCircle, ChevronDown, ChevronUp, Phone, Mail,
  MapPin, Plane, Package, CreditCard, RefreshCw, Target
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para agencias de viaje.
Página: /industrias/agencias-de-viaje

PROPUESTA DE VALOR: Ayudamos a agencias de viaje a convertir consultas en reservas confirmadas usando CRM, automatizaciones e IA, sin necesidad de contratar más personal.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Consultas sin respuesta: clientes escriben por WhatsApp, Instagram y email simultáneamente y se pierden
- Cotizaciones sin seguimiento: se envía la cotización pero no hay follow-up automático
- Temporada alta caótica: en diciembre y semana santa el equipo se ahoga sin automatización
- No saber qué canal convierte: inversión en Meta Ads, Google y referidos sin datos claros
- Clientes que no regresan: no hay proceso para reactivar clientes anteriores

SOLUCIONES / FUNCIONALIDADES:
- Bandeja omnicanal unificada: WhatsApp, Instagram, Facebook, email y web en una sola pantalla
- Agente IA 24/7: responde, captura destino/fechas/viajeros y asigna al asesor correcto
- Pipeline de reservas visual: Consulta → Cotización → Seguimiento → Reserva → Pago
- Automatizaciones de seguimiento: follow-up automático a las 24, 48 y 72 horas
- Campañas de reactivación: email masivo, WhatsApp broadcast y SMS coordinados
- Reportes de conversión por canal, asesor y destino

CÓMO FUNCIONA (4 pasos):
1. Lead entra por cualquier canal (WhatsApp, portal, web, Meta Ads)
2. IA responde, captura info y asigna al asesor correcto
3. Asesor cotiza con seguimiento automático
4. Post-viaje: encuesta de satisfacción y reactivación para próxima temporada

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $149 USD/mes + $250 USD implementación. Incluye bandeja omnicanal, IA 24/7, captura de datos de viaje, 2 usuarios
- CRM Sixteam Core: $200 USD/mes + $500 USD implementación. Incluye todo lo anterior + pipeline de reservas, automatizaciones avanzadas, campañas broadcast, reportes, 3 usuarios
- RevOps Externo: desde $500.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica

RESULTADOS ESPERADOS: +40% tasa de conversión, -60% tiempo de respuesta, atención 24/7, 3× más seguimientos sin aumentar equipo.

IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español.`;

const EXAMPLE_QUESTIONS = [
  '¿Puedo conectar mi WhatsApp actual?',
  '¿El bot puede cotizar destinos?',
  '¿Cuánto cuesta implementar el CRM?',
  '¿Funciona en temporada alta?',
];

const WA_URL = 'https://wa.me/+573023515392?text=Hola%2C%20soy%20de%20una%20agencia%20de%20viajes%20y%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ayudarme%20a%20automatizar%20mis%20reservas';

const handleWA = () => window.open(WA_URL, '_blank');

const painPoints = [
  {
    icon: MessageCircle,
    title: 'Consultas sin respuesta',
    desc: 'Clientes escriben por WhatsApp, Instagram y email al mismo tiempo. Sin un sistema, las consultas se pierden y el cliente se va con otra agencia.',
  },
  {
    icon: Clock,
    title: 'Cotizaciones que no cierran',
    desc: 'Envías la cotización y no hay seguimiento automático. El cliente no responde y tú ya olvidaste hacerle follow-up a tiempo.',
  },
  {
    icon: Calendar,
    title: 'Temporada alta caótica',
    desc: 'En diciembre y semana santa tu equipo se ahoga. Sin automatización, la calidad de atención baja justo cuando más clientes llegan.',
  },
  {
    icon: BarChart3,
    title: 'No sabes qué canal te da clientes',
    desc: 'Inviertes en Meta Ads, Google y referidos pero no tienes claro cuál canal convierte más ni cuánto te cuesta cada reserva.',
  },
  {
    icon: RefreshCw,
    title: 'Clientes que no regresan',
    desc: 'No tienes un proceso para reactivar clientes anteriores. Cada temporada empiezas desde cero en lugar de fidelizar tu base.',
  },
  {
    icon: Users,
    title: 'Equipo desorganizado',
    desc: 'Cada asesor maneja sus propios WhatsApps. Cuando alguien sale de vacaciones, la información de los clientes se va con él.',
  },
];

const features = [
  {
    icon: Inbox,
    color: 'from-[#1d70a2] to-[#0a2342]',
    accent: '#1d70a2',
    title: 'Bandeja omnicanal unificada',
    desc: 'Todas las consultas de WhatsApp, Instagram, Facebook, email y web en una sola pantalla. Tu equipo responde desde un solo lugar, sin perderse ningún mensaje.',
  },
  {
    icon: Bot,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    accent: '#00bfa5',
    title: 'Agente IA para cotizaciones 24/7',
    desc: 'El bot responde preguntas frecuentes, captura destino, fechas y número de viajeros, y notifica a tu asesor cuando el lead está caliente. Sin intervención humana constante.',
  },
  {
    icon: TrendingUp,
    color: 'from-[#0a2342] to-[#1d70a2]',
    accent: '#1d70a2',
    title: 'Pipeline de reservas visual',
    desc: 'Sigue cada oportunidad desde la primera consulta hasta el pago. Consulta → Cotización enviada → Seguimiento → Reserva confirmada → Pago recibido.',
  },
  {
    icon: Zap,
    color: 'from-[#1d70a2] to-[#00bfa5]',
    accent: '#00bfa5',
    title: 'Automatizaciones de seguimiento',
    desc: 'Si el cliente no responde en 24 horas, el sistema envía un mensaje automático. Si en 48 horas sigue sin responder, alerta a tu asesor. Nunca más un lead olvidado.',
  },
  {
    icon: Globe,
    color: 'from-[#0a2342] to-[#00bfa5]',
    accent: '#00bfa5',
    title: 'Campañas de reactivación',
    desc: 'Envía ofertas de temporada a tu base de clientes anteriores con un clic. Email masivo, WhatsApp broadcast y SMS coordinados desde una sola plataforma.',
  },
  {
    icon: BarChart3,
    color: 'from-[#1d70a2] to-[#0a2342]',
    accent: '#1d70a2',
    title: 'Reportes de conversión por canal',
    desc: 'Sabe exactamente cuántos leads entraron, cuántos cotizaste y cuántos se convirtieron en reserva. Por canal, por asesor y por destino.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Lead entra por cualquier canal',
    desc: 'WhatsApp, Instagram, tu web o un anuncio de Meta. Todo llega a una sola bandeja centralizada.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'La IA responde y clasifica',
    desc: 'El agente recoge destino, fechas, número de viajeros y presupuesto. Califica el lead y lo asigna al asesor correcto.',
    icon: Bot,
  },
  {
    num: '03',
    title: 'El asesor cotiza y hace seguimiento',
    desc: 'El CRM guarda toda la info. Las automatizaciones hacen el follow-up. Tú solo cierras la reserva.',
    icon: CheckCircle,
  },
  {
    num: '04',
    title: 'Cliente fidelizado y listo para volver',
    desc: 'Post-viaje, el sistema envía encuesta de satisfacción y programa reactivación para la próxima temporada.',
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
    desc: 'Para agencias que quieren centralizar sus canales y dejar que la IA atienda la primera consulta.',
    features: [
      'WhatsApp, Instagram, Facebook y email unificados',
      'Agente IA 24/7 para primera atención',
      'Captura automática de destino, fechas y viajeros',
      'Handoff a asesor cuando el lead está caliente',
      'Widget de chat para tu sitio web',
      '2 usuarios incluidos',
    ],
    waMsg: 'Hola, soy de una agencia de viajes y quiero conocer el plan Inbox + IA',
  },
  {
    name: 'CRM Sixteam Core',
    tag: 'Más popular',
    price: '200',
    impl: '500',
    accent: '#00bfa5',
    popular: true,
    desc: 'CRM completo con pipeline de reservas, automatizaciones de seguimiento y reportes de conversión.',
    features: [
      'Todo lo del plan Inbox + IA',
      'Pipeline visual de reservas personalizado',
      'Automatizaciones de seguimiento multi-paso',
      'Formularios de cotización para tu web',
      'Campañas de email y WhatsApp broadcast',
      'Reportes de conversión por canal y asesor',
      '3 usuarios incluidos',
    ],
    waMsg: 'Hola, soy de una agencia de viajes y quiero conocer el plan CRM Core',
  },
  {
    name: 'RevOps Externo',
    tag: 'Operación mensual',
    price: '500.000 COP',
    impl: null,
    accent: '#1d70a2',
    desc: 'Sixteam opera tu CRM y automatizaciones mes a mes, como si fuera tu equipo interno de operaciones.',
    features: [
      'Operación mensual de CRM y automatizaciones',
      'Mejoras proactivas de flujos y procesos',
      'SLA de 4 horas en días hábiles',
      'Reunión mensual de revisión y estrategia',
      'Reportería ejecutiva de revenue',
      'Soporte dedicado vía WhatsApp',
    ],
    waMsg: 'Hola, soy de una agencia de viajes y quiero conocer el servicio RevOps externo',
  },
];

const faqs = [
  {
    q: '¿Funciona con el WhatsApp de mi agencia actual?',
    a: 'Sí. Conectamos tu línea de WhatsApp Business a la plataforma. Los clientes escriben al mismo número y tú respondes desde la bandeja centralizada.',
  },
  {
    q: '¿El bot puede responder preguntas de destinos y precios?',
    a: 'Sí. Lo entrenamos con tu catálogo de destinos, preguntas frecuentes y tarifas generales. Puede responder consultas básicas y recoger información del viajero antes de pasar a un asesor.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 3 semanas. Configuramos la plataforma, integramos tus canales, creamos el pipeline de reservas y capacitamos a tu equipo.',
  },
  {
    q: '¿Puedo gestionar múltiples asesores desde una sola cuenta?',
    a: 'Sí. Cada asesor tiene su acceso. Puedes ver qué está gestionando cada uno, asignar leads automáticamente y medir el rendimiento individual.',
  },
  {
    q: '¿Qué pasa con mis datos de clientes actuales?',
    a: 'Los importamos. Si tienes una base de clientes en Excel o en otro sistema, la migramos a la plataforma para que empieces a trabajar desde el primer día con toda tu información.',
  },
  {
    q: '¿Sirve si soy una agencia pequeña de 2-3 personas?',
    a: 'Es ideal para ese tamaño. Con pocos asesores, la automatización tiene un impacto mayor: cada persona atiende más clientes con menos esfuerzo.',
  },
];

const AgenciasDeViaje = () => {
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
                <Plane className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Para agencias de viaje</span>
              </div>

              <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Convierte consultas en{' '}
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  reservas confirmadas
                </span>
              </h1>

              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-8">
                CRM, automatizaciones e IA para agencias de viaje que quieren atender más clientes, hacer mejor seguimiento y cerrar más reservas — sin contratar más personal.
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
                initialMessage="¡Hola! 👋 Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu agencia de viajes?"
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
              Los problemas que frenan a las agencias de viaje
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Si alguno de estos te representa, Sixteam tiene la solución.
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
              Una plataforma construida para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                vender más viajes
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No es un CRM genérico. Configuramos cada módulo para el proceso real de una agencia de viajes.
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
              Así funciona para tu agencia
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              De la primera consulta a la reserva confirmada — todo automatizado.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
        </div>
      </section>

      {/* Planes */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Planes para agencias de viaje
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
                    style={{ color: 'white', borderColor: `${plan.accent}99`, background: `${plan.accent}60` }}>
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

      {/* Resultados esperados */}
      <section className="py-20 bg-[#081c36]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Lo que logran las agencias con Sixteam
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { num: '+40%', label: 'Tasa de conversión de leads a reserva', icon: TrendingUp },
              { num: '-60%', label: 'Tiempo de respuesta a consultas', icon: Clock },
              { num: '24/7', label: 'Atención sin intervención humana constante', icon: Bot },
              { num: '3×', label: 'Más seguimientos sin aumentar el equipo', icon: Users },
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
              <div
                key={i}
                className="bg-[#0d2d52] border border-[#1d70a2]/20 rounded-lg overflow-hidden hover:border-[#1d70a2]/40 transition-all duration-300"
              >
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
              ¿Listo para llenar tu agenda de reservas?
            </h2>
            <p className="text-[#e0e0e0] text-lg mb-10 max-w-2xl mx-auto">
              Agenda una demo de 30 minutos. Te mostramos la plataforma configurada para agencias de viaje y te decimos exactamente qué necesitas.
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

export default AgenciasDeViaje;
