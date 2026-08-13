import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "whatsapp"
  | "light"
  | "outlineLight";

export type ButtonSize = "sm" | "md" | "lg";

/** Shared button styling so server links and tracked client CTAs match. */
export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  extra?: string,
): string {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none whitespace-nowrap";

  const sizes: Record<ButtonSize, string> = {
    sm: "text-sm px-4 py-2",
    md: "text-[0.975rem] px-6 py-3",
    lg: "text-base px-7 py-3.5",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-pine text-cream shadow-soft hover:bg-pine-dark hover:-translate-y-0.5 hover:shadow-card focus-visible:outline-pine",
    secondary:
      "bg-honey text-pine-deep shadow-soft hover:bg-honey-deep hover:text-cream hover:-translate-y-0.5 focus-visible:outline-honey-deep",
    outline:
      "border border-line bg-card text-ink hover:border-pine/30 hover:bg-sand focus-visible:outline-pine",
    whatsapp:
      "bg-pine-soft text-pine border border-pine/15 hover:bg-pine hover:text-cream hover:-translate-y-0.5 focus-visible:outline-pine",
    light:
      "bg-cream text-pine shadow-soft hover:bg-white hover:-translate-y-0.5 focus-visible:outline-cream",
    outlineLight:
      "border border-cream/30 text-cream hover:bg-cream/10 focus-visible:outline-cream",
  };

  return cn(base, sizes[size], variants[variant], extra);
}
