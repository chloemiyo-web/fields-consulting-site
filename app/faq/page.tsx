import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { FaqSchema, BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Frequently Asked Questions',
  description: `Common questions about ${site.name} engagements, pricing, process, and outcomes.`,
  path: '/faq',
});

const faqs = [
  {
    question: 'Who does Fields Consulting work with?',
    answer:
      'Fields Consulting works primarily with early education organizations — childcare centers, multi-site operators, schools, and educational businesses. We also work with non-profits and compliance-driven service businesses. The shared trait across our clients is that they are organizations ready to build operational and leadership infrastructure for their next chapter.',
  },
  {
    question: 'What does an engagement typically look like?',
    answer:
      'Every engagement is scoped collaboratively, but most begin with a structured assessment, followed by a written diagnostic, followed by an implementation phase. Engagement length varies — from two-week diagnostics to six-month projects to ongoing retainers.',
  },
  {
    question: 'How long is an engagement?',
    answer:
      'Diagnostics run two weeks. Project-based engagements typically run 60–180 days. Retainers begin at six months. Executive coaching engagements typically run six months at minimum and often extend longer.',
  },
  {
    question: 'Do you work in-person, virtually, or both?',
    answer:
      'Both. Most engagements include a blend of virtual cadence and on-site days. The mix is determined by the work and the geography.',
  },
  {
    question: 'What does an engagement cost?',
    answer:
      'Pricing is determined during the discovery process and is calibrated to scope. For context: project engagements typically begin in the mid-four figures; retainers begin at $3,500 per month; speaking engagements begin at $5,000 plus travel.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'Early education is the primary specialty, drawn from twenty years of operational experience inside the field. Secondary expertise spans non-profit organizations and compliance-driven businesses.',
  },
  {
    question: 'Do you offer one-time strategy sessions?',
    answer:
      'Yes. The Strategy Session is a 90-minute paid engagement focused on a specific decision, transition, or operational question. Pre-call intake. Written follow-up. Most clients use it as a low-commitment way to begin working together.',
  },
  {
    question: 'Can you speak at our conference?',
    answer:
      'Yes. Submit a speaking inquiry through the contact page. Speaking calendar typically fills 8–12 weeks in advance.',
  },
  {
    question: 'How do I begin working with you?',
    answer:
      'Schedule a Discovery Call. It is a 30-minute conversation, complimentary, and the right starting point for almost every engagement.',
  },
  {
    question: 'What outcomes can I realistically expect?',
    answer:
      'That depends on the engagement, but every engagement is scoped with documented deliverables and a defined success measure. We define success together — and meet it together.',
  },
];

export default function FaqPage() {
  return (
    <>
      <FaqSchema items={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          <Eyebrow className="block mb-6">Frequently Asked Questions</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Answers to the questions we receive most.
          </h1>
        </div>
      </section>

      {/* FAQ list — native details/summary for accessibility */}
      <Section tone="bone">
        <div className="max-w-3xl mx-auto">
          <div className="border-y border-line">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-line last:border-b-0"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer py-6 list-none">
                  <h2 className="text-body-lg font-medium text-ink pr-4">
                    {faq.question}
                  </h2>
                  <span
                    aria-hidden
                    className="flex-shrink-0 w-6 h-6 mt-1 grid place-items-center text-ink transition-transform duration-200 group-open:rotate-45"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1" fill="none">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </span>
                </summary>
                <div className="pb-6 -mt-2 pr-12">
                  <p className="text-body text-slate leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="line" tight>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-h2 text-balance">
            Have a question that isn&apos;t here?
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Send an Inquiry
            </Link>
            <a
              href={calendly.discoveryCall()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
