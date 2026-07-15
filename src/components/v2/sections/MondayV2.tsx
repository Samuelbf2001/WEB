import { X, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  { text: "Ideas que se quedaron en una libreta, nadie las implementa.", urgent: true },
  { text: "Herramientas compradas que nunca se integraron." },
  { text: "Procesos manuales que solo una persona sabe hacer.", urgent: true },
  { text: "Reportes que tardan días en armarse a mano." },
  { text: "El CRM con datos viejos, nadie quiere actualizarlo." },
  { text: "Cada cambio tecnológico depende de contratar a alguien externo.", urgent: true },
  { text: "El equipo apaga incendios, no construye." },
];

const afterItems = [
  { text: "Ideas convertidas en automatizaciones funcionando en días." },
  { text: "Stack integrado: CRM, email, WhatsApp, ads, web, todo conectado." },
  { text: "Procesos documentados y automatizados, no dependen de personas." },
  { text: "Dashboards en vivo: el reporte ya está listo cuando lo abres." },
  { text: "CRM limpio y actualizado solo, sin que nadie lo toque." },
  { text: "Cambios y mejoras ejecutados por tu equipo Sixteam, sin contratar." },
  { text: "Tu equipo se enfoca en vender y construir, no en operar herramientas." },
];

export const MondayV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="default" size="default">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[680px] mx-auto v2-reveal">
            <Eyebrow variant="teal">El contraste</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Tu negocio sin Sixteam.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                Tu negocio con Sixteam.
              </em>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[580px] mx-auto mt-4 leading-[1.6]">
              El mismo equipo, la misma operación. Lo único que cambia es si la
              tecnología trabaja por tu negocio o si tu equipo trabaja para
              mantener la tecnología viva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {/* BEFORE */}
            <div
              className={[
                "v2-reveal v2-d1",
                "rounded-3xl overflow-hidden border border-v2-border-subtle",
                "shadow-[0_4px_24px_rgba(10,35,66,0.05)]",
              ].join(" ")}
            >
              {/* Header */}
              <div className="bg-[#fdf4f4] border-b border-[#f0d0d0] px-7 py-5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#e57373]/15 flex items-center justify-center flex-shrink-0">
                  <X className="h-4 w-4 text-[#c62828]" aria-hidden />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[15px] text-v2-ink-heading leading-tight">
                    Sin Sixteam
                  </p>
                  <p className="font-lato text-[12px] text-v2-ink-muted mt-0.5">
                    Cómo se ve la operación tech del día a día
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="bg-white px-7 py-6 flex flex-col gap-3">
                {beforeItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-2.5 border-b border-v2-border-subtle last:border-0"
                  >
                    <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-[#e57373]/12">
                      <X className="h-3 w-3 text-[#c62828]" aria-hidden />
                    </div>
                    <span
                      className={[
                        "font-lato text-[14px] leading-[1.55]",
                        item.urgent
                          ? "text-v2-ink-heading font-semibold"
                          : "text-v2-ink-body",
                      ].join(" ")}
                    >
                      {item.text}
                      {item.urgent && (
                        <span className="ml-2 inline-block font-lato text-[10px] font-bold uppercase tracking-widest text-[#c62828] bg-[#e57373]/10 px-1.5 py-0.5 rounded">
                          urgente
                        </span>
                      )}
                    </span>
                  </div>
                ))}

                <p className="font-serif italic text-[13px] text-v2-ink-muted pt-2 leading-relaxed">
                  "Y lo peor: ya pagaste por la mayoría de esas herramientas."
                </p>
              </div>
            </div>

            {/* AFTER */}
            <div
              className={[
                "v2-reveal v2-d2",
                "rounded-3xl overflow-hidden border border-v2-accent-teal/25",
                "shadow-[0_4px_32px_rgba(0,191,165,0.08)]",
              ].join(" ")}
            >
              {/* Header */}
              <div
                className="px-7 py-5 flex items-center gap-3 border-b border-v2-accent-teal/20"
                style={{ background: "rgba(0,191,165,0.06)" }}
              >
                <div className="w-8 h-8 rounded-full bg-v2-accent-teal/15 flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-v2-accent-teal-deep" aria-hidden />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[15px] text-v2-ink-heading leading-tight">
                    Con Sixteam
                  </p>
                  <p className="font-lato text-[12px] text-v2-ink-muted mt-0.5">
                    Cómo se ve cuando tu tech corre operado
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="bg-white px-7 py-6 flex flex-col gap-3">
                {afterItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 py-2.5 border-b border-v2-border-subtle last:border-0"
                  >
                    <div className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 bg-v2-accent-teal/12">
                      <Check className="h-3 w-3 text-v2-accent-teal-deep" aria-hidden />
                    </div>
                    <span className="font-lato text-[14px] text-v2-ink-body leading-[1.55]">
                      {item.text}
                    </span>
                  </div>
                ))}

                <div
                  className="mt-2 flex items-center gap-2 px-3 py-2.5 rounded-xl"
                  style={{ background: "rgba(0,191,165,0.07)", border: "1px solid rgba(0,191,165,0.2)" }}
                >
                  <div className="relative flex-shrink-0">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v2-accent-teal opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-v2-accent-teal" />
                    </span>
                  </div>
                  <p className="font-serif italic text-[13px] text-v2-accent-teal-deep leading-relaxed">
                    "Tu idea entra el lunes. El sistema la está ejecutando el viernes."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom callout */}
          <div className="v2-reveal v2-d3 mt-10 text-center">
            <p className="font-lato text-[15px] text-v2-ink-muted leading-relaxed max-w-[540px] mx-auto">
              Eso no es magia. Es{" "}
              <strong className="text-v2-ink-heading font-semibold">
                un equipo de tecnología externo
              </strong>{" "}
              que convierte tus ideas en sistemas que corren todos los días, sin que tengas que operarlos tú.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MondayV2;
