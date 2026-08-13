import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { doctor } from "@/lib/site";

/**
 * Brand lockup: the clinic's lotus mark (mother & child) as a rounded badge,
 * paired with the display wordmark.
 */
export function Logo({
  tone = "dark",
  withTagline = true,
  className,
}: {
  tone?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
}) {
  const text = tone === "light" ? "text-cream" : "text-ink";
  const sub = tone === "light" ? "text-cream/70" : "text-muted";
  return (
    <Link
      href="/"
      aria-label={`${doctor.name} — الصفحة الرئيسية`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-white shadow-soft ring-1 ring-line transition-transform duration-300 group-hover:-translate-y-0.5">
        <Image
          src="/images/brand/logo.webp"
          alt=""
          width={44}
          height={44}
          priority
          className="h-full w-full object-cover"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span className={cn("font-display text-lg font-bold tracking-tight", text)}>
          {doctor.name}
        </span>
        {withTagline && (
          <span className={cn("mt-1 text-[0.7rem] font-medium", sub)}>
            علاج تأخر الحمل والحقن المجهري
          </span>
        )}
      </span>
    </Link>
  );
}
