import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Testimonial {
  quote: string;
  initials: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Antes vivíamos en WhatsApp. Hoy todo el equipo opera desde el mismo tablero. Sixteam no nos vendió software, nos vendió método.",
    initials: "JR",
    name: "Juan Restrepo",
    role: "Fundador · MasterViajes",
  },
  {
    quote:
      "Pensé que necesitaba contratar un VP de Sales. Resultó que necesitaba operar bien el CRM que ya tenía. El ROI fue inmediato.",
    initials: "MA",
    name: "María Acevedo",
    role: "CEO · Student Travel Center",
  },
  {
    quote:
      "Lo distinto es que ellos operan, no solo configuran. Cada lunes llega el reporte sin que tenga que pedirlo. Eso vale oro.",
    initials: "DC",
    name: "Diego Castillo",
    role: "COO · Empresa de servicios B2B",
  },
];

const tDelays = ["", "v2-d2", "v2-d4"];

export const TestimonialsV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="sand-mist" size="default">
      <Container>
        <div ref={ref}>
          <div className="text-center max-w-[640px] mx-auto v2-reveal">
            <Eyebrow variant="sand">Voces que importan</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
            >
              Lo que dicen los{" "}
              <em className="not-italic text-[#8a7a4f]">founders</em>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
            {testimonials.map((t, ti) => (
              <article
                key={t.name}
                className={[
                  "v2-reveal",
                  tDelays[ti],
                  "group bg-white border border-v2-border-subtle rounded-2xl p-7 flex flex-col",
                  "shadow-[0_4px_24px_rgba(10,35,66,0.03)]",
                  "hover:shadow-[0_16px_48px_rgba(10,35,66,0.07)] hover:-translate-y-1",
                  "transition-[transform,box-shadow] duration-300",
                ].join(" ")}
              >
                <span className="font-serif italic text-[72px] leading-none text-[#d4a853]/35 group-hover:text-[#d4a853]/55 transition-colors duration-300 block -mt-2 -mb-3">
                  "
                </span>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7]">{t.quote}</p>

                <div className="mt-auto pt-6 border-t border-v2-border-subtle flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-v2-surface-sand-mist group-hover:bg-[#d4a853] transition-colors duration-300 flex items-center justify-center font-poppins font-bold text-[#8a7a4f] group-hover:text-white transition-[color] text-[14px] flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-poppins font-semibold text-[14px] text-v2-ink-heading leading-tight">
                      {t.name}
                    </div>
                    <div className="font-lato text-[12px] text-v2-ink-muted mt-0.5">{t.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsV2;
