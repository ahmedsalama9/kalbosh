import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialSlider } from "@/components/testimonials/TestimonialSlider";

export function TestimonialsSection() {
  return (
    <section className="bg-sand/50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="آراء المرضى"
          title="لأن تجربة المريض أهم من أي كلام"
        />
        <Reveal className="mt-12">
          <TestimonialSlider />
        </Reveal>
      </Container>
    </section>
  );
}
