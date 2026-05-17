import { Cpu, Users, Check, Zap } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const aiItems = [
  "Limpieza y de-duplicación de CRM en tiempo real",
  "Lead scoring y enrichment continuo",
  "Routing automático al vendedor correcto",
  "Resúmenes de reuniones y extracción de next steps",
  "Detección de leads sin seguimiento",
];

const expertItems = [
  "Diseño de arquitectura de datos y blueprints",
  "Alineación estratégica Sales ↔ Marketing",
  "Resolución de casos complejos y auditorías",
  "Entrenamiento al equipo cuando alguien rota",
  "QBR trimestral de roadmap de revenue",
];

export const BestOfBothV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="default" size="default" className="overflow-hidden">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
            <Eyebrow variant="navy">Por qué funciona</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Velocidad de máquina.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                Criterio humano.
              </em>
            </h2>
            <p className="font-lato text-[16px] text-v2-ink-body mt-3 leading-relaxed">
              Ninguno de los dos sirve solo. IA sin expertos alucina. Expertos sin IA se ahogan en admin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-0 max-w-[1000px] mx-auto rounded-3xl overflow-hidden shadow-[0_24px_72px_rgba(10,35,66,0.10)]">
            {/* LEFT — IA: navy dark */}
            <div className="v2-reveal v2-d1 bg-v2-ink-heading relative overflow-hidden p-8 md:p-10">
              {/* teal orb */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-20"
                style={{ background: "radial-gradient(circle, #00bfa5 0%, transparent 70%)" }}
              />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-v2-accent-teal/15 border border-v2-accent-teal/25 flex items-center justify-center">
                  <Cpu className="h-5 w-5 text-v2-accent-teal" aria-hidden />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <span className="v2-pulse-dot w-2 h-2 rounded-full bg-v2-accent-teal flex-shrink-0" />
                  <span className="font-lato text-[11px] uppercase tracking-widest text-v2-accent-teal">
                    En tiempo real
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-[22px] text-white mt-3 leading-[1.2]">
                  Lo que hace la IA
                </h3>
                <p className="font-lato text-[13px] text-white/50 mt-1">
                  Velocidad y escala sin errores manuales.
                </p>

                <ul className="flex flex-col gap-3 mt-7">
                  {aiItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-v2-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-v2-accent-teal" aria-hidden />
                      </div>
                      <span className="font-lato text-[14px] text-white/75 leading-[1.55]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — Expertos: warm cream */}
            <div className="v2-reveal v2-d2 bg-v2-surface-sand-mist relative overflow-hidden p-8 md:p-10 border-l border-v2-border-subtle">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-white border border-v2-border-subtle flex items-center justify-center shadow-sm">
                  <Users className="h-5 w-5 text-[#8a7a4f]" aria-hidden />
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-[#d4a853]" aria-hidden />
                  <span className="font-lato text-[11px] uppercase tracking-widest text-[#8a7a4f]">
                    Criterio estratégico
                  </span>
                </div>

                <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading mt-3 leading-[1.2]">
                  Lo que hacen los expertos
                </h3>
                <p className="font-lato text-[13px] text-v2-ink-muted mt-1">
                  Decisiones que no se pueden automatizar.
                </p>

                <ul className="flex flex-col gap-3 mt-7">
                  {expertItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#d4a853]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-[#8a7a4f]" aria-hidden />
                      </div>
                      <span className="font-lato text-[14px] text-v2-ink-body leading-[1.55]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom formula */}
          <p className="v2-reveal v2-d3 text-center font-lato text-[13px] uppercase tracking-widest text-v2-ink-muted mt-10">
            Process&nbsp;+&nbsp;Technology&nbsp;+&nbsp;People&nbsp;
            <span className="text-v2-accent-teal-deep">=&nbsp;Growth</span>
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BestOfBothV2;
