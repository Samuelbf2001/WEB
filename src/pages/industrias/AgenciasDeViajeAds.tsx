import { useState, useEffect } from 'react';
import {
  CheckCircle, MessageCircle, Calendar, Zap, TrendingUp,
  Clock, Star, AlertCircle, ChevronDown, ChevronUp,
  Bot, Inbox, ArrowRight, Shield, Users, BarChart3,
  Phone, Plane, MapPin, Lock, Gift, X
} from 'lucide-react';
import { useSEO } from '@/hooks/useSEO';
import ChatWidget from '@/components/ChatWidget';
import LogoSlider from '@/components/LogoSlider';

/* ─── Constants ─── */
const WA_URL = 'https://wa.me/+573004188522?text=Hola%2C%20quiero%20mi%20diagn%C3%B3stico%20gratuito%20para%20mi%20agencia%20de%20viajes&utm_source=ads&utm_medium=whatsapp&utm_campaign=agencias-viaje';

const SPOTS_LEFT = 4;

/* ─── Spot Countdown ─── */
const SpotCountdown = () => {
  const getTimeUntilMonday2359 = () => {
    const now = new Date();
    const target = new Date(now);
    const day = now.getDay(); // 0=Sun, 1=Mon, ..., 6=Sat
    const daysUntilMonday = day === 1 ? 7 : (8 - day) % 7;
    target.setDate(now.getDate() + daysUntilMonday);
    target.setHours(23, 59, 0, 0);
    const diff = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
    const d = Math.floor(diff / 86400);
    const h = Math.floor((diff % 86400) / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    return { d, h, m, s };
  };

  const [time, setTime] = useState(getTimeUntilMonday2359());

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeUntilMonday2359()), 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="flex items-center gap-2 px-4 py-1.5 rounded-full font-poppins font-black text-xs text-white badge-pop"
      style={{ background: 'linear-gradient(90deg, #00bfa5, #1d70a2)' }}>
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
      </span>
      Solo {SPOTS_LEFT} cupos — se cierran en{' '}
      <span className="font-mono tracking-tight">
        {pad(time.d)}:{pad(time.h)}:{pad(time.m)}:{pad(time.s)}
      </span>
    </div>
  );
};

/* ─── GHL Form Embed ─── */
const GHL_FORM_ID = 'g2YMuZSuHU8ceIBVaTWB';

const GHLFormEmbed = () => (
  <div className="ghl-form-wrapper">
    <style>{`
      .ghl-form-wrapper iframe {
        width: 100% !important;
        border: none !important;
        overflow: hidden;
        display: block;
        border-radius: 12px;
        min-height: 480px;
      }
      /* Fondo blanco del iframe integra mejor con el card oscuro */
      .ghl-form-wrapper {
        border-radius: 12px;
        overflow: hidden;
        background: #fff;
      }
    `}</style>
    <iframe
      src={`https://web.sixteam.pro/widget/form/${GHL_FORM_ID}`}
      id={`${GHL_FORM_ID}_landing_viajes`}
      scrolling="no"
      title="Formulario diagnóstico gratuito — Sixteam.pro"
    />
  </div>
);

/* ─── Stat Counter ─── */
const StatCard = ({ value, label, color = '#00bfa5' }: { value: string; label: string; color?: string }) => (
  <div className="text-center px-3">
    <div className="font-poppins font-black text-2xl sm:text-3xl" style={{ color }}>{value}</div>
    <div className="text-[#e0e0e0]/60 text-xs mt-0.5 font-lato leading-tight">{label}</div>
  </div>
);

/* ─── Urgency Bar ─── */
const UrgencyBar = () => (
  <div className="fixed top-0 left-0 right-0 z-50 py-2 px-4 flex items-center justify-center gap-3 text-center"
    style={{ background: 'linear-gradient(90deg, #0a2342, #1d70a2)' }}>
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00bfa5]" />
    </span>
    <p className="text-white text-xs sm:text-sm font-lato">
      <strong className="font-poppins text-[#00bfa5]">Solo {SPOTS_LEFT} consultorías gratuitas esta semana</strong> — por videollamada, llamada o WhatsApp
    </p>
    <button
      onClick={() => window.open(WA_URL, '_blank')}
      className="flex-shrink-0 bg-[#25d366] text-white text-xs font-poppins font-bold px-3 py-1 rounded-full hover:bg-[#22c35c] transition-colors hidden sm:block"
    >
      Reservar ahora
    </button>
  </div>
);

/* ─── Sticky Mobile Bottom Bar ─── */
const StickyBar = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 p-3 sm:hidden transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
      style={{ background: 'rgba(6,8,13,0.97)', borderTop: '1px solid rgba(0,191,165,0.3)', backdropFilter: 'blur(12px)' }}
    >
      <div className="flex gap-2">
        <button
          onClick={() => document.getElementById('form-main')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-1 py-3.5 rounded-xl font-poppins font-black text-white text-sm flex items-center justify-center gap-2"
          style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 20px rgba(0,191,165,0.35)' }}
        >
          <Gift className="w-4 h-4" />
          Diagnóstico gratis
        </button>
        <button
          onClick={() => window.open(WA_URL, '_blank')}
          className="flex-shrink-0 px-4 py-3.5 rounded-xl font-poppins font-bold text-white text-sm flex items-center gap-1.5"
          style={{ background: 'rgba(37,211,102,0.15)', border: '1px solid rgba(37,211,102,0.4)' }}
        >
          <MessageCircle className="w-4 h-4 text-[#25d366]" />
          WA
        </button>
      </div>
    </div>
  );
};

/* ─── Main Component ─── */
const AgenciasDeViajeAds = () => {
  useSEO({
    title: "CRM para Agencias de Viaje — Diagnóstico Gratuito | Sixteam.pro",
    description: "Descubre cuántas reservas está perdiendo tu agencia. Diagnóstico gratuito personalizado: bot IA, seguimiento automático y pipeline de reservas en 2 semanas.",
    canonical: "https://sixteam.pro/viajes",
    ogUrl: "https://sixteam.pro/viajes",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [bannerClosed, setBannerClosed] = useState(false);

  // Tab notification — flickers "(1) New Message" when user switches tabs
  useEffect(() => {
    let originalTitle = '';
    let interval: ReturnType<typeof setInterval>;
    let isNotify = false;

    // Delay to let useSEO set the real title first
    const init = setTimeout(() => {
      originalTitle = document.title;
    }, 300);

    const startFlicker = () => {
      clearInterval(interval);
      isNotify = false;
      interval = setInterval(() => {
        document.title = isNotify ? '(1) Nuevo mensaje — Sixteam.pro' : (originalTitle || document.title);
        isNotify = !isNotify;
      }, 1200);
    };

    const onVisibility = () => {
      if (document.hidden) {
        if (!originalTitle) originalTitle = document.title;
        startFlicker();
      } else {
        clearInterval(interval);
        document.title = originalTitle;
        isNotify = false;
      }
    };

    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      clearTimeout(init);
      document.removeEventListener('visibilitychange', onVisibility);
      clearInterval(interval);
      if (originalTitle) document.title = originalTitle;
    };
  }, []);

  // Load calendar script
  useEffect(() => {
    const scriptId = 'sixteam-booking-script-ads';
    if (document.getElementById(scriptId)) return;
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://web.sixteam.pro/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);
    return () => { document.getElementById(scriptId)?.remove(); };
  }, []);

  const valueItems = [
    { icon: Bot, title: 'Análisis de tus canales actuales', desc: 'Revisamos cómo llegan tus leads hoy (WhatsApp, IG, email, web) y qué se está perdiendo.', value: '$115 USD' },
    { icon: BarChart3, title: 'Mapa de oportunidades perdidas', desc: 'Calculamos cuántas reservas estás dejando ir cada mes por falta de seguimiento.', value: '$86 USD' },
    { icon: Zap, title: 'Demo personalizada de la plataforma', desc: 'Te mostramos la plataforma configurada con el proceso de tu agencia, no un demo genérico.', value: '$173 USD' },
    { icon: TrendingUp, title: 'Plan de acción en 2 semanas', desc: 'Un roadmap paso a paso para automatizar cotizaciones y seguimientos en tu agencia específica.', value: '$115 USD' },
  ];

  const painPoints = [
    {
      icon: Clock,
      emoji: '⏱️',
      title: 'Cotizas en horas, el cliente reserva en minutos',
      desc: 'El cliente pide un paquete a Cancún. Tu asesor tarda 3–4 horas en armar la propuesta. Ya reservó con la competencia.',
      stat: '78% de leads se van en las primeras 2 horas sin respuesta',
    },
    {
      icon: MessageCircle,
      emoji: '💬',
      title: 'Mandas la cotización y se hace el muerto',
      desc: 'Envías el paquete por WhatsApp, queda en "visto" y nadie hace seguimiento. Ese lead costó dinero en ads.',
      stat: '65% de cotizaciones nunca tienen follow-up automático',
    },
    {
      icon: Inbox,
      emoji: '📱',
      title: 'Leads en 5 canales, 0 centralización',
      desc: 'WhatsApp personal del asesor, Instagram DMs, email, web... alguno siempre se pierde. Especialmente en temporada alta.',
      stat: '1 de cada 3 mensajes queda sin responder más de 24 horas',
    },
  ];

  const testimonials = [
    {
      quote: 'Pasamos del 19% al 54% de tasa de cierre en 3 meses. En Semana Santa atendimos 200 mensajes diarios sin contratar a nadie más.',
      author: 'Marcela Ríos',
      role: 'Directora Comercial · Viajes Ríos Tours',
      city: 'Medellín 🇨🇴',
      stars: 5,
      metric: '+35% cierre',
      initial: 'MR',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop&crop=face',
    },
    {
      quote: 'Aumenté mis ventas un 38% sin contratar a nadie. El sistema hace el seguimiento por WhatsApp durante 7 días y yo solo cierro los que ya están calientes.',
      author: 'Juan Pablo Vargas',
      role: 'Propietario · Experiencias Colombia Travel',
      city: 'Bogotá 🇨🇴',
      stars: 5,
      metric: '+38% ventas',
      initial: 'JP',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    },
    {
      quote: 'Nuestro tiempo de respuesta bajó de 6 horas a menos de 30 minutos. Visibilidad total de cada cotización, cada cliente, cada asesor.',
      author: 'Camila Fuentes',
      role: 'CEO · Sur Viajes Premium',
      city: 'Santiago 🇨🇱',
      stars: 5,
      metric: '6h → 30min',
      initial: 'CF',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
    },
  ];

  const steps = [
    { num: '01', icon: MessageCircle, title: 'Reservas tu diagnóstico', desc: 'Completas el formulario. Un especialista te confirma en menos de 2 horas por WhatsApp.' },
    { num: '02', icon: Bot, title: 'Analizamos tu agencia', desc: 'Revisamos tus canales, proceso actual y calculamos el revenue que estás dejando sobre la mesa.' },
    { num: '03', icon: CheckCircle, title: 'Te entregamos el plan', desc: 'Demo personalizada + roadmap de implementación en 2 semanas. Tú decides si continúas.' },
  ];

  const faqs = [
    {
      q: '¿Realmente es gratis? ¿Qué pasa en la sesión?',
      a: 'Sí, 100% gratis. En la sesión analizamos tu negocio, entendemos tu proceso actual y te mostramos qué se podría resolver con tecnología. No conectamos nada ni vendemos nada en esa sesión. Si tiene sentido continuar, te presentamos un plan. Sin presión.',
    },
    {
      q: '¿Cómo es la sesión — videollamada, llamada o WhatsApp?',
      a: 'Tú eliges el formato que te quede más cómodo: videollamada (Zoom/Meet), llamada telefónica o por WhatsApp. Duración aproximada: 30 minutos. Uno de nuestros especialistas te confirma el horario antes de la sesión.',
    },
    {
      q: '¿Necesito preparar algo antes de la sesión?',
      a: 'No. Solo llega con ganas de contar cómo funciona tu negocio hoy: cómo llegan tus leads, cómo los atiendes y cuál es tu mayor dolor operativo. Con eso es suficiente para hacer un análisis útil.',
    },
    {
      q: '¿Funciona para una agencia pequeña de 2–3 personas?',
      a: 'Sí, y de hecho es donde más impacto tiene. Con pocos asesores, cada lead perdido duele más. En la consultoría identificamos exactamente qué automatizar primero para que recuperes tiempo sin contratar más personal.',
    },
  ];

  return (
    <div className="min-h-screen font-lato overflow-x-hidden" style={{ background: '#06080d' }}>

      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmerLine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes badgePop {
          0% { transform: scale(0.9); opacity: 0; }
          60% { transform: scale(1.04); }
          100% { transform: scale(1); opacity: 1; }
        }
        .fade-up { animation: fadeSlideUp 0.65s ease forwards; }
        .badge-pop { animation: badgePop 0.5s ease forwards; }
        .float { animation: floatUp 3s ease-in-out infinite; }
        .shimmer-btn {
          background-size: 200% auto;
          background-image: linear-gradient(90deg, #1d70a2 0%, #00bfa5 50%, #1d70a2 100%);
          animation: shimmerLine 2.5s linear infinite;
        }
      `}</style>

      {/* Urgency top bar */}
      <UrgencyBar />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden pt-20 pb-12 sm:pt-28 sm:pb-20" style={{ background: 'linear-gradient(160deg, #040c18 0%, #0a2342 50%, #071628 100%)' }}>
        {/* BG elements */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#00bfa5]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1d70a2]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00bfa5 1px, transparent 0)', backgroundSize: '28px 28px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* LEFT — Offer copy */}
            <div className="fade-up">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 badge-pop"
                style={{ background: 'rgba(0,191,165,0.08)', border: '1px solid rgba(0,191,165,0.25)' }}>
                <Plane className="w-3.5 h-3.5 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-xs font-poppins font-semibold tracking-wide">Para agencias de viaje · Colombia & LATAM</span>
              </div>

              {/* Headline */}
              <h1 className="font-poppins font-black text-white leading-[1.08] mb-5" style={{ fontSize: 'clamp(2.2rem, 5.5vw, 3.6rem)' }}>
                Tu agencia pierde reservas cada semana — y no lo notas
              </h1>

              <p className="text-[#e0e0e0]/75 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                Cotizaciones lentas, seguimientos que no pasan y leads dispersos en 5 canales. <strong className="text-white">Resolvemos los 3 en 2 semanas</strong> con CRM, bot IA y automatizaciones.
              </p>

              {/* Mini trust proof */}
              <div className="flex flex-wrap gap-3 mb-7">
                {[
                  { icon: CheckCircle, text: 'Respuesta en 2 minutos (24/7)' },
                  { icon: CheckCircle, text: 'Seguimiento automático 7 días' },
                  { icon: CheckCircle, text: 'Sin contratar más personal' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <item.icon className="w-4 h-4 text-[#00bfa5] flex-shrink-0" />
                    <span className="text-[#e0e0e0]/80 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Social proof stats */}
              <div className="flex items-center gap-1 flex-wrap">
                <div className="flex -space-x-2 mr-2">
                  {['MR', 'JP', 'CF', 'AL'].map((init, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#06080d] bg-gradient-to-br from-[#1d70a2] to-[#00bfa5] flex items-center justify-center font-poppins font-bold text-white text-[9px] flex-shrink-0">
                      {init}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#00bfa5] text-[#00bfa5]" />)}
                  </div>
                  <p className="text-[#e0e0e0]/55 text-xs">+200 agencias en LATAM confían en Sixteam</p>
                </div>
              </div>
            </div>

            {/* RIGHT — Lead Form */}
            <div id="form-main" className="relative" style={{ animationDelay: '0.15s' }}>
              {/* Urgency badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <SpotCountdown />
              </div>

              {/* Form card */}
              <div className="rounded-2xl overflow-hidden mt-3"
                style={{
                  border: '1px solid rgba(0,191,165,0.25)',
                  boxShadow: '0 8px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,191,165,0.08)',
                }}>
                {/* Dark header */}
                <div className="px-6 pt-6 pb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(13,45,82,0.98), rgba(10,35,66,1))' }}>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <Gift className="w-5 h-5 text-[#00bfa5]" />
                    <h2 className="font-poppins font-black text-white text-lg">Diagnóstico gratuito para tu agencia</h2>
                  </div>
                  <p className="text-[#e0e0e0]/60 text-sm">
                    Valor real:{' '}
                    <span className="line-through text-[#e0e0e0]/35">$490 USD</span>{' '}
                    <span className="text-[#00bfa5] font-bold">GRATIS</span> · Solo para agencias calificadas
                  </p>
                  <p className="text-[#e0e0e0]/50 text-xs flex items-center gap-1.5 mt-1.5">
                    <span>📹 Videollamada · 📞 Llamada · 💬 WhatsApp — tú eliges</span>
                  </p>
                </div>
                {/* GHL form — fondo blanco */}
                <GHLFormEmbed />
              </div>

              {/* Mini value list below form */}
              <div className="mt-4 px-1 space-y-2">
                {[
                  'Análisis de canales y leads perdidos',
                  'Demo personalizada con tu proceso',
                  'Plan de implementación en 2 semanas',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[#e0e0e0]/60 text-xs">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00bfa5] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TRUST BAR ═══ */}
      <section className="py-5 relative" style={{ background: '#0a1628', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-4 sm:gap-0 divide-x divide-white/10">
            <StatCard value="+200" label="agencias en LATAM" />
            <StatCard value="2 min" label="tiempo de respuesta promedio" color="#1d70a2" />
            <StatCard value="+54%" label="tasa de cierre (caso real)" />
            <StatCard value="2–3 sem" label="implementación completa" color="#1d70a2" />
            <div className="flex items-center gap-2 px-3">
              <Shield className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#e0e0e0]/55 text-xs font-lato">Sin contratos anuales</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOGO SCROLL ═══ */}
      <LogoSlider title="Agencias que ya confían en Sixteam.pro" />

      {/* ═══ PAIN AGITATOR ═══ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none" style={{ background: 'rgba(232,80,50,0.04)' }} />

        <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(232,80,50,0.06)', border: '1px solid rgba(232,80,50,0.15)' }}>
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-red-400 text-xs font-poppins font-semibold uppercase tracking-wider">¿Te suena familiar?</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-3" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}>
              Por qué tu agencia pierde dinero sin darse cuenta
            </h2>
            <p className="text-[#e0e0e0]/55 text-base max-w-xl mx-auto">
              No es falta de esfuerzo. Es que el proceso manual tiene huecos por donde se escapa el revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {painPoints.map((pain, i) => (
              <div key={i} className="rounded-2xl p-5 relative group"
                style={{ background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="text-3xl mb-3">{pain.emoji}</div>
                <h3 className="font-poppins font-bold text-white text-sm mb-2 leading-snug">{pain.title}</h3>
                <p className="text-[#e0e0e0]/55 text-xs leading-relaxed mb-3">{pain.desc}</p>
                <div className="rounded-lg px-3 py-2" style={{ background: 'rgba(232,80,50,0.06)', border: '1px solid rgba(232,80,50,0.12)' }}>
                  <p className="text-red-400 text-xs font-medium">{pain.stat}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => document.getElementById('form-main')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-poppins font-black text-white text-base transition-all hover:scale-[1.02] active:scale-95"
              style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 24px rgba(0,191,165,0.35)' }}
            >
              <Gift className="w-5 h-5" />
              Quiero saber cuánto estoy perdiendo
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ VALUE STACK — IRRESISTIBLE OFFER ═══ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#111120' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at top, rgba(0,191,165,0.05) 0%, transparent 60%)' }} />

        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ background: 'rgba(0,191,165,0.07)', border: '1px solid rgba(0,191,165,0.18)' }}>
              <Gift className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-xs font-poppins font-semibold uppercase tracking-wider">Tu diagnóstico gratuito incluye</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-3" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}>
              Todo esto, sin costo
            </h2>
            <p className="text-[#e0e0e0]/55 text-base">Valor total: <span className="line-through text-[#e0e0e0]/35">$490 USD</span> → <span className="text-[#00bfa5] font-bold">$0 para agencias calificadas</span></p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {valueItems.map((item, i) => (
              <div key={i} className="rounded-2xl p-5 flex gap-4 group hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, rgba(13,45,82,0.9), rgba(10,35,66,0.95))',
                  border: '1px solid rgba(29,112,162,0.2)',
                }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(0,191,165,0.1)', border: '1px solid rgba(0,191,165,0.2)' }}>
                  <item.icon className="w-5 h-5 text-[#00bfa5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-poppins font-bold text-white text-sm leading-snug">{item.title}</h3>
                    <span className="text-[#00bfa5] text-xs font-bold flex-shrink-0 line-through opacity-60">{item.value}</span>
                  </div>
                  <p className="text-[#e0e0e0]/55 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA under value stack */}
          <div className="rounded-2xl p-6 sm:p-7 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(0,191,165,0.07), rgba(10,35,66,0.95))', border: '1px solid rgba(0,191,165,0.2)' }}>
            <p className="font-poppins font-black text-white text-xl mb-1">
              ¿Cuántos spots quedan?{' '}
              <span className="text-[#00bfa5]">Solo {SPOTS_LEFT}</span>
            </p>
            <p className="text-[#e0e0e0]/60 text-sm mb-5">El diagnóstico requiere tiempo de nuestro equipo. Por eso limitamos los spots cada semana.</p>
            <button
              onClick={() => document.getElementById('form-main')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-poppins font-black text-white text-base transition-all hover:scale-[1.02] active:scale-95 shimmer-btn"
              style={{ boxShadow: '0 4px 28px rgba(0,191,165,0.4)' }}
            >
              <Gift className="w-5 h-5" />
              Reservar mi diagnóstico gratis
            </button>
            <p className="text-[#e0e0e0]/35 text-xs mt-3 flex items-center justify-center gap-1.5">
              <Lock className="w-3 h-3" /> Sin compromiso · Sin tarjeta de crédito
            </p>
          </div>
        </div>
      </section>

      {/* ═══ BEFORE / AFTER ═══ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#06080d' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-black text-white" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}>
              Antes vs. con Sixteam
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Before column */}
            <div className="rounded-2xl overflow-hidden">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: 'rgba(232,80,50,0.08)', borderBottom: '1px solid rgba(232,80,50,0.12)' }}>
                <X className="w-4 h-4 text-red-400" />
                <span className="font-poppins font-bold text-red-400 text-sm uppercase tracking-wide">Sin Sixteam</span>
              </div>
              <div className="p-5 space-y-3" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderTop: 'none', borderRadius: '0 0 16px 16px' }}>
                {[
                  'Leads esperan 3–6 horas por una respuesta',
                  'Cotización enviada... y nadie hace seguimiento',
                  '5 canales, 5 apps, caos total',
                  'Diciembre y Semana Santa = bombero apagando incendios',
                  'Cada asesor maneja sus propios contactos (y los pierde)',
                  'No sabes qué canal o asesor vende más',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-[#e0e0e0]/55 text-sm">
                    <X className="w-3.5 h-3.5 text-red-400/70 mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* After column */}
            <div className="rounded-2xl overflow-hidden">
              <div className="px-5 py-3 flex items-center gap-2" style={{ background: 'rgba(0,191,165,0.1)', borderBottom: '1px solid rgba(0,191,165,0.15)' }}>
                <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                <span className="font-poppins font-bold text-[#00bfa5] text-sm uppercase tracking-wide">Con Sixteam</span>
              </div>
              <div className="p-5 space-y-3" style={{ background: 'rgba(0,191,165,0.04)', border: '1px solid rgba(0,191,165,0.15)', borderTop: 'none', borderRadius: '0 0 16px 16px' }}>
                {[
                  'Bot IA responde en 2 minutos — 24/7, sin asesor',
                  'Follow-up automático a 24h, 48h y 7 días post-cotización',
                  'Una bandeja: WhatsApp, IG, email, web — todo en pantalla',
                  'Temporada alta sin caos: el bot atiende el 80% solo',
                  'CRM centralizado: historial, preferencias, destinos anteriores',
                  'Dashboard en tiempo real por canal, asesor y destino',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-white text-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#00bfa5] mt-0.5 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(29,112,162,0.06) 0%, transparent 65%)' }} />

        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-black text-white mb-2" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}>
              Agencias que ya automatizaron sus reservas
            </h2>
            <p className="text-[#e0e0e0]/50 text-sm">Resultados reales de clientes en Colombia, Chile y México.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-5 border border-[#1d70a2]/20 hover:border-[#1d70a2]/40 transition-all duration-300 flex flex-col"
                style={{ background: 'rgba(29,112,162,0.07)', backdropFilter: 'blur(12px)' }}>
                {/* Metric badge */}
                <div className="inline-flex self-start mb-4">
                  <span className="px-3 py-1.5 rounded-full font-poppins font-black text-xs text-[#0a2342]"
                    style={{ background: 'linear-gradient(90deg, #00bfa5, #1d70a2)' }}>
                    {t.metric}
                  </span>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.stars)].map((_, si) => <Star key={si} className="w-3.5 h-3.5 fill-[#00bfa5] text-[#00bfa5]" />)}
                </div>
                <blockquote className="text-[#e0e0e0]/80 text-sm leading-relaxed flex-1 mb-4 italic">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3 border-t border-[#1d70a2]/15 pt-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#00bfa5]/50">
                    {t.avatar
                      ? <img src={t.avatar} alt={t.author} className="w-full h-full object-cover scale-110" loading="lazy" />
                      : <div className="w-full h-full flex items-center justify-center font-poppins font-bold text-white text-xs">{t.initial}</div>
                    }
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-white text-sm">{t.author}</div>
                    <div className="text-[#e0e0e0]/50 text-xs">{t.role}</div>
                    <div className="text-[#00bfa5]/60 text-xs mt-0.5">{t.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MID-PAGE CTA STRIP ═══ */}
      <section className="py-10 relative" style={{ background: 'linear-gradient(135deg, #0d2d52, #1d70a2 50%, #0d2d52)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #00bfa5 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
            <div>
              <p className="font-poppins font-black text-white text-xl mb-1">¿Cuántas reservas perdiste esta semana?</p>
              <p className="text-[#e0e0e0]/70 text-sm">El diagnóstico es gratis. Los leads perdidos, no.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                onClick={() => document.getElementById('form-main')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-poppins font-black text-sm text-white transition-all hover:scale-[1.03]"
                style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 20px rgba(0,191,165,0.35)' }}
              >
                <Gift className="w-4 h-4" />
                Diagnóstico gratis
              </button>
              <button
                onClick={() => window.open(WA_URL, '_blank')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-poppins font-semibold text-sm text-white border border-[#25d366]/40 bg-[#25d366]/10 hover:bg-[#25d366]/20 transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                WhatsApp directo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#111120' }}>
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="font-poppins font-black text-white mb-2" style={{ fontSize: 'clamp(1.7rem, 4vw, 2.5rem)' }}>
              3 pasos para automatizar tu agencia
            </h2>
          </div>

          <div className="relative">
            {/* Connector line desktop */}
            <div className="hidden sm:block absolute top-[2.2rem] left-[calc(16.66%+1.5rem)] right-[calc(16.66%+1.5rem)] h-px"
              style={{ background: 'linear-gradient(90deg, rgba(0,191,165,0.4), rgba(29,112,162,0.4))' }} />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center relative z-10"
                      style={{
                        background: 'linear-gradient(135deg, rgba(29,112,162,0.3), rgba(10,35,66,0.9))',
                        border: '1px solid rgba(0,191,165,0.4)',
                        boxShadow: '0 4px 20px rgba(0,191,165,0.15)',
                      }}>
                      <step.icon className="w-7 h-7 text-[#00bfa5]" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center font-poppins font-black text-xs text-[#0a2342]"
                      style={{ background: 'linear-gradient(135deg, #00bfa5, #1d70a2)' }}>
                      {i + 1}
                    </div>
                  </div>
                  <div className="text-[#1d70a2]/30 font-poppins font-black text-4xl leading-none mb-2">{step.num}</div>
                  <h3 className="font-poppins font-bold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-[#e0e0e0]/55 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-16 sm:py-20 relative overflow-hidden" style={{ background: '#06080d' }}>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-[#00bfa5]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-poppins font-black text-white mb-2" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
              Preguntas frecuentes
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border transition-all duration-300"
                style={{
                  background: openFaq === i
                    ? 'linear-gradient(135deg, rgba(29,112,162,0.15), rgba(10,35,66,0.95))'
                    : 'rgba(255,255,255,0.025)',
                  borderColor: openFaq === i ? 'rgba(0,191,165,0.4)' : 'rgba(255,255,255,0.06)',
                }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left gap-4"
                >
                  <span className="font-poppins font-semibold text-white text-sm leading-snug">{faq.q}</span>
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: openFaq === i ? 'rgba(0,191,165,0.2)' : 'rgba(255,255,255,0.05)',
                      border: `1px solid ${openFaq === i ? 'rgba(0,191,165,0.4)' : 'rgba(255,255,255,0.1)'}`,
                    }}>
                    {openFaq === i
                      ? <ChevronUp className="w-4 h-4 text-[#00bfa5]" />
                      : <ChevronDown className="w-4 h-4 text-[#e0e0e0]/50]" />
                    }
                  </div>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <div className="w-8 h-px mb-3" style={{ background: 'linear-gradient(90deg, #00bfa5, transparent)' }} />
                    <p className="text-[#e0e0e0]/70 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CHAT AGENT — ¿Tienes preguntas? — HIDDEN PER USER REQUEST ═══
      <section className="py-14 sm:py-16 relative overflow-hidden" style={{ background: '#0d0d1a' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at bottom right, rgba(29,112,162,0.07) 0%, transparent 60%)' }} />
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
                style={{ background: 'rgba(0,191,165,0.07)', border: '1px solid rgba(0,191,165,0.18)' }}>
                <Bot className="w-4 h-4 text-[#00bfa5]" />
                <span className="text-[#00bfa5] text-xs font-poppins font-semibold uppercase tracking-wider">Agente IA disponible ahora</span>
              </div>
              <h2 className="font-poppins font-black text-white mb-3" style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)' }}>
                ¿Tienes preguntas antes de agendar?
              </h2>
              <p className="text-[#e0e0e0]/60 text-base leading-relaxed mb-5">
                Nuestro asistente IA conoce el sistema al detalle. Pregúntale sobre precios, integración con tu WhatsApp, temporada alta o lo que necesites saber.
              </p>
              <div className="space-y-2.5">
                {[
                  '¿Funciona con mi WhatsApp Business actual?',
                  '¿Cuánto cuesta implementarlo?',
                  '¿El bot puede cotizar destinos?',
                  '¿Funciona para agencias pequeñas?',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-[#e0e0e0]/55 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00bfa5] flex-shrink-0" />
                    "{q}"
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ChatWidget
                pageContext={`Estás en la landing page de ads de Sixteam.pro para agencias de viaje.
PROPUESTA DE VALOR: CRM, automatizaciones e IA para agencias de viaje que quieren cerrar más reservas sin contratar más personal.
OFERTA ACTUAL: Diagnóstico gratuito (valor $490 USD) — análisis de canales, mapa de oportunidades, demo personalizada y plan de implementación.
PLANES: Ops Esencial promo desde $200 USD/mes, Ops Integral $499 USD/mes, Ops Total desde $1,200 USD/mes.
IMPLEMENTACIÓN: 2-3 semanas, sin contratos anuales, soporte en español.
FUNCIONALIDADES CLAVE: bandeja omnicanal (WhatsApp, IG, email), bot IA 24/7, seguimiento automático post-cotización, pipeline visual de reservas, historial del viajero.`}
                initialMessage="¡Hola! Soy el asistente de Sixteam 👋 Conozco el sistema al detalle. ¿Qué quieres saber antes de agendar tu diagnóstico gratuito?"
                exampleQuestions={[
                  '¿Funciona con mi WhatsApp?',
                  '¿Cuánto cuesta?',
                  '¿El bot cotiza destinos?',
                  '¿Para agencias pequeñas?',
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      */}

      {/* ═══ FINAL CTA + CALENDAR ═══ */}
      <section id="agenda" className="py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #060f1e 0%, #0a2342 45%, #112a4a 75%, #0a2342 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, rgba(0,191,165,0.07), transparent 65%)' }} />

        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ background: 'rgba(0,191,165,0.08)', border: '1px solid rgba(0,191,165,0.25)' }}>
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00bfa5] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00bfa5]" />
              </span>
              <span className="text-[#00bfa5] text-sm font-medium">Asesorías disponibles esta semana</span>
            </div>
            <h2 className="font-poppins font-black text-white mb-4" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>
              Agenda tu diagnóstico ahora
            </h2>
            <p className="text-[#e0e0e0]/65 text-base max-w-md mx-auto mb-6">
              30 minutos con un especialista por videollamada, llamada o WhatsApp — tú eliges el formato. Te mostramos exactamente cómo quedará tu agencia automatizada.
            </p>

            {/* WA alternative */}
            <button
              onClick={() => window.open(WA_URL, '_blank')}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-poppins font-bold text-base text-white mb-8 transition-all"
              style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.35)' }}
            >
              <MessageCircle className="w-5 h-5 text-[#25d366]" />
              Prefiero hablar por WhatsApp primero
            </button>
          </div>

          {/* Calendar embed */}
          <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,191,165,0.15)' }}>
            <iframe
              src="https://web.sixteam.pro/widget/booking/UFdsZhBQURUYkKpV0GEX"
              style={{ width: '100%', border: 'none', overflow: 'hidden', display: 'block', minHeight: '500px' }}
              id="UFdsZhBQURUYkKpV0GEX_ads"
              title="Agenda tu diagnóstico gratuito — Sixteam.pro"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-[#e0e0e0]/40 text-sm">
            {[
              { icon: CheckCircle, text: 'Sin compromiso' },
              { icon: CheckCircle, text: 'Sin tarjeta de crédito' },
              { icon: CheckCircle, text: 'Respuesta en menos de 2 horas' },
              { icon: Shield, text: 'Datos 100% privados' },
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <t.icon className="w-3.5 h-3.5 text-[#00bfa5]/60" />
                {t.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FOOTER MINIMAL ═══ */}
      <footer className="py-6 text-center" style={{ background: '#06080d', borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="flex items-center justify-center gap-1.5 mb-2">
          <span className="font-poppins font-black text-white text-lg">Sixteam</span>
          <span className="font-poppins font-black text-[#00bfa5] text-lg">.</span>
          <span className="font-poppins font-black text-white text-lg">pro</span>
        </div>
        <p className="text-[#e0e0e0]/30 text-xs">CRM · Automatizaciones · IA para Agencias de Viaje · Colombia & LATAM</p>
        <p className="text-[#e0e0e0]/20 text-xs mt-1">© {new Date().getFullYear()} Sixteam.pro — Todos los derechos reservados</p>
      </footer>

      {/* Sticky mobile bottom bar */}
      <StickyBar />
    </div>
  );
};

export default AgenciasDeViajeAds;
