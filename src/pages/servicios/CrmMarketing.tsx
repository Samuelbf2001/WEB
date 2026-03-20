import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Brain, CheckCircle, ArrowLeft, Clock, DollarSign, BarChart3, Users, Zap, TrendingUp, Target, Mail } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';

const CrmMarketing = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20el%20servicio%20de%20CRM%20para%20Marketing', '_blank');
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      <Header />

      {/* Hero */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden py-20 sm:py-28 lg:py-36">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/servicios" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Volver a Servicios
          </Link>
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full">
              <Brain className="w-4 h-4 text-blue-400" />
              <span className="text-blue-300 font-medium text-sm">CRM · Marketing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              CRM para
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Equipos de Marketing
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Gestiona campañas multicanal, segmenta audiencias con IA, automatiza secuencias de nurturing y mide el ROI de cada acción directamente en el CRM.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <DollarSign className="w-5 h-5 text-teal-400" />
                <span className="text-white font-semibold">Desde $1.500.000 COP</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-4 py-2">
                <Clock className="w-5 h-5 text-blue-400" />
                <span className="text-white font-semibold">4 semanas</span>
              </div>
            </div>
            <Button
              onClick={handleWhatsAppClick}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">¿Qué incluye la implementación?</h2>
              <p className="text-xl text-gray-600">Herramientas de marketing integradas al CRM para que cada campaña genere resultados medibles.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Target, title: 'Segmentación con IA', desc: 'Segmentación inteligente de contactos por comportamiento, historial de compra, interacciones y datos demográficos.' },
                { icon: Zap, title: 'Flujos de nurturing', desc: 'Secuencias automatizadas de email y WhatsApp adaptadas al estado del lead en el funnel de conversión.' },
                { icon: Mail, title: 'Campañas multicanal', desc: 'Lanza campañas de email, SMS y WhatsApp desde el CRM con seguimiento de apertura, clics y conversiones.' },
                { icon: BarChart3, title: 'Landing pages integradas', desc: 'Formularios y landing pages conectadas al CRM para capturar leads directamente en tus campañas.' },
                { icon: TrendingUp, title: 'Seguimiento de fuentes', desc: 'UTMs, atribución multicanal y seguimiento de cada lead desde el primer punto de contacto hasta la venta.' },
                { icon: Users, title: 'Reportes de ROI', desc: 'Dashboard con inversión vs. ingresos generados por campaña, costo por lead y costo por cliente adquirido.' },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-10 space-y-3">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Cómo funciona el proceso</h2>
        <p className="text-lg text-gray-600">4 semanas de implementación estructurada y sin sorpresas</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { step: '01', title: 'Diagnóstico', desc: 'Auditamos tus canales de marketing actuales, fuentes de leads y herramientas existentes.' },
          { step: '02', title: 'Configuración', desc: 'Construimos segmentos, flujos de nurturing y campañas adaptadas a tu proceso de conversión.' },
          { step: '03', title: 'Activación', desc: 'Lanzamos campañas piloto, conectamos fuentes de leads y validamos la atribución de conversiones.' },
          { step: '04', title: 'Capacitación', desc: 'Entrenamos al equipo de marketing y documentamos todos los flujos y campañas configuradas.' },
        ].map((item, i) => (
          <div key={i} className="text-center p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
            <div className="w-14 h-14 bg-[#0a2342] rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">{item.step}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Deliverables + Pricing */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Entregables incluidos</h2>
              <ul className="space-y-4">
                {[
                  'Segmentación avanzada de contactos configurada',
                  'Flujos de nurturing automatizados (mín. 3 secuencias)',
                  'Campañas de email, SMS y WhatsApp activas',
                  'Landing pages y formularios integrados',
                  'Seguimiento de fuentes de leads configurado',
                  'Reportes de ROI por campaña',
                  'Capacitación al equipo de marketing',
                  'Soporte post-implementación durante 30 días',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#0a2342] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Inversión</h3>
              <div className="text-4xl font-bold text-blue-400 mb-1">$1.500.000 COP</div>
              <p className="text-gray-300 text-sm mb-6">Pago único por implementación completa</p>
              <ul className="space-y-3 mb-8">
                {['Sin costos ocultos', 'Entregable en 4 semanas', '30 días de soporte incluido', 'Capacitación sin límite de usuarios'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-base transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Hablar con un asesor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-10 border border-gray-100">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <div className="w-12 h-12 bg-[#0a2342] rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-6 h-6 text-teal-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
          </div>
          <div>
            <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
              "Antes lanzábamos campañas sin saber realmente cuáles generaban ventas. Ahora tenemos atribución completa y el CRM de marketing nos muestra el ROI exacto de cada canal."
            </p>
            <div>
              <p className="font-bold text-gray-900">Laura Martínez</p>
              <p className="text-sm text-gray-500">Directora de Marketing · RetailMax Colombia</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-3 gap-6 text-center">
          {[
            { value: '+45%', label: 'Tasa de conversión de leads' },
            { value: '-30%', label: 'Costo por lead adquirido' },
            { value: '3x', label: 'ROI sobre inversión en campañas' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-[#0a2342]">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Stats */}
      <section className="relative py-16 sm:py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Resultados que puedes esperar</h2>
            <p className="text-xl text-gray-300 mb-12">Basados en implementaciones realizadas en empresas similares a la tuya</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { num: '+45%', label: 'Aumento en tasa de conversión de leads', color: 'text-blue-400' },
                { num: '-30%', label: 'Reducción en costo por lead adquirido', color: 'text-teal-400' },
                { num: '3x', label: 'Mayor retorno sobre inversión en campañas', color: 'text-blue-400' },
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 border border-white/15 rounded-2xl p-8">
                  <div className={`text-5xl font-bold ${stat.color} mb-3`}>{stat.num}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">¿Listo para maximizar el ROI de tu marketing?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">La primera consultoría es sin costo. Te mostramos exactamente cómo tu marketing puede rendir más.</p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Hablar por WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrmMarketing;
