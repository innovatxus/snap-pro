import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketingStub from "@/components/legal/MarketingStub";
import { getMarketingPage } from "@/lib/legal/marketing";

const SLUG = "customers";
const page = getMarketingPage(SLUG);

export const metadata: Metadata = page
  ? { title: `${page.title.en} — Snap Pro`, description: page.lede.en }
  : {};

export default function Page_customers() {
  if (!page) notFound();
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden" id="content">
        <MarketingStub
          eyebrow={page.eyebrow}
          title={page.title}
          lede={page.lede}
          body={page.body}
          ctas={page.ctaPrimary ? [page.ctaPrimary] : undefined}
          draft={page.draft}
        />
        <Footer />
      </main>
    </>
  );
}
