import Link from "next/link";
import { Icon } from "./Icon";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./buttonStyles";

/**
 * A styled link for navigation ("read more", internal CTAs that don't need
 * conversion tracking). External URLs render a plain anchor. For tracked
 * conversion actions (book / whatsapp / phone) use the client CTAs instead.
 */
export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  external,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  external?: boolean;
  ariaLabel?: string;
}) {
  const cls = buttonClasses(variant, size, className);
  const inner = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {inner}
    </Link>
  );
}
