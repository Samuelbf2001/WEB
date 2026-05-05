import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  Star, AlertCircle, ChevronDown, ChevronUp, Mail,
  Building2, Key, FileText, Quote, Send, ShieldCheck,
  Sparkles, Target, RefreshCw, MapPin, DollarSign,
  Home, PhoneCall, Eye, Layers, Bell, Search
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import LogoSlider from '@/components/LogoSlider';
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

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $180 USD/mes + $360 USD implementación. Bandeja omnicanal, IA 24/7, captura de tipo/zona/presupuesto, 2 usuarios
- CRM Sixteam Core: $240 USD/mes + $720 USD implementación. Todo lo anterior + pipelines venta/arriendo, agendamiento con recordatorios, seguimiento automático, campañas broadcast, reportes, 3 usuarios
- RevOps Externo: desde $720.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica

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
    icon: Clock,
    title: 'Leads de Metrocuadrado que nadie responde a tiempo',
    desc: 'El formulario llega, el asesor lo ve 2 horas después. Para entonces el cliente ya encontró otra inmobiliaria que le respondió primero. En finca raíz, el 78% elige quien responde primero.',
  },
  {
    icon: Send,
    title: 'Whatsapps en celulares personales que el gerente no ve',
    desc: 'Cada asesor recibe consultas en su propio número. Si alguien sale de vacaciones o renuncia, todos esos leads desaparecen con él — sin que la empresa sepa cuántos eran.',
  },
  {
    icon: PhoneCall,
    title: 'El mismo cliente llega 3 veces y nadie lo detecta',
    desc: 'Por portal, por Meta Ads y por WhatsApp directo. Sin deduplicación, tres asesores lo contactan a la vez. El cliente se siente hostigado y la oportunidad se pierde.',
  },
  {
    icon: Calendar,
    title: 'Visitas agendadas que el cliente no honra',
    desc: 'El asesor se desplaza al inmueble y el cliente no aparece. Sin confirmación automática ni recordatorio 24h antes, la tasa de inasistencia supera el 40% — tiempo y gasolina perdidos.',
  },
  {
    icon: Eye,
    title: 'El gerente no sabe en qué estado está ningún negocio',
    desc: 'Para saber si una promesa de compraventa avanzó, el gerente tiene que llamar a cada asesor. No hay pipeline visible — solo hojas de cálculo o notas sueltas.',
  },
  {
    icon: RefreshCw,
    title: 'Base de contactos que no se trabaja',
    desc: 'Cientos de personas que miraron propiedades hace 6 meses y no compraron. Sin reactivación automática, esa base vale cero — y cada mes empiezan de cero pagando más pauta.',
  },
];

const solutionPairs = [
  {
    pain: 'Lead de portal sin respuesta en la primera hora',
    solution: 'El agente IA responde en menos de 2 minutos: captura tipo de inmueble, zona y presupuesto. El asesor recibe el lead ya calificado — listo para proponer visita.',
    icon: Bot,
  },
  {
    pain: 'WhatsApps dispersos en celulares personales',
    solution: 'Una sola bandeja centralizada donde el gerente ve todas las conversaciones de todos los asesores en tiempo real. Los leads de quien se fue no se pierden.',
    icon: Inbox,
  },
  {
    pain: 'Visitas agendadas que el cliente no honra',
    solution: 'Confirmación inmediata al agendar, recordatorio 24h antes y mensaje el día de la cita con la dirección. La inasistencia baja drásticamente — menos viajes en vano.',
    icon: ShieldCheck,
  },
  {
    pain: 'Pipeline invisible para el gerente',
    solution: 'Dashboard en tiempo real: leads en cada etapa, visitas esta semana, ofertas pendientes y cierres proyectados por asesor y mes — sin llamar a nadie.',
    icon: BarChart3,
  },
];

const achievements = [
  { icon: TrendingUp, text: 'Duplicar cierres en 6 meses sin contratar más asesores' },
  { icon: Clock, text: 'Responder cada lead de portal en menos de 2 minutos, 24/7' },
  { icon: RefreshCw, text: 'Automatizar el 100% del seguimiento post-visita sin esfuerzo' },
  { icon: Inbox, text: 'Centralizar portales, WhatsApp, Instagram y email en una pantalla' },
  { icon: Users, text: 'Que cada asesor gestione 3× más propiedades sin trabajar más' },
  { icon: BarChart3, text: 'Ver en tiempo real qué canal y qué asesor cierra más' },
  { icon: Sparkles, text: 'Reactivar automáticamente leads fríos con nuevos inmuebles' },
  { icon: Target, text: 'Cero leads duplicados — deduplicación automática por teléfono y email' },
];

const testimonials = [
  {
    quote: 'Antes perdíamos el 60% de los leads de Metrocuadrado porque respondíamos tarde o el asesor estaba mostrando otro inmueble. Ahora el bot califica y asigna en minutos y nuestra tasa de visitas agendadas subió un 70%. En 6 meses duplicamos los cierres.',
    author: 'Andrés F.',
    role: 'Gerente comercial · Inmobiliaria en Bogotá',
    city: 'Bogotá, Colombia 🇨🇴',
    stars: 5,
    initial: 'AF',
  },
  {
    quote: 'El mayor impacto fue el seguimiento post-visita automático. Antes dependía de que el asesor se acordara de llamar. Ahora el sistema hace follow-up a las 24, 48 y 72 horas solo, y recuperamos negocios que creíamos perdidos.',
    author: 'Daniela P.',
    role: 'Directora · Inmobiliaria boutique en El Poblado',
    city: 'Medellín, Colombia 🇨🇴',
    stars: 5,
    initial: 'DP',
  },
  {
    quote: 'Como gerente no tenía visibilidad de nada. Cada asesor operaba como isla. Con Sixteam veo el pipeline completo en tiempo real y sé exactamente dónde está cada negocio sin llamar a nadie.',
    author: 'Ricardo T.',
    role: 'Propietario · Constructora e inmobiliaria',
    city: 'Barranquilla, Colombia 🇨🇴',
    stars: 5,
    initial: 'RT',
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

/* ─── City Map SVG ─── */
const CityMapSVG = () => (
  <svg viewBox="0 0 900 450" className="w-full h-full opacity-[0.15]" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid urbano */}
    {[...Array(10)].map((_, i) => (
      <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="450" stroke="#1d70a2" strokeWidth="0.8" opacity="0.5"/>
    ))}
    {[...Array(6)].map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 90} x2="900" y2={i * 90} stroke="#1d70a2" strokeWidth="0.8" opacity="0.5"/>
    ))}
    {/* Bloques de edificios */}
    {[
      [60, 60, 60, 120], [200, 40, 80, 140], [360, 80, 60, 100], [500, 50, 80, 130],
      [660, 70, 60, 110], [780, 55, 80, 125], [140, 220, 60, 90], [320, 200, 80, 110],
      [480, 230, 60, 90], [620, 210, 70, 100], [760, 220, 80, 110],
      [80, 330, 70, 90], [250, 320, 60, 100], [420, 340, 80, 80], [580, 330, 60, 90],
      [730, 340, 70, 80],
    ].map(([x, y, w, h], i) => (
      <rect key={i} x={x} y={y} width={w} height={h} fill="#1d70a2" opacity="0.3" rx="2"/>
    ))}
    {/* Pins de propiedades */}
    {[
      [150, 130], [420, 90], [690, 100], [300, 250], [560, 240], [820, 260], [200, 360],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="5" fill="#00bfa5" opacity="0.9"/>
        <circle cx={x} cy={y} r="10" fill="#00bfa5" opacity="0.15">
          <animate attributeName="r" values="5;16;5" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.2;0;0.2" dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite"/>
        </circle>
        {/* Pin shape */}
        <path d={`M${x} ${y - 14} C${x - 8} ${y - 14} ${x - 8} ${y - 4} ${x} ${y} C${x + 8} ${y - 4} ${x + 8} ${y - 14} ${x} ${y - 14} Z`}
          fill="#00bfa5" opacity="0.7"/>
        <circle cx={x} cy={y - 9} r="3" fill="#0a2342"/>
      </g>
    ))}
  </svg>
);

/* ─── Typewriter hook ─── */
const useTypewriter = (words: string[]) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return displayText;
};

const InmobiliariasV2 = () => {
  useSEO({
    title: "CRM para Inmobiliarias — Sixteam.pro | Duplica tus Cierres",
    description: "CRM para inmobiliarias con pipeline de venta y arriendo, integración Metrocuadrado y Fincaraíz, recordatorios de visita automáticos. Colombia y Latinoamérica.",
    canonical: "https://sixteam.pro/industrias/inmobiliarias",
    ogUrl: "https://sixteam.pro/industrias/inmobiliarias",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroWords = ['cierres', 'visitas', 'control', 'rentabilidad'];
  const displayText = useTypewriter(heroWords);

  useEffect(() => {
    const scriptId = 'sixteam-booking-script';
    if (document.getElementById(scriptId)) return;
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://web.sixteam.pro/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      const existing = document.getElementById(scriptId);
      if (existing) existing.remove();
    };
  }, []);

  const pipeline = [
    { label: 'Portal / Meta Ads / Web', icon: Globe },
    { label: 'IA califica el lead', icon: Bot },
    { label: 'Asesor agenda visita', icon: Calendar },
    { label: 'Seguimiento automático', icon: Zap },
    { label: 'Negocio cerrado', icon: Key },
  ];

  return (
    <div className="min-h-screen font-lato overflow-x-hidden" style={{ background: '#06080d' }}>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes buildingPulse {
          0% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-4px) scale(1.01); }
          100% { transform: translateY(0px) scale(1); }
        }
        @keyframes glowPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(0,191,165,0.2); }
          50% { box-shadow: 0 0 40px rgba(0,191,165,0.5); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scanLine {
          0% { top: 0%; opacity: 0.6; }
          100% { top: 100%; opacity: 0; }
        }
        .float-anim { animation: floatUp 4s ease-in-out infinite; }
        .building-anim { animation: buildingPulse 6s ease-in-out infinite; }
        .fade-slide { animation: fadeSlideUp 0.7s ease forwards; }
        .pipeline-connector {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #1d70a2, #00bfa5);
          position: relative;
          overflow: hidden;
        }
        .pipeline-connector::after {
          content: '';
          position: absolute;
          top: 0; left: -100%; width: 60%; height: 100%;
          background: linear-gradient(90deg, transparent, #fff 50%, transparent);
          animation: shimmer 2.5s linear infinite;
        }
      `}</style>

      <Header />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28 min-h-[92vh] flex items-center">
        {/* Background */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #040c18 0%, #071628 30%, #0a2342 60%, #0e2e55 100%)' }} />
        {/* City map */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-5xl mx-auto">
            <CityMapSVG />
          </div>
        </div>
        {/* Glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#1d70a2]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00bfa5]/8 rounded-full blur-3xl pointer-events-none" />
        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00bfa5] to-transparent" style={{ animation: 'scanLine 8s linear infinite' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Left — Copy */}
            <div className="fade-slide">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-7 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bfa5]"></span>
                </span>
                <span className="text-[#00bfa5] text-xs font-medium tracking-wider uppercase">Para inmobiliarias</span>
                <span className="w-px h-3 bg-[#00bfa5]/30" />
                <span className="text-[#e0e0e0]/70 text-xs">Colombia & LATAM</span>
              </div>

              {/* Headline con typewriter */}
              <div className="mb-6" style={{ minHeight: '11rem' }}>
                <h1 className="font-poppins font-black text-white leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                  Más{' '}
                  <span className="inline-block relative">
                    <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent whitespace-nowrap">
                      {displayText}
                    </span>
                    <span className="text-[#00bfa5] ml-0.5 animate-pulse">|</span>
                  </span>
                  {' '}para tu inmobiliaria
                  <br />
                  <span className="text-[#e0e0e0]/80" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 700 }}>sin perder un solo lead de portal</span>
                </h1>
              </div>

              <p className="text-[#e0e0e0]/80 text-lg leading-relaxed mb-7 max-w-lg">
                CRM, automatizaciones e IA para inmobiliarias que quieren responder antes que la competencia, reducir inasistencias a visitas y gestionar 3× más propiedades sin contratar más asesores.
              </p>

              {/* Micro-features */}
              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon: Zap, text: 'Respuesta automática al lead de portal en menos de 2 minutos' },
                  { icon: TrendingUp, text: '+45% de visitas que se convierten en oferta' },
                  { icon: Globe, text: 'Metrocuadrado, Fincaraíz, WhatsApp e Instagram en una pantalla' },
                  { icon: ShieldCheck, text: 'Visibilidad total del pipeline — sin llamar a los asesores' },
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#00bfa5]/15 flex items-center justify-center flex-shrink-0">
                      <f.icon className="w-3.5 h-3.5 text-[#00bfa5]" />
                    </div>
                    <span className="text-[#e0e0e0] text-sm">{f.text}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <button
                  onClick={() => document.getElementById('agenda-asesoria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-poppins font-bold text-base text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  style={{
                    background: 'linear-gradient(90deg, #1d70a2, #00bfa5)',
                    boxShadow: '0 4px 24px rgba(0,191,165,0.3)',
                  }}
                >
                  <Calendar className="w-5 h-5" />
                  Agenda tu asesoría gratis
                </button>
                <button
                  onClick={handleWA}
                  className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-poppins font-semibold text-base text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 text-[#25d366]" />
                  Hablar por WhatsApp
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[#e0e0e0]/60">
                {['✓ Sin contratos anuales', '✓ Implementación 2–3 semanas', '✓ Integración Metrocuadrado y Fincaraíz'].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right — Chat Widget */}
            <div className="relative">
              <div className="relative z-10">
                <ChatWidget
                  pageContext={PAGE_CONTEXT}
                  initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu inmobiliaria a no perder más leads?"
                  exampleQuestions={EXAMPLE_QUESTIONS}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#081c36] to-transparent" />
      </section>

      {/* ═══ STAT BAR — "Cuánto cuesta no tener sistema" ═══ */}
      <section className="py-10 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #071628, #0a2342)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00bfa5 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {[
              { num: '78%', label: 'de compradores elige la primera inmobiliaria que responde', icon: Clock },
              { num: '+40%', label: 'de visitas quedan sin honrar sin recordatorios automáticos', icon: Calendar },
              { num: '3×', label: 'leads duplicados promedio sin deduplicación activa', icon: Users },
              { num: '6h', label: 'promedio de respuesta a leads de portal sin automatización', icon: Bell },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <stat.icon className="w-5 h-5 text-[#00bfa5] mb-2 opacity-70" />
                <div className="font-poppins font-black text-[#00bfa5] text-3xl sm:text-4xl mb-1">{stat.num}</div>
                <p className="text-[#e0e0e0]/55 text-xs leading-snug max-w-[140px]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PAIN POINTS ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(232,80,50,0.04)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(232,80,50,0.06)', border: '1px solid rgba(232,80,50,0.15)' }}>
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-medium uppercase tracking-wider">¿Te suena familiar?</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Por qué las inmobiliarias pierden negocios{' '}
              <span className="text-red-400">cada semana</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Estos no son problemas genéricos — son exactamente lo que frena a las inmobiliarias en Colombia y LATAM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(232,80,50,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(232,80,50,0.18)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                }}
              >
                <div className="absolute top-4 right-5 font-poppins font-black text-5xl leading-none select-none"
                  style={{ color: 'rgba(232,80,50,0.08)' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: 'rgba(232,80,50,0.08)', border: '1px solid rgba(232,80,50,0.15)' }}>
                  <pain.icon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-poppins font-bold text-white text-sm mb-2 leading-snug">{pain.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION BEFORE/AFTER ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#111120' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top left, rgba(0,191,165,0.05) 0%, transparent 55%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(0,191,165,0.06)', border: '1px solid rgba(0,191,165,0.15)' }}>
              <Sparkles className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-xs font-medium uppercase tracking-wider">Cómo lo resolvemos</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Cada problema tiene una{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                solución concreta
              </span>
            </h2>
            <p className="text-[#e0e0e0]/60 text-base">No vendemos software genérico. Resolvemos los puntos exactos donde tu inmobiliaria pierde dinero hoy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {solutionPairs.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <div className="px-6 pt-5 pb-4 flex items-start gap-4"
                  style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: 'rgba(232,80,50,0.07)', border: '1px solid rgba(232,80,50,0.15)' }}>
                    <item.icon className="w-4 h-4 text-red-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-1.5" style={{ color: 'rgba(232,80,50,0.75)', fontFamily: 'Poppins' }}>Antes</span>
                    <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.pain}</p>
                  </div>
                </div>
                <div className="px-6 py-4 flex items-start gap-4"
                  style={{ background: 'rgba(0,191,165,0.06)' }}>
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: 'rgba(0,191,165,0.12)', border: '1px solid rgba(0,191,165,0.2)' }}>
                    <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest block mb-1.5 text-[#00bfa5]" style={{ fontFamily: 'Poppins', opacity: 0.75 }}>Con Sixteam</span>
                    <p className="text-sm font-medium leading-snug text-white">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — Pipeline Visual ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#06080d' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(29,112,162,0.08)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Así funciona para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                tu inmobiliaria
              </span>
            </h2>
            <p className="text-[#e0e0e0]/70 text-base">Del primer clic en el anuncio al negocio cerrado — todo automatizado.</p>
          </div>

          {/* Pipeline visual */}
          <div className="max-w-5xl mx-auto mb-16">
            {/* Desktop: horizontal */}
            <div className="hidden sm:flex items-center justify-between gap-0 mb-12">
              {pipeline.map((step, i) => (
                <div key={i} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-shrink-0 group cursor-default">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: 'linear-gradient(135deg, rgba(29,112,162,0.25), rgba(10,35,66,0.9))',
                        borderColor: 'rgba(0,191,165,0.4)',
                        boxShadow: '0 4px 20px rgba(0,191,165,0.1)',
                      }}
                    >
                      <step.icon className="w-6 h-6 text-[#00bfa5]" />
                    </div>
                    <p className="mt-2.5 text-xs text-center text-[#e0e0e0]/80 font-medium max-w-[80px] leading-tight">{step.label}</p>
                  </div>
                  {i < pipeline.length - 1 && (
                    <div className="pipeline-connector mx-2" />
                  )}
                </div>
              ))}
            </div>

            {/* Mobile: vertical */}
            <div className="sm:hidden space-y-0 mb-12">
              {pipeline.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{ background: 'linear-gradient(135deg, rgba(29,112,162,0.25), rgba(10,35,66,0.9))', borderColor: 'rgba(0,191,165,0.4)' }}>
                      <step.icon className="w-5 h-5 text-[#00bfa5]" />
                    </div>
                    {i < pipeline.length - 1 && (
                      <div className="w-px h-10 bg-gradient-to-b from-[#00bfa5] to-[#1d70a2]/30" />
                    )}
                  </div>
                  <div className="pt-2.5 pb-8">
                    <p className="text-white text-sm font-poppins font-semibold">{step.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Step cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  num: '01',
                  icon: Globe,
                  title: 'Lead llega por cualquier canal',
                  desc: 'Metrocuadrado, Fincaraíz, Meta Ads, WhatsApp o tu web. Todo llega a una sola bandeja centralizada en tiempo real.',
                },
                {
                  num: '02',
                  icon: Bot,
                  title: 'La IA califica en minutos',
                  desc: 'Captura tipo de inmueble, zona, presupuesto y si es compra o arriendo. Asigna al asesor correcto antes de que pase 1 minuto.',
                },
                {
                  num: '03',
                  icon: Calendar,
                  title: 'Asesor agenda — el CRM hace el seguimiento',
                  desc: 'Recordatorio al agendar, recordatorio 24h antes, mensaje el día de la visita. Follow-up automático a las 24, 48 y 72h después.',
                },
                {
                  num: '04',
                  icon: Star,
                  title: 'Cierre, referidos y reactivación',
                  desc: 'Post-cierre, el sistema activa campañas de referidos y programa reactivación cuando el cliente necesite un nuevo inmueble.',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-[#1d70a2]/20 hover:border-[#00bfa5]/35 transition-all duration-300 group"
                  style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 100%)' }}
                >
                  <div className="p-5">
                    <div className="text-[#00bfa5]/20 font-poppins font-black text-4xl leading-none mb-3 group-hover:text-[#00bfa5]/35 transition-colors duration-300">
                      {step.num}
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#00bfa5]/10 flex items-center justify-center mb-3">
                      <step.icon className="w-4 h-4 text-[#00bfa5]" />
                    </div>
                    <h3 className="font-poppins font-bold text-white text-sm mb-2 leading-snug">{step.title}</h3>
                    <p className="text-[#e0e0e0]/60 text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA STRIP ═══ */}
      <section className="py-12 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d2d52, #1d70a2 50%, #0d2d52)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00bfa5 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div>
              <p className="font-poppins font-bold text-white text-lg sm:text-xl mb-1">
                ¿Listo para no perder más negocios de portal?
              </p>
              <p className="text-[#e0e0e0]/70 text-sm">Habla con un especialista hoy mismo. Sin compromiso.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => document.getElementById('agenda-asesoria')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-poppins font-bold text-sm text-white transition-all duration-300 hover:scale-[1.03]"
                style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 20px rgba(0,191,165,0.3)' }}
              >
                <Calendar className="w-4 h-4" />
                Agenda asesoría gratis
              </button>
              <button
                onClick={handleWA}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-poppins font-semibold text-sm text-white border border-white/25 bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACHIEVEMENTS ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.025) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/15 border border-[#1d70a2]/30 rounded-full mb-5">
              <Target className="w-4 h-4 text-[#1d70a2]" />
              <span className="text-[#1d70a2] text-xs font-medium uppercase tracking-wider">Lo que puedes lograr</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Resultados reales para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                inmobiliarias
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="group rounded-2xl p-5 border border-[#1d70a2]/20 hover:border-[#00bfa5]/40 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 100%)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1d70a2]/20 to-[#00bfa5]/10 border border-[#1d70a2]/30 flex items-center justify-center mb-4 group-hover:border-[#00bfa5]/50 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-[#00bfa5]" />
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#111120' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(29,112,162,0.08) 0%, transparent 60%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Lo que dicen las{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                inmobiliarias que lo usan
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-[#1d70a2]/25 hover:border-[#1d70a2]/50 transition-all duration-300 flex flex-col"
                style={{ background: 'rgba(29,112,162,0.08)', backdropFilter: 'blur(16px)' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#00bfa5] text-[#00bfa5]" />
                  ))}
                </div>
                <blockquote className="text-[#e0e0e0]/85 text-sm leading-relaxed flex-1 mb-5 italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 border-t border-[#1d70a2]/20 pt-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1d70a2] to-[#00bfa5] flex items-center justify-center font-poppins font-bold text-white text-xs flex-shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-white text-sm">{t.author}</div>
                    <div className="text-[#e0e0e0]/60 text-xs">{t.role}</div>
                    <div className="text-[#00bfa5]/70 text-xs mt-0.5">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LOGO SLIDER ═══ */}
      <LogoSlider />

      {/* ═══ PRICING ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#06080d' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom, rgba(0,191,165,0.05) 0%, transparent 60%)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/15 border border-[#1d70a2]/30 rounded-full mb-5">
              <DollarSign className="w-4 h-4 text-[#1d70a2]" />
              <span className="text-[#1d70a2] text-xs font-medium uppercase tracking-wider">Planes y precios</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Empieza con el plan que{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                necesitas hoy
              </span>
            </h2>
            <p className="text-[#e0e0e0]/70">Sin contratos anuales · Sin costos ocultos · Creces de plan cuando quieras</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-6">
            {/* Plan 1 — Inbox + IA */}
            <div className="rounded-2xl p-6 border border-[#1d70a2]/30 hover:border-[#1d70a2]/55 transition-all duration-300 flex flex-col"
              style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 100%)' }}>
              <div className="mb-5">
                <span className="text-[#1d70a2] text-[10px] font-bold uppercase tracking-widest">Inbox + IA</span>
                <div className="flex items-end gap-1.5 mt-2 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$180</span>
                  <span className="text-[#e0e0e0]/60 text-sm mb-1.5">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/40 text-xs">+ $300 USD implementación · 2 usuarios</p>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {[
                  'Bandeja omnicanal (WhatsApp, portales, IG, email)',
                  'Agente IA 24/7 para calificación de leads',
                  'Captura de tipo de inmueble, zona y presupuesto',
                  'Asignación automática al asesor correcto',
                  'Widget de chat en tu sitio web',
                  'Soporte en español',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#e0e0e0]/75">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00bfa5] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('agenda-asesoria')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-xl border border-[#1d70a2] bg-transparent text-white font-poppins font-semibold text-sm hover:bg-[#1d70a2]/20 transition-all duration-300"
              >
                Agenda tu asesoría
              </button>
            </div>

            {/* Plan 2 — CRM Core */}
            <div className="rounded-2xl p-6 border border-[#00bfa5]/40 hover:border-[#00bfa5]/70 transition-all duration-300 flex flex-col relative"
              style={{ background: 'linear-gradient(135deg, rgba(0,191,165,0.08) 0%, #0a2342 100%)' }}>
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="bg-[#00bfa5] text-[#0a2342] text-[10px] font-poppins font-black px-4 py-1.5 rounded-full tracking-wider uppercase">
                  ★ Más popular
                </span>
              </div>
              <div className="mb-5 mt-1">
                <span className="text-[#00bfa5] text-[10px] font-bold uppercase tracking-widest">CRM Core</span>
                <div className="flex items-end gap-1.5 mt-2 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$240</span>
                  <span className="text-[#e0e0e0]/60 text-sm mb-1.5">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/40 text-xs">+ $600 USD implementación · 3 usuarios</p>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {[
                  'Todo lo de Inbox + IA incluido',
                  'Pipelines separados: venta y arriendo',
                  'Agendamiento con recordatorios automáticos de visita',
                  'Seguimiento post-visita a las 24, 48 y 72 horas',
                  'Integración Metrocuadrado y Fincaraíz',
                  'Deduplicación automática de leads',
                  'Dashboard ejecutivo por asesor y canal',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-[#e0e0e0]/80">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00bfa5] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => document.getElementById('agenda-asesoria')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 rounded-xl font-poppins font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 16px rgba(0,191,165,0.25)' }}
              >
                Agenda tu asesoría
              </button>
            </div>
          </div>

          {/* RevOps card */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl p-6 sm:p-7 border border-[#00bfa5]/30 hover:border-[#00bfa5]/55 transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{ background: 'linear-gradient(90deg, #0d2d52 0%, #0a2342 50%, #0d2d52 100%)' }}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bfa5]" />
                  </span>
                  <span className="text-[#00bfa5] text-[10px] font-bold uppercase tracking-widest">Servicio Profesional</span>
                </div>
                <h3 className="font-poppins font-bold text-white text-xl mb-2">Servicio de Operaciones RevOps</h3>
                <p className="text-[#e0e0e0]/70 text-sm leading-relaxed max-w-lg">
                  Nuestro equipo opera tu CRM mensualmente: optimizaciones proactivas, reportes ejecutivos, SLA 4h y reunión estratégica mensual. Compatible con cualquier plan.
                </p>
              </div>
              <div className="flex flex-col items-start sm:items-end gap-3 flex-shrink-0">
                <div>
                  <p className="text-white font-poppins font-black text-2xl">$720k COP</p>
                  <p className="text-[#e0e0e0]/45 text-xs sm:text-right">desde / mes</p>
                </div>
                <button
                  onClick={() => document.getElementById('agenda-asesoria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-6 py-2.5 rounded-xl border border-[#00bfa5] text-[#00bfa5] font-poppins font-semibold text-sm hover:bg-[#00bfa5]/10 transition-all duration-300 whitespace-nowrap"
                >
                  Agenda tu asesoría
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-[#e0e0e0]/50 text-sm mt-8">
            ¿No sabes cuál elegir?{' '}
            <Link to="/radar/diagnostico-gratis" className="text-[#00bfa5] hover:underline font-medium">
              Empieza con un diagnóstico gratuito →
            </Link>
          </p>
        </div>
      </section>

      {/* ═══ CALENDARIO ═══ */}
      <section id="agenda-asesoria" className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #060f1e 0%, #0a2342 45%, #112a4a 75%, #0a2342 100%)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,165,0.07),transparent_65%)]" />
        <div className="absolute top-8 right-8 opacity-5 float-anim">
          <Building2 className="w-24 h-24 text-[#00bfa5]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-7 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bfa5]" />
              </span>
              <span className="text-[#00bfa5] text-sm font-medium">Asesorías disponibles esta semana</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-5" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Agenda tu asesoría{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                gratuita
              </span>
            </h2>
            <p className="text-[#e0e0e0]/70 text-lg max-w-xl mx-auto">
              30 minutos, sin compromiso. Te mostramos la plataforma configurada para inmobiliarias y resolvemos tus preguntas.
            </p>
            <button
              onClick={handleWA}
              className="inline-flex items-center gap-2.5 mt-6 px-7 py-3.5 rounded-xl font-poppins font-bold text-base text-white border border-[#25d366]/40 bg-[#25d366]/10 hover:bg-[#25d366]/20 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 text-[#25d366]" />
              Prefiero hablar por WhatsApp primero
            </button>
          </div>
          <div className="calendar-embed-wrapper">
            <iframe
              src="https://web.sixteam.pro/widget/booking/UFdsZhBQURUYkKpV0GEX"
              style={{ width: '100%', border: 'none', overflow: 'hidden', display: 'block' }}
              id="UFdsZhBQURUYkKpV0GEX_inmobiliarias"
              title="Agenda tu asesoría con Sixteam.pro — Inmobiliarias"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-8 text-[#e0e0e0]/45 text-sm">
            {['Sin compromiso', 'Sin tarjeta de crédito', 'Respuesta en menos de 2 horas'].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#00bfa5]/60" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0a2342 0%, #081c36 50%, #050e1a 100%)' }} />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #00bfa5 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-48 bg-[#00bfa5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/15 border border-[#1d70a2]/30 rounded-full mb-5">
              <MessageCircle className="w-4 h-4 text-[#1d70a2]" />
              <span className="text-[#1d70a2] text-xs font-medium uppercase tracking-wider">Resolvemos tus dudas</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
              Preguntas{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                frecuentes
              </span>
            </h2>
            <p className="text-[#e0e0e0]/55">Todo lo que necesitas saber antes de empezar.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-2.5">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border transition-all duration-300"
                style={{
                  background: openFaq === i
                    ? 'linear-gradient(135deg, rgba(29,112,162,0.18), rgba(10,35,66,0.95))'
                    : 'linear-gradient(135deg, rgba(13,45,82,0.7), rgba(10,35,66,0.9))',
                  borderColor: openFaq === i ? 'rgba(0,191,165,0.45)' : 'rgba(29,112,162,0.18)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left gap-4"
                >
                  <span className="font-poppins font-semibold text-white text-sm sm:text-base leading-snug">{faq.q}</span>
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      background: openFaq === i ? 'rgba(0,191,165,0.2)' : 'rgba(29,112,162,0.15)',
                      border: `1px solid ${openFaq === i ? 'rgba(0,191,165,0.4)' : 'rgba(29,112,162,0.25)'}`,
                    }}
                  >
                    {openFaq === i
                      ? <ChevronUp className="w-4 h-4 text-[#00bfa5]" />
                      : <ChevronDown className="w-4 h-4 text-[#e0e0e0]/50" />
                    }
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 sm:px-6 pb-6 pt-0">
                    <div className="w-8 h-px bg-gradient-to-r from-[#00bfa5] to-transparent mb-3" />
                    <p className="text-[#e0e0e0]/75 text-sm leading-relaxed font-lato">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="max-w-3xl mx-auto mt-12 text-center">
            <p className="text-[#e0e0e0]/50 text-sm mb-5">¿Tienes otra pregunta? Hablemos directamente.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => document.getElementById('agenda-asesoria')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-poppins font-bold text-sm text-white transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 20px rgba(0,191,165,0.2)' }}
              >
                <Calendar className="w-4 h-4" />
                Agenda asesoría gratuita
              </button>
              <button
                onClick={handleWA}
                className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-poppins font-semibold text-sm text-white transition-all duration-300"
                style={{ background: 'rgba(37,211,102,0.1)', border: '1px solid rgba(37,211,102,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(37,211,102,0.18)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(37,211,102,0.1)'}
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                Hablar por WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InmobiliariasV2;
