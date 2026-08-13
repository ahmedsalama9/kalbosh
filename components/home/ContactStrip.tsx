import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { MapPlaceholder } from "@/components/ui/MapPlaceholder";
import { Button } from "@/components/ui/Button";
import { WhatsAppButton, PhoneLink } from "@/components/ui/cta";
import { clinic, phones } from "@/lib/site";

export function ContactStrip() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <span className="eyebrow">موقعنا</span>
          <h2 className="mt-4 text-[1.9rem] font-bold leading-tight sm:text-[2.3rem]">
            العيادة في قلب طنطا
          </h2>
          <ul className="mt-6 space-y-4 text-[0.975rem]">
            <li className="flex gap-3">
              <Icon name="pin" size={22} className="mt-0.5 shrink-0 text-honey-deep" />
              <span className="text-ink/85">{clinic.addressLines.join("، ")}</span>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" size={22} className="mt-0.5 shrink-0 text-honey-deep" />
              <span className="text-ink/85">{clinic.hours.lines.join(" — ")}</span>
            </li>
            <li className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <Icon name="phone" size={22} className="shrink-0 text-honey-deep" />
              {[phones.booking, phones.doctor, phones.emergency].map((p) => (
                <span key={p.tel} className="inline-flex items-center gap-1.5 text-sm">
                  <span className="text-muted">{p.label}:</span>
                  <PhoneLink
                    tel={p.tel}
                    display={p.display}
                    source="contact-strip"
                    className="num font-semibold text-pine hover:text-honey-deep"
                  />
                </span>
              ))}
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact" withArrow>
              صفحة التواصل والموقع
            </Button>
            <WhatsAppButton source="contact-strip" />
          </div>
        </Reveal>
        <Reveal delay={100}>
          <MapPlaceholder />
        </Reveal>
      </Container>
    </section>
  );
}
