import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";

const Index = lazy(() => import('./pages/Index'));
const Servicios = lazy(() => import('./pages/Servicios'));
const CasosExito = lazy(() => import('./pages/CasosExito'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PoliticasPrivacidad = lazy(() => import('./pages/PoliticasPrivacidad'));
const TerminosCondiciones = lazy(() => import('./pages/TerminosCondiciones'));
const CrmVentas = lazy(() => import('./pages/servicios/CrmVentas'));
const CrmAtencion = lazy(() => import('./pages/servicios/CrmAtencion'));
const CrmMarketing = lazy(() => import('./pages/servicios/CrmMarketing'));
const ChatbotIA = lazy(() => import('./pages/servicios/ChatbotIA'));
const SoporteOperaciones = lazy(() => import('./pages/servicios/SoporteOperaciones'));
const RadarSixteam = lazy(() => import('./pages/RadarSixteam'));
const Plataforma = lazy(() => import('./pages/Plataforma'));
const Brochure = lazy(() => import('./pages/Brochure'));
const HomeAA = lazy(() => import('./pages/HomeAA'));
const DiagnosticoGratis = lazy(() => import('./pages/radar/DiagnosticoGratis'));
const AntesDeInvertir = lazy(() => import('./pages/radar/AntesDeInvertir'));
const OportunidadesPerdidas = lazy(() => import('./pages/radar/OportunidadesPerdidas'));
const AgenciasDeViaje = lazy(() => import('./pages/industrias/AgenciasDeViaje'));
const AgenciasDeViajeAds = lazy(() => import('./pages/industrias/AgenciasDeViajeAds'));
const MasterViajes = lazy(() => import('./pages/casos/MasterViajes'));
const StudentTravelCenter = lazy(() => import('./pages/casos/StudentTravelCenter'));
const Inmobiliarias = lazy(() => import('./pages/industrias/Inmobiliarias'));
const InmobiliariasV2 = lazy(() => import('./pages/industrias/InmobiliariasV2'));
const ServiciosGenerales = lazy(() => import('./pages/industrias/ServiciosGenerales'));
const IndustriasIndex = lazy(() => import('./pages/industrias/Index'));

// V2 — Boutique Intelligence
const IndexV2 = lazy(() => import('./pages/IndexV2'));
const CrmVentasV2 = lazy(() => import('./pages/v2/servicios/CrmVentasV2'));
const CrmAtencionV2 = lazy(() => import('./pages/v2/servicios/CrmAtencionV2'));
const CrmMarketingV2 = lazy(() => import('./pages/v2/servicios/CrmMarketingV2'));
const ChatbotIAV2 = lazy(() => import('./pages/v2/servicios/ChatbotIAV2'));
const SoporteOperacionesV2 = lazy(() => import('./pages/v2/servicios/SoporteOperacionesV2'));
const RadarV2 = lazy(() => import('./pages/v2/Radar'));
const ContactoV2 = lazy(() => import('./pages/v2/Contacto'));
const CasosV2 = lazy(() => import('./pages/v2/Casos'));
const IndustriasV2 = lazy(() => import('./pages/v2/Industrias'));
const NosotrosV2 = lazy(() => import('./pages/v2/Nosotros'));
const ComoFuncionaV2 = lazy(() => import('./pages/v2/ComoFunciona'));
const SolucionesV2 = lazy(() => import('./pages/v2/Soluciones'));
const OperacionContinua = lazy(() => import('./pages/v2/OperacionContinua'));
const DiagnosticoSixteam = lazy(() => import('./pages/v2/DiagnosticoSixteam'));
const EquipoV2 = lazy(() => import('./pages/v2/Equipo'));

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-[#0a2342]" />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/casos-exito" element={<CasosExito />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/politicas" element={<PoliticasPrivacidad />} />
              <Route path="/terminos" element={<TerminosCondiciones />} />
              <Route path="/servicios/crm-ventas" element={<CrmVentas />} />
              <Route path="/servicios/crm-atencion" element={<CrmAtencion />} />
              <Route path="/servicios/crm-marketing" element={<CrmMarketing />} />
              <Route path="/servicios/chatbot-ia" element={<ChatbotIA />} />
              <Route path="/servicios/soporte-operaciones" element={<SoporteOperaciones />} />
              <Route path="/plataforma" element={<Plataforma />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/home-aa" element={<HomeAA />} />
              <Route path="/radar" element={<RadarSixteam />} />
              <Route path="/radar/diagnostico-gratis" element={<DiagnosticoGratis />} />
              <Route path="/radar/antes-de-invertir" element={<AntesDeInvertir />} />
              <Route path="/radar/oportunidades-perdidas" element={<OportunidadesPerdidas />} />
              <Route path="/industrias" element={<IndustriasIndex />} />
              <Route path="/industrias/agencias-de-viaje" element={<AgenciasDeViaje />} />
              <Route path="/viajes" element={<AgenciasDeViajeAds />} />
              <Route path="/industrias/inmobiliarias" element={<Inmobiliarias />} />
              <Route path="/inmobiliarias" element={<InmobiliariasV2 />} />
              <Route path="/industrias/servicios-generales" element={<ServiciosGenerales />} />
              <Route path="/casos/master-viajes" element={<MasterViajes />} />
              <Route path="/casos/student-travel-center" element={<StudentTravelCenter />} />

              {/* V2 — Boutique Intelligence (parallel to V1) */}
              <Route path="/v2" element={<IndexV2 />} />
              <Route path="/v2/servicios/crm-ventas" element={<CrmVentasV2 />} />
              <Route path="/v2/servicios/crm-atencion" element={<CrmAtencionV2 />} />
              <Route path="/v2/servicios/crm-marketing" element={<CrmMarketingV2 />} />
              <Route path="/v2/servicios/chatbot-ia" element={<ChatbotIAV2 />} />
              <Route path="/v2/servicios/soporte-operaciones" element={<SoporteOperacionesV2 />} />
              <Route path="/v2/radar" element={<RadarV2 />} />
              <Route path="/v2/contacto" element={<ContactoV2 />} />
              <Route path="/v2/casos" element={<CasosV2 />} />
              <Route path="/v2/industrias" element={<IndustriasV2 />} />
              <Route path="/v2/nosotros" element={<NosotrosV2 />} />
              <Route path="/v2/como-funciona" element={<ComoFuncionaV2 />} />
              <Route path="/v2/soluciones" element={<SolucionesV2 />} />
              <Route path="/v2/operacion-continua" element={<OperacionContinua />} />
              <Route path="/v2/diagnostico" element={<DiagnosticoSixteam />} />
              <Route path="/v2/equipo" element={<EquipoV2 />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          {/* Botón personalizado de WhatsApp con SVG */}
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
