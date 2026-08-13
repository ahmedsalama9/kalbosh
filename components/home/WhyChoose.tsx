import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyChoose } from "@/lib/data";

export function WhyChoose() {
  return (
    <section className="bg-sand/50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="لماذا نختلف"
          title="ليه تختاري د. محمد كلبوش؟"
          subtitle="لأن علاج تأخر الحمل مش خطوة واحدة تناسب الجميع."
        />
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((f, i) => (
            <Reveal
              as="li"
              key={f.title}
              delay={(i % 3) * 70}
              className="group rounded-2xl border border-line bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-pine text-cream">
                <Icon name={f.icon} size={24} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
