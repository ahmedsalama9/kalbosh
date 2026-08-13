/**
 * Analytics abstraction. No tracking IDs are hardcoded — the layout reads
 * NEXT_PUBLIC_GA_ID / NEXT_PUBLIC_GTM_ID / NEXT_PUBLIC_FB_PIXEL_ID and only
 * loads a provider when its env var is present. `track` is a safe no-op until
 * a provider is wired up, so conversion events can be placed in the UI now.
 */

export type AnalyticsEvent =
  | "appointment_click"
  | "whatsapp_click"
  | "phone_click"
  | "questionnaire_started"
  | "questionnaire_completed"
  | "contact_form_submitted"
  | "appointment_form_submitted"
  | "article_view"
  | "video_click";

type Props = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, props?: Props): void {
  if (typeof window === "undefined") return;
  const w = window as unknown as {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  };
  try {
    w.dataLayer?.push({ event, ...props });
    w.gtag?.("event", event, props ?? {});
    w.fbq?.("trackCustom", event, props ?? {});
  } catch {
    /* analytics must never break the UI */
  }
}
