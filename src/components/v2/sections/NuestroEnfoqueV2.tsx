import { Link } from "react-router-dom";
import {
  ArrowRight, Calendar,
  BarChart2, Mail, Database, Bot, RefreshCw,
  Globe, Megaphone,
} from "lucide-react";
import Container from "@/components/v2/Container";
import ButtonV2 from "@/components/v2/ButtonV2";

type Handler = "ia" | "human";

const ops: { icon: React.ElementType; label: string; status: string; handler: Handler }[] = [
  { icon: Database,  label: "CRM",                           status: "Pipeline limpio · 12 deals activos", handler: "human" },
  { icon: Bot,       label: "Chatbot IA",                    status: "Calificando leads 24/7",             handler: "ia" },
  { icon: Globe,     label: "Web & landing pages",           status: "Actualizada el martes",              handler: "human" },
  { icon: Megaphone, label: "Pauta digital",                 status: "3 campañas activas",                 handler: "human" },
  { icon: RefreshCw, label: "Automatizaciones y agentes IA", status: "6 workflows corriendo",              handler: "ia" },
  { icon: BarChart2, label: "Reporte ejecutivo",             status: "Enviado · Lun 9:01am",               handler: "human" },
  { icon: Mail,      label: "Email y WhatsApp marketing",    status: "3 campañas activas · 2 en cola",     handler: "ia" },
];

const handlerLabel: Record<Handler, { label: string; dot: string; text: string }> = {
  ia:    { label: "IA",          dot: "bg-v2-accent-teal", text: "text-v2-accent-teal-deep" },
  human: { label: "Humano + IA", dot: "bg-[#d4a853]",      text: "text-[#8a7a4f]" },
};

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
              <div className="w-8 h-8 rounded-xl bg-white border border-v2-border-subtle flex items-center justify-center flex-shrink-0 shadow-sm">
                <Icon className="h-4 w-4 text-v2-ink-muted" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-poppins font-bold text-[13px] text-v2-ink-heading leading-tight">
                  {label}
                </p>
              </div>
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

      {/* Footer */}
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

export const NuestroEnfoqueV2 = () => (
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
          <Link to="/radar">
            <ButtonV2 variant="primary" size="lg" className="group">
              Agenda tu diagnóstico gratuito
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </ButtonV2>
          </Link>
          <Link to="/contacto#agenda">
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
              "Diagnóstico gratuito · Promo desde $200/mes",
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
);

export default NuestroEnfoqueV2;
