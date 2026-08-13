import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/ui/JsonLd";
import { BookButton, WhatsAppButton } from "@/components/ui/cta";
import { ServiceCard } from "@/components/services/ServiceCard";
import { services, getService } from "@/lib/data";
import { articles } from "@/lib/articles";
import { buildMetadata, medicalProcedureJsonLd } from "@/lib/seo";
import { phones } from "@/lib/site";
import { PhoneLink } from "@/components/ui/cta";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.excerpt,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);
  const relatedArticles = articles
    .filter((a) => a.relatedService === slug)
    .slice(0, 3);

  return (
    <>
      {/* BreadcrumbList JSON-LD is emitted by the <Breadcrumbs> in PageHeader */}
      <JsonLd
        data={medicalProcedureJsonLd(
          service.title,
          service.excerpt,
          `/services/${service.slug}`,
        )}
      />

      <PageHeader
        eyebrow="خدمة"
        title={service.title}
        subtitle={service.intro}
        crumbs={[
          { name: "الخدمات", path: "/services" },
          { name: service.shortTitle ?? service.title, path: `/services/${service.slug}` },
        ]}
      />

      <section className="py-14">
        <Container className="grid gap-12 lg:grid-cols-[1fr_20rem]">
          {/* Body */}
          <article>
            <div className="mb-8 flex items-center gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-pine-soft text-pine">
                <Icon name={service.icon} size={28} />
              </span>
              <p className="text-lg font-medium text-ink/85">
                {service.shortTitle ?? service.title}
              </p>
            </div>

            {service.sections.map((sec) => (
              <div key={sec.heading} className="mb-8">
                <h2 className="text-xl font-bold text-pine">{sec.heading}</h2>
                {sec.body.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-muted">
                    {p}
                  </p>
                ))}
                {sec.list && (
                  <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                    {sec.list.map((li) => (
                      <li key={li} className="flex items-start gap-2.5">
                        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-honey-soft text-honey-deep">
                          <Icon name="check" size={13} />
                        </span>
                        <span className="text-sm leading-relaxed text-ink/85">
                          {li}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {relatedArticles.length > 0 && (
              <div className="mt-10 border-t border-line pt-8">
                <h2 className="text-lg font-bold text-ink">مقالات ذات صلة</h2>
                <ul className="mt-4 space-y-2">
                  {relatedArticles.map((a) => (
                    <li key={a.slug}>
                      <Link
                        href={`/blog/${a.slug}`}
                        className="group inline-flex items-center gap-2 text-pine hover:text-honey-deep"
                      >
                        <Icon name="arrow" size={16} className="shrink-0" />
                        <span className="font-medium">{a.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </article>

          {/* Sticky aside CTA */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-line bg-card p-6 shadow-soft">
              <p className="font-display text-lg font-bold text-ink">
                محتاجة تعرفي الخطوة المناسبة لحالتك؟
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                احجزي موعدك لعمل تقييم شامل، ونحدد معًا الخطة الأنسب.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <BookButton className="w-full" withArrow source={`service-${slug}`} />
                <WhatsAppButton className="w-full" source={`service-${slug}`} />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4 text-sm">
                <span className="text-muted">الحجز</span>
                <PhoneLink
                  tel={phones.booking.tel}
                  display={phones.booking.display}
                  source={`service-${slug}`}
                  className="num font-semibold text-pine"
                />
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-line bg-sand/50 p-5 text-sm text-muted">
              <Link href="/faq" className="font-semibold text-pine hover:text-honey-deep">
                الأسئلة الشائعة
              </Link>{" "}
              — إجابات سريعة على أكثر ما يشغل بال المرضى.
            </div>
          </aside>
        </Container>
      </section>

      {/* Related services */}
      <section className="border-t border-line bg-sand/40 py-14">
        <Container>
          <h2 className="text-2xl font-bold text-ink">خدمات أخرى</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug} className="h-full">
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
