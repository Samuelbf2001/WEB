import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { FAQS } from './data';

export default function FAQAccordion() {
  return (
    <section id="faq" className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center sm:text-left">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Preguntas frecuentes
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-3xl bg-gradient-to-r from-[#1d70a2]/10 to-[#00bfa5]/8 blur-3xl" />
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              Lo que más nos preguntan en la primera reunión.
            </h2>
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.q}
              value={`item-${i}`}
              className="mb-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] !border-b transition-colors duration-200 hover:border-[#00bfa5]/30"
            >
              <AccordionTrigger className="px-5 py-5 text-left font-poppins text-base font-bold leading-snug text-white hover:no-underline sm:text-[17px]">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 font-lato text-sm leading-relaxed text-white/65 sm:text-[15px]">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
