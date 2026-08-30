import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSenseLoader from "@/components/AdSenseLoader";
import VisitorTracking from "@/components/VisitorTracking";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "2026 추석 기차표 예매 일정 총정리, KTX SRT 통합 후 어디서 예매하나요",
  description: SITE_DESCRIPTION,
  alternates: {
    types: {
      "application/rss+xml": `${SITE_URL}/feed.xml`,
    },
  },
  verification: {
    other: {
      "naver-site-verification": "d1ff9104073f9d1990c9ca46d8791791e4d2a33a",
    },
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: SITE_NAME,
    title: "2026 추석 기차표 예매 일정 총정리",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <AdSenseLoader />
        <Suspense fallback={null}>
          <VisitorTracking />
        </Suspense>
      </body>
    </html>
  );
}
