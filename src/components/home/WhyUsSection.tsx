"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Shield, Gem, HardHat, FileCheck, Clock, HeartHandshake, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHY_US_ICONS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Gem, HardHat, FileCheck, Clock, HeartHandshake };

export default function WhyUsSection() {
  const t = useTranslations("whyUs");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <section id="why-us" className="section-padding bg-gray-50 relative overflow-hidden" aria-label="Why Choose Golden Rooster Construction">
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none opacity-60"
        style={{ background: "radial-gradient(circle at bottom left, rgba(27,43,82,0.06) 0%, transparent 65%)" }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          <ScrollReveal direction="left" delay={0}>
            <div className="relative">
              <div className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-primary-lg">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
                  alt="Golden Rooster Construction team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              </div>

              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/25 rounded-sm pointer-events-none" />

              <motion.div
                className="absolute -bottom-5 -left-5 bg-accent text-white rounded-sm p-5 shadow-accent-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-heading font-black text-3xl leading-none">25+</div>
                <div className="text-white/80 text-[10px] font-semibold uppercase tracking-widest mt-1 whitespace-pre-line">
                  {t("yearsLabel")}
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-6 top-12 w-36 h-36 rounded-sm overflow-hidden shadow-2xl border-2 border-white hidden md:block"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80"
                  alt="Metal roofing detail"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          <div>
            <SectionHeader
              tag={t("tag")}
              title={t("title")}
              titleHighlight={t("titleHighlight")}
              subtitle={t("subtitle")}
              align="left"
            />

            <div className="mt-10 space-y-5">
              {WHY_US_ICONS.map((iconKey, i) => {
                const Icon = iconMap[iconKey] ?? Shield;
                const item = items[i];
                if (!item) return null;
                return (
                  <ScrollReveal key={i} delay={i * 0.08} direction="right">
                    <motion.div
                      className="flex gap-4 p-4 rounded-sm border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-card transition-all duration-300 group cursor-default"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <motion.div
                        className="icon-box-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </motion.div>
                      <div>
                        <h4 className="font-heading font-bold text-primary text-base mb-1 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.5} direction="up">
              <div className="mt-8">
                <Link href="/about" className="btn-primary group">
                  {t("learnMore")}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
