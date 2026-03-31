"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield, Gem, HardHat, FileCheck, Clock, HeartHandshake, ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { WHY_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Shield, Gem, HardHat, FileCheck, Clock, HeartHandshake,
};

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      className="section-padding bg-gray-50 relative overflow-hidden"
      aria-label="Why Choose Golden Rooster Construction"
    >
      {/* Background decoration */}
      <div
        className="absolute bottom-0 left-0 w-72 h-72 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle at bottom left, rgba(27,43,82,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: Image column ── */}
          <ScrollReveal direction="left" delay={0}>
            <div className="relative">
              {/* Main image */}
              <div className="relative rounded-sm overflow-hidden aspect-[4/5] shadow-primary-lg">
                <Image
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80"
                  alt="Sheet Metal professional team at work on a construction site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              </div>

              {/* Accent border frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-accent/25 rounded-sm pointer-events-none" />

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-accent text-white rounded-sm p-5 shadow-accent-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="font-heading font-black text-3xl leading-none">25+</div>
                <div className="text-white/80 text-[10px] font-semibold uppercase tracking-widest mt-1">
                  Years of<br />Excellence
                </div>
              </motion.div>

              {/* Small secondary image */}
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

          {/* ── Right: Features list ── */}
          <div>
            <SectionHeader
              tag="Why Choose Us"
              title="Built on Trust,"
              titleHighlight="Proven by Results"
              subtitle="Whether we're framing the walls of your next project or restoring the roof over your head, Golden Rooster brings the same commitment: quality work, honest pricing, and results you can count on."
              align="left"
            />

            <div className="mt-10 space-y-5">
              {WHY_US.map((item, i) => {
                const Icon = iconMap[item.icon] ?? Shield;
                return (
                  <ScrollReveal key={item.title} delay={i * 0.08} direction="right">
                    <motion.div
                      className="flex gap-4 p-4 rounded-sm border border-transparent hover:border-accent/20 hover:bg-white hover:shadow-card transition-all duration-300 group cursor-default"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <motion.div
                        className="icon-box-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                        animate={{ y: [0, -3, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.4,
                        }}
                      >
                        <Icon size={18} strokeWidth={1.8} />
                      </motion.div>
                      <div>
                        <h4 className="font-heading font-bold text-primary text-base mb-1 group-hover:text-accent transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </ScrollReveal>
                );
              })}
            </div>

            <ScrollReveal delay={0.5} direction="up">
              <div className="mt-8">
                <Link href="/about" className="btn-primary group">
                  Learn More About Us
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
