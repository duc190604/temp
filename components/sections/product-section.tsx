'use client';

import { useState } from 'react';
import ProductMediaGallery from './product-media-gallery';
import ProductInfo from './product-info';

export default function ProductSection() {
    const [selectedFormat, setSelectedFormat] = useState<'jar' | 'sachet'>('jar');
    const [selectedPlan, setSelectedPlan] = useState<'quarterly' | 'subscription'>('quarterly');

    return (
        <section
            className="w-full overflow-x-hidden bg-white bg-no-repeat bg-top bg-[length:100%_auto] py-8 pb-20 md:py-8 md:pb-20"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6 lg:gap-8 xl:gap-10 w-full">

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
