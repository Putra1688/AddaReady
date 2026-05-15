import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://addaready.vercel.app"),
  title: {
    default: "AddaReady - Website Portofolio & Branding Digital",
    template: "%s | AddaReady",
  },
  description: "AddaReady membangun representasi digital yang elegan, cepat, dan dengan harga yang terjangkau. Jasa pembuatan website portofolio dan branding profesional terbaik.",
  keywords: ["website portofolio", "branding digital", "jasa website", "template premium", "AddaReady"],
  authors: [{ name: "AddaReady Studio" }],
  creator: "AddaReady Studio",
  publisher: "AddaReady Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://addaready.vercel.app",
    siteName: "AddaReady",
    title: "AddaReady - Website Portofolio & Branding Digital",
    description: "Bangun representasi digital Anda dengan estetika dan performa tinggi.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AddaReady Premium Website Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AddaReady - Website Portofolio & Branding Digital",
    description: "Bangun representasi digital Anda dengan estetika dan performa tinggi.",
    images: ["/og-image.png"],
    creator: "@addaready",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "AQHgTCrxwhkMEHllfc_TqnHOKuGRBAwQw13kDxIrPG4",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
