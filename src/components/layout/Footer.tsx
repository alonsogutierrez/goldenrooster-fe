import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Shield,
} from "lucide-react";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white" aria-label="Site footer">
      {/* ── Top accent line ── */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* ── Main footer body ── */}
      <div className="container-xl py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" aria-label="Sheet Metal – Home">
              <div className="relative h-10 w-[184px]">
                <Image
                  src="/logo-white.svg"
                  alt="The Golden Rooster Sheet Metal Roofing"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {SITE.description}
            </p>

            {/* License badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-xs text-white/50">
              <Shield size={11} className="text-accent" />
              {SITE.license}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-1">
              {[
                { href: SITE.social.facebook,  Icon: Facebook,  label: "Facebook" },
                { href: SITE.social.instagram, Icon: Instagram, label: "Instagram" },
                { href: SITE.social.linkedin,  Icon: Linkedin,  label: "LinkedIn" },
                { href: SITE.social.youtube,   Icon: Youtube,   label: "YouTube" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-sm bg-white/8 border border-white/10 text-white/50 hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Company links ── */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-sm tracking-[0.15em] uppercase border-b border-white/10 pb-3">
              Company
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/55 hover:text-accent text-sm transition-all duration-200"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services links ── */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-sm tracking-[0.15em] uppercase border-b border-white/10 pb-3">
              Services
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/55 hover:text-accent text-sm transition-all duration-200"
                  >
                    <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200 text-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact info ── */}
          <div className="space-y-4">
            <h3 className="text-white font-heading font-bold text-sm tracking-[0.15em] uppercase border-b border-white/10 pb-3">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-start gap-3 text-white/60 hover:text-accent text-sm transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-sm bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Phone size={13} />
                  </span>
                  <span className="leading-snug pt-0.5">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-start gap-3 text-white/60 hover:text-accent text-sm transition-colors duration-200 group"
                >
                  <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-sm bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <Mail size={13} />
                  </span>
                  <span className="leading-snug pt-0.5 break-all">{SITE.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <MapPin size={13} />
                </span>
                <span className="leading-relaxed pt-0.5">{SITE.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <Clock size={13} />
                </span>
                <span className="leading-relaxed pt-0.5 space-y-0.5">
                  <span className="block">{SITE.hours.weekdays}</span>
                  <span className="block">{SITE.hours.saturday}</span>
                  <span className="block text-white/35">{SITE.hours.sunday}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs text-center sm:text-left">
            © {currentYear} {SITE.fullName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
