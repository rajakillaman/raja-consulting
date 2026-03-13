import crypto from "crypto";

const secret = () => process.env.CHECKOUT_TOKEN_SECRET!;

// ── Download token ──────────────────────────────────────────────────────────
// Issued after a successful Whop payment. Carries slug + expiry, signed with
// CHECKOUT_TOKEN_SECRET. No database required.

type DownloadPayload = { slug: string; exp: number };

export function createDownloadToken(slug: string, ttlSeconds = 7200): string {
  const exp = Math.floor(Date.now() / 1000) + ttlSeconds;
  const data = Buffer.from(JSON.stringify({ slug, exp } satisfies DownloadPayload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret()).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export function verifyDownloadToken(token: string): DownloadPayload | null {
  const dot = token.lastIndexOf(".");
  if (dot === -1) return null;
  const data = token.slice(0, dot);
  const sig = token.slice(dot + 1);
  const expected = crypto.createHmac("sha256", secret()).update(data).digest("base64url");
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return null;
  } catch {
    return null;
  }
  let payload: DownloadPayload;
  try {
    payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
  } catch {
    return null;
  }
  if (payload.exp < Math.floor(Date.now() / 1000)) return null;
  return payload;
}

// ── Checkout nonce ──────────────────────────────────────────────────────────
// Embedded in redirect_url when creating the Whop checkout config.
// Proves the user came through our checkout page — prevents crafted redirect URLs.
// Expires in 2 hours to cover slow/interrupted payment sessions.

type NoncePayload = { slug: string; exp: number };

export function createCheckoutNonce(slug: string): string {
  const exp = Math.floor(Date.now() / 1000) + 7200;
  const data = Buffer.from(JSON.stringify({ slug, exp } satisfies NoncePayload)).toString("base64url");
  const sig = crypto.createHmac("sha256", secret()).update(data).digest("base64url");
  return `${data}.${sig}`;
}

export function verifyCheckoutNonce(nonce: string, expectedSlug: string): boolean {
  const dot = nonce.lastIndexOf(".");
  if (dot === -1) return false;
  const data = nonce.slice(0, dot);
  const sig = nonce.slice(dot + 1);
  const expected = crypto.createHmac("sha256", secret()).update(data).digest("base64url");
  try {
    if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  } catch {
    return false;
  }
  let payload: NoncePayload;
  try {
    payload = JSON.parse(Buffer.from(data, "base64url").toString("utf8"));
  } catch {
    return false;
  }
  if (payload.exp < Math.floor(Date.now() / 1000)) return false;
  return payload.slug === expectedSlug;
}
