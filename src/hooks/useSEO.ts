import { useEffect } from 'react';

const DEFAULT_OG_IMAGE = 'https://sixteam.pro/og-image.jpg';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogUrl?: string;       // defaults to canonical if not set
  noindex?: boolean;    // for pages like /brochure
}

export const useSEO = ({ title, description, canonical, ogImage, ogUrl, noindex }: SEOProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const parts = selector.match(/\[([^\]]+)="([^\]]+)"\]/);
        if (parts) el.setAttribute(parts[1], parts[2]);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    // Core meta
    setMeta('meta[name="description"]', 'content', description);

    // Robots
    if (noindex) {
      setMeta('meta[name="robots"]', 'content', 'noindex, nofollow');
    }

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:locale"]', 'content', 'es_CO');

    const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;
    setMeta('meta[property="og:image"]', 'content', resolvedOgImage);

    const resolvedOgUrl = ogUrl ?? canonical;
    if (resolvedOgUrl) {
      setMeta('meta[property="og:url"]', 'content', resolvedOgUrl);
    }

    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('meta[name="twitter:image"]', 'content', resolvedOgImage);

    // Canonical
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
  }, [title, description, canonical, ogImage, ogUrl, noindex]);
};
