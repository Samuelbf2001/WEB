import { Link } from "react-router-dom";
import {
  ArrowRight,
  Star,
  MessageSquare,
  GitBranch,
  CheckCircle2,
  Search,
  Mail,
  MessageCircle,
  Database,
  Lightbulb,
  ListChecks,
  BookOpen,
  Palette,
  Shield,
  Compass,
  Wrench,
  Link2,
  Activity,
  BarChart3,
} from "lucide-react";
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

/* ── Data ── */

const steps = [
  {
    icon: MessageSquare,
    title: "Tú pides",
    desc: "Mandas tu necesidad por Slack, WhatsApp o Loom. Lo que sea: copy, automatización, video, reporte, integración.",
  },
  {
    icon: GitBranch,
    title: "Nosotros decidimos",
    desc: "Asignamos al agente IA o al humano correcto según la tarea. Tú no tienes que pensar quién hace qué.",
  },
  {
    icon: CheckCircle2,
    title: "Te llega hecho",
    desc: "Entrega lista para usar o publicar. Iteramos contigo hasta que quede como necesitas.",
  },
];

const aiLayers = [
  {
    label: "CONSULTORÍA",
    agents: [
      { icon: Compass, name: "Alex",  role: "Estratega & Concierge IA", color: "#1d70a2" },
      { icon: Search,  name: "Sam",   role: "Diagnóstico IA",            color: "#0d6659" },
    ],
  },
  {
    label: "IMPLEMENTACIÓN",
    agents: [
      { icon: Wrench, name: "Debbie", role: "Constructora de Sistemas IA",      color: "#7b5ea7" },
      { icon: Link2,  name: "Vinnie", role: "Especialista de Integraciones IA", color: "#c2680a" },
    ],
  },
  {
    label: "OPERACIÓN",
    agents: [
      { icon: Activity,  name: "Sally", role: "Operadora de Revenue IA",  color: "#00bfa5" },
      { icon: BarChart3, name: "Clara", role: "Analista de Operación IA", color: "#1d70a2" },
    ],
  },
];

const humans = [
  { initials: "JR", bg: "#00bfa5",  text: "#0a2342", name: "Juan R.",  role: "Estratega RevOps" },
  { initials: "MA", bg: "#1d70a2",  text: "#ffffff",  name: "María A.", role: "Operador CRM & datos" },
  { initials: "DC", bg: "#d4a853",  text: "#0a2342",  name: "Diego C.", role: "Diseñador de automatizaciones" },
];

const channels = [
  { icon: Lightbulb,    title: "Ideas",     desc: "Mandas un Loom o un voice note. Las convertimos en sistemas funcionando." },
  { icon: MessageCircle, title: "Chats",    desc: "Hablas con nosotros en Slack como si fuéramos tu equipo interno. Sin tickets." },
  { icon: ListChecks,   title: "Tareas",    desc: "Mandas una tarea concreta. La hacemos en 1–3 días." },
  { icon: BookOpen,     title: "Playbooks", desc: "Tienes un proceso que se repite. Lo convertimos en automatización." },
  { icon: Palette,      title: "Marca",     desc: "Subes tus assets una vez. Todo lo que entregamos sale con tu marca." },
];

const timeline = [
  { phase: "Día 1",     title: "Setup",              desc: "Activamos tu Slack, conectamos tu stack, asignamos tu equipo." },
  { phase: "Día 2–3",   title: "Primera entrega",    desc: "Recibes tus primeras tareas operando. Reportamos qué se hizo." },
  { phase: "Semana 1",  title: "Sprint en marcha",   desc: "Cadencia semanal estabilizada. Slack abierto 24/5." },
  { phase: "Mes 1",     title: "Sistema vivo",       desc: "Tu operación tech corre sin que la empujes. Reporte ejecutivo el primer lunes." },
];

const faqs = [
  {
    q: "¿Cómo les mando las tareas?",
    a: "Por Slack, WhatsApp, email o Loom. Lo que ya uses. Sin sistemas de tickets ni portales que aprender.",
  },
  {
    q: "¿Cuánto tarda una entrega?",
    a: "Tareas chicas (copy, posts, edits): 1–3 días hábiles. Automatizaciones e integraciones: 3–7 días. Cada plan tiene su SLA.",
  },
  {
    q: "¿Cómo deciden si lo hace IA o un humano?",
    a: "Lo decidimos nosotros según la tarea. IA para lo repetitivo y de alto volumen. Humanos para lo que requiere criterio o creatividad. Tú no te enteras — solo recibes el resultado.",
  },
  {
    q: "¿Puedo cambiar de plan?",
    a: "Sí, en cualquier momento. Subes o bajas con 30 días de aviso.",
  },
  {
    q: "¿Trabajan con mi stack actual?",
    a: "Sí. HubSpot, Pipedrive, Salesforce, GHL, Make, Zapier, n8n, WordPress, Webflow — y muchos más. Si no lo conocemos, lo aprendemos.",
  },
  {
    q: "¿Qué pasa si no estoy contento?",
    a: "Garantía de 30 días money-back. Después, te puedes ir cuando quieras sin penalidad.",
  },
];

/* ── Page ── */

const ComoFunciona = () => {
  const refProcess   = useScrollReveal<HTMLDivElement>();
  const refTeam      = useScrollReveal<HTMLDivElement>();
  const refChannels  = useScrollReveal<HTMLDivElement>();
  const refAction    = useScrollReveal<HTMLDivElement>();
  const refGuarantee = useScrollReveal<HTMLDivElement>();
  const refTimeline  = useScrollReveal<HTMLDivElement>();
  const refFaq       = useScrollReveal<HTMLDivElement>();
  const refCta       = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>

      {/* ── S1 · Hero ── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.14) 0%, transparent 70%)" }}
        />
        <Container size="narrow" className="text-center pt-6 relative">
          <Eyebrow variant="teal">Cómo funciona</Eyebrow>
          <h1
            className="font-poppins font-black text-v2-ink-heading mt-4 leading-[1.05] tracking-[-0.025em]"
            style={{ fontSize: "clamp(36px, 7vw, 62px)" }}
          >
            No tienes que aprender{" "}
            <em className="font-serif italic font-normal">un sistema nuevo.</em>
          </h1>
          <p className="font-lato text-[18px] md:text-[19px] text-v2-ink-body leading-[1.65] mt-7 max-w-[560px] mx-auto">
            Tú dices qué necesitas en Slack, WhatsApp o Loom. Nosotros decidimos si lo hace IA o un humano — y te lo entregamos.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/contacto">
              <ButtonV2 variant="primary" size="lg">
                Agendar una llamada
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </Link>
            <Link to="/v2/radar">
              <ButtonV2 variant="outline" size="lg">
                Hacer mi auditoría gratis
              </ButtonV2>
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#d4a853] text-[#d4a853]" aria-hidden />
              ))}
            </div>
            <span className="font-lato text-[13px] text-v2-ink-muted">30+ clientes operando con Sixteam</span>
          </div>
        </Container>
      </Section>

      {/* ── S2 · Process Overview ── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={refProcess}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">El flujo</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                Tú pides. Nosotros operamos.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Tu negocio crece.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-8 hover:shadow-[0_12px_40px_rgba(10,35,66,0.08)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" aria-hidden />
                    </div>
                    <span className="font-serif italic text-[42px] leading-none text-v2-accent-teal/10 block -mt-1 mb-1 select-none" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading mt-2">{s.title}</h3>
                    <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-3">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S3 · Team Composition ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[460px] h-[460px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)" }}
        />
        <Container>
          <div ref={refTeam}>
            <div className="text-center max-w-[680px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal" className="text-v2-accent-teal">Tu equipo</Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-3 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                6 agentes IA + 3 humanos senior,{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">operando en 3 capas.</em>
              </h2>
              <p className="font-lato text-[17px] text-white/65 leading-[1.6] mt-4">
                Cada agente vive en una capa: Consultoría, Implementación u Operación. El ciclo se cierra cada semana.
              </p>
            </div>

            <div className="space-y-4">
              {/* AI Agents — 3 layer columns */}
              <div className="v2-reveal v2-d1">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-3">Agentes IA · 3 capas</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {aiLayers.map((layer) => (
                    <div key={layer.label} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                      <div className="px-4 py-2 border-b border-white/10">
                        <span className="font-lato text-[9px] font-bold uppercase tracking-[0.22em] text-v2-accent-teal">
                          {layer.label}
                        </span>
                      </div>
                      <div className="flex flex-col divide-y divide-white/10">
                        {layer.agents.map((a) => {
                          const Icon = a.icon;
                          return (
                            <div
                              key={a.name}
                              className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors duration-200"
                            >
                              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${a.color}30` }}>
                                <Icon className="h-3.5 w-3.5" style={{ color: a.color }} aria-hidden />
                              </div>
                              <div className="min-w-0">
                                <p className="font-poppins font-bold text-[13px] text-white leading-tight">{a.name}</p>
                                <p className="font-lato text-[10px] text-white/50 mt-0.5 leading-tight">{a.role}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Humans row */}
              <div className="v2-reveal v2-d2">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-white/40 mb-3 mt-2">Humanos asignados</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {humans.map((h) => (
                    <div
                      key={h.initials}
                      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:bg-white/8 hover:border-white/20 transition-colors duration-300"
                    >
                      <div
                        className="w-9 h-9 rounded-full flex items-center justify-center font-poppins font-bold text-[12px] flex-shrink-0"
                        style={{ background: h.bg, color: h.text }}
                      >
                        {h.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-poppins font-bold text-[13px] text-white leading-tight">{h.name}</p>
                        <p className="font-lato text-[11px] text-white/50 mt-0.5 leading-tight">{h.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S4 · 5 Ways to Send Work ── */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={refChannels}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Cómo nos pides trabajo</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                Cinco formas de delegarnos.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Eso es toda la operación.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {channels.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={c.title}
                    className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-6 hover:border-v2-accent-teal/30 hover:shadow-[0_8px_28px_rgba(0,191,165,0.09)] hover:-translate-y-1 transition-[transform,box-shadow,border-color] duration-300`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" aria-hidden />
                    </div>
                    <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading">{c.title}</h3>
                    <p className="font-lato text-[13px] text-v2-ink-body leading-[1.65] mt-2">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S5 · In Action ── */}
      <Section surface="default" size="default">
        <Container size="narrow">
          <div ref={refAction}>
            <div className="text-center max-w-[600px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">En acción</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                Un ejemplo real:{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">pedir contenido para LinkedIn.</em>
              </h2>
            </div>

            {/* Conversation */}
            <div className="v2-reveal v2-d1 space-y-5 max-w-[620px] mx-auto">
              {/* User bubble */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-v2-surface-alt border border-v2-border-subtle flex items-center justify-center font-poppins font-bold text-[12px] text-v2-ink-heading flex-shrink-0 mt-0.5">
                  Tú
                </div>
                <div className="bg-v2-surface-alt border border-v2-border-subtle rounded-2xl rounded-tl-sm px-5 py-4 max-w-[480px]">
                  <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65]">
                    Necesito 4 posts de LinkedIn esta semana sobre cómo escalamos pipeline con IA.
                  </p>
                </div>
              </div>

              {/* Sam bubble */}
              <div className="flex items-start gap-3 justify-end">
                <div className="bg-[#0a2342] rounded-2xl rounded-tr-sm px-5 py-4 max-w-[480px]" style={{ border: "1px solid rgba(123,94,167,0.3)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#7b5ea730" }}>
                      <Database className="h-3 w-3" style={{ color: "#7b5ea7" }} aria-hidden />
                    </div>
                    <span className="font-poppins font-bold text-[12px]" style={{ color: "#7b5ea7" }}>Sam — CRM Ops</span>
                  </div>
                  <p className="font-lato text-[14px] text-white/80 leading-[1.65]">
                    Pulé los datos de las 3 cuentas que escalaron este trimestre — los pasé a Clara con métricas reales.
                  </p>
                </div>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-poppins font-bold text-[12px] text-white flex-shrink-0 mt-0.5" style={{ background: "#7b5ea7" }}>
                  S
                </div>
              </div>

              {/* Clara bubble */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-poppins font-bold text-[12px] text-white flex-shrink-0 mt-0.5" style={{ background: "#0d6659" }}>
                  C
                </div>
                <div className="bg-[#0d6659]/10 border border-[#0d6659]/20 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[480px]">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#0d665920" }}>
                      <Mail className="h-3 w-3" style={{ color: "#0d6659" }} aria-hidden />
                    </div>
                    <span className="font-poppins font-bold text-[12px]" style={{ color: "#0d6659" }}>Clara — Nurturing</span>
                  </div>
                  <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65]">
                    Listo: 4 posts redactados, dos carruseles diseñados, agendados para Mar–Vie. Aquí están los drafts ↓
                  </p>
                </div>
              </div>
            </div>

            {/* Post mockups */}
            <div className="v2-reveal v2-d2 mt-8 grid grid-cols-4 gap-3 max-w-[620px] mx-auto">
              {["Mar", "Mar", "Jue", "Vie"].map((day, i) => (
                <div key={i} className="bg-v2-surface-alt border border-v2-border-subtle rounded-xl p-3 aspect-[4/5]">
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-4 h-4 rounded-full bg-[#0d6659]/30 flex-shrink-0" />
                    <div className="h-1.5 bg-v2-border-subtle rounded-full flex-1" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 bg-v2-border-medium/60 rounded-full w-full" />
                    <div className="h-1.5 bg-v2-border-medium/60 rounded-full w-5/6" />
                    <div className="h-1.5 bg-v2-border-medium/60 rounded-full w-4/5" />
                  </div>
                  <div className="mt-3 h-12 bg-v2-accent-teal/8 rounded-lg border border-v2-accent-teal/15" />
                  <p className="font-lato text-[9px] text-v2-ink-muted mt-2 text-center uppercase tracking-widest">{day}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S6 · Guarantee + Team ── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={refGuarantee}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left — Guarantee */}
              <div className="v2-reveal bg-white border border-v2-border-subtle rounded-3xl p-10 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] transition-shadow duration-300">
                <div className="w-14 h-14 rounded-2xl bg-v2-surface-teal-mist flex items-center justify-center mb-6">
                  <Shield className="h-7 w-7 text-v2-accent-teal-deep" aria-hidden />
                </div>
                <h2
                  className="font-poppins font-bold text-v2-ink-heading leading-[1.1] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
                >
                  Garantía de 30 días.
                </h2>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                  Si en los primeros 30 días no ves valor operacional concreto, te devolvemos el 100%. Sin discusión, sin formularios largos.
                </p>
                <div className="mt-6">
                  <Link to="/v2/radar">
                    <ButtonV2 variant="primary" size="md">
                      Hacer mi auditoría gratis
                      <ArrowRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>

              {/* Right — Compact team */}
              <div className="v2-reveal v2-d1 bg-white border border-v2-border-subtle rounded-3xl p-8">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-ink-muted mb-4">Tu equipo asignado</p>
                <div className="space-y-3">
                  {aiLayers.map((layer) => (
                    <div key={layer.label}>
                      <p className="font-lato text-[9px] font-bold uppercase tracking-[0.22em] text-v2-accent-teal-deep mb-2">
                        {layer.label}
                      </p>
                      {layer.agents.map((a) => {
                        const Icon = a.icon;
                        return (
                          <div key={a.name} className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${a.color}20` }}>
                              <Icon className="h-3.5 w-3.5" style={{ color: a.color }} aria-hidden />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="font-poppins font-bold text-[13px] text-v2-ink-heading">{a.name}</span>
                              <span className="font-lato text-[12px] text-v2-ink-muted ml-2">{a.role}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                              </span>
                              <span className="font-lato text-[10px] text-v2-ink-muted">24/7</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                  <div className="border-t border-v2-border-subtle pt-3 space-y-3">
                    {humans.map((h) => (
                      <div key={h.initials} className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center font-poppins font-bold text-[11px] flex-shrink-0"
                          style={{ background: h.bg, color: h.text }}
                        >
                          {h.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="font-poppins font-bold text-[13px] text-v2-ink-heading">{h.name}</span>
                          <span className="font-lato text-[12px] text-v2-ink-muted ml-2">{h.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stat strip */}
            <div className="v2-reveal v2-d2 mt-8 bg-white border border-v2-border-subtle rounded-2xl px-8 py-5">
              <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-center">
                {["30+ clientes activos", "698,432+ tareas completadas", "24/7 operación", "Sin contratos de permanencia"].map((s) => (
                  <span key={s} className="font-lato text-[13px] text-v2-ink-muted">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S7 · Timeline ── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.2) 0%, transparent 70%)" }}
        />
        <Container>
          <div ref={refTimeline}>
            <div className="text-center max-w-[600px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="teal" className="text-v2-accent-teal">Tu primer mes</Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-3 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                Desde que firmas hasta{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">los primeros resultados.</em>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connector line (lg+) */}
              <div aria-hidden className="hidden lg:block absolute top-[22px] left-[12.5%] right-[12.5%] h-px bg-white/10" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {timeline.map((t, i) => (
                  <div key={t.phase} className={`v2-reveal v2-d${i + 1} relative flex flex-col`}>
                    <div className="flex items-center gap-3 mb-4 lg:flex-col lg:items-start lg:gap-0">
                      <div className="w-11 h-11 rounded-full bg-v2-accent-teal/15 border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0 lg:mb-4 relative z-10">
                        <span className="font-poppins font-bold text-[11px] text-v2-accent-teal">{i + 1}</span>
                      </div>
                      <div className="lg:mt-0">
                        <span className="font-poppins font-bold text-[12px] uppercase tracking-widest text-v2-accent-teal block">{t.phase}</span>
                      </div>
                    </div>
                    <h3 className="font-poppins font-bold text-[18px] text-white mb-2">{t.title}</h3>
                    <p className="font-lato text-[14px] text-white/60 leading-[1.65]">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── S8 · FAQ ── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={refFaq}>
            <div className="text-center max-w-[600px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">FAQ</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
              >
                Preguntas frecuentes sobre{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">cómo trabajamos.</em>
              </h2>
            </div>
            <div className="max-w-[760px] mx-auto v2-reveal v2-d1">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-v2-border-subtle">
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
        </Container>
      </Section>

      {/* ── S9 · Final CTA ── */}
      <Section surface="navy-dark" size="spacious" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)" }}
        />
        <Container size="narrow">
          <div ref={refCta}>
            <div className="v2-reveal text-center">
              <Eyebrow variant="teal" className="text-v2-accent-teal">Empieza por aquí</Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-4 leading-[1.05] tracking-[-0.025em]"
                style={{ fontSize: "clamp(30px, 5vw, 52px)" }}
              >
                Listo para dejar de{" "}
                <Underlined color="teal" variant="scribble">
                  <em className="font-serif italic font-normal text-v2-accent-teal">operar todo tú.</em>
                </Underlined>
              </h2>
              <p className="font-lato text-[17px] text-white/65 leading-[1.65] mt-6 max-w-[500px] mx-auto">
                Empieza con la auditoría gratis. 48 horas para ver dónde tu tecnología está sin operar — y cuánto está costando.
              </p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
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
                    Agendar una llamada de 30 min
                  </ButtonV2>
                </Link>
              </div>
              <p className="font-lato italic text-[13px] text-white/40 mt-7">
                30+ clientes ya operando · 698,432+ tareas completadas · Garantía 30 días
              </p>
            </div>
          </div>
        </Container>
      </Section>

    </LayoutV2>
  );
};

export default ComoFunciona;
