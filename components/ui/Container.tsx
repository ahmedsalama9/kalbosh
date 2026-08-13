import { cn } from "@/lib/utils";

/** Centered content column. Default max-width ~1200px per the design system. */
export function Container({
  children,
  className,
  size = "default",
}: {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const widths = {
    narrow: "max-w-3xl",
    default: "max-w-[75rem]",
    wide: "max-w-[82rem]",
  };
  return (
    <div className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", widths[size], className)}>
      {children}
    </div>
  );
}
