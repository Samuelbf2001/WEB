import compression from 'compression';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import {
  DEFAULT_OG_IMAGE,
  normalizePath,
  notFoundSeo,
  redirectRoutes,
  resolveSeo,
} from './seo-routes.js';
import { renderSchemaTags, schemasForRoute } from './seo-schema.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// Ruta absoluta a la carpeta dist
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

const SPANISH_MARKET_COUNTRIES = new Set([
  'AR', 'BO', 'CL', 'CO', 'CR', 'CU', 'DO', 'EC', 'ES', 'GQ', 'GT',
  'HN', 'MX', 'NI', 'PA', 'PE', 'PR', 'PY', 'SV', 'UY', 'VE',
]);

const COUNTRY_HEADERS = [
  'cf-ipcountry',
  'x-vercel-ip-country',
  'x-nf-country',
  'cloudfront-viewer-country',
  'x-country-code',
  'x-appengine-country',
  'x-geo-country',
  'x-client-geo-country',
  'x-forwarded-country',
];

const normalizeCountry = (country) => {
  const normalized = country?.toString().split(',')[0].trim().toUpperCase();
  return normalized && normalized !== 'XX' && normalized !== 'UNKNOWN' ? normalized : undefined;
};

const getCountryFromRequest = (req) => {
  for (const header of COUNTRY_HEADERS) {
    const value = req.headers[header];
    const country = normalizeCountry(Array.isArray(value) ? value[0] : value);
    if (country) return country;
  }
  return undefined;
};

const localeFromCountry = (country) => {
  if (!country) return undefined;
  return SPANISH_MARKET_COUNTRIES.has(country) ? 'es' : 'en';
};

const localeFromAcceptLanguage = (acceptLanguage = '') => {
  const firstLanguage = acceptLanguage.split(',')[0]?.trim().toLowerCase();
  if (!firstLanguage) return undefined;
  return firstLanguage.startsWith('es') ? 'es' : 'en';
};

const resolveLocale = (req) => {
  const country = getCountryFromRequest(req);
  const countryLocale = localeFromCountry(country);
  if (countryLocale) return { locale: countryLocale, country, source: 'ip' };

  const browserLocale = localeFromAcceptLanguage(req.headers['accept-language']);
  if (browserLocale) return { locale: browserLocale, country, source: 'accept-language' };

  return { locale: 'es', country, source: 'default' };
};

const buildLocaleScript = ({ locale, country, source }) => `
<script id="sixteam-locale">
  window.__SIXTEAM_LOCALE__ = ${JSON.stringify(locale)};
  window.__SIXTEAM_COUNTRY__ = ${JSON.stringify(country ?? '')};
  window.__SIXTEAM_LOCALE_SOURCE__ = ${JSON.stringify(source)};
</script>`;

/**
 * Precarga del chunk de la ruta pedida.
 *
 * Todas las páginas van detrás de `React.lazy`, así que el navegador no
 * descubre el chunk de la página hasta que el entry se ha descargado, parseado
 * y ejecutado: una cascada de dos saltos antes de poder pintar el contenido
 * principal. Como el servidor ya sabe qué ruta se pidió, puede anunciar ese
 * chunk en el propio HTML y solaparlo con la descarga del entry.
 */
const manifestPath = path.join(distPath, '.vite', 'manifest.json');
let viteManifest = null;

const getManifest = () => {
  if (viteManifest === null) {
    try {
      viteManifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    } catch {
      // Sin manifiesto simplemente no se precarga nada: la app funciona igual.
      viteManifest = {};
    }
  }
  return viteManifest;
};

const buildPreloadTags = (source, html) => {
  if (!source) return '';
  const manifest = getManifest();
  const entry = manifest[source];
  if (!entry) return '';

  const files = new Set();
  if (entry.file) files.add(entry.file);
  (entry.imports ?? []).forEach((key) => {
    const imported = manifest[key];
    if (imported?.file) files.add(imported.file);
  });
  (entry.css ?? []).forEach((file) => files.add(file));

  // Vite ya anuncia los vendors compartidos en el HTML, y con `crossorigin`.
  // Repetirlos sin ese atributo haría que el navegador los descargue dos veces,
  // porque el modo CORS forma parte de la clave de caché.
  return [...files]
    .filter((file) => !html.includes(`/${file}`))
    .map((file) =>
      file.endsWith('.css')
        ? `<link rel="preload" as="style" href="/${file}">`
        : `<link rel="modulepreload" crossorigin href="/${file}">`
    )
    .join('\n');
};

const escapeAttr = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

/**
 * Reescribe los metadatos del index.html con los de la ruta pedida.
 *
 * Es lo único que ven los crawlers y los scrapers de previews sociales:
 * ninguno ejecuta el JavaScript de la SPA, así que `useSEO` (que inyecta en
 * un useEffect) solo sirve para la navegación en cliente. Sin esta reescritura
 * todas las rutas sirven el title, la description y el canonical de la home.
 */
const applySeo = (html, meta) => {
  const ogImage = meta.ogImage ?? DEFAULT_OG_IMAGE;
  const replaceTag = (source, pattern, replacement) =>
    pattern.test(source) ? source.replace(pattern, replacement) : source;

  let out = html;

  out = replaceTag(out, /<title>[\s\S]*?<\/title>/i, `<title>${escapeAttr(meta.title)}</title>`);

  const metaTag = (attr, key, value) =>
    new RegExp(`<meta\\s+${attr}="${key}"[^>]*>`, 'i');

  out = replaceTag(
    out,
    metaTag('name', 'description'),
    `<meta name="description" content="${escapeAttr(meta.description)}" />`
  );

  const og = {
    'og:title': meta.title,
    'og:description': meta.description,
    'og:image': ogImage,
    'og:url': meta.canonical,
  };
  for (const [key, value] of Object.entries(og)) {
    if (!value) continue;
    out = replaceTag(
      out,
      metaTag('property', key),
      `<meta property="${key}" content="${escapeAttr(value)}" />`
    );
  }

  const twitter = {
    'twitter:title': meta.title,
    'twitter:description': meta.description,
    'twitter:image': ogImage,
  };
  for (const [key, value] of Object.entries(twitter)) {
    out = replaceTag(
      out,
      metaTag('name', key),
      `<meta name="${key}" content="${escapeAttr(value)}" />`
    );
  }

  if (meta.canonical) {
    out = replaceTag(
      out,
      /<link\s+rel="canonical"[^>]*>/i,
      `<link rel="canonical" href="${escapeAttr(meta.canonical)}" />`
    );
  }

  out = replaceTag(
    out,
    metaTag('name', 'robots'),
    `<meta name="robots" content="${meta.noindex ? 'noindex, nofollow' : 'index, follow'}" />`
  );

  return out;
};

const sendIndex = (req, res) => {
  const localeConfig = resolveLocale(req);
  const html = fs.readFileSync(indexPath, 'utf8');
  const localeScript = buildLocaleScript(localeConfig);

  const pathname = normalizePath(req.path);
  const seo = resolveSeo(pathname);
  const redirectTarget = redirectRoutes[pathname];
  const isLegacyV2 = pathname.startsWith('/v2');
  const isKnownRoute = Boolean(seo) || Boolean(redirectTarget) || isLegacyV2;

  // Las rutas de redirección solo existen para no romper enlaces antiguos:
  // apuntan su canonical al destino real y no deben indexarse por sí mismas.
  const meta = seo
    ? seo
    : redirectTarget
      ? { ...resolveSeo(redirectTarget), noindex: true }
      : isLegacyV2
        ? { ...resolveSeo('/'), noindex: true }
        : notFoundSeo;

  const seoHtml = applySeo(html, meta);

  // El JSON-LD tiene que estar en el HTML servido: los crawlers de motores
  // generativos leen el documento sin ejecutar su JavaScript.
  const schemaTags = renderSchemaTags(schemasForRoute(pathname, meta));

  const preloadTags = buildPreloadTags(seo?.source, html);

  const headInjection = [preloadTags, schemaTags, localeScript]
    .filter(Boolean)
    .join('\n');
  const localizedHtml = seoHtml.includes('</head>')
    ? seoHtml.replace('</head>', `${headInjection}\n</head>`)
    : `${headInjection}\n${seoHtml}`;

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Content-Language', localeConfig.locale);
  res.setHeader(
    'Vary',
    'CF-IPCountry, X-Vercel-IP-Country, X-NF-Country, CloudFront-Viewer-Country, X-Country-Code, X-AppEngine-Country, X-Geo-Country, X-Client-Geo-Country, X-Forwarded-Country, Accept-Language'
  );

  // Una URL inexistente debe responder 404, no 200. Sin esto Google indexa
  // cualquier URL inventada como si fuera contenido válido (soft-404).
  if (!isKnownRoute) {
    res.status(404);
  }

  res.send(localizedHtml);
};

// Compresión de texto. Sin esto, HTML, JS y CSS viajan en crudo: el bundle
// del entry pasa de ~53 kB a ~164 kB por visita.
app.use(compression());

// Vite escribe los assets que genera con un hash en el nombre
// (index-BrHisrD1.js). Solo esos pueden cachearse de forma inmutable: los
// ficheros copiados tal cual desde public/ conservan su nombre, así que
// marcarlos immutable serviría versiones obsoletas hasta un año.
const HASHED_ASSET = /-[A-Za-z0-9_-]{8,}\.[a-z0-9]+$/;

// Servir archivos estáticos con MIME types correctos
// express.static ya detecta MIME types automáticamente
// Solo sobreescribimos Cache-Control diferenciado por tipo
app.use(express.static(distPath, {
  index: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // HTML nunca se cachea para que siempre cargue la última versión
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else if (HASHED_ASSET.test(path.basename(filePath))) {
      // El hash cambia con el contenido: cachear un año es seguro
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    } else {
      // Nombre estable (logos, og-image, favicons): un día y revalidación
      res.setHeader('Cache-Control', 'public, max-age=86400, must-revalidate');
    }
  }
}));

// SPA fallback - todas las rutas no encontradas van a index.html
app.get('*', sendIndex);

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
  console.log(`📁 Sirviendo archivos desde: ${distPath}`);
});
