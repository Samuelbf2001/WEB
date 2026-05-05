import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, CheckCircle, ArrowRight, Bot, BarChart3,
  Inbox, Users, Zap, Globe, Calendar, TrendingUp, Clock,
  Star, AlertCircle, ChevronDown, ChevronUp, Mail,
  Plane, Package, RefreshCw, Target, Quote, Send, ShieldCheck,
  PhoneCall, Sparkles, DollarSign, MapPin, Compass, Navigation
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatWidget from '@/components/ChatWidget';
import LogoSlider from '@/components/LogoSlider';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const PAGE_CONTEXT = `Estás en la landing page de Sixteam.pro especializada para agencias de viaje.
Página: /industrias/agencias-de-viaje

PROPUESTA DE VALOR: Ayudamos a agencias de viaje a escalar sus ventas, organizar su equipo y tomar el control de cada oportunidad con CRM, automatizaciones e IA — sin necesidad de contratar más personal.

PROBLEMAS QUE RESOLVEMOS (pain points):
- Cotizaciones manuales lentas: el cliente pide un paquete y la agencia tarda horas o días en responder, perdiendo la oportunidad frente a competidores más rápidos
- Sin seguimiento post-cotización: se envía la cotización pero si el cliente no responde nadie hace follow-up a las 24h ni 72h
- Leads perdidos en canales dispersos: WhatsApp personal, correo, DMs de Instagram y llamadas sin centralizar — alguno siempre se pierde
- Temporada alta caótica: en diciembre y semana santa el equipo se ahoga, la calidad baja y se pierden reservas justo cuando más clientes hay
- Sin historial del viajero: si el cliente llama de nuevo, el asesor tiene que preguntarle todo desde cero — destinos anteriores, presupuesto, preferencias
- Clientes que no regresan: una vez el cliente viajó, no hay proceso de reactivación para la próxima temporada

SOLUCIONES / FUNCIONALIDADES:
- Bandeja omnicanal unificada: WhatsApp, Instagram, Facebook, email y web en una sola pantalla
- Agente IA 24/7: responde rápidamente, captura destino/fechas/viajeros y asigna al asesor correcto
- Pipeline de reservas visual: Consulta → Cotización → Seguimiento → Reserva → Pago
- Automatizaciones de seguimiento: follow-up automático a las 24h, 48h y 72h post-cotización
- Historial del viajero: CRM con todos los viajes, preferencias y conversaciones anteriores
- Campañas de reactivación: email masivo, WhatsApp broadcast y SMS coordinados
- Reportes de conversión por canal, asesor y destino

CÓMO FUNCIONA (4 pasos):
1. Lead entra por cualquier canal (WhatsApp, portal, web, Meta Ads)
2. IA responde rápidamente, captura info y asigna al asesor correcto
3. Asesor cotiza con seguimiento automático — nunca más un lead olvidado
4. Post-viaje: encuesta de satisfacción y reactivación para próxima temporada

PLANES Y PRECIOS:
- Sixteam Inbox + IA: $180 USD/mes + $300 USD implementación. Incluye bandeja omnicanal, IA 24/7, captura de datos de viaje, 2 usuarios
- CRM Sixteam.pro Core: $240 USD/mes + $600 USD implementación, 3 usuarios. CRM completo: pipelines, workflows, smart lists, reportes por asesor.
- CRM Sixteam.pro Growth: $360 USD/mes + $960 USD implementación, 5 usuarios. Plataforma completa: CRM + marketing + automatización. Incluye calendarios, funnels, email marketing, social planner, blog SEO, reputation management, workflows
- Servicio RevOps: desde $720.000 COP/mes. Operación mensual del CRM, mejoras proactivas, SLA 4 horas, reunión mensual estratégica. Compatible con cualquier plan.

RESULTADOS ESPERADOS: mejora significativa en tasa de conversión de cotización a reserva, reducción drástica del tiempo de respuesta al lead, multiplicar leads atendidos por asesor sin aumentar equipo.

IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español.`;

const EXAMPLE_QUESTIONS = [
  '¿Puedo conectar mi WhatsApp actual?',
  '¿El bot puede cotizar destinos?',
  '¿Cuánto cuesta implementar el CRM?',
  '¿Funciona en temporada alta?',
];

const WA_URL = 'https://wa.me/+573004188522?text=Hola%2C%20soy%20de%20una%20agencia%20de%20viajes%20y%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ayudarme%20a%20automatizar%20mis%20reservas';

const handleWA = () => window.open(WA_URL, '_blank');

const painPoints = [
  {
    icon: Clock,
    title: 'Cotizaciones que tardan horas — o días',
    desc: 'El cliente pregunta por Cartagena para 4 personas en diciembre. Tu asesor tarda 3–4 horas en armar la propuesta. Para entonces, el cliente encontró una respuesta más rápida.',
  },
  {
    icon: Send,
    title: 'Cotización enviada... y nadie hace seguimiento',
    desc: 'Envías el paquete por WhatsApp y el cliente queda en "visto". Sin follow-up automático a las 24h y 72h, ese lead se enfría y el negocio se pierde.',
  },
  {
    icon: PhoneCall,
    title: 'Leads dispersos en 5 canales distintos',
    desc: 'Cada asesor recibe consultas en su WhatsApp personal, en el correo y en los DMs de Instagram. Sin centralizar, algún mensaje siempre queda sin responder.',
  },
  {
    icon: Zap,
    title: 'Temporada alta caótica sin automatización',
    desc: 'En diciembre y semana santa entran 5 veces más consultas. El equipo se ahoga, la calidad baja — justo cuando más clientes están listos para comprar.',
  },
  {
    icon: Package,
    title: 'Sin historial: cada cliente es un desconocido',
    desc: 'El cliente que viajó a San Andrés el año pasado llama de nuevo. Tu asesor le pregunta todo desde cero. Una mala experiencia que te hace perder recurrencia.',
  },
  {
    icon: RefreshCw,
    title: 'Clientes que viajan una vez y no regresan',
    desc: 'Tienes cientos de viajeros en tu base que no vuelven porque nadie los contacta para la próxima temporada. Cada año empiezas de cero.',
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

const achievements = [
  { icon: TrendingUp, text: 'Triplicar tu tasa de cierre de cotizaciones sin contratar más personal' },
  { icon: Clock, text: 'Responder a cada lead en minutos, 24/7, sin depender de un asesor disponible' },
  { icon: RefreshCw, text: 'Automatizar el 100% de tus seguimientos post-cotización sin esfuerzo manual' },
  { icon: Inbox, text: 'Centralizar todos tus canales (WhatsApp, IG, email, web) en una sola pantalla' },
  { icon: Users, text: 'Que cada asesor maneje 3× más clientes sin trabajar más horas' },
  { icon: BarChart3, text: 'Saber exactamente qué canal y qué asesor vende más con reportes claros' },
  { icon: Sparkles, text: 'Reactivar clientes anteriores por temporada de forma automática' },
  { icon: Target, text: 'Tener un pipeline visual donde ninguna oportunidad se pierda' },
];

const testimonials = [
  {
    quote: 'En temporada de Semana Santa recibíamos más de 200 mensajes diarios y nos desbordábamos. Con Sixteam implementamos el bot de cotización automática y en 3 meses pasamos del 19% al 54% de tasa de cierre. Ahora el equipo solo atiende a quien ya está listo para comprar.',
    author: 'Marcela Ríos',
    role: 'Directora Comercial · Viajes Ríos Tours',
    city: 'Medellín, Colombia 🇨🇴',
    stars: 5,
    initial: 'MR',
  },
  {
    quote: 'Mandaba la cotización y si el cliente no respondía en 24 horas, el negocio se enfriaba. Ahora el sistema hace seguimiento automático por WhatsApp durante 7 días y yo simplemente cierro los que ya están calientes. Aumenté mis ventas un 38% sin contratar a nadie más.',
    author: 'Juan Pablo Vargas',
    role: 'Propietario · Experiencias Colombia Travel',
    city: 'Bogotá, Colombia 🇨🇴',
    stars: 5,
    initial: 'JP',
  },
  {
    quote: 'Manejamos paquetes a Cartagena, Cancún y Europa desde Santiago y coordinar todo por WhatsApp era un caos. Sixteam nos dio visibilidad total: cada cotización, cada cliente, cada asesor en un solo lugar. Nuestro tiempo de respuesta bajó de 6 horas a menos de 30 minutos.',
    author: 'Camila Fuentes',
    role: 'CEO · Sur Viajes Premium',
    city: 'Santiago, Chile 🇨🇱',
    stars: 5,
    initial: 'CF',
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

/* ─── SVG Components ─── */

const WorldMapSVG = () => (
  <svg viewBox="0 0 900 450" className="w-full h-full opacity-20" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Simplified continents */}
    {/* North America */}
    <path d="M120 80 L180 60 L220 75 L260 70 L280 90 L270 120 L240 145 L200 160 L170 180 L140 200 L110 195 L90 175 L95 140 L105 110 Z" fill="#1d70a2" opacity="0.5"/>
    {/* South America */}
    <path d="M190 220 L230 210 L260 230 L265 280 L250 340 L225 370 L200 360 L175 330 L165 280 L175 250 Z" fill="#1d70a2" opacity="0.5"/>
    {/* Europe */}
    <path d="M390 60 L430 55 L460 65 L465 90 L440 105 L420 100 L395 85 Z" fill="#1d70a2" opacity="0.5"/>
    {/* Africa */}
    <path d="M390 130 L440 120 L470 140 L475 200 L460 270 L430 310 L400 300 L375 260 L370 200 L375 160 Z" fill="#1d70a2" opacity="0.5"/>
    {/* Asia */}
    <path d="M480 55 L580 45 L660 60 L700 90 L720 130 L700 160 L650 175 L580 170 L520 150 L490 120 L475 90 Z" fill="#1d70a2" opacity="0.5"/>
    {/* Australia */}
    <path d="M650 260 L720 250 L755 275 L750 320 L715 340 L670 330 L640 305 L638 275 Z" fill="#1d70a2" opacity="0.5"/>
    {/* Grid lines */}
    {[...Array(9)].map((_, i) => (
      <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="450" stroke="#1d70a2" strokeWidth="0.5" opacity="0.3"/>
    ))}
    {[...Array(5)].map((_, i) => (
      <line key={`h${i}`} x1="0" y1={i * 90} x2="900" y2={i * 90} stroke="#1d70a2" strokeWidth="0.5" opacity="0.3"/>
    ))}
    {/* Flight path curves */}
    <path d="M155 130 Q320 40 440 80" stroke="#00bfa5" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.7"/>
    <path d="M440 80 Q560 50 680 100" stroke="#00bfa5" strokeWidth="1.5" fill="none" strokeDasharray="4 3" opacity="0.7"/>
    <path d="M200 240 Q350 180 440 80" stroke="#00bfa5" strokeWidth="1" fill="none" strokeDasharray="4 3" opacity="0.5"/>
    <path d="M680 100 Q700 200 700 290" stroke="#00bfa5" strokeWidth="1" fill="none" strokeDasharray="4 3" opacity="0.5"/>
    {/* Destination dots */}
    {[
      [155, 130], [440, 80], [680, 100], [200, 240], [700, 290], [210, 130]
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="4" fill="#00bfa5" opacity="0.9"/>
        <circle cx={x} cy={y} r="8" fill="#00bfa5" opacity="0.2">
          <animate attributeName="r" values="4;12;4" dur={`${2 + i * 0.4}s`} repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.3;0;0.3" dur={`${2 + i * 0.4}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
  </svg>
);

const NeuralNetSVG = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Nodes */}
    {[
      [40, 150], [120, 60], [120, 150], [120, 240],
      [240, 40], [240, 120], [240, 200], [240, 270],
      [340, 80], [340, 180],
    ].map(([x, y], i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="6" fill="#00bfa5" opacity="0.8">
          <animate attributeName="opacity" values="0.5;1;0.5" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
        </circle>
        <circle cx={x} cy={y} r="12" fill="#00bfa5" opacity="0.1">
          <animate attributeName="r" values="8;16;8" dur={`${1.5 + i * 0.3}s`} repeatCount="indefinite"/>
        </circle>
      </g>
    ))}
    {/* Connections */}
    {[
      [[40,150],[120,60]], [[40,150],[120,150]], [[40,150],[120,240]],
      [[120,60],[240,40]], [[120,60],[240,120]],
      [[120,150],[240,120]], [[120,150],[240,200]],
      [[120,240],[240,200]], [[120,240],[240,270]],
      [[240,40],[340,80]], [[240,120],[340,80]], [[240,120],[340,180]],
      [[240,200],[340,180]], [[240,270],[340,180]],
    ].map(([[x1,y1],[x2,y2]], i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1d70a2" strokeWidth="1" opacity="0.4"/>
    ))}
  </svg>
);

const PlaneSVG = () => (
  <svg viewBox="0 0 64 64" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M56 20L8 32l14 6 4 14 8-10 14 6 8-28z" fill="#00bfa5" opacity="0.9"/>
    <path d="M22 38l-6 2 2 6" stroke="#0a2342" strokeWidth="1.5" fill="none"/>
  </svg>
);

/* ─── Counter animation hook ─── */
const useCountUp = (target: number, duration = 1500, suffix = '') => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const step = Math.ceil(duration / target);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) { clearInterval(timer); return target; }
        return prev + 1;
      });
    }, step);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref, suffix };
};

/* ─── Pipeline Step Component ─── */
const PipelineStep = ({ label, icon: Icon, index, total }: { label: string; icon: any; index: number; total: number }) => (
  <div className="flex flex-col items-center">
    <div className="relative flex flex-col items-center">
      {/* Connector line above (except first) */}
      {index > 0 && (
        <div className="hidden sm:block absolute right-full top-1/2 w-8 h-px bg-gradient-to-r from-[#00bfa5]/20 to-[#00bfa5]" style={{ transform: 'translateX(0)' }} />
      )}
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#1d70a2]/30 to-[#0a2342] border border-[#00bfa5]/40 flex items-center justify-center shadow-lg shadow-[#00bfa5]/10 group-hover:border-[#00bfa5]/80 transition-all duration-300">
        <Icon className="w-6 h-6 text-[#00bfa5]" />
      </div>
    </div>
    <p className="mt-3 text-xs text-center text-[#e0e0e0] font-lato font-medium px-1 leading-tight">{label}</p>
  </div>
);

const AgenciasDeViaje = () => {
  useSEO({
    title: "CRM para Agencias de Viaje — Sixteam.pro | De 4 Horas a 2 Minutos",
    description: "CRM, IA y automatizaciones para agencias de viaje en Latam. Responde en 2 minutos, seguimiento automático y convierte más cotizaciones en reservas.",
    canonical: "https://sixteam.pro/industrias/agencias-de-viaje",
    ogUrl: "https://sixteam.pro/industrias/agencias-de-viaje",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroWords = ['ventas', 'experiencia', 'control', 'crecimiento'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = heroWords[currentWordIndex];
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
          setCurrentWordIndex((prev) => (prev + 1) % heroWords.length);
        }
      }
    }, isDeleting ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  // Load calendar booking script
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
    { label: 'WhatsApp / Web / IG', icon: Globe },
    { label: 'IA captura datos', icon: Bot },
    { label: 'Cotización + seguimiento', icon: Send },
    { label: 'Reserva confirmada', icon: CheckCircle },
    { label: 'Viajero fidelizado', icon: Star },
  ];

  return (
    <div className="min-h-screen font-lato overflow-x-hidden" style={{ background: '#06080d' }}>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes planeMove {
          0% { transform: translateX(-10px) translateY(5px); }
          50% { transform: translateX(10px) translateY(-5px); }
          100% { transform: translateX(-10px) translateY(5px); }
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
        .plane-anim { animation: planeMove 6s ease-in-out infinite; }
        .glow-card { animation: glowPulse 3s ease-in-out infinite; }
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
        {/* Background layers */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #040c18 0%, #071628 30%, #0a2342 60%, #0e2e55 100%)' }} />
        {/* World map SVG */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-5xl mx-auto">
            <WorldMapSVG />
          </div>
        </div>
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#1d70a2]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00bfa5]/8 rounded-full blur-3xl pointer-events-none" />
        {/* Scan line effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00bfa5] to-transparent" style={{ animation: 'scanLine 8s linear infinite' }} />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

            {/* Left — Copy */}
            <div className="fade-slide">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full mb-7 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bfa5]"></span>
                </span>
                <span className="text-[#00bfa5] text-xs font-medium tracking-wider uppercase">Para agencias de viaje</span>
                <span className="w-px h-3 bg-[#00bfa5]/30" />
                <span className="text-[#e0e0e0]/70 text-xs">Colombia & LATAM</span>
              </div>

              {/* Headline with typewriter */}
              <div className="mb-6" style={{ minHeight: '11rem' }}>
                <h1 className="font-poppins font-black text-white leading-[1.05]" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>
                  Más{' '}
                  <span className="inline-block relative">
                    <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent whitespace-nowrap">
                      {displayText}
                    </span>
                    <span className="text-[#00bfa5] ml-0.5 animate-pulse">|</span>
                  </span>
                  {' '}para tu agencia
                  <br />
                  <span className="text-[#e0e0e0]/80" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.5rem)', fontWeight: 700 }}>con CRM, automatizaciones e IA</span>
                </h1>
              </div>

              <p className="text-[#e0e0e0]/80 text-lg leading-relaxed mb-7 max-w-lg">
                Responde leads en minutos, automatiza seguimientos y cierra más reservas — <strong className="text-white">sin contratar más personal</strong>.
              </p>

              {/* Micro-features */}
              <div className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon: Zap, text: 'Respuesta automática en menos de 2 minutos' },
                  { icon: TrendingUp, text: 'Mejor tasa de cierre de cotizaciones' },
                  { icon: Globe, text: 'Todos tus canales en una sola pantalla' },
                  { icon: ShieldCheck, text: 'Control operativo de tu equipo y asesores' },
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
                {['✓ Sin contratos anuales', '✓ Implementación 2–3 semanas', '✓ Soporte en español'].map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>

            {/* Right — Chat Widget */}
            <div className="relative">
              <div className="relative z-10">
                <ChatWidget
                  pageContext={PAGE_CONTEXT}
                  initialMessage="¡Hola! Soy el asistente de Sixteam. ¿Tienes preguntas sobre cómo podemos ayudar a tu agencia de viajes a cerrar más reservas?"
                  exampleQuestions={EXAMPLE_QUESTIONS}
                />
              </div>
            </div>

          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#081c36] to-transparent" />
      </section>

      {/* ═══ PAIN POINTS ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        {/* Divider line top — estilo referencia */}
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
              Por qué las agencias pierden reservas{' '}
              <span className="text-red-400">cada semana</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Estos no son problemas genéricos. Son exactamente lo que frena a las agencias de viaje en LATAM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {painPoints.map((pain, i) => (
              <div
                key={i}
                className="relative group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {solutionPairs.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-0.5 group"
                style={{ border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Before — ultra dark */}
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
                {/* After — teal glassmorphism */}
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
        <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,191,165,0.03)' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.75rem)' }}>
              Así funciona para{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                tu agencia
              </span>
            </h2>
            <p className="text-[#e0e0e0]/70 text-base">De la primera consulta a la reserva confirmada — todo automatizado.</p>
          </div>

          {/* Pipeline visual */}
          <div className="max-w-5xl mx-auto mb-16">
            {/* Desktop: horizontal pipeline */}
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

            {/* Mobile: vertical steps */}
            <div className="sm:hidden space-y-0 mb-12">
              {pipeline.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center border"
                      style={{
                        background: 'linear-gradient(135deg, rgba(29,112,162,0.25), rgba(10,35,66,0.9))',
                        borderColor: 'rgba(0,191,165,0.4)',
                      }}
                    >
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

            {/* Detailed step cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  num: '01',
                  icon: Globe,
                  title: 'Lead entra por cualquier canal',
                  desc: 'WhatsApp, Instagram, tu web o Meta Ads. Todo llega a una sola bandeja centralizada en tiempo real.',
                  img: '/step1-multichannel.png',
                  alt: 'Múltiples canales convergiendo en un inbox',
                },
                {
                  num: '02',
                  icon: Bot,
                  title: 'La IA responde en minutos',
                  desc: 'Captura destino, fechas, viajeros y presupuesto. Califica el lead y lo asigna al asesor correcto.',
                  img: '/step2-ai-response.png',
                  alt: 'Agente IA procesando datos de viaje',
                },
                {
                  num: '03',
                  icon: CheckCircle,
                  title: 'El CRM hace el seguimiento',
                  desc: 'La info del viajero ya está lista. Las automatizaciones hacen el follow-up. Solo hay que cerrar.',
                  img: '/step3-crm-pipeline.png',
                  alt: 'Pipeline CRM con etapas automáticas',
                },
                {
                  num: '04',
                  icon: Star,
                  title: 'Viajero fidelizado',
                  desc: 'Post-viaje: encuesta de satisfacción y reactivación automática para la próxima temporada.',
                  img: '/step4-loyal-traveler.png',
                  alt: 'Viajero satisfecho con notificación de fidelización',
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden border border-[#1d70a2]/20 hover:border-[#00bfa5]/35 transition-all duration-300 group"
                  style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 100%)' }}
                >
                  <div className="h-32 overflow-hidden bg-[#081c36]">
                    <img
                      src={step.img}
                      alt={step.alt}
                      className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
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
                ¿Listo para automatizar tu agencia?
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

      {/* ═══ ACHIEVEMENTS / FEATURES ═══ */}
      <section className="py-20 sm:py-24 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(0,191,165,0.04)' }} />
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
                agencias de viaje
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
                agencias que lo usan
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-[#1d70a2]/25 hover:border-[#1d70a2]/50 transition-all duration-300 flex flex-col"
                style={{
                  background: 'rgba(29,112,162,0.08)',
                  backdropFilter: 'blur(16px)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-[#00bfa5] text-[#00bfa5]" />
                  ))}
                </div>
                {/* Quote */}
                <blockquote className="text-[#e0e0e0]/85 text-sm leading-relaxed flex-1 mb-5 italic">
                  "{t.quote}"
                </blockquote>
                {/* Author */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-6">
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
                  'Bandeja omnicanal (WhatsApp, IG, email, web)',
                  'Agente IA 24/7 para primera atención',
                  'Captura de destino, fechas y presupuesto',
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
                  'CRM de contactos con campos personalizados',
                  'Pipelines y oportunidades visuales',
                  'Smart Lists: segmentación dinámica',
                  'Workflows de automatización avanzada',
                  'Reportes y métricas por asesor',
                  'Deduplicación de contactos',
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
                style={{
                  background: 'linear-gradient(90deg, #1d70a2, #00bfa5)',
                  boxShadow: '0 4px 16px rgba(0,191,165,0.25)',
                }}
              >
                Agenda tu asesoría
              </button>
            </div>

            {/* Plan 3 — Growth */}
            <div className="rounded-2xl p-6 border border-[#1d70a2]/30 hover:border-[#1d70a2]/55 transition-all duration-300 flex flex-col"
              style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 100%)' }}>
              <div className="mb-5">
                <span className="text-[#1d70a2] text-[10px] font-bold uppercase tracking-widest">CRM Growth</span>
                <div className="flex items-end gap-1.5 mt-2 mb-1">
                  <span className="font-poppins font-black text-white text-4xl">$360</span>
                  <span className="text-[#e0e0e0]/60 text-sm mb-1.5">USD/mes</span>
                </div>
                <p className="text-[#e0e0e0]/40 text-xs">+ $960 USD implementación · 5 usuarios</p>
              </div>
              <ul className="space-y-2.5 mb-7 flex-1">
                {[
                  'Todo lo de CRM Core incluido',
                  'Calendarios y agendamiento automático',
                  'Funnels, websites y landing pages',
                  'Email Marketing drag-and-drop',
                  'Blog con SEO programado',
                  'Social Planner multicanal',
                  'Reputation Management (reseñas)',
                  'Campañas de reactivación multicanal',
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
        <div className="absolute top-8 right-8 opacity-5 plane-anim">
          <svg viewBox="0 0 80 80" className="w-24 h-24" fill="none">
            <path d="M70 25L10 40l17 7 5 17 10-12 17 7 11-34z" fill="#00bfa5"/>
          </svg>
        </div>
        <div className="absolute bottom-8 left-8 opacity-5 float-anim" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 60 60" className="w-20 h-20" fill="none">
            <circle cx="30" cy="30" r="28" stroke="#1d70a2" strokeWidth="2"/>
            <path d="M30 2 L30 58 M2 30 L58 30" stroke="#1d70a2" strokeWidth="1" opacity="0.5"/>
            <circle cx="30" cy="30" r="4" fill="#00bfa5"/>
          </svg>
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
              30 minutos, sin compromiso. Te mostramos la plataforma configurada para agencias de viaje y resolvemos tus preguntas.
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
              id="UFdsZhBQURUYkKpV0GEX_1775519294836"
              title="Agenda tu asesoría con Sixteam.pro"
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

      {/* ═══ FAQ — ÚLTIMA SECCIÓN ═══ */}
      <section className="py-20 sm:py-28 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0a2342 0%, #081c36 50%, #050e1a 100%)' }} />
        {/* Dot grid sutil */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #00bfa5 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        {/* Glow teal bottom */}
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

          {/* CTA final dentro de FAQ */}
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

export default AgenciasDeViaje;
