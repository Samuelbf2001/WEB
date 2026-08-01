import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { homeFaqs as faqs } from "../../../../content/faq-home.js";


export const FaqV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt" size="default">
      <Container>
        <div ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left col — sticky label */}
            <div className="lg:col-span-4 v2-reveal">
              <Eyebrow variant="sand">Preguntas frecuentes</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-4"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.01em" }}
              >
                Lo que{" "}
                <em className="not-italic text-[#8a7a4f]">siempre</em>{" "}
                nos preguntan.
              </h2>
              <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-5">
                ¿No ves tu pregunta? Escríbenos por WhatsApp. Respondemos el mismo día: somos Samuel o Ernesto del otro lado, no un chatbot ni un SDR.
              </p>
              <div className="mt-6">
                <Link to="/contacto#agenda">
                  <ButtonV2 variant="outline" size="md">
                    Solicitar Diagnóstico: $2,500
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </Link>
              </div>

              {/* Mini trust block */}
              <div className="mt-10 p-5 rounded-2xl border border-v2-border-subtle bg-white">
                <p className="font-serif italic text-[15px] text-v2-ink-body leading-[1.6]">
                  "Sale del Diagnóstico con un mapa real, un roadmap y la plataforma
                  montada. Si decide que no quiere que la operemos, no pasa nada:
                  se queda con lo que entregamos."
                </p>
                <p className="font-lato text-[12px] text-v2-ink-muted mt-3 uppercase tracking-widest">
                  Samuel Burgos · Founder, Sixteam
                </p>
              </div>
            </div>

            {/* Right col — accordion */}
            <div className="lg:col-span-8 v2-reveal v2-d1">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-v2-border-subtle"
                  >
                    <AccordionTrigger className="font-poppins font-bold text-[16px] text-v2-ink-heading text-left hover:no-underline py-5 hover:text-[#8a7a4f] transition-colors [&[data-state=open]]:text-[#8a7a4f]">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-lato text-[15px] text-v2-ink-body leading-[1.7] pt-1 pb-5">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FaqV2;
