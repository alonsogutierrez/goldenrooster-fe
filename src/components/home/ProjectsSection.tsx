"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/lib/constants";

const FILTERS = ["All", "Commercial", "Residential", "Industrial"] as const;
type Filter = (typeof FILTERS)[number];

export default function ProjectsSection() {
  const [active, setActive] = useState<Filter>("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id="projects"
      className="section-padding bg-primary-dark overflow-hidden"
      aria-label="Recent Projects"
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="container-xl relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeader
            tag="Our Work"
            title="Recent"
            titleHighlight="Projects"
            subtitle="A selection of our finest commercial, industrial, and residential sheet metal installations."
            align="left"
            light
          />

          <Link href="/contact" className="btn-primary flex-shrink-0 self-start lg:self-auto group">
            Start Your Project
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* Filter tabs */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="flex flex-wrap gap-2 mb-10"
            role="tablist"
            aria-label="Project category filter"
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                role="tab"
                aria-selected={active === filter}
                onClick={() => setActive(filter)}
                className={`
                  px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest
                  transition-all duration-250 border
                  ${
                    active === filter
                      ? "bg-accent text-white border-accent shadow-accent"
                      : "bg-transparent text-white/50 border-white/15 hover:border-accent/50 hover:text-white"
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
              >
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Gradient overlay — always visible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-4 p-6">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                    {project.category}
                  </span>
                  <h3 className="font-heading font-black text-xl text-white text-center leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-white/65 text-xs text-center leading-relaxed max-w-[180px]">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider">
                    <ExternalLink size={12} />
                    View Details
                  </span>
                </div>

                {/* Bottom info — always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-bold text-sm leading-snug">
                        {project.title}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-accent/80 text-white text-[9px] font-bold uppercase tracking-wider rounded-sm">
                        {project.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-white/50 text-xs">
                      <MapPin size={10} />
                      {project.location.split(",")[0]}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View all CTA */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/55 hover:text-accent text-sm font-medium transition-colors duration-200 group"
            >
              Have a project in mind?{" "}
              <span className="text-accent font-semibold group-hover:underline">
                Let&apos;s talk
              </span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200 text-accent" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
