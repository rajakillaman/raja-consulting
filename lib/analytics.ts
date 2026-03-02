declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type EventPayload = Record<string, string | number | boolean | undefined>;

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const event = { event: eventName, ...payload };

  if (!window.dataLayer) {
    window.dataLayer = [];
  }
  window.dataLayer.push(event);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }
}
