export const runtime = "nodejs";

import FooterOne from "@/layouts/footers/FooterOne";
import Header from "@/layouts/headers/Header";
import "@/styles/index.scss";
import { Metadata } from "next";
import Provider from "./provider";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Kooponcraft",
  description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
  keywords: ["coupons", "nfts", "blockchain"],
  authors: { name: "Kooponcraft Team" },
  icons: {
    icon: {
      url: "assets/img/favicon_io/favicon-nbg.png",
      sizes: "any",
      type: "image/png",
    },
    apple: [
      {
        url: "/assets/img/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        url: "/assets/img/favicon_io/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/assets/img/favicon_io/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: `${baseUrl}`,
    title: "Kooponcraft - NFT Marketplace",
    description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
    siteName: "Kooponcraft",
    images: [
      {
        url: "/assets/img/KooponCraft Logo (1)/1.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${baseUrl}`,
    creator: "@kooponcraft",
    title: "Kooponcraft - NFT Marketplace",
    description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
    images: "/assets/img/KooponCraft Logo (1)/1.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <Provider>
        <body>
          <Header />
          {children}
          <FooterOne />
        </body>
      </Provider>
    </html>
  );
}
