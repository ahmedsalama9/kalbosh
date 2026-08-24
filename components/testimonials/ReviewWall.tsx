"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { reviews } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/**
 * Public Facebook recommendations, typeset. The words carry the section; the
 * original screenshot sits one click behind each card so any quote can be
 * checked against its source. Two short, absolute quotes run in plum to give
 * the wall a rhythm instead of nine identical cards.
 */
export function ReviewWall() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const count = reviews.length;
  const open = openIndex === null ? null : reviews[openIndex];

  const close = useCallback(() => setOpenIndex(null), []);
  const step = useCallback(
    (delta: number) =>
      setOpenIndex((i) => (i === null ? i : (i + delta + count) % count)),
    [count],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // RTL: the "next" review sits to the left.
      if (e.key === "ArrowLeft") step(1);
      if (e.key === "ArrowRight") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [openIndex, close, step]);

  return (
    <>
      <div className="wall columns-1 md:columns-2 lg:columns-3">
        {reviews.map((r, i) => (
          <article
            key={r.screenshot}
            className={cn(
              "group relative rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 sm:p-7",
              r.featured
                ? "border-transparent bg-pine text-cream shadow-card hover:shadow-lift"
                : "border-line bg-card shadow-soft hover:border-pine/25 hover:shadow-card",
            )}
          >
            <blockquote
              className={cn(
                "font-display",
                r.featured
                  ? "text-[1.25rem] leading-[1.7] text-cream sm:text-[1.4rem]"
                  : "text-[1.075rem] leading-[1.95] text-ink sm:text-[1.15rem]",
              )}
            >
              {r.text}
            </blockquote>

            <div
              className={cn(
                "mt-6 flex items-baseline justify-between gap-3 border-t pt-5",
                r.featured ? "border-cream/20" : "border-line",
              )}
            >
              <p
                dir="ltr"
                className={cn(
                  "truncate text-sm font-bold",
                  r.featured ? "text-cream" : "text-ink",
                )}
              >
                {r.name}
              </p>
              <p
                className={cn(
                  "shrink-0 text-xs",
                  r.featured ? "text-cream/70" : "text-muted",
                )}
              >
                {r.date}
              </p>
            </div>

            {/* Corner affordance + the card's real click target. */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute top-5 end-5 opacity-40 transition-opacity duration-300 group-hover:opacity-100",
                r.featured ? "text-cream" : "text-pine",
              )}
            >
              <Icon name="expand" size={15} />
            </span>
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="absolute inset-0 rounded-3xl"
            >
              <span className="sr-only">
                عرض اللقطة الأصلية لترشيح {r.name}
              </span>
            </button>
          </article>
        ))}
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`ترشيح ${open.name} على فيسبوك`}
          onClick={close}
          className="fixed inset-0 z-50 grid place-items-center bg-pine-deep/92 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            type="button"
            onClick={close}
            aria-label="إغلاق"
            className="absolute top-4 end-4 grid h-11 w-11 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20"
          >
            <Icon name="close" size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="الترشيح السابق"
            className="absolute start-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:start-6"
          >
            <Icon name="chevron" size={20} className="rotate-[-90deg]" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="الترشيح التالي"
            className="absolute end-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-cream/10 text-cream transition-colors hover:bg-cream/20 sm:end-6"
          >
            <Icon name="chevron" size={20} className="rotate-90" />
          </button>

          <figure
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-xl overflow-hidden rounded-2xl bg-card shadow-lift"
          >
            <Image
              src={open.screenshot}
              alt={`لقطة ترشيح ${open.name} على فيسبوك`}
              width={open.width}
              height={open.height}
              sizes="(min-width: 640px) 576px, 92vw"
              className="h-auto w-full"
              priority
            />
            <figcaption className="flex items-center justify-between gap-3 border-t border-line px-5 py-3.5 text-xs">
              <span className="font-semibold text-ink" dir="ltr">
                {open.name}
              </span>
              <span dir="ltr" className="num text-muted">
                {openIndex! + 1} / {count}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
