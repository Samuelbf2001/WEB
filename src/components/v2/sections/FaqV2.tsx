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
    q: "¿Cómo arranca trabajar con Sixteam?",
    a: "Por el Diagnóstico Sixteam. Son 2 semanas, $2,500 USD único. Mapeamos cómo opera hoy tu parte comercial, marketing y servicio; te entregamos el roadmap priorizado; y dejamos la plataforma base montada. Después decides si quieres que la operemos mes a mes — pero no es obligatorio. ~50% de los clientes continúan en Ops.",
  },
  {
    q: "¿Cuánto cuesta operar con ustedes mes a mes?",
    a: "Después del Diagnóstico, los planes de Ops van desde $1,500 USD/mes (Arranque, hasta $1M de facturación), $3,000/mes (Core, $1M–$3M) y $5,500/mes (Plus, $3M–$8M). Precio fijo, público, sin cotizaciones a medida. Facturamos mensual; contrato anual porque un BPO necesita tiempo para estabilizarse.",
  },
  {
    q: "¿En qué se diferencian de una agencia de marketing o CRM?",
    a: "La agencia implementa y se va. Nosotros implementamos Y nos quedamos operando lo que montamos. Si algo se rompe, lo arreglamos. Si tu equipo cambia, entrenamos al nuevo. Operamos las 3 áreas — comercial, marketing y servicio — en un solo contrato. Esa es toda la diferencia, y es la única que importa.",
  },
  {
    q: "¿Trabajan con cualquier CRM o solo con HubSpot/GoHighLevel?",
    a: "Operamos sobre lo que ya tienes — HubSpot, Pipedrive, Salesforce, GoHighLevel, GHL, o un stack custom con Make/n8n. Si tu setup actual sirve, lo operamos; si no, en el Diagnóstico te decimos qué cambiar y por qué. No vendemos licencias.",
  },
  {
    q: "¿Para qué tipo de empresa funciona Sixteam?",
    a: "Empresas que facturan entre $300K y $8M USD/año, con equipo de 5 a 30 personas, en uno de tres verticales donde ya tenemos playbooks: (1) agencias de viaje y turismo, (2) servicios profesionales con cita — salud, legal, estético, contable — y (3) inmobiliarias y constructoras. Si tu negocio no encaja, el Diagnóstico lo evalúa; si no calza, no lo tomamos.",
  },
  {
    q: "¿Quién opera mi cuenta — ustedes o un junior?",
    a: "Samuel y Ernesto, todo el tiempo. No hay rotación de cuenta ni handoff a juniors. Más 6 agentes IA especializados (Alfa, Bravo, Charlie, Delta, Echo, Foxtrot) que ejecutan lo cotidiano 24/7. El criterio senior es responsabilidad personal, no un escalado interno.",
  },
  {
    q: "¿Y si después de un mes no me gusta?",
    a: "Garantía de 30 días money-back en el primer mes de Ops. Y si después de los 30 días quieres cancelar, te puedes ir cuando quieras sin penalidad. El Diagnóstico no es reembolsable porque te quedas con el mapa y la plataforma — entregables tangibles — pero no hay ninguna obligación de continuar.",
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
                ¿No ves tu pregunta? Escríbenos por WhatsApp. Respondemos el mismo día — somos Samuel o Ernesto del otro lado, no un chatbot ni un SDR.
              </p>
              <div className="mt-6">
                <Link to="/v2/contacto">
                  <ButtonV2 variant="outline" size="md">
                    Solicitar Diagnóstico — $2,500
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </Link>
              </div>

              {/* Mini trust block */}
              <div className="mt-10 p-5 rounded-2xl border border-v2-border-subtle bg-white">
                <p className="font-serif italic text-[15px] text-v2-ink-body leading-[1.6]">
                  "Sale del Diagnóstico con un mapa real, un roadmap y la plataforma
                  montada. Si decide que no quiere que la operemos, no pasa nada —
                  se queda con lo que entregamos."
                </p>
                <p className="font-lato text-[12px] text-v2-ink-muted mt-3 uppercase tracking-widest">
                  — Samuel Burgos · Founder, Sixteam
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
