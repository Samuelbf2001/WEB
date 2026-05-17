import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const crafts = [
  {
    label: "Calificar un lead",
    description: "Determinar cuál vale tiempo y cuál no, sin gastar el de tu equipo.",
  },
  {
    label: "Estructurar el seguimiento",
    description: "Cuándo, cómo y por qué canal — no cada uno como cree que se hace.",
  },
  {
    label: "Medir la conversión",
    description: "No visitas al Excel los lunes. Métricas que mueven decisiones.",
  },
  {
    label: "Mantener un cliente activo",
    description: "Retención no es CX. Es pipeline. Es operación. Es oficio.",
  },
];

export const WhyItHappensV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="cream" size="spacious">
      <Container size="default">
        <div ref={ref}>
          {/* Eyebrow */}
          <div className="v2-reveal">
            <Eyebrow variant="navy">Por qué pasa</Eyebrow>
          </div>

          {/* Big heading — fills the viewport moment */}
          <h2
            className="v2-reveal v2-d1 mt-5 font-poppins font-bold text-v2-ink-heading leading-[1.05] tracking-[-0.03em] max-w-[900px]"
            style={{ fontSize: "clamp(36px, 5.5vw, 62px)" }}
          >
            Aprendiste tu oficio.{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal-deep">
              No el oficio de operar ventas.
            </em>
          </h2>

          {/* Two-column layout: insight text + craft list */}
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            {/* LEFT — Explanatory text */}
            <div className="v2-reveal v2-d2">
              <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.7]">
                Probablemente eres muy bueno en lo que vendes. Tus clientes lo
                saben. Pero operar un equipo comercial — con pipeline limpio,
                seguimiento sistemático y reportes que sirven — eso es un{" "}
                <strong className="text-v2-ink-heading font-semibold">
                  oficio completamente aparte.
                </strong>
              </p>

              <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.7] mt-6">
                No se aprende en el día a día de vender. Se construye con
                metodología, herramientas y — sobre todo — con alguien que lo
                haya hecho antes.
              </p>

              {/* The big contrast statement */}
              <div className="mt-10 p-8 rounded-2xl bg-v2-ink-heading text-white relative overflow-hidden">
                {/* Teal accent orb */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 70%)",
                  }}
                />
                <p
                  className="font-poppins font-bold text-white leading-[1.2] tracking-[-0.02em] relative"
                  style={{ fontSize: "clamp(18px, 2.2vw, 24px)" }}
                >
                  Las empresas que crecen más rápido no tienen{" "}
                  <em className="font-serif italic font-normal text-white/60">
                    mejor producto.
                  </em>
                </p>
                <p
                  className="font-poppins font-bold leading-[1.2] tracking-[-0.02em] mt-2 relative"
                  style={{ fontSize: "clamp(20px, 2.6vw, 28px)" }}
                >
                  Tienen mejor{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal">
                    sistema comercial.
                  </em>
                </p>
              </div>
            </div>

            {/* RIGHT — The 4 crafts */}
            <div className="v2-reveal v2-d3">
              <p className="font-lato text-[12px] uppercase tracking-[0.2em] text-v2-ink-muted mb-6">
                Lo que es un oficio aparte
              </p>
              <ol className="flex flex-col gap-0">
                {crafts.map((craft, i) => (
                  <li
                    key={craft.label}
                    className={`v2-reveal v2-d${i + 3} flex gap-5 py-6 ${
                      i < crafts.length - 1
                        ? "border-b border-v2-ink-heading/8"
                        : ""
                    }`}
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/20 flex items-center justify-center font-poppins font-bold text-[13px] text-v2-accent-teal-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.3]">
                        {craft.label}
                      </p>
                      <p className="font-lato text-[14px] text-v2-ink-muted leading-[1.6] mt-1.5">
                        {craft.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyItHappensV2;
