"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";
import { Container } from "@/components/ui/Container";

/** Count up a leading integer (e.g. "+17") once, when scrolled into view. */
function CountUp({ value }: { value: string }) {
  const match = value.match(/^([^\d]*)(\d+)(.*)$/);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!match) return;
    const target = parseInt(match[2], 10);
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          if (reduce) {
            setN(target);
            return;
          }
          const start = performance.now();
          const dur = 1100;
          const tick = (now: number) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(eased * target));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [match]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref} className="num">
      {match[1]}
      {n}
      {match[3]}
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="border-y border-line bg-sand/60">
      <Container className="py-10">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block font-display text-[2rem] font-bold leading-none text-pine sm:text-[2.4rem]">
                  {s.numeric ? <CountUp value={s.value} /> : s.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted">
                  {s.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
