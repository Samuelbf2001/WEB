import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";

interface Step {
  number: string;
  title: string;
  description: string;
  eyebrow: string;
  items: string[];
}

const steps: Step[] = [
  {
    number: "01",
    title: "Radar gratis",
    description:
      "Te enviamos un cuestionario corto. En 48h te devolvemos dónde está dejando dinero sobre la mesa tu operación — y qué se puede mejorar primero.",
    eyebrow: "Qué incluye:",
    items: [
      "Auditoría de CRM y pipeline actual",
      "Mapa de procesos críticos",
      "Estimación de fugas de revenue",
    ],
  },
  {
    number: "02",
    title: "Llamada de alineación",
    description:
      "30 minutos, en español, sin pitch de venta. Validamos si tiene sentido trabajar juntos y cuál es el punto de entrada correcto para tu empresa.",
    eyebrow: "Saldrás con:",
    items: [
      "Plan inicial de 90 días",
      "Stack recomendado para tu caso",
      "Inversión estimada clara",
    ],
  },
  {
    number: "03",
    title: "Arrancamos y nos quedamos",
    description:
      "El equipo entra a tu operación. Sprints semanales. Reporte claro los lunes. Y si algo se rompe o alguien de tu equipo cambia — lo atendemos.",
    eyebrow: "Lo que ocurre:",
    items: [
      "Integración a tu Slack/WhatsApp",
      "Onboarding del stack completo",
      "Single point of contact siempre",
    ],
  },
];

export const HowItWorksV2 = () => {
  return (
    <Section surface="navy-mist" size="default">
      <Container>
        <div className="text-center max-w-[720px] mx-auto">
          <Eyebrow variant="teal">Cómo entramos</Eyebrow>
          <h2
            className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
          >
            Tres pasos para{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal-deep">
              arrancar a operar.
            </em>
          </h2>
          <p className="font-lato text-[17px] text-v2-ink-body max-w-[600px] mx-auto mt-4 leading-[1.6]">
            Sin propuestas de 30 páginas. Sin diagnósticos pagados. Hablamos,
            validamos, ejecutamos — y{" "}
            <strong className="text-v2-ink-heading">
              seguimos contigo mes a mes.
            </strong>
          </p>
        </div>

        {/* Steps — alternating visual weight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col ${
                i === 1
                  ? "md:pt-8 md:border-t-2 border-v2-accent-teal/30"
                  : ""
              }`}
            >
              <span className="font-serif italic text-[60px] leading-none text-v2-accent-sand opacity-70">
                {step.number}
              </span>
              <h4 className="font-poppins font-bold text-[20px] text-v2-ink-heading mt-3 leading-[1.25]">
                {step.title}
              </h4>
              <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-3">
                {step.description}
              </p>
              <p className="font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted mt-5">
                {step.eyebrow}
              </p>
              <ul className="flex flex-col gap-2 mt-3">
                {step.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check
                      className="h-4 w-4 mt-0.5 text-v2-accent-teal-deep flex-shrink-0"
                      aria-hidden
                    />
                    <span className="font-lato text-[13px] text-v2-ink-body leading-[1.55]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* "Not implement and disappear" callout */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 items-center p-8 rounded-2xl bg-v2-ink-heading overflow-hidden relative">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,191,165,0.12) 0%, transparent 70%)",
            }}
          />
          <div className="relative">
            <p className="font-lato text-[11px] uppercase tracking-[0.18em] text-v2-accent-teal mb-3">
              Lo que nos diferencia
            </p>
            <p
              className="font-poppins font-bold text-white leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(20px, 2.2vw, 26px)" }}
            >
              No implementamos y desaparecemos.
            </p>
            <p className="font-lato text-[15px] text-white/60 leading-[1.65] mt-3">
              Operamos tu tecnología — pipeline, automatizaciones, agentes IA, reportes —
              mes a mes. Si algo se rompe, lo arreglamos. Si tu equipo cambia,
              entrenamos al nuevo.
            </p>
          </div>
          <div className="relative flex flex-col items-start md:items-end">
            <p className="font-serif italic text-[18px] md:text-[20px] text-white/80 leading-[1.4] max-w-[340px] md:text-right">
              "No te vendemos un proyecto. Te vendemos un equipo que opera tu
              tecnología sin pedirte ayuda."
            </p>
            <div className="mt-6">
              <Link to="/v2/radar">
                <ButtonV2 variant="primary" size="lg">
                  Empezar con el Radar gratis
                  <ArrowRight className="h-4 w-4" />
                </ButtonV2>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorksV2;
