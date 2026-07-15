import React, { useEffect, useState } from 'react';
import { gtm } from '@/lib/gtm';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from '@/components/ui/carousel';
import { MessageCircle, Target, Brain, Headphones, CheckCircle, Star, Zap, Bot, Search, Map, TrendingUp, BarChart3, Settings2, Megaphone, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import ChatSection from '@/components/ChatSection';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import SchemaOrg from '@/components/SchemaOrg';

const Index = () => {
  useSEO({
    title: 'Sixteam.pro: CRM, Automatizaciones e IA para Empresas | Colombia',
    description: 'Transformamos tu negocio con CRM, automatizaciones e IA. Implementamos GoHighLevel, pipelines de ventas, chatbots IA y RevOps para empresas en Colombia y Latinoamérica.',
    canonical: 'https://sixteam.pro',
    ogUrl: 'https://sixteam.pro',
  });

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [animationsLoaded, setAnimationsLoaded] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['comerciales', 'de marketing', 'de servicio'];

  // Cargar animaciones después de que la página esté completamente cargada
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationsLoaded(true);
    }, 1000); // Delay de 1 segundo después de que se monte el componente

    return () => clearTimeout(timer);
  }, []);

  // Inicializar el efecto typewriter
  useEffect(() => {
    // Pequeño delay antes de empezar a escribir
    const initTimer = setTimeout(() => {
      setDisplayText('');
    }, 1500);

    return () => clearTimeout(initTimer);
  }, []);

  // Efecto typewriter para escribir y borrar palabras
  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo letra a letra
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
        } else {
          // Palabra completa, esperar y luego empezar a borrar
          setTimeout(() => setIsDeleting(true), 1500); // Pausa de 1.5s con palabra completa
        }
      } else {
        // Borrando letra a letra (más rápido)
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          // Palabra borrada completamente, cambiar a siguiente palabra
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100); // Borrar más rápido (50ms) que escribir (100ms)

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  // Efecto para dibujar líneas de conexión dinámicas entre puntos
  useEffect(() => {
    if (!animationsLoaded) return;

    // Respect user's reduced-motion preference and skip heavy canvas animation
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = document.getElementById('connectionLines') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar canvas
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Función para obtener posición de un punto en cualquier momento
    const getPointPosition = (pointIndex: number, time: number) => {
      const rect = canvas.getBoundingClientRect();
      const basePositions = [
        { x: 0.15 * canvas.width, y: 0.20 * canvas.height },  // Punto 1
        { x: 0.80 * canvas.width, y: 0.70 * canvas.height },  // Punto 2
        { x: 0.70 * canvas.width, y: 0.40 * canvas.height },  // Punto 3
        { x: 0.25 * canvas.width, y: 0.60 * canvas.height },  // Punto 4
        { x: 0.50 * canvas.width, y: 0.30 * canvas.height },  // Punto 5
      ];

      const base = basePositions[pointIndex];
      let offset = { x: 0, y: 0 };

      // Calcular offset basado en la animación CSS
      switch (pointIndex) {
        case 0: // movePoint1 - 12s
          const progress1 = (time % 12000) / 12000;
          if (progress1 < 0.25) {
            const t = progress1 / 0.25;
            offset = { x: 100 * t, y: 50 * t };
          } else if (progress1 < 0.5) {
            const t = (progress1 - 0.25) / 0.25;
            offset = { x: 100 + 100 * t, y: 50 - 80 * t };
          } else if (progress1 < 0.75) {
            const t = (progress1 - 0.5) / 0.25;
            offset = { x: 200 - 150 * t, y: -30 + 110 * t };
          } else {
            const t = (progress1 - 0.75) / 0.25;
            offset = { x: 50 - 50 * t, y: 80 - 80 * t };
          }
          break;
        case 1: // movePoint2 - 15s
          const progress2 = (time % 15000) / 15000;
          if (progress2 < 0.2) {
            const t = progress2 / 0.2;
            offset = { x: -80 * t, y: -60 * t };
          } else if (progress2 < 0.4) {
            const t = (progress2 - 0.2) / 0.2;
            offset = { x: -80 - 70 * t, y: -60 + 100 * t };
          } else if (progress2 < 0.6) {
            const t = (progress2 - 0.4) / 0.2;
            offset = { x: -150 + 100 * t, y: 40 - 60 * t };
          } else if (progress2 < 0.8) {
            const t = (progress2 - 0.6) / 0.2;
            offset = { x: -50 - 70 * t, y: -20 + 50 * t };
          } else {
            const t = (progress2 - 0.8) / 0.2;
            offset = { x: -120 + 120 * t, y: 30 - 30 * t };
          }
          break;
        case 2: // movePoint3 - 10s
          const progress3 = (time % 10000) / 10000;
          if (progress3 < 0.33) {
            const t = progress3 / 0.33;
            offset = { x: -100 * t, y: 70 * t };
          } else if (progress3 < 0.66) {
            const t = (progress3 - 0.33) / 0.33;
            offset = { x: -100 + 180 * t, y: 70 - 120 * t };
          } else {
            const t = (progress3 - 0.66) / 0.34;
            offset = { x: 80 - 80 * t, y: -50 + 50 * t };
          }
          break;
        case 3: // movePoint4 - 18s
          const progress4 = (time % 18000) / 18000;
          if (progress4 < 0.16) {
            const t = progress4 / 0.16;
            offset = { x: 120 * t, y: -40 * t };
          } else if (progress4 < 0.32) {
            const t = (progress4 - 0.16) / 0.16;
            offset = { x: 120 - 40 * t, y: -40 + 100 * t };
          } else if (progress4 < 0.48) {
            const t = (progress4 - 0.32) / 0.16;
            offset = { x: 80 - 140 * t, y: 60 + 20 * t };
          } else if (progress4 < 0.64) {
            const t = (progress4 - 0.48) / 0.16;
            offset = { x: -60 - 60 * t, y: 80 - 110 * t };
          } else if (progress4 < 0.8) {
            const t = (progress4 - 0.64) / 0.16;
            offset = { x: -120 + 160 * t, y: -30 - 30 * t };
          } else {
            const t = (progress4 - 0.8) / 0.2;
            offset = { x: 40 - 40 * t, y: -60 + 60 * t };
          }
          break;
        case 4: // movePoint5 - 8s
          const progress5 = (time % 8000) / 8000;
          if (progress5 < 0.25) {
            const t = progress5 / 0.25;
            offset = { x: -70 * t, y: -50 * t };
          } else if (progress5 < 0.5) {
            const t = (progress5 - 0.25) / 0.25;
            offset = { x: -70 + 160 * t, y: -50 + 90 * t };
          } else if (progress5 < 0.75) {
            const t = (progress5 - 0.5) / 0.25;
            offset = { x: 90 - 130 * t, y: 40 + 30 * t };
          } else {
            const t = (progress5 - 0.75) / 0.25;
            offset = { x: -40 + 40 * t, y: 70 - 70 * t };
          }
          break;
      }

      return { x: base.x + offset.x, y: base.y + offset.y };
    };

    // Función de animación
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const time = Date.now();
      const points = [];

      // Obtener posiciones actuales de todos los puntos
      for (let i = 0; i < 5; i++) {
        points.push(getPointPosition(i, time));
      }

      // Dibujar líneas entre puntos cercanos
      ctx.strokeStyle = '#00bfa5';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.3;

      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const distance = Math.sqrt(
            Math.pow(points[i].x - points[j].x, 2) +
            Math.pow(points[i].y - points[j].y, 2)
          );

          // Solo dibujar líneas si los puntos están lo suficientemente cerca
          if (distance < 300) {
            ctx.globalAlpha = Math.max(0.1, 0.4 - distance / 1000);
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [animationsLoaded]);

  const handleWhatsAppClick = () => {
    gtm.ctaClick('hero_cta', 'home_hero');
    window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20agendar%20una%20cita%20para%20conocer%20más%20sobre%20los%20servicios%20de%20Sixteam.pro', '_blank');
  };

  // Auto-scroll del carrusel cada 8 segundos (solo cuando esté visible)
  useEffect(() => {
    if (!carouselApi) return;

    // Observer para detectar cuando el carrusel está visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              carouselApi.scrollNext();
            }, 8000);

            // Limpiar cuando el carrusel no esté visible
            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.1 }
    );

    const carouselElement = document.querySelector('[data-carousel="main"]');
    if (carouselElement) {
      observer.observe(carouselElement);
    }

    return () => {
      observer.disconnect();
    };
  }, [carouselApi]);

  const services = [
    {
      icon: Target,
      title: 'Implementación Para Ventas',
      description: 'Implementamos tu CRM con pipelines de ventas, seguimiento de leads, automatización de tareas y reportería en tiempo real. Tu equipo comercial cierra más con menos esfuerzo.',
      path: '/servicios/crm-ventas',
    },
    {
      icon: Headphones,
      title: 'Implementaciones Para Servicio',
      description: 'Centraliza todos los tickets, conversaciones y solicitudes en un solo lugar. Reduce tiempos de respuesta y mejora la satisfacción del cliente con flujos automatizados.',
      path: '/servicios/crm-atencion',
    },
    {
      icon: Brain,
      title: 'Implementación Para Marketing',
      description: 'Gestiona campañas multicanal, segmenta audiencias con IA, automatiza secuencias de nurturing y mide el ROI de cada acción de marketing directamente en el CRM.',
      path: '/servicios/crm-marketing',
    },
    {
      icon: Bot,
      title: 'Implementación Agentes IA',
      description: 'Desplegamos tu agente IA en WhatsApp Business: responde 24/7, califica leads, agenda citas y actualiza el CRM automáticamente. Sin intervención humana constante.',
      path: '/servicios/chatbot-ia',
    },
  ];

  const partnerLogos = [
    {
      name: 'HubSpot',
      src: '/HubSpot-Logo-500x281.png',
      alt: 'HubSpot CRM'
    },
    {
      name: 'Make',
      src: '/make-logo.png',
      alt: 'Make Automation'
    },
    {
      name: 'ManyChat',
      src: '/MANYCHAT-LOGO-PNG.png',
      alt: 'ManyChat Chatbots'
    },
    {
      name: 'n8n',
      src: '/N8n-logo-new.svg.png',
      alt: 'n8n Workflow Automation'
    },
    {
      name: 'Zapier',
      src: '/zapier-logo-new.png',
      alt: 'Zapier Automation'
    },
    {
      name: 'Brevo',
      src: '/brevo.png',
      alt: 'Brevo Email Marketing'
    },
    {
      name: 'Google Ads',
      src: '/Google_Ads_logo.svg.png',
      alt: 'Google Ads'
    },
    {
      name: 'Meta Ads',
      src: '/ads meta_PNG12.png',
      alt: 'Meta Facebook Ads'
    },
    {
      name: 'Google Analytics',
      src: '/Logo_Google_Analytics.svg.png',
      alt: 'Google Analytics'
    },
    {
      name: 'WhatsApp Business',
      src: '/Whatsapp-Business-01-768x269.png',
      alt: 'WhatsApp Business API'
    },
    {
      name: 'Mailchimp',
      src: '/Mailchimp-logo.png',
      alt: 'Mailchimp Email Marketing'
    },
    {
      name: 'GoHighLevel',
      src: '/highlevel-logo.png',
      alt: 'GoHighLevel CRM'
    },
    {
      name: 'Kommo',
      src: '/kommo01.png',
      alt: 'Kommo CRM'
    },
    {
      name: 'Google Gemini',
      src: '/Google_Gemini_logo.svg.png',
      alt: 'Google Gemini AI'
    },
    {
      name: 'AtomChat',
      src: '/logo-atom-chat.png',
      alt: 'AtomChat Live Chat'
    }
  ];

  const advantages = [
    'IA aplicada a procesos de marketing y ventas',
    'Automatización con Make, n8n y Zapier',
    'Integración inteligente entre plataformas',
    'Análisis predictivo y reportería avanzada',
    'Soporte especializado en RevOps'
  ];

  const pilarsOfValue = [
    {
      title: 'Diagnóstico y Estrategia a la Medida',
      description: 'No aplicamos soluciones genéricas, invertimos tiempo en entender tu **operación** desde adentro, mapeando tus **flujos de trabajo** y entrevistando a tu equipo. Así podemos ofrecerte mejoras basadas en nuestra **experiencia** optimizando tu **eficiencia** y **rentabilidad**.'
    },
    {
      title: 'Ecosistema RevOps + IA',
      description: 'Para nosotros, **RevOps** no es un servicio, es la filosofía de alinear **Marketing**, **Ventas** y **Servicio** en una sola máquina de ingresos. Usamos la **IA** no solo para automatizar, sino para crear **ecosistemas** que aprenden, se adaptan y evolucionan contigo, asegurando que tu **inversión** de hoy sea relevante mañana.'
    },
    {
      title: 'Arquitectura Abierta y Escalable',
      description: 'No te atamos a una sola tecnología. Construimos tu solución integrando de forma inteligente las mejores **plataformas** del mercado (**Make**, **n8n**, **Zapier**, etc.) para crear una **arquitectura** que se adapta a ti, no al revés. Diseñamos sistemas que **crecen** contigo, desde pequeña hasta gran empresa.'
    }
  ];

  const testimonials = [
    {
      name: 'Juliana Ospina',
      role: 'Directora Comercial',
      company: 'Grupo Ospina Bienes Raíces',
      city: 'Bogotá, Colombia',
      flag: '🇨🇴',
      initials: 'JO',
      avatarColor: '#1d70a2',
      text: 'Antes perdíamos leads por falta de seguimiento. Con Sixteam.pro implementamos un CRM con recordatorios automáticos y flujos de WhatsApp. En 60 días cerramos un 35% más de negocios sin contratar más vendedores.',
      rating: 5
    },
    {
      name: 'Sebastián Arango',
      role: 'Gerente General',
      company: 'Clínica Dental Arango & Asociados',
      city: 'Medellín, Colombia',
      flag: '🇨🇴',
      initials: 'SA',
      avatarColor: '#0d6659',
      text: 'Nuestras citas se llenaban a medias y el equipo perdía horas confirmando por teléfono. Sixteam.pro automatizó las confirmaciones y reagendamientos por WhatsApp. Redujimos ausentismo un 48% en el primer mes.',
      rating: 5
    },
    {
      name: 'Camila Fuentes',
      role: 'CEO',
      company: 'Viajes & Aventura Premium',
      city: 'Santiago, Chile',
      flag: '🇨🇱',
      initials: 'CF',
      avatarColor: '#7c3aed',
      text: 'Manejamos grupos de turismo y coordinar cotizaciones era un caos. Con el CRM de Sixteam.pro centralizamos todo: presupuestos, seguimientos y pagos. Nuestro tiempo de respuesta bajó de 2 días a menos de 2 horas.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a2342] font-lato">
      <SchemaOrg schema={{
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Sixteam.pro",
        "url": "https://sixteam.pro",
        "logo": "https://sixteam.pro/LOGO.png",
        "description": "Sixteam.pro implementa CRM, automatizaciones e inteligencia artificial para empresas en Colombia y Latinoamérica. Somos especialistas en GoHighLevel, RevOps y chatbots con IA.",
        "foundingDate": "2021",
        "areaServed": ["Colombia", "México", "Argentina", "Chile", "Perú", "Latinoamérica"],
        "serviceType": ["Implementación de CRM", "Automatización de marketing", "Chatbots con IA", "RevOps", "GoHighLevel"],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+573004188522",
          "email": "alpha@sixteam.pro",
          "contactType": "customer service",
          "availableLanguage": "Spanish",
          "areaServed": ["CO", "MX", "AR", "CL", "PE"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/sixteam-pro"
        ]
      }} />
      <Header />

      {/* Hero Section Profesional */}
      <section className="relative bg-[#0a2342] text-white overflow-hidden pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
        {/* Fondo base con degradado sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#1d70a2]/20 to-[#0a2342]"></div>

        {/* Fondo sólido sin degradado complicado */}

        {/* Red de nodos conectados con líneas dinámicas */}
        {animationsLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Nodos principales fijos con animación simple */}
            <div
              className="absolute w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse"
              style={{
                top: '20%',
                left: '15%',
                boxShadow: '0 0 10px rgba(0, 191, 165, 0.8)',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-[#1d70a2] rounded-full animate-pulse"
              style={{
                top: '70%',
                left: '80%',
                boxShadow: '0 0 10px rgba(29, 112, 162, 0.8)',
                animation: 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse"
              style={{
                top: '40%',
                left: '70%',
                boxShadow: '0 0 10px rgba(0, 191, 165, 0.8)',
                animation: 'pulse 1.8s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-[#1d70a2] rounded-full animate-pulse"
              style={{
                top: '60%',
                left: '25%',
                boxShadow: '0 0 10px rgba(29, 112, 162, 0.8)',
                animation: 'pulse 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div
              className="absolute w-3 h-3 bg-[#00bfa5] rounded-full animate-pulse hidden md:block"
              style={{
                top: '30%',
                left: '50%',
                boxShadow: '0 0 10px rgba(0, 191, 165, 0.8)',
                animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>

            {/* Líneas conectoras con glow animado */}
            <div
              className="absolute bg-gradient-to-r from-transparent via-[#00bfa5]/40 to-transparent h-px animate-pulse"
              style={{
                top: '20%',
                left: '15%',
                width: '55%',
                transformOrigin: 'left',
                transform: 'rotate(8deg)',
                animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>
            <div
              className="absolute bg-gradient-to-r from-transparent via-[#1d70a2]/40 to-transparent h-px animate-pulse"
              style={{
                top: '40%',
                left: '70%',
                width: '25%',
                transformOrigin: 'left',
                transform: 'rotate(-45deg)',
                animation: 'pulse 3.5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}
            ></div>

            {/* Partículas móviles simples */}
            <div
              className="absolute w-2 h-2 bg-[#00bfa5] rounded-full"
              style={{
                top: '20%',
                left: '15%',
                boxShadow: '0 0 6px rgba(0, 191, 165, 0.9)',
                animation: 'moveHorizontal1 4s linear infinite'
              }}
            ></div>
            <div
              className="absolute w-2 h-2 bg-[#1d70a2] rounded-full"
              style={{
                top: '40%',
                left: '70%',
                boxShadow: '0 0 6px rgba(29, 112, 162, 0.9)',
                animation: 'moveDiagonal1 5s linear infinite'
              }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-[#00bfa5]/80 rounded-full"
              style={{
                top: '10%',
                left: '30%',
                animation: 'floatUp1 8s ease-in-out infinite'
              }}
            ></div>
            <div
              className="absolute w-1 h-1 bg-[#1d70a2]/80 rounded-full"
              style={{
                top: '80%',
                left: '60%',
                animation: 'floatUp2 10s ease-in-out infinite'
              }}
            ></div>
          </div>
        )}

        {/* Líneas de flujo en movimiento continuo - solo cuando las animaciones estén cargadas */}
        {animationsLoaded && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#00bfa5]/40 to-transparent transform -rotate-12"
              style={{
                top: '35%',
                left: '-100%',
                width: '300%',
                animation: 'slideRight 8s infinite linear !important'
              }}
            ></div>
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#1d70a2]/30 to-transparent transform rotate-12"
              style={{
                top: '65%',
                left: '-100%',
                width: '300%',
                animation: 'slideLeft 10s infinite linear !important',
                animationDelay: '2s'
              }}
            ></div>
            <div
              className="absolute h-px bg-gradient-to-r from-transparent via-[#00bfa5]/20 to-transparent transform -rotate-6 hidden lg:block"
              style={{
                top: '50%',
                left: '-100%',
                width: '300%',
                animation: 'slideRight 12s infinite linear !important',
                animationDelay: '4s'
              }}
            ></div>
          </div>
        )}

        {/* Contenido principal */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8 py-8 sm:py-12 lg:py-16">

            {/* Etiqueta profesional */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 lg:py-3 bg-gray-800/70 border border-gray-600/50 rounded-full backdrop-blur-sm">
              <div className="text-sm sm:text-base lg:text-lg font-bold font-poppins tracking-tight whitespace-nowrap">
                <span className="text-white">Process</span>
                <span className="text-white mx-0.5">+</span>
                <span className="text-white">Technology</span>
                <span className="text-white mx-0.5">+</span>
                <span className="text-blue-400">People</span>
                <span className="text-white mx-0.5">=</span>
                <span className="text-green-400 font-bold">Growth</span>
              </div>
            </div>

            {/* Título principal profesional con animación */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight px-4 sm:px-0">
                <span className="text-white font-extrabold">¿Tus procesos </span>
                <span className="inline-block relative align-baseline" style={{ minWidth: '7ch' }}>
                  <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent whitespace-nowrap">
                    {displayText}
                  </span>
                  <span className="typewriter-cursor text-[#00bfa5] ml-0.5">|</span>
                </span>
                <span className="text-white font-extrabold"> te están </span>
                <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  impidiendo crecer?
                </span>
              </h1>

              <div className="max-w-5xl mx-auto space-y-3 sm:space-y-4 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-0">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-medium">
                  Integramos áreas de Marketing, ventas y servicio bajo una estrategia de RevOps potenciada con IA
                </p>
              </div>
            </div>

            {/* CTA Button único a WhatsApp */}
            <div className="flex justify-center items-center pt-3 sm:pt-4 lg:pt-6 px-4 sm:px-0">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 bg-[#00bfa5] hover:bg-[#00a08a] text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 max-w-sm sm:max-w-none"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                <span className="text-sm sm:text-base lg:text-lg">Solicita un Diagnóstico Inicial SIN COSTO</span>
              </Button>
            </div>


          </div>
        </div>
      </section>

      {/* Sección de Chat con IA Integrada - SIN padding top para continuidad perfecta */}
      <ChatSection />

      {/* Ecosistema de IA - Sección Profesional */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-[#0a2342] overflow-hidden">
        {/* Fondo sutil */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Título de sección para C-Level */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight px-4 sm:px-0">
              Revenue Operations
              <br />
              <span className="text-[#00bfa5]">Impulsado por IA</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-[#e0e0e0] leading-relaxed">
                Transformamos tu negocio con estrategia de Operaciones de Ingresos (Revenue Operations) y tecnología que conecta todas tus áreas, reduce costos, optimiza procesos y te permite tomar decisiones informadas en tiempo real.
              </p>
              <p className="text-base sm:text-lg text-[#e0e0e0]/70 leading-relaxed">
                Implementamos procesos avanzados, desde la calificación automática de leads hasta la gestión proactiva de clientes, para que aumentes el valor de cada cliente y bajes tus costos de adquisición.
              </p>

              {/* Métricas específicas RevOps + IA */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-8 sm:pt-12 px-4 sm:px-0">
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#1d70a2]/10 rounded-xl border border-[#1d70a2]/20">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00bfa5]">40%</div>
                  <div className="text-[#e0e0e0] text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Reducción CAC (Customer Acquisition Cost)</div>
                  <div className="text-[#e0e0e0]/70 text-xs">vs. procesos manuales tradicionales</div>
                </div>
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#1d70a2]/10 rounded-xl border border-[#1d70a2]/20">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00bfa5]">3.2x</div>
                  <div className="text-[#e0e0e0] text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Incremento en Lead-to-Customer Rate</div>
                  <div className="text-[#e0e0e0]/70 text-xs">con scoring predictivo + nurturing IA</div>
                </div>
                <div className="text-center space-y-3 sm:space-y-4 p-4 sm:p-6 bg-[#1d70a2]/10 rounded-xl border border-[#1d70a2]/20 sm:col-span-2 lg:col-span-1">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#00bfa5]">85%</div>
                  <div className="text-[#e0e0e0] text-xs sm:text-sm tracking-wide uppercase font-medium px-2">Automatización Sales Pipeline</div>
                  <div className="text-[#e0e0e0]/70 text-xs">desde lead capture hasta customer success</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Herramientas y Tecnologías */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-[#081c36] overflow-hidden">
        {/* Elementos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-[#1d70a2]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-40 sm:w-80 h-40 sm:h-80 bg-[#00bfa5]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-[#1d70a2]/10 border border-[#1d70a2]/30 rounded-full">
              <div className="w-2 h-2 bg-[#00bfa5] rounded-full"></div>
              <span className="text-[#e0e0e0] font-medium text-xs sm:text-sm tracking-wide">TECNOLOGÍAS LÍDERES</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight px-4 sm:px-0">
              Herramientas que
              <br />
              <span className="text-[#00bfa5]">Utilizamos</span>
            </h2>

            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-[#e0e0e0] leading-relaxed">
                Trabajamos con las mejores plataformas y herramientas del mercado para garantizar
                resultados excepcionales en tu transformación digital.
              </p>
              <p className="text-base sm:text-lg text-[#e0e0e0]/70 leading-relaxed">
                Cada herramienta está cuidadosamente seleccionada para maximizar
                el rendimiento y la escalabilidad de tu operación.
              </p>
            </div>
          </div>

          {/* Carrusel de logos */}
          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                duration: 50,
                dragFree: false,
                skipSnaps: false,
              }}
              setApi={setCarouselApi}
              className="w-full"
              data-carousel="main"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {partnerLogos.map((logo, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                    <div className="p-1">
                      <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-[#0d2d52] backdrop-blur-sm">
                        <CardContent className="flex items-center justify-center p-3 overflow-hidden" style={{ aspectRatio: '4/3' }}>
                          <img
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            decoding="async"
                            className="object-contain hover:scale-110 transition-all duration-300"
                            style={{
                              maxWidth: '140px',
                              maxHeight: '100px',
                              width: '95%',
                              height: '95%'
                            }}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>

          {/* CTA de herramientas */}
          <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-[#1d70a2] hover:bg-[#1d70a2]/80 text-white rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl max-w-md sm:max-w-none"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base lg:text-lg">Conoce Nuestras Integraciones</span>
            </Button>
          </div>
        </div>
      </section>

      {/* CRM Platform Section */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0a2342] overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
              <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
              <span className="text-teal-300 font-medium text-sm tracking-wide">CRM by Sixteam.pro</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Todo tu negocio,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">en una sola plataforma</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comercializamos nuestro propio CRM bajo la marca <span className="text-white font-semibold">CRM by Sixteam.pro</span>: una plataforma todo-en-uno que une ventas, marketing, atención al cliente y agentes de IA en un único ecosistema.
            </p>
          </div>

          {/* Main content: dashboard mockup + features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">

            {/* Left: visual dashboard card */}
            <div className="relative">
              <div className="bg-[#0d2d4f]/80 border border-[#1d70a2]/40 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl">

                {/* Top bar */}
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-[#1d70a2] to-[#00bfa5] rounded-xl flex items-center justify-center shadow-lg">
                      <Bot className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm leading-tight">CRM by Sixteam.pro</p>
                      <p className="text-[#00bfa5] text-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-[#00bfa5] rounded-full inline-block animate-pulse"></span>
                        En vivo
                      </p>
                    </div>
                  </div>
                  <span className="text-xs bg-[#00bfa5]/10 text-[#00bfa5] border border-[#00bfa5]/30 px-3 py-1 rounded-full font-medium">Todo incluido</span>
                </div>

                {/* Pipeline stages */}
                <div className="mb-6">
                  <p className="text-[#e0e0e0]/50 text-[0.65rem] uppercase tracking-widest mb-3 font-medium">Pipeline de Ventas</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { stage: 'Leads', count: '24', color: 'bg-[#1d70a2]', bar: 'w-full' },
                      { stage: 'Contactados', count: '18', color: 'bg-yellow-400', bar: 'w-3/4' },
                      { stage: 'Propuesta', count: '9', color: 'bg-orange-400', bar: 'w-2/5' },
                      { stage: 'Cerrados', count: '6', color: 'bg-[#00bfa5]', bar: 'w-1/4' },
                    ].map((s) => (
                      <div key={s.stage} className="bg-white/5 rounded-2xl p-3 text-center border border-white/8 flex flex-col items-center gap-1.5">
                        <div className={`w-2 h-2 ${s.color} rounded-full`}></div>
                        <p className="text-white font-bold text-xl leading-none">{s.count}</p>
                        <p className="text-[#e0e0e0]/50 text-[0.6rem] leading-tight">{s.stage}</p>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden mt-1">
                          <div className={`h-full ${s.color} ${s.bar} rounded-full opacity-70`}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conversion funnel visual */}
                <div className="mb-6">
                  <p className="text-[#e0e0e0]/50 text-[0.65rem] uppercase tracking-widest mb-3 font-medium">Tasa de Conversión</p>
                  <div className="bg-white/5 border border-white/8 rounded-2xl p-4 flex items-center gap-4">
                    <div className="flex-1 flex items-end gap-1.5 h-12">
                      {[85, 62, 40, 25].map((h, i) => (
                        <div key={i} className="flex-1 rounded-t-md" style={{
                          height: `${h}%`,
                          background: i === 3 ? 'linear-gradient(180deg,#00bfa5,#1d70a2)' : 'rgba(29,112,162,0.35)',
                        }}></div>
                      ))}
                    </div>
                    <div className="text-right">
                      <p className="text-[#00bfa5] font-bold text-2xl leading-none">25%</p>
                      <p className="text-[#e0e0e0]/50 text-[0.65rem] mt-0.5">Cierre</p>
                    </div>
                  </div>
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { num: '3.2×', label: 'Más cierres' },
                    { num: '-40%', label: 'Tiempo admin.' },
                    { num: '100%', label: 'Centralizado' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-white/5 border border-white/8 rounded-2xl p-3 text-center">
                      <p className="text-[#00bfa5] font-bold text-xl leading-none">{stat.num}</p>
                      <p className="text-[#e0e0e0]/50 text-[0.65rem] mt-1.5 leading-tight">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: features list */}
            <div className="space-y-4">
              {[
                {
                  icon: <Bot className="w-5 h-5 text-teal-400" />,
                  bg: 'bg-teal-500/10 border-teal-500/30',
                  title: 'Agente IA para WhatsApp',
                  desc: 'Responde mensajes de WhatsApp automáticamente con IA conversacional. Califica leads, responde preguntas frecuentes y agenda citas, sin que tu equipo intervenga.',
                  badge: 'Destacado',
                  badgeColor: 'bg-teal-400/20 text-teal-300 border-teal-400/30',
                },
                {
                  icon: <Headphones className="w-5 h-5 text-blue-400" />,
                  bg: 'bg-blue-500/10 border-blue-500/30',
                  title: 'Agente IA de Llamadas',
                  desc: 'Un agente de voz atiende y realiza llamadas como un humano. Captura datos, responde objeciones, transfiere a un asesor cuando es necesario y actualiza el CRM automáticamente.',
                  badge: 'Destacado',
                  badgeColor: 'bg-blue-400/20 text-blue-300 border-blue-400/30',
                },
                {
                  icon: <Target className="w-5 h-5 text-purple-400" />,
                  bg: 'bg-purple-500/10 border-purple-500/30',
                  title: 'Pipeline Visual + Automaciones',
                  desc: 'Gestiona todo tu embudo de ventas con pipelines visuales arrastrables. Automatiza seguimientos con flujos multicanal: SMS, email, WhatsApp y llamadas.',
                  badge: null,
                  badgeColor: '',
                },
                {
                  icon: <MessageCircle className="w-5 h-5 text-green-400" />,
                  bg: 'bg-green-500/10 border-green-500/30',
                  title: 'Bandeja Unificada de Conversaciones',
                  desc: 'Todas las conversaciones (WhatsApp, email, SMS, llamadas) en un solo perfil de cliente. Cero dispersión, contexto completo en tiempo real.',
                  badge: null,
                  badgeColor: '',
                },
                {
                  icon: <Zap className="w-5 h-5 text-yellow-400" />,
                  bg: 'bg-yellow-500/10 border-yellow-500/30',
                  title: 'Páginas, Formularios y Pagos',
                  desc: 'Crea landing pages, formularios de captura, calendarios de citas y procesa pagos, todo dentro del mismo CRM, sin herramientas externas.',
                  badge: null,
                  badgeColor: '',
                },
                {
                  icon: <Brain className="w-5 h-5 text-pink-400" />,
                  bg: 'bg-pink-500/10 border-pink-500/30',
                  title: 'Reportes y Analytics en Tiempo Real',
                  desc: 'Dashboards ejecutivos con métricas de conversión, ciclo de venta, ROI por canal y rendimiento de agentes IA. Decisiones basadas en datos, no en intuición.',
                  badge: null,
                  badgeColor: '',
                },
              ].map((feature, i) => (
                <div key={i} className={`flex gap-4 p-5 bg-white/5 border ${feature.bg} rounded-2xl hover:bg-white/8 transition-all duration-300 group backdrop-blur-sm`}>
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-white/10">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-white">{feature.title}</h4>
                      {feature.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${feature.badgeColor}`}>{feature.badge}</span>
                      )}
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}

              {/* CTA to WhatsApp */}
              <div className="mt-2 p-6 bg-gradient-to-r from-blue-600/80 to-teal-600/80 border border-white/10 rounded-2xl text-white backdrop-blur-sm">
                <h4 className="text-xl font-bold mb-1">¿Quieres ver el CRM en acción?</h4>
                <p className="text-blue-100 text-sm mb-4">Agenda una demo personalizada y descubre el agente IA respondiendo en vivo.</p>
                <Button
                  onClick={() => window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20CRM%20by%20Sixteam.pro%20y%20el%20agente%20IA%20de%20WhatsApp%20y%20llamadas', '_blank')}
                  className="bg-white text-blue-700 hover:bg-blue-50 font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Solicitar Demo por WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Pricing escalera */}
          <div className="mt-16 sm:mt-20 lg:mt-24 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">Planes Sixteam Ops</h3>
              <p className="text-gray-300 text-base sm:text-lg">Elige el plan que se adapta al tamaño y necesidades de tu negocio</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Plan 1 */}
              <div className="relative bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300">
                <div className="mb-6">
                  <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Entrada</p>
                  <h4 className="text-white text-xl font-bold mb-1">Ops Esencial</h4>
                  <p className="text-gray-400 text-sm">CRM, bandeja unificada y agente IA incluido</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-bold text-white">$199</span>
                    <span className="text-gray-400 text-sm mb-1">USD/mes</span>
                  </div>
                  <p className="text-gray-500 text-xs">60 créditos IA | 1 agente activo | sin setup obligatorio</p>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Bandeja unificada (WhatsApp, email, SMS)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Agente IA WhatsApp 24/7</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Gestión de contactos</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Wallet inicial de mensajería</li>
                </ul>
                <Button
                  onClick={() => window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20el%20plan%20Ops%20Esencial', '_blank')}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl py-3 font-semibold transition-all"
                >
                  Empezar con Esencial
                </Button>
              </div>

              {/* Plan 2 — Most popular */}
              <div className="relative bg-gradient-to-b from-blue-600/30 to-blue-900/30 border border-blue-400/50 rounded-2xl p-6 sm:p-8 backdrop-blur-sm shadow-xl shadow-blue-900/20">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">MÁS POPULAR</div>
                <div className="mb-6">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Crecimiento</p>
                  <h4 className="text-white text-xl font-bold mb-1">Ops Integral</h4>
                  <p className="text-gray-400 text-sm">Operación completa para equipos comerciales</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-bold text-white">$499</span>
                    <span className="text-gray-400 text-sm mb-1">USD/mes</span>
                  </div>
                  <p className="text-gray-500 text-xs">160 créditos IA | integraciones avanzadas | onboarding VIP</p>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />Todo lo de Ops Esencial</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />Pipeline de ventas visual</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />Automatizaciones avanzadas</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />Landing pages y formularios</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />Onboarding VIP incluido</li>
                </ul>
                <Button
                  onClick={() => window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20el%20plan%20Ops%20Integral%20de%20Sixteam.pro', '_blank')}
                  className="w-full bg-blue-500 hover:bg-blue-400 text-white rounded-xl py-3 font-semibold transition-all shadow-lg"
                >
                  Empezar con Integral
                </Button>
              </div>

              {/* Plan 3 */}
              <div className="relative bg-white/5 border border-white/15 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:border-teal-400/50 transition-all duration-300">
                <div className="mb-6">
                  <p className="text-teal-400 text-xs font-bold uppercase tracking-widest mb-2">Escala</p>
                  <h4 className="text-white text-xl font-bold mb-1">Ops Total</h4>
                  <p className="text-gray-400 text-sm">Para equipos en expansión con operación gestionada</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-end gap-1 mb-1">
                    <span className="text-3xl font-bold text-white">$1,200</span>
                    <span className="text-gray-400 text-sm mb-1">USD/mes</span>
                  </div>
                  <p className="text-gray-500 text-xs">Desde | 400+ créditos IA | PM dedicado</p>
                </div>
                <ul className="space-y-2 mb-8 text-sm text-gray-300">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Todo lo de Ops Integral</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Agente IA de llamadas 24/7</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Reportes y analytics avanzados</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Membresía y cursos integrados</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />Llamadas estratégicas semanales</li>
                </ul>
                <Button
                  onClick={() => window.open('https://wa.me/+573004188522?text=Hola%2C%20me%20interesa%20el%20plan%20Ops%20Total%20de%20Sixteam.pro', '_blank')}
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl py-3 font-semibold transition-all"
                >
                  Cotizar Ops Total
                </Button>
              </div>
            </div>

            <p className="text-center text-gray-500 text-xs mt-6">Precios en USD. Esencial e Integral tienen precio público; Total se cotiza según requerimientos.</p>
          </div>
        </div>
      </section>

      {/* Nuestro Ciclo de Servicio */}
      <section className="relative py-12 sm:py-16 lg:py-24 bg-[#081c36] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(100, 116, 139, 0.08) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 text-white leading-tight px-4 sm:px-0">
              Nuestro Ciclo de Servicio para tu
              <br />
              <span className="text-[#00bfa5]">Transformación Digital</span>
            </h2>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0">
              <p className="text-lg sm:text-xl text-[#e0e0e0] leading-relaxed">
                Entendemos que la verdadera transformación digital no se logra de manera aislada, sino con un socio estratégico que facilite este proceso. Por eso, diseñamos un ciclo de servicio para acompañarte en cada etapa y garantizar el resultado deseado.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <Link to={service.path} className="block bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-xl p-6 sm:p-8 hover:border-[#00bfa5]/50 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center justify-center mb-6 sm:mb-8">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1d70a2]/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">{service.title}</h3>
                  <p className="text-[#e0e0e0] leading-relaxed text-sm sm:text-base text-center mb-4">
                    {service.description}
                  </p>
                  <p className="text-[#00bfa5] hover:text-[#00bfa5]/80 text-sm font-semibold text-center group-hover:underline">Ver detalles →</p>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center px-4 sm:px-0">
            <Button
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto px-8 sm:px-12 py-3 sm:py-4 bg-[#1d70a2] hover:bg-[#1d70a2]/80 text-white rounded-lg font-semibold text-base sm:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl max-w-md sm:max-w-none"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
              <span className="text-sm sm:text-base lg:text-lg">Conoce más sobre estos servicios</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ── POR QUÉ SIXTEAM ── */}
      <section className="relative py-16 sm:py-24 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#1d70a2]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Izquierda — texto + diferenciadores */}
            <div>
              <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-6">Por qué Sixteam</p>
              <h2 className="font-poppins font-black text-[clamp(2rem,5vw,3.5rem)] text-[#0a2342] leading-tight mb-8">
                Más que implementadores,
                <br />
                <span className="text-[#1d70a2]">tus socios estratégicos</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                Antes de tocar una sola herramienta, invertimos tiempo en entender tu operación desde adentro. Mapeamos procesos, entrevistamos al equipo, identificamos qué automatizar y qué eliminar.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Y nos quedamos junto a ti mucho después de la implementación: en tu WhatsApp, en tus reuniones, ideando contigo cada semana.
              </p>
              <div className="space-y-3">
                {[
                  'Comenzamos con preguntas de negocio, no con demos de software',
                  'Mapeamos procesos reales antes de recomendar herramientas',
                  'Diseñamos la arquitectura antes de cualquier configuración',
                  'Medimos éxito en resultados de negocio, no en funcionalidades',
                  'Soporte continuo post-implementación, somos parte de tu equipo',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-[#0a2342]/3 border border-[#1d70a2]/15 rounded-lg hover:border-[#00bfa5]/40 transition-all">
                    <CheckCircle className="w-5 h-5 text-[#00bfa5] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Derecha — pilares + CTA */}
            <div className="space-y-4">
              {pilarsOfValue.map((pilar, index) => (
                <div key={index} className="border border-[#1d70a2]/20 rounded-xl p-6 hover:border-[#00bfa5]/40 hover:shadow-md transition-all">
                  <h4 className="text-xl font-bold text-[#0a2342] mb-3">{pilar.title}</h4>
                  <p className="text-gray-500 text-base leading-relaxed">
                    {pilar.description.split('**').map((part, i) =>
                      i % 2 === 0 ? part : <span key={i} className="text-[#1d70a2] font-semibold">{part}</span>
                    )}
                  </p>
                </div>
              ))}

              <div className="bg-gradient-to-r from-[#0a2342] to-[#1d70a2] rounded-xl p-7 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full mb-4">
                  <div className="w-1.5 h-1.5 bg-[#00bfa5] rounded-full animate-pulse" />
                  <span className="text-[#00bfa5] text-xs font-semibold tracking-wide uppercase">Sin costo</span>
                </div>
                <h4 className="text-xl font-bold mb-2">¿No sabes por dónde empezar?</h4>
                <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                  45 minutos de diagnóstico estratégico. Sin compromiso. Saldrás con claridad sobre qué tecnología tiene sentido para tu negocio ahora mismo.
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-[#00bfa5] hover:bg-[#009e96] text-[#0a2342] font-bold px-6 py-3 rounded-lg transition-all h-auto"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Agendar diagnóstico gratuito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASOS DE ÉXITO ── */}
      <section className="relative py-16 sm:py-24 bg-[#0a2342] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d2d52] to-[#0a2342]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00bfa5]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <div className="text-center mb-14">
            <p className="text-[#00bfa5] text-xs font-bold tracking-[0.2em] uppercase mb-4">Resultados reales</p>
            <h2 className="font-poppins font-black text-[clamp(2rem,5vw,3.5rem)] text-white leading-tight">
              Empresas que ya transformaron
              <br className="hidden sm:block" />
              su operación con Sixteam
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              to="/casos/master-viajes"
              className="group block bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-2xl p-8 hover:border-[#00bfa5]/50 transition-all hover:-translate-y-1"
            >
              <p className="text-[#00bfa5] text-xs font-bold tracking-widest uppercase mb-3">Agencias de Viaje</p>
              <h3 className="font-poppins font-bold text-2xl text-white mb-3">Master Viajes</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Centralizó 4 canales de venta y 2 líneas de negocio en un solo sistema. Zero doble digitación, visibilidad total del negocio en menos de 4 meses.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-[#00bfa5] font-poppins">4</div>
                  <div className="text-gray-500 text-xs mt-1">Canales conectados</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-[#00bfa5] font-poppins">100%</div>
                  <div className="text-gray-500 text-xs mt-1">Trazabilidad</div>
                </div>
              </div>
              <span className="text-[#00bfa5] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver caso completo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/casos/student-travel-center"
              className="group block bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-2xl p-8 hover:border-[#00bfa5]/50 transition-all hover:-translate-y-1"
            >
              <p className="text-[#00bfa5] text-xs font-bold tracking-widest uppercase mb-3">Educación Internacional</p>
              <h3 className="font-poppins font-bold text-2xl text-white mb-3">Student Travel Center</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                +4 años de alianza continua. Agente de IA omnicanal, HubSpot CRM, Meta Ads y operación centralizada. Partners del día a día.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-[#00bfa5] font-poppins">+30K</div>
                  <div className="text-gray-500 text-xs mt-1">Registros CRM</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 text-center">
                  <div className="text-2xl font-black text-[#00bfa5] font-poppins">+4</div>
                  <div className="text-gray-500 text-xs mt-1">Años de alianza</div>
                </div>
              </div>
              <span className="text-[#00bfa5] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                Ver caso completo <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/casos-exito"
              className="inline-flex items-center gap-2 text-white/50 hover:text-[#00bfa5] text-sm font-semibold transition-colors"
            >
              Ver todos los casos de éxito <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonios — reservado */}
      {false && (
      <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-[#081c36] via-[#0a2342] to-[#081c36] overflow-hidden">
        {/* Elementos decorativos flotantes */}
        <div className="absolute inset-0">
          <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-16 sm:w-32 h-16 sm:h-32 border border-[#1d70a2]/30 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-8 sm:bottom-16 left-8 sm:left-16 w-24 sm:w-48 h-24 sm:h-48 border border-[#1d70a2]/20 rounded-full opacity-20 animate-spin" style={{ animationDuration: '30s' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-400 font-medium text-xs sm:text-sm">Resultados Verificados</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 px-4 sm:px-0">
              <span className="text-white">Transformaciones</span>
              <br />
              <span className="text-[#00bfa5]">de Alto Impacto</span>
            </h2>

            <p className="text-lg sm:text-xl text-[#e0e0e0] max-w-3xl mx-auto leading-relaxed px-4 sm:px-6 lg:px-0">
              Empresas líderes confían en nosotros para revolucionar sus operaciones
              con inteligencia artificial y automatización de vanguardia.
            </p>
          </div>

          {/* Grid de testimonios premium */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Card principal */}
                <div className="relative bg-gradient-to-br from-[#0d2d52] to-[#0a2342] border border-[#1d70a2]/30 rounded-3xl p-8 hover:border-[#00bfa5]/50 hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-2 flex flex-col h-full">

                  {/* Header con estrellas y badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
                      VERIFICADO
                    </div>
                  </div>

                  {/* Quote con diseño elegante */}
                  <div className="relative mb-8 flex-1">
                    <div className="absolute -top-3 -left-2 text-5xl text-[#1d70a2]/40 font-serif leading-none">"</div>
                    <p className="text-base text-[#e0e0e0] leading-relaxed italic relative z-10 pl-6 pr-4">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Separador */}
                  <div className="w-full h-px bg-[#1d70a2]/30 mb-6"></div>

                  {/* Información del cliente con avatar */}
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                      style={{ backgroundColor: testimonial.avatarColor }}
                    >
                      {testimonial.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-white text-base leading-tight">{testimonial.name}</p>
                      <p className="text-[#00bfa5] text-sm font-medium">{testimonial.role}</p>
                      <p className="text-[#e0e0e0]/70 text-sm truncate">{testimonial.company}</p>
                      <p className="text-[#e0e0e0]/50 text-xs mt-1">{testimonial.flag} {testimonial.city}</p>
                    </div>
                  </div>

                  {/* Línea decorativa */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#00bfa5] rounded-full"></div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA final poderoso */}
          <div className="text-center mt-20">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                ¿Quieres ser el próximo caso de éxito?
              </h3>
              <p className="text-xl text-blue-100 mb-6">
                Únete a empresas líderes que ya están dominando su mercado con IA
              </p>
              <Button
                onClick={handleWhatsAppClick}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg transform hover:scale-105 transition-all shadow-xl"
              >
                Comenzar Mi Transformación
              </Button>
            </div>
          </div>
        </div>
      </section>
      )}

      <Footer />
    </div>
  );
};

export default Index;
