import { useState } from 'react';
import { gtm } from '@/lib/gtm';
import { Button } from '@/components/ui/button';
import {
  MessageCircle,
  CheckCircle,
  Sparkles,
  FileText,
  Map,
  ListOrdered,
  BarChart2,
  PhoneCall,
  ArrowRight,
  Star,
  Users,
  TrendingUp,
  Settings,
  Clock,
  Shield,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';

const DiagnosticoGratis = () => {
  useSEO({
    title: "Diagnóstico Gratuito — Radar Sixteam | Resultados en 48 Horas",
    description: "Diagnóstico gratuito de tu operación comercial. En 48 horas recibes mapa de oportunidades, recomendaciones priorizadas y benchmark competitivo. Sin compromiso.",
  });

  const [formData, setFormData] = useState({ name: '', email: '', company: '', challenge: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/+573023515392?text=Hola%2C%20quiero%20hacer%20mi%20diagn%C3%B3stico%20gratuito%20de%20negocio%20con%20Sixteam',
      '_blank'
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    gtm.formSubmit('diagnostico_gratis');
    const msg = encodeURIComponent(
      `Hola, quiero mi diagnóstico gratuito. Soy ${formData.name} de ${formData.company}. Mi reto principal: ${formData.challenge}. Mi correo: ${formData.email}`
    );
    window.open(`https://wa.me/+573023515392?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const deliverables = [
    {
      icon: FileText,
      title: 'Informe escrito de hallazgos',
      desc: 'Un documento claro con los principales problemas detectados en tu operación comercial, ventas y servicio.',
    },
    {
      icon: Map,
      title: 'Mapa de oportunidades',
      desc: 'Identificamos cada punto donde tu empresa está dejando dinero sobre la mesa, con su nivel de impacto.',
    },
    {
      icon: ListOrdered,
      title: 'Recomendaciones priorizadas',
      desc: 'No una lista genérica: te decimos qué resolver primero según tu contexto, recursos y objetivos.',
    },
    {
      icon: BarChart2,
      title: 'Benchmark competitivo',
      desc: 'Comparamos tu operación con el estándar del sector para que sepas dónde estás rezagado y dónde lideras.',
    },
    {
      icon: PhoneCall,
      title: 'Llamada de 30 minutos',
      desc: 'Una sesión con nuestro equipo para revisar los resultados juntos, resolver dudas y definir el siguiente paso.',
    },
  ];

  const steps = [
    {
      num: '01',
      title: 'Completa el formulario',
      desc: 'Cuéntanos tu principal reto en 2 líneas. Sin formularios largos ni burocracia.',
      detail: 'Menos de 2 minutos',
    },
    {
      num: '02',
      title: 'Analizamos tu caso',
      desc: 'Nuestro equipo revisa tu información, investiga tu sector y prepara el diagnóstico personalizado.',
      detail: 'En máximo 48 horas',
    },
    {
      num: '03',
      title: 'Recibes tus resultados',
      desc: 'Te entregamos el informe completo y agendamos la llamada de 30 min para revisarlo juntos.',
      detail: 'Sin costo, sin compromiso',
    },
  ];

  const profiles = [
    {
      icon: TrendingUp,
      title: 'Empresas en crecimiento',
      desc: 'Están creciendo pero sus procesos no escalan. Cada nuevo cliente genera más caos, no más utilidad.',
      tags: ['10–100 empleados', 'Servicios B2B', 'En expansión'],
    },
    {
      icon: Settings,
      title: 'Empresas con procesos manuales',
      desc: 'Todo vive en Excel, WhatsApp y la cabeza de una persona. Un día de ausencia paraliza la operación.',
      tags: ['Sin CRM', 'Seguimiento manual', 'Datos dispersos'],
    },
    {
      icon: Users,
      title: 'Empresas con CRM subutilizado',
      desc: 'Tienen la herramienta pero el equipo no la usa bien, los datos están sucios y no hay visibilidad real.',
      tags: ['CRM activo', 'Baja adopción', 'Sin métricas claras'],
    },
  ];

  const testimonials = [
    {
      name: 'Marcela R.',
      role: 'Gerente Comercial',
      company: 'Agencia de viajes corporativos',
      text: 'En 48 horas teníamos claridad sobre algo que llevábamos 2 años tratando de resolver. El mapa de oportunidades fue revelador. No esperábamos tanto detalle en un diagnóstico gratuito.',
      stars: 5,
    },
    {
      name: 'Andrés T.',
      role: 'Director de Operaciones',
      company: 'Empresa de servicios jurídicos',
      text: 'Pensé que sería algo genérico, pero analizaron nuestra operación real. El benchmark competitivo nos mostró que estábamos 40% por debajo del estándar en tiempo de respuesta a leads.',
      stars: 5,
    },
    {
      name: 'Carolina M.',
      role: 'Socia fundadora',
      company: 'Consultora de recursos humanos',
      text: 'La llamada de 30 minutos con el equipo fue suficiente para definir nuestro roadmap del próximo trimestre. Arrancamos el diagnóstico sin expectativas y salimos con un plan.',
      stars: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d4f] to-[#0a2342]" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00bfa5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1d70a2]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#1d70a2]/5 rounded-full blur-3xl pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00bfa5]/15 border border-[#00bfa5]/30 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#00bfa5]" />
              <span className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
                Gratis · Sin compromiso · Resultados en 48 horas
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
              Tu diagnóstico gratuito{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                en 48 horas
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#e0e0e0] max-w-2xl mx-auto leading-relaxed">
              Analizamos tu operación comercial y te entregamos un informe escrito con
              hallazgos reales, oportunidades priorizadas y una llamada de 30 minutos
              con nuestro equipo. Sin costo. Sin relleno.
            </p>

            {/* Value props inline */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#e0e0e0]/80">
              {[
                { icon: Clock, text: 'Resultados en 48 h' },
                { icon: Shield, text: 'Sin costo, sin compromisos' },
                { icon: FileText, text: '5 entregables concretos' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-[#00bfa5]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
              <Button
                onClick={handleWhatsAppClick}
                className="px-8 py-4 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-lg transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:shadow-[#00bfa5]/40 hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Solicitar por WhatsApp
              </Button>
              <a
                href="#formulario"
                className="px-8 py-4 border border-[#1d70a2]/50 hover:border-[#00bfa5]/60 text-[#e0e0e0] hover:text-white rounded-xl font-poppins font-semibold text-lg transition-all duration-300 flex items-center gap-2"
              >
                Completar formulario
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <p className="text-[#e0e0e0]/50 text-xs">
              Para dueños y gerentes de empresas de servicios · Colombia y LATAM
            </p>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Lo que incluye
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              5 entregables concretos,{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                no consejos genéricos
              </span>
            </h2>
            <p className="text-[#e0e0e0] text-lg leading-relaxed">
              Cada diagnóstico se construye sobre tu caso real. No usamos plantillas ni
              respuestas automáticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300 group ${
                  i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#00bfa5]/20 group-hover:border-[#00bfa5]/30 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-[#00bfa5]" />
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-[#00bfa5] font-poppins font-bold text-sm opacity-60">
                    0{i + 1}
                  </span>
                  <h3 className="font-poppins font-bold text-white text-lg leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-24 bg-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Proceso
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
              Tres pasos. Sin fricción.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/3 right-1/3 h-px bg-gradient-to-r from-[#1d70a2]/40 via-[#00bfa5]/60 to-[#1d70a2]/40" />

            {steps.map((step, i) => (
              <div key={i} className="relative text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-[#1d70a2]/30 to-[#00bfa5]/20 border border-[#00bfa5]/40 rounded-full flex items-center justify-center mx-auto relative z-10">
                  <span className="font-poppins font-black text-2xl text-[#00bfa5]">
                    {step.num}
                  </span>
                </div>
                <div className="inline-block px-3 py-1 bg-[#00bfa5]/10 border border-[#00bfa5]/25 rounded-full">
                  <span className="text-[#00bfa5] text-xs font-medium">{step.detail}</span>
                </div>
                <h3 className="font-poppins font-bold text-white text-xl">{step.title}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0d2d4f] to-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              ¿Para quién es?
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
              Diseñado para empresas que reconocen{' '}
              <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                esta situación
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {profiles.map((profile, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-[#1d70a2]/20 border border-[#1d70a2]/30 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#00bfa5]/20 group-hover:border-[#00bfa5]/30 transition-all duration-300">
                  <profile.icon className="w-7 h-7 text-[#00bfa5]" />
                </div>
                <h3 className="font-poppins font-bold text-white text-xl mb-3">
                  {profile.title}
                </h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed mb-5">{profile.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {profile.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="text-xs px-2 py-1 bg-[#1d70a2]/20 border border-[#1d70a2]/30 text-[#e0e0e0]/80 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-[#0a2342]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-4 max-w-3xl mx-auto">
            <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
              Casos reales
            </p>
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white">
              Lo que dicen quienes ya lo hicieron
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#0d2d4f] to-[#0a2342] border border-[#1d70a2]/30 rounded-xl p-6 hover:border-[#00bfa5]/40 transition-all duration-300 flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-[#00bfa5] fill-[#00bfa5]" />
                  ))}
                </div>
                <p className="text-[#e0e0e0] text-sm leading-relaxed flex-grow mb-5">
                  "{t.text}"
                </p>
                <div className="border-t border-[#1d70a2]/20 pt-4">
                  <p className="font-poppins font-semibold text-white text-sm">{t.name}</p>
                  <p className="text-[#00bfa5] text-xs">{t.role}</p>
                  <p className="text-[#e0e0e0]/50 text-xs">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + CTA */}
      <section id="formulario" className="py-16 sm:py-24 bg-gradient-to-b from-[#0a2342] to-[#0d2d4f]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: value summary */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-[#00bfa5] text-xs font-lato font-medium tracking-widest uppercase">
                  Solicita tu diagnóstico
                </p>
                <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-white leading-tight">
                  Empieza hoy.{' '}
                  <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">
                    Resultados en 48 horas.
                  </span>
                </h2>
                <p className="text-[#e0e0e0] leading-relaxed">
                  Completa el formulario o escríbenos directamente por WhatsApp.
                  Nuestro equipo analizará tu caso y te entregará los 5 entregables
                  sin ningún costo.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  'Informe escrito de hallazgos',
                  'Mapa de oportunidades',
                  'Recomendaciones priorizadas',
                  'Benchmark competitivo',
                  'Llamada de 30 minutos con el equipo',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00bfa5] flex-shrink-0" />
                    <span className="text-[#e0e0e0] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 p-4 bg-[#00bfa5]/10 border border-[#00bfa5]/25 rounded-xl">
                <Shield className="w-8 h-8 text-[#00bfa5] flex-shrink-0" />
                <p className="text-[#e0e0e0] text-sm leading-relaxed">
                  <strong className="text-white">Sin letra pequeña.</strong> Este diagnóstico
                  es completamente gratuito. No te pediremos tarjeta de crédito ni
                  te obligaremos a contratar nada.
                </p>
              </div>

              <Button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-8 py-4 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-lg transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:scale-105 flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Prefiero WhatsApp directo
              </Button>
            </div>

            {/* Right: form */}
            <div className="bg-gradient-to-br from-[#0a2342] to-[#0d2d4f] border border-[#1d70a2]/30 rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center space-y-4 py-8">
                  <div className="w-16 h-16 bg-[#00bfa5]/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8 text-[#00bfa5]" />
                  </div>
                  <h3 className="font-poppins font-bold text-white text-xl">
                    ¡Listo! Nos vemos en WhatsApp
                  </h3>
                  <p className="text-[#e0e0e0] text-sm leading-relaxed">
                    Completamos la conversación por WhatsApp. En máximo 48 horas
                    tendrás tu diagnóstico.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <h3 className="font-poppins font-bold text-white text-xl mb-6">
                    Formulario de diagnóstico
                  </h3>

                  {[
                    { id: 'name', label: 'Tu nombre', placeholder: 'Juan García', type: 'text' },
                    { id: 'email', label: 'Correo electrónico', placeholder: 'juan@empresa.com', type: 'email' },
                    { id: 'company', label: 'Empresa', placeholder: 'Nombre de tu empresa', type: 'text' },
                  ].map((field) => (
                    <div key={field.id} className="space-y-1.5">
                      <label
                        htmlFor={field.id}
                        className="block text-[#e0e0e0] text-sm font-medium"
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        required
                        placeholder={field.placeholder}
                        value={(formData as any)[field.id]}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))
                        }
                        className="w-full px-4 py-3 bg-[#0d2d4f]/60 border border-[#1d70a2]/30 rounded-lg text-white placeholder-[#e0e0e0]/40 text-sm focus:outline-none focus:border-[#00bfa5]/60 transition-colors"
                      />
                    </div>
                  ))}

                  <div className="space-y-1.5">
                    <label htmlFor="challenge" className="block text-[#e0e0e0] text-sm font-medium">
                      ¿Cuál es tu mayor reto hoy?
                    </label>
                    <textarea
                      id="challenge"
                      required
                      rows={3}
                      placeholder="Ej: Tenemos muchos leads pero pocos cierran. No sabemos por qué..."
                      value={formData.challenge}
                      onChange={(e) =>
                        setFormData((prev) => ({ ...prev, challenge: e.target.value }))
                      }
                      className="w-full px-4 py-3 bg-[#0d2d4f]/60 border border-[#1d70a2]/30 rounded-lg text-white placeholder-[#e0e0e0]/40 text-sm focus:outline-none focus:border-[#00bfa5]/60 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full py-4 bg-[#00bfa5] hover:bg-[#00a693] text-white rounded-xl font-poppins font-bold text-base transition-all duration-300 shadow-lg shadow-[#00bfa5]/25 hover:scale-[1.02] flex items-center justify-center gap-3"
                  >
                    <ArrowRight className="w-5 h-5" />
                    Solicitar diagnóstico gratuito
                  </Button>

                  <p className="text-[#e0e0e0]/40 text-xs text-center">
                    Te responderemos por WhatsApp en las próximas horas.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA bar */}
      <section className="py-10 bg-gradient-to-r from-[#1d70a2] to-[#00bfa5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 max-w-5xl mx-auto">
            <div>
              <p className="font-poppins font-bold text-white text-xl">
                Diagnóstico gratuito · 48 horas · Sin compromiso
              </p>
              <p className="text-white/80 text-sm mt-1">
                Más de 50 empresas ya conocen su situación real con Sixteam.
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

export default DiagnosticoGratis;
