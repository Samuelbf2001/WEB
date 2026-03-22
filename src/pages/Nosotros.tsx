import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, Target, Eye, Award, Users, Briefcase } from 'lucide-react';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useSEO } from '@/hooks/useSEO';

const Nosotros = () => {
  useSEO({
    title: "Nosotros — Sixteam.pro | Equipo de CRM, IA y RevOps",
    description: "Somos el equipo detrás de Sixteam.pro. Expertos en CRM, automatización e inteligencia artificial para empresas de servicios en Colombia y Latinoamérica.",
  });

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20equipo%20de%20Sixteam.pro', '_blank');
  };

  const teamMembers = [
    {
      name: 'Samuel Burgos',
      role: 'Director General',
      expertise: 'Administrador de Empresas y Experto en RevOps',
      description: 'Con más de 8 años de experiencia en transformación digital y optimización de procesos de revenue operations, Samuel lidera la estrategia general de Sixteam.pro. Su enfoque consultivo y visión estratégica han ayudado a decenas de empresas a alcanzar sus objetivos de crecimiento.',
      specialties: ['Revenue Operations', 'Estrategia Digital', 'CRM Implementation', 'Business Intelligence'],
      color: 'from-blue-600 to-blue-800',
      accent: 'text-teal-400',
    },
    {
      name: 'Ernesto Hernández',
      role: 'Director de Procesos',
      expertise: 'Ingeniero Industrial y Experto en Diseño de Procesos',
      description: 'Ernesto aporta una sólida formación en ingeniería industrial y más de 6 años especializándose en optimización de procesos y gestión de proyectos. Su metodología estructurada garantiza implementaciones exitosas y resultados medibles en cada proyecto.',
      specialties: ['Diseño de Procesos', 'Gestión de Proyectos', 'Automatización', 'Optimización Operacional'],
      color: 'from-teal-600 to-teal-800',
      accent: 'text-blue-400',
    },
  ];

  const values = [
    {
      icon: Target,
      title: 'Orientación a Resultados',
      description: 'Cada proyecto debe generar valor medible y tangible para nuestros clientes.',
    },
    {
      icon: Users,
      title: 'Enfoque Consultivo',
      description: 'Escuchamos, entendemos y adaptamos nuestras soluciones a cada realidad empresarial.',
    },
    {
      icon: Award,
      title: 'Excelencia Técnica',
      description: 'Utilizamos las mejores prácticas y tecnologías más avanzadas del mercado.',
    },
    {
      icon: Briefcase,
      title: 'Compromiso a Largo Plazo',
      description: 'Construimos relaciones duraderas y acompañamos el crecimiento de nuestros clientes.',
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
              <span className="text-teal-300 font-medium text-sm tracking-wide">Nuestro Equipo</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Sobre
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                Sixteam.pro
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Conoce al equipo que impulsa la transformación digital de empresas en toda Colombia con RevOps, CRM e Inteligencia Artificial.
            </p>
          </div>
        </div>
      </section>

      {/* Filosofía — Misión y Visión */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nuestra Filosofía</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Los principios que guían todo lo que hacemos</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-br from-blue-600 to-[#0a2342] p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Nuestra Misión</h3>
                </div>
                <p className="text-lg leading-relaxed text-blue-100">
                  Proporcionar servicios de alto valor en la creación, operación y mantenimiento de sistemas
                  relacionados con las áreas de marketing y ventas, facilitando la transformación digital de
                  las empresas y contribuyendo a su crecimiento en el mundo digital.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="bg-gradient-to-br from-teal-600 to-teal-900 p-8 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Nuestra Visión</h3>
                </div>
                <p className="text-lg leading-relaxed text-teal-100">
                  Para 2026, ser referentes en el mercado como socios estratégicos en transformación digital
                  para empresas que buscan innovar y optimizar sus procesos de marketing y ventas mediante
                  soluciones tecnológicas avanzadas.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nuestros Valores</h2>
            <p className="text-xl text-gray-600">Los principios que guían cada decisión y proyecto que emprendemos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#0a2342] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600">Profesionales especializados con experiencia comprobada en transformación digital</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className={`bg-gradient-to-r ${member.color} p-8 text-white`}>
                  <div className="flex items-center gap-5">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/30">
                      <span className="text-2xl font-bold">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className={`${member.accent} font-semibold text-sm`}>{member.role}</p>
                      <p className="text-white/80 text-sm mt-1">{member.expertise}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">{member.description}</p>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Especialidades</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full border border-gray-200 font-medium">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="py-16 sm:py-24 bg-[#0a2342]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342] pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-bold text-white">¿Por qué elegir Sixteam.pro?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {[
                { num: '50+', label: 'Proyectos completados exitosamente', color: 'text-blue-400' },
                { num: '15+', label: 'Sectores industriales atendidos', color: 'text-teal-400' },
                { num: '98%', label: 'Índice de satisfacción de clientes', color: 'text-blue-400' },
              ].map((stat, i) => (
                <div key={i} className="text-center p-6 bg-white/5 border border-white/15 rounded-2xl backdrop-blur-sm">
                  <div className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.num}</div>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white/5 border border-white/15 rounded-2xl p-8 backdrop-blur-sm text-center">
              <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
                En Sixteam.pro combinamos experiencia técnica sólida con un enfoque profundamente humano y consultivo.
                No somos solo proveedores de tecnología; somos socios estratégicos comprometidos con el crecimiento
                sostenible de tu empresa. Nuestra diversidad de experiencias en múltiples sectores nos permite adaptarnos
                rápidamente a cualquier desafío y ofrecer soluciones realmente efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Únete a las empresas que confían en nosotros
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Descubre cómo nuestro equipo puede ayudarte a alcanzar tus objetivos de crecimiento digital
          </p>
          <Button
            onClick={handleWhatsAppClick}
            className="px-10 py-4 bg-white text-blue-700 hover:bg-gray-100 rounded-xl font-bold text-lg transition-all hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6 mr-3" />
            Contáctanos por WhatsApp
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
