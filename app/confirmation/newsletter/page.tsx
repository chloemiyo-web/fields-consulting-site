import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { Eyebrow, Section } from '@/components/UI';

export const metadata = buildMetadata({
  title: "You're subscribed",
  description: 'Newsletter subscription confirmed.',
  path: '/confirmation/newsletter',
  noIndex: true,
});

export default function NewsletterConfirmation() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl mx-auto py-12 md:py-20">
        <Eyebrow className="block mb-6">Confirmation</Eyebrow>
        <h1 className="text-h1 editorial">You&apos;re subscribed.</h1>
        <p className="mt-8 text-body-lg text-slate leading-relaxed">
          Welcome. The first issue of Field Notes will arrive in your inbox
          shortly. After that, expect one email per month.
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
