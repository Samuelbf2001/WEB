import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, MessageSquare, Users, Gift, Package, Shield, Zap } from "lucide-react";
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

/* ── Section pill header ── */
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
const AgentRow: React.FC<{ color: string; name: string; role: string }> = ({ color, name, role }) => (
  <div className="flex items-center gap-2.5">
    <div
      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0"
      style={{ backgroundColor: color }}
    >
      {name[0]}
    </div>
    <span className="font-lato text-[13px] text-v2-ink-body">
      <strong className="text-v2-ink-heading">{name}</strong>{" "}
      <span className="text-v2-ink-muted">({role})</span>
    </span>
  </div>
);

/* ── Feature row ── */
const FeatureRow: React.FC<{ text: React.ReactNode; strong?: boolean }> = ({ text, strong }) => (
  <div className="flex items-start gap-2">
    <Check className="h-3.5 w-3.5 flex-shrink-0 mt-0.5 text-v2-accent-teal-deep" />
    <span className={`font-lato text-[13px] leading-snug ${strong ? "font-semibold" : ""} text-v2-ink-body`}>
      {text}
    </span>
  </div>
);

type PlanPrice = { mensual: number; anual: number };
type PlanCredits = { prefix: string; amount: number; note: string };
type PlanCustomPrice = { display: string; sub: string; note: string };

interface Plan {
  id: string;
  name: string;
  topBadge: string | null;
  highlight: boolean;
  price: PlanPrice | null;
  priceCustom: PlanCustomPrice | null;
  tagline: string;
  teamDesc: string;
  credits: PlanCredits;
  showBonus?: boolean;
  cta: string;
  ctaVariant: "outline" | "primary" | "navy";
}

export const PricingV2 = () => {
  const [anual, setAnual] = useState(false);
  const countdown = useCountdown();
  const ref = useScrollReveal<HTMLDivElement>();

  const plans: Plan[] = [
    {
      id: "arranque",
      name: "Esencial",
      topBadge: null,
      highlight: false,
      price: { mensual: 199, anual: 165 },
      priceCustom: null,
      tagline: "Para emprendedores y negocios pequeños que quieren empezar a trabajar con tecnología e IA sin complicaciones ni grandes inversiones.",
      teamDesc: "Un agente IA activo en tu canal más urgente + especialista humano que ejecuta tus solicitudes dentro de tu plan de créditos.",
      credits: { prefix: "", amount: 60, note: "No acumulables" },
      cta: "Empezar con Esencial",
      ctaVariant: "outline",
    },
    {
      id: "core",
      name: "Integral",
      topBadge: "MEJOR VALOR",
      highlight: true,
      price: { mensual: 499, anual: 415 },
      priceCustom: null,
      tagline: "Para clientes que ya han trabajado con Sixteam y buscan expandir su ecosistema digital, o empresas que requieren configuraciones y automatizaciones más complejas.",
      teamDesc: "Agentes IA operando en multi-canal (CRM + WhatsApp + Email) + equipo de especialistas para integraciones, automatizaciones avanzadas y nuevas configuraciones.",
      credits: { prefix: "", amount: 160, note: "No acumulables" },
      showBonus: true,
      cta: "Empezar con Integral",
      ctaVariant: "primary",
    },
    {
      id: "plus",
      name: "Total",
      topBadge: "SERVICIO DEDICADO",
      highlight: false,
      price: null,
      priceCustom: { display: "Desde $1,200", sub: "USD / mes", note: "A cotizar según requerimientos" },
      tagline: "Para clientes que ya tienen a Sixteam como su equipo de tecnología permanente. Capacidad total, PM dedicado y estrategia continua de crecimiento.",
      teamDesc: "Agentes IA de alto volumen en todos tus sistemas + PM dedicado, equipo completo de especialistas y llamadas estratégicas semanales.",
      credits: { prefix: "Desde ", amount: 400, note: "Acumulables según solicitud" },
      cta: "Cotizar plan Total",
      ctaVariant: "navy",
    },
  ];

  return (
    <Section surface="alt" size="default">
      <Container>
        <div ref={ref}>

          {/* Header */}
          <div className="text-center max-w-[700px] mx-auto v2-reveal mb-10">
            <Eyebrow variant="navy">Servicio de Soporte, Operaciones y Mejora Continua</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3"
              style={{ fontSize: "clamp(28px, 4vw, 44px)", lineHeight: "1.15", letterSpacing: "-0.01em" }}
            >
              Un equipo de tecnología entero{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">sin contratar personal adicional.</em>
              </Underlined>
            </h2>
            <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
              Cuenta mensualmente con un equipo de tecnología externo que administra y opera tus sistemas, además, potenciado con Inteligencia Artificial. Sin contratar personal adicional a tu nómina.
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
              const isCore = plan.id === "core";
              const isPlus = plan.id === "plus";

              return (
                <div
                  key={plan.id}
                  className={`v2-reveal relative ${i === 1 ? "" : i === 0 ? "v2-d1" : "v2-d2"}`}
                >
                  {/* Top badge */}
                  {plan.topBadge && (
                    <div className="absolute -top-3.5 inset-x-0 flex justify-center z-10">
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
                    <div className="px-6 pt-6 pb-5">
                      <h3
                        className="font-serif italic font-bold text-[24px] leading-tight"
                        style={{ color: "#C9A84C", textShadow: "0 1px 2px rgba(201,168,76,0.15)" }}
                      >
                        {plan.name}
                      </h3>

                      {/* Price display */}
                      {plan.priceCustom ? (
                        <>
                          <div className="flex items-baseline gap-1.5 mt-1 flex-wrap">
                            <span className="font-poppins font-black text-[36px] leading-none text-v2-ink-heading">
                              {plan.priceCustom.display}
                            </span>
                            <span className="font-lato text-[14px] text-v2-ink-muted pb-1">{plan.priceCustom.sub}</span>
                          </div>
                          <p className="font-lato text-[11px] text-v2-ink-muted mt-1">
                            {plan.priceCustom.note}
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="flex items-baseline gap-1 mt-1">
                            <span className="font-poppins font-black text-[42px] leading-none text-v2-ink-heading">
                              ${(anual ? plan.price!.anual : plan.price!.mensual).toLocaleString("en-US")}
                            </span>
                            <span className="font-lato text-[14px] text-v2-ink-muted pb-1">USD /mes</span>
                          </div>
                          {anual && (
                            <p className="font-lato text-[11px] text-v2-accent-teal-deep font-semibold mt-0.5">
                              Facturado anualmente · 2 meses gratis
                            </p>
                          )}
                        </>
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
                          <strong className="text-v2-ink-heading">Alfa, Bravo y tu equipo</strong>{" "}
                          para planificación, copy y estrategia.
                        </p>
                      </div>

                      {/* Equipo de Especialistas + Agentes IA */}
                      <div className="rounded-xl border border-v2-border-subtle bg-v2-surface p-3.5">
                        <PillHeader
                          icon={<Users className="h-3.5 w-3.5" />}
                          label="Especialistas + Agentes IA"
                          color="navy"
                        />
                        <p className="font-lato text-[12px] text-v2-ink-muted mt-2 mb-3 leading-relaxed pl-1">
                          {plan.teamDesc}
                        </p>
                        <div className="flex flex-col gap-2 pl-1">
                          <AgentRow color="#1d70a2" name="Alfa" role="Concierge" />
                          <AgentRow color="#00bfa5" name="Delta" role="CRM & Pipeline" />
                          <AgentRow color="#0d6659" name="Echo" role="WhatsApp 24/7" />
                        </div>
                      </div>

                      {/* Créditos */}
                      <div className="rounded-xl border border-v2-accent-blue/25 bg-[#f0f7ff] p-3.5">
                        <PillHeader
                          icon={<Zap className="h-3.5 w-3.5" />}
                          label="Sistema de Créditos"
                          color="navy"
                        />
                        <div className="flex items-baseline gap-1.5 pl-1 mt-3">
                          <span className="font-poppins font-black text-[30px] leading-none text-v2-accent-blue">
                            {plan.credits.prefix}{plan.credits.amount}
                          </span>
                          <span className="font-lato text-[13px] text-v2-ink-muted">créditos / mes</span>
                        </div>
                        <p className="font-lato text-[11px] text-v2-ink-muted mt-1.5 pl-1">
                          <span className="font-semibold text-v2-ink-body">{plan.credits.note}.</span>{" "}
                          Cada solicitud descuenta créditos según su complejidad.
                        </p>
                      </div>

                      {/* Bono VIP — solo Integral */}
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
                            <FeatureRow text="Configuración fast-track de tus primeras automatizaciones" />
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
                        <Link to={isPlus ? "/v2/radar" : "/v2/radar"} className="block">
                          <ButtonV2
                            variant={plan.ctaVariant}
                            size="md"
                            className={`w-full justify-center ${isCore ? "shadow-[0_8px_24px_rgba(0,191,165,0.25)]" : ""}`}
                          >
                            {plan.cta}
                            <ArrowRight className="h-4 w-4" />
                          </ButtonV2>
                        </Link>
                        {!isPlus && (
                          <div className="flex items-center justify-center gap-1.5 mt-2.5">
                            <Shield className="h-3 w-3 text-v2-ink-muted" />
                            <Link
                              to="/v2/radar"
                              className="font-lato text-[11px] text-v2-ink-muted hover:text-v2-accent-teal-deep transition-colors underline underline-offset-2"
                            >
                              Garantía 30 días money-back
                            </Link>
                          </div>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Asesoría gratuita card */}
          <div className="v2-reveal v2-d2 mt-10 max-w-2xl mx-auto">
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <div className="flex-1">
                <p className="font-lato text-[11px] font-bold uppercase tracking-widest text-v2-accent-teal-deep mb-1">
                  ¿Aún no sabes por dónde iniciar?
                </p>
                <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading">
                  Adquiere una asesoría gratuita
                </h3>
              </div>
              <div className="flex-shrink-0 w-full sm:w-auto">
                <Link to="/v2/radar">
                  <ButtonV2 variant="navy" size="sm" className="w-full sm:w-auto whitespace-nowrap group">
                    Agendar asesoría
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </ButtonV2>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <p className="v2-reveal v2-d3 text-center font-lato text-[13px] text-v2-ink-muted mt-8">
            ¿Cómo funciona el sistema de Créditos Sixteam?{" "}
            <Link
              to="/v2/soluciones#sixteam-ops"
              className="font-semibold text-v2-accent-teal-deep hover:underline underline-offset-2 inline-flex items-center gap-1"
            >
              Conoce Sixteam Ops
              <ArrowRight className="h-3 w-3" />
            </Link>
          </p>

        </div>
      </Container>
    </Section>
  );
};

export default PricingV2;
