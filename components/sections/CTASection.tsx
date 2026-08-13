import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { BookButton, WhatsAppButton } from "@/components/ui/cta";

/**
 * The recurring conversion banner. Placed after major content blocks to move
 * the visitor toward booking — worded per-context, never ad-like.
 */
export function CTASection({
  eyebrow,
  title,
  body,
  bookLabel = "احجزي موعدك مع د. محمد كلبوش",
  source,
  showWhatsApp = true,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  bookLabel?: string;
  source?: string;
  showWhatsApp?: boolean;
}) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-pine px-6 py-14 text-center shadow-card sm:px-12">
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              aria-hidden="true"
            >
              <svg viewBox="0 0 1000 400" className="h-full w-full" fill="none">
                <path
                  d="M-20 300C200 300 250 120 500 120S820 240 1020 180"
                  stroke="var(--color-honey)"
                  strokeOpacity="0.35"
                  strokeWidth="1.5"
                  strokeDasharray="2 9"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="relative mx-auto max-w-2xl">
              {eyebrow && (
                <span className="eyebrow eyebrow--light justify-center">{eyebrow}</span>
              )}
              <h2 className="mt-4 text-[1.75rem] font-bold leading-tight text-cream sm:text-[2.2rem]">
                {title}
              </h2>
              {body && (
                <p className="mt-4 text-lg leading-relaxed text-cream/80">{body}</p>
              )}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <BookButton variant="light" size="lg" withArrow source={source}>
                  {bookLabel}
                </BookButton>
                {showWhatsApp && (
                  <WhatsAppButton variant="outlineLight" size="lg" source={source} />
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
