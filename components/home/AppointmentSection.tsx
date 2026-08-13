import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ClinicInfo } from "@/components/sections/ClinicInfo";

export function AppointmentSection() {
  return (
    <section className="relative -mt-2 py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="زوري العيادة"
          title="مواعيد الحجز والعيادة"
          subtitle="كل التفاصيل اللي محتاجاها عشان تبدأي — العنوان، المواعيد، وأرقام التواصل."
        />
        <div className="mt-12">
          <ClinicInfo source="home-appointment" />
        </div>
      </Container>
    </section>
  );
}
