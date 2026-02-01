'use client';

import React from 'react';
import { OrganSystem, ProductType } from './types';
import { getIcon, CheckBadgeIcon } from './icons';

interface DetailPanelProps {
    system: OrganSystem;
    product: ProductType;
}

export const DetailPanel: React.FC<DetailPanelProps> = ({ system, product }) => {
    const Icon = getIcon(system.icon);
    const isLongevity = product === 'longevity';

    return (
        <div className={`relative rounded-[28px] lg:rounded-[36px] border-2 overflow-hidden min-h-[340px] lg:min-h-[420px] transition-all duration-[280ms] ease-out
      ${isLongevity
                ? 'bg-gradient-to-br from-[rgba(255,255,255,0.98)] via-[rgba(250,247,238,0.95)] to-[rgba(255,252,245,0.92)] border-[rgba(231,141,45,0.08)] shadow-[0_20px_60px_rgba(231,141,45,0.12),0_8px_24px_rgba(180,140,30,0.06),0_0_60px_rgba(231,141,45,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]'
                : 'bg-gradient-to-br from-[rgba(255,255,255,0.98)] via-[rgba(245,234,234,0.95)] to-[rgba(255,245,245,0.92)] border-[rgba(164,0,17,0.08)] shadow-[0_20px_60px_rgba(164,0,17,0.12),0_8px_24px_rgba(80,0,11,0.06),0_0_60px_rgba(164,0,17,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]'
            }
      backdrop-blur-[24px] [-webkit-backdrop-filter:blur(24px)] border-white/50`}
        >
            {/* Decorative gradient overlay */}
            <div
                className="absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
                style={{
                    background: isLongevity
                        ? 'linear-gradient(180deg, rgba(231, 141, 45, 0.04) 0%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(164, 0, 17, 0.03) 0%, transparent 100%)'
                }}
            />

            {/* Corner accent */}
            <div
                className="absolute inset-0 rounded-[inherit] z-0 pointer-events-none"
                style={{
                    background: isLongevity
                        ? 'linear-gradient(135deg, rgba(231, 141, 45, 0.12) 0%, transparent 30%, transparent 70%, rgba(231, 141, 45, 0.1) 100%)'
                        : 'linear-gradient(135deg, rgba(164, 0, 17, 0.04) 0%, transparent 25%, transparent 100%)'
                }}
            />

            {/* Decorative Corner */}
            <div
                className="absolute top-0 right-0 w-[120px] h-[120px] pointer-events-none"
                style={{
                    background: isLongevity
                        ? 'linear-gradient(135deg, transparent 50%, rgba(231, 141, 45, 0.05) 50%)'
                        : 'linear-gradient(135deg, transparent 50%, rgba(80, 0, 11, 0.03) 50%)'
                }}
            />

            {/* Background Icon Watermark */}
            <div
                className={`absolute -bottom-[15%] -right-[8%] lg:-bottom-[12%] lg:-right-[3%] w-[clamp(160px,30%,240px)] lg:w-[clamp(200px,35%,280px)] aspect-square flex items-center justify-center pointer-events-none select-none z-0
          ${isLongevity ? 'text-[#E78D2D] opacity-[0.06]' : 'text-[#50000B] opacity-[0.04]'}`}
            >
                <Icon />
            </div>

            {/* Content */}
            <div className="relative z-10 p-9 md:p-11 lg:p-[56px_52px]">
                <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {/* Icon Wrapper */}
                    <div className="relative flex-shrink-0">
                        <div className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-[20px] md:rounded-[24px] border transition-all duration-[550ms]
              ${isLongevity
                                ? 'bg-gradient-to-br from-[rgba(231,141,45,0.12)] to-[rgba(231,141,45,0.04)] text-[#E78D2D] border-[rgba(231,141,45,0.15)]'
                                : 'bg-gradient-to-br from-[rgba(80,0,11,0.08)] to-[rgba(80,0,11,0.03)] text-[#50000B] border-[rgba(80,0,11,0.06)]'
                            }`}>
                            <div className="w-[55%] h-[55%]">
                                <Icon />
                            </div>
                        </div>
                        <span className={`absolute -top-2 -right-2 w-7 h-7 flex items-center justify-center text-white text-[11px] font-semibold rounded-full transition-all duration-[550ms]
              ${isLongevity
                                ? 'bg-[#E78D2D] shadow-[0_2px_8px_rgba(231,141,45,0.4)]'
                                : 'bg-[#50000B] shadow-[0_2px_8px_rgba(80,0,11,0.3)]'
                            }`}>
                            {system.number}
                        </span>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0">
                        <h3
                            className={`text-[clamp(24px,4vw,34px)] font-normal m-0 mb-2.5 leading-[1.15] tracking-[-0.01em] transition-colors duration-[550ms]
              ${isLongevity ? 'text-[#50000B]' : 'text-[#50000B]'}`}
                            style={{ fontFamily: 'var(--font-heading)' }}
                        >
                            {system.title}
                        </h3>

                        {/* Meta Line + Ingredients */}
                        <div className="flex items-center gap-4 mb-7">
                            <span className={`w-8 h-px flex-shrink-0 opacity-40 transition-all duration-[550ms]
                ${isLongevity ? 'bg-[#3A0000]' : 'bg-[#50000B]'}`}
                            />
                            <span className={`text-[11px] font-medium tracking-[0.18em] uppercase opacity-70 transition-all duration-[550ms]
                ${isLongevity ? 'text-[#3A0000]' : 'text-[#50000B]'}`}>
                                {system.ingredients}
                            </span>
                        </div>

                        <p className="text-[15px] md:text-base leading-[1.75] text-[#7B1E2A] m-0 mb-7">
                            {system.description}
                        </p>

                        {/* Badge */}
                        <div className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full border text-[13px] font-medium transition-all duration-[550ms]
              ${isLongevity
                                ? 'bg-gradient-to-br from-[rgba(231,141,45,0.08)] to-transparent border-[rgba(231,141,45,0.15)] text-[#3A0000]'
                                : 'bg-gradient-to-br from-[rgba(80,0,11,0.04)] to-transparent border-[rgba(80,0,11,0.06)] text-[#50000B]'
                            }`}>
                            <CheckBadgeIcon />
                            <span>Clinically Dosed Ingredients</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
