import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { calendly, credentials, images, site } from '@/lib/config';
import { Eyebrow, PortraitPlaceholder, Section } from '@/components/UI';
import { PersonSchema, BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: `About ${site.founderName}`,
  description: `Founder of ${site.name} and senior operations and leadership executive with 20+ years inside growing early education organizations. MBA, doctoral candidate.`,
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PersonSchema />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />

      {/* Page hero */}
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <Eyebrow className="block mb-6">About</Eyebrow>
              <h1 className="text-h1 editorial text-balance">
                Twenty years inside the work.
              </h1>
              <p className="mt-8 text-body-lg text-slate max-w-reading-wide">
                Laura Fields has spent her career building the systems, leading
                the teams, and developing the leaders that growing early
                education organizations need.
              </p>
            </div>
            <div className="lg:col-span-5">
              <PortraitPlaceholder
                src={images.aboutFull.src}
                label="Laura portrait image — about page"
                alt="Laura Fields"
                aspect="portrait"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Why */}
      <Section tone="bone">
        <div className="max-w-reading-wide">
          <h2 className="text-h2 text-balance mb-10">Why Fields Consulting exists.</h2>
          <div className="space-y-6 text-body-lg leading-relaxed text-ink/85">
            <p>
              Early education organizations are among the most under-supported
              businesses in the country. The people running them are dedicated,
              experienced, and often exhausted. The systems holding them
              together are usually inadequate for the growth they&apos;re
              attempting.
            </p>
            <p>That gap is why Fields Consulting exists.</p>
            <p>
              Most consultants in this market come from one of two places. They
              are educators who can speak pedagogy but not P&amp;L. Or they are
              general business consultants who have never set foot inside a
              licensed center, never staffed a 6 a.m. opening, never sat across
              from a state surveyor.
            </p>
            <p>Laura is neither.</p>
            <p>
              She has spent twenty years inside the work — teacher&apos;s
              assistant at sixteen, then climbing through Director, Vice
              President of Integrations and Policy, Chief Quality Officer, and
              now founder of Fields Consulting. She has built the operational
              infrastructure for organizations operating in seven states. She
              has scaled startup early education businesses to national
              footprints. She has redesigned the leadership programs, the
              onboarding systems, and the operating cadence inside companies
              that didn&apos;t exist a decade ago.
            </p>
            <p>
              That combination — operator, strategist, scholar — is what Fields
              Consulting brings to every engagement.
            </p>
          </div>
        </div>
      </Section>

      {/* Laura's Story */}
      <Section tone="line" tight>
        <div className="max-w-reading-wide">
          <Eyebrow className="block mb-6">In her own words</Eyebrow>
          <h2 className="text-h2 text-balance mb-10">The work, in her own words.</h2>
          <div className="space-y-6 text-body-lg leading-relaxed text-ink/85">
            <p>
              I started as a teacher&apos;s assistant in an early childhood
              classroom when I was sixteen. The work mattered to me then, and it
              still does. Children, educators, and the leaders who serve them
              deserve infrastructure that can actually hold the weight of
              what&apos;s being asked of it.
            </p>
            <p>
              Over the next two decades, I worked my way through every level of
              leadership a person can hold inside an early education
              organization. Director. District Manager. Director of Program
              Evolution. Vice President of Integrations and Policy. Each role
              taught me something different.
            </p>
            <p>
              The pattern, after twenty years, is unmistakable: most centers,
              most schools, most multi-site organizations are running on the
              personal capacity of the founder. That is not a business. That is
              a job with a roster.
            </p>
            <p>
              Fields Consulting is the work I would have wanted available to the
              founders, directors, and executive teams I served along the way.
              Strategic. Grounded. Built for the operator who is ready to do the
              next chapter properly.
            </p>
            <div className="text-center text-slate py-2">—</div>
            <p>
              I serve early education organizations because I know them. I serve
              non-profits because I have led inside them. I serve
              compliance-driven businesses because I have built the operating
              systems they need.
            </p>
            <p>
              The work is collaborative. The standards are non-negotiable. The
              outcome is a business that runs better than it did before I walked
              in.
            </p>
          </div>
        </div>
      </Section>

      {/* Credentials */}
      <Section tone="bone">
        <Eyebrow className="block mb-6">Credentials</Eyebrow>
        <h2 className="text-h2 text-balance mb-12">
          Education. Experience. Affiliation.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education */}
          <div>
            <p className="eyebrow block mb-6">Education</p>
            <ul className="divide-y divide-line border-y border-line">
              {credentials.education.map((edu) => (
                <li key={edu.degree} className="py-5">
                  <p className="text-body text-ink/85 leading-snug">
                    {edu.degree}
                  </p>
                  <p className="mt-2 text-caption text-slate">
                    {[edu.institution, edu.status].filter(Boolean).join(' · ')}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Senior roles */}
          <div>
            <p className="eyebrow block mb-6">Senior Roles</p>
            <ul className="divide-y divide-line border-y border-line">
              {credentials.roles.map((role) => (
                <li key={`${role.title}-${role.org}`} className="py-5">
                  <p className="text-body text-ink/85 leading-snug">
                    {role.title}
                  </p>
                  <p className="mt-2 text-caption text-slate">
                    {role.org} · {role.dates}
                  </p>
                </li>
              ))}
            </ul>

            <p className="eyebrow block mt-12 mb-6">Service</p>
            <ul className="divide-y divide-line border-y border-line">
              {credentials.service.map((s) => (
                <li key={s.title} className="py-5">
                  <p className="text-body text-ink/85 leading-snug">{s.title}</p>
                  <p className="mt-2 text-caption text-slate">
                    {s.org} · {s.dates}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="line" tight>
        <div className="max-w-reading-wide">
          <h2 className="text-h2 text-balance mb-10">How I work.</h2>
          <div className="space-y-6 text-body-lg leading-relaxed text-ink/85">
            <p>
              I do not sell generic playbooks. I build systems that fit the
              organization in front of me.
            </p>
            <p>
              Every engagement begins with diagnosis, not prescription. The
              first task is understanding where the gaps actually are — not
              where they appear to be. Most operators are wrong about their own
              bottlenecks, not because they aren&apos;t smart, but because
              they&apos;re too close to the work to see them clearly. That is
              the work of an outside strategist.
            </p>
            <p>
              I lead with vision, connection, and authentic leadership. The
              work is collaborative. The standards are non-negotiable. The
              outcome is a business that runs better than it did before I
              walked in.
            </p>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section tone="ink">
        <div className="text-center max-w-3xl mx-auto py-8 md:py-12">
          <h2 className="text-h2 editorial text-balance">
            If you&apos;re ready to do the next chapter properly — let&apos;s talk.
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={calendly.discoveryCall()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-on-dark"
            >
              Schedule a Discovery Call
            </a>
            <Link href="/services" className="btn-secondary-on-dark">
              See the engagement menu
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
