# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build (static export → /out)
npm run lint     # ESLint
```

## Architecture

**Next.js 14 App Router, statically exported** (`output: 'export'` in `next.config.mjs`). This means no SSR — no server-only Next.js features. All pages are pre-rendered to static HTML.

**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · Resend (email, not yet wired)

### Key files

- `src/lib/constants.ts` — single source of truth for all site content: `SITE`, `NAV_LINKS`, `SERVICES`, `STATS`, `TESTIMONIALS`, `TEAM`, `VALUES`, `PROJECTS`, `FOOTER_LINKS`. Edit here first before touching components.
- `src/app/layout.tsx` — global metadata, JSON-LD structured data, Open Graph. Uses `https://www.goldenroostersroofing.com` as canonical base.
- `src/app/api/contact/route.ts` — contact form handler; Resend integration is stubbed (TODO).

### Component layers

```
src/components/
  layout/   Navbar, Footer          ← site-wide shell
  ui/       AnimatedCounter, ScrollReveal, SectionHeader  ← reusable primitives
  home/     HeroSection + page-specific sections
  about/    about-page sections
  contact/  contact-page sections
```

Pages live in `src/app/[page]/page.tsx` and import from the matching `src/components/[page]/` folder.

### Styling conventions

- Colors: `primary` (navy #1B2B52), `accent` (orange #F5821F), `steel`, `silver` — all defined in `tailwind.config.ts`
- Fonts: `font-heading` (Montserrat), `font-body` (Inter)
- Utility: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)

## i18n

The site supports **English and Spanish** via `next-intl` v4.

- Translation files: `messages/en.json` and `messages/es.json`
- **Always update BOTH files simultaneously** whenever you add or edit any user-facing string. Never leave one language behind.
- Locale routing: `/en/...` and `/es/...` via `src/app/[locale]/` segment.
- Language switcher (EN/ES toggle) lives in `Navbar.tsx`.
- `src/i18n/routing.ts` — locale config (`['en','es']`, default `'en'`).
- `src/i18n/request.ts` — next-intl server config.
- `src/i18n/navigation.ts` — exports locale-aware `Link`, `useRouter`, `usePathname`. Always import `Link` from here, not from `next/link`, so locale prefix is handled automatically.
- Server components use `getTranslations()` from `next-intl/server`; client components use `useTranslations()` hook.
- `constants.ts` holds only structural/non-translatable data (IDs, icons, colors, hrefs, numbers). All user-facing strings live in the messages files.

## Static export constraints

- No `getServerSideProps`, no server actions that rely on runtime, no `cookies()` / `headers()` at request time.
- Images must use `unoptimized: true` (already set). Use `fill` + `object-contain/cover` pattern for responsive images.
- The contact API route (`/api/contact`) works in dev but won't be available in the static export — a serverless host (Vercel, Netlify Functions) is required for form submission.
