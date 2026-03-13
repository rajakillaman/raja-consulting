import { NextRequest, NextResponse } from "next/server";
import { verifyDownloadToken } from "@/lib/product-download";
import { getProductBySlug } from "@/app/_data/products";
import fs from "fs/promises";
import path from "path";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const token = req.nextUrl.searchParams.get("token") ?? "";

  // Verify the download token
  const payload = verifyDownloadToken(token);
  if (!payload || payload.slug !== slug) {
    return new NextResponse("Invalid or expired download link.", { status: 403 });
  }

  // Verify the product exists and has a downloadable file
  const product = getProductBySlug(slug);
  if (!product?.downloadFile) {
    return new NextResponse("File not found.", { status: 404 });
  }

  // Read the file from _private/downloads/ (outside public directory)
  const filePath = path.join(process.cwd(), "_private", "downloads", product.downloadFile);
  let fileBuffer: Buffer;
  try {
    fileBuffer = await fs.readFile(filePath);
  } catch {
    console.error(`Download file missing: ${filePath}`);
    return new NextResponse("File not available.", { status: 404 });
  }

  // Serve with Content-Disposition: attachment so browser downloads it
  const filename = product.downloadFile;
  return new NextResponse(fileBuffer.buffer as ArrayBuffer, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
