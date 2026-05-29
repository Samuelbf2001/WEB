import { Compass, Search, Wrench, Link2, Activity, BarChart3, Users2 } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Data ── */
const humans = [
  { initials: "JR", bg: "bg-v2-accent-teal",   text: "text-v2-ink-heading", name: "Juan R.",   role: "Estratega RevOps" },
  { initials: "MA", bg: "bg-v2-accent-blue",    text: "text-white",          name: "María A.",  role: "Operador CRM & datos" },
  { initials: "DC", bg: "bg-[#d4a853]",         text: "text-v2-ink-heading", name: "Diego C.",  role: "Diseñador de automatizaciones" },
];

const layers = [
  {
    label: "CONSULTORÍA",
    humanRole: "Revenue Strategist (Samuel)",
    agents: [
      { icon: Compass, name: "Alex",  role: "Estratega & Concierge IA", color: "#1d70a2" },
      { icon: Search,  name: "Sam",   role: "Diagnóstico IA",            color: "#0d6659" },
    ],
  },
  {
    label: "IMPLEMENTACIÓN",
    humanRole: "Systems Engineer (Ernesto)",
    agents: [
      { icon: Wrench,  name: "Debbie", role: "Constructora de Sistemas IA",       color: "#7b5ea7" },
      { icon: Link2,   name: "Vinnie", role: "Especialista de Integraciones IA",  color: "#c2680a" },
    ],
  },
  {
    label: "OPERACIÓN",
    humanRole: "Revenue Ops Manager",
    agents: [
      { icon: Activity,  name: "Sally", role: "Operadora de Revenue IA",  color: "#00bfa5" },
      { icon: BarChart3, name: "Clara", role: "Analista de Operación IA", color: "#1d70a2" },
    ],
  },
];

const stats = [
  { value: "6 agentes IA",     label: "Por cada cuenta"    },
  { value: "3 humanos senior", label: "Criterio detrás"    },
  { value: "24 / 7",           label: "La IA no para"      },
  { value: "1 Slack",          label: "Compartido contigo" },
];

/* ── Component ── */
export const TuEquipoV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="default" size="default">
      <Container>
        <div ref={ref}>

          {/* Header */}
          <div className="text-center max-w-[680px] mx-auto v2-reveal">
            <Eyebrow variant="teal">Tu equipo Sixteam</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              6 agentes IA + 3 humanos senior.{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                <Underlined color="teal" variant="scribble">
                  Una sola unidad.
                </Underlined>
              </em>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[600px] mx-auto mt-4 leading-[1.6]">
              Trabajan en paralelo, en las tres capas que tu negocio necesita: consultoría,
              implementación y operación. Mismo Slack, mismo sprint, una sola operación.
            </p>
          </div>

          {/* 3-layer cards */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
            {layers.map((layer, li) => (
              <div
                key={layer.label}
                className={`v2-reveal v2-d${li + 1} relative flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-[0_4px_32px_rgba(0,191,165,0.08)]`}
                style={{ background: "#0a2342" }}
              >
                {/* Aurora accent */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute top-0 right-0 w-32 h-32 opacity-15"
                  style={{ background: "radial-gradient(circle at top right, #00bfa5, transparent 70%)", borderRadius: "0 16px 0 0" }}
                />

                {/* Layer label */}
                <div className="px-6 pt-5 pb-3 border-b border-white/10 relative">
                  <span className="font-lato text-[10px] font-bold uppercase tracking-[0.22em] text-v2-accent-teal">
                    {layer.label}
                  </span>
                </div>

                {/* Agents */}
                <div className="flex flex-col divide-y divide-white/10 px-6 py-1 flex-1 relative">
                  {layer.agents.map((a) => {
                    const Icon = a.icon;
                    return (
                      <div key={a.name} className="flex items-center gap-4 py-4">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${a.color}30` }}
                        >
                          <Icon className="h-4 w-4" style={{ color: a.color }} aria-hidden />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-poppins font-bold text-[14px] text-white leading-tight">
                            {a.name}
                          </p>
                          <p className="font-lato text-[11px] text-white/55 mt-0.5 leading-tight">
                            {a.role}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5 flex-shrink-0">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          </span>
                          <span className="font-lato text-[10px] text-white/45">24/7</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Human backing */}
                <div className="px-6 py-3 border-t border-white/10 relative flex items-center gap-2">
                  <Users2 className="h-3.5 w-3.5 text-white/30 flex-shrink-0" aria-hidden />
                  <p className="font-lato italic text-[11.5px] text-white/40 leading-tight">
                    {layer.humanRole}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Humans strip */}
          <div className="v2-reveal v2-d3 mt-6 flex flex-col rounded-2xl overflow-hidden border border-v2-border-subtle shadow-[0_4px_24px_rgba(10,35,66,0.04)] bg-white">
            <div className="flex items-center justify-between px-7 py-4 border-b border-v2-border-subtle bg-v2-surface-alt">
              <span className="font-lato text-[11px] font-semibold uppercase tracking-[0.18em] text-v2-ink-muted">
                Criterio senior detrás de los agentes
              </span>
              <span className="font-lato text-[11px] font-semibold text-v2-accent-teal-deep bg-v2-surface-teal-mist border border-v2-accent-teal/20 rounded-full px-3 py-1">
                3 personas senior
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-v2-border-subtle px-0">
              {humans.map((h) => (
                <div key={h.initials} className="flex items-center gap-4 px-7 py-4">
                  <div className={`w-9 h-9 rounded-full ${h.bg} ${h.text} flex items-center justify-center font-poppins font-bold text-[12px] flex-shrink-0`}>
                    {h.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-poppins font-bold text-[13px] text-v2-ink-heading leading-tight">
                      {h.name}
                    </p>
                    <p className="font-lato text-[11px] text-v2-ink-muted mt-0.5">
                      {h.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat strip */}
          <div className="v2-reveal v2-d3 mt-8 flex justify-center">
            <div className="bg-v2-surface-alt border border-v2-border-subtle rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center gap-6 sm:gap-0">
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col sm:flex-row items-center gap-0 sm:gap-0">
                  {i > 0 && (
                    <div className="hidden sm:block w-px h-8 bg-v2-border-subtle mx-8" aria-hidden />
                  )}
                  <div className="text-center sm:text-left">
                    <p className="font-poppins font-bold text-[17px] text-v2-ink-heading leading-tight">
                      {s.value}
                    </p>
                    <p className="font-lato text-[12px] text-v2-ink-muted mt-0.5">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
};

export default TuEquipoV2;
