'use client';

import { useState } from 'react';
import ProductMediaGallery from './product-media-gallery';
import ProductInfo from './product-info';

interface ProductSectionProps {
    selectedPlan?: 'quarterly' | 'subscription';
    onPlanChange?: (plan: 'quarterly' | 'subscription') => void;
    selectedVariant?: 'jar' | 'sachet';
    onVariantChange?: (variant: 'jar' | 'sachet') => void;
}

export default function ProductSection({
    selectedPlan: externalSelectedPlan,
    onPlanChange,
    selectedVariant: externalSelectedVariant,
    onVariantChange
}: ProductSectionProps) {
    const [internalSelectedFormat, setInternalSelectedFormat] = useState<'jar' | 'sachet'>('jar');
    const [internalSelectedPlan, setInternalSelectedPlan] = useState<'quarterly' | 'subscription'>('quarterly');

    // Use external state if provided, otherwise internal
    const selectedPlan = externalSelectedPlan || internalSelectedPlan;
    const setSelectedPlan = (plan: 'quarterly' | 'subscription') => {
        setInternalSelectedPlan(plan);
        if (onPlanChange) {
            onPlanChange(plan);
        }
    };

    const selectedFormat = externalSelectedVariant || internalSelectedFormat;
    const setSelectedFormat = (format: 'jar' | 'sachet') => {
        setInternalSelectedFormat(format);
        if (onVariantChange) {
            onVariantChange(format);
        }
    }


    return (
        <section
            className="w-full bg-white bg-no-repeat bg-top bg-size-[100%_auto] py-8 pb-20 md:py-8 md:pb-20"
            style={{
                backgroundImage: 'url(https://im8health.com/cdn/shop/files/Frame_1000004811-min.jpg?v=1727698766)'
            }}
        >
            {/* Mobile Background */}
            <style jsx>{`
        @media (min-width: 0px) and (max-width: 749px) {
          section {
            background-image: url(https://im8health.com/cdn/shop/files/product_mobile-min.png?v=1727698668) !important;
            padding-top: 0;
          }
        }
      `}</style>

            <div className="max-w-[1400px] mx-auto px-5 min-[1400px]:px-[50px] w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 lg:gap-8 xl:gap-10 w-full md:items-start">

                    {/* Left Side - Image Gallery */}
                    <ProductMediaGallery selectedVariant={selectedFormat} selectedPlan={selectedPlan} />

                    {/* Right Side - Product Info */}
                    <ProductInfo
                        selectedVariant={selectedFormat}
                        setSelectedVariant={setSelectedFormat}
                        selectedPlan={selectedPlan}
                        setSelectedPlan={setSelectedPlan}
                    />
                </div>
            </div>
        </section>
    );
}
