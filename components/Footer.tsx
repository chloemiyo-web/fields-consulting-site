import Link from 'next/link';
import { contact, features, mailto, site } from '@/lib/config';

export function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="shell py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Column 1 — Brand */}
          <div>
            <p className="eyebrow text-bone/70 mb-5">{site.name}</p>
            <p className="text-bone/80 max-w-xs leading-relaxed">
              Strategic operations and leadership consulting for early
              education organizations.
            </p>
            <p className="text-bone/60 mt-5 text-[0.9375rem]">
              {site.location.city}, {site.location.region}
              <br />
              {site.location.serviceArea}.
            </p>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <p className="eyebrow text-bone/70 mb-5">Navigate</p>
            <ul className="space-y-3 text-bone/80">
              <li><Link href="/" className="hover:text-bone transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-bone transition-colors">Services</Link></li>
              <li><Link href="/about" className="hover:text-bone transition-colors">About</Link></li>
              <li><Link href="/speaking" className="hover:text-bone transition-colors">Speaking</Link></li>
              <li><Link href="/insights" className="hover:text-bone transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="hover:text-bone transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-bone transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3 — Connect */}
          <div>
            <p className="eyebrow text-bone/70 mb-5">Connect</p>
            <ul className="space-y-3 text-bone/80">
              <li>
                <a
                  href={mailto()}
                  className="hover:text-bone transition-colors"
                >
                  {contact.email}
                </a>
              </li>
              {contact.linkedin && (
                <li>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-bone transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {features.showNewsletter && (
                <li>
                  <Link
                    href="/#newsletter"
                    className="hover:text-bone transition-colors"
                  >
                    Field Notes Newsletter
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline-dark mt-16" />
        <div className="flex flex-col md:flex-row justify-between gap-4 mt-8 text-[0.8125rem] text-bone/50">
          <p>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-bone/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-bone/80 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
