import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, TrendingUp, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useSEO } from '@/hooks/useSEO';

const CasosExito = () => {
  useSEO({
    title: "Casos de Éxito — Sixteam.pro | Resultados Reales en Colombia",
    description: "Empresas que transformaron su operación con Sixteam.pro. CRM, automatizaciones e IA con resultados medibles: +65% conversión, -80% tiempo de respuesta.",
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20casos%20de%20%C3%A9xito%20de%20Sixteam.pro', '_blank');
  };

  const casosExito = [
    {
      cliente: 'Student Travel Center',
      sector: 'Agencia Líder en Viajes y Turismo Académico en Colombia',
      challenge: 'Proceso de ventas desorganizado y falta de seguimiento efectivo a clientes potenciales, lo que resultaba en pérdida de oportunidades de negocio y bajo retorno de inversión en marketing.',
      solution: 'Realizamos un diagnóstico completo de sus procesos de ventas, implementamos un CRM personalizado para el sector de viajes académicos, y automatizamos el seguimiento por WhatsApp. Incluimos análisis detallado, implementación de CRM y automatizaciones, y soporte continuo con capacitación.',
      results: [
        'Aumento del 35% en ventas en 6 meses',
        'Reducción del 60% del tiempo en tareas manuales',
        'Mejora del 85% en la tasa de respuesta a clientes',
        'Incremento del 40% en conversión de leads',
      ],
      metrics: [
        { value: '+35%', label: 'Aumento en Ventas' },
        { value: '-60%', label: 'Reducción de Tiempo' },
        { value: '+85%', label: 'Mejora en Respuesta' },
      ],
      color: 'from-blue-600 to-[#0a2342]',
    },
    {
      cliente: 'TechInnovate Solutions',
      sector: 'Empresa de Desarrollo de Software B2B',
      challenge: 'Dificultades para gestionar múltiples proyectos simultáneamente y comunicación ineficiente con clientes, generando retrasos en entregas e insatisfacción.',
      solution: 'Implementamos un sistema integral de gestión de proyectos con CRM especializado, desarrollamos un portal personalizado para clientes y automatizamos reportes de progreso. El proceso incluyó análisis de workflows, configuración del CRM y soporte continuo.',
      results: [
        'Reducción del 45% en tiempo de gestión de proyectos',
        'Aumento del 50% en satisfacción del cliente',
        'Mejora del 30% en cumplimiento de tiempos de entrega',
        'Incremento del 25% en proyectos gestionados simultáneamente',
      ],
      metrics: [
        { value: '+45%', label: 'Mejora en Eficiencia' },
        { value: '+50%', label: 'Satisfacción Cliente' },
        { value: '+30%', label: 'Cumplimiento Entregas' },
      ],
      color: 'from-teal-600 to-[#0a2342]',
    },
    {
      cliente: 'RetailMax Colombia',
      sector: 'Cadena de Retail con 15 Tiendas Físicas',
      challenge: 'Falta de integración entre ventas online y offline, inventario desactualizado en tiempo real, y dificultades para medir el ROI de campañas de marketing digital.',
      solution: 'Desarrollamos una solución integral que conecta todas las tiendas con una plataforma centralizada, implementamos un sistema de inventario en tiempo real y configuramos dashboards analíticos personalizados.',
      results: [
        'Unificación del 100% de inventario en tiempo real',
        'Aumento del 28% en ventas cruzadas online-offline',
        'Reducción del 70% en errores de inventario',
        'Mejora del 90% en visibilidad de métricas de negocio',
      ],
      metrics: [
        { value: '100%', label: 'Integración Lograda' },
        { value: '+28%', label: 'Aumento en Ventas' },
        { value: '-70%', label: 'Reducción Errores' },
      ],
      color: 'from-blue-600 to-[#0a2342]',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-lato">
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
              <span className="text-teal-300 font-medium text-sm tracking-wide">Resultados Reales</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Casos de
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Éxito
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Historias reales de transformación digital que generaron resultados medibles y crecimiento sostenible para empresas colombianas.
            </p>
          </div>
        </div>
      </section>

      {/* Estadísticas generales */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, value: '+35%', label: 'Promedio de aumento en ventas', color: 'text-teal-600' },
              { icon: Clock, value: '-55%', label: 'Reducción en tiempo de procesos', color: 'text-blue-600' },
              { icon: Users, value: '100%', label: 'Clientes satisfechos', color: 'text-[#0a2342]' },
            ].map((stat, i) => (
              <Card key={i} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos detallados */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 max-w-5xl mx-auto">
            {casosExito.map((caso, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-3 p-8">
                    <div className="mb-6">
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{caso.cliente}</h2>
                      <p className="text-lg text-blue-600 font-medium">{caso.sector}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        El Desafío
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{caso.challenge}</p>
                    </div>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        La Solución Sixteam.pro
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{caso.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        Los Resultados
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {caso.results.map((result, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={`lg:col-span-2 bg-gradient-to-br ${caso.color} p-8 text-white`}>
                    <h3 className="text-xl font-semibold mb-6">Métricas Clave</h3>
                    <div className="space-y-4">
                      {caso.metrics.map((metric, i) => (
                        <div key={i} className="text-center bg-white/10 rounded-xl p-4 border border-white/15">
                          <div className="text-3xl font-bold mb-1">{metric.value}</div>
                          <div className="text-sm text-white/80">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonio */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 sm:p-14 text-center">
            <div className="text-6xl text-teal-500 font-serif mb-6 leading-none">"</div>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
              Sixteam.pro no solo implementó tecnología, transformó completamente nuestra forma de hacer negocio. Su enfoque integral y soporte continuo han sido clave para nuestro crecimiento sostenido.
            </p>
            <div>
              <p className="font-bold text-gray-900 text-lg">María Elena Rodríguez</p>
              <p className="text-gray-500">Directora Comercial, Student Travel Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Tu empresa puede ser el próximo caso de éxito
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cada proyecto es único, pero los resultados siempre son tangibles. Conversemos sobre cómo podemos transformar tu negocio.
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Conversemos sobre tu Proyecto
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CasosExito;
