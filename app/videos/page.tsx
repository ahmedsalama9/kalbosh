import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { VideoGrid } from "@/components/videos/VideoGrid";
import { CTASection } from "@/components/sections/CTASection";
import { videos } from "@/lib/data";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "فيديوهات ومحتوى طبي",
  description:
    "فيديوهات ومحتوى طبي مبسّط عن علاج تأخر الحمل، الحقن المجهري، تكيس المبايض، ضعف التبويض وغيرها مع د. محمد كلبوش.",
  path: "/videos",
});

export default function VideosPage() {
  return (
    <>
      <PageHeader
        eyebrow="محتوى طبي"
        title="فيديوهات ومحتوى طبي"
        subtitle="معلومة بسيطة ممكن تغيّر فهمك لحالتك. مش لازم تستني زيارة الطبيب عشان تبدأي تفهمي."
        crumbs={[{ name: "الفيديوهات", path: "/videos" }]}
      />
      <section className="py-14 sm:py-16">
        <Container>
          <VideoGrid items={videos} />
        </Container>
      </section>
      <CTASection
        eyebrow="بعد ما تفهمي أكثر"
        title="خطوتك الجاية موعد للتقييم"
        body="المحتوى بيساعدك تفهمي، لكن حالتك تستحق تقييمًا خاصًا بيها. احجزي موعدك."
        source="videos"
      />
    </>
  );
}
