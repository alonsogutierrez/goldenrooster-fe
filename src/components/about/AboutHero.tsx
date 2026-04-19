import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ChevronRight } from "lucide-react";

type PageKey = "about" | "services" | "contact";

const PAGE_CONFIGS: Record<PageKey, { breadcrumbKey: string; homeKey: string }> = {
  about: { breadcrumbKey: "about.heroTitle", homeKey: "nav.home" },
  services: { breadcrumbKey: "services.heroTitle", homeKey: "nav.home" },
  contact: { breadcrumbKey: "contact.heroTitle", homeKey: "nav.home" },
};

export default function AboutHero({ pageKey }: { pageKey: PageKey }) {
  const tAbout = useTranslations("about");
  const tServices = useTranslations("services");
  const tContact = useTranslations("contact");
  const tNav = useTranslations("nav");

  const config: Record<PageKey, { title: string; subtitle: string; crumbLabel: string }> = {
    about: {
      title: tAbout("heroTitle"),
      subtitle: tAbout("heroSubtitle"),
      crumbLabel: tNav("about"),
    },
    services: {
      title: tServices("heroTitle"),
      subtitle: tServices("heroSubtitle"),
      crumbLabel: tNav("services"),
    },
    contact: {
      title: tContact("heroTitle"),
      subtitle: tContact("heroSubtitle"),
      crumbLabel: tNav("contact"),
    },
  };

  const { title, subtitle, crumbLabel } = config[pageKey];

  return (
    <section className="relative pt-36 pb-20 bg-primary-dark overflow-hidden" aria-label="Page header">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 80% at 30% 50%, rgba(74,123,157,0.12) 0%, transparent 60%)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="container-xl relative z-10">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex items-center gap-1.5 text-xs text-white/40">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-accent transition-colors duration-200">
                {tNav("home")}
              </Link>
              <ChevronRight size={11} className="text-white/25" />
            </li>
            <li>
              <span className="text-white/70">{crumbLabel}</span>
            </li>
          </ol>
        </nav>

        <span className="section-tag mb-4 text-accent">{crumbLabel}</span>

        <h1
          className="font-heading font-black text-white leading-tight mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
        >
          {title}
        </h1>

        <p className="text-white/60 text-lg max-w-2xl leading-relaxed">{subtitle}</p>
      </div>
    </section>
  );
}
