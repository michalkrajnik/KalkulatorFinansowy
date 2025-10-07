import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Navbar from "@/components/Navbar";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://kalkulatorfinansowy.com.pl";
const siteTitle =
  "Kalkulator Finansowy – Oblicz raty kredytu, porównaj oferty banków";
const siteDescription =
  "Kalkulator Finansowy – sprawdź swoją zdolność kredytową, porównaj oferty kredytów i leasingów. Darmowe narzędzia finansowe i aktualne oferty banków.";
const siteKeywords = [
  "kalkulator kredytowy",
  "kredyt hipoteczny",
  "kredyt gotówkowy",
  "raty",
  "porównywarka kredytów",
  "leasing",
  "finansowanie",
  "zdolność kredytowa",
];
const themeColor = "#2563eb";
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-XXXXXXXXXX";
const gaEnabled = GA_TRACKING_ID.startsWith("G-") && GA_TRACKING_ID !== "G-XXXXXXXXXX";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [{ name: "Kalkulator Finansowy" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Kalkulator Finansowy",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    author: "Kalkulator Finansowy",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta
          name="google-site-verification"
          content="tm-JX38XnlHKfmiQ4H-iPs82Np-ftKcDgTnUEBfpqLI"
        />
        <meta
          name="mylead-verification"
          content="c353c2d262f8e0944ca9bec650158594"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <div
          aria-hidden="true"
          className="hidden"
          dangerouslySetInnerHTML={{
            __html: "<!-- mylead-verification: c353c2d262f8e0944ca9bec650158594 -->",
          }}
        />
        {gaEnabled ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', { anonymize_ip: true });
                `,
              }}
            />
          </>
        ) : null}
        <Navbar />
        <ScrollProgressBar />
        {children}
        <ScrollToTopButton />
        <CookieBanner />
      </body>
    </html>
  );
}
