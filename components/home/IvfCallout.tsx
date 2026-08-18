import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton } from "@/components/ui/cta";
import { icsiFactors } from "@/lib/data";

const routes = [
  "العلاج الدوائي",
  "تنشيط التبويض",
  "التلقيح الصناعي",
  "الحقن المجهري",
  "حلول أخرى حسب الحالة",
];

/**
 * The site's central medical positioning, drawn as a branch: one starting
 * point (correct diagnosis) opening onto several possible routes — IVF being
 * only one of them. This is the "not one road for everyone" thesis, literal.
 */
export function IvfCallout() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-pine-deep text-cream shadow-card">
            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
              {/* Statement */}
              <div>
                <h2 className="text-[1.7rem] font-bold leading-snug sm:text-[2.1rem]">
                  هل الحقن المجهري هو الحل لكل حالات تأخر الحمل؟
                </h2>
                <p className="mt-6 flex items-baseline gap-3">
                  <span className="font-display text-6xl font-bold text-honey sm:text-7xl">
                    لا
                  </span>
                </p>
                <p className="mt-4 max-w-md leading-relaxed text-cream/80">
                  الحقن المجهري واحد من الحلول المتاحة لعلاج تأخر الإنجاب، لكنه مش
                  بالضرورة يكون الخيار الأول لكل زوجين. القرار بيعتمد على عوامل
                  متعددة يحددها التقييم.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {icsiFactors.map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-cream/15 bg-cream/5 px-3 py-1.5 text-xs font-medium text-cream/85"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <BookButton variant="secondary" withArrow source="ivf-callout">
                    احجزي موعدك للتقييم
                  </BookButton>
                </div>
              </div>

              {/* Branch diagram */}
              <div className="rounded-2xl bg-cream/5 p-6 ring-1 ring-cream/10 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-honey text-cream">
                    <Icon name="diagnosis" size={22} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-cream">نبدأ بالتشخيص الصحيح</p>
                    <p className="text-xs text-cream/60">ومنه تتفرّع خيارات العلاج</p>
                  </div>
                </div>

                {/* Spine + routes */}
                <ul className="relative mt-5 space-y-2.5 ps-6">
                  <span
                    className="absolute inset-y-2 start-[0.32rem] w-px bg-cream/20"
                    aria-hidden="true"
                  />
                  {routes.map((r, i) => (
                    <li key={r} className="relative flex items-center gap-3">
                      <span
                        className="absolute start-[-1.38rem] h-2.5 w-2.5 rounded-full bg-honey ring-4 ring-pine-deep"
                        aria-hidden="true"
                      />
                      <span
                        className={
                          "flex-1 rounded-xl border px-4 py-2.5 text-sm font-medium " +
                          (i === 3
                            ? "border-honey/40 bg-honey/10 text-cream"
                            : "border-cream/12 bg-cream/[0.04] text-cream/85")
                        }
                      >
                        {r}
                        {i === 3 && (
                          <span className="ms-2 text-xs text-honey">
                            (خيار من الخيارات)
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
