import { Hero } from "@/components/home/Hero";
import { AppointmentSection } from "@/components/home/AppointmentSection";
import { StatsStrip } from "@/components/doctor/StatsStrip";
import { DoctorIntro } from "@/components/doctor/DoctorIntro";
import { WhyChoose } from "@/components/home/WhyChoose";
import { ServicesSection } from "@/components/home/ServicesSection";
import { IvfCallout } from "@/components/home/IvfCallout";
import { StartHere } from "@/components/home/StartHere";
import { TreatmentJourneySection } from "@/components/home/TreatmentJourneySection";
import { InfertilityExplain } from "@/components/home/InfertilityExplain";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { VideosSection } from "@/components/home/VideosSection";
import { FAQSection } from "@/components/home/FAQSection";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CTASection } from "@/components/sections/CTASection";
import { ContactStrip } from "@/components/home/ContactStrip";
import { FinalMessage } from "@/components/home/FinalMessage";

export default function Home() {
  return (
    <>
      <Hero />
      <AppointmentSection />
      <StatsStrip />
      <DoctorIntro />
      <WhyChoose />
      <ServicesSection />
      <IvfCallout />
      <StartHere />
      <TreatmentJourneySection />
      <InfertilityExplain />
      <TestimonialsSection />
      <VideosSection />
      <FAQSection />
      <LatestArticles />
      <CTASection
        eyebrow="هل تبحثين عن بداية واضحة؟"
        title="ابدئي بخطوة واحدة"
        body="لو بتعاني من تأخر الحمل، أو خضتي تجربة علاج سابقة ومحتاجة تعرفي الخطوة التالية، احجزي موعدك لعمل تقييم شامل للحالة. مش لازم تكوني عارفة من البداية إيه العلاج المناسب — دورنا إننا نفهم الحالة الأول، وبعدها نحدد الطريق الأنسب."
        source="home-final-cta"
      />
      <ContactStrip />
      <FinalMessage />
    </>
  );
}
