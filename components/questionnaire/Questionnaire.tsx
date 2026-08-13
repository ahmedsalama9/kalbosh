"use client";

import { useState } from "react";
import { questionnaire } from "@/lib/data";
import { track } from "@/lib/analytics";
import { Icon } from "@/components/ui/Icon";
import { BookButton } from "@/components/ui/cta";
import { cn } from "@/lib/utils";

/**
 * Guidance-only multi-step questionnaire. It never diagnoses, scores, or
 * recommends a treatment — it simply reflects the visitor's answers back and
 * points to a proper assessment. The disclaimer is always visible.
 */
export function Questionnaire() {
  const total = questionnaire.length;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  const q = questionnaire[step];
  const progress = done ? 100 : Math.round((step / total) * 100);

  function choose(option: string) {
    if (!started) {
      setStarted(true);
      track("questionnaire_started");
    }
    setAnswers((a) => ({ ...a, [q.id]: option }));
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setDone(true);
      track("questionnaire_completed");
    }
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setDone(false);
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-3xl border border-line bg-card shadow-card">
        {/* Progress */}
        <div className="border-b border-line px-6 py-4 sm:px-8">
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold text-pine">
              {done ? "اكتمل الاستبيان" : `سؤال ${step + 1} من ${total}`}
            </span>
            <span className="num text-muted">{progress}%</span>
          </div>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-sand">
            <div
              className="h-full rounded-full bg-honey transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Body */}
        {!done ? (
          <div className="px-6 py-8 sm:px-8">
            <h3 className="text-center text-xl font-bold text-ink sm:text-2xl">
              {q.question}
            </h3>
            <div
              role="group"
              aria-label={q.question}
              className={cn(
                "mt-6 grid gap-3",
                q.options.length > 2 ? "sm:grid-cols-2" : "sm:grid-cols-2",
              )}
            >
              {q.options.map((opt) => {
                const selected = answers[q.id] === opt;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => choose(opt)}
                    aria-pressed={selected}
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-2xl border px-5 py-4 text-start text-base font-medium transition-all duration-200",
                      selected
                        ? "border-pine bg-pine text-cream"
                        : "border-line bg-cream/60 text-ink hover:border-pine/40 hover:bg-pine-soft",
                    )}
                  >
                    {opt}
                    <Icon
                      name="arrow"
                      size={18}
                      className={selected ? "text-cream" : "text-line"}
                    />
                  </button>
                );
              })}
            </div>

            {step > 0 && (
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-pine"
                >
                  <Icon name="chevron" size={16} className="rotate-90" />
                  السؤال السابق
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="px-6 py-10 text-center sm:px-10">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-honey-soft text-honey-deep">
              <Icon name="spark" size={30} />
            </span>
            <h3 className="mt-5 text-2xl font-bold text-ink">
              الخطوة الأولى تبدأ بالتقييم الصحيح
            </h3>
            <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
              إجاباتك تساعدك على معرفة الخطوة الأولى المناسبة، لكن تحديد سبب تأخر
              الحمل يحتاج إلى تقييم طبي شامل.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <BookButton size="lg" withArrow source="questionnaire">
                احجزي موعدك مع د. محمد كلبوش
              </BookButton>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-sand"
              >
                ابدئي من جديد
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mt-4 flex items-center justify-center gap-2 text-center text-sm text-muted">
        <Icon name="shield" size={16} className="text-honey-deep" />
        الاستبيان للتوجيه فقط وليس تشخيصًا طبيًا.
      </p>
    </div>
  );
}
