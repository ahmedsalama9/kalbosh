import { Container } from "@/components/ui/Container";
import { Figure } from "@/components/ui/Figure";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { credentials, experience } from "@/lib/data";

/**
 * "Professional journey" style intro: portrait on one side, credentials on the
 * other. `variant="page"` drops the section chrome for reuse on /about.
 */
export function DoctorIntro({
  variant = "home",
}: {
  variant?: "home" | "page";
}) {
  const items = [...credentials, ...experience];
  return (
    <section className={variant === "home" ? "py-16 sm:py-24" : ""}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative order-1 mx-auto w-full max-w-md lg:order-none">
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-pine-soft to-honey-soft/60" />
          <Figure
            src="/images/doctor/portrait.webp"
            alt="د. محمد كلبوش، استشاري أمراض النساء والتوليد وعلاج تأخر الإنجاب"
            aspect="1 / 1"
            sizes="(max-width: 1024px) 90vw, 28rem"
            rounded="rounded-[1.6rem]"
            className="shadow-card ring-1 ring-line"
          />
        </Reveal>

        <Reveal delay={100}>
          <span className="eyebrow">
            {variant === "home" ? "تعرّفي على طبيبك" : "من هو"}
          </span>
          <h2 className="mt-4 text-[1.9rem] font-bold leading-tight sm:text-[2.4rem]">
            د. محمد كلبوش
          </h2>
          <p className="mt-3 text-lg text-muted">
            خبرة علمية دولية… ورعاية تبدأ من فهم حالتك
          </p>

          <ul className="mt-7 space-y-3">
            {items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-honey-soft text-honey-deep">
                  <Icon name="check" size={14} />
                </span>
                <span className="text-[0.975rem] leading-relaxed text-ink/85">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <blockquote className="mt-7 border-s-2 border-honey ps-4 text-[1.05rem] italic leading-relaxed text-pine">
            «الخبرة بالنسبة لي مش مجرد عدد سنوات، لكنها القدرة على فهم تفاصيل كل
            حالة واختيار الخطوة المناسبة لها.»
          </blockquote>

          {variant === "home" && (
            <div className="mt-8">
              <Button href="/about" variant="outline" withArrow>
                اعرفي كيف يمكن أن تبدأ رحلتك
              </Button>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
