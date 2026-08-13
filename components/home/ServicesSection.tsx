import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { services } from "@/lib/data";

export function ServicesSection() {
  const shown = services.slice(0, 6);
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="ماذا نقدّم"
          title="خدمات علاج تأخر الإنجاب"
          subtitle="علاج تأخر الإنجاب بيبدأ أولًا بفهم السبب، وبناءً على نتيجة التقييم يتم تحديد الطريقة الأنسب للعلاج."
        />
        <div className="mt-12">
          <ServiceGrid items={shown} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/services" variant="outline" withArrow>
            كل خدمات علاج تأخر الإنجاب
          </Button>
        </div>
      </Container>
    </section>
  );
}
