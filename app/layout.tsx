import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snap Pro — AI Studio for Everyone",
  description:
    "Upload a photo. Pick a service. Download a hero image. 17 professional AI editing services for e-commerce sellers. 25 free credits monthly.",
  icons: {
    // SVG is served at any resolution — modern Chrome/Firefox/Edge/Safari use this first
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    shortcut: "/icon.svg",
    // Apple home screen (180×180 is the canonical touch icon size)
    apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${syne.variable} ${dmSans.variable}`}
    >
      <body className='min-h-screen antialiased'>{children}</body>
    </html>
  );
}
