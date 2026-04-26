import type { Metadata } from 'next';
import { site } from './config';

/**
 * Generate consistent metadata for every page. Pass page-specific
 * overrides; everything else falls back to site-level defaults.
 */
export function buildMetadata({
  title,
  description,
  path = '/',
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
    const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const url = `${site.url}${path}`;

  return {
        title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: `${site.url}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: `${site.name} · ${site.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [`${site.url}/og-image.svg`],
    },
  };
}
