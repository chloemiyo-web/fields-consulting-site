'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { calendly, site } from '@/lib/config';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
        <header className="sticky top-0 z-40 w-full bg-bone/95 border-b border-line">
      <div className="shell flex items-center justify-between h-[72px]">
        {/* Wordmark */}
        <Link
          href="/"
          className="text-[0.875rem] font-medium tracking-[0.18em] uppercase text-ink"
          aria-label={`${site.name} home`}
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.875rem] text-ink hover:text-hunter transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href={calendly.discoveryCall()}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary !py-3 !px-6 !text-[0.8125rem]"
        >
          Schedule a Call
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
        >
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${
              open ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-opacity duration-200 ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-6 bg-ink transition-transform duration-200 ${
              open ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="md:hidden fixed inset-0 top-[72px] bg-bone z-30 overflow-y-auto"
        >
          <nav
            className="shell flex flex-col py-12 gap-8"
            aria-label="Mobile primary"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-3xl font-medium tracking-tight text-ink hover:text-hunter transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-8 mt-4 border-t border-line">
              <a
                href={calendly.discoveryCall()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary w-full"
              >
                Schedule a Call
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
