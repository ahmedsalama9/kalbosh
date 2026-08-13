"use client";

import { useState } from "react";
import { submitAppointment, type AppointmentPayload } from "@/lib/forms";
import { track } from "@/lib/analytics";
import { whatsapp } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { buttonClasses } from "@/components/ui/buttonStyles";
import { cn } from "@/lib/utils";

const field =
  "w-full rounded-xl border bg-cream/50 px-4 py-3 text-ink outline-none transition-colors placeholder:text-muted/60 focus:bg-card focus:ring-2 focus:ring-pine/15";
const timeSlots = ["2:00 م", "3:00 م", "4:00 م", "5:00 م", "6:00 م"];

type Errors = Partial<Record<"name" | "phone", string>>;

export function BookingForm() {
  const [form, setForm] = useState<AppointmentPayload>({
    name: "",
    phone: "",
    age: "",
    reason: "",
    priorTreatment: "",
    priorIvf: "",
    message: "",
    date: "",
    time: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const set = (k: keyof AppointmentPayload, v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  function validate(): boolean {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "من فضلك اكتبي الاسم.";
    if (!/^[0-9+\s]{8,}$/.test(form.phone.trim()))
      e.phone = "من فضلك اكتبي رقم هاتف صحيح.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      await submitAppointment(form);
      track("appointment_form_submitted", { source: "appointment-page" });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function whatsappHref() {
    const lines = [
      "طلب حجز موعد:",
      form.name && `الاسم: ${form.name}`,
      form.phone && `الهاتف: ${form.phone}`,
      form.age && `العمر: ${form.age}`,
      form.reason && `سبب الزيارة: ${form.reason}`,
      form.date && `التاريخ المفضل: ${form.date}`,
      form.time && `الوقت المفضل: ${form.time}`,
      form.message && `الرسالة: ${form.message}`,
    ].filter(Boolean);
    return whatsapp.href(lines.join("\n"));
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-line bg-card p-8 text-center shadow-soft">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-pine-soft text-pine">
          <Icon name="check" size={30} />
        </span>
        <h2 className="mt-5 text-2xl font-bold text-ink">تم استلام طلبك</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
          شكرًا لكِ. تم استلام طلب الحجز وسيتم التواصل معك لتأكيد الموعد. لو حابة
          تأكيد أسرع، تواصلي عبر واتساب.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={whatsapp.href(whatsapp.defaultMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses("whatsapp")}
          >
            <Icon name="whatsapp" size={18} /> تأكيد عبر واتساب
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setForm({
                name: "",
                phone: "",
                age: "",
                reason: "",
                priorTreatment: "",
                priorIvf: "",
                message: "",
                date: "",
                time: "",
              });
            }}
            className={buttonClasses("outline")}
          >
            طلب حجز جديد
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink">
            الاسم <span className="text-rose">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-err" : undefined}
            className={cn(field, errors.name ? "border-rose" : "border-line")}
            placeholder="اكتبي اسمك"
          />
          {errors.name && (
            <p id="name-err" className="mt-1.5 text-sm text-rose">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink">
            رقم الهاتف <span className="text-rose">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-err" : undefined}
            className={cn(field, "text-end", errors.phone ? "border-rose" : "border-line")}
            placeholder="01xxxxxxxxx"
          />
          {errors.phone && (
            <p id="phone-err" className="mt-1.5 text-sm text-rose">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="age" className="mb-1.5 block text-sm font-semibold text-ink">
            العمر
          </label>
          <input
            id="age"
            type="number"
            min={16}
            max={60}
            value={form.age}
            onChange={(e) => set("age", e.target.value)}
            className={cn(field, "border-line")}
            placeholder="اختياري"
          />
        </div>

        <div>
          <label htmlFor="reason" className="mb-1.5 block text-sm font-semibold text-ink">
            سبب الزيارة
          </label>
          <select
            id="reason"
            value={form.reason}
            onChange={(e) => set("reason", e.target.value)}
            className={cn(field, "border-line")}
          >
            <option value="">اختاري</option>
            <option>تأخر الحمل</option>
            <option>متابعة علاج</option>
            <option>استشارة عامة</option>
            <option>أخرى</option>
          </select>
        </div>

        <fieldset>
          <legend className="mb-1.5 text-sm font-semibold text-ink">
            هل سبق علاج تأخر الحمل؟
          </legend>
          <YesNo
            name="priorTreatment"
            value={form.priorTreatment ?? ""}
            onChange={(v) => set("priorTreatment", v)}
          />
        </fieldset>

        <fieldset>
          <legend className="mb-1.5 text-sm font-semibold text-ink">
            هل سبق إجراء حقن مجهري؟
          </legend>
          <YesNo
            name="priorIvf"
            value={form.priorIvf ?? ""}
            onChange={(v) => set("priorIvf", v)}
          />
        </fieldset>

        <div>
          <label htmlFor="date" className="mb-1.5 block text-sm font-semibold text-ink">
            التاريخ المفضل
          </label>
          <input
            id="date"
            type="date"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
            className={cn(field, "border-line")}
          />
        </div>

        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-semibold text-ink">
            الوقت المفضل
          </label>
          <select
            id="time"
            value={form.time}
            onChange={(e) => set("time", e.target.value)}
            className={cn(field, "border-line")}
          >
            <option value="">اختاري</option>
            {timeSlots.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink">
            الرسالة / الاستفسار
          </label>
          <textarea
            id="message"
            rows={4}
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            className={cn(field, "resize-y border-line")}
            placeholder="اكتبي أي تفاصيل تحبي نعرفها (اختياري)"
          />
        </div>
      </div>

      <p className="mt-5 flex items-start gap-2 rounded-xl bg-sand/70 p-3 text-sm text-muted">
        <Icon name="shield" size={18} className="mt-0.5 shrink-0 text-honey-deep" />
        هذا النموذج لطلب حجز موعد وليس لتقديم تشخيص طبي أو استشارة طبية طارئة.
      </p>

      {status === "error" && (
        <p className="mt-4 rounded-xl border border-rose/30 bg-rose-soft px-4 py-3 text-sm text-rose">
          حصلت مشكلة أثناء الإرسال. حاولي مرة أخرى أو تواصلي عبر واتساب.
        </p>
      )}

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className={buttonClasses("primary", "lg")}
        >
          {status === "loading" ? (
            <>
              <Spinner /> جاري الإرسال…
            </>
          ) : (
            <>
              إرسال طلب الحجز
              <Icon name="arrow" size={18} />
            </>
          )}
        </button>
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { source: "appointment-form" })}
          className={buttonClasses("whatsapp", "lg")}
        >
          <Icon name="whatsapp" size={19} /> الحجز عبر واتساب
        </a>
      </div>
    </form>
  );
}

function YesNo({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex gap-2">
      {["نعم", "لا"].map((opt) => {
        const selected = value === opt;
        return (
          <label
            key={opt}
            className={cn(
              "flex-1 cursor-pointer rounded-xl border px-4 py-2.5 text-center text-sm font-medium transition-colors",
              selected
                ? "border-pine bg-pine text-cream"
                : "border-line bg-cream/50 text-ink hover:border-pine/40",
            )}
          >
            <input
              type="radio"
              name={name}
              value={opt}
              checked={selected}
              onChange={() => onChange(opt)}
              className="sr-only"
            />
            {opt}
          </label>
        );
      })}
    </div>
  );
}

function Spinner() {
  return (
    <span
      className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-cream/40 border-t-cream"
      aria-hidden="true"
    />
  );
}
