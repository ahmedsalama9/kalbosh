import Link from "next/link";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Icon } from "./Icon";
import { JsonLd } from "./JsonLd";

/**
 * Accessible breadcrumb trail + matching BreadcrumbList structured data.
 * The last item is the current page (not a link).
 */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  const full = [{ name: "الرئيسية", path: "/" }, ...items];
  return (
    <nav aria-label="مسار التصفح" className="text-sm text-muted">
      <JsonLd data={breadcrumbJsonLd(full)} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {full.map((item, i) => {
          const isLast = i === full.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="text-ink">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="transition-colors hover:text-pine"
                >
                  {item.name}
                </Link>
              )}
              {!isLast && (
                <Icon name="chevron" size={14} className="-rotate-90 text-line" />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
