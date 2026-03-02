"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type ViewTrackerProps = {
  eventName: string;
  payload?: Record<string, string | number | boolean | undefined>;
};

export function ViewTracker({ eventName, payload }: ViewTrackerProps) {
  useEffect(() => {
    trackEvent(eventName, payload);
  }, [eventName, payload]);

  return null;
}
