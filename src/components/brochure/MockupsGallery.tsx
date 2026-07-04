import { CalendarDays, MessageCircle, Zap } from 'lucide-react';

const EXPERIENCE_CARDS = [
  {
    icon: CalendarDays,
    label: 'Revisión semanal',
    title: 'Reuniones de oportunidades de crecimiento',
    copy: 'Cada semana revisamos métricas, resultados y nuevas oportunidades contigo. Identificamos mejoras, ajustamos flujos y trazamos el siguiente paso. No te dejamos solo después del lanzamiento.',
    accent: '#1d70a2',
  },
  {
    icon: MessageCircle,
    label: 'Soporte directo',
    title: 'Soporte continuo por WhatsApp',
    copy: 'Canal directo con tu equipo de implementación para resolver dudas operativas, ajustes urgentes y mejoras en tiempo real. Sin tickets, sin formularios, sin esperas innecesarias.',
    accent: '#00bfa5',
  },
  {
    icon: Zap,
    label: 'Tecnología activa',
    title: 'Plataformas funcionando a tu favor',
    copy: 'Tus herramientas configuradas, conectadas y monitoreadas para generar resultados reales. Plataformas que trabajan aunque no estés pendiente — no gastos que nadie administra.',
    accent: '#7de8d8',
  },
] as const;

export default function MockupsGallery() {
  return (
    <section className="relative px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Así es trabajar con nosotros
          </p>
          <div className="relative">
            <div className="pointer-events-none absolute -inset-x-4 -inset-y-3 -z-10 rounded-3xl bg-gradient-to-r from-[#1d70a2]/10 to-[#00bfa5]/8 blur-3xl" />
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
              No implementamos y desaparecemos. Nos quedamos contigo.
            </h2>
          </div>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/60 sm:text-lg">
            El día 31 es apenas el inicio. El valor real se construye en el acompañamiento continuo, las mejoras iterativas y el soporte operativo constante.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EXPERIENCE_CARDS.map((card) => (
            <article
              key={card.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00bfa5]/40 hover:shadow-[0_25px_70px_-15px_rgba(0,191,165,0.25)]"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"
                style={{ background: `${card.accent}18` }}
              />

              <div className="relative">
                <div
                  className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-110"
                  style={{
                    borderColor: `${card.accent}30`,
                    background: `${card.accent}12`,
                    color: card.accent,
                  }}
                >
                  <card.icon size={22} />
                </div>

                <p
                  className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: card.accent }}
                >
                  {card.label}
                </p>
                <h3 className="font-poppins text-xl font-extrabold leading-tight text-white">
                  {card.title}
                </h3>
                <p className="mt-3 font-lato text-sm leading-relaxed text-white/60 sm:text-[15px]">
                  {card.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
