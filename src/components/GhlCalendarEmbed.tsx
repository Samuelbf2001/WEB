import { useEffect, useId, useRef } from 'react';

/**
 * Embed del calendario / formulario de GoHighLevel con alto dinamico.
 *
 * El script form_embed.js de GHL trae iframe-resizer embebido: hace un
 * handshake con el widget y este le devuelve su alto real por postMessage
 * con el formato `[iFrameSizer]<id>:<alto>:<ancho>:<evento>`.
 *
 * En una SPA ese flujo se rompia por dos motivos:
 *  1. index.html ya carga form_embed.js, pero cada pagina inyectaba ademas su
 *     propia copia y la borraba al desmontar. Al navegar entre rutas el script
 *     se volvia a ejecutar y su estado interno quedaba desincronizado del
 *     listener de mensajes global, asi que el resize nunca llegaba al iframe.
 *  2. Sin resize, el iframe se quedaba con el alto fijo del CSS y el
 *     calendario aparecia cortado en cuanto mostraba franjas horarias.
 *
 * Aca no se inyecta nada de mas y escuchamos los mensajes de iframe-resizer
 * por nuestra cuenta, asi que el alto se aplica aunque la contabilidad interna
 * del script de GHL falle. Si a los 1.8s no llego ninguna medida, iniciamos el
 * handshake nosotros mismos contra la libreria ya cargada.
 */

const SCRIPT_SRC = 'https://web.sixteam.pro/js/form_embed.js';
const SIZER_PREFIX = '[iFrameSizer]';
const GHL_ORIGIN_PATTERN = /^https:\/\/([a-z0-9-]+\.)*(sixteam\.pro|leadconnectorhq\.com|msgsndr\.com)$/i;

/** Colchon para el bottom del widget: iframe-resizer mide con `offset` y GHL
 *  suele quedarse unos pixeles corto justo debajo del boton de confirmar. */
const HEIGHT_BUFFER = 24;

const SCRIPT_READY_TIMEOUT = 10000;

let scriptPromise: Promise<void> | null = null;

/** form_embed.js expone `window.iFrameResize` al ejecutarse; eso es lo unico
 *  que necesitamos para saber que ya esta disponible. */
const isEmbedScriptReady = () =>
  typeof (window as unknown as { iFrameResize?: unknown }).iFrameResize === 'function';

/**
 * Espera a que form_embed.js este listo. index.html ya lo carga en el <head>,
 * asi que normalmente solo hay que esperarlo; si no estuviera lo inyectamos.
 *
 * Sondeamos en vez de escuchar `load`: cuando el script ya esta en el DOM su
 * evento de carga pudo haber ocurrido antes de que montara el componente, y
 * engancharse tarde a un `load` que ya paso deja la promesa colgada.
 */
function whenEmbedScriptReady(): Promise<void> {
  if (typeof document === 'undefined') return Promise.resolve();
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<void>((resolve) => {
    if (isEmbedScriptReady()) {
      resolve();
      return;
    }

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }

    const startedAt = Date.now();
    const poll = window.setInterval(() => {
      // Si el script nunca llega resolvemos igual: el alto minimo mantiene el
      // widget usable en vez de dejarlo en un contenedor colapsado.
      if (isEmbedScriptReady() || Date.now() - startedAt > SCRIPT_READY_TIMEOUT) {
        window.clearInterval(poll);
        resolve();
      }
    }, 100);
  });

  return scriptPromise;
}

type IFrameResizeFn = (
  options: Record<string, unknown>,
  target: HTMLIFrameElement
) => void;

interface GhlCalendarEmbedProps {
  /** URL del widget de GHL (booking, form, group, etc.). */
  src: string;
  title: string;
  /** Alto de arranque mientras el widget reporta el suyo. */
  minHeight?: number;
  /** Clases extra del contenedor exterior. */
  className?: string;
  /** Marco teal por defecto; ponlo en false si la pagina trae su propio chrome. */
  framed?: boolean;
  /** Solo si necesitas un id fijo; por defecto se genera uno unico. */
  id?: string;
}

const GhlCalendarEmbed = ({
  src,
  title,
  minHeight = 720,
  className = '',
  framed = true,
  id,
}: GhlCalendarEmbedProps) => {
  const reactId = useId();
  const frameId = id ?? `ghl-embed-${reactId.replace(/[^a-zA-Z0-9]/g, '')}`;
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const hasResizedRef = useRef(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    let cancelled = false;
    let fallbackTimer: number | undefined;

    const applyHeight = (rawHeight: number) => {
      if (!Number.isFinite(rawHeight) || rawHeight <= 0) return;
      const next = Math.max(Math.round(rawHeight) + HEIGHT_BUFFER, minHeight);
      if (iframe.style.height !== `${next}px`) {
        iframe.style.height = `${next}px`;
      }
      hasResizedRef.current = true;
      revealFrame();
    };

    /* form_embed.js esconde el iframe (opacity 0, left -9999px) mientras
       negocia el alto y lo revela al terminar. Si esa negociacion no cierra,
       el widget se queda invisible; por eso lo devolvemos a su sitio. */
    const revealFrame = () => {
      iframe.style.opacity = '1';
      iframe.style.visibility = 'visible';
      iframe.style.pointerEvents = 'auto';
      iframe.style.position = 'relative';
      iframe.style.left = 'auto';
    };

    const onMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'string' || !event.data.startsWith(SIZER_PREFIX)) return;
      if (event.origin && !GHL_ORIGIN_PATTERN.test(event.origin)) return;

      const [messageId, height] = event.data.slice(SIZER_PREFIX.length).split(':');
      if (messageId !== iframe.id) return;
      applyHeight(Number(height));
    };

    window.addEventListener('message', onMessage);

    whenEmbedScriptReady().then(() => {
      if (cancelled) return;
      // Red de seguridad: si el handshake de GHL no llego (por ejemplo el
      // widget cargo antes que el script en una navegacion cliente), lo
      // iniciamos nosotros contra la misma libreria ya cargada.
      fallbackTimer = window.setTimeout(() => {
        if (cancelled || hasResizedRef.current) return;
        revealFrame();
        // Si GHL ya lo engancho, dejarlo en paz: reinicializar duplica listeners.
        if (iframe.hasAttribute('data-iframe-resizer-initialized')) return;
        const resize = (window as unknown as { iFrameResize?: IFrameResizeFn }).iFrameResize;
        if (typeof resize !== 'function') return;
        try {
          resize(
            {
              log: false,
              checkOrigin: false,
              scrolling: true,
              sizeWidth: false,
              sizeHeight: true,
              autoResize: true,
              heightCalculationMethod: 'lowestElement',
              resizedCallback: (data: { height?: number | string }) =>
                applyHeight(Number(data?.height)),
            },
            iframe
          );
        } catch {
          /* el widget queda con el alto minimo, que sigue siendo usable */
        }
      }, 1800);
    });

    return () => {
      cancelled = true;
      window.removeEventListener('message', onMessage);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, [minHeight, src]);

  return (
    <div
      className={['calendar-embed-wrapper', framed && 'calendar-embed-wrapper--framed', className]
        .filter(Boolean)
        .join(' ')}
    >
      <iframe
        ref={iframeRef}
        src={src}
        id={frameId}
        title={title}
        scrolling="auto"
        style={{ width: '100%', height: `${minHeight}px`, border: 'none', display: 'block' }}
      />
    </div>
  );
};

export default GhlCalendarEmbed;
