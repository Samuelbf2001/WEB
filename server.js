import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

// Ruta absoluta a la carpeta dist
const distPath = path.join(__dirname, 'dist');

// Servir archivos estáticos con MIME types correctos
// express.static ya detecta MIME types automáticamente
// Solo sobreescribimos Cache-Control diferenciado por tipo
app.use(express.static(distPath, {
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
app.get('*', (req, res) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en puerto ${port}`);
  console.log(`📁 Sirviendo archivos desde: ${distPath}`);
});