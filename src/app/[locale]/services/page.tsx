import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { Hammer, HardHat, ArrowRight, CheckCircle2 } from "lucide-react";
import AboutHero from "@/components/about/AboutHero";
import SectionHeader from "@/components/ui/SectionHeader";
import ScrollReveal from "@/components/ui/ScrollReveal";
import CTABanner from "@/components/home/CTABanner";
import StatsSection from "@/components/home/StatsSection";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Hammer, HardHat };

const serviceImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("services");

  const processSteps = t.raw("process.steps") as { title: string; desc: string }[];

  return (
    <>
      <AboutHero pageKey="services" />

      <section className="section-padding bg-white" aria-label="Service details">
        <div className="container-xl space-y-24">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Hammer;
            const isEven = i % 2 === 0;
            const itemKey = service.id as "wood-framing" | "metal-roofing";
            const title = t(`items.${itemKey}.title`);
            const desc1 = t(`items.${itemKey}.description1`);
            const desc2 = t(`items.${itemKey}.description2`);
            const features = t.raw(`items.${itemKey}.features`) as string[];

            return (
              <ScrollReveal key={service.id} direction="up" delay={0.05}>
                <div
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-sm overflow-hidden aspect-video shadow-primary-lg group">
                    <Image
                      src={serviceImages[i]}
                      alt={title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent" />
                    <div className="absolute top-4 left-4 w-11 h-11 rounded-sm bg-accent flex items-center justify-center text-white shadow-accent">
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                  </div>

                  <div className="space-y-5">
                    <span className="section-tag">{`${t("serviceTag")} 0${i + 1}`}</span>
                    <h2 className="font-heading font-black text-primary text-3xl lg:text-4xl">
                      {title}
                    </h2>
                    <div className="accent-line" />
                    <div className="space-y-3">
                      <p className="text-gray-500 leading-relaxed">{desc1}</p>
                      <p className="text-gray-500 leading-relaxed">{desc2}</p>
                    </div>

                    <ul className="space-y-2.5">
                      {features.map((feat) => (
                        <li key={feat} className="flex items-center gap-2.5 text-gray-600 text-sm">
                          <CheckCircle2 size={15} className="text-accent flex-shrink-0" />
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <Link href="/contact" className="btn-primary group mt-2 inline-flex">
                      {t("requestQuote")}
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

      <section className="section-padding bg-gray-50" aria-label="Our process">
        <div className="container-xl">
          <div className="mb-14">
            <SectionHeader
              tag={t("process.tag")}
              title={t("process.title")}
              titleHighlight={t("process.titleHighlight")}
              subtitle={t("process.subtitle")}
              align="center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.08} direction="up">
                <div className="card p-6 hover:border-accent/25 border border-transparent transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <span className="font-heading font-black text-3xl text-accent/20 leading-none group-hover:text-accent/40 transition-colors duration-300">
                      {String(i + 1).padStart(2, "0")}
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
