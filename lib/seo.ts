import type { Metadata } from "next";
import { siteUrl, doctor, clinic, clinics, phones } from "./site";

const defaultTitle = `${doctor.name} | علاج تأخر الحمل والحقن المجهري في طنطا`;
const defaultDescription =
  "د. محمد كلبوش، استشاري أمراض النساء والتوليد وعلاج تأخر الإنجاب والحقن المجهري في طنطا. خبرة أكثر من 17 عامًا، منها أكثر من 11 عامًا في علاج تأخر الإنجاب والإخصاب المساعد.";

/**
 * Build a page's Metadata with sane, non-duplicated defaults. Every page
 * passes a unique title/description and a path; canonical + OG are derived.
 */
export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = path === "/" ? siteUrl : `${siteUrl}${path}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      siteName: doctor.name,
      locale: "ar_EG",
      type,
      // og:image is injected automatically by app/opengraph-image.tsx
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const seoDefaults = { defaultTitle, defaultDescription };

/* ============================================================
   JSON-LD builders
   ============================================================ */

export function physicianJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `${siteUrl}/#physician`,
    name: doctor.name,
    alternateName: doctor.nameLatin,
    description: doctor.title,
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    medicalSpecialty: ["Gynecologic", "ReproductiveHealth"],
    telephone: phones.booking.tel,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.addressShort,
      addressLocality: doctor.city,
      addressCountry: "EG",
    },
    areaServed: clinics.map((c) => ({ "@type": "City", name: c.city })),
    location: clinics.map((c) => ({
      "@type": "MedicalClinic",
      name: `عيادة ${doctor.name} – ${c.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: c.addressShort,
        addressLocality: c.city,
        addressCountry: "EG",
      },
      telephone: c.booking.tel,
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...c.schedule.days],
        opens: c.schedule.opens,
        closes: c.schedule.closes,
      },
    })),
    availableService: [
      "علاج تأخر الحمل",
      "الحقن المجهري",
      "أطفال الأنابيب",
      "التلقيح الصناعي",
      "علاج ضعف التبويض",
      "علاج تكيس المبايض",
    ].map((name) => ({ "@type": "MedicalProcedure", name })),
    openingHoursSpecification: clinics.map((c) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...c.schedule.days],
      opens: c.schedule.opens,
      closes: c.schedule.closes,
    })),
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: doctor.name,
    url: siteUrl,
    inLanguage: "ar",
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function articleJsonLd(a: {
  title: string;
  description: string;
  slug: string;
  publishedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    inLanguage: "ar",
    datePublished: a.publishedAt,
    dateModified: a.publishedAt,
    author: { "@type": "Person", name: doctor.name },
    publisher: { "@type": "Person", name: doctor.name },
    mainEntityOfPage: `${siteUrl}/blog/${a.slug}`,
    image: `${siteUrl}/opengraph-image`,
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}

export function medicalProcedureJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    url: `${siteUrl}${path}`,
    inLanguage: "ar",
    performer: { "@id": `${siteUrl}/#physician` },
  };
}
