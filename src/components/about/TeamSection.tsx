"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TEAM } from "@/lib/constants";

export default function TeamSection() {
  return (
    <section
      id="team"
      className="section-padding bg-primary-dark relative overflow-hidden"
      aria-label="Our Team"
    >
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      <div className="container-xl relative z-10">
        <div className="mb-14">
          <SectionHeader
            tag="The People Behind the Panels"
            title="Meet Our"
            titleHighlight="Expert Team"
            subtitle="Experienced professionals passionate about precision, quality, and delivering exceptional results for every client."
            align="center"
            light
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1} direction="up">
              <motion.div
                className="group relative overflow-hidden rounded-sm cursor-default"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                {/* Photo */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary/30 to-transparent" />

                  {/* LinkedIn hover icon */}
                  <div className="absolute top-3 right-3 w-9 h-9 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-accent hover:border-accent cursor-pointer">
                    <Linkedin size={14} />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-8 h-[2px] bg-accent mb-3 group-hover:w-12 transition-all duration-400" />
                  <h3 className="font-heading font-bold text-white text-base leading-snug">
                    {member.name}
                  </h3>
                  <p className="text-accent text-xs font-semibold uppercase tracking-wider mt-0.5">
                    {member.title}
                  </p>
                  <p className="text-white/50 text-xs leading-relaxed mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
