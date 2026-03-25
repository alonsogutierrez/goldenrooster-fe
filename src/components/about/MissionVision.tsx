"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { MISSION, VISION } from "@/lib/constants";

const cards = [
  {
    icon: Target,
    label: "Our Mission",
    text: MISSION,
    gradient: "from-primary-dark to-primary",
    iconBg: "bg-primary/8 text-primary group-hover:bg-primary group-hover:text-white",
  },
  {
    icon: Eye,
    label: "Our Vision",
    text: VISION,
    gradient: "from-accent-dark to-accent",
    iconBg: "bg-accent/8 text-accent group-hover:bg-accent group-hover:text-white",
  },
];

export default function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="section-padding bg-white"
      aria-label="Mission and Vision"
    >
      <div className="container-xl">
        <div className="mb-14">
          <SectionHeader
            tag="Purpose & Direction"
            title="Mission &"
            titleHighlight="Vision"
            subtitle="The foundation that guides every project we take on and every decision we make as a company."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <ScrollReveal key={card.label} direction="up" delay={i * 0.15}>
                <motion.div
                  className="relative overflow-hidden rounded-sm group cursor-default h-full"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${card.gradient}`} />

                  <div className="bg-white border border-gray-100 rounded-b-sm p-8 space-y-5 shadow-card group-hover:shadow-card-hover transition-shadow duration-300 h-full">
                    {/* Icon */}
                    <motion.div
                      className={`w-14 h-14 rounded-sm flex items-center justify-center transition-all duration-400 ${card.iconBg}`}
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                    >
                      <Icon size={24} strokeWidth={1.6} />
                    </motion.div>

                    <h3 className="font-heading font-black text-2xl text-primary">
                      {card.label}
                    </h3>

                    <div className="w-10 h-[2px] bg-accent rounded-full" />

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
