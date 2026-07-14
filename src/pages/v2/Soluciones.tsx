import { Link } from "react-router-dom";
import {
  ArrowRight, Search, Hammer, Zap, Check, Bot, Users,
  BarChart3, MessageSquare, Brain, Wrench, Star, ChevronRight,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import TuEquipoV2 from "@/components/v2/sections/TuEquipoV2";
/* ── Primitives ──────────────────────────────────────────────────── */

const CheckItem: React.FC<{ text: React.ReactNode }> = ({ text }) => (
  <div className="flex items-start gap-2.5">
    <div className="w-4 h-4 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0 mt-0.5">
      <Check className="h-2.5 w-2.5 text-v2-accent-teal-deep" />
    </div>
    <span className="font-lato text-[14px] text-v2-ink-body leading-snug">{text}</span>
  </div>
);

const SectionBadge: React.FC<{ n: string; label: string; color?: "blue" | "teal" }> = ({ n, label, color = "teal" }) => (
  <div className="flex items-center gap-3 mb-8">
    <div className={`flex items-center gap-2.5 px-4 py-2 rounded-full border ${
      color === "blue"
        ? "bg-v2-surface-navy-mist border-v2-accent-blue/25 text-v2-accent-blue"
        : "bg-v2-surface-teal-mist border-v2-accent-teal/25 text-v2-accent-teal-deep"
    }`}>
      <span className="font-lato text-[10px] font-bold uppercase tracking-widest opacity-60">{n}</span>
      <span className="font-lato text-[11px] font-bold uppercase tracking-widest">{label}</span>
    </div>
    <div className="h-px flex-1 bg-v2-border-subtle" />
  </div>
);

/* ── Ops comparison row (light) ─────────────────────────────────── */
const OpsRow: React.FC<{ label: string; base: React.ReactNode; avanzado: React.ReactNode; highlight?: boolean }> = ({
  label, base, avanzado, highlight,
}) => (
  <div className={`grid grid-cols-[1fr_auto_auto] items-center gap-4 py-3 border-b border-v2-border-subtle last:border-0 ${highlight ? "bg-v2-surface-teal-mist/50 -mx-5 px-5 rounded-lg" : ""}`}>
    <span className="font-lato text-[13px] text-v2-ink-muted">{label}</span>
    <span className="font-lato text-[13px] text-v2-ink-body text-right w-[110px]">{base}</span>
    <span className="font-lato text-[13px] text-v2-accent-teal-deep font-semibold text-right w-[130px]">{avanzado}</span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════ */

const Soluciones = () => {
  return (
    <LayoutV2>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(29,112,162,0.10) 0%, transparent 70%)" }} />
        <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 w-[360px] h-[360px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.10) 0%, transparent 70%)" }} />

        <Container size="narrow" className="relative text-center pt-8">
          <div>
            <div>
              <Eyebrow variant="teal">Las tres soluciones</Eyebrow>
              <h1 className="font-poppins font-bold text-v2-ink-heading mt-4"
                style={{ fontSize: "clamp(38px, 6.5vw, 64px)", lineHeight: "1.06", letterSpacing: "-0.025em" }}>
                Entender.{" "}
                <em className="font-serif italic font-normal">Construir.</em>{" "}
                Operar.
              </h1>
              <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[560px] mx-auto">
                Sixteam no vende productos sueltos. Vende un recorrido donde cada solución prepara
                la siguiente — y la tercera es donde vive el negocio real.
              </p>
            </div>

            {/* Journey pills */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2">
              {[
                { n: "01", label: "Assessment", sub: "$2,500 · único",     cls: "border-v2-border-medium bg-white text-v2-ink-heading" },
                { n: "02", label: "Transform",  sub: "Desde $1,500 · proyecto", cls: "border-v2-border-medium bg-white text-v2-ink-heading" },
                { n: "03", label: "Ops ⭐",     sub: "Promo desde $200/mes",     cls: "border-v2-accent-teal bg-v2-surface-teal-mist text-v2-accent-teal-deep shadow-[0_4px_16px_rgba(0,191,165,0.15)]", bold: true },
              ].map((step, i) => (
                <div key={step.n} className="flex items-center gap-2">
                  <div className={`flex flex-col items-center px-5 py-3.5 rounded-2xl border transition-transform hover:-translate-y-0.5 duration-200 ${step.cls}`}>
                    <span className="font-lato text-[10px] font-bold uppercase tracking-widest opacity-50">{step.n}</span>
                    <span className={`font-poppins font-bold text-[15px] mt-0.5 ${step.bold ? "text-v2-accent-teal-deep" : ""}`}>{step.label}</span>
                    <span className="font-lato text-[11px] mt-0.5 opacity-60">{step.sub}</span>
                  </div>
                  {i < 2 && <ChevronRight className="h-4 w-4 text-v2-ink-muted/40 flex-shrink-0 hidden sm:block" />}
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/radar">
                <ButtonV2 variant="primary" size="lg">
                  Diagnóstico gratis <ArrowRight className="h-4 w-4" />
                </ButtonV2>
              </Link>
              <Link to="/contacto">
                <ButtonV2 variant="outline" size="lg">Hablar con un experto</ButtonV2>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SOLUCIÓN 1: ASSESSMENT ────────────────────────────────── */}
      <Section surface="cream" size="default" id="assessment" className="scroll-mt-24">
        <Container>
          <div>
            <SectionBadge n="Solución 01" label="Assessment · $2,500 USD · 10-14 días · pago único" color="blue" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-v2-surface-navy-mist border border-v2-accent-blue/20 flex items-center justify-center flex-shrink-0">
                    <Search className="h-5 w-5 text-v2-accent-blue" />
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-[30px] md:text-[36px] text-v2-ink-heading leading-tight">
                      Sixteam Assessment
                    </h2>
                    <p className="font-lato text-[13px] text-v2-ink-muted">Evaluación de Transformación con IA</p>
                  </div>
                </div>

                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7]">
                  La mayoría de las transformaciones fallan porque las empresas se saltan lo más difícil:
                  entender cómo opera <em className="text-v2-ink-heading not-italic font-semibold">realmente</em> el negocio
                  antes de decidir qué cambiar. El Assessment elimina esa incertidumbre.
                </p>

                <div className="mt-7 flex flex-col gap-4">
                  {[
                    { n: "1", t: "Definimos tus metas",      d: "Las prioridades del dueño moldean todo lo que sigue." },
                    { n: "2", t: "Mapeamos la operación real",d: "Agentes de IA + experto Sixteam reconstruyen cada flujo, cada fricción, cada lead caído." },
                    { n: "3", t: "Identificamos las palancas",d: "3 a 7 iniciativas de mayor impacto para tu contexto específico." },
                    { n: "4", t: "Entregamos la estrategia", d: "Roadmap priorizado + presentación de hallazgos al dueño." },
                  ].map((s) => (
                    <div key={s.n} className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-full bg-v2-surface-navy-mist border border-v2-accent-blue/25 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-poppins font-bold text-[12px] text-v2-accent-blue">{s.n}</span>
                      </div>
                      <div>
                        <p className="font-poppins font-bold text-[14px] text-v2-ink-heading">{s.t}</p>
                        <p className="font-lato text-[13px] text-v2-ink-body mt-0.5 leading-relaxed">{s.d}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link to="/contacto">
                    <ButtonV2 variant="navy" size="md">
                      Solicitar Assessment <ArrowRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>

              {/* Right — deliverables */}
              <div className="bg-white border border-v2-border-subtle rounded-2xl p-7 shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-accent-blue mb-5">
                  Qué se lleva el cliente
                </p>
                <div className="flex flex-col gap-3.5">
                  {[
                    { icon: <Brain className="h-4 w-4" />,      t: "Mapa operativo vivo",         d: "Cómo funciona su negocio hoy, navegable y consultable." },
                    { icon: <BarChart3 className="h-4 w-4" />,  t: "Palancas de IA priorizadas",  d: "Qué cambiar, en qué orden y con qué impacto esperado." },
                    { icon: <Wrench className="h-4 w-4" />,     t: "Blueprints de implementación",d: "Para cada iniciativa: qué cambia, qué se necesita, cuál es el resultado." },
                    { icon: <Bot className="h-4 w-4" />,        t: "Agente de IA persistente",    d: "Conoce tu operación y queda disponible para consultar después." },
                  ].map((d) => (
                    <div key={d.t} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-v2-surface border border-v2-border-subtle">
                      <div className="w-8 h-8 rounded-lg bg-v2-surface-navy-mist flex items-center justify-center text-v2-accent-blue flex-shrink-0">
                        {d.icon}
                      </div>
                      <div>
                        <p className="font-poppins font-bold text-[13px] text-v2-ink-heading">{d.t}</p>
                        <p className="font-lato text-[12px] text-v2-ink-body mt-0.5">{d.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 p-4 rounded-xl bg-v2-surface-navy-mist border border-v2-accent-blue/20">
                  <p className="font-lato text-[12px] text-v2-accent-blue leading-relaxed">
                    No es un deck que se archiva. Es un mapa vivo con un copiloto que se queda —
                    la consultoría tradicional cobra más, entrevista a menos y se va.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SOLUCIÓN 2: TRANSFORM ─────────────────────────────────── */}
      <Section surface="default" size="default" id="transform" className="scroll-mt-24">
        <Container>
          <div>
            <SectionBadge n="Solución 02" label="Transform · Desde $1,500 USD · pago por proyecto" color="teal" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center flex-shrink-0">
                    <Hammer className="h-5 w-5 text-v2-accent-teal-deep" />
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-[30px] md:text-[36px] text-v2-ink-heading leading-tight">
                      Sixteam Transform
                    </h2>
                    <p className="font-lato text-[13px] text-v2-ink-muted">Transformación Digital</p>
                  </div>
                </div>

                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7]">
                  Es la construcción. Sixteam implementa lo que el negocio necesita: sistemas, agentes
                  de IA y mejoras de proceso. El alcance sale del Assessment, o de necesidades que el
                  cliente ya tiene claras.
                </p>

                <div className="mt-5 p-4 rounded-xl border border-v2-accent-teal/20 bg-v2-surface-teal-mist">
                  <p className="font-lato text-[13px] text-v2-accent-teal-deep leading-relaxed">
                    Transform no es para explorar — es para construir. Quien todavía no sabe qué necesita,
                    primero hace el Assessment.
                  </p>
                </div>

                <div className="mt-7 flex flex-col gap-2.5">
                  {[
                    "Implementación de CRM, automatizaciones e integraciones",
                    "Agentes de IA específicos para la operación del negocio",
                    "Rediseño de los procesos que frenan el crecimiento",
                    "Alcance definido y cerrado antes de empezar — sin sorpresas",
                    "Al terminar: operación montada y funcionando, no un manual",
                  ].map((i) => <CheckItem key={i} text={i} />)}
                </div>

                <div className="mt-8">
                  <Link to="/contacto">
                    <ButtonV2 variant="primary" size="md">
                      Solicitar Transform <ArrowRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col gap-4">
                <div className="bg-white border border-v2-border-subtle rounded-2xl p-7 shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                  <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-accent-teal-deep mb-4">
                    Su rol en el recorrido
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-5">
                    {["Assessment", "Transform", "Ops ⭐"].map((step, i) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className={`font-lato text-[11px] font-semibold px-2.5 py-1 rounded-full border ${
                          step === "Transform"
                            ? "bg-v2-accent-teal text-white border-v2-accent-teal"
                            : "text-v2-ink-muted border-v2-border-subtle bg-v2-surface"
                        }`}>{step}</span>
                        {i < 2 && <ChevronRight className="h-3 w-3 text-v2-ink-muted/40" />}
                      </div>
                    ))}
                  </div>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65]">
                    Transform convierte el mapa del Assessment en una operación real. Casi todo cliente
                    que termina Transform debe continuar en Ops — un sistema montado sin quien lo opere
                    se degrada solo.
                  </p>
                </div>

                <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                  <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-ink-muted mb-2">Precio</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-poppins font-black text-[38px] text-v2-ink-heading leading-none">Desde $1,500</span>
                    <span className="font-lato text-[14px] text-v2-ink-muted">USD</span>
                  </div>
                  <p className="font-lato text-[13px] text-v2-ink-body mt-2 leading-relaxed">
                    Precio según alcance, definido antes de empezar. Construido por humanos expertos
                    + agentes de IA de construcción.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── SOLUCIÓN 3: OPS ★ — LIGHT THEME ─────────────────────── */}
      <Section surface="alt" size="default" id="ops" className="scroll-mt-24">
        <Container>
          <div id="sixteam-ops">
            {/* Section label con badge destacado */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-v2-accent-teal/10 border border-v2-accent-teal/35 text-v2-accent-teal-deep">
                <Star className="h-3.5 w-3.5" />
                <span className="font-lato text-[10px] font-bold uppercase tracking-widest">Solución 03 · La estrella</span>
              </div>
              <div className="h-px flex-1 bg-v2-border-subtle" />
              <span className="font-lato text-[12px] text-v2-ink-muted">Recurrente mensual · sin permanencia</span>
            </div>

            {/* Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-12">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-v2-surface-teal-mist border border-v2-accent-teal/25 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-v2-accent-teal-deep" />
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-[30px] md:text-[38px] text-v2-ink-heading leading-tight">
                      Sixteam Ops
                    </h2>
                    <p className="font-lato text-[13px] text-v2-ink-muted">Soporte y Operaciones</p>
                  </div>
                </div>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7]">
                  Sixteam no entrega y se va: opera y soporta los sistemas, agentes y procesos mes a mes,
                  para siempre. La plataforma GoHighLevel viene incluida — no es un extra.
                </p>
                <p className="font-lato text-[16px] text-v2-ink-body leading-[1.7] mt-4">
                  Aquí está el ingreso recurrente y el crecimiento escalable. Toda conversación de Sixteam,
                  sin importar por dónde entró el cliente, termina apuntando a Ops.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: <Bot className="h-4 w-4" />,          l: "Agente IA especializado",   d: "Conoce tus sistemas e implementaciones" },
                  { icon: <Users className="h-4 w-4" />,        l: "Humanos expertos incluidos",d: "Horas de trabajo real cada mes" },
                  { icon: <BarChart3 className="h-4 w-4" />,    l: "Métricas del negocio",      d: "Visibilidad real, no tres números sueltos" },
                  { icon: <MessageSquare className="h-4 w-4" />,l: "GoHighLevel incluida",       d: "CRM, funnels, email y automatizaciones" },
                ].map((a) => (
                  <div key={a.l} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-v2-border-subtle">
                    <div className="w-7 h-7 rounded-lg bg-v2-surface-teal-mist flex items-center justify-center text-v2-accent-teal-deep flex-shrink-0">
                      {a.icon}
                    </div>
                    <div>
                      <p className="font-lato text-[12px] font-bold text-v2-ink-heading">{a.l}</p>
                      <p className="font-lato text-[11px] text-v2-ink-muted mt-0.5">{a.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Plan cards — light */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {/* Ops Esencial */}
              <div className="bg-white border border-v2-border-medium rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                <div className="px-7 pt-7 pb-5 border-b border-v2-border-subtle">
                  <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                  <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Ops Esencial</h3>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-poppins font-black text-[40px] text-v2-ink-heading leading-none">$200</span>
                    <span className="font-lato text-[14px] text-v2-ink-muted">/mes</span>
                  </div>
                  <p className="font-lato text-[12px] text-v2-accent-teal-deep font-semibold mt-1">promo limitada · regular $300 · 20 cupos</p>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-relaxed mt-3">
                    Para emprendedores y negocios pequeños que quieren empezar con tecnología e IA sin grandes inversiones.
                  </p>
                </div>
                <div className="px-7 py-6 flex flex-col gap-2.5">
                  {[
                    "Un agente IA activo en tu canal más urgente",
                    "60 créditos / mes — no acumulables",
                    "Especialista humano dentro de tu plan de créditos",
                    "Plataforma CRM all-in-one incluida",
                    "$30/mes Wallet de mensajería",
                  ].map((i) => <CheckItem key={i} text={i} />)}
                </div>
                <div className="px-7 pb-7">
                  <Link to="/contacto">
                    <ButtonV2 variant="outline" size="md" className="w-full justify-center">
                      Empezar con Esencial <ArrowRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>

              {/* Ops Integral — featured */}
              <div className="relative bg-white border-2 border-v2-accent-teal rounded-2xl overflow-hidden shadow-[0_0_0_4px_rgba(0,191,165,0.08),0_16px_48px_rgba(0,191,165,0.12)]">
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-v2-accent-teal text-white font-lato font-bold text-[10px] uppercase tracking-widest shadow-[0_4px_16px_rgba(0,191,165,0.35)]">
                    <Star className="h-3 w-3" /> Recomendado
                  </span>
                </div>
                <div className="px-7 pt-10 pb-5 border-b border-v2-border-subtle mt-1">
                  <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                  <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Ops Integral</h3>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-poppins font-black text-[40px] text-v2-accent-teal-deep leading-none">$499</span>
                    <span className="font-lato text-[14px] text-v2-ink-muted">/mes</span>
                  </div>
                  <p className="font-lato text-[12px] text-v2-ink-muted mt-1">pago mensual · sin permanencia</p>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-relaxed mt-3">
                    Para empresas que requieren configuraciones, integraciones y automatizaciones más complejas.
                  </p>
                </div>
                <div className="px-7 py-6 flex flex-col gap-2.5">
                  {[
                    { t: "Agentes IA operando en multi-canal", bold: true },
                    { t: "160 créditos / mes — no acumulables", bold: true },
                    { t: "Integraciones, automatizaciones avanzadas y nuevas configuraciones", bold: true },
                    { t: "Bono Onboarding VIP", bold: true },
                    { t: "Plataforma CRM all-in-one incluida", bold: false },
                    { t: "$30/mes Wallet de mensajería", bold: true },
                  ].map((i) => <CheckItem key={i.t} text={i.bold ? <strong className="text-v2-ink-heading">{i.t}</strong> : i.t} />)}
                </div>
                <div className="px-7 pb-7">
                  <Link to="/contacto">
                    <ButtonV2 variant="primary" size="md" className="w-full justify-center shadow-[0_8px_24px_rgba(0,191,165,0.25)]">
                      Empezar con Integral <ArrowRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>

              {/* Ops Total */}
              <div className="bg-white border border-v2-border-medium rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
                <div className="px-7 pt-7 pb-5 border-b border-v2-border-subtle">
                  <p className="font-lato text-[10px] font-bold uppercase tracking-widest text-v2-ink-muted mb-1">Plan</p>
                  <h3 className="font-poppins font-bold text-[22px] text-v2-ink-heading">Ops Total</h3>
                  <div className="flex items-baseline gap-1.5 mt-2 flex-wrap">
                    <span className="font-poppins font-black text-[32px] text-v2-ink-heading leading-none">Desde $1,200</span>
                    <span className="font-lato text-[14px] text-v2-ink-muted">/mes</span>
                  </div>
                  <p className="font-lato text-[12px] text-v2-ink-muted mt-1">a cotizar según requerimientos</p>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-relaxed mt-3">
                    Para clientes que tienen a Sixteam como su equipo de tecnología permanente.
                  </p>
                </div>
                <div className="px-7 py-6 flex flex-col gap-2.5">
                  {[
                    "Agentes IA de alto volumen en todos tus sistemas",
                    "Desde 400 créditos / mes — acumulables según solicitud",
                    "PM dedicado y equipo completo de especialistas",
                    "Llamadas estratégicas semanales",
                    "Plataforma CRM all-in-one incluida",
                  ].map((i) => <CheckItem key={i} text={i} />)}
                </div>
                <div className="px-7 pb-7">
                  <Link to="/contacto">
                    <ButtonV2 variant="navy" size="md" className="w-full justify-center">
                      Cotizar Ops Total <ArrowRight className="h-4 w-4" />
                    </ButtonV2>
                  </Link>
                </div>
              </div>
            </div>

            {/* Comparison table — light */}
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 md:p-8 shadow-[0_4px_16px_rgba(10,35,66,0.04)]">
              <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-ink-muted mb-5">
                Comparación de planes
              </p>
              <div className="grid grid-cols-[1fr_auto_auto] gap-4 mb-3 pb-3 border-b border-v2-border-subtle">
                <span />
                <span className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-ink-muted text-right w-[110px]">Ops Esencial</span>
                <span className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-accent-teal-deep text-right w-[130px]">Ops Integral</span>
              </div>
              <OpsRow label="Precio mensual"                  base="$200 USD promo"         avanzado="$499 USD" />
              <OpsRow label="Créditos / mes"                  base="60"               avanzado="160"       highlight />
              <OpsRow label="Agentes de IA"                   base="1 canal"          avanzado="Multi-canal" />
              <OpsRow label="Configuraciones avanzadas"       base="Según créditos"   avanzado="Incluidas" highlight />
              <OpsRow label="Bono Onboarding VIP"             base="—"                avanzado="Sí" />
              <OpsRow label="Plataforma CRM incluida"         base="Sí"               avanzado="Sí"        highlight />
              <OpsRow label="Wallet de mensajería"            base="$30/mes"          avanzado="$30/mes" />
            </div>
          </div>
        </Container>
      </Section>

      {/* ── MOTOR COMÚN ──────────────────────────────────────────── */}
      <Section surface="default" size="compact">
        <Container>
          <div>
            <div className="text-center max-w-[580px] mx-auto mb-10">
              <Eyebrow variant="teal">El hilo común</Eyebrow>
              <h2 className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: "1.2" }}>
                Humanos expertos +{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">agentes de IA</em>
              </h2>
              <p className="font-lato text-[15px] text-v2-ink-body leading-[1.65] mt-3">
                Las tres soluciones comparten el mismo motor. La IA ejecuta; los expertos dirigen.
                Ese es el diferenciador.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Wrench className="h-5 w-5" />,      name: "Agentes de trabajo",   desc: "Ejecutan y construyen. Operan 24/7 sin fatiga.", color: "teal" },
                { icon: <Brain className="h-5 w-5" />,       name: "Agentes de gestión",   desc: "Organizan, planifican, mantienen el orden operativo.", color: "blue" },
                { icon: <MessageSquare className="h-5 w-5"/>,name: "Agentes de apoyo",     desc: "Guían, responden y alinean ideas con el negocio.", color: "teal" },
                { icon: <BarChart3 className="h-5 w-5" />,   name: "Agentes de métricas",  desc: "Miden, detectan anomalías y alertan a tiempo.", color: "blue" },
              ].map((a, i) => (
                <div key={a.name} className="bg-white border border-v2-border-subtle rounded-2xl p-6 text-center hover:shadow-[0_8px_32px_rgba(0,191,165,0.08)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl mx-auto flex items-center justify-center mb-4 ${
                    a.color === "teal" ? "bg-v2-surface-teal-mist text-v2-accent-teal-deep" : "bg-v2-surface-navy-mist text-v2-accent-blue"
                  }`}>
                    {a.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-[14px] text-v2-ink-heading">{a.name}</h3>
                  <p className="font-lato text-[13px] text-v2-ink-body mt-2 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <TuEquipoV2 />

      {/* ── CTA — único bloque oscuro ─────────────────────────────── */}
      <Section surface="navy-dark" size="compact" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(0,191,165,0.4) 0%, transparent 70%)" }} />
        </div>
        <Container size="narrow" className="text-center relative">
          <Eyebrow variant="teal">Punto de entrada</Eyebrow>
          <h2 className="font-poppins font-bold text-white mt-3"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.15" }}>
            ¿No sabes por dónde empezar?{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">El Radar te lo dice</em>.
          </h2>
          <p className="font-lato text-[16px] text-white/65 leading-[1.65] mt-5 max-w-[460px] mx-auto">
            Diagnóstico ejecutivo gratuito en 48 horas. Descubres la fuga de revenue y tu punto de entrada.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/radar">
              <ButtonV2 variant="primary" size="lg">Pedir Radar gratis <ArrowRight className="h-4 w-4" /></ButtonV2>
            </Link>
            <Link to="/contacto">
              <ButtonV2 variant="outline" size="lg" className="!text-white !border-white/30 !bg-white/5 hover:!bg-white/10">
                Hablar con un experto
              </ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>

    </LayoutV2>
  );
};

export default Soluciones;
