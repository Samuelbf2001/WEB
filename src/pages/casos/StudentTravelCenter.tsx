import { CheckCircle, ArrowRight, MessageCircle, BarChart3, Users, Zap, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const handleWA = () =>
  window.open(
    'https://wa.me/+573004188522?text=Hola%2C%20vi%20el%20caso%20de%20Student%20Travel%20Center%20y%20quiero%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20Sixteam%20puede%20transformar%20nuestro%20negocio',
    '_blank'
  );

const metrics = [
  { value: '+30K', label: 'Registros centralizados', detail: 'Toda la historia de cada prospecto en un solo lugar' },
  { value: '+4', label: 'Años de alianza', detail: 'Evolución continua de la estrategia junto al crecimiento del cliente' },
  { value: '100%', label: 'Trazabilidad total', detail: 'Del primer contacto hasta el cierre del viaje' },
  { value: '0', label: 'Leads perdidos', detail: 'Sistema de seguimiento que no deja oportunidades atrás' },
];

const antes = [
  'Leads llegaban por Meta, WhatsApp, eventos presenciales, pero sin forma de unificarlos ni rastrearlos',
  'Las asesoras perdían tiempo valioso con prospectos que no encajaban en ningún programa',
  'La gerencia tomaba decisiones estratégicas con información incompleta o rezagada',
  'No había trazabilidad clara: oportunidades se perdían sin registro de lo que pasó',
  'Múltiples herramientas desconectadas creaban duplicidad de información y silos de datos',
];

const despues = [
  'Todos los canales (Meta, WhatsApp, eventos, referidos) convergen en una bandeja unificada inteligente',
  'Un agente de IA filtra y perfila prospectos antes de que lleguen a una asesora — solo lo mejor',
  'La gerencia ve en tiempo real: dashboard ejecutivo con métricas confiables y actualizadas',
  'Cada prospecto tiene una trazabilidad completa: origen, interacciones, etapa actual y responsable',
  'HubSpot, Chat Center omnicanal y Meta Ads operan como un único ecosistema coherente',
];

const pasos = [
  {
    num: '01',
    title: 'Construimos la infraestructura CRM central',
    desc: 'HubSpot como columna vertebral. Diseñamos el modelo de datos adaptado a la realidad de Student Travel Center: pipelines por programa (Work & Study, Camp USA, Internship, Au Pair) y definición de KPIs estratégicos que la gerencia pudiera monitorear sin pedirle reportes a nadie. Desde el primer día, nos sumamos a sus reuniones internas.',
  },
  {
    num: '02',
    title: 'Nos convertimos en soporte operativo diario',
    desc: 'No entregamos e nos fuimos. Creamos un canal WhatsApp directo con el equipo de Student Travel Center. Dudas de configuración, cambios en procesos, nuevas ideas — respondemos en tiempo real. Somos la extensión de su equipo de operaciones.',
  },
  {
    num: '03',
    title: 'Ideamos juntos estrategias de crecimiento',
    desc: 'Reuniones regulares de sistema. Analizamos datos, identificamos oportunidades, probamos nuevas ideas. La pauta de Meta, mejoras en el Chat Center con IA, ajustes en los pipelines — todo lo hacemos en conjunto, con profundo conocimiento de su negocio.',
  },
  {
    num: '04',
    title: 'Centralizamos todo el ecosistema digital',
    desc: 'HubSpot, Meta Ads, Chat Center omnicanal, WhatsApp Business, dashboards ejecutivos — todo conectado y coordinado por nosotros. Student Travel Center se enfoca en vender y crecer. Nosotros aseguramos que la infraestructura digital escale con ellos.',
  },
];

const logros = [
  'Partner estratégico en el día a día: Sixteam no es solo un proveedor, es parte de la operación',
  'Soporte sin límites: respuestas en WhatsApp, reuniones de sistema, ideación conjunta permanente',
  'Trazabilidad total: cada lead, sin importar origen, queda registrado desde el primer contacto',
  'Las asesoras enfocadas: solo atienden candidatos con potencial real, maximizando su productividad',
  'Decisiones gerenciales confiables: datos en tiempo real que representan con fidelidad el negocio',
  'Ecosistema integrado: sin silos de información, sin duplicidad de datos, sin pérdida de contexto',
  'Crecimiento coordinado: pauta, ideación, mejoras — todo centralizado con nosotros, día a día',
  'Conocimiento profundo: después de 4+ años, conocemos a fondo el negocio de Student Travel Center',
];

const timeline = [
  {
    year: '2022 · Año 1',
    title: 'Cimientos: HubSpot + Partnership Estratégico',
    desc: 'Implementación de HubSpot como plataforma central. Diseño del modelo de datos para Student Travel Center, configuración de pipelines por programa. Y más importante: establecimos el canal directo de comunicación. Nos sumamos a sus reuniones internas desde día uno. Empezó aquí el viaje como partners.',
  },
  {
    year: '2023 · Año 2',
    title: 'Escalamos Juntos: Automatización + Pauta',
    desc: 'Llegada y asignación automática de leads. Integración de Meta Ads al CRM. Dashboards ejecutivos en tiempo real. Pero además: ideamos juntos la estrategia de pauta. Reuniones regulares de sistema. Sixteam ya estaba embebido en su operación diaria.',
  },
  {
    year: '2024 · Año 3',
    title: 'Evolución Conjunta: Chat Center + IA + Nuevas Ideas',
    desc: 'Lanzamiento del Chat Center omnicanal con agente de IA. Nuevas iteraciones basadas en aprendizajes que compartimos en reuniones semanales. Decisiones críticas tomadas en conjunto. Sixteam ya no era proveedor — era parte del equipo.',
  },
  {
    year: '2025–2026 · Hoy',
    title: 'Partner Integrado: Operación Totalmente Centralizada',
    desc: 'Ecosistema digital completo bajo nuestro cuidado y coordinación diaria. Meta Ads, HubSpot, Chat Center, reportería — todo centralizado. Somos el pivote de crecimiento. Conocemos Student Travel Center a profundidad. Cada decisión estratégica la tomamos juntos, día a día.',
  },
];

const StudentTravelCenter = () => {
  useSEO({
    title: 'Caso de Éxito: Student Travel Center — Sixteam.pro',
    description:
      'Cómo Student Travel Center centralizó su operación, implementó un agente de IA omnicanal y le dio a su gerencia visibilidad total del negocio con Sixteam.pro.',
    canonical: 'https://sixteam.pro/casos/student-travel-center',
    ogUrl: 'https://sixteam.pro/casos/student-travel-center',
  });

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* ── HERO STORYTELLING ── */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-24 sm:py-32 lg:py-48">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-10 animate-fade-in">
            <div className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-teal-300 font-medium text-sm tracking-wide uppercase">
              Caso de Éxito · Educación Internacional
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8 animate-fade-in-delay-1">
            Cuando un partner estratégico <br />se convierte en{' '}
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-teal-300 bg-clip-text text-transparent">
              parte de tu operación
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl leading-relaxed mb-12 animate-fade-in-delay-2">
            La historia de cómo Sixteam pasó de ser un proveedor a ser el pivote central de la operación de Student Travel Center. Más de 4 años de alianza estratégica, reuniones de sistema, ideación conjunta, y WhatsApp diario. Crecemos juntos, día a día.
          </p>

          <div className="flex flex-wrap gap-3 mb-16 animate-fade-in-delay-3">
            <span className="bg-white/10 border border-white/15 text-white text-sm font-semibold px-5 py-3 rounded-full">
              🌍 Student Travel Center
            </span>
            <span className="bg-white/10 border border-white/15 text-white text-sm font-semibold px-5 py-3 rounded-full">
              📍 Bogotá, Colombia
            </span>
            <span className="bg-white/10 border border-white/15 text-white text-sm font-semibold px-5 py-3 rounded-full">
              🤝 4+ años de alianza
            </span>
          </div>

          {/* KPI Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in-delay-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#1d70a2]/30 to-[#00bfa5]/10 border border-[#1d70a2]/30 rounded-xl p-6 hover:border-teal-400/50 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-teal-400 font-poppins leading-none mb-3">
                  {m.value}
                </div>
                <div className="text-white font-bold text-base mb-2">{m.label}</div>
                <div className="text-gray-400 text-sm leading-relaxed">{m.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTEXTO: EL CLIENTE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">
                El Cliente
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] mb-8 leading-tight">
                Student Travel Center
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Una agencia especializada en conectar jóvenes colombianos con oportunidades de vida, trabajo y formación en el exterior — con sede en Bogotá y operación a escala nacional.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Llevan años siendo el puente entre aspirantes globales y programas de alto impacto internacional. Su modelo se distingue por el acompañamiento personalizado: cada participante recorre un proceso de perfilación, asesoría y preparación antes de viajar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Con múltiples programas activos, múltiples asesoras y flujos constantes de leads provenientes de pauta digital y eventos presenciales, la operación demandaba una infraestructura robusta que permitiera escalar sin perder calidad ni visibilidad.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: '✈️', title: 'Work & Study', desc: 'Trabaja y estudia en Malta, Dubái, Canadá, EE.UU. y más' },
                { icon: '⛺', title: 'Camp USA', desc: 'Monitor en campamentos de verano en Estados Unidos' },
                { icon: '🍽️', title: 'Internship Internacional', desc: 'Prácticas en hoteles y restaurantes Michelin' },
                { icon: '👶', title: 'Au Pair', desc: 'Cuidado infantil para mujeres en hogares de EE.UU.' },
              ].map((prog, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-r from-[#0a2342]/5 to-teal-500/5 border border-teal-200/30 rounded-xl p-6 hover:border-teal-400/60 transition-all"
                >
                  <div className="text-3xl mb-2">{prog.icon}</div>
                  <h4 className="font-bold text-[#0a2342] text-lg mb-1">{prog.title}</h4>
                  <p className="text-gray-600 text-sm">{prog.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EL DESAFÍO ── */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">
            El Desafío
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] mb-12 leading-tight">
            Crecer sin control no es crecer
          </h2>

          <div className="space-y-6">
            {[
              {
                title: '📌 Múltiples canales sin conexión',
                desc: 'Los leads llegaban por Meta, WhatsApp, eventos presenciales y referidos, pero no había forma de unificarlos. Oportunidades se perdían sin registro de qué pasó.',
              },
              {
                title: '⏰ Tiempo perdido en filtrado',
                desc: 'Las asesoras dedicaban tiempo valioso respondiendo a prospectos que no encajaban en ningún programa, sin contar con un filtro previo que les permitiera enfocarse.',
              },
              {
                title: '📊 Información incompleta en la gerencia',
                desc: 'La gerencia tomaba decisiones estratégicas con información rezagada o incompleta — sin forma de ver el estado real de las oportunidades en tiempo real.',
              },
              {
                title: '🔗 Silos de datos y fricciones costosas',
                desc: 'Sin una plataforma centralizada, la información quedaba dispersa: operación ineficiente, duplicidad de datos, imposibilidad de análisis estratégico.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-teal-500 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <h4 className="text-xl font-bold text-[#0a2342] mb-3">{item.title}</h4>
                <p className="text-gray-600 text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ANTES vs DESPUÉS ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6 text-center">
            La Transformación
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] text-center mb-16">
            Antes vs Después
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Antes */}
            <div className="bg-red-50/50 border-2 border-red-200 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 font-bold text-lg">✕</span>
                </div>
                <h3 className="text-2xl font-bold text-red-900">Antes</h3>
              </div>
              <ul className="space-y-4">
                {antes.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Después */}
            <div className="bg-teal-50 border-2 border-teal-300 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-teal-300 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-2xl font-bold text-teal-900">Después</h3>
              </div>
              <ul className="space-y-4">
                {despues.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-3 h-3 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-base leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL PROCESO: JOURNEY EN 4 AÑOS ── */}
      <section className="py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d52] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-sm font-bold text-teal-400 uppercase tracking-widest mb-6">
            El Viaje
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Una transformación construida paso a paso
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-3xl">
            Más de 4 años de trabajo continuo, con una estrategia que evolucionó a la par del crecimiento de la empresa.
          </p>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-32">
                  <div className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-2">
                    {item.year}
                  </div>
                </div>
                <div className="flex-1 border-l-2 border-teal-500/30 pl-8 pb-4 relative">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-teal-400 rounded-full -translate-x-2.5 -translate-y-1" />
                  <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                  <p className="text-gray-300 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUESTRA ESTRATEGIA ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6">
            Nuestro Enfoque
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] mb-16 leading-tight">
            Cómo lo hicimos en 4 movimientos estratégicos
          </h2>

          <div className="space-y-8">
            {pasos.map((paso) => (
              <div key={paso.num} className="group">
                <div className="flex gap-8 items-start">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold text-teal-500/20 group-hover:text-teal-500/40 transition-colors leading-none">
                      {paso.num}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#0a2342] mb-4 font-poppins">
                      {paso.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{paso.desc}</p>
                  </div>
                </div>
                {pasos.indexOf(paso) !== pasos.length - 1 && (
                  <div className="ml-16 mt-8 pt-8 border-t border-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP MODEL ── */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6 text-center">
            El Modelo
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] text-center mb-16 leading-tight">
            Partner Estratégico: Más Allá de la Implementación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center gap-3">
                  <span className="text-3xl">💬</span> WhatsApp Diario
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  No estamos "en soporte después de vender". Estamos en el canal directo del equipo de Student Travel Center. Dudas sobre configuración, nuevas ideas, urgencias operativas — respondemos en minutos. Somos accesibles, siempre.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center gap-3">
                  <span className="text-3xl">📊</span> Reuniones de Sistema Regulares
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Analizamos datos, identificamos oportunidades, discutimos nuevas estrategias. Estas reuniones no son reportes — son sesiones de ideación donde ambos lados aportan. Conocemos sus números como propios.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center gap-3">
                  <span className="text-3xl">🎯</span> Pauta y Estrategia Centralizadas
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Gestión de Meta Ads, optimización de propuestas, nuevas ideas de campaña — todo coordinado directamente con nosotros. Somos el centro de gravedad de su crecimiento digital.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center gap-3">
                  <span className="text-3xl">🔐</span> Conocimiento Profundo
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Después de 4+ años, conocemos Student Travel Center a profundidad: sus programas, su equipo, sus metas, sus desafíos. No es un cliente anónimo. Es un socio cuyo negocio entendemos mejor que nadie.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center gap-3">
                  <span className="text-3xl">🚀</span> Crecimiento Conjunto
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cuando Student Travel Center crece, nosotros crecemos. Sus objetivos son nuestros objetivos. No es una relación transaccional — es una alianza donde ambos invertimos en el éxito mutuo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#0a2342] mb-3 flex items-center gap-3">
                  <span className="text-3xl">⚙️</span> Ecosistema Digital Único
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  HubSpot, Meta Ads, Chat Center omnicanal, reportería, integraciones — todo bajo nuestro cuidado coordinado. Student Travel Center se enfoca en vender y crecer. Nosotros aseguramos que el ecosistema funcione sin fricciones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESULTADOS ── */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-6 text-center">
            Los Resultados
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0a2342] text-center mb-16 leading-tight">
            Lo que Student Travel Center logró con Sixteam
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🔍', title: 'Trazabilidad Total', desc: 'Cada lead registrado desde el primer contacto hasta el cierre, monitoreo en tiempo real.' },
              { icon: '🤖', title: 'Asesoras Enfocadas', desc: 'El agente de IA filtra y califica prospectos — solo oportunidades reales llegan a la agenda.' },
              { icon: '📊', title: 'Decisiones con Datos', desc: 'Dashboards ejecutivos con métricas actualizadas en tiempo real, sin pedirle reportes a nadie.' },
              { icon: '🔗', title: 'Ecosistema Integrado', desc: 'HubSpot, Chat Center y Meta Ads operan como un único sistema coherente, sin silos.' },
              { icon: '🌐', title: 'Presencia Omnicanal', desc: 'WhatsApp, pauta, eventos presenciales, tráfico orgánico — todo en una bandeja inteligente.' },
              { icon: '🏢', title: 'Operación Centralizada', desc: 'Desde comercial hasta facturación: una sola plataforma, una sola realidad, una sola verdad.' },
            ].map((result, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-teal-400/50 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{result.icon}</div>
                <h4 className="text-xl font-bold text-[#0a2342] mb-3">{result.title}</h4>
                <p className="text-gray-600 text-base leading-relaxed">{result.desc}</p>
              </div>
            ))}
          </div>

          {/* Logros extendidos */}
          <div className="mt-16 bg-gradient-to-r from-[#0a2342] to-[#1d70a2] rounded-2xl p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">Lo que el equipo puede hacer hoy que antes no podía:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {logros.map((logro, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-teal-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-100 text-base leading-relaxed">{logro}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-gradient-to-r from-[#0a2342] to-[#1d70a2] rounded-2xl p-12 text-white text-center">
            <div className="text-7xl text-teal-300 font-serif leading-none mb-8">"</div>
            <p className="text-2xl sm:text-3xl lg:text-4xl leading-relaxed font-medium mb-8 italic">
              Sixteam no es solo un proveedor tecnológico. Se convirtieron en parte de nuestro equipo operativo. Están en nuestro WhatsApp, en nuestras reuniones de sistema, ideando con nosotros cada semana. Conocen nuestro negocio mejor que nadie, y eso hace toda la diferencia cuando necesitamos adaptarnos rápido o lanzar algo nuevo.
            </p>
            <p className="text-xl text-teal-200 font-semibold">
              — Gerencia · Student Travel Center
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-gradient-to-r from-[#1d70a2] via-[#00bfa5] to-teal-400 text-white overflow-hidden relative">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
            ¿Buscas un partner que crezca contigo?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-12">
            No queremos ser tu proveedor. Queremos ser tu aliado estratégico — integrados en tu día a día, disponibles en WhatsApp, ideando juntos cada semana, conociendo tu negocio a profundidad y asegurando que tu ecosistema digital escale sin fricciones mientras creces.
          </p>
          <Button
            onClick={handleWA}
            className="px-12 py-4 bg-white text-[#1d70a2] hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-2xl mb-6"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Conversemos sobre tu crecimiento
          </Button>
          <p className="text-white/70 text-sm">Sin compromiso · Respuesta en 24 horas</p>

          <div className="mt-12 pt-12 border-t border-white/20 text-sm text-white/60">
            Elaborado por <a href="https://sixteam.pro" className="font-semibold text-white hover:underline">Sixteam Innovación y Estrategia Digital</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentTravelCenter;
