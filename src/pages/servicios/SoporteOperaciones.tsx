import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle, ArrowLeft, CheckCircle, Clock, Zap, Globe,
  Code2, Settings, ChevronDown, ChevronUp, ShieldCheck,
  BarChart3, RefreshCcw, Wrench, ArrowRight
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const WA_BASE = 'https://wa.me/+573023515392?text=';

const SoporteOperaciones = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleWA = (msg: string) => {
    window.open(WA_BASE + encodeURIComponent(msg), '_blank');
  };

  const planes = [
    {
      nombre: 'Plan Starter',
      horas: '5 horas/mes',
      precio: '$500.000 COP/mes',
      horaExtra: '$150.000 COP/hora adicional',
      descripcion: 'Ideal para equipos que ya tienen su plataforma implementada y necesitan ajustes puntuales y acompañamiento básico.',
      incluye: [
        'Hasta 5 horas de soporte al mes (no acumulables)',
        'SLA de respuesta: 4 horas en días hábiles',
        'Atención de urgencias fines de semana',
        'Ajustes de configuración en plataforma',
        'Ejecución operativa y apoyo funcional',
        'Levantamiento de oportunidades de mejora',
      ],
      waMsg: 'Hola, quiero el Plan Starter de Soporte y Operaciones',
      highlight: false,
    },
    {
      nombre: 'Plan Operativo',
      horas: '10 horas/mes',
      precio: 'Desde $1.250.000 COP/mes',
      horaExtra: '$125.000 COP/hora adicional',
      descripcion: 'Para equipos en crecimiento que necesitan soporte frecuente, ejecución de mejoras y continuidad operativa.',
      incluye: [
        'Hasta 10 horas de soporte al mes',
        'SLA de respuesta: 4 horas en días hábiles',
        'Atención de urgencias fines de semana',
        'Envío de comunicaciones masivas o apoyo en email marketing',
        'Ejecución de ajustes en flujos y automatizaciones',
        'Reporte mensual de actividades ejecutadas',
      ],
      waMsg: 'Hola, quiero el Plan Operativo de Soporte y Operaciones',
      highlight: true,
    },
    {
      nombre: 'Plan Avanzado',
      horas: '20–30 horas/mes',
      precio: 'Desde $2.500.000 COP/mes',
      horaExtra: '$99.999 COP/hora adicional',
      descripcion: 'Para operaciones digitales maduras que requieren un equipo técnico externo dedicado a la evolución continua.',
      incluye: [
        'Hasta 20–30 horas de soporte al mes',
        'SLA prioritario en días hábiles',
        'Atención de urgencias fines de semana',
        'Ejecución de automatizaciones y mejoras continuas',
        'Apoyo en campañas, comunicaciones y reportería',
        'Acompañamiento estratégico mensual',
      ],
      waMsg: 'Hola, quiero el Plan Avanzado de Soporte y Operaciones',
      highlight: false,
    },
  ];

  const serviciosComplementarios = [
    {
      icon: Zap,
      titulo: 'Automatizaciones avanzadas',
      precio: '$180.000 COP / hora',
      desc: 'Diseñamos y construimos workflows complejos, lógica de procesos a medida y automatizaciones que van más allá de la implementación base.',
      waMsg: 'Hola, quiero cotizar automatizaciones avanzadas sobre CRM',
    },
    {
      icon: Globe,
      titulo: 'Integraciones con otros sistemas',
      precio: '$250.000 COP / hora',
      desc: 'Conectamos tu operación con Shopify, Mailchimp, NetSuite, HubSpot, tu sitio web y cualquier sistema externo vía API, Webhook o automatización.',
      waMsg: 'Hola, quiero cotizar una integración con otro sistema',
    },
    {
      icon: Code2,
      titulo: 'Website y landing pages',
      precio: 'Sujeto a cotización',
      desc: 'Creamos o mantenemos tu página web articulada con tu CRM y procesos de captación, desde sitios informativos hasta embudos de conversión.',
      waMsg: 'Hola, quiero cotizar desarrollo de website o landing page',
    },
    {
      icon: Settings,
      titulo: 'Desarrollo de plataforma personalizada',
      precio: '$300.000 COP / hora',
      desc: 'Levantamiento funcional, diseño, desarrollo e integración de módulos o funcionalidades a la medida de tu operación digital.',
      waMsg: 'Hola, quiero cotizar desarrollo de plataforma personalizada',
    },
  ];

  const faqs = [
    {
      q: '¿Las horas de soporte se acumulan si no las uso?',
      a: 'No. Las horas de soporte mensual no son acumulables. El plan cubre hasta el número de horas contratado por mes calendario. Esto nos permite garantizar disponibilidad y SLA de respuesta para todos los clientes.',
    },
    {
      q: '¿Qué cubre el soporte y qué no cubre?',
      a: 'El soporte cubre configuraciones de plataforma, ajustes funcionales, ejecución operativa y mejoras sobre las herramientas implementadas por Sixteam. No cubre caídas del servicio atribuibles al proveedor de la plataforma (GHL, HubSpot, etc.), que se resuelven directamente con el proveedor.',
    },
    {
      q: '¿Cuál es el tiempo de respuesta?',
      a: 'El SLA estándar es de 4 horas en días hábiles (lunes a viernes). Los fines de semana atendemos exclusivamente urgencias.',
    },
    {
      q: '¿Puedo contratar horas adicionales si las necesito?',
      a: 'Sí. Las horas adicionales tienen un costo según el plan: $150.000 COP/h en Plan Starter, $125.000 COP/h en Plan Operativo y $99.999 COP/h en Plan Avanzado.',
    },
    {
      q: '¿Las integraciones y automatizaciones avanzadas están incluidas en el soporte?',
      a: 'No. El soporte mensual cubre ajustes operativos y mejoras de configuración. Los proyectos de automatizaciones avanzadas, integraciones o desarrollos personalizados se cotizan por separado según alcance y complejidad.',
    },
    {
      q: '¿Puedo contratar soporte sin haber implementado con Sixteam?',
      a: 'Depende del caso. Evaluamos el estado de tu plataforma antes de cotizar el soporte, ya que necesitamos conocer la configuración existente para operar sobre ella correctamente.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#1d70a2]/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00bfa5]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/servicios" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Volver a Servicios
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bfa5]/10 border border-[#00bfa5]/30 rounded-full">
              <Wrench className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] font-medium text-sm font-poppins">Soporte · Operaciones · Madurez digital</span>
            </div>

            <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl leading-tight">
              Tu operación digital,{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                siempre funcionando
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Acompañamiento recurrente para mantener, mejorar y escalar tu plataforma. Sixteam opera contigo mes a mes para que tu equipo se enfoque en el negocio, no en la tecnología.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-[#00bfa5]" />
                <span className="text-white font-semibold text-sm">SLA 4 horas días hábiles</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <ShieldCheck className="w-5 h-5 text-[#1d70a2]" />
                <span className="text-white font-semibold text-sm">Urgencias fines de semana</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <RefreshCcw className="w-5 h-5 text-[#00bfa5]" />
                <span className="text-white font-semibold text-sm">Desde $500.000 COP/mes</span>
              </div>
            </div>

            <Button
              onClick={() => handleWA('Hola, quiero conocer más sobre el servicio de Soporte y Operaciones de Sixteam.pro')}
              className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Cotizar mi plan de soporte
            </Button>
          </div>
        </div>
      </section>

      {/* ── QUÉ CUBRE EL SOPORTE ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
              ¿Qué hacemos en el soporte mensual?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              No solo resolvemos tickets — operamos, mejoramos y evolucionamos tu plataforma junto a tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Settings,
                titulo: 'Configuración de plataforma',
                desc: 'Ajustes en campos, vistas, pipelines, usuarios, permisos y cualquier parametrización de tu CRM o herramienta digital.',
              },
              {
                icon: Zap,
                titulo: 'Ejecución operativa',
                desc: 'Apoyo en el uso diario de las herramientas: creación de listas, envío de comunicaciones, configuración de flujos y actividades.',
              },
              {
                icon: BarChart3,
                titulo: 'Mejoras y ajustes de procesos',
                desc: 'Identificamos oportunidades de mejora en tus automatizaciones, reportes y flujos, y las ejecutamos dentro del tiempo contratado.',
              },
              {
                icon: MessageCircle,
                titulo: 'Envíos y comunicaciones',
                desc: 'Apoyo en mensajes masivos, campañas de email marketing y comunicaciones operativas desde tu plataforma.',
              },
              {
                icon: ShieldCheck,
                titulo: 'SLA garantizado',
                desc: '4 horas de tiempo de respuesta en días hábiles. Urgencias críticas atendidas también los fines de semana.',
              },
              {
                icon: RefreshCcw,
                titulo: 'Mejora continua',
                desc: 'Reporte mensual de actividades ejecutadas y reunión de revisión para priorizar las mejoras del siguiente período.',
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-[#1d70a2]/40 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-[#0a2342] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-900 text-lg mb-2">{item.titulo}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto mt-8 p-5 bg-amber-50 border border-amber-200 rounded-xl">
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Importante:</strong> El soporte mensual no cubre caídas del servicio atribuibles al proveedor de la plataforma (HighLevel, HubSpot, etc.). Estas situaciones se gestionan directamente con el proveedor, con acompañamiento de Sixteam en la comunicación cuando aplique.
            </p>
          </div>
        </div>
      </section>

      {/* ── PLANES ───────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-white text-3xl sm:text-4xl lg:text-5xl">
              Planes de soporte mensual
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Elige según el volumen de operación y la frecuencia de cambios que necesita tu equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {planes.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-[#0d2d4f] to-[#0a2342] border-2 border-[#00bfa5] shadow-[0_0_40px_rgba(0,191,165,0.15)]'
                    : 'bg-[#0d2d4f] border border-[#1d70a2]/30 hover:border-[#1d70a2]/60'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00bfa5] text-white text-xs font-poppins font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                    ★ Más solicitado
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="font-poppins font-bold text-white text-xl mb-1">{plan.nombre}</h3>
                  <p className="text-[#00bfa5] text-sm font-medium mb-1">{plan.horas}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{plan.descripcion}</p>
                </div>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <div className="font-poppins font-black text-white text-2xl mb-1">{plan.precio}</div>
                  <div className="text-gray-500 text-xs">{plan.horaExtra}</div>
                </div>

                <ul className="space-y-2.5 flex-1 mb-8">
                  {plan.incluye.map((item, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-[#00bfa5] shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => handleWA(plan.waMsg)}
                  className={`w-full font-poppins font-semibold py-3 rounded-lg transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-[#00bfa5] hover:bg-[#00a08a] text-white'
                      : 'bg-[#1d70a2] hover:bg-[#155a88] text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Quiero este plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS COMPLEMENTARIOS ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl lg:text-5xl">
              Iniciativas avanzadas e integraciones
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Para organizaciones que ya tienen base y quieren escalar su madurez digital con desarrollos a medida.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {serviciosComplementarios.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-[#1d70a2]/40 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-[#00bfa5]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-poppins font-bold text-gray-900 text-lg mb-1">{item.titulo}</h3>
                      <p className="text-[#00bfa5] font-semibold text-sm mb-2">{item.precio}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.desc}</p>
                      <button
                        onClick={() => handleWA(item.waMsg)}
                        className="inline-flex items-center gap-1.5 text-[#1d70a2] font-semibold text-sm hover:text-[#00bfa5] transition-colors"
                      >
                        Cotizar este servicio
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl">
              Cómo funciona el soporte mensual
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', titulo: 'Onboarding', desc: 'Revisamos el estado de tu plataforma y definimos el alcance del soporte según tu operación.' },
              { step: '02', titulo: 'Canal de soporte', desc: 'Accedes a un canal directo para reportar solicitudes. Respondemos en el SLA acordado.' },
              { step: '03', titulo: 'Ejecución mensual', desc: 'Ejecutamos ajustes, mejoras y operaciones dentro de las horas contratadas.' },
              { step: '04', titulo: 'Revisión y cierre', desc: 'Reporte de actividades ejecutadas y priorización de mejoras para el siguiente mes.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-[#1d70a2]/30 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-[#0a2342] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#00bfa5] font-poppins font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-poppins font-bold text-gray-900 text-lg mb-2">{item.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-poppins font-bold text-gray-900 text-3xl sm:text-4xl">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-poppins font-semibold text-gray-900 pr-4">{faq.q}</span>
                    {openFaq === i
                      ? <ChevronUp className="w-5 h-5 text-[#1d70a2] shrink-0" />
                      : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,191,165,0.08)_0%,transparent_70%)]" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-poppins font-black text-white text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Deja que Sixteam opere tu plataforma
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tu equipo se enfoca en vender y atender clientes. Nosotros mantenemos la tecnología funcionando y evolucionando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => handleWA('Hola, quiero cotizar un plan de Soporte y Operaciones con Sixteam.pro')}
                className="bg-[#00bfa5] hover:bg-[#00a08a] text-white font-poppins font-semibold px-10 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar plan de soporte
              </Button>
              <Button
                variant="outline"
                asChild
                className="border-white/30 text-white hover:bg-white/10 font-poppins font-semibold px-10 py-4 text-lg rounded-lg"
              >
                <Link to="/contacto">Hablar con un experto</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoporteOperaciones;
