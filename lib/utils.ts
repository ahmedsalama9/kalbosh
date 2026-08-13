/** Small, dependency-free helpers. */

/** Join class names, dropping falsy values. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

/** Format an ISO date as Arabic (Gregorian) long date, e.g. ٦ أغسطس ٢٠٢٦. */
export function formatArabicDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

/** "٥ دقائق قراءة" helper. */
export function readingLabel(minutes: number): string {
  return `${minutes} دقائق قراءة`;
}
