import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { Eyebrow, Section } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Speaking inquiry received',
  description: 'Thank you for your speaking inquiry.',
  path: '/confirmation/speaking-inquiry',
  noIndex: true,
});

export default function SpeakingInquiryConfirmation() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl mx-auto py-12 md:py-20">
        <Eyebrow className="block mb-6">Confirmation</Eyebrow>
        <h1 className="text-h1 editorial">Speaking inquiry received.</h1>
        <p className="mt-8 text-body-lg text-slate leading-relaxed">
          Thank you. Your speaking inquiry has been delivered, and Laura will
          respond personally within one business day.
        </p>
        <p className="mt-6 text-body text-slate leading-relaxed">
          If the event date is approaching, mention urgency in a follow-up
          email so it can be prioritized.
        </p>
        <div className="mt-12">
          <Link href="/" className="btn-secondary">
            Return Home
          </Link>
        </div>
      </div>
    </Section>
  );
}
