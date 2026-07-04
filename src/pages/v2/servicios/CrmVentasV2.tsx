import { Link } from "react-router-dom";
import {
  ArrowRight,
  XCircle,
  BarChart3,
  Route,
  DatabaseZap,
  Workflow,
  GraduationCap,
  UserCheck,
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
    icon: DatabaseZap,
    title: "Datos limpios, siempre",
    desc: "Operamos el CRM diario: sin duplicados, sin contactos huérfanos. La data que entra sale confiable.",
  },
  {
    icon: Route,
    title: "Routing automático de leads",
    desc: "Cada lead llega al vendedor correcto en segundos, no en horas. Lógica de asignación viva.",
  },
  {
    icon: BarChart3,
    title: "Reporte el lunes a las 9am",
    desc: "Pipeline, velocity, conversión. El equipo empieza la semana con los números, no buscándolos.",
  },
  {
    icon: Workflow,
    title: "Workflows que no se rompen",
    desc: "Diseñamos, montamos y mantenemos las automatizaciones. Si algo cambia, lo ajustamos antes de que lo notes.",
  },
  {
    icon: GraduationCap,
    title: "Tu equipo aprende mientras opera",
    desc: "Documentación viva y sesiones cortas. El conocimiento queda en el equipo, no solo en Sixteam.",
  },
  {
    icon: UserCheck,
    title: "Un punto de contacto, siempre",
    desc: "Una persona dedicada que conoce tu cuenta. Slack o WhatsApp. Sin tickets, sin espera.",
  },
];

const dontList = [
  "Configurar el CRM y mandarte el login",
  "Hacer un taller de adopción y desaparecer",
  "Cobrarte por cada ajuste",
];

const stats = [
  { value: "40%", label: "del tiempo del vendedor recuperado" },
  { value: "3–5×", label: "más leads cerrados con seguimiento" },
  { value: "Lun 9am", label: "reporte cada semana, sin pedirlo" },
];

// card accent pattern: teal, teal, blue, blue, sand, sand
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

const CrmVentasV2 = () => {
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
            CRM Ventas{" "}
            <em className="font-serif italic font-normal">operado</em>, no
            instalado.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[560px] mx-auto">
            Pipeline limpio. Leads que llegan al vendedor correcto. Reporte los lunes.
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
              <Eyebrow variant="navy" className="v2-fade v2-d1">Qué operamos</Eyebrow>
              <h2
                className="v2-reveal v2-d2 font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.15" }}
              >
                Lo que Sixteam hace{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">cada semana</em>{" "}
                en tu pipeline.
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
              {/* Left: what we don't do */}
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
              {/* Right: bold promise */}
              <div className="v2-reveal v2-d3">
                <h2
                  className="font-poppins font-bold text-white"
                  style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: "1.2" }}
                >
                  Tu vendedor que no vende es un vendedor{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal">
                    operando admin.
                  </em>
                </h2>
                <p className="font-lato text-[16px] text-white/70 mt-5 leading-[1.7]">
                  Cada hora que tu equipo comercial pasa actualizando el CRM es una hora que no pasa
                  hablando con clientes. Sixteam opera eso para que ellos solo vendan.
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
              ¿Listo para que tu pipeline{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">se opere solo</em>?
            </h2>
            <p className="v2-fade v2-d2 font-lato text-[17px] text-v2-ink-body mt-5 max-w-[500px] mx-auto">
              Empieza con el Radar gratis. 48h para saber dónde está la fuga.
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

export default CrmVentasV2;
