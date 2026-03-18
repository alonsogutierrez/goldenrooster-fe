import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Building2, Layers, Droplets, Sun, Wrench, Briefcase, ArrowRight, CheckCircle2,
} from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Sheet Metal's full range of services: metal roofing systems, custom fabrication, gutter systems, skylights, repairs, and large-scale commercial projects.",
  openGraph: {
    title: "Our Services | Sheet Metal",
    description:
      "Full-spectrum sheet metal services — roofing, fabrication, gutters, skylights, and more.",
  },
};

const iconMap: Record<string, React.ElementType> = {
  Building2, Layers, Droplets, Sun, Wrench, Briefcase,
};

const serviceImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=900&q=80",
];

const PROCESS_STEPS = [
  { n: "01", title: "Free Consultation", desc: "We assess your needs and project scope at no cost or obligation." },
  { n: "02", title: "Detailed Proposal", desc: "Receive a comprehensive written proposal with transparent pricing within 48 hours." },
  { n: "03", title: "Precision Fabrication", desc: "Custom components fabricated to exact specifications in our facility." },
  { n: "04", title: "Expert Installation", desc: "Certified crew installs with meticulous care and strict safety protocols." },
  { n: "05", title: "Quality Inspection", desc: "Multi-point quality review ensures every detail meets our high standards." },
  { n: "06", title: "Ongoing Support", desc: "Warranty-backed follow-up care and maintenance programs available." },
];

export default function ServicesPage() {
  return (
    <>
      <AboutHero
        title="Full-Spectrum Sheet Metal Services"
        subtitle="From precision custom fabrication to large-scale commercial roofing — one trusted partner for every metal need."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

      {/* ── Services Detail ── */}
      <section className="section-padding bg-white" aria-label="Service details">
        <div className="container-xl space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Building2;
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
                    <p className="text-gray-500 leading-relaxed">{service.description}</p>

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
              titleHighlight="6-Step Process"
              subtitle="A transparent, client-first process designed to deliver exceptional results on every project."
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
