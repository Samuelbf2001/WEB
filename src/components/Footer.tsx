
import React from 'react';
import { MessageCircle, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+573023515392?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  return (
    <footer className="bg-[#0a2342] text-white font-lato">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png"
                alt="Sixteam.pro Logo"
                className="w-8 h-8"
              />
              <span className="text-xl font-poppins font-bold">Sixteam.pro</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-sm">
              Transformamos tu negocio con CRM, automatizaciones e IA. Combinamos procesos, tecnología y personas para impulsar tu crecimiento digital.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>alpha@sixteam.pro</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>+57 302 351 5392</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Colombia · Latinoamérica</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Servicios</h3>
            <ul className="space-y-2">
              {[
                { name: 'CRM para Ventas', path: '/servicios/crm-ventas' },
                { name: 'CRM para Atención al Cliente', path: '/servicios/crm-atencion' },
                { name: 'CRM para Marketing', path: '/servicios/crm-marketing' },
                { name: 'Chatbot IA para WhatsApp', path: '/servicios/chatbot-ia' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa + CTA */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-white">Empresa</h3>
            <ul className="space-y-2 mb-6">
              {[
                { name: 'Nosotros', path: '/nosotros' },
                { name: 'Casos de Éxito', path: '/casos-exito' },
                { name: 'Contacto', path: '/contacto' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={handleWhatsAppClick}
              className="bg-teal-600 hover:bg-teal-700 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-300 text-sm">
          <p>&copy; 2025 Sixteam.pro. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link to="/politicas" className="hover:text-teal-400 transition-colors">
              Políticas de Privacidad
            </Link>
            <Link to="/terminos" className="hover:text-teal-400 transition-colors">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
