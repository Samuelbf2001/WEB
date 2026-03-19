import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Servicios from "./pages/Servicios";
import CasosExito from "./pages/CasosExito";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import NotFound from "./pages/NotFound";
import PoliticasPrivacidad from "./pages/PoliticasPrivacidad";
import TerminosCondiciones from "./pages/TerminosCondiciones";
import CrmVentas from "./pages/servicios/CrmVentas";
import CrmAtencion from "./pages/servicios/CrmAtencion";
import CrmMarketing from "./pages/servicios/CrmMarketing";
import ChatbotIA from "./pages/servicios/ChatbotIA";
import WhatsAppButton from "./components/WhatsAppButton";
import RadarSixteam from "./pages/RadarSixteam";
import Plataforma from "./pages/Plataforma";
import DiagnosticoGratis from "./pages/radar/DiagnosticoGratis";
import AntesDeInvertir from "./pages/radar/AntesDeInvertir";
import OportunidadesPerdidas from "./pages/radar/OportunidadesPerdidas";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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
            <Route path="/plataforma" element={<Plataforma />} />
            <Route path="/radar" element={<RadarSixteam />} />
            <Route path="/radar/diagnostico-gratis" element={<DiagnosticoGratis />} />
            <Route path="/radar/antes-de-invertir" element={<AntesDeInvertir />} />
            <Route path="/radar/oportunidades-perdidas" element={<OportunidadesPerdidas />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          {/* Botón personalizado de WhatsApp con SVG */}
          <WhatsAppButton />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
