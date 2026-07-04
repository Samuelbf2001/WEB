import { ARG_BULLETS, STATS } from './data';

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      {/* Subtle dot texture on white */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(29,112,162,0.08) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      {/* Soft blue tint at corners */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 0% 0%, rgba(29,112,162,0.08) 0%, transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(0,191,165,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#1d70a2]">
            — Por qué nos eligen
          </p>
          <div className="relative">
            <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-[#0a2342]">
              No vendemos software. Implementamos operaciones digitales que tu equipo realmente usa.
            </h2>
          </div>
          <p className="mt-4 max-w-2xl font-lato text-base leading-relaxed text-[#0a2342]/65">
            Combinamos consultoría comercial, conocimiento funcional y capacidad técnica en una sola implementación. Sin etapas separadas que se pierden.
          </p>
        </div>

        {/* Stats grid — centradas */}
        <div className="mb-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-[#0a2342]/12 bg-white p-5 text-center shadow-[0_4px_24px_rgba(10,35,66,0.08)] transition-all duration-300 hover:border-[#00bfa5]/40 hover:shadow-[0_8px_32px_rgba(0,191,165,0.15)] sm:p-6"
            >
              <div className="font-poppins text-3xl font-black leading-none text-[#00bfa5] sm:text-4xl lg:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 font-poppins text-sm font-bold uppercase tracking-wider text-[#0a2342] sm:text-base">
                {s.label}
              </div>
              <div className="mt-1 font-lato text-xs leading-snug text-[#0a2342]/60 sm:text-sm">
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ARG_BULLETS.map(({ title, copy, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-2xl border border-[#0a2342]/10 bg-white p-5 shadow-[0_2px_12px_rgba(10,35,66,0.06)] transition-all duration-300 hover:border-[#00bfa5]/40 hover:shadow-[0_8px_28px_rgba(0,191,165,0.12)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#00bfa5]/35 bg-[#00bfa5]/12 text-[#00bfa5]">
                <Icon size={18} />
              </div>
              <h3 className="font-poppins text-base font-bold leading-snug text-[#0a2342]">
                {title}
              </h3>
              <p className="mt-2 font-lato text-sm leading-relaxed text-[#0a2342]/60">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
