"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ShieldCheck, Clock, Award } from "lucide-react";
import { SITE } from "@/lib/constants";

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Licensed & Fully Insured" },
  { icon: Award,       label: "25+ Years of Excellence" },
  { icon: Clock,       label: "On-Time Guarantee" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-primary-dark"
      aria-label="Hero"
    >
      {/* ── Background layers ── */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="absolute inset-0 diagonal-lines pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 20% 40%, rgba(74,123,157,0.12) 0%, transparent 60%), " +
            "radial-gradient(ellipse 60% 60% at 80% 60%, rgba(245,130,31,0.08) 0%, transparent 50%)",
        }}
      />

      {/* ── Floating geometric accent shapes ── */}
      <motion.div
        className="absolute top-24 right-[12%] w-28 h-28 border border-accent/15 rounded-sm"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-32 left-[8%] w-16 h-16 border border-white/8 rounded-sm"
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/2 right-[6%] w-6 h-6 bg-accent/20 rounded-sm"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-[18%] w-3 h-3 bg-accent rounded-sm opacity-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* ── Diagonal bottom divider ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      {/* ── Main content ── */}
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
              TRUSTED SINCE 1998
              <span className="block w-10 h-[2px] bg-accent rounded-full" />
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-heading font-black text-white leading-[1.08] mb-6"
            style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            PRECISION IN
            <br />
            <span className="text-accent">EVERY</span>{" "}
            <span className="relative">
              PANEL
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-[3px] bg-accent/50 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-white/65 text-lg lg:text-xl max-w-xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            Industry-leading sheet metal roofing, fabrication, and construction
            services — built to last and engineered to impress.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/contact" className="btn-primary group">
              Get a Free Estimate
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/services" className="btn-secondary group">
              Explore Services
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

        {/* ── Side stat card ── */}
        <motion.div
          className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { value: "2,500+", label: "Projects Done" },
            { value: "98%",    label: "Client Satisfaction" },
            { value: "25+",    label: "Years of Experience" },
          ].map((stat) => (
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

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[9px] font-medium tracking-[0.25em] uppercase">Scroll</span>
        <div className="animate-bounce-arrow">
          <ChevronDown size={18} />
        </div>
      </motion.div>
    </section>
  );
}
