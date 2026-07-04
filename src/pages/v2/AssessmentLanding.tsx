import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Bot, Check, ChevronDown, Compass, FileText, Map, MessageCircle,
  MessageSquare, Phone, Sparkles, Target, X,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { gtm } from "@/lib/gtm";

/* ── WhatsApp — única acción de conversión de la landing ─────────── */
const WA_PHONE = "573004188522";

const openWhatsApp = (source: string, message: string) => {
  gtm.whatsappClick(source);
  gtm.ctaClick("whatsapp_assessment", source);
  window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
};

const MSG_ASSESSMENT =
  "Hola, quiero el Sixteam Assessment para mi empresa. ¿Podemos hablar?";

/* Sofía — agente de IA de voz (GHL Voice AI). Número US; cambiar al CO cuando exista. */
const SOFIA_PHONE = "+16627057434";

const callSofia = (source: string) => {
  gtm.ctaClick("sofia_call", source);
  window.location.href = `tel:${SOFIA_PHONE}`;
};

const WaButton: React.FC<{
  source: string;
  variant?: "primary" | "outline" | "navy";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}> = ({ source, variant = "primary", size = "lg", className, children }) => (
  <ButtonV2
    variant={variant}
    size={size}
    className={className}
    onClick={() => openWhatsApp(source, MSG_ASSESSMENT)}
  >
    {children}
  </ButtonV2>
);

/* ── Contenido canónico (verbatim de /assessment y /soluciones) ──── */
const stats = [
  { value: 95, suffix: "%", label: "de pilotos de IA enterprise fracasan", source: "MIT, 2025" },
  { value: 42, suffix: "%", label: "de empresas abandonaron sus iniciativas de IA en 2025", source: "S&P Global, 2025" },
  { value: 39, suffix: "%", label: "logra impacto real en EBIT cuando hay estrategia correcta", source: "McKinsey, 2025" },
];

/* Cuenta ascendente al entrar al viewport; con prefers-reduced-motion salta al valor final */
const CountUp: React.FC<{ value: number; suffix: string; className?: string; style?: React.CSSProperties }> = ({
  value, suffix, className, style,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        io.disconnect();
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(value);
          return;
        }
        const t0 = performance.now();
        const dur = 900;
        const tick = (t: number) => {
          const p = Math.min((t - t0) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 4);
          setDisplay(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className} style={style}>
      {display}{suffix}
    </span>
  );
};

const steps = [
  {
    icon: Target,
    subtitle: "Definir metas",
    title: "Tu visión, no la nuestra",
    desc: "Arrancamos con Alex (Estratega IA) + Samuel: cuáles son tus prioridades de los próximos 12 meses, qué métrica te quita el sueño, qué procesos no toleras seguir operando manualmente.",
  },
  {
    icon: MessageSquare,
    subtitle: "Entrevistas con agentes IA",
    title: "Sam habla con todo tu equipo en paralelo",
    desc: "Sam (Diagnóstico IA) hace entrevistas de 20-30 minutos con cada persona clave de tu operación — comercial, marketing, servicio, ops. En paralelo, sin sesgo político, en una semana. Cobertura del 100%, no muestra del 20%.",
  },
  {
    icon: Map,
    subtitle: "Mapa operativo agéntico",
    title: "Reconstruimos tu operación real",
    desc: "Sam consolida cada flujo, cada herramienta, cada dependencia. No es el organigrama teórico — es cómo funciona tu negocio cuando nadie te está mirando. Un mapa vivo, navegable.",
  },
  {
    icon: Compass,
    subtitle: "Estrategia + Roadmap",
    title: "Samuel + Alex entregan el plan",
    desc: "Cruzamos tus metas con el mapa real. Aislamos las 3-7 palancas de mayor impacto: qué automatizar primero, qué agente IA construir, qué proceso rediseñar. Plan priorizado con orden de implementación.",
  },
];

const tradCons = [
  "3-5 consultores juniors haciendo entrevistas",
  "6-12 semanas calendario",
  "Entrevistan 20-40 personas (muestra)",
  "Información filtrada por jerarquía y política",
  "Entregable: PDF de 80 páginas",
  "Después del entregable se van",
];

const sixteamPros = [
  "6 agentes IA + Samuel + Alex liderando",
  "10-14 días calendario",
  "Entrevistan 100% del equipo en paralelo",
  "Cero sesgo político — los agentes no son tus colegas",
  "Entregable: mapa vivo + agente IA persistente",
  "Sigue accesible cuando quieras preguntarle algo",
];

const deliverables = [
  {
    icon: Map,
    title: "Mapa operativo vivo",
    desc: "Cómo opera hoy tu negocio — comercial, marketing, servicio — navegable y consultable. No es un PDF estático. Lo actualizas cuando cambia algo.",
  },
  {
    icon: Sparkles,
    title: "Palancas de IA priorizadas",
    desc: "Las 3-7 iniciativas de mayor impacto para TU contexto, no casos de uso genéricos. Cada una con estimación de esfuerzo, costo e impacto.",
  },
  {
    icon: FileText,
    title: "Blueprints de implementación",
    desc: "Para cada palanca priorizada: qué cambia, a quién impacta, qué se necesita y cuál es el resultado esperado. Listo para ejecutar.",
  },
  {
    icon: Bot,
    title: "Agente IA persistente",
    desc: "Sam queda accesible después del Assessment. Conoce tu operación. Le preguntas cualquier cosa cuando quieras — sigue mapeando, sigue respondiendo.",
  },
];

/* ── FAQ (compuesto desde el contenido existente del producto) ───── */
const faqs = [
  {
    q: "¿En qué se diferencia del Radar gratis?",
    a: "El Radar es un diagnóstico ejecutivo gratis en 48 horas: el punto de partida. El Assessment es la evaluación profunda de 10-14 días — entrevistas con agentes IA al 100% del equipo, mapa operativo vivo, palancas priorizadas y roadmap ejecutable.",
  },
  {
    q: "¿Cuánto tiempo le quita a mi equipo?",
    a: "Entrevistas de 20-30 minutos por persona clave, en paralelo. Tu operación no se detiene: los agentes IA hacen las entrevistas al mismo tiempo, no en semanas de agenda.",
  },
  {
    q: "¿Y si no encajamos?",
    a: "Si después de la llamada inicial decidimos que no encajas con el playbook — te lo decimos directamente y no cobramos nada.",
  },
  {
    q: "¿Qué pasa después del Assessment?",
    a: "Decides tú, sin presión: operas el roadmap con tu equipo interno (te quedas con todo), nos contratas para construir las primeras palancas como proyecto, o pasamos a operación mensual con Sixteam Ops. El mapa y Sam quedan contigo en cualquier caso.",
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
   Landing de pauta — Sixteam Assessment
   Versión de conversión de /assessment: sin navegación, un solo
   destino (WhatsApp) + Sofía, contenido verbatim del producto.
   ═══════════════════════════════════════════════════════════════════ */
const AssessmentLanding = () => {
  useSEO({
    title: "Sixteam Assessment — Lanza tu transformación con IA con la estrategia correcta",
    description:
      "En 10-14 días: mapa operativo vivo, palancas de IA priorizadas y roadmap ejecutable. Agentes IA entrevistan al 100% de tu equipo. $2,500 USD, pago único.",
    noindex: true,
  });

  const ref = useScrollReveal<HTMLDivElement>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // La barra fija móvil entra solo después de pasar el hero — no tapa el primer CTA
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Atribución de pauta: los UTM de la URL van al dataLayer para cruzarlos con whatsapp_click en GTM
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utm: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"].forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    if (Object.keys(utm).length) gtm.push("assessment_landing_utm", utm);
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
            <span className="hidden sm:inline-block ml-2 pl-3 border-l border-v2-border-subtle font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal-deep">
              Assessment
            </span>
          </div>
          <WaButton source="asm_header" size="sm">
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </WaButton>
        </Container>
      </header>

      <main>
        <div ref={ref}>

          {/* ── HERO ── */}
          <Section surface="default" className="relative overflow-hidden pt-16 md:pt-24 pb-16 md:pb-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,191,165,0.07),transparent_60%)]"
            />
            <Container size="narrow" className="relative text-center">
              <div className="v2-hero-entry" style={{ animationDelay: "0ms" }}>
                <Eyebrow variant="teal">Sixteam Assessment · Evaluación de Transformación con IA</Eyebrow>
              </div>
              <h1
                className="v2-hero-entry font-poppins font-black text-v2-ink-heading mt-5 leading-[1.06] tracking-[-0.025em]"
                style={{ fontSize: "clamp(34px, 6.5vw, 60px)", animationDelay: "90ms" }}
              >
                Lanza tu transformación con IA
                <br />
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    con la estrategia correcta.
                  </em>
                </Underlined>
              </h1>
              <p
                className="v2-hero-entry font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[640px] mx-auto"
                style={{ animationDelay: "190ms" }}
              >
                El Assessment de Sixteam entrega la base estratégica en 10–14 días. Mapeamos cómo
                opera tu empresa con agentes IA en paralelo, identificamos las palancas reales de
                IA — y te entregamos el plan ejecutable. Antes de mover una sola pieza.
              </p>
              <div className="v2-hero-entry mt-9 flex flex-col sm:flex-row gap-3 justify-center" style={{ animationDelay: "290ms" }}>
                <WaButton source="asm_hero" className="w-full sm:w-auto">
                  Solicitar Assessment — $2,500
                  <ArrowRight className="h-4 w-4" />
                </WaButton>
                <ButtonV2
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => callSofia("asm_hero")}
                >
                  <Phone className="h-4 w-4" />
                  Llama y habla con Sofía (IA)
                </ButtonV2>
              </div>
              <p
                className="v2-hero-entry mt-5 font-lato text-[11px] font-medium uppercase tracking-widest text-v2-accent-teal-deep"
                style={{ animationDelay: "380ms" }}
              >
                10–14 días · 100% cobertura del equipo · Mapa + Palancas + Roadmap + Agente IA persistente
              </p>
            </Container>
          </Section>

          {/* ── STATS ── */}
          <Section surface="alt" size="compact">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-v2-border-subtle">
                {stats.map((stat, i) => (
                  <div
                    key={stat.source}
                    className={`v2-reveal ${["", "v2-d1", "v2-d2"][i]} px-8 py-8 text-center flex flex-col items-center`}
                  >
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      className="font-poppins font-black text-v2-accent-teal-deep leading-none tabular-nums"
                      style={{ fontSize: "clamp(38px, 5vw, 54px)" }}
                    />
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.55] mt-3 max-w-[220px]">
                      {stat.label}
                    </p>
                    <span className="font-lato italic text-[12px] text-v2-ink-muted mt-2">
                      Fuente: {stat.source}
                    </span>
                  </div>
                ))}
              </div>
              <p className="v2-reveal v2-d3 font-lato text-[16px] italic text-v2-ink-body text-center mt-8 max-w-[600px] mx-auto leading-[1.65]">
                "La diferencia no es el modelo. Es cómo decides qué transformar — y en qué orden."
              </p>
            </Container>
          </Section>

          {/* ── PROBLEMA ── */}
          <Section surface="cream" size="default">
            <Container size="narrow">
              <div className="v2-reveal">
                <Eyebrow variant="navy">Por qué fracasan</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
                >
                  Las empresas que ganan con IA no empiezan con herramientas.{" "}
                  <Underlined color="teal" variant="scribble">
                    <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                      Empiezan con claridad.
                    </em>
                  </Underlined>
                </h2>
              </div>
              <div className="v2-reveal v2-d1 mt-8 space-y-5 max-w-[700px]">
                <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                  La mayoría arranca al revés: compra una licencia de un LLM, lanza tres pilotos
                  dispersos, pone a un becario a 'explorar IA'. Seis meses después no hay nada
                  productivo y la conclusión es que 'la IA no funciona'.
                </p>
                <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                  La trampa es operar con información parcial — el dueño cree que sabe cómo funciona
                  su empresa, pero la operación real vive distribuida en 15 cabezas y 40
                  herramientas. El Assessment elimina esa ceguera ANTES de mover una sola pieza.
                </p>
              </div>
            </Container>
          </Section>

          {/* ── CÓMO FUNCIONA ── */}
          <Section surface="default" size="default">
            <Container>
              <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
                <Eyebrow variant="teal">Cómo funciona</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
                >
                  4 fases. 10-14 días.{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    Cobertura completa.
                  </em>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,35,66,0.08)] transition-[transform,box-shadow] duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-full bg-v2-accent-teal/15 border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0">
                          <span className="font-poppins font-bold text-[11px] text-v2-accent-teal-deep">{i + 1}</span>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center">
                          <Icon className="h-4 w-4 text-v2-accent-teal-deep" aria-hidden />
                        </div>
                      </div>
                      <p className="font-lato text-[10px] font-bold uppercase tracking-[0.18em] text-v2-accent-teal-deep mb-1">
                        {step.subtitle}
                      </p>
                      <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.3] mt-1">
                        {step.title}
                      </h3>
                      <p className="font-lato text-[13px] text-v2-ink-body leading-[1.65] mt-3">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Container>
          </Section>

          {/* ── COMPARATIVA + PRECIO ── */}
          <Section surface="navy-dark" size="default" className="overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)" }}
            />
            <Container>
              <div className="text-center max-w-[720px] mx-auto mb-12 v2-reveal">
                <Eyebrow variant="teal" className="text-v2-accent-teal">
                  Lo que nos hace fundamentalmente distintos
                </Eyebrow>
                <h2
                  className="font-poppins font-bold text-white mt-4 leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
                >
                  Una consultora tradicional manda 5 personas durante 8 semanas. Nosotros mandamos{" "}
                  <Underlined color="teal" variant="scribble">
                    <em className="font-serif italic font-normal text-v2-accent-teal">
                      6 agentes IA durante 10 días.
                    </em>
                  </Underlined>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
                <div className="v2-reveal bg-white/5 border border-white/10 rounded-2xl p-8">
                  <h3 className="font-poppins font-bold text-[18px] text-white/70 mb-6">
                    Consultora tradicional
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {tradCons.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <X className="h-3 w-3 text-white/40" aria-hidden />
                        </span>
                        <span className="font-lato text-[14px] text-white/55 leading-[1.55]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-white/10 pt-4">
                    <span className="font-lato text-[13px] text-white/40">Costo típico: </span>
                    <span className="font-poppins font-bold text-[15px] text-white/50">$30K–$80K USD</span>
                  </div>
                </div>

                <div className="v2-reveal v2-d1 bg-v2-accent-teal/10 border border-v2-accent-teal/30 rounded-2xl p-8">
                  <h3 className="font-poppins font-bold text-[18px] text-v2-accent-teal mb-6">
                    Sixteam Assessment
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {sixteamPros.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-v2-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-3 w-3 text-v2-accent-teal" aria-hidden />
                        </span>
                        <span className="font-lato text-[14px] text-white/80 leading-[1.55]">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-v2-accent-teal/20 pt-4 flex items-center justify-between gap-4 flex-wrap">
                    <div>
                      <span className="font-lato text-[13px] text-white/60">Precio fijo: </span>
                      <span className="font-poppins font-bold text-[15px] text-v2-accent-teal">$2,500 USD</span>
                    </div>
                    <WaButton source="asm_comparativa" size="sm">
                      Solicitar Assessment <ArrowRight className="h-3.5 w-3.5" />
                    </WaButton>
                  </div>
                </div>
              </div>

              <p className="v2-reveal v2-d2 font-lato text-[15px] italic text-white/50 text-center mt-10 max-w-[640px] mx-auto leading-[1.65]">
                "Lo que cuesta 30x menos y se hace 5x más rápido — porque los agentes IA hacen lo
                repetitivo, y los humanos hacen lo que solo un humano puede hacer: el criterio."
              </p>
            </Container>
          </Section>

          {/* ── ENTREGABLES ── */}
          <Section surface="default" size="default">
            <Container>
              <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
                <Eyebrow variant="teal">Te llevas</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
                >
                  Cuatro entregables. Tangibles.{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    Para siempre.
                  </em>
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {deliverables.map((d, i) => {
                  const Icon = d.icon;
                  return (
                    <div
                      key={d.title}
                      className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:-translate-y-1 hover:border-v2-accent-teal/30 hover:shadow-[0_8px_28px_rgba(0,191,165,0.09)] transition-[transform,box-shadow,border-color] duration-300`}
                    >
                      <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-5">
                        <Icon className="h-5 w-5 text-v2-accent-teal-deep" aria-hidden />
                      </div>
                      <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.3]">
                        {d.title}
                      </h3>
                      <p className="font-lato text-[13px] text-v2-ink-body leading-[1.65] mt-3">
                        {d.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Container>
          </Section>

          {/* ── DESPUÉS DEL ASSESSMENT ── */}
          <Section surface="alt" size="default">
            <Container size="narrow">
              <div className="v2-reveal">
                <Eyebrow variant="navy">Después del Assessment</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
                >
                  Decides tú.{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    No presionamos.
                  </em>
                </h2>
              </div>
              <div className="v2-reveal v2-d1 mt-8 space-y-5 max-w-[700px]">
                <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                  Al terminar el Assessment puedes hacer 3 cosas, sin presión nuestra: (a) Operar el
                  roadmap con tu equipo interno — te quedas con todo y nos quedamos amigos. (b)
                  Contratarnos para construir las primeras palancas como proyecto. (c) Suscribirte a
                  Ops mensual ($1,500-$5,500/mes) y dejamos todo operado.
                </p>
                <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                  Como referencia: ~50% de los clientes que terminan el Assessment continúan con
                  nosotros. El otro 50% opera el roadmap por su cuenta y sigue siendo cliente del
                  Assessment de nuevo cuando el negocio cambia.
                </p>
              </div>
              <div className="v2-reveal v2-d2 mt-10">
                <WaButton source="asm_decides" className="w-full sm:w-auto">
                  Solicitar Assessment — $2,500
                  <ArrowRight className="h-4 w-4" />
                </WaButton>
              </div>
            </Container>
          </Section>

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
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    antes de arrancar.
                  </em>
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
                    panelId={`asm-faq-panel-${i}`}
                  />
                ))}
              </div>
            </Container>
          </Section>

          {/* ── CTA FINAL ── */}
          <Section surface="navy-dark" size="spacious" className="overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
              style={{ background: "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)" }}
            />
            <Container size="narrow" className="relative text-center">
              <div className="v2-reveal">
                <Eyebrow variant="teal" className="text-v2-accent-teal">Empieza por aquí</Eyebrow>
              </div>
              <h2
                className="v2-reveal v2-d1 font-poppins font-bold text-white mt-5 leading-[1.05] tracking-[-0.025em]"
                style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
              >
                En 10 días lo sabes.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal">
                    Y sales con el mapa.
                  </em>
                </Underlined>
              </h2>
              <p className="v2-reveal v2-d2 font-lato text-[17px] text-white/65 leading-[1.65] mt-7 max-w-[520px] mx-auto">
                Solicita tu Assessment. Si después de la llamada inicial decidimos que no encajas
                con el playbook — te lo decimos directamente y no cobramos nada.
              </p>
              <div className="v2-reveal v2-d3 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <WaButton source="asm_final" className="w-full sm:w-auto">
                  Solicitar Assessment — $2,500
                  <ArrowRight className="h-4 w-4" />
                </WaButton>
                <ButtonV2
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto !text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
                  onClick={() => callSofia("asm_final")}
                >
                  <Phone className="h-4 w-4" />
                  Llamar y hablar con Sofía
                </ButtonV2>
              </div>
              <p className="v2-reveal v2-d4 font-lato text-[13px] italic text-white/40 mt-8">
                "Si después de los 10 días te quedas con el mapa y nos dices que no, nos quedamos amigos."
              </p>
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

      {/* ── Barra CTA fija — solo móvil, entra tras pasar el hero ── */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-v2-border-subtle px-4 py-3 transition-transform duration-300 ${
          showSticky ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}
      >
        <WaButton source="asm_sticky" size="md" className="w-full justify-center">
          <MessageCircle className="h-4 w-4" />
          Hablar por WhatsApp
        </WaButton>
      </div>

    </div>
  );
};

export default AssessmentLanding;
