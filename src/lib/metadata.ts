import type { Metadata } from "next";
import { SITE_URL, site } from "@/lib/site";

export const SEO_KEYWORDS = [
  "นวดแผนโบราณ",
  "นวดคลายเส้น",
  "นวดไทย",
  "นวดน้ำมัน",
  "นวดน้ำมันอโรมา",
  "ประคบสมุนไพร",
  "นวดฝ่าเท้า",
  "สปา",
  "สปานวดไทย",
  "ร้านนวดกรุงเทพ",
  "ร้านนวดไทย",
  "นวดผ่อนคลาย",
  "นวดแผนโบราณ กรุงเทพ",
  "นวดคลายเส้น วัฒนา",
  "เรือนรื่นรมย์",
  "Ruen Ruen Rom",
] as const;

export const OG_IMAGE = {
  url: "/images/hero-1.webp",
  width: 1280,
  height: 853,
  alt: `${site.fullName} — บรรยากาศร้านนวดแผนโบราณ`,
  type: "image/webp",
} as const;

const DEFAULT_HOME_TITLE = `${site.fullName} | ผ่อนคลายด้วยศาสตร์นวดไทยแท้`;

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: `/${string}` | "/";
  image?: typeof OG_IMAGE;
  noIndex?: boolean;
};

function buildOpenGraph({
  title,
  description,
  path = "/",
  image = OG_IMAGE,
}: PageMetadataOptions): NonNullable<Metadata["openGraph"]> {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    type: "website",
    locale: "th_TH",
    alternateLocale: ["en_US"],
    url,
    siteName: site.fullName,
    title,
    description,
    images: [
      {
        url: image.url,
        width: image.width,
        height: image.height,
        alt: image.alt,
        type: image.type,
      },
    ],
  };
}

function buildTwitter({
  title,
  description,
  image = OG_IMAGE,
}: PageMetadataOptions): NonNullable<Metadata["twitter"]> {
  return {
    card: "summary_large_image",
    site: site.socials.twitter,
    creator: site.socials.twitter,
    title,
    description,
    images: [{ url: image.url, alt: image.alt }],
  };
}

export function createPageMetadata(options: PageMetadataOptions): Metadata {
  const path = options.path ?? "/";
  const canonical = path === "/" ? "/" : path;

  return {
    title: options.title,
    description: options.description,
    keywords: [...SEO_KEYWORDS],
    alternates: { canonical },
    openGraph: buildOpenGraph(options),
    twitter: buildTwitter(options),
    ...(options.noIndex
      ? { robots: { index: false, follow: false } }
      : {}),
  };
}

export const defaultSiteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_HOME_TITLE,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...SEO_KEYWORDS],
  authors: [{ name: site.fullName, url: SITE_URL }],
  creator: site.fullName,
  publisher: site.fullName,
  applicationName: site.fullName,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "th-TH": "/",
    },
  },
  openGraph: buildOpenGraph({
    title: DEFAULT_HOME_TITLE,
    description: site.shortDescription,
  }),
  twitter: buildTwitter({
    title: site.fullName,
    description: site.shortDescription,
  }),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
  other: {
    "geo.region": "TH-10",
    "geo.placename": site.address.city,
    "geo.position": `${site.geo.lat};${site.geo.lng}`,
    ICBM: `${site.geo.lat}, ${site.geo.lng}`,
    "og:email": site.email,
    "og:phone_number": site.phoneHref,
    "og:street-address": site.address.street,
    "og:locality": site.address.district,
    "og:region": site.address.city,
    "og:postal-code": site.address.postalCode,
    "og:country-name": site.address.country,
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};
