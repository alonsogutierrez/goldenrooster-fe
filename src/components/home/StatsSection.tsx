"use client";

import { useTranslations } from "next-intl";
import { Award, CheckCircle2, Star, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { STATS } from "@/lib/constants";
import ScrollReveal from "@/components/ui/ScrollReveal";

const iconMap: Record<string, React.ElementType> = { Award, CheckCircle2, Star, Users };

export default function StatsSection() {
  const t = useTranslations("stats");
  const items = t.raw("items") as { label: string }[];

  return (
    <section className="relative bg-primary py-16 lg:py-20 overflow-hidden" aria-label="Company statistics">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 100% at 50% 50%, rgba(74,123,157,0.15) 0%, transparent 70%)" }}
      />

      <div
        className="absolute -top-px left-0 right-0 h-10 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="container-xl relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-sm overflow-hidden">
          {STATS.map((stat, i) => {
            const Icon = iconMap[stat.icon] ?? Award;
            return (
              <ScrollReveal key={i} delay={i * 0.1} direction="up">
                <motion.div
                  className="flex flex-col items-center text-center px-6 py-10 bg-primary hover:bg-primary-light transition-colors duration-300 group"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center rounded-sm bg-accent/15 text-accent mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </motion.div>

                  <div className="font-heading font-black text-white mb-2" style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1 }}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2200} />
                  </div>

                  <p className="text-white/50 text-xs font-semibold uppercase tracking-[0.18em]">
                    {items[i]?.label}
                  </p>

                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      <div
        className="absolute -bottom-px left-0 right-0 h-10 bg-white pointer-events-none"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
