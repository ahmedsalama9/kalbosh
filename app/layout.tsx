import type { Metadata, Viewport } from "next";
import { El_Messiri, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";

import { siteUrl, doctor } from "@/lib/site";
import { seoDefaults, physicianJsonLd, websiteJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { JsonLd } from "@/components/ui/JsonLd";
import { AnalyticsScripts } from "@/components/analytics/AnalyticsScripts";

const display = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-el-messiri",
  display: "swap",
});

const body = IBM_Plex_Sans_Arabic({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoDefaults.defaultTitle,
    template: `%s | ${doctor.name}`,
  },
  description: seoDefaults.defaultDescription,
  applicationName: doctor.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    siteName: doctor.name,
    url: siteUrl,
    title: seoDefaults.defaultTitle,
    description: seoDefaults.defaultDescription,
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#faf6f7",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${display.variable} ${body.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        {/* No-JS fallback: scroll-reveal hides content with opacity until the
            observer fires, so reveal everything when scripting is unavailable.
            (With JS, content is still in the DOM for crawlers/screen readers.) */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <JsonLd data={[physicianJsonLd(), websiteJsonLd()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:rounded-full focus:bg-pine focus:px-4 focus:py-2 focus:text-cream"
        >
          تخطّي إلى المحتوى
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
        {/* Keeps the mobile action bar from covering footer content */}
        <div className="h-16 lg:hidden" aria-hidden="true" />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
