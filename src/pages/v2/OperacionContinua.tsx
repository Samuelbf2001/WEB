import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  BarChart2,
  MessageCircle,
  Mail,
  Bot,
  Zap,
  LayoutDashboard,
  Megaphone,
  RefreshCw,
  Wrench,
  Users,
  ChevronRight,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "72h/mes", label: "Tiempo promedio ahorrado por ejecutivo de ventas" },
  { value: "600k+", label: "Tareas automatizadas operadas por Sixteam" },
  { value: "4+ años", label: "Operando revenue en LatAm" },
  { value: "<2 min", label: "Tiempo de respuesta a leads con agentes IA" },
];

const pains = [
  {
    title: "La agencia entregó y se fue",
    desc: "Configuraron el CRM, hicieron el setup y desaparecieron. El equipo volvió a sus viejos hábitos en 3 semanas.",
  },
  {
    title: "El freelancer no escala",
    desc: "Ideal para proyectos puntuales. Pero nadie mira el dashboard los lunes. Nadie ajusta cuando la conversión baja.",
  },
  {
    title: "El headcount es caro y lento",
    desc: "Contratar un VP de Ops o RevOps senior cuesta $8k–$15k/mes en LatAm. Con curva de 3 meses antes de producir.",
  },
];

const cadenceSteps = [
  {
    number: "01",
    day: "Lunes — Reporte ejecutivo",
    desc: "Dashboard actualizado en tu inbox a las 9am. Métricas de pipeline, leads respondidos, conversiones, alertas de riesgo.",
  },
  {
    number: "02",
    day: "Martes/Mié — Sprint de mejoras",
    desc: "Identificamos la fricción de la semana anterior y lanzamos el fix: automatización nueva, ajuste de secuencia, corrección de integración.",
  },
  {
    number: "03",
    day: "Jueves — Sincronía de equipo",
    desc: "Check-in con tu equipo vía Slack/WhatsApp. 20 minutos. Sin preparación previa de tu parte.",
  },
  {
    number: "04",
    day: "Continuo — Agentes IA 24/7",
    desc: "Calificación de leads, respuestas a WhatsApp, secuencias de nurturing, alertas de pipeline — corriendo sin parar.",
  },
];

const features = [
  { icon: BarChart2, title: "CRM Operado", desc: "Pipeline vivo, datos limpios y dashboards actualizados cada semana." },
  { icon: MessageCircle, title: "WhatsApp 24/7", desc: "Agentes IA que responden, califican y escalan en tiempo real." },
  { icon: Mail, title: "Email & Nurturing", desc: "Secuencias automáticas para leads que no compraron aún." },
  { icon: Bot, title: "Agentes IA custom", desc: "Entrenados con tu base de conocimiento y tus procesos reales." },
  { icon: Zap, title: "Automatizaciones", desc: "Flujos que eliminan trabajo manual del equipo comercial." },
  { icon: LayoutDashboard, title: "Dashboards vivos", desc: "Visibilidad completa de revenue sin abrir el CRM cada vez." },
  { icon: Megaphone, title: "Pauta digital", desc: "Campañas alineadas al CRM para que MKT y ventas hablen el mismo idioma." },
  { icon: RefreshCw, title: "Integraciones", desc: "Conectamos tus herramientas para que los datos fluyan solos." },
  { icon: Wrench, title: "Soporte técnico continuo", desc: "Si algo se rompe, lo arreglamos antes de que lo notes." },
];

const agentPills = ["Aura", "Carlos", "Laura", "Emma", "Daniel", "Diana"];

const plans = [
  {
    name: "Arranque",
    price: "$1,500",
    desc: "Para empresas que están implementando su primer sistema de revenue.",
  },
  {
    name: "Core",
    price: "$3,000",
    desc: "Operación completa de CRM, automatizaciones y agentes IA.",
    featured: true,
  },
  {
    name: "Plus",
    price: "$5,500",
    desc: "RevOps completo con pauta, integraciones avanzadas y soporte extendido.",
  },
];

const OperacionContinua = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();
  const ref4 = useScrollReveal<HTMLDivElement>();
  const ref5 = useScrollReveal<HTMLDivElement>();
  const ref6 = useScrollReveal<HTMLDivElement>();
  const ref7 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.11) 0%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(29,112,162,0.10) 0%, transparent 70%)",
            animation: "v2-aurora-2 18s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="text-center pt-8 relative">
          <Eyebrow variant="teal">OPERACIÓN CONTINUA</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-5"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
          >
            Tu Revenue Ops.{" "}
            <em className="font-serif italic font-normal">Operado</em>{" "}
            mes a mes.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[620px] mx-auto">
            No es un proyecto con fecha de entrega. Es tu equipo externo de RevOps operando ventas,
            marketing y servicio al cliente — mes tras mes — mientras tú te enfocas en crecer.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/radar">
              <ButtonV2 variant="primary" size="lg">
                Empezar con el Radar
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/#pricing">
              <ButtonV2 variant="outline" size="lg">
                Ver planes
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <Section surface="navy-dark" size="compact" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(ellipse at 80% 50%, rgba(0,191,165,0.09) 0%, transparent 60%)",
          }}
        />
        <Container>
          <div ref={ref1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {stats.map((s, i) => (
                <div
                  key={s.value}
                  className={`v2-reveal v2-d${i + 1} text-center`}
                >
                  <p
                    className="font-poppins font-bold text-white leading-none"
                    style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
                  >
                    {s.value}
                  </p>
                  <p className="font-lato text-[13px] text-white/55 leading-[1.55] mt-2 max-w-[160px] mx-auto">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Problem ──────────────────────────────────────────── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">El problema con los proyectos únicos</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Implementar sin operar es{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  tirar la inversión.
                </em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pains.map((p, i) => (
                <div
                  key={p.title}
                  className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className="font-serif italic text-[52px] leading-none text-v2-accent-teal/[0.08] block -mt-1 mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading mt-3">
                    {p.title}
                  </h3>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-3">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Cadence ──────────────────────────────────────────── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref3}>
            <div className="text-center max-w-[640px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="teal">La cadencia semanal</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Una cadencia semanal que{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">mantiene el sistema vivo</em>.
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                Cada semana tiene una estructura. Nada queda al azar. Nada se asume.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cadenceSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`v2-reveal v2-d${i % 2 === 0 ? "1" : "2"} relative bg-white border border-v2-border-subtle rounded-2xl p-8 overflow-hidden hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300`}
                >
                  <span className="pointer-events-none select-none absolute -right-2 -top-4 font-serif italic text-[88px] leading-none text-v2-accent-teal/[0.05]">
                    {step.number}
                  </span>
                  <span className="font-poppins font-bold text-[11px] uppercase tracking-[0.18em] text-v2-accent-teal-deep">
                    {step.number}
                  </span>
                  <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-3">
                    {step.day}
                  </h3>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-3">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Features ─────────────────────────────────────────── */}
      <Section surface="teal-mist" size="default">
        <Container>
          <div ref={ref4}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">Qué incluye la operación</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Todo lo que necesita tu revenue{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">para funcionar</em>.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className={`v2-reveal v2-d${Math.min(i + 1, 5)} bg-white border border-v2-border-subtle rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 hover:border-v2-accent-teal/25 transition-all duration-300`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>
                    <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading mt-4">
                      {f.title}
                    </h3>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-[1.6] mt-2">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref5}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy side */}
              <div className="v2-reveal">
                <Eyebrow variant="navy">El equipo detrás</Eyebrow>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading mt-3"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
                >
                  Tu{" "}
                  <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                    equipo externo
                  </em>{" "}
                  de RevOps.
                </h2>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-5">
                  No trabajas con un freelancer ni con una agencia que rota cuentas. Trabajas con un
                  equipo fijo que conoce tu negocio, tu stack y tus objetivos.
                </p>
                <blockquote className="mt-7 border-l-2 border-v2-accent-teal pl-5">
                  <p className="font-lato text-[15px] text-v2-ink-body leading-[1.7] italic">
                    "No te dejamos solo después de implementar. Somos el equipo que opera el sistema
                    contigo, semana tras semana."
                  </p>
                </blockquote>
                <div className="mt-8">
                  <Link to="/nosotros">
                    <ButtonV2 variant="outline" size="md">
                      Conocer al equipo
                      <ChevronRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>

              {/* Cards side */}
              <div className="v2-reveal v2-d2 flex flex-col gap-4">
                {/* Samuel */}
                <div className="bg-v2-ink-heading text-white rounded-2xl p-6 border border-v2-accent-teal/25 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-v2-accent-blue/30 border border-v2-accent-blue/50 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-[16px] text-white">Samuel</p>
                    <p className="font-lato text-[12px] text-white/50 uppercase tracking-widest mt-0.5">
                      Revenue Strategist
                    </p>
                    <p className="font-lato text-[13px] text-white/70 leading-[1.6] mt-2">
                      Define la estrategia de revenue y el roadmap de crecimiento para cada cliente.
                    </p>
                  </div>
                </div>

                {/* Ernesto */}
                <div className="bg-v2-surface-teal-mist border border-v2-accent-teal/25 rounded-2xl p-6 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-v2-accent-teal/15 border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-5 w-5 text-v2-accent-teal-deep" />
                  </div>
                  <div>
                    <p className="font-poppins font-bold text-[16px] text-v2-ink-heading">Ernesto</p>
                    <p className="font-lato text-[12px] text-v2-ink-muted uppercase tracking-widest mt-0.5">
                      Process Engineer
                    </p>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-[1.6] mt-2">
                      Diseña e implementa los flujos de automatización y las integraciones del stack.
                    </p>
                  </div>
                </div>

                {/* AI Agents */}
                <div className="bg-white border border-v2-border-subtle rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-v2-surface-teal-mist flex items-center justify-center">
                      <Bot className="h-4 w-4 text-v2-accent-teal-deep" />
                    </div>
                    <p className="font-poppins font-bold text-[14px] text-v2-ink-heading">
                      + 6 Agentes IA
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {agentPills.map((name) => (
                      <span
                        key={name}
                        className="inline-flex items-center font-lato text-[12px] font-semibold text-v2-accent-teal-deep bg-v2-surface-teal-mist border border-v2-accent-teal/20 px-3 py-1 rounded-full"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                  <p className="font-lato text-[12px] text-v2-ink-muted mt-3">
                    Operan 24/7 — calificación, respuestas, nurturing y alertas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Testimonial ──────────────────────────────────────── */}
      <Section surface="navy-dark" size="compact" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[450px] h-[450px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.15) 0%, transparent 65%)",
          }}
        />
        <Container size="narrow" className="relative text-center">
          <div ref={ref6}>
            <div className="v2-reveal">
              <span className="font-serif italic text-[80px] leading-none text-v2-accent-teal/20 block -mb-4">
                "
              </span>
              <blockquote className="font-lato text-[18px] md:text-[20px] text-white/80 leading-[1.65] max-w-[620px] mx-auto">
                Llevamos 2 años con Sixteam. Lo que más valoro no es el setup inicial — es que todos
                los lunes sé exactamente cómo está mi negocio y alguien ya está arreglando lo que
                falló.
              </blockquote>
              <div className="mt-6 flex flex-col items-center gap-1">
                <p className="font-poppins font-bold text-[15px] text-white">Andrea L.</p>
                <p className="font-lato text-[12px] text-white/45 uppercase tracking-widest">
                  Agencia de Viajes · Colombia
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Pricing CTA ──────────────────────────────────────── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={ref7}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Planes</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
              >
                Elige cómo{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">entrar</em>.
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                Tres planes de operación mensual. Sin contrato de permanencia. Sin letra pequeña.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[900px] mx-auto">
              {plans.map((plan, i) => (
                <div
                  key={plan.name}
                  className={`v2-reveal v2-d${i + 1} relative rounded-2xl p-7 flex flex-col ${
                    plan.featured
                      ? "bg-v2-ink-heading text-white border border-v2-accent-teal/25 shadow-[0_16px_48px_rgba(10,35,66,0.18)]"
                      : "bg-white border border-v2-border-subtle hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-v2-accent-teal text-white font-lato text-[11px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                      Más popular
                    </span>
                  )}
                  <p
                    className={`font-poppins font-bold text-[14px] uppercase tracking-widest ${
                      plan.featured ? "text-v2-accent-teal" : "text-v2-accent-teal-deep"
                    }`}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={`font-poppins font-bold mt-2 ${
                      plan.featured ? "text-white" : "text-v2-ink-heading"
                    }`}
                    style={{ fontSize: "clamp(28px, 4vw, 36px)", lineHeight: "1" }}
                  >
                    {plan.price}
                    <span
                      className={`font-lato font-normal text-[14px] ml-1 ${
                        plan.featured ? "text-white/50" : "text-v2-ink-muted"
                      }`}
                    >
                      /mes
                    </span>
                  </p>
                  <p
                    className={`font-lato text-[13px] leading-[1.6] mt-3 flex-1 ${
                      plan.featured ? "text-white/65" : "text-v2-ink-body"
                    }`}
                  >
                    {plan.desc}
                  </p>
                  <div className="mt-6">
                    <Link to="/contacto">
                      <ButtonV2
                        variant={plan.featured ? "primary" : "outline"}
                        size="sm"
                        className="w-full justify-center"
                      >
                        Solicitar
                        <ChevronRight className="h-3.5 w-3.5" />
                      </ButtonV2>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10 v2-reveal v2-d3">
              <Link to="/radar">
                <ButtonV2 variant="primary" size="lg">
                  Empezar con el Radar gratis
                  <ArrowRight className="h-4 w-4" />
                </ButtonV2>
              </Link>
              <p className="font-lato text-[13px] text-v2-ink-muted mt-3">
                El Radar es gratis · Diagnóstico en 48h · Sin compromiso
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default OperacionContinua;
