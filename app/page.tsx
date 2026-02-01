import ClinicalStudiesSection from "@/components/sections/clinical-studies-section";
import StaticReviewsSection from "@/components/sections/static-reviews-section";
import ProductSection from "@/components/sections/product-section";
import { TeamSection } from "@/components/sections/team-section";
import { BeckhamStackSection } from "@/components/sections/beckham-stack-section";
import { PremiumSection } from "@/components/sections/premium-section";
import { FAQSection } from "@/components/sections/faq-section";
import { AmbassadorsSection } from "@/components/sections/ambassadors-section";
import { GetStartedSection } from "@/components/sections/get-started-section";
import { PreparationSection } from "@/components/sections/preparation-section";
import ContentSection from "@/components/sections/content-section";
import { TrustedExpertsSection } from "@/components/sections/trusted-experts-section";
import { FivePillarsSection } from "@/components/sections/five-pillars";
import MonthlyBreakdown from "@/components/sections/monthly-breakdown";
import OrganSystems from "@/components/sections/organ-systems";
import StandardSection from "@/components/sections/standard-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProductSection />
      <ClinicalStudiesSection />
      <StaticReviewsSection />
      <OrganSystems />
      <MonthlyBreakdown />
      <StandardSection />
      <FivePillarsSection />
      <TrustedExpertsSection />
      <ContentSection />
      <PreparationSection />
      <GetStartedSection />
      <AmbassadorsSection />
      <TeamSection />
      <BeckhamStackSection />
      <PremiumSection />
      <FAQSection />
    </div>
  );
}
