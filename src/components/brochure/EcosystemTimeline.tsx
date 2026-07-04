import {
  AlertCircle,
  ArrowRight,
  Brain,
  CheckCircle2,
  ChevronRight,
  Layers,
  Lightbulb,
  Rocket,
  Settings2,
  Sparkles,
  TrendingUp,
  Wrench,
} from 'lucide-react';

const STEPS: {
  number: string;
  problem: string;
  title: string;
  description: string;
  icon: React.ElementType;
  how: string[];
  result: string;
  accent: string;
}[] = [
  {
    number: '01',
    problem: 'Algo en tu negocio no está funcionando como debería.',
    title: 'Identificamos el problema real',
    description:
      'No arrancamos instalando software. Arrancamos preguntando. Mapeamos tu operación, hablamos con el equipo, y encontramos dónde está el cuello de botella de verdad, no el que parece.',
    icon: AlertCircle,
    how: ['Análisis del proceso actual', 'Identificación del mayor dolor operativo', 'Priorización de impacto vs esfuerzo'],
    result: 'Sabemos exactamente qué resolver primero y por qué.',
    accent: '#1d70a2',
  },
  {
    number: '02',
    problem: 'El problema ya está claro. Ahora: ¿qué tecnología lo resuelve?',
    title: 'Elegimos la herramienta correcta para ese problema',
    description:
      'No tenemos una sola herramienta que vendemos a todos. Elegimos la tecnología que resuelve ese dolor específico, con el menor cambio posible para tu equipo y el mayor impacto posible para el negocio.',
    icon: Lightbulb,
    how: ['Evaluamos qué ya tienes y qué se puede aprovechar', 'Recomendamos stack según el problema, no según la moda', 'Diseñamos el flujo antes de tocar ninguna plataforma'],
    result: 'Una solución que tiene sentido para tu operación real.',
    accent: '#1d70a2',
  },
  {
    number: '03',
    problem: 'Tener la herramienta correcta no alcanza si nadie la usa.',
    title: 'Lo implementamos y lo dejamos funcionando',
    description:
      'Hacemos la implementación técnica, configuramos, conectamos canales, y nos quedamos hasta que el equipo opera con soltura. No entregamos manuales, acompañamos la adopción.',
    icon: Wrench,
    how: ['Configuración completa y conexión con tus canales', 'Capacitación práctica para el equipo operativo', 'Soporte en los primeros 30 días de uso real'],
    result: 'El sistema funciona. El equipo lo usa. El problema se resuelve.',
    accent: '#00bfa5',
  },
  {
    number: '04',
    problem: 'Al resolver un problema, el siguiente se vuelve visible.',
    title: 'Sumamos la siguiente capa',
    description:
      'Cuando la atención ya está ordenada, aparece la necesidad de organizar ventas. Cuando ventas está estructurada, la siguiente es marketing. Cada solución es la base de la próxima. Así se construye un ecosistema.',
    icon: Layers,
    how: ['Identificamos el nuevo cuello de botella', 'Construimos encima de lo que ya funciona', 'Integramos sin romper lo anterior'],
    result: 'El negocio crece en capas, sin reinventar todo cada vez.',
    accent: '#00bfa5',
  },
  {
    number: '05',
    problem: 'El equipo ya no puede manejar todo manualmente.',
    title: 'Automatizamos lo que no necesita humanos',
    description:
      'Identificamos las tareas repetitivas que consumen tiempo del equipo sin agregar valor real: seguimientos, notificaciones, asignaciones, reportes. Esas las automatizamos. El equipo se libera para lo que sí importa.',
    icon: Settings2,
    how: ['Mapeo de tareas repetitivas de alto volumen', 'Workflows automáticos entre plataformas', 'Bots conversacionales para preatención e IA para filtrado'],
    result: 'El equipo trabaja en lo estratégico. El sistema hace el resto.',
    accent: '#7de8d8',
  },
  {
    number: '06',
    problem: 'Tiene todo funcionando, pero las decisiones siguen siendo por intuición.',
    title: 'La data empieza a guiar el negocio',
    description:
      'Cuando los procesos están en el sistema, los datos aparecen solos. Armamos los tableros que le muestran a gerencia y a los equipos exactamente qué está pasando, sin construir reportes a mano.',
    icon: Brain,
    how: ['Dashboards operativos por área', 'KPIs conectados al proceso real', 'Alertas automáticas cuando algo se desvía'],
    result: 'Decisiones basadas en datos, no en percepción.',
    accent: '#7de8d8',
  },
  {
    number: '07',
    problem: 'Ya no hay un problema urgente. Hay un ecosistema que trabaja.',
    title: 'Tu negocio opera con tecnología mientras tú creces',
    description:
      'El resultado de resolver cada problema con tecnología no es tener muchas herramientas, es tener un ecosistema conectado donde la atención, las ventas, el marketing y las operaciones se mueven juntos, solos.',
    icon: Sparkles,
    how: ['CRM + automatización + IA + canales conectados', 'Marketing que alimenta ventas sin intervención manual', 'Operación trazable desde el primer contacto hasta el cierre'],
    result: 'Un negocio que escala sin depender de personas para cada tarea.',
    accent: '#00bfa5',
  },
];

export default function EcosystemTimeline() {
  return (
    <section id="ecosistema" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      {/* Ambient background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 20% 20%, rgba(29,112,162,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(0,191,165,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#00bfa5]">
            — Cómo trabajamos
          </p>
          <h2 className="font-poppins text-[clamp(1.75rem,3.5vw,2.6rem)] font-extrabold leading-tight text-white">
            Somos solucionadores de problemas. La tecnología es el cómo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-lato text-base leading-relaxed text-white/55">
            No llegamos con un stack predefinido. Llegamos a entender qué está frenando tu negocio, y aplicamos la tecnología exacta para resolverlo. Capa por capa, hasta que el ecosistema trabaja solo.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-[1.65rem] top-0 w-px sm:left-[2rem]"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, rgba(29,112,162,0.35) 8%, rgba(0,191,165,0.25) 85%, transparent 100%)',
            }}
          />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === STEPS.length - 1;
              return (
                <div key={step.number} className="group relative flex gap-5 sm:gap-8">

                  {/* Left — number circle */}
                  <div className="relative z-10 flex flex-shrink-0 flex-col items-center">
                    <div
                      className="flex h-[3.3rem] w-[3.3rem] items-center justify-center rounded-2xl border font-poppins text-sm font-extrabold shadow-lg transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: `${step.accent}18`,
                        borderColor: `${step.accent}50`,
                        color: step.accent,
                        boxShadow: `0 0 20px ${step.accent}20`,
                      }}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Right — content */}
                  <div className="flex-1 pb-2">
                    {/* Problem statement — the hook */}
                    <p
                      className="mb-3 font-lato text-sm italic leading-snug"
                      style={{ color: `${step.accent}cc` }}
                    >
                      "{step.problem}"
                    </p>

                    {/* Card */}
                    <div
                      className="relative overflow-hidden rounded-2xl border p-5 transition-all duration-300 group-hover:border-opacity-80 sm:p-6"
                      style={{
                        borderColor: `${step.accent}28`,
                        background: `linear-gradient(135deg, rgba(10,35,66,0.7) 0%, rgba(6,18,31,0.6) 100%)`,
                      }}
                    >
                      {/* Glow */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full blur-3xl opacity-40 transition-opacity duration-500 group-hover:opacity-70"
                        style={{ background: step.accent }}
                      />

                      <div className="relative">
                        {/* Title row */}
                        <div className="mb-3 flex items-start gap-3">
                          <div
                            className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl border"
                            style={{
                              background: `${step.accent}15`,
                              borderColor: `${step.accent}40`,
                              color: step.accent,
                            }}
                          >
                            <Icon size={17} />
                          </div>
                          <h3 className="font-poppins text-lg font-extrabold leading-tight text-white sm:text-xl">
                            {step.title}
                          </h3>
                        </div>

                        <p className="font-lato text-sm leading-relaxed text-white/60">
                          {step.description}
                        </p>

                        {/* How we do it */}
                        <div className="mt-4 border-t border-white/[0.07] pt-4">
                          <p
                            className="mb-2.5 font-poppins text-[10px] font-bold uppercase tracking-widest"
                            style={{ color: step.accent }}
                          >
                            Cómo lo hacemos
                          </p>
                          <ul className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
                            {step.how.map((h) => (
                              <li
                                key={h}
                                className="flex items-start gap-2 text-xs leading-snug text-white/55 transition-colors duration-200 group-hover:text-white/75"
                              >
                                <ChevronRight
                                  size={12}
                                  className="mt-0.5 flex-shrink-0"
                                  style={{ color: step.accent }}
                                />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Result */}
                        <div
                          className="mt-4 flex items-start gap-2.5 rounded-xl px-4 py-3"
                          style={{
                            background: `${step.accent}0d`,
                            border: `1px solid ${step.accent}30`,
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 flex-shrink-0"
                            style={{ color: step.accent }}
                          />
                          <p className="font-lato text-sm font-medium leading-snug text-white/80">
                            {step.result}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Connector arrow between steps */}
                    {!isLast && (
                      <div className="mt-4 flex items-center gap-2 pl-1">
                        <ArrowRight size={13} className="text-white/15" />
                        <span className="font-lato text-[11px] italic text-white/25">
                          {index === 3
                            ? 'Y el ciclo se repite con el siguiente frente…'
                            : index === 5
                            ? 'Con datos claros, el siguiente paso es obvio…'
                            : 'El siguiente problema ya tiene solución…'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <div
          className="mt-16 grid grid-cols-1 gap-6 overflow-hidden rounded-2xl border border-white/10 p-7 sm:grid-cols-3 sm:p-8"
          style={{
            background:
              'linear-gradient(135deg, rgba(29,112,162,0.1) 0%, rgba(0,191,165,0.05) 60%, transparent 100%)',
          }}
        >
          {[
            { icon: TrendingUp, label: 'Problema real primero', copy: 'No vendemos software. Resolvemos lo que frena tu crecimiento.' },
            { icon: Brain, label: 'Tech como herramienta', copy: 'Elegimos la tecnología según el problema, no al revés.' },
            { icon: Rocket, label: 'Ecosistema que escala', copy: 'Cada solución es la base de la próxima. Así crece el negocio.' },
          ].map(({ icon: Icon, label, copy }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#00bfa5]/30 bg-[#00bfa5]/10 text-[#00bfa5]">
                <Icon size={18} />
              </div>
              <div>
                <p className="font-poppins text-sm font-bold text-white">{label}</p>
                <p className="mt-0.5 font-lato text-xs leading-relaxed text-white/50">{copy}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
