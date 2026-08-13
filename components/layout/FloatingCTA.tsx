"use client";

import Link from "next/link";
import { phones, whatsapp } from "@/lib/site";
import { track } from "@/lib/analytics";
import { Icon } from "@/components/ui/Icon";

/**
 * Persistent conversion surface. On mobile a 3-action bottom bar
 * [اتصال] [واتساب] [احجزي موعدك]; on desktop a floating book pill + WhatsApp.
 * A spacer in the layout keeps the mobile bar from covering the footer.
 */
export function FloatingCTA() {
  return (
    <>
      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 backdrop-blur-md lg:hidden">
        <div className="grid grid-cols-3 gap-2 px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          <a
            href={`tel:${phones.booking.tel}`}
            onClick={() => track("phone_click", { source: "mobilebar" })}
            className="flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-xs font-semibold text-ink"
          >
            <Icon name="phone" size={20} className="text-pine" />
            اتصال
          </a>
          <a
            href={whatsapp.href(whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { source: "mobilebar" })}
            className="flex flex-col items-center gap-0.5 rounded-xl py-1.5 text-xs font-semibold text-ink"
          >
            <Icon name="whatsapp" size={20} className="text-pine" />
            واتساب
          </a>
          <Link
            href="/appointment"
            onClick={() => track("appointment_click", { source: "mobilebar" })}
            className="flex flex-col items-center justify-center gap-0.5 rounded-xl bg-pine py-1.5 text-xs font-semibold text-cream"
          >
            <Icon name="calendar" size={20} />
            احجزي موعدك
          </Link>
        </div>
      </div>

      {/* Desktop floating */}
      <div className="fixed bottom-6 z-40 hidden flex-col items-end gap-3 end-6 lg:flex">
        <a
          href={whatsapp.href(whatsapp.defaultMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="تواصلي عبر واتساب"
          onClick={() => track("whatsapp_click", { source: "float" })}
          className="grid h-14 w-14 place-items-center rounded-full bg-pine text-cream shadow-card transition-transform duration-300 hover:-translate-y-1 hover:bg-pine-dark"
        >
          <Icon name="whatsapp" size={26} />
        </a>
        <Link
          href="/appointment"
          onClick={() => track("appointment_click", { source: "float" })}
          className="group inline-flex items-center gap-2 rounded-full bg-honey px-5 py-3 text-sm font-bold text-cream shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-honey-deep hover:text-cream"
        >
          <Icon name="calendar" size={18} />
          احجزي موعدك
        </Link>
      </div>
    </>
  );
}
