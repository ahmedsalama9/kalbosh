import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grid place-items-center py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-pine-soft text-pine">
          <Icon name="route" size={30} />
        </span>
        <p className="mt-6 font-display text-6xl font-bold text-pine">٤٠٤</p>
        <h1 className="mt-3 text-2xl font-bold text-ink">الصفحة غير موجودة</h1>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          يبدو أن الصفحة التي تبحثين عنها غير متاحة. دعينا نرجعك إلى الطريق الصحيح.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/" withArrow>
            العودة للرئيسية
          </Button>
          <Button href="/services" variant="outline">
            تصفّحي الخدمات
          </Button>
        </div>
      </Container>
    </section>
  );
}
