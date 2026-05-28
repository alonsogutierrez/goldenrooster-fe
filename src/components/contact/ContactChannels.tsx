"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactChannels() {
  const t = useTranslations("contact");

  const whatsappUrl = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(t("whatsapp.message"))}`;

  const emailCards = [
    { address: SITE.email, href: SITE.emailHref, sub: t("email.subPrimary") },
    { address: SITE.emailAlt, href: SITE.emailAltHref, sub: t("email.subAlt") },
  ];

  return (
    <div className="space-y-4">
      {/* WhatsApp — primary CTA */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="group flex items-center gap-5 p-6 bg-white rounded-sm border border-gray-100 shadow-card hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all duration-200 cursor-pointer"
      >
        <div className="w-12 h-12 rounded-sm bg-[#25D366] flex items-center justify-center flex-shrink-0">
          <MessageCircle size={22} className="text-white" strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-heading font-bold text-primary text-lg leading-tight">{t("whatsapp.title")}</p>
          <p className="text-gray-400 text-sm mt-0.5">{t("whatsapp.sub")}</p>
        </div>
        <span className="text-[#25D366] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
          {t("openAction")} →
        </span>
      </motion.a>

      {/* Email cards — secondary channels */}
      {emailCards.map(({ address, href, sub }, i) => (
        <motion.a
          key={address}
          href={href}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
          className="group flex items-center gap-5 p-6 bg-white rounded-sm border border-gray-100 shadow-card hover:border-accent hover:bg-accent/5 transition-all duration-200 cursor-pointer"
        >
          <div className="w-12 h-12 rounded-sm bg-accent flex items-center justify-center flex-shrink-0">
            <Mail size={22} className="text-white" strokeWidth={1.8} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-heading font-bold text-primary text-lg leading-tight">{t("email.title")}</p>
            <p className="text-gray-400 text-sm mt-0.5 truncate">{address}</p>
            <p className="text-gray-300 text-xs mt-0.5">{sub}</p>
          </div>
          <span className="text-accent text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
            {t("openAction")} →
          </span>
        </motion.a>
      ))}
    </div>
  );
}
