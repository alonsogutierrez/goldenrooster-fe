"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a === 0 ? TESTIMONIALS.length - 1 : a - 1));
  const next = () => setActive((a) => (a === TESTIMONIALS.length - 1 ? 0 : a + 1));

  return (
    <section
      id="testimonials"
      className="section-padding bg-white relative overflow-hidden"
      aria-label="Client Testimonials"
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 left-0 text-[14rem] font-black text-gray-50 leading-none select-none pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ fontFamily: "var(--font-montserrat)" }}
      >
        REVIEWS
      </div>

      <div className="container-xl relative z-10">
        <div className="mb-14 text-center">
          <SectionHeader
            tag="What Clients Say"
            title="Trusted by"
            titleHighlight="Industry Leaders"
            subtitle="Don't take our word for it. Here's what some of our most valued clients have to say."
            align="center"
          />
        </div>

        {/* ── Desktop: 3-card grid ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.id} delay={i * 0.12} direction="up">
              <div className="card p-7 flex flex-col gap-5 h-full hover:border-accent/30 hover:border border-transparent border transition-all duration-300 group">
                {/* Quote icon */}
                <Quote
                  size={28}
                  className="text-accent/25 group-hover:text-accent/40 transition-colors duration-300"
                  strokeWidth={1.5}
                />

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="text-accent fill-accent"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-gray-100" />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-accent/20">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {t.title} — {t.company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ── Mobile: carousel ── */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-sm">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3 }}
                className="card p-7 flex flex-col gap-5"
              >
                <Quote size={28} className="text-accent/25" strokeWidth={1.5} />
                <div className="flex gap-0.5">
                  {Array.from({ length: TESTIMONIALS[active].rating }).map((_, j) => (
                    <Star key={j} size={13} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  &ldquo;{TESTIMONIALS[active].text}&rdquo;
                </p>
                <div className="h-px bg-gray-100" />
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-accent/20">
                    <Image
                      src={TESTIMONIALS[active].avatar}
                      alt={TESTIMONIALS[active].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-primary text-sm">
                      {TESTIMONIALS[active].name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {TESTIMONIALS[active].title} — {TESTIMONIALS[active].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 text-gray-500 hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex gap-1.5">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-accent" : "w-1.5 bg-gray-200"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 flex items-center justify-center rounded-sm border border-gray-200 text-gray-500 hover:border-accent hover:text-accent transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
