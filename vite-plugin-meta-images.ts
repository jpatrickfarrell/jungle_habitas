import type { Plugin } from 'vite';

/**
 * Vite plugin that replaces __SITE_URL__ placeholders in index.html
 * with the actual SITE_URL environment variable at build/serve time.
 *
 * This ensures og:image, og:url, and canonical tags use absolute URLs
 * which is required by social crawlers (WhatsApp, Instagram, etc).
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      const siteUrl = process.env.SITE_URL || '';
      return html.replace(/__SITE_URL__/g, siteUrl);
    },
  };
}
