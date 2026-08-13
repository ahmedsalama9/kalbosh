import Link from "next/link";
import {
  clinic,
  doctor,
  footerNav,
  phones,
  social,
  whatsapp,
} from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { PhoneLink } from "@/components/ui/cta";

export function Footer() {
  const year = 2026;
  return (
    <footer className="mt-24 bg-pine-deep text-cream">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <p className="font-display text-2xl font-bold">{doctor.name}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              {doctor.title}.
            </p>
            <div className="mt-6 flex gap-2">
              {social.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/80 transition-colors hover:border-honey/50 hover:text-honey"
                >
                  <SocialGlyph name={s.key} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <nav aria-label="روابط الموقع" className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-honey/90">
              تصفّحي
            </h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-cream/75">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-honey/90">
              العيادة
            </h2>
            <ul className="mt-4 space-y-4 text-sm text-cream/80">
              <li className="flex gap-3">
                <Icon name="pin" size={20} className="mt-0.5 shrink-0 text-honey" />
                <span>{clinic.addressLines.join("، ")}</span>
              </li>
              <li className="flex gap-3">
                <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-honey" />
                <span>{clinic.hours.lines.join(" — ")}</span>
              </li>
              <li className="flex flex-wrap items-center gap-x-5 gap-y-2">
                <Icon name="phone" size={20} className="shrink-0 text-honey" />
                {Object.values(phones).map((p) => (
                  <span key={p.tel} className="inline-flex items-center gap-1.5">
                    <span className="text-cream/55">{p.label}:</span>
                    <PhoneLink
                      tel={p.tel}
                      display={p.display}
                      source="footer"
                      className="num font-semibold text-cream transition-colors hover:text-honey"
                    />
                  </span>
                ))}
              </li>
              <li>
                <a
                  href={whatsapp.href(whatsapp.defaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-honey px-5 py-2.5 text-sm font-semibold text-cream transition-colors hover:bg-honey-deep"
                >
                  <Icon name="whatsapp" size={18} /> تواصلي عبر واتساب
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {doctor.name} — جميع الحقوق محفوظة</p>
          <p className="max-w-md leading-relaxed">
            المحتوى الطبي على هذا الموقع للتوعية فقط ولا يُغني عن استشارة الطبيب أو
            التشخيص المباشر.
          </p>
        </div>
      </Container>
    </footer>
  );
}

/** Minimal brand glyphs for social links. */
function SocialGlyph({ name }: { name: string }) {
  if (name === "facebook")
    return (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V4c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V10H7.8v3h2.7v8z" />
      </svg>
    );
  if (name === "instagram")
    return (
      <svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="4.5" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="17" cy="7" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true">
      <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.8 12 4.8 12 4.8s-6 0-7.7.5A2.7 2.7 0 0 0 2.4 7.2 28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.7.5 7.7.5s6 0 7.7-.5a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5 3z" />
    </svg>
  );
}
