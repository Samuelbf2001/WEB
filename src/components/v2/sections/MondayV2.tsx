import { X, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  { text: "Actualizar CRM con notas de ayer", urgent: true },
  { text: "Responder leads del fin de semana", urgent: true },
  { text: "Enviar propuesta que quedó pendiente" },
  { text: "Reenviar correo sin respuesta desde hace 8 días" },
  { text: "Revisar qué oportunidades están vencidas", urgent: true },
  { text: "Armar reporte de ventas para el jefe" },
  { text: "Reunión de status de 1 hora para ver qué pasó" },
];

const afterItems = [
  { text: "Pipeline limpio y actualizado al abrir el CRM" },
  { text: "Leads del fin de semana enrutados y en seguimiento" },
  { text: "Propuesta enviada automáticamente con recordatorio programado" },
  { text: "Seguimiento ejecutado por la automatización" },
  { text: "Alertas enviadas a cada rep con sus oportunidades vencidas" },
  { text: "Reporte ejecutivo en tu inbox desde las 9am" },
  { text: "Reporte listo — la reunión dura 15 minutos" },
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
              Lunes sin Sixteam.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                Lunes con Sixteam.
              </em>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[580px] mx-auto mt-4 leading-[1.6]">
              El mismo equipo, el mismo lunes. Lo único que cambia es si el sistema
              trabaja contigo o contra ti.
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
                    Lista mental del lunes por la mañana
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
                  "Y esto sin contar los imprevistos que aparecen antes del mediodía."
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
                    Lo que ya está hecho cuando llegas
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
                    "El sistema operó todo el fin de semana sin que nadie lo supervisara."
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
                un sistema bien operado
              </strong>{" "}
              que trabaja mientras tú duermes.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MondayV2;
