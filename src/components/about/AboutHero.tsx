import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface AboutHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function AboutHero({ title, subtitle, breadcrumbs }: AboutHeroProps) {
  return (
    <section
      className="relative pt-36 pb-20 bg-primary-dark overflow-hidden"
      aria-label="Page header"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 30% 50%, rgba(74,123,157,0.12) 0%, transparent 60%)",
        }}
      />
      {/* Bottom angle */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white pointer-events-none"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="container-xl relative z-10">
        {/* Breadcrumb */}
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1.5 text-xs text-white/40">
              {breadcrumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-1.5">
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-accent transition-colors duration-200"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70">{crumb.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <ChevronRight size={11} className="text-white/25" />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Accent tag */}
        <span className="section-tag mb-4 text-accent">
          {breadcrumbs?.[breadcrumbs.length - 1]?.label ?? "Page"}
        </span>

        <h1 className="font-heading font-black text-white leading-tight mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}>
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
