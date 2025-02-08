

import "@/styles/index.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kooponcraft",
  description: "Welcome to Kooponcraft - a gamified NFT marketplace for coupons",
  keywords: ["coupons", "nfts", "blockchain"],
  authors: { name: "Kooponcraft Team" },
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
