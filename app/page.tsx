import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly, credentials, features, images, site } from '@/lib/config';
import { Eyebrow, Hairline, PortraitPlaceholder, Section } from '@/components/UI';
import { NewsletterForm } from '@/components/NewsletterForm';

export const metadata = buildMetadata({
  title: 'Childcare Consultant for Early Education Leaders',
  description:
    'Strategic operations and leadership consulting for early education organizations. Twenty years inside growing centers, schools, and non-profits. Schedule a consultation.',
  path: '/',
});

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          [02] HERO — Dark charcoal, editorial portrait right third
          ============================================================ */}
      <section className="bg-ink text-bone overflow-hidden">
        <div className="shell pt-20 md:pt-28 lg:pt-36 pb-16 md:pb-24 lg:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-8">
              <Eyebrow tone="light" className="block mb-8">
                {site.category}
              </Eyebrow>
              <h1 className="text-h1 editorial text-balance">
                Strategic consulting for early education organizations
                building what comes next.
              </h1>
              <p className="mt-8 text-body-lg text-bone/75 max-w-reading-wide">
                Operations, leadership, and growth advisory for founders,
                executives, and multi-site operators of childcare, early
                education, and non-profit organizations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
                <a
                  href={calendly.discoveryCall()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-on-dark"
                >
                  Schedule a Discovery Call
                </a>
                <Link href="#how-we-work" className="link-arrow-on-dark">
                  See how we work →
                </Link>
              </div>
            </div>
            <div className="lg:col-span-4">
              <PortraitPlaceholder
                src={images.heroPortrait.src}
                label="Laura portrait image — hero"
                alt="Laura Fields, Founder of Fields Consulting"
                aspect="portrait"
                tone="dark"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          [03] CREDIBILITY BAR — Thin band, light grey
          ============================================================ */}
      <section className="bg-line/60 border-y border-line">
        <div className="shell py-10 md:py-12 text-center">
          <p className="text-[0.9375rem] text-ink/80 max-w-3xl mx-auto leading-relaxed">
            Twenty years of leadership across early education, retail, and
            non-profit organizations. Doctoral candidate, Organizational
            Leadership · MBA, Summa Cum Laude · Based in {site.location.city} ·
            Serving operators nationwide.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-4">
            {credentials.affiliations.map((name) => (
              <span
                key={name}
                className="text-eyebrow uppercase tracking-[0.14em] text-slate"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          [04] PROBLEM — White, three columns
          ============================================================ */}
      <Section tone="bone">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-h2 text-balance">
            You built a great organization. Now you have to build the business
            behind it.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
          {[
            {
              title: 'Operations',
              body: 'The business depends on you. The systems that hold it together live in your head. Growth is exposing what was always going to be exposed.',
            },
            {
              title: 'People',
              body: 'Turnover is eroding your culture, your enrollment, and your margins. Your directors are doing their best — and you are doing theirs.',
            },
            {
              title: 'Scale',
              body: "You're opening another location, considering franchise, or eyeing exit — and the gap between where you are and where the next chapter requires you to be is widening.",
            },
          ].map((col) => (
            <div key={col.title} className="bg-bone p-8 md:p-10">
              <Eyebrow className="block mb-5">{col.title}</Eyebrow>
              <p className="text-body text-ink/85 leading-relaxed">{col.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-3xl mx-auto text-center text-body-lg text-slate">
          Most early education founders didn&apos;t sign up to be systems
          architects. The business you&apos;re now trying to build requires
          exactly that. Fields Consulting was built for this moment.
        </p>
      </Section>

      {/* ============================================================
          [05] SOLUTION — Full-width black, three pillars
          ============================================================ */}
      <Section tone="ink" id="how-we-work">
        <div className="text-center mb-16 md:mb-20">
          <Eyebrow tone="light" className="block mb-6">The Work</Eyebrow>
          <h2 className="text-h2 text-balance">Three outcomes. One architecture.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            {
              num: '01',
              title: 'Operational Clarity',
              body: 'Documented systems. Reliable processes. A business that runs the same on the day you arrive and the day you don\u2019t.',
            },
            {
              num: '02',
              title: 'Leadership Depth',
              body: 'A management bench that can lead, decide, and hold the line — without you in every meeting.',
            },
            {
              num: '03',
              title: 'Structured Scale',
              body: 'Infrastructure that holds at one location, two locations, ten — without compounding the chaos.',
            },
          ].map((p) => (
            <div key={p.num} className="bg-ink p-8 md:p-10">
              <p className="text-eyebrow text-bone/40 mb-4">{p.num}</p>
              <p className="eyebrow text-bone mb-5 block">{p.title}</p>
              <p className="text-body text-bone/75 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================================
          [06] SERVICES OVERVIEW — White, 2x2 cards
          ============================================================ */}
      <Section tone="bone">
        <div className="mb-16 md:mb-20">
          <Eyebrow className="block mb-6">The Engagement Menu</Eyebrow>
          <h2 className="text-h2 text-balance max-w-3xl">
            How organizations work with Fields Consulting.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: 'Strategic Consulting',
              href: '/services/strategic-consulting',
              body: 'Project-based and retained engagements for founders and executive teams navigating growth, expansion, restructuring, or transformation.',
            },
            {
              title: 'Leadership Development & Training',
              href: '/services/leadership-development',
              body: 'Custom programs that build directors, managers, and executive teams ready to lead through complexity.',
            },
            {
              title: 'Executive Coaching',
              href: '/services/executive-coaching',
              body: 'Confidential one-on-one advisory for CEOs, founders, and executive directors. Customized cadence.',
            },
            {
              title: 'Keynote & Speaking',
              href: '/speaking',
              body: 'Industry talks rooted in two decades of operational work — financial health, staff management, growth strategy, and cultural dynamics.',
            },
          ].map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="card group flex flex-col justify-between min-h-[260px]"
            >
              <div>
                <h3 className="text-h3">{s.title}</h3>
                <p className="mt-4 text-body text-slate leading-relaxed">{s.body}</p>
              </div>
              <span className="mt-8 link-arrow self-start group-hover:text-hunter group-hover:border-hunter">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============================================================
          [07] FAST ENTRY POINTS — Light grey
          ============================================================ */}
      <Section tone="line" tight>
        <div className="mb-12 md:mb-16">
          <Eyebrow className="block mb-6">Start Here</Eyebrow>
          <h2 className="text-h2 max-w-3xl text-balance">Three ways to begin.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              num: '01',
              title: 'Discovery Call',
              body: 'A 30-minute conversation about your organization, your challenges, and whether Fields Consulting is the right fit. Complimentary.',
              cta: 'Schedule the call →',
              href: calendly.discoveryCall(),
              external: true,
            },
            {
              num: '02',
              title: 'Strategy Session',
              body: 'A 90-minute paid working session focused on a specific decision, transition, or operational question. Pre-call intake. Written follow-up.',
              cta: 'Book a session →',
              href: calendly.strategySession(),
              external: true,
            },
            {
              num: '03',
              title: 'Operational Diagnostic',
              body: 'A two-week structured assessment of your operations. Stakeholder interviews, document review, and a written diagnostic report with prioritized recommendations.',
              cta: 'Request the diagnostic →',
              href: '/contact',
              external: false,
            },
          ].map((entry) => (
            <div key={entry.num} className="bg-bone border border-line p-8 md:p-10 flex flex-col">
              <p className="text-eyebrow text-slate mb-4">{entry.num}</p>
              <h3 className="text-h3">{entry.title}</h3>
              <p className="mt-4 text-body text-slate leading-relaxed flex-1">
                {entry.body}
              </p>
              {entry.external ? (
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-8 self-start"
                >
                  {entry.cta}
                </a>
              ) : (
                <Link href={entry.href} className="link-arrow mt-8 self-start">
                  {entry.cta}
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ============================================================
          [08] ABOUT SNAPSHOT — Two-column 40/60
          ============================================================ */}
      <Section tone="bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <PortraitPlaceholder
              src={images.aboutSnapshot.src}
              label="Laura portrait image — about snapshot"
              alt="Laura Fields"
              aspect="portrait"
            />
          </div>
          <div className="lg:col-span-7">
            <Eyebrow className="block mb-6">About Laura Fields</Eyebrow>
            <p className="text-body-lg leading-relaxed text-ink/85">
              Laura Fields is the founder of Fields Consulting and a senior
              operations and leadership executive with twenty-plus years of
              experience inside growing education organizations. She has scaled
              early education startups to national footprints, redesigned
              operational systems for multi-state organizations, and built
              leadership programs that survive turnover, growth, and time.
            </p>
            <p className="mt-5 text-body-lg leading-relaxed text-ink/85">
              She holds an MBA in Organizational Leadership (Summa Cum Laude)
              and is currently pursuing a Doctorate of Business Administration.
              Her work is grounded, professional, and built for operators who
              are ready to do the real version of growth.
            </p>
            <Link href="/about" className="link-arrow mt-8 inline-flex">
              Read Laura&apos;s full story →
            </Link>
          </div>
        </div>
      </Section>

      {/* ============================================================
          [09] TRACK RECORD — Charcoal grey, three stat blocks
          ============================================================ */}
      <Section tone="charcoal">
        <div className="text-center mb-14 md:mb-20">
          <Eyebrow tone="light" className="block mb-6">Measurable Outcomes</Eyebrow>
          <h2 className="text-h2 text-balance">Built in the field, not on a whiteboard.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              stat: '7 STATES',
              body: 'Led the operational integration of educational institutions across seven states as Vice President of Integrations and Policy.',
            },
            {
              stat: 'Millions in Revenue',
              body: 'Scaled startup early education organizations to national footprint with significant revenue and EBITDA growth.',
            },
            {
              stat: '20+ Years',
              body: 'Of frontline-to-executive leadership across early education, retail, and non-profit organizations — every level, every layer, every conversation.',
            },
          ].map((b) => (
            <div key={b.stat} className="text-center md:text-left">
              <p className="editorial text-[2.5rem] md:text-[3rem] leading-[1.05] font-medium tracking-tight">
                {b.stat}
              </p>
              <div className="mt-6 hairline-dark md:max-w-[80%]" />
              <p className="mt-6 text-body text-bone/70 leading-relaxed md:max-w-[80%]">
                {b.body}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-caption text-bone/50">
          Specific engagement outcomes available on request during the discovery process.
        </p>
      </Section>

      {/* ============================================================
          [10] WHO THIS IS FOR — Two-column with hairline dividers
          ============================================================ */}
      <Section tone="bone">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-h2 text-balance">
              Fields Consulting is built for:
            </h2>
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {[
                'Early education founders scaling beyond a single location',
                'Multi-site operators preparing for the next expansion',
                'Executive directors and CEOs who need operational structure',
                'Non-profit leaders driving organizational transformation',
                'Boards working through executive transition or strategic redesign',
                'Compliance-driven businesses entering new growth chapters',
              ].map((item) => (
                <li key={item} className="py-5 text-body-lg text-ink/85">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 italic text-slate">
              If you read that list and recognized your organization — that&apos;s
              not a coincidence.
            </p>
          </div>
        </div>
      </Section>

      {/* ============================================================
          [11] PROCESS — Three-step horizontal timeline
          ============================================================ */}
      <Section tone="bone" id="process">
        <Hairline />
        <div className="pt-16 md:pt-20">
          <div className="mb-14 md:mb-16">
            <Eyebrow className="block mb-6">The Fields Method</Eyebrow>
            <h2 className="text-h2 text-balance max-w-3xl">
              A repeatable process. Tailored every time.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line">
            {[
              {
                num: '01',
                title: 'Assess',
                body: 'Every engagement begins with a structured assessment of where the gaps actually are — operationally, organizationally, and financially. No guessing. No generic playbooks.',
              },
              {
                num: '02',
                title: 'Design',
                body: 'A custom architecture is built for your organization: systems, training infrastructure, leadership pipeline, and the documentation that holds it all together.',
              },
              {
                num: '03',
                title: 'Implement',
                body: 'Hands-on engagement through execution. We build alongside your team — not from a slide deck.',
              },
            ].map((step) => (
              <div key={step.num} className="bg-bone p-8 md:p-10">
                <p className="text-eyebrow text-slate mb-4">Step {step.num}</p>
                <h3 className="text-h3 uppercase tracking-wide">{step.title}</h3>
                <p className="mt-5 text-body text-slate leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ============================================================
          [12] NEWSLETTER CAPTURE — only renders if features.showNewsletter
          ============================================================ */}
      {features.showNewsletter && (
        <section id="newsletter" className="bg-line/60 border-y border-line">
          <div className="shell py-16 md:py-20 text-center">
            <h2 className="text-h3 editorial mb-4">Field Notes from Laura.</h2>
            <p className="text-body text-slate max-w-xl mx-auto mb-8">
              Monthly insights on operations, leadership, and scaling early
              education organizations. One email per month. Written from the inside.
            </p>
            <NewsletterForm tone="light" />
          </div>
        </section>
      )}

      {/* ============================================================
          [13] FINAL CTA — Full-width black, generous spacing
          ============================================================ */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto py-8 md:py-16">
          <h2 className="text-h2 editorial text-balance">
            If your organization has outgrown how it&apos;s currently being run —
          </h2>
          <p className="mt-8 text-body-lg text-bone/70">
            Fields Consulting is currently accepting a limited number of new engagements.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
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
