import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  Star, AlertCircle, ChevronDown, ChevronUp, Mail,
  Plane, Package, RefreshCw, Target, Quote, Send, ShieldCheck,
  PhoneCall, Sparkles, DollarSign
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para agencias de viaje.
Página: /industrias/agencias-de-viaje

PROPUESTA DE VALOR: Ayudamos a agencias de viaje a convertir consultas en reservas confirmadas usando CRM, automatizaciones e IA, sin necesidad de contratar más personal.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Cotizaciones manuales lentas: el cliente pide un paquete y la agencia tarda horas o días en responder mientras las OTAs confirman al instante
- Sin seguimiento post-cotización: se envía la cotización pero si el cliente no responde nadie hace follow-up a las 24h ni 72h
- Leads perdidos en canales dispersos: WhatsApp personal, correo, DMs de Instagram y llamadas sin centralizar — alguno siempre se pierde
- Temporada alta caótica: en diciembre y semana santa el equipo se ahoga, la calidad baja y se pierden reservas justo cuando más clientes hay
- Sin historial del viajero: si el cliente llama de nuevo, el asesor tiene que preguntarle todo desde cero — destinos anteriores, presupuesto, preferencias
- Clientes que no regresan: una vez el cliente viajó, no hay proceso de reactivación — la próxima temporada va con otra agencia o con una OTA

SOLUCIONES / FUNCIONALIDADES:
- Bandeja omnicanal unificada: WhatsApp, Instagram, Facebook, email y web en una sola pantalla
- Agente IA 24/7: responde en 2 minutos, captura destino/fechas/viajeros y asigna al asesor correcto
- Pipeline de reservas visual: Consulta → Cotización → Seguimiento → Reserva → Pago
- Automatizaciones de seguimiento: follow-up automático a las 24h, 48h y 72h post-cotización
- Historial del viajero: CRM con todos los viajes, preferencias y conversaciones anteriores
- Campañas de reactivación: email masivo, WhatsApp broadcast y SMS coordinados
- Reportes de conversión por canal, asesor y destino

CÓMO FUNCIONA (4 pasos):
1. Lead entra por cualquier canal (WhatsApp, portal, web, Meta Ads)
2. IA responde en 2 minutos, captura info y asigna al asesor correcto
3. Asesor cotiza con seguimiento automático — nunca más un lead olvidado
4. Post-viaje: encuesta de satisfacción y reactivación para próxima temporada

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $149 USD/mes + $250 USD implementación. Incluye bandeja omnicanal, IA 24/7, captura de datos de viaje, 2 usuarios
- CRM Sixteam Core: $200 USD/mes + $500 USD implementación. Incluye todo lo anterior + pipeline de reservas, automatizaciones avanzadas, campañas broadcast, reportes, 3 usuarios
- RevOps Externo: desde $500.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica

RESULTADOS ESPERADOS: tasa de conversión de cotización a reserva pasa de 20% a 65%, tiempo de respuesta de 4 horas a 2 minutos, 3× más seguimientos sin aumentar equipo.

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
    icon: Clock,
    title: 'Cotizaciones que tardan horas — o días',
    desc: 'El cliente pregunta por Cartagena para 4 personas en diciembre. Tu asesor tarda 3–4 horas en armar la propuesta. Para entonces, el cliente ya reservó en Booking o con otra agencia que respondió más rápido.',
  },
  {
    icon: Send,
    title: 'Cotización enviada... y nadie hace seguimiento',
    desc: 'Envías el paquete por WhatsApp y el cliente queda en "visto". Sin un sistema que haga follow-up automático a las 24h y 72h, ese lead se enfría y el negocio se pierde sin que nadie se dé cuenta.',
  },
  {
    icon: PhoneCall,
    title: 'Leads dispersos en WhatsApp personal, email y DMs',
    desc: 'Cada asesor recibe consultas en su WhatsApp personal, en el correo de la agencia y en los DMs de Instagram. Sin centralizar, algún mensaje siempre se queda sin responder — y ese es el lead que cierra con la competencia.',
  },
  {
    icon: Zap,
    title: 'Temporada alta caótica sin automatización',
    desc: 'En diciembre y semana santa entran 5 veces más consultas. El equipo se ahoga, la calidad de atención baja, las respuestas se demoran más — justo cuando más clientes están listos para comprar.',
  },
  {
    icon: Package,
    title: 'Sin historial: cada cliente es un desconocido',
    desc: 'El cliente que viajó contigo a San Andrés el año pasado llama de nuevo. Tu asesor le pregunta todo desde cero: presupuesto, fechas, si viaja con niños. Una mala experiencia que te hace perder clientes recurrentes.',
  },
  {
    icon: RefreshCw,
    title: 'Clientes que viajan una vez y no regresan',
    desc: 'Tienes cientos de viajeros en tu base de datos que no vuelven porque nadie los llama para la próxima temporada. Cada año empiezas de cero en lugar de capitalizar tu base de clientes satisfechos.',
  },
];

const solutionPairs = [
  {
    pain: 'El cliente espera horas por una cotización',
    solution: 'El bot responde en 2 minutos: captura destino, fechas, viajeros y presupuesto. Tu asesor recibe un resumen listo para cotizar.',
    icon: Bot,
  },
  {
    pain: 'La cotización queda sin seguimiento',
    solution: 'A las 24h sin respuesta, el sistema envía un mensaje automático. A las 72h, alerta al asesor. Nunca más un lead olvidado.',
    icon: Zap,
  },
  {
    pain: 'Los leads llegan por 5 canales distintos',
    solution: 'Una sola bandeja unificada: WhatsApp, Instagram, email, Facebook y tu web. Tu equipo responde todo desde una pantalla.',
    icon: Inbox,
  },
  {
    pain: 'Temporada alta = caos garantizado',
    solution: 'Las automatizaciones no se toman vacaciones. El bot atiende el 80% de consultas repetitivas y libera a tu equipo para cerrar reservas.',
    icon: ShieldCheck,
  },
];

const features = [
  {
    icon: Inbox,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Bandeja omnicanal unificada',
    desc: 'WhatsApp, Instagram, Facebook, email y widget de tu web en una sola pantalla. Ningún mensaje se pierde, ningún canal queda sin atender.',
  },
  {
    icon: Bot,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    title: 'Agente IA para cotizaciones 24/7',
    desc: 'Responde en 2 minutos a cualquier hora. Captura destino, fechas, número de viajeros, presupuesto y tipo de viaje. Notifica al asesor cuando el lead está caliente.',
  },
  {
    icon: TrendingUp,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Pipeline de reservas visual',
    desc: 'Consulta → Cotización enviada → Seguimiento → Reserva confirmada → Pago recibido. Cada asesor sabe exactamente dónde está cada oportunidad.',
  },
  {
    icon: RefreshCw,
    color: 'from-[#1d70a2] to-[#00bfa5]',
    title: 'Seguimiento automático multi-paso',
    desc: 'Si el cliente no responde en 24h, el sistema envía un mensaje. A las 72h, alerta al asesor. A los 7 días, un recordatorio final. Todo sin intervención humana.',
  },
  {
    icon: Package,
    color: 'from-[#0a2342] to-[#00bfa5]',
    title: 'Historial completo del viajero',
    desc: 'Todos los viajes anteriores, preferencias, presupuesto histórico y conversaciones guardadas en el CRM. Cuando el cliente vuelve, lo atiendes como si ya lo conocieras.',
  },
  {
    icon: Globe,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Campañas de reactivación por temporada',
    desc: 'Envía ofertas de semana santa, diciembre o puentes festivos a tu base de clientes anteriores con un clic. Email, WhatsApp broadcast y SMS desde una sola plataforma.',
  },
  {
    icon: BarChart3,
    color: 'from-[#00bfa5] to-[#0a2342]',
    title: 'Reportes de conversión por canal y asesor',
    desc: 'Cuántos leads entraron, cuántos cotizaste, cuántos reservaron. Por canal de origen, por asesor y por destino. Sabe dónde invertir y quién vende más.',
  },
  {
    icon: Calendar,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Formularios de cotización en tu web',
    desc: 'Un formulario inteligente que captura toda la información del viajero y la manda directo al pipeline. Sin copiar y pegar datos entre herramientas.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Lead entra por cualquier canal',
    desc: 'WhatsApp, Instagram, tu web o un anuncio de Meta. Todo llega a una sola bandeja centralizada en tiempo real.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'La IA responde en 2 minutos',
    desc: 'El agente recoge destino, fechas, viajeros y presupuesto. Califica el lead y lo asigna al asesor correcto automáticamente.',
    icon: Bot,
  },
  {
    num: '03',
    title: 'El asesor cotiza — el CRM hace el seguimiento',
    desc: 'Toda la info del viajero ya está en el sistema. Las automatizaciones hacen el follow-up. El asesor solo se enfoca en cerrar la reserva.',
    icon: CheckCircle,
  },
  {
    num: '04',
    title: 'Viajero fidelizado y listo para volver',
    desc: 'Post-viaje el sistema envía encuesta de satisfacción y programa la reactivación para la próxima temporada. El cliente recuerda tu agencia primero.',
    icon: Star,
  },
];

const testimonials = [
  {
    quote: 'Antes perdíamos leads todos los días porque no dábamos abasto para responder en temporada alta. Ahora el bot atiende de noche y los fines de semana, y nuestra tasa de cierre subió del 18% al 52% en 3 meses.',
    author: 'Marcela R.',
    role: 'Directora comercial, agencia de viajes en Medellín',
    stars: 5,
  },
  {
    quote: 'Lo que más me impresionó fue el seguimiento automático. Antes enviaba la cotización y si el cliente no respondía, se perdía. Ahora el sistema lo sigue contactando solo y yo solo cierro los negocios que ya están calientes.',
    author: 'Juan Pablo V.',
    role: 'Propietario, agencia de turismo experiencial en Bogotá',
    stars: 5,
  },
  {
    quote: 'Mis asesores tenían sus propios WhatsApps y cuando uno salía de vacaciones perdíamos toda la info de sus clientes. Sixteam centralizó todo y ahora tenemos visibilidad total sin depender de ninguna persona.',
    author: 'Catalina M.',
    role: 'Gerente, agencia de viajes corporativos en Cali',
    stars: 5,
  },
];

const faqs = [
  {
    q: '¿Funciona con el WhatsApp que ya usa mi agencia?',
    a: 'Sí. Conectamos tu línea de WhatsApp Business actual a la plataforma. Los clientes siguen escribiendo al mismo número y tu equipo responde desde la bandeja centralizada. No cambias de número ni pierdes conversaciones anteriores.',
  },
  {
    q: '¿El bot puede responder preguntas de destinos y precios?',
    a: 'Sí. Lo entrenamos con tu catálogo de destinos, preguntas frecuentes, tarifas generales y políticas de la agencia. Puede responder consultas básicas, recoger información del viajero y entregar información de paquetes antes de pasar a un asesor humano.',
  },
  {
    q: '¿Cómo funciona el seguimiento automático post-cotización?',
    a: 'Una vez envías la cotización al cliente, el sistema inicia una secuencia automática: mensaje a las 24h si no ha respondido, alerta al asesor a las 48h, y recordatorio final a los 7 días. Cada mensaje es personalizado con el nombre del cliente y el destino cotizado.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 3 semanas. Configuramos la plataforma, integramos tus canales de WhatsApp e Instagram, creamos el pipeline de reservas con las etapas de tu proceso, entrenamos el bot con tu catálogo y capacitamos a tu equipo. Todo con soporte en español.',
  },
  {
    q: '¿Sirve si somos una agencia pequeña de 2 o 3 personas?',
    a: 'Es ideal para ese tamaño. Con pocos asesores, la automatización tiene un impacto mayor: el bot atiende las consultas iniciales las 24 horas, los seguimientos van automáticos, y cada asesor puede manejar 3 veces más leads sin trabajar más horas.',
  },
  {
    q: '¿Puedo ver el rendimiento de cada asesor?',
    a: 'Sí. El dashboard muestra cuántos leads recibió cada asesor, cuántos cotizó, cuántos cerró y cuánto tiempo promedio tardó en responder. Con esa información puedes identificar quién necesita capacitación y qué proceso está fallando.',
  },
];

const AgenciasDeViaje = () => {
  useSEO({
    title: "CRM para Agencias de Viaje — Sixteam.pro | De 4 Horas a 2 Minutos",
    description: "CRM, IA y automatizaciones para agencias de viaje en Colombia. Responde en 2 minutos, seguimiento automático y convierte más cotizaciones en reservas.",
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
                <Plane className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Para agencias de viaje</span>
              </div>

              <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                De 4 horas de espera a{' '}
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  reserva en 2 minutos
                </span>
              </h1>

              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-4">
                CRM, automatizaciones e IA para agencias de viaje que quieren responder antes que las OTAs, hacer seguimiento automático y cerrar más reservas — sin contratar más personal.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#e0e0e0]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00bfa5]" />
                  <span>Tasa de conversión: 20% → 65%</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00bfa5]" />
                  <span>Tiempo de respuesta: 4h → 2 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#00bfa5]" />
                  <span>3× más leads atendidos por asesor</span>
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
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu agencia de viajes a cerrar más reservas?"
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
              Por qué las agencias pierden reservas cada semana
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Estos no son problemas genéricos. Son exactamente lo que frenan a las agencias de viaje en Colombia.
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

      {/* Solution Showcase: Pain vs Solution */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-sm font-medium">Cómo lo resolvemos</span>
            </div>
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl mb-4">
              Cada problema tiene una{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                solución concreta
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No vendemos software genérico. Resolvemos los puntos exactos donde tu agencia pierde dinero hoy.
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
              Una plataforma construida para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                vender más viajes
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No es un CRM genérico. Cada módulo se configura para el proceso real de una agencia de viajes colombiana.
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
                    Agencia de viajes en Medellín: de 20% a 65% de conversión en 90 días
                  </h2>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
                    Esta agencia con 4 asesores recibía 80–100 consultas por semana pero solo cerraba el 20% como reserva. El equipo respondía tarde, las cotizaciones quedaban sin seguimiento y en diciembre el caos era total.
                  </p>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
                    Implementamos la bandeja omnicanal, el agente IA para primera atención y las automatizaciones de seguimiento post-cotización. En 90 días, sin contratar nuevo personal, la tasa de conversión pasó de 20% a 65%.
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
                    { num: '20% → 65%', label: 'Tasa de conversión cotización a reserva', icon: TrendingUp },
                    { num: '4h → 2 min', label: 'Tiempo de respuesta al lead', icon: Clock },
                    { num: '3×', label: 'Más seguimientos sin nuevo personal', icon: Users },
                    { num: '+180%', label: 'Ingresos en la temporada de diciembre', icon: BarChart3 },
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
              Empieza con el plan que{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                necesitas hoy
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">Sin contratos anuales. Sin costos ocultos. Creces de plan cuando quieras.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-2xl p-8 flex flex-col hover:border-[#1d70a2]/60 transition-all duration-300">
              <div className="mb-6">
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">Inbox + IA</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$149</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">+ $250 USD implementación única</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Bandeja omnicanal (WhatsApp, IG, email, web)',
                  'Agente IA 24/7 para primera atención',
                  'Captura de destino, fechas y presupuesto',
                  '2 usuarios incluidos',
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
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">CRM Core</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$200</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">+ $500 USD implementación única</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Todo lo de Inbox + IA',
                  'Pipeline de reservas por etapas',
                  'Seguimiento automático post-cotización',
                  'Campañas broadcast por temporada',
                  'Historial completo del viajero',
                  '3 usuarios incluidos',
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
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase mb-2">RevOps Externo</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="font-poppins font-black text-white text-3xl">$500k</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">COP/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">Desde · operación mensual incluida</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'CRM operado por el equipo Sixteam',
                  'Reportes de conversión ejecutivos',
                  'Mejoras proactivas cada mes',
                  'SLA de respuesta 4 horas',
                  'Reunión estratégica mensual',
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
              Agencias que ya transformaron su operación
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
              { num: '+45%', label: 'Aumento promedio en tasa de cierre', icon: TrendingUp },
              { num: '2 min', label: 'Tiempo de respuesta con IA activa', icon: Clock },
              { num: '24/7', label: 'Atención sin intervención humana constante', icon: Bot },
              { num: '3×', label: 'Más leads atendidos por asesor', icon: Users },
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
              <div
                key={i}
                className="bg-[#0d2d52] border border-[#1d70a2]/20 rounded-xl overflow-hidden hover:border-[#1d70a2]/40 transition-all duration-300"
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
              Agenda una demo de 30 minutos. Te mostramos la plataforma configurada para agencias de viaje y te decimos exactamente qué necesitas para dejar de perder leads esta semana.
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
