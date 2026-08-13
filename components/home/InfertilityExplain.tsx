import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { infertilityFactors } from "@/lib/data";

export function InfertilityExplain() {
  return (
    <section className="bg-sand/50 py-16 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="eyebrow">علاج تأخر الحمل</span>
          <h2 className="mt-4 text-[1.9rem] font-bold leading-tight sm:text-[2.3rem]">
            لأن معرفة السبب هي أول خطوة في العلاج
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            تأخر الحمل ممكن يكون مرتبطًا بعوامل مختلفة عند الزوجة أو الزوج أو
            الاثنين معًا. عشان كده تقييم الزوجين مع بعض جزء أساسي من رحلة التشخيص.
          </p>
          <div className="mt-7 rounded-2xl bg-pine px-6 py-5 text-cream shadow-soft">
            <p className="text-sm text-cream/70">العلاج يبدأ بسؤال مهم:</p>
            <p className="mt-1 font-display text-2xl font-bold">ما السبب؟</p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ul className="grid gap-3 sm:grid-cols-2">
            {infertilityFactors.map((f) => (
              <li
                key={f}
                className="flex items-start gap-3 rounded-xl border border-line bg-card p-4 shadow-soft"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-pine-soft text-pine">
                  <Icon name="check" size={15} />
                </span>
                <span className="text-sm leading-relaxed text-ink/85">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
