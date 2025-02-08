

import "@/styles/index.scss";
import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const metadata: Metadata = {
  title: "Kooponcraft",
  description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
  keywords: ["coupons", "nfts", "blockchain"],
  authors: { name: "Kooponcraft Team" },
  openGraph: {
    type: "website",
    url: `${baseUrl}`,
    title: "Kooponcraft - NFT Marketplace",
    description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
    siteName: "Kooponcraft",
    images: [
      {
        url: "/full_logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${baseUrl}`,
    creator: "@BemdooMaor",
    title: "Kooponcraft - NFT Marketplace",
    description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
    images: "/full_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body  suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
