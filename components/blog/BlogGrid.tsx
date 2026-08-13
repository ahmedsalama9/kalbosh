import type { Article } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "./BlogCard";

export function BlogGrid({ items }: { items: Article[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a, i) => (
        <Reveal as="li" key={a.slug} delay={(i % 3) * 70} className="h-full">
          <BlogCard article={a} />
        </Reveal>
      ))}
    </ul>
  );
}
