import ClinicalStudiesSection from "@/components/sections/clinical-studies-section";
import StaticReviewsSection from "@/components/sections/static-reviews-section";
import ProductSection from "@/components/sections/product-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <ProductSection />
      <ClinicalStudiesSection />
      <StaticReviewsSection />
    </div>
  );
}
