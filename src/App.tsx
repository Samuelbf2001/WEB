import React, { Suspense, lazy } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import WhatsAppButton from "./components/WhatsAppButton";
import PromoPricingModule from "./components/PromoPricingModule";
import LocalTranslator from "./i18n/LocalTranslator";
import { LocaleProvider } from "./i18n/LocaleProvider";

const NotFound = lazy(() => import('./pages/NotFound'));
const PoliticasPrivacidad = lazy(() => import('./pages/PoliticasPrivacidad'));
const TerminosCondiciones = lazy(() => import('./pages/TerminosCondiciones'));

// Landings V1 que siguen publicadas (pauta activa / URLs compartidas)
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
const InmobiliariasAds = lazy(() => import('./pages/industrias/InmobiliariasV2'));
const ServiciosGenerales = lazy(() => import('./pages/industrias/ServiciosGenerales'));

// Web pública (rediseño Boutique Intelligence)
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
const RadarProV2 = lazy(() => import('./pages/v2/RadarPro'));
const EducacionV2 = lazy(() => import('./pages/v2/industrias/Educacion'));
const SaasB2BV2 = lazy(() => import('./pages/v2/industrias/SaasB2B'));
const RetailV2 = lazy(() => import('./pages/v2/industrias/Retail'));
const ViajesV2 = lazy(() => import('./pages/v2/industrias/Viajes'));
const ServiciosConCitaV2 = lazy(() => import('./pages/v2/industrias/ServiciosConCita'));
const InmobiliariasIndustriaV2 = lazy(() => import('./pages/v2/industrias/Inmobiliarias'));
const PreciosV2 = lazy(() => import('./pages/v2/Precios'));
const AssessmentV2 = lazy(() => import('./pages/v2/Assessment'));
const PitchV2 = lazy(() => import('./pages/v2/Pitch'));
const OpsLandingV2 = lazy(() => import('./pages/v2/OpsLanding'));
const AssessmentLanding = lazy(() => import('./pages/v2/AssessmentLanding'));

// Las rutas /v2/* eran el prefijo interno del rediseño; ahora viven en la raíz.
// Se conserva query string (UTMs de pauta apuntando a /v2/ops) y hash.
const LegacyV2Redirect = () => {
  const { pathname, search, hash } = useLocation();
  const target = pathname.replace(/^\/v2/, '') || '/';
  return <Navigate to={`${target}${search}${hash}`} replace />;
};

const queryClient = new QueryClient();

const v2PromoPaths = new Set([
  "/",
  "/soluciones",
  "/servicios/crm-ventas",
  "/servicios/crm-atencion",
  "/servicios/crm-marketing",
  "/servicios/chatbot-ia",
  "/servicios/soporte-operaciones",
  "/radar",
  "/radar-pro",
  "/contacto",
  "/casos",
  "/nosotros",
  "/como-funciona",
  "/operacion-continua",
  "/diagnostico",
  "/equipo",
  "/precios",
  "/assessment",
  "/pitch",
  "/ops",
  "/lp/assessment",
  "/industrias",
  "/industrias/educacion",
  "/industrias/saas-b2b",
  "/industrias/retail",
  "/industrias/viajes",
  "/industrias/servicios-con-cita",
  "/industrias/inmobiliarias",
]);

const LegacyPromoPricingSlot = () => {
  const { pathname } = useLocation();
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";

  if (normalizedPathname.startsWith("/v2") || v2PromoPaths.has(normalizedPathname)) {
    return null;
  }

  return <PromoPricingModule />;
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LocaleProvider>
          <LocalTranslator />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<div className="min-h-screen bg-[#0a2342]" />}>
              <Routes>
              {/* Web pública */}
              <Route path="/" element={<IndexV2 />} />
              <Route path="/soluciones" element={<SolucionesV2 />} />
              <Route path="/servicios/crm-ventas" element={<CrmVentasV2 />} />
              <Route path="/servicios/crm-atencion" element={<CrmAtencionV2 />} />
              <Route path="/servicios/crm-marketing" element={<CrmMarketingV2 />} />
              <Route path="/servicios/chatbot-ia" element={<ChatbotIAV2 />} />
              <Route path="/servicios/soporte-operaciones" element={<SoporteOperacionesV2 />} />
              <Route path="/radar" element={<RadarV2 />} />
              <Route path="/radar-pro" element={<RadarProV2 />} />
              <Route path="/contacto" element={<ContactoV2 />} />
              <Route path="/casos" element={<CasosV2 />} />
              <Route path="/nosotros" element={<NosotrosV2 />} />
              <Route path="/como-funciona" element={<ComoFuncionaV2 />} />
              <Route path="/operacion-continua" element={<OperacionContinua />} />
              <Route path="/diagnostico" element={<DiagnosticoSixteam />} />
              <Route path="/equipo" element={<EquipoV2 />} />
              <Route path="/precios" element={<PreciosV2 />} />
              <Route path="/assessment" element={<AssessmentV2 />} />
              <Route path="/pitch" element={<PitchV2 />} />
              <Route path="/ops" element={<OpsLandingV2 />} />
              <Route path="/lp/assessment" element={<AssessmentLanding />} />
              <Route path="/industrias" element={<IndustriasV2 />} />
              <Route path="/industrias/educacion" element={<EducacionV2 />} />
              <Route path="/industrias/saas-b2b" element={<SaasB2BV2 />} />
              <Route path="/industrias/retail" element={<RetailV2 />} />
              <Route path="/industrias/viajes" element={<ViajesV2 />} />
              <Route path="/industrias/servicios-con-cita" element={<ServiciosConCitaV2 />} />
              <Route path="/industrias/inmobiliarias" element={<InmobiliariasIndustriaV2 />} />

              {/* Rutas V1 retiradas → equivalente en la web pública */}
              <Route path="/servicios" element={<Navigate to="/soluciones" replace />} />
              <Route path="/casos-exito" element={<Navigate to="/casos" replace />} />

              {/* Landings V1 aún activas */}
              <Route path="/politicas" element={<PoliticasPrivacidad />} />
              <Route path="/terminos" element={<TerminosCondiciones />} />
              <Route path="/plataforma" element={<Plataforma />} />
              <Route path="/brochure" element={<Brochure />} />
              <Route path="/home-aa" element={<HomeAA />} />
              <Route path="/radar/diagnostico-gratis" element={<DiagnosticoGratis />} />
              <Route path="/radar/antes-de-invertir" element={<AntesDeInvertir />} />
              <Route path="/radar/oportunidades-perdidas" element={<OportunidadesPerdidas />} />
              <Route path="/industrias/agencias-de-viaje" element={<AgenciasDeViaje />} />
              <Route path="/viajes" element={<AgenciasDeViajeAds />} />
              <Route path="/inmobiliarias" element={<InmobiliariasAds />} />
              <Route path="/industrias/servicios-generales" element={<ServiciosGenerales />} />
              <Route path="/casos/master-viajes" element={<MasterViajes />} />
              <Route path="/casos/student-travel-center" element={<StudentTravelCenter />} />

              {/* Prefijo interno /v2 → raíz (conserva UTMs) */}
              <Route path="/v2/*" element={<LegacyV2Redirect />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <LegacyPromoPricingSlot />

            {/* Botón personalizado de WhatsApp con SVG */}
            <WhatsAppButton />
          </BrowserRouter>
        </LocaleProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
