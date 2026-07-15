import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const handleWA = () =>
  window.open(
    'https://wa.me/+573004188522?text=Hola%2C%20vi%20el%20caso%20de%20Student%20Travel%20Center%20y%20quiero%20conocer%20m%C3%A1s%20sobre%20c%C3%B3mo%20Sixteam%20puede%20transformar%20nuestro%20negocio',
    '_blank'
  );

const StudentTravelCenter = () => {
  useSEO({
    title: 'Caso de Éxito: Student Travel Center | Sixteam.pro',
    description:
      'Cómo Student Travel Center pasó de operar disperso a tener a Sixteam como partner estratégico integrado en su día a día: CRM, IA, pauta, y crecimiento conjunto.',
    canonical: 'https://sixteam.pro/casos/student-travel-center',
    ogUrl: 'https://sixteam.pro/casos/student-travel-center',
  });

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato text-white overflow-x-hidden">
      <Header />

      {/* ── HERO ── */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-20 pb-16 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#00bfa5]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1d70a2]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-10">
            — Caso de éxito · Educación Internacional · +4 años de alianza
          </p>

          <h1 className="font-poppins font-black leading-[0.95] tracking-tight mb-10">
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-white">
              Dejaron de
            </span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-white">
              buscar un
            </span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-white">
              proveedor.
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-12 mt-12 border-t border-white/10 pt-12">
            <div className="flex-1">
              <p className="text-xl sm:text-2xl text-white/75 leading-relaxed max-w-2xl">
                Student Travel Center no contrató a Sixteam para instalar software.
                Nos integramos en su operación día a día: WhatsApp, reuniones de sistema,
                pauta, ideación conjunta. Somos parte del equipo.
              </p>
            </div>
            <div className="flex sm:flex-col gap-8 sm:gap-6 justify-start sm:justify-center">
              {[
                { v: '+30K', l: 'Registros en CRM' },
                { v: '+4', l: 'Años de alianza' },
                { v: '100%', l: 'Trazabilidad' },
              ].map((m, i) => (
                <div key={i} className="text-right sm:text-right">
                  <div className="font-poppins font-black text-[2.5rem] text-[#00bfa5] leading-none">{m.v}</div>
                  <div className="text-white/50 text-sm mt-1">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENTONCES vs AHORA ── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 bg-white text-[#0a2342]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-8">
            — El antes y el después
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Antes */}
            <div className="lg:border-r border-gray-200 pr-0 lg:pr-16 pb-12 lg:pb-0">
              <p className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-6">Lo que hacían antes</p>
              <ul className="space-y-5">
                {[
                  'Leads llegaban de Meta, WhatsApp, eventos, sin unificar ni rastrear',
                  'Las asesoras perdían horas con prospectos que no encajaban',
                  'La gerencia decidía con información rezagada e incompleta',
                  'Herramientas desconectadas, información duplicada, silos por todos lados',
                  'Si alguien salía del equipo, el conocimiento se iba con esa persona',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-5 h-5 mt-0.5 flex-shrink-0 rounded-full border-2 border-red-300 flex items-center justify-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                    </span>
                    <span className="text-gray-600 text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ahora */}
            <div className="pl-0 lg:pl-16 pt-12 lg:pt-0">
              <p className="text-xs font-bold tracking-widest uppercase text-[#00bfa5] mb-6">Lo que tienen hoy</p>
              <ul className="space-y-5">
                {[
                  'Un solo ecosistema digital para todos los canales, centralizado con Sixteam',
                  'Agente de IA que perfila y filtra prospectos antes de llegar a la agenda',
                  'Dashboard ejecutivo con métricas reales, actualizadas en tiempo real',
                  'HubSpot + Meta Ads + Chat Center operando como un solo sistema coherente',
                  'El conocimiento del negocio vive en el sistema y en nosotros',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-5 h-5 mt-0.5 text-[#00bfa5] flex-shrink-0" />
                    <span className="text-[#0a2342] font-semibold text-lg leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 AÑOS ── */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 bg-[#0a2342] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                — Cuatro años, un solo camino
              </p>
              <h2 className="font-poppins font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
                Nos volvimos
                <br />
                parte de su
                <br />
                operación.
              </h2>
            </div>

            <div className="space-y-0">
              {[
                {
                  year: '2022',
                  title: 'Fundamentos',
                  desc: 'HubSpot, pipelines por programa, KPIs estratégicos. Primer canal directo de comunicación.',
                },
                {
                  year: '2023',
                  title: 'Automatización + Pauta',
                  desc: 'Leads de Meta directo al CRM. Dashboards. Inicio de gestión de pauta conjunta.',
                },
                {
                  year: '2024',
                  title: 'Omnicanalidad e IA',
                  desc: 'Chat Center + agente de IA entrenado. Solo prospectos calificados llegan a las asesoras.',
                },
                {
                  year: 'Hoy',
                  title: 'Partner Integrado',
                  desc: 'Todo centralizado. Reuniones semanales, WhatsApp diario, ideación constante. Crecemos juntos.',
                },
              ].map((item, i, arr) => (
                <div key={i} className="flex gap-8 items-stretch">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-[#00bfa5] flex-shrink-0 mt-1.5" />
                    {i < arr.length - 1 && <div className="w-px flex-1 bg-[#1d70a2]/30 my-1" />}
                  </div>
                  <div className="pb-8">
                    <span className="text-[#00bfa5] text-xs font-bold tracking-widest uppercase">{item.year}</span>
                    <h4 className="font-poppins font-bold text-xl text-white mt-1 mb-1">{item.title}</h4>
                    <p className="text-white/55 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PARTNERSHIP ── */}
      <section className="px-6 sm:px-12 lg:px-20 py-20 bg-white text-[#0a2342]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-6">
            — Cómo funciona el día a día
          </p>
          <h2 className="font-poppins font-black text-[clamp(2rem,5vw,4rem)] leading-tight tracking-tight mb-16 max-w-3xl">
            No somos un proveedor. Somos el partner detrás de la operación.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-200 rounded-2xl overflow-hidden">
            {[
              {
                icon: '💬',
                title: 'WhatsApp diario',
                desc: 'Canal directo con el equipo. Dudas, urgencias, ideas nuevas: respondemos en minutos, no en días.',
              },
              {
                icon: '📊',
                title: 'Reuniones de sistema',
                desc: 'Analizamos datos juntos, identificamos oportunidades y ajustamos la estrategia semana a semana.',
              },
              {
                icon: '🎯',
                title: 'Pauta centralizada',
                desc: 'Meta Ads gestionado directamente con nosotros. Ideamos, lanzamos, optimizamos y reportamos.',
              },
              {
                icon: '🔐',
                title: 'Conocimiento profundo',
                desc: '4+ años conociendo su negocio, su equipo, sus programas. No hay curva de aprendizaje. Solo acción.',
              },
            ].map((item, i, arr) => (
              <div
                key={i}
                className={`p-8 ${i < arr.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-gray-200' : ''} hover:bg-[#0a2342]/3 transition-colors`}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="font-poppins font-bold text-lg text-[#0a2342] mb-3">{item.title}</h4>
                <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 bg-gradient-to-r from-[#1d70a2] to-[#00bfa5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[8rem] leading-none text-white/20 font-serif -mb-8">"</div>
          <p className="font-poppins font-semibold text-[clamp(1.5rem,3.5vw,2.5rem)] text-white leading-tight tracking-tight mb-10">
            Sixteam no es solo un proveedor tecnológico. Se convirtieron en parte de nuestro equipo. Están en nuestro WhatsApp, en nuestras reuniones, ideando con nosotros cada semana. Conocen nuestro negocio mejor que nadie.
          </p>
          <p className="text-white/70 text-lg font-semibold tracking-wide uppercase">
            — Gerencia · Student Travel Center
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-12 lg:px-20 py-24 bg-[#0a2342] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-6">
                — ¿Eres el próximo?
              </p>
              <h2 className="font-poppins font-black text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight">
                ¿Buscas un partner
                <br />
                que crezca contigo?
              </h2>
            </div>
            <div>
              <p className="text-white/65 text-xl leading-relaxed mb-10">
                No queremos ser tu proveedor. Queremos ser tu aliado estratégico: en tu WhatsApp, en tus reuniones, coordinando tu ecosistema digital mientras creces.
              </p>
              <Button
                onClick={handleWA}
                className="bg-[#00bfa5] hover:bg-[#009e96] text-[#0a2342] font-poppins font-bold text-lg px-10 py-4 rounded-full transition-all hover:scale-105 shadow-2xl shadow-[#00bfa5]/25 h-auto"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Conversemos
              </Button>
              <p className="text-white/35 text-sm mt-5">Sin compromiso · Respondemos en menos de 24 horas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudentTravelCenter;
