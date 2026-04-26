import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { features } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { NewsletterForm } from '@/components/NewsletterForm';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Field Notes — Insights from Inside Early Education',
  description:
    'Practical writing on operations, leadership, and scaling early education organizations. From inside the work.',
  path: '/insights',
});

/**
 * Cornerstone article seeds (per Section 7.6).
 * As articles are published, replace these placeholder cards with
 * MDX content or pull from a CMS. For now they render as "in preparation".
 */
const articles = [
  {
    category: 'Strategy',
    title: 'How to scale a childcare business: a strategic framework',
    dek: 'The three-stage path from single location to multi-site operator — and the operational decisions that compound at each stage.',
    featured: true,
  },
  {
    category: 'Operations',
    title: 'The operational audit every multi-location childcare owner should run annually',
    dek: 'A repeatable diagnostic for the operator who suspects the cracks are widening but cannot pinpoint where.',
  },
  {
    category: 'Leadership',
    title: 'Why most childcare director training programs fail (and what builds leaders who stay)',
    dek: 'Director development is not training. It is system design. Here is what real director infrastructure looks like.',
  },
  {
    category: 'Growth',
    title: 'The three-stage path from single location to multi-site operator',
    dek: 'A practical framework for the moment your business outgrows you — and what infrastructure is required at each stage.',
  },
  {
    category: 'Operations',
    title: 'What childcare founders get wrong about compliance — and the operating habits that fix it',
    dek: 'Compliance failures are rarely compliance problems. They are operational habits. Here is the operating cadence that keeps audits clean.',
  },
];

const featured = articles.find((a) => a.featured);
const rest = articles.filter((a) => !a.featured);

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          <Eyebrow className="block mb-6">Insights</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Field notes on operations, leadership, and the early education
            business.
          </h1>
          <p className="mt-8 text-body-lg text-slate max-w-reading-wide">
            Practical writing from inside the work. Updated regularly.
          </p>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <Section tone="bone">
          <p className="text-eyebrow text-slate mb-6">Featured</p>
          <article className="border-t border-line pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
              <div className="lg:col-span-8">
                <p className="text-eyebrow text-slate mb-4">
                  {featured.category}
                </p>
                <h2 className="text-h2 editorial text-balance">
                  {featured.title}
                </h2>
                <p className="mt-6 text-body-lg text-slate max-w-reading-wide">
                  {featured.dek}
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <span className="text-caption uppercase tracking-[0.12em] text-slate">
                  In preparation
                </span>
              </div>
            </div>
          </article>
        </Section>
      )}

      {/* Article grid */}
      <Section tone="bone" tight>
        <p className="text-eyebrow text-slate mb-8">More from the field</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border-y border-line">
          {rest.map((a) => (
            <article key={a.title} className="bg-bone p-8 md:p-10">
              <p className="text-eyebrow text-slate mb-4">{a.category}</p>
              <h3 className="text-h3 text-balance">{a.title}</h3>
              <p className="mt-4 text-body text-slate leading-relaxed">
                {a.dek}
              </p>
              <p className="mt-6 text-caption uppercase tracking-[0.12em] text-slate">
                In preparation
              </p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-caption text-slate text-center">
          Articles are written and published on a deliberate cadence. Subscribe
          to be notified when each goes live.
        </p>
      </Section>

      {/* Newsletter */}
      {features.showNewsletter && (
        <section className="bg-line/60 border-t border-line">
          <div className="shell py-16 md:py-20 text-center">
            <h2 className="text-h3 editorial mb-4">Get Field Notes in your inbox.</h2>
            <p className="text-body text-slate max-w-xl mx-auto mb-8">
              One email per month. Written from the inside.
            </p>
            <NewsletterForm tone="light" />
          </div>
        </section>
      )}

      {!features.showNewsletter && (
        <Section tone="ink">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 editorial text-balance">
              Want to talk operations, leadership, or growth?
            </h2>
            <div className="mt-10">
              <Link href="/contact" className="btn-primary-on-dark">
                Get in Touch
              </Link>
            </div>
          </div>
        </Section>
      )}
    </>
  );
}
