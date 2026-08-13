import Link from "next/link";
import type { Article } from "@/lib/types";
import { Icon } from "@/components/ui/Icon";
import { formatArabicDate, readingLabel } from "@/lib/utils";

export function BlogCard({ article }: { article: Article }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative grid h-40 place-items-center bg-sand text-pine">
        <Icon name="answers" size={30} className="opacity-70" />
        <span className="absolute top-3 end-3 rounded-full bg-cream/85 px-3 py-1 text-[0.7rem] font-semibold text-pine">
          {article.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-ink">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-3 border-t border-line pt-3 text-xs text-muted">
          <time dateTime={article.publishedAt}>
            {formatArabicDate(article.publishedAt)}
          </time>
          <span aria-hidden="true">•</span>
          <span>{readingLabel(article.readingMinutes)}</span>
        </div>
      </div>
    </Link>
  );
}
