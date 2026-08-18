import { clinics, phones } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneLink } from "@/components/ui/cta";

/**
 * Clinic information — one card per branch (address, hours, its own booking
 * number) plus a shared card for the numbers that are not branch-specific.
 * Reused on home + contact.
 */
export function ClinicInfo({ source = "clinic-info" }: { source?: string }) {
  return (
    <ul className="grid gap-4 lg:grid-cols-3">
      {clinics.map((c, i) => (
        <Reveal
          as="li"
          key={c.key}
          delay={i * 60}
          className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-soft"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-honey-soft text-honey-deep">
              <Icon name="pin" size={22} />
            </span>
            <h3 className="text-base font-bold text-ink">عيادة {c.city}</h3>
          </div>

          <div className="mt-4 space-y-1 text-sm leading-relaxed text-muted">
            {c.addressLines.map((l) => (
              <p key={l}>{l}</p>
            ))}
          </div>

          <div className="mt-4 flex gap-2.5 border-t border-line pt-4">
            <Icon name="clock" size={18} className="mt-0.5 shrink-0 text-honey-deep" />
            <div className="space-y-1 text-sm leading-relaxed text-muted">
              {c.hoursLines.map((l) => (
                <p key={l}>{l}</p>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 border-t border-line pt-4 text-sm">
            <Icon name="calendar" size={18} className="shrink-0 text-honey-deep" />
            <span className="text-muted">{c.booking.label}:</span>
            <PhoneLink
              tel={c.booking.tel}
              display={c.booking.display}
              source={`${source}-${c.key}`}
              className="num font-semibold text-pine transition-colors hover:text-honey-deep"
            />
          </div>
        </Reveal>
      ))}

      <Reveal
        as="li"
        delay={clinics.length * 60}
        className="flex h-full flex-col rounded-2xl border border-line bg-card p-6 shadow-soft"
      >
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl bg-honey-soft text-honey-deep">
            <Icon name="phone" size={22} />
          </span>
          <h3 className="text-base font-bold text-ink">أرقام أخرى</h3>
        </div>
        <div className="mt-4 space-y-2 text-sm">
          {[phones.doctor, phones.emergency].map((p) => (
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
      </Reveal>
    </ul>
  );
}
