import { ArrowRight, Plane, CalendarCheck, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── types ── */
interface Industry {
  label: string;
  Icon: React.ElementType;
  href: string;
  desc: string;
}

/* ── data ── */
const industries: Industry[] = [
  {
    label: "Agencias de viaje y turismo",
    Icon: Plane,
    href: "/v2/industrias/viajes",
    desc: "Pipeline de cotizaciones, CRM con datos de pasajero y cliente, follow-up automático, retención de viajeros frecuentes. Sin que se pierda ni una solicitud.",
  },
  {
    label: "Servicios profesionales con cita",
    Icon: CalendarCheck,
    href: "/v2/industrias/servicios-con-cita",
    desc: "Salud, legal, estético, contable. Agendamiento automático, recordatorios por WhatsApp, no-shows minimizados, expediente de cliente vivo en el CRM.",
  },
  {
    label: "Inmobiliarias y constructoras",
    Icon: Building2,
    href: "/v2/industrias/inmobiliarias",
    desc: "Captura de leads desde portales, calificación automática por presupuesto y zona, seguimiento del comprador hasta el cierre, reportes a inversionistas.",
  },
];

/* ── component ── */
export const IndustriesV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="cream" size="default">
      <Container>
        <div ref={ref}>
          {/* ── header ── */}
          <div className="text-center max-w-[640px] mx-auto v2-reveal">
            <Eyebrow variant="navy">Verticales donde operamos</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              No somos para todo el mundo.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                Para estos sí, en serio.
              </em>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body mt-4 leading-[1.6] max-w-[520px] mx-auto">
              Llevamos años operando negocios como el tuyo. Tenemos playbooks, métricas y el músculo
              táctico para tu vertical.
            </p>
          </div>

          {/* ── industry grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
            {industries.map((ind, i) => (
              <Link
                key={ind.label}
                to={ind.href}
                className={[
                  "v2-reveal",
                  `v2-d${i + 1}`,
                  "group relative bg-white border border-v2-border-subtle rounded-2xl p-6 flex flex-col",
                  "hover:border-v2-accent-teal/35 hover:shadow-[0_16px_48px_rgba(0,191,165,0.09)] hover:-translate-y-1",
                  "transition-[transform,box-shadow,border-color] duration-300",
                ].join(" ")}
              >
                {/* icon badge */}
                <div className="w-12 h-12 rounded-xl bg-v2-surface-teal-mist flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  <ind.Icon className="h-6 w-6 text-v2-accent-teal-deep" aria-hidden />
                </div>

                <h3 className="font-poppins font-bold text-[16px] text-v2-ink-heading leading-[1.25]">
                  {ind.label}
                </h3>
                <p className="font-lato text-[13px] text-v2-ink-body leading-[1.6] mt-2 flex-1">
                  {ind.desc}
                </p>

                <span className="inline-flex items-center gap-1 font-lato text-[12px] font-semibold uppercase tracking-widest text-v2-accent-teal-deep mt-5 group-hover:gap-2 transition-[gap] duration-200">
                  Ver cómo
                  <ArrowRight
                    className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>

          {/* ── closing line ── */}
          <p className="font-lato text-[15px] text-v2-ink-muted text-center max-w-[640px] mx-auto mt-12 v2-reveal v2-d4">
            ¿No estás en estos tres? El{" "}
            <Link to="/v2/radar" className="text-v2-accent-teal-deep font-semibold hover:underline">
              Diagnóstico
            </Link>{" "}
            evalúa el encaje. Si tu negocio no calza en el playbook, no lo tomamos — aunque tengas
            el presupuesto.
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default IndustriesV2;
