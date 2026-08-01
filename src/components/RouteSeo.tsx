import { useLocation } from 'react-router-dom';
import { useSEO } from '@/hooks/useSEO';
import { resolveSeo, notFoundSeo } from '../../seo-routes.js';

interface RouteSeoEntry {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Aplica los metadatos de `seo-routes.js` en cada cambio de ruta.
 *
 * El HTML que reciben crawlers y scrapers sociales ya lo reescribe `server.js`
 * desde ese mismo mapa; esto cubre la navegación en cliente, donde el SPA no
 * vuelve a pedir el documento y el `<title>` se quedaría congelado en el de la
 * primera página visitada (con el ruido correspondiente en analítica e
 * historial del navegador).
 */
const RouteSeo = () => {
  const { pathname } = useLocation();
  const meta = (resolveSeo(pathname) ?? notFoundSeo) as RouteSeoEntry;

  useSEO({
    title: meta.title,
    description: meta.description,
    canonical: meta.canonical,
    ogImage: meta.ogImage,
    noindex: meta.noindex,
  });

  return null;
};

export default RouteSeo;
