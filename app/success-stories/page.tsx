import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SuccessStoriesGrid } from "@/components/success/SuccessStoriesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "قصص النجاح",
  description:
    "كل قصة نجاح بدأت بخطوة. قصص وتجارب في رحلة علاج تأخر الإنجاب — تُنشر بعد الحصول على الموافقة المناسبة ومع الحفاظ على الخصوصية.",
  path: "/success-stories",
});

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="قصص النجاح"
        title="كل قصة نجاح بدأت بخطوة"
        subtitle="رحلة علاج تأخر الإنجاب ممكن تكون مليانة أسئلة وانتظار وقرارات، لكن كل حالة لها قصتها الخاصة."
        crumbs={[{ name: "قصص النجاح", path: "/success-stories" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SuccessStoriesGrid />
        </Container>
      </section>
      <CTASection
        eyebrow="قصتك ممكن تبدأ هنا"
        title="ابدئي بخطوتك الأولى"
        body="احجزي موعدك لعمل تقييم شامل، ونبدأ معًا أول خطوة في رحلتك."
        source="success-stories"
      />
    </>
  );
}
