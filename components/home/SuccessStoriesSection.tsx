import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SuccessStoriesGrid } from "@/components/success/SuccessStoriesGrid";

export function SuccessStoriesSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="قصص النجاح"
          title="كل قصة نجاح بدأت بخطوة"
          subtitle="رحلة علاج تأخر الإنجاب ممكن تكون مليانة أسئلة وانتظار وقرارات، لكن كل حالة لها قصتها الخاصة."
        />
        <div className="mt-12">
          <SuccessStoriesGrid />
        </div>
        <div className="mt-8 flex justify-center">
          <Button href="/success-stories" variant="outline" withArrow>
            كل قصص النجاح
          </Button>
        </div>
      </Container>
    </section>
  );
}
