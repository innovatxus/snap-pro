import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EditorCanvas from "@/features/editor/components/EditorCanvas";
import {
  NICHES,
  SOCIAL_NICHES,
  STUDIO_NICHE,
  SUB_TOOLS,
  getToolByNicheAndSlug,
  toolSlug,
} from "@/features/editor/data/niches";

interface PageProps {
  params: Promise<{ niche: string; tool: string }>;
}

export async function generateStaticParams() {
  return [...NICHES, ...SUB_TOOLS, ...SOCIAL_NICHES, STUDIO_NICHE].flatMap(
    (n) => n.services.map((s) => ({ niche: n.id, tool: toolSlug(s.name) })),
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { niche: nicheSlug, tool: toolSlugStr } = await params;
  const found = getToolByNicheAndSlug(nicheSlug, toolSlugStr);
  if (!found) return { title: "Editor · Snap Pro" };
  return {
    title: `${found.tool.name} · ${found.niche.label} · Snap Pro`,
    description: `Apply ${found.tool.name} to your ${found.niche.label.toLowerCase()} photo in seconds.`,
  };
}

export default async function FocusedToolPage({ params }: PageProps) {
  const { niche: nicheSlug, tool: toolSlugStr } = await params;
  const found = getToolByNicheAndSlug(nicheSlug, toolSlugStr);
  if (!found) notFound();

  return (
    <>
      <Navbar />
      <main>
        <section className='relative z-10 mt-16 mb-32 max-[720px]:mt-8'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <EditorCanvas niche={found.niche} focusedTool={found.tool} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
