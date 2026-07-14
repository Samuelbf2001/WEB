import { useEffect } from 'react';
import { translateCopy } from '@/i18n/dictionary';
import { useLocale } from '@/i18n/LocaleContext';

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
  const { locale } = useLocale();

  useEffect(() => {
    const localizedTitle = translateCopy(title, locale);
    const localizedDescription = translateCopy(description, locale);

    document.title = localizedTitle;

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
    setMeta('meta[name="description"]', 'content', localizedDescription);

    // Robots
    if (noindex) {
      setMeta('meta[name="robots"]', 'content', 'noindex, nofollow');
    }

    // Open Graph
    setMeta('meta[property="og:title"]', 'content', localizedTitle);
    setMeta('meta[property="og:description"]', 'content', localizedDescription);
    setMeta('meta[property="og:locale"]', 'content', locale === 'es' ? 'es_CO' : 'en_US');

    const resolvedOgImage = ogImage ?? DEFAULT_OG_IMAGE;
    setMeta('meta[property="og:image"]', 'content', resolvedOgImage);

    const resolvedOgUrl = ogUrl ?? canonical;
    if (resolvedOgUrl) {
      setMeta('meta[property="og:url"]', 'content', resolvedOgUrl);
    }

    // Twitter
    setMeta('meta[name="twitter:title"]', 'content', localizedTitle);
    setMeta('meta[name="twitter:description"]', 'content', localizedDescription);
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
  }, [title, description, canonical, ogImage, ogUrl, noindex, locale]);
};
