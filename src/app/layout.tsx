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

const siteUrl = "https://www.kalkulatorfinansowy.com.pl";
const sectionMetaTags: Record<string, string> = {
  "section-start-title": "Start – Kalkulator Finansowy",
  "section-start-description":
    "Wprowadzenie do serwisu z informacjami o narzędziach finansowych i nowościach.",
  "section-kalkulator-title": "Kalkulator kredytowy – oblicz ratę",
  "section-kalkulator-description":
    "Sekcja kalkulatora kredytowego, w której szybko sprawdzisz wysokość rat i koszty kredytu.",
  "section-oferty-title": "Oferty banków – aktualne propozycje finansowania",
  "section-oferty-description":
    "Zestawienie współprac i ofert kredytowych, które pomagają wybrać najlepsze finansowanie.",
  "section-artykuly-title": "Artykuły i poradniki finansowe",
  "section-artykuly-description":
    "Baza artykułów o kredytach, budżecie domowym i świadomym planowaniu finansów.",
  "section-kontakt-title": "Kontakt z Kalkulatorem Finansowym",
  "section-kontakt-description":
    "Informacje kontaktowe i możliwość bezpośredniego wysłania zapytania.",
  "section-faq-title": "Najczęstsze pytania o kredyty i finanse",
  "section-faq-description":
    "Sekcja FAQ z odpowiedziami na najczęstsze pytania o kredyty hipoteczne i gotówkowe.",
};
const themeColor = "#2563eb";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kalkulator Finansowy – Oblicz raty kredytu i porównaj oferty banków",
    template: "%s | Kalkulator Finansowy",
  },
  description:
    "Darmowy kalkulator kredytowy. Oblicz raty kredytu hipotecznego i gotówkowego. Porównaj oferty banków i znajdź najlepsze finansowanie dla siebie.",
  keywords: [
    "kalkulator kredytowy",
    "kredyt hipoteczny",
    "rata",
    "RRSO",
    "zdolność kredytowa",
    "porównywarka kredytów",
    "finanse osobiste",
  ],
  authors: [{ name: "Kalkulator Finansowy" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Kalkulator Finansowy",
    title: "Kalkulator Finansowy – oblicz raty i porównaj oferty banków",
    description:
      "Kalkulator finansowy online – sprawdź raty, RRSO i oferty kredytowe w jednym miejscu.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kalkulator Finansowy – porównaj kredyty i raty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulator Finansowy – oblicz raty kredytu i porównaj oferty banków",
    description:
      "Sprawdź swoją zdolność kredytową, porównaj oferty i oblicz raty kredytu hipotecznego online.",
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
    ...sectionMetaTags,
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
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z133B28LTJ"
          strategy="beforeInteractive"
          async
        />
        <Script id="ga4-inline" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Z133B28LTJ');`}
        </Script>
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
        <Navbar />
        <ScrollProgressBar />
        {children}
        <ScrollToTopButton />
        <CookieBanner />
      </body>
    </html>
  );
}
