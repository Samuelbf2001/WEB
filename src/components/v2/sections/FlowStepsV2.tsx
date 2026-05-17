import { Users, Cpu, Zap, Sparkles, type LucideIcon } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FlowStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  accent?: boolean;
}

const steps: FlowStep[] = [
  {
    number: "1",
    icon: Users,
    title: "Tú pides",
    description:
      "Actualizas tu equipo del CRM y el sprint regresa el insight.",
  },
  {
    number: "2",
    icon: Cpu,
    title: "IA procesa",
    description:
      "Estructura datos, limpia duplicados, prepara el flow.",
  },
  {
    number: "3",
    icon: Zap,
    title: "Equipo ejecuta",
    description:
      "Expertos validan la lógica y la operan en HubSpot u otro CRM.",
  },
  {
    number: "4",
    icon: Sparkles,
    title: "Lanzamiento",
    description:
      "Operación viva. Dashboard semanal de qué funciona y qué no.",
    accent: true,
  },
];

const stepDelays = ["", "v2-d1", "v2-d2", "v2-d3"];

export const FlowStepsV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section id="flow" surface="default">
      <Container>
        <div ref={ref}>
          <div className="text-center mb-14 v2-reveal">
            <Eyebrow variant="teal">Así fluye, sin fricciones</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Cómo fluye tu{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                operación
              </em>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[560px] mx-auto mt-4 leading-relaxed">
              Un solo flujo. Cuatro responsables. Cero notas perdidas en WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, si) => {
              const Icon = step.icon;
              const cardSurface = step.accent
                ? "bg-v2-surface-teal-mist border border-v2-accent-teal/20"
                : "bg-white border border-v2-border-subtle";
              const numberSurface = step.accent
                ? "bg-v2-accent-teal text-white"
                : "bg-v2-surface-cream text-v2-ink-heading border border-v2-border-subtle";

              return (
                <div
                  key={step.title}
                  className={[
                    "v2-reveal",
                    stepDelays[si],
                    cardSurface,
                    "rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] hover:-translate-y-1",
                    "transition-[transform,box-shadow] duration-300",
                  ].join(" ")}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-poppins font-bold text-[15px] ${numberSurface}`}>
                    {step.number}
                  </div>
                  <div className="mt-4">
                    <Icon className="h-5 w-5 text-v2-accent-teal" aria-hidden />
                  </div>
                  <h4 className="font-poppins font-bold text-[17px] text-v2-ink-heading mt-5">
                    {step.title}
                  </h4>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FlowStepsV2;
