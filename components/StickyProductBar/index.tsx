'use client';

import React, { useState, useEffect } from 'react';
import { ProductDropdown } from './ProductDropdown';
import type { StickyProductBarProps, DropdownOption } from './types';
import { STICKY_BAR_DEFAULT_DATA, STICKY_BAR_JAR_DATA, STICKY_BAR_SACHET_DATA } from './data';

export const StickyProductBar = React.memo(({
    productImage = STICKY_BAR_DEFAULT_DATA.productImage,
    productTitle = STICKY_BAR_DEFAULT_DATA.productTitle,
    options = STICKY_BAR_DEFAULT_DATA.options,
    defaultOptionId = STICKY_BAR_DEFAULT_DATA.defaultOptionId,
    isPreorder = false,
    buttonPrice = STICKY_BAR_DEFAULT_DATA.buttonPrice,
    isQuarterlyRegion = true,
    selectedPlanId,
    onPlanChange,
    selectedVariant,
    onVariantChange
}: Partial<StickyProductBarProps> & {
    selectedPlanId?: string,
    onPlanChange?: (id: string) => void,
    selectedVariant?: 'jar' | 'sachet',
    onVariantChange?: (variant: 'jar' | 'sachet') => void
}) => {
    // Map variant ID to display name and image
    const variantConfig = {
        jar: {
            name: 'Forever Jar',
            image: "https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel01.jpg?v=1761040602&width=500"
        },
        sachet: {
            name: 'Single-Serve Sachets',
            image: "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=500"
        }
    };

    const currentVariant = selectedVariant ? variantConfig[selectedVariant] : variantConfig.jar;
    const finalProductImage = productImage === STICKY_BAR_DEFAULT_DATA.productImage ? currentVariant.image : productImage;
    const finalProductVariant = selectedVariant ? currentVariant.name : STICKY_BAR_DEFAULT_DATA.productVariant;

    // Determine effective options based on variant if using default options
    // Relaxed check: if selectedVariant is sachet, use sachet data. 
    // We assume if you pass 'sachet' you want sachet data, unless you passed custom options?
    // Let's assume standard behavior for this app.
    // Determine effective options based on variant if using default options
    const resolvedOptions = React.useMemo(() => {
        if (selectedVariant === 'sachet') return STICKY_BAR_SACHET_DATA.options;
        if (selectedVariant === 'jar') return STICKY_BAR_JAR_DATA.options;
        return options;
    }, [selectedVariant, options]);

    const [isVisible, setIsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption | undefined>(
        resolvedOptions.find(opt => opt.id === selectedPlanId) ||
        resolvedOptions.find(opt => opt.id === defaultOptionId) ||
        resolvedOptions[0]
    );

    // Sync from prop (external change)
    React.useEffect(() => {
        if (selectedPlanId) {
            const option = resolvedOptions.find(opt => opt.id === selectedPlanId);
            if (option) {
                setSelectedOption(option);
            }
        } else {
            if (selectedOption) {
                const matchingOption = resolvedOptions.find(opt => opt.id === selectedOption.id);
                if (matchingOption) {
                    setSelectedOption(matchingOption);
                } else {
                    setSelectedOption(resolvedOptions[0]);
                }
            }
        }
    }, [selectedPlanId, resolvedOptions]);

    // Show sticky bar on scroll
    useEffect(() => {
        // Always show sticky bar
        setIsVisible(true);
    }, []);

    const handleSelectionChange = (option: DropdownOption) => {
        setSelectedOption(option);
        if (onPlanChange) {
            onPlanChange(option.id);
        }
    };

    const handleAddToCart = () => {
        console.log('Adding to cart:', selectedOption);
        // In a real implementation effectively sync with the main form
        if (selectedOption?.optionValueId) {
            // Dispatch event or logic to add specific variant
        }
    };

    return (
        <div
            className={`product-buy-sticky-container fixed bottom-0 left-0 z-9999 flex h-[70px] md:h-[90px] w-full items-center justify-center border-t border-[rgba(80,0,11,0.12)] bg-linear-to-br from-[rgba(245,234,234,0.95)] to-[rgba(255,255,255,0.98)] backdrop-blur-[20px] transition-all duration-500 ease-out ${isVisible
                ? 'translate-y-0 opacity-100 visible'
                : 'translate-y-full opacity-0 invisible'
                }`}
            style={{
                contain: 'layout style',
                overflow: 'visible'
            }}
        >
            <div className="product-buy-sticky__inner mx-auto flex w-full max-w-[1440px] items-center justify-between overflow-visible px-4 md:px-5">
                {/* Product Details - Hidden on mobile */}
                <div className="product-details hidden md:flex items-center gap-[18px] overflow-visible">
                    {/* Product ImageContainer */}
                    <div className="product-image-container relative flex overflow-hidden rounded-xl bg-linear-to-br from-white to-[#f8f8f8] shadow-[0_4px_16px_rgba(80,0,11,0.08),0_2px_8px_rgba(0,0,0,0.04),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-400">
                        <img
                            src={finalProductImage}
                            alt={productTitle}
                            width={90}
                            height={90}
                            className="product-image h-[90px] w-[90px] object-cover"
                            id="sticky-product-image"
                            loading="lazy"
                        />
                        <div className="image-glow absolute inset-0 bg-linear-to-br from-transparent to-white/10 pointer-events-none" />
                    </div>

                    {/* Product Title */}
                    <div className="product-title text-[#50000b] font-semibold text-base leading-[1.3] antialiased max-w-[200px] md:max-w-none" data-title={productTitle}>
                        {productTitle}
                        {finalProductVariant && (
                            <div className="product-title__variant font-medium min-h-[1em] visible" data-title={`${productTitle} (${finalProductVariant})`}>
                                ({finalProductVariant})
                            </div>
                        )}
                    </div>
                </div>

                {/* Right Section: Dropdown + Button */}
                <div className="right-aligned w-full md:w-auto grid grid-cols-[1fr_140px] md:flex items-center gap-3 md:gap-4">
                    {/* Dropdown */}
                    <div className="w-full md:w-auto min-w-0">
                        <ProductDropdown
                            options={resolvedOptions}
                            defaultOptionId={defaultOptionId}
                            selectedOptionId={selectedOption?.id}
                            onSelectionChange={handleSelectionChange}
                            isQuarterlyRegion={isQuarterlyRegion}
                        />
                    </div>

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        data-preorder={isPreorder}
                        className="product-buy-sticky__button rounded-full bg-[#50000b] px-0 md:px-8 py-2 md:py-3 text-white font-bold hover:bg-[#3a0008] transition-colors duration-200 whitespace-nowrap h-[42px] md:h-auto flex items-center justify-center w-full md:w-auto"
                    >
                        <span className="text-desktop max-md:hidden uppercase text-[13px]">
                            Add to cart <span className="button-text-price uppercase text-[13px] font-bold">- {selectedOption?.buttonPrice || buttonPrice}</span>
                        </span>
                        <span className="text-mobile md:hidden text-sm uppercase font-bold px-2">Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
});

StickyProductBar.displayName = 'StickyProductBar';
