import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Industry {
  label: string;
  emoji: string;
  href: string;
  desc: string;
}

const industries: Industry[] = [
  {
    label: "Agencias & Consultoras",
    emoji: "💼",
    href: "/v2/industrias/agencias",
    desc: "Pipeline de retainers, onboarding de clientes y reportes automatizados.",
  },
  {
    label: "Salud & Clínicas",
    emoji: "🏥",
    href: "/v2/industrias/salud",
    desc: "Agenda, recordatorios y seguimiento de pacientes sin fugas.",
  },
  {
    label: "Educación & EdTech",
    emoji: "🎓",
    href: "/v2/industrias/educacion",
    desc: "Captación, inscripción y retención de estudiantes en un solo sistema.",
  },
  {
    label: "Real Estate",
    emoji: "🏠",
    href: "/v2/industrias/real-estate",
    desc: "Seguimiento de prospectos, portafolio y cierre sin pérdida de leads.",
  },
  {
    label: "Servicios Generales",
    emoji: "⚙️",
    href: "/v2/industrias/servicios-generales",
    desc: "Cotización, agenda y facturación coordinados en un pipeline limpio.",
  },
  {
    label: "Viajes & Turismo",
    emoji: "✈️",
    href: "/v2/industrias/viajes",
    desc: "De la consulta a la reserva sin hilos de WhatsApp perdidos.",
  },
  {
    label: "Fintech & Seguros",
    emoji: "💳",
    href: "/v2/industrias/fintech",
    desc: "Cumplimiento, onboarding y renovación automática de clientes.",
  },
  {
    label: "Manufactura & B2B",
    emoji: "🏭",
    href: "/v2/industrias/manufactura",
    desc: "Ciclos de venta largos gestionados con pipeline visual y alertas.",
  },
];

export const IndustriesV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="cream" size="default">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[640px] mx-auto v2-reveal">
            <Eyebrow variant="navy">Tu vertical</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Operamos en{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                tu industria.
              </em>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body mt-4 leading-[1.6] max-w-[520px] mx-auto">
              Cada sector tiene su propio ciclo de venta y sus propias fricciones. Sabemos cuáles
              son las tuyas antes de que nos las cuentes.
            </p>
          </div>

          {/* Industry grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
            {industries.map((ind, i) => (
              <Link
                key={ind.label}
                to={ind.href}
                className={[
                  "v2-reveal",
                  i < 4 ? `v2-d${i + 1}` : `v2-d${i - 3}`,
                  "group relative bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col",
                  "hover:border-v2-accent-teal/35 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] hover:-translate-y-1",
                  "transition-[transform,box-shadow,border-color] duration-300",
                ].join(" ")}
              >
                {/* Emoji badge */}
                <div className="w-12 h-12 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center text-[22px] mb-4 group-hover:scale-105 transition-transform duration-300">
                  {ind.emoji}
                </div>

                <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.25]">
                  {ind.label}
                </h3>
                <p className="font-lato text-[13px] text-v2-ink-body leading-[1.6] mt-2 flex-1">
                  {ind.desc}
                </p>

                <span className="inline-flex items-center gap-1 font-lato text-[12px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep mt-5 group-hover:gap-2 transition-[gap] duration-200">
                  Ver cómo
                  <ArrowRight
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* Bottom link */}
          <div className="v2-reveal v2-d4 flex justify-center mt-10">
            <Link
              to="/v2/industrias"
              className="group inline-flex items-center gap-2 font-lato text-[13px] font-semibold uppercase tracking-widest text-v2-ink-heading hover:text-v2-accent-teal-deep transition-colors duration-200"
            >
              Ver todas las industrias
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default IndustriesV2;
