import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  CheckCircle,
  ShieldCheck,
  Target,
  BarChart3,
  Zap,
  Headphones,
  Brain,
  XCircle,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Search,
  ArrowRight,
  Clock,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const AntesDeInvertir = () => {
  useSEO({
    title: "¿Vale la Pena Invertir en CRM? — Radar Sixteam | Diagnóstico Previo",
    description: "El 60% de las implementaciones de CRM fallan sin diagnóstico previo. Antes de comprar, diagnostica. Ahorra hasta un 40% en tu implementación.",
  });

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573004188522?text=Hola%2C%20quiero%20hacer%20el%20diagn%C3%B3stico%20antes%20de%20invertir%20en%20CRM%20o%20automatizaci%C3%B3n',
      '_blank'
    );
  };

  const mistakes = [
    {
      icon: XCircle,
      title: 'Comprar la herramienta equivocada',
      desc: 'Eligen CRM A o B por recomendación de un amigo, sin evaluar si sus procesos y equipo están listos para adoptarla. Resultado: licencias pagadas sin uso real.',
      cost: 'Pérdida promedio: $8–25M COP en implementación fallida',
    },
    {
      icon: AlertTriangle,
      title: 'Automatizar procesos rotos',
      desc: 'Si el proceso de ventas o servicio ya falla hoy, automatizarlo solo significa fallar más rápido. La tecnología amplifica lo que ya existe, bueno o malo.',
      cost: 'Pérdida promedio: 4–6 meses de tiempo operativo',
    },
    {
      icon: Users,
      title: 'No preparar al equipo primero',
      desc: 'Implementan la plataforma en 2 semanas pero el equipo nunca la adopta. Sin entrenamiento, sin gestión del cambio, el CRM se convierte en otro sistema fantasma.',
      cost: 'Adopción promedio sin preparación: 23%',
    },
    {
      icon: BarChart3,
      title: 'Implementar sin métricas de éxito',
      desc: 'No definieron qué significa "que funcione". Sin KPIs claros desde el inicio, es imposible saber si la inversión valió la pena o ajustar en el camino.',
      cost: '67% de implementaciones sin métricas se abandonan en 18 meses',
    },
  ];

  const reveals = [
    {
      icon: Search,
      title: 'Si tu equipo está listo para adoptar CRM',
      desc: 'Evaluamos el nivel de madurez digital, la disposición al cambio y los procesos actuales para saber si una herramienta nueva va a funcionar.',
    },
    {
      icon: Target,
      title: 'Qué herramienta tiene sentido para tu caso',
      desc: 'No todas las empresas necesitan Salesforce. Te decimos si necesitas un CRM simple, uno avanzado, o si primero debes ordenar tus procesos manuales.',
    },
    {
      icon: Zap,
      title: 'Qué automatizaciones generan ROI real',
      desc: 'Identificamos las 3–5 automatizaciones que más impacto tienen en tu operación hoy, antes de que inviertas en tecnología que no resuelve lo urgente.',
    },
    {
      icon: TrendingUp,
      title: 'Dónde está tu mayor oportunidad de mejora',
      desc: 'Puede que no sea el CRM. Puede ser el proceso de seguimiento, la asignación de leads o la medición de tu embudo de ventas. Lo detectamos.',
    },
    {
      icon: DollarSign,
      title: 'Cuánto podrías recuperar con la inversión correcta',
      desc: 'Con base en tu operación actual, estimamos el impacto potencial de corregir cada área: más conversión, menos costo operativo, mejor retención.',
    },
  ];

  const processSteps = [
    {
      num: '01',
      title: 'Conversación inicial',
      desc: 'Escríbenos por WhatsApp. En 10 minutos recopilamos la información esencial sobre tu operación y tus objetivos de inversión.',
      icon: MessageCircle,
    },
    {
      num: '02',
      title: 'Análisis de madurez',
      desc: 'Evaluamos 6 áreas clave: ventas, marketing, servicio, automatización, datos y adopción de herramientas. Encontramos el punto de partida real.',
      icon: Search,
    },
    {
      num: '03',
      title: 'Evaluación de fit tecnológico',
      desc: 'Cruzamos tu situación actual con el ecosistema de CRM y herramientas disponibles. Te decimos qué tiene sentido y qué sería un error en tu caso.',
      icon: ShieldCheck,
    },
    {
      num: '04',
      title: 'Recomendación con ruta de acción',
      desc: 'Recibes una recomendación clara: si debes o no invertir ahora, en qué y cómo hacerlo para maximizar el retorno desde el primer mes.',
      icon: ArrowRight,
    },
  ];

  const areas = [
    { icon: Target, name: 'Ventas', desc: 'Pipeline, cierre, seguimiento de oportunidades.' },
    { icon: Brain, name: 'Marketing', desc: 'Fuentes de leads, nurturing, conversión por canal.' },
    { icon: Headphones, name: 'Servicio', desc: 'Tiempos de respuesta, retención, satisfacción.' },
    { icon: Zap, name: 'Automatización', desc: 'Tareas repetitivas, flujos, eficiencia operativa.' },
    { icon: BarChart3, name: 'Datos y CRM', desc: 'Calidad de datos, visibilidad, reportes.' },
    { icon: Users, name: 'Adopción de equipo', desc: 'Cultura, madurez digital, resistencia al cambio.' },
  ];

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d4f] to-[#0a2342]" />
        <div className="absolute top-20 right-20 w-80 h-80 bg-[#1d70a2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#00bfa5]/8 rounded-full blur-3xl pointer-events-none" />
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/20 border border-[#1d70a2]/40 rounded-full backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-[#1d70a2] brightness-150" />
              <span className="text-[#e0e0e0] text-xs font-lato font-medium tracking-widest uppercase">
                Diagnóstica antes de comprar
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              ¿Vale la pena invertir{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                en CRM ahora?
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#e0e0e0] max-w-2xl mx-auto leading-relaxed">
              El 60% de las implementaciones de CRM fracasan. No porque la herramienta
              sea mala, sino porque se implementa sin diagnóstico previo. Antes de
              gastar, entiende si tu empresa está lista y qué necesita realmente.
            </p>

            {/* Stat highlight */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#1d70a2]/15 border border-[#1d70a2]/30 rounded-xl">
              <TrendingUp className="w-5 h-5 text-[#00bfa5]" />
              <p className="text-[#e0e0e0] text-sm">
                Las empresas que diagnostican primero{' '}
                <strong className="text-white">ahorran hasta el 40% en implementación</strong>{' '}
                y logran adopción 3× mayor.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-lg transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:shadow-[#00bfa5]/40 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Diagnosticar antes de comprar
              </Button>
            </div>

            <p className="text-[#e0e0e0]/50 text-xs">
              Gratis · Sin compromiso · Para empresas de servicios
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator Teaser */}
      <section className="py-14 sm:py-20 bg-gradient-to-r from-[#1d70a2]/20 to-[#00bfa5]/10 border-y border-[#1d70a2]/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                stat: '60%',
                label: 'de implementaciones CRM fracasan',
                sub: 'Fuente: Gartner, 2024',
                color: 'text-red-400',
              },
              {
                stat: '40%',
                label: 'de ahorro con diagnóstico previo',
                sub: 'En costos de implementación',
                color: 'text-[#00bfa5]',
              },
              {
                stat: '3×',
                label: 'mayor adopción del equipo',
                sub: 'Cuando se prepara el proceso antes',
                color: 'text-[#1d70a2] brightness-150',
              },
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <p className={`font-poppins font-black text-5xl sm:text-6xl ${item.color}`}>
                  {item.stat}
                </p>
                <p className="text-white font-semibold text-lg">{item.label}</p>
                <p className="text-[#e0e0e0]/60 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Errores más comunes
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white leading-tight">
              ¿Estás cometiendo estos errores{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                antes de comprar CRM?
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg leading-relaxed">
              Los vemos todos los días en empresas que ya invirtieron sin diagnosticar.
              El diagnóstico existe para evitar exactamente esto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {mistakes.map((item, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-red-400/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-red-500/10 border border-red-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-red-400" />
                  </div>
                  <h3 className="font-poppins font-bold text-white text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="px-3 py-2 bg-red-500/10 border border-red-400/20 rounded-lg">
                  <p className="text-red-300 text-xs font-medium">{item.cost}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What the diagnostic reveals */}
      <section className="py-16 sm:py-24 bg-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Lo que descubres
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white leading-tight">
              5 cosas que el diagnóstico{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                te revela antes de invertir
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {reveals.map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300 group ${
                  i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00bfa5]/15 border border-[#00bfa5]/25 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#00bfa5]/25 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <span className="font-poppins font-bold text-[#00bfa5]/50 text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-poppins font-bold text-white text-lg mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0d2d4f] to-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Proceso diagnóstico
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
              4 pasos para saber si debes (o no) invertir
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {processSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300 group"
              >
                {/* Arrow connector */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 bg-[#0a2342] border border-[#1d70a2]/30 rounded-full items-center justify-center">
                    <ArrowRight className="w-3 h-3 text-[#00bfa5]" />
                  </div>
                )}
                <div className="w-12 h-12 bg-[#00bfa5]/15 border border-[#00bfa5]/25 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00bfa5]/25 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-[#00bfa5]" />
                </div>
                <p className="font-poppins font-black text-[#00bfa5]/40 text-3xl mb-2">
                  {step.num}
                </p>
                <h3 className="font-poppins font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas evaluated */}
      <section className="py-16 sm:py-24 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Áreas evaluadas
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
              ¿Qué áreas analizamos?
            </h2>
            <p className="text-[#e0e0e0] text-lg">
              Las 6 dimensiones que determinan si una implementación de CRM va a funcionar.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {areas.map((area, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-5 hover:border-[#00bfa5]/50 transition-all duration-300 group text-center"
              >
                <div className="w-12 h-12 bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#00bfa5]/20 group-hover:border-[#00bfa5]/30 transition-all duration-300">
                  <area.icon className="w-6 h-6 text-[#00bfa5]" />
                </div>
                <h3 className="font-poppins font-bold text-white text-base mb-1">{area.name}</h3>
                <p className="text-[#e0e0e0]/70 text-xs leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Without diagnostic */}
            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-red-400/20 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <XCircle className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="font-poppins font-bold text-white text-xl">Sin diagnóstico</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Inviertes $10–30M en implementación sin saber si es lo correcto',
                  'Tu equipo resiste la herramienta y no la adopta',
                  'Automatizas procesos que ya estaban rotos',
                  'El CRM queda con datos sucios e incompletos',
                  'A los 6 meses vuelves a buscar otra solución',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-[#e0e0e0] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With diagnostic */}
            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#00bfa5]/30 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-[#00bfa5]/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[#00bfa5]" />
                </div>
                <h3 className="font-poppins font-bold text-white text-xl">Con diagnóstico</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Sabes exactamente qué herramienta necesitas y por qué',
                  'Tu equipo entiende el cambio y lo adopta desde el inicio',
                  'Solo automatizas procesos que ya funcionan bien',
                  'Los datos del CRM son limpios y útiles desde el día 1',
                  'A los 6 meses ves resultados medibles en ventas y servicio',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                    <span className="text-[#e0e0e0] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-24 bg-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              No implementes a ciegas
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Diagnostica antes de comprar.{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                Es gratis.
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg leading-relaxed max-w-2xl mx-auto">
              Antes de gastar en CRM, IA o automatización, invierte 10 minutos en
              entender qué necesita realmente tu empresa. Nuestro equipo lo analiza
              y te dice si conviene o no invertir ahora.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleWhatsAppClick}
                className="px-10 py-4 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-lg transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Diagnosticar antes de comprar
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {[
                { icon: Clock, text: 'En 48 horas tienes los resultados' },
                { icon: ShieldCheck, text: 'Gratuito y sin ningún compromiso' },
                { icon: Target, text: 'Personalizado para tu empresa' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-[#e0e0e0]/70 text-sm">
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
                ¿Vale la pena invertir en CRM?
              </p>
              <p className="text-white/80 text-sm mt-1">
                Descúbrelo gratis. Nuestro diagnóstico te da la respuesta.
              </p>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-white text-[#0a2342] hover:bg-[#e0e0e0] rounded-xl font-poppins font-bold text-base transition-all hover:scale-105 shadow-xl flex items-center gap-3 whitespace-nowrap"
            >
              <MessageCircle className="w-5 h-5" />
              Empezar diagnóstico
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntesDeInvertir;
