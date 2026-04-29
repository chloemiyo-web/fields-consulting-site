/**
 * ============================================================
 *  FIELDS CONSULTING — SITE CONFIGURATION
 * ============================================================
 *
 *  This file is the single source of truth for everything
 *  that may need to be updated after launch:
 *
 *    – Domain, contact email, social links
 *    – Calendly booking links
 *    – Feature flags (newsletter visibility / activation)
 *    – Image paths (replace placeholders with real photography)
 *    – Affiliations and credentials displayed in trust bars
 *
 *  To update the site, edit values here and redeploy.
 *  Do not hard-code these values anywhere else in the codebase.
 * ============================================================
 */

export const site = {
  /* ── Brand identity ─────────────────────────────────────── */
  name: 'Fields Consulting',
  legalName: 'Laura Fields LLC',
  founderName: 'Laura Fields',
  tagline: 'Strategic Operations & Leadership Consulting',
  description:
    'Strategic operations and leadership consulting for early education organizations. Twenty years inside growing centers, schools, and non-profits.',
  category: 'Childcare Growth Architecture',

  /* ── Domain & URLs ──────────────────────────────────────── */
  domain: 'fieldsconsulting.com',
  url: 'https://fieldsconsulting.com',

  /* ── Geography ──────────────────────────────────────────── */
  location: {
    city: 'New York',
    region: 'NY',
    serviceArea: 'Serving operators nationwide',
  },

  /* ── Copyright year ─────────────────────────────────────── */
  copyrightYear: 2026,
} as const;

/* ============================================================
 *  CONTACT & BOOKING LINKS
 *  Replace these placeholder URLs with real ones once accounts
 *  are configured. All consumed via the helpers below — never
 *  hard-coded into pages.
 * ============================================================ */
export const contact = {
    email: 'lfields@laurafieldsllc.com',

  // Calendly
    discoveryCallUrl: 'https://calendar.app.google/69JLKqM1ViLNjj1B8',
  strategySessionUrl: 'https://calendly.com/fieldsconsulting/strategy-session',

  // Social
    linkedin: 'https://www.linkedin.com/in/laura-fields27/',
  // Add more channels as they go live (leave empty strings to hide automatically):
  // twitter: '',
  // youtube: '',
  // podcast: '',
} as const;

/* ============================================================
 *  FEATURE FLAGS
 *  Per the user's note: the email/newsletter funnel should not
 *  ship live until Laura confirms. Toggle these flags to control
 *  newsletter visibility across the site.
 *
 *    showNewsletter:    Render the newsletter section in the UI?
 *    enableNewsletter:  Is the form submission active? (false = visible
 *                       but disabled with "coming soon" copy)
 *
 *  Recommended states:
 *    Pre-launch:   show=false, enable=false  → fully hidden
 *    Soft launch:  show=true,  enable=false  → visible but disabled
 *    Live:         show=true,  enable=true   → fully active
 * ============================================================ */
export const features = {
  showNewsletter: false,
  enableNewsletter: false,

  // Toggle this once real client testimonials are collected and approved.
  showTestimonials: false,
} as const;

/* ============================================================
 *  IMAGES
 *  Drop final photography into /public/images/ and update these
 *  paths. Hero photo should be < 200KB after optimization.
 *  Until then, the components render labeled placeholder cards.
 * ============================================================ */
export const images = {
  heroPortrait: {
    src: '', // e.g. '/images/laura-hero.jpg'
    alt: 'Laura Fields, Founder of Fields Consulting',
    placeholder: 'Laura portrait image — hero',
  },
  aboutSnapshot: {
    src: '',
    alt: 'Laura Fields',
    placeholder: 'Laura portrait image — about snapshot',
  },
  aboutFull: {
    src: '',
    alt: 'Laura Fields',
    placeholder: 'Laura portrait image — about page',
  },
  speakingHero: {
    src: '',
    alt: 'Laura Fields presenting',
    placeholder: 'Laura speaking image',
  },
} as const;

/* ============================================================
 *  CREDENTIALS & AFFILIATIONS
 *  Displayed in the homepage credibility bar and About page.
 *  Add or remove items as new affiliations are confirmed.
 * ============================================================ */
export const credentials = {
  affiliations: [
    'Bellevue University',
    'Southern New Hampshire University',
    'NAEYC',
  ],
  education: [
    {
      degree: 'Doctor of Business Administration, Organizational Leadership',
      institution: 'Bellevue University',
      status: 'in progress',
    },
    {
      degree: 'Master of Business Administration, Organizational Leadership',
      institution: 'Southern New Hampshire University',
      status: 'Summa Cum Laude · Delta Mu Delta',
    },
    {
      degree: 'Bachelor of Arts, General Studies & Organizational Leadership',
      institution: '',
      status: 'Summa Cum Laude · National Society of Leadership and Success',
    },
    {
      degree: 'Associate of Arts and Science, Early Childhood Education',
      institution: '',
      status: 'Magna Cum Laude · Phi Theta Kappa',
    },
  ],
  roles: [
    { title: 'Vice President, Integrations and Policy', org: 'Kids & Company', dates: '2024–2025' },
    { title: 'Director of Program Evolution', org: 'Council for Economic Education', dates: '2022–2024' },
    { title: 'District Manager', org: 'Learning Care Group', dates: '2019–2022' },
    { title: 'Director', org: 'Celebree School / KinderCare Education', dates: '2016–2019' },
    { title: 'Founder', org: 'Fields Consulting · Laura Fields LLC', dates: 'present' },
  ],
  service: [
    { title: 'Chief Operations Officer', org: 'GANGSTA 4 the Kingdom Organization', dates: 'non-profit, 2021–present' },
  ],
} as const;

/* ============================================================
 *  HELPERS
 * ============================================================ */
export const calendly = {
  discoveryCall: () => contact.discoveryCallUrl,
  strategySession: () => contact.strategySessionUrl,
};

export const mailto = (subject?: string) =>
  `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`;
