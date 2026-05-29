import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap, Users, Clock, TrendingUp, MessageSquare, Database, Zap, BarChart3, Check } from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const pains = [
  { icon: MessageSquare, title: "Leads dispersos en mil canales", desc: "WhatsApp, Instagram, ferias, web — cada asesor gestiona los suyos y nadie tiene la foto completa. Aplicantes que preguntan y nunca reciben respuesta." },
  { icon: Clock,         title: "Procesos de admisión lentos",    desc: "Carpetas físicas o Excel, envíos manuales de documentos, entrevistas que tardan semanas. El candidato se cansa y se va a la competencia." },
  { icon: TrendingUp,    title: "Sin seguimiento post-inscripción",desc: "El CRM termina cuando el alumno paga. Nadie gestiona la retención, el upsell de programas ni la reactivación de los que no completaron." },
  { icon: Users,         title: "Equipos que no escalan",         desc: "En temporada de matrículas los asesores colapsan y la calidad de atención cae. No hay forma de absorber el volumen sin contratar." },
];

const solutions = [
  { icon: Database,    title: "Pipeline de inscripción end-to-end", desc: "Interesado → Aplicación → Entrevista → Admitido → Matrícul: cada etapa con automatizaciones y alertas, sin que nadie se pierda." },
  { icon: MessageSquare, title: "Agente IA calificador 24/7",      desc: "Responde dudas de programas, captura datos de contacto, pre-califica y agenda entrevistas — sin esperar al asesor." },
  { icon: Zap,           title: "Nurturing por programa",          desc: "Secuencias de email y WhatsApp diferenciadas para cada programa. El candidato recibe contenido relevante mientras decide, no mensajes genéricos." },
  { icon: BarChart3,     title: "Dashboards de admisiones",        desc: "Tasa de conversión por canal, programa y asesor. Cuántos se caen en cada etapa y por qué. Datos para decidir, no para archivar." },
];

const stats = [
  { value: "+120%", label: "Aplicaciones procesadas sin aumentar equipo" },
  { value: "−70%",  label: "Tiempo del ciclo de admisión" },
  { value: "0",     label: "Leads perdidos por falta de seguimiento" },
  { value: "4h",    label: "Tiempo de respuesta promedio (antes: 48h)" },
];

const Educacion = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* Hero */}
      <Section surface="default" size="spacious" className="overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: "radial-gradient(circle, rgba(29,112,162,0.15) 0%, transparent 70%)", animation: "v2-aurora-1 16s ease-in-out infinite" }} />
        <Container size="narrow" className="relative text-center pt-8">
          <Eyebrow variant="navy">Vertical · Educación</Eyebrow>
          <h1 className="font-poppins font-bold text-v2-ink-heading mt-4"
            style={{ fontSize: "clamp(38px, 6vw, 62px)", lineHeight: "1.07", letterSpacing: "-0.02em" }}>
            Más admisiones.{" "}
            <Underlined color="teal" variant="scribble">
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">Menos caos</em>
            </Underlined>
            .
          </h1>
          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-6 max-w-[600px] mx-auto">
            Operamos tu proceso de admisiones con CRM, agentes de IA y automatizaciones
            para que cada prospecto reciba respuesta — y el asesor se enfoque en cerrar.
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
                Por qué se pierden admisiones sin que nadie lo note
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
                Tu proceso de admisiones operado,{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">no configurado</em>
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
                Lo que cambia cuando el proceso está operado
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
                Tu equipo de admisiones, amplificado
              </h2>
              <p className="font-lato text-[16px] text-v2-ink-body leading-[1.65] mt-4">
                No reemplazamos a tus asesores. Les quitamos todo lo administrativo para que
                se enfoquen en la conversación que cierra la matrícula.
              </p>
            </div>
            <div className="bg-white border border-v2-border-subtle rounded-2xl p-7 shadow-[0_8px_32px_rgba(10,35,66,0.06)]">
              <div className="flex flex-col gap-3">
                {[
                  "Pipeline de admisiones configurado y operado mes a mes",
                  "Agente IA activo 24/7 respondiendo consultas de programas",
                  "Nurturing por programa: emails + WhatsApp coordinados",
                  "Agenda de entrevistas automatizada sin intervención humana",
                  "Dashboard de conversión por canal, programa y asesor",
                  "Alertas proactivas de candidatos sin respuesta >24h",
                  "Reporte ejecutivo semanal listo cada lunes a las 9am",
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
          <GraduationCap className="h-10 w-10 text-v2-accent-teal mx-auto mb-4" />
          <h2 className="font-poppins font-bold text-white"
            style={{ fontSize: "clamp(26px, 4vw, 42px)", lineHeight: "1.15" }}>
            ¿Cuántas admisiones estás perdiendo{" "}
            <em className="font-serif italic font-normal text-v2-accent-teal">sin saberlo</em>?
          </h2>
          <p className="font-lato text-[17px] text-white/65 mt-5 max-w-[460px] mx-auto">
            El Radar gratuito te muestra en 48h exactamente dónde está la fuga — y qué cambia si la tapas.
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

export default Educacion;
