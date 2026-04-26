import type { Metadata } from 'next';
import { Inter_Tight, Fraunces } from 'next/font/google';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { OrganizationSchema } from '@/components/Schema';
import { site } from '@/lib/config';
import './globals.css';

/**
 * Per the design system spec (Section 5.3):
 *   – Headlines: refined sans-serif with editorial weight options
 *   – Editorial moments (hero only): high-precision serif
 *
 * Inter Tight is explicitly listed as the recommended free
 * alternative to Söhne / Neue Haas Grotesk Display Pro.
 * Fraunces is listed as the free alternative to GT Sectra
 * for editorial accent. Both ship via Google Fonts.
 */
const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} · ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  authors: [{ name: site.founderName }],
  creator: site.founderName,
  publisher: site.legalName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${interTight.variable} ${fraunces.variable}`}>
      <body className="min-h-screen flex flex-col">
        <OrganizationSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-ink focus:text-bone focus:px-4 focus:py-2"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
