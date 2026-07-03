import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  Shield,
  Star,
  Clock,
  BarChart2,
  FileText,
  Target,
  Zap,
  Users,
  ChevronRight,
} from "lucide-react";
import LayoutV2 from "@/components/v2/LayoutV2";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import ButtonV2 from "@/components/v2/ButtonV2";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ─── Data ─────────────────────────────────────────────────────────────── */

const heroStats = [
  { value: "$25K+", label: "Valor promedio de oportunidades perdidas encontradas" },
  { value: "2 sem", label: "De diagnóstico a roadmap entregado" },
  { value: "100%", label: "Money-back si no encuentras valor accionable" },
  { value: "3–7", label: "Iniciativas priorizadas con ROI estimado" },
];

const marketStats = [
  {
    figure: "70%",
    text: "de implementaciones de CRM fracasan por adopción deficiente",
    source: "Forrester",
  },
  {
    figure: "3 de 4",
    text: "proyectos de automatización no alcanzan el ROI esperado en el primer año",
    source: "Gartner",
  },
  {
    figure: "30%",
    text: "de empresas de servicio miden su costo de oportunidad real en ventas",
    source: "HBR",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Kickoff 1:1",
    when: "Día 1",
    desc: "30 minutos con Samuel. Defines tus objetivos de revenue, los cuellos de botella que ya conoces, y el contexto de tu industria. Sin formularios. Sin onboarding largo.",
  },
  {
    number: "02",
    title: "Mapeo agéntico",
    when: "Días 2–7",
    desc: "Nuestros agentes IA revisan tu stack actual, tu historial de leads, tus procesos documentados, y reconstruyen el flujo real de tu operación — no el organigrama teórico.",
  },
  {
    number: "03",
    title: "Análisis de fugas",
    when: "Días 8–12",
    desc: "Identificamos dónde se pierde dinero: leads sin respuesta, seguimientos caídos, procesos manuales que deberían ser automáticos, integraciones rotas. Todo cuantificado.",
  },
  {
    number: "04",
    title: "Entrega del Roadmap",
    when: "Día 14",
    desc: "Presentación ejecutiva de 60 minutos + documento con 3–7 iniciativas priorizadas por ROI, stack recomendado para tu caso, e inversión estimada clara.",
  },
];

const deliverables = [
  {
    icon: BarChart2,
    title: "Mapa operacional de revenue",
    desc: "Visualización de tu flujo real: desde lead hasta cliente pagador. Cada fricción identificada y cuantificada en dinero.",
  },
  {
    icon: Target,
    title: "Ranking de iniciativas por ROI",
    desc: "3 a 7 acciones priorizadas por impacto en revenue vs. esfuerzo de implementación. Sabes exactamente por dónde empezar.",
  },
  {
    icon: FileText,
    title: "Blueprint de implementación",
    desc: "Para cada iniciativa: qué herramientas, qué procesos, qué automatizaciones. No hipótesis — un plan ejecutable con estimado de tiempo y costo.",
  },
  {
    icon: Zap,
    title: "Stack recomendado para tu caso",
    desc: "La combinación exacta de CRM, automatización y canales que tiene sentido para tu empresa, tamaño e industria en LatAm.",
  },
];

const comparisonRows = [
  {
    label: "Tiempo de entrega",
    consultora: "6–12 semanas",
    freelancer: "Indefinido",
    sixteam: "2 semanas",
  },
  {
    label: "Costo",
    consultora: "$20k–$80k USD",
    freelancer: "Variable",
    sixteam: "$2,500 USD",
  },
  {
    label: "Profundidad del análisis",
    consultora: "20–40 entrevistas",
    freelancer: "Revisión superficial",
    sixteam: "Stack + equipo + agentes IA",
  },
  {
    label: "Continuidad post-diagnóstico",
    consultora: "No incluida",
    freelancer: "No incluida",
    sixteam: "~50% pasa a operación mensual",
  },
  {
    label: "Garantía",
    consultora: "No",
    freelancer: "No",
    sixteam: "100% money-back",
  },
];

/* ─── Component ─────────────────────────────────────────────────────────── */

const DiagnosticoSixteam = () => {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();
  const ref4 = useScrollReveal<HTMLDivElement>();
  const ref5 = useScrollReveal<HTMLDivElement>();
  const ref6 = useScrollReveal<HTMLDivElement>();
  const ref7 = useScrollReveal<HTMLDivElement>();

  return (
    <LayoutV2>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <Section surface="default" size="spacious" className="relative overflow-hidden">
        {/* Ambient glow top-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-[560px] h-[560px] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(circle, rgba(0,191,165,0.11) 0%, transparent 70%)",
            animation: "v2-aurora-1 14s ease-in-out infinite",
          }}
        />
        {/* Ambient glow bottom-left */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(circle, rgba(29,112,162,0.10) 0%, transparent 70%)",
            animation: "v2-aurora-2 18s ease-in-out infinite",
          }}
        />

        <Container size="narrow" className="text-center pt-8 relative">
          <Eyebrow variant="teal">DIAGNÓSTICO SIXTEAM · $2,500 USD</Eyebrow>

          <h1
            className="font-poppins font-bold text-v2-ink-heading mt-5"
            style={{
              fontSize: "clamp(40px, 7vw, 68px)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
            }}
          >
            Sabe{" "}
            <em className="font-serif italic font-normal">
              exactamente
            </em>{" "}
            dónde está dejando dinero sobre la mesa.
          </h1>

          <p className="font-lato text-[18px] md:text-[20px] text-v2-ink-body leading-[1.65] mt-7 max-w-[620px] mx-auto">
            En 2 semanas, mapeamos tu operación de revenue completa — ventas, marketing y servicio al
            cliente — y te entregamos el roadmap cuantificado de qué arreglar primero y cuánto vale.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/v2/contacto">
              <ButtonV2 variant="primary" size="lg" className="group">
                Solicitar Diagnóstico
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </ButtonV2>
            </Link>
            <Link to="#proceso">
              <ButtonV2 variant="outline" size="lg">
                Ver cómo funciona
              </ButtonV2>
            </Link>
          </div>

          {/* Trust badge */}
          <div className="mt-8 flex justify-center">
            <span className="inline-flex items-center gap-2 font-lato text-[13px] font-semibold text-v2-accent-teal-deep border border-v2-accent-teal/35 bg-v2-surface-teal-mist px-4 py-2 rounded-full">
              <Check className="h-3.5 w-3.5 flex-shrink-0" />
              ~50% de clientes pasa a suscripción mensual
            </span>
          </div>
        </Container>
      </Section>

      {/* ── Stats (navy-dark) ─────────────────────────────────────────── */}
      <Section surface="navy-dark" size="compact" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(0,191,165,0.09) 0%, transparent 60%)",
          }}
        />
        <Container>
          <div ref={ref1}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {heroStats.map((s, i) => (
                <div key={s.value} className={`v2-reveal v2-d${i + 1} text-center`}>
                  <p
                    className="font-poppins font-bold text-white leading-none"
                    style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
                  >
                    {s.value}
                  </p>
                  <p className="font-lato text-[13px] text-white/55 leading-[1.55] mt-2 max-w-[160px] mx-auto">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── El Problema ──────────────────────────────────────────────── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={ref2}>
            <div className="text-center max-w-[640px] mx-auto mb-14 v2-reveal">
              <Eyebrow variant="navy">EL PROBLEMA</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                }}
              >
                No fallan por la herramienta. Fallan por el{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  diagnóstico.
                </em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
              {marketStats.map((s, i) => (
                <div
                  key={s.figure}
                  className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-7 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300 text-center`}
                >
                  <p
                    className="font-poppins font-bold text-v2-accent-teal-deep leading-none"
                    style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
                  >
                    {s.figure}
                  </p>
                  <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-4">
                    {s.text}
                  </p>
                  <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.15em] text-v2-ink-muted mt-3">
                    {s.source}
                  </p>
                </div>
              ))}
            </div>

            <div className="v2-reveal v2-d4 max-w-[680px] mx-auto text-center">
              <p className="font-lato text-[17px] md:text-[19px] text-v2-ink-body leading-[1.7] italic">
                "Implementar sin diagnóstico es como contratar un cirujano sin tomografía. Puede
                operar — pero en el lugar equivocado."
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Proceso ──────────────────────────────────────────────────── */}
      <Section surface="default" size="default" id="proceso">
        <Container>
          <div ref={ref3}>
            <div className="text-center max-w-[640px] mx-auto mb-16 v2-reveal">
              <Eyebrow variant="teal">CÓMO FUNCIONA</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                }}
              >
                Cuatro pasos. Dos semanas. Un roadmap{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  accionable.
                </em>
              </h2>
            </div>

            <div className="max-w-[800px] mx-auto flex flex-col gap-6">
              {processSteps.map((step, i) => (
                <div
                  key={step.number}
                  className={`v2-reveal v2-d${Math.min(i + 1, 4)} relative bg-white border border-v2-border-subtle rounded-2xl p-8 overflow-hidden hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 transition-all duration-300 flex gap-6 items-start`}
                >
                  {/* Watermark number */}
                  <span className="pointer-events-none select-none absolute right-6 top-4 font-serif italic leading-none text-v2-accent-teal/[0.05]"
                    style={{ fontSize: "clamp(64px, 8vw, 96px)" }}>
                    {step.number}
                  </span>

                  {/* Step number badge */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-v2-surface-teal-mist border border-v2-accent-teal/20 flex items-center justify-center">
                    <span className="font-poppins font-bold text-[15px] text-v2-accent-teal-deep">
                      {step.number}
                    </span>
                  </div>

                  <div className="relative flex-1">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-poppins font-bold text-[19px] text-v2-ink-heading">
                        {step.title}
                      </h3>
                      <span className="font-lato text-[12px] font-semibold uppercase tracking-[0.16em] text-v2-ink-muted">
                        · {step.when}
                      </span>
                    </div>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.7] mt-3">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Entregables ──────────────────────────────────────────────── */}
      <Section surface="teal-mist" size="default">
        <Container>
          <div ref={ref4}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="teal">QUÉ RECIBES</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                }}
              >
                Cuatro entregables que puedes usar{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  de inmediato.
                </em>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {deliverables.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.title}
                    className={`v2-reveal v2-d${i + 1} bg-white border border-v2-border-subtle rounded-2xl p-6 hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] hover:-translate-y-1 hover:border-v2-accent-teal/25 transition-all duration-300`}
                  >
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" />
                    </div>
                    <h3 className="font-poppins font-bold text-[17px] text-v2-ink-heading mt-4">
                      {d.title}
                    </h3>
                    <p className="font-lato text-[14px] text-v2-ink-body leading-[1.65] mt-3">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Comparativa ──────────────────────────────────────────────── */}
      <Section surface="alt" size="default">
        <Container>
          <div ref={ref5}>
            <div className="text-center max-w-[640px] mx-auto mb-12 v2-reveal">
              <Eyebrow variant="navy">POR QUÉ SIXTEAM</Eyebrow>
              <h2
                className="font-poppins font-bold text-v2-ink-heading mt-3"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                }}
              >
                No es una consultoría. No es un{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  freelancer.
                </em>
              </h2>
            </div>

            <div className="v2-reveal v2-d2 overflow-x-auto rounded-2xl border border-v2-border-subtle">
              <table className="w-full min-w-[600px] border-collapse">
                <thead>
                  <tr>
                    <th className="bg-white text-left font-lato text-[12px] font-semibold uppercase tracking-[0.14em] text-v2-ink-muted px-6 py-4 border-b border-v2-border-subtle w-[28%]">
                      Criterio
                    </th>
                    <th className="bg-white text-center font-lato text-[13px] font-semibold text-v2-ink-body px-6 py-4 border-b border-v2-border-subtle w-[24%]">
                      Consultoría Tradicional
                    </th>
                    <th className="bg-white text-center font-lato text-[13px] font-semibold text-v2-ink-body px-6 py-4 border-b border-v2-border-subtle w-[24%]">
                      Freelancer
                    </th>
                    <th className="bg-v2-surface-teal-mist text-center px-6 py-4 border-b border-v2-accent-teal/25 border-l border-r border-v2-accent-teal/20 w-[24%]">
                      <span className="font-poppins font-bold text-[14px] text-v2-accent-teal-deep">
                        Diagnóstico Sixteam
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "" : "bg-v2-surface/60"}>
                      <td className="bg-white font-lato text-[13px] font-semibold text-v2-ink-heading px-6 py-4 border-b border-v2-border-subtle/60">
                        {row.label}
                      </td>
                      <td className="bg-white text-center font-lato text-[13px] text-v2-ink-muted px-6 py-4 border-b border-v2-border-subtle/60">
                        {row.consultora}
                      </td>
                      <td className="bg-white text-center font-lato text-[13px] text-v2-ink-muted px-6 py-4 border-b border-v2-border-subtle/60">
                        {row.freelancer}
                      </td>
                      <td className="bg-v2-surface-teal-mist text-center font-lato text-[13px] font-semibold text-v2-accent-teal-deep px-6 py-4 border-b border-v2-accent-teal/15 border-l border-r border-v2-accent-teal/20">
                        {row.sixteam}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── Garantía ─────────────────────────────────────────────────── */}
      <Section surface="cream" size="default">
        <Container size="narrow">
          <div ref={ref6}>
            <div className="text-center v2-reveal">
              {/* Shield icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-v2-surface-teal-mist border border-v2-accent-teal/25 mb-8">
                <Shield className="h-8 w-8 text-v2-accent-teal-deep" />
              </div>

              <h2
                className="font-poppins font-bold text-v2-ink-heading"
                style={{
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: "1.15",
                  letterSpacing: "-0.01em",
                }}
              >
                Garantía total. Sin{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  letra pequeña.
                </em>
              </h2>

              <p className="font-lato text-[17px] md:text-[19px] text-v2-ink-body leading-[1.7] mt-6 max-w-[620px] mx-auto">
                Si al finalizar el Diagnóstico no encontramos al menos{" "}
                <strong className="font-semibold text-v2-ink-heading">$25,000 USD/año</strong> en
                oportunidades perdidas o procesos mejorables en tu operación, te devolvemos el{" "}
                <strong className="font-semibold text-v2-ink-heading">100% del pago</strong>. Sin
                preguntas. Sin excepciones.
              </p>
            </div>

            {/* Testimonial */}
            <div className="v2-reveal v2-d2 mt-12 bg-white border border-v2-border-subtle rounded-2xl p-7 max-w-[580px] mx-auto hover:shadow-[0_12px_40px_rgba(10,35,66,0.06)] transition-all duration-300">
              <span className="font-serif italic text-[52px] leading-none text-v2-accent-teal/20 block -mb-2">
                "
              </span>
              <blockquote className="font-lato text-[15px] text-v2-ink-body leading-[1.7] mt-2 italic">
                Pensé que sabía dónde estaban los problemas. El Diagnóstico encontró 3 fugas que ni
                siquiera estaba midiendo. Empezamos la operación esa misma semana.
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-v2-surface-teal-mist border border-v2-accent-teal/20 flex items-center justify-center flex-shrink-0">
                  <Users className="h-4 w-4 text-v2-accent-teal-deep" />
                </div>
                <div>
                  <p className="font-poppins font-bold text-[14px] text-v2-ink-heading">
                    Miguel T.
                  </p>
                  <p className="font-lato text-[11px] text-v2-ink-muted uppercase tracking-widest mt-0.5">
                    Inmobiliaria · Bogotá, Colombia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ── CTA Final (navy-dark) ─────────────────────────────────────── */}
      <Section surface="navy-dark" size="spacious" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(0,191,165,0.18) 0%, transparent 65%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(29,112,162,0.20) 0%, transparent 65%)",
          }}
        />

        <Container size="narrow" className="relative text-center">
          <div ref={ref7}>
            <div className="v2-reveal">
              <h2
                className="font-poppins font-bold text-white"
                style={{
                  fontSize: "clamp(32px, 5vw, 52px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                Empieza por saber la{" "}
                <em className="font-serif italic font-normal text-v2-accent-teal">
                  verdad
                </em>{" "}
                de tu operación.
              </h2>

              <p className="font-lato text-[17px] text-white/70 leading-[1.65] mt-6 max-w-[520px] mx-auto">
                El Diagnóstico toma 2 semanas y vale $2,500 USD. La primera sesión de alineación es
                sin costo.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/v2/contacto">
                  <ButtonV2 variant="primary" size="lg" className="group">
                    Agendar sesión gratuita
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </ButtonV2>
                </Link>
                <Link to="/v2/operacion-continua">
                  <ButtonV2 variant="secondary" size="lg">
                    Ver planes de operación
                    <ChevronRight className="h-4 w-4" />
                  </ButtonV2>
                </Link>
              </div>

              <p className="font-lato text-[12px] text-white/50 mt-7 leading-[1.6]">
                Sin contrato · Sin permanencia · Garantía 30 días · Setup fee = 1.5× la mensualidad
                si pasa a plan
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </LayoutV2>
  );
};

export default DiagnosticoSixteam;
