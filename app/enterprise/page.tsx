import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarketingStub from "@/components/legal/MarketingStub";
import { getMarketingMetadata, getMarketingPage } from "@/lib/legal/marketing";

const SLUG = "enterprise";
const page = getMarketingPage(SLUG);

export const metadata: Metadata = getMarketingMetadata(SLUG);

export default function Page_enterprise() {
  if (!page) notFound();
  return (
    <>
      <Navbar />
      <main className='relative min-h-screen overflow-x-hidden' id='content'>
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
