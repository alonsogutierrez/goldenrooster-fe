import { Phone, Mail, MapPin, Clock, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Info cards */}
      {[
        {
          icon: Phone,
          title: "Call Us",
          content: SITE.phone,
          href: SITE.phoneHref,
          sub: "Mon–Fri: 7AM–6PM · Sat: 8AM–1PM",
        },
        {
          icon: Mail,
          title: "Email Us",
          content: SITE.email,
          href: SITE.emailHref,
          sub: "We reply within 48 business hours",
        },
        {
          icon: MapPin,
          title: "Visit Us",
          content: SITE.address.full,
          sub: "By appointment preferred",
        },
        {
          icon: Clock,
          title: "Office Hours",
          content: SITE.hours.weekdays,
          sub: SITE.hours.saturday,
        },
      ].map(({ icon: Icon, title, content, href, sub }) => (
        <div
          key={title}
          className="flex gap-4 p-5 bg-white rounded-sm border border-gray-100 shadow-card group hover:border-accent/30 hover:shadow-card-hover transition-all duration-300"
        >
          <div className="icon-box-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
            <Icon size={18} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              {title}
            </p>
            {href ? (
              <a
                href={href}
                className="font-heading font-bold text-primary hover:text-accent text-base transition-colors duration-200 block"
              >
                {content}
              </a>
            ) : (
              <p className="font-heading font-bold text-primary text-sm leading-snug">
                {content}
              </p>
            )}
            {sub && <p className="text-gray-400 text-xs mt-0.5">{sub}</p>}
          </div>
        </div>
      ))}

      {/* License badge */}
      <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-sm border border-primary/10">
        <Shield size={18} className="text-accent flex-shrink-0" />
        <div>
          <p className="text-primary font-bold text-sm">{SITE.license}</p>
          <p className="text-gray-500 text-xs mt-0.5">Fully bonded · OSHA compliant</p>
        </div>
      </div>

      {/* Emergency line */}
      <div className="p-5 bg-accent rounded-sm text-white">
        <p className="font-bold text-sm mb-1">Emergency Service Available</p>
        <p className="text-white/80 text-xs mb-3">
          Roof leak or storm damage? We offer emergency response 24/7.
        </p>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center gap-1.5 text-white font-bold text-xs uppercase tracking-wider hover:gap-3 transition-all duration-200"
        >
          Call Emergency Line
          <ArrowRight size={12} />
        </a>
      </div>

      {/* Quick links */}
      <div className="space-y-2">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Quick Links
        </p>
        {[
          { href: "/services", label: "View Our Services" },
          { href: "/about", label: "Learn About Our Team" },
        ].map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="flex items-center gap-2 text-primary hover:text-accent text-sm font-medium transition-colors duration-200 group"
          >
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-200" />
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
