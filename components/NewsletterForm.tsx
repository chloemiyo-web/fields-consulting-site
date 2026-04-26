'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { features } from '@/lib/config';

/**
 * Newsletter signup (per Section 6.5 / Page 1 of the blueprint).
 *
 * THREE-STATE FEATURE FLAG SYSTEM (lib/config.ts → features):
 * ───────────────────────────────────────────────────────────
 *   showNewsletter: false  + enableNewsletter: false  → COMPONENT HIDDEN
 *   showNewsletter: true   + enableNewsletter: false  → VISIBLE BUT DISABLED
 *                                                       (shows "coming soon" copy)
 *   showNewsletter: true   + enableNewsletter: true   → FULLY ACTIVE
 *
 * Per the user's note: leave both flags false until Laura confirms
 * she wants the email funnel live.
 *
 * BACKEND INTEGRATION (when activating):
 *   1. Beehiiv     — https://developers.beehiiv.com/
 *   2. ConvertKit  — https://developers.convertkit.com/
 *   3. Mailerlite  — https://developers.mailerlite.com/
 *
 * Wire up the chosen API in handleSubmit() below. Recommend
 * proxying through /app/api/newsletter/route.ts to keep the
 * API key out of the client bundle.
 * ───────────────────────────────────────────────────────────
 */

type Status = 'idle' | 'submitting' | 'error';

export function NewsletterForm({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  // Hard hide if the flag says so
  if (!features.showNewsletter) return null;

  return <NewsletterFormBody tone={tone} disabled={!features.enableNewsletter} />;
}

function NewsletterFormBody({
  tone,
  disabled,
}: {
  tone: 'light' | 'dark';
  disabled: boolean;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (disabled) return;
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;

    try {
      // ─── REPLACE WITH BACKEND CALL (Beehiiv / ConvertKit / Mailerlite) ───
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log('[NewsletterForm] Subscription email (stub):', email);
      // ─────────────────────────────────────────────────────────────────────

      router.push('/confirmation/newsletter');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again in a moment.');
    }
  }

  const isSubmitting = status === 'submitting';
  const labelTone = tone === 'dark' ? 'text-bone/70' : 'text-slate';
  const inputTone =
    tone === 'dark'
      ? 'bg-transparent border-white/30 text-bone placeholder:text-bone/40 focus:border-bone'
      : 'bg-transparent border-line text-ink placeholder:text-slate focus:border-ink';

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder={disabled ? 'Coming soon' : 'Your email address'}
          autoComplete="email"
          className={`flex-1 border px-4 py-3.5 transition-colors duration-200 focus:outline-none ${inputTone} disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={disabled || isSubmitting}
        />
        <button
          type="submit"
          className={`${tone === 'dark' ? 'btn-primary-on-dark' : 'btn-primary'} sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed`}
          disabled={disabled || isSubmitting}
        >
          {isSubmitting ? 'Subscribing…' : disabled ? 'Coming soon' : 'Subscribe'}
        </button>
      </div>

      {status === 'error' && (
        <p role="alert" className={`mt-3 text-caption ${labelTone}`}>
          {errorMsg}
        </p>
      )}

      <p className={`mt-3 text-caption ${labelTone}`}>
        {disabled
          ? 'The newsletter launches soon. Bookmark this page to subscribe when it does.'
          : 'No spam. Unsubscribe anytime.'}
      </p>
    </form>
  );
}
