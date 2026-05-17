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

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "¿Cuánto tiempo toma ver resultados?",
    a: "Los primeros impactos visibles — dashboard limpio, leads ruteados, reportes semanales — llegan entre 3 y 6 semanas. El sistema se expande cada sprint. No vendemos transformaciones de 9 meses con resultados garantizados; vendemos operación viva que mejora semana a semana.",
  },
  {
    q: "¿Trabajan solo con HubSpot o también con otros CRMs?",
    a: "Diseñamos en HubSpot por velocidad, pero también operamos Pipedrive, Salesforce y stacks custom con Make/n8n. La decisión depende de dónde estás hoy y dónde necesitas estar.",
  },
  {
    q: "¿Qué pasa si ya tengo otra agencia o un consultor?",
    a: "Convivimos sin drama. Muchos clientes nos contratan para operar lo que otra agencia diseñó, o para hacer la parte de RevOps mientras otra agencia hace performance. Lo importante es que alguien opere.",
  },
  {
    q: "¿Necesito un equipo técnico interno para trabajar con ustedes?",
    a: "No. El servicio incluye operación completa. Tú nos das contexto, nosotros ejecutamos y entregamos reportes. Si tienes un RevOps interno, mejor — hacemos handoff cuando aplica.",
  },
  {
    q: "¿Cuánto invierto y cómo se factura?",
    a: "Los servicios van desde USD 1,800/mes (módulo único) hasta USD 6,000+/mes (sistema completo). Facturamos mensualmente, sin contratos de permanencia. Después del Radar gratis te damos el rango exacto según tu situación.",
  },
  {
    q: "¿Qué incluye el Radar gratis?",
    a: "Cuestionario corto + revisión de tu stack actual + estimación de dónde están las fugas. Te lo devolvemos en 48h. Sin venta. Si decides no trabajar con nosotros, te queda el diagnóstico para que lo uses como quieras.",
  },
];

export const FaqV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="alt" size="default">
      <Container>
        <div ref={ref}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left col — sticky label */}
            <div className="lg:col-span-4 v2-reveal">
              <Eyebrow variant="teal">Preguntas frecuentes</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-4"
                style={{ fontSize: "clamp(28px, 4vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.01em" }}
              >
                Lo que{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">siempre</em>{" "}
                nos preguntan.
              </h2>
              <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-5">
                ¿No ves tu pregunta? Escríbenos por WhatsApp y te respondemos el mismo día.
              </p>
              <div className="mt-6">
                <Link to="/v2/contacto">
                  <ButtonV2 variant="outline" size="md">
                    Hablar con un experto
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </Link>
              </div>

              {/* Mini trust block */}
              <div className="mt-10 p-5 rounded-2xl border border-v2-border-subtle bg-white">
                <p className="font-serif italic text-[15px] text-v2-ink-body leading-[1.6]">
                  "Si después de 48h te queda solo el diagnóstico y nos dices que no, nos quedamos
                  amigos."
                </p>
                <p className="font-lato text-[12px] text-v2-ink-muted mt-3 uppercase tracking-widest">
                  — Equipo Sixteam.pro
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
                    <AccordionTrigger className="font-poppins font-bold text-[16px] text-v2-ink-heading text-left hover:no-underline py-5 hover:text-v2-accent-teal-deep transition-colors [&[data-state=open]]:text-v2-accent-teal-deep">
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
