import Link from 'next/link';
import { Eyebrow, Section } from '@/components/UI';

export default function NotFound() {
  return (
    <Section tone="bone">
      <div className="max-w-2xl mx-auto py-12 md:py-20">
        <Eyebrow className="block mb-6">404</Eyebrow>
        <h1 className="text-h1 editorial">This page doesn&apos;t exist.</h1>
        <p className="mt-8 text-body-lg text-slate leading-relaxed">
          Apologies. The page you&apos;re looking for has either moved or never
          existed.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/" className="btn-primary">
            Return Home
          </Link>
          <Link href="/insights" className="btn-secondary">
            Browse Insights
          </Link>
        </div>
      </div>
    </Section>
  );
}
