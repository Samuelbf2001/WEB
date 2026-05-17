import { XCircle, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  "Leads que se pierden en hilos de WhatsApp",
  "8-15h/semana del ejecutivo en tareas administrativas",
  "Reportes que llegan los lunes, decisiones que ya pasaron",
  "Notas dispersas entre Notion, Drive y email",
  "Vendedor dedicando 40% del tiempo a admin",
];

const afterTasks: { name: string; label: string; live?: boolean }[] = [
  { name: "AI Call Summary to Sync", label: "Hace 2 min" },
  { name: "Automatic Stage Migration", label: "Live", live: true },
  { name: "Inbox-Driven Lead Routing", label: "Continuo", live: true },
  { name: "Reporte semanal entregado", label: "Lunes 9:00am" },
];

export const CrmComparisonV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt">
      <Container>
        <div ref={ref}>
          <div className="text-center v2-reveal">
            <Eyebrow variant="teal">La comparativa</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading text-center mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Tu CRM: de{" "}
              <em className="font-serif italic font-normal text-v2-accent-sand">
                cementerio
              </em>{" "}
              a{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                motor
              </em>
              .
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* LEFT — Caos Manual */}
            <div className="v2-reveal v2-d1 bg-white border border-v2-border-subtle rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-6 bg-v2-accent-sand-soft text-[#8a7a4f] text-[11px] font-lato font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-v2-border-subtle">
                Antes
              </span>
              <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">
                Caos Manual
              </h3>
              <ul className="flex flex-col gap-3 mt-6">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="h-4 w-4 mt-1 flex-shrink-0 text-v2-ink-muted/40" aria-hidden />
                    <span className="font-lato text-[14px] text-v2-ink-body line-through opacity-70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-lato text-[13px] text-v2-ink-muted italic mt-6">
                Vendedores dedican <strong>40% del tiempo</strong> a admin.
              </p>
            </div>

            {/* RIGHT — After */}
            <div className="v2-reveal v2-d2 bg-v2-ink-heading text-white rounded-2xl p-8 relative shadow-[0_20px_60px_rgba(10,35,66,0.18)] overflow-hidden">
              {/* Subtle teal sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full opacity-30"
                style={{
                  background: "radial-gradient(circle, rgba(0,191,165,0.2) 0%, transparent 70%)",
                }}
              />
              <span className="absolute -top-3 left-6 bg-v2-accent-teal text-v2-ink-heading text-[11px] font-lato font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                Después
              </span>
              <h3 className="font-poppins font-bold text-[22px] text-white">
                Tareas completadas automáticamente
              </h3>
              <p className="font-lato uppercase text-[10px] tracking-widest text-v2-accent-teal mt-2">
                TU CRM EN ESTE MOMENTO
              </p>

              <div className="mt-6">
                {afterTasks.map((task, ti) => (
                  <div
                    key={task.name}
                    className={`v2-slide-right v2-d${ti + 3} flex items-center justify-between gap-3 py-3 border-b border-white/10 last:border-b-0`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-v2-accent-teal/15 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-v2-accent-teal" aria-hidden />
                      </div>
                      <span className="font-lato text-[14px] text-white">
                        {task.name}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-lato text-[11px] uppercase tracking-widest text-v2-accent-teal/80 flex-shrink-0">
                      {task.live && (
                        <span className="v2-pulse-dot w-1.5 h-1.5 rounded-full bg-v2-accent-teal flex-shrink-0" />
                      )}
                      {task.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CrmComparisonV2;
