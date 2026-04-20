"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Clock, Award } from "lucide-react";
import Image from "next/image";
import { SITE } from "@/lib/constants";

export default function HeroSection() {
  const t = useTranslations("hero");

  const TRUST_BADGES = [
    { icon: ShieldCheck, label: t("badge1") },
    { icon: Award, label: t("badge2") },
    { icon: Clock, label: t("badge3") },
  ];

  const SIDE_STATS = [
    { value: "2,500+", label: t("statProjects") },
    { value: "98%", label: t("statSatisfaction") },
    { value: "25+", label: t("statYears") },
  ];

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-dark"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-banner.jpg"
          alt="Golden Rooster Construction crew working on a metal structure"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Dark overlay — heavier on mobile for text legibility */}
        <div className="absolute inset-0 bg-primary-dark/70 md:bg-primary-dark/60" />
        {/* Bottom gradient to blend into the white wedge */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-primary-dark/80 pointer-events-none" />
      </div>

      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20" />

      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="container-xl relative z-10 pt-28 pb-32">
        <div className="max-w-4xl">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-3 text-accent font-semibold text-xs tracking-[0.28em] uppercase">
              <span className="block w-10 h-[2px] bg-accent rounded-full" />
              {t("badge")}
              <span className="block w-10 h-[2px] bg-accent rounded-full" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading font-black text-white leading-[1.08] mb-3"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("title1")}
            <br />
            <span className="text-accent">{t("titleAccent")}</span>{" "}
            <span className="relative">
              {t("titleLocation")}
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-accent/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="font-heading font-semibold text-white/40 text-sm tracking-[0.18em] uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t("tagline")}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            className="text-white/65 text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {t("subtitle")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact" className="btn-primary group">
              {t("ctaPrimary")}
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/services" className="btn-secondary group">
              {t("ctaSecondary")}
              <ArrowRight size={15} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            {TRUST_BADGES.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                className="flex items-center gap-2.5 text-white/55 text-xs font-medium tracking-wide"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-sm bg-accent/15 text-accent">
                  <Icon size={13} />
                </span>
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Side stat card */}
        <motion.div
          className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {SIDE_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/8 backdrop-blur-sm border border-white/12 rounded-sm px-5 py-4 text-center w-36 hover:bg-white/12 hover:border-accent/30 transition-all duration-300"
            >
              <div className="font-heading font-black text-2xl text-accent leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-white/50 text-[10px] font-medium tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[9px] font-medium tracking-[0.25em] uppercase">{t("scroll")}</span>
        <div className="animate-bounce-arrow">
          <ChevronDown size={18} />
        </div>
      </motion.div>
    </section>
  );
}
