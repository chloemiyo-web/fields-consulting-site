import type { ReactNode } from 'react';

/* Eyebrow — small uppercase letter-spaced section anchor */
export function Eyebrow({
  children,
  className = '',
  tone = 'dark',
}: {
  children: ReactNode;
  className?: string;
  tone?: 'dark' | 'light';
}) {
  return (
    <span
      className={`eyebrow ${tone === 'light' ? 'text-bone/70' : 'text-ink'} ${className}`}
    >
      {children}
    </span>
  );
}

/* Section wrapper that locks vertical rhythm */
export function Section({
  children,
  className = '',
  tone = 'bone',
  id,
  tight = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: 'bone' | 'ink' | 'charcoal' | 'line';
  id?: string;
  tight?: boolean;
}) {
  const toneClasses = {
    bone: 'bg-bone text-ink',
    ink: 'bg-ink text-bone',
    charcoal: 'bg-charcoal text-bone',
    line: 'bg-line/60 text-ink',
  }[tone];

  return (
    <section
      id={id}
      className={`${toneClasses} ${tight ? 'section-tight' : 'section'} ${className}`}
    >
      <div className="shell">{children}</div>
    </section>
  );
}

/* Page hero — used by inner pages (not the homepage) */
export function PageHero({
  eyebrow,
  headline,
  subhead,
  children,
}: {
  eyebrow: string;
  headline: string;
  subhead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-bone border-b border-line">
      <div className="shell pt-20 md:pt-28 lg:pt-32 pb-16 md:pb-20 lg:pb-24">
        <Eyebrow className="mb-6 block">{eyebrow}</Eyebrow>
        <h1 className="text-h1 max-w-4xl text-balance">{headline}</h1>
        {subhead && (
          <p className="mt-6 text-body-lg text-slate max-w-reading-wide">
            {subhead}
          </p>
        )}
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}

/* Portrait placeholder — until real photography is loaded.
   Receives the placeholder label from the central config. */
export function PortraitPlaceholder({
  label,
  src,
  alt,
  aspect = 'portrait',
  tone = 'light',
}: {
  label: string;
  src?: string;
  alt: string;
  aspect?: 'portrait' | 'square' | 'landscape';
  tone?: 'light' | 'dark';
}) {
  const aspectClass = {
    portrait: 'aspect-[3/4]',
    square: 'aspect-square',
    landscape: 'aspect-[4/3]',
  }[aspect];

  if (src) {
    // Real image branch — once a path is set in lib/config.ts, this renders.
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`w-full ${aspectClass} object-cover`} />;
  }

  // Placeholder — labeled per the user's instructions
  return (
    <div
      className={`relative w-full ${aspectClass} flex items-center justify-center border ${
        tone === 'light'
          ? 'bg-line/40 border-line text-slate'
          : 'bg-charcoal border-white/10 text-bone/50'
      }`}
      role="img"
      aria-label={alt}
    >
      <div className="absolute inset-4 border border-current/20" />
      <div className="text-center px-6">
        <p className="eyebrow mb-3 opacity-60">Photography</p>
        <p className="text-[0.9375rem]">{label}</p>
      </div>
    </div>
  );
}

/* Hairline divider */
export function Hairline({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return <div className={tone === 'dark' ? 'hairline-dark' : 'hairline'} />;
}
