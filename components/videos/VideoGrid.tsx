import type { VideoItem } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";
import { VideoCard } from "./VideoCard";

export function VideoGrid({ items }: { items: VideoItem[] }) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((v, i) => (
        <Reveal as="li" key={v.url} delay={(i % 4) * 60} className="h-full">
          <VideoCard video={v} />
        </Reveal>
      ))}
    </ul>
  );
}
