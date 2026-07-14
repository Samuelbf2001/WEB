import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Headphones, Brain, Bot, CheckCircle, Zap, Clock, Users, ArrowRight, Wrench } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import SchemaOrg from '@/components/SchemaOrg';

const Servicios = () => {
  useSEO({
    title: "Servicios de CRM, IA y Automatización — Sixteam.pro",
    description: "Implementación de CRM, chatbots IA para WhatsApp, automatizaciones y RevOps. Conoce todos nuestros servicios para transformar tu operación comercial en Colombia.",
    canonical: "https://sixteam.pro/servicios",
    ogUrl: "https://sixteam.pro/servicios",
  });

  const handleWhatsAppClick = (message: string = 'Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Sixteam.pro') => {
    window.open(`https://wa.me/+573004188522?text=${message}`, '_blank');
  };

  const services = [
    {
      icon: Target,
      color: 'from-blue-500 to-blue-700',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      tag: 'Ventas',
      title: 'Implementación Para Ventas',
      price: 'Desde $1,500 USD',
      time: '4 semanas',
      description: 'Implementamos tu CRM de ventas con pipelines visuales, seguimiento de leads, automatización de tareas y reportería en tiempo real. Tu equipo comercial cierra más oportunidades con menos esfuerzo.',
      deliverables: [
        'Pipeline de ventas configurado a tu proceso',
        'Automatización de seguimientos y tareas',
        'Integración con WhatsApp Business',
        'Reportes de conversión y métricas de ventas',
        'Capacitación al equipo comercial',
        'Soporte post-implementación 30 días',
      ],
      waMessage: 'Hola%2C%20me%20interesa%20el%20servicio%20de%20CRM%20para%20Ventas',
      path: '/servicios/crm-ventas',
    },
    {
      icon: Headphones,
      color: 'from-teal-500 to-teal-700',
      iconColor: 'text-teal-400',
      borderColor: 'border-teal-500/30',
      tag: 'Atención',
      title: 'Implementaciones Para Servicio',
      price: 'Desde $1,500 USD',
      time: '4 semanas',
      description: 'Centraliza todos los tickets, conversaciones y solicitudes en un solo lugar. Reduce tiempos de respuesta, mejora la satisfacción del cliente y automatiza flujos de atención.',
      deliverables: [
        'Bandeja unificada de conversaciones',
        'Sistema de tickets y escalaciones',
        'Respuestas automáticas y templates',
        'Integración multicanal (WhatsApp, email, chat)',
        'Encuestas de satisfacción automatizadas',
        'Dashboard de métricas de servicio',
      ],
      waMessage: 'Hola%2C%20me%20interesa%20el%20servicio%20de%20CRM%20para%20Atenci%C3%B3n%20al%20Cliente',
      path: '/servicios/crm-atencion',
    },
    {
      icon: Brain,
      color: 'from-blue-500 to-blue-700',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      tag: 'Marketing',
      title: 'Implementación Para Marketing',
      price: 'Desde $1,500 USD',
      time: '4 semanas',
      description: 'Gestiona campañas multicanal, segmenta audiencias con IA, automatiza secuencias de nurturing y mide el ROI de cada acción directamente en el CRM.',
      deliverables: [
        'Segmentación avanzada de contactos',
        'Flujos de nurturing automatizados',
        'Campañas de email, SMS y WhatsApp',
        'Landing pages y formularios integrados',
        'Seguimiento de fuentes de leads',
        'Reportes de ROI por campaña',
      ],
      waMessage: 'Hola%2C%20me%20interesa%20el%20servicio%20de%20CRM%20para%20Marketing',
      path: '/servicios/crm-marketing',
    },
    {
      icon: Bot,
      color: 'from-green-500 to-teal-600',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/30',
      tag: 'IA',
      title: 'Implementación Agentes IA',
      price: 'Desde $1,500 USD',
      time: '2–3 semanas',
      description: 'Desplegamos tu agente de inteligencia artificial en WhatsApp Business: responde 24/7, califica leads, agenda citas y actualiza el CRM automáticamente, sin intervención humana.',
      deliverables: [
        'Agente IA conversacional personalizado',
        'Entrenamiento con tu base de conocimiento',
        'Calificación automática de leads',
        'Agendamiento de citas integrado',
        'Escalación a humano cuando se requiera',
        'Operación mensual disponible dentro de Ops',
      ],
      waMessage: 'Hola%2C%20me%20interesa%20el%20servicio%20de%20Chatbot%20IA%20para%20WhatsApp',
      path: '/servicios/chatbot-ia',
    },
    {
      icon: Wrench,
      color: 'from-[#1d70a2] to-[#0a2342]',
      iconColor: 'text-[#00bfa5]',
      borderColor: 'border-[#1d70a2]/40',
      tag: 'RevOps',
      title: 'Tu equipo de RevOps externo',
      price: 'promo desde $200 USD/mes',
      time: 'Mensual',
      description: 'Sixteam opera tu tecnología de revenue mes a mes — como si fuera tu propio equipo interno. CRM, automatizaciones y procesos alineados para que ventas, marketing y servicio trabajen como uno solo.',
      deliverables: [
        'Operación mensual de CRM y automatizaciones',
        'Alineación de ventas, marketing y servicio',
        'SLA de 4 horas en días hábiles',
        'Mejoras proactivas y roadmap de operaciones',
        'Reportería y visibilidad del ciclo de revenue',
        'Reunión mensual de alineación estratégica',
      ],
      waMessage: 'Hola%2C%20quiero%20conocer%20c%C3%B3mo%20Sixteam%20puede%20ser%20mi%20equipo%20RevOps%20externo',
      path: '/servicios/soporte-operaciones',
    },
  ];

  const additionalServices = [
    {
      icon: Zap,
      title: 'Integraciones entre plataformas',
      price: 'Desde $1,500 USD',
      description: 'Conectamos tu CRM con ERP, e-commerce, herramientas de marketing y cualquier sistema que uses. Usamos Make, n8n y Zapier para automatizaciones complejas.',
    },
    {
      icon: Clock,
      title: 'Soporte y operación mensual',
      price: 'promo desde $200 USD/mes',
      description: 'Mantenimiento, actualizaciones, ajustes de flujos y soporte técnico continuo. Tu CRM siempre funcionando de manera óptima con un equipo especializado.',
    },
    {
      icon: Users,
      title: 'Implementaciones a medida',
      price: 'Según alcance',
      description: 'Desarrollos personalizados, configuraciones avanzadas e implementaciones que van más allá de los paquetes estándar. Cotizamos según tu proyecto específico.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Servicios de Sixteam.pro",
        "description": "Servicios de CRM, automatización e IA para empresas en Colombia y Latinoamérica",
        "itemListElement": [
          {"@type": "ListItem", "position": 1, "name": "CRM de Ventas", "url": "https://sixteam.pro/servicios/crm-ventas"},
          {"@type": "ListItem", "position": 2, "name": "CRM de Atención al Cliente", "url": "https://sixteam.pro/servicios/crm-atencion"},
          {"@type": "ListItem", "position": 3, "name": "CRM de Marketing", "url": "https://sixteam.pro/servicios/crm-marketing"},
          {"@type": "ListItem", "position": 4, "name": "Chatbot con IA para WhatsApp", "url": "https://sixteam.pro/servicios/chatbot-ia"},
          {"@type": "ListItem", "position": 5, "name": "Soporte y Operaciones RevOps", "url": "https://sixteam.pro/servicios/soporte-operaciones"}
        ]
      }} />
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-teal-300 font-medium text-sm tracking-wide">Portafolio de Servicios</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Soluciones reales para
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                negocios reales
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Implementamos CRM, automatizaciones e inteligencia artificial adaptados a los procesos y objetivos específicos de tu empresa.
            </p>
            <Button
              onClick={() => handleWhatsAppClick()}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Solicita una Consultoría Gratuita
            </Button>
          </div>
        </div>
      </section>

      {/* Main services */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Paquetes de Implementación
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proyectos con alcance definido, precios claros y resultados medibles desde la primera semana.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`overflow-hidden border-2 ${service.borderColor} shadow-lg hover:shadow-xl transition-all duration-300`}>
                <div className={`bg-gradient-to-r ${service.color} p-6 sm:p-8`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-white/70 text-xs font-bold uppercase tracking-widest">{service.tag}</span>
                        <h3 className="text-white text-2xl sm:text-3xl font-bold">{service.title}</h3>
                      </div>
                    </div>
                    <div className="flex gap-4 sm:text-right">
                      <div className="bg-white/15 rounded-xl px-4 py-2">
                        <p className="text-white/70 text-xs">Inversión</p>
                        <p className="text-white font-bold text-sm sm:text-base">{service.price}</p>
                      </div>
                      <div className="bg-white/15 rounded-xl px-4 py-2">
                        <p className="text-white/70 text-xs">Tiempo</p>
                        <p className="text-white font-bold text-sm sm:text-base">{service.time}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">{service.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <Button
                          onClick={() => handleWhatsAppClick(service.waMessage)}
                          className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Cotizar este servicio
                        </Button>
                        <Link
                          to={service.path}
                          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:border-blue-400 hover:text-blue-600 transition-all text-sm"
                        >
                          Ver detalles
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4">Entregables incluidos:</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 ${service.iconColor} flex-shrink-0 mt-0.5`} />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional services */}
      <section className="relative py-16 sm:py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Servicios Adicionales y Recurrentes
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Servicios de soporte, integraciones y operación para mantener tu ecosistema siempre optimizado.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-600/30 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">{service.title}</h3>
                <p className="text-teal-400 font-bold text-sm mb-3">{service.price}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Cómo trabajamos contigo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso estructurado que garantiza resultados desde el primer día.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { step: '01', title: 'Diagnóstico', desc: 'Analizamos tus procesos, herramientas actuales y objetivos para definir la mejor solución.' },
              { step: '02', title: 'Propuesta', desc: 'Presentamos un plan detallado con alcance, tiempos, entregables y presupuesto claro.' },
              { step: '03', title: 'Implementación', desc: 'Configuramos, integramos y probamos todo. Tu equipo recibe capacitación completa.' },
              { step: '04', title: 'Soporte', desc: 'Acompañamiento post-implementación para garantizar la adopción y los resultados.' },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-[#0a2342] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            ¿Listo para transformar tu operación?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Hablemos de tu proyecto. La primera consultoría es sin costo y te damos un diagnóstico claro de lo que necesitas.
          </p>
          <Button
            onClick={() => handleWhatsAppClick()}
            className="px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hablemos en WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;
