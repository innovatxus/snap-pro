import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalArticle from "@/components/legal/LegalArticle";
import { LEGAL_PAGES, getPage } from "@/lib/legal";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return LEGAL_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage("legal", slug);
  if (!page) return {};
  return {
    title: page.title.en,
    description: page.meta.en,
    alternates: {
      languages: {
        en: `/legal/${slug}`,
        ar: `/legal/${slug}?lang=ar`,
      },
    },
    robots:
      page.status === "draft" ? { index: false, follow: true } : undefined,
  };
}

export default async function Page({ params }: RouteParams) {
  const { slug } = await params;
  const page = getPage("legal", slug);
  if (!page) notFound();
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
