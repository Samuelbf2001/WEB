import { Link } from "react-router-dom";
import {
  ArrowRight, Play, Star,
  BarChart2, Mail, MessageCircle, Bot, RefreshCw, Cpu, Users2,
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
type Handler = "ia" | "human" | "both";

const ops: { icon: React.ElementType; label: string; status: string; handler: Handler }[] = [
  { icon: BarChart2,    label: "Pipeline CRM",       status: "Limpio · 24 deals activos",  handler: "ia" },
  { icon: Mail,         label: "Seguimientos",        status: "0 leads sin respuesta",       handler: "ia" },
  { icon: MessageCircle,label: "WhatsApp Business",   status: "Bandeja unificada · SLA OK",  handler: "both" },
  { icon: Bot,          label: "Chatbot IA",          status: "Calificando 24/7",            handler: "ia" },
  { icon: RefreshCw,    label: "Automatizaciones",    status: "4 workflows corriendo",       handler: "ia" },
  { icon: BarChart2,    label: "Reporte ejecutivo",   status: "Enviado · Lun 9:01am",        handler: "human" },
];

const handlerLabel: Record<Handler, { label: string; dot: string; text: string }> = {
  ia:    { label: "IA",           dot: "bg-v2-accent-teal",  text: "text-v2-accent-teal-deep" },
  human: { label: "Experto",      dot: "bg-v2-accent-blue",  text: "text-v2-accent-blue" },
  both:  { label: "IA + Experto", dot: "bg-[#d4a853]",       text: "text-[#8a7a4f]" },
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
      {/* Aurora orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle at 40% 40%, rgba(0,191,165,0.13) 0%, rgba(29,112,162,0.05) 50%, transparent 70%)",
          animation: "v2-aurora-1 14s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-40 w-[500px] h-[500px] rounded-full opacity-40"
        style={{
          background: "radial-gradient(circle at 60% 60%, rgba(29,112,162,0.10) 0%, rgba(0,191,165,0.03) 50%, transparent 70%)",
          animation: "v2-aurora-2 18s ease-in-out infinite",
        }}
      />
      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage: "radial-gradient(circle, #0a2342 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <Container size="wide">
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
                  30+ equipos en LATAM
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
              Ya no tienes que
              <br />
              operar{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">solo</em>
              </Underlined>
              .
            </h1>

            {/* Stacked promise lines */}
            <div
              className="v2-hero-entry mt-7 flex flex-col gap-2"
              style={{ animationDelay: "220ms" }}
            >
              {[
                "Tu pipeline se opera sin que lo pidas.",
                "Los leads llegan al vendedor correcto en segundos.",
              ].map((line) => (
                <p key={line} className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.55]">
                  {line}
                </p>
              ))}
              <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-heading font-semibold leading-[1.55]">
                Tú&hellip;{" "}
                <Underlined color="teal" variant="straight">
                  <span className="text-v2-accent-teal-deep">solo tienes que crecer.</span>
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
                  Hacer mi auditoría gratis
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </ButtonV2>
              </Link>
              <Link to="/v2/contacto">
                <ButtonV2 variant="outline" size="lg" className="inline-flex items-center gap-2">
                  <Play className="h-4 w-4 fill-current opacity-70" />
                  30 min, en español
                </ButtonV2>
              </Link>
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
                  "4+ años en LATAM",
                  "600k+ tareas automatizadas",
                  "Sin contrato de permanencia",
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
