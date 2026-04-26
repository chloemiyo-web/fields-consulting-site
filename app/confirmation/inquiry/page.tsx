import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { contact, mailto } from '@/lib/config';
import { Eyebrow, Section } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Inquiry received',
  description: 'Thank you for your inquiry.',
  path: '/confirmation/inquiry',
  noIndex: true,
});

export default function InquiryConfirmation() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl mx-auto py-12 md:py-20">
        <Eyebrow className="block mb-6">Confirmation</Eyebrow>
        <h1 className="text-h1 editorial">Inquiry received.</h1>
        <p className="mt-8 text-body-lg text-slate leading-relaxed">
          Thank you. Your inquiry has been delivered, and Laura will respond
          personally within one business day.
        </p>
        <p className="mt-6 text-body text-slate leading-relaxed">
          If your matter is time-sensitive, please email{' '}
          <a href={mailto()} className="link-arrow inline">
            {contact.email}
          </a>{' '}
          directly and reference your inquiry submission.
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
