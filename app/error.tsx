"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/buttonStyles";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface for future error reporting.
    console.error(error);
  }, [error]);

  return (
    <section className="grid place-items-center py-24 sm:py-32">
      <Container size="narrow" className="text-center">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-rose-soft text-rose">
          <Icon name="shield" size={30} />
        </span>
        <h1 className="mt-6 text-2xl font-bold text-ink">حصل خطأ ما</h1>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          نعتذر، حدث خطأ غير متوقع. حاولي إعادة تحميل الصفحة، ولو استمرت المشكلة
          تواصلي معنا.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={reset} className={buttonClasses("primary")}>
            إعادة المحاولة
          </button>
          <Link href="/" className={buttonClasses("outline")}>
            العودة للرئيسية
          </Link>
        </div>
      </Container>
    </section>
  );
}
