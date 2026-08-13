import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";

/** Consistent interior-page header band with breadcrumbs + intro. */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs: { name: string; path: string }[];
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-sand/40">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <svg viewBox="0 0 1200 300" className="h-full w-full" fill="none" preserveAspectRatio="xMidYMid slice">
          <path
            d="M-20 220C220 220 260 80 520 80S900 200 1220 120"
            stroke="var(--color-pine)"
            strokeOpacity="0.1"
            strokeWidth="1.5"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <Container className="relative py-10 sm:py-14">
        <Breadcrumbs items={crumbs} />
        <div className="mt-5 max-w-3xl">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-3 text-[2rem] font-bold leading-tight sm:text-[2.6rem]">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>
          )}
        </div>
      </Container>
    </section>
  );
}
