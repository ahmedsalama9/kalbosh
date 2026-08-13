import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Figure } from "@/components/ui/Figure";
import { DoctorIntro } from "@/components/doctor/DoctorIntro";
import { StatsStrip } from "@/components/doctor/StatsStrip";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "عن د. محمد كلبوش",
  description:
    "د. محمد كلبوش، استشاري أمراض النساء والتوليد وعلاج تأخر الإنجاب والحقن المجهري في طنطا. خبرة علمية دولية واهتمام حقيقي بكل تفاصيل الحالة.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="عن الطبيب"
        title="عن د. محمد كلبوش"
        subtitle="خبرة علمية… واهتمام حقيقي بكل تفاصيل الحالة"
        crumbs={[{ name: "عن د. محمد", path: "/about" }]}
      />

      <section className="py-14">
        <Container size="narrow">
          <Reveal className="prose-ar">
            <p>
              أنا د. محمد كلبوش، استشاري أمراض النساء والتوليد وعلاج تأخر الإنجاب
              والحقن المجهري.
            </p>
            <p>
              خلال أكثر من <strong>17 عامًا</strong> من العمل في مجال أمراض النساء
              والتوليد، وأكثر من <strong>11 عامًا</strong> في مجال علاج تأخر الإنجاب
              والإخصاب المساعد، كان هدفي دائمًا إن كل مريضة تحصل على تقييم واضح وخطة
              علاج مناسبة لحالتها.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-4">
        <Container size="narrow">
          <Reveal>
            <Figure
              src="/images/doctor/candid-1.webp"
              alt="د. محمد كلبوش خلال لقاء توعوي عن صحة المرأة وتأخر الإنجاب"
              aspect="16 / 10"
              sizes="(max-width: 768px) 92vw, 48rem"
              rounded="rounded-3xl"
              className="shadow-card ring-1 ring-line"
            />
            <p className="mt-3 text-center text-sm text-muted">
              من لقاءات التوعية حول صحة المرأة وتأخر الإنجاب.
            </p>
          </Reveal>
        </Container>
      </section>

      <StatsStrip />

      <div className="py-14 sm:py-20">
        <DoctorIntro variant="page" />
      </div>

      <section className="pb-8">
        <Container size="narrow">
          <Reveal className="rounded-3xl border border-honey/25 bg-honey-soft/50 p-8 text-center">
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-ink">
              أهم شيء عندي إنك تفهمي حالتك، تعرفي خيارات العلاج المتاحة، وتكوني
              مطمئنة إن كل خطوة لها سبب واضح.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="ابدئي رحلتك"
        title="جاهزة لأول خطوة؟"
        body="احجزي موعدك لعمل تقييم شامل، ونبدأ معًا بفهم حالتك واختيار الخطة الأنسب."
        source="about"
      />
    </>
  );
}
