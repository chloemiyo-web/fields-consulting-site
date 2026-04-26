import Link from 'next/link';
import { buildMetadata } from '@/lib/metadata';
import { Eyebrow, Section } from '@/components/UI';

export const metadata = buildMetadata({
  title: 'Your call is booked',
  description: 'Discovery call confirmed.',
  path: '/confirmation/discovery-call',
  noIndex: true,
});

export default function DiscoveryCallConfirmation() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl mx-auto py-12 md:py-20">
        <Eyebrow className="block mb-6">Confirmation</Eyebrow>
        <h1 className="text-h1 editorial">Your call is booked.</h1>
        <p className="mt-8 text-body-lg text-slate leading-relaxed">
          Thank you. A calendar invitation is on its way to your inbox, and
          you&apos;ll receive a brief intake form within the next few minutes.
        </p>
        <p className="eyebrow block mt-12 mb-5">A few things that help the call run well</p>
        <ul className="divide-y divide-line border-y border-line">
          <li className="py-4 text-body text-ink/85">
            Be ready to talk about your organization, your challenges, and what
            you&apos;d like to come out of this conversation.
          </li>
          <li className="py-4 text-body text-ink/85">
            The call is 30 minutes. We&apos;ll use the time efficiently.
          </li>
          <li className="py-4 text-body text-ink/85">
            If you need to reschedule, the calendar invite has a link.
          </li>
        </ul>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/insights" className="btn-secondary">
            Read Field Notes
          </Link>
          <Link href="/services" className="link-arrow self-start sm:self-center">
            Browse the engagement menu →
          </Link>
        </div>
      </div>
    </Section>
  );
}
