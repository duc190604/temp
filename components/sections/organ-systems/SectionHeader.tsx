'use client';

import React from 'react';
import { ProductType } from './types';

interface SectionHeaderProps {
    eyebrow: string;
    title: string;
    subtitle: string;
    product: ProductType;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, subtitle, product }) => {
    const isLongevity = product === 'longevity';

    return (
        <header className="text-center mb-12 lg:mb-[72px] relative">
            <span
                className={`inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-6 px-6 py-2.5 rounded-full border-none transition-all duration-[550ms] ${isLongevity
                        ? 'bg-gradient-to-br from-[#3A0000] to-[#E78D2D] shadow-[0_4px_16px_rgba(231,141,45,0.3),0_2px_4px_rgba(231,141,45,0.2)]'
                        : 'bg-gradient-to-br from-[#50000B] to-[#A40011] shadow-[0_4px_16px_rgba(164,0,17,0.25),0_2px_4px_rgba(80,0,11,0.15)]'
                    }`}
            >
                {eyebrow}
            </span>

            <h2
                className="text-[clamp(32px,6vw,56px)] font-normal text-[#50000B] m-0 mb-5 leading-[1.1] tracking-[-0.02em]"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                {title}
            </h2>

            <p className="text-[clamp(15px,2vw,18px)] font-normal text-[#50000B] max-w-[550px] mx-auto m-0 leading-[1.7]">
                {subtitle}
            </p>

            <div
                className={`w-[60px] h-[3px] rounded-sm mt-7 mx-auto transition-all duration-[550ms] ${isLongevity
                        ? 'bg-gradient-to-r from-[#3A0000] to-[#F5A855]'
                        : 'bg-gradient-to-r from-[#50000B] to-[#FF9693]'
                    }`}
            />
        </header>
    );
};
