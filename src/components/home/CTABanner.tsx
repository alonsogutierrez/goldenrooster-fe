"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITE } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section
      className="relative overflow-hidden bg-primary py-20 lg:py-28"
      aria-label="Call to Action"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(245,130,31,0.12) 0%, transparent 60%)",
        }}
      />

      {/* Diagonal accent edge */}
      <div
        className="absolute top-0 left-0 right-0 h-14 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Floating circles */}
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-accent/10 pointer-events-none"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[10%] top-1/2 -translate-y-1/2 w-44 h-44 rounded-full border border-accent/20 pointer-events-none"
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      <div className="container-xl relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Tag */}
          <ScrollReveal direction="up" delay={0}>
            <span className="inline-flex items-center gap-3 text-accent font-semibold text-xs tracking-[0.28em] uppercase mb-5">
              <span className="block w-8 h-[2px] bg-accent rounded-full" />
              START TODAY
              <span className="block w-8 h-[2px] bg-accent rounded-full" />
            </span>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal direction="up" delay={0.1}>
            <h2
              className="font-heading font-black text-white mb-5 leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Ready to Transform Your
              <br />
              <span className="text-accent">Roof?</span>
            </h2>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Get your free, no-obligation estimate from our expert team. We&apos;ll assess
              your project and deliver a detailed proposal within 48 hours.
            </p>
          </ScrollReveal>

          {/* CTAs */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary group text-center">
                Request Free Estimate
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <a
                href={SITE.phoneHref}
                className="btn-secondary group text-center"
              >
                <Phone size={14} className="group-hover:animate-pulse-gentle" />
                {SITE.phone}
              </a>
            </div>
          </ScrollReveal>

          {/* Guarantee note */}
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-white/30 text-xs mt-8 tracking-wide">
              No commitment required · Response within 48 hours · {SITE.license}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
