import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { ClinicInfo } from "@/components/sections/ClinicInfo";
import { ContactForm } from "@/components/contact/ContactForm";
import { BookButton, WhatsAppButton } from "@/components/ui/cta";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "تواصل معنا",
  description:
    "عيادتا د. محمد كلبوش — القاهرة: شارع التسعين الشمالي، التجمع الخامس (ميديكال بارك بريمير)، وطنطا: شارع القاضي مع شارع البحر فوق بنك دبي الإمارات الوطني. أرقام الحجز والطوارئ والمواعيد.",
  path: "/contact",
  keywords: [
    "دكتور تأخر الحمل طنطا",
    "دكتور تأخر الحمل التجمع الخامس",
    "عيادة نساء وتوليد طنطا",
    "تواصل",
  ],
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="تواصلي معنا"
        title="نحن هنا لمساعدتك"
        subtitle="كل طرق التواصل مع عيادتي د. محمد كلبوش في القاهرة وطنطا — الحجز، الاستفسار، والموقع."
        crumbs={[{ name: "تواصل معنا", path: "/contact" }]}
      />

      <section className="py-14">
        <Container>
          <ClinicInfo source="contact-page" />

          <div className="mt-6 flex flex-wrap gap-3">
            <BookButton withArrow source="contact-page" />
            <WhatsAppButton source="contact-page" />
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold text-ink">أرسلي لنا رسالة</h2>
              <p className="mt-2 text-muted">
                اكتبي استفسارك وسنعاود التواصل معك، أو احجزي موعدك مباشرة.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold text-ink">مواقع العيادات</h2>
              <p className="mt-2 text-muted">
                القاهرة – التجمع الخامس، وطنطا – شارع القاضي مع شارع البحر.
              </p>
              <div className="mt-5">
                <MapPlaceholder className="h-full" />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
