import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalArticle from "@/components/legal/LegalArticle";
import { getPage } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Trust Center — ShotStudio",
  description:
    "ShotStudio's Trust Center: security, compliance, privacy, sub-processors, status, and incident response.",
};

export default function TrustHubPage() {
  const page = getPage("trust", "index");
  if (!page) return null;
  return (
    <>
      <Navbar />
      <main className='relative min-h-screen overflow-x-hidden' id='content'>
        <LegalArticle page={page} />
        <Footer />
      </main>
    </>
  );
}
