#!/usr/bin/env node
/**
 * Genera public/sitemap.xml a partir de seo-routes.js.
 *
 * El sitemap escrito a mano se desincroniza del router en el primer cambio de
 * rutas. Generándolo desde el mismo mapa que alimenta los metadatos, sitemap y
 * router no pueden divergir: una ruta nueva aparece en ambos o en ninguno.
 *
 * El <lastmod> sale de la fecha del último commit que tocó el fichero de cada
 * página, no de la fecha del deploy — una fecha de deploy uniforme en todas las
 * URLs es una señal de frescura que los crawlers descuentan.
 */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { sitemapRoutes } from '../seo-routes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.join(__dirname, '..');

const today = new Date().toISOString().slice(0, 10);

/** Fecha del último commit que modificó el fichero, en formato YYYY-MM-DD. */
const lastModified = (source) => {
  if (!source) return today;
  const absolute = path.join(repoRoot, source);
  if (!fs.existsSync(absolute)) return today;
  try {
    const out = execFileSync(
      'git',
      ['log', '-1', '--format=%cs', '--', source],
      { cwd: repoRoot, encoding: 'utf8' }
    ).trim();
    return out || today;
  } catch {
    return today;
  }
};

const entries = sitemapRoutes()
  .map(([route, meta]) => ({
    loc: meta.canonical,
    lastmod: lastModified(meta.source),
    changefreq: meta.changefreq ?? 'monthly',
    priority: meta.priority ?? '0.5',
    route,
  }))
  // Una URL sin canonical no puede entrar: el sitemap solo lista URLs canónicas.
  .filter((entry) => Boolean(entry.loc))
  .sort((a, b) => Number(b.priority) - Number(a.priority) || a.loc.localeCompare(b.loc));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generado por scripts/generate-sitemap.mjs desde seo-routes.js. No editar a mano. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const target = path.join(repoRoot, 'public', 'sitemap.xml');
fs.writeFileSync(target, xml);
console.log(`sitemap.xml generado con ${entries.length} URLs`);
