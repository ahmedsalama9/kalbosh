import { clinics } from "@/lib/site";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";

/**
 * Location block. No coordinates or Google Maps URL are invented — this is a
 * clearly-labelled placeholder to be replaced with an embed once provided.
 */
export function MapPlaceholder({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative grid place-items-center overflow-hidden rounded-3xl border border-line bg-pine-soft",
        className,
      )}
      style={{ minHeight: "18rem" }}
      role="img"
      aria-label={`مواقع العيادات: ${clinics
        .map((c) => c.addressShort)
        .join(" — ")}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" />
      <div className="relative flex flex-col items-center gap-4 px-6 py-8 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-cream text-pine shadow-soft">
          <Icon name="pin" size={28} />
        </span>
        <div className="space-y-2">
          {clinics.map((c) => (
            <p key={c.key} className="font-bold text-pine">
              {c.addressShort}
            </p>
          ))}
        </div>
        <p className="text-sm text-pine/70">
          سيتم إضافة خريطة الموقع التفاعلية قريبًا
        </p>
      </div>
    </div>
  );
}
