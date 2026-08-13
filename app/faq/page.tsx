import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/lib/data";
import { buildMetadata, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "الأسئلة الشائعة",
  description:
    "إجابات على أكثر الأسئلة شيوعًا عن تأخر الحمل والحقن المجهري: متى ألجأ للطبيب، هل كل حالة تحتاج حقن مجهري، تجميد البويضات والأجنة وغيرها.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <PageHeader
        eyebrow="الأسئلة الشائعة"
        title="أسئلتك مهمة… وإجابتها جزء من العلاج"
        subtitle="جمعنا لكِ إجابات واضحة على أكثر ما يشغل بال المرضى في رحلة علاج تأخر الحمل."
        crumbs={[{ name: "الأسئلة الشائعة", path: "/faq" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <FAQAccordion items={faqs} />
        </Container>
      </section>
      <CTASection
        eyebrow="لسه عندك سؤال؟"
        title="احجزي موعدك وابدئي التقييم"
        body="بعض الأسئلة إجابتها بتعتمد على حالتك أنتِ. احجزي موعدك ونجاوب على كل ما يشغلك."
        source="faq"
      />
    </>
  );
}
