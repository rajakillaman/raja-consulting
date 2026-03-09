import crypto from "crypto";

// ── Timing-safe string compare ─────────────────────────────────────────────────
export function timingSafeEqual(a: string, b: string): boolean {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// ── Sign / verify WC order ID for result redirect ─────────────────────────────
export function signOrderId(orderId: number | string): string {
  return crypto
    .createHmac("sha256", process.env.WHOP_SIG_SECRET!)
    .update(String(orderId))
    .digest("hex");
}

export function verifyOrderSig(orderId: number | string, sig: string): boolean {
  const expected = signOrderId(orderId);
  try {
    return crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected));
  } catch {
    return false;
  }
}

// ── Stateless signed checkout token ───────────────────────────────────────────
// Token encodes { wc_order_id, purchase_url, exp } signed with HMAC-SHA256.
// No database required — the purchase_url is carried in the token itself.

type CheckoutPayload = {
  wc_order_id: number;
  purchase_url: string;
  exp: number; // Unix timestamp (seconds)
};

export function createCheckoutToken(
  wcOrderId: number,
  purchaseUrl: string,
  ttlSeconds = 1800 // 30 minutes
): string {
  const payload: CheckoutPayload = {
    wc_order_id: wcOrderId,
    purchase_url: purchaseUrl,
    exp: Math.floor(Date.now() / 1000) + ttlSeconds,
  };
  const data = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto
    .createHmac("sha256", process.env.CHECKOUT_TOKEN_SECRET!)
    .update(data)
    .digest("base64url");
  return `${data}.${sig}`;
}

export function verifyCheckoutToken(token: string): CheckoutPayload | null {
  const dot = token.lastIndexOf(".");
  if (dot === -1) return null;

  const data = token.slice(0, dot);
  const sig  = token.slice(dot + 1);

  const expectedSig = crypto
    .createHmac("sha256", process.env.CHECKOUT_TOKEN_SECRET!)
    .update(data)
    .digest("base64url");

  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expectedSig))) {
      return null;
    }
  } catch {
    return null;
  }

  let payload: CheckoutPayload;
  try {
    payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
  } catch {
    return null;
  }

  // Check expiry
  if (payload.exp < Math.floor(Date.now() / 1000)) {
    return null;
  }

  return payload;
}

// ── Normalise Whop webhook secret for svix ────────────────────────────────────
// Whop issues secrets as ws_<hex>. svix expects whsec_<base64>.
// The full ws_... string (including prefix) is the raw HMAC key — do NOT hex-decode it.
export function normaliseWhopSecret(raw: string): string {
  if (raw.startsWith("whsec_")) return raw;
  return `whsec_${Buffer.from(raw).toString("base64")}`;
}
