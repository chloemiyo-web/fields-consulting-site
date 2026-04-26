import { buildMetadata } from '@/lib/metadata';
import { Eyebrow, PortraitPlaceholder, Section } from '@/components/UI';
import { SpeakingForm } from '@/components/SpeakingForm';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: 'Keynote Speaker on Early Education Operations and Leadership',
  description:
    'Industry talks rooted in twenty years of operational work. Financial health, staff management, growth strategy, cultural dynamics.',
  path: '/speaking',
});

export default function SpeakingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Speaking', url: '/speaking' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <Eyebrow className="block mb-6">Keynote & Speaking</Eyebrow>
              <h1 className="text-h1 editorial text-balance">
                A keynote rooted in the field — not the textbook.
              </h1>
              <p className="mt-8 text-body-lg text-slate max-w-reading-wide">
                Industry talks, panels, and conference keynotes drawn from
                twenty years inside growing early education organizations.
              </p>
              <a href="#inquire" className="link-arrow mt-10 inline-flex">
                Inquire about a booking →
              </a>
            </div>
            <div className="lg:col-span-5">
              <PortraitPlaceholder
                label="Laura speaking image"
                alt="Laura Fields presenting"
                aspect="landscape"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics */}
      <Section tone="bone">
        <h2 className="text-h2 mb-12">Topic areas.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line">
          {[
            {
              num: '01',
              title: 'Financial Health for Early Education Operators',
              body: 'What multi-site operators need to know about cost per enrollment, subsidy economics, P&L literacy, and the financial operating habits that separate scaling organizations from struggling ones.',
            },
            {
              num: '02',
              title: 'Staff Management and Retention',
              body: 'The architecture of staffing that survives. Recruitment, onboarding, professional development, succession planning, and the cultural infrastructure that keeps the right people.',
            },
            {
              num: '03',
              title: 'Growth Strategies for Multi-Site Organizations',
              body: 'The three-stage path from single location to multi-site operator. Systems, leadership, infrastructure, and the strategic decisions that compound.',
            },
            {
              num: '04',
              title: 'Cultural Dynamics That Drive (Or Stall) Success',
              body: 'The unwritten operating system of every organization. Why culture is operational, not aspirational, and how to design it deliberately.',
            },
          ].map((t) => (
            <article key={t.num} className="bg-bone p-8 md:p-10">
              <p className="text-eyebrow text-slate mb-4">{t.num}</p>
              <h3 className="text-h3">{t.title}</h3>
              <p className="mt-5 text-body text-slate leading-relaxed">{t.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* Audiences + Formats — split */}
      <Section tone="line" tight>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-h2 mb-10">Audiences served.</h2>
            <ul className="divide-y divide-line border-y border-line">
              {[
                'Early childhood education conferences and association events',
                'Multi-site childcare and franchise operator summits',
                'Non-profit leadership conferences',
                'Women in business and women-led entrepreneurship events',
                'Higher education and continuing education events',
                'Corporate leadership and learning & development conferences',
                'Podcasts and panel discussions',
              ].map((item) => (
                <li key={item} className="py-4 text-body text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-h2 mb-10">Available formats.</h2>
            <ul className="divide-y divide-line border-y border-line">
              {[
                'Keynote (45–60 minutes)',
                'Panel discussion participation',
                'Workshop (half-day or full-day)',
                'Fireside chat or interview format',
                'Podcast guest appearance',
                'Corporate event keynote',
              ].map((item) => (
                <li key={item} className="py-4 text-body text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* What to expect */}
      <Section tone="bone">
        <div className="max-w-reading-wide">
          <h2 className="text-h2 mb-8">What organizers can expect.</h2>
          <div className="space-y-5 text-body-lg leading-relaxed text-ink/85">
            <p>
              Talks are tailored to the audience and the organizer&apos;s
              stated outcomes. A pre-event call confirms scope, audience,
              takeaways, and format. Slides, if needed, are provided in
              advance. Q&amp;A is available on request.
            </p>
            <p>
              The work is professional. The preparation is rigorous. The talk
              delivers what the room came for.
            </p>
          </div>
        </div>
      </Section>

      {/* Inquiry form */}
      <section id="inquire" className="bg-charcoal text-bone">
        <div className="shell section">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Eyebrow tone="light" className="block mb-6">Booking</Eyebrow>
              <h2 className="text-h2 editorial">Submit a speaking inquiry.</h2>
              <p className="mt-6 text-body-lg text-bone/75">
                Speaking inquiries are reviewed personally by Laura. Response
                within one business day.
              </p>
            </div>
            <div className="bg-bone text-ink p-8 md:p-12 border border-white/10">
              <SpeakingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
