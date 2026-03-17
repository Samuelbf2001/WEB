

import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const navItems = [
    { name: 'Inicio', path: '/' },
    {
      name: 'Servicios',
      path: '/servicios',
      submenu: [
        { name: 'CRM para Ventas', path: '/servicios/crm-ventas' },
        { name: 'CRM para Atención al Cliente', path: '/servicios/crm-atencion' },
        { name: 'CRM para Marketing', path: '/servicios/crm-marketing' },
        { name: 'Chatbot IA para WhatsApp', path: '/servicios/chatbot-ia' },
      ]
    },
    { name: 'Radar', path: '/radar' },
    { name: 'Casos de Éxito', path: '/casos-exito' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="bg-gray-900 shadow-sm sticky top-0 z-50 font-lato">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          {/* Frase Principal como Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl sm:text-3xl font-bold font-poppins tracking-tight whitespace-nowrap leading-tight">
              <span className="text-white">Process</span>
              <span className="text-white mx-0.5">+</span>
              <span className="text-white">Technology</span>
              <span className="text-white mx-0.5">+</span>
              <span className="text-blue-400">People</span>
              <span className="text-white mx-0.5">=</span>
              <span className="text-green-400 font-bold">Growth</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => {
                  if (closeTimeout.current) clearTimeout(closeTimeout.current);
                  setHoveredItem(item.name);
                }}
                onMouseLeave={() => {
                  closeTimeout.current = setTimeout(() => setHoveredItem(null), 300);
                }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center text-sm font-medium transition-colors hover:text-blue-400 ${
                    isActive(item.path) ? 'text-blue-400' : 'text-white'
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4 ml-1" />}
                </Link>
                
                {item.submenu && hoveredItem === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-3 z-50">
                    {item.submenu.map((subItem, index) => (
                      <Link
                        key={index}
                        to={subItem.path}
                        className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-teal-500 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-800 hover:text-blue-600 transition-colors">
                          {subItem.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-5 border-t border-gray-700">
            <nav className="flex flex-col space-y-1 pt-5">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block text-sm font-medium transition-colors hover:text-blue-400 py-1 ${
                      isActive(item.path) ? 'text-blue-400' : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-gray-700 pl-3">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          className="block text-xs text-gray-400 hover:text-teal-400 transition-colors py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
