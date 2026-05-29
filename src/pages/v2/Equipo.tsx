import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Compass,
  Search,
  Wrench,
  Link2,
  Activity,
  BarChart3,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ─────────────────────────────────────────────────── */

const aiAgents = [
  /* ── CONSULTORÍA ── */
  {
    icon: Compass,
    name: "Alex",
    role: "Estratega & Concierge IA",
    tagline: "Consultoría · Estrategia de revenue",
    quote: "Coordino todo y traduzco tu objetivo de negocio en un plan que el equipo ejecuta.",
    description:
      "Primer punto de contacto: hace el triage de cada solicitud y diseña el roadmap de revenue.",
    capabilities: [
      "Triage de cada solicitud entrante y clasificación por urgencia",
      "Diseño del roadmap de revenue alineado al objetivo del negocio",
      "Ruteo al especialista correcto en el momento exacto",
      "Seguimiento del ciclo completo: desde la consulta hasta el cierre del loop",
    ],
    tools: ["Notion", "Slack", "Linear"],
    color: "from-[#1d70a2]/20 to-[#00bfa5]/10",
    borderColor: "hover:border-[#1d70a2]/60",
    avatar: "#1d70a2",
  },
  {
    icon: Search,
    name: "Sam",
    role: "Diagnóstico IA",
    tagline: "Consultoría · Auditoría operacional",
    quote: "Mapeo la verdad real de tu operación, no el organigrama teórico — y te muestro dónde pierdes dinero.",
    description:
      "Audita el flujo comercial de forma agéntica y cuantifica las fugas de revenue con datos reales.",
    capabilities: [
      "Mapeo agéntico del flujo comercial end-to-end",
      "Cuantificación de fugas de revenue por etapa del pipeline",
      "Roadmap priorizado de acciones con impacto estimado",
      "Comparación de métricas actuales vs benchmarks del sector",
    ],
    tools: ["Hex", "Make.com", "OpenAI"],
    color: "from-[#0d6659]/20 to-[#1d70a2]/10",
    borderColor: "hover:border-[#0d6659]/60",
    avatar: "#0d6659",
  },
  /* ── IMPLEMENTACIÓN ── */
  {
    icon: Wrench,
    name: "Debbie",
    role: "Constructora de Sistemas IA",
    tagline: "Implementación · CRM & workflows",
    quote: "Configuro y dejo funcionando tu CRM, tus automatizaciones y tus flujos — sin que tengas que tocar nada técnico.",
    description:
      "Hace el setup y build completo del CRM, automatizaciones y estructura de pipeline.",
    capabilities: [
      "Setup y configuración inicial del CRM según el proceso comercial",
      "Build de automatizaciones y workflows internos del pipeline",
      "Estructura de etapas, propiedades y vistas del pipeline",
      "Documentación técnica de cada sistema construido",
    ],
    tools: ["HubSpot", "GoHighLevel", "Pipedrive"],
    color: "from-[#7b5ea7]/20 to-[#1d70a2]/10",
    borderColor: "hover:border-[#7b5ea7]/55",
    avatar: "#7b5ea7",
  },
  {
    icon: Link2,
    name: "Vinnie",
    role: "Especialista de Integraciones IA",
    tagline: "Implementación · Integraciones & APIs",
    quote: "Conecto todas tus herramientas para que se hablen entre sí y dejen de costarte horas.",
    description:
      "Conecta WhatsApp, CRM, pagos y cualquier API — e incrusta agentes IA en el flujo operativo.",
    capabilities: [
      "Integraciones WhatsApp + CRM + pasarela de pago en un solo flujo",
      "Conexión de APIs entre herramientas del stack del cliente",
      "Agentes IA embebidos directamente en el flujo operativo",
      "Monitoreo activo de integraciones y reparación proactiva de errores",
    ],
    tools: ["Make.com", "Zapier", "n8n"],
    color: "from-[#c2680a]/20 to-[#1d70a2]/10",
    borderColor: "hover:border-[#c2680a]/50",
    avatar: "#c2680a",
  },
  /* ── OPERACIÓN ── */
  {
    icon: Activity,
    name: "Sally",
    role: "Operadora de Revenue IA",
    tagline: "Operación · Pipeline diario",
    quote: "Corro tu pipeline todos los días: ningún lead calificado se cae, ningún follow-up se olvida.",
    description:
      "Opera el pipeline día a día: califica, hace follow-up y alerta al equipo comercial.",
    capabilities: [
      "Operación diaria del pipeline: avance, bloqueos y oportunidades",
      "Calificación automática de leads entrantes con contexto del CRM",
      "Follow-up automático por WhatsApp o email en el momento exacto",
      "Alertas al equipo comercial cuando un deal requiere atención humana",
    ],
    tools: ["HubSpot", "WhatsApp API", "Twilio"],
    color: "from-[#00bfa5]/15 to-[#1d70a2]/10",
    borderColor: "hover:border-[#00bfa5]/55",
    avatar: "#00bfa5",
  },
  {
    icon: BarChart3,
    name: "Clara",
    role: "Analista de Operación IA",
    tagline: "Operación · Inteligencia de revenue",
    quote: "Te muestro en tiempo real cómo va tu revenue y dónde está el próximo cuello de botella.",
    description:
      "Genera el dashboard de revenue en vivo, el reporte semanal y detecta anomalías antes de que escalen.",
    capabilities: [
      "Dashboard de revenue en vivo actualizado en tiempo real",
      "Reporte semanal de salud operacional cada lunes a las 9am",
      "Detección de anomalías y oportunidades en el pipeline",
      "Devuelve hallazgos clave a Alex para cerrar el ciclo cada semana",
    ],
    tools: ["Looker Studio", "Hex", "Slack"],
    color: "from-[#1d70a2]/20 to-[#0a2342]/40",
    borderColor: "hover:border-[#1d70a2]/60",
    avatar: "#1d70a2",
  },
];

const experts = [
  {
    initials: "CM",
    name: "Carlos M.",
    role: "RevOps Strategist",
    quote: "Diseño el sistema de revenue antes de tocar una sola herramienta. La arquitectura correcta es la diferencia entre un CRM que crece y uno que abandona.",
    tags: ["HubSpot", "Salesforce", "Revenue Architecture"],
    color: "bg-[#1d70a2]",
    specialties: ["Arquitectura de CRM", "Pipeline design", "Forecasting"],
  },
  {
    initials: "VR",
    name: "Valentina R.",
    role: "CRM & Automation Lead",
    quote: "Una automatización bien hecha es invisible. El equipo opera y ni siente que hay algo corriendo detrás — hasta que ve los resultados el lunes.",
    tags: ["Make.com", "n8n", "Email Marketing"],
    color: "bg-[#00bfa5]",
    specialties: ["Automatizaciones complejas", "Email sequences", "Integraciones API"],
  },
  {
    initials: "AP",
    name: "Andrés P.",
    role: "AI & Chatbot Engineer",
    quote: "Construyo agentes que entienden el negocio, no bots que siguen un script. Si el contexto cambia, el agente lo maneja — sin que nadie tenga que reprogramarlo.",
    tags: ["Agentes IA", "WhatsApp API", "Integraciones"],
    color: "bg-[#0a5c78]",
    specialties: ["Agentes de IA", "WhatsApp Business", "Integraciones en tiempo real"],
  },
  {
    initials: "LC",
    name: "Laura C.",
    role: "Account & Operations Manager",
    quote: "Mi trabajo es que el cliente nunca tenga que perseguirnos. Cada semana hay un entregable claro, y si algo cambia, ellos lo saben antes de preguntar.",
    tags: ["Onboarding", "Sprints", "Reportes"],
    color: "bg-[#7b5ea7]",
    specialties: ["Gestión de cuentas", "Sprint planning", "Customer success"],
  },
];

const weeklyOps = [
  "Campañas de email enviadas y optimizadas",
  "Bandeja de WhatsApp monitoreada y respondida",
  "Pipeline CRM limpio y al día",
  "Chatbot entrenado con nuevas respuestas",
  "Automatizaciones activas y sin errores",
  "Reporte ejecutivo listo cada lunes 9am",
];

/* ─── Component ─────────────────────────────────────────────── */

const Equipo = () => {
  const agentsRef = useScrollReveal<HTMLDivElement>();
  const expertsRef = useScrollReveal<HTMLDivElement>();
  const modelRef = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>

      {/* ── Section 1 — Hero ── */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        {/* Aurora teal orb top-right */}
        <div
          className="pointer-events-none absolute -top-24 -right-32 w-[560px] h-[560px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #00bfa5 0%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
          aria-hidden
        />

        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow
            variant="teal"
            style={{
              opacity: 0,
              animation: "v2-fade-up 0.5s ease forwards 0ms",
            }}
          >
            Tu equipo externo
          </Eyebrow>

          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{
              fontSize: "clamp(38px, 7vw, 64px)",
              lineHeight: "1.07",
              letterSpacing: "-0.02em",
              opacity: 0,
              animation: "v2-fade-up 0.55s ease forwards 80ms",
            }}
          >
            No contratas personas.{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                Activas un equipo.
              </em>
            </Underlined>
          </h1>

          <p
            className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[680px] mx-auto"
            style={{
              opacity: 0,
              animation: "v2-fade-up 0.55s ease forwards 200ms",
            }}
          >
            Desde el día uno tienes acceso a 6 agentes de IA entrenados y expertos
            humanos senior — operando tu tecnología mes a mes.
          </p>

          {/* Pill badges */}
          <div
            className="mt-10 flex flex-wrap gap-3 justify-center"
            style={{
              opacity: 0,
              animation: "v2-fade-up 0.5s ease forwards 340ms",
            }}
          >
            {[
              "6 agentes IA · 3 capas",
              "Sprint semanal",
              "Slack directo",
              "Diagnóstico desde $2,500",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 font-lato text-[13px] font-semibold text-v2-ink-muted border border-v2-border-subtle rounded-full px-4 py-1.5 bg-white"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-v2-accent-teal inline-block" />
                {pill}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* ── Section 2 — AI Agents ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] opacity-10"
          style={{ background: "radial-gradient(ellipse, #00bfa5 0%, transparent 70%)" }}
          aria-hidden
        />

        <div ref={agentsRef}>
          <Container className="relative">
            {/* Header */}
            <div className="text-center max-w-[680px] mx-auto mb-14">
              <Eyebrow variant="teal" className="v2-fade v2-d1">
                Inteligencia artificial
              </Eyebrow>
              <h2
                className="v2-reveal v2-d2 font-poppins font-bold text-white mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15" }}
              >
                6 agentes IA. 3 capas. Un ciclo cerrado.
              </h2>
              <p className="v2-fade v2-d3 font-lato text-[17px] text-white/65 mt-4 leading-[1.65]">
                Alex y Sam consultan. Debbie y Vinnie implementan. Sally y Clara operan.
                Clara devuelve los hallazgos a Alex — y el ciclo vuelve a empezar cada semana.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiAgents.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <div
                    key={agent.name}
                    className={`v2-reveal v2-d${Math.min(i + 2, 6)} group relative border border-white/10 rounded-2xl p-6 bg-gradient-to-br ${agent.color} ${agent.borderColor} hover:-translate-y-1 hover:shadow-[0_0_32px_rgba(0,191,165,0.10)] transition-[transform,border-color,box-shadow] duration-300`}
                  >
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white font-poppins font-bold text-[14px] flex-shrink-0"
                          style={{ backgroundColor: agent.avatar }}
                        >
                          {agent.name[0]}
                        </div>
                        <div>
                          <p className="font-poppins font-bold text-[15px] text-white leading-tight">{agent.name}</p>
                          <p className="font-lato text-[11px] text-white/50 mt-0.5">{agent.role}</p>
                        </div>
                      </div>
                      <div className="inline-flex items-center gap-1.5 bg-v2-accent-teal/10 border border-v2-accent-teal/20 rounded-full px-2.5 py-1 flex-shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-v2-accent-teal animate-pulse" />
                        <span className="font-lato text-[10px] font-semibold uppercase tracking-widest text-v2-accent-teal">
                          24/7
                        </span>
                      </div>
                    </div>

                    {/* Quote */}
                    <blockquote className="font-lato text-[13px] text-white/65 italic leading-[1.6] border-l-2 border-v2-accent-teal/40 pl-3 mb-4">
                      "{agent.quote}"
                    </blockquote>

                    {/* Tagline */}
                    <p className="font-lato text-[11px] font-bold text-v2-accent-teal/80 uppercase tracking-widest mb-1">
                      {agent.tagline}
                    </p>

                    {/* Capabilities */}
                    <ul className="mt-4 flex flex-col gap-2">
                      {agent.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <span className="mt-[3px] flex-shrink-0 w-4 h-4 rounded-full bg-v2-accent-teal/15 border border-v2-accent-teal/25 flex items-center justify-center">
                            <Check className="h-2.5 w-2.5 text-v2-accent-teal" strokeWidth={2.5} />
                          </span>
                          <span className="font-lato text-[12.5px] text-white/70 leading-[1.5]">
                            {cap}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tools */}
                    <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                      {agent.tools.map((tool) => (
                        <span
                          key={tool}
                          className="font-lato text-[10.5px] font-semibold text-white/50 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Section 3 — Human Experts ── */}
      <Section surface="cream" size="default">
        <div ref={expertsRef}>
          <Container>
            {/* Header */}
            <div className="text-center max-w-[640px] mx-auto mb-14">
              <Eyebrow variant="sand" className="v2-fade v2-d1">
                Equipo humano
              </Eyebrow>
              <h2
                className="v2-reveal v2-d2 font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15" }}
              >
                El criterio humano{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  detrás
                </em>
              </h2>
              <p className="v2-fade v2-d3 font-lato text-[17px] text-v2-ink-body mt-4 leading-[1.65]">
                Los expertos validan la lógica, toman decisiones estratégicas y
                están disponibles por Slack o WhatsApp.
              </p>
            </div>

            {/* Expert cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {experts.map((expert, i) => (
                <div
                  key={expert.name}
                  className={`v2-reveal v2-d${Math.min(i + 2, 6)} bg-white border border-v2-border-subtle rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] transition-[transform,box-shadow] duration-300`}
                >
                  <div
                    className={`w-14 h-14 rounded-full ${expert.color} flex items-center justify-center mb-5`}
                  >
                    <span className="font-poppins font-bold text-[18px] text-white">
                      {expert.initials}
                    </span>
                  </div>

                  <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading">
                    {expert.name}
                  </h3>
                  <p className="font-lato text-[13px] text-v2-ink-muted mt-1 leading-tight">
                    {expert.role}
                  </p>

                  <blockquote className="font-lato text-[13px] text-v2-ink-body italic leading-[1.6] border-l-2 border-v2-accent-teal/40 pl-3 mt-3 mb-4">
                    "{expert.quote}"
                  </blockquote>

                  <div className="mt-3">
                    <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-2">Especialidades</p>
                    <div className="flex flex-col gap-1.5">
                      {expert.specialties.map((s) => (
                        <div key={s} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-v2-accent-teal flex-shrink-0" />
                          <span className="font-lato text-[12px] text-v2-ink-body">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-v2-border-subtle flex flex-wrap gap-2">
                    {expert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-lato text-[11px] font-semibold text-v2-ink-muted bg-v2-surface-sand-mist border border-v2-border-subtle rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Section 4 — The Model ── */}
      <Section surface="default" size="default">
        <div ref={modelRef}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Left — dark card: what the team operates */}
              <div className="v2-reveal v2-d1 bg-v2-ink-heading rounded-2xl p-8 md:p-10">
                <Eyebrow variant="teal">Esta semana tu equipo opera</Eyebrow>
                <h3
                  className="font-poppins font-bold text-white mt-4"
                  style={{ fontSize: "clamp(20px, 3vw, 26px)", lineHeight: "1.2" }}
                >
                  Lo que el equipo opera por ti esta semana
                </h3>
                <ul className="mt-7 flex flex-col gap-4">
                  {weeklyOps.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-v2-accent-teal/15 border border-v2-accent-teal/30 flex items-center justify-center">
                        <Check className="h-3 w-3 text-v2-accent-teal" strokeWidth={2.5} />
                      </span>
                      <span className="font-lato text-[15px] text-white/80 leading-[1.55]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right — the promise */}
              <div className="v2-reveal v2-d2 flex flex-col justify-center gap-8 lg:pl-4">
                <blockquote
                  className="font-serif italic font-normal text-v2-ink-heading leading-[1.25]"
                  style={{ fontSize: "clamp(26px, 4vw, 38px)" }}
                >
                  "No son proveedores. Son tu equipo."
                </blockquote>

                <ul className="flex flex-col gap-6">
                  {[
                    {
                      title: "Sprint semanal",
                      desc: "Cada semana hay un backlog definido, tareas ejecutadas y entregadas. No hay semanas muertas.",
                    },
                    {
                      title: "Slack directo",
                      desc: "Hablas directamente con quien opera tu cuenta. Sin tickets, sin intermediarios, sin demoras de 48 horas.",
                    },
                    {
                      title: "Sin tickets, sin excusas",
                      desc: "Si algo se rompe lo sabemos antes que tú. Lo arreglamos sin que tengas que pedirlo.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-4">
                      <div className="mt-1 flex-shrink-0 w-1 h-full min-h-[40px] rounded-full bg-v2-accent-teal/30" />
                      <div>
                        <h4 className="font-poppins font-bold text-[16px] text-v2-ink-heading">
                          {item.title}
                        </h4>
                        <p className="font-lato text-[15px] text-v2-ink-body leading-[1.6] mt-1.5">
                          {item.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      {/* ── Section 5 — CTA ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #00bfa5 0%, transparent 70%)" }}
          aria-hidden
        />

        <Container size="narrow" className="relative text-center">
          <Eyebrow
            variant="teal"
            style={{ opacity: 0, animation: "v2-fade-up 0.5s ease forwards 0ms" }}
          >
            Empieza hoy
          </Eyebrow>

          <h2
            className="font-poppins font-bold text-white mt-4"
            style={{
              fontSize: "clamp(28px, 4.5vw, 48px)",
              lineHeight: "1.12",
              opacity: 0,
              animation: "v2-fade-up 0.55s ease forwards 100ms",
            }}
          >
            ¿Listo para{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">
              activar tu equipo
            </em>
            ?
          </h2>

          <p
            className="font-lato text-[17px] text-white/65 mt-5 max-w-[500px] mx-auto leading-[1.65]"
            style={{ opacity: 0, animation: "v2-fade-up 0.5s ease forwards 200ms" }}
          >
            Empieza con el Radar gratuito — en 48 horas sabes exactamente qué
            puede operar tu equipo desde el día uno.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"
            style={{ opacity: 0, animation: "v2-fade-up 0.5s ease forwards 300ms" }}
          >
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">
                Radar gratis
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
        </Container>
      </Section>

    </LayoutV2>
  );
};

export default Equipo;
