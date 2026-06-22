import { Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";
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
              No somos una{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">agencia tradicional</em>
              {" "}ni{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">consultores comunes</em>
              , tampoco te ofrecemos un{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">software cualquiera</em>
            </h2>

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
                    <strong className="font-bold text-v2-accent-teal">Además</strong>
                    {card.yes.replace("Además", "")}
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
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              Somos el{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">equipo de tecnología</em>
              {" "}que siempre has necesitado. Implementamos{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">estratégicamente</em>
              {" "}y operamos{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">entendiendo</em>
              {" "}el contexto de tu negocio.
            </p>
            <p
              className="mt-5 font-lato text-white/70 leading-[1.65] mx-auto max-w-[560px]"
              style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}
            >
              Somos los socios estratégicos que desarrollan soluciones basadas en la realidad de tu negocio.
            </p>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default NoSomosV2;
