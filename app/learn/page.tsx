import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { CategoryAccordion } from "@/features/learning/components/CategoryAccordion";
import { CertificationCard } from "@/features/learning/components/CertificationCard";
import { FaqAccordion } from "@/features/learning/components/FaqAccordion";
import { FeaturedCarousel } from "@/features/learning/components/FeaturedCarousel";
import { HelpCenter } from "@/features/learning/components/HelpCenter";
import { LearnHero } from "@/features/learning/components/LearnHero";
import { LearningPathCard } from "@/features/learning/components/LearningPathCard";
import { ProgressTracker } from "@/features/learning/components/ProgressTracker";
import { ResourceCard } from "@/features/learning/components/ResourceCard";
import {
  getStats,
  listCategories,
  listCertifications,
  listFaqs,
  listFeaturedTutorials,
  listLearningPaths,
  listResources,
  listTutorialsByCategory,
} from "@/features/learning/services/learning-service";
import type { Tutorial } from "@/features/learning/types";

export const metadata: Metadata = {
  title: "Learning Center — Snap Pro",
  description:
    "Master every AI tool, workflow, and feature through guided tutorials, learning paths, and resources.",
};

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta?: { label: string; href: string };
}

function SectionHeader({ eyebrow, title, body, cta }: SectionHeaderProps) {
  return (
    <ScrollReveal
      variant='blur'
      className='flex flex-col md:flex-row md:items-end md:justify-between gap-6'
    >
      <div
        style={{
          borderBottom: "1px solid var(--line)",
          paddingBottom: 28,
          marginBottom: 56,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div style={{ flex: 1, minWidth: 280 }}>
            <span className='section-num'>{eyebrow}</span>
            <h2
              className='font-fraunces'
              style={{
                fontSize: "clamp(36px, 4.4vw, 64px)",
                fontWeight: 300,
                lineHeight: 0.95,
                color: "var(--ink)",
                letterSpacing: "-0.01em",
                marginTop: 10,
              }}
            >
              {title}
            </h2>
            <p
              style={{
                marginTop: 14,
                maxWidth: 580,
                color: "var(--mute)",
                fontSize: 16,
                lineHeight: 1.55,
              }}
            >
              {body}
            </p>
          </div>
          {cta && (
            <a
              href={cta.href}
              className='link-underline'
              style={{
                fontFamily: "var(--font-geist-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink)",
                whiteSpace: "nowrap",
              }}
            >
              {cta.label} →
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default async function LearnPage() {
  const [stats, featured, categories, paths, certifications, resources, faqs] =
    await Promise.all([
      getStats(),
      listFeaturedTutorials(8),
      listCategories(),
      listLearningPaths(),
      listCertifications(),
      listResources(),
      listFaqs(),
    ]);

  // Fan-out tutorials by category once; the accordion is purely presentational.
  const tutorialsByCategory: Record<string, Tutorial[]> = Object.fromEntries(
    await Promise.all(
      categories.map(
        async (c) => [c.id, await listTutorialsByCategory(c.id)] as const,
      ),
    ),
  );

  // All tutorials (used by ProgressTracker for resolving saved/recent items).
  const allTutorials: Tutorial[] = Object.values(tutorialsByCategory).flat();

  return (
    <>
      <Navbar />

      <main>
        <LearnHero stats={stats} />

        {/* Featured tutorials */}
        <section id='featured' className='relative z-10 mt-32'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Featured'
              title={
                <>
                  Start with the <em className='silver'>essentials</em>.
                </>
              }
              body='Hand-picked tutorials that cover the highest-impact workflows. Watch in any order — each one is self-contained.'
              cta={{ label: "Browse all tutorials", href: "#categories" }}
            />
            <FeaturedCarousel tutorials={featured} />
          </div>
        </section>

        {/* Learning paths */}
        <section id='paths' className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Learning paths'
              title={
                <>
                  Guided <em className='silver'>journeys</em> from zero to
                  expert.
                </>
              }
              body='Each path bundles tutorials in the order our top operators take them — typically one to two hours end-to-end.'
            />
            <ScrollReveal
              stagger
              className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'
            >
              {paths.map((path) => {
                const tutorials = path.tutorialIds
                  .map((id) => allTutorials.find((t) => t.id === id))
                  .filter((t): t is Tutorial => Boolean(t));
                return (
                  <LearningPathCard
                    key={path.id}
                    path={path}
                    tutorials={tutorials}
                  />
                );
              })}
            </ScrollReveal>
          </div>
        </section>

        {/* Categories accordion */}
        <section id='categories' className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Catalog'
              title={
                <>
                  Browse by <em className='silver'>category</em>.
                </>
              }
              body='Eleven categories cover every tool and workflow in Snap Pro. Expand any section to see its tutorials.'
            />
            <CategoryAccordion
              categories={categories}
              tutorialsByCategory={tutorialsByCategory}
              defaultExpanded={["getting-started"]}
            />
          </div>
        </section>

        {/* Progress tracker */}
        <section id='progress' className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Your progress'
              title={
                <>
                  Pick up <em className='silver'>right where</em> you left off.
                </>
              }
              body='Progress is saved on this device. Sign in to sync across devices and earn badges as you complete tutorials.'
            />
            <ProgressTracker tutorials={allTutorials} />
          </div>
        </section>

        {/* Certifications */}
        <section id='certifications' className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Certifications'
              title={
                <>
                  Prove your <em className='silver'>expertise</em>.
                </>
              }
              body='Validate the workflows that matter to your team. Certificates roll out throughout 2026.'
            />
            <ScrollReveal
              stagger
              className='grid grid-cols-1 md:grid-cols-2 gap-5'
            >
              {certifications.map((c) => (
                <CertificationCard key={c.id} certification={c} />
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Resource library */}
        <section id='resources' className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Resource library'
              title={
                <>
                  Templates, checklists, and{" "}
                  <em className='silver'>playbooks</em>.
                </>
              }
              body='Production-tested files you can drop straight into your workflow.'
            />
            <ScrollReveal
              stagger
              className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
            >
              {resources.map((r) => (
                <ResourceCard key={r.id} resource={r} />
              ))}
            </ScrollReveal>
          </div>
        </section>

        {/* Help center */}
        <section id='help' className='relative z-10 mt-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='Help center'
              title={
                <>
                  Talk to a <em className='silver'>human</em> when you need to.
                </>
              }
              body='Documentation, support, and the community — all one click away.'
            />
            <HelpCenter />
          </div>
        </section>

        {/* FAQ */}
        <section id='faq' className='relative z-10 mt-40 mb-40'>
          <div className='max-w-370 mx-auto px-12 max-[720px]:px-4'>
            <SectionHeader
              eyebrow='FAQ'
              title={
                <>
                  Quick <em className='silver'>answers</em>.
                </>
              }
              body='The questions we hear most often, answered without the marketing fluff.'
            />
            <FaqAccordion items={faqs} defaultOpenId={faqs[0]?.id} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
