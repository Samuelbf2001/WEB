import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, Layers, Phone, Radio, MessageCircle, ArrowLeft } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const NotFound = () => {
  useSEO({
    title: "Página no encontrada | Sixteam.pro",
    description: "La página que buscas no existe. Regresa al inicio o explora nuestros servicios de CRM, automatización e IA para empresas en Colombia.",
  });

  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const links = [
    { label: "Inicio", path: "/", icon: Home },
    { label: "Servicios", path: "/servicios", icon: Layers },
    { label: "Radar", path: "/radar", icon: Radio },
    { label: "Contacto", path: "/contacto", icon: Phone },
  ];

  const handleWhatsApp = () => {
    const phone = "+573004188522";
    const message = "Hola, estoy navegando por el sitio web y necesito ayuda.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#0a2342] flex flex-col items-center justify-center px-4 font-lato">
      {/* Back link */}
      <div className="w-full max-w-2xl mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#e0e0e0] hover:text-[#00bfa5] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver al inicio
        </Link>
      </div>

      <div className="w-full max-w-2xl text-center">
        {/* Large 404 */}
        <h1
          className="text-[160px] sm:text-[220px] font-bold leading-none select-none font-poppins"
          style={{
            background: "linear-gradient(135deg, #1d70a2 0%, #00bfa5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </h1>

        {/* Message */}
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-poppins leading-tight">
          Esta página no existe,
          <br />
          <span className="text-[#00bfa5]">pero tu negocio puede crecer</span>
        </h2>

        <p className="text-[#e0e0e0] text-base sm:text-lg mb-10 max-w-lg mx-auto">
          La URL que buscas no está disponible. Usa los enlaces de abajo para
          navegar al lugar correcto.
        </p>

        {/* Nav links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {links.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center gap-2 px-4 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#00bfa5]/50 transition-all group"
            >
              <Icon className="w-5 h-5 text-[#00bfa5] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-[#e0e0e0] group-hover:text-white transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <button
          onClick={handleWhatsApp}
          className="inline-flex items-center gap-2 bg-[#00bfa5] hover:bg-[#00a08a] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          Escríbenos por WhatsApp
        </button>
      </div>
    </div>
  );
};

export default NotFound;
