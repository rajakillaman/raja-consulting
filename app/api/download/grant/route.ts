import { NextRequest, NextResponse } from "next/server";
import { verifyCheckoutNonce, createDownloadToken } from "@/lib/product-download";
import { getProductBySlug } from "@/app/_data/products";

// Whop calls this URL after payment with ?status=success|error appended.
// We verify the signed nonce (proves user came through our checkout page),
// then issue a time-limited download token and redirect to the download page.
export async function GET(req: NextRequest) {
  const slug  = req.nextUrl.searchParams.get("slug")  ?? "";
  const nonce = req.nextUrl.searchParams.get("nonce") ?? "";
  const status = req.nextUrl.searchParams.get("status") ?? "error";

  // Verify nonce — ensures this request originated from our checkout flow
  if (!slug || !verifyCheckoutNonce(nonce, slug)) {
    return NextResponse.redirect("https://revolveevents.com/catalog", { status: 302 });
  }

  // Verify the product exists and has a downloadable file
  const product = getProductBySlug(slug);
  if (!product?.downloadFile) {
    return NextResponse.redirect("https://revolveevents.com/catalog", { status: 302 });
  }

  // Payment failed or user cancelled
  if (status !== "success") {
    return NextResponse.redirect(
      `https://revolveevents.com/products/${slug}?checkout=cancelled`,
      { status: 302 }
    );
  }

  // Issue a 2-hour download token and send the user to the download page
  const token = createDownloadToken(slug);
  const downloadUrl =
    `https://revolveevents.com/download/${encodeURIComponent(slug)}` +
    `?token=${encodeURIComponent(token)}`;

  return NextResponse.redirect(downloadUrl, { status: 302 });
}
