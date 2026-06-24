import { Link } from "react-router-dom";
import { ArrowRight, Search, Database, Layers, Palette, Shield, Check, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import PricingV2 from "@/components/v2/sections/PricingV2";

/* ── Data ── */

const addons = [
  {
    icon: Search,
    title: "Diagnóstico Sixteam",
    price: "$2,500 USD one-time",
    desc: "Mapeo agéntico de tu operación + roadmap cuantificado de 90 días.",
  },
  {
    icon: Database,
    title: "Migración de CRM",
    price: "desde $3,500 USD",
    desc: "Te movemos de tu CRM actual a HubSpot/Pipedrive/GHL sin perder data.",
  },
  {
    icon: Layers,
    title: "Setup de stack completo",
    price: "desde $4,500 USD",
    desc: "Conectamos todo: CRM + email + WhatsApp + ads + web + reportes. Listo para operar.",
  },
  {
    icon: Palette,
    title: "Diseño de marca y materiales",
    price: "desde $1,800 USD",
    desc: "Identidad visual, presentaciones, plantillas y material promocional listos para usar.",
  },
];

const tableRows = [
  {
    label: "Costo mensual",
    interno: "$10K–18K USD",
    freelance: "$3K–5K USD",
    sixteam: "$3K USD",
    sixteamCheck: false,
  },
  {
    label: "Tiempo de arranque",
    interno: "3–6 meses",
    freelance: "2–4 semanas",
    sixteam: "48 horas",
    sixteamCheck: false,
  },
  {
    label: "Cobertura del stack",
    interno: "Solo lo que sepa",
    freelance: "Tarea aislada",
    sixteam: "Todo: CRM, web, ads, IA, automatizaciones, content, reportes",
    sixteamCheck: false,
  },
  {
    label: "Agentes IA incluidos",
    interno: null,
    freelance: null,
    sixteam: "4 agentes 24/7",
    sixteamCheck: false,
  },
  {
    label: "Reportes ejecutivos",
    interno: "Tú los armas",
    freelance: null,
    sixteam: "Cada lunes 9am",
    sixteamCheck: false,
  },
  {
    label: "Garantía",
    interno: "Período de prueba",
    freelance: null,
    sixteam: "30 días money-back",
    sixteamCheck: true,
  },
  {
    label: "Permanencia",
    interno: "Indefinido",
    freelance: "Por proyecto",
    sixteam: "Mes a mes",
    sixteamCheck: true,
  },
];

const faqs = [
  {
    q: "¿Qué incluye cada plan?",
    a: "Todos los planes incluyen acceso al equipo (humanos + agentes IA), Slack directo, reporte ejecutivo semanal, y operación de los frentes especificados. La diferencia entre planes es cuántos frentes operamos en paralelo y la prioridad de entrega.",
  },
  {
    q: "¿Puedo subir o bajar de plan?",
    a: "Sí. Cambias con 30 días de aviso. Si subes, empezamos inmediatamente el nuevo plan y prorrateamos. Si bajas, esperas al siguiente ciclo.",
  },
  {
    q: "¿Hay setup fee?",
    a: "No para los planes mensuales. Si tu operación necesita una migración o un setup completo de stack, son add-ons one-time (ver sección de arriba). El Radar gratis y la llamada de alineación son sin costo.",
  },
  {
    q: "¿En qué moneda facturan?",
    a: "USD. Aceptamos tarjeta internacional, transferencia bancaria y PayPal. Para clientes en Colombia, también ofrecemos facturación local.",
  },
  {
    q: "¿Y si necesito más de lo que cubre Plus?",
    a: "Tenemos un Enterprise hecho a medida. Equipo dedicado, SLA personalizado, integraciones específicas. Habla con nosotros para una propuesta.",
  },
  {
    q: "¿La garantía aplica si pago anual?",
    a: "Sí. Si en los primeros 30 días no ves valor, te devolvemos el 100% del año. Después de los 30 días, no hay reembolso de los meses ya consumidos pero puedes cancelar sin penalidad.",
  },
];

/* ── Page ── */

const PreciosV2 = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();
  const ref4 = useScrollReveal<HTMLDivElement>();
  const ref5 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>

      {/* ── Section 1: Hero ── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.1) 0%, transparent 70%)",
            animation: "v2-aurora-1 16s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="relative text-center pt-8">
          <div ref={ref1}>
            <div className="v2-reveal">
              <Eyebrow variant="teal">Precios</Eyebrow>
            </div>
            <h1
              className="v2-reveal v2-d1 font-poppins font-black text-v2-ink-heading mt-4"
              style={{ fontSize: "clamp(36px, 7vw, 64px)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
            >
              Un equipo de tecnología completo.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  Por menos que un solo hire.
                </em>
              </Underlined>
            </h1>
            <p className="v2-reveal v2-d2 font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[600px] mx-auto">
              Reemplaza +$10K USD/mes en contrataciones internas. Humanos senior + agentes IA operando tu stack. Sin contratos de permanencia, sin sorpresas.
            </p>

            {/* Stat strip */}
            <div className="v2-reveal v2-d3 mt-8 flex flex-col sm:flex-row items-center justify-center gap-0 divide-y sm:divide-y-0 sm:divide-x divide-v2-border-medium bg-v2-surface-alt border border-v2-border-subtle rounded-2xl overflow-hidden">
              <div className="w-full sm:w-auto px-6 py-4 text-center">
                <p className="font-lato text-[13px] text-v2-ink-muted">Equipo interno</p>
                <p className="font-poppins font-bold text-[15px] text-v2-ink-heading mt-0.5">$10K+ /mes · 3–6 meses para contratar</p>
              </div>
              <div className="w-full sm:w-auto px-6 py-4 text-center">
                <p className="font-lato text-[13px] text-v2-ink-muted">Freelancers sueltos</p>
                <p className="font-poppins font-bold text-[15px] text-v2-ink-heading mt-0.5">$3K–5K /mes · sin coordinación</p>
              </div>
              <div className="w-full sm:w-auto px-6 py-4 text-center bg-v2-surface-teal-mist">
                <p className="font-lato text-[13px] text-v2-accent-teal-deep font-semibold">Sixteam</p>
                <p className="font-poppins font-black text-[15px] text-v2-accent-teal-deep mt-0.5">desde $1,500 /mes · arrancamos en 48h</p>
              </div>
            </div>

            <div className="v2-reveal v2-d4 mt-9">
              <Link to="/v2/radar">
                <ButtonV2 variant="primary" size="lg">
                  Empezar con auditoría gratis
                  <ArrowRight className="h-4 w-4" />
                </ButtonV2>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 2: Pricing tiers (reused component) ── */}
      <PricingV2 />

      {/* ── Section 3: Comparison table ── */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[680px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Por qué Sixteam</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Compara cómo{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">armarías el mismo equipo</em>
                </Underlined>{" "}
                de otra forma.
              </h2>
            </div>

            {/* Table — desktop */}
            <div className="v2-reveal v2-d1 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-4 px-5 font-lato text-[12px] font-semibold uppercase tracking-widest text-v2-ink-muted w-[28%]" />
                    <th className="py-4 px-5 font-lato text-[13px] font-bold text-v2-ink-heading text-center">Contratar interno</th>
                    <th className="py-4 px-5 font-lato text-[13px] font-bold text-v2-ink-heading text-center">Freelancers sueltos</th>
                    <th className="py-4 px-5 font-lato text-[13px] font-bold text-v2-accent-teal-deep text-center rounded-t-xl bg-v2-surface-teal-mist border-t border-x border-v2-accent-teal/20">
                      Sixteam Core
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableRows.map((row, i) => (
                    <tr
                      key={row.label}
                      className={`border-t border-v2-border-subtle ${i % 2 === 0 ? "bg-white" : "bg-v2-surface-alt/40"}`}
                    >
                      <td className="py-4 px-5 font-lato text-[14px] font-semibold text-v2-ink-heading">{row.label}</td>
                      <td className="py-4 px-5 text-center">
                        {row.interno === null ? (
                          <X className="h-4 w-4 text-v2-ink-muted mx-auto" />
                        ) : (
                          <span className="font-lato text-[13px] text-v2-ink-muted">{row.interno}</span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-center">
                        {row.freelance === null ? (
                          <X className="h-4 w-4 text-v2-ink-muted mx-auto" />
                        ) : (
                          <span className="font-lato text-[13px] text-v2-ink-muted">{row.freelance}</span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-center bg-v2-surface-teal-mist border-x border-v2-accent-teal/20">
                        {row.sixteamCheck ? (
                          <div className="flex flex-col items-center gap-1">
                            <Check className="h-4 w-4 text-v2-accent-teal-deep" />
                            <span className="font-lato text-[12px] font-semibold text-v2-accent-teal-deep">{row.sixteam}</span>
                          </div>
                        ) : (
                          <span className="font-poppins text-[13px] font-bold text-v2-accent-teal-deep">{row.sixteam}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="py-2" />
                    <td className="py-2" />
                    <td className="py-2" />
                    <td className="py-2 bg-v2-surface-teal-mist border-x border-b border-v2-accent-teal/20 rounded-b-xl" />
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 4: Add-ons ── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref3}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">Servicios adicionales</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Add-ons one-time,{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">cuando los necesites.</em>
              </h2>
              <p className="font-lato text-[16px] text-v2-ink-muted mt-4">
                No están incluidos en los planes recurrentes. Se cobran una sola vez.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {addons.map((addon, i) => {
                const Icon = addon.icon;
                return (
                  <div
                    key={addon.title}
                    className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:border-v2-accent-teal/40 hover:shadow-[0_12px_40px_rgba(0,191,165,0.08)] transition-[transform,border-color,box-shadow] duration-300`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading leading-tight">
                      {addon.title}
                    </h3>
                    <p className="font-poppins font-bold text-[15px] text-v2-accent-teal-deep mt-1">
                      {addon.price}
                    </p>
                    <p className="font-lato text-[13px] text-v2-ink-muted leading-relaxed mt-3 flex-1">
                      {addon.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 5: Guarantee ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.15) 0%, transparent 65%)",
            animation: "v2-aurora-1 18s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="relative text-center">
          <div ref={ref4}>
            <div className="v2-reveal flex justify-center mb-6">
              <Shield className="h-12 w-12 text-v2-accent-teal" />
            </div>
            <h2
              className="v2-reveal v2-d1 font-poppins font-bold text-white"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
            >
              Garantía de 30 días.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal">Sin letra chica.</em>
            </h2>
            <p className="v2-reveal v2-d2 font-lato text-[17px] text-white/70 leading-[1.65] mt-6 max-w-[560px] mx-auto">
              Si en los primeros 30 días no ves valor operacional concreto en tu cuenta — te devolvemos el 100% del primer mes. Sin formularios, sin discusión, sin retención de venta.
            </p>
            <div className="v2-reveal v2-d3 mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              {["🛡️ 30 días money-back", "📅 Mes a mes, cero permanencia", "💬 Slack directo con tu equipo"].map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center px-4 py-2 rounded-full font-lato text-[13px] font-semibold text-white/80 bg-white/8 border border-white/15"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 6: Pricing FAQ ── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref5}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">FAQ de precios</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Lo que siempre nos preguntan{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">sobre los planes.</em>
              </h2>
            </div>
            <div className="v2-reveal v2-d1 max-w-[780px] mx-auto">
              <Accordion type="single" collapsible className="space-y-3">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-white border border-v2-border-subtle rounded-2xl px-6 overflow-hidden data-[state=open]:border-v2-accent-teal/30 transition-colors duration-200"
                  >
                    <AccordionTrigger className="font-poppins font-bold text-[15px] text-v2-ink-heading text-left py-5 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-lato text-[14px] text-v2-ink-body leading-[1.7] pb-5">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 7: Final CTA ── */}
      <Section surface="navy-dark" size="spacious" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-32 w-[640px] h-[640px] rounded-full"
          style={{
            background: "radial-gradient(circle at 60% 40%, rgba(29,112,162,0.25) 0%, rgba(0,191,165,0.12) 40%, transparent 70%)",
            animation: "v2-aurora-1 18s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 w-[480px] h-[480px] rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 60%, rgba(0,191,165,0.18) 0%, transparent 65%)",
            animation: "v2-aurora-2 22s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container size="narrow" className="relative text-center">
          <div className="v2-reveal">
            <Eyebrow variant="teal" className="text-v2-accent-teal">
              Empieza por aquí
            </Eyebrow>
          </div>
          <h2
            className="v2-reveal v2-d1 font-poppins font-bold text-white mt-5"
            style={{ fontSize: "clamp(32px, 5.5vw, 56px)", lineHeight: "1.08", letterSpacing: "-0.025em" }}
          >
            Mejor que una propuesta de 30 páginas:{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal">una auditoría gratis.</em>
            </Underlined>
          </h2>
          <p className="v2-reveal v2-d2 font-lato text-[17px] md:text-[19px] text-white/75 leading-[1.65] max-w-[580px] mx-auto mt-7">
            En 48 horas te decimos dónde está la fuga, qué plan encaja con tu momento y cuánto podrías ahorrar vs armar el equipo internamente.
          </p>
          <div className="v2-reveal v2-d3 mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">
                Hacer mi auditoría gratis
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2
                variant="outline"
                size="lg"
                className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
              >
                Agendar una llamada
              </ButtonV2>
            </Link>
          </div>
          <p className="v2-reveal v2-d4 font-serif italic text-[13px] text-white/40 mt-8">
            "Si después de 48h te queda solo el diagnóstico y nos dices que no, nos quedamos amigos."
          </p>
        </Container>
      </Section>

    </LayoutV2>
  );
};

export default PreciosV2;
