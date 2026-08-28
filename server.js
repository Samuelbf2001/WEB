import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import geoip from 'fast-geoip';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// Detrás de Traefik/Easypanel el IP real del visitante llega en X-Forwarded-For.
app.set('trust proxy', true);

// Ruta absoluta a la carpeta dist
const distPath = path.join(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

const SITE_ORIGIN = process.env.SITE_ORIGIN || 'https://sixteam.pro';

// El inglés vive en su propio árbol de URLs (/en, /en/precios, ...).
// El español se queda en la raíz y es el canónico para LATAM y para Google.
const EN_PREFIX = '/en';

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

// Los bots nunca se redirigen: cada árbol de URLs se indexa en su idioma.
// Si Googlebot (que rastrea desde IPs de EEUU) fuera redirigido, el home
// español acabaría indexado en inglés.
const BOT_UA = /bot|crawler|spider|crawling|slurp|mediapartners|adsbot|lighthouse|pagespeed|headlesschrome|facebookexternalhit|whatsapp|telegram|discord|slackbot|embedly|preview|monitor|pingdom|uptime|curl|wget|python-requests|axios|go-http-client|java\/|okhttp|postman/i;

const LOCALE_COOKIE = 'sixteam_locale';

// Rutas (en su forma española) cuyo contenido en inglés está completo.
// Solo estas se declaran como alternate y se dejan indexar bajo /en: el resto
// del árbol inglés sigue navegable pero va con noindex, para que Google no
// indexe páginas medio traducidas. Al terminar de traducir una página, se
// agrega aquí y al sitemap.
const EN_TRANSLATED_PATHS = new Set(['/']);

const normalizeCountry = (country) => {
  const normalized = country?.toString().split(',')[0].trim().toUpperCase();
  return normalized && normalized !== 'XX' && normalized !== 'UNKNOWN' ? normalized : undefined;
};

const getCountryFromHeaders = (req) => {
  for (const header of COUNTRY_HEADERS) {
    const value = req.headers[header];
    const country = normalizeCountry(Array.isArray(value) ? value[0] : value);
    if (country) return country;
  }
  return undefined;
};

const getClientIp = (req) => {
  const forwarded = req.headers['x-forwarded-for'];
  const first = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0];
  const raw = first || req.headers['x-real-ip'] || req.socket?.remoteAddress || '';
  return raw.toString().trim().replace(/^::ffff:/i, '').replace(/^\[|\]$/g, '');
};

const isPrivateIp = (ip) =>
  !ip ||
  ip === '::1' ||
  /^(10\.|127\.|192\.168\.|169\.254\.|172\.(1[6-9]|2\d|3[01])\.)/.test(ip) ||
  /^(fc|fd|fe80)/i.test(ip);

// El país sale del header del CDN si algún día hay uno delante; si no,
// de la base local de fast-geoip (lee de disco, no carga 100MB en RAM).
const resolveCountry = async (req) => {
  const fromHeader = getCountryFromHeaders(req);
  if (fromHeader) return { country: fromHeader, via: 'header' };

  const ip = getClientIp(req);
  if (isPrivateIp(ip)) return { country: undefined, via: 'none' };

  try {
    const geo = await geoip.lookup(ip);
    const country = normalizeCountry(geo?.country);
    if (country) return { country, via: 'geoip' };
  } catch {
    // Una IP malformada no debe tumbar la respuesta.
  }
  return { country: undefined, via: 'none' };
};

const readCookie = (req, name) => {
  const raw = req.headers.cookie;
  if (!raw) return undefined;
  for (const part of raw.split(';')) {
    const [key, ...rest] = part.trim().split('=');
    if (key === name) return decodeURIComponent(rest.join('='));
  }
  return undefined;
};

const isSupportedLocale = (value) => value === 'es' || value === 'en';

const isEnglishPath = (pathname) => pathname === EN_PREFIX || pathname.startsWith(`${EN_PREFIX}/`);

const toSpanishPath = (pathname) =>
  isEnglishPath(pathname) ? pathname.slice(EN_PREFIX.length) || '/' : pathname;

const toEnglishPath = (pathname) => {
  if (isEnglishPath(pathname)) return pathname;
  return pathname === '/' ? EN_PREFIX : `${EN_PREFIX}${pathname}`;
};

const localeFromAcceptLanguage = (acceptLanguage = '') => {
  const firstLanguage = acceptLanguage.split(',')[0]?.trim().toLowerCase();
  if (!firstLanguage) return undefined;
  return firstLanguage.startsWith('es') ? 'es' : 'en';
};

const buildHeadInjection = ({ locale, country, source, canonical, esUrl, enUrl, translated }) => {
  const alternates = translated
    ? `
<link rel="alternate" hreflang="es" href="${esUrl}" />
<link rel="alternate" hreflang="en" href="${enUrl}" />
<link rel="alternate" hreflang="x-default" href="${esUrl}" />`
    : '';

  return `
<script id="sixteam-locale">
  window.__SIXTEAM_LOCALE__ = ${JSON.stringify(locale)};
  window.__SIXTEAM_COUNTRY__ = ${JSON.stringify(country ?? '')};
  window.__SIXTEAM_LOCALE_SOURCE__ = ${JSON.stringify(source)};
</script>
<link rel="canonical" href="${canonical}" />${alternates}`;
};

// El index.html trae el title y las descripciones en español. El árbol /en
// necesita las suyas: es lo que Google muestra en el snippet y lo que se ve
// al compartir el link. Son traducción directa del copy español.
const EN_META = {
  title: 'Sixteam.pro — CRM, Automations and AI for Companies',
  description:
    'We drive your business growth with AI and automation. We combine process, technology and people for your digital transformation.',
  ogDescription:
    'We drive your business growth with CRM, automations and AI. Specialists in GoHighLevel, RevOps and chatbots for companies across the Americas.',
};

const escapeAttr = (value) => value.replace(/"/g, '&quot;');

const localizeMeta = (html) =>
  html
    .replace(/<title>[^<]*<\/title>/i, `<title>${EN_META.title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/?>/i,
      `<meta name="description" content="${escapeAttr(EN_META.description)}" />`
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/?>/i,
      `<meta property="og:title" content="${escapeAttr(EN_META.title)}" />`
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/?>/i,
      `<meta property="og:description" content="${escapeAttr(EN_META.ogDescription)}" />`
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:title" content="${escapeAttr(EN_META.title)}" />`
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/?>/i,
      `<meta name="twitter:description" content="${escapeAttr(EN_META.ogDescription)}" />`
    );

const localizeHtml = (html, context) => {
  const isEnglish = context.locale === 'en';
  let base = isEnglish ? localizeMeta(html) : html;

  // El index.html trae robots "index, follow": se reemplaza (no se duplica)
  // cuando la página inglesa todavía no está traducida del todo.
  if (isEnglish && !context.translated) {
    const noindex = '<meta name="robots" content="noindex,follow" />';
    base = /<meta name="robots"[^>]*>/i.test(base)
      ? base.replace(/<meta name="robots"[^>]*>/i, noindex)
      : base.replace('</head>', `${noindex}\n</head>`);
  }

  const localized = base
    // El canonical y el og:locale del index.html son fijos en español:
    // se reemplazan por los que corresponden a esta URL.
    .replace(/\s*<link rel="canonical"[^>]*>/i, '')
    .replace(/<html lang="[^"]*"/i, `<html lang="${isEnglish ? 'en' : 'es-CO'}"`)
    .replace(
      /<meta property="og:locale" content="[^"]*"\s*\/?>/i,
      `<meta property="og:locale" content="${isEnglish ? 'en_US' : 'es_CO'}" />`
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/?>/i,
      `<meta property="og:url" content="${context.canonical}" />`
    );

  const head = buildHeadInjection(context);
  return localized.includes('</head>')
    ? localized.replace('</head>', `${head}\n</head>`)
    : `${head}\n${localized}`;
};

const VARY_HEADER = [
  'CF-IPCountry',
  'X-Vercel-IP-Country',
  'X-NF-Country',
  'CloudFront-Viewer-Country',
  'X-Country-Code',
  'X-AppEngine-Country',
  'X-Geo-Country',
  'X-Client-Geo-Country',
  'X-Forwarded-Country',
  'Accept-Language',
  'Cookie',
  'User-Agent',
].join(', ');

// /en/ y /precios/ son la misma página que /en y /precios: se normaliza para
// que el canonical y los alternates no dupliquen URLs.
const normalizePath = (pathname) => (pathname.length > 1 ? pathname.replace(/\/+$/, '') || '/' : pathname);

const handleHtml = async (req, res) => {
  const pathname = normalizePath(req.path);
  const search = req.originalUrl.slice(req.path.length);
  const englishTree = isEnglishPath(pathname);
  const esPath = toSpanishPath(pathname);
  const enPath = toEnglishPath(pathname);
  const hasExtension = /\.[a-z0-9]{2,5}$/i.test(pathname);

  const userAgent = req.headers['user-agent'] || '';
  const isBot = BOT_UA.test(userAgent);
  const queryLocale = isSupportedLocale(req.query.lang) ? req.query.lang : undefined;
  const cookieLocale = isSupportedLocale(readCookie(req, LOCALE_COOKIE))
    ? readCookie(req, LOCALE_COOKIE)
    : undefined;

  let country;
  let source = 'path';

  if (!isBot && !hasExtension) {
    ({ country } = await resolveCountry(req));

    // ?lang manda siempre: manda al árbol correcto conservando UTMs y hash.
    if (queryLocale === 'en' && !englishTree) {
      res.setHeader('Vary', VARY_HEADER);
      return res.redirect(302, `${enPath}${search}`);
    }
    if (queryLocale === 'es' && englishTree) {
      res.setHeader('Vary', VARY_HEADER);
      return res.redirect(302, `${esPath}${search}`);
    }

    // Solo se auto-redirige desde el árbol español, y solo la primera vez:
    // si el visitante ya eligió idioma, su cookie manda.
    if (!englishTree && !queryLocale) {
      const autoLocale =
        cookieLocale ??
        (country
          ? (SPANISH_MARKET_COUNTRIES.has(country) ? 'es' : 'en')
          : localeFromAcceptLanguage(req.headers['accept-language']));

      if (autoLocale === 'en') {
        res.setHeader('Vary', VARY_HEADER);
        return res.redirect(302, `${enPath}${search}`);
      }
    }

    if (cookieLocale) source = 'manual';
    else if (country) source = 'ip';
  }

  const locale = englishTree ? 'en' : 'es';
  const esUrl = `${SITE_ORIGIN}${esPath}`;
  const enUrl = `${SITE_ORIGIN}${enPath}`;
  const canonical = locale === 'en' ? enUrl : esUrl;

  const html = fs.readFileSync(indexPath, 'utf8');
  const localizedHtml = localizeHtml(html, {
    locale,
    country,
    source,
    canonical,
    esUrl,
    enUrl,
    translated: EN_TRANSLATED_PATHS.has(esPath),
  });

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Content-Language', locale);
  res.setHeader('Vary', VARY_HEADER);
  res.send(localizedHtml);
};

// Servir archivos estáticos con MIME types correctos
// express.static ya detecta MIME types automáticamente
// Solo sobreescribimos Cache-Control diferenciado por tipo
app.use(express.static(distPath, {
  index: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      // HTML nunca se cachea para que siempre cargue la última versión
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    } else {
      // Assets con hash (JS, CSS, imágenes) se cachean por 1 año
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Los assets del árbol inglés son los mismos: /en/algo.png → /algo.png
// redirect:false evita que express.static mande /en a /en/ antes de que el
// handler de HTML pueda responder.
app.use(EN_PREFIX, express.static(distPath, {
  index: false,
  redirect: false,
  setHeaders: (res, filePath) => {
    if (!filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// SPA fallback - todas las rutas no encontradas van a index.html
app.get('*', (req, res, next) => {
  handleHtml(req, res).catch(next);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
  console.log(`📁 Sirviendo archivos desde: ${distPath}`);
});
