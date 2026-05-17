import { Link } from "react-router-dom";
import { ArrowRight, XCircle, AlertTriangle } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const problemItems = [
  "El dueño responde leads desde su WhatsApp personal.",
  "El seguimiento se hace de memoria — o no se hace.",
  "El equipo opera 'como cada uno entendió'.",
  "Los reportes son una mezcla de Excel y cabeza.",
];

export const ProblemStatV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="navy-dark" size="spacious" className="overflow-hidden">
      {/* Aurora orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(0,191,165,0.12) 0%, transparent 60%)",
          animation: "v2-aurora-1 16s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(29,112,162,0.18) 0%, transparent 60%)",
          animation: "v2-aurora-2 20s ease-in-out infinite",
        }}
      />
      {/* Subtle diagonal texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <Container size="default" className="relative">
        <div ref={ref}>
          {/* Eyebrow */}
          <div className="v2-reveal">
            <Eyebrow variant="teal">El problema real</Eyebrow>
          </div>

          <h2
            className="v2-reveal v2-d1 mt-5 font-poppins font-bold text-white leading-[1.1] tracking-[-0.03em] max-w-[800px]"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            La mayoría de empresas operan su parte{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">
              comercial por intuición.
            </em>
          </h2>

          {/* Two-column layout: problem list + contrast stat */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT — Problem list */}
            <div className="v2-reveal v2-d2">
              <p className="font-lato text-[13px] uppercase tracking-[0.18em] text-white/40 mb-6">
                Te suena conocido?
              </p>
              <ul className="flex flex-col gap-5">
                {problemItems.map((item, i) => (
                  <li
                    key={item}
                    className={`v2-reveal v2-d${i + 2} flex items-start gap-4`}
                  >
                    <div className="flex-shrink-0 mt-0.5 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                      <XCircle className="h-3.5 w-3.5 text-white/30" aria-hidden />
                    </div>
                    <span className="font-lato text-[17px] leading-[1.55] text-white/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Warning note */}
              <div className="mt-8 flex items-start gap-3 p-4 rounded-xl border border-v2-accent-teal/20 bg-v2-accent-teal/5">
                <AlertTriangle className="h-4 w-4 text-v2-accent-teal/60 mt-0.5 flex-shrink-0" aria-hidden />
                <p className="font-lato text-[13px] text-white/50 leading-[1.6]">
                  Funciona hasta cierto punto.{" "}
                  <span className="text-white/80">
                    Después el crecimiento se traba — y no sabes exactamente dónde.
                  </span>
                </p>
              </div>

              <Link
                to="/v2/radar"
                className="group inline-flex items-center gap-2 mt-8 font-lato text-[13px] uppercase tracking-widest text-v2-accent-teal hover:text-white transition-colors duration-200"
              >
                Diagnóstica tu operación gratis
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>

            {/* RIGHT — Contrast stat + pull quote */}
            <div className="v2-reveal v2-d3 lg:pl-8 lg:border-l border-white/10">
              {/* Giant number */}
              <div>
                <p
                  className="font-poppins font-bold text-v2-accent-teal leading-none"
                  style={{
                    fontSize: "clamp(72px, 12vw, 140px)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  20–30%
                </p>
                <p className="mt-2 font-lato text-[15px] text-white/50 leading-[1.6] max-w-[320px]">
                  del revenue potencial que una empresa B2B promedio deja sobre
                  la mesa — cada mes — por no tener su operación comercial en
                  orden.
                </p>
              </div>

              {/* Separator */}
              <div className="my-8 w-12 h-px bg-white/15" />

              {/* Mini stats */}
              <div className="flex flex-col gap-6">
                {[
                  { value: "40%", label: "del tiempo del vendedor se va en tareas administrativas" },
                  { value: "3–5×", label: "más leads cierran cuando hay seguimiento estructurado" },
                ].map((s) => (
                  <div key={s.value} className="flex items-start gap-4">
                    <span className="font-poppins font-bold text-[28px] leading-none text-white flex-shrink-0">
                      {s.value}
                    </span>
                    <p className="font-lato text-[13px] text-white/45 leading-[1.55] pt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Closing dramatic line */}
              <blockquote
                className="mt-10 font-serif italic leading-[1.3] text-white/90"
                style={{ fontSize: "clamp(22px, 2.8vw, 30px)" }}
              >
                "Crece hasta cierto punto.
                <br />
                <em className="text-v2-accent-teal not-italic font-serif italic">
                  Después se traba.
                </em>
                "
              </blockquote>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProblemStatV2;
