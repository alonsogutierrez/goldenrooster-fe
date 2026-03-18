import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

const MILESTONES = [
  { year: "1998", event: "Founded in Houston, TX with a 3-person team and a commitment to quality." },
  { year: "2005", event: "Expanded into commercial roofing, landing our first 50,000 sq ft project." },
  { year: "2012", event: "Opened a state-of-the-art fabrication facility serving the Gulf Coast region." },
  { year: "2020", event: "Reached 2,000+ completed projects and 50+ full-time skilled craftsmen." },
  { year: "Today", event: "Industry leaders in precision sheet metal across Texas and beyond." },
];

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-white" aria-label="Our Story">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* ── Left: Text content ── */}
          <div>
            <SectionHeader
              tag="Our Story"
              title="25 Years of"
              titleHighlight="Precision & Pride"
              subtitle=""
              align="left"
            />

            <ScrollReveal direction="up" delay={0.15}>
              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
                <p>
                  Sheet Metal was founded in 1998 by Robert A. Johnson, a third-generation metal craftsman
                  with an unwavering belief that quality and integrity should never be compromised.
                  Starting with just a pickup truck and a passion for precision, Robert built the company
                  panel by panel, project by project.
                </p>
                <p>
                  Today, we&apos;re proud to be one of the most trusted names in sheet metal roofing
                  and fabrication across the Southwest. Our team of 50+ certified craftsmen brings
                  the same dedication to every single job — whether it&apos;s a custom residential
                  installation or a 200,000 sq ft commercial complex.
                </p>
                <p>
                  What sets us apart isn&apos;t just our technical expertise — it&apos;s the culture
                  of accountability and pride we&apos;ve cultivated over 25 years. When you work with
                  Sheet Metal, you&apos;re not hiring a contractor. You&apos;re gaining a long-term partner
                  invested in the success of your project.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Timeline + image ── */}
          <div className="space-y-10">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="relative rounded-sm overflow-hidden aspect-video shadow-primary-lg">
                <Image
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80"
                  alt="Sheet Metal construction team on a large commercial project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <div className="space-y-1 pl-4 border-l-2 border-gray-100">
              {MILESTONES.map((m, i) => (
                <ScrollReveal key={m.year} direction="right" delay={i * 0.08}>
                  <div className="relative pl-6 pb-5 last:pb-0 group">
                    {/* Dot */}
                    <span className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full border-2 border-accent bg-white group-hover:bg-accent transition-colors duration-300" />
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-heading font-black text-accent text-sm">{m.year}</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
