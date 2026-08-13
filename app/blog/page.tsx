import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { CTASection } from "@/components/sections/CTASection";
import { articles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "مقالات طبية",
  description:
    "مقالات طبية مبسّطة عن أسباب تأخر الحمل، ضعف التبويض، تكيس المبايض، مخزون المبيض، الحقن المجهري وتجميد البويضات والأجنة — مع د. محمد كلبوش.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="مقالات طبية"
        title="افهمي حالتك قبل ما تبدأي العلاج"
        subtitle="محتوى مكتوب بلغة بسيطة يساعدك تفهمي أسباب تأخر الحمل وخيارات العلاج قبل أول زيارة."
        crumbs={[{ name: "المقالات", path: "/blog" }]}
      />
      <section className="py-14 sm:py-16">
        <Container>
          <BlogGrid items={articles} />
        </Container>
      </section>
      <CTASection
        eyebrow="بعد القراءة"
        title="حوّلي الفهم إلى خطوة"
        body="المعرفة أول الطريق. احجزي موعدك ونبدأ بتقييم حالتك بشكل شخصي."
        source="blog"
      />
    </>
  );
}
