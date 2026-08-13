import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          title="أسئلتك مهمة… وإجابتها جزء من العلاج"
        />
        <Reveal className="mt-12">
          <FAQAccordion items={faqs.slice(0, 6)} />
        </Reveal>
        <p className="mt-8 text-center text-muted">
          لو لسه عندك أسئلة،{" "}
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 font-semibold text-pine hover:text-honey-deep"
          >
            اطّلعي على كل الأسئلة
            <Icon name="arrow" size={15} />
          </Link>
        </p>
      </Container>
    </section>
  );
}
