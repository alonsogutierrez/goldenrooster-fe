"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function ContactInfo() {
  const t = useTranslations("contact");

  const infoItems = [
    {
      icon: Phone,
      label: t("info.phoneLabel"),
      value: SITE.phone,
      href: SITE.phoneHref,
      accent: "red" as const,
    },
    {
      icon: Mail,
      label: t("info.emailLabel"),
      value: SITE.email,
      href: SITE.emailHref,
      accent: "red" as const,
    },
    {
      icon: MapPin,
      label: t("info.coverageLabel"),
      value: t("info.coverageValue"),
      href: undefined,
      accent: "gold" as const,
    },
    {
      icon: Clock,
      label: t("info.scheduleLabel"),
      value: t("info.scheduleValue"),
      href: undefined,
      accent: "gold" as const,
    },
  ];

  const accentClasses = {
    red: "bg-red-50 text-red-500",
    gold: "bg-accent/10 text-accent",
  };

  return (
    <div className="space-y-8">
      {/* Structured info list */}
      <div className="space-y-5">
        {infoItems.map(({ icon: Icon, label, value, href, accent }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            className="flex items-start gap-4"
          >
            <div className={`w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0 ${accentClasses[accent]}`}>
              <Icon size={16} strokeWidth={1.8} />
            </div>
            <div>
              <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-0.5">
                {label}
              </p>
              {href ? (
                <a
                  href={href}
                  className="text-primary font-semibold text-sm hover:text-accent transition-colors duration-200"
                >
                  {value}
                </a>
              ) : (
                <p className="text-gray-700 text-sm">{value}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coverage block */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="p-5 rounded-sm border border-gray-200 bg-gray-50"
      >
        <p className="text-xs font-bold text-primary/70 uppercase tracking-widest mb-2">
          {t("coverage.title")}
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          {t.rich("coverage.description", {
            b: (chunks) => (
              <strong className="text-primary font-semibold">{chunks}</strong>
            ),
          })}
        </p>
        <p className="text-gray-500 text-xs mt-2">{t("coverage.note")}</p>
      </motion.div>
    </div>
  );
}
