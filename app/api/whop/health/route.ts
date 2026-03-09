import { NextResponse } from "next/server";

const REQUIRED_ENV = [
  "WHOP_API_KEY",
  "WHOP_WEBHOOK_SECRET",
  "WHOP_COMPANY_ID",
  "WHOP_SIG_SECRET",
  "CHECKOUT_TOKEN_SECRET",
  "LH_INTERNAL_SECRET",
  "LH_FULFILLMENT_SECRET",
  "LH_FULFILL_URL",
  "LH_SUCCESS_URL_BASE",
  "LH_CANCEL_URL",
] as const;

export async function GET() {
  const missing = REQUIRED_ENV.filter((k) => !process.env[k]);
  const set     = REQUIRED_ENV.filter((k) =>  process.env[k]);

  return NextResponse.json({
    ok:      missing.length === 0,
    set:     set.map((k) => `${k}: ✓`),
    missing: missing.map((k) => `${k}: ✗ MISSING`),
  });
}
