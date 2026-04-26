'use client';

import { useState, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Speaking inquiry form (per Section 7 / Page 7 of the blueprint).
 * Same backend integration pattern as ContactForm — see comments there
 * for full instructions on wiring up Formspree, Resend, or HubSpot.
 *
 * After successful submission, redirects to /confirmation/speaking-inquiry.
 */

type Status = 'idle' | 'submitting' | 'error';

export function SpeakingForm() {
  const router = useRouter();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      // ─── REPLACE WITH BACKEND CALL (Formspree / Resend / HubSpot) ───
      await new Promise((resolve) => setTimeout(resolve, 600));
      console.log('[SpeakingForm] Submission payload (stub):', payload);
      // ────────────────────────────────────────────────────────────────

      router.push('/confirmation/speaking-inquiry');
    } catch {
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
          <label htmlFor="sp-name" className="label">
            Your name <span className="text-slate">*</span>
          </label>
          <input
            id="sp-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="sp-email" className="label">
            Email <span className="text-slate">*</span>
          </label>
          <input
            id="sp-email"
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
          <label htmlFor="sp-org" className="label">
            Organization or event <span className="text-slate">*</span>
          </label>
          <input
            id="sp-org"
            name="organization"
            type="text"
            required
            autoComplete="organization"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="sp-phone" className="label">
            Phone <span className="text-slate font-normal lowercase">(optional)</span>
          </label>
          <input
            id="sp-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="input"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sp-date" className="label">
            Event date or window <span className="text-slate">*</span>
          </label>
          <input
            id="sp-date"
            name="eventDate"
            type="text"
            required
            placeholder="e.g. October 2026 or fall conference season"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="sp-format" className="label">
            Format <span className="text-slate">*</span>
          </label>
          <select
            id="sp-format"
            name="format"
            required
            className="select"
            defaultValue=""
            disabled={isSubmitting}
          >
            <option value="" disabled>Select a format</option>
            <option value="keynote">Keynote (45–60 min)</option>
            <option value="panel">Panel discussion</option>
            <option value="workshop">Workshop (half- or full-day)</option>
            <option value="fireside">Fireside chat / interview</option>
            <option value="podcast">Podcast guest</option>
            <option value="corporate">Corporate event</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="sp-audience" className="label">
            Audience <span className="text-slate">*</span>
          </label>
          <input
            id="sp-audience"
            name="audience"
            type="text"
            required
            placeholder="e.g. multi-site childcare operators"
            className="input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="sp-size" className="label">
            Audience size
          </label>
          <input
            id="sp-size"
            name="audienceSize"
            type="text"
            placeholder="e.g. 200 attendees"
            className="input"
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div>
        <label htmlFor="sp-topic" className="label">
          Topic of interest <span className="text-slate">*</span>
        </label>
        <select
          id="sp-topic"
          name="topic"
          required
          className="select"
          defaultValue=""
          disabled={isSubmitting}
        >
          <option value="" disabled>Select a topic</option>
          <option value="financial-health">Financial Health for Multi-Site Operators</option>
          <option value="staff-management">Staff Management & Retention</option>
          <option value="growth-strategy">Growth Strategies for Multi-Site Organizations</option>
          <option value="cultural-dynamics">Cultural Dynamics That Drive (Or Stall) Success</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="sp-context" className="label">
          Additional context
        </label>
        <textarea
          id="sp-context"
          name="context"
          rows={5}
          className="textarea"
          placeholder="Anything else that would help us evaluate fit."
          disabled={isSubmitting}
        />
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="border border-ink bg-line/40 px-4 py-3 text-[0.9375rem]"
        >
          {errorMsg}
        </div>
      )}

      <div className="pt-2">
        <button
          type="submit"
          className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending…' : 'Submit Speaking Inquiry'}
        </button>
      </div>
    </form>
  );
}
