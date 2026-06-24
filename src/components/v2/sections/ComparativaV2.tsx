import { X, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── data ── */

interface Row {
  leftLabel: string;
  leftFailure: string;
  leftReaction: string;
  rightBody: string;
  rightAnchor: string;
}

const rows: Row[] = [
  {
    leftLabel: "Una agencia de marketing / CRM",
    leftFailure:
      "Te montan el CRM, las automatizaciones, la web. Te entregan, cobran y se van. Después del go-live, los problemas son tuyos.",
    leftReaction: "ya me pasó la última vez.",
    rightBody:
      "Implementamos igual — y lo decimos. Pero nos quedamos operándolo mes a mes. Si algo se rompe, lo arreglamos nosotros.",
    rightAnchor: "Implementamos Y operamos",
  },
  {
    leftLabel: "Un freelancer / contractor",
    leftFailure:
      "Configura el CRM o arma el chatbot. Por hora o por tarea. Sin visión de sistema, sin continuidad. Cuando termina, se va.",
    leftReaction: "barato por hora, carísimo en resultado.",
    rightBody:
      "No vendemos tareas sueltas. Operamos las tres áreas como un sistema integrado, con responsabilidad sobre el conjunto, mes a mes.",
    rightAnchor: "Sistema, no piezas sueltas",
  },
  {
    leftLabel: "Armar un equipo interno",
    leftFailure:
      "VP Sales + VP Ops + dev + analista. ~$600K USD/año en salarios. Meses para armarlo. Difícil de retener. Y sin la capa de IA.",
    leftReaction: "no tengo ese presupuesto ni ese tiempo.",
    rightBody:
      "Reemplazamos esa función completa desde $1,500/mes. Operando desde la primera semana. Con IA incluida — sin nómina, sin rotación.",
    rightAnchor: "Función completa, fracción del costo",
  },
  {
    leftLabel: "Un consultor / coach",
    leftFailure:
      "Analiza, entrega un deck con recomendaciones. La implementación queda de tu lado. Vendes por saber qué hacer, sin tener quién lo haga.",
    leftReaction: "pago por el informe, sigo sin operación.",
    rightBody:
      "No dejamos un PDF. Implementamos y operamos. Somos responsables de que el sistema funcione — no de que el informe se vea bien.",
    rightAnchor: "Ejecutamos, no aconsejamos",
  },
  {
    leftLabel: "Un fractional VP / CFO",
    leftFailure:
      "Estrategia y dirección senior por un retainer alto. Opera desde afuera — aconseja, no está dentro del pipeline. Sin tecnología, sin IA.",
    leftReaction: "buen criterio, pero sin manos.",
    rightBody:
      "Criterio senior igual de bueno — pero con un motor de IA 24/7 ejecutando debajo. Conductor con motor, no conductor sin auto.",
    rightAnchor: "Criterio + motor IA",
  },
  {
    leftLabel: "Solo software / IA (GHL, ChatGPT)",
    leftFailure:
      "La herramienta o la IA sola. Potente, pero nadie la configura para tu negocio, nadie la opera, nadie le da criterio.",
    leftReaction: "compré, usé el 10%, dije que no funcionó.",
    rightBody:
      "La misma potencia de IA — pero con operadores senior que la configuran para tu negocio, la dirigen y la ajustan cada semana. El motor con alguien al volante.",
    rightAnchor: "Motor con conductor",
  },
];

/* ── component ── */

export const ComparativaV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt" size="spacious">
      <Container>
        <div ref={ref}>

          {/* ── header ── */}
          <div className="v2-reveal text-center max-w-[760px] mx-auto">
            <Eyebrow variant="navy">Por qué Sixteam y no otra opción</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.12] tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 3.8vw, 42px)" }}
            >
              No decides entre Sixteam y nada. Decides entre Sixteam y{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  una de estas seis opciones.
                </em>
              </Underlined>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[620px] mx-auto mt-5 leading-[1.65]">
              Cada alternativa resuelve una pieza. Sixteam es la única que junta
              consultoría + implementación + operación + permanencia + IA +
              criterio senior — a un precio que un negocio mediano sí puede pagar.
            </p>
          </div>

          {/* ── rows ── */}
          <div className="mt-12 flex flex-col gap-5">
            {rows.map((row, i) => (
              <div
                key={i}
                className={`v2-reveal v2-d${(i % 3) + 1} grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-0 rounded-2xl overflow-hidden border border-v2-border-subtle bg-white shadow-[0_4px_24px_rgba(10,35,66,0.05)]`}
              >
                {/* LEFT — alternative */}
                <div className="bg-v2-surface-alt p-6 md:p-7 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-[#e57373]/15 flex items-center justify-center flex-shrink-0">
                      <X className="h-3.5 w-3.5 text-[#c62828]" aria-hidden />
                    </div>
                    <span className="font-poppins font-bold text-[15px] text-v2-ink-heading leading-tight">
                      {row.leftLabel}
                    </span>
                  </div>
                  <p className="font-lato text-[13px] text-v2-ink-muted leading-[1.6] mt-3">
                    {row.leftFailure}
                  </p>
                  <p className="font-serif italic text-[12px] text-v2-ink-muted/80 mt-3">
                    "{row.leftReaction}"
                  </p>
                </div>

                {/* RIGHT — Sixteam */}
                <div className="bg-white border-t-4 md:border-t-0 md:border-l-4 border-v2-accent-teal p-6 md:p-7 flex flex-col">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-v2-accent-teal/15 flex items-center justify-center flex-shrink-0">
                      <Check className="h-3.5 w-3.5 text-v2-accent-teal-deep" aria-hidden />
                    </div>
                    <span className="font-poppins font-bold text-[15px] text-v2-ink-heading leading-tight">
                      Sixteam
                    </span>
                  </div>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-3">
                    {row.rightBody}
                  </p>
                  <p className="font-lato text-[12px] text-v2-accent-teal-deep font-semibold uppercase tracking-wider mt-3">
                    {row.rightAnchor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── closing block ── */}
          <div className="v2-reveal v2-d4 mt-14 text-center">
            <span className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal-deep">
              El patrón
            </span>
            <p
              className="font-poppins font-bold text-v2-ink-heading max-w-[720px] mx-auto mt-3 leading-[1.2] tracking-[-0.015em]"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)" }}
            >
              Ninguna alternativa es mala en sí misma.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  Sixteam es la única que las junta todas
                </em>
              </Underlined>{" "}
              — a un precio que un negocio mediano sí puede pagar.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default ComparativaV2;
