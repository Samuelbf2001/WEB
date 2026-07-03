import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck, FileText, RefreshCw, Activity, X, Check } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── pain points ── */
const pains = [
  "Las citas se pierden por falta de recordatorio o confirmación oportuna.",
  "Los no-shows representan 15-30% de la agenda y nadie hace nada.",
  "El expediente del cliente vive en hojas sueltas, no en un sistema.",
  "La retención del paciente/cliente depende de que alguien se acuerde de llamar.",
];

/* ── use cases ── */
const useCases = [
  {
    icon: CalendarCheck,
    title: "Agendamiento + recordatorios automáticos",
    items: [
      "Booking online, recordatorios por WhatsApp con confirmación y reschedules automáticos.",
      "No-shows bajan 40-60% sin que tu equipo haga nada adicional.",
      "Operada por Sally + agentes IA.",
    ],
  },
  {
    icon: FileText,
    title: "Expediente vivo en el CRM",
    items: [
      "Cada cita queda registrada con historial, notas y próximos pasos.",
      "Buscable por nombre, fecha o concepto — sin hojas sueltas.",
      "Operada por Debbie + Sam.",
    ],
  },
  {
    icon: RefreshCw,
    title: "Reactivación automática post-cita",
    items: [
      "Campañas de seguimiento, encuestas de satisfacción y próximos servicios sugeridos.",
      "La retención sube sin que tu equipo lo pida ni lo recuerde.",
      "Operada por Vinnie + Clara.",
    ],
  },
  {
    icon: Activity,
    title: "Dashboard ejecutivo de ocupación",
    items: [
      "Ocupación por especialista, tasa de no-shows, ticket promedio y retención mensual.",
      "Reporte listo cada lunes a las 9am — sin armar nada a mano.",
      "Operada por Clara.",
    ],
  },
];

/* ── cadena steps ── */
const cadena = [
  {
    layer: "Consultar",
    agents: "Alex + Sam",
    desc: "Diagnóstico del consultorio o despacho: canales de agendamiento, tasa de no-shows, cómo se lleva el expediente y dónde se pierde la retención.",
  },
  {
    layer: "Implementar",
    agents: "Debbie + Vinnie",
    desc: "CRM de citas armado, recordatorios configurados, expediente digitalizado y campañas de reactivación listas para operar.",
  },
  {
    layer: "Operar",
    agents: "Sally + Clara",
    desc: "Seguimiento activo de la agenda, gestión de no-shows, reactivación post-cita y reporte ejecutivo de ocupación cada lunes.",
  },
];

const ServiciosConCitaV2 = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* ── Hero ── */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(29,112,162,0.15) 0%, transparent 70%)", animation: "v2-aurora-1 16s ease-in-out infinite" }} />
        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow variant="navy">Sixteam para Servicios Profesionales</Eyebrow>
          <h1 className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(36px, 5.5vw, 58px)", lineHeight: "1.1", letterSpacing: "-0.02em" }}>
            Salud, legal, estético, contable —{" "}
            <em className="font-serif italic font-normal">donde la cita es el producto</em>
            .
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[600px] mx-auto">
            Recordatorios olvidados, no-shows que se comen tu margen, expedientes en hojas sueltas, atención que depende del humor del recepcionista.
            Sixteam opera el ciclo completo — desde la agenda hasta la retención — para que cobres por cada hora que el especialista trabaja.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">Solicitar Diagnóstico — $2,500 <ArrowRight className="h-4 w-4" /></ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2 variant="outline" size="lg">Hablar con Samuel</ButtonV2>
            </Link>
          </div>
          <p className="font-lato text-[13px] text-v2-ink-muted mt-4 italic">
            Diagnóstico de 2 semanas · Mapa + Roadmap + Plataforma montada
          </p>
        </Container>
      </Section>

      {/* ── Pain points ── */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={ref1}>
            <div className="text-center max-w-[600px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Te suena conocido?</Eyebrow>
              <h2 className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.15" }}>
                Lo que le cuesta dinero a tu agenda{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">cada semana</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[780px] mx-auto">
              {pains.map((pain, i) => (
                <div key={i} className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-6 flex items-start gap-4 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] transition-all duration-300`}>
                  <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="h-4 w-4 text-red-500" />
                  </div>
                  <p className="font-lato text-[15px] text-v2-ink-body leading-[1.6]">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Use cases ── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[600px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">Cómo lo operamos</Eyebrow>
              <h2 className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.15" }}>
                Esto es lo que opera Sixteam{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">para tu servicio</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {useCases.map((uc, i) => {
                const Icon = uc.icon;
                return (
                  <div key={uc.title} className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:border-v2-accent-teal/30 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] hover:-translate-y-1 transition-all duration-300`}>
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading mb-3">{uc.title}</h3>
                    <div className="flex flex-col gap-2">
                      {uc.items.map((item, j) => (
                        <div key={j} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-2.5 w-2.5 text-v2-accent-teal-deep" />
                          </div>
                          <span className="font-lato text-[13px] text-v2-ink-body leading-[1.55]">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Cadena cerrada ── */}
      <Section surface="navy-dark" size="compact" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(0,191,165,0.3) 0%, transparent 70%)" }} />
        </div>
        <Container>
          <div ref={ref3} className="v2-reveal">
            <div className="text-center mb-12">
              <Eyebrow variant="teal">Cadena cerrada</Eyebrow>
              <h2 className="font-poppins font-bold text-white mt-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: "1.2" }}>
                Consultar → Implementar → Operar{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">aplicado a tu servicio</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cadena.map((step, i) => (
                <div key={step.layer} className={`v2-reveal v2-d${i + 1} p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.08] transition-all duration-300`}>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="font-poppins font-black text-[28px] text-v2-accent-teal leading-none">{i + 1}</span>
                    <span className="font-poppins font-bold text-[16px] text-white">{step.layer}</span>
                  </div>
                  <p className="font-lato text-[11px] text-v2-accent-teal/80 uppercase tracking-widest mb-3">{step.agents}</p>
                  <p className="font-lato text-[14px] text-white/65 leading-[1.6]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Final CTA ── */}
      <Section surface="alt" size="default">
        <Container size="narrow" className="text-center">
          <CalendarCheck className="h-10 w-10 text-v2-accent-teal mx-auto mb-4" />
          <Eyebrow variant="teal">Empieza por aquí</Eyebrow>
          <h2 className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.15" }}>
            Tu agenda es tu negocio.{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">Que la opere un sistema, no la memoria.</em>
            </Underlined>
          </h2>
          <p className="font-lato text-[17px] text-v2-ink-body mt-5 max-w-[460px] mx-auto">
            Implementamos y operamos. No te dejamos solo después del go-live.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">Solicitar Diagnóstico — $2,500 <ArrowRight className="h-4 w-4" /></ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2 variant="outline" size="lg">Hablar con Samuel</ButtonV2>
            </Link>
          </div>
          <p className="font-lato text-[13px] text-v2-ink-muted mt-4 italic">
            Diagnóstico de 2 semanas · Mapa + Roadmap + Plataforma montada
          </p>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default ServiciosConCitaV2;
