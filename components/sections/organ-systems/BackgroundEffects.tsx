'use client';

import React from 'react';
import { ProductType } from './types';

interface BackgroundEffectsProps {
    product?: ProductType;
}

export const BackgroundEffects: React.FC<BackgroundEffectsProps> = ({ product = 'essentials' }) => {
    const isLongevity = product === 'longevity';

    return (
        <>
            {/* Dimensional Grid Background - Desktop Only */}
            <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-100 transition-opacity duration-600 ease-out">
                {/* Perspective Grid Container */}
                <div className="absolute inset-0 [perspective:800px] [perspective-origin:50%_30%]">
                    {/* Horizontal Grid Lines */}
                    <div
                        className="absolute top-0 -left-1/2 w-[200%] h-[200%] min-h-screen [transform:rotateX(70deg)_translateZ(-100px)] [transform-origin:center_top] animate-gridScrollVertical opacity-100 [filter:blur(0.5px)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [perspective:1000px] transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        style={{
                            backgroundImage: isLongevity
                                ? 'repeating-linear-gradient(0deg, transparent 0px, transparent 50px, rgba(180, 140, 30, 0.2) 50px, rgba(180, 140, 30, 0.2) 51px)'
                                : 'repeating-linear-gradient(0deg, transparent 0px, transparent 50px, rgba(164, 0, 17, 0.18) 50px, rgba(164, 0, 17, 0.18) 51px)'
                        }}
                    />

                    {/* Vertical Grid Lines */}
                    <div
                        className="absolute top-0 -left-1/2 w-[200%] h-[200%] min-h-screen [transform:rotateX(70deg)_translateZ(-100px)] [transform-origin:center_top] animate-gridScrollHorizontal opacity-100 [filter:blur(0.5px)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [perspective:1000px] transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                        style={{
                            backgroundImage: isLongevity
                                ? 'repeating-linear-gradient(90deg, transparent 0px, transparent 50px, rgba(180, 140, 30, 0.18) 50px, rgba(180, 140, 30, 0.18) 51px)'
                                : 'repeating-linear-gradient(90deg, transparent 0px, transparent 50px, rgba(164, 0, 17, 0.15) 50px, rgba(164, 0, 17, 0.15) 51px)'
                        }}
                    />
                </div>

                {/* Distributed Glow Effect */}
                <div
                    className="absolute inset-0 [filter:blur(100px)] animate-gridGlowPulse opacity-100 [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    style={{
                        background: isLongevity
                            ? `
                                radial-gradient(ellipse 120% 80% at 20% 30%, rgba(231, 141, 45, 0.28) 0%, rgba(231, 141, 45, 0.12) 40%, transparent 70%),
                                radial-gradient(ellipse 120% 80% at 80% 70%, rgba(231, 141, 45, 0.28) 0%, rgba(231, 141, 45, 0.12) 40%, transparent 70%),
                                radial-gradient(ellipse 100% 100% at 50% 50%, rgba(231, 141, 45, 0.18) 0%, rgba(231, 141, 45, 0.09) 50%, transparent 80%)
                              `
                            : `
                                radial-gradient(ellipse 120% 80% at 20% 30%, rgba(164, 0, 17, 0.25) 0%, rgba(164, 0, 17, 0.1) 40%, transparent 70%),
                                radial-gradient(ellipse 120% 80% at 80% 70%, rgba(164, 0, 17, 0.25) 0%, rgba(164, 0, 17, 0.1) 40%, transparent 70%),
                                radial-gradient(ellipse 100% 100% at 50% 50%, rgba(164, 0, 17, 0.15) 0%, rgba(164, 0, 17, 0.08) 50%, transparent 80%)
                              `
                    }}
                />

                {/* Top Fade Overlay */}
                <div
                    className="absolute inset-0 opacity-100 transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                    style={{
                        background: isLongevity
                            ? `linear-gradient(180deg, rgba(250, 247, 238, 0.9) 0%, rgba(250, 247, 238, 0.6) 15%, rgba(250, 247, 238, 0.2) 35%, transparent 55%, rgba(248, 244, 232, 0.5) 75%, rgba(250, 247, 238, 0.9) 100%)`
                            : `linear-gradient(180deg, rgba(245, 234, 234, 0.9) 0%, rgba(245, 234, 234, 0.6) 15%, rgba(245, 234, 234, 0.2) 35%, transparent 55%, rgba(245, 234, 234, 0.3) 75%, rgba(245, 234, 234, 0.85) 100%)`
                    }}
                />
            </div>

            {/* Ambient Glow Orbs - Desktop Only */}
            <div
                className="hidden md:block absolute rounded-full [filter:blur(80px)] pointer-events-none opacity-100 animate-orbPulse z-[1] w-[600px] h-[600px] top-[10%] -left-[15%] [animation-delay:0s] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                    background: isLongevity
                        ? `radial-gradient(circle, rgba(231, 141, 45, 0.55) 0%, rgba(231, 141, 45, 0.28) 30%, rgba(231, 141, 45, 0.1) 60%, transparent 80%)`
                        : `radial-gradient(circle, rgba(164, 0, 17, 0.5) 0%, rgba(164, 0, 17, 0.25) 30%, rgba(164, 0, 17, 0.08) 60%, transparent 80%)`
                }}
                aria-hidden="true"
            />
            <div
                className="hidden md:block absolute rounded-full [filter:blur(80px)] pointer-events-none opacity-100 animate-orbPulse z-[1] w-[550px] h-[550px] bottom-0 -right-[15%] [animation-delay:-5s] [backface-visibility:hidden] [-webkit-backface-visibility:hidden] [transform:translateZ(0)] transition-all duration-550 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                style={{
                    background: isLongevity
                        ? `radial-gradient(circle, rgba(232, 163, 23, 0.5) 0%, rgba(232, 163, 23, 0.2) 30%, rgba(232, 163, 23, 0.05) 60%, transparent 80%)`
                        : `radial-gradient(circle, rgba(255, 150, 147, 0.5) 0%, rgba(255, 150, 147, 0.2) 30%, rgba(255, 150, 147, 0.05) 60%, transparent 80%)`
                }}
                aria-hidden="true"
            />
        </>
    );
};
