/**
 * Central site configuration — the single source of truth for clinic
 * details, contact numbers, navigation and brand strings. Everything the
 * UI renders about "who / where / how to reach" comes from here so a future
 * CMS (or a phone-number change) touches one file.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.dr-kalboush.com";

export const doctor = {
  name: "د. محمد كلبوش",
  nameLatin: "Dr. Mohamed Kalboush",
  title:
    "استشاري أمراض النساء والتوليد وعلاج تأخر الإنجاب والحقن المجهري",
  shortTitle: "استشاري النساء والتوليد وعلاج تأخر الإنجاب",
  city: "طنطا",
} as const;

/** Phone numbers. `display` is what the visitor reads; `tel` is dialable. */
export const phones = {
  booking: { label: "الحجز", display: "01555384940", tel: "+201555384940" },
  doctor: { label: "الطبيب", display: "01555849436", tel: "+201555849436" },
  emergency: {
    label: "الطوارئ",
    display: "01550536533",
    tel: "+201550536533",
  },
} as const;

/** WhatsApp uses the booking number in international format. */
export const whatsapp = {
  number: "201555384940",
  href: (message?: string) =>
    `https://wa.me/201555384940${
      message ? `?text=${encodeURIComponent(message)}` : ""
    }`,
  defaultMessage:
    "السلام عليكم، حابة أستفسر عن حجز موعد للكشف وتقييم تأخر الحمل.",
} as const;

export const clinic = {
  addressLines: [
    "طنطا – شارع القاضي مع شارع البحر",
    "فوق بنك دبي الإمارات الوطني",
    "الدور الخامس",
  ],
  addressShort: "طنطا – شارع القاضي مع شارع البحر",
  hours: {
    lines: ["كل يوم ماعدا الخميس والجمعة", "من 2 ظهرًا إلى 6 مساءً"],
    // Machine-readable for JSON-LD (Sat–Wed, 14:00–18:00)
    opens: "14:00",
    closes: "18:00",
    days: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
    ] as const,
  },
} as const;

/** A single navigable destination (may carry a one-line hint for menus). */
export type NavLink = { label: string; href: string; desc?: string };
/** A top-level nav entry: either a direct link, or a group with a submenu.
 *  Groups may also be clickable (via `href`) to a landing page. */
export type NavItem =
  | NavLink
  | { key: string; label: string; href?: string; children: NavLink[] };

/** Primary navigation — grouped into submenus. Order matters. */
export const nav: NavItem[] = [
  { label: "الرئيسية", href: "/" },
  {
    key: "doctor",
    label: "عن الدكتور",
    href: "/about",
    children: [
      { label: "عن د. محمد", href: "/about", desc: "الخبرة والمؤهلات والرؤية" },
      { label: "رحلة العلاج", href: "/treatment-journey", desc: "خطوات من التشخيص حتى النتيجة" },
      { label: "قصص النجاح", href: "/success-stories", desc: "تجارب ملهمة (نماذج توضيحية)" },
    ],
  },
  {
    key: "services",
    label: "الخدمات",
    href: "/services",
    children: [
      { label: "تشخيص وعلاج تأخر الحمل", href: "/services/infertility-treatment" },
      { label: "الحقن المجهري وأطفال الأنابيب", href: "/services/ivf" },
      { label: "التلقيح الصناعي", href: "/services/artificial-insemination" },
      { label: "تنشيط وعلاج ضعف التبويض", href: "/services/ovulation-induction" },
      { label: "علاج تكيّس المبايض", href: "/services/pcos" },
      { label: "تحديد نوع الجنين", href: "/services/gender-selection" },
      { label: "كل الخدمات", href: "/services", desc: "عرض الخدمات كاملةً" },
    ],
  },
  {
    key: "content",
    label: "المحتوى",
    children: [
      { label: "الفيديوهات", href: "/videos", desc: "شرح مبسّط بالصوت والصورة" },
      { label: "المقالات", href: "/blog", desc: "مقالات موثوقة عن تأخر الحمل" },
      { label: "الأسئلة الشائعة", href: "/faq", desc: "إجابات سريعة على استفساراتك" },
    ],
  },
  { label: "تواصل معنا", href: "/contact" },
];

/** True when a nav item is a group (has a submenu). */
export function isNavGroup(
  item: NavItem,
): item is Extract<NavItem, { children: NavLink[] }> {
  return "children" in item;
}

/** Flat list of every destination — used by the footer sitemap column. */
export const footerNav: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "عن د. محمد", href: "/about" },
  { label: "الخدمات", href: "/services" },
  { label: "رحلة العلاج", href: "/treatment-journey" },
  { label: "قصص النجاح", href: "/success-stories" },
  { label: "الفيديوهات", href: "/videos" },
  { label: "المقالات", href: "/blog" },
  { label: "الأسئلة الشائعة", href: "/faq" },
  { label: "تواصل معنا", href: "/contact" },
];

/** Social links — placeholders, easy to wire up later. */
export const social: { label: string; href: string; key: string }[] = [
  { key: "facebook", label: "فيسبوك", href: "https://www.facebook.com/" },
  { key: "instagram", label: "إنستجرام", href: "#" },
  { key: "youtube", label: "يوتيوب", href: "#" },
];

export const brand = {
  message:
    "علاج تأخر الحمل يبدأ بفهم السبب والتشخيص الصحيح، وليس بافتراض أن الحقن المجهري هو الحل للجميع.",
  promise:
    "مكان يفهم حالتك، يختار لكِ العلاج المناسب، ويكون معاكِ خطوة بخطوة.",
} as const;
