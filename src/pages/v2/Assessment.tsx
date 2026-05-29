import { ArrowRight, Target, MessageSquare, Map, Compass, Sparkles, FileText, Bot, X, Check } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── process steps ── */
const steps = [
  {
    number: "01",
    icon: Target,
    title: "Tu visión, no la nuestra",
    subtitle: "Definir metas",
    desc: "Arrancamos con Alex (Estratega IA) + Samuel: cuáles son tus prioridades de los próximos 12 meses, qué métrica te quita el sueño, qué procesos no toleras seguir operando manualmente.",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Sam habla con todo tu equipo en paralelo",
    subtitle: "Entrevistas con agentes IA",
    desc: "Sam (Diagnóstico IA) hace entrevistas de 20-30 minutos con cada persona clave de tu operación — comercial, marketing, servicio, ops. En paralelo, sin sesgo político, en una semana. Cobertura del 100%, no muestra del 20%.",
  },
  {
    number: "03",
    icon: Map,
    title: "Reconstruimos tu operación real",
    subtitle: "Mapa operativo agéntico",
    desc: "Sam consolida cada flujo, cada herramienta, cada dependencia. No es el organigrama teórico — es cómo funciona tu negocio cuando nadie te está mirando. Un mapa vivo, navegable.",
  },
  {
    number: "04",
    icon: Compass,
    title: "Samuel + Alex entregan el plan",
    subtitle: "Estrategia + Roadmap",
    desc: "Cruzamos tus metas con el mapa real. Aislamos las 3-7 palancas de mayor impacto: qué automatizar primero, qué agente IA construir, qué proceso rediseñar. Plan priorizado con orden de implementación.",
  },
];

/* ── deliverables ── */
const deliverables = [
  {
    icon: Map,
    title: "Mapa operativo vivo",
    desc: "Cómo opera hoy tu negocio — comercial, marketing, servicio — navegable y consultable. No es un PDF estático. Lo actualizas cuando cambia algo.",
  },
  {
    icon: Sparkles,
    title: "Palancas de IA priorizadas",
    desc: "Las 3-7 iniciativas de mayor impacto para TU contexto, no casos de uso genéricos. Cada una con estimación de esfuerzo, costo e impacto.",
  },
  {
    icon: FileText,
    title: "Blueprints de implementación",
    desc: "Para cada palanca priorizada: qué cambia, a quién impacta, qué se necesita y cuál es el resultado esperado. Listo para ejecutar.",
  },
  {
    icon: Bot,
    title: "Agente IA persistente",
    desc: "Sam queda accesible después del Assessment. Conoce tu operación. Le preguntas cualquier cosa cuando quieras — sigue mapeando, sigue respondiendo.",
  },
];

/* ── traditional cons ── */
const tradCons = [
  "3-5 consultores juniors haciendo entrevistas",
  "6-12 semanas calendario",
  "Entrevistan 20-40 personas (muestra)",
  "Información filtrada por jerarquía y política",
  "Entregable: PDF de 80 páginas",
  "Después del entregable se van",
];

/* ── sixteam pros ── */
const sixteamPros = [
  "6 agentes IA + Samuel + Alex liderando",
  "10-14 días calendario",
  "Entrevistan 100% del equipo en paralelo",
  "Cero sesgo político — los agentes no son tus colegas",
  "Entregable: mapa vivo + agente IA persistente",
  "Sigue accesible cuando quieras preguntarle algo",
];

/* ── Page ── */

export const AssessmentV2 = () => {
  const refStats      = useScrollReveal<HTMLDivElement>();
  const refProblem    = useScrollReveal<HTMLDivElement>();
  const refProcess    = useScrollReveal<HTMLDivElement>();
  const refDiff       = useScrollReveal<HTMLDivElement>();
  const refDelivs     = useScrollReveal<HTMLDivElement>();
  const refPostAssess = useScrollReveal<HTMLDivElement>();
  const refCta        = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>

      {/* ── S1 · Hero ── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(0,191,165,0.07),transparent_60%)]"
        />
        <Container size="narrow" className="text-center pt-8">
          <Eyebrow variant="teal">AI Transformation Assessment</Eyebrow>
          <h1
            className="font-poppins font-black text-v2-ink-heading mt-5 leading-[1.06] tracking-[-0.025em]"
            style={{ fontSize: "clamp(36px, 7vw, 64px)" }}
          >
            Lanza tu transformación con IA
            <br />
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                con la estrategia correcta.
              </em>
            </Underlined>
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[640px] mx-auto">
            El Assessment de Sixteam entrega la base estratégica en 10–14 días. Mapeamos cómo opera tu empresa con agentes IA en paralelo, identificamos las palancas reales de IA — y te entregamos el plan ejecutable. Antes de mover una sola pieza.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/v2/contacto">
              <ButtonV2 variant="primary" size="lg">
                Solicitar Assessment — $2,500
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </a>
            <a href="/v2/contacto">
              <ButtonV2 variant="outline" size="lg">
                Hablar con Samuel antes
              </ButtonV2>
            </a>
          </div>
          <p className="mt-5 font-lato text-[11px] font-medium uppercase tracking-widest text-v2-accent-teal-deep">
            10–14 días · 100% cobertura del equipo · Mapa + Palancas + Roadmap + Agente IA persistente
          </p>
        </Container>
      </Section>

      {/* ── S2 · Stats / Social Proof ── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={refStats}>
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-v2-border-subtle">
              {[
                {
                  number: "95%",
                  label: "de pilotos de IA enterprise fracasan",
                  source: "MIT, 2025",
                },
                {
                  number: "42%",
                  label: "de empresas abandonaron sus iniciativas de IA en 2025",
                  source: "S&P Global, 2025",
                },
                {
                  number: "39%",
                  label: "logra impacto real en EBIT cuando hay estrategia correcta",
                  source: "McKinsey, 2025",
                },
              ].map((stat, i) => (
                <div
                  key={stat.source}
                  className={`v2-reveal v2-d${i + 1} px-8 py-10 text-center flex flex-col items-center`}
                >
                  <span
                    className="font-poppins font-black text-v2-accent-teal-deep leading-none"
                    style={{ fontSize: "clamp(40px, 6vw, 60px)" }}
                  >
                    {stat.number}
                  </span>
                  <p className="font-lato text-[15px] text-v2-ink-body leading-[1.55] mt-3 max-w-[220px]">
                    {stat.label}
                  </p>
                  <span className="font-lato italic text-[12px] text-v2-ink-muted mt-2">
                    Fuente: {stat.source}
                  </span>
                </div>
              ))}
            </div>
            <p className="v2-reveal v2-d4 font-lato text-[16px] italic text-v2-ink-body text-center mt-10 max-w-[600px] mx-auto leading-[1.65]">
              "La diferencia no es el modelo. Es cómo decides qué transformar — y en qué orden."
            </p>
          </div>
        </Container>
      </Section>

      {/* ── S3 · Problem Statement ── */}
      <Section surface="cream" size="spacious">
        <Container size="narrow">
          <div ref={refProblem}>
            <div className="v2-reveal">
              <Eyebrow variant="navy">Por qué fracasan</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
              >
                Las empresas que ganan con IA no empiezan con herramientas.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    Empiezan con claridad.
                  </em>
                </Underlined>
              </h2>
            </div>
            <div className="v2-reveal v2-d1 mt-8 space-y-5 max-w-[700px]">
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                La mayoría arranca al revés: compra una licencia de un LLM, lanza tres pilotos dispersos, pone a un becario a 'explorar IA'. Seis meses después no hay nada productivo y la conclusión es que 'la IA no funciona'.
              </p>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                La trampa es operar con información parcial — el dueño cree que sabe cómo funciona su empresa, pero la operación real vive distribuida en 15 cabezas y 40 herramientas. El Assessment elimina esa ceguera ANTES de mover una sola pieza.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S4 · How It Works ── */}
      <Section surface="default" size="spacious">
        <Container>
          <div ref={refProcess}>
            <div className="text-center max-w-[640px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="teal">Cómo funciona</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
              >
                4 fases. 10-14 días.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    Cobertura completa.
                  </em>
                </Underlined>
              </h2>
            </div>

            {/* Connector line (lg+) */}
            <div className="relative">
              <div aria-hidden className="hidden lg:block absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-v2-border-subtle" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {steps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(10,35,66,0.08)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300`}
                    >
                      <div className="flex items-center gap-3 mb-5 relative z-10">
                        <div className="w-11 h-11 rounded-full bg-v2-accent-teal/15 border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0">
                          <span className="font-poppins font-bold text-[11px] text-v2-accent-teal-deep">{i + 1}</span>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-4">
                        <Icon className="h-5 w-5 text-v2-accent-teal-deep" aria-hidden />
                      </div>
                      <p className="font-lato text-[10px] font-bold uppercase tracking-[0.18em] text-v2-accent-teal-deep mb-1">
                        {step.subtitle}
                      </p>
                      <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.3] mt-1">
                        {step.title}
                      </h3>
                      <p className="font-lato text-[13px] text-v2-ink-body leading-[1.65] mt-3">
                        {step.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S5 · Differentiation ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[480px] h-[480px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)" }}
        />
        <Container>
          <div ref={refDiff}>
            <div className="text-center max-w-[720px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal" className="text-v2-accent-teal">
                Lo que nos hace fundamentalmente distintos
              </Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-4 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                Una consultora tradicional manda 5 personas durante 8 semanas.
                Nosotros mandamos{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal">
                    6 agentes IA durante 10 días.
                  </em>
                </Underlined>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Traditional */}
              <div className="v2-reveal bg-white/5 border border-white/10 rounded-2xl p-8">
                <h3 className="font-poppins font-bold text-[18px] text-white/70 mb-6">
                  Consultora tradicional
                </h3>
                <ul className="space-y-3 mb-8">
                  {tradCons.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="h-3 w-3 text-white/40" aria-hidden />
                      </span>
                      <span className="font-lato text-[14px] text-white/55 leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/10 pt-4">
                  <span className="font-lato text-[13px] text-white/40">Costo típico: </span>
                  <span className="font-poppins font-bold text-[15px] text-white/50">$30K–$80K USD</span>
                </div>
              </div>

              {/* Sixteam */}
              <div className="v2-reveal v2-d1 bg-v2-accent-teal/10 border border-v2-accent-teal/30 rounded-2xl p-8">
                <h3 className="font-poppins font-bold text-[18px] text-v2-accent-teal mb-6">
                  Sixteam Assessment
                </h3>
                <ul className="space-y-3 mb-8">
                  {sixteamPros.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-v2-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-v2-accent-teal" aria-hidden />
                      </span>
                      <span className="font-lato text-[14px] text-white/80 leading-[1.55]">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-v2-accent-teal/20 pt-4">
                  <span className="font-lato text-[13px] text-white/60">Precio fijo: </span>
                  <span className="font-poppins font-bold text-[15px] text-v2-accent-teal">$2,500 USD</span>
                </div>
              </div>
            </div>

            <p className="v2-reveal v2-d2 font-lato text-[15px] italic text-white/50 text-center mt-10 max-w-[640px] mx-auto leading-[1.65]">
              "Lo que cuesta 30x menos y se hace 5x más rápido — porque los agentes IA hacen lo repetitivo, y los humanos hacen lo que solo un humano puede hacer: el criterio."
            </p>
          </div>
        </Container>
      </Section>

      {/* ── S6 · Deliverables ── */}
      <Section surface="default" size="spacious">
        <Container>
          <div ref={refDelivs}>
            <div className="text-center max-w-[640px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="teal">Te llevas</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
              >
                Cuatro entregables. Tangibles.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    Para siempre.
                  </em>
                </Underlined>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {deliverables.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:border-v2-accent-teal/30 hover:shadow-[0_8px_28px_rgba(0,191,165,0.09)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" aria-hidden />
                    </div>
                    <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.3]">
                      {d.title}
                    </h3>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-[1.65] mt-3">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S7 · Post-Assessment ── */}
      <Section surface="alt" size="default">
        <Container size="narrow">
          <div ref={refPostAssess}>
            <div className="v2-reveal">
              <Eyebrow variant="navy">Después del Assessment</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(28px, 4vw, 42px)" }}
              >
                Decides tú.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    No presionamos.
                  </em>
                </Underlined>
              </h2>
            </div>
            <div className="v2-reveal v2-d1 mt-8 space-y-5 max-w-[700px]">
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                Al terminar el Assessment puedes hacer 3 cosas, sin presión nuestra: (a) Operar el roadmap con tu equipo interno — te quedas con todo y nos quedamos amigos. (b) Contratarnos para construir las primeras palancas como proyecto. (c) Suscribirte a Ops mensual ($1,500-$5,500/mes) y dejamos todo operado.
              </p>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.7]">
                Como referencia: ~50% de los clientes que terminan el Assessment continúan con nosotros. El otro 50% opera el roadmap por su cuenta y sigue siendo cliente del Assessment de nuevo cuando el negocio cambia.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S8 · Final CTA ── */}
      <Section surface="navy-dark" size="spacious" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)" }}
        />
        <Container size="narrow">
          <div ref={refCta}>
            <div className="v2-reveal text-center">
              <Eyebrow variant="teal" className="text-v2-accent-teal">Empieza por aquí</Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-5 leading-[1.05] tracking-[-0.025em]"
                style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
              >
                En 10 días lo sabes.{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal">
                    Y sales con el mapa.
                  </em>
                </Underlined>
              </h2>
              <p className="font-lato text-[17px] text-white/65 leading-[1.65] mt-7 max-w-[520px] mx-auto">
                Solicita tu Assessment. Si después de la llamada inicial decidimos que no encajas con el playbook — te lo decimos directamente y no cobramos nada.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/v2/contacto">
                  <ButtonV2 variant="primary" size="lg">
                    Solicitar Assessment — $2,500
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </a>
                <a href="/v2/contacto">
                  <ButtonV2
                    variant="outline"
                    size="lg"
                    className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
                  >
                    Hablar con Samuel primero
                  </ButtonV2>
                </a>
              </div>
              <p className="font-lato text-[13px] italic text-white/40 mt-8">
                "Si después de los 10 días te quedas con el mapa y nos dices que no, nos quedamos amigos."
              </p>
            </div>
          </div>
        </Container>
      </Section>

    </LayoutV2>
  );
};

export default AssessmentV2;
