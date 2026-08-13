import { clinic, phones } from "@/lib/site";
import { Icon, type IconGlyph } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneLink } from "@/components/ui/cta";

type Card = {
  icon: IconGlyph;
  title: string;
  lines?: readonly string[];
  phones?: readonly { label: string; display: string; tel: string }[];
};

const cards: Card[] = [
  { icon: "pin", title: "العنوان", lines: clinic.addressLines },
  { icon: "clock", title: "المواعيد", lines: clinic.hours.lines },
  {
    icon: "calendar",
    title: "الحجز والطبيب",
    phones: [phones.booking, phones.doctor],
  },
  {
    icon: "phone",
    title: "الطوارئ",
    phones: [phones.emergency],
  },
];

/** Appointment / clinic information cards. Reused on home + contact. */
export function ClinicInfo({ source = "clinic-info" }: { source?: string }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <Reveal
          as="li"
          key={card.title}
          delay={i * 60}
          className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-soft"
        >
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-honey-soft text-honey-deep">
            <Icon name={card.icon} size={22} />
          </span>
          <h3 className="mt-4 text-base font-bold text-ink">{card.title}</h3>
          {card.lines && (
            <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted">
              {card.lines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          )}
          {card.phones && (
            <div className="mt-2 space-y-1.5 text-sm">
              {card.phones.map((p) => (
                <div key={p.tel} className="flex items-center gap-2">
                  <span className="text-muted">{p.label}:</span>
                  <PhoneLink
                    tel={p.tel}
                    display={p.display}
                    source={source}
                    className="num font-semibold text-pine transition-colors hover:text-honey-deep"
                  />
                </div>
              ))}
            </div>
          )}
        </Reveal>
      ))}
    </ul>
  );
}
