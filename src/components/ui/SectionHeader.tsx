import { cn } from "@/lib/utils";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  tag,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  light = false,
  className,
}: SectionHeaderProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={cn("flex flex-col gap-3", alignClass, className)}>
      {tag && (
        <ScrollReveal delay={0}>
          <span className="section-tag">{tag}</span>
        </ScrollReveal>
      )}

      <ScrollReveal delay={0.1}>
        <h2
          className={cn(
            "font-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight",
            light ? "text-white" : "text-primary"
          )}
        >
          {title}
          {titleHighlight && (
            <>
              {" "}
              <span className="text-accent">{titleHighlight}</span>
            </>
          )}
        </h2>
      </ScrollReveal>

      {/* Accent line */}
      <ScrollReveal delay={0.2}>
        <span
          className={cn(
            "block h-[3px] w-14 rounded-full",
            align === "center" && "mx-auto",
            align === "right" && "ml-auto",
            "bg-accent"
          )}
        />
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal delay={0.25}>
          <p
            className={cn(
              "max-w-2xl text-base lg:text-lg leading-relaxed",
              light ? "text-white/75" : "text-gray-500",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
