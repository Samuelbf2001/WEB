import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    {
      name: 'Servicios',
      path: '/servicios',
      showParentLink: true,
      submenu: [
        { name: 'Implementacion CRM Ventas', path: '/servicios/crm-ventas' },
        { name: 'Implementacion CRM Servicio', path: '/servicios/crm-atencion' },
        { name: 'Implementacion CRM Marketing', path: '/servicios/crm-marketing' },
        { name: 'Implementacion Agentes IA', path: '/servicios/chatbot-ia' },
        { name: 'Soporte Operaciones RevOps', path: '/servicios/soporte-operaciones' },
      ],
    },
    { name: 'Plataforma', path: '/plataforma' },
    { name: 'Radar', path: '/radar' },
    {
      name: 'Industrias',
      path: '/industrias/agencias-de-viaje',
      activePath: '/industrias',
      showParentLink: false,
      submenu: [
        { name: 'Agencias de Viaje', path: '/industrias/agencias-de-viaje' },
        { name: 'Inmobiliarias', path: '/industrias/inmobiliarias' },
        { name: 'Servicios Generales', path: '/industrias/servicios-generales' },
      ],
    },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string, activePath?: string) => {
    const checkPath = activePath ?? path;
    return checkPath === '/' ? location.pathname === '/' : location.pathname.startsWith(checkPath);
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setMobileExpandedItem(null);
  };

  const toggleMobileExpand = (name: string) => {
    setMobileExpandedItem(prev => (prev === name ? null : name));
  };

  return (
    <header className="bg-[#0a2342] shadow-sm sticky top-0 z-50 font-lato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ── Barra principal ── */}
        <div className="flex items-center justify-between h-16 sm:h-18">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMobile}>
            <img
              src="/lovable-uploads/3b066a0e-1bea-4907-b036-3b460d543754.png"
              alt="Sixteam.pro"
              className="h-8 sm:h-9 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setHoveredItem(item.name);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => setHoveredItem(null), 200);
                }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.path, (item as any).activePath)
                      ? 'text-[#00bfa5]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform ${hoveredItem === item.name ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Dropdown */}
                {item.submenu && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-gray-50 transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00bfa5] shrink-0 group-hover:scale-125 transition-transform" />
                        <span className="text-sm text-gray-700 group-hover:text-[#1d70a2] transition-colors">
                          {sub.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA desktop + hamburger mobile */}
          <div className="flex items-center gap-3">
            {/* CTA solo desktop */}
            <a
              href="https://wa.me/+573023515392?text=Hola%2C%20quiero%20una%20consultor%C3%ADa%20gratuita"
              target="_blank"
              rel="noreferrer"
              className="hidden lg:inline-flex items-center gap-2 bg-[#00bfa5] hover:bg-[#00a08a] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Consultoría gratis
            </a>

            {/* Hamburger */}
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(prev => !prev)}
              aria-label="Abrir menú"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* ── Menú mobile ── */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10 py-3">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      {/* Item con submenu: toggle acordeón */}
                      <button
                        className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive(item.path, (item as any).activePath) ? 'text-[#00bfa5]' : 'text-gray-200 hover:text-white hover:bg-white/5'
                        }`}
                        onClick={() => toggleMobileExpand(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${mobileExpandedItem === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>

                      {mobileExpandedItem === item.name && (
                        <div className="ml-3 mb-2 border-l-2 border-[#1d70a2]/40 pl-4 flex flex-col gap-0.5">
                          {/* Link directo a la página padre (sólo si tiene página índice propia) */}
                          {item.showParentLink && (
                            <Link
                              to={item.path}
                              className="py-2 text-sm text-gray-400 hover:text-[#00bfa5] transition-colors"
                              onClick={closeMobile}
                            >
                              Ver todos los servicios →
                            </Link>
                          )}
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className="py-2 text-sm text-gray-300 hover:text-[#00bfa5] transition-colors"
                              onClick={closeMobile}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.path) ? 'text-[#00bfa5]' : 'text-gray-200 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={closeMobile}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA mobile */}
              <div className="mt-3 pt-3 border-t border-white/10">
                <a
                  href="https://wa.me/+573023515392?text=Hola%2C%20quiero%20una%20consultor%C3%ADa%20gratuita"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#00bfa5] hover:bg-[#00a08a] text-white text-sm font-semibold px-4 py-3 rounded-lg transition-colors"
                  onClick={closeMobile}
                >
                  Consultoría gratis por WhatsApp
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
