import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { CTASection } from "@/components/sections/CTASection";
import { services } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "خدمات علاج تأخر الإنجاب",
  description:
    "خدمات علاج تأخر الحمل والإنجاب مع د. محمد كلبوش في طنطا: التشخيص، الحقن المجهري، التلقيح الصناعي، علاج ضعف التبويض وتكيس المبايض وغيرها.",
  path: "/services",
  keywords: ["خدمات علاج تأخر الإنجاب", "الحقن المجهري", "علاج تأخر الحمل طنطا"],
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="ماذا نقدّم"
        title="خدمات علاج تأخر الإنجاب"
        subtitle="مش كل تأخر حمل يحتاج حقن مجهري. علاج تأخر الإنجاب بيبدأ أولًا بفهم السبب، وبناءً على نتيجة التقييم يتم تحديد الطريقة الأنسب."
        crumbs={[{ name: "الخدمات", path: "/services" }]}
      />
      <section className="py-14 sm:py-16">
        <Container>
          <ServiceGrid items={services} />
        </Container>
      </section>
      <CTASection
        eyebrow="مش عارفة إيه العلاج المناسب؟"
        title="ابدئي بالتقييم الصحيح"
        body="كل خطة علاج بتبدأ بفهم السبب. احجزي موعدك ونبدأ من الخطوة الصح."
        source="services"
      />
    </>
  );
}
