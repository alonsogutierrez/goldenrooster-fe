import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Hammer, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Golden Rooster Construction offers professional wood framing and metal roofing repair & remodeling services for residential and commercial projects.",
  openGraph: {
    title: "Our Services | Golden Rooster Construction",
    description:
      "Wood framing and metal roofing — quality work, honest pricing, results you can count on.",
  },
};

const iconMap: Record<string, React.ElementType> = { Hammer, HardHat };

const serviceImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
];

const PROCESS_STEPS = [
  { n: "01", title: "Free Consultation", desc: "We assess your project needs and site conditions at no cost or obligation." },
  { n: "02", title: "Detailed Proposal", desc: "Receive a comprehensive written proposal with transparent, itemized pricing within 48 hours." },
  { n: "03", title: "Material & Crew Scheduling", desc: "We coordinate materials procurement and assign the right crew for your project scope." },
  { n: "04", title: "Expert Construction", desc: "Our skilled team executes every phase with precision, safety, and strict code compliance." },
  { n: "05", title: "Quality Inspection", desc: "A thorough review ensures every detail meets our high standards before we consider the job done." },
];

export default function ServicesPage() {
  return (
    <>
      <AboutHero
        title="Wood Framing & Metal Roofing Services"
        subtitle="Professional construction and roofing solutions for residential and commercial projects — quality work, honest pricing, results you can count on."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* ── Services Detail ── */}
      <section className="section-padding bg-white" aria-label="Service details">
        <div className="container-xl space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Hammer;
            const isEven = i % 2 === 0;
            return (
              <ScrollReveal key={service.id} direction="up" delay={0.05}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative rounded-sm overflow-hidden aspect-video shadow-primary-lg group">
                    <Image
                      src={serviceImages[i]}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-sm bg-accent flex items-center justify-center text-white shadow-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-5">
                    <span className="section-tag">{`Service 0${i + 1}`}</span>
                    <h2 className="font-heading font-black text-primary text-3xl lg:text-4xl">
                      {service.title}
                    </h2>
                    <div className="accent-line" />
                    <div className="space-y-3">
                      {service.description.split("\n\n").map((para, pi) => (
                        <p key={pi} className="text-gray-500 leading-relaxed">{para}</p>
                      ))}
                    </div>

                    <ul className="space-y-2.5">
                      {service.features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-gray-600 text-sm">
                          <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="btn-primary group mt-2 inline-flex">
                      Request a Quote
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <StatsSection />

      {/* ── Process ── */}
      <section className="section-padding bg-gray-50" aria-label="Our process">
        <div className="container-xl">
          <div className="mb-14">
            <SectionHeader
              tag="How We Work"
              title="Our Proven"
              titleHighlight="Process"
              subtitle="A transparent, client-first approach designed to deliver exceptional results on every project — on time and within budget."
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.n} delay={i * 0.08} direction="up">
                <div className="card p-6 hover:border-accent/25 border border-transparent transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <span className="font-heading font-black text-3xl text-accent/20 leading-none group-hover:text-accent/40 transition-colors duration-300">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="font-heading font-bold text-primary text-base mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
