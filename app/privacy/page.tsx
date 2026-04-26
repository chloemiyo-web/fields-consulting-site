import { buildMetadata } from '@/lib/metadata';
import { contact, mailto, site } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: `Privacy practices for ${site.name}.`,
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-bone border-b border-line">
        <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20">
          <Eyebrow className="block mb-6">Legal</Eyebrow>
          <h1 className="text-h1 editorial text-balance max-w-3xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-caption text-slate">
            Last updated: {site.copyrightYear}
          </p>
        </div>
      </section>

      <Section tone="bone">
        <div className="max-w-reading prose-spec">
          <div className="space-y-10 text-body text-ink/85 leading-relaxed">
            <section>
              <h2 className="text-h3 mb-4">Overview</h2>
              <p>
                {site.legalName} ({site.name}) respects your privacy. This
                policy describes what information we collect, how we use it,
                and the choices you have.
              </p>
              <p className="mt-4 text-slate text-caption">
                This is a placeholder document. Replace with a finalized
                privacy policy, ideally reviewed by counsel, before launch.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Information We Collect</h2>
              <p>
                We collect information you provide directly through forms on
                this site, including your name, email address, organization,
                role, and the content of your inquiry. If you book a discovery
                call, scheduling provider Calendly may also collect information
                under its own privacy policy.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">How We Use Information</h2>
              <p>
                We use the information you provide solely to respond to your
                inquiry, schedule conversations, deliver requested content
                (such as the newsletter, when active), and operate our
                consulting relationship with you.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Sharing</h2>
              <p>
                We do not sell, rent, or share your personal information with
                third parties for their marketing purposes. We may share
                information with service providers (e.g., email delivery,
                scheduling) strictly to operate this site.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Cookies & Analytics</h2>
              <p>
                The site may use privacy-respecting analytics to understand
                aggregate usage patterns. No personally identifying data is
                sold or shared.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Your Choices</h2>
              <p>
                You may unsubscribe from any email at any time using the link
                in the email. You may request deletion of your information by
                contacting us at the email below.
              </p>
            </section>

            <section>
              <h2 className="text-h3 mb-4">Contact</h2>
              <p>
                Questions about this policy can be sent to{' '}
                <a href={mailto('Privacy Inquiry')} className="link-arrow inline">
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
