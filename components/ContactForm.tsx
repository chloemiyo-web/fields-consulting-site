'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Contact inquiry form (per Section 6.4 of the blueprint).
 *
 * BACKEND INTEGRATION:
 * ───────────────────────────────────────────────────────────
 * The form is fully functional on the front end. To activate
 * submissions, choose ONE of these services and replace the
 * marked block in handleSubmit() below:
 *
 *   1. Formspree   — https://formspree.io
 *      Replace `endpoint` with the Formspree form URL.
 *      Cheapest setup. No code beyond what's already here.
 *
 *   2. Resend      — https://resend.com  (recommended)
 *      Build a /app/api/contact/route.ts that calls Resend
 *      to email Laura. POST this form to /api/contact.
 *
 *   3. HubSpot Forms — submit to the HubSpot Forms API.
 *
 * In all cases, after success the form redirects to
 * /confirmation/inquiry — that route already exists.
 * ───────────────────────────────────────────────────────────
 */

type Status = 'idle' | 'submitting' | 'error';

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // ─────────── REPLACE THIS BLOCK WHEN BACKEND IS LIVE ───────────
      //
      // Option A — Formspree:
      //   const endpoint = 'https://formspree.io/f/YOUR_FORM_ID';
      //   const res = await fetch(endpoint, {
      //     method: 'POST',
      //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      //     body: JSON.stringify(payload),
      //   });
      //   if (!res.ok) throw new Error('Submission failed');
      //
      // Option B — Resend via your own API route:
      //   const res = await fetch('/api/contact', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(payload),
      //   });
      //   if (!res.ok) throw new Error('Submission failed');
      //
      // For now we simulate a successful submission:
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log('[ContactForm] Submission payload (stub):', payload);
      // ───────────────────────────────────────────────────────────────

      router.push('/confirmation/inquiry');
    } catch (err) {
      setStatus('error');
      setErrorMsg(
        'Something went wrong. Please try again, or email us directly.'
      );
    }
  }

  const isSubmitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="label">
            Full name <span className="text-slate">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="label">
            Email <span className="text-slate">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="input"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="organization" className="label">
            Organization <span className="text-slate">*</span>
          </label>
          <input
            id="organization"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="role" className="label">
            Role / Title
          </label>
          <input
            id="role"
            name="role"
            type="text"
            autoComplete="organization-title"
            className="input"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="label">
            Phone <span className="text-slate font-normal lowercase">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="industry" className="label">
            Industry <span className="text-slate">*</span>
          </label>
          <select
            id="industry"
            name="industry"
            required
            className="select"
            disabled={isSubmitting}
            defaultValue=""
          >
            <option value="" disabled>Select an industry</option>
            <option value="early-education">Early Education</option>
            <option value="non-profit">Non-Profit</option>
            <option value="compliance">Compliance-Driven Business</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="locations" className="label">
          Number of locations or team size <span className="text-slate font-normal lowercase">(optional)</span>
        </label>
        <input
          id="locations"
          name="locations"
          type="text"
          className="input"
          disabled={isSubmitting}
        />
      </div>

      <div>
        <label htmlFor="message" className="label">
          What you&apos;re working on <span className="text-slate">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="textarea"
          placeholder="Tell us about your organization and what you'd like to come out of this conversation."
          disabled={isSubmitting}
        />
      </div>

      <fieldset>
        <legend className="label">Preferred next step</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
          {[
            { value: 'discovery-call', label: 'Discovery call' },
            { value: 'email-reply', label: 'Email reply' },
            { value: 'proposal', label: 'Proposal request' },
            { value: 'speaking', label: 'Speaking inquiry' },
          ].map((opt) => (
            <label
              key={opt.value}
              className="flex items-center gap-3 border border-line p-4 cursor-pointer hover:border-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-line/30"
            >
              <input
                type="radio"
                name="nextStep"
                value={opt.value}
                defaultChecked={opt.value === 'discovery-call'}
                className="accent-ink"
                disabled={isSubmitting}
              />
              <span className="text-[0.9375rem]">{opt.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {status === 'error' && (
        <div
          role="alert"
          className="border border-ink bg-line/40 px-4 py-3 text-[0.9375rem]"
        >
          {errorMsg}
        </div>
      )}

      <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          type="submit"
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : 'Send Inquiry'}
        </button>
        <p className="text-caption text-slate">
          By submitting, you agree to our privacy policy. We do not share or sell information.
        </p>
      </div>
    </form>
  );
}
