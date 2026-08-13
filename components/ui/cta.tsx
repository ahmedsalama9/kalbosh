"use client";

import Link from "next/link";
import { track } from "@/lib/analytics";
import { whatsapp } from "@/lib/site";
import { Icon } from "./Icon";
import { buttonClasses, type ButtonSize, type ButtonVariant } from "./buttonStyles";

/** Primary conversion: book an appointment. Tracks `appointment_click`. */
export function BookButton({
  children = "احجزي موعدك",
  variant = "primary",
  size = "md",
  className,
  withArrow,
  source,
  onClick,
}: {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  withArrow?: boolean;
  source?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/appointment"
      className={buttonClasses(variant, size, className)}
      onClick={() => {
        track("appointment_click", { source });
        onClick?.();
      }}
    >
      {children}
      {withArrow && (
        <Icon
          name="arrow"
          size={18}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      )}
    </Link>
  );
}

/** WhatsApp contact. Tracks `whatsapp_click`. */
export function WhatsAppButton({
  children = "تواصلي عبر واتساب",
  variant = "whatsapp",
  size = "md",
  className,
  message,
  source,
}: {
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  message?: string;
  source?: string;
}) {
  return (
    <a
      href={whatsapp.href(message ?? whatsapp.defaultMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonClasses(variant, size, className)}
      onClick={() => track("whatsapp_click", { source })}
    >
      <Icon name="whatsapp" size={19} />
      {children}
    </a>
  );
}

/** Dialable phone number. Tracks `phone_click`. */
export function PhoneLink({
  tel,
  display,
  className,
  source,
}: {
  tel: string;
  display: string;
  className?: string;
  source?: string;
}) {
  return (
    <a
      href={`tel:${tel}`}
      className={className}
      onClick={() => track("phone_click", { source, number: display })}
      dir="ltr"
    >
      {display}
    </a>
  );
}
