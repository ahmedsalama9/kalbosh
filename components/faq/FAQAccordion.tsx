"use client";

import { useState, useId } from "react";
import type { FAQ } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

/** Accessible accordion. One panel open at a time; keyboard + ARIA wired. */
export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const base = useId();

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line overflow-hidden rounded-2xl border border-line bg-card shadow-soft">
      {items.map((item, i) => {
        const isOpen = open === i;
        const btnId = `${base}-btn-${i}`;
        const panelId = `${base}-panel-${i}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                id={btnId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-start transition-colors hover:bg-sand/50 sm:px-6"
              >
                <span className="text-base font-bold text-ink sm:text-lg">
                  {item.question}
                </span>
                <span
                  className={cn(
                    "grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300",
                    isOpen
                      ? "rotate-180 border-pine bg-pine text-cream"
                      : "border-line text-pine",
                  )}
                  aria-hidden="true"
                >
                  <Icon name="chevron" size={16} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              hidden={!isOpen}
              className="grid transition-all duration-300 ease-out"
            >
              <div className="overflow-hidden px-5 pb-6 sm:px-6">
                <p className="leading-relaxed text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
