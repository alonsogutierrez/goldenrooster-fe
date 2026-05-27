"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { Hammer, HardHat, Layers, Wrench, Building2, Home, Grid3X3, ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Hammer, HardHat, Layers, Wrench, Building2, Home, Grid3X3 };

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Building2;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const title = t(`items.${service.id}.title` as any);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const desc = t(`items.${service.id}.description1` as any);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const features = t.raw(`items.${service.id}.features` as any) as string[];

            return (
              <ScrollReveal key={service.id} delay={i * 0.08} direction="up" className="group">
                <div className="card h-full flex flex-col p-0 overflow-hidden border-t-[3px] border-t-accent border border-gray-100 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-accent/40 transition-all duration-350">

                  {/* Photo header */}
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                    <motion.div
                      className="absolute bottom-4 left-5 w-11 h-11 rounded-sm bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white animate-float-sm"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </motion.div>
                  </div>

                  <div className="flex flex-col gap-4 p-7 flex-1">
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

        <ScrollReveal delay={0.25} direction="up">
          <div className="mt-14 mx-auto max-w-3xl rounded-sm bg-primary px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-primary-lg">
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
    </section>
  );
}
