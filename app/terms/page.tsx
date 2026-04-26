import { buildMetadata } from '@/lib/metadata';
import { contact, mailto, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description: `Terms of service for ${site.name}.`,
  path: '/terms',
});

export default function TermsPage() {
  return (
    <>
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
          <Eyebrow className="block mb-6">Legal</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-3xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-caption text-slate">
            Last updated: {site.copyrightYear}
          </p>
        </div>
      </section>

      <Section tone="bone">
        <div className="max-w-reading">
          <div className="space-y-10 text-body text-ink/85 leading-relaxed">
            <section>
              <h2 className="text-h3 mb-4">Use of This Site</h2>
              <p>
                Welcome to {site.legalName} ({site.name}). By using this
                website, you agree to the terms set forth below. If you do not
                agree, please do not use the site.
              </p>
              <p className="mt-4 text-slate text-caption">
                This is a placeholder document. Replace with finalized terms
                of service, ideally reviewed by counsel, before launch.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Content & Intellectual Property</h2>
              <p>
                All content on this website — text, graphics, frameworks,
                methodology, and design — is the property of {site.legalName}
                {' '}and is protected by applicable intellectual property law.
                You may not reproduce, distribute, or create derivative works
                without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Consulting Engagements</h2>
              <p>
                The information on this site is provided for general
                informational purposes only and does not constitute a
                consulting engagement. Engagements begin only upon execution of
                a separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">No Warranties</h2>
              <p>
                The site is provided &ldquo;as is&rdquo; without warranties of
                any kind. We make reasonable efforts to maintain accurate
                information but do not guarantee that the site will be
                error-free or uninterrupted.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {site.legalName} is not
                liable for any indirect, incidental, or consequential damages
                arising from your use of this site.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Governing Law</h2>
              <p>
                These terms are governed by the laws of the State of New York,
                without regard to its conflict of laws principles.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Contact</h2>
              <p>
                Questions about these terms can be sent to{' '}
                <a href={mailto('Terms Inquiry')} className="link-arrow inline">
                  {contact.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Section>
    </>
  );
}
