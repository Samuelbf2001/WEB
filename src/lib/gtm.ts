// GTM event helpers for Sixteam.pro
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export const gtm = {
  push: (event: string, params?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event, ...params });
    }
  },
  // Specific events
  ctaClick: (label: string, location: string) =>
    gtm.push('cta_click', { cta_label: label, cta_location: location }),
  whatsappClick: (source: string) =>
    gtm.push('whatsapp_click', { source }),
  formSubmit: (formName: string) =>
    gtm.push('form_submit', { form_name: formName }),
  pageView: (pageName: string) =>
    gtm.push('virtual_page_view', { page_name: pageName }),
};
