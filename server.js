import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

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

const sendIndex = (req, res) => {
  const localeConfig = resolveLocale(req);
  const html = fs.readFileSync(indexPath, 'utf8');
  const localeScript = buildLocaleScript(localeConfig);
  const localizedHtml = html.includes('</head>')
    ? html.replace('</head>', `${localeScript}\n</head>`)
    : `${localeScript}\n${html}`;

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Content-Language', localeConfig.locale);
  res.setHeader(
    'Vary',
    'CF-IPCountry, X-Vercel-IP-Country, X-NF-Country, CloudFront-Viewer-Country, X-Country-Code, X-AppEngine-Country, X-Geo-Country, X-Client-Geo-Country, X-Forwarded-Country, Accept-Language'
  );
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

// SPA fallback - todas las rutas no encontradas van a index.html
app.get('*', sendIndex);

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
  console.log(`📁 Sirviendo archivos desde: ${distPath}`);
});
