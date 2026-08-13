import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Timeline } from "@/components/journey/Timeline";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "رحلة علاج تأخر الحمل",
  description:
    "رحلة علاج تأخر الحمل خطوة بخطوة مع د. محمد كلبوش: من الزيارة الأولى والتقييم والتشخيص إلى وضع خطة العلاج والمتابعة.",
  path: "/treatment-journey",
  keywords: ["رحلة علاج تأخر الحمل", "خطوات الحقن المجهري", "علاج تأخر الإنجاب"],
});

export default function TreatmentJourneyPage() {
  return (
    <>
      <PageHeader
        eyebrow="رحلة العلاج"
        title="رحلة علاج تأخر الحمل"
        subtitle="خطوة بخطوة… لحد ما نوصل لأفضل فرصة للحمل. لأن كل حالة مختلفة، بنختار الطريق الأنسب مش نفس الطريق للجميع."
        crumbs={[{ name: "رحلة العلاج", path: "/treatment-journey" }]}
      />
      <section className="py-16 sm:py-20">
        <Container>
          <Timeline />
          <Reveal className="mx-auto mt-10 max-w-2xl rounded-2xl border border-honey/25 bg-honey-soft/50 p-6 text-center">
            <p className="font-display text-lg font-bold text-pine">
              لأن كل حالة مختلفة…
            </p>
            <p className="mt-2 leading-relaxed text-ink/80">
              مش الهدف إننا نمشي كل الحالات في نفس الطريق، لكن إننا نختار الطريق
              الأنسب لكل حالة.
            </p>
          </Reveal>
        </Container>
      </section>
      <CTASection
        eyebrow="ابدئي الرحلة"
        title="خطوتك الأولى تبدأ بموعد"
        body="احجزي موعدك ونبدأ من الزيارة الأولى: نفهم حالتك، نحدد الفحوصات، ونضع الخطة المناسبة."
        source="treatment-journey"
      />
    </>
  );
}
