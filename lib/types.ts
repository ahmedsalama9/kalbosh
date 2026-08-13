/** Content models — kept flat and CMS-friendly. */

export type IconName =
  | "diagnosis"
  | "plan"
  | "experience"
  | "protocol"
  | "followup"
  | "answers"
  | "seed"
  | "ivf"
  | "insemination"
  | "ovulation"
  | "pcos"
  | "gender"
  | "endometriosis"
  | "miscarriage"
  | "laparoscopy"
  | "hysteroscopy"
  | "fibroids"
  | "egg-freeze"
  | "embryo-freeze"
  | "pgt"
  | "heart"
  | "route"
  | "shield";

export type Service = {
  slug: string;
  title: string;
  shortTitle?: string;
  excerpt: string;
  icon: IconName;
  featured?: boolean;
  /** Long-form body for the service detail page. */
  intro: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  keywords: string[];
};

export type Feature = {
  title: string;
  description: string;
  icon: IconName;
};

export type JourneyStep = {
  step: string; // "01"
  title: string;
  description: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Testimonial = {
  name: string;
  text: string;
  treatment?: string;
  image?: string;
};

export type SuccessStory = {
  title: string;
  summary: string;
  treatment: string;
  hasVideo?: boolean;
};

export type VideoItem = {
  title: string;
  topic: string;
  url: string;
};

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date
  readingMinutes: number;
  relatedService?: string; // service slug
  body: ArticleBlock[];
};
