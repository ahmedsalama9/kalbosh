import Link from "next/link";
import type { Service } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-pine/20 hover:shadow-card"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-pine-soft text-pine transition-colors duration-300 group-hover:bg-pine group-hover:text-cream">
        <Icon name={service.icon} size={24} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink">
        {service.shortTitle ?? service.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-pine">
        اعرفي أكثر
        <Icon
          name="arrow"
          size={16}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      </span>
    </Link>
  );
}
