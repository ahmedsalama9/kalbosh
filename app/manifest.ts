import type { MetadataRoute } from "next";
import { doctor } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${doctor.name} — علاج تأخر الحمل والحقن المجهري`,
    short_name: "د. محمد كلبوش",
    description: doctor.title,
    start_url: "/",
    display: "standalone",
    lang: "ar",
    dir: "rtl",
    background_color: "#faf6f7",
    theme_color: "#6d2b86",
    icons: [
      { src: "/images/brand/logo-192.png", sizes: "192x192", type: "image/png" },
      { src: "/images/brand/logo-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
