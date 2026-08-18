"use client";

import Image from "next/image";
import type { VideoItem } from "@/lib/types";
import { track } from "@/lib/analytics";
import { Icon } from "@/components/ui/Icon";

/** Links out to the reel (Facebook) — the page never depends on an iframe. */
export function VideoCard({ video }: { video: VideoItem }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("video_click", { title: video.title })}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
    >
      <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br from-pine to-pine-dark text-cream">
        {video.poster && (
          <>
            <Image
              src={video.poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Keeps the play button and topic chip readable over any frame. */}
            <span
              className="absolute inset-0 bg-gradient-to-t from-pine-deep/65 via-pine-deep/15 to-pine-deep/30"
              aria-hidden="true"
            />
          </>
        )}
        <span className="relative grid h-14 w-14 place-items-center rounded-full bg-cream/20 backdrop-blur transition-transform duration-300 group-hover:scale-110">
          <Icon name="play" size={26} className="text-cream" />
        </span>
        <span className="absolute top-3 end-3 rounded-full bg-pine-deep/60 px-2.5 py-1 text-[0.7rem] font-medium text-cream backdrop-blur">
          {video.topic}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-bold text-ink">{video.title}</h3>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-pine">
          مشاهدة الفيديو
          <Icon
            name="arrow"
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </span>
      </div>
    </a>
  );
}
