import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { SITE_URL, site } from "@/lib/site";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["thai", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-noto-thai",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.fullName} | ผ่อนคลายด้วยศาสตร์นวดไทยแท้`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "นวดแผนโบราณ",
    "นวดคลายเส้น",
    "นวดไทย",
    "นวดน้ำมัน",
    "ประคบสมุนไพร",
    "นวดฝ่าเท้า",
    "สปา",
    "ร้านนวดกรุงเทพ",
  ],
  authors: [{ name: site.fullName }],
  creator: site.fullName,
  applicationName: site.fullName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: SITE_URL,
    siteName: site.fullName,
    title: `${site.fullName} | ผ่อนคลายด้วยศาสตร์นวดไทยแท้`,
    description: site.shortDescription,
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1280,
        height: 853,
        alt: site.fullName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName}`,
    description: site.shortDescription,
    images: ["/images/hero-1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

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
