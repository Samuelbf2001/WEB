import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, BarChart3, Bot, Check, ChevronDown, MessageCircle, Package, Users,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import TestimonialsV2 from "@/components/v2/sections/TestimonialsV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSEO } from "@/hooks/useSEO";
import { gtm } from "@/lib/gtm";

/* ── WhatsApp — única acción de conversión de la landing ─────────── */
const WA_PHONE = "573004188522";

const openWhatsApp = (source: string, message: string) => {
  gtm.whatsappClick(source);
  gtm.ctaClick("whatsapp_ops", source);
  window.open(`https://wa.me/${WA_PHONE}?text=${encodeURIComponent(message)}`, "_blank");
};

const MSG_GENERAL =
  "Hola, vengo de la página de Sixteam Ops y quiero saber cómo funcionaría en mi negocio.";
const MSG_CORE = "Hola, me interesa el plan Ops Core de Sixteam Ops. ¿Podemos hablar?";
const MSG_GROWTH = "Hola, me interesa el plan Ops Growth de Sixteam Ops. ¿Podemos hablar?";

/* ── Primitivas locales ──────────────────────────────────────────── */
const CheckItem: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <div className="flex items-start gap-2.5">
    <div className="w-4 h-4 rounded-full bg-v2-surface-sand-mist border border-[#d4a853]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-2.5 w-2.5 text-[#8a7a4f]" />
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
    a: "Contrato anual con pago mensual. El alcance se define antes de empezar y todo el trabajo queda documentado: el conocimiento de tu operación es tuyo, no nuestro.",
  },
];

const FaqItem: React.FC<{ q: string; a: string; open: boolean; onToggle: () => void }> = ({
  q, a, open, onToggle,
}) => (
  <div className="bg-white border border-v2-border-subtle rounded-2xl overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
      aria-expanded={open}
    >
      <span className="font-poppins font-semibold text-[16px] text-v2-ink-heading">{q}</span>
      <ChevronDown
        className={`h-4 w-4 text-[#8a7a4f] flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      />
    </button>
    <div
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
   Sin navegación (cero fugas), un solo destino de conversión (WhatsApp),
   prueba social temprana, precios transparentes, FAQ anti-objeción.
   ═══════════════════════════════════════════════════════════════════ */
const OpsLanding = () => {
  useSEO({
    title: "Sixteam Ops — Tu equipo de tecnología e IA, mes a mes | Sixteam.pro",
    description:
      "Humanos expertos + agentes de IA operan tu CRM, WhatsApp, automatizaciones y métricas. Sin contratar personal adicional. Desde $700 USD/mes.",
    noindex: true,
  });

  const ref = useScrollReveal<HTMLDivElement>();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-v2-surface text-v2-ink-body font-lato antialiased">

      {/* ── Barra superior mínima: logo + una sola acción ── */}
      <header className="sticky top-0 z-40 bg-v2-surface-alt/90 backdrop-blur border-b border-v2-border-subtle">
        <Container size="wide" className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2.5">
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-7 w-7 object-contain" />
            <span className="font-poppins font-bold text-[16px] text-v2-ink-heading">
              Sixteam<span className="text-[#d4a853]">.pro</span>
            </span>
            <span className="hidden sm:inline-block ml-2 pl-3 border-l border-v2-border-subtle font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8a7a4f]">
              Sixteam Ops
            </span>
          </div>
          <WaButton source="ops_header" size="sm">
            <MessageCircle className="h-3.5 w-3.5" />
            WhatsApp
          </WaButton>
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
                    "radial-gradient(circle, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0.03) 42%, transparent 68%)",
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

            <Container size="narrow" className="relative z-10 text-center">
              <Eyebrow variant="sand">Sixteam Ops · Soporte y operaciones continuas</Eyebrow>
              <h1
                className="font-poppins font-bold text-v2-ink-heading mt-5"
                style={{ fontSize: "clamp(32px, 6vw, 62px)", lineHeight: "1.08", letterSpacing: "-0.025em" }}
              >
                El equipo de tecnología e IA que tu empresa todavía no tiene, operando{" "}
                <em className="font-serif italic font-normal">mes a mes</em>
                .
              </h1>
              <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[600px] mx-auto">
                Humanos expertos + agentes de IA operan tu CRM, WhatsApp, automatizaciones y
                métricas. Tú diriges el negocio; nosotros mantenemos la máquina viva. Sin contratar
                personal adicional a tu nómina.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3">
                <WaButton source="ops_hero" className="w-full sm:w-auto">
                  Hablar con un experto por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </WaButton>
                <p className="font-lato text-[13px] text-v2-ink-muted">
                  Respondemos en horas, en horario laboral Colombia · Sin compromiso
                </p>
              </div>

              {/* Prueba social temprana */}
              <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
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
            </Container>
          </Section>

          {/* ── ESPEJO: ¿te suena? ── */}
          <Section surface="default" size="default">
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-start">
                <div className="v2-reveal lg:sticky lg:top-28">
                  <Eyebrow variant="sand">El problema</Eyebrow>
                  <h2
                    className="font-poppins font-bold text-v2-ink-heading mt-3"
                    style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                  >
                    Aprendiste tu oficio. No el oficio de{" "}
                    <em className="not-italic text-[#8a7a4f]">operar la tecnología</em>.
                  </h2>
                  <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                    La mayoría de negocios opera su parte comercial por intuición: el dueño responde
                    WhatsApp, hace seguimiento de memoria y pierde clientes sin darse cuenta. No
                    porque el producto sea malo — porque nadie opera la máquina.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  {[
                    {
                      t: "Los leads te escriben y les responde quien pueda, cuando pueda.",
                      d: "Un lead contactado en los primeros 5 minutos califica hasta 21 veces más que uno contactado a los 30 minutos.",
                    },
                    {
                      t: "El seguimiento vive en la memoria del dueño.",
                      d: "Cerca del 80% de las ventas requieren 5 o más seguimientos. La mayoría de los equipos hace uno.",
                    },
                    {
                      t: "Compraste un CRM que nadie del equipo usa.",
                      d: "El 38% de las implementaciones de CRM que fracasan se debe a baja adopción del equipo.",
                    },
                    {
                      t: "Cada semana sale una IA nueva y no tienes tiempo de evaluarlas.",
                      d: "No tienes que entenderlas todas. Nosotros las filtramos y aplicamos las que sirven a tu operación.",
                    },
                  ].map((p, i) => (
                    <div
                      key={p.t}
                      className={`v2-reveal ${["", "v2-d1", "v2-d2", "v2-d3"][i]} bg-white border border-v2-border-subtle rounded-2xl p-6 flex gap-5`}
                    >
                      <span className="font-serif italic text-[28px] leading-none text-[#d4a853] flex-shrink-0 mt-0.5">
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
                    Fuentes: Lead Response Management Study · Marketing Donut · Gartner.
                  </p>
                </div>
              </div>
            </Container>
          </Section>

          {/* ── QUÉ ES SIXTEAM OPS ── */}
          <Section surface="sand-mist" size="default">
            <Container>
              <div className="text-center max-w-[680px] mx-auto v2-reveal">
                <Eyebrow variant="sand">La solución</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                >
                  Sixteam Ops: no entregamos y nos vamos.{" "}
                  <em className="not-italic text-[#8a7a4f]">Operamos.</em>
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
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-sand-mist border border-[#d4a853]/25 flex items-center justify-center text-[#8a7a4f]">
                      {f.icon}
                    </div>
                    <h3 className="font-poppins font-semibold text-[16px] text-v2-ink-heading mt-4">{f.t}</h3>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.65] mt-2">{f.d}</p>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* ── CÓMO FUNCIONA ── */}
          <Section surface="default" size="default">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="sand">Cómo funciona</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15" }}
                >
                  Tres pasos. El tercero{" "}
                  <em className="not-italic text-[#8a7a4f]">no se acaba</em>.
                </h2>
              </div>

              <div className="flex flex-col gap-0 mt-12">
                {[
                  {
                    t: "Escríbenos por WhatsApp",
                    d: "Nos cuentas cómo opera tu negocio hoy. Te respondemos en horas, en horario laboral Colombia.",
                  },
                  {
                    t: "Llamada de 30 minutos",
                    d: "Conversación honesta, sin pitch agresivo. Sales con el plan correcto para tu operación y la inversión clara antes de empezar.",
                  },
                  {
                    t: "Arrancamos y nos quedamos",
                    d: "Onboarding, revisión a 30 días y operación continua: la IA ejecuta, los especialistas dirigen y todo queda documentado.",
                  },
                ].map((s, i) => (
                  <div
                    key={s.t}
                    className={`v2-reveal ${["", "v2-d1", "v2-d2"][i]} flex gap-6 py-7 ${i < 2 ? "border-b border-v2-border-subtle" : ""}`}
                  >
                    <span className="font-poppins font-black text-[34px] leading-none text-[#d4a853] w-14 flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading">{s.t}</h3>
                      <p className="font-lato text-[15px] text-v2-ink-body leading-[1.7] mt-1.5">{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          {/* ── PLANES ── */}
          <Section surface="alt" size="default">
            <Container>
              <div className="text-center max-w-[640px] mx-auto v2-reveal mb-12">
                <Eyebrow variant="sand">Inversión</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
                >
                  Un equipo entero,{" "}
                  <Underlined color="sand" variant="scribble">
                    <em className="not-italic text-[#8a7a4f]">una sola línea</em>
                  </Underlined>{" "}
                  en tu presupuesto.
                </h2>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
                  Armar esto en casa son 3 o 4 contrataciones, más reclutamiento, rotación y gestión.
                  Con Sixteam Ops el precio es claro antes de empezar.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto items-start">
                {/* Ops Core */}
                <div className="v2-reveal bg-white border border-v2-border-medium rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                  <div className="px-7 pt-7 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Ops Core</h3>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="font-poppins font-black text-[40px] text-v2-ink-heading leading-none">$700</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /mes</span>
                    </div>
                    <p className="font-lato text-[12px] text-v2-ink-muted mt-1">contrato anual · pago mensual</p>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-relaxed mt-3">
                      Para negocios que ya tienen el sistema montado y necesitan que alguien lo
                      mantenga vivo.
                    </p>
                  </div>
                  <div className="px-7 py-6 flex flex-col gap-2.5">
                    {[
                      "5 horas de trabajo humano experto / mes",
                      "1 agente de IA especializado en tu operación",
                      "GoHighLevel incluida",
                      "Turnaround 2–4 días hábiles",
                      "Soporte vía chat IA + correo",
                      "Onboarding + revisión a 30 días",
                    ].map((t) => <CheckItem key={t} text={t} />)}
                  </div>
                  <div className="px-7 pb-7">
                    <WaButton
                      source="ops_plan_core"
                      message={MSG_CORE}
                      variant="outline"
                      size="md"
                      className="w-full justify-center"
                    >
                      Empezar con Ops Core <ArrowRight className="h-4 w-4" />
                    </WaButton>
                  </div>
                </div>

                {/* Ops Growth — destacado */}
                <div className="v2-reveal v2-d1 relative bg-white border-2 border-[#d4a853] rounded-2xl overflow-hidden shadow-[0_0_0_4px_rgba(212,168,83,0.10),0_24px_64px_rgba(212,168,83,0.14)]">
                  <div className="absolute -top-0 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center px-4 py-1.5 rounded-b-xl bg-[#d4a853] text-white font-lato font-bold text-[10px] uppercase tracking-widest shadow-[0_4px_12px_rgba(212,168,83,0.40)]">
                      Recomendado
                    </span>
                  </div>
                  <div className="px-7 pt-10 pb-5 border-b border-v2-border-subtle">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                    <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Ops Growth</h3>
                    <div className="flex items-baseline gap-1.5 mt-2">
                      <span className="font-poppins font-black text-[40px] text-[#8a7a4f] leading-none">$1,500</span>
                      <span className="font-lato text-[14px] text-v2-ink-muted">USD /mes</span>
                    </div>
                    <p className="font-lato text-[12px] text-v2-ink-muted mt-1">contrato anual · pago mensual</p>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-relaxed mt-3">
                      Para negocios que quieren a Sixteam operando activamente su crecimiento, no
                      solo manteniendo el sistema.
                    </p>
                  </div>
                  <div className="px-7 py-6 flex flex-col gap-2.5">
                    {[
                      "20 horas de trabajo humano experto / mes",
                      "Agente IA + agentes de gestión y métricas",
                      "GoHighLevel incluida",
                      "Hasta 3 tareas humanas en paralelo",
                      "Turnaround prioritario 1–3 días",
                      "Métricas avanzadas — visibilidad real del negocio",
                      "Reuniones de growth semanales",
                      "Análisis proactivo — Sixteam detecta y propone",
                      "Soporte por canal preferido (WhatsApp / Slack)",
                    ].map((t) => (
                      <CheckItem key={t} text={<strong className="text-v2-ink-heading font-semibold">{t}</strong>} />
                    ))}
                  </div>
                  <div className="px-7 pb-7">
                    <WaButton
                      source="ops_plan_growth"
                      message={MSG_GROWTH}
                      size="md"
                      className="w-full justify-center"
                    >
                      Empezar con Ops Growth <ArrowRight className="h-4 w-4" />
                    </WaButton>
                  </div>
                </div>
              </div>

              <p className="v2-reveal v2-d2 text-center font-lato text-[13px] text-v2-ink-muted mt-8">
                ¿No sabes cuál te corresponde? Escríbenos y lo definimos en la llamada de 30 minutos.
              </p>
            </Container>
          </Section>

          {/* ── TESTIMONIOS (sección existente del sitio) ── */}
          <TestimonialsV2 />

          {/* ── FAQ ── */}
          <Section surface="default" size="default">
            <Container size="narrow">
              <div className="text-center v2-reveal">
                <Eyebrow variant="sand">Preguntas frecuentes</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
                >
                  Lo que nos preguntan{" "}
                  <em className="not-italic text-[#8a7a4f]">antes de arrancar</em>.
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
                  "radial-gradient(circle at 60% 40%, rgba(212,168,83,0.16) 0%, rgba(29,112,162,0.10) 45%, transparent 70%)",
              }}
            />
            <Container size="narrow" className="relative text-center">
              <div className="v2-reveal">
                <Eyebrow variant="sand" className="text-[#d4a853]">Sixteam Ops</Eyebrow>
              </div>
              <h2
                className="v2-reveal v2-d1 font-poppins font-bold text-white mt-5"
                style={{ fontSize: "clamp(34px, 6vw, 58px)", lineHeight: "1.08", letterSpacing: "-0.02em" }}
              >
                Ya no tienes que operar solo.{" "}
                <em className="font-serif italic font-normal text-[#d4a853]">
                  Tú solo tienes que{" "}
                  <Underlined color="sand" variant="scribble">crecer.</Underlined>
                </em>
              </h2>
              <p className="v2-reveal v2-d2 font-lato text-[18px] md:text-[20px] text-white/75 leading-[1.65] max-w-[600px] mx-auto mt-7">
                Cuéntanos cómo opera tu negocio hoy. Te decimos, sin compromiso, cómo lo operaría
                Sixteam Ops — y con qué plan arrancar.
              </p>
              <div className="v2-reveal v2-d3 mt-10 flex justify-center">
                <WaButton source="ops_final" className="w-full sm:w-auto">
                  Hablar con un experto por WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </WaButton>
              </div>
              <p className="v2-reveal v2-d4 font-lato text-[13px] text-white/40 mt-6">
                Respondemos en horas, en horario laboral Colombia.
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

      {/* ── Barra CTA fija — solo móvil ── */}
      <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white/95 backdrop-blur border-t border-v2-border-subtle px-4 py-3">
        <WaButton source="ops_sticky" size="md" className="w-full justify-center">
          <MessageCircle className="h-4 w-4" />
          Hablar por WhatsApp
        </WaButton>
      </div>

    </div>
  );
};

export default OpsLanding;
