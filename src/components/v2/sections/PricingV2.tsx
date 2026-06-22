import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageSquare, Bot, Users, Gift, Package, Shield } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Countdown hook (ends Sunday midnight) ── */
const useCountdown = () => {
  const getEnd = () => {
    const d = new Date();
    const daysUntilSunday = (7 - d.getDay()) % 7 || 7;
    const end = new Date(d);
    end.setDate(d.getDate() + daysUntilSunday);
    end.setHours(23, 59, 59, 0);
    return end.getTime();
  };
  const [end] = useState(getEnd);
  const [left, setLeft] = useState(end - Date.now());
  useEffect(() => {
    const t = setInterval(() => setLeft(end - Date.now()), 1000);
    return () => clearInterval(t);
  }, [end]);
  const h = Math.max(0, Math.floor(left / 3600000));
  const m = Math.max(0, Math.floor((left % 3600000) / 60000));
  const s = Math.max(0, Math.floor((left % 60000) / 1000));
  return `${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`;
};

/* ── Section pill header (replicates AA's section dividers) ── */
const PillHeader: React.FC<{
  icon: React.ReactNode;
  label: string;
  color?: "teal" | "navy" | "orange" | "purple";
  badge?: string;
}> = ({ icon, label, color = "teal", badge }) => {
  const colors = {
    teal:   "text-v2-accent-teal-deep bg-v2-surface-teal-mist border-v2-accent-teal/20",
    navy:   "text-v2-accent-blue bg-v2-surface-navy-mist border-v2-accent-blue/20",
    orange: "text-[#c2680a] bg-[#fff7ed] border-[#fdba74]/30",
    purple: "text-[#6d28d9] bg-[#f5f3ff] border-[#c4b5fd]/30",
  };
  const badgeColors = {
    teal:   "bg-v2-accent-teal/15 text-v2-accent-teal-deep",
    navy:   "bg-v2-accent-blue/15 text-v2-accent-blue",
    orange: "bg-[#fed7aa] text-[#9a3412]",
    purple: "bg-[#ddd6fe] text-[#5b21b6]",
  };
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-[12px] font-lato font-semibold ${colors[color]}`}>
      {icon}
      <span className="uppercase tracking-wide">{label}</span>
      {badge && (
        <span className={`ml-auto px-2 py-0.5 rounded-full text-[10px] font-bold ${badgeColors[color]}`}>
          {badge}
        </span>
      )}
    </div>
  );
};

/* ── Agent row ── */
const AgentRow: React.FC<{ color: string; name: string; role: string; highlight?: boolean }> = ({ color, name, role, highlight }) => (
  <div className="flex items-center gap-2.5">
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {name[0]}
    </div>
    <span className={`font-lato text-[13px] ${highlight ? "text-white/80" : "text-v2-ink-body"}`}>
      <strong className={highlight ? "text-white" : "text-v2-ink-heading"}>{name}</strong>{" "}
      <span className={highlight ? "text-white/50" : "text-v2-ink-muted"}>({role})</span>
    </span>
  </div>
);

/* ── Feature row ── */
const FeatureRow: React.FC<{ text: React.ReactNode; highlight?: boolean; strong?: boolean }> = ({ text, highlight, strong }) => (
  <div className="flex items-start gap-2">
    <Check className={`h-3.5 w-3.5 flex-shrink-0 mt-0.5 ${highlight ? "text-v2-accent-teal" : "text-v2-accent-teal-deep"}`} />
    <span className={`font-lato text-[13px] leading-snug ${strong ? "font-semibold" : ""} ${highlight ? "text-white/80" : "text-v2-ink-body"}`}>
      {text}
    </span>
  </div>
);

export const PricingV2 = () => {
  const [anual, setAnual] = useState(false);
  const countdown = useCountdown();
  const ref = useScrollReveal<HTMLDivElement>();

  const plans = [
    {
      id: "arranque",
      name: "Esencial",
      topBadge: null,
      highlight: false,
      price: { mensual: 1500, anual: 1250 },
      tagline: "Lo que no puede faltar. Ideal para emprendimientos y negocios que buscan empezar en el mundo de la automatización potenciada con Inteligencia Artificial",
      aiTier: "Esencial",
      aiDesc: "Operación de leads + follow-up. Para el frente más urgente.",
      humanLabel: "1 frente en operación a la vez",
      humanSub: "Entregado en 2–4 días hábiles",
      cta: "Empezar con Esencial",
      ctaVariant: "outline" as const,
    },
    {
      id: "core",
      name: "Integral",
      topBadge: "MEJOR VALOR (3× CAPACIDAD)",
      highlight: true,
      price: { mensual: 3000, anual: 2500 },
      tagline: "El punto óptimo para las empresas en crecimiento: suficiente inteligencia artificial y capacidad humana para gestionar los cuellos de botella que frenan el crecimiento de tu negocio",
      aiTier: "Estándar",
      aiDesc: "Operación multi-canal (CRM + WhatsApp + Email) funcionando en paralelo.",
      humanLabel: "3 frentes en operación a la vez",
      humanSub: "3× capacidad de Esencial",
      deliverySub: "Entregado en 2–4 días hábiles",
      showBonus: true,
      cta: "Empezar con Integral",
      ctaVariant: "primary" as const,
    },
    {
      id: "plus",
      name: "Total",
      topBadge: "SERVICIO DEDICADO",
      highlight: false,
      price: { mensual: 5500, anual: 4580 },
      tagline: "Un departamento de tecnología completo con inteligencia artificial y personal humano coexistiendo en el mismo ecosistema digital, un gestor de proyectos dedicado y reuniones estratégicas de crecimiento semanales.",
      aiTier: "Alto Volumen",
      aiDesc: "Operación multi-área, alto volumen, para empresas de mayor escala.",
      humanLabel: "5 frentes en operación a la vez",
      humanSub: "PM Dedicado en tu workflow",
      deliverySub: "Respuesta prioritaria 1–3 días",
      cta: "Empezar con Total",
      ctaVariant: "navy" as const,
    },
  ];

  return (
    <Section surface="alt" size="default">
      <Container>
        <div ref={ref}>

          {/* Header */}
          <div className="text-center max-w-[700px] mx-auto v2-reveal mb-10">
            <Eyebrow variant="navy">Planes y Precios</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
            >
              Un equipo completo.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">Sin contratar.</em>
              </Underlined>
            </h2>
            <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
              Precio por operación continua. Sin contrato de permanencia. Empieza cuando el{" "}
              <Link to="/v2/radar" className="text-v2-accent-teal-deep font-semibold hover:underline">
                Radar gratis
              </Link>{" "}
              te indique cuál es tu punto de entrada.
            </p>
          </div>

          {/* Toggle */}
          <div className="v2-reveal flex items-center justify-center gap-3 mb-10">
            <span className={`font-lato text-[13px] font-semibold transition-colors ${!anual ? "text-v2-ink-heading" : "text-v2-ink-muted"}`}>
              Mensual
            </span>
            <button
              onClick={() => setAnual((v) => !v)}
              className={`relative w-11 h-6 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-v2-accent-teal ${anual ? "bg-v2-accent-teal" : "bg-[#d1d5db]"}`}
              aria-label="Toggle facturación anual"
            >
              <span className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${anual ? "translate-x-5" : "translate-x-0"}`} />
            </button>
            <span className={`font-lato text-[13px] font-semibold transition-colors ${anual ? "text-v2-ink-heading" : "text-v2-ink-muted"}`}>
              Anual
            </span>
            {anual && (
              <span className="inline-flex items-center px-2.5 py-1 bg-v2-surface-teal-mist border border-v2-accent-teal/25 rounded-full font-lato text-[10px] font-bold text-v2-accent-teal-deep uppercase tracking-wider">
                Ahorro de 2 meses
              </span>
            )}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-start">
            {plans.map((plan, i) => {
              const price = anual ? plan.price.anual : plan.price.mensual;
              const isCore = plan.id === "core";
              const isPlus = plan.id === "plus";

              return (
                <div
                  key={plan.id}
                  className={`v2-reveal relative ${i === 1 ? "" : i === 0 ? "v2-d1" : "v2-d2"}`}
                >
                  {/* Top badge */}
                  {plan.topBadge && (
                    <div className={`absolute -top-3.5 inset-x-0 flex justify-center z-10`}>
                      <span
                        className={`inline-flex items-center px-4 py-1.5 rounded-full font-lato font-bold text-[10px] uppercase tracking-widest shadow-sm ${
                          isCore
                            ? "bg-v2-accent-teal text-white shadow-[0_4px_12px_rgba(0,191,165,0.35)]"
                            : "bg-v2-ink-heading text-white shadow-[0_4px_12px_rgba(10,35,66,0.3)]"
                        }`}
                      >
                        {plan.topBadge}
                      </span>
                    </div>
                  )}

                  <div
                    className={`rounded-2xl flex flex-col overflow-hidden ${
                      isCore
                        ? "border-2 border-v2-accent-teal shadow-[0_0_0_4px_rgba(0,191,165,0.08),0_24px_64px_rgba(0,191,165,0.12)]"
                        : "border border-v2-border-medium shadow-[0_8px_32px_rgba(10,35,66,0.06)]"
                    } ${plan.topBadge ? "mt-3" : ""} bg-white`}
                  >
                    {/* Card header */}
                    <div className={`px-6 pt-6 pb-5 ${isCore ? "bg-white" : "bg-white"}`}>
                      <h3
                        className="font-serif italic font-bold text-[24px] leading-tight"
                        style={{ color: "#C9A84C", textShadow: "0 1px 2px rgba(201,168,76,0.15)" }}
                      >
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="font-poppins font-black text-[42px] leading-none text-v2-ink-heading">
                          ${price.toLocaleString("en-US")}
                        </span>
                        <span className="font-lato text-[14px] text-v2-ink-muted pb-1">/mes</span>
                      </div>
                      {anual && (
                        <p className="font-lato text-[11px] text-v2-accent-teal-deep font-semibold mt-0.5">
                          Facturado anualmente · 2 meses gratis
                        </p>
                      )}
                      <p className={`font-lato text-[13px] leading-relaxed mt-3 ${isCore ? "text-v2-ink-body" : "text-v2-ink-muted"}`}>
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Card body — sections */}
                    <div className="px-5 pb-6 flex flex-col gap-3 flex-1">

                      {/* Estrategia & Chat IA */}
                      <div className="rounded-xl border border-v2-accent-teal/20 bg-v2-surface-teal-mist p-3.5">
                        <PillHeader
                          icon={<MessageSquare className="h-3.5 w-3.5" />}
                          label="Estrategia & Chat IA"
                          color="teal"
                        />
                        <p className="font-lato text-[12px] text-v2-ink-body mt-2 leading-relaxed pl-1">
                          Acceso inmediato a{" "}
                          <strong className="text-v2-ink-heading">Aura, Sam y tu equipo</strong>{" "}
                          para planificación, copy y estrategia.
                        </p>
                      </div>

                      {/* Agentes IA */}
                      <div className="rounded-xl border border-v2-border-subtle bg-v2-surface p-3.5">
                        <PillHeader
                          icon={<Bot className="h-3.5 w-3.5" />}
                          label="Agentes IA en producción"
                          color="navy"
                          badge={plan.aiTier}
                        />
                        <p className="font-lato text-[12px] text-v2-ink-muted mt-2 mb-3 leading-relaxed pl-1">
                          {plan.aiDesc}
                        </p>
                        <div className="flex flex-col gap-2 pl-1">
                          <AgentRow color="#1d70a2" name="Aura" role="Concierge" />
                          <AgentRow color="#00bfa5" name="Carlos" role="CRM & Pipeline" />
                          <AgentRow color="#0d6659" name="Laura" role="WhatsApp 24/7" />
                        </div>
                      </div>

                      {/* Especialistas humanos */}
                      <div className="rounded-xl border border-v2-border-subtle bg-v2-surface p-3.5">
                        <PillHeader
                          icon={<Users className="h-3.5 w-3.5" />}
                          label="Especialistas Humanos"
                          color="navy"
                        />
                        <div className="flex flex-col gap-1.5 mt-3 pl-1">
                          <FeatureRow
                            text={<><strong className={isCore ? "" : ""}>{plan.humanLabel}</strong></>}
                            strong
                          />
                          {isCore && (
                            <p className="font-lato text-[11px] text-v2-accent-teal-deep font-semibold pl-5">
                              {plan.humanSub}
                            </p>
                          )}
                          {isPlus && (
                            <FeatureRow text={<><strong>PM Dedicado</strong> en tu workflow</>} />
                          )}
                          <FeatureRow text={plan.deliverySub ?? "Entregado en 2–4 días hábiles"} />
                          {isPlus && (
                            <FeatureRow text={<><strong>Llamada 1:1 semanal</strong> de estrategia</>} />
                          )}
                        </div>
                      </div>

                      {/* Bono VIP — solo Core */}
                      {plan.showBonus && (
                        <div className="rounded-xl border-2 border-[#fb923c]/40 bg-[#fff7ed] p-3.5">
                          <PillHeader
                            icon={<Gift className="h-3.5 w-3.5" />}
                            label="Bono Onboarding VIP"
                            color="orange"
                          />
                          <div className="flex flex-col gap-1.5 mt-3 pl-1">
                            <FeatureRow text="Llamada de estrategia 1:1 — mapea tus primeros 90 días" />
                            <FeatureRow text="Setup completo de marca/sistema hecho por nosotros" />
                            <FeatureRow text="Primeros 3 frentes fast-track (1–2 días de entrega)" />
                          </div>
                          <div className="mt-3 flex items-center gap-2 pl-1">
                            <span className="font-lato text-[11px] text-[#c2680a] font-semibold">
                              ⏱ Disponible esta semana · Vence en{" "}
                              <strong className="font-mono">{countdown}</strong>
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Plataforma incluida */}
                      <div className="rounded-xl border border-v2-border-subtle bg-v2-surface p-3.5">
                        <PillHeader
                          icon={<Package className="h-3.5 w-3.5" />}
                          label="Plataforma Incluida (opcional)"
                          color="teal"
                        />
                        <div className="flex flex-col gap-1.5 mt-3 pl-1">
                          <FeatureRow
                            text={
                              <>
                                <strong>Plataforma CRM all-in-one</strong>{" "}
                                <span className="text-v2-accent-teal-deep font-semibold">(valor $97/mes)</span>
                                {" "}— CRM, funnels, email y automatizaciones. Úsala o trae tus herramientas.
                              </>
                            }
                          />
                          <FeatureRow
                            text={
                              <>
                                <strong>$30/mes Wallet de mensajería</strong> — Cubrimos tus primeros $30 de SMS, email y llamadas.
                              </>
                            }
                          />
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="mt-1">
                        <Link to="/v2/radar" className="block">
                          <ButtonV2
                            variant={plan.ctaVariant}
                            size="md"
                            className={`w-full justify-center ${isCore ? "shadow-[0_8px_24px_rgba(0,191,165,0.25)]" : ""}`}
                          >
                            {plan.cta}
                            <ArrowRight className="h-4 w-4" />
                          </ButtonV2>
                        </Link>
                        <div className="flex items-center justify-center gap-1.5 mt-2.5">
                          <Shield className="h-3 w-3 text-v2-ink-muted" />
                          <Link
                            to="/v2/radar"
                            className="font-lato text-[11px] text-v2-ink-muted hover:text-v2-accent-teal-deep transition-colors underline underline-offset-2"
                          >
                            Garantía 30 días money-back
                          </Link>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnóstico card */}
          <div className="v2-reveal v2-d2 mt-10 max-w-2xl mx-auto">
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-accent-teal-deep mb-1">
                  Punto de entrada recomendado
                </p>
                <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading">
                  Diagnóstico Sixteam
                </h3>
                <p className="font-lato text-[13px] text-v2-ink-body leading-relaxed mt-1">
                  Mapeo agéntico de tu operación + roadmap cuantificado.{" "}
                  <strong className="text-v2-ink-heading">$2,500 USD</strong> one-time — el ~50% convierte a suscripción.
                </p>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link to="/v2/radar">
                  <ButtonV2 variant="navy" size="sm" className="w-full sm:w-auto whitespace-nowrap group">
                    Solicitar Diagnóstico
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </ButtonV2>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="v2-reveal v2-d3 text-center font-lato text-[13px] text-v2-ink-muted italic mt-8">
            Todos los planes incluyen Radar gratis previo · Sin contrato de permanencia · Factura mensual
          </p>

        </div>
      </Container>
    </Section>
  );
};

export default PricingV2;
