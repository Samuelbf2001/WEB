import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import Header from '@/components/Header';
import SchemaOrg from '@/components/SchemaOrg';
import {
  CheckCircle2, XCircle, Play, ArrowRight,
  Bot, BarChart3, Mail, Smartphone, Zap, LayoutDashboard,
  Megaphone, Globe, Headset, ChevronRight, Star, Clock,
  Users, Shield,
} from 'lucide-react';


/* ─────────────────────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────────────────────── */

const EyebrowPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e6faf7] border border-[#b3f0e5] rounded-full">
    <span className="text-[#00bfa5] text-xs sm:text-sm font-semibold tracking-wide uppercase">
      {children}
    </span>
  </div>
);

const HandDrawnUnderline: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span className={`relative inline-block ${className}`}>
    {children}
    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none" preserveAspectRatio="none" style={{ height: '0.5em' }}>
      <path d="M2 8C20 2 40 2 60 6C80 10 100 10 118 4" stroke="#00bfa5" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  </span>
);

const AvatarGroup: React.FC<{ names: string[]; size?: number; border?: string }> = ({ names, size = 44, border = 'border-white' }) => (
  <div className="flex -space-x-3">
    {names.map((name, i) => (
      <div key={name} className={`rounded-full border-2 ${border} flex items-center justify-center text-white text-xs font-bold`}
        style={{ width: size, height: size, backgroundColor: ['#1d70a2', '#00bfa5', '#0d6659', '#7c3aed', '#d97706'][i % 5], zIndex: names.length - i }}>
        {name.slice(0, 2).toUpperCase()}
      </div>
    ))}
  </div>
);

const CtaButton: React.FC<{
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
}> = ({ children, href, onClick, variant = 'primary', className = '' }) => {
  const base = 'inline-flex items-center justify-center gap-2 font-poppins font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300';
  const styles = {
    primary:   'bg-[#00bfa5] hover:bg-[#00a08a] text-white shadow-[0_10px_15px_-3px_rgba(0,191,165,0.25)] hover:shadow-[0_20px_25px_-5px_rgba(0,191,165,0.35)] hover:-translate-y-0.5',
    secondary: 'bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm',
    outline:   'bg-transparent hover:bg-[#0a2342]/5 text-[#0a2342] border border-[#0a2342]/20 hover:border-[#0a2342]/40',
    ghost:     'text-[#00bfa5] hover:text-[#0d6659] hover:bg-[#00bfa5]/10',
  };
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) return <Link to={href} className={cls}>{children}</Link>;
  return <button onClick={onClick} className={cls}>{children}</button>;
};

const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('is-visible'); observer.unobserve(el); }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number }> = ({ children, className = '', delay = 0 }) => {
  const ref = useScrollReveal();
  return <div ref={ref} className={`v2-reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
};

/* ─────────────────────────────────────────────────────────────
   HOME AA
   ───────────────────────────────────────────────────────────── */

const HomeAA = () => {
  useSEO({
    title: 'Sixteam | Tu Equipo de Tecnología & IA, Operando 24/7',
    description: 'Implementación y operación continua de la tecnología e IA de tu negocio — CRM, WhatsApp, automatizaciones, agentes IA, pauta. Promo desde $200 USD/mes.',
    canonical: 'https://sixteam.pro',
    ogUrl: 'https://sixteam.pro',
  });

  /* ── HERO — light ── */
  const Hero = () => (
    <section className="relative bg-[#f3f4f6] overflow-hidden pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 lg:pb-20">
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#00bfa5]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1d70a2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <Reveal>
            <div className="mb-6 sm:mb-8"><EyebrowPill>Tu tecnología, operando 24/7</EyebrowPill></div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-black leading-[1.1] tracking-[-0.04em] mb-6 sm:mb-8 text-[#06070a]">
              No Eres Solo Tú Otra Vez.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="space-y-1 sm:space-y-2 text-lg sm:text-xl lg:text-2xl text-[#4e5361] font-lato leading-relaxed mb-8 sm:mb-10">
              <p>Tu CRM responde. Tu WhatsApp califica.</p>
              <p>Tus automatizaciones corren. Tus dashboards se actualizan.</p>
              <p>Tú simplemente...{' '}
                <HandDrawnUnderline className="italic font-serif text-[#0a2342]">sigues con tu día</HandDrawnUnderline>.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
              <CtaButton href="/precios">Empezar</CtaButton>
              <CtaButton variant="outline"><Play className="w-4 h-4" /> Ver Demo 2 min</CtaButton>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="max-w-2xl mx-auto bg-white border border-[#e6e8eb] rounded-2xl p-5 sm:p-6 mb-10 sm:mb-12">
              <p className="text-[#666c7a] text-sm sm:text-base leading-relaxed italic mb-4">
                "Llevo 4 años trabajando con Sixteam. Como dueño de mi agencia, jamás habría operado al nivel que opero hoy sin ellos llevando la tecnología. Me ahorraron tiempo, contrataciones, y problemas que ni sabía que tenía."
              </p>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-10 h-10 rounded-full bg-[#1d70a2] flex items-center justify-center text-white font-bold text-sm">C</div>
                <div className="text-left">
                  <p className="text-[#06070a] font-semibold text-sm">Camilo (CO)</p>
                  <p className="text-[#989fab] text-xs">Cliente desde 2021</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto mb-8">
              {[
                { icon: Star,   label: 'en reseñas reales',                value: '8+ años'  },
                { icon: Clock,  label: 'operando tecnología desde 2017',   value: '0 rotación' },
                { icon: Users,  label: 'de cuenta — siempre los mismos',   value: '30 días'  },
                { icon: Shield, label: 'de garantía sobre el diagnóstico', value: 'Garantía' },
              ].map((item) => (
                <div key={item.value} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <item.icon className="w-4 h-4 text-[#00bfa5]" />
                    <span className="text-[#06070a] font-bold text-lg sm:text-xl">{item.value}</span>
                  </div>
                  <p className="text-[#989fab] text-xs leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={600}>
            <div className="flex items-center justify-center gap-4">
              <AvatarGroup names={['Aura', 'Carlos', 'Laura']} size={48} border="border-[#f3f4f6]" />
              <p className="text-[#7f8694] text-sm">Tu equipo IA + Humanos senior</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );

  /* ── DASHBOARD WIDGET — white section, dark card (UI mockup) ── */
  const DashboardWidget = () => (
    <section className="relative bg-white pb-16 sm:pb-24 lg:pb-32 -mt-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#0a2342] border border-[#1d70a2]/30 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_40px_100px_rgba(10,35,66,0.12)]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse" />
                <h3 className="text-white font-poppins font-bold text-lg sm:text-xl">Tu operación esta semana</h3>
                <span className="ml-auto text-[#00bfa5] text-xs font-semibold bg-[#00bfa5]/10 px-3 py-1 rounded-full">Todo al día</span>
              </div>
              <div className="space-y-3">
                {[
                  { area: 'Pipeline CRM',    status: 'Vivo — 47 oportunidades activas',      icon: BarChart3     },
                  { area: 'WhatsApp',        status: '132 leads respondidos — TMR <2 min',   icon: Smartphone    },
                  { area: 'Email',           status: '4 secuencias activas — 1.840 enviados', icon: Mail         },
                  { area: 'Agentes IA',      status: '24/7 — 0 caídas esta semana',          icon: Bot           },
                  { area: 'Pauta',           status: 'Optimizada lunes — CPL ↓ 11%',         icon: Megaphone     },
                  { area: 'Reporte semanal', status: 'En tu inbox cada lunes 7am',            icon: LayoutDashboard },
                ].map((row) => (
                  <div key={row.area} className="flex items-center gap-3 sm:gap-4 bg-white/5 rounded-xl px-4 py-3 hover:bg-white/[0.08] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-[#1d70a2]/20 flex items-center justify-center flex-shrink-0">
                      <row.icon className="w-4 h-4 text-[#00bfa5]" />
                    </div>
                    <p className="text-white font-medium text-sm flex-1 truncate">{row.area}</p>
                    <p className="text-[#e0e0e0]/70 text-xs sm:text-sm text-right flex-shrink-0">{row.status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <p className="text-[#e0e0e0]/60 text-xs sm:text-sm">Operado por tu equipo IA + Humanos senior</p>
                <AvatarGroup names={['Aura', 'Carlos', 'Laura']} size={32} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  /* ── LOGO BAR — white ── */
  const LogoBar = () => {
    const logos = [
      { name: 'MasterViajes', src: '/LOGO-CALAS.png' },
      { name: 'HubSpot',      src: '/HubSpot-Logo-500x281.png' },
      { name: 'GoHighLevel',  src: '/highlevel-logo.png' },
      { name: 'n8n',          src: '/N8n-logo-new.svg.png' },
      { name: 'Make',         src: '/make-logo.png' },
    ];
    return (
      <section className="bg-white py-10 sm:py-14 border-y border-[#e6e8eb]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-[#989fab] text-sm sm:text-base mb-6 sm:mb-8">
              Confiado por <span className="text-[#06070a] font-semibold">+50</span> empresas en Latam desde 2017
            </p>
          </Reveal>
          <div className="logo-slider-wrapper">
            <div className="logo-slider-track">
              {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                <div key={`${logo.name}-${i}`} className="logo-slider-item flex items-center justify-center min-w-[140px]">
                  <img src={logo.src} alt={logo.name} className="h-8 sm:h-10 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  /* ── EL PROBLEMA — light gray ── */
  const ElProblema = () => {
    const buckets = [
      {
        title: 'CRM & Pipeline Comercial',
        quote: '"Tienes leads entrando. Tienes el producto. Pero el CRM está medio vacío, los seguimientos viven en la cabeza de tu equipo, y nadie sabe en qué etapa real está cada cliente."',
        items: ['CRM cementerio donde los leads se mueren', 'Seguimientos en post-its, Excel y memoria', 'Pipeline que solo tú entiendes (y a medias)'],
      },
      {
        title: 'IA & Agentes 24/7',
        quote: '"Sabes que la velocidad gana. Pero entre operar tu negocio y atender clientes, el bot que prometiste hace 6 meses sigue siendo una conversación pendiente con un freelancer."',
        items: ['Leads del fin de semana sin respuesta hasta el martes', 'Bots genéricos que espantan a tus clientes', 'WhatsApp del dueño como "CRM de emergencia"'],
      },
      {
        title: 'Automatizaciones & Integraciones',
        quote: '"No empezaste tu negocio para perder los sábados configurando Zapier o entendiendo por qué el sistema dejó de hablarle al CRM otra vez."',
        items: ['Sistemas que no se hablan entre sí', 'Procesos manuales que deberían correr solos', 'Errores que descubres semanas después — cuando ya pasó'],
      },
    ];
    return (
      <section className="bg-[#f3f4f6] py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-16 sm:mb-20 lg:mb-24">
              Toda la Tecnología que tu Negocio Necesita.<br />
              Ninguno del Caos.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-16 sm:mb-20">
            {buckets.map((bucket, i) => (
              <Reveal key={bucket.title} delay={i * 120}>
                <div className="bg-white border border-[#e6e8eb] rounded-2xl p-6 sm:p-8 h-full hover:border-[#00bfa5]/40 transition-colors">
                  <h3 className="text-[#06070a] font-poppins font-bold text-lg sm:text-xl mb-4">{bucket.title}</h3>
                  <p className="text-[#7f8694] text-sm leading-relaxed italic mb-6">{bucket.quote}</p>
                  <ul className="space-y-3">
                    {bucket.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#989fab] text-sm">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center text-xl sm:text-2xl lg:text-3xl text-[#06070a] font-poppins font-semibold leading-relaxed max-w-3xl mx-auto">
              La estrategia no es el problema.{' '}
              <em className="italic font-serif text-[#00bfa5]">Nunca tuviste manos suficientes para operarla.</em>
            </p>
          </Reveal>
        </div>
      </section>
    );
  };

  /* ── IMAGINA ESTO — DARK (drama) ── */
  const ImaginaEsto = () => (
    <section className="bg-[#0a2342] py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal><div className="text-center mb-12 sm:mb-16"><EyebrowPill>Imagina Esto</EyebrowPill></div></Reveal>
        <Reveal delay={100}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-white text-center leading-tight tracking-[-0.03em] mb-12 sm:mb-16 lg:mb-20">
            Es Lunes en la Mañana. Todo Ya Está Hecho.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          <Reveal delay={200}>
            <div className="bg-[#0d1f35]/60 border border-red-400/10 rounded-2xl p-6 sm:p-8">
              <h3 className="text-red-400 font-poppins font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                <XCircle className="w-5 h-5" /> Tu Lunes ANTES
              </h3>
              <p className="text-[#e0e0e0]/60 text-sm mb-4">Abres el laptop. Todo llega al mismo tiempo:</p>
              <ul className="space-y-2 mb-6">
                {['Responder WhatsApp del viernes (47 sin leer)', 'Llamar al lead caliente que ya se enfrió', 'Actualizar el Excel de seguimientos', 'El chatbot otra vez sin responder', 'La secuencia de email del lanzamiento', 'La pauta corriendo sin saber si convierte', '¿Mandaste la propuesta a Andrea?', 'Reportes para la junta del jueves', 'Integración rota entre formulario y CRM', 'Cliente nuevo sin onboarding asignado'].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#e0e0e0]/50 text-sm">
                    <span className="text-red-400/50 mt-0.5">□</span> {item}
                  </li>
                ))}
              </ul>
              <p className="text-red-400/80 text-sm font-semibold">La tecnología se empuja a "mañana." Otra vez.</p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="bg-[#0d1f35] border border-[#00bfa5]/20 rounded-2xl p-6 sm:p-8">
              <h3 className="text-[#00bfa5] font-poppins font-bold text-lg sm:text-xl mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Tu Lunes CON Sixteam
              </h3>
              <p className="text-[#e0e0e0]/60 text-sm mb-4">Abres el laptop con tu café. Una notificación:</p>
              <p className="text-white text-sm font-medium mb-4 italic">"Esta semana — operada:"</p>
              <ul className="space-y-3 mb-6">
                {[
                  { bold: '23 leads',              text: 'del fin de semana calificados y en pipeline' },
                  { bold: 'WhatsApp',              text: 'respondido en <2 min, día y noche' },
                  { bold: 'Secuencia de recovery', text: 'enviada a 80 leads fríos — 7 abrieron, 2 ya agendaron' },
                  { bold: 'Pauta',                 text: 'optimizada lunes — CPL bajó 11%' },
                  { bold: 'Agente IA de soporte',  text: 'resolvió 34 consultas sin escalar' },
                  { bold: 'Onboarding automático', text: 'disparado para 3 clientes nuevos' },
                  { bold: 'Reporte semanal',        text: 'en tu inbox a las 7am' },
                  { bold: 'Integración Form→CRM',  text: 'monitoreada — 0 errores' },
                ].map((item) => (
                  <li key={item.bold} className="flex items-start gap-2 text-[#e0e0e0]/80 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                    <span><strong className="text-white">{item.bold}</strong> — {item.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-3 mb-4">
                <AvatarGroup names={['Aura', 'Carlos', 'Laura']} size={32} />
                <p className="text-[#e0e0e0]/60 text-xs">Operado por tu equipo IA + Humanos senior</p>
              </div>
              <p className="text-[#00bfa5] text-sm font-semibold">Pasas la mañana en estrategia y cierres. Porque tu tecnología corre sin ti.</p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="max-w-2xl mx-auto text-center mb-10">
            <p className="text-[#e0e0e0]/70 text-base sm:text-lg italic mb-4">"Yo dedicaba cada domingo en la noche a hacer la lista de lo que no había alcanzado a operar. Hoy esa lista la maneja Sixteam, y mi domingo es para mi familia."</p>
            <p className="text-white font-semibold text-sm">Andrea L. <span className="text-[#e0e0e0]/50 font-normal">— Agencia de Viajes (CO)</span></p>
          </div>
        </Reveal>
        <Reveal>
          <div className="text-center">
            <CtaButton href="/como-funciona" variant="ghost">Ver Cómo Funciona <ArrowRight className="w-4 h-4" /></CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );

  /* ── QUÉ OPERA — white ── */
  const QueOpera = () => {
    const cards = [
      { title: 'Tu CRM, vivo y al día',            icon: BarChart3,      items: ['Pipeline actualizado en tiempo real', 'Etapas con criterios claros que tu equipo respeta', 'Calificación automática por scoring + IA', 'Reportes que tu equipo realmente entiende'] },
      { title: 'Tu WhatsApp, respondiendo 24/7',   icon: Smartphone,     items: ['Agentes IA que califican leads en minutos', 'Handoff al humano cuando el caso lo amerita', 'Cada conversación queda loggeada en el CRM', 'Plantillas optimizadas por tu industria'] },
      { title: 'Tus Emails, saliendo solos',        icon: Mail,           items: ['Secuencias de nurturing para leads fríos', 'Campañas de recovery para oportunidades estancadas', 'Newsletter operado con tu contenido y tu voz', 'Métricas reales: apertura, click, conversión a venta'] },
      { title: 'Tus Agentes IA, sin parar',         icon: Bot,            items: ['Recepcionista virtual que califica antes que tu equipo entre', 'Bot de soporte que resuelve básico, escala lo complejo', 'Agente de seguimiento que recupera leads dormidos', 'Asistentes internos para tu propio equipo'] },
      { title: 'Tus Automatizaciones, sin caídas',  icon: Zap,            items: ['CRM, WhatsApp, email, web, pauta — todo conectado', 'Alertas cuando algo se rompe (antes que tú lo notes)', 'Workflows que reemplazan tareas manuales repetitivas', 'Onboarding automático de clientes nuevos'] },
      { title: 'Tus Dashboards & Reportes, listos', icon: LayoutDashboard, items: ['Métricas que importan, no vanidad', 'Dashboards en tiempo real accesibles desde el celular', 'Reporte semanal ejecutivo en tu inbox los lunes', 'Alertas proactivas cuando algo se sale de rango'] },
      { title: 'Tu Pauta Digital, ejecutada',       icon: Megaphone,      items: ['Campañas en Meta, Google, TikTok, LinkedIn', 'Operadas con tu contenido y tus ideas', 'Optimización semanal de presupuesto', 'Reporting de costo por lead real — no clics'] },
      { title: 'Tu Web & Desarrollo, mantenidos',   icon: Globe,          items: ['Landing pages para cada campaña nueva', 'Páginas actualizadas sin esperar al freelancer', 'Mobile-optimized y rápido', 'Integraciones a medida cuando tu negocio lo pide'] },
      { title: 'Tu Servicio al Cliente, sistematizado', icon: Headset,    items: ['Tickets organizados, asignados, resueltos', 'Escalación clara cuando necesita humano', 'Encuestas de satisfacción automáticas', 'Señales tempranas de churn detectadas por IA'] },
    ];
    return (
      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal><div className="text-center mb-4"><EyebrowPill>Lo Que Corre Por Ti</EyebrowPill></div></Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
              Toda Tu Tecnología — Operada.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
              No es una lista de servicios. Es la lista de cosas de las que nunca más vas a preocuparte.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {cards.map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <div className="bg-[#f3f4f6] border border-[#e6e8eb] rounded-2xl p-5 sm:p-6 h-full hover:border-[#00bfa5]/40 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-[#00bfa5]/10 flex items-center justify-center mb-4 group-hover:bg-[#00bfa5]/20 transition-colors">
                    <card.icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <h3 className="text-[#06070a] font-poppins font-bold text-base sm:text-lg mb-3">{card.title}</h3>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[#7f8694] text-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00bfa5]/70 flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="text-center text-[#989fab] text-sm sm:text-base mt-10 sm:mt-12">
              ...y todo lo que tu operación necesite. Si corre sobre tecnología, lo operamos.
            </p>
          </Reveal>
        </div>
      </section>
    );
  };

  /* ── TÚ DICES — light gray ── */
  const TuDices = () => (
    <section className="bg-[#f3f4f6] py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
            Tú Dices Qué Necesitas. Se Hace.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16">
            Nos cuentas qué necesitas. Operamos la línea de producción completa.
          </p>
        </Reveal>
        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 mb-10 sm:mb-12">
          <Reveal delay={150}>
            <div className="flex justify-start">
              <div className="bg-white border border-[#e6e8eb] rounded-2xl rounded-tl-sm px-5 py-4 max-w-lg">
                <p className="text-[#4e5361] text-sm sm:text-base italic">"Necesito recuperar los 200 leads que entraron en abril y se enfriaron. WhatsApp + email + tracking en CRM."</p>
              </div>
            </div>
          </Reveal>
          {[
            { name: 'Daniel', role: 'Estratega Senior',   action: 'Diseñando',   msg: 'Plan de recovery: segmentación por intent + 4 touches (WhatsApp + email alternados) + scoring de respuesta.' },
            { name: 'Aura',   role: 'Concierge IA',       action: 'Coordinando', msg: 'Asignando tareas a Laura (WhatsApp) y Emma (email). Trackeo en CRM por Carlos.' },
            { name: 'Laura',  role: 'Agente WhatsApp IA', action: 'Ejecutando',  msg: 'Mensajes personalizados saliendo en lotes de 30 con espacio para respuesta humana.' },
            { name: 'Carlos', role: 'Agente CRM IA',      action: 'Trackeando',  msg: 'Pipeline "Recovery Abril" creado — etapas activas — 47 ya respondieron.' },
          ].map((agent, i) => (
            <Reveal key={agent.name} delay={200 + i * 80}>
              <div className="flex justify-end">
                <div className="bg-white border border-[#00bfa5]/20 rounded-2xl rounded-tr-sm px-5 py-4 max-w-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-[#1d70a2] flex items-center justify-center text-white text-xs font-bold">{agent.name[0]}</div>
                    <span className="text-[#06070a] text-xs font-semibold">{agent.name}</span>
                    <span className="text-[#989fab] text-xs">{agent.role}</span>
                    <span className="text-[#00bfa5] text-xs ml-auto">{agent.action}</span>
                  </div>
                  <p className="text-[#4e5361] text-sm">{agent.msg}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={600}>
            <div className="flex justify-center">
              <div className="bg-[#e6faf7] border border-[#00bfa5]/30 rounded-full px-5 py-2.5">
                <p className="text-[#00bfa5] text-sm font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Campaña Activa — Listos los primeros 7 leads para que tu equipo llame.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
            {['Implementar nuevo CRM', 'Lanzar campaña de pauta', 'Construir agente IA', 'Integrar dos sistemas', 'Crear dashboard a medida'].map((chip) => (
              <span key={chip} className="px-4 py-2 bg-white border border-[#e6e8eb] rounded-full text-[#7f8694] text-xs sm:text-sm hover:border-[#00bfa5]/40 hover:text-[#00bfa5] transition-colors cursor-default">{chip}</span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );

  /* ── VIDEO — white ── */
  const VideoSection = () => (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
            Mira Cómo Funciona en Vivo
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12">De brief a operación. Así se ve.</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video bg-[#0a2342] border border-[#1d70a2]/30 rounded-2xl overflow-hidden group cursor-pointer shadow-[0_20px_60px_rgba(10,35,66,0.12)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#00bfa5]/20 border border-[#00bfa5]/40 flex items-center justify-center group-hover:bg-[#00bfa5]/30 transition-colors">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#00bfa5] ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342]/60 to-transparent" />
              <p className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 text-[#e0e0e0]/50 text-xs sm:text-sm">2 min — Dashboard real + agentes + caso concreto</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );

  /* ── PLATAFORMA — light gray ── */
  const Plataforma = () => {
    const steps = [
      { num: '1', title: 'Inicia una Conversación', desc: 'Le cuentas a Aura tu objetivo: "Lanzar la temporada de bodas con campaña en WhatsApp."' },
      { num: '2', title: 'Colaboración IA',         desc: 'Daniel (estrategia) y Carlos (CRM) diseñan el sistema y los flows.' },
      { num: '3', title: 'Aprobación',              desc: 'Revisas el plan en el dashboard. Das luz verde con un click.' },
      { num: '4', title: 'Ejecución Senior',         desc: 'Samuel o Ernesto ejecutan el trabajo complejo, validan, lanzan. La IA opera el día a día.' },
    ];
    return (
      <section className="bg-[#f3f4f6] py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-2">
              Conoce Sixteam Ops
            </h2>
            <p className="text-center text-[#989fab] text-base sm:text-lg mb-4">Confiado por <span className="text-[#06070a] font-semibold">+50</span> negocios en Latam</p>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center text-[#7f8694] text-sm sm:text-base max-w-2xl mx-auto mb-12 sm:mb-16">
              Experimenta el flujo completo — desde "necesito esto" a "está operando". <strong className="text-[#06070a]">Un solo lugar, todo operando.</strong>
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="bg-white border border-[#e6e8eb] rounded-2xl p-5 sm:p-6 h-full hover:border-[#00bfa5]/40 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#00bfa5]/10 flex items-center justify-center text-[#00bfa5] font-bold text-sm mb-4">{step.num}</div>
                  <h3 className="text-[#06070a] font-poppins font-bold text-base sm:text-lg mb-2">{step.title}</h3>
                  <p className="text-[#7f8694] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {/* Chat mockup stays dark — it IS the product UI */}
          <Reveal delay={400}>
            <div className="max-w-lg mx-auto bg-[#0a2342] border border-[#1d70a2]/30 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(10,35,66,0.15)] mb-10 sm:mb-12">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1d70a2] to-[#00bfa5] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Aura — Concierge</p>
                  <p className="text-[#00bfa5] text-xs flex items-center gap-1"><span className="w-1.5 h-1.5 bg-[#00bfa5] rounded-full animate-pulse" /> Lista para empezar</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-xl rounded-tl-sm px-4 py-3 max-w-xs">
                  <p className="text-[#e0e0e0] text-sm">Listo para empezar. ¿Qué construimos hoy?</p>
                </div>
                <div className="bg-[#00bfa5]/10 rounded-xl rounded-tr-sm px-4 py-3 max-w-xs ml-auto">
                  <p className="text-[#e0e0e0] text-sm">Necesito automatizar el seguimiento de cotizaciones de viaje + WhatsApp post-venta.</p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <CtaButton href="/precios" className="w-full">Empezar a Delegar Hoy</CtaButton>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center mb-10">
              <p className="text-[#7f8694] text-base sm:text-lg italic mb-4">"Sixteam es un salvavidas. Es tan fácil mandarles un brief de lo que necesito. Hacen el trabajo rápido y se aseguran de que esté bien antes de cerrar. Llevamos años y vamos a seguir."</p>
              <p className="text-[#06070a] font-semibold text-sm">Hana D. <span className="text-[#989fab] font-normal">— Cliente Verificada (LATAM)</span></p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  };

  /* ── AI + HUMANO — white ── */
  const AiHumano = () => (
    <section className="bg-white py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
            Empieza con IA. Escala al Humano Senior cuando se Necesite.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20">
            Velocidad y escala de IA con criterio y juicio de operadores senior — sin elegir entre los dos.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16">
          <Reveal delay={200}>
            <div className="bg-[#f3f4f6] border border-[#e6e8eb] rounded-2xl p-6 sm:p-8 h-full hover:border-[#00bfa5]/40 transition-colors">
              <h3 className="text-[#00bfa5] font-poppins font-bold text-lg sm:text-xl mb-2">La IA Ejecuta</h3>
              <p className="text-[#989fab] text-sm mb-6">Velocidad, escala y trabajo pesado.</p>
              <ul className="space-y-3">
                {['Respuesta a leads 24/7', 'Calificación con scoring + contexto', 'Secuencias de email y WhatsApp', 'Mensajes de seguimiento personalizados', 'Actualizaciones automáticas del CRM', 'Alertas de pipeline en riesgo', 'Dashboards y reportes en tiempo real', 'Tareas repetitivas que antes te quemaban el equipo'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4e5361] text-sm">
                    <Bot className="w-4 h-4 text-[#00bfa5] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="bg-[#f3f4f6] border border-[#e6e8eb] rounded-2xl p-6 sm:p-8 h-full hover:border-[#1d70a2]/40 transition-colors">
              <h3 className="text-[#0a2342] font-poppins font-bold text-lg sm:text-xl mb-2">Los Humanos Senior Dirigen</h3>
              <p className="text-[#989fab] text-sm mb-6">Criterio, decisiones y construcción compleja.</p>
              <ul className="space-y-3">
                {['Estrategia de RevOps y operaciones', 'Diseño de pipeline, procesos, scoring', 'Implementación de CRM e integraciones', 'Construcción de agentes IA a medida', 'Análisis mensual de qué funciona y qué no', 'Ajustes y mejoras continuas', 'Decisiones que la IA no puede tomar sola', 'Responsabilidad personal por tu cuenta'].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#4e5361] text-sm">
                    <Users className="w-4 h-4 text-[#1d70a2] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <p className="text-center text-[#06070a] text-lg sm:text-xl font-poppins font-semibold max-w-3xl mx-auto">
            No tienes que elegir entre "le tiro plata a un software" y "le tiro plata a una consultora". Tienes ambos, integrados, operando.
          </p>
        </Reveal>
      </div>
    </section>
  );

  /* ── INDUSTRIAS — light gray ── */
  const Industrias = () => {
    const industries = [
      { name: 'Agencias de Viajes y Turismo',   path: '/para/agencias-de-viaje'      },
      { name: 'Inmobiliarias y Constructoras',  path: '/para/inmobiliarias'          },
      { name: 'Servicios Profesionales',        path: '/para/servicios-profesionales' },
      { name: 'Clínicas y Centros de Salud',    path: '/para/salud'                  },
      { name: 'Educación y Cursos',             path: '/para/educacion'              },
      { name: 'Servicios Generales',            path: '/para/servicios-generales'    },
      { name: 'Hotelería & Hospitalidad',       path: '/para/hoteleria'              },
      { name: 'Firmas Legales y Contables',     path: '/para/firmas-profesionales'   },
    ];
    return (
      <section className="bg-[#f3f4f6] py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal><div className="text-center mb-4"><EyebrowPill>Construido Para Ti</EyebrowPill></div></Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
              Construido Para Tu Industria
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 lg:mb-16">
              Cada negocio es distinto. Mira exactamente cómo operamos el tuyo.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 60}>
                <Link to={ind.path} className="block bg-white border border-[#e6e8eb] rounded-2xl p-5 sm:p-6 hover:border-[#00bfa5]/40 hover:-translate-y-1 transition-all duration-300 group">
                  <h3 className="text-[#06070a] font-poppins font-semibold text-base sm:text-lg mb-1 group-hover:text-[#00bfa5] transition-colors">{ind.name}</h3>
                  <div className="flex items-center gap-1 text-[#00bfa5] text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">Ver más <ChevronRight className="w-3 h-3" /></div>
                </Link>
              </Reveal>
            ))}
            <Reveal delay={industries.length * 60}>
              <Link to="/para" className="flex items-center justify-center bg-[#00bfa5]/8 border border-[#00bfa5]/20 rounded-2xl p-5 sm:p-6 hover:bg-[#00bfa5]/15 transition-colors">
                <span className="text-[#00bfa5] font-poppins font-semibold text-base sm:text-lg">Ver Todas →</span>
              </Link>
            </Reveal>
          </div>
          <Reveal>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-[#7f8694] text-base sm:text-lg italic mb-4">"Probamos freelancers, agencias, hasta contratamos in-house. Nada nos dio la consistencia y velocidad de Sixteam. Nuestra tecnología finalmente opera como un negocio real, no como un Frankenstein."</p>
              <p className="text-[#06070a] font-semibold text-sm">Miguel T. <span className="text-[#989fab] font-normal">— Agencia de Viajes (CO)</span></p>
            </div>
          </Reveal>
        </div>
      </section>
    );
  };

  /* ── EL EQUIPO — white ── */
  const ElEquipo = () => {
    const agents = [
      { name: 'Aura',   role: 'Concierge',          desc: 'Recibe lo que necesitas y lo desglosa',        color: '#1d70a2' },
      { name: 'Carlos', role: 'CRM & Pipeline',      desc: 'Mantiene el pipeline vivo y calificado',       color: '#00bfa5' },
      { name: 'Laura',  role: 'WhatsApp 24/7',       desc: 'Responde, califica y agenda en minutos',        color: '#0d6659' },
      { name: 'Emma',   role: 'Email & Nurturing',   desc: 'Diseña y ejecuta secuencias',                  color: '#7c3aed' },
      { name: 'Daniel', role: 'Estratega Senior IA', desc: 'Diseña los flows y la estrategia',              color: '#d97706' },
      { name: 'Diana',  role: 'Analytics & Alertas', desc: 'Reportes, dashboards y alertas proactivas',    color: '#e11d48' },
    ];
    const humans = [
      { name: 'Samuel',  role: 'Revenue Strategist', desc: 'Diseña el sistema de revenue',                 color: '#1d70a2' },
      { name: 'Ernesto', role: 'Process Engineer',   desc: 'Construye los procesos y las integraciones',   color: '#00bfa5' },
    ];
    return (
      <section className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
              El Motor Detrás de Tu Operación
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-12 sm:mb-16">
              <strong className="text-[#06070a]">6 Agentes IA + Operadores Senior</strong> trabajando detrás de la pantalla — para que tú no tengas que.
            </p>
          </Reveal>
          <h3 className="text-[#00bfa5] font-poppins font-bold text-sm uppercase tracking-wider text-center mb-6 sm:mb-8">Tus 6 Agentes IA</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16">
            {agents.map((agent, i) => (
              <Reveal key={agent.name} delay={i * 60}>
                <div className="bg-[#f3f4f6] border border-[#e6e8eb] rounded-2xl p-5 sm:p-6 text-center hover:border-[#00bfa5]/40 transition-colors">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{ backgroundColor: agent.color }}>{agent.name[0]}</div>
                  <h4 className="text-[#06070a] font-poppins font-bold text-base mb-1">{agent.name} — {agent.role}</h4>
                  <p className="text-[#7f8694] text-sm">{agent.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <h3 className="text-[#0a2342] font-poppins font-bold text-sm uppercase tracking-wider text-center mb-6 sm:mb-8">Tus Operadores Senior</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto mb-10 sm:mb-12">
            {humans.map((human, i) => (
              <Reveal key={human.name} delay={i * 100}>
                <div className="bg-[#f3f4f6] border border-[#e6e8eb] rounded-2xl p-5 sm:p-6 text-center hover:border-[#1d70a2]/40 transition-colors">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4" style={{ backgroundColor: human.color }}>{human.name[0]}</div>
                  <h4 className="text-[#06070a] font-poppins font-bold text-base mb-1">{human.name}</h4>
                  <p className="text-[#00bfa5] text-sm mb-2">{human.role}</p>
                  <p className="text-[#7f8694] text-sm">{human.desc}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="bg-[#f3f4f6] border border-dashed border-[#b2b8c2] rounded-2xl p-5 sm:p-6 text-center flex flex-col items-center justify-center">
                <Users className="w-8 h-8 text-[#b2b8c2] mb-2" />
                <p className="text-[#989fab] text-sm">+ Equipo de Implementación</p>
                <p className="text-[#b2b8c2] text-xs">Specialists, devs, ad ops</p>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <p className="text-center text-[#00bfa5] text-sm sm:text-base font-semibold mb-6 sm:mb-8">
              Cero rotación de cuenta. Las mismas personas todo el contrato. Responsabilidad personal.
            </p>
          </Reveal>
          <Reveal>
            <div className="text-center">
              <CtaButton href="/equipo" variant="ghost">Conoce al Equipo Completo <ArrowRight className="w-4 h-4" /></CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    );
  };

  /* ── PRECIOS — light gray ── */
  const Precios = () => {
    const [anual, setAnual] = useState(false);

    const planes = [
      {
        id: 'arranque',
        nombre: 'Esencial',
        badge: null,
        highlight: false,
        para: 'Emprendedores y negocios pequeños',
        precioMensual: 200,
        precioAnual: 165,
        frentes: '1 agente IA activo',
        items: [
          { label: 'Créditos mensuales', value: '60 no acumulables' },
          { label: 'Agente IA', value: 'Canal más urgente' },
          { label: 'Equipo humano', value: 'Especialista dentro del plan de créditos' },
          { label: 'Solicitudes', value: 'Se descuentan según complejidad' },
          { label: 'Plataforma CRM all-in-one', value: 'Incluida (valor $97/mes)' },
          { label: 'Wallet mensajería (SMS/email/voz)', value: '$30/mes' },
          { label: 'Onboarding', value: 'Activación inicial guiada' },
        ],
        cta: 'Empezar con Esencial',
        ctaVariant: 'outline' as const,
      },
      {
        id: 'core',
        nombre: 'Integral',
        badge: 'Más elegido',
        highlight: true,
        para: 'Operaciones multi-canal',
        precioMensual: 499,
        precioAnual: 415,
        frentes: 'Agentes IA multi-canal',
        subtitulo: 'Más capacidad que Esencial',
        items: [
          { label: 'Créditos mensuales', value: '160 no acumulables' },
          { label: 'Canales operados', value: 'CRM + WhatsApp + Email' },
          { label: 'Equipo humano', value: 'Especialistas para integraciones y automatizaciones' },
          { label: 'Onboarding VIP', value: 'Estrategia 1:1 + setup + fast-track' },
          { label: 'Plataforma CRM all-in-one', value: 'Incluida' },
          { label: 'Wallet mensajería', value: '$30/mes' },
        ],
        cta: 'Empezar con Integral',
        ctaVariant: 'primary' as const,
      },
      {
        id: 'plus',
        nombre: 'Total',
        badge: null,
        highlight: false,
        para: 'Operaciones de mayor volumen',
        precioMensual: 1200,
        precioAnual: 1200,
        frentes: 'Equipo dedicado',
        items: [
          { label: 'Créditos mensuales', value: 'Desde 400, acumulables según solicitud' },
          { label: 'Agentes IA', value: 'Alto volumen en todos tus sistemas' },
          { label: 'Equipo humano', value: 'PM dedicado + equipo completo' },
          { label: 'Estrategia', value: 'Llamadas estratégicas semanales' },
          { label: 'Plataforma CRM all-in-one', value: 'Incluida' },
          { label: 'Wallet mensajería', value: '$30/mes' },
        ],
        cta: 'Cotizar Total',
        ctaVariant: 'outline' as const,
      },
    ];

    return (
      <section className="bg-[#f3f4f6] py-20 sm:py-28 lg:py-36">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Eyebrow + heading */}
          <Reveal>
            <div className="text-center mb-4">
              <EyebrowPill>Planes y Precios</EyebrowPill>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-bold text-[#06070a] text-center leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
              Simple. Predecible. Sin Sorpresas.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-center text-[#666c7a] text-base sm:text-lg max-w-2xl mx-auto mb-4">
              Empieza con el <strong className="text-[#06070a]">Diagnóstico Sixteam ($2,500)</strong> — mapeo agéntico de tu operación + roadmap cuantificado. El punto de entrada antes de cualquier plan.
            </p>
          </Reveal>

          {/* Toggle mensual / anual */}
          <Reveal delay={200}>
            <div className="flex items-center justify-center gap-4 mb-12 sm:mb-16">
              <span className={`text-sm font-semibold font-poppins transition-colors ${!anual ? 'text-[#06070a]' : 'text-[#989fab]'}`}>
                Mensual
              </span>
              <button
                onClick={() => setAnual((v) => !v)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none ${anual ? 'bg-[#00bfa5]' : 'bg-[#d1d5db]'}`}
                aria-label="Cambiar entre facturación mensual y anual"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${anual ? 'translate-x-6' : 'translate-x-0'}`}
                />
              </button>
              <span className={`text-sm font-semibold font-poppins transition-colors ${anual ? 'text-[#06070a]' : 'text-[#989fab]'}`}>
                Anual
              </span>
              {anual && (
                <span className="inline-flex items-center px-3 py-1 bg-[#e6faf7] border border-[#b3f0e5] rounded-full text-[#00bfa5] text-xs font-semibold">
                  2 meses gratis
                </span>
              )}
            </div>
          </Reveal>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-10 sm:mb-12">
            {planes.map((plan, i) => (
              <Reveal key={plan.id} delay={i * 100}>
                <div
                  className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 h-full transition-all duration-300
                    ${plan.highlight
                      ? 'bg-[#0a2342] border-[#00bfa5]/30 text-white shadow-[0_20px_60px_rgba(10,35,66,0.18)] -translate-y-2'
                      : 'bg-white border-[#e6e8eb] hover:border-[#00bfa5]/40 hover:-translate-y-1'
                    }`}
                >
                  {/* Badge */}
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-4 py-1.5 bg-[#00bfa5] text-white text-xs font-bold font-poppins rounded-full shadow-[0_4px_12px_rgba(0,191,165,0.35)] whitespace-nowrap">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Plan name + para */}
                  <div className="mb-6">
                    <h3 className={`font-poppins font-bold text-xl sm:text-2xl mb-1 ${plan.highlight ? 'text-white' : 'text-[#06070a]'}`}>
                      {plan.nombre}
                    </h3>
                    {plan.subtitulo && (
                      <p className="text-[#00bfa5] text-xs font-semibold mb-1">{plan.subtitulo}</p>
                    )}
                    <p className={`text-xs sm:text-sm ${plan.highlight ? 'text-[#e0e0e0]/60' : 'text-[#989fab]'}`}>
                      {plan.para}
                    </p>
                  </div>

                  {/* Precio */}
                  <div className="mb-6">
                    <div className="flex items-end gap-1">
                      <span className={`font-poppins font-black text-4xl sm:text-5xl leading-none ${plan.highlight ? 'text-white' : 'text-[#06070a]'}`}>
                        ${(anual ? plan.precioAnual : plan.precioMensual).toLocaleString('en-US')}
                      </span>
                      <span className={`text-sm pb-1 ${plan.highlight ? 'text-[#e0e0e0]/60' : 'text-[#989fab]'}`}>/mes</span>
                    </div>
                    {anual && (
                      <p className="text-[#00bfa5] text-xs mt-1 font-semibold">
                        Facturado anualmente · ahorro de 2 meses
                      </p>
                    )}
                    {!anual && (
                      <p className={`text-xs mt-1 ${plan.highlight ? 'text-[#e0e0e0]/40' : 'text-[#b2b8c2]'}`}>
                        Facturado mes a mes
                      </p>
                    )}
                  </div>

                  {/* Frentes */}
                  <div className={`inline-flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold mb-6 ${plan.highlight ? 'bg-[#00bfa5]/15 text-[#00bfa5]' : 'bg-[#e6faf7] text-[#00bfa5]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                    {plan.frentes}
                  </div>

                  {/* Feature list */}
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.items.map((item) => (
                      <li key={item.label} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-[#00bfa5]' : 'text-[#00bfa5]/70'}`} />
                        <span className={`text-sm leading-snug ${plan.highlight ? 'text-[#e0e0e0]/80' : 'text-[#4e5361]'}`}>
                          <span className={`font-semibold ${plan.highlight ? 'text-white' : 'text-[#06070a]'}`}>{item.label}:</span>{' '}
                          {item.value}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <CtaButton
                    href="/precios"
                    variant={plan.ctaVariant}
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </CtaButton>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bono urgencia Core */}
          <Reveal delay={400}>
            <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="bg-[#e6faf7] border border-[#00bfa5]/30 rounded-2xl p-5 sm:p-6 text-center">
                <p className="text-[#0d6659] text-sm sm:text-base leading-relaxed">
                  <strong className="text-[#06070a]">Bono de Onboarding VIP</strong>:{' '}
                  Firma <strong className="text-[#00bfa5]">Integral esta semana</strong> → setup completo gratis + llamada de estrategia 1:1 + primeros frentes acelerados.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Diagnóstico card */}
          <Reveal delay={300}>
            <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="bg-white border border-[#e6e8eb] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="flex-1">
                  <p className="text-[#00bfa5] text-xs font-bold uppercase tracking-wider mb-1">Punto de entrada recomendado</p>
                  <h3 className="text-[#06070a] font-poppins font-bold text-lg sm:text-xl mb-2">Diagnóstico Sixteam</h3>
                  <p className="text-[#7f8694] text-sm leading-relaxed">
                    Mapeo agéntico de tu operación + roadmap cuantificado. Precio único: <strong className="text-[#06070a]">$2,500 USD</strong>.
                    El ~50% de clientes convierte a suscripción luego.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full sm:w-auto">
                  <CtaButton href="/diagnostico" className="w-full sm:w-auto whitespace-nowrap">
                    Solicitar Diagnóstico
                  </CtaButton>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Garantías y términos */}
          <Reveal delay={500}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-center">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#00bfa5] flex-shrink-0" />
                <span className="text-[#4e5361] text-sm">Garantía <strong className="text-[#06070a]">30 días</strong> money-back</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#00bfa5] flex-shrink-0" />
                <span className="text-[#4e5361] text-sm"><strong className="text-[#06070a]">Sin contrato</strong> de permanencia — mes a mes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#00bfa5] flex-shrink-0" />
                <span className="text-[#4e5361] text-sm">Setup fee = <strong className="text-[#06070a]">1.5× la mensualidad</strong> del plan</span>
              </div>
            </div>
          </Reveal>

        </div>
      </section>
    );
  };

  /* ── COSTO ESPERAR — DARK ── */
  const CostoEsperar = () => (
    <section className="bg-[#0a2342] py-20 sm:py-28 lg:py-36">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal><div className="text-center mb-4"><EyebrowPill>El Costo de Esperar</EyebrowPill></div></Reveal>
        <Reveal delay={100}>
          <div className="max-w-3xl mx-auto">
            <p className="text-white text-xl sm:text-2xl lg:text-3xl font-poppins font-semibold leading-relaxed text-center mb-6 sm:mb-8">
              Cada semana sin alguien operando tu tecnología es otra semana de leads que se enfriaron, follow-ups que no salieron, y competidores apareciendo cuando tú no podías.
            </p>
            <p className="text-[#e0e0e0]/70 text-base sm:text-lg leading-relaxed text-center">
              Los leads que no estás respondiendo hoy se están yendo a otro lado. La integración que sigues posponiendo es dinero saliendo en silencio. El bot que ibas a montar el mes pasado son clientes que prefirieron al que sí contestó.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );

  /* ── CTA FINAL — DARK ── */
  const CtaFinal = () => (
    <section className="relative bg-[#0a2342] py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d4f] to-[#0a2342]" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-[#00bfa5]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1d70a2]/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins font-black text-white leading-tight tracking-[-0.03em] mb-4 sm:mb-6">
              Finalmente. Tecnología que Realmente Opera.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-[#e0e0e0]/70 text-base sm:text-lg mb-8 sm:mb-10">
              Promo desde <strong className="text-white">$200 USD/mes</strong>. Diagnóstico de cuña <strong className="text-white">$2,500 USD</strong> — porque llevamos años operando para negocios en Latam y sabemos lo que se rompe.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 sm:mb-12">
              <CtaButton href="/precios">Ver Planes y Precios</CtaButton>
              <CtaButton href="/diagnostico" variant="secondary">Empezar con Diagnóstico</CtaButton>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-[#e0e0e0]/50 text-xs sm:text-sm italic max-w-2xl mx-auto leading-relaxed">
              <strong className="text-white">P.S.</strong> Mientras lees esto, tus competidores ya tienen su tecnología operada. El gap se abre 1% cada semana. En 12 meses, eso es 50% de diferencia. El diagnóstico toma 2 semanas y vale $2,500. Si en esa conversación no te encontramos $25,000 USD/año en oportunidades perdidas, te devolvemos el dinero.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );

  /* ── FOOTER — DARK ── */
  const FooterCustom = () => {
    const columns = [
      { title: 'Producto',     links: [{ name: 'Cómo Funciona', path: '/como-funciona' }, { name: 'Capacidades', path: '/capacidades' }, { name: 'Diagnóstico Sixteam', path: '/diagnostico' }, { name: 'Conoce al Equipo', path: '/equipo' }, { name: 'Precios', path: '/precios' }] },
      { title: 'Capacidades',  links: [{ name: 'CRM y Pipeline Comercial', path: '/capacidades/crm' }, { name: 'WhatsApp Marketing & Soporte', path: '/capacidades/whatsapp' }, { name: 'Email Marketing', path: '/capacidades/email' }, { name: 'Agentes IA', path: '/capacidades/agentes-ia' }, { name: 'Automatizaciones', path: '/capacidades/automatizaciones' }, { name: 'Pauta Digital Operada', path: '/capacidades/pauta' }, { name: 'Desarrollo Web', path: '/capacidades/web' }, { name: 'Dashboards & Reportes', path: '/capacidades/dashboards' }] },
      { title: 'Industrias',   links: [{ name: 'Agencias de Viajes', path: '/industrias/agencias-de-viaje' }, { name: 'Inmobiliarias', path: '/industrias/inmobiliarias' }, { name: 'Servicios Profesionales', path: '/para/servicios-profesionales' }, { name: 'Clínicas y Salud', path: '/para/salud' }, { name: 'Educación', path: '/para/educacion' }, { name: 'Hotelería', path: '/para/hoteleria' }, { name: 'Servicios Generales', path: '/industrias/servicios-generales' }, { name: 'Ver todas →', path: '/industrias' }] },
      { title: 'Plataformas',  links: [{ name: 'GoHighLevel', path: '#' }, { name: 'HubSpot', path: '#' }, { name: 'ActiveCampaign', path: '#' }, { name: 'Zapier', path: '#' }, { name: 'Make', path: '#' }, { name: 'n8n', path: '#' }, { name: 'OpenAI / Anthropic', path: '#' }, { name: 'Ver todas →', path: '#' }] },
      { title: 'Empresa',      links: [{ name: 'Nosotros', path: '/nosotros' }, { name: 'Casos de Éxito', path: '/casos-exito' }, { name: 'Blog', path: '/blog' }, { name: 'Contacto', path: '/contacto' }] },
      { title: 'Legal',        links: [{ name: 'Privacidad', path: '/politicas' }, { name: 'Términos', path: '/terminos' }, { name: 'Política de Uso', path: '/terminos' }] },
    ];
    return (
      <footer className="bg-[#0a2342] border-t border-white/5 text-white font-lato">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="mb-10 sm:mb-12">
            <img src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png" alt="Sixteam" className="h-8 sm:h-10 w-auto mb-4" loading="lazy" />
            <p className="text-[#e0e0e0]/70 text-sm max-w-md">Tu equipo de Tecnología & IA, operando 24/7. Implementamos. Operamos. No te dejamos solo.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-6">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-white font-poppins font-semibold text-sm mb-4">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.name}><Link to={link.path} className="text-[#e0e0e0]/50 hover:text-[#00bfa5] transition-colors text-xs sm:text-sm">{link.name}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 mt-10 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[#e0e0e0]/40 text-xs sm:text-sm">© 2026 Sixteam. Todos los derechos reservados.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              {['LinkedIn', 'Instagram', 'YouTube', 'WhatsApp'].map((s) => (
                <span key={s} className="text-[#e0e0e0]/40 hover:text-[#00bfa5] transition-colors text-xs sm:text-sm cursor-pointer">{s}</span>
              ))}
              <Link to="#" className="text-[#00bfa5] hover:text-white transition-colors text-xs sm:text-sm font-semibold">Login Cliente →</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  /* ── RENDER ── */
  return (
    <div className="min-h-screen bg-[#f3f4f6] font-lato">
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixteam.pro",
        "url": "https://sixteam.pro",
        "logo": "https://sixteam.pro/LOGO.png",
        "description": "Sixteam.pro implementa y opera CRM, automatizaciones e inteligencia artificial para empresas en Latinoamérica.",
        "foundingDate": "2017",
        "areaServed": ["Colombia", "México", "Argentina", "Chile", "Perú", "Latinoamérica"],
        "serviceType": ["Operación de CRM", "Automatización", "Agentes IA", "RevOps", "WhatsApp Business"],
        "contactPoint": { "@type": "ContactPoint", "telephone": "+573004188522", "email": "alpha@sixteam.pro", "contactType": "customer service", "availableLanguage": "Spanish", "areaServed": ["CO", "MX", "AR", "CL", "PE"] },
        "sameAs": ["https://www.linkedin.com/company/sixteam-pro"]
      }} />
      <Header />
      <Hero />
      <DashboardWidget />
      <LogoBar />
      <ElProblema />
      <ImaginaEsto />
      <QueOpera />
      <TuDices />
      <VideoSection />
      <Plataforma />
      <AiHumano />
      <Industrias />
      <ElEquipo />
      <Precios />
      <CostoEsperar />
      <CtaFinal />
      <FooterCustom />
    </div>
  );
};

export default HomeAA;
