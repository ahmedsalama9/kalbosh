import { cn } from "@/lib/utils";

/**
 * Section header with the signature waypoint eyebrow. Tone switches for use
 * on light (default) or dark (pine) backgrounds.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  as: Heading = "h2",
  className,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "start";
  tone?: "dark" | "light";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-start",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "eyebrow",
            tone === "light" && "eyebrow--light",
            align === "center" && "justify-center",
          )}
        >
          {eyebrow}
        </span>
      )}
      <Heading
        className={cn(
          "mt-4 text-[1.9rem] leading-tight sm:text-[2.35rem] lg:text-[2.7rem]",
          tone === "light" ? "text-cream" : "text-ink",
          titleClassName,
        )}
      >
        {title}
      </Heading>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "light" ? "text-cream/80" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
