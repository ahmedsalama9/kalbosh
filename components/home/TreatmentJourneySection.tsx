import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Timeline } from "@/components/journey/Timeline";

export function TreatmentJourneySection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="رحلة العلاج"
          title="رحلة علاج تأخر الحمل"
          subtitle="خطوة بخطوة… لحد ما نوصل لأفضل فرصة للحمل."
        />
        <div className="mt-14">
          <Timeline />
        </div>
        <Reveal className="mx-auto mt-6 max-w-2xl rounded-2xl border border-honey/25 bg-honey-soft/50 p-6 text-center">
          <p className="font-display text-lg font-bold text-pine">لأن كل حالة مختلفة…</p>
          <p className="mt-2 leading-relaxed text-ink/80">
            مش الهدف إننا نمشي كل الحالات في نفس الطريق، لكن إننا نختار الطريق
            الأنسب لكل حالة.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
