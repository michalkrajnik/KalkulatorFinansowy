import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

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

const siteUrl = "https://kalkulator-kredytowy.vercel.app";
const siteTitle =
  "Kalkulator kredytowy 2025 – oblicz ratę kredytu hipotecznego";
const siteDescription =
  "Darmowy kalkulator kredytowy online. Oblicz ratę kredytu hipotecznego lub gotówkowego. Sprawdź oferty banków.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  keywords: [
    "kalkulator kredytowy 2025",
    "oblicz ratę kredytu hipotecznego",
    "kredyt gotówkowy",
    "porównanie ofert banków",
    "rrso",
  ],
  authors: [{ name: "Kalkulator Kredytowy" }],
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: siteUrl,
    siteName: "Kalkulator Kredytowy",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@kalkulatorkredyt",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
