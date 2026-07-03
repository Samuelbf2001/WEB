import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CaseStat {
  value: string;
  label: string;
}

interface CaseCard {
  industry: string;
  name: string;
  description: string;
  stats: CaseStat[];
  href: string;
  accent: "teal" | "blue";
}

const cases: CaseCard[] = [
  {
    industry: "Agencia de viajes corporativos",
    name: "MasterViajes",
    description:
      "Migramos su operación de WhatsApp disperso a un CRM unificado. El equipo comercial dejó de pelearse por leads y empezó a cerrarlos.",
    stats: [
      { value: "3.2×", label: "Leads a cliente" },
      { value: "−40%", label: "CAC" },
      { value: "8h/sem", label: "Ahorro por rep" },
    ],
    href: "/casos/master-viajes",
    accent: "teal",
  },
  {
    industry: "Educación internacional",
    name: "Student Travel Center",
    description:
      "Construimos el sistema operativo de revenue desde cero. Hoy procesan 6× más aplicaciones con el mismo equipo — sin contratar a nadie.",
    stats: [
      { value: "6×", label: "Aplicaciones procesadas" },
      { value: "85%", label: "Reducción admin" },
      { value: "0", label: "Leads perdidos" },
    ],
    href: "/casos/student-travel-center",
    accent: "blue",
  },
];

const accentConfig = {
  teal: {
    bar: "bg-[#d4a853]",
    num: "text-[#8a7a4f]",
    border: "hover:border-[#d4a853]/45",
    shadow: "hover:shadow-[0_20px_60px_rgba(212,168,83,0.12)]",
    badge: "bg-v2-surface-sand-mist text-[#8a7a4f]",
    link: "text-[#8a7a4f]",
  },
  blue: {
    bar: "bg-v2-accent-blue",
    num: "text-v2-accent-blue",
    border: "hover:border-v2-accent-blue/40",
    shadow: "hover:shadow-[0_20px_60px_rgba(29,112,162,0.10)]",
    badge: "bg-v2-surface-navy-mist text-v2-accent-blue",
    link: "text-v2-accent-blue",
  },
};

export const CasesV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="default" size="default">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[680px] mx-auto v2-reveal">
            <Eyebrow variant="navy">En operación</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
            >
              Empresas reales,{" "}
              <em className="not-italic text-[#8a7a4f]">
                números reales
              </em>
              .
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body leading-[1.65] mt-4">
              No es un benchmark de industria. Es lo que pasó cuando estos equipos empezaron a operar
              su tecnología en lugar de dejarla sin quien la mueva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            {cases.map((c, ci) => {
              const ac = accentConfig[c.accent];
              return (
                <Link
                  key={c.name}
                  to={c.href}
                  className={[
                    "v2-reveal",
                    `v2-d${ci + 1}`,
                    "group relative bg-white border border-v2-border-subtle rounded-3xl overflow-hidden",
                    "flex flex-col",
                    ac.border,
                    ac.shadow,
                    "hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300",
                  ].join(" ")}
                >
                  {/* Accent top bar */}
                  <div className={`h-1 w-full ${ac.bar}`} />

                  <div className="p-8 md:p-10 flex flex-col flex-1">
                    <span className={`self-start font-lato text-[11px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full ${ac.badge}`}>
                      {c.industry}
                    </span>

                    <h3 className="font-poppins font-bold text-[26px] text-v2-ink-heading mt-4 leading-[1.1]">
                      {c.name}
                    </h3>
                    <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-3">
                      {c.description}
                    </p>

                    {/* Stats */}
                    <div className="mt-8 pt-6 border-t border-v2-border-subtle grid grid-cols-3 gap-4">
                      {c.stats.map((s) => (
                        <div key={s.label}>
                          <div className={`font-poppins font-bold text-[28px] leading-none ${ac.num}`}>
                            {s.value}
                          </div>
                          <div className="font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted mt-2 leading-tight">
                            {s.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <span className={`mt-auto pt-8 inline-flex items-center gap-2 font-lato text-[13px] font-semibold uppercase tracking-widest ${ac.link}`}>
                      Leer caso completo
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="v2-reveal v2-d3 flex justify-center mt-12">
            <Link
              to="/v2/casos"
              className="group inline-flex items-center gap-2 font-lato text-[14px] font-semibold uppercase tracking-widest text-v2-ink-heading hover:text-[#8a7a4f] transition-colors"
            >
              Ver todos los casos
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CasesV2;
