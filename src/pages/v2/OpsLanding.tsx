import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Bot, CalendarDays, Check, ChevronDown, Code2, Database, Globe, Hammer,
  Mail, Megaphone, MessageCircle, Package, Phone, Play, Plug, Radar, Search, Users, Workflow,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import TestimonialsV2 from "@/components/v2/sections/TestimonialsV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { gtm } from "@/lib/gtm";

/* ── Acciones de conversión de la landing ─────────── */
const WA_PHONE = "573004188522";
const BOOKING_IFRAME_SRC = "https://web.sixteam.pro/widget/booking/9Fq9Yo6eGNv9cnc7YRc2";
const BOOKING_IFRAME_ID = "9Fq9Yo6eGNv9cnc7YRc2_1783637690382";
const FORM_EMBED_SCRIPT_SRC = "https://web.sixteam.pro/js/form_embed.js";

const openWhatsApp = (source: string, message: string) => {
  gtm.whatsappClick(source);
  gtm.ctaClick("whatsapp_ops", source);
  window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
};

const MSG_GENERAL =
  "Hola, vengo de la página de Sixteam Ops y quiero saber cómo funcionaría en mi negocio.";
const MSG_ESENCIAL = "Hola, me interesa el plan Esencial de Sixteam Ops. ¿Podemos hablar?";
const MSG_INTEGRAL = "Hola, me interesa el plan Integral de Sixteam Ops. ¿Podemos hablar?";
const MSG_TOTAL = "Hola, quiero cotizar el plan Total de Sixteam Ops. ¿Podemos hablar?";
const MSG_ASSESSMENT = "Hola, me interesa el Sixteam Assessment (consultoría). ¿Podemos hablar?";
const MSG_TRANSFORM = "Hola, me interesa una implementación con Sixteam Transform. ¿Podemos hablar?";

/* Video vertical del fundador — colocar el archivo en public/videos/fundador-sixteam.mp4.
   Mientras el archivo no exista, el slot muestra la foto real del equipo fundador. */
const FOUNDER_VIDEO_SRC = "/videos/fundador-sixteam.mp4";

/* ── Primitivas locales ──────────────────────────────────────────── */
const CheckItem: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <div className="flex items-start gap-2.5">
    <div className="w-4 h-4 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/35 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-2.5 w-2.5 text-v2-accent-teal-deep" />
    </div>
    <span className="font-lato text-[14px] text-v2-ink-body leading-snug">{text}</span>
  </div>
);

const WaButton: React.FC<{
  source: string;
  message?: string;
  variant?: "primary" | "outline" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}> = ({ source, message = MSG_GENERAL, variant = "primary", size = "lg", className, children }) => (
  <ButtonV2
    variant={variant}
    size={size}
    className={className}
    onClick={() => openWhatsApp(source, message)}
  >
    {children}
  </ButtonV2>
);

const AgendaButton: React.FC<{
  source: string;
  variant?: "primary" | "outline" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}> = ({ source, variant = "outline", size = "lg", className, children }) => (
  <ButtonV2 asChild variant={variant} size={size} className={className}>
    <a href="#agenda" onClick={() => gtm.ctaClick("booking_ops", source)}>
      {children}
    </a>
  </ButtonV2>
);

/* ── Video vertical del fundador (9:16) ──────────────────────────── */
const FounderVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [available, setAvailable] = useState(true);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    gtm.ctaClick("founder_video_play", "ops_hero");
    videoRef.current?.play();
    setPlaying(true);
  };

  return (
    <figure className="w-full max-w-[280px] md:max-w-[310px] mx-auto lg:mr-0">
      <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-v2-border-medium bg-v2-ink-heading shadow-[0_24px_64px_rgba(10,35,66,0.18)] rotate-[1.5deg]">
        {available ? (
          <>
            <video
              ref={videoRef}
              src={FOUNDER_VIDEO_SRC}
              poster="/videos/fundador-poster.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              playsInline
              controls={playing}
              preload="metadata"
              onError={() => setAvailable(false)}
              onEnded={() => setPlaying(false)}
            />
            {!playing && (
              <button
                onClick={start}
                aria-label="Reproducir video del fundador"
                className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-t from-[#0a2342]/80 via-[#0a2342]/20 to-transparent cursor-pointer group"
              >
                <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-6 w-6 text-v2-ink-heading ml-1" fill="currentColor" />
                </span>
                <span className="font-lato text-[13px] font-semibold text-white px-4 text-center">
                  Ver mensaje del fundador
                </span>
              </button>
            )}
          </>
        ) : (
          <div className="absolute inset-0 flex flex-col bg-gradient-to-b from-[#f4ecd8] to-[#e6d9b8]">
            <img
              src="/founders-slot.webp"
              alt="Equipo fundador de Sixteam.pro"
              decoding="async"
              className="absolute bottom-0 inset-x-0 h-[74%] w-full object-cover object-top"
            />
            <div className="relative mt-auto px-5 pb-5 pt-16 bg-gradient-to-t from-[#0a2342]/85 via-[#0a2342]/35 to-transparent">
              <p className="font-poppins font-bold text-[15px] text-white">El equipo fundador</p>
              <p className="font-lato text-[12px] text-white/75">Sixteam.pro</p>
            </div>
          </div>
        )}
      </div>
      <figcaption className="font-lato text-[12.5px] text-v2-ink-muted text-center mt-4 lg:pr-2">
        {available
          ? "Samuel Burgos · Director General de Sixteam.pro"
          : "El equipo fundador de Sixteam.pro"}
      </figcaption>
    </figure>
  );
};

/* ── FAQ (respuestas canónicas de manejo de objeciones) ──────────── */
const faqs = [
  {
    q: "¿En qué se diferencian de una agencia?",
    a: "Las agencias implementan y se van. Nosotros nos quedamos operando contigo, mes a mes: si algo se rompe, lo arreglamos nosotros. No te dejamos solo.",
  },
  {
    q: "¿No es lo mismo que comprar un CRM?",
    a: "El CRM es una herramienta. Nosotros operamos la herramienta, los procesos, la IA y el equipo. Sin operador, el CRM se convierte en un cementerio de datos.",
  },
  {
    q: "¿Quién hace el trabajo: la IA o personas?",
    a: "Los dos. Los agentes de IA operan lo repetitivo 24/7; nuestros especialistas humanos dedican horas reales cada mes a lo estratégico. Velocidad de máquina, criterio humano.",
  },
  {
    q: "¿Cuánto demora ver resultados?",
    a: "Los primeros cambios operativos — respuesta más rápida, seguimiento estructurado — se ven en las primeras 2 a 4 semanas. El impacto en métricas de negocio suele tomar 60 a 90 días.",
  },
  {
    q: "¿Cómo es el contrato?",
    a: "Plan mensual con aviso de 30 días — no hay letra chica. El alcance se define antes de empezar y todo el trabajo queda documentado: el conocimiento de tu operación es tuyo, no nuestro.",
  },
];

const FaqItem: React.FC<{ q: string; a: string; open: boolean; onToggle: () => void; panelId: string }> = ({
  q, a, open, onToggle, panelId,
}) => (
  <div className="bg-white border border-v2-border-subtle rounded-2xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      aria-expanded={open}
      aria-controls={panelId}
    >
      <span className="font-poppins font-semibold text-[16px] text-v2-ink-heading">{q}</span>
      <ChevronDown
        className={`h-4 w-4 text-v2-accent-teal-deep flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
    <div
      id={panelId}
      role="region"
      aria-label={q}
      className="grid transition-[grid-template-rows] duration-300 ease-out"
      style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
    >
      <div className="overflow-hidden">
        <p className="px-6 pb-6 font-lato text-[15px] text-v2-ink-body leading-[1.7]">{a}</p>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   Landing de pauta — Sixteam Ops
   Sin navegación (cero fugas), acciones de conversión claras (agenda y WhatsApp),
   prueba social temprana, precios transparentes, FAQ anti-objeción.
   ═══════════════════════════════════════════════════════════════════ */
const OpsLanding = () => {
  useSEO({
    title: "Sixteam Ops — Tu equipo de tecnología e IA, mes a mes | Sixteam.pro",
    description:
      "Humanos expertos + agentes de IA operan tu CRM, WhatsApp, automatizaciones y métricas. Sin contratar personal adicional. Promo desde $200 USD/mes.",
    noindex: true,
  });

  const ref = useScrollReveal<HTMLDivElement>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Atribución de pauta: los UTM de la URL van al dataLayer para cruzarlos con whatsapp_click en GTM
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    if (Object.keys(utm).length) gtm.push("ops_landing_utm", utm);
  }, []);

  useEffect(() => {
    const script = document.querySelector<HTMLScriptElement>(`script[src="${FORM_EMBED_SCRIPT_SRC}"]`);
    if (script) return;

    const embedScript = document.createElement("script");
    embedScript.src = FORM_EMBED_SCRIPT_SRC;
    embedScript.type = "text/javascript";
    embedScript.async = true;
    document.body.appendChild(embedScript);
  }, []);

  useEffect(() => {
    if (window.location.hash !== "#agenda") return;

    window.setTimeout(() => {
      document.getElementById("agenda")?.scrollIntoView({ block: "start" });
    }, 0);
  }, []);

  return (
    <div className="min-h-screen bg-v2-surface text-v2-ink-body font-lato antialiased">

      {/* ── Barra superior mínima: logo + una sola acción ── */}
      <header className="sticky top-0 z-40 bg-v2-surface-alt/90 backdrop-blur border-b border-v2-border-subtle">
        <Container size="wide" className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-7 w-7 object-contain" />
            <span className="font-poppins font-bold text-[16px] text-v2-ink-heading">
              Sixteam<span className="text-v2-accent-teal-deep">.pro</span>
            </span>
            <span className="hidden sm:inline-block ml-2 pl-3 border-l border-v2-border-subtle font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-blue">
              Sixteam Ops
            </span>
          </div>
          <AgendaButton source="ops_header" size="sm" variant="navy">
            <CalendarDays className="h-3.5 w-3.5" />
            Agendar
          </AgendaButton>
        </Container>
      </header>

      <main>
        <div ref={ref}>

          {/* ── HERO ── */}
          <Section surface="alt" className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
              <div
                className="absolute -top-40 right-[-10%] w-[760px] h-[760px] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,191,165,0.10) 0%, rgba(29,112,162,0.05) 42%, transparent 68%)",
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.015]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
                  backgroundSize: "220px 220px",
                }}
              />
            </div>

            <Container size="wide" className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
              <Eyebrow variant="teal">Sixteam Ops · Soporte y operaciones continuas</Eyebrow>
              <h1
                className="font-poppins font-bold text-v2-ink-heading mt-5"
                style={{ fontSize: "clamp(30px, 4.8vw, 54px)", lineHeight: "1.08", letterSpacing: "-0.025em" }}
              >
                El equipo de tecnología e IA que tu empresa todavía no tiene, operando{" "}
                <span>mes a mes</span>
                .
              </h1>
              <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[600px] mx-auto lg:mx-0">
                Humanos expertos + agentes de IA operan tu CRM, WhatsApp, automatizaciones y
                métricas. Tú diriges el negocio; nosotros mantenemos la máquina viva. Sin contratar
                personal adicional a tu nómina.
              </p>

              <div className="mt-9 flex flex-col items-center lg:items-start gap-3">
                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                  <AgendaButton source="ops_hero" variant="primary" className="w-full sm:w-auto">
                    <CalendarDays className="h-4 w-4" />
                    Agendar una llamada
                  </AgendaButton>
                  <WaButton source="ops_hero" variant="outline" className="w-full sm:w-auto">
                    WhatsApp
                    <MessageCircle className="h-4 w-4" />
                  </WaButton>
                </div>
                <p className="font-lato text-[13px] text-v2-ink-muted">
                  Para B2B en Estados Unidos priorizamos llamada agendada y correo; WhatsApp queda como canal secundario.
                </p>
              </div>

              {/* Prueba social temprana */}
              <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3">
                {[
                  ["50+", "proyectos"],
                  ["15+", "sectores"],
                  ["98%", "satisfacción"],
                ].map(([n, label]) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <span className="font-poppins font-black text-[26px] text-v2-ink-heading">{n}</span>
                    <span className="font-lato text-[13px] text-v2-ink-muted uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>
              </div>

              {/* Video vertical del fundador */}
              <FounderVideo />
              </div>
            </Container>
          </Section>

          {/* ── ESPEJO: ¿te suena? ── */}
          <Section surface="default" size="default">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
                <div className="v2-reveal lg:sticky lg:top-28">
                  <Eyebrow variant="teal">El problema</Eyebrow>
                  <h2
                    className="font-poppins font-bold text-v2-ink-heading mt-3"
                    style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                  >
                    El problema no es comprar tecnología. Es operarla.
                  </h2>
                  <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                    Tu negocio necesita sistemas que funcionen, se conecten y mejoren cada semana.
                    Cuando nadie es dueño de esa operación, la web se queda quieta, el CRM se desordena,
                    las automatizaciones fallan, los datos no cuadran y la IA se queda en experimentos.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      t: "Tus herramientas no hablan entre sí.",
                      d: "CRM, web, formularios, WhatsApp, email, pagos y reportes viven en silos. El equipo termina copiando datos o resolviendo a mano lo que debería fluir solo.",
                    },
                    {
                      t: "Lo urgente se come la mejora del sistema.",
                      d: "Hay procesos por automatizar, páginas por ajustar, integraciones pendientes y errores pequeños que se repiten, pero nadie tiene tiempo de convertirlos en soluciones.",
                    },
                    {
                      t: "Compraste tecnología que nadie mantiene.",
                      d: "Un CRM, una web o una automatización no generan valor por existir. Necesitan configuración, adopción, soporte, documentación y mejora continua.",
                    },
                    {
                      t: "La IA avanza más rápido que tu capacidad de implementarla.",
                      d: "No necesitas probar todas las herramientas. Necesitas agentes, flujos y criterios claros para aplicar IA donde resuelve problemas reales de tu operación.",
                    },
                  ].map((p, i) => (
                    <div
                      key={p.t}
                      className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-6 flex gap-5`}
                    >
                      <span className="font-poppins font-bold text-[28px] leading-none text-v2-accent-teal-deep flex-shrink-0 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="font-poppins font-semibold text-[17px] text-v2-ink-heading leading-snug">
                          {p.t}
                        </h3>
                        <p className="font-lato text-[14px] text-v2-ink-muted leading-[1.65] mt-2">{p.d}</p>
                      </div>
                    </div>
                  ))}
                  <p className="v2-reveal v2-d4 font-lato text-[11px] text-v2-ink-muted mt-1 pl-1">
                    Cobertura: sistemas, web, automatización, datos, agentes de IA e integraciones.
                  </p>
                </div>
              </div>
            </Container>
          </Section>

          {/* ── QUÉ ES SIXTEAM OPS ── */}
          <Section surface="teal-mist" size="default">
            <Container>
              <div className="text-center max-w-[680px] mx-auto v2-reveal">
                <Eyebrow variant="teal">La solución</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                >
                  Sixteam Ops: no entregamos y nos vamos.{" "}
                  <span>Operamos.</span>
                </h2>
                <p className="font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-5">
                  Operamos y soportamos tus sistemas, agentes y procesos mes a mes. La plataforma
                  GoHighLevel viene incluida — no es un extra.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
                {[
                  {
                    icon: <Bot className="h-5 w-5" />,
                    t: "Agente IA especializado",
                    d: "Conoce tus sistemas e implementaciones, y opera lo repetitivo 24/7 sin fatiga.",
                  },
                  {
                    icon: <Users className="h-5 w-5" />,
                    t: "Humanos expertos incluidos",
                    d: "Horas de trabajo real cada mes, de especialistas que dirigen lo que la IA ejecuta.",
                  },
                  {
                    icon: <BarChart3 className="h-5 w-5" />,
                    t: "Métricas del negocio",
                    d: "Visibilidad real de tu operación — no tres números sueltos en un dashboard.",
                  },
                  {
                    icon: <Package className="h-5 w-5" />,
                    t: "GoHighLevel incluida",
                    d: "CRM, funnels, email y automatizaciones en una sola plataforma, dentro del plan.",
                  },
                ].map((f, i) => (
                  <div
                    key={f.t}
                    className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-6`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center text-v2-accent-teal-deep">
                      {f.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-[16px] text-v2-ink-heading mt-4">{f.t}</h3>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.65] mt-2">{f.d}</p>
                  </div>
                ))}
              </div>
              {/* Todo lo que puedes pedirle a tu equipo */}
              <div className="mt-16 max-w-[880px] mx-auto text-center v2-reveal">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-blue">
                  Lo que puedes pedirle a tu equipo
                </p>
                <h3 className="font-poppins font-bold text-[22px] md:text-[26px] text-v2-ink-heading mt-2">
                  Un solo equipo, todos los frentes de tu tecnología.
                </h3>
                <div className="flex flex-wrap justify-center gap-2.5 mt-7">
                  {[
                    { icon: <Database className="h-3.5 w-3.5" />, t: "CRM: ventas, atención y marketing" },
                    { icon: <Mail className="h-3.5 w-3.5" />, t: "Email marketing y secuencias" },
                    { icon: <MessageCircle className="h-3.5 w-3.5" />, t: "WhatsApp Business y mensajería" },
                    { icon: <Bot className="h-3.5 w-3.5" />, t: "Agentes de IA y chatbots" },
                    { icon: <Phone className="h-3.5 w-3.5" />, t: "IA de voz — como Sofía" },
                    { icon: <Globe className="h-3.5 w-3.5" />, t: "Webs y landing pages" },
                    { icon: <Megaphone className="h-3.5 w-3.5" />, t: "Pauta digital" },
                    { icon: <Workflow className="h-3.5 w-3.5" />, t: "Automatizaciones (Make / n8n)" },
                    { icon: <BarChart3 className="h-3.5 w-3.5" />, t: "Dashboards y reportes" },
                    { icon: <Plug className="h-3.5 w-3.5" />, t: "Integraciones entre sistemas" },
                    { icon: <Code2 className="h-3.5 w-3.5" />, t: "Desarrollo a medida" },
                  ].map((p) => (
                    <span
                      key={p.t}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-v2-border-subtle font-lato text-[13.5px] text-v2-ink-body"
                    >
                      <span className="text-v2-accent-teal-deep">{p.icon}</span>
                      {p.t}
                    </span>
                  ))}
                </div>
                <p className="font-lato text-[14px] text-v2-ink-muted mt-6">
                  Lo pides por tu canal, se prioriza y se ejecuta dentro de tus horas del mes.
                </p>
              </div>
            </Container>
          </Section>

          {/* ── CÓMO FUNCIONA ── */}
          <Section surface="default" size="default">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="teal">Cómo funciona</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15" }}
                >
                  Así opera el servicio cada mes.
                </h2>
              </div>

              <div className="flex flex-col gap-0 mt-12">
                {[
                  {
                    t: "Mapeamos tus sistemas y prioridades",
                    d: "Entendemos tu CRM, web, canales, automatizaciones, datos y problemas recurrentes. Dejamos claro qué está roto, qué falta y qué conviene resolver primero.",
                  },
                  {
                    t: "Construimos y conectamos soluciones",
                    d: "Ajustamos herramientas, creamos automatizaciones, integramos sistemas, levantamos páginas, configuramos agentes de IA y documentamos cómo debe operar cada pieza.",
                  },
                  {
                    t: "Operamos, medimos y mejoramos",
                    d: "Cada mes atendemos solicitudes, monitoreamos errores, optimizamos flujos y priorizamos nuevas mejoras. No es una entrega puntual, es una operación tecnológica continua.",
                  },
                ].map((s, i) => (
                  <div
                    key={s.t}
                    className={`v2-reveal ${["", "v2-d1", "v2-d2"][i]} flex gap-6 py-7 ${i < 2 ? "border-b border-v2-border-subtle" : ""}`}
                  >
                    <span className="font-poppins font-black text-[34px] leading-none text-v2-accent-teal-deep w-14 flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading">{s.t}</h3>
                      <p className="font-lato text-[15px] text-v2-ink-body leading-[1.7] mt-1.5">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Banda de contacto directo */}
              <div className="v2-reveal v2-d3 mt-12 rounded-2xl border border-v2-border-subtle bg-white p-7 md:p-8 text-center">
                <p className="font-poppins font-bold text-[19px] text-v2-ink-heading">
                  ¿Prefieres hablar ya mismo?
                </p>
                <p className="font-lato text-[14px] text-v2-ink-muted mt-1.5">
                  Reserva una llamada corta. Si prefieres mensajería inmediata, también puedes escribirnos por WhatsApp.
                </p>
                <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
                  <WaButton source="ops_mid" size="md" className="w-full sm:w-auto">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
                  </WaButton>
                  <AgendaButton source="ops_mid" size="md" className="w-full sm:w-auto">
                    <CalendarDays className="h-4 w-4" />
                    Agendar llamada
                  </AgendaButton>
                </div>
              </div>
            </Container>
          </Section>

          {/* ── PLANES ── */}
          <Section surface="alt" size="default">
            <Container>
              <div className="text-center max-w-[640px] mx-auto v2-reveal mb-12">
                <Eyebrow variant="teal">Inversión</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
                >
                  Un equipo entero, una sola línea en tu presupuesto.
                </h2>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
                  Armar esto en casa son 3 o 4 contrataciones, más reclutamiento, rotación y gestión.
                  Con Sixteam Ops el precio es claro antes de empezar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 max-w-[1080px] mx-auto items-start">
                {/* Esencial */}
                <div className="v2-reveal bg-white border border-v2-border-medium rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                  <div className="px-6 pt-6 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Esencial</h3>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="font-poppins font-black text-[38px] text-v2-ink-heading leading-none">$200</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /mes</span>
                    </div>
                    <p className="font-lato text-[12px] font-semibold text-v2-accent-teal-deep mt-1">
                      Promo limitada · regular $300 · 20 cupos · ya se están ocupando
                    </p>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-3">
                      Para emprendedores y negocios pequeños que quieren empezar a trabajar con
                      tecnología e IA sin complicaciones ni grandes inversiones.
                    </p>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-2.5">
                    {[
                      "Un agente IA activo en tu canal más urgente + especialista humano que ejecuta tus solicitudes dentro de tu plan de créditos",
                      "60 créditos / mes — no acumulables",
                      "Plataforma CRM all-in-one incluida (valor $97/mes)",
                      "$30/mes Wallet de mensajería",
                    ].map((t) => <CheckItem key={t} text={t} />)}
                  </div>
                  <div className="px-6 pb-6">
                    <WaButton
                      source="ops_plan_esencial"
                      message={MSG_ESENCIAL}
                      variant="outline"
                      size="md"
                      className="w-full justify-center"
                    >
                      Empezar con Esencial <ArrowRight className="h-4 w-4" />
                    </WaButton>
                    <p className="font-lato text-[11px] text-v2-ink-muted text-center mt-2.5">
                      Garantía 30 días money-back · precio promo bloqueado mientras mantengas el plan
                    </p>
                  </div>
                </div>

                {/* Integral — destacado */}
                <div className="v2-reveal v2-d1 relative bg-white border-2 border-v2-accent-teal rounded-2xl overflow-hidden shadow-[0_0_0_4px_rgba(0,191,165,0.10),0_24px_64px_rgba(0,191,165,0.14)]">
                  <div className="absolute -top-0 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-b-xl bg-v2-accent-teal text-white font-lato font-bold text-[10px] uppercase tracking-widest shadow-[0_4px_12px_rgba(0,191,165,0.30)]">
                      Mejor valor
                    </span>
                  </div>
                  <div className="px-6 pt-10 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Integral</h3>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="font-poppins font-black text-[38px] text-v2-ink-heading leading-none">$499</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /mes</span>
                    </div>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-3">
                      Para clientes que ya han trabajado con Sixteam y buscan expandir su ecosistema
                      digital, o empresas que requieren configuraciones y automatizaciones más
                      complejas.
                    </p>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-2.5">
                    {[
                      "Agentes IA operando en multi-canal (CRM + WhatsApp + Email) + equipo de especialistas para integraciones, automatizaciones avanzadas y nuevas configuraciones",
                      "160 créditos / mes — no acumulables",
                      "Bono Onboarding VIP: llamada de estrategia 1:1 + setup de marca/sistema + fast-track de automatizaciones",
                      "Plataforma CRM all-in-one incluida (valor $97/mes)",
                      "$30/mes Wallet de mensajería",
                    ].map((t) => (
                      <CheckItem key={t} text={<strong className="text-v2-ink-heading font-semibold">{t}</strong>} />
                    ))}
                  </div>
                  <div className="px-6 pb-6">
                    <WaButton
                      source="ops_plan_integral"
                      message={MSG_INTEGRAL}
                      size="md"
                      className="w-full justify-center"
                    >
                      Empezar con Integral <ArrowRight className="h-4 w-4" />
                    </WaButton>
                    <p className="font-lato text-[11px] text-v2-ink-muted text-center mt-2.5">
                      Garantía 30 días money-back
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="v2-reveal v2-d2 bg-white border border-v2-border-medium rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                  <div className="px-6 pt-6 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Total</h3>
                    <div className="flex items-baseline gap-1.5 mt-2 flex-wrap">
                      <span className="font-poppins font-black text-[30px] text-v2-ink-heading leading-none">Desde $1,200</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /mes</span>
                    </div>
                    <p className="font-lato text-[11px] text-v2-ink-muted mt-1">A cotizar según requerimientos</p>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-3">
                      Para clientes que ya tienen a Sixteam como su equipo de tecnología permanente.
                      Capacidad total, PM dedicado y estrategia continua de crecimiento.
                    </p>
                  </div>
                  <div className="px-6 py-5 flex flex-col gap-2.5">
                    {[
                      "Agentes IA de alto volumen en todos tus sistemas + PM dedicado, equipo completo de especialistas y llamadas estratégicas semanales",
                      "Desde 400 créditos / mes — acumulables según solicitud",
                      "Plataforma CRM all-in-one incluida (valor $97/mes)",
                      "$30/mes Wallet de mensajería",
                    ].map((t) => <CheckItem key={t} text={t} />)}
                  </div>
                  <div className="px-6 pb-6">
                    <WaButton
                      source="ops_plan_total"
                      message={MSG_TOTAL}
                      variant="navy"
                      size="md"
                      className="w-full justify-center"
                    >
                      Cotizar plan Total <ArrowRight className="h-4 w-4" />
                    </WaButton>
                  </div>
                </div>
              </div>

              <p className="v2-reveal v2-d3 text-center font-lato text-[12px] text-v2-ink-muted mt-6">
                Cada solicitud descuenta créditos según su complejidad.
              </p>

              <p className="v2-reveal v2-d2 text-center font-lato text-[13px] text-v2-ink-muted mt-8">
                ¿No sabes cuál te corresponde? Escríbenos y lo definimos en la llamada de 30 minutos.
              </p>

              {/* Otros caminos: Radar · Assessment · Transform */}
              <div className="v2-reveal v2-d3 mt-14 max-w-[1020px] mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px flex-1 bg-v2-border-subtle" />
                  <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-blue text-center">
                    ¿Todavía no estás para Ops? Otros caminos
                  </p>
                  <div className="h-px flex-1 bg-v2-border-subtle" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">

                  {/* Radar — gratis */}
                  <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col">
                    <div className="w-9 h-9 rounded-lg bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center text-v2-accent-teal-deep">
                      <Radar className="h-4 w-4" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading mt-4">Radar</h3>
                    <p className="font-lato text-[12px] font-semibold text-v2-accent-blue mt-0.5">Gratis · 48 horas</p>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.6] mt-2 flex-1">
                      Diagnóstico ejecutivo de tu operación. Decides después si quieres conversar. Cero compromiso.
                    </p>
                    <Link
                      to="/radar"
                      onClick={() => gtm.ctaClick("radar", "ops_otros_caminos")}
                      className="block mt-5"
                    >
                      <ButtonV2 variant="navy" size="sm" className="w-full justify-center">
                        Hacer el Radar gratis <ArrowRight className="h-3.5 w-3.5" />
                      </ButtonV2>
                    </Link>
                  </div>

                  {/* Assessment — consultoría */}
                  <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col">
                    <div className="w-9 h-9 rounded-lg bg-v2-surface-navy-mist border border-v2-accent-blue/25 flex items-center justify-center text-v2-accent-blue">
                      <Search className="h-4 w-4" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading mt-4">Sixteam Assessment</h3>
                    <p className="font-lato text-[12px] font-semibold text-v2-accent-blue mt-0.5">$2,500 USD · pago único · 10-14 días</p>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.6] mt-2 flex-1">
                      Consultoría: evaluación de transformación con IA. Mapa operativo vivo y palancas priorizadas.
                    </p>
                    <WaButton
                      source="ops_assessment"
                      message={MSG_ASSESSMENT}
                      variant="outline"
                      size="sm"
                      className="w-full justify-center mt-5"
                    >
                      Preguntar por Assessment <ArrowRight className="h-3.5 w-3.5" />
                    </WaButton>
                  </div>

                  {/* Transform — implementaciones */}
                  <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col">
                    <div className="w-9 h-9 rounded-lg bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center text-v2-accent-teal-deep">
                      <Hammer className="h-4 w-4" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading mt-4">Sixteam Transform</h3>
                    <p className="font-lato text-[12px] font-semibold text-v2-accent-blue mt-0.5">Desde $1,500 USD · por proyecto</p>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.6] mt-2 flex-1">
                      Implementación de sistemas específicos: CRM, agentes de IA, automatizaciones e integraciones.
                    </p>
                    <WaButton
                      source="ops_transform"
                      message={MSG_TRANSFORM}
                      variant="outline"
                      size="sm"
                      className="w-full justify-center mt-5"
                    >
                      Preguntar por Transform <ArrowRight className="h-3.5 w-3.5" />
                    </WaButton>
                  </div>

                </div>
              </div>
            </Container>
          </Section>

          {/* ── TESTIMONIOS (sección existente del sitio) ── */}
          <TestimonialsV2 />

          {/* ── FAQ ── */}
          <Section surface="default" size="default">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="teal">Preguntas frecuentes</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
                >
                  Lo que nos preguntan{" "}
                  <span>antes de arrancar</span>.
                </h2>
              </div>
              <div className="flex flex-col gap-3 mt-10 v2-reveal v2-d1">
                {faqs.map((f, i) => (
                  <FaqItem
                    key={f.q}
                    q={f.q}
                    a={f.a}
                    open={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                    panelId={`ops-faq-panel-${i}`}
                  />
                ))}
              </div>
            </Container>
          </Section>

          {/* ── CTA FINAL ── */}
          <Section surface="navy-dark" size="spacious" className="overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 60% 40%, rgba(0,191,165,0.16) 0%, rgba(29,112,162,0.10) 45%, transparent 70%)",
              }}
            />
            <Container size="narrow" className="relative text-center">
              <div className="v2-reveal">
                <Eyebrow variant="teal" className="text-v2-accent-teal">Sixteam Ops</Eyebrow>
              </div>
              <h2
                className="v2-reveal v2-d1 font-poppins font-bold text-white mt-5"
                style={{ fontSize: "clamp(34px, 6vw, 58px)", lineHeight: "1.08", letterSpacing: "-0.02em" }}
              >
                Ya no tienes que operar solo. Tú solo tienes que crecer.
              </h2>
              <p className="v2-reveal v2-d2 font-lato text-[18px] md:text-[20px] text-white/75 leading-[1.65] max-w-[600px] mx-auto mt-7">
                Cuéntanos cómo opera tu negocio hoy. Te decimos, sin compromiso, cómo lo operaría
                Sixteam Ops — y con qué plan arrancar.
              </p>
              <div className="v2-reveal v2-d3 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <AgendaButton
                  source="ops_final"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <CalendarDays className="h-4 w-4" />
                  Agendar una llamada
                </AgendaButton>
                <WaButton
                  source="ops_final"
                  variant="outline"
                  className="w-full sm:w-auto !text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
                >
                  WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </WaButton>
              </div>
              <p className="v2-reveal v2-d4 font-lato text-[13px] text-white/40 mt-6">
                En B2B USA, el medio principal es llamada agendada y correo. WhatsApp funciona como apoyo cuando el cliente ya lo usa.
              </p>
            </Container>
          </Section>

          {/* ── AGENDA ── */}
          <Section id="agenda" surface="default" size="default" className="scroll-mt-24">
            <Container size="wide">
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-10 lg:gap-14 items-start">
                <div className="v2-reveal lg:sticky lg:top-28">
                  <Eyebrow variant="teal">Agenda</Eyebrow>
                  <h2
                    className="font-poppins font-bold text-v2-ink-heading mt-3"
                    style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                  >
                    Reserva una llamada con Sixteam Ops.
                  </h2>
                  <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                    Elige el horario que mejor te funcione. Para empresas en Estados Unidos, este es el canal principal de contacto: una llamada B2B clara, seguida por correo. Revisamos tu operación actual, prioridades
                    y el plan más razonable para empezar sin sobredimensionar el proyecto.
                  </p>
                  <div className="mt-6 flex flex-col gap-3 text-[14px] text-v2-ink-muted">
                    {[
                      "30 minutos de diagnóstico inicial",
                      "Sin compromiso ni pitch agresivo",
                      "Seguimiento por correo después de la llamada",
                    ].map((item) => (
                      <CheckItem key={item} text={item} />
                    ))}
                  </div>
                </div>

                <div className="v2-reveal v2-d1 calendar-embed-wrapper bg-white">
                  <iframe
                    src={BOOKING_IFRAME_SRC}
                    id={BOOKING_IFRAME_ID}
                    title="Agenda de Sixteam Ops"
                    style={{ width: "100%", border: "none", overflow: "hidden" }}
                    scrolling="no"
                    loading="lazy"
                  />
                </div>
              </div>
            </Container>
          </Section>

        </div>
      </main>

      {/* ── Footer mínimo (legales requeridos para pauta) ── */}
      <footer className="bg-v2-surface-alt border-t border-v2-border-subtle">
        <Container size="wide" className="py-8 pb-24 md:pb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-6 w-6 object-contain" />
            <span className="font-lato text-[13px] text-v2-ink-muted">
              © {new Date().getFullYear()} Sixteam.pro — Operamos la tecnología de tu empresa.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <Link to="/politicas" className="font-lato text-[13px] text-v2-ink-muted hover:text-v2-ink-heading transition-colors underline underline-offset-2">
              Políticas de privacidad
            </Link>
            <Link to="/terminos" className="font-lato text-[13px] text-v2-ink-muted hover:text-v2-ink-heading transition-colors underline underline-offset-2">
              Términos y condiciones
            </Link>
          </div>
        </Container>
      </footer>

      {/* ── Barra CTA fija — solo móvil ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-v2-border-subtle px-4 py-3">
        <AgendaButton source="ops_sticky" size="md" variant="navy" className="w-full justify-center">
          <CalendarDays className="h-4 w-4" />
          Agendar llamada
        </AgendaButton>
      </div>

    </div>
  );
};

export default OpsLanding;
