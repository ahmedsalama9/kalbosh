import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton, WhatsAppButton } from "@/components/ui/cta";
import { trustBadges } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      {/* Ambient path signature */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 start-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-honey-soft/40 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.5]"
          viewBox="0 0 1200 700"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-40 520 C 260 520 260 300 520 300 S 860 120 1240 180"
            stroke="var(--color-pine)"
            strokeOpacity="0.12"
            strokeWidth="1.5"
            strokeDasharray="2 8"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <Container className="relative grid items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        {/* Copy */}
        <div className="order-2 max-w-xl lg:order-1">
          <Reveal>
            <span className="eyebrow">رحلتك تبدأ من هنا</span>
            <h1 className="mt-5 text-[2.15rem] font-bold leading-[1.15] sm:text-[2.7rem] lg:text-[3.15rem]">
              رحلتك لعلاج تأخر الحمل تبدأ
              <span className="relative mx-2 inline-block text-pine">
                بالتشخيص الصحيح
                <svg
                  className="absolute -bottom-2 start-0 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 7C40 3 160 3 198 6"
                    stroke="var(--color-honey)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-6 text-lg font-medium leading-relaxed text-ink/90">
              تأخر الحمل له أسباب مختلفة، وبالتالي مش كل حالة بتحتاج نفس العلاج.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              هدفي إني أفهم حالتك بشكل كامل، أحدد السبب، وبعدها نختار معًا خطة
              العلاج الأنسب لكِ — سواء كان العلاج بالأدوية، أو التنشيط، أو التلقيح
              الصناعي، أو الحقن المجهري وغيرها من الحلول المتاحة.
            </p>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-line bg-card/70 p-4 shadow-soft">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-pine-soft text-pine">
                <Icon name="shield" size={20} />
              </span>
              <p className="text-sm leading-relaxed text-ink/85">
                أكثر من <strong className="text-pine">17 عامًا</strong> من الخبرة،
                منها أكثر من <strong className="text-pine">11 عامًا</strong> في علاج
                تأخر الإنجاب والإخصاب المساعد.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <BookButton size="lg" withArrow source="hero" />
              <WhatsAppButton size="lg" source="hero" />
            </div>
          </Reveal>

          <Reveal delay={260}>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-line pt-6 text-sm text-muted">
              {trustBadges.map((b) => (
                <li key={b} className="flex items-center gap-1.5">
                  <Icon name="check" size={16} className="text-honey-deep" />
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Portrait — shown first on mobile so the visitor immediately sees who they're booking with */}
        <Reveal
          delay={120}
          className="order-1 relative mx-auto w-full max-w-md lg:order-2 lg:mx-0"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-iris-soft via-pine-soft to-honey-soft/70" />
          <Figure
            src="/images/doctor/hero.webp"
            alt="د. محمد كلبوش، استشاري أمراض النساء والتوليد وعلاج تأخر الإنجاب"
            aspect="4 / 5"
            priority
            sizes="(max-width: 1024px) 90vw, 28rem"
            rounded="rounded-[1.6rem]"
            className="shadow-card ring-1 ring-line"
          />
          <div className="absolute -bottom-5 start-5 flex items-center gap-3 rounded-2xl border border-line bg-cream/95 px-4 py-3 shadow-card backdrop-blur">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-honey text-cream">
              <Icon name="route" size={20} />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-bold text-ink">خطة لكل حالة</p>
              <p className="text-xs text-muted">مش قالب واحد للجميع</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
