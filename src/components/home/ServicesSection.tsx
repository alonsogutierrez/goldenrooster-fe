"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Hammer, HardHat, Building2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Hammer, HardHat };
const cardColors = ["from-primary-dark to-primary", "from-accent-dark to-accent"];

export default function ServicesSection() {
  const t = useTranslations("services");

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden" aria-label="Our Services">
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40"
        style={{ background: "radial-gradient(circle at top right, rgba(27,43,82,0.06) 0%, transparent 65%)" }}
      />

      <div className="container-xl">
        <div className="mb-14">
          <SectionHeader
            tag={t("sectionTag")}
            title={t("sectionTitle")}
            titleHighlight={t("sectionHighlight")}
            subtitle={t("sectionSubtitle")}
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Building2;
            const itemKey = service.id as "wood-framing" | "metal-roofing";
            const title = t(`items.${itemKey}.title`);
            const desc = t(`items.${itemKey}.description1`);
            const features = t.raw(`items.${itemKey}.features`) as string[];

            return (
              <ScrollReveal key={service.id} delay={i * 0.08} direction="up" className="group">
                <div className="card h-full flex flex-col p-0 overflow-hidden border-0 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-350">
                  <div className={`h-1 w-full bg-gradient-to-r ${cardColors[i % cardColors.length]}`} />

                  <div className="flex flex-col gap-4 p-7 flex-1">
                    <motion.div
                      className="icon-box-accent self-start animate-float-sm"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </motion.div>

                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
                      {title}
                    </h3>

                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>

                    <div className="flex flex-wrap gap-1.5">
                      {features.map((feat) => (
                        <span key={feat} className="inline-block px-2.5 py-1 bg-primary/5 text-primary/70 text-[10px] font-semibold uppercase tracking-wider rounded-sm">
                          {feat}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services#${service.id}`}
                      className="flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest mt-auto pt-2 group/link hover:gap-3 transition-all duration-200"
                    >
                      {t("learnMore")}
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3} direction="up">
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline group">
              {t("viewAll")}
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
