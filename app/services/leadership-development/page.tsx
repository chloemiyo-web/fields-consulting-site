import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { ServiceSchema, BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Leadership Development & Training for Early Education',
  description:
    'Custom-designed leadership programs for directors, managers, and executive teams in early education organizations.',
  path: '/services/leadership-development',
});

export default function LeadershipDevelopmentPage() {
  return (
    <>
      <ServiceSchema
        name="Leadership Development & Training"
        description="Custom-designed programs that build directors, managers, and executive teams capable of leading through complexity."
        url={`${site.url}/services/leadership-development`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: 'Leadership Development', url: '/services/leadership-development' },
        ]}
      />

      {/* Hero */}
      <section className="bg-charcoal text-bone border-b border-white/10">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-24">
          <Eyebrow tone="light" className="block mb-6">Leadership Development & Training</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Build the bench. Develop the layer. Sustain the culture.
          </h1>
          <p className="mt-8 text-body-lg text-bone/75 max-w-reading-wide">
            Custom-designed programs that build directors, managers, and
            executive teams ready to lead through complexity.
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

      {/* The problem */}
      <Section tone="bone">
        <div className="max-w-reading-wide">
          <h2 className="text-h2 mb-8 text-balance">
            Most leadership programs fail before they begin.
          </h2>
          <div className="space-y-5 text-body-lg leading-relaxed text-ink/85">
            <p>
              The training is generic. The content was built for a different
              organization. Participants leave the workshop inspired and return
              to the same broken systems three days later. Nothing changes.
            </p>
            <p>
              Leadership development that actually produces leaders has to be
              designed for the organization in front of it. The terminology has
              to match. The case examples have to be familiar. The expectations
              have to be enforceable.
            </p>
            <p>That is what we build.</p>
          </div>
        </div>
      </Section>

      {/* Programs we build */}
      <Section tone="line" tight>
        <h2 className="text-h2 mb-12">Programs we build.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              num: '01',
              title: 'Director Development',
              body: 'For new and emerging directors in early education organizations. Operational leadership, financial literacy, staff management, parent communication, and the practice of holding the line on standards.',
            },
            {
              num: '02',
              title: 'Manager and Supervisor Training',
              body: 'For the layer between owner and team. Coaching, accountability, performance management, and the daily operating rhythm.',
            },
            {
              num: '03',
              title: 'Executive Team Development',
              body: 'For the senior leadership of growing organizations. Strategic alignment, decision rights, executive communication, and the discipline of running a business at scale.',
            },
            {
              num: '04',
              title: 'Custom Workshops & Intensives',
              body: 'For organizations needing focused skill-building on a specific topic: communication, leading change, operational excellence, cultural transformation.',
            },
          ].map((p) => (
            <div key={p.num} className="bg-bone border border-line p-8 md:p-10">
              <p className="text-eyebrow text-slate mb-4">{p.num}</p>
              <h3 className="text-h3">{p.title}</h3>
              <p className="mt-4 text-body text-slate leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="bone">
        <h2 className="text-h2 mb-12">The process.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-line">
          {[
            {
              num: '01',
              title: 'Diagnostic',
              body: 'We assess where the leadership gaps actually are. Not where they look like they are.',
            },
            {
              num: '02',
              title: 'Program Design',
              body: 'A custom curriculum is built for your organization, your leaders, and the outcomes you need.',
            },
            {
              num: '03',
              title: 'Delivery',
              body: 'Virtual, in-person, or blended. Cohort-based or one-on-one. Built for your operating reality.',
            },
            {
              num: '04',
              title: 'Reinforcement',
              body: 'Real change happens in the months after a program ends. We design the reinforcement loop, not just the program.',
            },
          ].map((s) => (
            <div key={s.num} className="bg-bone p-8">
              <p className="text-eyebrow text-slate mb-4">Step {s.num}</p>
              <h3 className="text-h3 uppercase tracking-wide">{s.title}</h3>
              <p className="mt-5 text-body text-slate leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-h2 editorial text-balance">
            Ready to build leaders who stay?
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
