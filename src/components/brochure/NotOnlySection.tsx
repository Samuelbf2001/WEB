import { BarChart3, Bot, Headphones, Megaphone, Rocket, Settings2 } from 'lucide-react';

const AREAS = [
  {
    icon: Rocket,
    label: 'Ventas',
    desc: 'CRM, pipelines, automatización de seguimiento y cierre comercial.',
  },
  {
    icon: Settings2,
    label: 'Operación',
    desc: 'Flujos internos, asignaciones, procesos y reportería operativa.',
  },
  {
    icon: Headphones,
    label: 'Servicio al cliente',
    desc: 'Tickets, SLA, atención omnicanal y bots de soporte posventa.',
  },
  {
    icon: Megaphone,
    label: 'Marketing',
    desc: 'Embudos, email marketing, landing pages y atribución de campañas.',
  },
  {
    icon: BarChart3,
    label: 'Finanzas y gestión',
    desc: 'Reportes integrados, flujo de facturación y dashboards de decisión.',
  },
  {
    icon: Bot,
    label: 'IA y Automatización',
    desc: 'Agentes inteligentes, workflows y reducción de tareas repetitivas.',
  },
] as const;

export default function NotOnlySection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(0,191,165,0.14), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(29,112,162,0.10), transparent 55%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Una pregunta frecuente
          </p>
          <p className="mx-auto max-w-2xl font-lato text-base text-white/45 sm:text-lg">
            "¿Solo empresas con problemas de ventas pueden trabajar con ustedes?"
          </p>

          <div className="relative mx-auto mt-3 inline-block">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-[#1d70a2]/15 to-[#00bfa5]/15 blur-3xl" />
            <span className="font-poppins text-[clamp(4rem,10vw,7rem)] font-black leading-none bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
              No.
            </span>
          </div>

          <p className="mx-auto mt-5 max-w-2xl font-lato text-base leading-relaxed text-white/60 sm:text-lg">
            Trabajamos con soluciones tecnológicas para{' '}
            <span className="font-semibold text-white">cualquier área</span>{' '}
            donde haya un proceso que merezca ser digitalizado, automatizado y medido. El alcance va donde tu negocio lo necesite.
          </p>
        </div>

        {/* Areas grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5">
          {AREAS.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00bfa5]/30 hover:bg-white/[0.04] hover:shadow-[0_20px_50px_-15px_rgba(0,191,165,0.2)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#00bfa5]/25 bg-[#00bfa5]/10 text-[#00bfa5] transition-transform duration-300 group-hover:scale-110">
                <Icon size={18} />
              </div>
              <h3 className="font-poppins text-sm font-bold leading-snug text-white sm:text-base">
                {label}
              </h3>
              <p className="mt-1.5 font-lato text-xs leading-relaxed text-white/55 sm:text-sm">
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-10 rounded-2xl border border-[#1d70a2]/20 bg-gradient-to-br from-[#0a2342]/60 via-white/[0.02] to-transparent p-7 text-center backdrop-blur-sm">
          <p className="font-lato text-base leading-relaxed text-white/60 sm:text-lg">
            Si tienes un proceso que hoy depende de{' '}
            <span className="font-semibold text-white">hojas de cálculo, mensajes sueltos o herramientas desconectadas</span>,
            {' '}hay una solución estructural que lo mejora, sin importar el área.
          </p>
        </div>
      </div>
    </section>
  );
}
