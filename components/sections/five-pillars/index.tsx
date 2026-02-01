'use client';

import { PillarsProvider, usePillarsContext } from './PillarsContext';
import { PILLARS_DATA, FEATURE_CARDS } from './data';
import { ProductToggle } from './ProductToggle';
import { SectionHeader } from './SectionHeader';
import { PillarNavigation } from './PillarNavigation';
import { ContentPanel } from './ContentPanel';
import { FeatureCards } from './FeatureCards';
import { BackgroundLayer } from './BackgroundLayer';

const FivePillarsContent = () => {
    const { activeProduct, activePillar, isEssentials } = usePillarsContext();
    const currentPillars = PILLARS_DATA[activeProduct];
    const currentActivePillarIndex = activePillar[activeProduct];
    const currentPillar = currentPillars[currentActivePillarIndex];
    const currentFeatures = FEATURE_CARDS[activeProduct];

    return (
        <section
            className="relative overflow-hidden pt-[48px] pb-[64px] md:pt-[120px] md:pb-[160px]"
            style={{
                background: isEssentials
                    ? 'repeating-linear-gradient(0deg, transparent 0px, transparent 70px, rgba(164, 0, 17, 0.03) 70px, rgba(164, 0, 17, 0.03) 71px), repeating-linear-gradient(90deg, transparent 0px, transparent 70px, rgba(164, 0, 17, 0.02) 70px, rgba(164, 0, 17, 0.02) 71px), linear-gradient(180deg, #F5EAEA 0%, #FFFDF5 15%, #FFF5F5 40%, #F5EAEA 70%, rgba(164, 0, 17, 0.04) 100%)'
                    : 'repeating-linear-gradient(0deg, transparent 0px, transparent 70px, rgba(180, 140, 30, 0.07) 70px, rgba(180, 140, 30, 0.07) 71px), repeating-linear-gradient(90deg, transparent 0px, transparent 70px, rgba(180, 140, 30, 0.05) 70px, rgba(180, 140, 30, 0.05) 71px), linear-gradient(180deg, #FAF7EE 0%, #FFFDF5 15%, #F8F4E8 40%, #FAF7EE 70%, rgba(231, 141, 45, 0.08) 100%)',
                marginTop: '-1px'
            }}
            id="pillars-health-section"
            data-active-product={activeProduct}
        >
            <BackgroundLayer />

            {/* Content Container */}
            <div className="relative z-[1] max-w-[1400px] mx-auto px-5 md:px-10 xl:px-[60px]">
                <ProductToggle />
                <SectionHeader />

                {/* Interactive Section */}
                <div className="grid gap-6 lg:grid-cols-[380px_1fr] lg:gap-10 xl:grid-cols-[420px_1fr] xl:gap-14 mb-16 lg:mb-20">
                    <div className="order-2 lg:order-1">
                        <PillarNavigation pillars={currentPillars} />
                    </div>
                    <div className="order-1 lg:order-2">
                        <ContentPanel pillar={currentPillar} />
                    </div>
                </div>

                <FeatureCards cards={currentFeatures} />
            </div>
        </section>
    );
};

export const FivePillarsSection = () => {
    return (
        <PillarsProvider>
            <FivePillarsContent />
        </PillarsProvider>
    );
};
