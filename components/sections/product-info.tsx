'use client';

import { useState } from 'react';
import TransformationProgramBlock from './transformation-program-block';
import MoneyBackGuaranteeBlock from './money-back-guarantee-block';
import HSAInfo from './hsa-info';
import ProductAccordions from './product-accordions';
import VideoTestimonialsSlider from './video-testimonials-slider';

// Variant options
const formatOptions = [
    {
        id: 'jar',
        name: 'Forever Jar',
        description: 'Essentials Powder - Forever Jar',
        image: 'https://im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853'
    },
    {
        id: 'sachet',
        name: 'Single-Serve Sachets',
        description: 'Essentials Powder – Single-Serve Sachets',
        image: 'https://im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834'
    },
];


const planOptions = [
    {
        id: 'quarterly',
        name: '90-Day Supply',
        badge: 'BEST VALUE',
        badgeLeft: 'NEW YEAR OFFER',
        savePercent: 'Save 30%',
        price: '$78',
        comparePrice: '$112',
        suffix: '/mo',
        billingText: 'Billed $235.00 USD every 12 weeks',
        perServing: '$2.61 USD / serving',
        benefits: [
            '🎓 Exclusive Access to 90 Day IM8 Transformation Program (see below)',
            '💰 Maximum savings - lowest price per serving',
            '👦 Share with family and friends',
            '🎁 Free Daily Ultimate Mixer (US$18)',
            '🚚 Free Shipping to US, UK, CA, and most of EU and APAC',
            '⏸️ Cancel or pause anytime',
            '🎁 Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)'
        ]
    },
    {
        id: 'subscription',
        name: '30-Day Supply',
        savePercent: 'Save 20%',
        price: '$89',
        comparePrice: '$112',
        suffix: '/mo',
        billingText: 'Billed $89.00 USD every 4 weeks',
        perServing: '$2.97 USD / serving',
        benefits: [
            '30-day money back guarantee',
            'Cancel or pause anytime',
            'Free Shipping to US, UK, CA, and most of EU and APAC',
            'Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)'
        ]
    },
];

interface ProductInfoProps {
    selectedVariant: 'jar' | 'sachet';
    setSelectedVariant: (variant: 'jar' | 'sachet') => void;
    selectedPlan: 'quarterly' | 'subscription';
    setSelectedPlan: (plan: 'quarterly' | 'subscription') => void;
}

export default function ProductInfo({ selectedVariant, setSelectedVariant, selectedPlan, setSelectedPlan }: ProductInfoProps) {
    const [isCPRExpanded, setIsCPRExpanded] = useState(false);

    return (
        <div className="product__info-container product__column-sticky min-w-0">
            {/* Reviews Stats */}
            <div className="product-review-stats flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-semibold text-[#50000b] my-[10px] mb-[14px]">
                <div className="product-review-stats__rating-group inline-flex items-center gap-1.5">
                    <span className="product-review-stats__stars inline-flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-[#a40011] drop-shadow-[0_1px_2px_rgba(164,0,17,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                            </svg>
                        ))}
                    </span>
                    <span className="product-review-stats__rating font-bold text-[15px] text-[#3d0008] tracking-tight">4.8</span>
                    <span className="product-review-stats__reviews text-[#50000b] font-semibold text-[14px]">from 11,825 Reviews</span>
                </div>

                <div className="product-review-stats__meta inline-flex items-center gap-1 md:gap-1.5 flex-wrap text-[#6b4c3a] font-medium text-[13px] md:text-sm mt-2">
                    <span className="hidden md:inline text-[#d4c4b8] font-light mx-0.5">|</span>
                    <span className="product-review-stats__separator md:hidden text-[#d4c4b8] font-light mx-0.5">|</span>
                    <span className="product-review-stats__purchases">622k+ customer purchases</span>
                    <span className="text-[#d4c4b8] font-light mx-0.5">|</span>
                    <span className="product-review-stats__servings">19M+ servings</span>
                </div>
            </div>

            {/* Title */}
            <div className="product__title mb-4">
                <h1 className="text-[#50000b] text-[32px] md:text-[40px] font-medium leading-tight m-0" style={{ fontFamily: 'var(--font-heading)' }}>
                    Daily Ultimate Essentials:<br />
                    All-in-One Supplement
                </h1>
            </div>



            {/* Short Description */}
            <div className="meta_short_description_main_new text-[#50000b] leading-relaxed mb-6 font-regular">
                <p className="mb-3">
                    Engineered for peak absorption, this comprehensive formula replaces the need for 16 daily supplements with 92 nutrient-rich ingredients in one delicious drink.*
                </p>
            </div>

            {/* Clinically Proven Results Section */}
            <div className="clinically-proven-results bg-gradient-to-br from-[#f0f9f4] to-[#e8f5ec] border-[1.5px] border-[#16A34A] rounded-2xl p-6 mb-4">
                <div className="flex flex-col md:flex-row justify-between items-start mb-5 gap-3">
                    <h3 className="text-[18px] md:text-[22px] font-semibold text-[#50000b] m-0 leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                        Clinically Proven Results
                    </h3>
                    <span className="inline-flex items-center justify-center h-[26px] px-[15px] bg-[#0f7a3a] rounded-full text-white text-[11px] font-bold uppercase tracking-wide whitespace-nowrap">
                        90-DAY CLINICAL STUDY
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
                    <div className="flex flex-col items-start">
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-2xl">⚡</span>
                            <span className="text-[#16A34A] text-[26px] font-normal leading-none" style={{ fontFamily: '"ABC Arizona Flare", Georgia, serif' }}>95%</span>
                        </div>
                        <span className="text-[13px] font-medium text-[#50000b] leading-tight">More energy</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-2xl">🦠</span>
                            <span className="text-[#16A34A] text-[26px] font-normal leading-none" style={{ fontFamily: '"ABC Arizona Flare", Georgia, serif' }}>85%</span>
                        </div>
                        <span className="text-[13px] font-medium text-[#50000b] leading-tight">Better gut health</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-2xl">😴</span>
                            <span className="text-[#16A34A] text-[26px] font-normal leading-none" style={{ fontFamily: '"ABC Arizona Flare", Georgia, serif' }}>80%</span>
                        </div>
                        <span className="text-[13px] font-medium text-[#50000b] leading-tight">Better sleep quality</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <div className="flex items-baseline gap-1 mb-1">
                            <span className="text-2xl">🧠</span>
                            <span className="text-[#16A34A] text-[26px] font-normal leading-none" style={{ fontFamily: '"ABC Arizona Flare", Georgia, serif' }}>70%</span>
                        </div>
                        <span className="text-[13px] font-medium text-[#50000b] leading-tight">Sharper focus</span>
                    </div>
                </div>

                <p className="text-[11px] text-[#666] italic mb-4">*Based on 12-week randomized controlled trial by San Francisco Research Institute</p>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div className="flex-1 w-full">
                        <button
                            type="button"
                            className="bg-none border-none p-0 cursor-pointer text-sm font-semibold text-[#50000b] underline underline-offset-4 flex items-center gap-1.5 transition-opacity hover:opacity-70"
                            style={{ fontFamily: 'var(--font-heading)' }}
                            onClick={() => setIsCPRExpanded(!isCPRExpanded)}
                            aria-expanded={isCPRExpanded}
                        >
                            Why These Results Matter?
                            <svg
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-3 h-3 transition-transform duration-300 ${isCPRExpanded ? 'rotate-180' : ''}`}
                            >
                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </button>
                        <div
                            className={`overflow-hidden transition-all duration-400 ease-out ${isCPRExpanded ? 'max-h-[300px] opacity-100 mt-3' : 'max-h-0 opacity-0 mt-0'}`}
                        >
                            <p className="text-[13px] leading-relaxed text-[#50000b] max-w-[480px]">
                                Unlike most supplements with unverified claims, IM8 is backed by a 12-week randomized controlled clinical trial. Every ingredient is NSF Certified for Sport, verifying exact dosages and testing for 280+ banned substances - the same certification trusted by world-class athletes like Aryna Sabalenka, World No. 1 tennis player.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 self-end">
                        <img src="https://im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100" alt="Certification logo" width="50" height="50" className="h-[40px] md:h-[50px] w-auto object-contain" />
                        <img src="https://im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100" alt="Certification logo" width="50" height="50" className="h-[40px] md:h-[50px] w-auto object-contain" />
                        <img src="https://im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100" alt="Certification logo" width="50" height="50" className="h-[40px] md:h-[50px] w-auto object-contain" />
                    </div>
                </div>
            </div>

            {/* Format Selector */}
            <div className="mb-6">
                <label className="block text-[#50000b] text-base font-bold mb-3">
                    1. Select Format:
                </label>
                <div className="grid grid-cols-2 gap-3 items-stretch">
                    {formatOptions.map((format) => (
                        <div key={format.id} className="relative h-full">
                            {/* MOST POPULAR Badge - only for jar */}
                            {format.id === 'jar' && (
                                <span className="absolute -top-2 right-4 z-10 bg-[#a40011] text-white text-[10px] font-bold uppercase px-4 py-1 rounded-full whitespace-nowrap" style={{ fontFamily: 'var(--font-nb-architekt)' }}>
                                    MOST POPULAR
                                </span>
                            )}

                            <input
                                type="radio"
                                id={`format-${format.id}`}
                                name="format"
                                value={format.id}
                                checked={selectedVariant === format.id}
                                onChange={(e) => setSelectedVariant(e.target.value as 'jar' | 'sachet')}
                                className="absolute opacity-0 pointer-events-none"
                            />
                            <label
                                htmlFor={`format-${format.id}`}
                                className={`grid grid-cols-[60px_1fr] gap-0 border-2 rounded-2xl cursor-pointer transition-all overflow-hidden h-full ${selectedVariant === format.id
                                    ? 'border-[#50000b] bg-white'
                                    : 'border-transparent bg-[#fbf4ef] hover:border-[#50000b]/30'
                                    }`}
                            >
                                {/* Product Image Column - No padding, flush with border */}
                                <div className="w-[60px] h-full flex items-center justify-center ">
                                    <img
                                        src={format.image}
                                        alt={format.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Text Content Column - Has padding */}
                                <div className="flex flex-col justify-center min-w-0 bg-[#f5eaea] py-4 px-3">
                                    <div className="text-[17px] md:text-[18px] lg:text-[20px] font-bold text-[#50000b] mb-1 leading-tight">
                                        {format.name}
                                    </div>
                                    <div className="text-[12px] md:text-[13px] text-[#666] leading-tight">
                                        (354g) $2.61 USD / serving
                                    </div>
                                </div>
                            </label>
                        </div>
                    ))}
                </div>
            </div>

            {/* Plan Selector */}
            <div className="mb-6">
                <label className="block text-[#50000b] text-base font-bold mb-3">
                    2. Subscribe & Save:
                </label>
                <div className="grid grid-cols-1 gap-3">
                    {planOptions.map((plan) => (
                        <div key={plan.id} className="relative">
                            {/* Left Badge - NEW YEAR OFFER */}
                            {plan.badgeLeft && (
                                <span className="absolute left-4 -top-2 z-10 bg-[#FEC63F] text-[#50000b] text-[11px] font-bold uppercase px-4 py-1 rounded-full whitespace-nowrap" style={{ fontFamily: 'var(--font-nb-architekt)' }}>
                                    {plan.badgeLeft}
                                </span>
                            )}

                            {/* Right Badge - BEST VALUE */}
                            {plan.badge && (
                                <span className="absolute right-4 -top-2 z-10 bg-[#a40011] text-white text-[10px] font-bold uppercase px-4 py-1 rounded-full whitespace-nowrap" style={{ fontFamily: 'var(--font-nb-architekt)' }}>
                                    {plan.badge}
                                </span>
                            )}

                            <input
                                type="radio"
                                id={`plan-${plan.id}`}
                                name="plan"
                                value={plan.id}
                                checked={selectedPlan === plan.id}
                                onChange={(e) => setSelectedPlan(e.target.value as 'quarterly' | 'subscription')}
                                className="absolute opacity-0 pointer-events-none"
                            />
                            <label
                                htmlFor={`plan-${plan.id}`}
                                className={`block p-4 border rounded-2xl cursor-pointer transition-all ${selectedPlan === plan.id
                                    ? `border-[#a40011] ${plan.id === 'subscription' ? 'bg-[#f5eaea]' : 'bg-[#A40011]/[0.02]'}`
                                    : 'border-[#50000b]/20 bg-transparent hover:border-[#a40011]/50'
                                    }`}
                                style={{ paddingTop: (plan.badge || plan.badgeLeft) ? '20px' : '16px' }}
                            >
                                {/* Top Row: Radio + Name + Price */}
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <div className="flex items-start gap-3 flex-1 min-w-0">
                                        {/* Radio Icon - SVG based */}
                                        <div
                                            className="inline-block w-6 h-6 min-w-[24px] shrink-0 mt-0.5 transition-all bg-contain bg-no-repeat bg-center"
                                            style={{
                                                backgroundImage: selectedPlan === plan.id
                                                    ? 'url(https://im8health.com/cdn/shop/t/121/assets/radio_fill.svg)'
                                                    : 'url(https://im8health.com/cdn/shop/t/121/assets/radio_blank.svg)'
                                            }}
                                        />

                                        {/* Name + Save Percent */}
                                        <div className="flex-1 min-w-0" style={{ fontFamily: 'var(--font-heading)' }}>
                                            <div className="text-[20px] font-bold text-[#50000b] leading-tight">
                                                {plan.name}{' '}
                                                <span className={plan.id === 'quarterly' ? 'text-[#16A34A]' : ''}>
                                                    ({plan.savePercent})
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div className="text-right shrink-0">
                                        <span className="text-sm font-bold text-[#50000b]">{plan.price}</span>
                                        {plan.comparePrice && (
                                            <span className="text-sm text-[#999] line-through ml-1 font-bold">{plan.comparePrice}</span>
                                        )}
                                        {plan.suffix && (
                                            <span className="text-sm text-[#50000b] font-bold">{plan.suffix}</span>
                                        )}
                                    </div>
                                </div>

                                {/* Billing Text + Per Serving */}
                                <div className="flex items-center justify-between gap-2 mb-3 ml-8 border-b border-[#e1cbb9] pb-2" >
                                    <span className="text-[14px] text-[#50000b] font-semibold">{plan.billingText}</span>
                                    <span className="text-[12px] font-semibold text-[#a40011] whitespace-nowrap" style={{ fontFamily: 'var(--font-nb-architekt)' }}>{plan.perServing}</span>
                                </div>

                                {/* Benefits List */}
                                <ul className="list-none p-0 m-0 ml-8 space-y-1">
                                    {plan.benefits.map((benefit, i) => (
                                        <li key={i} className="text-[14px] text-[#50000b] leading-relaxed font-medium flex items-start gap-2">
                                            {/* Show checkmark icon only for subscription (30-day) plan */}
                                            {plan.id === 'subscription' && (
                                                <img
                                                    src="https://im8health.com/cdn/shop/t/121/assets/sub_check.svg"
                                                    alt=""
                                                    className="w-4 h-4 mt-0.5 flex-shrink-0"
                                                />
                                            )}
                                            <span className={plan.id === 'subscription' ? '' : ''}>
                                                {benefit}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </label>
                        </div>
                    ))}
                </div>

                {/* One Time Purchase Link */}
                <div className="text-center mt-3">
                    <a href="#" className="text-sm font-medium text-[#50000b] underline underline-offset-2 hover:opacity-70 transition-opacity">
                        One Time Purchase <span className="font-semibold">$112</span>
                    </a>
                </div>
            </div>

            {/* Add to Cart Button */}
            {selectedPlan === 'quarterly' ? (
                <button className="w-full bg-[#a40011] text-white border-none rounded-full px-6 py-4 text-base font-bold uppercase cursor-pointer transition-all hover:bg-[#50000b]  shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-0.5">
                    START MY 90-DAY TRANSFORMATION PROGRAM-$78.33 USD/mo
                </button>
            ) : (
                <button className="w-full bg-[#a40011] text-white border-none rounded-full px-6 py-4 text-base font-bold uppercase cursor-pointer transition-all hover:bg-[#50000b]  shadow-lg hover:shadow-xl translate-y-0 hover:-translate-y-0.5">
                    Add to cart-$89 USD/mo
                </button>
            )}

            {/* New Year Discount Banner */}
            {selectedPlan === 'quarterly' && (
                <div
                    className="mt-4 px-[18px] py-[14px] rounded-xl flex items-center gap-3 shadow-md transition-all"
                    style={{
                        background: 'linear-gradient(135deg, #f0fdf4 0%, color-mix(in srgb, #f0fdf4 80%, #22c55e 20%) 100%)',
                        border: '1.5px solid #22c55e'
                    }}
                >
                    <div
                        className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: '#22c55e' }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-[14px] h-[14px] text-white"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </div>
                    <span className="text-sm font-medium text-[#166534] leading-snug">
                        <span className="font-bold">New Year discount</span> automatically applied at checkout
                    </span>
                </div>
            )}

            {/* Guarantee */}
            {/* <div className="text-center pt-4 border-t border-[#e1cbb9]">
                <p className="text-sm font-bold text-[#50000b] mb-1">90-Day Money-Back Guarantee</p>
                <p className="text-xs text-[#666]">Free shipping on all orders</p>
            </div> */}


            <TransformationProgramBlock />


            {/* Money Back Guarantee Block */}
            <MoneyBackGuaranteeBlock />

            {/* HSA/FSA Info */}
            <HSAInfo />

            {/* Product Accordions */}
            <ProductAccordions />

            {/* Video Testimonials */}
            <VideoTestimonialsSlider />
        </div>
    );
}
