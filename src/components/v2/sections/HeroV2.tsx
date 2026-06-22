import { Link } from "react-router-dom";
import {
  ArrowRight, Calendar, ChevronDown,
  BarChart2, Mail, Database, Bot, RefreshCw,
  Globe, Megaphone,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import LogoSliderV2 from "@/components/v2/sections/LogoSliderV2";

/* Who handles each item */
type Handler = "ia" | "human";

const ops: { icon: React.ElementType; label: string; status: string; handler: Handler }[] = [
  { icon: Database,  label: "CRM",                        status: "Pipeline limpio · 12 deals activos", handler: "human" },
  { icon: Bot,       label: "Chatbot IA",                 status: "Calificando leads 24/7",           handler: "ia" },
  { icon: Globe,     label: "Web & landing pages",        status: "Actualizada el martes",            handler: "human" },
  { icon: Megaphone, label: "Pauta digital",              status: "3 campañas activas",               handler: "human" },
  { icon: RefreshCw, label: "Automatizaciones y agentes IA", status: "6 workflows corriendo",        handler: "ia" },
  { icon: BarChart2, label: "Reporte ejecutivo",          status: "Enviado · Lun 9:01am",             handler: "human" },
  { icon: Mail,      label: "Email y WhatsApp marketing", status: "3 campañas activas · 2 en cola",   handler: "ia" },
];

const handlerLabel: Record<Handler, { label: string; dot: string; text: string }> = {
  ia:    { label: "IA",          dot: "bg-v2-accent-teal", text: "text-v2-accent-teal-deep" },
  human: { label: "Humano + IA", dot: "bg-[#d4a853]",      text: "text-[#8a7a4f]" },
};

/* ── Weekly ops card mockup ── */
const WeeklyCardMockup = () => (
  <div
    className="relative w-full max-w-[420px] mx-auto select-none"
    style={{ animation: "v2-float 6s ease-in-out infinite" }}
    aria-hidden="true"
  >
    <div className="bg-white rounded-3xl shadow-[0_32px_80px_rgba(10,35,66,0.16)] overflow-hidden border border-v2-border-subtle">

      {/* Card header */}
      <div className="flex items-start justify-between px-6 pt-6 pb-4">
        <div>
          <p className="font-serif italic text-[22px] leading-[1.2] text-v2-ink-heading">
            Tu operativa<br />manejada por expertos
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-v2-surface-teal-mist border border-v2-accent-teal/20 rounded-full px-3 py-1.5 mt-0.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v2-accent-teal opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-v2-accent-teal" />
          </span>
          <span className="font-lato text-[11px] font-semibold text-v2-accent-teal-deep">
            Todo en orden con tecnología
          </span>
        </div>
      </div>

      {/* Ops list */}
      <div className="px-4 pb-4 flex flex-col gap-1">
        {ops.map(({ icon: Icon, label, status, handler }) => {
          const h = handlerLabel[handler];
          return (
            <div
              key={label}
              className="flex items-center gap-3 bg-v2-surface-alt rounded-2xl px-3 py-3"
            >
              {/* Icon */}
              <div className="w-8 h-8 rounded-xl bg-white border border-v2-border-subtle flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon className="h-4 w-4 text-v2-ink-muted" />
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="font-poppins font-bold text-[13px] text-v2-ink-heading leading-tight">
                  {label}
                </p>
              </div>

              {/* Handler badge */}
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${h.dot}`} />
                <span className={`font-lato text-[10px] font-semibold uppercase tracking-wider ${h.text}`}>
                  {h.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer — "Handled by AI + human team" */}
      <div className="flex items-center gap-3 px-6 py-4 border-t border-v2-border-subtle">
        <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-7 w-7 object-contain flex-shrink-0" />
        <p className="font-lato text-[12px] text-v2-ink-muted leading-tight">
          Operado por{" "}
          <span className="font-semibold text-v2-ink-heading">IA</span>
          {" "}+{" "}
          <span className="font-semibold text-v2-ink-heading">equipo humano</span>
        </p>
      </div>
    </div>
  </div>
);

export const HeroV2 = () => {
  const scrollToNext = () => {
    document.getElementById("hero-next")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <Section
      surface="default"
      className="relative overflow-hidden pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24"
    >
      {/* ── BACKGROUND LAYER 1: Gradient mesh ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at 45% 45%, rgba(0,191,165,0.11) 0%, rgba(29,112,162,0.06) 40%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(ellipse at 55% 55%, rgba(29,112,162,0.09) 0%, rgba(0,191,165,0.04) 45%, transparent 70%)",
            animation: "v2-aurora-2 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(ellipse, rgba(212,201,168,0.07) 0%, transparent 65%)",
            animation: "v2-aurora-1 22s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* ── BACKGROUND LAYER 2: Fine dot grid ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.028]"
        style={{
          backgroundImage: "radial-gradient(circle, #0a2342 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ── BACKGROUND LAYER 3: Topographic contour lines (SVG) ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-[0.13]">
        <svg
          className="absolute -top-10 -right-10 w-[720px] h-[720px]"
          viewBox="0 0 720 720"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: "v2-topo-drift 40s linear infinite" }}
        >
          {[60,120,180,240,300,360,420,480,540,600,660].map((r, i) => (
            <ellipse
              key={r}
              cx="360" cy="360"
              rx={r * 0.95 + i * 2}
              ry={r * 0.72 + i * 3}
              stroke="#009b86"
              strokeWidth="1"
              fill="none"
              opacity={0.6 - i * 0.04}
              transform={`rotate(${i * 8} 360 360)`}
            />
          ))}
        </svg>
        <svg
          className="absolute -bottom-20 -left-20 w-[560px] h-[560px]"
          viewBox="0 0 560 560"
          fill="none"
          style={{ animation: "v2-topo-drift 55s linear infinite reverse" }}
        >
          {[40,90,140,190,240,290,340,390,440].map((r, i) => (
            <ellipse
              key={r}
              cx="280" cy="280"
              rx={r}
              ry={r * 0.68 + i * 2}
              stroke="#1d70a2"
              strokeWidth="0.8"
              fill="none"
              opacity={0.5 - i * 0.04}
              transform={`rotate(${-i * 10} 280 280)`}
            />
          ))}
        </svg>
      </div>

      {/* ── BACKGROUND LAYER 4: Floating geometric accents ── */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Top-right diamond */}
        <div
          className="absolute top-28 right-[11%] w-4 h-4 border-2 border-v2-accent-teal/50 rotate-45"
          style={{ animation: "v2-float 8s ease-in-out infinite" }}
        />
        {/* Larger rotated square outline */}
        <div
          className="absolute top-44 right-[17%] w-9 h-9 border-2 border-v2-accent-teal/25 rotate-12"
          style={{ animation: "v2-float 12s ease-in-out infinite 1s" }}
        />
        {/* Small teal fill dot */}
        <div
          className="absolute top-36 left-[7%] w-2.5 h-2.5 rounded-full bg-v2-accent-teal/40"
          style={{ animation: "v2-float 10s ease-in-out infinite 2s" }}
        />
        {/* Medium teal dot */}
        <div
          className="absolute top-72 right-[8%] w-3 h-3 rounded-full bg-v2-accent-teal/25"
          style={{ animation: "v2-float 11s ease-in-out infinite 0.8s" }}
        />
        {/* Navy cross */}
        <svg
          className="absolute top-64 left-[13%] w-7 h-7 opacity-25"
          style={{ animation: "v2-float 14s ease-in-out infinite 0.5s" }}
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="2" x2="12" y2="22" stroke="#0a2342" strokeWidth="1.8" strokeLinecap="round"/>
          <line x1="2" y1="12" x2="22" y2="12" stroke="#0a2342" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        {/* Bottom-left circle outline */}
        <div
          className="absolute bottom-20 left-[5%] w-14 h-14 rounded-full border-2 border-v2-accent-blue/30"
          style={{ animation: "v2-float 16s ease-in-out infinite 3s" }}
        />
        {/* Inner circle bottom-left */}
        <div
          className="absolute bottom-[5.5rem] left-[6.5%] w-7 h-7 rounded-full border border-v2-accent-blue/20"
          style={{ animation: "v2-float 16s ease-in-out infinite 3s" }}
        />
        {/* Sand accent square */}
        <div
          className="absolute bottom-36 right-[21%] w-6 h-6 border-2 border-[#d4c9a8]/70 rotate-[20deg]"
          style={{ animation: "v2-float 9s ease-in-out infinite 1.5s" }}
        />
        {/* Tiny teal dot bottom-right area */}
        <div
          className="absolute bottom-28 right-[14%] w-2 h-2 rounded-full bg-v2-accent-teal/35"
          style={{ animation: "v2-float 7s ease-in-out infinite 2.2s" }}
        />
        {/* Dots row top-center */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 flex gap-3">
          {[0,1,2].map(i => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-v2-accent-teal/40"
              style={{ animation: `v2-float ${8 + i * 2}s ease-in-out infinite ${i * 0.6}s` }}
            />
          ))}
        </div>
        {/* Long horizontal dashed accent line */}
        <svg
          className="absolute top-[45%] left-0 w-full opacity-[0.07]"
          viewBox="0 0 1200 4"
          preserveAspectRatio="none"
        >
          <line x1="0" y1="2" x2="1200" y2="2" stroke="#009b86" strokeWidth="1" strokeDasharray="6 14"/>
        </svg>
      </div>

      {/* ── BACKGROUND LAYER 5: Noise grain overlay ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.018]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <Container size="wide" className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Slogan eyebrow */}
          <div
            className="v2-hero-entry mb-8 inline-flex items-center gap-3 bg-white border border-v2-border-subtle rounded-full px-5 py-2.5 shadow-[0_4px_24px_rgba(10,35,66,0.06)]"
            style={{ animationDelay: "0ms" }}
          >
            <img src="/logo-sixteam.png" alt="Sixteam.pro" className="h-5 w-5 object-contain flex-shrink-0" />
            <span className="w-px h-4 bg-v2-border-subtle flex-shrink-0" aria-hidden />
            <p className="font-lato text-[11px] md:text-[12px] tracking-wide whitespace-nowrap">
              <span className="text-v2-ink-heading font-semibold">Procesos</span>
              {" "}<span className="text-v2-accent-teal font-bold">+</span>{" "}
              <span className="text-v2-ink-heading font-semibold">Tecnología</span>
              {" "}<span className="text-v2-accent-teal font-bold">+</span>{" "}
              <span className="text-v2-ink-heading font-semibold">Personas</span>
              {" "}<span className="text-v2-accent-teal font-bold">=</span>{" "}
              <span className="text-v2-ink-heading font-semibold">Crecimiento</span>
            </p>
          </div>

          {/* Headline */}
          <h1
            className="v2-hero-entry font-poppins font-bold text-v2-ink-heading"
            style={{
              fontSize: "clamp(28px, 5vw, 68px)",
              lineHeight: "1.1",
              letterSpacing: "-0.03em",
              animationDelay: "100ms",
            }}
          >
            La solución a los{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">dolores tecnológicos</em>
            </Underlined>
            <br />
            de tu negocio.
          </h1>

          {/* Subtitle */}
          <p
            className="v2-hero-entry font-serif italic text-[20px] md:text-[23px] text-[#1d70a2] leading-[1.45] mt-6 max-w-2xl"
            style={{ animationDelay: "220ms" }}
          >
            Somos el equipo de tecnología que tu empresa todavía no tiene.
          </p>

          {/* Scroll button */}
          <button
            onClick={scrollToNext}
            className="v2-hero-entry group mt-10 flex items-center gap-2 font-lato text-[13px] text-v2-ink-muted hover:text-v2-accent-teal transition-colors duration-200 cursor-pointer"
            style={{ animationDelay: "340ms" }}
          >
            Ver cómo funciona
            <ChevronDown
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
              style={{ animation: "v2-float 2.4s ease-in-out infinite" }}
            />
          </button>

        </div>
      </Container>
    </Section>

    {/* ── Logo slider — entre sección 1 y 2 ── */}
    <LogoSliderV2 />

    {/* ── Siguiente sección ── */}
    <div id="hero-next" className="relative z-10 bg-transparent pt-4 pb-16 md:pb-24">
      <Container size="wide">
        <div className="flex flex-col items-center">

          {/* Two-column: subtitle left · card right */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-5xl mb-12">

            {/* Left: styled subtitle */}
            <div className="flex-1 text-left">
              <p className="font-lato text-[10px] font-semibold uppercase tracking-[0.2em] text-v2-ink-heading mb-5">
                Nuestro enfoque
              </p>
              <h2
                className="font-poppins leading-[1.3]"
                style={{ fontSize: "clamp(22px, 2.8vw, 34px)" }}
              >
                <span className="text-v2-ink-heading font-extrabold">Transformamos</span>{" "}
                <span className="font-lato font-normal text-v2-ink-body">procesos,</span>
                <br />
                <span className="text-v2-ink-heading font-extrabold">apoyamos</span>{" "}
                <span className="font-lato font-normal text-v2-ink-body">al personal en la adopción,</span>
                <br />
                <span className="text-v2-ink-heading font-extrabold">mantenemos</span>{" "}
                <span className="font-lato font-normal text-v2-ink-body">tus sistemas,</span>
                <br />
                <span className="text-v2-ink-heading font-extrabold">escalamos</span>{" "}
                <span className="font-lato font-normal text-v2-ink-body">pensando en la mejora continua.</span>
              </h2>
            </div>

            {/* Right: Weekly ops card */}
            <div className="flex-1 w-full">
              <WeeklyCardMockup />
            </div>
          </div>

          {/* CTA row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg" className="group">
                Agenda tu diagnóstico gratuito
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2 variant="outline" size="lg" className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4 opacity-70" />
                Agendar una llamada
              </ButtonV2>
            </Link>
          </div>

          {/* Trust strip */}
          <div className="mt-7">
            <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2">
              {[
                "4+ años acompañando empresas en LATAM",
                "Consultar · Implementar · Operar",
                "Diagnóstico gratuito · Operación desde $1,500/mes",
              ].map((item, i) => (
                <span key={item} className="flex items-center gap-2 font-lato text-[11px] text-v2-ink-muted uppercase tracking-widest">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-v2-border-subtle inline-block" aria-hidden />}
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </div>
    </>
  );
};

export default HeroV2;
