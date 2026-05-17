import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Tier {
  number: string;
  name: string;
  desc: string;
  price: string;
  priceSuffix: string;
  cta: string;
  features: string[];
  highlight?: boolean;
  accent: "sand" | "teal" | "blue";
}

const tiers: Tier[] = [
  {
    number: "01",
    name: "Módulo",
    desc: "Una pieza del sistema. La fuga más urgente, primero.",
    price: "USD 1,800",
    priceSuffix: "/mes",
    cta: "Empezar por un módulo",
    accent: "sand",
    features: [
      "Un servicio operado (Ventas, MKT, Atención o IA)",
      "Setup, automatizaciones y operación incluidos",
      "Sprint semanal + reporte de lunes",
      "Single point of contact",
      "Sin contrato de permanencia",
    ],
  },
  {
    number: "02",
    name: "Sistema",
    desc: "El combo más pedido. Dos o tres módulos que se cubren entre sí.",
    price: "USD 3,800",
    priceSuffix: "/mes",
    cta: "Construir mi sistema",
    accent: "teal",
    highlight: true,
    features: [
      "Hasta 3 servicios operados en paralelo",
      "Integraciones entre módulos (CRM ↔ MKT ↔ Soporte)",
      "Dashboards unificados",
      "QBR trimestral incluido",
      "Soporte por Slack/WhatsApp con SLA",
      "Auditoría mensual del stack",
    ],
  },
  {
    number: "03",
    name: "Plataforma",
    desc: "Operación end-to-end. Tu RevOps en modo gestionado.",
    price: "USD 6,000+",
    priceSuffix: "/mes",
    cta: "Hablar de plataforma",
    accent: "blue",
    features: [
      "Sistema completo (todos los módulos)",
      "Agentes IA custom para tu vertical",
      "Equipo dedicado (PM + 2 ops + analista)",
      "Roadmap trimestral + planning anual",
      "Radar continuo de oportunidades",
      "Onboarding white-glove",
    ],
  },
];

const accentBg = {
  sand: "bg-v2-surface-sand-mist",
  teal: "bg-v2-accent-teal/20",
  blue: "bg-v2-surface-navy-mist",
};

const accentText = {
  sand: "text-[#8a7a4f]",
  teal: "text-v2-accent-teal",
  blue: "text-v2-accent-blue",
};

const cardDelays = ["v2-d1", "", "v2-d2"];

export const PricingV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="default" size="default">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[680px] mx-auto v2-reveal">
            <Eyebrow variant="navy">Cómo te cobramos</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
            >
              Tres formas de operar.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Sin sorpresas</em>
              </Underlined>
              .
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-5">
              Precio modular, factura mensual, sin permanencia. Después del Radar gratis te decimos
              cuál encaja en tu momento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14 items-start">
            {tiers.map((tier, i) => (
              <div key={tier.name} className={`v2-reveal ${cardDelays[i]} relative`}>
                {/* Teal glow behind the highlight card */}
                {tier.highlight && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-6 rounded-3xl opacity-60"
                    style={{
                      background: "radial-gradient(ellipse at center, rgba(0,191,165,0.18) 0%, transparent 70%)",
                      animation: "v2-glow-pulse 3.5s ease-in-out infinite",
                    }}
                  />
                )}

                <article
                  className={
                    "relative rounded-3xl p-7 md:p-8 flex flex-col transition-[transform,box-shadow] duration-300 " +
                    (tier.highlight
                      ? "bg-v2-ink-heading text-white shadow-[0_28px_72px_rgba(10,35,66,0.22)] -translate-y-2 border border-v2-accent-teal/25 hover:-translate-y-3"
                      : "bg-white border border-v2-border-subtle hover:shadow-[0_16px_48px_rgba(10,35,66,0.08)] hover:-translate-y-1")
                  }
                >
                  {tier.highlight && (
                    <span className="self-start mb-5 inline-flex items-center gap-2 bg-v2-accent-teal/20 text-v2-accent-teal text-[10px] font-lato font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                      <span className="v2-pulse-dot w-1.5 h-1.5 rounded-full bg-v2-accent-teal flex-shrink-0" />
                      Más elegido
                    </span>
                  )}

                  <div className="flex items-baseline gap-3">
                    <span
                      className={
                        "font-serif italic text-[44px] leading-none " +
                        (tier.highlight ? "text-v2-accent-teal" : accentText[tier.accent])
                      }
                    >
                      {tier.number}
                    </span>
                    <h3
                      className={
                        "font-poppins font-bold text-[22px] " +
                        (tier.highlight ? "text-white" : "text-v2-ink-heading")
                      }
                    >
                      {tier.name}
                    </h3>
                  </div>

                  <p
                    className={
                      "font-lato text-[14px] leading-[1.6] mt-3 " +
                      (tier.highlight ? "text-white/75" : "text-v2-ink-body")
                    }
                  >
                    {tier.desc}
                  </p>

                  <div
                    className={
                      "mt-6 mb-6 pb-6 border-b " +
                      (tier.highlight ? "border-white/15" : "border-v2-border-subtle")
                    }
                  >
                    <div className="flex items-baseline gap-1">
                      <span
                        className={
                          "font-poppins font-bold text-[34px] tracking-tight " +
                          (tier.highlight ? "text-white" : "text-v2-ink-heading")
                        }
                      >
                        {tier.price}
                      </span>
                      <span
                        className={
                          "font-lato text-[15px] " +
                          (tier.highlight ? "text-white/55" : "text-v2-ink-muted")
                        }
                      >
                        {tier.priceSuffix}
                      </span>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-3 mb-7">
                    {tier.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2.5">
                        <div
                          className={
                            "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 " +
                            (tier.highlight ? "bg-v2-accent-teal/20" : accentBg[tier.accent])
                          }
                        >
                          <Check
                            className={
                              "h-3 w-3 " +
                              (tier.highlight ? "text-v2-accent-teal" : accentText[tier.accent])
                            }
                          />
                        </div>
                        <span
                          className={
                            "font-lato text-[14px] leading-[1.55] " +
                            (tier.highlight ? "text-white/85" : "text-v2-ink-body")
                          }
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link to="/v2/radar">
                      <ButtonV2
                        variant={tier.highlight ? "primary" : "outline"}
                        size="md"
                        className="w-full"
                      >
                        {tier.cta}
                        <ArrowRight className="h-4 w-4" />
                      </ButtonV2>
                    </Link>
                  </div>
                </article>
              </div>
            ))}
          </div>

          <p className="v2-reveal v2-d3 text-center font-lato text-[14px] text-v2-ink-muted italic mt-10">
            Todos los planes incluyen Radar gratis previo · Sin contrato de permanencia · Factura mensual
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default PricingV2;
