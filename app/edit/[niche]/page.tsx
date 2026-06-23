import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RequireAuth from "@/components/auth/RequireAuth";
import EditorCanvas from "@/features/editor/components/EditorCanvas";
import {
  NICHES,
  SOCIAL_NICHES,
  STUDIO_NICHE,
  SUB_TOOLS,
  getNicheBySlug,
} from "@/features/editor/data/niches";

interface PageProps {
  params: Promise<{ niche: string }>;
}

export async function generateStaticParams() {
  return [...NICHES, ...SUB_TOOLS, ...SOCIAL_NICHES, STUDIO_NICHE].map((n) => ({
    niche: n.id,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { niche: slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) return { title: "Editor · Snap Pro" };
  return {
    title: `${niche.name}${niche.suffix ? " " + niche.suffix : ""} editor · Snap Pro`,
    description: `${niche.services.length} preset tools tuned for ${niche.label.toLowerCase()}. Upload an image and ship a finished asset in seconds.`,
  };
}

export default async function NicheEditorPage({ params }: PageProps) {
  const { niche: slug } = await params;
  const niche = getNicheBySlug(slug);
  if (!niche) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className='relative z-10 mt-16 mb-32 max-[720px]:mt-8'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <RequireAuth>
              <EditorCanvas niche={niche} />
            </RequireAuth>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
