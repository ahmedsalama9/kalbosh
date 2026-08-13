import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { articles } from "@/lib/articles";

export function LatestArticles() {
  return (
    <section className="bg-sand/50 py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="مقالات طبية"
          title="افهمي حالتك قبل ما تبدأي العلاج"
        />
        <div className="mt-12">
          <BlogGrid items={articles.slice(0, 3)} />
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/blog" variant="outline" withArrow>
            كل المقالات
          </Button>
        </div>
      </Container>
    </section>
  );
}
