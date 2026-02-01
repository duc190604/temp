'use client';

import React, { useState, useEffect } from 'react';
import { organSystemsData } from './data';
import { ProductType } from './types';
import { ProductToggle } from './ProductToggle';
import { SectionHeader } from './SectionHeader';
import { BackgroundEffects } from './BackgroundEffects';
import { OrganCard } from './OrganCard';
import { DetailPanel } from './DetailPanel';

export default function OrganSystems() {
    const [activeProduct, setActiveProduct] = useState<ProductType>('essentials');
    const [activeIndex, setActiveIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const currentData = organSystemsData[activeProduct];
    const currentSystem = currentData.systems[activeIndex];

    // Handle product toggle
    const handleProductToggle = (product: ProductType) => {
        setActiveProduct(product);
        setActiveIndex(0); // Reset to first system when switching products
    };

    // Visibility observer for animation performance
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsVisible(entry.isIntersecting);
                });
            },
            { rootMargin: '50px', threshold: 0.1 }
        );

        const section = document.getElementById('organ-systems-section');
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const isLongevity = activeProduct === 'longevity';

    return (
        <section
            id="organ-systems-section"
            data-active-product={activeProduct}
            className={`relative pt-16 pb-20 md:pt-20 md:pb-[100px] lg:pt-[120px] lg:pb-[160px] overflow-hidden transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] contain-[layout_style]
        ${isVisible ? 'is-visible' : ''}
        ${isLongevity ? 'bg-[#FDFBF7]' : 'bg-[#fff9f9]'}`}
        >
            {/* Background Effects */}
            <BackgroundEffects product={activeProduct} />

            {/* Main Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10 lg:px-[60px] [contain:layout]">
                {/* Product Toggle */}
                <ProductToggle activeProduct={activeProduct} onToggle={handleProductToggle} />

                {/* Content Panel */}
                <div className="animate-fade-in">
                    {/* Section Header */}
                    <SectionHeader
                        eyebrow={currentData.eyebrow}
                        title={currentData.title}
                        subtitle={currentData.subtitle}
                        product={activeProduct}
                    />

                    {/* Interactive Layout */}
                    <div className="grid gap-8 lg:grid-cols-[minmax(320px,440px)_1fr] lg:gap-12 xl:gap-16 lg:items-start">
                        {/* Organ Systems Grid */}
                        <div
                            className={`grid gap-3 md:gap-4 ${isLongevity
                                ? 'grid-cols-2 lg:grid-rows-2'
                                : 'grid-cols-3'
                                }`}
                            role="listbox"
                            aria-label={`Select ${isLongevity ? 'a cellular benefit' : 'an organ system'}`}
                        >
                            {currentData.systems.map((system) => (
                                <OrganCard
                                    key={system.id}
                                    system={system}
                                    isActive={activeIndex === system.index}
                                    onClick={() => setActiveIndex(system.index)}
                                    product={activeProduct}
                                />
                            ))}
                        </div>

                        {/* Detail Panel */}
                        <div className="order-first lg:order-last" aria-live="polite">
                            <DetailPanel system={currentSystem} product={activeProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
