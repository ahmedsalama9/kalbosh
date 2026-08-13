"use client";

import { useState } from "react";
import { testimonials } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/** Accessible single-card carousel with buttons + dots. */
export function TestimonialSlider() {
  const [i, setI] = useState(0);
  const count = testimonials.length;
  const go = (n: number) => setI((n + count) % count);
  const t = testimonials[i];

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative rounded-3xl border border-line bg-card p-8 shadow-card sm:p-12">
        <span className="absolute -top-5 start-8 grid h-12 w-12 place-items-center rounded-2xl bg-honey text-cream shadow-soft">
          <Icon name="quote" size={24} />
        </span>
        <div aria-live="polite" className="min-h-[7rem]">
          <p className="text-lg leading-relaxed text-ink sm:text-xl">{t.text}</p>
          <div className="mt-6 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-pine-soft font-display font-bold text-pine">
              {t.name.charAt(0)}
            </span>
            <div className="leading-tight">
              <p className="font-bold text-ink">{t.name}</p>
              {t.treatment && (
                <p className="text-sm text-muted">{t.treatment}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(i - 1)}
          aria-label="الرأي السابق"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink transition-colors hover:border-pine/30 hover:text-pine"
        >
          <Icon name="chevron" size={18} className="rotate-[-90deg]" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="آراء المرضى">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              role="tab"
              aria-selected={idx === i}
              aria-label={`الرأي ${idx + 1}`}
              onClick={() => setI(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                idx === i ? "w-6 bg-pine" : "w-2 bg-line hover:bg-muted",
              )}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => go(i + 1)}
          aria-label="الرأي التالي"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink transition-colors hover:border-pine/30 hover:text-pine"
        >
          <Icon name="chevron" size={18} className="rotate-90" />
        </button>
      </div>
    </div>
  );
}
