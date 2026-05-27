"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Play, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function WatchOurWorkBanner() {
  const t = useTranslations("services");

  return (
    <div className="container-xl">
      <ScrollReveal delay={0.25} direction="up">
        <div className="mx-auto max-w-3xl rounded-sm bg-primary px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-primary-lg">
          <div className="text-center sm:text-left">
            <p className="font-heading font-bold text-white text-xl leading-snug">{t("watchOurWork")}</p>
            <p className="text-white/70 text-sm mt-1">{t("watchOurWorkSub")}</p>
          </div>
          <Link
            href="/services#videos"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-accent hover:bg-accent/90 text-white font-bold text-sm uppercase tracking-widest px-7 py-3.5 rounded-sm transition-all duration-200 hover:shadow-accent group"
          >
            <Play size={15} className="fill-white group-hover:scale-110 transition-transform duration-200" />
            {t("watchOurWork")}
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.35} direction="up">
        <div className="mt-8 text-center">
          <Link href="/services" className="btn-outline group">
            {t("viewAll")}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </ScrollReveal>
    </div>
  );
}
