import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { ServiceSchema, BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Executive Coaching for CEOs, Founders, and Executive Directors',
  description:
    'Confidential one-on-one advisory for leaders in early education and non-profit organizations.',
  path: '/services/executive-coaching',
});

export default function ExecutiveCoachingPage() {
  return (
    <>
      <ServiceSchema
        name="Executive Coaching"
        description="Confidential one-on-one advisory for CEOs, founders, and executive directors."
        url={`${site.url}/services/executive-coaching`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Executive Coaching', url: '/services/executive-coaching' },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-bone border-b border-white/10">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24">
          <Eyebrow tone="light" className="block mb-6">Executive Coaching</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Confidential advisory for the leader carrying the weight.
          </h1>
          <p className="mt-8 text-body-lg text-bone/75 max-w-reading-wide">
            One-on-one engagement with CEOs, founders, executive directors, and
            senior leaders.
          </p>
          <div className="mt-10">
            <a
              href={calendly.discoveryCall()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-on-dark"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <Section tone="bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-h2 text-balance">This work is for:</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                'Founders and CEOs running organizations that have outgrown them',
                'New CEOs stepping into existing organizations and learning the operating reality fast',
                'Executive directors of non-profits navigating transformation',
                'Senior leaders preparing for promotion, transition, or expansion',
                'Owners of multi-site businesses who need a strategic partner outside their organization',
              ].map((item) => (
                <li key={item} className="py-5 text-body text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What we work on */}
      <Section tone="line" tight>
        <div className="max-w-reading-wide">
          <h2 className="text-h2 mb-8">What coaching produces.</h2>
          <p className="text-body-lg text-ink/85 leading-relaxed mb-8">
            The work is substantive. The outcomes are real. Leaders who engage
            in coaching with Fields Consulting typically work on:
          </p>
          <ul className="divide-y divide-line border-y border-line">
            {[
              'Clearer vision and strategic direction',
              'Sharper, faster, better-supported decision-making',
              'The breakdown of isolation that comes with senior responsibility',
              'Navigating complexity with strategy rather than reactivity',
              'Cultural transformation that begins at the top',
              'Personal operating rhythm — how the leader spends their week',
            ].map((item) => (
              <li key={item} className="py-5 text-body text-ink/85">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-body-lg text-ink/85 leading-relaxed">
            This is not motivational coaching. This is strategic partnership for
            someone who needs another senior mind in the room.
          </p>
        </div>
      </Section>

      {/* Cadence */}
      <Section tone="bone">
        <div className="max-w-reading-wide">
          <h2 className="text-h2 mb-8">Cadence is customized.</h2>
          <div className="space-y-5 text-body-lg leading-relaxed text-ink/85">
            <p>
              Some leaders need weekly. Some need biweekly. Some need monthly
              with full-day intensives once a quarter. The cadence is built
              around the leader, not the program.
            </p>
            <p>
              Engagements are typically six months at minimum. Many become
              long-term partnerships.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h2 editorial text-balance">
            A first conversation, before anything else.
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={calendly.discoveryCall()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-on-dark"
            >
              Schedule a Discovery Call
            </a>
            <Link href="/services" className="btn-secondary-on-dark">
              All Services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
