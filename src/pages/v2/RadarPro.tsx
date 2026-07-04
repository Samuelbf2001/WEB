import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  X,
  Clock,
  Map,
  BarChart2,
  Zap,
  AlertTriangle,
  CalendarDays,
  MessageCircle,
  Users,
  Briefcase,
  Search,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// ─── Data ────────────────────────────────────────────────────────────────────

const freeItems = [
  "Auditoría de CRM (básica)",
  "Estimación de fugas de revenue",
  "Llamada opcional de 30 min",
];

const premiumItems = [
  "Auditoría completa de tech stack (CRM, email, WhatsApp, web, ads)",
  "Score de madurez digital 0–100 por área",
  "AI Readiness Score — dónde puede entrar IA hoy",
  "Mapa completo de automatizaciones y tiempo recuperable",
  "Análisis de brechas del equipo (skills gap)",
  "Roadmap priorizado de 90 días con quick wins semana 1",
  "Presentación en vivo de 60 minutos con tu equipo",
  "Acceso a canal Slack directo por 2 semanas post-entrega",
];

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Cuestionario profundo",
    time: "Día 1–2",
    desc: "25 preguntas sobre stack, equipo, objetivos y dolores actuales. Te pedimos acceso de lectura a tus herramientas para poder ir al fondo real.",
    items: [
      "25 preguntas de contexto operativo",
      "Acceso de lectura a herramientas",
      "Mapa inicial de stack declarado",
    ],
  },
  {
    number: "02",
    icon: BarChart2,
    title: "Auditoría técnica",
    time: "Día 3–5",
    desc: "Revisamos email, WhatsApp, CRM, web, ads y automatizaciones. Identificamos qué funciona, qué está roto, qué falta y qué sobra.",
    items: [
      "Revisión de cada herramienta del stack",
      "Detección de flujos rotos y configuraciones incorrectas",
      "Benchmarking contra operaciones similares",
    ],
  },
  {
    number: "03",
    icon: Zap,
    title: "Evaluación de IA",
    time: "Día 4–6",
    desc: "Identificamos dónde puede entrar IA en tu operación: calificación de leads, atención, reportes y contenido. Con estimación de tiempo recuperado por semana.",
    items: [
      "AI Readiness Score por proceso",
      "Casos de uso priorizados por impacto",
      "Estimación de horas recuperadas por semana",
    ],
  },
  {
    number: "04",
    icon: CalendarDays,
    title: "Roadmap priorizado",
    time: "Día 7–9",
    desc: "Plan de 90 días con quick wins para semana 1 y mejoras estructurales para el trimestre. Ordenado por impacto vs esfuerzo, no por preferencia del consultor.",
    items: [
      "Quick wins ejecutables en semana 1",
      "Mejoras estructurales Q1–Q2",
      "Responsables y herramientas por tarea",
    ],
  },
  {
    number: "05",
    icon: Users,
    title: "Presentación en vivo",
    time: "Día 10",
    desc: "60 minutos contigo y tu equipo. Repasamos cada hallazgo, respondemos dudas, acordamos primeros pasos. No es una presentación de slides — es una sesión de trabajo.",
    items: [
      "60 minutos de sesión en vivo",
      "Revisión de todos los hallazgos",
      "Acuerdo de primeros pasos concretos",
    ],
  },
];

const deliverables = [
  {
    icon: Map,
    title: "Mapa de stack tecnológico",
    desc: "Diagrama de todas tus herramientas y cómo deberían conectarse entre sí.",
  },
  {
    icon: BarChart2,
    title: "Score de madurez digital",
    desc: "Puntaje 0–100 por área: CRM, email, WhatsApp, IA, web y pauta publicitaria.",
  },
  {
    icon: Zap,
    title: "Mapa de automatizaciones",
    desc: "Qué se puede automatizar, cuánto tiempo recuperas y por dónde empezar.",
  },
  {
    icon: AlertTriangle,
    title: "Reporte de fugas",
    desc: "Dónde se pierde revenue hoy: leads sin atender, seguimientos caídos, secuencias rotas.",
  },
  {
    icon: CalendarDays,
    title: "Roadmap de 90 días",
    desc: "Prioridades semana a semana con responsables y herramientas recomendadas.",
  },
  {
    icon: MessageCircle,
    title: "Acceso Slack 2 semanas",
    desc: "Canal directo con el equipo post-entrega para resolver dudas de implementación.",
  },
];

const personas = [
  {
    icon: Briefcase,
    title: "Fundador que ya tiene herramientas",
    desc: "Tienes HubSpot, Make y WhatsApp pero nadie que los opere en conjunto. Quieres saber qué arreglar primero y en qué orden.",
  },
  {
    icon: Search,
    title: "Empresa que va a invertir en tecnología",
    desc: "Antes de contratar a alguien o firmar con una agencia, quieres saber exactamente qué necesitas — y qué no.",
  },
  {
    icon: AlertTriangle,
    title: "Equipo que siente que algo no está funcionando",
    desc: "Las métricas no cuadran, los leads se pierden, pero no sabes exactamente dónde está el quiebre.",
  },
];

const investmentIncludes = [
  "Auditoría completa de tech stack (6 áreas)",
  "Score de madurez digital 0–100",
  "AI Readiness Score con casos de uso",
  "Mapa de automatizaciones y tiempo recuperado",
  "Reporte de fugas de revenue",
  "Roadmap de 90 días priorizado",
  "Presentación en vivo de 60 min",
  "Acceso Slack 2 semanas post-entrega",
];

// ─── Component ───────────────────────────────────────────────────────────────

const RadarPro = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();
  const ref4 = useScrollReveal<HTMLDivElement>();
  const ref5 = useScrollReveal<HTMLDivElement>();

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LayoutV2>
      {/* ── Section 1: Hero ───────────────────────────────────────────────── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        {/* Aurora teal orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full opacity-60"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.10) 0%, transparent 68%)",
            animation: "v2-aurora-1 16s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, rgba(29,112,162,0.08) 0%, transparent 65%)",
            animation: "v2-aurora-1 22s ease-in-out infinite reverse",
          }}
        />

        <Container size="narrow" className="text-center pt-8">
          <Eyebrow variant="teal">Diagnóstico Premium</Eyebrow>
          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(40px, 7vw, 68px)", lineHeight: "1.05", letterSpacing: "-0.025em" }}
          >
            Radar 360°:{" "}
            <em className="font-serif italic font-normal">el mapa completo</em>{" "}
            de tu tecnología.
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[640px] mx-auto">
            No es una auditoría de CRM. Es una radiografía de toda tu operación tecnológica — email,
            WhatsApp, IA, automatizaciones, web y pauta — con un plan de acción priorizado.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/573004188522?text=Hola%2C%20quiero%20el%20Radar%20360%C2%B0"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonV2 variant="primary" size="lg">
                Solicitar Radar 360°
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </a>
            <a href="#que-incluye" onClick={scrollToSection("que-incluye")}>
              <ButtonV2 variant="outline" size="lg">
                Ver qué incluye ↓
              </ButtonV2>
            </a>
          </div>
        </Container>
      </Section>

      {/* ── Section 2: Comparison ─────────────────────────────────────────── */}
      <Section surface="alt" size="default" id="que-incluye">
        <Container>
          <div ref={ref1}>
            <div className="text-center max-w-[580px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Qué cambia</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                No es el mismo radar.{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Es otro nivel</em>.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
              {/* Free Radar */}
              <div className="v2-reveal v2-d1 bg-white border border-v2-border-subtle rounded-2xl p-8">
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-ink-muted mb-1">
                  Incluido en
                </p>
                <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Radar gratis</h3>
                <p className="font-lato text-[14px] text-v2-ink-muted mt-1">48 horas · Sin costo</p>

                <ul className="mt-7 flex flex-col gap-4">
                  {freeItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-v2-surface-alt flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-v2-ink-muted" />
                      </div>
                      <span className="font-lato text-[15px] text-v2-ink-muted">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-v2-border-subtle">
                  <Link
                    to="/radar"
                    className="font-lato text-[14px] font-medium text-v2-accent-blue hover:text-v2-ink-heading transition-colors inline-flex items-center gap-1"
                  >
                    Pedir el Radar gratis
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Radar 360 */}
              <div className="v2-reveal v2-d2 bg-v2-ink-heading rounded-2xl p-8 relative overflow-hidden">
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 right-0 w-[280px] h-[280px] rounded-full"
                  style={{
                    background: "radial-gradient(circle, rgba(0,191,165,0.12) 0%, transparent 68%)",
                  }}
                />
                <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-accent-teal/70 mb-1 relative">
                  Diagnóstico premium
                </p>
                <h3 className="font-poppins font-bold text-[22px] text-white relative">Radar 360°</h3>
                <p className="font-lato text-[14px] text-white/50 mt-1 relative">
                  10 días hábiles · $1,500 USD
                </p>

                <ul className="mt-7 flex flex-col gap-3.5 relative">
                  {premiumItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-v2-accent-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-v2-accent-teal" />
                      </div>
                      <span className="font-lato text-[15px] font-medium text-white">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10 relative">
                  <a
                    href="https://wa.me/573004188522?text=Hola%2C%20quiero%20el%20Radar%20360%C2%B0"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-lato text-[14px] font-semibold text-v2-accent-teal hover:text-white transition-colors"
                  >
                    Solicitar el Radar 360°
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 3: Process ────────────────────────────────────────────── */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[640px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="teal">El proceso</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Cómo funciona el Radar 360°
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                Cinco pasos. Diez días hábiles. Un plan que puedes ejecutar.
              </p>
            </div>

            {/* Vertical timeline */}
            <div className="max-w-[780px] mx-auto">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isLast = i === steps.length - 1;
                return (
                  <div key={step.number} className={`v2-reveal v2-d${Math.min(i + 1, 4)} relative flex gap-6 md:gap-10 ${isLast ? "" : "pb-8"}`}>
                    {/* Timeline line */}
                    {!isLast && (
                      <div className="absolute left-[22px] top-[44px] bottom-0 w-px bg-v2-border-subtle" />
                    )}

                    {/* Step dot */}
                    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-v2-surface-teal-mist border-2 border-v2-accent-teal/30 flex items-center justify-center relative z-10">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>

                    {/* Content */}
                    <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 md:p-7 flex-1 mb-4 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300">
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-lato text-[11px] font-semibold uppercase tracking-widest text-v2-ink-muted bg-v2-surface-alt px-3 py-1 rounded-full">
                          <Clock className="h-3 w-3" />
                          {step.time}
                        </span>
                      </div>
                      <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-3">
                        {step.desc}
                      </p>
                      <ul className="mt-4 flex flex-col gap-2">
                        {step.items.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <Check className="h-4 w-4 mt-0.5 text-v2-accent-teal-deep flex-shrink-0" />
                            <span className="font-lato text-[13px] text-v2-ink-body">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 4: Deliverables ───────────────────────────────────────── */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={ref3}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">Lo que recibes</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Lo que recibes al final
              </h2>
              <p className="font-lato text-[17px] text-v2-ink-body leading-[1.6] mt-4">
                No es un PDF genérico. Es documentación ejecutiva que puedes usar desde el día uno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverables.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className={`v2-reveal v2-d${Math.min(i + 1, 4)} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] hover:-translate-y-1 transition-[transform,box-shadow] duration-300`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading leading-tight">
                      {d.title}
                    </h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">{d.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 5: For whom ───────────────────────────────────────────── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        {/* Aurora orbs */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.11) 0%, transparent 65%)",
            animation: "v2-aurora-1 18s ease-in-out infinite",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(29,112,162,0.12) 0%, transparent 65%)",
            animation: "v2-aurora-1 24s ease-in-out infinite reverse",
          }}
        />

        <Container>
          <div ref={ref4}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal" className="text-v2-accent-teal">
                Para quién es
              </Eyebrow>
              <h2
                className="font-poppins font-bold text-white mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Para quién es el Radar 360°
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 relative">
              {personas.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className={`v2-reveal v2-d${i + 1} bg-white/5 border border-v2-accent-teal/20 rounded-2xl p-7 hover:bg-white/8 hover:border-v2-accent-teal/40 transition-[background-color,border-color] duration-300`}
                  >
                    <div className="w-11 h-11 rounded-xl bg-v2-accent-teal/10 flex items-center justify-center mb-5">
                      <Icon className="h-5 w-5 text-v2-accent-teal" />
                    </div>
                    <h3 className="font-poppins font-bold text-[18px] text-white leading-snug">
                      {p.title}
                    </h3>
                    <p className="font-lato text-[14px] text-white/65 leading-[1.65] mt-3">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 6: Investment ─────────────────────────────────────────── */}
      <Section surface="sand-mist" size="default">
        <Container>
          <div ref={ref5}>
            <div className="text-center max-w-[580px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="sand">Inversión</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15" }}
              >
                Una inversión con retorno claro.
              </h2>
            </div>

            <div className="v2-reveal v2-d2 max-w-[520px] mx-auto bg-white rounded-3xl shadow-[0_24px_64px_rgba(10,35,66,0.10)] p-10 md:p-12 text-center">
              <p className="font-lato text-[13px] font-semibold uppercase tracking-[0.18em] text-v2-ink-muted mb-3">
                Diagnóstico Premium · Pago único
              </p>
              <p
                className="font-poppins font-bold text-v2-ink-heading"
                style={{ fontSize: "clamp(48px, 8vw, 72px)", lineHeight: "1", letterSpacing: "-0.02em" }}
              >
                $1,500{" "}
                <span className="text-[28px] font-semibold text-v2-ink-muted">USD</span>
              </p>
              <p className="font-lato text-[15px] text-v2-ink-body mt-2">
                Entrega en 10 días hábiles
              </p>

              <ul className="mt-8 flex flex-col gap-3 text-left">
                {investmentIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-v2-surface-teal-mist flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-v2-accent-teal-deep" />
                    </div>
                    <span className="font-lato text-[14px] text-v2-ink-body">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://wa.me/573004188522?text=Hola%2C%20quiero%20el%20Radar%20360%C2%B0"
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <ButtonV2 variant="primary" size="lg" className="w-full">
                    Solicitar el Radar 360°
                    <ArrowRight className="h-4 w-4" />
                  </ButtonV2>
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-v2-border-subtle">
                <p className="font-lato text-[13px] text-v2-ink-muted">
                  ¿Prefieres el diagnóstico gratuito primero?
                </p>
                <Link
                  to="/radar"
                  className="inline-flex items-center gap-1 font-lato text-[14px] font-medium text-v2-accent-blue hover:text-v2-ink-heading transition-colors mt-1"
                >
                  → Radar gratis en 48h
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Section 7: Final CTA ──────────────────────────────────────────── */}
      <Section surface="navy-dark" size="default" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,191,165,0.10) 0%, transparent 60%)",
            animation: "v2-aurora-1 20s ease-in-out infinite",
          }}
        />
        <Container size="narrow" className="text-center relative">
          <Eyebrow variant="teal" className="text-v2-accent-teal">
            Primer paso
          </Eyebrow>
          <h2
            className="font-poppins font-bold text-white mt-4"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", lineHeight: "1.1" }}
          >
            ¿Listo para ver el mapa completo de tu tecnología?
          </h2>
          <p className="font-lato text-[17px] text-white/65 leading-[1.65] mt-6 max-w-[480px] mx-auto">
            Diez días. Un diagnóstico completo. Un plan que puedes ejecutar desde el primer día.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/573004188522?text=Hola%2C%20quiero%20el%20Radar%20360%C2%B0"
              target="_blank"
              rel="noreferrer"
            >
              <ButtonV2 variant="primary" size="lg">
                Solicitar Radar 360°
                <ArrowRight className="h-4 w-4" />
              </ButtonV2>
            </a>
            <Link to="/contacto">
              <ButtonV2
                variant="outline"
                size="lg"
                className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10 hover:!border-white/50"
              >
                Hablar con un experto
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default RadarPro;
