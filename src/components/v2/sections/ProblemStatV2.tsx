import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const ProblemStatV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="navy-dark" size="spacious" className="overflow-hidden">
      {/* Animated brand gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(0,191,165,0.15) 0%, transparent 60%)",
          animation: "v2-aurora-1 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(29,112,162,0.2) 0%, transparent 60%)",
          animation: "v2-aurora-2 20s ease-in-out infinite",
        }}
      />
      {/* Diagonal line texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <Container size="default" className="relative">
        <div ref={ref} className="flex flex-col items-center text-center">
          <div className="v2-reveal">
            <Eyebrow variant="teal" className="text-v2-accent-teal">
              El costo invisible
            </Eyebrow>
          </div>

          <h2 className="v2-reveal v2-d1 mx-auto mt-6 max-w-[820px] font-poppins font-medium text-[28px] md:text-[36px] leading-tight text-white/85">
            Una empresa B2B promedio pierde
          </h2>

          {/* HUGE number — the focal moment */}
          <div className="v2-scale v2-d2 relative mt-4 mb-4">
            <p
              className="font-poppins font-bold text-v2-accent-teal"
              style={{
                fontSize: "clamp(80px, 14vw, 180px)",
                lineHeight: "1",
                letterSpacing: "-0.04em",
              }}
            >
              20–30%
            </p>
            <em className="block font-serif italic font-normal text-white/55 text-[22px] md:text-[28px] mt-2">
              de su revenue potencial
            </em>
          </div>

          <p className="v2-reveal v2-d3 mx-auto mt-4 max-w-[680px] font-lato text-[18px] md:text-[20px] leading-[1.65] text-white/70">
            ...perdido cada mes por procesos manuales, leads sin seguimiento
            y reportes que llegan cuando ya no sirven.
          </p>

          {/* Mini stats row */}
          <div className="v2-reveal v2-d4 mt-14 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 rounded-2xl overflow-hidden w-full max-w-[680px]">
            {[
              { value: "40%", label: "del tiempo del vendedor en admin" },
              { value: "3–5x", label: "más leads que cierran con seguimiento" },
              { value: "90 días", label: "para ver el primer retorno" },
            ].map((s) => (
              <div key={s.label} className="bg-v2-ink-heading/80 backdrop-blur px-6 py-6 text-center">
                <p className="font-poppins font-bold text-[32px] leading-none text-v2-accent-teal">
                  {s.value}
                </p>
                <p className="mt-2 font-lato text-[11px] uppercase tracking-widest text-white/50 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <p className="v2-reveal v2-d5 mt-12 font-serif italic text-[18px] text-white/50">
            Calculamos tu fuga en menos de 48 horas.
          </p>

          <Link
            to="/v2/radar"
            className="v2-reveal v2-d6 group inline-flex items-center gap-2 mt-6 font-lato text-[14px] uppercase tracking-widest text-v2-accent-teal hover:text-white transition-colors duration-200"
          >
            Ver cómo lo medimos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default ProblemStatV2;
