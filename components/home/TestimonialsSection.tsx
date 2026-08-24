import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewWall } from "@/components/testimonials/ReviewWall";

export function TestimonialsSection() {
  return (
    <section className="bg-sand/50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="آراء المرضى"
          title="تسع ترشيحات مستقلة، تقول الشيء نفسه"
          subtitle="عِلم وخُلق — دي الحاجتين اللي بتتكرر في كل ترشيح تقريبًا. اضغطي أي واحد تشوفي لقطته الأصلية على فيسبوك."
        />
        <Reveal className="mt-12">
          <ReviewWall />
        </Reveal>
      </Container>
    </section>
  );
}
