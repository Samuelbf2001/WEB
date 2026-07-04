import { Link } from "react-router-dom";
import {
  ArrowRight,
  XCircle,
  Palette,
  BrainCircuit,
  Filter,
  HandMetal,
  Microscope,
  ChartPie,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  desc: string;
}

const items: ServiceItem[] = [
  {
    icon: Palette,
    title: "Diseño conversacional a tu medida",
    desc: "El agente habla como tu marca: tono, flujo, objeciones. No como un bot de soporte genérico.",
  },
  {
    icon: BrainCircuit,
    title: "Conectado a tu CRM, calendario y base real",
    desc: "Responde con contexto actual — no con scripts. Sabe qué hay en tu CRM antes de responder.",
  },
  {
    icon: Filter,
    title: "Calificación BANT automática",
    desc: "Califica leads en la conversación y los empuja a la pipa correcta o agenda directo en tu calendario.",
  },
  {
    icon: HandMetal,
    title: "Handoff humano sin perder el hilo",
    desc: "Cuando el caso es delicado, pasa al agente humano con todo el contexto intacto.",
  },
  {
    icon: Microscope,
    title: "Mejora continua semana a semana",
    desc: "Revisamos logs, detectamos qué falló y ajustamos. El agente mejora cada semana.",
  },
  {
    icon: ChartPie,
    title: "Métricas de resolución reales",
    desc: "% resuelto sin humano, NPS post-chat, conversión a reunión. Sin vanity metrics.",
  },
];

const dontList = [
  "Vender un chatbot de FAQ estático",
  "Instalar y desaparecer",
  "Prometer IA sin contexto real",
];

const stats = [
  { value: "24/7", label: "calificación sin humano" },
  { value: "<2 sem", label: "primer agente en vivo" },
  { value: "BANT", label: "calificación automática" },
];

const cardAccents = ["teal", "teal", "blue", "blue", "sand", "sand"] as const;
type CardAccent = "teal" | "blue" | "sand";

const accentConfig: Record<CardAccent, { mist: string; icon: string; watermark: string }> = {
  teal: {
    mist: "bg-v2-surface-teal-mist",
    icon: "text-v2-accent-teal-deep",
    watermark: "text-v2-accent-teal/[0.06]",
  },
  blue: {
    mist: "bg-v2-surface-navy-mist",
    icon: "text-v2-accent-blue",
    watermark: "text-v2-accent-blue/[0.06]",
  },
  sand: {
    mist: "bg-v2-surface-sand-mist",
    icon: "text-[#8a7a4f]",
    watermark: "text-[#d4a853]/[0.08]",
  },
};

const ChatbotIAV2 = () => {
  const itemsRef = useScrollReveal<HTMLDivElement>();
  const contrastRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* ── Hero ── */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        <div
          className="pointer-events-none absolute -top-24 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00bfa5 0%, transparent 70%)",
            animation: "v2-aurora-1 16s ease-in-out infinite",
          }}
          aria-hidden
        />
        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow variant="teal">Servicio</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(36px, 6vw, 60px)", lineHeight: "1.05", letterSpacing: "-0.02em" }}
          >
            Agentes IA que{" "}
            <em className="font-serif italic font-normal">operan</em>, no que
            solo responden.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[560px] mx-auto">
            Agentes que califican, agendan y resuelven — 24/7, conectados a tu base real.
          </p>

          {/* Stat strip */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-[640px] mx-auto">
            {stats.map((s) => (
              <div key={s.value} className="bg-v2-surface-teal-mist rounded-xl px-4 py-4">
                <div className="font-poppins font-bold text-v2-accent-teal-deep text-[22px] leading-none">
                  {s.value}
                </div>
                <div className="font-lato text-[12px] text-v2-ink-muted mt-1.5 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/radar">
              <ButtonV2 variant="primary" size="lg">
                Diagnóstico gratis
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/contacto">
              <ButtonV2 variant="outline" size="lg">
                Hablar con un experto
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── What we operate ── */}
      <Section surface="alt" size="default">
        <div ref={itemsRef}>
          <Container>
            <div className="text-center mb-12 max-w-[640px] mx-auto">
              <Eyebrow variant="teal" className="v2-fade v2-d1">Qué operamos</Eyebrow>
              <h2
                className="v2-reveal v2-d2 font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
              >
                Lo que Sixteam opera{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">cada semana</em>{" "}
                en tu agente.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {items.map((item, i) => {
                const accent = cardAccents[i];
                const cfg = accentConfig[accent];
                const Icon = item.icon;
                const num = String(i + 1).padStart(2, "0");
                return (
                  <div
                    key={i}
                    className={`v2-reveal v2-d${Math.min(i + 2, 6)} relative bg-white border border-v2-border-subtle rounded-2xl p-7 overflow-hidden hover:border-v2-accent-teal/30 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300`}
                  >
                    <span
                      className={`pointer-events-none select-none absolute -right-2 -top-4 font-serif italic text-[88px] leading-none ${cfg.watermark}`}
                      aria-hidden
                    >
                      {num}
                    </span>
                    <div className={`w-11 h-11 rounded-xl ${cfg.mist} flex items-center justify-center`}>
                      <Icon className={`h-5 w-5 ${cfg.icon}`} />
                    </div>
                    <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading mt-5">
                      {item.title}
                    </h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-2">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Navy contrast ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-16 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00bfa5 0%, transparent 70%)" }}
          aria-hidden
        />
        <div ref={contrastRef}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Eyebrow variant="teal" className="v2-fade v2-d1">Lo que NO hacemos</Eyebrow>
                <ul className="mt-6 space-y-4">
                  {dontList.map((item, i) => (
                    <li key={i} className={`v2-reveal v2-d${i + 2} flex items-start gap-3`}>
                      <XCircle className="h-5 w-5 text-v2-accent-teal flex-shrink-0 mt-0.5" />
                      <span className="font-lato text-[16px] text-white/80 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="v2-reveal v2-d3">
                <h2
                  className="font-poppins font-bold text-white"
                  style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: "1.2" }}
                >
                  Un chatbot que no sabe nada de tu empresa{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal">
                    solo frustra.
                  </em>
                </h2>
                <p className="font-lato text-[16px] text-white/70 mt-5 leading-[1.7]">
                  El agente que construimos vive en tu CRM, conoce tu catálogo y entiende el contexto
                  de cada conversación. No es IA decorativa — es IA que trabaja.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      {/* ── CTA ── */}
      <Section surface="default" size="default">
        <div ref={ctaRef}>
          <Container size="narrow" className="text-center">
            <h2
              className="v2-reveal v2-d1 font-poppins font-bold text-v2-ink-heading"
              style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.2" }}
            >
              IA con{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">criterio</em>, no
              con alucinaciones.
            </h2>
            <p className="v2-fade v2-d2 font-lato text-[17px] text-v2-ink-body mt-5 max-w-[500px] mx-auto">
              Te mostramos un demo del agente con tu propia data en menos de 2 semanas.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/radar">
                <ButtonV2 variant="primary" size="lg">
                  Hacer mi auditoría
                  <ArrowRight className="h-4 w-4" />
                </ButtonV2>
              </Link>
              <Link to="/contacto">
                <ButtonV2 variant="outline" size="lg">
                  Hablar con un experto
                </ButtonV2>
              </Link>
            </div>
          </Container>
        </div>
      </Section>
    </LayoutV2>
  );
};

export default ChatbotIAV2;
