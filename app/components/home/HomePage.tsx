import { HomeHeroSection } from "./HomeHeroSection";
import { HomeCustomersSection } from "./HomeCustomersSection";
import { HomeBusinessSuiteSection } from "./HomeBusinessSuiteSection";
import { HomeOnlineSection } from "./HomeOnlineSection";
import { HomeIndustrySection } from "./HomeIndustrySection";
import { HomePainSection } from "./HomePainSection";
import { HomeWorkflowSection } from "./HomeWorkflowSection";
import { HomeAppStoreSection } from "./HomeAppStoreSection";
import { HomePricingSection } from "./HomePricingSection";
import { HomeLandingCtaSection } from "./HomeLandingCtaSection";

export function HomePage() {
  return (
    <main className="bg-white text-poso-dark">
      <HomeHeroSection />
      <HomeCustomersSection />
      <HomeBusinessSuiteSection />
      <HomeOnlineSection />
      <HomeIndustrySection />
      <HomePainSection />
      <HomeWorkflowSection />
      <HomeAppStoreSection />
      <HomePricingSection />
      <HomeLandingCtaSection />
    </main>
  );
}
