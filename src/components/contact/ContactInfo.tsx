import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactInfo() {
  const t = useTranslations("contact.info");

  const infoCards = [
    { icon: Phone, title: t("callTitle"), content: SITE.phone, href: SITE.phoneHref, sub: t("callSub") },
    { icon: Mail, title: t("emailTitle"), content: SITE.email, href: SITE.emailHref, sub: t("emailSub") },
    { icon: MapPin, title: t("visitTitle"), content: SITE.address.full, sub: t("visitSub") },
    { icon: Clock, title: t("hoursTitle"), content: SITE.hours.weekdays, sub: SITE.hours.saturday },
  ];

  return (
    <div className="space-y-6">
      {infoCards.map(({ icon: Icon, title, content, href, sub }) => (
        <div key={title} className="flex gap-4 p-5 bg-white rounded-sm border border-gray-100 shadow-card group hover:border-accent/30 hover:shadow-card-hover transition-all duration-300">
          <div className="icon-box-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <Icon size={18} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{title}</p>
            {href ? (
              <a href={href} className="font-heading font-bold text-primary hover:text-accent text-base transition-colors duration-200 block">{content}</a>
            ) : (
              <p className="font-heading font-bold text-primary text-sm leading-snug">{content}</p>
            )}
            {sub && <p className="text-gray-400 text-xs mt-0.5">{sub}</p>}
          </div>
        </div>
      ))}

      <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-sm border border-primary/10">
        <Shield size={18} className="text-accent flex-shrink-0" />
        <div>
          <p className="text-primary font-bold text-sm">{SITE.license}</p>
          <p className="text-gray-500 text-xs mt-0.5">{t("fullyBonded")}</p>
        </div>
      </div>

      <div className="p-5 bg-accent rounded-sm text-white">
        <p className="font-bold text-sm mb-1">{t("emergency")}</p>
        <p className="text-white/80 text-xs mb-3">{t("emergencyDesc")}</p>
        <a href={SITE.phoneHref} className="inline-flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-wider hover:gap-3 transition-all duration-200">
          {t("callEmergency")}
          <ArrowRight size={12} />
        </a>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t("quickLinks")}</p>
        {[
          { href: "/services" as const, label: t("viewServices") },
          { href: "/about" as const, label: t("learnTeam") },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="flex items-center gap-2 text-primary hover:text-accent text-sm font-medium transition-colors duration-200 group">
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
