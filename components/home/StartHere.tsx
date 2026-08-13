import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Questionnaire } from "@/components/questionnaire/Questionnaire";

export function StartHere() {
  return (
    <section id="start-here" className="scroll-mt-24 bg-sand/50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="خطوة بخطوة"
          title="ابدئي من هنا"
          subtitle="مش عارفة إيه الخطوة المناسبة لحالتك؟ جاوبي على أسئلة بسيطة نبدأ بيها سوا."
        />
        <Reveal className="mt-12">
          <Questionnaire />
        </Reveal>
      </Container>
    </section>
  );
}
