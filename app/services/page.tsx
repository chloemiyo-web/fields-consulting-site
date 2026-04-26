import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Consulting Services for Early Education Organizations',
  description:
    'Strategic consulting, leadership development, executive coaching, and keynote speaking for early education founders, executives, and multi-site operators.',
  path: '/services',
});

const blocks = [
  {
    eyebrow: 'Strategic Consulting',
    headline: 'Strategy that survives contact with operations.',
    body: 'For founders and executive teams confronting consequential decisions: expansion, integration, restructuring, market entry, or executive transition. Engagements are scoped collaboratively. Deliverables are documented. The work is rigorous because the decisions are.',
    sub: [
      'Operations consulting',
      'Strategy and management',
      'Customer experience design',
      'Performance improvement',
      'Organizational transformation',
      'Human capital and succession planning',
    ],
    href: '/services/strategic-consulting',
    cta: 'Explore Strategic Consulting',
  },
  {
    eyebrow: 'Leadership Development & Training',
    headline: 'Build the bench. Develop the layer. Sustain the culture.',
    body: 'Custom-designed programs that build directors, managers, and executive teams capable of leading through complexity. Programs are architected for your organization — not adapted from a curriculum library. Delivery is virtual, in-person, or blended.',
    sub: [
      'Director and manager training',
      'Leadership development programs',
      'Workshops and seminars',
      'Communication and culture programs',
      'Operational excellence training',
      'Custom L&D department build-outs',
    ],
    href: '/services/leadership-development',
    cta: 'Explore Leadership Development',
  },
  {
    eyebrow: 'Executive Coaching',
    headline: 'Confidential advisory for the leader carrying the weight.',
    body: 'One-on-one engagement with CEOs, founders, executive directors, and senior leaders. Cadence is customized to the leader. The work is substantive: clearer vision, sharper decisions, navigating complexity with strategy, and the breakdown of isolation that comes with senior responsibility.',
    sub: [
      'New CEOs and founders',
      'Executive directors entering scale',
      'Leaders navigating cultural transformation',
      'Senior leaders preparing for transition or expansion',
    ],
    href: '/services/executive-coaching',
    cta: 'Explore Executive Coaching',
  },
  {
    eyebrow: 'Keynote & Speaking',
    headline: 'A keynote rooted in the field — not the textbook.',
    body: 'Industry talks, panels, and conference keynotes drawn from twenty years of operational work. Tailored to the audience. Delivered with the substance the room deserves.',
    sub: [
      'Financial health for early education operators',
      'Staff management and retention',
      'Growth strategies for multi-site organizations',
      'Cultural dynamics that drive (or stall) success',
    ],
    href: '/speaking',
    cta: 'Explore Speaking Engagements',
  },
];

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      {/* Page hero */}
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          <Eyebrow className="block mb-6">Services</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Built for the operator who is done improvising.
          </h1>
          <p className="mt-8 text-body-lg text-slate max-w-reading-wide">
            Every engagement is scoped to the organization in front of us.
            Below is the architecture of how we work, the engagement types,
            and the entry points.
          </p>
        </div>
      </section>

      {/* Industries Served */}
      <Section tone="line" tight>
        <h2 className="text-h2 text-balance mb-12">Industries served.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              label: 'Early Education',
              body: 'Childcare centers, multi-site operators, early childhood schools, Head Start agencies, faith-based programs, and franchise-bound early education brands. Primary specialty.',
            },
            {
              label: 'Non-Profit',
              body: 'Mission-driven organizations needing operational structure, leadership development, board alignment, or strategic redesign.',
            },
            {
              label: 'Compliance-Driven Businesses',
              body: 'Service businesses operating under regulatory or licensing frameworks where operational rigor is non-negotiable.',
            },
          ].map((i) => (
            <div key={i.label} className="bg-bone border border-line p-8">
              <p className="eyebrow block mb-4">{i.label}</p>
              <p className="text-body text-slate leading-relaxed">{i.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* The Engagement Menu — alternating blocks */}
      <Section tone="bone">
        <div className="mb-16">
          <Eyebrow className="block mb-6">The Engagement Menu</Eyebrow>
          <h2 className="text-h2 max-w-3xl">How organizations work with Fields Consulting.</h2>
        </div>
        <div className="space-y-px bg-line">
          {blocks.map((b) => (
            <article
              key={b.eyebrow}
              className="bg-bone py-12 md:py-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                <div className="lg:col-span-5">
                  <Eyebrow className="block mb-6">{b.eyebrow}</Eyebrow>
                  <h3 className="text-h3 text-balance">{b.headline}</h3>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-body-lg text-ink/85 leading-relaxed">
                    {b.body}
                  </p>
                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {b.sub.map((item) => (
                      <li
                        key={item}
                        className="text-body text-slate flex items-baseline gap-3 before:content-['—'] before:text-line"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href={b.href} className="link-arrow mt-10 inline-flex">
                    {b.cta} →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* Engagement Models */}
      <Section tone="line" tight>
        <h2 className="text-h2 mb-12">Engagement models.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Project-Based',
              body: 'Defined-scope engagements with documented deliverables. Best for assessments, program design, expansion readiness, and structured transformation work.',
            },
            {
              name: 'Retainer',
              body: 'Ongoing strategic capacity. Two scheduled calls per month, async support, quarterly business reviews, and frameworks delivered throughout. Six-month minimum.',
            },
            {
              name: 'Custom',
              body: 'Hybrid engagements blending project work, retainer cadence, and on-site days. Built for organizations with complex or evolving needs.',
            },
          ].map((m) => (
            <div key={m.name} className="bg-bone border border-line p-8">
              <h3 className="text-h3">{m.name}</h3>
              <p className="mt-4 text-body text-slate leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Investment */}
      <Section tone="bone">
        <div className="max-w-reading-wide">
          <Eyebrow className="block mb-6">Investment</Eyebrow>
          <h2 className="text-h2 mb-8">A note on pricing.</h2>
          <div className="space-y-5 text-body-lg leading-relaxed text-ink/85">
            <p>
              Pricing is determined collaboratively during the discovery
              process and is calibrated to the scope, duration, and complexity
              of the engagement.
            </p>
            <p>
              For context: project engagements typically begin in the mid-four
              figures and scale based on scope. Retainers begin at $3,500 per
              month. Speaking engagements begin at $5,000 plus travel.
            </p>
            <p>
              Pricing is private because every organization&apos;s needs are
              different. The discovery call is where we determine what your
              organization actually requires.
            </p>
          </div>
          <a
            href={calendly.discoveryCall()}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow mt-10 inline-flex"
          >
            Schedule a Discovery Call →
          </a>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto py-8">
          <h2 className="text-h2 editorial text-balance">Ready to scope the work?</h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={calendly.discoveryCall()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-on-dark"
            >
              Schedule a Discovery Call
            </a>
            <Link href="/contact" className="btn-secondary-on-dark">
              Request a Proposal
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
