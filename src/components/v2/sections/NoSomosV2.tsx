import { Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── cards data ── */
const cards = [
  {
    index: "01",
    title: "Una agencia tradicional",
    body: "Las agencias implementan, te entregan un sistema y se van. Cobran igual funcione o no. Después del go-live, los problemas son tuyos.",
    yes: "Además de que implementamos, nos encargamos de que se use lo que montamos.",
  },
  {
    index: "02",
    title: "Un consultor común",
    body: "Los consultores entregan un PDF con recomendaciones. La ejecución queda de tu lado. Pagas por saber qué hacer, sin tener quién lo haga.",
    yes: "Además de que diagnosticamos, ejecutamos lo que recomendamos.",
  },
  {
    index: "03",
    title: "Un software cualquiera",
    body: "Para cada solución existen decenas de herramientas que puedan servir. Pero pocos saben identificar el potencial de cada una para generar soluciones que generen resultados.",
    yes: "Además de que lo usamos, no nos casamos con una herramienta sino con los resultados que genera.",
  },
];

export const NoSomosV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt" size="default" className="overflow-hidden">

      {/* Gold aurora orb — top right */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-32 w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: "radial-gradient(circle, rgba(212,168,83,0.22) 0%, transparent 70%)",
          animation: "v2-aurora-1 12s ease-in-out infinite",
        }}
      />
      {/* Blue orb — bottom left */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle at 30% 70%, rgba(29,112,162,0.30) 0%, transparent 65%)",
          animation: "v2-aurora-2 16s ease-in-out infinite",
        }}
      />

      <Container size="default">
        <div ref={ref}>

          {/* ── header ── */}
          <div className="v2-reveal text-center mx-auto max-w-[720px]">
            <Eyebrow variant="sand">Lo que NO somos</Eyebrow>

            <h2
              className="mt-6 font-poppins font-bold text-v2-ink-heading leading-[1.1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              No somos una{" "}
              <em className="font-serif italic font-normal text-[#8a7a4f]">agencia tradicional</em>
              <br />
              ni{" "}
              <em className="font-serif italic font-normal text-[#8a7a4f]">consultores comunes</em>
              ,<br />
              tampoco te ofrecemos un{" "}
              <em className="font-serif italic font-normal text-[#8a7a4f]">software cualquiera</em>
            </h2>
          </div>

          {/* ── three cards ── */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((card, i) => (
              <div
                key={card.index}
                className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:border-[rgba(212,168,83,0.35)] hover:shadow-[0_16px_48px_rgba(212,168,83,0.09)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300 flex flex-col`}
              >
                {/* label */}
                <span className="font-lato text-[11px] uppercase tracking-widest text-v2-ink-muted">
                  Lo que NO somos · {card.index}
                </span>

                {/* strikethrough title */}
                <p
                  className="mt-3 font-poppins font-bold text-[20px] text-v2-ink-body line-through decoration-[#d4a853]/50"
                  style={{ textDecorationThickness: "2px" }}
                >
                  {card.title}
                </p>

                {/* body */}
                <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-3 flex-1">
                  {card.body}
                </p>

                {/* divider + yes line */}
                <div className="border-t border-v2-border-subtle mt-5 pt-4 flex items-start gap-2">
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 mt-[2px]"
                    style={{ background: "rgba(212,168,83,0.14)" }}
                  >
                    <Check className="h-2.5 w-2.5" style={{ color: "#8a7a4f" }} />
                  </div>
                  <p className="font-lato text-[13px] text-v2-ink-body leading-[1.55]">
                    <strong className="font-bold text-[#8a7a4f]">Además</strong>
                    {card.yes.replace("Además", "")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ── bottom punchline ── */}
          <div className="v2-reveal v2-d4 mt-12 text-center max-w-[700px] mx-auto">
            <span className="font-lato text-[11px] uppercase tracking-widest text-[#8a7a4f]">
              Entonces qué somos
            </span>
            <p
              className="mt-4 font-poppins font-bold text-v2-ink-heading leading-[1.2] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Somos el{" "}
              <em className="font-serif italic font-normal text-[#8a7a4f]">equipo de tecnología</em>
              {" "}que siempre has necesitado.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default NoSomosV2;
