# Fields Consulting

Production-ready Next.js website for **Fields Consulting** (Laura Fields LLC) — strategic operations and leadership consulting for early education organizations.

Built per the Master Website Blueprint: executive minimalism, square structure, monochrome base with restrained accents, no motion, hairline rules. Stack: Next.js 14 (App Router) + TypeScript + Tailwind CSS.

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Updating Placeholder Content](#updating-placeholder-content)
4. [Deploying to GitHub & Vercel](#deploying-to-github--vercel)
5. [Connecting Real Form Backends](#connecting-real-form-backends)
6. [Activating the Newsletter](#activating-the-newsletter)
7. [Adding Final Photography](#adding-final-photography)
8. [SEO Checklist for Launch](#seo-checklist-for-launch)
9. [Design System Notes](#design-system-notes)

---

## Quick Start

**Requirements:** Node.js 18.17 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# Visit http://localhost:3000
```

Other scripts:

```bash
npm run build   # Production build (also runs typechecking)
npm run start   # Serve the production build locally
npm run lint    # ESLint
```

---

## Project Structure

```
fields-consulting/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout: fonts, nav, footer, schema
│   ├── globals.css               # Tailwind + design system base styles
│   ├── page.tsx                  # Home (13 sections per blueprint)
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx              # Services overview
│   │   ├── strategic-consulting/page.tsx
│   │   ├── leadership-development/page.tsx
│   │   └── executive-coaching/page.tsx
│   ├── speaking/page.tsx         # Includes inquiry form
│   ├── insights/page.tsx         # Blog index (cornerstone seeds)
│   ├── contact/page.tsx          # Includes contact form
│   ├── faq/page.tsx              # With FAQPage schema
│   ├── confirmation/             # Post-submit success pages (noindex)
│   │   ├── discovery-call/page.tsx
│   │   ├── inquiry/page.tsx
│   │   ├── speaking-inquiry/page.tsx
│   │   └── newsletter/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── not-found.tsx             # 404
│   ├── sitemap.ts                # Dynamic sitemap.xml
│   └── robots.ts                 # Dynamic robots.txt
│
├── components/
│   ├── Navigation.tsx            # Sticky nav + mobile hamburger
│   ├── Footer.tsx
│   ├── UI.tsx                    # Eyebrow, Section, PageHero, PortraitPlaceholder, Hairline
│   ├── Schema.tsx                # JSON-LD: Organization, Person, Service, FAQ, Breadcrumb
│   ├── ContactForm.tsx           # Inquiry form
│   ├── SpeakingForm.tsx          # Speaking inquiry form
│   └── NewsletterForm.tsx        # Feature-flagged subscription form
│
├── lib/
│   ├── config.ts                 # ★ SINGLE SOURCE OF TRUTH (edit this) ★
│   └── metadata.ts               # SEO metadata builder
│
├── public/
│   ├── og-image.svg              # Open Graph share card (placeholder)
│   ├── favicon.svg               # Favicon (placeholder)
│   └── images/                   # Drop final photography here (create folder)
│
├── tailwind.config.ts            # Design tokens locked to blueprint
├── next.config.js
├── tsconfig.json
├── postcss.config.js
├── .env.example                  # Copy to .env.local for backend keys
└── package.json
```

---

## Updating Placeholder Content

**One file controls almost everything:** [`lib/config.ts`](./lib/config.ts).

Open it and update the values below. Save. Redeploy. No other files need to change.

| What to update | Where | Example |
|---|---|---|
| Email address | `contact.email` | `'hello@fieldsconsulting.com'` |
| Discovery call link | `contact.discoveryCallUrl` | Real Calendly URL |
| Strategy session link | `contact.strategySessionUrl` | Real Calendly URL |
| LinkedIn | `contact.linkedin` | Final profile URL |
| Domain | `site.domain` and `site.url` | After domain registration |
| Newsletter visibility | `features.showNewsletter` | `true` once Laura approves |
| Newsletter active? | `features.enableNewsletter` | `true` when ESP is wired up |
| Hero portrait image | `images.heroPortrait.src` | `'/images/laura-hero.jpg'` |
| About snapshot image | `images.aboutSnapshot.src` | `'/images/laura-about.jpg'` |
| Affiliations list | `credentials.affiliations` | Add associations as joined |
| Roles list | `credentials.roles` | Update if title changes |
| Copyright year | `site.copyrightYear` | Change in January each year |

> **Tip:** All values are typed `as const`, so your editor will autocomplete and warn you if you mistype a key.

---

## Deploying to GitHub & Vercel

### Step 1 — Push to GitHub

If you haven't created a GitHub repo yet:

```bash
# Inside the project folder
git init
git add .
git commit -m "Initial commit: Fields Consulting website"
git branch -M main
```

Then create a new empty repository on [github.com/new](https://github.com/new) (name it `fields-consulting`) and push:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fields-consulting.git
git push -u origin main
```

### Step 2 — Deploy to Vercel

1. Visit [vercel.com/new](https://vercel.com/new).
2. Click **Import** next to your `fields-consulting` GitHub repo.
3. Framework should auto-detect as **Next.js**. Leave all defaults.
4. Click **Deploy**. First build takes ~60 seconds.
5. You'll get a temporary URL like `fields-consulting.vercel.app`.

### Step 3 — Connect the Real Domain

1. In Vercel dashboard → your project → **Settings** → **Domains**.
2. Enter `fieldsconsulting.com` and `www.fieldsconsulting.com`.
3. Vercel will show DNS records to add. Log into **Namecheap** and:
   - Set up an **A record** for `@` pointing to the Vercel IP shown.
   - Set up a **CNAME** for `www` pointing to `cname.vercel-dns.com`.
4. DNS propagates in 5 minutes to a few hours.
5. Vercel auto-provisions SSL certificates. No action needed.

### Step 4 — Set Up Continuous Deployment

Already done by default. Every `git push` to `main` triggers an automatic Vercel deploy. Pull request previews are also free.

---

## Connecting Real Form Backends

All three forms (Contact, Speaking, Newsletter) are fully built on the front end with realistic fields and validation states. They currently log submissions to the console and redirect to the confirmation pages. To activate them for real submissions, pick **one** option per form:

### Option A — Formspree *(simplest, no code)*

1. Sign up at [formspree.io](https://formspree.io).
2. Create a form. Copy the form endpoint (e.g. `https://formspree.io/f/abc123`).
3. Open `components/ContactForm.tsx` and find the `// REPLACE THIS BLOCK` comment in `handleSubmit`. Uncomment and use the Formspree branch.
4. Repeat for `components/SpeakingForm.tsx`.

### Option B — Resend *(recommended for full control)*

1. Sign up at [resend.com](https://resend.com) and verify the `fieldsconsulting.com` domain.
2. Create an API key. Add it to `.env.local`:
   ```bash
   RESEND_API_KEY=re_your_key_here
   ```
3. Create `app/api/contact/route.ts`:
   ```ts
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);

   export async function POST(req: Request) {
     const data = await req.json();
     await resend.emails.send({
       from: 'inquiries@fieldsconsulting.com',
       to: 'hello@fieldsconsulting.com',
       subject: `New Inquiry: ${data.name}`,
       text: JSON.stringify(data, null, 2),
     });
     return Response.json({ ok: true });
   }
   ```
4. In `components/ContactForm.tsx`, switch the marked block to call `/api/contact`.

### Option C — HubSpot Forms

Submit form data directly to the HubSpot Forms API. See HubSpot docs for the endpoint format.

---

## Activating the Newsletter

Per the project notes, the newsletter funnel is **hidden by default** until Laura confirms she wants it live. There are three states controlled in `lib/config.ts`:

```ts
export const features = {
  showNewsletter: false,    // false = section hidden everywhere
  enableNewsletter: false,  // false = visible but disabled (shows "coming soon")
  // ...
};
```

**Recommended rollout:**

| Phase | `showNewsletter` | `enableNewsletter` | Result |
|---|:-:|:-:|---|
| Pre-launch | `false` | `false` | Newsletter section completely hidden |
| Soft launch | `true` | `false` | Section visible, form disabled with "coming soon" copy |
| Live | `true` | `true` | Fully functional |

When activating, also wire up an ESP in `components/NewsletterForm.tsx` (Beehiiv, ConvertKit, or Mailerlite — see comments inside that file).

---

## Adding Final Photography

1. Drop optimized JPGs into `public/images/`. Aim for under 200KB each.
2. Recommended specs (per Section 5.8 of the blueprint):
   - **Hero:** ~1200x1600 (3:4 portrait), three-quarter framing, controlled lighting, neutral background, B&W treatment.
   - **About snapshot:** Same ratio, slightly more environmental.
   - **About full:** Color or B&W, in-context.
   - **Speaking:** Landscape, presenting context.
3. Update the `src` paths in `lib/config.ts → images`. The placeholder cards will swap for real images automatically.

---

## SEO Checklist for Launch

- [ ] Update `site.url` and `site.domain` in `lib/config.ts` to the final domain.
- [ ] Replace the placeholder `og-image.svg` with a real designed PNG (1200×630). Update path in `lib/metadata.ts` if needed.
- [ ] Submit `https://fieldsconsulting.com/sitemap.xml` to [Google Search Console](https://search.google.com/search-console).
- [ ] Submit the same sitemap to [Bing Webmaster Tools](https://www.bing.com/webmasters).
- [ ] Validate JSON-LD schema with [Google's Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Create the **Google Business Profile** (Service Area Business — no public address).
- [ ] Lighthouse audit — target >95 across all metrics. Run `npm run build && npm run start`, then audit at `http://localhost:3000`.
- [ ] Confirm all internal links resolve (no 404s).
- [ ] Verify the 404 page renders correctly at `/some-fake-route`.

---

## Design System Notes

The design system is locked to the blueprint and enforced through `tailwind.config.ts` and `app/globals.css`. Key constraints (do not change without intent):

- **Colors:** `ink` (#0A0A0A), `bone` (#F7F7F5), `charcoal` (#1E1E1E), `slate` (#6B6B6B), `line` (#E8E8E5), `hunter` (#1F3B2D), `heritage` (#D8B4A0). Accent colors must remain at ~5% of total visual weight.
- **Square corners everywhere.** `border-radius: 0` is global. Do not introduce rounded buttons, cards, or inputs.
- **No motion.** Page transitions and decorative animations are forbidden. Hover state colors transition at 200ms — that's the limit.
- **Typography:** **Inter Tight** for sans, **Fraunces** for editorial (serif). Headlines use medium weight, never bold. The hero H1 and select section H2s use the `.editorial` class to invoke the serif.
- **Spacing:** 8-point scale (8 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160). Available as Tailwind utility classes (`section`, `section-lg`, etc.) and via `padding: py-16 md:py-24 lg:py-32` in components.
- **Hairlines only.** Section dividers are 1px in `line` (light) or `white/10` (dark). No graphic flourishes.
- **No icons.** Numerals (`01`, `02`, `03`) carry process steps and stat blocks. Lucide / Heroicons / etc. are intentionally absent.

---

## Support

Questions about extending the site (new pages, new sections, theme switches): start a thread with your developer or send to `hello@fieldsconsulting.com`.

Built for Fields Consulting · Laura Fields LLC · 2026.
