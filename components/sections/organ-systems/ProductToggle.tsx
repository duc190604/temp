'use client';

import React from 'react';
import { ProductType } from './types';

interface ProductToggleProps {
    activeProduct: ProductType;
    onToggle: (product: ProductType) => void;
}

export const ProductToggle: React.FC<ProductToggleProps> = ({ activeProduct, onToggle }) => {
    return (
        <div className="flex justify-center mb-12 lg:mb-[72px]">
            <div className="inline-flex relative bg-white rounded-full p-1.5 shadow-[0_4px_24px_rgba(80,0,11,0.08)] border border-[rgba(80,0,11,0.06)] min-w-fit">
                <button
                    onClick={() => onToggle('essentials')}
                    className={`relative z-10 inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 border-none bg-transparent text-xs md:text-sm font-medium tracking-[0.03em] cursor-pointer transition-all duration-[280ms] ease-out whitespace-nowrap flex-1 min-w-0 ${activeProduct === 'essentials'
                            ? 'text-white scale-[1.02] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]'
                            : 'text-[#7B1E2A]'
                        }`}
                    role="tab"
                    aria-selected={activeProduct === 'essentials'}
                    tabIndex={activeProduct === 'essentials' ? 0 : -1}
                >
                    <span className="block overflow-visible">Daily Ultimate Essentials</span>
                </button>
                <button
                    onClick={() => onToggle('longevity')}
                    className={`relative z-10 inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 border-none bg-transparent text-xs md:text-sm font-medium tracking-[0.03em] cursor-pointer transition-all duration-[280ms] ease-out whitespace-nowrap flex-1 min-w-0 ${activeProduct === 'longevity'
                            ? 'text-white scale-[1.02] drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]'
                            : 'text-[#7B1E2A]'
                        }`}
                    role="tab"
                    aria-selected={activeProduct === 'longevity'}
                    tabIndex={activeProduct === 'longevity' ? 0 : -1}
                >
                    <span className="block overflow-visible">Daily Ultimate Longevity</span>
                </button>
                <span
                    className={`absolute top-1.5 left-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-full shadow-[0_4px_16px_rgba(80,0,11,0.25),0_2px_4px_rgba(164,0,17,0.15)] transition-all duration-[420ms] ease-out z-[1] ${activeProduct === 'essentials'
                            ? 'translate-x-0 bg-gradient-to-br from-[#50000B] to-[#A40011]'
                            : 'translate-x-full bg-gradient-to-br from-[#E78D2D] to-[#3A0000] shadow-[0_4px_16px_rgba(231,141,45,0.3),0_2px_4px_rgba(231,141,45,0.2)]'
                        }`}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};
