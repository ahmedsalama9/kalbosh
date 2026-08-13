import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton } from "@/components/ui/cta";
import { doctor } from "@/lib/site";

/** The emotional closer — hope grounded in a clear first step. */
export function FinalMessage() {
  return (
    <section className="relative overflow-hidden border-t border-line bg-cream py-20">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -bottom-24 start-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-honey-soft/50 blur-3xl" />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow eyebrow--honey justify-center">حلمك يستحق بداية صحيحة</span>
          <h2 className="mt-5 text-[2rem] font-bold leading-tight sm:text-[2.6rem]">
            ابدئي بالتشخيص الصحيح… واختاري خطة العلاج المناسبة لحالتك
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            تأخر الحمل ممكن يكون تجربة مليانة أسئلة وقلق، لكن أول خطوة مش إنك تعرفي
            كل الإجابات. أول خطوة إنك تلاقي طبيب يسمعك، يفهم حالتك، ويشرح لكِ
            الخيارات المتاحة بوضوح.
          </p>
          <div className="mx-auto mt-8 max-w-sm rounded-2xl border border-line bg-card/70 px-6 py-5 shadow-soft">
            <p className="font-display text-xl font-bold text-pine">{doctor.name}</p>
            <p className="mt-1 text-sm text-muted">{doctor.title}</p>
          </div>
          <div className="mt-8 flex justify-center">
            <BookButton size="lg" withArrow source="final-message">
              احجزي موعدك الآن
            </BookButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
