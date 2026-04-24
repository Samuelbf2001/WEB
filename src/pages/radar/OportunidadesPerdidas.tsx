import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  TrendingDown,
  Clock,
  UserX,
  FileX,
  PhoneOff,
  Repeat,
  BarChart3,
  Target,
  ArrowRight,
  DollarSign,
  Eye,
  Zap,
  Search,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const OportunidadesPerdidas = () => {
  useSEO({
    title: "Oportunidades de Venta Perdidas — Radar Sixteam | Auditoría RevOps",
    description: "¿Cuánto dinero estás perdiendo sin saberlo? Auditamos fugas en tu pipeline, leads sin seguimiento y clientes que no regresan. Diagnóstico gratuito.",
    canonical: "https://sixteam.pro/radar/oportunidades-perdidas",
    ogUrl: "https://sixteam.pro/radar/oportunidades-perdidas",
  });

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573004188522?text=Hola%2C%20quiero%20descubrir%20cu%C3%A1ntas%20oportunidades%20estoy%20perdiendo%20con%20el%20diagn%C3%B3stico%20de%20Sixteam',
      '_blank'
    );
  };

  const stats = [
    {
      value: '80%',
      label: 'de los leads se pierden en el seguimiento',
      sub: 'Por falta de proceso, no de interés del cliente',
      accent: 'text-red-400',
    },
    {
      value: '48 h',
      label: 'es el tiempo máximo para responder un lead',
      sub: 'Después de ese punto, la probabilidad de cierre cae 90%',
      accent: 'text-amber-400',
    },
    {
      value: '5×',
      label: 'más barato retener que adquirir',
      sub: 'Pero el 70% de las empresas no mide retención',
      accent: 'text-[#00bfa5]',
    },
    {
      value: '34%',
      label: 'de los presupuestos nunca se envían',
      sub: 'Se pierden en el caos del día a día del equipo',
      accent: 'text-red-400',
    },
  ];

  const scenarios = [
    {
      icon: PhoneOff,
      title: 'Leads sin seguimiento',
      desc: 'Llegan prospectos por redes, web o referidos, pero nadie los llama a tiempo. Para cuando alguien los contacta, ya eligieron a la competencia.',
      impact: 'Impacto estimado: 30–50% de leads calificados no contactados',
    },
    {
      icon: FileX,
      title: 'Cotizaciones que nunca salen',
      desc: 'El cliente pidió propuesta, el asesor lo anotó en un Post-it o en WhatsApp, pero en el ajetreo del día la cotización nunca se envió.',
      impact: 'Impacto estimado: 20–35% de solicitudes de cotización abandonadas',
    },
    {
      icon: UserX,
      title: 'Clientes perdidos a la competencia',
      desc: 'Tu cliente lleva meses sin recibir contacto de parte tuya. Tu competidor lo llamó, le ofreció algo y se lo llevó. No fue precio: fue olvido.',
      impact: 'Impacto estimado: 40% de churn es evitable con contacto proactivo',
    },
    {
      icon: Repeat,
      title: 'Recompras que no ocurren',
      desc: 'Tu cliente te compró hace 8 meses. Está listo para volver a comprar, pero nadie lo sabe porque no hay registro de su historial ni sistema de alertas.',
      impact: 'Impacto estimado: 60% de recompras se pierden por falta de seguimiento',
    },
    {
      icon: Clock,
      title: 'Tiempos de respuesta que matan la venta',
      desc: 'El cliente escribe a las 10am. La respuesta llega a las 4pm. Para ese momento ya evaluó 3 opciones más y tomó una decisión sin tu empresa.',
      impact: 'Impacto estimado: 78% de los clientes compran al primero que responde',
    },
  ];

  const kpis = [
    {
      icon: Target,
      category: 'Embudo de ventas',
      metrics: [
        'Tasa de conversión lead → oportunidad',
        'Tiempo promedio de respuesta a leads',
        'Porcentaje de leads sin seguimiento',
        'Etapas donde más se pierden oportunidades',
      ],
    },
    {
      icon: DollarSign,
      category: 'Ingresos en riesgo',
      metrics: [
        'Valor total de cotizaciones sin cierre',
        'Oportunidades abiertas hace más de 30 días',
        'Clientes inactivos con potencial de recompra',
        'Tasa de abandono del proceso de compra',
      ],
    },
    {
      icon: BarChart3,
      category: 'Operación comercial',
      metrics: [
        'Tiempo promedio del ciclo de ventas',
        'Tasa de cumplimiento de seguimientos',
        'Distribución de carga entre asesores',
        'Canales con mayor y menor conversión',
      ],
    },
    {
      icon: Eye,
      category: 'Visibilidad del negocio',
      metrics: [
        'Calidad y completitud de datos de clientes',
        'Frecuencia de actualización del pipeline',
        'Métricas de retención y churn',
        'Efectividad de campañas por canal',
      ],
    },
  ];

  const beforeAfter = [
    {
      area: 'Seguimiento de leads',
      before: 'WhatsApp + Excel + memoria del asesor',
      after: 'Pipeline visual con alertas automáticas y tareas asignadas',
    },
    {
      area: 'Tiempo de respuesta',
      before: '6–12 horas promedio (si responden)',
      after: 'Bajo 30 minutos con flujos de respuesta automáticos',
    },
    {
      area: 'Cotizaciones',
      before: 'Generadas manualmente, sin control de estado',
      after: 'Trazabilidad completa: enviada, vista, aceptada, rechazada',
    },
    {
      area: 'Retención de clientes',
      before: 'Sin alertas, sin historial, sin contacto proactivo',
      after: 'Segmentación por valor + campañas de reactivación automáticas',
    },
    {
      area: 'Visibilidad gerencial',
      before: 'Cero. El gerente no sabe cuántas oportunidades hay abiertas',
      after: 'Dashboard en tiempo real con KPIs de ventas y servicio',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d4f] to-[#0a2342]" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-red-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-[#00bfa5]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1d70a2]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Brand link */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 opacity-75 hover:opacity-100 transition-opacity"
            >
              <img
                src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png"
                alt="Sixteam.pro"
                className="w-6 h-6"
                loading="lazy"
              />
              <span className="text-white font-poppins font-semibold text-sm tracking-wide">
                Sixteam.pro
              </span>
            </Link>

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/15 border border-red-400/30 rounded-full backdrop-blur-sm">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-red-300 text-xs font-lato font-medium tracking-widest uppercase">
                Diagnóstico de oportunidades perdidas
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              ¿Cuánto dinero estás{' '}
              <span className="bg-gradient-to-r from-red-400 to-[#00bfa5] bg-clip-text text-transparent">
                perdiendo sin saberlo?
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#e0e0e0] max-w-2xl mx-auto leading-relaxed">
              Tu empresa no necesariamente necesita más leads. Probablemente necesita
              cerrar los que ya tiene. El 80% de las oportunidades se pierden después
              del primer contacto, no antes.
            </p>

            {/* Provocative question */}
            <div className="max-w-xl mx-auto p-5 bg-red-500/10 border border-red-400/25 rounded-xl text-left space-y-3">
              <p className="text-red-300 font-poppins font-semibold text-sm uppercase tracking-wide">
                Responde honestamente:
              </p>
              {[
                '¿Sabes cuántos leads llegaron esta semana y cuántos cerraron?',
                '¿Cuántas cotizaciones enviaste en el último mes y cuántas rechazaron?',
                '¿Cuándo fue la última vez que contactaste a un cliente inactivo?',
              ].map((q, i) => (
                <div key={i} className="flex items-start gap-3">
                  <TrendingDown className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-[#e0e0e0] text-sm">{q}</p>
                </div>
              ))}
              <p className="text-[#e0e0e0]/70 text-xs pt-1">
                Si no tienes las respuestas, estás perdiendo oportunidades sin medirlas.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-lg transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:shadow-[#00bfa5]/40 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Descubrir mis oportunidades perdidas
              </Button>
            </div>

            <p className="text-[#e0e0e0]/50 text-xs">
              Gratis · Sin compromiso · Resultados en 48 horas
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#0d2d4f] to-[#0a2342] border-y border-[#1d70a2]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 space-y-2 max-w-2xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              La realidad de las empresas de servicios
            </p>
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-white">
              Los datos no mienten
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 text-center hover:border-[#00bfa5]/40 transition-all duration-300"
              >
                <p className={`font-poppins font-black text-5xl mb-3 ${item.accent}`}>
                  {item.value}
                </p>
                <p className="text-white font-semibold text-sm leading-tight mb-2">
                  {item.label}
                </p>
                <p className="text-[#e0e0e0]/60 text-xs leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain point scenarios */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Escenarios de pérdida
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white leading-tight">
              5 formas en que tu empresa{' '}
              <span className="bg-gradient-to-r from-red-400 to-[#00bfa5] bg-clip-text text-transparent">
                pierde dinero todos los días
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg leading-relaxed">
              No es mala suerte. Es un problema de proceso que tiene solución concreta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {scenarios.map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300 group ${
                  i === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-lg md:mx-auto w-full' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-red-500/10 border border-red-400/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-red-500/20 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <span className="text-[#00bfa5]/50 font-poppins font-bold text-xs">
                      0{i + 1}
                    </span>
                    <h3 className="font-poppins font-bold text-white text-lg leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="px-3 py-2 bg-red-500/10 border border-red-400/20 rounded-lg">
                  <p className="text-red-300 text-xs font-medium">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we measure */}
      <section className="py-16 sm:py-24 bg-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Auditoría de métricas
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white leading-tight">
              Lo que medimos en tu diagnóstico
            </h2>
            <p className="text-[#e0e0e0] text-lg leading-relaxed">
              No hacemos preguntas genéricas. Auditamos KPIs específicos que revelan
              exactamente dónde se están escapando tus oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {kpis.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-[#00bfa5]/15 border border-[#00bfa5]/25 rounded-lg flex items-center justify-center group-hover:bg-[#00bfa5]/25 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <h3 className="font-poppins font-bold text-white text-lg">{item.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {item.metrics.map((metric, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                      <span className="text-[#e0e0e0] text-sm">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0d2d4f] to-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Transformación
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white leading-tight">
              Cómo cambia tu operación{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                después del diagnóstico
              </span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-xl border border-[#1d70a2]/30">
            {/* Header */}
            <div className="grid grid-cols-3 bg-[#0d2d4f] border-b border-[#1d70a2]/30">
              <div className="p-4 col-span-1">
                <p className="text-[#e0e0e0]/60 text-xs font-medium uppercase tracking-wide">
                  Área
                </p>
              </div>
              <div className="p-4 border-l border-[#1d70a2]/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <p className="text-red-300 text-xs font-medium uppercase tracking-wide">
                    Antes
                  </p>
                </div>
              </div>
              <div className="p-4 border-l border-[#1d70a2]/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00bfa5]" />
                  <p className="text-[#00bfa5] text-xs font-medium uppercase tracking-wide">
                    Después
                  </p>
                </div>
              </div>
            </div>

            {/* Rows */}
            {beforeAfter.map((row, i) => (
              <div
                key={i}
                className={`grid grid-cols-3 ${
                  i < beforeAfter.length - 1 ? 'border-b border-[#1d70a2]/20' : ''
                } ${i % 2 === 0 ? 'bg-[#0a2342]' : 'bg-[#0d2d4f]/50'}`}
              >
                <div className="p-4 col-span-1">
                  <p className="text-white font-semibold text-sm">{row.area}</p>
                </div>
                <div className="p-4 border-l border-[#1d70a2]/20">
                  <p className="text-red-300/80 text-xs leading-relaxed">{row.before}</p>
                </div>
                <div className="p-4 border-l border-[#1d70a2]/20">
                  <p className="text-[#e0e0e0] text-xs leading-relaxed">{row.after}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Así funciona
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
              Cómo hacemos el diagnóstico
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                num: '01',
                icon: MessageCircle,
                title: 'Conversación inicial',
                desc: 'Escríbenos por WhatsApp. En 10 minutos entendemos tu operación: cuántos leads recibes, cómo haces seguimiento, qué herramientas usas y dónde sientes que se pierde más.',
              },
              {
                num: '02',
                icon: Search,
                title: 'Auditoría de oportunidades',
                desc: 'Analizamos tus métricas clave, tasas de conversión, tiempos de respuesta y patrones de pérdida. Cruzamos con benchmarks del sector para darte contexto real.',
              },
              {
                num: '03',
                icon: Zap,
                title: 'Plan de recuperación',
                desc: 'Te entregamos un informe con las oportunidades que estás perdiendo, el impacto económico estimado y las 3 acciones concretas para recuperarlas.',
              },
            ].map((step, i) => (
              <div key={i} className="relative text-center space-y-5">
                {i < 2 && (
                  <div className="hidden sm:block absolute top-10 -right-4 z-10">
                    <ArrowRight className="w-5 h-5 text-[#00bfa5]/40" />
                  </div>
                )}
                <div className="w-20 h-20 bg-gradient-to-br from-[#1d70a2]/30 to-[#00bfa5]/20 border border-[#00bfa5]/40 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="w-8 h-8 text-[#00bfa5]" />
                </div>
                <div>
                  <p className="font-poppins font-black text-[#00bfa5]/40 text-sm mb-1">
                    PASO {step.num}
                  </p>
                  <h3 className="font-poppins font-bold text-white text-xl mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed max-w-xs mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sixteam quote */}
      <section className="py-12 bg-gradient-to-r from-[#1d70a2]/20 to-[#00bfa5]/10 border-y border-[#1d70a2]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-[#e0e0e0] text-lg sm:text-xl leading-relaxed italic">
              "No vendemos más herramientas. Te ayudamos a entender{' '}
              <span className="text-white font-semibold not-italic">
                qué oportunidades estás dejando ir hoy
              </span>{' '}
              para que lo que implementes tenga impacto real desde el primer día."
            </p>
            <p className="text-[#00bfa5] font-poppins font-semibold text-sm">
              — Equipo Sixteam.pro
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Actúa ahora
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Cada día sin diagnóstico es{' '}
              <span className="bg-gradient-to-r from-red-400 to-[#00bfa5] bg-clip-text text-transparent">
                otro día perdiendo oportunidades
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg leading-relaxed max-w-2xl mx-auto">
              No necesitas más leads. Necesitas saber cuántos ya tienes y por qué
              no están cerrando. El diagnóstico te lo dice en 48 horas, gratis.
            </p>

            <Button
              onClick={handleWhatsAppClick}
              className="px-10 py-5 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-xl transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:shadow-[#00bfa5]/40 hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Descubrir mis oportunidades perdidas
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {[
                { icon: Clock, text: 'Resultados en 48 horas' },
                { icon: DollarSign, text: 'Completamente gratuito' },
                { icon: Target, text: 'Accionable desde el día 1' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-2 text-[#e0e0e0]/70 text-sm"
                >
                  <item.icon className="w-4 h-4 text-[#00bfa5]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <section className="py-10 bg-gradient-to-r from-[#1d70a2] to-[#00bfa5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div>
              <p className="font-poppins font-bold text-white text-xl">
                Deja de perder oportunidades sin saberlo
              </p>
              <p className="text-white/80 text-sm mt-1">
                Un diagnóstico gratuito que cambia cómo ves tu negocio.
              </p>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-white text-[#0a2342] hover:bg-[#e0e0e0] rounded-xl font-poppins font-bold text-base transition-all hover:scale-105 shadow-xl flex items-center gap-3 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Empezar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OportunidadesPerdidas;
