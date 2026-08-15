"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, isNavGroup, phones, whatsapp } from "@/lib/site";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { Logo } from "./Logo";
import { Icon } from "@/components/ui/Icon";
import { BookButton } from "@/components/ui/cta";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [openKey, setOpenKey] = useState<string | null>(null); // desktop submenu
  const [openGroup, setOpenGroup] = useState<string | null>(null); // mobile accordion

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    // Defer the first read out of the effect body (not a synchronous setState).
    const raf = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Lock scroll + close on Esc while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const closeDrawer = () => {
    setOpen(false);
    setOpenGroup(null);
  };

  return (
    <>
      <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-cream/40 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex max-w-[82rem] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <div className={cn("transition-all duration-300", scrolled ? "py-2.5" : "py-3.5")}>
          <Logo withTagline={!scrolled} />
        </div>

        {/* Desktop nav */}
        <nav aria-label="التنقل الرئيسي" className="hidden xl:block">
          <ul className="flex items-center gap-0.5">
            {nav.map((item) => {
              if (!isNavGroup(item)) {
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={cn(
                        "relative rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors",
                        isActive(item.href) ? "text-pine" : "text-ink/75 hover:text-pine",
                      )}
                    >
                      {item.label}
                      {isActive(item.href) && (
                        <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-honey" />
                      )}
                    </Link>
                  </li>
                );
              }

              const isOpen = openKey === item.key;
              const groupActive =
                item.children.some((c) => isActive(c.href)) ||
                (item.href ? isActive(item.href) : false);

              return (
                <li
                  key={item.key}
                  className="relative"
                  onMouseEnter={() => setOpenKey(item.key)}
                  onMouseLeave={() => setOpenKey(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node))
                      setOpenKey(null);
                  }}
                  onKeyDown={(e) => e.key === "Escape" && setOpenKey(null)}
                >
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls={`submenu-${item.key}`}
                    onClick={() => setOpenKey(isOpen ? null : item.key)}
                    onFocus={() => setOpenKey(item.key)}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors",
                      groupActive ? "text-pine" : "text-ink/75 hover:text-pine",
                    )}
                  >
                    {item.label}
                    <Icon
                      name="chevron"
                      size={15}
                      className={cn(
                        "mt-0.5 transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>

                  {/* Dropdown panel (pt-2 keeps a hover bridge to the trigger) */}
                  <div
                    id={`submenu-${item.key}`}
                    className={cn(
                      "absolute start-0 top-full z-50 pt-2 transition-all duration-200",
                      isOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-1 opacity-0",
                    )}
                  >
                    <ul className="w-72 rounded-2xl border border-line bg-card p-2 shadow-card">
                      {item.children.map((c) => {
                        const active = isActive(c.href);
                        return (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={() => setOpenKey(null)}
                              aria-current={active ? "page" : undefined}
                              className={cn(
                                "block rounded-xl px-3 py-2.5 transition-colors",
                                active ? "bg-pine-soft" : "hover:bg-sand",
                              )}
                            >
                              <span className="flex items-center justify-between gap-2">
                                <span
                                  className={cn(
                                    "text-sm font-semibold",
                                    active ? "text-pine" : "text-ink",
                                  )}
                                >
                                  {c.label}
                                </span>
                                <Icon name="arrow" size={14} className="shrink-0 text-line" />
                              </span>
                              {c.desc && (
                                <span className="mt-0.5 block text-xs leading-relaxed text-muted">
                                  {c.desc}
                                </span>
                              )}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 xl:flex">
          <a
            href={whatsapp.href(whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="تواصلي عبر واتساب"
            onClick={() => track("whatsapp_click", { source: "header" })}
            className="grid h-11 w-11 place-items-center rounded-full border border-pine/15 bg-pine-soft text-pine transition-colors hover:bg-pine hover:text-cream"
          >
            <Icon name="whatsapp" size={20} />
          </a>
          <a
            href={`tel:${phones.booking.tel}`}
            aria-label={`اتصلي للحجز ${phones.booking.display}`}
            onClick={() => track("phone_click", { source: "header" })}
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink transition-colors hover:border-pine/30 hover:text-pine"
          >
            <Icon name="phone" size={19} />
          </a>
          <BookButton size="sm" source="header" />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 xl:hidden">
          <BookButton size="sm" source="header-mobile" className="hidden sm:inline-flex" />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-card text-ink"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>
      </header>

      {/* Mobile drawer — a sibling of <header> (NOT a child): the header's
          backdrop-blur is a `backdrop-filter`, which would make it the
          containing block for this `position: fixed` element and clamp it to
          the header's height. As a viewport-level sibling it fills the screen. */}
      <div
        className={cn(
          "fixed inset-0 z-50 xl:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <div
          onClick={closeDrawer}
          className={cn(
            "absolute inset-0 bg-pine-deep/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="القائمة"
          className={cn(
            "absolute inset-y-0 start-0 flex w-[86%] max-w-sm flex-col bg-cream shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open ? "translate-x-0" : "-translate-x-full rtl:translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-line px-5 py-4">
            <Logo withTagline={false} />
            <button
              type="button"
              onClick={closeDrawer}
              aria-label="إغلاق القائمة"
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-card text-ink"
            >
              <Icon name="close" size={20} />
            </button>
          </div>

          <nav aria-label="التنقل" className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="space-y-0.5">
              {nav.map((item) => {
                if (!isNavGroup(item)) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeDrawer}
                        aria-current={isActive(item.href) ? "page" : undefined}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          isActive(item.href)
                            ? "bg-pine-soft text-pine"
                            : "text-ink/80 hover:bg-sand",
                        )}
                      >
                        {item.label}
                        <Icon name="arrow" size={16} className="text-line" />
                      </Link>
                    </li>
                  );
                }

                const expanded = openGroup === item.key;
                const groupActive = item.children.some((c) => isActive(c.href));
                return (
                  <li key={item.key}>
                    <button
                      type="button"
                      onClick={() => setOpenGroup(expanded ? null : item.key)}
                      aria-expanded={expanded}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                        groupActive ? "text-pine" : "text-ink/80 hover:bg-sand",
                      )}
                    >
                      {item.label}
                      <Icon
                        name="chevron"
                        size={18}
                        className={cn(
                          "text-muted transition-transform duration-200",
                          expanded && "rotate-180",
                        )}
                      />
                    </button>
                    {expanded && (
                      <ul className="mb-1 ms-4 space-y-0.5 border-s border-line ps-3">
                        {item.children.map((c) => (
                          <li key={c.href}>
                            <Link
                              href={c.href}
                              onClick={closeDrawer}
                              aria-current={isActive(c.href) ? "page" : undefined}
                              className={cn(
                                "flex items-center justify-between rounded-lg px-4 py-2.5 text-[0.95rem] transition-colors",
                                isActive(c.href)
                                  ? "text-pine"
                                  : "text-ink/75 hover:bg-sand",
                              )}
                            >
                              {c.label}
                              <Icon name="arrow" size={14} className="text-line" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-3 border-t border-line px-5 py-4">
            <BookButton className="w-full" source="drawer" withArrow onClick={closeDrawer} />
            <div className="grid grid-cols-2 gap-2">
              <a
                href={whatsapp.href(whatsapp.defaultMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  track("whatsapp_click", { source: "drawer" });
                  closeDrawer();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-pine/15 bg-pine-soft px-4 py-2.5 text-sm font-semibold text-pine"
              >
                <Icon name="whatsapp" size={18} /> واتساب
              </a>
              <a
                href={`tel:${phones.booking.tel}`}
                onClick={() => {
                  track("phone_click", { source: "drawer" });
                  closeDrawer();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-card px-4 py-2.5 text-sm font-semibold text-ink"
              >
                <Icon name="phone" size={17} /> اتصال
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
