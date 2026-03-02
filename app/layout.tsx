import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { AnalyticsScript } from "@/app/_components/analytics-script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://revolveevents.com"),
  title: {
    default: "Velvet Vow Systems | Wedding Pro Template Store",
    template: "%s | Velvet Vow Systems",
  },
  description:
    "One-time payment template store for wedding planners, photographers, and venues. Digital systems priced from $5 to $250.",
  openGraph: {
    title: "Velvet Vow Systems | Wedding Pro Template Store",
    description:
      "One-time payment template store for wedding planners, photographers, and venues.",
    type: "website",
    url: "https://revolveevents.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable} antialiased`}>
        <AnalyticsScript />
        {children}
      </body>
    </html>
  );
}
