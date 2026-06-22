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
    eyebrow: "01 · Entender",
    eyebrowColor: "text-v2-accent-teal-deep",
    title: "Primero entendemos tu negocio.",
    description:
      "Antes de configurar cualquier cosa, analizamos cómo funciona tu operativa actual: qué no está funcionando bien, qué está haciéndote perder dinero y qué tiene potencial de mejora.",
    iconBg: "bg-v2-surface-teal-mist",
    iconColor: "text-v2-accent-teal-deep",
    services: [
      { name: "Diagnóstico gratuito", desc: "Te mostramos en 2 semanas exactamente qué está frenando tu crecimiento.", icon: Search },
      { name: "Revisión de herramientas", desc: "Identificamos qué tienes, qué no usas y qué te hace falta.", icon: ClipboardCheck },
      { name: "Plan de acción claro", desc: "Una hoja de ruta con prioridades: qué hacer primero y por qué.", icon: Map },
      { name: "Presupuesto justificado", desc: "Sabes cuánto invertir y qué resultado esperar antes de arrancar.", icon: TrendingUp },
    ],
  },
  {
    eyebrow: "02 · Construir",
    eyebrowColor: "text-v2-accent-blue",
    title: "Construimos el sistema que tu negocio necesita.",
    description:
      "Configuramos tus herramientas, conectamos tus canales y automatizamos lo que hoy se hace a mano, para que tu equipo se enfoque en lo que importa.",
    iconBg: "bg-v2-accent-blue/10",
    iconColor: "text-v2-accent-blue",
    services: [
      { name: "Tu proceso de ventas ordenado", desc: "Sin leads perdidos ni seguimientos olvidados.", icon: Database },
      { name: "Tareas que corren solas", desc: "Lo que hoy hace tu equipo a mano, lo automatizamos: sin errores ni demoras.", icon: Workflow },
      { name: "Todo conectado", desc: "WhatsApp, pagos, correo y reportes hablando entre sí, sin pasos manuales.", icon: Link2 },
      { name: "Asistente IA activo 24/7", desc: "Atiende, califica y agenda clientes aunque no haya nadie disponible.", icon: Bot },
    ],
  },
  {
    eyebrow: "03 · Mantener",
    eyebrowColor: "text-v2-accent-teal-deep",
    title: "Nos quedamos operando contigo.",
    description:
      "No te entregamos un sistema y nos vamos. Alguien del equipo lo opera día a día para que nunca se detenga.",
    iconBg: "bg-v2-surface-teal-mist",
    iconColor: "text-v2-accent-teal-deep",
    services: [
      { name: "Seguimiento diario a tus ventas", desc: "Tus prospectos son contactados a tiempo y los negocios avanzan.", icon: Activity },
      { name: "Resultados visibles en tiempo real", desc: "Ves el desempeño de tu negocio en un tablero claro, sin ser experto.", icon: BarChart3 },
      { name: "Reporte semanal sin pedirlo", desc: "Cada lunes recibes un resumen de lo que pasó y lo que viene.", icon: FileText },
      { name: "Mejoras continuas", desc: "Cada semana ajustamos y hacemos crecer el sistema junto contigo.", icon: RefreshCw },
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
            <Eyebrow variant="navy">Nuestra forma de solucionar</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-3 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Nuestra Metodología:{" "}
              <Underlined color="teal" variant="scribble">
                <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                  Entender, Construir, Mantener.
                </em>
              </Underlined>
            </h2>
            <p className="font-lato text-[17px] text-v2-ink-body max-w-[640px] mx-auto mt-4 leading-[1.6]">
              Primero entendemos cómo funciona tu negocio, así construimos la solución a medida
              y lo que queda es mantener la operativa para que los resultados no se detengan.
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
            "No te entregamos un sistema y desaparecemos. Nos quedamos para que lo que construimos funcione, y siga mejorando."
          </p>

        </div>
      </Container>
    </Section>
  );
};

export default ServicesGridV2;
