import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  AlertCircle, ChevronDown, ChevronUp, Mail,
  Building2, Key, FileText, Star, Quote, Send,
  ShieldCheck, Sparkles, Target, RefreshCw, MapPin, DollarSign
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para inmobiliarias.
Página: /industrias/inmobiliarias

PROPUESTA DE VALOR: Ayudamos a inmobiliarias a no perder un solo lead y cerrar más negocios de venta y arriendo con CRM, automatizaciones e IA.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Leads perdidos en WhatsApp personal de los asesores: cada asesor recibe consultas en su propio celular sin visibilidad gerencial
- Sin sistema de matching de propiedades: el asesor tiene que recordar de cabeza qué inmueble cuadra con cada cliente
- Seguimiento lento tras la consulta inicial: si no respondes en la primera hora el cliente ya está mirando con la competencia
- Sin visibilidad del pipeline: el gerente no sabe en qué estado está cada negocio sin llamar a cada asesor
- Leads duplicados: el mismo cliente llega por portal, WhatsApp y Meta Ads y se crea tres veces en el sistema
- Visitas sin confirmar: el asesor agenda la visita pero el cliente no llega porque no hubo recordatorio automático

SOLUCIONES / FUNCIONALIDADES:
- Bandeja omnicanal unificada: WhatsApp, portales, Instagram, email en una sola pantalla
- Agente IA 24/7: califica leads preguntando tipo de inmueble, zona, presupuesto y asigna al asesor correcto
- Pipelines separados para venta y arriendo: Consulta → Visita agendada → Visita realizada → Oferta → Promesa → Cierre
- Agendamiento con recordatorios automáticos: confirmación, recordatorio 24h antes, mensaje el día de la visita
- Seguimiento post-visita automático: follow-up a las 24, 48 y 72 horas si el cliente no responde
- Deduplicación automática de leads y reportes por asesor, canal e inmueble

CÓMO FUNCIONA (4 pasos):
1. Lead llega por portal, Meta Ads, web o WhatsApp
2. IA califica: tipo de inmueble, zona, presupuesto, urgencia y asigna al asesor
3. Asesor agenda visita con recordatorios automáticos y hace seguimiento desde el CRM
4. Post-cierre: el sistema activa campañas de referidos y reactivación

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $215 USD/mes + $360 USD implementación. Bandeja omnicanal, IA 24/7, captura de tipo/zona/presupuesto, 2 usuarios
- CRM Sixteam Core: $288 USD/mes + $720 USD implementación. Todo lo anterior + pipelines venta/arriendo, agendamiento con recordatorios, seguimiento automático, campañas broadcast, reportes, 3 usuarios
- RevOps Externo: desde $720.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica

RESULTADOS ESPERADOS: -80% tiempo de respuesta al lead, +45% visitas que se concretan, duplicación de cierres en 6 meses, gestión de 3x más propiedades sin aumentar personal.

IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español. Se integra con Metrocuadrado y Fincaraíz.`;

const EXAMPLE_QUESTIONS = [
  '¿Se integra con Metrocuadrado?',
  '¿El bot puede mostrar propiedades?',
  '¿Puedo tener pipelines de venta y arriendo?',
  '¿Cómo funciona el agendamiento?',
];

const WA_URL = 'https://wa.me/+573004188522?text=Hola%2C%20soy%20de%20una%20inmobiliaria%20y%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ayudarme%20a%20automatizar%20mis%20procesos%20de%20ventas';

const handleWA = () => window.open(WA_URL, '_blank');

const painPoints = [
  {
    icon: MessageCircle,
    title: 'Leads perdidos en WhatsApp personal de cada asesor',
    desc: 'Cada asesor recibe consultas en su propio celular. Cuando alguien renuncia o se va de vacaciones, los clientes que le escribieron desaparecen con él. El gerente no tiene visibilidad de nada.',
  },
  {
    icon: Clock,
    title: 'Respuesta lenta = cliente que se va con la competencia',
    desc: 'En finca raíz, el 78% de los clientes elige la primera inmobiliaria que les responde. Si tardas más de una hora en contestar un formulario de Metrocuadrado, ese lead ya está en manos de otra agencia.',
  },
  {
    icon: Calendar,
    title: 'Visitas agendadas que el cliente no honra',
    desc: 'Tu asesor sale a mostrar un inmueble y el cliente no llega. Sin confirmación automática ni recordatorio 24 horas antes, la tasa de inasistencia puede superar el 40% — tiempo y desplazamientos perdidos.',
  },
  {
    icon: FileText,
    title: 'Sin visibilidad del pipeline: el gerente opera a ciegas',
    desc: 'Para saber en qué estado está cada negocio, el gerente tiene que llamar a cada asesor. No hay una vista centralizada de cuántos clientes están en qué etapa ni cuántas promesas de compraventa están pendientes.',
  },
  {
    icon: Users,
    title: 'Leads duplicados que confunden al equipo',
    desc: 'El mismo cliente llega por el formulario de Fincaraíz, por un anuncio de Meta y por WhatsApp directo. Sin deduplicación, se crea tres veces, tres asesores lo contactan y el cliente se siente hostigado.',
  },
  {
    icon: RefreshCw,
    title: 'Base de clientes inactiva que nadie trabaja',
    desc: 'Tienes cientos de contactos que miraron propiedades pero no compraron, o que ya compraron y pueden referirte. Sin un sistema de reactivación, esa base vale cero — es dinero que está dormido.',
  },
];

const solutionPairs = [
  {
    pain: 'Leads en WhatsApps personales sin control gerencial',
    solution: 'Una sola bandeja centralizada donde el gerente ve todas las conversaciones de todos los asesores en tiempo real. Cuando un asesor sale, sus leads no se pierden.',
    icon: Inbox,
  },
  {
    pain: 'Leads que se enfrían porque nadie responde rápido',
    solution: 'El agente IA responde en menos de 2 minutos: captura tipo de inmueble, zona y presupuesto. El asesor recibe un lead ya calificado listo para agendar visita.',
    icon: Bot,
  },
  {
    pain: 'Visitas sin confirmar con alta tasa de inasistencia',
    solution: 'El sistema envía confirmación al agendar, recordatorio 24h antes y mensaje el día de la visita. Las inasistencias bajan drásticamente — menos tiempo perdido en desplazamientos.',
    icon: ShieldCheck,
  },
  {
    pain: 'Pipeline invisible para el gerente',
    solution: 'Dashboard en tiempo real: cuántos leads en cada etapa, cuántas visitas esta semana, cuántas ofertas pendientes y cuántos cierres proyectados por asesor y por mes.',
    icon: BarChart3,
  },
];

const features = [
  {
    icon: Inbox,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Bandeja omnicanal unificada',
    desc: 'Metrocuadrado, Fincaraíz, WhatsApp, Instagram y tu web llegan a un solo lugar. Ningún lead se pierde, ningún canal queda sin atender.',
  },
  {
    icon: Bot,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    title: 'IA que califica leads 24/7',
    desc: 'El bot pregunta tipo de inmueble, ubicación, presupuesto y si es compra o arriendo. Califica y asigna al asesor correcto antes de que tu equipo abra el computador.',
  },
  {
    icon: TrendingUp,
    color: 'from-[#0a2342] to-[#1d70a2]',
    title: 'Pipelines separados por tipo de negocio',
    desc: 'Venta y arriendo con sus propias etapas: Consulta → Visita agendada → Visita realizada → Oferta → Promesa → Cierre. Cada asesor ve sus oportunidades, el gerente ve todo.',
  },
  {
    icon: Calendar,
    color: 'from-[#1d70a2] to-[#00bfa5]',
    title: 'Agendamiento con recordatorios automáticos',
    desc: 'El cliente acepta una visita y el sistema envía confirmación inmediata, recordatorio 24h antes y mensaje el día de la cita. Las visitas no realizadas se reducen drásticamente.',
  },
  {
    icon: Zap,
    color: 'from-[#0a2342] to-[#00bfa5]',
    title: 'Seguimiento automático post-visita',
    desc: 'Después de la visita, el sistema hace follow-up automático a las 24, 48 y 72 horas si el cliente no responde. Nunca más un negocio que se enfría por falta de contacto.',
  },
  {
    icon: MapPin,
    color: 'from-[#00bfa5] to-[#1d70a2]',
    title: 'Matching de propiedades por perfil',
    desc: 'El CRM guarda las preferencias del cliente. Cuando entra una propiedad nueva que encaja con su perfil, el sistema alerta al asesor para que la ofrezca de inmediato.',
  },
  {
    icon: Send,
    color: 'from-[#1d70a2] to-[#0a2342]',
    title: 'Campañas de reactivación y referidos',
    desc: 'Envía nuevos inmuebles a clientes que miraron pero no compraron. Activa campañas de referidos con clientes satisfechos. Todo desde una sola plataforma.',
  },
  {
    icon: BarChart3,
    color: 'from-[#0a2342] to-[#00bfa5]',
    title: 'Reportes por asesor, canal e inmueble',
    desc: 'Cuántos leads recibiste de cada portal, cuántas visitas realizó cada asesor, qué propiedades generan más interés y cuántos cierres por mes. Todo en un dashboard ejecutivo.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Lead llega por cualquier canal',
    desc: 'Portal, Meta Ads, tu web o WhatsApp directo. Todo entra a la misma bandeja centralizada — sin importar de dónde venga.',
    icon: Globe,
  },
  {
    num: '02',
    title: 'IA califica y asigna en segundos',
    desc: 'El bot recoge tipo de inmueble, zona, presupuesto y urgencia. Asigna al asesor correcto antes de que pase un minuto.',
    icon: Bot,
  },
  {
    num: '03',
    title: 'Asesor agenda — el CRM hace el seguimiento',
    desc: 'Recordatorios de visita automáticos. Follow-up post-visita automático. El asesor solo se enfoca en mostrar y cerrar.',
    icon: Key,
  },
  {
    num: '04',
    title: 'Cierre, referidos y reactivación',
    desc: 'Post-cierre, el sistema activa campañas de referidos y programa reactivación cuando el cliente pueda necesitar un nuevo inmueble.',
    icon: Star,
  },
];

const testimonials = [
  {
    quote: 'Antes perdíamos el 60% de los leads de Metrocuadrado porque respondíamos tarde. Ahora el bot califica y asigna en minutos, y nuestra tasa de visitas agendadas subió un 70%. En 6 meses duplicamos los cierres.',
    author: 'Andrés F.',
    role: 'Gerente comercial, inmobiliaria en Bogotá (venta y arriendo)',
    stars: 5,
  },
  {
    quote: 'El mayor impacto fue el seguimiento post-visita automático. Antes dependía de que el asesor se acordara de llamar. Ahora el sistema lo hace solo y recuperamos negocios que creíamos perdidos.',
    author: 'Daniela P.',
    role: 'Directora, inmobiliaria boutique en El Poblado, Medellín',
    stars: 5,
  },
  {
    quote: 'Como gerente no tenía visibilidad de nada. Cada asesor operaba como isla. Con Sixteam veo el pipeline completo en tiempo real y sé exactamente dónde está cada negocio sin tener que llamar a nadie.',
    author: 'Ricardo T.',
    role: 'Propietario, constructora e inmobiliaria en Barranquilla',
    stars: 5,
  },
];

const faqs = [
  {
    q: '¿Se integra con Metrocuadrado y Fincaraíz?',
    a: 'Sí. Conectamos los formularios de leads de los portales directamente a tu pipeline. Los leads llegan automáticamente a la bandeja sin copiar y pegar, con todos los datos del interesado ya cargados.',
  },
  {
    q: '¿El bot puede mostrar propiedades disponibles al cliente?',
    a: 'Sí. Lo entrenamos con tu inventario de propiedades. Puede responder preguntas básicas, filtrar por zona y presupuesto y enviar fichas de inmuebles directamente por WhatsApp antes de asignar al asesor.',
  },
  {
    q: '¿Puedo tener pipelines separados para venta y arriendo?',
    a: 'Sí, y también para proyectos en planos si los manejas. Cada pipeline tiene sus propias etapas, sus propias automatizaciones y sus propios reportes. El gerente tiene vista global de todos.',
  },
  {
    q: '¿Cómo funciona el agendamiento de visitas con recordatorios?',
    a: 'Cuando el asesor agenda una visita desde el CRM, el sistema envía automáticamente una confirmación al cliente, un recordatorio 24 horas antes y un mensaje el día de la cita con la dirección y el nombre del asesor. Las inasistencias bajan significativamente.',
  },
  {
    q: '¿Qué pasa si el mismo cliente llega por varios canales a la vez?',
    a: 'El sistema detecta duplicados automáticamente por número de teléfono o email. Unifica las conversaciones en un solo registro para que el asesor tenga una visión completa del cliente sin confusiones.',
  },
  {
    q: '¿Cuánto tiempo tarda la implementación?',
    a: 'Entre 2 y 3 semanas. Configuramos los canales, integramos los portales, creamos los pipelines de venta y arriendo, configuramos los recordatorios de visita y capacitamos a tu equipo. Todo con soporte en español.',
  },
];

const Inmobiliarias = () => {
  useSEO({
    title: "CRM para Inmobiliarias — Sixteam.pro | Duplica tus Cierres",
    description: "CRM para inmobiliarias con pipeline de venta y arriendo, integración Metrocuadrado y Fincaraíz, recordatorios de visita automáticos. Colombia y Latinoamérica.",
    canonical: "https://sixteam.pro/industrias/inmobiliarias",
    ogUrl: "https://sixteam.pro/industrias/inmobiliarias",
  });

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

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
                <Building2 className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Para inmobiliarias</span>
              </div>

              <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                Duplica tus cierres sin{' '}
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                  perder un solo lead
                </span>
              </h1>

              <p className="text-[#e0e0e0] text-lg leading-relaxed mb-4">
                CRM, automatizaciones e IA para inmobiliarias que quieren responder antes que la competencia, reducir inasistencias a visitas y gestionar 3 veces más propiedades sin contratar más asesores.
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8 text-sm text-[#e0e0e0]">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#00bfa5]" />
                  <span>+45% de visitas que se convierten en oferta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00bfa5]" />
                  <span>Respuesta al lead: de 1h a 2 minutos</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#00bfa5]" />
                  <span>Doble de cierres en 6 meses</span>
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
                  <span>Integración con Metrocuadrado y Fincaraíz</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                  <span>Sin contratos anuales</span>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ChatWidget
                pageContext={PAGE_CONTEXT}
                initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu inmobiliaria a no perder más leads?"
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
              Por qué las inmobiliarias pierden negocios cada semana
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Estos son los puntos exactos donde se escapan los cierres — y tienen solución.
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
              Cada problema tiene una{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                solución concreta
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              No vendemos software genérico. Resolvemos los puntos exactos donde tu inmobiliaria pierde dinero hoy.
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
              Una plataforma hecha para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                vender y arrendar más
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Cada módulo se configura para el proceso real de una inmobiliaria colombiana — no un CRM genérico adaptado.
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
                    Inmobiliaria en Bogotá: cierres duplicados en 6 meses sin contratar nuevos asesores
                  </h2>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
                    Esta inmobiliaria con 6 asesores recibía leads de Metrocuadrado, Fincaraíz y Meta Ads, pero los respondía tarde y sin seguimiento sistemático. Las visitas fallidas eran el 45% del total y el gerente no tenía visibilidad del pipeline.
                  </p>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed mb-6">
                    Implementamos la bandeja centralizada con integración a portales, el agente IA para calificación, recordatorios automáticos de visita y el seguimiento post-visita. En 6 meses, los cierres mensuales se duplicaron sin agregar personal.
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
                    { num: '2×', label: 'Cierres mensuales en 6 meses', icon: TrendingUp },
                    { num: '-80%', label: 'Tiempo de respuesta al lead', icon: Clock },
                    { num: '+45%', label: 'Visitas que se convierten en oferta', icon: Calendar },
                    { num: '3×', label: 'Más propiedades gestionadas por asesor', icon: Building2 },
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
                  <span className="font-poppins font-black text-white text-4xl">$215</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">+ $360 USD implementación única</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Bandeja omnicanal (WhatsApp, portales, IG, email)',
                  'Agente IA 24/7 para calificación de leads',
                  'Captura de tipo, zona y presupuesto',
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
                  <span className="font-poppins font-black text-white text-4xl">$288</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">+ $720 USD implementación única</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'Todo lo de Inbox + IA',
                  'Pipelines separados: venta y arriendo',
                  'Agendamiento con recordatorios de visita',
                  'Seguimiento post-visita automático',
                  'Integración Metrocuadrado y Fincaraíz',
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
                  <span className="font-poppins font-black text-white text-3xl">$720k</span>
                  <span className="text-[#e0e0e0] text-sm mb-1">COP/mes</span>
                </div>
                <p className="text-[#e0e0e0]/60 text-xs">Desde · operación mensual incluida</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  'CRM operado por el equipo Sixteam',
                  'Mejoras proactivas cada mes',
                  'SLA de respuesta 4 horas',
                  'Reunión estratégica mensual',
                  'Reportes ejecutivos de cierre',
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
              Así funciona para tu inmobiliaria
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Del primer mensaje al contrato firmado — con el menor esfuerzo manual posible.
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
              Inmobiliarias que ya transformaron su operación
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
              { num: '-80%', label: 'Tiempo de respuesta al lead inicial', icon: Clock },
              { num: '+45%', label: 'Visitas que se convierten en oferta', icon: Calendar },
              { num: '24/7', label: 'Calificación de leads sin intervención humana', icon: Bot },
              { num: '3×', label: 'Más propiedades gestionadas por asesor', icon: Users },
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
              ¿Listo para no perder más negocios?
            </h2>
            <p className="text-[#e0e0e0] text-lg mb-10 max-w-2xl mx-auto">
              Agenda una demo de 30 minutos. Te mostramos la plataforma configurada para inmobiliarias y te decimos exactamente qué necesitas para empezar a cerrar más esta semana.
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
