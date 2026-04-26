import { buildMetadata } from '@/lib/metadata';
import { calendly, contact, mailto, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';
import { ContactForm } from '@/components/ContactForm';
import { BreadcrumbSchema } from '@/components/Schema';

export const metadata = buildMetadata({
  title: `Contact ${site.name}`,
  description:
    'Schedule a discovery call, send an inquiry, or submit a speaking request. Personal response within one business day.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />

      {/* Hero */}
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
          <Eyebrow className="block mb-6">Contact</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-4xl">
            Ready to talk about what your organization needs?
          </h1>
          <p className="mt-8 text-body-lg text-slate max-w-reading-wide">
            Three ways to begin. Choose what fits.
          </p>
        </div>
      </section>

      {/* Three contact options */}
      <Section tone="line" tight>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-bone border border-line p-8 flex flex-col">
            <p className="text-eyebrow text-slate mb-4">01</p>
            <h2 className="text-h3">Schedule a Discovery Call</h2>
            <p className="mt-4 text-body text-slate leading-relaxed flex-1">
              A 30-minute conversation to understand your organization, your
              challenges, and whether {site.name} is the right fit.
              Complimentary.
            </p>
            <a
              href={calendly.discoveryCall()}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow mt-8 self-start"
            >
              Book a time →
            </a>
          </div>

          <div className="bg-bone border border-line p-8 flex flex-col">
            <p className="text-eyebrow text-slate mb-4">02</p>
            <h2 className="text-h3">Send an Inquiry</h2>
            <p className="mt-4 text-body text-slate leading-relaxed flex-1">
              For organizations who prefer to start with a written introduction
              or a proposal request.
            </p>
            <a href="#inquiry" className="link-arrow mt-8 self-start">
              Use the form below ↓
            </a>
          </div>

          <div className="bg-bone border border-line p-8 flex flex-col">
            <p className="text-eyebrow text-slate mb-4">03</p>
            <h2 className="text-h3">Email Directly</h2>
            <p className="mt-4 text-body text-slate leading-relaxed flex-1">
              For brief questions or referrals.
            </p>
            <a href={mailto()} className="link-arrow mt-8 self-start break-all">
              {contact.email} →
            </a>
          </div>
        </div>
      </Section>

      {/* Inquiry form */}
      <Section tone="bone" id="inquiry">
        <div className="max-w-3xl mx-auto">
          <Eyebrow className="block mb-6 text-center">Inquiry Form</Eyebrow>
          <h2 className="text-h2 editorial text-center text-balance">
            Send an inquiry.
          </h2>
          <p className="mt-6 text-body-lg text-slate text-center">
            Inquiries are reviewed personally by Laura. Response within one
            business day.
          </p>
          <div className="mt-12">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Logistics */}
      <Section tone="ink" tight>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {[
            { label: 'Based In', value: `${site.location.city}, ${site.location.region}` },
            { label: 'Working With', value: 'Operators nationwide' },
            { label: 'Engagement Formats', value: 'Virtual, in-person, or blended' },
            { label: 'Response Time', value: 'One business day for all inquiries' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-eyebrow text-bone/50 mb-3">{item.label}</p>
              <p className="text-body text-bone/85">{item.value}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
