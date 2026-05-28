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

          {/* ── Collage column ── */}
          <ScrollReveal direction="left" delay={0}>
            <div className="relative select-none">

              {/* Orange accent frame behind */}
              <div className="absolute -bottom-3 -right-3 w-[calc(100%-2rem)] h-[calc(100%-2rem)] border-2 border-accent/30 rounded-sm pointer-events-none z-0" />

              {/* Main grid */}
              <div
                className="relative z-10 grid gap-2 rounded-sm overflow-hidden shadow-primary-lg"
                style={{ gridTemplateColumns: "3fr 2fr", gridTemplateRows: "11rem 11rem" }}
              >
                {/* Large: Denver commercial project — spans both rows */}
                <div className="row-span-2 relative overflow-hidden group">
                  <Image
                    src="/project-denver.jpeg"
                    alt="Commercial construction project completed by Golden Rooster in Denver, CO"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-2">
                    <span className="inline-block bg-accent text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-sm">
                      Denver, CO
                    </span>
                  </div>
                </div>

                {/* Top-right: crew on rooftop */}
                <div className="relative overflow-hidden group">
                  <Image
                    src="/crew-rooftop.jpeg"
                    alt="Golden Rooster crew working on a commercial rooftop project"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent" />
                </div>

                {/* Bottom-right: team photo */}
                <div className="relative overflow-hidden group">
                  <Image
                    src="/team-photo.jpeg"
                    alt="Golden Rooster Construction team — licensed & insured professionals"
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
              </div>

              {/* Floating badge: 25+ years */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-accent text-white rounded-sm p-4 shadow-accent-lg z-20"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-heading font-black text-3xl leading-none">25+</div>
                <div className="text-white/80 text-[9px] font-semibold uppercase tracking-widest mt-1 whitespace-pre-line">
                  {t("yearsLabel")}
                </div>
              </motion.div>

              {/* Floating badge: 2500+ projects */}
              <motion.div
                className="absolute -top-4 -right-4 bg-primary text-white rounded-sm px-4 py-3 shadow-primary-lg z-20 hidden md:block"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              >
                <div className="font-heading font-black text-2xl leading-none text-accent">2500+</div>
                <div className="text-white/70 text-[9px] font-semibold uppercase tracking-widest mt-1">
                  Projects Done
                </div>
              </motion.div>

              {/* Worker portrait floating thumbnail */}
              <motion.div
                className="absolute bottom-10 -right-6 w-20 h-20 rounded-sm overflow-hidden shadow-2xl border-2 border-white z-20 hidden md:block"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <Image
                  src="/trabajador1.jpeg"
                  alt="Golden Rooster certified construction worker"
                  fill
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* ── Text column ── */}
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
