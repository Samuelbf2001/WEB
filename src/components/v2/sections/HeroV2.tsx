import { Link } from "react-router-dom";
import {
  ArrowRight, Calendar, Star,
  BarChart2, Mail, Database, Bot, RefreshCw, Cpu, Users2,
  Globe, Megaphone,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";

const avatars = [
  { initials: "JR", bg: "bg-v2-accent-teal", text: "text-v2-ink-heading" },
  { initials: "MA", bg: "bg-v2-accent-blue",  text: "text-white" },
  { initials: "DC", bg: "bg-[#d4a853]",        text: "text-v2-ink-heading" },
];

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
            Tu operación<br />esta semana
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-v2-surface-teal-mist border border-v2-accent-teal/20 rounded-full px-3 py-1.5 mt-0.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v2-accent-teal opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-v2-accent-teal" />
          </span>
          <span className="font-lato text-[11px] font-semibold text-v2-accent-teal-deep">
            Todo en orden
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
                <p className="font-lato text-[11px] text-v2-ink-muted mt-0.5 truncate">
                  {status}
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
        {/* Mini avatar cluster */}
        <div className="flex items-center -space-x-2">
          <div className="w-7 h-7 rounded-full bg-v2-surface-teal-mist border-2 border-white flex items-center justify-center">
            <Cpu className="h-3.5 w-3.5 text-v2-accent-teal-deep" />
          </div>
          {["JR", "MA"].map((ini, i) => (
            <div
              key={ini}
              className={`w-7 h-7 rounded-full border-2 border-white flex items-center justify-center font-poppins font-bold text-[9px] ${i === 0 ? "bg-v2-accent-blue text-white" : "bg-[#d4a853] text-v2-ink-heading"}`}
            >
              {ini}
            </div>
          ))}
        </div>
        <p className="font-lato text-[12px] text-v2-ink-muted leading-tight">
          Operado por{" "}
          <span className="font-semibold text-v2-ink-heading">IA</span>
          {" "}+{" "}
          <span className="font-semibold text-v2-ink-heading">equipo humano</span>
        </p>
        <div className="ml-auto">
          <Users2 className="h-4 w-4 text-v2-ink-muted/40" />
        </div>
      </div>
    </div>
  </div>
);

export const HeroV2 = () => {
  return (
    <Section
      surface="default"
      className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24"
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
        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT — copy ── */}
          <div className="flex flex-col items-start text-left">

            {/* Social proof pill + avatars */}
            <div
              className="v2-hero-entry flex items-center gap-3"
              style={{ animationDelay: "0ms" }}
            >
              <div className="flex items-center -space-x-2">
                {avatars.map((a) => (
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
                  30+ clientes
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
              Somos el equipo de{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">tecnología</em>
              </Underlined>
              <br />
              que tu empresa necesita para crecer.
            </h1>

            {/* Stacked promise lines */}
            <div
              className="v2-hero-entry mt-7 flex flex-col gap-2"
              style={{ animationDelay: "220ms" }}
            >
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                Ya no tienes que hacerlo todo tú. Tampoco pagar a todo un equipo interno (+10k USD/mes) 📈
              </p>
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                AI, automatizaciones, CRM, web y reportes — todo operado por nosotros.
              </p>
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                <strong className="text-v2-ink-heading font-semibold">Implementamos Y operamos</strong> — no te dejamos solo después del go-live.
              </p>
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-heading font-semibold leading-[1.55]">
                Tú&hellip;{" "}
                <Underlined color="teal">
                  <span className="text-v2-accent-teal-deep">solo enfócate en vender y crecer.</span>
                </Underlined>
              </p>
            </div>

            {/* CTA row */}
            <div
              className="v2-hero-entry mt-9 flex flex-col sm:flex-row items-start gap-3"
              style={{ animationDelay: "340ms" }}
            >
              <Link to="/v2/radar">
                <ButtonV2 variant="primary" size="lg" className="group">
                  Solicitar Diagnóstico — $2,500
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

            <div
              className="v2-hero-entry"
              style={{ animationDelay: "400ms" }}
            >
              <p className="font-lato text-[11px] text-v2-ink-muted mt-2">2 semanas · mapa de operación + roadmap + plataforma montada</p>
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
                      El equipo de ops que siempre necesitamos pero nunca pudimos contratar.
                      <span className="font-serif italic text-v2-accent-teal text-[17px] leading-none ml-0.5">"</span>
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-v2-accent-teal text-v2-accent-teal" aria-hidden />
                        ))}
                      </div>
                      <span className="font-lato text-[11px] text-v2-ink-muted">
                        Juan Restrepo · CEO, MasterViajes
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
                  "Consultar · Implementar · Operar",
                  "Diagnóstico desde $2,500 · Ops desde $1,500/mes",
                ].map((item, i) => (
                  <span key={item} className="flex items-center gap-2 font-lato text-[11px] text-v2-ink-muted uppercase tracking-widest">
                    {i > 0 && <span className="w-1 h-1 rounded-full bg-v2-border-subtle inline-block" aria-hidden />}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT — weekly ops card ── */}
          <div
            className="v2-hero-entry hidden lg:flex items-center justify-center px-4"
            style={{ animationDelay: "200ms" }}
          >
            <WeeklyCardMockup />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroV2;
