import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { VideoGrid } from "@/components/videos/VideoGrid";
import { videos } from "@/lib/data";

export function VideosSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="محتوى طبي"
          title="فيديوهات ومحتوى طبي"
          subtitle="معلومة بسيطة ممكن تغيّر فهمك لحالتك. مش لازم تستني زيارة الطبيب عشان تبدأي تفهمي."
        />
        <div className="mt-12">
          <VideoGrid items={videos.slice(0, 4)} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/videos" variant="outline" withArrow>
            كل الفيديوهات
          </Button>
        </div>
      </Container>
    </section>
  );
}
