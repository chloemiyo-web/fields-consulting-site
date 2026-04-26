import { contact, credentials, site } from '@/lib/config';

/**
 * JSON-LD structured data components.
 * Per Section 7.4 of the blueprint: Organization, ProfessionalService,
 * Person, FAQ, BreadcrumbList, Article schemas.
 *
 * Validate after deploy with Google's Rich Results Test:
 * https://search.google.com/test/rich-results
 */

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Schema.org JSON-LD must be inserted as raw text
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* Organization + ProfessionalService — sitewide, lives in root layout */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    founder: {
      '@type': 'Person',
      name: site.founderName,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    knowsAbout: [
      'Childcare operations',
      'Early education leadership',
      'Multi-site operations',
      'Leadership development',
      'Executive coaching',
      'Non-profit operations',
      'Childcare Growth Architecture',
    ],
    sameAs: [contact.linkedin].filter(Boolean),
    email: contact.email,
  };

  return <JsonLd data={data} />;
}

/* Person — for the About page */
export function PersonSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.founderName,
    jobTitle: 'Founder & Strategic Operations Consultant',
    worksFor: {
      '@type': 'Organization',
      name: site.name,
    },
    alumniOf: credentials.education
      .filter((e) => e.institution)
      .map((e) => ({
        '@type': 'EducationalOrganization',
        name: e.institution,
      })),
    knowsAbout: [
      'Childcare operations',
      'Early education leadership',
      'Organizational leadership',
      'Multi-site scaling',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: 'US',
    },
    sameAs: [contact.linkedin].filter(Boolean),
  };

  return <JsonLd data={data} />;
}

/* FAQPage — for the FAQ page */
export function FaqSchema({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

/* Service — for individual service sub-pages */
export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'ProfessionalService',
      name: site.name,
      url: site.url,
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  };

  return <JsonLd data={data} />;
}

/* BreadcrumbList — for sub-pages */
export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.url}`,
    })),
  };

  return <JsonLd data={data} />;
}
