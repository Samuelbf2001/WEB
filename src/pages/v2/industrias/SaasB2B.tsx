import { Link } from "react-router-dom";
import { ArrowRight, Building2, TrendingDown, AlertCircle, Users, Clock, Database, Zap, BarChart3, Target, Check } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pains = [
  { icon: TrendingDown, title: "Churn que nadie ve venir",          desc: "El cliente lleva semanas sin usar el producto y nadie lo detecta. La cancelación llega como sorpresa cuando ya es demasiado tarde para actuar." },
  { icon: AlertCircle,  title: "PQLs que caen en el vacío",         desc: "El producto genera señales de intención poderosas, pero Sales no sabe cuáles son los accounts calientes. El handoff nunca ocurre bien." },
  { icon: Users,        title: "CS operando a ciegas",              desc: "Customer Success gestiona cuentas con intuición y notas dispersas. Sin datos de uso, no hay priorización posible y el tiempo se va en cuentas que no escalan." },
  { icon: Clock,        title: "Revenue de expansión desaprovechado",desc: "El upsell existe, pero el trigger para ofrecerlo nunca es el correcto. Se deja dinero en la mesa mes a mes porque no hay un proceso de expansión estructurado." },
];

const solutions = [
  { icon: Database, title: "Product-led scoring automático",   desc: "Cruzamos datos de uso in-app con el CRM para calcular un health score por cuenta. Sales sabe exactamente cuáles tocas primero, sin intuición, con datos." },
  { icon: Target,   title: "Pipeline de PQL a PQS",            desc: "Cuando un usuario activa X features o llega a Y sesiones, el agente IA notifica a Sales con contexto completo: qué usa, con qué frecuencia, qué no ha activado aún." },
  { icon: Zap,      title: "CS automation y alertas de churn", desc: "Cuentas sin actividad >7 días reciben una secuencia de reactivación automática. Si no responden, el CSM recibe la alerta con todo el histórico." },
  { icon: BarChart3,title: "MRR y expansion revenue dashboard",desc: "Visibilidad real del negocio: MRR, churn rate, NRR, accounts por health score. No tres números sueltos, sino la foto completa cada semana." },
];

const stats = [
  { value: "−35%", label: "Tasa de churn mensual" },
  { value: "2.8×", label: "Conversión trial-to-paid" },
  { value: "+42%", label: "Revenue de expansión" },
  { value: "100%", label: "Cuentas en riesgo detectadas a tiempo" },
];

const SaasB2B = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* Hero */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(29,112,162,0.15) 0%, transparent 70%)", animation: "v2-aurora-2 18s ease-in-out infinite" }} />
        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow variant="navy">Vertical · SaaS B2B</Eyebrow>
          <h1 className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(38px, 6vw, 62px)", lineHeight: "1.07", letterSpacing: "-0.02em" }}>
            Menos churn.{" "}
            <em className="font-serif italic font-normal">Más expansión</em>
            .
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[600px] mx-auto">
            Operamos el Revenue Operations de tu SaaS: product-led scoring, alertas de churn,
            handoff PQL→Sales y expansión revenue, todo conectado al CRM.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/radar">
              <ButtonV2 variant="primary" size="lg">Diagnóstico gratis <ArrowRight className="h-4 w-4" /></ButtonV2>
            </Link>
            <Link to="/contacto">
              <ButtonV2 variant="outline" size="lg">Hablar con un experto</ButtonV2>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Pain points */}
      <Section surface="cream" size="default">
        <Container>
          <div ref={ref1}>
            <div className="text-center max-w-[600px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">El problema</Eyebrow>
              <h2 className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.15" }}>
                Por qué los SaaS B2B pierden revenue sin darse cuenta
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pains.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={p.title} className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(10,35,66,0.07)] transition-all duration-300`}>
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-navy-mist flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-v2-accent-blue" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading">{p.title}</h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Solutions */}
      <Section surface="default" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[600px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">Cómo lo resolvemos</Eyebrow>
              <h2 className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(26px, 4vw, 40px)", lineHeight: "1.15" }}>
                RevOps para SaaS operado,{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">no documentado</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {solutions.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:border-v2-accent-teal/30 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] hover:-translate-y-1 transition-all duration-300`}>
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading">{s.title}</h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.6] mt-2">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Stats */}
      <Section surface="navy-dark" size="compact" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[300px] rounded-full opacity-20"
            style={{ background: "radial-gradient(ellipse, rgba(0,191,165,0.3) 0%, transparent 70%)" }} />
        </div>
        <Container>
          <div ref={ref3} className="v2-reveal">
            <div className="text-center mb-10">
              <Eyebrow variant="teal">Resultados tipo</Eyebrow>
              <h2 className="font-poppins font-bold text-white mt-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: "1.2" }}>
                Lo que cambia cuando el RevOps está operado
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {stats.map((s, i) => (
                <div key={s.label} className={`v2-reveal v2-d${i + 1} text-center p-6 rounded-2xl bg-white/[0.04] border border-white/10`}>
                  <div className="font-poppins font-black text-[40px] text-v2-accent-teal leading-none">{s.value}</div>
                  <div className="font-lato text-[13px] text-white/60 mt-2 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
            <p className="text-center font-lato text-[12px] text-white/30 mt-6 italic">
              Datos representativos basados en cuentas activas. Resultados varían según el tamaño y la operación actual.
            </p>
          </div>
        </Container>
      </Section>

      {/* What we operate */}
      <Section surface="alt" size="default">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow variant="teal">Lo que operamos</Eyebrow>
              <h2 className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{ fontSize: "clamp(24px, 3.5vw, 36px)", lineHeight: "1.2" }}>
                Tu motor de Revenue, encendido todos los meses
              </h2>
              <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
                Conectamos el producto con el CRM y el equipo. Cada señal de uso se convierte
                en una acción, sin que nadie tenga que monitorear manualmente.
              </p>
            </div>
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-7 shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
              <div className="flex flex-col gap-3">
                {[
                  "Health score por cuenta calculado y actualizado semanalmente",
                  "Alertas de churn enviadas al CSM con contexto completo",
                  "PQLs notificados a Sales cuando alcanzan el umbral de activación",
                  "Secuencias de onboarding y reactivación diferenciadas por tier",
                  "Pipeline de expansion revenue con triggers automáticos",
                  "NPS automatizado post-onboarding y post-renovación",
                  "Dashboard MRR, churn, NRR y health por segmento",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-v2-accent-teal-deep" />
                    </div>
                    <span className="font-lato text-[14px] text-v2-ink-body">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section surface="navy-dark" size="default">
        <Container size="narrow" className="text-center">
          <Building2 className="h-10 w-10 text-v2-accent-teal mx-auto mb-4" />
          <h2 className="font-poppins font-bold text-white"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.15" }}>
            ¿Cuánto MRR estás perdiendo{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">por churn evitable</em>?
          </h2>
          <p className="font-lato text-[17px] text-white/65 mt-5 max-w-[460px] mx-auto">
            El Radar gratuito mapea tu operación en 48h y te dice exactamente dónde está la fuga de revenue.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
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

export default SaasB2B;
