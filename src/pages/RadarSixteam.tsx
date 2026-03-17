import React from 'react';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  Search,
  BarChart3,
  Zap,
  Users,
  Target,
  Headphones,
  Brain,
  Bot,
  CheckCircle,
  ArrowRight,
  Building2,
  Plane,
  Briefcase,
  Sparkles,
} from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const RadarSixteam = () => {
  const handleWhatsAppClick = (
    message: string = 'Hola%2C%20quiero%20hacer%20mi%20diagn%C3%B3stico%20Radar%20Sixteam%20gratuito'
  ) => {
    window.open(`https://wa.me/+573023515392?text=${message}`, '_blank');
  };

  const levels = [
    {
      name: 'Radar Inicial',
      tag: 'GRATIS',
      tagColor: 'bg-green-500',
      description:
        'Un diagnóstico corto por WhatsApp. En pocos minutos detectamos tu problema principal y te damos una lectura clara.',
      includes: [
        '2–5 preguntas directas',
        'Lectura inicial de tu situación',
        'Recomendación de siguiente paso',
      ],
      cta: 'Empezar gratis',
      waMessage:
        'Hola%2C%20quiero%20hacer%20mi%20diagn%C3%B3stico%20Radar%20Inicial%20gratuito',
    },
    {
      name: 'Radar Express',
      tag: 'ENTRADA',
      tagColor: 'bg-blue-500',
      description:
        'Para empresas con un problema claro que necesitan orientación concreta. Obtienes prioridades y una ruta definida.',
      includes: [
        'Sesión diagnóstica enfocada',
        'Priorización de áreas clave',
        'Informe con hallazgos y ruta de acción',
      ],
      cta: 'Solicitar Radar Express',
      waMessage:
        'Hola%2C%20me%20interesa%20el%20Radar%20Express',
    },
    {
      name: 'Radar Estratégico',
      tag: 'CONSULTORÍA',
      tagColor: 'bg-purple-500',
      description:
        'Diagnóstico profundo de tu operación comercial. Hallazgos, priorización y un roadmap claro de implementación.',
      includes: [
        'Diagnóstico completo multi-área',
        'Roadmap estratégico priorizado',
        'Plan de implementación detallado',
      ],
      cta: 'Solicitar Radar Estratégico',
      waMessage:
        'Hola%2C%20me%20interesa%20el%20Radar%20Estrat%C3%A9gico',
    },
    {
      name: 'Implementación',
      tag: 'EJECUCIÓN',
      tagColor: 'bg-teal-500',
      description:
        'Ejecutamos el plan: CRM, automatizaciones, IA, integraciones. Con acompañamiento de principio a fin.',
      includes: [
        'Ejecución del roadmap aprobado',
        'Acompañamiento y seguimiento',
        'Capacitación y soporte post-lanzamiento',
      ],
      cta: 'Hablar de implementación',
      waMessage:
        'Hola%2C%20quiero%20hablar%20sobre%20implementaci%C3%B3n%20con%20Sixteam',
    },
  ];

  const areas = [
    { icon: Target, name: 'Ventas', desc: 'Pipeline, seguimiento de oportunidades, asignación y conversión.' },
    { icon: Brain, name: 'Marketing', desc: 'Fuentes de leads, campañas, nurturing y retorno real por canal.' },
    { icon: Headphones, name: 'Servicio al cliente', desc: 'Tiempos de respuesta, tickets, satisfacción y escalaciones.' },
    { icon: Zap, name: 'Automatización', desc: 'Tareas repetitivas que hoy dependen de personas y memoria.' },
    { icon: BarChart3, name: 'CRM y datos', desc: 'Uso real del CRM, calidad de datos y visibilidad del negocio.' },
    { icon: Users, name: 'RevOps', desc: 'Coordinación entre marketing, ventas y servicio como motor de ingresos.' },
  ];

  const steps = [
    {
      num: '01',
      title: 'Escríbenos por WhatsApp',
      desc: 'Inicias una conversación rápida. Sin formularios, sin reuniones largas al inicio.',
    },
    {
      num: '02',
      title: 'Respondemos unas preguntas',
      desc: 'Entendemos tu contexto: qué problema tienes, cómo operas hoy y qué herramientas usas.',
    },
    {
      num: '03',
      title: 'Recibes una lectura inicial',
      desc: 'Te decimos dónde está tu mayor oportunidad de mejora, sin rodeos.',
    },
    {
      num: '04',
      title: 'Definimos el siguiente paso',
      desc: 'Te recomendamos qué conviene hacer primero: un diagnóstico más profundo o una implementación directa.',
    },
  ];

  const personas = [
    { icon: Plane, name: 'Agencias de viajes', pain: 'Seguimiento disperso, confirmaciones manuales, leads que nadie atiende a tiempo.' },
    { icon: Building2, name: 'Inmobiliarias', pain: 'Pipeline sin control, leads sin dueño, sin saber en qué etapa está cada negocio.' },
    { icon: Briefcase, name: 'Servicios profesionales', pain: 'Todo manual, sin CRM, sin trazabilidad de lo que pasa con cada cliente.' },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/15 border border-teal-400/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-teal-300 font-medium text-sm tracking-wide">
                Diagnóstico gratuito por WhatsApp
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Primero entiende qué
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                deberías mejorar
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Antes de invertir en CRM, IA o automatización, haz un diagnóstico rápido
              por WhatsApp. En minutos sabrás dónde está el verdadero cuello de botella
              de tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => handleWhatsAppClick()}
                className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Hacer mi diagnóstico gratis
              </Button>
              <span className="text-gray-400 text-sm">
                Sin formularios · Sin reuniones al inicio · 5 minutos
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es Radar Sixteam? */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                ¿Qué es{' '}
                <span className="text-blue-600">Radar Sixteam</span>?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Un diagnóstico rápido que te ayuda a detectar dónde tiene sentido
                mejorar ventas, servicio, seguimiento o procesos en tu empresa. Sin venderte nada primero.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Muchas empresas compran herramientas sin saber qué problema resolver. Radar te da{' '}
                <strong>claridad antes de gastar</strong>.
              </p>
              <ul className="space-y-3">
                {[
                  'Gratis, rápido y por WhatsApp',
                  'Enfocado en ventas, marketing, servicio y procesos',
                  'No te obliga a contratar nada',
                  'Adaptado a tu caso, no es un formulario genérico',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d52] rounded-2xl p-8 sm:p-10 text-white space-y-6">
              <div className="flex items-center gap-3">
                <Search className="w-8 h-8 text-teal-400" />
                <h3 className="text-2xl font-bold">Diagnóstico de tu operación</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Revisamos cómo funcionan hoy tus ventas, servicio, seguimiento y herramientas
                para detectar dónde se está trabando el negocio.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-teal-400">5 min</div>
                  <div className="text-gray-400 text-xs mt-1">Diagnóstico inicial</div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400">6</div>
                  <div className="text-gray-400 text-xs mt-1">Áreas evaluadas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Para quién es? */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              ¿Para quién es?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para dueños y gerentes de empresas de servicios que saben que algo no funciona
              bien, pero no tienen claro por dónde empezar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {personas.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-[#0a2342] rounded-xl flex items-center justify-center mb-5">
                  <p.icon className="w-7 h-7 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.pain}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-500 text-sm">
              También aplica para cualquier empresa de servicios con procesos comerciales manuales o desorden operativo.
            </p>
          </div>
        </div>
      </section>

      {/* Niveles */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Avanza a tu ritmo, sin saltos a ciegas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada nivel te da más claridad. Tú decides hasta dónde llegar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {levels.map((level, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl border-2 p-6 sm:p-8 flex flex-col transition-all duration-300 hover:shadow-xl ${
                  i === 0
                    ? 'border-teal-400 shadow-lg shadow-teal-500/10'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold text-white px-3 py-1 rounded-full ${level.tagColor}`}
                  >
                    {level.tag}
                  </span>
                  {i < 3 && (
                    <ArrowRight className="w-4 h-4 text-gray-300 hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 z-10" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{level.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-grow">
                  {level.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {level.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => handleWhatsAppClick(level.waMessage)}
                  className={`w-full py-3 rounded-lg font-semibold text-sm transition-all ${
                    i === 0
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {level.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="relative py-16 sm:py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Así funciona
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Todo por WhatsApp. Sin formularios largos ni reuniones de una hora para empezar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 text-center hover:border-teal-400/40 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <span className="text-teal-400 font-bold text-xl">{step.num}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas que evaluamos */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              ¿Qué revisamos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las seis áreas que más impactan en la operación comercial de una empresa de servicios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {areas.map((area, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center mb-4">
                  <area.icon className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{area.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Antes de invertir, diagnostica
          </h2>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            5 minutos por WhatsApp. Gratis. Y sabrás exactamente qué parte de tu empresa necesita atención primero.
          </p>
          <Button
            onClick={() => handleWhatsAppClick()}
            className="px-10 py-4 bg-white text-teal-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hacer mi diagnóstico gratuito
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RadarSixteam;
