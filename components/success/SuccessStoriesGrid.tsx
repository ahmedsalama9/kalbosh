import { successStories } from "@/lib/data";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Placeholder success-story cards. No real patient data is fabricated — these
 * are clearly marked illustrative slots for future, consented CMS content.
 */
export function SuccessStoriesGrid() {
  return (
    <>
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {successStories.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={(i % 3) * 70}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
          >
            <div className="relative grid h-40 place-items-center bg-pine-soft text-pine">
              <Icon name={s.hasVideo ? "play" : "heart"} size={34} />
              <span className="absolute top-3 end-3 rounded-full bg-cream/80 px-2.5 py-1 text-[0.7rem] font-medium text-muted">
                قصة توضيحية
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <span className="text-xs font-semibold text-honey-deep">
                {s.treatment}
              </span>
              <h3 className="mt-1.5 text-lg font-bold text-ink">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {s.summary}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
      <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <Icon name="shield" size={16} className="shrink-0 text-honey-deep" />
        يتم نشر قصص وتجارب المرضى بعد الحصول على الموافقة المناسبة، مع الحفاظ على
        الخصوصية.
      </p>
    </>
  );
}
