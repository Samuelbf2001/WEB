import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Database,
  UserCheck,
  Zap,
  BarChart2,
  Check,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ─────────────────────────────────────────────────── */

const aiAgents = [
  {
    icon: Mail,
    name: "Agente de Email",
    specialty: "Diseña, programa y envía campañas.",
  },
  {
    icon: MessageCircle,
    name: "Agente de WhatsApp",
    specialty: "Opera la bandeja, responde y escala.",
  },
  {
    icon: Database,
    name: "Agente CRM",
    specialty: "Limpia datos, enruta leads, actualiza el pipeline.",
  },
  {
    icon: UserCheck,
    name: "Agente de Calificación",
    specialty: "Califica leads con BANT automáticamente.",
  },
  {
    icon: Zap,
    name: "Agente de Automatización",
    specialty: "Diseña y corre workflows.",
  },
  {
    icon: BarChart2,
    name: "Agente de Reportes",
    specialty: "Genera el reporte ejecutivo cada lunes.",
  },
];

const experts = [
  {
    initials: "CM",
    name: "Carlos M.",
    role: "RevOps Strategist",
    tags: ["HubSpot", "Salesforce", "Revenue Architecture"],
    color: "bg-[#1d70a2]",
  },
  {
    initials: "VR",
    name: "Valentina R.",
    role: "CRM & Automation Lead",
    tags: ["Make.com", "n8n", "Email Marketing"],
    color: "bg-[#00bfa5]",
  },
  {
    initials: "AP",
    name: "Andrés P.",
    role: "AI & Chatbot Engineer",
    tags: ["Agentes IA", "WhatsApp API", "Integraciones"],
    color: "bg-[#0a5c78]",
  },
  {
    initials: "LC",
    name: "Laura C.",
    role: "Account & Operations Manager",
    tags: ["Onboarding", "Sprints", "Reportes"],
    color: "bg-[#7b5ea7]",
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
              transform: "translateY(12px)",
              animation: "v2-hero-entry 0.5s ease forwards 0ms",
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
              transform: "translateY(16px)",
              animation: "v2-hero-entry 0.55s ease forwards 80ms",
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
              transform: "translateY(16px)",
              animation: "v2-hero-entry 0.55s ease forwards 200ms",
            }}
          >
            Desde el día uno tienes acceso a agentes de IA entrenados y expertos
            humanos senior — operando tu tecnología mes a mes.
          </p>

          {/* Pill badges */}
          <div
            className="mt-10 flex flex-wrap gap-3 justify-center"
            style={{
              opacity: 0,
              transform: "translateY(12px)",
              animation: "v2-hero-entry 0.5s ease forwards 340ms",
            }}
          >
            {[
              "IA + humanos trabajando juntos",
              "Sprint semanal",
              "Slack directo",
              "Sin contratos de permanencia",
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
            <div className="text-center max-w-[640px] mx-auto mb-14">
              <Eyebrow variant="teal" className="v2-fade v2-d1">
                Inteligencia artificial
              </Eyebrow>
              <h2
                className="v2-reveal v2-d2 font-poppins font-bold text-white mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: "1.15" }}
              >
                Los agentes IA de tu cuenta
              </h2>
              <p className="v2-fade v2-d3 font-lato text-[17px] text-white/65 mt-4 leading-[1.65]">
                Operan 24/7. No se enferman. No rotan. Mejoran cada semana.
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {aiAgents.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <div
                    key={agent.name}
                    className={`v2-reveal v2-d${Math.min(i + 2, 6)} group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-v2-accent-teal/50 hover:shadow-[0_0_32px_rgba(0,191,165,0.12)] transition-[transform,border-color,box-shadow] duration-300`}
                  >
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-xl bg-v2-accent-teal/15 border border-v2-accent-teal/25 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-v2-accent-teal" strokeWidth={1.8} />
                    </div>

                    <h3 className="font-poppins font-bold text-[17px] text-white leading-tight">
                      {agent.name}
                    </h3>
                    <p className="font-lato text-[14px] text-white/60 mt-2 leading-[1.55]">
                      {agent.specialty}
                    </p>

                    {/* Badge */}
                    <div className="mt-5 inline-flex items-center gap-1.5 bg-v2-accent-teal/10 border border-v2-accent-teal/20 rounded-full px-3 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-v2-accent-teal animate-pulse" />
                      <span className="font-lato text-[11px] font-semibold uppercase tracking-widest text-v2-accent-teal">
                        Disponible 24/7
                      </span>
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
                  {/* Avatar circle with initials */}
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

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
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
        {/* Aurora orb */}
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-15"
          style={{ background: "radial-gradient(ellipse, #00bfa5 0%, transparent 70%)" }}
          aria-hidden
        />

        <Container size="narrow" className="relative text-center">
          <Eyebrow
            variant="teal"
            style={{
              opacity: 0,
              transform: "translateY(12px)",
              animation: "v2-hero-entry 0.5s ease forwards 0ms",
            }}
          >
            Empieza hoy
          </Eyebrow>

          <h2
            className="font-poppins font-bold text-white mt-4"
            style={{ fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: "1.12" }}
          >
            ¿Listo para{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">
              activar tu equipo
            </em>
            ?
          </h2>

          <p className="font-lato text-[17px] text-white/65 mt-5 max-w-[500px] mx-auto leading-[1.65]">
            Empieza con el Radar gratuito — en 48 horas sabes exactamente qué
            puede operar tu equipo desde el día uno.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
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
