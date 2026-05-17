import { type LucideIcon, MessageCircle, Cpu, Zap, BarChart2 } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface FlowStep {
  number: string;
  icon: LucideIcon;
  label: string;
  title: string;
  desc: string;
  highlight?: boolean;
}

const steps: FlowStep[] = [
  {
    number: "01",
    icon: MessageCircle,
    label: "Siempre",
    title: "Tú nos contextualizas",
    desc: "Slack, WhatsApp o Loom. Nos cuentas qué cambió, qué necesita atención. Sin reuniones de status.",
  },
  {
    number: "02",
    icon: Cpu,
    label: "Automático",
    title: "IA estructura el sprint",
    desc: "Limpia datos, prepara automatizaciones, sugiere prioridades. Velocidad de máquina, sin errores manuales.",
  },
  {
    number: "03",
    icon: Zap,
    label: "Cada día",
    title: "Expertos operan",
    desc: "Validamos la lógica y ejecutamos en tu CRM. Manos en el stack, no en PowerPoints ni propuestas.",
  },
  {
    number: "04",
    icon: BarChart2,
    label: "Lun 9am",
    title: "Sistema vivo, reporte claro",
    desc: "Dashboard actualizado. Reporte ejecutivo cada lunes a las 9am. Sin que tengas que pedirlo.",
    highlight: true,
  },
];

export const FlowStepsV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="navy-dark" size="default" className="overflow-hidden">
      {/* aurora orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[560px] h-[560px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0,191,165,0.10) 0%, transparent 65%)",
          animation: "v2-aurora-1 18s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(29,112,162,0.14) 0%, transparent 65%)",
          animation: "v2-aurora-2 22s ease-in-out infinite",
        }}
      />

      <Container>
        <div ref={ref}>
          <div className="text-center mb-16 v2-reveal">
            <Eyebrow variant="teal">Cómo fluye</Eyebrow>
            <h2
              className="font-poppins font-bold text-white mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Un solo flujo.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">
                Sin notas perdidas en WhatsApp.
              </em>
            </h2>
            <p className="font-lato text-[17px] text-white/55 max-w-[520px] mx-auto mt-4 leading-relaxed">
              Así opera tu cuenta cada semana, con o sin que tu equipo esté completo.
            </p>
          </div>

          {/* Steps — connector line on desktop */}
          <div className="relative">
            {/* Connector line */}
            <div
              aria-hidden
              className="hidden lg:block absolute top-[28px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px bg-white/10"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((step, si) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className={[
                      "v2-reveal",
                      si > 0 ? `v2-d${si}` : "",
                      "relative flex flex-col",
                      step.highlight
                        ? "bg-v2-accent-teal/10 border border-v2-accent-teal/30 rounded-2xl p-7"
                        : "bg-white/5 border border-white/8 rounded-2xl p-7",
                      "hover:border-v2-accent-teal/40 hover:-translate-y-1",
                      "transition-[transform,border-color] duration-300",
                    ].join(" ")}
                  >
                    {/* Number dot */}
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={[
                          "w-14 h-14 rounded-full flex items-center justify-center relative z-10",
                          step.highlight
                            ? "bg-v2-accent-teal"
                            : "bg-white/8 border border-white/15",
                        ].join(" ")}
                      >
                        <Icon
                          className={`h-5 w-5 ${step.highlight ? "text-v2-ink-heading" : "text-v2-accent-teal"}`}
                          aria-hidden
                        />
                      </div>
                      <span
                        className={`font-lato text-[10px] font-semibold uppercase tracking-widest ${step.highlight ? "text-v2-accent-teal" : "text-white/35"}`}
                      >
                        {step.label}
                      </span>
                    </div>

                    {/* Watermark number */}
                    <span
                      aria-hidden
                      className="pointer-events-none select-none absolute right-4 top-3 font-serif italic text-[72px] leading-none text-white/[0.04]"
                    >
                      {step.number}
                    </span>

                    <h3
                      className={`font-poppins font-bold text-[18px] leading-[1.2] ${step.highlight ? "text-white" : "text-white/90"}`}
                    >
                      {step.title}
                    </h3>
                    <p className="font-lato text-[14px] text-white/55 leading-[1.65] mt-3">
                      {step.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FlowStepsV2;
