import { Megaphone, TrendingUp, Headphones, Puzzle, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── accent config (mirrors CrmMarketingV2 card system) ── */
type CardAccent = "sand" | "blue" | "sand2";

const accentConfig: Record<CardAccent, {
  mist: string; border: string; icon: string;
  checkBg: string; checkIcon: string; watermark: string;
}> = {
  sand: {
    mist:      "bg-v2-surface-sand-mist",
    border:    "border-[rgba(212,168,83,0.22)]",
    icon:      "text-[#8a7a4f]",
    checkBg:   "rgba(212,168,83,0.12)",
    checkIcon: "#8a7a4f",
    watermark: "text-[#d4a853]/[0.07]",
  },
  blue: {
    mist:      "bg-v2-surface-navy-mist",
    border:    "border-v2-accent-blue/20",
    icon:      "text-v2-accent-blue",
    checkBg:   "rgba(29,112,162,0.10)",
    checkIcon: "#1d70a2",
    watermark: "text-v2-accent-blue/[0.06]",
  },
  sand2: {
    mist:      "bg-v2-surface-sand-mist",
    border:    "border-[rgba(212,168,83,0.22)]",
    icon:      "text-[#8a7a4f]",
    checkBg:   "rgba(212,168,83,0.12)",
    checkIcon: "#8a7a4f",
    watermark: "text-[#d4a853]/[0.07]",
  },
};

/* ── data ── */
const areas: {
  icon: React.ElementType;
  accent: CardAccent;
  eyebrow: string;
  title: string;
  desc: string;
  items: string[];
}[] = [
  {
    icon: Megaphone,
    accent: "sand",
    eyebrow: "Marketing",
    title: "Sistemas de captación y nurturing",
    desc: "Implementamos funnels, automatizaciones de captación y flujos de nurturing que alimentan tu pipeline con prospectos calificados, sin intervención manual.",
    items: [
      "Funnels de captación y landing pages integradas al CRM",
      "Secuencias de email y WhatsApp automatizadas por comportamiento",
      "Campañas de remarketing conectadas al pipeline de ventas",
      "Analítica de marketing atribuible a ingresos reales",
    ],
  },
  {
    icon: TrendingUp,
    accent: "blue",
    eyebrow: "Ventas",
    title: "CRM y pipeline de ingresos",
    desc: "Configuramos y operamos tu CRM para que cada lead sea seguido, calificado y cerrado en el menor tiempo posible. Sin prospectos perdidos, sin seguimientos olvidados.",
    items: [
      "CRM estructurado según tu proceso real de ventas",
      "Pipeline con etapas, triggers y alertas automáticas",
      "Bots de calificación y agendamiento 24/7",
      "Reportes de conversión y proyección de ingresos",
    ],
  },
  {
    icon: Headphones,
    accent: "sand2",
    eyebrow: "Servicio al Cliente",
    title: "Atención y retención automatizada",
    desc: "Diseñamos sistemas de atención que fidelizan, reducen tiempos de respuesta y escalan sin contratar más personal. Tu cliente siempre tiene respuesta.",
    items: [
      "Bot de atención 24/7 en WhatsApp y sitio web",
      "Gestión de casos y tickets sin fricciones",
      "Flujos de onboarding automatizados para nuevos clientes",
      "Encuestas de satisfacción y alertas de riesgo de churn",
    ],
  },
];

/* ── component ── */
export const TransformacionDigitalV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt" size="default" className="overflow-hidden">

      {/* Gold aurora orb — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #d4a853 0%, transparent 70%)" }}
      />
      {/* Subtle blue orb — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, rgba(29,112,162,0.40) 0%, transparent 70%)" }}
      />

      <Container>
        <div ref={ref}>

          {/* Header */}
          <div className="text-center max-w-[780px] mx-auto v2-reveal mb-12">
            <Eyebrow variant="sand">Nuestro aporte a tu transformación digital</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 46px)" }}
            >
              Implementamos{" "}
              <em className="not-italic text-[#8a7a4f]">estratégicamente</em>
              {" "}y operamos entendiendo el contexto de tu negocio.
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[660px] mx-auto mt-5 leading-[1.65]">
              Con la estrategia RevOps alineas los procesos de Marketing, Ventas y Servicio para que tu negocio crezca de forma escalable.
            </p>
          </div>

          {/* 3-area grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {areas.map((area, i) => {
              const Icon = area.icon;
              const cfg = accentConfig[area.accent];
              const num = String(i + 1).padStart(2, "0");
              return (
                <div
                  key={area.eyebrow}
                  className={`v2-reveal v2-d${i + 1} relative flex flex-col bg-white rounded-2xl p-6 border border-v2-border-subtle overflow-hidden hover:shadow-[0_16px_48px_rgba(212,168,83,0.09)] hover:-translate-y-1 hover:border-[rgba(212,168,83,0.30)] transition-[transform,box-shadow,border-color] duration-300`}
                >
                  {/* Watermark number */}
                  <span
                    className={`pointer-events-none select-none absolute -right-2 -top-4 font-serif italic text-[88px] leading-none ${cfg.watermark}`}
                    aria-hidden
                  >
                    {num}
                  </span>

                  {/* Icon + eyebrow */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${cfg.mist}`}>
                      <Icon className={`h-5 w-5 ${cfg.icon}`} aria-hidden />
                    </div>
                    <span className={`font-lato text-[11px] font-bold uppercase tracking-widest ${cfg.icon}`}>
                      {area.eyebrow}
                    </span>
                  </div>

                  {/* Title + desc */}
                  <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading leading-[1.25] mb-3">
                    {area.title}
                  </h3>
                  <p className="font-lato text-[13px] text-v2-ink-body leading-[1.7] mb-5">
                    {area.desc}
                  </p>

                  {/* Bullets */}
                  <div className="flex flex-col gap-2.5 mt-auto">
                    {area.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <div
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: cfg.checkBg }}
                        >
                          <Check className="h-2.5 w-2.5" style={{ color: cfg.checkIcon }} />
                        </div>
                        <span className="font-lato text-[12px] text-v2-ink-body leading-[1.55]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Soluciones a la medida banner */}
          <div className="v2-reveal v2-d4 mt-8 rounded-2xl overflow-hidden border border-[rgba(212,168,83,0.25)] bg-v2-surface-sand-mist">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white"
                style={{ border: "1px solid rgba(212,168,83,0.30)", boxShadow: "0 2px 8px rgba(212,168,83,0.10)" }}
              >
                <Puzzle className="h-6 w-6 text-[#8a7a4f]" aria-hidden />
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-[#8a7a4f] mb-1">
                  Soluciones a la medida
                </p>
                <h3 className="font-poppins font-bold text-[20px] text-v2-ink-heading leading-[1.2]">
                  No existe el sistema universal.
                </h3>
                <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-2">
                  Analizamos el stack, el equipo y el modelo de ingresos de cada negocio para diseñar una arquitectura que tenga sentido para su realidad específica — no una plantilla copiada de otro cliente.
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link to="/v2/soluciones">
                  <ButtonV2
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto whitespace-nowrap group !border-[rgba(212,168,83,0.40)] !text-[#8a7a4f] hover:!border-[#d4a853] hover:!bg-[rgba(212,168,83,0.06)]"
                  >
                    Ver soluciones
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </ButtonV2>
                </Link>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default TransformacionDigitalV2;
