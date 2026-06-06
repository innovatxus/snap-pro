import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces, Syne } from "next/font/google";
import ScrollFloater from "@/components/ScrollFloater";
import { LocaleProvider } from "@/components/legal/LocaleProvider";
import ConsentBanner from "@/components/legal/ConsentBanner";
import "./globals.css";

// Inline script: read the persisted locale before hydration so RTL pages render
// in the correct direction on first paint and avoid a layout flash.
const LOCALE_BOOTSTRAP = `(function(){try{var l=localStorage.getItem('snap-locale');if(l==='ar'){document.documentElement.setAttribute('dir','rtl');document.documentElement.setAttribute('lang','ar');}}catch(e){}})();`;

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

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://snappro.app",
  ),
  title: "Snap Pro — AI Studio for Everyone",
  description:
    "Upload a photo. Pick a service. Download a hero image. 17 professional AI editing services for e-commerce sellers. 25 free credits monthly.",
  applicationName: "Snap Pro",
  icons: {
    // SVG is served at any resolution — modern Chrome/Firefox/Edge/Safari use this first
    icon: [{ url: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
    shortcut: "/icon.svg",
    // Apple home screen (180×180 is the canonical touch icon size)
    apple: [{ url: "/icon.svg", sizes: "180x180", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Snap Pro",
    title: "Snap Pro — AI Studio for Everyone",
    description:
      "17 professional AI editing services for e-commerce sellers. 25 free credits monthly.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Snap Pro logo card — AI Studio for Everyone",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Snap Pro — AI Studio for Everyone",
    description:
      "17 professional AI editing services for e-commerce sellers. 25 free credits monthly.",
    images: [
      {
        url: "/twitter-image",
        alt: "Snap Pro logo card — AI Studio for Everyone",
      },
    ],
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
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} ${syne.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external image CDNs used by gallery and bento sections */}
        <link rel='preconnect' href='https://images.unsplash.com' />
        <link rel='dns-prefetch' href='https://images.unsplash.com' />
        <script dangerouslySetInnerHTML={{ __html: LOCALE_BOOTSTRAP }} />
      </head>
      <body className='min-h-screen antialiased' suppressHydrationWarning>
        <a href='#content' className='skip-link'>
          Skip to content
        </a>
        <LocaleProvider>
          {children}
          <ScrollFloater />
          <ConsentBanner />
        </LocaleProvider>
      </body>
    </html>
  );
}
