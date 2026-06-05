import type { Viewport } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { defaultSiteMetadata } from "@/lib/metadata";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-thai",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata = defaultSiteMetadata;

export const viewport: Viewport = {
  themeColor: "#1f6f5a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${notoSansThai.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
