import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  X,
  Calendar,
  TrendingUp,
  Users,
  Zap,
  Target,
  BarChart2,
  ChevronRight,
  ChevronDown,
  Globe,
  Newspaper,
  Bot,
  DollarSign,
  Star,
} from "lucide-react";
import Container from "@/components/v2/Container";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Slide 1: Title ── */
/* ── Slide 2: Problem ── */
/* ── Slide 3: Landscape (provider-type comparison) ── */
/* ── Slide 4: Solution ── */
/* ── Slide 5: Why Now ── */
/* ── Slide 5b: OpenAI DeployCo validation ── */
/* ── Slide 6: Product ── */
/* ── Slide 7: Model ── */
/* ── Slide 8: Defensibility ── */
/* ── Slide 9: Market ── */
/* ── Slide 10: Traction ── */
/* ── Slide 11: Vision ── */
/* ── Slide 12: Team ── */
/* ── Slide 13: Ask ── */

const SLIDES = [
  { id: "s1",  label: "Title" },
  { id: "s2",  label: "Problem" },
  { id: "s3",  label: "Landscape" },
  { id: "s4",  label: "Solution" },
  { id: "s5",  label: "Why Now" },
  { id: "s5b", label: "DeployCo" },
  { id: "s6",  label: "Product" },
  { id: "s7",  label: "Model" },
  { id: "s8",  label: "Defensibility" },
  { id: "s9",  label: "Market" },
  { id: "s10", label: "Traction" },
  { id: "s11", label: "Vision" },
  { id: "s12", label: "Team" },
  { id: "s13", label: "Ask" },
];

/* ── Provider-type comparison data (Slide 3) ── */
interface ProviderRow {
  type: string;
  tagline: string;
  failure: string;
  consulta: boolean;
  implementa: boolean;
  opera: boolean;
  aiNative: boolean;
  escalaSin: boolean;
  fullRevOps: boolean;
  highlight?: boolean;
}

const providerTypes: ProviderRow[] = [
  {
    type: "Agencias",
    tagline: "Implementan y se van",
    failure: "Cobran por proyecto. Después del go-live, los problemas son del cliente. Sin operación continua.",
    consulta: true, implementa: true, opera: false, aiNative: false, escalaSin: false, fullRevOps: false,
  },
  {
    type: "Freelancers",
    tagline: "Piezas sueltas, sin continuidad",
    failure: "Por hora o tarea. Sin visión de sistema. Cuando termina la tarea, desaparecen.",
    consulta: false, implementa: true, opera: false, aiNative: false, escalaSin: false, fullRevOps: false,
  },
  {
    type: "Consultores",
    tagline: "Entregan PDF, no ejecutan",
    failure: "La implementación y la operación quedan del lado del cliente. Pago por el informe, sigo sin operación.",
    consulta: true, implementa: false, opera: false, aiNative: false, escalaSin: false, fullRevOps: false,
  },
  {
    type: "BPO / Soporte tradicional",
    tagline: "Operan con headcount lineal",
    failure: "Sin IA, sin rediseño. Escalar = contratar más gente = más costo. Margen no mejora.",
    consulta: false, implementa: false, opera: true, aiNative: false, escalaSin: false, fullRevOps: false,
  },
  {
    type: "Sixteam.pro",
    tagline: "Consulta + implementa + opera. AI-native.",
    failure: "",
    consulta: true, implementa: true, opera: true, aiNative: true, escalaSin: true, fullRevOps: true,
    highlight: true,
  },
];

const compDimensions = [
  { key: "consulta",    label: "Consulta / diagnostica" },
  { key: "implementa",  label: "Implementa el sistema" },
  { key: "opera",       label: "Opera mes a mes (continuo)" },
  { key: "aiNative",    label: "AI-native (IA + humano)" },
  { key: "escalaSin",   label: "Escala sin headcount lineal" },
  { key: "fullRevOps",  label: "Cobertura: todo RevOps" },
] as const;

/* ── Pricing data (Slide 7) ── */
const plans = [
  {
    name: "ESENCIAL",
    price: "$199",
    period: "/mes",
    target: "Negocios pequeños y equipos en arranque",
    features: ["1 agente IA activo", "60 créditos / mes", "CRM incluido", "Wallet de mensajería"],
    best: false,
  },
  {
    name: "INTEGRAL",
    price: "$499",
    period: "/mes",
    target: "Operaciones multi-canal",
    features: ["160 créditos / mes", "Multi-canal", "Integraciones avanzadas", "Bono onboarding VIP"],
    best: true,
  },
  {
    name: "TOTAL",
    price: "Desde $1,200",
    period: "/mes",
    target: "Operaciones de mayor volumen",
    features: ["Desde 400 créditos / mes", "PM dedicado", "Llamadas semanales", "Acceso al equipo completo"],
    best: false,
  },
];

/* ── Vision ladder (Slide 11) ── */
const ladder = [
  { year: "2026", milestone: "Cadena productizada · 30 clientes · $700–900K ARR" },
  { year: "2027", milestone: "Capa de IA ops madura · playbooks vertical · 80–120 clientes · $1.8–2.5M ARR" },
  { year: "2028", milestone: "Software embebido en el servicio · expansión + México · $4–6M ARR" },
  { year: "2030", milestone: '"Sixteam OS" como producto separado · $20–40M ARR' },
  { year: "2032+", milestone: "Líder regional LatAm + US-nearshore de RevOps operado · exit potencial" },
];

/* ── Dot Navigator ── */
function DotNav({ active }: { active: number }) {
  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      aria-label="Navegación de slides"
      className="hidden lg:flex fixed right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5"
    >
      {SLIDES.map((slide, i) => (
        <button
          key={slide.id}
          onClick={() => handleClick(slide.id)}
          title={`${String(i + 1).padStart(2, "0")} ${slide.label}`}
          className={`group relative w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
            active === i
              ? "bg-[#00bfa5] scale-125 shadow-[0_0_8px_rgba(0,191,165,0.7)]"
              : "bg-white/25 hover:bg-white/60"
          }`}
        >
          <span className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap font-lato text-[11px] text-white/80 bg-[#0a2342]/90 rounded px-2 py-0.5 border border-white/10">
            {String(i + 1).padStart(2, "0")} {slide.label}
          </span>
        </button>
      ))}
    </nav>
  );
}

/* ── Slide number badge ── */
function SlideNum({ n, light }: { n: number; light?: boolean }) {
  return (
    <span
      className={`font-lato text-[11px] font-bold tracking-[0.18em] uppercase ${
        light ? "text-white/30" : "text-[#0a2342]/25"
      }`}
    >
      {String(n).padStart(2, "0")}/{SLIDES.length}
    </span>
  );
}

/* ── Chain motif ── */
function Chain({ dark }: { dark?: boolean }) {
  const accent = dark ? "text-[#00bfa5]" : "text-[#1d70a2]";
  const divider = dark ? "text-white/30" : "text-[#0a2342]/30";

  return (
    <div className="flex flex-wrap items-center gap-1.5 font-lato text-[13px] font-semibold">
      <span className={`px-3 py-1 rounded-full border ${dark ? "border-white/20 text-white/70" : "border-[#0a2342]/20 text-[#0a2342]/70"}`}>
        CONSULTORÍA
      </span>
      <ChevronRight className={`w-4 h-4 ${divider}`} />
      <span className={`px-3 py-1 rounded-full border ${dark ? "border-white/20 text-white/70" : "border-[#0a2342]/20 text-[#0a2342]/70"}`}>
        IMPLEMENTACIÓN
      </span>
      <ChevronRight className={`w-4 h-4 ${divider}`} />
      <span className={`px-3 py-1 rounded-full border border-[#00bfa5]/60 ${accent} bg-[#00bfa5]/10`}>
        OPERACIÓN
      </span>
      <span className={`ml-1 text-[11px] ${dark ? "text-white/60" : "text-[#0a2342]/60"}`}>: la cadena completa</span>
    </div>
  );
}

/* ── Check/X cell ── */
function Cell({ val }: { val: boolean }) {
  return val ? (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#00bfa5]/15 border border-[#00bfa5]/30">
      <Check className="w-3.5 h-3.5 text-[#00bfa5]" strokeWidth={2.5} />
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-500/10 border border-red-400/25">
      <X className="w-3.5 h-3.5 text-red-400" strokeWidth={2.5} />
    </span>
  );
}

/* ══════════════════════════════════════════════
   Main component
══════════════════════════════════════════════ */
const PitchV2 = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  /* Observe which slide is in view */
  useEffect(() => {
    const sections = SLIDES.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = SLIDES.findIndex((s) => s.id === (entry.target as HTMLElement).id);
            if (idx !== -1) setActiveSlide(idx);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  /* Scroll-reveal refs */
  const s2Ref  = useScrollReveal<HTMLDivElement>();
  const s3Ref  = useScrollReveal<HTMLDivElement>();
  const s4Ref  = useScrollReveal<HTMLDivElement>();
  const s5Ref  = useScrollReveal<HTMLDivElement>();
  const s5bRef = useScrollReveal<HTMLDivElement>();
  const s6Ref  = useScrollReveal<HTMLDivElement>();
  const s7Ref  = useScrollReveal<HTMLDivElement>();
  const s8Ref  = useScrollReveal<HTMLDivElement>();
  const s9Ref  = useScrollReveal<HTMLDivElement>();
  const s10Ref = useScrollReveal<HTMLDivElement>();
  const s11Ref = useScrollReveal<HTMLDivElement>();
  const s12Ref = useScrollReveal<HTMLDivElement>();
  const s13Ref = useScrollReveal<HTMLDivElement>();

  return (
    <div className="font-lato antialiased bg-[#0a2342] text-white">

      {/* ── Sticky minimal pitch bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 h-14 bg-[#0a2342]/95 backdrop-blur-sm border-b border-white/8">
        <Link to="/" className="font-poppins font-black text-[15px] text-white tracking-tight">
          SIXTEAM<span className="text-[#00bfa5]">.</span>
        </Link>
        <a
          href="mailto:samuel@sixteam.pro?subject=Investor%20Call%20Request"
          className="inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold text-[#00bfa5] border border-[#00bfa5]/40 rounded-full px-4 py-1.5 hover:bg-[#00bfa5]/10 transition-colors duration-200"
        >
          <Calendar className="w-3.5 h-3.5" />
          Agendar con founders
        </a>
      </header>

      <DotNav active={activeSlide} />

      {/* ══════════════════════════════════════════════
          Slide 1 — Title
      ══════════════════════════════════════════════ */}
      <section
        id="s1"
        className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 bg-white"
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
          <div
            className="absolute top-28 right-[11%] w-4 h-4 border-2 border-v2-accent-teal/50 rotate-45"
            style={{ animation: "v2-float 8s ease-in-out infinite" }}
          />
          <div
            className="absolute top-44 right-[17%] w-9 h-9 border-2 border-v2-accent-teal/25 rotate-12"
            style={{ animation: "v2-float 12s ease-in-out infinite 1s" }}
          />
          <div
            className="absolute top-36 left-[7%] w-2.5 h-2.5 rounded-full bg-v2-accent-teal/40"
            style={{ animation: "v2-float 10s ease-in-out infinite 2s" }}
          />
          <div
            className="absolute top-72 right-[8%] w-3 h-3 rounded-full bg-v2-accent-teal/25"
            style={{ animation: "v2-float 11s ease-in-out infinite 0.8s" }}
          />
          <svg
            className="absolute top-64 left-[13%] w-7 h-7 opacity-25"
            style={{ animation: "v2-float 14s ease-in-out infinite 0.5s" }}
            viewBox="0 0 24 24"
          >
            <line x1="12" y1="2" x2="12" y2="22" stroke="#0a2342" strokeWidth="1.8" strokeLinecap="round"/>
            <line x1="2" y1="12" x2="22" y2="12" stroke="#0a2342" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
          <div
            className="absolute bottom-20 left-[5%] w-14 h-14 rounded-full border-2 border-v2-accent-blue/30"
            style={{ animation: "v2-float 16s ease-in-out infinite 3s" }}
          />
          <div
            className="absolute bottom-[5.5rem] left-[6.5%] w-7 h-7 rounded-full border border-v2-accent-blue/20"
            style={{ animation: "v2-float 16s ease-in-out infinite 3s" }}
          />
          <div
            className="absolute bottom-36 right-[21%] w-6 h-6 border-2 border-[#d4c9a8]/70 rotate-[20deg]"
            style={{ animation: "v2-float 9s ease-in-out infinite 1.5s" }}
          />
          <div
            className="absolute bottom-28 right-[14%] w-2 h-2 rounded-full bg-v2-accent-teal/35"
            style={{ animation: "v2-float 7s ease-in-out infinite 2.2s" }}
          />
          <div className="absolute top-24 left-1/2 -translate-x-1/2 flex gap-3">
            {[0,1,2].map(i => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-v2-accent-teal/40"
                style={{ animation: `v2-float ${8 + i * 2}s ease-in-out infinite ${i * 0.6}s` }}
              />
            ))}
          </div>
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
          <div className="relative z-10 flex flex-col items-start text-left max-w-3xl">

            {/* Social proof pill + avatars */}
            <div
              className="v2-hero-entry flex items-center gap-3"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center -space-x-2">
                {[
                  { initials: "SB", bg: "bg-v2-accent-teal", text: "text-v2-ink-heading" },
                  { initials: "EH", bg: "bg-v2-accent-blue",  text: "text-white" },
                ].map((a) => (
                  <div
                    key={a.initials}
                    className={`w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-poppins font-bold text-[11px] flex-shrink-0 ${a.bg} ${a.text}`}
                  >
                    {a.initials}
                  </div>
                ))}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-v2-accent-teal/25 bg-v2-surface-teal-mist px-4 py-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-v2-accent-teal text-v2-accent-teal" aria-hidden />
                  ))}
                </div>
                <span className="font-lato text-[11px] font-semibold uppercase tracking-[0.13em] text-v2-accent-teal-deep">
                  Pitch · Pre-seed 2026
                </span>
              </div>
            </div>

            {/* Headline */}
            <h1
              className="v2-hero-entry mt-7 font-poppins font-bold text-v2-ink-heading"
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                lineHeight: "1.04",
                letterSpacing: "-0.03em",
                animationDelay: "100ms",
              }}
            >
              Consultamos, implementamos y{" "}
              <em className="font-serif italic font-normal">operamos</em>
              <br />
              el RevOps de empresas de servicio.
            </h1>

            {/* Stacked promise lines */}
            <div
              className="v2-hero-entry mt-7 flex flex-col gap-2"
              style={{ animationDelay: "220ms" }}
            >
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                Cobertura completa: marketing, ventas y servicio al cliente, todo el revenue, no una pieza.
              </p>
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                Equipo AI-native: humanos senior + 6 agentes IA operando 24/7.
              </p>
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                LatAm + EEUU-nearshore desde Colombia. Dos mercados, una operación.
              </p>
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-heading font-semibold leading-[1.55]">
                Recurrente. Operado.{" "}
                <Underlined color="teal">
                  <span className="text-v2-accent-teal-deep">No te dejamos solo después del go-live.</span>
                </Underlined>
              </p>
            </div>

            {/* CTA row */}
            <div
              className="v2-hero-entry mt-9 flex flex-col sm:flex-row items-start gap-3"
              style={{ animationDelay: "340ms" }}
            >
              <a href="mailto:samuel@sixteam.pro?subject=Pitch%20Sixteam">
                <ButtonV2 variant="primary" size="lg" className="group">
                  Agendar con founders
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </ButtonV2>
              </a>
              <a href="#s2">
                <ButtonV2 variant="outline" size="lg" className="inline-flex items-center gap-2">
                  <ChevronDown className="h-4 w-4 opacity-70" />
                  Continuar al pitch
                </ButtonV2>
              </a>
            </div>

            {/* Testimonial mini-card */}
            <div
              className="v2-hero-entry mt-8 w-full max-w-[480px]"
              style={{ animationDelay: "440ms" }}
            >
              <div className="bg-white border border-v2-border-subtle rounded-2xl px-5 py-4 shadow-[0_4px_24px_rgba(10,35,66,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-v2-surface-teal-mist flex items-center justify-center font-poppins font-bold text-[12px] text-v2-accent-teal-deep flex-shrink-0">
                    JR
                  </div>
                  <div>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-[1.6]">
                      <span className="font-serif italic text-v2-accent-teal text-[17px] leading-none mr-0.5">"</span>
                      No necesitábamos un VP de Ventas ni otra agencia. Necesitábamos que alguien diseñara, montara y operara el sistema completo.
                      <span className="font-serif italic text-v2-accent-teal text-[17px] leading-none ml-0.5">"</span>
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-v2-accent-teal text-v2-accent-teal" aria-hidden />
                        ))}
                      </div>
                      <span className="font-lato text-[11px] text-v2-ink-muted">
                        Cliente de Sixteam · agencia de viajes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust strip */}
            <div
              className="v2-hero-entry mt-7"
              style={{ animationDelay: "520ms" }}
            >
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {[
                  "4+ años operando RevOps en LATAM",
                  "30+ clientes en operación",
                  "Pre-seed $350K · SAFE · 18 meses runway",
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
      </section>

      {/* ══════════════════════════════════════════════
          Slide 2 — The Problem
      ══════════════════════════════════════════════ */}
      <section id="s2" className="min-h-screen flex flex-col justify-center py-24 bg-[#fdfcf8]">
        <div ref={s2Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={2} />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#009b86] v2-fade v2-d1">
                El problema
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-[#0a2342] mt-4"
                style={{ fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: "1.1", maxWidth: "780px" }}
              >
                Las empresas de servicio crecen en ventas, pero su operación de revenue se queda{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#009b86]">manual.</em>
                </Underlined>
              </h2>

              {/* 3 stat bullets */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                {[
                  {
                    stat: "30–40%",
                    label: "ingresos potenciales perdidos",
                    desc: "El dueño es experto en su producto, nunca estudió cómo operar revenue. Pierde 30–40% de ingresos potenciales sin saber por qué.",
                    icon: TrendingUp,
                  },
                  {
                    stat: "20–200",
                    label: "empleados: la trampa",
                    desc: "Cuando una empresa crece, la comunicación informal (WhatsApp, aprobaciones verbales, Excel disperso) colapsa bajo el volumen.",
                    icon: Users,
                  },
                  {
                    stat: "−margen",
                    label: "La salida default cuesta caro",
                    desc: "Contratar gente lineal para tapar el caos se come el margen y mete error humano.",
                    icon: BarChart2,
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.stat}
                      className={`v2-reveal v2-d${i + 2} bg-white border border-[#0a2342]/10 rounded-2xl p-6 shadow-[0_8px_32px_rgba(10,35,66,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,35,66,0.10)] transition-[transform,box-shadow] duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#00bfa5]/10 border border-[#00bfa5]/20 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#00bfa5]" />
                        </div>
                        <div>
                          <span className="font-poppins font-black text-[32px] text-[#0a2342] leading-none">{item.stat}</span>
                          <p className="font-poppins font-bold text-[14px] text-[#1d70a2] mt-0.5">{item.label}</p>
                        </div>
                      </div>
                      <p className="font-lato text-[14px] text-[#334155] leading-[1.6] mt-4">{item.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* 3 chained problems */}
              <div className="v2-reveal v2-d5 mt-10 bg-[#0a2342] rounded-2xl p-7 md:p-8">
                <p className="font-poppins font-bold text-[15px] text-[#00bfa5] mb-5 uppercase tracking-widest">
                  3 problemas encadenados
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { n: "01", label: "No sabe QUÉ arreglar", sub: "Falta diagnóstico" },
                    { n: "02", label: "No sabe CÓMO construirlo", sub: "Falta implementación" },
                    { n: "03", label: "No tiene QUIÉN lo opere", sub: "Falta operación continua" },
                  ].map((p) => (
                    <div key={p.n} className="flex gap-4">
                      <span className="font-poppins font-black text-[28px] text-[#1d70a2]/40 leading-none">{p.n}</span>
                      <div>
                        <p className="font-poppins font-bold text-[15px] text-white">{p.label}</p>
                        <p className="font-lato text-[13px] text-white/50 mt-1">{p.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Punchline */}
              <div className="v2-reveal v2-d6 mt-8 text-center">
                <p
                  className="font-poppins font-bold text-[#009b86]"
                  style={{ fontSize: "clamp(22px, 3.5vw, 28px)", lineHeight: "1.35" }}
                >
                  Hoy tiene que resolver los tres por separado,<br className="hidden md:block" />
                  con tres proveedores distintos.{" "}
                  <span className="text-[#0a2342]">O no los resuelve.</span>
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 3 — Provider-Type Comparison
      ══════════════════════════════════════════════ */}
      <section
        id="s3"
        className="min-h-screen flex flex-col justify-center py-24"
        style={{ background: "linear-gradient(160deg, #0a2342 0%, #0e2d52 100%)" }}
      >
        {/* Aurora orbs */}
        <div
          className="pointer-events-none absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #1d70a2 0%, transparent 65%)", animation: "v2-aurora-2 18s ease-in-out infinite" }}
          aria-hidden
        />

        <div ref={s3Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={3} light />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
                El mercado actual
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
                style={{ fontSize: "clamp(24px, 4vw, 42px)", lineHeight: "1.12", maxWidth: "740px" }}
              >
                El cliente no elige entre Sixteam y nada.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#00bfa5]">Elige entre Sixteam y uno de estos cuatro</em>
                </Underlined>{" "}
                , y ninguno cierra la cadena.
              </h2>

              {/* Dimensions legend row */}
              <div className="v2-reveal v2-d3 mt-10 overflow-x-auto">
                <table className="w-full min-w-[720px] border-separate border-spacing-0">
                  <thead>
                    <tr>
                      <th className="py-3 px-5 text-left font-lato text-[11px] font-bold uppercase tracking-widest text-white/40 bg-white/4 rounded-tl-xl border-b border-white/10">
                        Tipo de proveedor
                      </th>
                      {compDimensions.map((d, di) => (
                        <th
                          key={d.key}
                          className={`py-3 px-3 text-center font-lato text-[10px] font-bold uppercase tracking-wider text-white/40 bg-white/4 border-b border-white/10 leading-tight max-w-[90px] ${di === compDimensions.length - 1 ? "rounded-tr-xl" : ""}`}
                        >
                          {d.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {providerTypes.map((p, pi) => (
                      <tr
                        key={p.type}
                        className={`transition-colors ${
                          p.highlight
                            ? "bg-[#00bfa5]/10 border-[#00bfa5]/30"
                            : pi % 2 === 0 ? "bg-white/4" : "bg-white/2"
                        }`}
                      >
                        <td className={`py-4 px-5 border-b ${p.highlight ? "border-[#00bfa5]/20" : "border-white/6"}`}>
                          <span className={`font-poppins font-bold text-[14px] ${p.highlight ? "text-[#00bfa5]" : "text-white/85"}`}>
                            {p.type}
                          </span>
                          {p.highlight && (
                            <span className="ml-2 font-lato text-[9px] font-bold uppercase tracking-widest text-[#0a2342] bg-[#00bfa5] rounded-full px-2 py-0.5">
                              nosotros
                            </span>
                          )}
                          <p className={`font-lato text-[12px] mt-0.5 leading-[1.45] ${p.highlight ? "text-[#00bfa5]/80" : "text-white/40"}`}>
                            {p.highlight ? p.tagline : p.failure}
                          </p>
                        </td>
                        {compDimensions.map((d) => (
                          <td key={d.key} className={`py-4 px-3 text-center border-b ${p.highlight ? "border-[#00bfa5]/20" : "border-white/6"}`}>
                            <Cell val={p[d.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Provider cards (mobile) — shown below sm */}
              <div className="v2-reveal v2-d3 mt-6 flex flex-col gap-4 md:hidden">
                {providerTypes.filter(p => !p.highlight).map((p) => (
                  <div key={p.type} className="bg-white/6 border border-white/12 rounded-2xl p-5">
                    <p className="font-poppins font-bold text-[14px] text-white/85">{p.type}</p>
                    <p className="font-lato text-[12px] text-white/45 mt-1 leading-[1.55]">{p.failure}</p>
                  </div>
                ))}
              </div>

              {/* Punchline */}
              <div className="v2-reveal v2-d4 mt-7 border border-[#00bfa5]/25 bg-[#00bfa5]/6 rounded-2xl px-6 py-5">
                <p className="font-poppins font-bold text-[16px] text-white">
                  Sixteam es el único que consulta + implementa + opera de forma continua, AI-native, y cubre todo RevOps, sin escalar headcount linealmente.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 4 — The Solution
      ══════════════════════════════════════════════ */}
      <section id="s4" className="min-h-screen flex flex-col justify-center py-24 bg-[#fdfcf8]">
        <div ref={s4Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={4} />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#009b86] v2-fade v2-d1">
                La solución
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-[#0a2342] mt-4"
                style={{ fontSize: "clamp(26px, 4.5vw, 46px)", lineHeight: "1.1", maxWidth: "780px" }}
              >
                Sixteam cierra la cadena: consultoría → implementación → operación.{" "}
                <span className="text-[#1d70a2]">En todo RevOps. Con humanos + agentes IA.</span>
              </h2>

              {/* 3-column chain */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 relative">
                <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 items-center justify-between px-[33%] pointer-events-none z-10">
                  <ChevronRight className="w-7 h-7 text-[#00bfa5]/50" />
                  <ChevronRight className="w-7 h-7 text-[#00bfa5]/50" />
                </div>

                {[
                  {
                    num: "01",
                    label: "CONSULTORÍA",
                    headline: "Mapeamos la verdad real",
                    desc: "Auditoría agéntica del flujo comercial. Cuantificamos cada fuga de revenue. Salida: roadmap priorizado con impacto estimado.",
                    color: "border-[#1d70a2]/30",
                    accent: "#1d70a2",
                  },
                  {
                    num: "02",
                    label: "IMPLEMENTACIÓN",
                    headline: "Construimos el sistema",
                    desc: "CRM, automatizaciones, desarrollo, pauta, integraciones, agentes IA: ya lo hacemos hoy. Todo bajo un techo.",
                    color: "border-[#0a5c78]/30",
                    accent: "#0a5c78",
                  },
                  {
                    num: "03",
                    label: "OPERACIÓN",
                    headline: "Lo corremos mes a mes",
                    desc: "Tu equipo externo permanente. Dashboard en vivo, cadencia semanal, WhatsApp diario, reajuste continuo. No un entregable, sino una operación.",
                    color: "border-[#00bfa5]/40",
                    accent: "#00bfa5",
                  },
                ].map((col, i) => (
                  <div
                    key={col.num}
                    className={`v2-reveal v2-d${i + 2} bg-white rounded-2xl p-6 border-2 ${col.color} shadow-[0_8px_32px_rgba(10,35,66,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,35,66,0.10)] transition-[transform,box-shadow] duration-300`}
                  >
                    <span
                      className="font-poppins font-black text-[36px] leading-none"
                      style={{ color: `${col.accent}25` }}
                    >
                      {col.num}
                    </span>
                    <p
                      className="font-lato text-[10px] font-bold uppercase tracking-[0.2em] mt-2"
                      style={{ color: col.accent }}
                    >
                      {col.label}
                    </p>
                    <h3 className="font-poppins font-bold text-[18px] text-[#0a2342] mt-2 leading-[1.25]">
                      {col.headline}
                    </h3>
                    <p className="font-lato text-[14px] text-[#334155] leading-[1.65] mt-3">{col.desc}</p>
                  </div>
                ))}
              </div>

              {/* Key differentiation */}
              <div className="v2-reveal v2-d5 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0a2342] rounded-xl px-6 py-5">
                  <p className="font-lato text-[12px] font-bold uppercase tracking-widest text-[#00bfa5] mb-2">No es adopción de IA</p>
                  <p className="font-poppins font-bold text-[16px] text-white/80">"Compra herramientas"</p>
                </div>
                <div className="bg-[#00bfa5]/8 border border-[#00bfa5]/25 rounded-xl px-6 py-5">
                  <p className="font-lato text-[12px] font-bold uppercase tracking-widest text-[#009b86] mb-2">Es transformación operada</p>
                  <p className="font-poppins font-bold text-[16px] text-[#0a2342]">"Rediseñamos y corremos la máquina"</p>
                </div>
              </div>

              <p className="v2-reveal v2-d6 font-lato text-[15px] text-[#334155]/70 italic mt-5">
                El alcance es todo el revenue: marketing + ventas + servicio al cliente.
              </p>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 5 — Why Now
      ══════════════════════════════════════════════ */}
      <section
        id="s5"
        className="min-h-screen flex flex-col justify-center py-24"
        style={{ background: "linear-gradient(155deg, #0a2342 0%, #051a33 100%)" }}
      >
        <div ref={s5Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={5} light />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
                Timing
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
                style={{ fontSize: "clamp(26px, 4.5vw, 46px)", lineHeight: "1.12", maxWidth: "680px" }}
              >
                ¿Por qué{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#00bfa5]">ahora?</em>
                </Underlined>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                {[
                  {
                    icon: Zap,
                    label: "Service-as-Software",
                    desc: "El mundo pasa de SaaS (pagas licencia) a servicio como software (pagas por outcome ejecutado por IA + humano). Sixteam ya opera en ese modelo.",
                    color: "#00bfa5",
                  },
                  {
                    icon: Target,
                    label: "IA agéntica ya opera flujos reales",
                    desc: "Los agentes ya califican, responden, agendan, hacen follow-up y mueven pipeline, no solo asisten. La tecnología está lista.",
                    color: "#1d70a2",
                  },
                  {
                    icon: TrendingUp,
                    label: "OPEX de un agente tiende a cero",
                    desc: "El costo de cómputo cae mientras el SaaS sube linealmente. El modelo de negocio mejora con el tiempo, no empeora.",
                    color: "#00bfa5",
                  },
                  {
                    icon: Globe,
                    label: "Colombia: hub nearshore AI-native para EEUU",
                    desc: "Colombia ya es hub nearshore de BPO para EEUU: huso horario alineado, talento bilingüe, costo-ventaja. Sixteam nace AI-native ahí, y puede operar para empresas gringas con una ventaja que ni las agencias de EEUU ni los BPO legacy igualan.",
                    color: "#1d70a2",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`v2-reveal v2-d${i + 2} border border-white/10 rounded-2xl p-6 bg-white/4 hover:bg-white/7 hover:border-white/20 transition-[background,border] duration-300`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: item.color }} />
                      </div>
                      <h3 className="font-poppins font-bold text-[16px] text-white">{item.label}</h3>
                      <p className="font-lato text-[14px] text-white/55 mt-2.5 leading-[1.65]">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 5b — OpenAI DeployCo Validation
      ══════════════════════════════════════════════ */}
      <section id="s5b" className="min-h-screen flex flex-col justify-center py-24 bg-[#fdfcf8]">
        <div ref={s5bRef}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={6} />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#009b86] v2-fade v2-d1">
                Validación de categoría
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-[#0a2342] mt-4"
                style={{ fontSize: "clamp(26px, 4.5vw, 46px)", lineHeight: "1.1", maxWidth: "820px" }}
              >
                El laboratorio de IA más grande del mundo acaba de invertir{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#009b86]">$4B para construir exactamente este modelo.</em>
                </Underlined>
              </h2>

              {/* Press clipping card */}
              <div className="v2-reveal v2-d3 mt-10 bg-white border border-[#0a2342]/12 rounded-3xl p-7 md:p-10 shadow-[0_8px_32px_rgba(10,35,66,0.08)]">
                {/* Source label */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-xl bg-[#0a2342] flex items-center justify-center">
                    <Newspaper className="w-4.5 h-4.5 text-[#00bfa5]" />
                  </div>
                  <div>
                    <span className="font-lato text-[11px] font-bold uppercase tracking-widest text-[#0a2342]/40">Fuente</span>
                    <p className="font-poppins font-bold text-[13px] text-[#0a2342]">
                      OpenAI ·{" "}
                      <a
                        href="https://openai.com/index/openai-launches-the-deployment-company/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1d70a2] hover:text-[#00bfa5] transition-colors duration-200 underline underline-offset-2"
                      >
                        11 de mayo de 2026
                      </a>
                    </p>
                  </div>
                </div>

                <p
                  className="font-poppins font-black text-[#0a2342]"
                  style={{ fontSize: "clamp(18px, 2.5vw, 24px)", lineHeight: "1.25" }}
                >
                  OpenAI lanza el <span className="text-[#1d70a2]">OpenAI Deployment Company</span>, para meter IA en la operación de las empresas. Consultar, implementar y operar. La misma cadena.
                </p>

                {/* Stat chips */}
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { value: "$4B", label: "inversión", icon: DollarSign, color: "#1d70a2" },
                    { value: "$10B", label: "valuación DeployCo", icon: TrendingUp, color: "#00bfa5" },
                    { value: "~$375B", label: "tamaño mercado objetivo", icon: Globe, color: "#1d70a2" },
                    { value: "150", label: "ingenieros Tomoro", icon: Users, color: "#00bfa5" },
                  ].map((chip) => {
                    const ChipIcon = chip.icon;
                    return (
                      <div
                        key={chip.value}
                        className="rounded-2xl border border-[#0a2342]/10 bg-[#f4f3ee] px-5 py-4 flex flex-col gap-2"
                      >
                        <ChipIcon className="w-4 h-4" style={{ color: chip.color }} />
                        <span className="font-poppins font-black text-[24px] text-[#0a2342] leading-none">{chip.value}</span>
                        <span className="font-lato text-[11px] text-[#334155]/60 leading-tight">{chip.label}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Partners */}
                <p className="font-lato text-[13px] text-[#334155]/50 mt-5 leading-[1.6]">
                  Socios: Bain &amp; Company, McKinsey, Capgemini. Adquirió Tomoro (~150 forward-deployed engineers).
                </p>
              </div>

              {/* The angle */}
              <div className="v2-reveal v2-d4 mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-[#0a2342] rounded-2xl p-6 border border-white/8">
                  <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#00bfa5] mb-3">Qué valida</p>
                  <p className="font-lato text-[15px] text-white/75 leading-[1.7]">
                    DeployCo + McKinsey van por el{" "}
                    <span className="text-white font-semibold">Fortune 500</span>. Las 200K+ empresas de servicio de LatAm y US-nearshore quedan completamente desatendidas.{" "}
                    <span className="text-[#00bfa5] font-semibold">Ese es nuestro mercado.</span>
                  </p>
                </div>
                <div className="bg-[#00bfa5]/8 border border-[#00bfa5]/25 rounded-2xl p-6">
                  <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#009b86] mb-3">Nuestra ventaja</p>
                  <p className="font-lato text-[15px] text-[#0a2342] leading-[1.7]">
                    La misma tesis que OpenAI acaba de respaldar con $4B, pero nosotros{" "}
                    <span className="font-semibold">la vivimos puertas adentro</span>, no solo se la vendemos al cliente. AI-native desde el primer día.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 6 — How It Works (Product)
      ══════════════════════════════════════════════ */}
      <section
        id="s6"
        className="min-h-screen flex flex-col justify-center py-24"
        style={{ background: "linear-gradient(155deg, #0a2342 0%, #0c2748 100%)" }}
      >
        {/* Aurora orb */}
        <div
          className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #00bfa5 0%, transparent 65%)", animation: "v2-aurora-1 20s ease-in-out infinite" }}
          aria-hidden
        />

        <div ref={s6Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={7} light />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
                El producto
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
                style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.12", maxWidth: "740px" }}
              >
                El producto: un equipo de 6 agentes IA + humanos senior,{" "}
                <span className="text-[#00bfa5]">operando 24/7.</span>
              </h2>

              <p className="v2-reveal v2-d2 font-lato text-[14px] text-white/50 mt-3 max-w-[580px] leading-[1.6]">
                Cada agente vive en una capa de la cadena (Consultar → Implementar → Operar) y trabaja junto a especialistas humanos.
              </p>

              {/* 6-agent roster grid */}
              <div className="v2-reveal v2-d3 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    name: "Alex",
                    role: "Estratega & Concierge IA",
                    layer: "Consultar",
                    layerColor: "#1d70a2",
                    desc: "Coordina al equipo, traduce el objetivo de negocio en acciones concretas y es el punto de contacto principal del cliente.",
                  },
                  {
                    name: "Sam",
                    role: "Diagnóstico IA",
                    layer: "Consultar",
                    layerColor: "#1d70a2",
                    desc: "Mapea el flujo comercial real, detecta fugas de revenue y entrega el roadmap priorizado con impacto estimado.",
                  },
                  {
                    name: "Debbie",
                    role: "Constructora de Sistemas IA",
                    layer: "Implementar",
                    layerColor: "#0a5c78",
                    desc: "Construye CRM, workflows y automatizaciones. Convierte el roadmap en sistemas que corren solos.",
                  },
                  {
                    name: "Vinnie",
                    role: "Integraciones IA",
                    layer: "Implementar",
                    layerColor: "#0a5c78",
                    desc: "Conecta herramientas, APIs y plataformas. Asegura que toda la pila tecnológica hable entre sí sin fricciones.",
                  },
                  {
                    name: "Sally",
                    role: "Operadora de Revenue IA",
                    layer: "Operar",
                    layerColor: "#00bfa5",
                    desc: "Opera el pipeline mes a mes: califica leads, hace follow-up, mueve oportunidades y reporta en tiempo real.",
                  },
                  {
                    name: "Clara",
                    role: "Analista de Operación IA",
                    layer: "Operar",
                    layerColor: "#00bfa5",
                    desc: "Genera el dashboard de revenue, detecta tendencias y recomienda ajustes continuos a la operación.",
                  },
                ].map((agent, i) => (
                  <div
                    key={agent.name}
                    className={`v2-reveal v2-d${Math.min(i + 2, 6)} bg-white/6 border border-white/10 rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 transition-[transform,background,border] duration-300`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: agent.layerColor }} />
                        <span className="font-poppins font-black text-[18px] text-white">{agent.name}</span>
                      </div>
                      <span
                        className="font-lato text-[9px] font-bold uppercase tracking-widest rounded-full px-2.5 py-1"
                        style={{ color: agent.layerColor, background: `${agent.layerColor}20`, border: `1px solid ${agent.layerColor}35` }}
                      >
                        {agent.layer}
                      </span>
                    </div>
                    <p className="font-lato text-[11px] font-semibold text-[#00bfa5]/70 uppercase tracking-wide mb-2">{agent.role}</p>
                    <p className="font-lato text-[13px] text-white/55 leading-[1.6]">{agent.desc}</p>
                  </div>
                ))}
              </div>

              {/* Client note */}
              <div className="v2-reveal v2-d6 mt-6 border border-[#00bfa5]/25 bg-[#00bfa5]/8 rounded-2xl px-6 py-4">
                <p className="font-poppins font-bold text-[14px] text-white/85">
                  El cliente no necesita ser técnico.{" "}
                  <span className="text-[#00bfa5]">Habla con el equipo en Slack/WhatsApp;</span>{" "}
                  los agentes + humanos ejecutan.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 7 — Business Model
      ══════════════════════════════════════════════ */}
      <section id="s7" className="min-h-screen flex flex-col justify-center py-24 bg-[#fdfcf8]">
        <div ref={s7Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={8} />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#009b86] v2-fade v2-d1">
                Modelo de negocio
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-[#0a2342] mt-4"
                style={{ fontSize: "clamp(24px, 4vw, 40px)", lineHeight: "1.12", maxWidth: "680px" }}
              >
                Suscripción de operación recurrente.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#009b86]">Márgenes 50–70% crecientes.</em>
                </Underlined>
              </h2>
              <p className="v2-reveal v2-d3 font-lato text-[16px] text-[#334155]/60 mt-2 max-w-[600px] leading-[1.6]">
                La IA absorbe el trabajo repetitivo, por lo que la estructura de costo no crece linealmente con los clientes. Por eso el margen sube con la escala.
              </p>

              {/* AI scaling argument */}
              <div className="v2-reveal v2-d3 mt-7 bg-[#0a2342] rounded-2xl p-6 flex flex-col md:flex-row gap-5 items-start md:items-center border border-[#1d70a2]/30">
                <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-[#00bfa5]/15 border border-[#00bfa5]/30 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-[#00bfa5]" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[15px] text-white">AI-native = escala sin headcount lineal</p>
                  <p className="font-lato text-[13px] text-white/55 mt-1 leading-[1.6]">
                    Cada cliente nuevo no requiere contratar una persona nueva. La IA carga el trabajo repetitivo. Eso ataca las dos debilidades estructurales del sector: el costo de escalar y el costo de empleados.
                  </p>
                </div>
              </div>

              {/* Entry product */}
              <div className="v2-reveal v2-d3 mt-5 border border-[#1d70a2]/30 bg-[#1d70a2]/6 rounded-xl px-6 py-4 inline-flex flex-wrap gap-4 items-center">
                <div>
                  <span className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#1d70a2]">Producto entrada</span>
                  <p className="font-poppins font-bold text-[18px] text-[#0a2342] mt-0.5">Radar / Diagnóstico: $2,500 one-time</p>
                </div>
                <span className="font-lato text-[13px] text-[#334155]/50">~50% convierte a suscripción</span>
              </div>

              {/* Plans */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
                {plans.map((plan, i) => (
                  <div
                    key={plan.name}
                    className={`v2-reveal v2-d${i + 3} relative rounded-2xl p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 ${
                      plan.best
                        ? "bg-[#0a2342] border-2 border-[#00bfa5]/50 shadow-[0_8px_32px_rgba(10,35,66,0.18)]"
                        : "bg-white border border-[#0a2342]/10 shadow-[0_4px_20px_rgba(10,35,66,0.06)]"
                    }`}
                  >
                    {plan.best && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-lato text-[10px] font-bold uppercase tracking-widest text-[#0a2342] bg-[#00bfa5] rounded-full px-3 py-1">
                        Mejor valor
                      </span>
                    )}
                    <p className={`font-lato text-[10px] font-bold uppercase tracking-widest mb-2 ${plan.best ? "text-[#00bfa5]" : "text-[#1d70a2]"}`}>{plan.target}</p>
                    <h3 className={`font-poppins font-black text-[18px] ${plan.best ? "text-white" : "text-[#0a2342]"}`}>{plan.name}</h3>
                    <div className="flex items-end gap-1 mt-3 mb-5">
                      <span className={`font-poppins font-black text-[36px] leading-none ${plan.best ? "text-white" : "text-[#0a2342]"}`}>{plan.price}</span>
                      <span className={`font-lato text-[14px] mb-1 ${plan.best ? "text-white/40" : "text-[#334155]/50"}`}>{plan.period}</span>
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-[#00bfa5]/15 border border-[#00bfa5]/30 flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-[#00bfa5]" strokeWidth={2.5} />
                          </span>
                          <span className={`font-lato text-[13px] ${plan.best ? "text-white/65" : "text-[#334155]/70"}`}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Guarantees */}
              <div className="v2-reveal v2-d6 mt-6 flex flex-wrap gap-3">
                {["Garantía 30 días money-back", "Sin permanencia larga", "Mes a mes", "Margen 50–70% creciente"].map((g) => (
                  <span key={g} className="font-lato text-[12px] font-semibold text-[#334155]/55 border border-[#0a2342]/15 rounded-full px-3 py-1.5">
                    {g}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 8 — Why Us / Defensibility
      ══════════════════════════════════════════════ */}
      <section
        id="s8"
        className="min-h-screen flex flex-col justify-center py-24"
        style={{ background: "linear-gradient(155deg, #0a2342 0%, #0c3050 100%)" }}
      >
        {/* Aurora orb */}
        <div
          className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #00bfa5 0%, transparent 65%)", animation: "v2-aurora-2 22s ease-in-out infinite" }}
          aria-hidden
        />

        <div ref={s8Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={9} light />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
                Defensibilidad
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
                style={{ fontSize: "clamp(26px, 4.5vw, 46px)", lineHeight: "1.1", maxWidth: "680px" }}
              >
                ¿Por qué{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#00bfa5]">nosotros?</em>
                </Underlined>
              </h2>

              {/* AI-native dominant block */}
              <div className="v2-reveal v2-d3 mt-10 bg-[#00bfa5]/8 border border-[#00bfa5]/25 rounded-3xl p-7 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#00bfa5]/20 border border-[#00bfa5]/30 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-[#00bfa5]" />
                  </div>
                  <div>
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#00bfa5] mb-2">Argumento central · Nueva era del trabajo con IA</p>
                    <h3 className="font-poppins font-bold text-[20px] text-white leading-[1.25]">
                      Sixteam no solo implementa IA para sus clientes, sino que ES una empresa AI-native.
                    </h3>
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-[#00bfa5]/70 mb-1.5">Escala sin headcount lineal</p>
                        <p className="font-lato text-[14px] text-white/65 leading-[1.7]">
                          Las agencias, consultoras y BPO escalan contratando una persona por cada cliente nuevo. Nosotros escalamos con IA: el mismo equipo opera más cuentas sin sumar nómina.
                        </p>
                      </div>
                      <div>
                        <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-[#00bfa5]/70 mb-1.5">Ataca el costo #1: la nómina</p>
                        <p className="font-lato text-[14px] text-white/65 leading-[1.7]">
                          El costo de empleados es el más alto de este rubro. La IA absorbe el trabajo repetitivo y baja nuestra estructura de costo: márgenes 50–70% que crecen con el tiempo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                {[
                  {
                    n: "01",
                    title: "Hacemos la cadena completa",
                    desc: "Consultar + implementar + operar bajo un techo, en todo RevOps. Ningún otro lo hace.",
                    strong: true,
                  },
                  {
                    n: "02",
                    title: "Operamos, no entregamos",
                    desc: "El foso es operacional: reemplazarnos = reconstruir tu operación de revenue. Stickiness real, no contractual.",
                    strong: true,
                  },
                  {
                    n: "03",
                    title: "Ya tenemos la capa de implementación",
                    desc: "CRM, automatización, dev, pauta ya es nuestro negocio probado. No partimos de cero.",
                    strong: false,
                  },
                  {
                    n: "04",
                    title: "Ventaja nearshore Colombia → EEUU",
                    desc: "Huso horario alineado, talento bilingüe, costo-ventaja estructural. Podemos operar para empresas gringas que ningún BPO legacy puede servir AI-native.",
                    strong: false,
                  },
                  {
                    n: "05",
                    title: "Vertical-first LatAm",
                    desc: "Playbooks profundos en viajes, salud, inmobiliario. Benchmarks reales, no supuestos de mercados del norte.",
                    strong: false,
                  },
                ].map((item, i) => (
                  <div
                    key={item.n}
                    className={`v2-reveal v2-d${Math.min(i + 2, 6)} flex gap-5 items-start rounded-2xl p-5 transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 ${
                      item.strong
                        ? "bg-white/8 border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
                        : "bg-white/4 border border-white/10"
                    }`}
                  >
                    <span className={`font-poppins font-black text-[28px] leading-none flex-shrink-0 ${item.strong ? "text-[#00bfa5]/40" : "text-white/15"}`}>
                      {item.n}
                    </span>
                    <div>
                      <h3 className={`font-poppins font-bold text-[16px] ${item.strong ? "text-white" : "text-white/85"}`}>
                        {item.title}
                      </h3>
                      <p className={`font-lato text-[14px] leading-[1.65] mt-1.5 ${item.strong ? "text-white/65" : "text-white/50"}`}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="v2-reveal v2-d6 mt-7 border border-white/12 rounded-xl px-6 py-4 bg-white/4">
                <p className="font-poppins font-bold text-[15px] text-white/80">
                  Lo que <span className="text-[#00bfa5]">NO somos</span>: ni consultora que entrega PDF, ni agencia de marketing, ni SaaS.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 9 — Market
      ══════════════════════════════════════════════ */}
      <section id="s9" className="min-h-screen flex flex-col justify-center py-24 bg-[#f4f3ee]">
        <div ref={s9Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={10} />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#009b86] v2-fade v2-d1">
                Mercado
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-[#0a2342] mt-4"
                style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.12", maxWidth: "720px" }}
              >
                Dos mercados, una operación:{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#009b86]">LatAm + EEUU-nearshore.</em>
                </Underlined>
              </h2>
              <p className="v2-reveal v2-d2 font-lato text-[15px] text-[#334155]/60 mt-3 max-w-[620px] leading-[1.65]">
                Colombia como hub AI-native de operación nearshore abre un segundo vector de mercado que multiplica el TAM.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                {[
                  {
                    label: "TAM",
                    title: "LatAm + US-nearshore",
                    desc: "Empresas de servicio en LatAm ($300K–$10M ARR) + el mercado de ops/nearshore outsourcing de SMBs de EEUU que Colombia ya captura.",
                    stat: "~$12B+ USD",
                    statSub: "estimación bottom-up, a validar",
                    color: "#1d70a2",
                    bg: "bg-white border border-[#0a2342]/10 shadow-[0_8px_32px_rgba(10,35,66,0.06)]",
                  },
                  {
                    label: "SAM",
                    title: "Alcanzable en 3 verticales",
                    desc: "Colombia + México + región andina (3 verticales) + cuentas US-nearshore alcanzables vía Colombia.",
                    stat: "~$1.2B USD",
                    statSub: "estimación bottom-up, a validar",
                    color: "#0a5c78",
                    bg: "bg-white border border-[#0a2342]/10 shadow-[0_8px_32px_rgba(10,35,66,0.06)]",
                  },
                  {
                    label: "SOM (3 años)",
                    title: "Target alcanzable",
                    desc: "80–120 clientes en operación recurrente a $3K/mes promedio.",
                    stat: "$1.8–2.5M ARR",
                    statSub: "80–120 clientes · 36 meses",
                    color: "#00bfa5",
                    bg: "bg-[#0a2342] border border-[#1d70a2]/30 shadow-[0_8px_32px_rgba(10,35,66,0.18)]",
                  },
                ].map((m, i) => (
                  <div
                    key={m.label}
                    className={`v2-reveal v2-d${i + 2} ${m.bg} rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(10,35,66,0.12)] transition-[transform,box-shadow] duration-300`}
                  >
                    <span
                      className="font-lato text-[10px] font-bold uppercase tracking-widest mb-2 block"
                      style={{ color: m.color }}
                    >
                      {m.label}
                    </span>
                    <h3 className={`font-poppins font-bold text-[18px] ${m.label === "SOM (3 años)" ? "text-white" : "text-[#0a2342]"}`}>{m.title}</h3>
                    <p className={`font-lato text-[13px] mt-2.5 leading-[1.65] ${m.label === "SOM (3 años)" ? "text-white/55" : "text-[#334155]/60"}`}>{m.desc}</p>
                    <div className="mt-5 pt-4 border-t border-[#0a2342]/10">
                      <span className="font-poppins font-black text-[28px] leading-none" style={{ color: m.color }}>
                        {m.stat}
                      </span>
                      <p className={`font-lato text-[11px] mt-0.5 italic ${m.label === "SOM (3 años)" ? "text-white/35" : "text-[#334155]/40"}`}>{m.statSub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 10 — Traction
      ══════════════════════════════════════════════ */}
      <section
        id="s10"
        className="min-h-screen flex flex-col justify-center py-24"
        style={{ background: "linear-gradient(155deg, #0a2342 0%, #091f3a 100%)" }}
      >
        {/* Aurora orb */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, #1d70a2 0%, transparent 65%)", animation: "v2-aurora-1 18s ease-in-out infinite" }}
          aria-hidden
        />

        <div ref={s10Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={11} light />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
                Tracción
              </span>

              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
                style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.12", maxWidth: "680px" }}
              >
                Casos ancla en operación:{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#00bfa5]">la cadena funciona.</em>
                </Underlined>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
                {/* Key stats */}
                <div className="v2-reveal v2-d2 flex flex-col gap-4">
                  {[
                    {
                      stat: "Clientes en operación",
                      label: "en 3 verticales: viajes, inmobiliario, servicios",
                    },
                    {
                      stat: "4–8h → <5 min",
                      label: "Respuesta a leads (MasterViajes · Student Travel Center)",
                    },
                    {
                      stat: "+$300–600K ARR",
                      label: "Patrón replicable: revenue nuevo sin contrataciones, empresa $2M ARR",
                    },
                  ].map((s) => (
                    <div
                      key={s.label}
                      className="bg-white/6 border border-white/10 rounded-2xl px-6 py-5"
                    >
                      <span className="font-poppins font-black text-[28px] text-white leading-tight block">{s.stat}</span>
                      <p className="font-lato text-[13px] text-white/50 mt-1 leading-[1.55]">{s.label}</p>
                    </div>
                  ))}
                </div>

                {/* Anchor case + testimonial */}
                <div className="v2-reveal v2-d3 flex flex-col gap-4">
                  <div className="bg-white/8 border border-white/12 rounded-2xl p-6 flex-1">
                    <span className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#00bfa5]">Casos ancla en operación</span>
                    <h3 className="font-poppins font-bold text-[16px] text-white mt-2">
                      MasterViajes · Student Travel Center
                    </h3>
                    <p className="font-lato text-[13px] text-white/55 mt-2 leading-[1.65]">
                      Respuesta a leads: de 4–8h → menos de 5 minutos. Resultado replicable en toda empresa de servicio con volumen de leads.
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="font-lato text-[11px] text-white/30 uppercase tracking-widest mb-1">Resultado típico replicable</p>
                      <p className="font-lato text-[13px] text-white/65">
                        Patrón observado en empresa $2M ARR: +$300–600K ARR nuevo, sin contrataciones adicionales.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#00bfa5]/8 border border-[#00bfa5]/20 rounded-2xl p-6">
                    <blockquote className="font-lato text-[15px] text-white italic leading-[1.6]">
                      "No necesitábamos un VP de Ventas ni otra agencia. Necesitábamos que alguien diseñara, montara y operara el sistema completo."
                    </blockquote>
                    <p className="font-lato text-[12px] text-white/35 mt-3 font-semibold">
                      — Cliente de Sixteam · agencia de viajes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 11 — Vision
      ══════════════════════════════════════════════ */}
      <section id="s11" className="min-h-screen flex flex-col justify-center py-24 bg-[#fdfcf8]">
        <div ref={s11Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={12} />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#009b86] v2-fade v2-d1">
                Visión
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-[#0a2342] mt-4"
                style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.12", maxWidth: "680px" }}
              >
                La escalera hacia el líder regional de{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#009b86]">RevOps operado.</em>
                </Underlined>
              </h2>

              <div className="mt-12 relative">
                <div className="absolute left-[52px] top-4 bottom-4 w-px bg-gradient-to-b from-[#1d70a2]/50 via-[#00bfa5]/40 to-[#00bfa5]/10 hidden md:block" />

                <div className="flex flex-col gap-6">
                  {ladder.map((step, i) => (
                    <div
                      key={step.year}
                      className={`v2-reveal v2-d${Math.min(i + 2, 6)} flex gap-5 items-start`}
                    >
                      <div className="flex-shrink-0 w-[104px] flex flex-col items-center gap-2">
                        <span
                          className="font-poppins font-black text-[14px] z-10 relative"
                          style={{
                            color: i >= 3 ? "#00bfa5" : `rgba(0,191,165,${0.5 + i * 0.12})`,
                          }}
                        >
                          {step.year}
                        </span>
                        <div
                          className="w-3 h-3 rounded-full border-2 z-10 relative hidden md:block"
                          style={{
                            borderColor: i >= 3 ? "#00bfa5" : `rgba(0,191,165,${0.4 + i * 0.15})`,
                            background: i >= 3 ? "rgba(0,191,165,0.2)" : "transparent",
                          }}
                        />
                      </div>
                      <div
                        className={`flex-1 border rounded-2xl px-5 py-4 ${
                          i >= 3
                            ? "border-[#00bfa5]/25 bg-[#00bfa5]/5 shadow-[0_4px_20px_rgba(0,191,165,0.06)]"
                            : "border-[#0a2342]/10 bg-white shadow-[0_4px_20px_rgba(10,35,66,0.04)]"
                        }`}
                      >
                        <p className={`font-lato text-[14px] leading-[1.6] ${i >= 3 ? "text-[#0a2342]" : "text-[#334155]/70"}`}>{step.milestone}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 12 — Team
      ══════════════════════════════════════════════ */}
      <section
        id="s12"
        className="min-h-screen flex flex-col justify-center py-24"
        style={{ background: "linear-gradient(155deg, #0a2342 0%, #0c2748 100%)" }}
      >
        {/* Aurora orb */}
        <div
          className="pointer-events-none absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-8 -translate-y-1/2"
          style={{ background: "radial-gradient(circle, #1d70a2 0%, transparent 65%)", animation: "v2-aurora-1 24s ease-in-out infinite" }}
          aria-hidden
        />

        <div ref={s12Ref}>
          <Container>
            <div className="relative">
              <div className="absolute top-0 right-0">
                <SlideNum n={13} light />
              </div>

              <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
                Equipo fundador
              </span>
              <h2
                className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
                style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.12" }}
              >
                Los que{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-[#00bfa5]">operan la cadena.</em>
                </Underlined>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                {[
                  {
                    initials: "SB",
                    name: "Samuel Burgos",
                    role: "Revenue Strategist · Co-founder",
                    color: "bg-[#1d70a2]",
                    desc: "8+ años operando revenue real en empresas de servicio, no es consultor de CRM. Lidera consultoría y estrategia. Operó el pipeline comercial de clientes como MasterViajes y Student Travel Center.",
                    tags: ["RevOps", "Estrategia de revenue", "Consultoría"],
                  },
                  {
                    initials: "EH",
                    name: "Ernesto Hernández",
                    role: "Process & Systems Engineer · Co-founder",
                    color: "bg-[#00bfa5]",
                    desc: "Ingeniero de procesos y sistemas. Diseña operaciones que corren sin supervisión constante. Lidera implementación: CRM, automatización, dev, integraciones, agentes IA.",
                    tags: ["CRM", "Automatizaciones", "Agentes IA", "Integraciones"],
                  },
                ].map((member, i) => (
                  <div
                    key={member.name}
                    className={`v2-reveal v2-d${i + 2} bg-white/6 border border-white/12 rounded-2xl p-7 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:-translate-y-1 hover:border-white/20 transition-[transform,border] duration-300`}
                  >
                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-full ${member.color} flex items-center justify-center`}>
                        <span className="font-poppins font-black text-[18px] text-white">{member.initials}</span>
                      </div>
                      <div>
                        <h3 className="font-poppins font-bold text-[18px] text-white">{member.name}</h3>
                        <p className="font-lato text-[13px] text-white/50 mt-0.5">{member.role}</p>
                      </div>
                    </div>
                    <p className="font-lato text-[15px] text-white/70 leading-[1.65]">{member.desc}</p>
                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-2">
                      {member.tags.map((t) => (
                        <span key={t} className="font-lato text-[11px] font-semibold text-white/45 bg-white/6 border border-white/12 rounded-full px-3 py-1">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Client strip */}
              <div className="v2-reveal v2-d4 mt-6 bg-white/4 border border-white/10 rounded-2xl px-6 py-5">
                <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#00bfa5] mb-4">Clientes que ya operamos</p>
                <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                  {["MasterViajes", "Student Travel Center", "Genosur", "Magnética", "SIAR", "Stunet"].map((client) => (
                    <span key={client} className="font-poppins font-bold text-[14px] text-white/50">
                      {client}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hybrid team note */}
              <div className="v2-reveal v2-d5 mt-5 border border-[#00bfa5]/25 bg-[#00bfa5]/8 rounded-2xl p-6 flex flex-col md:flex-row gap-5 items-start md:items-center">
                <div className="flex-1">
                  <span className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#00bfa5]">Equipo híbrido</span>
                  <p className="font-poppins font-bold text-[15px] text-white mt-1.5">
                    Especialistas humanos + 6 agentes IA en producción 24/7.
                  </p>
                </div>
                <p className="font-lato text-[13px] text-white/45 max-w-[340px] leading-[1.6]">
                  El cliente no necesita ser técnico ni contratar a nadie. Activa el equipo completo desde el día uno.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          Slide 13 — The Ask
      ══════════════════════════════════════════════ */}
      <section
        id="s13"
        className="min-h-screen flex flex-col justify-center py-24 overflow-hidden"
        style={{ background: "linear-gradient(155deg, #0a2342 0%, #0c3050 50%, #0a2342 100%)" }}
      >
        {/* Glow */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full opacity-12"
          style={{ background: "radial-gradient(ellipse, #00bfa5 0%, transparent 70%)" }}
          aria-hidden
        />

        <div ref={s13Ref}>
          <Container size="narrow" className="relative text-center">
            <div className="absolute top-0 right-0">
              <SlideNum n={14} light />
            </div>

            <span className="inline-block font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-[#00bfa5] v2-fade v2-d1">
              El pedido
            </span>
            <h2
              className="v2-reveal v2-d2 font-poppins font-black text-white mt-4"
              style={{ fontSize: "clamp(28px, 4.5vw, 50px)", lineHeight: "1.1" }}
            >
              Levantamos{" "}
              <Underlined color="teal" variant="underline">
                <span className="text-[#00bfa5]">$350K USD pre-seed</span>
              </Underlined>{" "}
              para llegar a 30 clientes y $700–900K ARR en 12 meses.
            </h2>
            <p className="v2-reveal v2-d2 font-lato text-[13px] text-white/35 mt-2 italic">
              · cifra objetivo, a confirmar con el equipo
            </p>

            {/* 3 mini-stat cards */}
            <div className="v2-reveal v2-d3 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {[
                { label: "Ronda", value: "$350K USD · SAFE" },
                { label: "Uso de fondos", value: "Producto IA + máquina de adquisición" },
                { label: "Runway", value: "18 meses" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white/6 border border-[#00bfa5]/20 rounded-2xl px-5 py-4 shadow-[0_4px_20px_rgba(0,0,0,0.10)]"
                >
                  <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-[#00bfa5] mb-1">{card.label}</p>
                  <p className="font-poppins font-bold text-[15px] text-white leading-[1.3]">{card.value}</p>
                </div>
              ))}
            </div>

            {/* Investment objectives */}
            <p className="v2-reveal v2-d3 font-lato text-[10px] font-bold uppercase tracking-widest text-white/35 mt-8 mb-3 text-left">
              En qué se invierte
            </p>
            <div className="flex flex-col gap-4 text-left">
              {[
                {
                  n: "01",
                  title: "Productizar la cadena completa",
                  desc: "Estandarizar la capa de IA para que el diagnóstico, build y operación sean repetibles a escala.",
                },
                {
                  n: "02",
                  title: "Construir la máquina de adquisición",
                  desc: "Usar el Diagnóstico ($2,500) como wedge para entrar y convertir a contratos de operación recurrente.",
                },
                {
                  n: "03",
                  title: "30 clientes en 12 meses",
                  desc: "Convertir clientes actuales de implementación en suscripciones y llegar a $700–900K ARR.",
                },
              ].map((item, i) => (
                <div
                  key={item.n}
                  className={`v2-reveal v2-d${i + 4} flex gap-5 bg-white/6 border border-white/12 rounded-2xl p-5 hover:-translate-y-0.5 hover:border-white/20 transition-[transform,border] duration-300`}
                >
                  <span className="font-poppins font-black text-[22px] text-[#00bfa5]/40 flex-shrink-0 leading-none">{item.n}</span>
                  <div>
                    <h3 className="font-poppins font-bold text-[15px] text-white">{item.title}</h3>
                    <p className="font-lato text-[13px] text-white/50 mt-1 leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing thesis */}
            <div className="v2-reveal v2-d5 mt-10 border border-[#00bfa5]/25 bg-[#00bfa5]/6 rounded-2xl p-7 text-left">
              <p className="font-lato text-[15px] text-white/75 leading-[1.75] italic">
                "Cada empresa de servicio de LatAm (y cada SMB norteamericana que opera vía nearshore desde Colombia) tiene las mismas partes: marketing, ventas, servicio. Casi ninguna sabe operarlas. El laboratorio de IA más grande del mundo acaba de invertir $4B para construir exactamente este modelo. Ellos van por el Fortune 500. Nosotros vamos por las 200K+ empresas que quedan desatendidas."
              </p>
            </div>

            {/* CTA */}
            <div className="v2-reveal v2-d6 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:samuel@sixteam.pro?subject=Investor%20Call%20Request&body=Hola%20Samuel%2C%0A%0AVi%20el%20pitch%20de%20Sixteam.pro%20y%20me%20gustar%C3%ADa%20agendar%20una%20llamada.">
                <ButtonV2 variant="primary" size="lg">
                  <Calendar className="w-4 h-4" />
                  Agendar llamada con founders
                  <ArrowRight className="w-4 h-4" />
                </ButtonV2>
              </a>
              <Link to="/">
                <ButtonV2
                  variant="outline"
                  size="lg"
                  className="!text-white/70 !border-white/20 !bg-white/5 hover:!bg-white/10 hover:!border-white/40"
                >
                  Ver sitio web
                </ButtonV2>
              </Link>
            </div>
          </Container>
        </div>
      </section>

      {/* ── Minimal pitch footer ── */}
      <footer className="bg-[#051a33] border-t border-white/8 py-6 px-6 md:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="font-poppins font-black text-[13px] text-white/50 tracking-tight">
            SIXTEAM<span className="text-[#00bfa5]">.</span>
          </span>
          <span className="font-lato text-[12px] text-white/30">
            Samuel Burgos · Ernesto Hernández · Barranquilla, Colombia · 2026 · Confidencial
          </span>
          <a
            href="mailto:samuel@sixteam.pro"
            className="font-lato text-[12px] font-semibold text-[#00bfa5]/70 hover:text-[#00bfa5] transition-colors duration-200"
          >
            samuel@sixteam.pro
          </a>
        </div>
      </footer>

    </div>
  );
};

export default PitchV2;
