import { CheckCircle, ArrowRight, MessageCircle, BarChart3, Users, Zap, Globe, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const handleWA = () =>
  window.open(
    'https://wa.me/+573004188522?text=Hola%2C%20vi%20el%20caso%20de%20Master%20Viajes%20y%20quiero%20saber%20c%C3%B3mo%20Sixteam%20puede%20ayudarme',
    '_blank'
  );

const metrics = [
  { value: '4', label: 'Canales de venta conectados', detail: 'WhatsApp · Instagram · Messenger · TikTok' },
  { value: '2', label: 'Líneas de negocio organizadas', detail: 'Dreams 15 · Origen Turismo' },
  { value: '100%', label: 'Trazabilidad por caso', detail: 'Cada oportunidad tiene dueño, etapa y seguimiento claro' },
  { value: '0', label: 'Doble digitación', detail: 'La información fluye sola entre plataformas' },
];

const antes = [
  'Los asesores atendían desde sus WhatsApp personales — sin registro, sin control',
  'Cada cotización se hacía desde cero, sin historial del cliente',
  'Un viaje de quinceañera podía involucrar a 5 personas y el sistema no las relacionaba',
  'La gerencia no tenía forma de ver cuántas oportunidades había en curso ni en qué estado estaban',
  'Si un asesor salía, el conocimiento del cliente se iba con él',
];

const despues = [
  'Todos los canales llegan a una sola bandeja — el equipo nunca pierde un lead',
  'Cada oportunidad tiene historial: quién atendió, qué se cotizó, qué sigue',
  'Los viajes de Dreams 15 agrupan automáticamente a todos los involucrados del caso',
  'La gerencia ve en tiempo real: cuántas oportunidades hay, en qué etapa y quién las lleva',
  'El conocimiento queda en el sistema, no en la cabeza de cada persona',
];

const pasos = [
  {
    num: '01',
    title: 'Ordenamos los canales de venta',
    desc: 'Centralizamos WhatsApp, Instagram, Messenger y TikTok en una sola bandeja de entrada. Los bots asistentes responden de inmediato cuando el equipo no está disponible, para que ningún lead quede esperando.',
  },
  {
    num: '02',
    title: 'Estructuramos cada línea de negocio',
    desc: 'Dreams 15 y Origen son negocios distintos con clientes distintos. Les dimos a cada uno sus propias etapas de venta, su equipo asignado y sus métricas — dentro de un solo sistema.',
  },
  {
    num: '03',
    title: 'Conectamos la conversación con el registro',
    desc: 'Antes, lo que pasaba en WhatsApp se quedaba en WhatsApp. Ahora cada conversación, cotización y acuerdo queda registrado automáticamente y vinculado al cliente correcto.',
  },
  {
    num: '04',
    title: 'Le dimos a la gerencia visibilidad real',
    desc: 'Dos dashboards: uno para el equipo comercial (qué sigue con cada cliente) y uno para gerencia (cómo va el negocio en total). Sin pedirle reportes a nadie.',
  },
];

const logros = [
  'El equipo comercial sabe exactamente qué sigue con cada cliente',
  'Ningún lead queda sin respuesta, sin importar el canal',
  'Los viajes de quinceañera se gestionan con todos los involucrados organizados en un mismo caso',
  'La gerencia puede tomar decisiones con información real y actualizada',
  'El negocio ya no depende de que una persona recuerde qué pasó con cada cliente',
  'Se eliminó la tarea de trasladar información manualmente entre herramientas',
  'Cada asesor tiene su cartera clara: sabe qué oportunidades lleva y en qué estado están',
  'La base de datos de clientes crece ordenada — y se puede aprovechar para reactivaciones futuras',
];

const MasterViajes = () => {
  useSEO({
    title: 'Caso de Éxito: Master Viajes — Sixteam.pro',
    description:
      'Cómo Master Viajes organizó su operación comercial, centralizó sus canales de venta y le dio a la gerencia visibilidad total del negocio con ayuda de Sixteam.pro.',
    canonical: "https://sixteam.pro/casos/master-viajes",
    ogUrl: "https://sixteam.pro/casos/master-viajes",
  });

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* ── HERO ── */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-24 sm:py-32 lg:py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8">
            <div className="w-2 h-2 bg-teal-400 rounded-full" />
            <span className="text-teal-300 font-medium text-sm tracking-wide uppercase">
              Caso de éxito · Turismo &amp; Viajes
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Cómo Master Viajes pasó del caos operativo al control total de su negocio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-10">
            En menos de 4 meses, Master Viajes centralizó sus canales de venta, organizó sus dos
            líneas de negocio y le dio a su equipo y a su gerencia la visibilidad que necesitaban
            para crecer con orden.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/10 border border-white/15 text-white text-sm font-medium px-4 py-2 rounded-full">
              Cliente: Master Viajes
            </span>
            <span className="bg-white/10 border border-white/15 text-white text-sm font-medium px-4 py-2 rounded-full">
              Noviembre 2025 – Marzo 2026
            </span>
            <span className="bg-white/10 border border-white/15 text-white text-sm font-medium px-4 py-2 rounded-full">
              Sector: Agencias de viaje · Colombia
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTEXTO ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-4">
                El punto de partida
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2342] mb-6 leading-tight">
                Una agencia que vendía bien, pero no podía escalar
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Master Viajes opera dos negocios distintos: <strong>Dreams 15</strong>, especializada
                en viajes de quinceañeras, y <strong>Origen</strong>, enfocada en turismo vacacional.
                Ambas crecían. Pero ambas compartían el mismo problema: el equipo estaba trabajando
                más de lo necesario para sostener un volumen que podría gestionarse solo.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Las conversaciones con clientes ocurrían en WhatsApp personal, Instagram, Messenger
                y TikTok — sin ninguna conexión entre sí. Cada cotización se armaba de memoria.
                Cada traspaso entre asesores significaba empezar desde cero. Y la gerencia no
                tenía forma de saber cómo iba el negocio sin pedirle un reporte a alguien.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-[#0a2342] rounded-2xl p-8 text-white text-center">
                <div className="text-6xl font-bold text-teal-400 leading-none mb-3">4</div>
                <p className="text-gray-300 text-lg leading-snug">
                  meses para transformar la operación completa de dos líneas de negocio
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 text-sm text-gray-400">
                  Sin contratar personal adicional · Sin cambiar al equipo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANTES vs DESPUÉS ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              El cambio real
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2342]">
              Antes y después de trabajar con Sixteam.pro
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Antes */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 font-bold text-lg">✕</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Antes</h3>
              </div>
              <ul className="space-y-4">
                {antes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Después */}
            <div className="bg-[#0a2342] rounded-2xl p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-lg font-bold text-white">Después</h3>
              </div>
              <ul className="space-y-4">
                {despues.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── LO QUE HICIMOS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="mb-14">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              Nuestro enfoque
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0a2342] max-w-xl leading-tight">
              Cuatro movimientos que cambiaron el negocio
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl text-lg">
              No instalamos software y nos fuimos. Diseñamos cómo debía funcionar la operación
              y construimos el sistema para que eso pasara.
            </p>
          </div>

          <div className="space-y-8">
            {pasos.map((paso) => (
              <div
                key={paso.num}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 items-start"
              >
                <div className="sm:col-span-1 flex sm:justify-center pt-1">
                  <span className="text-3xl font-bold text-teal-500/30 font-poppins leading-none">
                    {paso.num}
                  </span>
                </div>
                <div className="sm:col-span-11 border-l-2 border-gray-100 pl-6 sm:pl-8 pb-2">
                  <h3 className="text-xl font-bold text-[#0a2342] mb-2 font-poppins">{paso.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS ── */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-3">
              Los resultados
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Lo que Master Viajes tiene hoy
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto text-lg">
              Números que representan un negocio que ahora funciona con orden y sin fricción.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-2xl p-6 text-center"
              >
                <div className="text-5xl font-bold text-teal-400 font-poppins mb-2">{m.value}</div>
                <div className="text-white font-semibold text-sm mb-2 leading-snug">{m.label}</div>
                <div className="text-gray-500 text-xs leading-snug">{m.detail}</div>
              </div>
            ))}
          </div>

          {/* Logros */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <h3 className="text-white font-bold text-lg mb-6">Lo que el equipo puede hacer ahora que antes no podía:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {logros.map((logro, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-sm leading-relaxed">{logro}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div className="text-6xl text-teal-500 font-serif leading-none mb-6">"</div>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed italic mb-8">
            El sistema pasó de registrar datos a representar con fidelidad cómo funciona el
            negocio — con sus clientes, sus etapas y sus relaciones. Eso lo cambia todo para
            el equipo y para la gerencia.
          </p>
          <p className="text-sm text-gray-400 font-medium">
            — Sixteam.pro · Documentación de implementación Master Viajes, 2026
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            ¿Tu negocio enfrenta los mismos desafíos?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Si tu equipo trabaja desde canales dispersos, pierde leads por falta de seguimiento
            o la gerencia no tiene visibilidad real del negocio — podemos ayudarte.
          </p>
          <Button
            onClick={handleWA}
            className="px-10 py-4 bg-white text-[#0a2342] hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-5 h-5 mr-3" />
            Hablemos sobre tu operación
          </Button>
          <p className="text-blue-100/70 text-sm">Sin compromiso · Respondemos en menos de 24 horas</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MasterViajes;
