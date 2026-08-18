import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { Icon } from "@/components/ui/Icon";
import { BookingForm } from "@/components/appointment/BookingForm";
import { PhoneLink } from "@/components/ui/cta";
import { clinics, phones } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "احجزي موعدك",
  description:
    "احجزي موعدك مع د. محمد كلبوش لعلاج تأخر الحمل والحقن المجهري في عيادتي القاهرة (التجمع الخامس) وطنطا. املئي نموذج الحجز أو تواصلي مباشرة عبر واتساب.",
  path: "/appointment",
});

export default function AppointmentPage() {
  return (
    <>
      <PageHeader
        eyebrow="احجزي موعدك"
        title="ابدئي بخطوة واحدة"
        subtitle="املئي بيانات الحجز ونتواصل معك لتأكيد الموعد، أو احجزي مباشرة عبر واتساب."
        crumbs={[{ name: "احجزي موعدك", path: "/appointment" }]}
      />
      <section className="py-14">
        <Container className="grid gap-10 lg:grid-cols-[1fr_20rem]">
          <BookingForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-card p-6 shadow-soft">
              <h2 className="text-base font-bold text-ink">معلومات العيادة</h2>
              <ul className="mt-4 space-y-5 text-sm">
                {clinics.map((c) => (
                  <li key={c.key} className="space-y-2 border-t border-line pt-3 first:border-0 first:pt-0">
                    <p className="font-bold text-ink">عيادة {c.city}</p>
                    <span className="flex gap-3">
                      <Icon name="pin" size={20} className="mt-0.5 shrink-0 text-honey-deep" />
                      <span className="leading-relaxed text-ink/85">
                        {c.addressLines.join("، ")}
                      </span>
                    </span>
                    <span className="flex gap-3">
                      <Icon name="clock" size={20} className="mt-0.5 shrink-0 text-honey-deep" />
                      <span className="leading-relaxed text-ink/85">
                        {c.hoursLines.join(" — ")}
                      </span>
                    </span>
                    <span className="flex items-center justify-between">
                      <span className="text-muted">{c.booking.label}</span>
                      <PhoneLink
                        tel={c.booking.tel}
                        display={c.booking.display}
                        source={`appointment-aside-${c.key}`}
                        className="num font-semibold text-pine hover:text-honey-deep"
                      />
                    </span>
                  </li>
                ))}
                <li className="space-y-2 border-t border-line pt-3">
                  {[phones.doctor, phones.emergency].map((p) => (
                    <div key={p.tel} className="flex items-center justify-between">
                      <span className="text-muted">{p.label}</span>
                      <PhoneLink
                        tel={p.tel}
                        display={p.display}
                        source="appointment-aside"
                        className="num font-semibold text-pine hover:text-honey-deep"
                      />
                    </div>
                  ))}
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
