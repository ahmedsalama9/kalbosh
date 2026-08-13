import Image from "next/image";
import { cn } from "@/lib/utils";
import { Icon, type IconGlyph } from "./Icon";

/**
 * A media slot that renders a real optimized image when `src` is provided,
 * and an on-brand placeholder otherwise. This keeps the design intact before
 * real photography exists — swap in a file path (e.g.
 * "/images/doctor/doctor-main.webp") to replace a placeholder with next/image.
 */
export function Figure({
  src,
  alt,
  label = "سيتم إضافة الصورة قريبًا",
  glyph = "heart",
  aspect = "4 / 5",
  priority,
  sizes,
  className,
  rounded = "rounded-3xl",
  tone = "soft",
}: {
  src?: string;
  alt: string;
  label?: string;
  glyph?: IconGlyph;
  aspect?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  rounded?: string;
  tone?: "soft" | "sand" | "pine";
}) {
  const tones = {
    soft: "bg-pine-soft text-pine",
    sand: "bg-sand text-pine",
    pine: "bg-pine-dark text-cream/70",
  };
  return (
    <div
      className={cn("relative overflow-hidden", rounded, className)}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes ?? "(max-width: 1024px) 100vw, 50vw"}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={cn("grid h-full w-full place-items-center", tones[tone])}
        >
          <div className="flex flex-col items-center gap-3 px-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-2xl bg-cream/60 text-pine">
              <Icon name={glyph} size={30} />
            </span>
            <span className="text-sm font-medium opacity-80">{label}</span>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
        </div>
      )}
    </div>
  );
}
