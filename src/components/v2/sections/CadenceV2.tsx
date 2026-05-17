import { Clock, BarChart2, Zap, BookOpen } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const horizons = [
  {
    cadence: "Cada semana",
    emphasis: "30 minutos.",
    description:
      "Reunión de 30 minutos. Revisamos qué se trabó y lo ajustamos. Nada acumula.",
    detail: "No esperamos al mes para saber que algo falló.",
    icon: Clock,
    accent: "teal" as const,
    size: "large" as const,
  },
  {
    cadence: "Cada mes",
    emphasis: "3 métricas — no 40.",
    description:
      "Reporte claro de pipeline, conversión y retención. Solo las métricas que mueven decisiones.",
    detail: "Sin dashboards de 40 KPIs que nadie lee.",
    icon: BarChart2,
    accent: "blue" as const,
    size: "medium" as const,
  },
  {
    cadence: "Cada día",
    emphasis: "Estamos disponibles.",
    description:
      "Si algo se rompe o hay una oportunidad, no esperas a la otra semana. Respondemos hoy.",
    detail: "Por Slack, WhatsApp o email — como funcione para ti.",
    icon: Zap,
    accent: "sand" as const,
    size: "medium" as const,
  },
];

const accentMap = {
  teal: {
    icon: "bg-v2-surface-teal-mist text-v2-accent-teal-deep border-v2-accent-teal/20",
    label: "text-v2-accent-teal-deep",
    bar: "bg-v2-accent-teal",
    card: "border-v2-accent-teal/25",
  },
  blue: {
    icon: "bg-blue-50 text-[#1d70a2] border-blue-100",
    label: "text-[#1d70a2]",
    bar: "bg-[#1d70a2]",
    card: "border-[#1d70a2]/20",
  },
  sand: {
    icon: "bg-v2-surface-sand-mist text-[#8a7a4f] border-v2-accent-sand/20",
    label: "text-[#8a7a4f]",
    bar: "bg-v2-accent-sand",
    card: "border-v2-accent-sand/20",
  },
};

export const CadenceV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt" size="spacious">
      <Container size="default">
        <div ref={ref}>
          {/* Header */}
          <div className="text-center max-w-[780px] mx-auto">
            <div className="v2-reveal">
              <Eyebrow variant="navy">Cómo operamos juntos</Eyebrow>
            </div>
            <h2
              className="v2-reveal v2-d1 mt-5 font-poppins font-bold text-v2-ink-heading leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(30px, 4.5vw, 52px)" }}
            >
              Una cadencia que mantiene{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                todo en movimiento.
              </em>
            </h2>
            <p className="v2-reveal v2-d2 font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-5 max-w-[620px] mx-auto">
              No implementamos y desaparecemos. Tenemos una estructura de trabajo
              semanal, mensual y diaria — para que nada se trabe sin que alguien
              lo atienda.
            </p>
          </div>

          {/* Timeline — 3 cards with connecting element, different visual weights */}
          <div className="mt-16 relative">
            {/* Horizontal connector line (desktop) */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[52px] left-[calc(16.66%+32px)] right-[calc(16.66%+32px)] h-px bg-v2-ink-heading/10"
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {horizons.map((h, i) => {
                const a = accentMap[h.accent];
                const isLarge = h.size === "large";
                return (
                  <div
                    key={h.cadence}
                    className={`v2-reveal v2-d${i + 2} relative flex flex-col ${
                      isLarge
                        ? "bg-v2-ink-heading text-white rounded-2xl p-8 shadow-[0_20px_60px_rgba(10,35,66,0.14)] overflow-hidden"
                        : "bg-white rounded-2xl p-8 border shadow-[0_4px_24px_rgba(10,35,66,0.07)] " +
                          a.card
                    }`}
                  >
                    {/* Aurora orb for large card */}
                    {isLarge && (
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 70%)",
                        }}
                      />
                    )}

                    {/* Step indicator dot + connector (desktop) */}
                    <div className="hidden lg:flex absolute -top-[3px] left-8 items-center justify-center w-[14px] h-[14px] rounded-full bg-v2-ink-heading/10 border-2 border-v2-surface-alt z-10">
                      <span className={`w-2 h-2 rounded-full ${a.bar}`} />
                    </div>

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0 ${
                        isLarge
                          ? "bg-white/10 border-white/15 text-v2-accent-teal"
                          : a.icon
                      }`}
                    >
                      <h.icon className="h-5 w-5" aria-hidden />
                    </div>

                    {/* Cadence label */}
                    <p
                      className={`mt-5 font-lato text-[11px] uppercase tracking-[0.18em] font-semibold ${
                        isLarge ? "text-v2-accent-teal" : a.label
                      }`}
                    >
                      {h.cadence}
                    </p>

                    {/* Emphasis */}
                    <p
                      className={`font-poppins font-bold leading-[1.15] tracking-[-0.02em] mt-2 ${
                        isLarge ? "text-white" : "text-v2-ink-heading"
                      }`}
                      style={{
                        fontSize: isLarge
                          ? "clamp(24px, 2.4vw, 30px)"
                          : "clamp(20px, 1.8vw, 24px)",
                      }}
                    >
                      {h.emphasis}
                    </p>

                    {/* Description */}
                    <p
                      className={`font-lato text-[15px] leading-[1.65] mt-4 ${
                        isLarge ? "text-white/75" : "text-v2-ink-body"
                      }`}
                    >
                      {h.description}
                    </p>

                    {/* Detail note */}
                    <p
                      className={`font-lato text-[13px] italic leading-[1.5] mt-4 ${
                        isLarge ? "text-white/45" : "text-v2-ink-muted"
                      }`}
                    >
                      {h.detail}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Closing line — the documentation promise */}
          <div className="v2-reveal v2-d5 mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl border border-v2-ink-heading/8 bg-white/60">
            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-v2-surface-sand-mist border border-v2-accent-sand/25 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-[#8a7a4f]" aria-hidden />
            </div>
            <div>
              <p className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.3]">
                Todo queda documentado.
              </p>
              <p className="font-lato text-[14px] text-v2-ink-muted leading-[1.6] mt-1">
                Si alguien se va de tu equipo, el conocimiento no se va con
                ellos. El proceso, los playbooks y la historia quedan en tu
                operación — no en la cabeza de una persona.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CadenceV2;
