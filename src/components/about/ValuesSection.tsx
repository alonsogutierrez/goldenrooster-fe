"use client";

import { motion } from "framer-motion";
import { Medal, Scale, Gem, ShieldCheck, HeartHandshake, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Medal,
  Scale,
  Gem,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
};

const cardGradients = [
  "from-primary-dark to-primary",
  "from-accent-dark to-accent",
  "from-steel-dark to-steel",
  "from-primary to-steel",
  "from-accent to-primary",
  "from-steel to-accent",
];

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="section-padding bg-gray-50 relative overflow-hidden"
      aria-label="Our Values"
    >
      <div className="container-xl">
        <div className="mb-14">
          <SectionHeader
            tag="What Drives Us"
            title="Our Core"
            titleHighlight="Values"
            subtitle="The principles that guide every decision, every project, and every relationship we build."
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((val, i) => {
            const Icon = iconMap[val.icon] ?? Medal;
            return (
              <ScrollReveal key={val.title} delay={i * 0.12} direction="up">
                <motion.div
                  className="relative overflow-hidden rounded-sm group cursor-default"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1.5 w-full bg-gradient-to-r ${cardGradients[i]}`} />

                  <div className="bg-white border border-gray-100 rounded-b-sm p-8 space-y-5 shadow-card group-hover:shadow-card-hover transition-shadow duration-300">
                    {/* Icon */}
                    <motion.div
                      className="w-14 h-14 rounded-sm flex items-center justify-center bg-primary/6 text-primary group-hover:bg-accent group-hover:text-white transition-all duration-400"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                    >
                      <Icon size={24} strokeWidth={1.6} />
                    </motion.div>

                    {/* Number label */}
                    <span className="text-[10px] font-bold text-gray-300 tracking-[0.3em] uppercase">
                      0{i + 1}
                    </span>

                    <h3 className="font-heading font-black text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                      {val.title}
                    </h3>

                    <div className="w-10 h-[2px] bg-accent rounded-full" />

                    <p className="text-gray-500 text-sm leading-relaxed">
                      {val.description}
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
