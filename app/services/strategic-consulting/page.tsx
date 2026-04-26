import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { ServiceSchema, BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Strategic Consulting for Childcare and Early Education',
  description:
    'Project-based and retained engagements for founders and executive teams navigating growth, expansion, and transformation.',
  path: '/services/strategic-consulting',
});

export default function StrategicConsultingPage() {
  return (
    <>
      <ServiceSchema
        name="Strategic Consulting"
        description="Project-based and retained engagements for founders and executive teams navigating growth, expansion, restructuring, or transformation in early education organizations."
        url={`${site.url}/services/strategic-consulting`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Strategic Consulting', url: '/services/strategic-consulting' },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-bone border-b border-white/10">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24">
          <Eyebrow tone="light" className="block mb-6">Strategic Consulting</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Strategy that survives contact with operations.
          </h1>
          <p className="mt-8 text-body-lg text-bone/75 max-w-reading-wide">
            For founders and executive teams confronting growth, expansion,
            integration, restructuring, or executive transition.
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
            <h2 className="text-h2 text-balance">This work is for you if:</h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                'You are running an early education organization that has outgrown its current operating model',
                'You are preparing to open another location and the systems that got you here will not get you there',
                'You are integrating multiple sites or organizations and need an outside hand on the architecture',
                'You are restructuring leadership and want a strategic partner rather than a recruiter',
                'You are entering a moment of transformation and need someone in the room who has been there',
              ].map((item) => (
                <li key={item} className="py-5 text-body text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What you get */}
      <Section tone="line" tight>
        <div className="max-w-reading-wide">
          <h2 className="text-h2 mb-10">What an engagement produces.</h2>
          <p className="text-body-lg text-ink/85 leading-relaxed mb-8">
            Every strategic consulting engagement is scoped to the organization.
            The shape is the same; the contents are bespoke.
          </p>
          <p className="eyebrow block mb-5">A typical engagement includes</p>
          <ul className="divide-y divide-line border-y border-line">
            {[
              'A structured assessment of current operations, organizational structure, and strategic position',
              'A written diagnostic with prioritized recommendations and a phased roadmap',
              'Custom-built operating frameworks, documented processes, and decision tools',
              'Direct strategic partnership with the founder, CEO, or executive team',
              'Clear milestones, measurable outcomes, and documented deliverables at each stage',
            ].map((item) => (
              <li key={item} className="py-5 text-body text-ink/85">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 text-body-lg text-ink/85 leading-relaxed">
            The work is collaborative. The standards are non-negotiable. The
            deliverables are real.
          </p>
        </div>
      </Section>

      {/* Engagement examples */}
      <Section tone="bone">
        <h2 className="text-h2 mb-12">Common engagement types.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              num: '01',
              title: 'Operational Diagnostic',
              body: 'A two-week structured assessment of operations across the business. Stakeholder interviews, document review, written diagnostic report, debrief session, and a 30-day follow-up. Best entry point for organizations who need clarity before they need consulting.',
            },
            {
              num: '02',
              title: 'Expansion Readiness',
              body: 'A 90-day engagement preparing the organization to open a new location. Operational, leadership, financial, and cultural readiness assessed and addressed.',
            },
            {
              num: '03',
              title: 'Integration & Restructuring',
              body: 'Project-based work for organizations integrating sites, restructuring leadership, or undergoing transformation.',
            },
            {
              num: '04',
              title: 'Strategic Advisory Retainer',
              body: 'Six-month minimum. Two calls per month. Async support. Quarterly business reviews.',
            },
          ].map((e) => (
            <div key={e.num} className="border border-line p-8 md:p-10">
              <p className="text-eyebrow text-slate mb-4">{e.num}</p>
              <h3 className="text-h3">{e.title}</h3>
              <p className="mt-4 text-body text-slate leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h2 editorial text-balance">Begin with a conversation.</h2>
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
