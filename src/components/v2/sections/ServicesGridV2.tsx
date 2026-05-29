import {
  Search, ClipboardCheck, Map, TrendingUp,
  Database, Workflow, Link2, Bot,
  Activity, BarChart3, FileText, RefreshCw,
  LucideIcon,
} from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import { Underlined } from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── types ── */
interface ServiceItem {
  name: string;
  desc: string;
  icon: LucideIcon;
}

interface Layer {
  eyebrow: string;
  eyebrowColor: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  services: ServiceItem[];
}

/* ── data ── */
const layers: Layer[] = [
  {
    eyebrow: "01 · Consultar",
    eyebrowColor: "text-v2-accent-teal-deep",
    title: "Mapear cómo opera tu negocio hoy.",
    description:
      "Sam mapea el flujo real y cuantifica las fugas. Alex traduce los hallazgos en un roadmap priorizado.",
    iconBg: "bg-v2-surface-teal-mist",
    iconColor: "text-v2-accent-teal-deep",
    services: [
      { name: "Diagnóstico Sixteam", desc: "Mapeo agéntico de tu operación en 2 semanas.", icon: Search },
      { name: "Auditoría de stack actual", desc: "Revisamos qué tienes, qué falta y qué sobra.", icon: ClipboardCheck },
      { name: "Roadmap cuantificado", desc: "Plan priorizado por impacto en revenue.", icon: Map },
      { name: "Recomendación de inversión", desc: "Cuánto invertir, en qué, y en qué orden.", icon: TrendingUp },
    ],
  },
  {
    eyebrow: "02 · Implementar",
    eyebrowColor: "text-v2-accent-blue",
    title: "Construir el sistema operativo de tu RevOps.",
    description:
      "Debbie monta el CRM, las automatizaciones y los workflows. Vinnie conecta tus herramientas para que se hablen entre sí.",
    iconBg: "bg-v2-accent-blue/10",
    iconColor: "text-v2-accent-blue",
    services: [
      { name: "Setup de CRM", desc: "HubSpot, Pipedrive o GHL — montado y listo.", icon: Database },
      { name: "Automatizaciones y workflows", desc: "Make, Zapier, n8n. Lo repetitivo, en piloto.", icon: Workflow },
      { name: "Integraciones", desc: "WhatsApp + CRM + pago + analítica conectados.", icon: Link2 },
      { name: "Agentes IA en producción", desc: "Bots que califican, responden y agendan 24/7.", icon: Bot },
    ],
  },
  {
    eyebrow: "03 · Operar",
    eyebrowColor: "text-v2-accent-teal-deep",
    title: "Correr tu RevOps mes a mes, sin pausa.",
    description:
      "Sally opera el pipeline a diario. Clara mide y reporta cada lunes. No te dejamos solo después del go-live.",
    iconBg: "bg-v2-surface-teal-mist",
    iconColor: "text-v2-accent-teal-deep",
    services: [
      { name: "Operación diaria del pipeline", desc: "Leads ruteados, follow-ups disparados, deals movidos.", icon: Activity },
      { name: "Dashboard de revenue en vivo", desc: "Métricas reales, no powerpoints de status.", icon: BarChart3 },
      { name: "Reporte ejecutivo semanal", desc: "Cada lunes 9am, sin que tengas que pedirlo.", icon: FileText },
      { name: "Sprint semanal de mejoras", desc: "Ajustes y crecimiento del sistema continuo.", icon: RefreshCw },
    ],
  },
];

/* ── component ── */
export const ServicesGridV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="cream" size="default">
      <Container>
        <div ref={ref}>

          {/* ── header ── */}
          <div className="text-center max-w-[760px] mx-auto v2-reveal">
            <Eyebrow variant="navy">Todo lo que operamos por ti</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Tres capas.{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  Una cadena cerrada.
                </em>
              </Underlined>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[640px] mx-auto mt-4 leading-[1.6]">
              Consultamos cómo opera tu negocio, implementamos los sistemas que faltan,
              y los operamos mes a mes. No vendemos una pieza — vendemos la cadena completa.
            </p>
          </div>

          {/* ── 3-layer grid ── */}
          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
            {layers.map((layer, i) => (
              <div key={layer.eyebrow} className={`v2-reveal v2-d${i + 1} flex flex-col gap-4`}>

                {/* layer header */}
                <div className="mb-1">
                  <span
                    className={`font-lato text-[11px] font-semibold uppercase tracking-widest ${layer.eyebrowColor}`}
                  >
                    {layer.eyebrow}
                  </span>
                  <h3 className="font-poppins font-bold text-[18px] text-v2-ink-heading mt-1.5 leading-[1.25]">
                    {layer.title}
                  </h3>
                  <p className="font-lato text-[13px] text-v2-ink-muted leading-relaxed mt-2">
                    {layer.description}
                  </p>
                </div>

                {/* service cards */}
                {layer.services.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <div
                      key={svc.name}
                      className="group bg-white border border-v2-border-subtle rounded-xl p-4 hover:border-v2-accent-teal/40 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,191,165,0.10)] transition-[transform,box-shadow,border-color] duration-200"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${layer.iconBg} ${layer.iconColor}`}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                        </div>
                        <span className="font-poppins font-bold text-[13px] text-v2-ink-heading leading-tight">
                          {svc.name}
                        </span>
                      </div>
                      <p className="font-lato text-[12px] text-v2-ink-muted leading-relaxed pl-[37px]">
                        {svc.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* ── closing line ── */}
          <p className="v2-reveal v2-d4 font-serif italic text-[15px] text-v2-ink-muted leading-relaxed text-center mt-12 max-w-[640px] mx-auto">
            "No te entregamos un sistema y nos vamos. La cadena se cierra cada semana — y vuelve a empezar la siguiente."
          </p>

        </div>
      </Container>
    </Section>
  );
};

export default ServicesGridV2;
