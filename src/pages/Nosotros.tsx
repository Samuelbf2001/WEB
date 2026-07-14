import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Eye, Award, Users, Briefcase, CheckCircle2, TrendingUp, Zap, ChevronDown } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useSEO } from '@/hooks/useSEO';
import SchemaOrg from '@/components/SchemaOrg';

const Nosotros = () => {
  useSEO({
    title: "Nosotros — Sixteam.pro | Equipo de CRM, IA y RevOps",
    description: "Somos el equipo detrás de Sixteam.pro. Expertos en CRM, automatización e inteligencia artificial para empresas de servicios en Colombia y Latinoamérica.",
    canonical: "https://sixteam.pro/nosotros",
    ogUrl: "https://sixteam.pro/nosotros",
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20equipo%20de%20Sixteam.pro', '_blank');
  };

  const teamMembers = [
    {
      name: 'Samuel Burgos',
      role: 'Director General',
      expertise: 'Administrador de Empresas y Experto en RevOps',
      description: 'Con más de 8 años de experiencia en transformación digital y optimización de procesos de revenue operations, Samuel lidera la estrategia general de Sixteam.pro. Su enfoque consultivo y visión estratégica han ayudado a decenas de empresas a alcanzar sus objetivos de crecimiento.',
      specialties: ['Revenue Operations', 'Estrategia Digital', 'CRM Implementation', 'Business Intelligence'],
      gradient: 'from-blue-600 to-[#0a2342]',
      accentColor: '#2dd4bf',
      initials: 'SB',
    },
    {
      name: 'Ernesto Hernández',
      role: 'Director de Procesos',
      expertise: 'Ingeniero Industrial y Experto en Diseño de Procesos',
      description: 'Ernesto aporta una sólida formación en ingeniería industrial y más de 6 años especializándose en optimización de procesos y gestión de proyectos. Su metodología estructurada garantiza implementaciones exitosas y resultados medibles en cada proyecto.',
      specialties: ['Diseño de Procesos', 'Gestión de Proyectos', 'Automatización', 'Optimización Operacional'],
      gradient: 'from-teal-600 to-teal-900',
      accentColor: '#60a5fa',
      initials: 'EH',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Orientación a Resultados',
      description: 'Cada proyecto debe generar valor medible y tangible para nuestros clientes.',
      color: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-600',
    },
    {
      icon: Users,
      title: 'Enfoque Consultivo',
      description: 'Escuchamos, entendemos y adaptamos nuestras soluciones a cada realidad empresarial.',
      color: 'bg-teal-50 border-teal-200',
      iconBg: 'bg-teal-600',
    },
    {
      icon: Award,
      title: 'Excelencia Técnica',
      description: 'Utilizamos las mejores prácticas y tecnologías más avanzadas del mercado.',
      color: 'bg-blue-50 border-blue-200',
      iconBg: 'bg-blue-600',
    },
    {
      icon: Briefcase,
      title: 'Compromiso a Largo Plazo',
      description: 'Construimos relaciones duraderas y acompañamos el crecimiento de nuestros clientes.',
      color: 'bg-teal-50 border-teal-200',
      iconBg: 'bg-teal-600',
    },
  ];

  const stats = [
    { num: '50+', label: 'Proyectos completados', icon: CheckCircle2, color: 'text-blue-400' },
    { num: '15+', label: 'Sectores atendidos', icon: TrendingUp, color: 'text-teal-400' },
    { num: '98%', label: 'Satisfacción de clientes', icon: Zap, color: 'text-blue-400' },
  ];

  const faqs = [
    {
      q: '¿Qué hace Sixteam.pro?',
      a: 'Sixteam.pro implementa CRM, automatizaciones e inteligencia artificial para empresas en Colombia y Latinoamérica. Ayudamos a las empresas a crecer usando tecnología como GoHighLevel, chatbots con IA y estrategias RevOps para aumentar ventas y mejorar la operación comercial.',
    },
    {
      q: '¿En qué países trabajan?',
      a: 'Operamos principalmente en Colombia y atendemos clientes en toda Latinoamérica — México, Argentina, Chile, Perú y más. Trabajamos 100% remoto con empresas de cualquier país hispanohablante.',
    },
    {
      q: '¿Cuánto cuesta trabajar con Sixteam.pro?',
      a: 'Nuestros planes Sixteam Ops comienzan con promo desde $200 USD/mes (Esencial), $499 USD/mes (Integral) y desde $1,200 USD/mes (Total). Las implementaciones personalizadas se cotizan como proyectos Transform desde $1,500 USD.',
    },
    {
      q: '¿Qué es GoHighLevel y por qué lo usan?',
      a: 'GoHighLevel es una plataforma todo-en-uno que centraliza CRM, email marketing, SMS, pipelines de ventas, chatbots y automatizaciones. Somos especialistas certificados porque es la herramienta más completa y escalable para empresas de servicios en Latinoamérica.',
    },
    {
      q: '¿En cuánto tiempo ven resultados?',
      a: 'La mayoría de nuestros clientes comienza a ver resultados en los primeros 30-60 días: leads mejor calificados, respuesta más rápida, y procesos comerciales más ordenados. Los resultados completos de crecimiento se consolidan entre 3 y 6 meses.',
    },
    {
      q: '¿Necesito conocimientos técnicos para usar el CRM?',
      a: 'No. Nos encargamos de toda la configuración técnica y te entrenamos a ti y a tu equipo. Nuestro soporte continuo garantiza que siempre tengas ayuda cuando la necesites.',
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (i: number) => {
    setOpenFaq(prev => (prev === i ? null : i));
  };

  return (
    <div className="min-h-screen bg-white font-lato">
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Qué hace Sixteam.pro?",
            "acceptedAnswer": {"@type": "Answer", "text": "Sixteam.pro implementa CRM, automatizaciones e inteligencia artificial para empresas en Colombia y Latinoamérica. Ayudamos a empresas a crecer usando tecnología como GoHighLevel, chatbots con IA y estrategias de RevOps."}
          },
          {
            "@type": "Question",
            "name": "¿En qué países opera Sixteam.pro?",
            "acceptedAnswer": {"@type": "Answer", "text": "Sixteam.pro opera principalmente en Colombia y tiene clientes en toda Latinoamérica, incluyendo México, Argentina, Chile y Perú."}
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta implementar un CRM con Sixteam.pro?",
            "acceptedAnswer": {"@type": "Answer", "text": "Los planes Sixteam Ops comienzan con promo desde $200 USD/mes (Esencial), $499 USD/mes (Integral) y desde $1,200 USD/mes (Total). Las implementaciones personalizadas se cotizan como proyectos Transform desde $1,500 USD."}
          },
          {
            "@type": "Question",
            "name": "¿Qué es GoHighLevel y por qué lo usa Sixteam.pro?",
            "acceptedAnswer": {"@type": "Answer", "text": "GoHighLevel es una plataforma de CRM y automatización de marketing todo-en-uno. Sixteam.pro es especialista en GoHighLevel porque centraliza CRM, email marketing, SMS, chatbots, pipelines de ventas y automatizaciones en una sola plataforma optimizada para empresas latinoamericanas."}
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye el servicio de chatbot con IA de Sixteam.pro?",
            "acceptedAnswer": {"@type": "Answer", "text": "El chatbot con IA de Sixteam.pro incluye un asistente virtual entrenado con la información de tu negocio, integración con WhatsApp Business, respuestas automáticas 24/7, calificación de leads y transferencia a agentes humanos cuando sea necesario."}
          }
        ]
      }} />
      <Header />

      {/* ───────── HERO ───────── */}
      {/* Una sola sección unificada: texto + imagen sin gaps */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden">

        {/* ── FONDO: navy sólido + orbs suaves ── */}
        <div className="absolute inset-0 bg-[#0a2342]" />
        <div className="absolute inset-0 opacity-[0.055]" style={{
          backgroundImage: 'radial-gradient(circle, #00bfa5 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }} />
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,191,165,0.13) 0%, transparent 65%)' }} />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(29,112,162,0.11) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,191,165,0.08) 0%, transparent 65%)' }} />

        {/* ── ANIMACIÓN NODAL — cubre todo el ancho de la sección ── */}
        <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 1 }}>
          <svg width="100%" height="100%" viewBox="0 0 1200 750" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="nG" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#00bfa5" stopOpacity="0.85"/>
                <stop offset="100%" stopColor="#00bfa5" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="nGB" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1d70a2" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#1d70a2" stopOpacity="0"/>
              </radialGradient>
              <filter id="gFx"><feGaussianBlur stdDeviation="3.5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              <filter id="gFxS"><feGaussianBlur stdDeviation="6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
            </defs>
            {/* Líneas — distribuidas por todo el ancho */}
            <g fill="none" strokeWidth="0.7">
              <line x1="80" y1="200" x2="300" y2="120" stroke="#1d70a2"><animate attributeName="opacity" values="0.15;0.55;0.15" dur="3.2s" repeatCount="indefinite"/></line>
              <line x1="300" y1="120" x2="520" y2="200" stroke="#1d70a2"><animate attributeName="opacity" values="0.1;0.5;0.1" dur="2.8s" repeatCount="indefinite"/></line>
              <line x1="520" y1="200" x2="680" y2="350" stroke="#00bfa5"><animate attributeName="opacity" values="0.15;0.45;0.15" dur="3.5s" repeatCount="indefinite"/></line>
              <line x1="680" y1="350" x2="850" y2="200" stroke="#1d70a2"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.6s" repeatCount="indefinite"/></line>
              <line x1="850" y1="200" x2="1050" y2="280" stroke="#00bfa5"><animate attributeName="opacity" values="0.15;0.5;0.15" dur="3.1s" repeatCount="indefinite"/></line>
              <line x1="1050" y1="280" x2="1150" y2="150" stroke="#1d70a2"><animate attributeName="opacity" values="0.1;0.45;0.1" dur="2.9s" repeatCount="indefinite"/></line>
              <line x1="80" y1="200" x2="180" y2="450" stroke="#00bfa5"><animate attributeName="opacity" values="0.12;0.4;0.12" dur="3.8s" repeatCount="indefinite"/></line>
              <line x1="180" y1="450" x2="440" y2="520" stroke="#1d70a2"><animate attributeName="opacity" values="0.15;0.5;0.15" dur="2.7s" repeatCount="indefinite"/></line>
              <line x1="440" y1="520" x2="680" y2="350" stroke="#00bfa5"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="3.3s" repeatCount="indefinite"/></line>
              <line x1="680" y1="350" x2="900" y2="500" stroke="#1d70a2"><animate attributeName="opacity" values="0.12;0.45;0.12" dur="3.6s" repeatCount="indefinite"/></line>
              <line x1="900" y1="500" x2="1100" y2="550" stroke="#00bfa5"><animate attributeName="opacity" values="0.1;0.38;0.1" dur="4s" repeatCount="indefinite"/></line>
              <line x1="300" y1="120" x2="440" y2="520" stroke="#1d70a2"><animate attributeName="opacity" values="0.08;0.3;0.08" dur="4.5s" repeatCount="indefinite"/></line>
              <line x1="520" y1="200" x2="440" y2="520" stroke="#00bfa5"><animate attributeName="opacity" values="0.1;0.35;0.1" dur="3.9s" repeatCount="indefinite"/></line>
              <line x1="850" y1="200" x2="900" y2="500" stroke="#1d70a2"><animate attributeName="opacity" values="0.1;0.4;0.1" dur="2.5s" repeatCount="indefinite"/></line>
              <line x1="1050" y1="280" x2="1100" y2="550" stroke="#00bfa5"><animate attributeName="opacity" values="0.12;0.42;0.12" dur="3.4s" repeatCount="indefinite"/></line>
            </g>
            {/* Pulsos */}
            <g filter="url(#gFx)">
              <circle r="3" fill="#00bfa5"><animateMotion dur="3.2s" repeatCount="indefinite" path="M80,200 L300,120"/><animate attributeName="opacity" values="0;0.9;0" dur="3.2s" repeatCount="indefinite"/></circle>
              <circle r="2.5" fill="#1d70a2"><animateMotion dur="2.8s" repeatCount="indefinite" path="M300,120 L520,200"/><animate attributeName="opacity" values="0;0.8;0" dur="2.8s" repeatCount="indefinite"/></circle>
              <circle r="2.5" fill="#00bfa5"><animateMotion dur="3.5s" repeatCount="indefinite" path="M520,200 L680,350"/><animate attributeName="opacity" values="0;0.9;0" dur="3.5s" repeatCount="indefinite"/></circle>
              <circle r="2" fill="#1d70a2"><animateMotion dur="2.6s" repeatCount="indefinite" path="M680,350 L850,200"/><animate attributeName="opacity" values="0;0.8;0" dur="2.6s" repeatCount="indefinite"/></circle>
              <circle r="3" fill="#00bfa5"><animateMotion dur="3.1s" repeatCount="indefinite" path="M850,200 L1050,280"/><animate attributeName="opacity" values="0;0.9;0" dur="3.1s" repeatCount="indefinite"/></circle>
              <circle r="2.5" fill="#1d70a2"><animateMotion dur="2.7s" repeatCount="indefinite" path="M180,450 L440,520"/><animate attributeName="opacity" values="0;0.85;0" dur="2.7s" repeatCount="indefinite"/></circle>
              <circle r="2" fill="#00bfa5"><animateMotion dur="3.3s" repeatCount="indefinite" path="M440,520 L680,350"/><animate attributeName="opacity" values="0;0.8;0" dur="3.3s" repeatCount="indefinite"/></circle>
              <circle r="2.5" fill="#1d70a2"><animateMotion dur="3.6s" repeatCount="indefinite" path="M680,350 L900,500"/><animate attributeName="opacity" values="0;0.85;0" dur="3.6s" repeatCount="indefinite"/></circle>
            </g>
            {/* Nodos */}
            <g filter="url(#gFxS)">
              <circle cx="300" cy="120" r="16" fill="url(#nG)" opacity="0.28"><animate attributeName="r" values="16;22;16" dur="3s" repeatCount="indefinite"/></circle>
              <circle cx="300" cy="120" r="5.5" fill="#00bfa5" opacity="0.95"><animate attributeName="opacity" values="0.65;1;0.65" dur="3s" repeatCount="indefinite"/></circle>
              <circle cx="520" cy="200" r="13" fill="url(#nGB)" opacity="0.28"><animate attributeName="r" values="13;18;13" dur="2.5s" repeatCount="indefinite"/></circle>
              <circle cx="520" cy="200" r="5" fill="#1d70a2" opacity="0.95"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/></circle>
              <circle cx="680" cy="350" r="18" fill="url(#nG)" opacity="0.25"><animate attributeName="r" values="18;25;18" dur="3.8s" repeatCount="indefinite"/></circle>
              <circle cx="680" cy="350" r="6" fill="#00bfa5" opacity="0.9"><animate attributeName="opacity" values="0.6;1;0.6" dur="3.8s" repeatCount="indefinite"/></circle>
              <circle cx="850" cy="200" r="14" fill="url(#nGB)" opacity="0.28"><animate attributeName="r" values="14;20;14" dur="2.8s" repeatCount="indefinite"/></circle>
              <circle cx="850" cy="200" r="5" fill="#1d70a2" opacity="0.9"><animate attributeName="opacity" values="0.55;1;0.55" dur="2.8s" repeatCount="indefinite"/></circle>
              <circle cx="1050" cy="280" r="12" fill="url(#nG)" opacity="0.25"><animate attributeName="r" values="12;17;12" dur="3.2s" repeatCount="indefinite"/></circle>
              <circle cx="1050" cy="280" r="4.5" fill="#00bfa5" opacity="0.88"><animate attributeName="opacity" values="0.5;0.95;0.5" dur="3.2s" repeatCount="indefinite"/></circle>
              <circle cx="80" cy="200" r="10" fill="url(#nGB)" opacity="0.22"><animate attributeName="r" values="10;15;10" dur="4s" repeatCount="indefinite"/></circle>
              <circle cx="80" cy="200" r="4" fill="#1d70a2" opacity="0.85"><animate attributeName="opacity" values="0.5;0.9;0.5" dur="4s" repeatCount="indefinite"/></circle>
              <circle cx="440" cy="520" r="14" fill="url(#nG)" opacity="0.25"><animate attributeName="r" values="14;19;14" dur="2.9s" repeatCount="indefinite"/></circle>
              <circle cx="440" cy="520" r="5" fill="#00bfa5" opacity="0.9"><animate attributeName="opacity" values="0.6;1;0.6" dur="2.9s" repeatCount="indefinite"/></circle>
              <circle cx="180" cy="450" r="10" fill="url(#nGB)" opacity="0.2"><animate attributeName="r" values="10;14;10" dur="3.5s" repeatCount="indefinite"/></circle>
              <circle cx="180" cy="450" r="3.5" fill="#1d70a2" opacity="0.82"><animate attributeName="opacity" values="0.45;0.9;0.45" dur="3.5s" repeatCount="indefinite"/></circle>
              <circle cx="900" cy="500" r="13" fill="url(#nG)" opacity="0.22"><animate attributeName="r" values="13;18;13" dur="3.1s" repeatCount="indefinite"/></circle>
              <circle cx="900" cy="500" r="4.5" fill="#00bfa5" opacity="0.85"><animate attributeName="opacity" values="0.5;0.92;0.5" dur="3.1s" repeatCount="indefinite"/></circle>
              <circle cx="1100" cy="550" r="9" fill="url(#nGB)" opacity="0.18"><animate attributeName="r" values="9;13;9" dur="2.6s" repeatCount="indefinite"/></circle>
              <circle cx="1100" cy="550" r="3.5" fill="#1d70a2" opacity="0.8"><animate attributeName="opacity" values="0.4;0.88;0.4" dur="2.6s" repeatCount="indefinite"/></circle>
              <circle cx="1150" cy="150" r="8" fill="url(#nG)" opacity="0.18"><animate attributeName="r" values="8;12;8" dur="3.7s" repeatCount="indefinite"/></circle>
              <circle cx="1150" cy="150" r="3" fill="#00bfa5" opacity="0.78"><animate attributeName="opacity" values="0.4;0.85;0.4" dur="3.7s" repeatCount="indefinite"/></circle>
            </g>
          </svg>
        </div>


        {/* ── CONTENIDO ── */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative" style={{ zIndex: 4 }}>
          <div className="max-w-3xl">

            {/* Columna texto */}
            <div className="pt-20 sm:pt-24 lg:pt-32 pb-16 lg:pb-32 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1d70a2]/10 border border-[#1d70a2]/30 rounded-full mb-6 w-fit">
                <div className="w-2 h-2 bg-[#00bfa5] rounded-full animate-pulse" />
                <span className="text-[#00bfa5] font-poppins font-semibold text-sm tracking-wide">Socios Fundadores</span>
              </div>

              {/* Título */}
              <h1 className="font-poppins font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight mb-5">
                <span className="text-white">Somos </span>
                <span className="bg-gradient-to-r from-[#1d70a2] to-[#00bfa5] bg-clip-text text-transparent">Sixteam.pro</span>
              </h1>

              {/* Subtítulo con fondo para legibilidad */}
              <p className="text-base sm:text-lg text-gray-300 max-w-sm mb-8 leading-relaxed bg-[#0a2342]/75 backdrop-blur-sm px-3 py-2.5 rounded-xl w-fit">
                El equipo detrás de la transformación digital de empresas en Colombia y Latinoamérica. Expertos en CRM, RevOps e Inteligencia Artificial.
              </p>

              {/* Stats */}
              <div className="flex gap-3">
                {stats.map((stat, i) => (
                  <div key={i}
                    className="flex flex-col items-center justify-center px-4 py-5 bg-[#0a2342]/75 border border-[#1d70a2]/40 rounded-2xl backdrop-blur-sm min-w-[95px] flex-1 max-w-[130px]"
                    style={{ boxShadow: i % 2 === 0 ? '0 0 20px rgba(0,191,165,0.1)' : '0 0 20px rgba(29,112,162,0.12)' }}
                  >
                    <stat.icon className={`w-5 h-5 mb-1.5 ${i % 2 === 0 ? 'text-[#00bfa5]' : 'text-blue-400'}`} />
                    <span className="text-4xl font-poppins font-black text-white leading-none">{stat.num}</span>
                    <span className="text-[11px] text-[#e0e0e0] text-center leading-tight mt-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────── FILOSOFÍA ───────── */}
      <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #1d70a2 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#1d70a2]/8 text-[#1d70a2] text-sm font-poppins font-semibold rounded-full mb-4 border border-[#1d70a2]/15">
              Quiénes somos
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-[#0a2342] mb-4">Nuestra Filosofía</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Los principios que guían todo lo que hacemos</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

            {/* Columna izquierda — Misión + Visión */}
            <div className="flex flex-col gap-6">
              {/* Misión */}
              <div className="p-6 rounded-2xl border border-[#1d70a2]/40 hover:border-[#1d70a2]/70 transition-all duration-300 hover:-translate-y-1 flex-1"
                style={{ background: 'linear-gradient(135deg, #1d70a2, #0a2342)', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 border border-white/20"
                    style={{ background: 'rgba(255,255,255,0.12)' }}>
                    <Target className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <div>
                    <p className="text-[#00bfa5] text-xs font-poppins font-semibold uppercase tracking-widest mb-0.5">Misión</p>
                    <h3 className="text-lg font-poppins font-bold text-white">Nuestra Misión</h3>
                  </div>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">
                  Proporcionar servicios de alto valor en la creación, operación y mantenimiento de sistemas
                  relacionados con las áreas de marketing y ventas, facilitando la transformación digital de
                  las empresas y contribuyendo a su crecimiento en el mundo digital.
                </p>
              </div>

              {/* Visión */}
              <div className="p-6 rounded-2xl border border-[#00bfa5]/35 hover:border-[#00bfa5]/60 transition-all duration-300 hover:-translate-y-1 flex-1"
                style={{ background: 'linear-gradient(135deg, #0a2342, #1d70a2)', boxShadow: '0 8px 32px rgba(0,0,0,0.25)' }}>
                <div className="flex items-center mb-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 border border-white/20"
                    style={{ background: 'rgba(0,191,165,0.2)' }}>
                    <Eye className="w-5 h-5 text-[#00bfa5]" />
                  </div>
                  <div>
                    <p className="text-[#00bfa5] text-xs font-poppins font-semibold uppercase tracking-widest mb-0.5">Visión</p>
                    <h3 className="text-lg font-poppins font-bold text-white">Nuestra Visión</h3>
                  </div>
                </div>
                <p className="text-white/85 text-sm leading-relaxed">
                  Ser referentes en el mercado como socios estratégicos en transformación digital para empresas
                  que buscan innovar y optimizar sus procesos de marketing y ventas mediante soluciones
                  tecnológicas avanzadas.
                </p>
              </div>
            </div>

            {/* Columna derecha — Foto socios fundadores */}
            <div className="rounded-2xl border border-[#1d70a2]/40 overflow-hidden flex flex-col"
              style={{ background: 'linear-gradient(135deg, #0a2342, #1d70a2)', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}>
              <div className="flex items-center gap-3 px-6 pt-5 pb-3 border-b border-white/10">
                <div className="w-2 h-2 rounded-full bg-[#00bfa5] animate-pulse" />
                <p className="text-[#00bfa5] text-xs font-poppins font-semibold uppercase tracking-widest">Socios Fundadores</p>
              </div>
              <div className="flex-1 flex items-end justify-center overflow-hidden p-2">
                <img
                  src="/founders.png"
                  alt="Sebastián, Ernesto y Samuel — Socios fundadores de Sixteam.pro"
                  className="w-full h-auto object-contain"
                  style={{ filter: 'brightness(1.05) contrast(1.05)', transform: 'scale(1.2)' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ───────── VALORES ───────── */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 100%)' }}>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(0,191,165,0.07) 0%, transparent 70%)' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00bfa5]/10 text-[#00bfa5] text-sm font-poppins font-semibold rounded-full mb-4 border border-[#00bfa5]/25">
              Lo que nos define
            </span>
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-lg text-[#e0e0e0]">Los principios que guían cada decisión y proyecto que emprendemos</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index}
                className="p-6 rounded-2xl border border-[#1d70a2]/25 hover:border-[#00bfa5]/40 transition-all duration-300 hover:-translate-y-1 text-center"
                style={{ background: 'rgba(29,112,162,0.1)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, rgba(29,112,162,0.4), rgba(0,191,165,0.2))', border: '1px solid rgba(0,191,165,0.2)' }}>
                  <value.icon className="w-7 h-7 text-[#00bfa5]" />
                </div>
                <h3 className="text-base font-poppins font-bold text-white mb-2">{value.title}</h3>
                <p className="text-[#e0e0e0] text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ───────── POR QUÉ ELEGIRNOS ───────── */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d2d52 0%, #0a2342 60%, #071a33 100%)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 15% 50%, rgba(29,112,162,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 50%, rgba(0,191,165,0.09) 0%, transparent 55%)' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00bfa5]/10 text-[#00bfa5] text-sm font-poppins font-semibold rounded-full mb-4 border border-[#00bfa5]/25">
                Nuestra diferencia
              </span>
              <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-white">¿Por qué elegir Sixteam.pro?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center p-8 rounded-2xl border border-[#1d70a2]/25 hover:border-[#00bfa5]/40 transition-all"
                  style={{ background: 'rgba(29,112,162,0.1)', backdropFilter: 'blur(10px)' }}>
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${i % 2 === 0 ? 'text-[#00bfa5]' : 'text-blue-400'}`} />
                  <div className={`text-5xl font-poppins font-black mb-2 ${i % 2 === 0 ? 'text-[#00bfa5]' : 'text-blue-400'}`}>{stat.num}</div>
                  <p className="text-[#e0e0e0] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl p-8 text-center border border-[#1d70a2]/20"
              style={{ background: 'rgba(29,112,162,0.08)' }}>
              <p className="text-lg text-[#e0e0e0] leading-relaxed max-w-4xl mx-auto">
                En Sixteam.pro combinamos experiencia técnica sólida con un enfoque profundamente humano y consultivo.
                No somos solo proveedores de tecnología; somos socios estratégicos comprometidos con el crecimiento
                sostenible de tu empresa. Nuestra diversidad de experiencias en múltiples sectores nos permite adaptarnos
                rápidamente a cualquier desafío y ofrecer soluciones realmente efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── CTA ───────── */}
      <section className="py-16 sm:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a2342, #1d70a2)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,191,165,0.15) 0%, transparent 60%)' }} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
            Únete a las empresas que confían en nosotros
          </h2>
          <p className="text-xl text-[#e0e0e0] max-w-2xl mx-auto mb-10">
            Descubre cómo nuestro equipo puede ayudarte a alcanzar tus objetivos de crecimiento digital
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 rounded-xl font-poppins font-bold text-lg transition-all hover:scale-105 shadow-xl text-white"
            style={{ background: 'linear-gradient(90deg, #1d70a2, #00bfa5)', boxShadow: '0 4px 20px rgba(0,191,165,0.35)' }}
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Contáctanos por WhatsApp
          </Button>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="py-20 bg-[#0a2342]">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-[#00bfa5] text-xs font-medium uppercase tracking-widest mb-3 text-center font-poppins">FAQ</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12 font-poppins">Preguntas Frecuentes</h2>
          <div>
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[#1d70a2]/30 rounded-xl mb-3 overflow-hidden">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center bg-[#0a2342] hover:bg-[#1d70a2]/10 transition-colors"
                >
                  <span className="text-white font-semibold font-poppins pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`text-[#00bfa5] transition-transform duration-300 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 py-4 bg-[#1d70a2]/10 text-[#e0e0e0] font-lato leading-relaxed text-sm">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
