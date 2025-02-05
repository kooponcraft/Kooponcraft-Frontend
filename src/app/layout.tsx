import { Metadata } from "next";
import "@/styles/globals.css";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

export const metadata: Metadata = {
  title: {
    template: "%s - NFT Marketplace",
    default: "Kooponcraft - NFT Martketplace",
    absolute: "Kooponcraft - NFT Marketplace"
  },
  // description: "Elevate your learning, Elevate your GPA",
  openGraph: {
    type: "website",
    url: `${baseUrl}`,
    title: "Kooponcraft - NFT Martketplace",
    // description: "Elevate your learning, Elevate your GPA",
    siteName: "Kooponcraft",
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: `${baseUrl}`,
    creator: "@BemdooMaor",
    title: "Kooponcraft - NFT Martketplace",
    // description: "Elevate your learning, Elevate your GPA",
    images: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head> 
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        /> 
      </head>
      <body  suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
