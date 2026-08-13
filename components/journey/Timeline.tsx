import { journey } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

/**
 * The treatment journey as a spine — the numbered sequence is authentic here
 * (each step genuinely follows the last). On desktop cards alternate across a
 * centred spine; on mobile they stack along a start-aligned spine.
 */
export function Timeline() {
  return (
    <ol className="relative mx-auto max-w-4xl">
      {/* Spine */}
      <span
        className="absolute inset-y-2 start-[1.15rem] w-px bg-line lg:start-1/2 lg:-translate-x-1/2"
        aria-hidden="true"
      />
      {journey.map((s, i) => {
        const onEnd = i % 2 === 1; // desktop: alternate to the end (left) side
        return (
          <Reveal
            as="li"
            key={s.step}
            delay={40}
            className="relative pb-8 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:pb-12"
          >
            {/* Node */}
            <span
              className="absolute start-0 top-0 z-10 grid h-10 w-10 place-items-center rounded-full border border-honey/50 bg-cream lg:start-1/2 lg:-translate-x-1/2"
              aria-hidden="true"
            >
              <span className="num text-sm font-bold text-pine">{s.step}</span>
            </span>

            {/* Card */}
            <div
              className={cn(
                "ps-14 lg:ps-0",
                onEnd
                  ? "lg:col-start-1 lg:pe-14 lg:text-start"
                  : "lg:col-start-2 lg:ps-14",
              )}
            >
              <div className="rounded-2xl border border-line bg-card p-5 shadow-soft transition-shadow duration-300 hover:shadow-card">
                <h3 className="text-lg font-bold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.description}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </ol>
  );
}
