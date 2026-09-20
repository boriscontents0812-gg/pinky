import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pinkyshoots.com"),
  title: "pinkyshoots",
  description: "Complete quick steps to submit your entry for the $500 Frankies Bikinis sweepstakes on pinkyshoots.",
  applicationName: "pinkyshoots",
  openGraph: {
    title: "pinkyshoots",
    description: "Follow the simple steps to enter the $500 Frankies Bikinis sweepstakes on pinkyshoots.",
    siteName: "pinkyshoots",
    type: "website",
    images: [
      {
        url: "/images/frankies-bikinis-500.png",
        width: 1265,
        height: 706,
        alt: "pinkyshoots - $500 Frankies Bikinis Reward",
      },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "pinkyshoots",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#FBF9F6",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Inter:wght@300;400;500;600;700;800&family=Nanum+Brush+Script&family=Nanum+Pen+Script&family=Phudu:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="alternate icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body className="min-h-full kree8-canvas text-[#193A42] font-sans selection:bg-[#FE7D79] selection:text-white antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
