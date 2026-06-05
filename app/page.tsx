import Hero from "@/components/Hero";
import NichesSection from "@/components/NichesSection";
import SubCategoriesSection from "@/components/SubCategoriesSection";
import CreativePowerSection from "@/components/CreativePowerSection";
import ServicesSection from "@/components/ServicesSection";
import PhoneShowcase from "@/components/PhoneShowcase";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import SocialSizes from "@/components/SocialSizes";
import Pricing from "@/components/Pricing";
import Integrations from "@/components/Integrations";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import BentoSection from "@/components/BentoSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id='content' className='relative min-h-screen overflow-x-hidden'>
      {/*
       * Hero is full-width and full-height.
       * It owns the Navbar + video background layout internally.
       * All other sections start after the fold.
       */}
      <Hero />

      {/* ── Below-the-fold sections ── */}
      <NichesSection />
      <CreativePowerSection />
      <SubCategoriesSection />
      <ServicesSection />
      <PhoneShowcase />
      <BeforeAfterGallery />
      <SocialSizes />
      <Pricing />
      <Integrations />
      <AIFeaturesSection />

      <div className='pb-60 max-[720px]:pb-40'>
        <FinalCTA />
      </div>

      <BentoSection />

      <Footer />
    </main>
  );
}
