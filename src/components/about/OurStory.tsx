import { useTranslations } from "next-intl";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionHeader from "@/components/ui/SectionHeader";

export default function OurStory() {
  const t = useTranslations("about.story");
  const milestones = t.raw("milestones") as { year: string; event: string }[];

  return (
    <section id="story" className="section-padding bg-white" aria-label="Our Story">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          <div>
            <SectionHeader
              tag={t("tag")}
              title={t("title")}
              titleHighlight={t("titleHighlight")}
              subtitle=""
              align="left"
            />

            <ScrollReveal direction="up" delay={0.15}>
              <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
                <p>{t("p3")}</p>
              </div>
            </ScrollReveal>
          </div>

          <div className="space-y-10">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="space-y-3">
                <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-primary-lg bg-gray-900">
                  <Image
                    src="/WhatsApp Image 2026-03-13 at 12.28.25 PM.jpeg"
                    alt="Golden Rooster Construction — equipo en obra"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent pointer-events-none" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-md bg-gray-900">
                    <Image
                      src="/WhatsApp Image 2026-03-13 at 12.28.26 PM(1).jpeg"
                      alt="Golden Rooster Construction — trabajo de techos"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-md bg-gray-900">
                    <Image
                      src="/WhatsApp Image 2026-03-14 at 2.12.12 PM.jpeg"
                      alt="Golden Rooster Construction — instalación de techos"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-md bg-gray-900">
                    <Image
                      src="/trabajador1.jpeg"
                      alt="Golden Rooster Construction — trabajador en obra"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative rounded-sm overflow-hidden aspect-[4/3] shadow-md bg-gray-900">
                    <Image
                      src="/trabajador2.jpeg"
                      alt="Golden Rooster Construction — trabajador instalando techos"
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <div className="space-y-1 pl-4 border-l-2 border-gray-100">
              {milestones.map((m, i) => (
                <ScrollReveal key={i} direction="right" delay={i * 0.08}>
                  <div className="relative pl-6 pb-5 last:pb-0 group">
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
