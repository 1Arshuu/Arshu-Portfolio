import type { Metadata, Viewport } from "next";
import { Cormorant, Jost } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/ui/SmoothScroll";
import GrainOverlay from "@/components/ui/GrainOverlay";
import SplashCursor from "@/components/ui/SplashCursor";
import Background from "@/components/ui/Background";

/* ----------------------- FONTS (next/font, no FOUC) -----------------------
   Two families only: Cormorant (elegant serif — display / italic accents)
   and Jost (geometric sans — headings, body, labels).                       */
const cormorant = Cormorant({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

/* --------------------------------- SEO ----------------------------------- */
const SITE_URL = "https://arshukhan.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Arshu Khan — App Developer & Digital Marketer",
  description:
    "I build apps and run marketing. Self-made, India-based. Flutter, Next.js, Meta Ads, SEO.",
  keywords: [
    "Arshu Khan",
    "App Developer India",
    "Digital Marketer India",
    "Flutter Developer",
    "Next.js Developer",
    "Meta Ads",
    "SEO",
  ],
  authors: [{ name: "Arshu Khan" }],
  creator: "Arshu Khan",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    title: "Arshu Khan — App Developer & Digital Marketer",
    description:
      "I handle the development & marketing. You handle the sales. Flutter, Next.js, Meta Ads, SEO.",
    siteName: "Arshu Khan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arshu Khan — App Developer & Digital Marketer",
    description:
      "I handle the development & marketing. You handle the sales. Flutter, Next.js, Meta Ads, SEO.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#080808",
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
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
    >
      <body className="bg-void text-ink font-body">
        <Background />
        <SplashCursor />
        <GrainOverlay />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
