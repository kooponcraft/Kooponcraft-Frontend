

import "../styles/index.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <head> 
      <link rel="icon" href="favicon.png" sizes="any" />
      <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        /> 
      </head>
      <body  suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
