import { Calendar, Mail, PenLine, Palette, Video, Filter, Globe, Zap, Bot, Check } from "lucide-react";
import Container from "@/components/v2/Container";
import Section, { Eyebrow } from "@/components/v2/Section";
import Underlined from "@/components/v2/UnderlineSvg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* ── Data ── */
const categories = [
  {
    icon: Calendar,
    title: "Tu calendario de contenido, corriendo cada semana",
    items: [
      "Posts redactados, diseñados y agendados",
      "Carruseles listos para publicar",
      "Copy que suena como tú, no como bot",
      "Métricas medidas para saber qué funciona",
    ],
  },
  {
    icon: Mail,
    title: "Tus emails saliendo en piloto automático",
    items: [
      "Secuencias de nurturing calentando leads mientras duermes",
      "Emails de venta que convierten, no acumulan polvo",
      "Newsletters que tu lista sí abre",
      "Follow-ups que nunca se pierden",
    ],
  },
  {
    icon: PenLine,
    title: "Tu copy escrito y listo para usar",
    items: [
      "Páginas web que venden, no solo decoran",
      "Blog posts trayendo tráfico orgánico",
      "Copy de pauta testeado y optimizado",
      "Lead magnets que tu audiencia sí descarga",
    ],
  },
  {
    icon: Palette,
    title: "Tu marca consistente en todos lados",
    items: [
      "Gráficas para redes con tu identidad y a tiempo",
      "Banners, flyers y material promocional resueltos",
      "Presentaciones que te hacen ver impecable",
      "Branding alineado en cada canal",
    ],
  },
  {
    icon: Video,
    title: "Tus videos editados y publicados",
    items: [
      "Reels y Shorts cortados de tu contenido largo",
      "Episodios de podcast limpios y publicados",
      "Ediciones de YouTube con intros, cortes y subtítulos",
      "Clips reutilizados para cada plataforma",
    ],
  },
  {
    icon: Filter,
    title: "Tus funnels vivos y convirtiendo",
    items: [
      "Landing pages construidas y lanzadas",
      "Opt-in pages capturando leads 24/7",
      "Sales pages que cierran",
      "Thank-you pages que hacen upsell",
    ],
  },
  {
    icon: Globe,
    title: "Tu web actualizada y mantenida",
    items: [
      "Nuevas páginas y secciones construidas rápido",
      "WordPress, Webflow o custom: lo operamos nosotros",
      "Actualizaciones regulares para que nada quede viejo",
      "Optimizada para móvil y carga rápida",
    ],
  },
  {
    icon: Zap,
    title: "Tus automatizaciones operando sin ti",
    items: [
      "Workflows del CRM que sí funcionan",
      "Integraciones de Zapier y Make conectadas",
      "Onboarding de clientes en piloto automático",
      "Follow-ups disparados en el momento justo",
    ],
  },
  {
    icon: Bot,
    title: "Tus agentes IA trabajando 24/7",
    items: [
      "Chatbots respondiendo consultas a toda hora",
      "Agentes IA calificando leads como un SDR",
      "Workflows inteligentes ruteando tareas",
      "Soporte cubierto incluso cuando no estás",
    ],
  },
];

/* ── Component ── */
export const TodoListoV2 = () => {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <Section surface="cream" size="spacious">
      <Container>
        <div ref={ref}>

          {/* ── Header ── */}
          <div className="v2-reveal text-center max-w-[720px] mx-auto">
            <Eyebrow variant="teal">Lo que ya está operando</Eyebrow>
            <h2
              className="font-poppins font-bold text-v2-ink-heading mt-4 leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
            >
              Todo lo que{" "}
              <em className="font-serif italic font-normal text-v2-accent-teal-deep">
                <Underlined color="teal" variant="scribble">
                  ya no tienes que hacer.
                </Underlined>
              </em>
            </h2>
            <p className="font-lato text-[17px] md:text-[18px] text-v2-ink-body leading-[1.65] mt-5 max-w-[640px] mx-auto">
              No es una lista de servicios. Es la lista de cosas que ya no van a
              aparecer en tu cabeza un lunes en la mañana.
            </p>
          </div>

          {/* ── Grid ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`v2-reveal v2-d${(i % 3) + 1} bg-white border border-v2-border-subtle rounded-2xl p-6 hover:border-v2-accent-teal/40 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(10,35,66,0.08)] transition-[transform,border-color,box-shadow] duration-300`}
                >
                  {/* ── Card top row ── */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-v2-surface-teal-mist border border-v2-accent-teal/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-v2-accent-teal-deep" aria-hidden />
                    </div>
                    <p className="font-poppins font-bold text-[15px] text-v2-ink-heading leading-tight">
                      {cat.title}
                    </p>
                  </div>

                  {/* ── Bullet list ── */}
                  <ul className="mt-4 flex flex-col gap-2.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="h-3 w-3 text-v2-accent-teal-deep flex-shrink-0 mt-1" aria-hidden />
                        <span className="font-lato text-[13px] text-v2-ink-muted leading-[1.55]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* ── Closing line ── */}
          <p className="v2-reveal v2-d3 font-lato text-[15px] text-v2-ink-muted leading-relaxed max-w-[560px] mx-auto text-center mt-14">
            …y mucho más. Si está en tu stack o lo necesitas en tu stack:{" "}
            <strong className="text-v2-ink-heading font-semibold">nosotros lo operamos.</strong>
          </p>

        </div>
      </Container>
    </Section>
  );
};

export default TodoListoV2;
