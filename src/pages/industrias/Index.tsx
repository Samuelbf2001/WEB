import { Plane, Building2, Briefcase, ArrowRight, MessageCircle, Zap, Bot, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const WA_URL =
  'https://wa.me/573023515392?text=Hola%2C%20quiero%20saber%20si%20tienen%20soluci%C3%B3n%20para%20mi%20industria';

const industries = [
  {
    icon: Plane,
    name: 'Agencias de Viaje',
    slug: '/industrias/agencias-de-viaje',
    tagline: 'De cotización a reserva en 2 minutos',
    description:
      'Responde consultas al instante, automatiza el seguimiento post-cotización y gestiona todos tus canales — WhatsApp, Instagram, email — en una sola bandeja. Aumenta tu conversión sin contratar más personal.',
    highlights: ['Agente IA 24/7', 'Pipeline de reservas', 'Follow-up automático'],
    accentColor: 'from-[#1d70a2] to-[#00bfa5]',
    iconBg: 'bg-[#1d70a2]/20',
    iconColor: 'text-[#1d70a2]',
    borderHover: 'hover:border-[#1d70a2]/60',
  },
  {
    icon: Building2,
    name: 'Inmobiliarias',
    slug: '/industrias/inmobiliarias',
    tagline: 'Ningún lead sin respuesta. Nunca más.',
    description:
      'Centraliza leads de portales, WhatsApp y Meta Ads. La IA califica cada prospecto, asigna al asesor correcto y agenda visitas con recordatorios automáticos. Cierra el doble de negocios en menos tiempo.',
    highlights: ['Calificación automática', 'Agendamiento con recordatorios', 'Pipeline venta/arriendo'],
    accentColor: 'from-[#00bfa5] to-[#1d70a2]',
    iconBg: 'bg-[#00bfa5]/20',
    iconColor: 'text-[#00bfa5]',
    borderHover: 'hover:border-[#00bfa5]/60',
  },
  {
    icon: Briefcase,
    name: 'Servicios Generales',
    slug: '/industrias/servicios-generales',
    tagline: 'Cierra más propuestas. Renueva sin esfuerzo.',
    description:
      'Gestiona propuestas con seguimiento automático, automatiza cobros y renovaciones, y rastrea referidos. Todo el historial de cada cliente en un solo lugar para que tu equipo se enfoque en crecer.',
    highlights: ['Pipeline de propuestas', 'Secuencias de cobro', 'Gestión de referidos'],
    accentColor: 'from-[#1d70a2] to-[#00bfa5]',
    iconBg: 'bg-[#1d70a2]/20',
    iconColor: 'text-[#1d70a2]',
    borderHover: 'hover:border-[#1d70a2]/60',
  },
];

const pillars = [
  {
    icon: Bot,
    title: 'IA que trabaja por ti',
    desc: 'Agentes conversacionales entrenados en tu negocio responden, califican y asignan leads las 24 horas, todos los días.',
  },
  {
    icon: Zap,
    title: 'Automatizaciones sin código',
    desc: 'Seguimientos, recordatorios, cobros y renovaciones se activan solos. Tu equipo solo interviene cuando importa.',
  },
  {
    icon: MessageCircle,
    title: 'Omnicanal centralizado',
    desc: 'WhatsApp, Instagram, Facebook, email y web en una sola bandeja. Sin mensajes perdidos, sin silos de información.',
  },
];

const IndustriasIndex = () => {
  useSEO({
    title: 'Soluciones por Industria | Sixteam.pro',
    description:
      'CRM, automatizaciones e IA personalizadas para agencias de viaje, inmobiliarias y servicios generales en Colombia.',
  });

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      <Header />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#1d70a2]" />
        <div className="absolute top-16 left-0 w-96 h-96 bg-[#1d70a2]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00bfa5]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00bfa5]/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
            <Briefcase className="w-4 h-4 text-[#00bfa5]" />
            <span className="text-[#00bfa5] text-sm font-medium tracking-wide">Por industria</span>
          </div>

          <h1 className="font-poppins font-black text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 max-w-4xl mx-auto">
            Soluciones diseñadas para{' '}
            <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
              tu industria
            </span>
          </h1>

          <p className="text-[#e0e0e0]/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            No vendemos software genérico. Implementamos CRM, automatizaciones e IA adaptados al flujo
            real de tu negocio — para que cierres más sin trabajar más horas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-[#00bfa5] hover:bg-[#00a896] text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-[#00bfa5]/20 transition-all duration-200 hover:scale-105"
              >
                Habla con un especialista
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </a>
            <Link to="/servicios">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-xl text-base transition-all duration-200"
              >
                Ver todos los servicios
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Industry Cards ───────────────────────────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
              Elige tu industria
            </h2>
            <p className="text-[#e0e0e0]/70 text-lg max-w-xl mx-auto">
              Cada solución está construida alrededor de los problemas reales de ese sector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <Link
                  key={industry.slug}
                  to={industry.slug}
                  className={`group relative flex flex-col bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:bg-white/8 ${industry.borderHover} hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30`}
                >
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${industry.iconBg} rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${industry.iconColor}`} />
                  </div>

                  {/* Name + tagline */}
                  <h3 className="font-poppins font-bold text-white text-xl mb-1">
                    {industry.name}
                  </h3>
                  <p className={`text-sm font-semibold bg-gradient-to-r ${industry.accentColor} bg-clip-text text-transparent mb-4`}>
                    {industry.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-[#e0e0e0]/70 text-sm leading-relaxed mb-6 flex-1">
                    {industry.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8">
                    {industry.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm text-[#e0e0e0]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00bfa5] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${industry.accentColor} bg-clip-text text-transparent transition-all duration-200 group-hover:gap-3`}>
                    Ver solución
                    <ChevronRight className={`w-4 h-4 ${industry.iconColor} transition-transform duration-200 group-hover:translate-x-1`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Shared Pillars ───────────────────────────────────── */}
      <section className="py-16 sm:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
              La misma base. Adaptada a tu negocio.
            </h2>
            <p className="text-[#e0e0e0]/70 text-lg max-w-2xl mx-auto">
              Todas nuestras soluciones están construidas sobre tres pilares que generan resultados
              desde la semana uno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex flex-col items-center text-center bg-white/5 border border-white/10 rounded-2xl p-8"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1d70a2]/20 rounded-xl mb-5">
                    <Icon className="w-7 h-7 text-[#1d70a2]" />
                  </div>
                  <h3 className="font-poppins font-semibold text-white text-lg mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-[#e0e0e0]/70 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── "¿Tu industria no está aquí?" CTA ───────────────── */}
      <section className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#0d2d52] via-[#1a3a5c] to-[#0a2342] border border-white/10 p-10 sm:p-14 text-center shadow-2xl">
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#1d70a2]/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00bfa5]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#00bfa5]/15 border border-[#00bfa5]/30 rounded-2xl mb-6">
                <MessageCircle className="w-8 h-8 text-[#00bfa5]" />
              </div>

              <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl mb-4">
                ¿Tu industria no está aquí?
              </h2>
              <p className="text-[#e0e0e0]/75 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Trabajamos con empresas de muchos sectores. Cuéntanos en qué estás y armamos
                una solución personalizada para tu proceso de ventas o atención.
              </p>

              <a href={WA_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#00bfa5] hover:bg-[#00a896] text-white font-semibold px-10 py-4 rounded-xl text-base shadow-lg shadow-[#00bfa5]/25 transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Escríbenos por WhatsApp
                </Button>
              </a>

              <p className="mt-5 text-[#e0e0e0]/45 text-sm">
                Respondemos en menos de 2 horas · Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default IndustriasIndex;
