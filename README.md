# Sheet Metal — Frontend

Professional Next.js 14 website for Sheet Metal Services.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — custom design system (navy + orange + steel)
- **Framer Motion** — smooth scroll reveals, floating icons, counters
- **Lucide React** — icon library
- **Google Fonts** — Montserrat (headings) + Inter (body)

---

## Quick Start

```bash
cd sheetmetal-fe
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Stats, Services, Projects, Why Us, Testimonials, CTA |
| `/services` | All 6 services in detail + process steps |
| `/about` | Company story, timeline, values, team |
| `/contact` | Contact form + info + map placeholder |

---

## What to Replace

### 1. Logo (Priority #1)
Replace these SVG files with your official logo:
- `public/logo.svg` — color version (used on white/light backgrounds)
- `public/logo-white.svg` — white version (used on dark backgrounds)

### 2. Company Information
Edit `src/lib/constants.ts` to update:
- Phone, email, address
- Social media links
- Business hours
- License number
- Team names, titles, bios
- Testimonials

### 3. Images
Search for `images.unsplash.com` in the codebase to find all placeholder images.
Replace each URL with your actual project/team photos.

Key image locations:
- `src/components/home/HeroSection.tsx` — hero background (currently CSS gradient)
- `src/components/home/WhyUsSection.tsx` — "why us" section image
- `src/components/home/ProjectsSection.tsx` — project gallery (6 images)
- `src/components/about/OurStory.tsx` — story section image
- `src/components/about/TeamSection.tsx` — 4 team member photos
- `src/lib/constants.ts` — all PROJECTS and TEAM image URLs

### 4. Contact Form
In `src/components/contact/ContactForm.tsx`, replace the fake `await` with a real API call:
- [Resend](https://resend.com) — recommended for email
- [Formspree](https://formspree.io) — no-backend option
- Custom Next.js API route → your CRM/email service

### 5. Site URL
In `src/app/layout.tsx`, update `metadataBase`:
```ts
metadataBase: new URL("https://www.yourrealdomain.com"),
```

### 6. Map
In `src/app/contact/page.tsx`, replace the map placeholder div with a real embed:
```html
<!-- Google Maps iFrame -->
<iframe src="https://www.google.com/maps/embed?pb=..." />
```

### 7. Google Verification
In `src/app/layout.tsx`, update:
```ts
verification: { google: "your-actual-verification-code" }
```

### 8. OG Image
Add `/public/og-image.jpg` (1200×630px) for social media previews.

---

## Design System

### Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#1B2B52` | Dark navy — headings, dark sections |
| `accent` | `#F5821F` | Orange — CTAs, highlights, accents |
| `steel` | `#4A7B9D` | Steel blue — subtle accents |

### Animations
Icons have subtle `float` animations (3–5s ease-in-out loops).
Sections reveal on scroll via Framer Motion `useInView`.
Stat counters animate with easeOutQuart on scroll.

### CSS Custom Classes
```
.btn-primary       → orange filled button
.btn-secondary     → white outline button (for dark backgrounds)
.btn-outline       → primary outline button (for light backgrounds)
.container-xl      → max-w-7xl centered container
.section-padding   → py-20 lg:py-28
.section-tag       → small labeled prefix above headings
.input-field       → styled form input
.card              → white card with hover shadow
```

---

## Build for Production

```bash
npm run build
npm start
```

Or deploy to [Vercel](https://vercel.com) (recommended for Next.js):
```bash
npx vercel
```

---

## SEO Features

- Per-page `metadata` exports (title, description, OG tags)
- JSON-LD structured data (LocalBusiness schema) in `layout.tsx`
- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<article>`, `aria-label`)
- `alt` text on all images
- Open Graph + Twitter Card meta tags
- Canonical URL support
- `robots: { index: true, follow: true }`

---

Built with precision. Just like the panels.
