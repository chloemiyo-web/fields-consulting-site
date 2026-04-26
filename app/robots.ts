import type { MetadataRoute } from 'next';
import { site } from '@/lib/config';

/**
 * robots.txt — disallows confirmation pages from indexing,
 * allows everything else, and points crawlers at the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/confirmation/', '/api/'],
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
