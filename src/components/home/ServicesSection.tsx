"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Building2, Layers, Droplets, Sun, Wrench, Briefcase, ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Building2, Layers, Droplets, Sun, Wrench, Briefcase,
};

const cardColors = [
  "from-primary to-primary-light",
  "from-steel-dark to-steel",
  "from-primary to-steel",
  "from-accent-dark to-accent",
  "from-primary-dark to-primary",
  "from-steel to-primary-light",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="section-padding bg-white relative overflow-hidden"
      aria-label="Our Services"
    >
      {/* ── Background decoration ── */}
      <div
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(circle at top right, rgba(27,43,82,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="container-xl">
        <div className="mb-14">
          <SectionHeader
            tag="What We Do"
            title="Our"
            titleHighlight="Expertise"
            subtitle="From precision metal fabrication to complete roofing systems, we deliver excellence across the full spectrum of sheet metal services."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Building2;
            return (
              <ScrollReveal
                key={service.id}
                delay={i * 0.08}
                direction="up"
                className="group"
              >
                <div className="card h-full flex flex-col p-0 overflow-hidden border-0 rounded-sm shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-350">

                  {/* ── Card top accent bar ── */}
                  <div className={`h-1 w-full bg-gradient-to-r ${cardColors[i % cardColors.length]}`} />

                  {/* ── Body ── */}
                  <div className="flex flex-col gap-4 p-7 flex-1">

                    {/* Icon */}
                    <motion.div
                      className="icon-box-accent self-start animate-float-sm"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-xl text-primary group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-block px-2.5 py-1 bg-primary/5 text-primary/70 text-[10px] font-semibold uppercase tracking-wider rounded-sm"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Link */}
                    <Link
                      href={`/services#${service.id}`}
                      className="flex items-center gap-1.5 text-accent text-xs font-bold uppercase tracking-widest mt-auto pt-2 group/link hover:gap-3 transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* ── CTA ── */}
        <ScrollReveal delay={0.3} direction="up">
          <div className="mt-12 text-center">
            <Link href="/services" className="btn-outline group">
              View All Services
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
