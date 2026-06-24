import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag, ShoppingCart, MessageSquare, Star, TrendingUp, Zap, BarChart3, RefreshCw, Check } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pains = [
  { icon: ShoppingCart, title: "Carritos abandonados sin recovery",  desc: "El 70% de los carritos se abandona. Sin una secuencia de recovery activa, ese revenue simplemente desaparece — sin que nadie lo persiga." },
  { icon: MessageSquare,title: "Soporte disperso en mil canales",    desc: "WhatsApp, Instagram DMs, email, chat de web — cada canal tiene su propia cola. El cliente espera, se frustra y no regresa." },
  { icon: TrendingUp,   title: "Sin LTV ni segmentación activa",     desc: "Todos los clientes reciben el mismo mensaje. Los que compraron 3 veces y los que compraron una. Sin segmentación, el ROI del email cae en picada." },
  { icon: Star,         title: "Reseñas y NPS sin gestionar",        desc: "El cliente tiene una mala experiencia, nadie lo detecta a tiempo. Se va en silencio y deja una reseña negativa semanas después." },
];

const solutions = [
  { icon: RefreshCw,    title: "Secuencia de cart recovery activa",  desc: "Email + WhatsApp coordinados a la 1h, 6h y 24h post-abandono. Mensajes con el carrito exacto, descuento condicionado y urgencia real — no genéricos." },
  { icon: MessageSquare,title: "Bandeja unificada multicanal",       desc: "WhatsApp Business, Instagram, email y chat en un solo panel. El equipo de soporte trabaja desde un lugar — sin cambiar de pestaña, sin perder hilos." },
  { icon: Zap,          title: "Segmentación y campañas por LTV",    desc: "Clientes VIP, compradores únicos, en riesgo de churn — cada segmento recibe mensajes y ofertas pensados para ellos. Automatizado, no manual." },
  { icon: BarChart3,    title: "NPS automatizado y gestión de reseñas",desc: "Post-compra y post-entrega: encuesta automática. Si el NPS es bajo, alerta inmediata al equipo. Si es alto, solicitud de reseña en el canal correcto." },
];

const stats = [
  { value: "+18%",  label: "Tasa de recuperación de carritos" },
  { value: "−60%",  label: "Tiempo de resolución de soporte" },
  { value: "3.2×",  label: "Revenue por cliente con segmentación activa" },
  { value: "4.8★",  label: "Rating promedio en cuentas con gestión de reseñas" },
];

const Retail = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* Hero */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(0,191,165,0.12) 0%, transparent 70%)", animation: "v2-aurora-1 16s ease-in-out infinite" }} />
        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow variant="teal">Vertical · Retail & E-commerce</Eyebrow>
          <h1 className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(38px, 6vw, 62px)", lineHeight: "1.07", letterSpacing: "-0.02em" }}>
            Más revenue.{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">Menos soporte manual</em>
            </Underlined>
            .
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[600px] mx-auto">
            Operamos cart recovery, atención multicanal, segmentación por LTV y NPS automatizado
            para que el e-commerce crezca sin crecer el equipo de operaciones.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">Diagnóstico gratis <ArrowRight className="h-4 w-4" /></ButtonV2>
            </Link>
            <Link to="/v2/contacto">
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
                Por qué el e-commerce deja revenue en la mesa todos los días
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
                Tu operación de e-commerce en{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">piloto automático</em>
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
                Lo que cambia cuando la operación está automatizada
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
                Tu equipo de operaciones, multiplicado
              </h2>
              <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
                El mismo equipo que tienes hoy, con la capacidad de manejar el doble de volumen
                sin errores, sin pérdidas de hilos y con datos reales de lo que pasa.
              </p>
            </div>
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-7 shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
              <div className="flex flex-col gap-3">
                {[
                  "Cart recovery activo: email + WhatsApp en 3 disparos",
                  "Bandeja unificada: todos los canales en un solo panel",
                  "Segmentos dinámicos por LTV, frecuencia y ticket promedio",
                  "Campañas de reactivación para compradores inactivos >45 días",
                  "NPS automatizado post-compra y post-entrega",
                  "Alertas de reseñas negativas con protocolo de respuesta",
                  "Dashboard de revenue: conversión, AOV, LTV y churn mensual",
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
          <ShoppingBag className="h-10 w-10 text-v2-accent-teal mx-auto mb-4" />
          <h2 className="font-poppins font-bold text-white"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.15" }}>
            ¿Cuánto revenue se va{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">en carritos abandonados</em>?
          </h2>
          <p className="font-lato text-[17px] text-white/65 mt-5 max-w-[460px] mx-auto">
            El Radar gratuito calcula en 48h cuánto dinero te cuesta no tener recovery activo — y qué cambia si lo operas.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/radar">
              <ButtonV2 variant="primary" size="lg">Pedir Radar gratis <ArrowRight className="h-4 w-4" /></ButtonV2>
            </Link>
            <Link to="/v2/contacto">
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

export default Retail;
