"use client";

import { useState } from "react";
import { submitContact, type ContactPayload } from "@/lib/forms";
import { track } from "@/lib/analytics";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/buttonStyles";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border bg-cream/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:bg-card focus:ring-2 focus:ring-pine/15";

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>({
    name: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<ContactPayload>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const set = (k: keyof ContactPayload, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const err: Partial<ContactPayload> = {};
    if (!form.name.trim()) err.name = "من فضلك اكتبي الاسم.";
    if (!/^[0-9+\s]{8,}$/.test(form.phone.trim())) err.phone = "رقم غير صحيح.";
    if (!form.message.trim()) err.message = "من فضلك اكتبي رسالتك.";
    setErrors(err);
    if (Object.keys(err).length) return;
    setStatus("loading");
    try {
      await submitContact(form);
      track("contact_form_submitted");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-card p-8 text-center shadow-soft">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-pine-soft text-pine">
          <Icon name="check" size={26} />
        </span>
        <h3 className="mt-4 text-xl font-bold text-ink">تم إرسال رسالتك</h3>
        <p className="mt-2 text-muted">شكرًا لتواصلك، سيتم الرد عليك قريبًا.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-line bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-4">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-semibold text-ink">
            الاسم <span className="text-rose">*</span>
          </label>
          <input
            id="c-name"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            className={cn(field, errors.name ? "border-rose" : "border-line")}
            placeholder="اكتبي اسمك"
          />
          {errors.name && <p className="mt-1.5 text-sm text-rose">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-semibold text-ink">
            رقم الهاتف <span className="text-rose">*</span>
          </label>
          <input
            id="c-phone"
            type="tel"
            dir="ltr"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            className={cn(field, "text-end", errors.phone ? "border-rose" : "border-line")}
            placeholder="01xxxxxxxxx"
          />
          {errors.phone && <p className="mt-1.5 text-sm text-rose">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="c-msg" className="mb-1.5 block text-sm font-semibold text-ink">
            رسالتك <span className="text-rose">*</span>
          </label>
          <textarea
            id="c-msg"
            rows={4}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            aria-invalid={!!errors.message}
            className={cn(field, "resize-y", errors.message ? "border-rose" : "border-line")}
            placeholder="اكتبي استفسارك"
          />
          {errors.message && (
            <p className="mt-1.5 text-sm text-rose">{errors.message}</p>
          )}
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-rose/30 bg-rose-soft px-4 py-3 text-sm text-rose">
          حصلت مشكلة أثناء الإرسال. حاولي مرة أخرى.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(buttonClasses("primary", "lg"), "mt-6 w-full")}
      >
        {status === "loading" ? "جاري الإرسال…" : "إرسال الرسالة"}
      </button>
    </form>
  );
}
