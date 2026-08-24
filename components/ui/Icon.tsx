import type { SVGProps } from "react";

/**
 * One line-icon system, drawn on a 24×24 grid with a consistent 1.6 stroke.
 * Covers service/feature glyphs plus the UI icons the site needs. Everything
 * uses currentColor so icons inherit tone from their container.
 */

export type IconGlyph =
  // features
  | "diagnosis"
  | "plan"
  | "experience"
  | "protocol"
  | "followup"
  | "answers"
  // services
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
  // brand / ui
  | "heart"
  | "route"
  | "shield"
  | "whatsapp"
  | "phone"
  | "clock"
  | "pin"
  | "calendar"
  | "arrow"
  | "chevron"
  | "menu"
  | "close"
  | "quote"
  | "check"
  | "play"
  | "expand"
  | "spark";

const paths: Record<IconGlyph, React.ReactNode> = {
  diagnosis: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-4.3-4.3" />
      <path d="M11 8.5v5M8.5 11h5" />
    </>
  ),
  plan: (
    <>
      <path d="M5 4h11l3 3v13H5z" />
      <path d="M9 11h6M9 15h4" />
      <path d="M15 4v3h4" />
    </>
  ),
  experience: (
    <>
      <path d="M12 3 4 6v5c0 4.5 3.3 8 8 10 4.7-2 8-5.5 8-10V6z" />
      <path d="m9 11.5 2 2 4-4.5" />
    </>
  ),
  protocol: (
    <>
      <path d="M8 3v4M16 3v4" />
      <circle cx="8" cy="10.5" r="1.4" />
      <circle cx="16" cy="13.5" r="1.4" />
      <path d="M8 12v6M16 3v9M8 16h5.5a2.5 2.5 0 0 0 2.5-2.5" />
    </>
  ),
  followup: (
    <>
      <path d="M3 12a9 9 0 1 1 3 6.7" />
      <path d="M3 20v-4h4" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  answers: (
    <>
      <path d="M20 5H4v11h4v3l4-3h8z" />
      <path d="M12 8.4a1.8 1.8 0 1 1 2 2.9c-.7.4-1 .8-1 1.5" />
      <path d="M13 14.6h.01" />
    </>
  ),
  seed: (
    <>
      <path d="M12 21c0-5 3-9 8-9-.4 5-3.6 8-8 9Z" />
      <path d="M12 21c0-5-3-9-8-9 .4 5 3.6 8 8 9Z" />
      <path d="M12 21v-8" />
    </>
  ),
  ivf: (
    <>
      <circle cx="12" cy="12" r="7" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 5v-.01M19 12h.01M12 19v.01M5 12H5" />
    </>
  ),
  insemination: (
    <>
      <path d="M14 3 21 10 10.5 20.5 3 21l.5-7.5z" />
      <path d="m12.5 6.5 5 5" />
      <path d="M5 19l3-3" />
    </>
  ),
  ovulation: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2M6.3 6.3l1.4 1.4M16.3 16.3l1.4 1.4M17.7 6.3l-1.4 1.4M7.7 16.3l-1.4 1.4" />
    </>
  ),
  pcos: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="9.5" cy="10" r="1.3" />
      <circle cx="14" cy="9.5" r="1" />
      <circle cx="13.5" cy="14" r="1.4" />
      <circle cx="9" cy="14.5" r="0.9" />
    </>
  ),
  gender: (
    <>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M12 13.5V21M9 18h6" />
    </>
  ),
  endometriosis: (
    <>
      <path d="M12 20c4-3 7-6 7-10a4 4 0 0 0-7-2.6A4 4 0 0 0 5 10c0 4 3 7 7 10Z" />
    </>
  ),
  miscarriage: (
    <>
      <path d="M12 20c4-3 7-6 7-10a4 4 0 0 0-7-2.6A4 4 0 0 0 5 10c0 4 3 7 7 10Z" />
      <path d="M9.5 12.5 15 7" />
    </>
  ),
  laparoscopy: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 4v4M12 4a3 3 0 0 0-3 3" />
      <circle cx="12" cy="13" r="2.5" />
    </>
  ),
  hysteroscopy: (
    <>
      <path d="M4 7h9l3 3v3l-3 3H4z" />
      <path d="M16 10h4v4h-4" />
      <path d="M8 10v4" />
    </>
  ),
  fibroids: (
    <>
      <path d="M6 13a6 6 0 0 1 12 0c0 3-2.5 5-6 5s-6-2-6-5Z" />
      <circle cx="10.5" cy="12" r="1.4" />
      <circle cx="14" cy="13.5" r="1" />
    </>
  ),
  "egg-freeze": (
    <>
      <ellipse cx="10" cy="13" rx="5" ry="6" />
      <path d="M19 4v8M15.5 5.5 19 8l3.5-2.5M15.5 10.5 19 8l3.5 2.5" />
    </>
  ),
  "embryo-freeze": (
    <>
      <circle cx="9.5" cy="11" r="3" />
      <circle cx="13.5" cy="14" r="2.4" />
      <path d="M19 4v9M16 6l3-2 3 2M16 11l3 2 3-2" />
    </>
  ),
  pgt: (
    <>
      <path d="M8 3c0 5 8 5 8 10s-8 5-8 10M16 3c0 5-8 5-8 10s8 5 8 10" />
      <path d="M9 8h6M9 16h6" />
    </>
  ),
  heart: <path d="M12 20c4.5-3.2 8-6.4 8-11a4.2 4.2 0 0 0-8-1.6A4.2 4.2 0 0 0 4 9c0 4.6 3.5 7.8 8 11Z" />,
  route: (
    <>
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="18" cy="18" r="2.2" />
      <path d="M8 6h6a3 3 0 0 1 0 6h-4a3 3 0 0 0 0 6h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 4 6v5c0 4.5 3.3 8 8 10 4.7-2 8-5.5 8-10V6z" />
    </>
  ),
  whatsapp: (
    <path
      d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.5-1.2A9 9 0 1 0 12 3Zm4.7 12.3c-.2.6-1.2 1.1-1.7 1.1-.4 0-1 .1-3.2-.9-2.6-1.1-4.2-3.8-4.3-4-.1-.2-1-1.3-1-2.5s.6-1.7.9-2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 1.9c.1.2.1.4 0 .6l-.4.6c-.1.2-.3.3-.1.6.1.3.7 1.1 1.4 1.7.9.8 1.6 1 1.9 1.2.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.2.1.4.2.5.3.1.3.1.7-.1 1.2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  phone: (
    <path d="M6.5 4h3l1.3 4-2 1.3a11 11 0 0 0 4.9 4.9l1.3-2 4 1.3v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4-4 7-7.2 7-11a7 7 0 1 0-14 0c0 3.8 3 7 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  arrow: <path d="M14 6l-6 6 6 6" />, // points to visual "next" in RTL (leftward)
  chevron: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  quote: (
    <path d="M9 7c-2.2 0-4 1.8-4 4v6h6v-6H7c0-1.1.9-2 2-2Zm10 0c-2.2 0-4 1.8-4 4v6h6v-6h-4c0-1.1.9-2 2-2Z" fill="currentColor" stroke="none" />
  ),
  check: <path d="m5 12 4.5 4.5L19 7" />,
  play: <path d="M8 5.5v13l11-6.5z" />,
  expand: (
    <>
      <path d="M14 4h6v6M10 20H4v-6" />
      <path d="M20 4l-7 7M4 20l7-7" />
    </>
  ),
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
};

export function Icon({
  name,
  size = 24,
  ...rest
}: { name: IconGlyph; size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {paths[name]}
    </svg>
  );
}
