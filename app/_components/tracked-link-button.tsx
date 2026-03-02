"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  eventName: string;
  eventPayload?: Record<string, string | number | boolean | undefined>;
};

export function TrackedLinkButton({
  href,
  children,
  className,
  eventName,
  eventPayload,
}: TrackedLinkButtonProps) {
  const handleClick = () => {
    trackEvent(eventName, eventPayload);
  };

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
