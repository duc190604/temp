"use client";
import React from 'react';

// --- MOCK DATA ---
const dailyProductImg = "//im8health.com/cdn/shop/files/ess-up.png?v=1760679753&width=300";
const beckhamProductImg = "//im8health.com/cdn/shop/files/bstack-up.png?v=1760679754&width=300";

interface BenefitType {
    type: string;
    isEssensial: boolean;
    isInStack: boolean;
}

const immediateBenefitData: BenefitType[] = [
    { type: "92 Nutrient-Rich Ingredients", isEssensial: true, isInStack: true },
    { type: "All-Day Energy & Focus", isEssensial: true, isInStack: true },
    { type: "Better Sleep Quality", isEssensial: true, isInStack: true },
    { type: "Digestive Health & Gut Support", isEssensial: true, isInStack: true },
    { type: "Immune System Protection", isEssensial: true, isInStack: true },
    { type: "Mental Clarity & Performance", isEssensial: true, isInStack: true },
];

const advancedBenefitData: BenefitType[] = [
    { type: "10 Longevity Compounds", isEssensial: false, isInStack: true },
    { type: "Autophagy Cellular Cleanup Activation", isEssensial: false, isInStack: true },
    { type: "NMN NAD+ Cellular Restoration", isEssensial: false, isInStack: true },
    { type: "Targets All 12 Hallmarks of Aging", isEssensial: false, isInStack: true },
    { type: "Triple Senolytic Zombie Cell Removal", isEssensial: false, isInStack: true },
];

// --- ICONS ---
const GreyX = ({ className }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
    >
        <circle cx={12} cy={12} r={11} fill="#e8e8e8" stroke="#d0d0d0" strokeWidth={2} />
        <path d="m8.5 8.5 7 7m0-7-7 7" stroke="#999" strokeWidth={2} strokeLinecap="round" />
    </svg>
);

const RedCheck = ({ className }: { className?: string }) => (
    <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
    >
        <circle cx={12} cy={12} r={11} fill="#9b1b1f" stroke="#9b1b1f" strokeWidth={2} />
        <path d="m7 12 3.5 3.5L17 9" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// --- SUB COMPONENTS ---

const ProductHeader = ({ productImg, title }: { productImg: string; title: string }) => {
    return (
        <div className="flex items-center max-md:flex-col">
            <div className="shrink-0 w-35 h-27.5 max-lg:w-30 max-lg:h-23.75 max-md:w-27.5 max-md:h-21.25 flex items-center justify-center -mt-5 max-lg:-mt-4 max-md:-mt-3.5">
                <img
                    src={productImg}
                    alt={title}
                    className="w-[120%] h-full object-center object-contain"
                />
            </div>
            <p className="leading-[1.3] text-base max-lg:text-sm max-md:text-xs max-md:text-center">
                {title}
            </p>
        </div>
    );
};

const ProductBenefits = ({ benefits }: { benefits: BenefitType[] }) => {
    return (
        <>
            {benefits.map((benefit) => {
                const { type, isEssensial, isInStack } = benefit;
                return (
                    <div
                        key={type}
                        className="grid grid-cols-3 gap-6 max-lg:gap-5 max-md:gap-3.5 py-3 max-lg:py-2.5 max-md:py-2 px-6 max-lg:px-5 max-md:px-4 text-[15px] max-lg:text-sm max-md:text-[13px] leading-[1.3] text-[#333] font-medium bg-white border-[#E5E5E5] not-first:border-t border-b"
                        style={{ fontFamily: 'var(--font-body)' }}
                    >
                        <div>{type}</div>
                        <div className="flex justify-center self-center">
                            {isEssensial ? (
                                <RedCheck className="w-5 h-5 max-lg:w-4.5 max-lg:h-4.5 max-md:w-4 max-md:h-4" />
                            ) : (
                                <GreyX className="w-5 h-5 max-lg:w-4.5 max-lg:h-4.5 max-md:w-4 max-md:h-4" />
                            )}
                        </div>
                        <div className="flex justify-center self-center">
                            {isInStack ? (
                                <RedCheck className="w-5 h-5 max-lg:w-4.5 max-lg:h-4.5 max-md:w-4 max-md:h-4" />
                            ) : (
                                <GreyX className="w-5 h-5 max-lg:w-4.5 max-lg:h-4.5 max-md:w-4 max-md:h-4" />
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export const BeckhamStackSection = () => {
    return (
        <div className="bg-[#fdf8f8]">
            <div className="im8-container md:py-20 py-15">
                <div className="flex flex-col gap-8">
                    <div className="flex max-md:flex-col items-center justify-center gap-6" style={{ fontFamily: 'var(--font-heading)' }}>
                        <h1 className="text-center lg:text-[36px] text-[28px] uppercase font-medium tracking-wider leading-8 text-[#50000b]">
                            Upgrade to the Beckham Stack
                        </h1>
                        <div className="bg-[#9b1b1f] text-white text-lg py-2 px-4 rounded-lg font-medium">
                            Save $12/ month
                        </div>
                    </div>
                    {/* Table Container */}
                    <div className="max-w-[980px] w-full mx-auto rounded-2xl overflow-visible border border-[#E5E5E5]">
                        {/* Header Row */}
                        <div
                            className="bg-[#50000b] grid grid-cols-3 items-center overflow-visible relative text-white text-lg rounded-t-2xl"
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            <div className="flex items-start justify-start text-left p-2.5 pl-7.5 max-md:py-3.5 max-md:px-2.5 max-lg:p-4 lg:text-lg md:text-base text-sm tracking-wider">
                                Feature
                            </div>
                            <ProductHeader
                                productImg={dailyProductImg}
                                title="Daily Ultimate Essentials"
                            />
                            <ProductHeader
                                productImg={beckhamProductImg}
                                title="The Beckham Stack (Essentials + Longevity)"
                            />
                        </div>

                        {/* Sub-header 1 */}
                        <div
                            className="grid grid-cols-3 gap-6 max-lg:gap-5 max-md:gap-3.5 py-3 max-lg:py-2.5 max-md:py-2 px-6 max-lg:px-5 max-md:px-4 bg-[#fdf8f8] font-medium text-sm max-lg:text-[13px] max-md:text-xs border-[#E5E5E5] border-y text-[#50000b]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <div className="uppercase">Immediate Essentials Benefit</div>
                            <div className="text-center self-center">Essentials</div>
                            <div className="text-center self-center">Beckham Stack</div>
                        </div>

                        {/* Benefits 1 */}
                        <div>
                            <ProductBenefits benefits={immediateBenefitData} />
                        </div>

                        {/* Sub-header 2 */}
                        <div
                            className="w-full bg-[#fbf4ef] uppercase max-lg:gap-5 max-md:gap-3.5 py-3 max-lg:py-2.5 max-md:py-2 px-6 max-lg:px-5 max-md:px-4 font-medium text-sm max-lg:text-[13px] max-md:text-xs border-[#E5E5E5] border-y text-[#50000b]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            Advanced Longevity Benefit
                        </div>

                        {/* Benefits 2 */}
                        <div>
                            <ProductBenefits benefits={advancedBenefitData} />
                        </div>

                        {/* Cost Row 1 */}
                        <div
                            className="grid grid-cols-3 gap-6 text-base max-lg:text-[15px] max-md:text-sm text-center font-bold py-3.5 px-6 border-[#E5E5E5] border-t bg-white text-[#50000b]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <div className="text-sm text-left">Monthly Subscription</div>
                            <div className="self-center">$178</div>
                            <div className="self-center">$336</div>
                        </div>

                        {/* Cost Row 2 */}
                        <div
                            className="grid grid-cols-3 gap-6 text-base max-lg:text-[15px] max-md:text-sm text-center font-bold py-3.5 px-6 border-[#E5E5E5] border-t bg-white text-[#50000b]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <div className="text-sm text-left">Cost per Daily Serving</div>
                            <div className="self-center">$5.93</div>
                            <div className="self-center">$11.20</div>
                        </div>

                        {/* Cost Row 3 (Footer) */}
                        <div
                            className="grid grid-cols-3 gap-6 text-base max-lg:text-[15px] max-md:text-sm text-center font-bold py-3.5 px-6 border-[#E5E5E5] border-t rounded-b-2xl bg-white text-[#50000b]"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <div className="text-sm text-left">
                                Savings vs. Buying Separately
                            </div>
                            <div className="self-center">-</div>
                            <div className="text-[#a40011] self-center">$37/month</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
