import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container-xl py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* ── Brand column ── */}
          <div className="lg:col-span-1 space-y-5">
            <Link href="/" aria-label="Golden Roosters Roofing – Home">
              <div className="relative h-[90px] w-[95px]">
                <Image
                  src="/logo-rooster.png"
                  alt="Golden Roosters Roofing logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              {t("description")}
            </p>

            {/* License badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-sm text-xs text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {t("licenseLabel")}
            </div>
          </div>

          {/* ── Company links ── */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              {t("company")}
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {t(`links.${l.key}` as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services links ── */}
          <div>
            <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-white/40 mb-5">
              {t("services")}
            </h3>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                  >
                    {t(`links.${l.key}` as any)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact + Social ── */}
          <div className="space-y-5">
            <div className="space-y-3">
              <a href={SITE.phoneHref} className="flex items-center gap-2.5 text-white/60 hover:text-accent text-sm transition-colors duration-200 group">
                <Phone size={14} className="text-accent/60 group-hover:text-accent flex-shrink-0" />
                {SITE.phone}
              </a>
              <a href={SITE.phoneEngineerHref} className="flex items-center gap-2.5 text-white/60 hover:text-accent text-sm transition-colors duration-200 group">
                <Phone size={14} className="text-accent/60 group-hover:text-accent flex-shrink-0" />
                {SITE.phoneEngineer}
              </a>
              <a href={SITE.emailHref} className="flex items-center gap-2.5 text-white/60 hover:text-accent text-sm transition-colors duration-200 group">
                <Mail size={14} className="text-accent/60 group-hover:text-accent flex-shrink-0" />
                {SITE.email}
              </a>
              <a href={SITE.emailAltHref} className="flex items-center gap-2.5 text-white/60 hover:text-accent text-sm transition-colors duration-200 group">
                <Mail size={14} className="text-accent/60 group-hover:text-accent flex-shrink-0" />
                {SITE.emailAlt}
              </a>
              <div className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin size={14} className="text-accent/60 flex-shrink-0 mt-0.5" />
                {SITE.address.full}
              </div>
            </div>

            <div>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest mb-3">
                {t("followUs")}
              </p>
              <div className="flex gap-3">
                {[
                  { Icon: Facebook, href: SITE.social.facebook, label: "Facebook" },
                  { Icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
                  { Icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
                  { Icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/8 text-white/50 hover:bg-accent hover:text-white transition-all duration-200"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/8">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs">
            {t("copyright", { year })}
          </p>
          <p className="text-white/25 text-xs">{SITE.license}</p>
        </div>
      </div>
    </footer>
  );
}
