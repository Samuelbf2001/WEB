import { Link } from "react-router-dom";
import { ArrowRight, Check, Calendar, MessageCircle, Zap, TrendingUp, Clock, Users, BarChart2 } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const principles = [
  {
    title: "Operamos, no consultamos",
    desc: "No te entregamos un PDF con recomendaciones. Nos integramos a tu Slack, recibimos tareas y devolvemos trabajo hecho. Cada semana.",
  },
  {
    title: "Velocidad de máquina + criterio humano",
    desc: "IA estructura, limpia y automatiza. Expertos validan la lógica y la operan. No uno sin el otro.",
  },
  {
    title: "Honestos cuando duele",
    desc: "Si tu problema no es de RevOps, te lo decimos. Si necesitas contratar a alguien, te lo decimos. Sin venta forzada.",
  },
];

const process = [
  {
    number: "01",
    icon: BarChart2,
    title: "Radar gratis",
    time: "48 horas",
    desc: "Cuestionario corto + revisión de tu stack actual. En 48h te devolvemos un diagnóstico ejecutivo: dónde está la fuga, qué se puede operar primero y cuánto revenue está atascado.",
    items: ["Auditoría de CRM actual", "Mapa de procesos críticos", "Estimación de fugas de revenue"],
  },
  {
    number: "02",
    icon: MessageCircle,
    title: "Llamada de alineación",
    time: "30 minutos",
    desc: "Revisamos el diagnóstico juntos. Validamos si tiene sentido trabajar juntos, qué servicio aplica a tu momento y cuándo podemos empezar. Sin pitch, sin venta forzada.",
    items: ["Plan inicial de 90 días", "Stack recomendado", "Inversión estimada"],
  },
  {
    number: "03",
    icon: Zap,
    title: "Kickoff del sprint",
    time: "Semana 1",
    desc: "El equipo se integra a tu Slack o WhatsApp. Definimos el backlog del primer sprint, las automatizaciones prioritarias y los KPIs del primer mes. Arrancamos.",
    items: ["Onboarding del stack", "Backlog sprint 1", "Single point of contact asignado"],
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Operación continua",
    time: "Cada semana",
    desc: "Sprints semanales. Reporte los lunes. Ajustes continuos. El sistema evoluciona con tu negocio. Sin contratos de permanencia — si no funciona, nos dices y listo.",
    items: ["Reporte cada lunes 9am", "Sprint semanal sin pausa", "Radar mensual de oportunidades"],
  },
];

const cadence = [
  { day: "Lun", label: "Reporte", desc: "KPIs, logros del sprint anterior, alertas." },
  { day: "Mar–Jue", label: "Ejecución", desc: "Tareas operadas: automatizaciones, datos, pipelines." },
  { day: "Vie", label: "Revisión", desc: "Cierre del sprint, planificación del siguiente." },
];

const stack = [
  { name: "HubSpot", cat: "CRM" },
  { name: "Make", cat: "Automatización" },
  { name: "WhatsApp Business", cat: "Atención" },
  { name: "Notion", cat: "Documentación" },
  { name: "Slack", cat: "Operación" },
  { name: "Google Looker Studio", cat: "Dashboards" },
];

const ComoFunciona = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();
  const ref4 = useScrollReveal<HTMLDivElement>();
  const ref5 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* Hero */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.12) 0%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="text-center pt-8">
          <Eyebrow variant="teal">Metodología</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
          >
            El sistema que{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">opera</em>
            </Underlined>{" "}
            tu RevOps semana a semana.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[600px] mx-auto">
            No vendemos configuración. Vendemos operación. La diferencia es que el sistema vive,
            respira y mejora cada semana, sin que tú tengas que pedirlo.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">
                Empezar con el Radar gratis
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/v2/contacto">
              <ButtonV2 variant="outline" size="lg">
                Hablar con un experto
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Principles */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={ref1}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Por qué somos distintos</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                No somos una agencia.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">No somos consultores</em>.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300`}
                >
                  <span className="font-serif italic text-[48px] leading-none text-v2-accent-teal/20 block -mt-1 -mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-4">
                    {p.title}
                  </h3>
                  <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-3">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[680px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="teal">El proceso</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Cuatro pasos.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Del diagnóstico a la operación</em>.
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                Sin propuestas de 30 páginas. Sin onboardings de 3 meses. Empezamos a operar en días.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {process.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.number}
                    className={`v2-reveal v2-d${i % 2 === 0 ? "1" : "2"} relative bg-white border border-v2-border-subtle rounded-2xl p-8 overflow-hidden hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300`}
                  >
                    <span className="pointer-events-none select-none absolute -right-2 -top-4 font-serif italic text-[80px] leading-none text-v2-accent-teal/[0.05]">
                      {step.number}
                    </span>
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                      </div>
                      <span className="inline-flex items-center gap-1.5 font-lato text-[11px] font-semibold uppercase tracking-widest text-v2-ink-muted bg-v2-surface-alt px-3 py-1.5 rounded-full flex-shrink-0">
                        <Clock className="h-3 w-3" />
                        {step.time}
                      </span>
                    </div>
                    <h3 className="font-poppins font-bold text-[20px] text-v2-ink-heading mt-5">
                      {step.title}
                    </h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-3">
                      {step.desc}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2">
                      {step.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-v2-accent-teal-deep flex-shrink-0" />
                          <span className="font-lato text-[13px] text-v2-ink-body">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Weekly cadence */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.12) 0%, transparent 65%)",
            animation: "v2-aurora-1 16s ease-in-out infinite",
          }}
        />
        <Container>
          <div ref={ref3}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal" className="text-v2-accent-teal">La cadencia</Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Lo que pasa en tu cuenta{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">cada semana</em>.
              </h2>
              <p className="font-lato text-[17px] text-white/65 leading-[1.6] mt-4">
                Sin que tú tengas que pedirlo. Sin reuniones de status que no llevan a nada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {cadence.map((c, i) => (
                <div
                  key={c.day}
                  className={`v2-reveal v2-d${i + 1} bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 hover:border-white/20 transition-colors duration-300`}
                >
                  <span className="font-poppins font-bold text-[13px] uppercase tracking-widest text-v2-accent-teal">
                    {c.day}
                  </span>
                  <h3 className="font-poppins font-bold text-[22px] text-white mt-3">{c.label}</h3>
                  <p className="font-lato text-[14px] text-white/60 leading-[1.6] mt-2">{c.desc}</p>
                </div>
              ))}
            </div>

            <p className="v2-reveal v2-d4 text-center font-serif italic text-[18px] text-white/50 mt-12">
              "No te vendemos un proyecto. Te vendemos un equipo que opera sin pedirte ayuda."
            </p>
          </div>
        </Container>
      </Section>

      {/* The stack */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={ref4}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">El stack</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Operamos sobre{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">lo que ya tienes</em>.
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                No te pedimos que cambies de CRM. No vendemos licencias. Operamos tu stack actual
                o te ayudamos a elegir el mejor para tu momento.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {stack.map((s, i) => (
                <div
                  key={s.name}
                  className={`v2-reveal v2-d${Math.min(i + 1, 6)} bg-white border border-v2-border-subtle rounded-2xl p-5 text-center hover:border-v2-accent-teal/30 hover:shadow-[0_8px_24px_rgba(0,191,165,0.08)] hover:-translate-y-0.5 transition-[transform,box-shadow,border-color] duration-300`}
                >
                  <p className="font-poppins font-bold text-[15px] text-v2-ink-heading leading-tight">
                    {s.name}
                  </p>
                  <p className="font-lato text-[10px] uppercase tracking-widest text-v2-ink-muted mt-2">
                    {s.cat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref5}>
            <div className="v2-reveal bg-v2-ink-heading rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-40"
                style={{
                  background: "radial-gradient(circle, rgba(0,191,165,0.2) 0%, transparent 70%)",
                }}
              />
              <Eyebrow variant="teal" className="text-v2-accent-teal relative">Primer paso</Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-4 relative"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                ¿Listo para ver dónde está{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">tu fuga</em>?
              </h2>
              <p className="font-lato text-[17px] text-white/70 mt-5 max-w-[480px] mx-auto relative">
                El Radar gratis te da el diagnóstico en 48 horas. Cero compromiso, cero venta forzada.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center relative">
                <Link to="/v2/radar">
                  <ButtonV2 variant="primary" size="lg">
                    Pedir Radar gratis
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </Link>
                <Link to="/v2/contacto">
                  <ButtonV2
                    variant="outline"
                    size="lg"
                    className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
                  >
                    Agendar llamada
                  </ButtonV2>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default ComoFunciona;
