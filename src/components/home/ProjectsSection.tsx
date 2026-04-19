"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { PROJECTS } from "@/lib/constants";

const FILTER_KEYS = ["All", "Commercial", "Residential", "Industrial"] as const;
type FilterKey = (typeof FILTER_KEYS)[number];

export default function ProjectsSection() {
  const t = useTranslations("projects");
  const [active, setActive] = useState<FilterKey>("All");

  const projectItems = t.raw("items") as { title: string; description: string }[];
  const filtered = active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding bg-primary-dark overflow-hidden" aria-label="Recent Projects">
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-50" />

      <div className="container-xl relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <SectionHeader
            tag={t("tag")}
            title={t("title")}
            titleHighlight={t("titleHighlight")}
            subtitle={t("subtitle")}
            align="left"
            light
          />

          <Link href="/contact" className="btn-primary flex-shrink-0 self-start lg:self-auto group">
            {t("startProject")}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Project category filter">
            {FILTER_KEYS.map((key) => (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                onClick={() => setActive(key)}
                className={`px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-250 border ${
                  active === key
                    ? "bg-accent text-white border-accent shadow-accent"
                    : "bg-transparent text-white/50 border-white/15 hover:border-accent/50 hover:text-white"
                }`}
              >
                {t(`filters.${key}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              const item = projectItems[project.id - 1] ?? { title: "", description: "" };
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-sm aspect-[4/3] cursor-pointer"
                >
                  <Image
                    src={project.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col items-center justify-center gap-4 p-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-sm">
                      {t(`filters.${project.category as FilterKey}`)}
                    </span>
                    <h3 className="font-heading font-black text-xl text-white text-center leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-white/65 text-xs text-center leading-relaxed max-w-[180px]">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider">
                      <ExternalLink size={12} />
                      {t("viewDetails")}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-sm leading-snug">{item.title}</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-accent/80 text-white text-[9px] font-bold uppercase tracking-wider rounded-sm">
                          {t(`filters.${project.category as FilterKey}`)}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-white/50 text-xs">
                        <MapPin size={10} />
                        {project.location.split(",")[0]}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal direction="up" delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white/55 hover:text-accent text-sm font-medium transition-colors duration-200 group"
            >
              {t("haveProject")}{" "}
              <span className="text-accent font-semibold group-hover:underline">{t("letsTalk")}</span>
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform duration-200 text-accent" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
