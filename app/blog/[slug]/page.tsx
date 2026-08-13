import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { BookButton, WhatsAppButton } from "@/components/ui/cta";
import { BlogCard } from "@/components/blog/BlogCard";
import { ArticleTracker } from "@/components/blog/ArticleTracker";
import { articles, getArticle } from "@/lib/articles";
import { getService } from "@/lib/data";
import { formatArabicDate, readingLabel } from "@/lib/utils";
import { doctor } from "@/lib/site";
import { buildMetadata, articleJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    type: "article",
    keywords: [article.category, "علاج تأخر الحمل", "الحقن المجهري"],
  });
}

export default async function ArticlePage({
  params,
}: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const toc = article.body.filter((b) => b.type === "h2") as {
    type: "h2";
    text: string;
    id: string;
  }[];
  const service = article.relatedService
    ? getService(article.relatedService)
    : undefined;
  const related = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <>
      <ArticleTracker slug={slug} />
      {/* BreadcrumbList JSON-LD is emitted by the <Breadcrumbs> below */}
      <JsonLd
        data={articleJsonLd({
          title: article.title,
          description: article.excerpt,
          slug: article.slug,
          publishedAt: article.publishedAt,
        })}
      />

      {/* Header */}
      <section className="border-b border-line bg-sand/40">
        <Container size="narrow" className="py-10 sm:py-14">
          <Breadcrumbs
            items={[
              { name: "المقالات", path: "/blog" },
              { name: article.title, path: `/blog/${article.slug}` },
            ]}
          />
          <span className="eyebrow mt-5">{article.category}</span>
          <h1 className="mt-3 text-[1.9rem] font-bold leading-tight sm:text-[2.5rem]">
            {article.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="heart" size={16} className="text-honey-deep" />
              {doctor.name}
            </span>
            <time dateTime={article.publishedAt} className="inline-flex items-center gap-1.5">
              <Icon name="calendar" size={16} className="text-honey-deep" />
              {formatArabicDate(article.publishedAt)}
            </time>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="clock" size={16} className="text-honey-deep" />
              {readingLabel(article.readingMinutes)}
            </span>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-12 lg:grid-cols-[1fr_16rem]">
          <article className="prose-ar min-w-0">
            {article.body.map((block, i) => {
              if (block.type === "h2")
                return (
                  <h2 key={i} id={block.id}>
                    {block.text}
                  </h2>
                );
              if (block.type === "p") return <p key={i}>{block.text}</p>;
              if (block.type === "ul")
                return (
                  <ul key={i}>
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              // callout
              return (
                <div
                  key={i}
                  className="my-6 rounded-2xl border-s-4 border-honey bg-honey-soft/50 px-5 py-4 not-italic"
                >
                  <p className="m-0 font-medium text-pine">{block.text}</p>
                </div>
              );
            })}

            {/* Internal linking */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-line pt-8 not-italic">
              {service && (
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-pine no-underline transition-colors hover:bg-sand"
                >
                  <Icon name={service.icon} size={16} />
                  {service.shortTitle ?? service.title}
                </Link>
              )}
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-pine no-underline transition-colors hover:bg-sand"
              >
                <Icon name="answers" size={16} />
                الأسئلة الشائعة
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            {toc.length > 0 && (
              <nav
                aria-label="محتويات المقال"
                className="rounded-2xl border border-line bg-card p-5 shadow-soft"
              >
                <p className="text-sm font-bold text-ink">محتويات المقال</p>
                <ul className="mt-3 space-y-2 text-sm">
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className="text-muted transition-colors hover:text-pine"
                      >
                        {h.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
            <div className="mt-4 rounded-2xl bg-pine p-6 text-cream shadow-soft">
              <p className="font-display text-lg font-bold">محتاجة تقييم لحالتك؟</p>
              <p className="mt-2 text-sm text-cream/80">
                احجزي موعدك ونبدأ بفهم السبب واختيار الخطة الأنسب.
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <BookButton variant="light" className="w-full" source={`article-${slug}`} />
                <WhatsAppButton
                  variant="outlineLight"
                  className="w-full"
                  source={`article-${slug}`}
                />
              </div>
            </div>
          </aside>
        </Container>
      </section>

      {/* Related */}
      <section className="border-t border-line bg-sand/40 py-14">
        <Container>
          <h2 className="text-2xl font-bold text-ink">مقالات ذات صلة</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <li key={a.slug} className="h-full">
                <BlogCard article={a} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
