import { XCircle, Check, RefreshCw } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const beforeItems = [
  "El dueño responde leads desde su WhatsApp.",
  "El seguimiento se hace de memoria, o no se hace.",
  "El equipo opera 'como cada uno entendió'.",
  "Los reportes son una mezcla de Excel y cabeza.",
  "Vendedor dedica 40% del tiempo a tareas admin.",
];

const notWeItems = [
  { false_claim: "Una agencia que implementa y se va." },
  { false_claim: "Consultores que dejan un PDF y desaparecen." },
  { false_claim: "Vendedores de software." },
];

const weDoItems: { name: string; label: string; live?: boolean }[] = [
  { name: "Pipeline operado en tiempo real", label: "Continuo", live: true },
  { name: "Seguimiento sin leads perdidos", label: "Cada día", live: true },
  { name: "Reporte claro cada lunes", label: "Lunes 9:00am" },
  { name: "Entrenamos al nuevo si alguien se va", label: "Siempre" },
];

export const CrmComparisonV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt">
      <Container>
        <div ref={ref}>
          <div className="text-center v2-reveal">
            <Eyebrow variant="teal">Lo que cambia</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading text-center mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              La diferencia entre{" "}
              <em className="font-serif italic font-normal text-v2-accent-sand">
                intuición
              </em>{" "}
              y{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                sistema.
              </em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {/* LEFT — Before: the chaos */}
            <div className="v2-reveal v2-d1 bg-white border border-v2-border-subtle rounded-2xl p-8 relative">
              <span className="absolute -top-3 left-6 bg-v2-accent-sand-soft text-[#8a7a4f] text-[11px] font-lato font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-v2-border-subtle">
                Ahora mismo
              </span>
              <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading mt-2">
                Operación por intuición
              </h3>
              <p className="font-lato text-[13px] text-v2-ink-muted mt-1">
                Funciona hasta cierto punto. Después se traba.
              </p>
              <ul className="flex flex-col gap-3 mt-6">
                {beforeItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle
                      className="h-4 w-4 mt-0.5 flex-shrink-0 text-v2-ink-muted/30"
                      aria-hidden
                    />
                    <span className="font-lato text-[14px] text-v2-ink-body opacity-65 line-through">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* What we are NOT */}
              <div className="mt-8 pt-6 border-t border-v2-ink-heading/6">
                <p className="font-lato text-[11px] uppercase tracking-[0.18em] text-v2-ink-muted mb-4">
                  Tampoco somos esto
                </p>
                <ul className="flex flex-col gap-2.5">
                  {notWeItems.map((ni) => (
                    <li
                      key={ni.false_claim}
                      className="flex items-start gap-3"
                    >
                      <XCircle
                        className="h-4 w-4 mt-0.5 flex-shrink-0 text-v2-ink-muted/30"
                        aria-hidden
                      />
                      <span className="font-lato text-[13px] text-v2-ink-muted opacity-60 line-through">
                        {ni.false_claim}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT — After: with Sixteam */}
            <div className="v2-reveal v2-d2 bg-v2-ink-heading text-white rounded-2xl p-8 relative shadow-[0_20px_60px_rgba(10,35,66,0.18)] overflow-hidden">
              {/* Teal sheen */}
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-72 h-72 rounded-full opacity-30"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,191,165,0.2) 0%, transparent 70%)",
                }}
              />
              <span className="absolute -top-3 left-6 bg-v2-accent-teal text-v2-ink-heading text-[11px] font-lato font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                Con Sixteam.pro
              </span>

              <h3 className="font-poppins font-bold text-[22px] text-white mt-2 leading-[1.2] relative">
                No implementamos y desaparecemos.
              </h3>
              <p className="font-lato text-[14px] text-white/60 mt-2 leading-[1.6] relative">
                Si algo se rompe, lo arreglamos. Si tu equipo cambia,
                entrenamos al nuevo.
              </p>

              {/* Live operations */}
              <div className="mt-7 relative">
                <p className="font-lato text-[10px] uppercase tracking-widest text-v2-accent-teal mb-4">
                  Lo que operamos, mes a mes
                </p>
                {weDoItems.map((task, ti) => (
                  <div
                    key={task.name}
                    className={`v2-slide-right v2-d${ti + 3} flex items-center justify-between gap-3 py-3.5 border-b border-white/8 last:border-b-0`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-v2-accent-teal/15 flex items-center justify-center flex-shrink-0">
                        <Check
                          className="h-3.5 w-3.5 text-v2-accent-teal"
                          aria-hidden
                        />
                      </div>
                      <span className="font-lato text-[14px] text-white">
                        {task.name}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 font-lato text-[11px] uppercase tracking-widest text-v2-accent-teal/70 flex-shrink-0">
                      {task.live && (
                        <span className="v2-pulse-dot w-1.5 h-1.5 rounded-full bg-v2-accent-teal flex-shrink-0" />
                      )}
                      {task.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* The promise */}
              <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10 relative flex items-start gap-3">
                <RefreshCw className="h-4 w-4 text-v2-accent-teal mt-0.5 flex-shrink-0" aria-hidden />
                <p className="font-lato text-[13px] text-white/65 leading-[1.6]">
                  Operamos tu tecnología para que tu negocio{" "}
                  <strong className="text-white">funcione</strong>, mes a mes, con
                  o sin que tu equipo esté completo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CrmComparisonV2;
