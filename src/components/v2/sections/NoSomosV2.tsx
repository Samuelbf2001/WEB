import { Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── cards data ── */
const cards = [
  {
    index: "01",
    title: "Una agencia",
    body: "Las agencias implementan, te entregan un sistema y se van. Cobran igual funcione o no. Después del go-live, los problemas son tuyos.",
    yes: "SÍ implementamos — pero nos quedamos operando lo que montamos.",
  },
  {
    index: "02",
    title: "Un consultor",
    body: "Los consultores entregan un PDF con recomendaciones. La ejecución queda de tu lado. Pagas por saber qué hacer, sin tener quién lo haga.",
    yes: "SÍ diagnosticamos — pero después corremos lo que recomendamos.",
  },
  {
    index: "03",
    title: "Un software",
    body: "La herramienta sola no opera. El cliente promedio usa el 10% de su CRM. Compras la potencia, pero falta el conductor.",
    yes: "SÍ la usamos — pero el motor con conductor, no la herramienta sola.",
  },
];

export const NoSomosV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="navy-dark" size="default">
      {/* ── aurora orbs ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[600px] h-[600px] opacity-30"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(0,191,165,0.18) 0%, transparent 65%)",
          animation: "v2-aurora-1 12s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 w-[500px] h-[500px] opacity-25"
        style={{
          background:
            "radial-gradient(circle at 30% 70%, rgba(29,112,162,0.22) 0%, transparent 65%)",
          animation: "v2-aurora-2 16s ease-in-out infinite",
        }}
      />

      <Container size="default">
        <div ref={ref}>

          {/* ── header ── */}
          <div className="v2-reveal text-center mx-auto max-w-[720px]">
            <Eyebrow
              variant="teal"
              className="bg-white/10 px-4 py-1.5 rounded-full text-white"
            >
              Lo que NO somos
            </Eyebrow>

            <h2
              className="mt-6 font-poppins font-bold text-white leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              No somos una agencia. No somos consultores.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal">
                  No somos software.
                </em>
              </Underlined>
            </h2>

            <p
              className="mt-6 font-lato text-white/70 leading-[1.65] mx-auto max-w-[600px]"
              style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
            >
              Vendemos que tu operación funcione, mes a mes — con o sin que tu
              equipo esté completo. Esa es la única diferencia que importa.
            </p>
          </div>

          {/* ── three cards ── */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <div
                key={card.index}
                className={`v2-reveal v2-d${i + 1} bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/[0.08] hover:border-v2-accent-teal/30 transition-colors duration-300 flex flex-col`}
              >
                {/* label */}
                <span className="font-lato text-[11px] uppercase tracking-widest text-white/40">
                  Lo que NO somos · {card.index}
                </span>

                {/* strikethrough title */}
                <p
                  className="mt-3 font-poppins font-bold text-[20px] text-white/80 line-through decoration-v2-accent-teal/40"
                  style={{ textDecorationThickness: "2px" }}
                >
                  {card.title}
                </p>

                {/* body */}
                <p className="font-lato text-[14px] text-white/65 leading-[1.65] mt-3 flex-1">
                  {card.body}
                </p>

                {/* divider + yes line */}
                <div className="border-t border-white/10 mt-5 pt-4 flex items-start gap-2">
                  <Check className="h-3.5 w-3.5 text-v2-accent-teal flex-shrink-0 mt-[3px]" />
                  <p className="font-lato text-[13px] text-white/90 leading-[1.55]">
                    {card.yes.split("SÍ").map((part, j, arr) =>
                      j < arr.length - 1 ? (
                        <span key={j}>
                          {part}
                          <strong className="font-bold text-v2-accent-teal">SÍ</strong>
                        </span>
                      ) : (
                        <span key={j}>{part}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── bottom punchline ── */}
          <div className="v2-reveal v2-d4 mt-12 text-center max-w-[700px] mx-auto">
            <span className="font-lato text-[11px] uppercase tracking-widest text-v2-accent-teal">
              Entonces qué somos
            </span>
            <p
              className="mt-4 font-poppins font-bold text-white leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(24px, 3vw, 36px)" }}
            >
              Somos tu equipo externo de tecnología.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal not-italic">
                  Implementamos Y operamos.
                </em>
              </Underlined>
              <br />
              Mes a mes. No te dejamos solo después del go-live.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default NoSomosV2;
