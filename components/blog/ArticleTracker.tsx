"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

/** Fires `article_view` once when the article mounts. */
export function ArticleTracker({ slug }: { slug: string }) {
  useEffect(() => {
    track("article_view", { slug });
  }, [slug]);
  return null;
}
