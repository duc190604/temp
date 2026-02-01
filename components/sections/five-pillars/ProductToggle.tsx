import { usePillarsContext } from './PillarsContext';

export const ProductToggle = () => {
    const { activeProduct, isEssentials, setActiveProduct } = usePillarsContext();

    return (
        <div className="flex justify-center mb-12 lg:mb-[72px]">
            <div
                className="inline-flex relative bg-white rounded-full p-1.5 min-w-fit"
                role="tablist"
                aria-label="Product selection"
            >
                <button
                    onClick={() => setActiveProduct('essentials')}
                    className={`relative z-[2] inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 border-none bg-transparent text-[13px] md:text-sm font-medium tracking-[0.03em] cursor-pointer transition-all duration-[280ms] whitespace-nowrap flex-1 min-w-0 ${isEssentials ? 'text-white scale-[1.02]' : 'text-[#7B1E2A]'
                        }`}
                    style={{
                        fontFamily: 'Aeonik, sans-serif',
                        textShadow: isEssentials ? '0 1px 2px rgba(0, 0, 0, 0.15)' : 'none',
                        transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)'
                    }}
                    role="tab"
                    aria-selected={isEssentials}
                >
                    Daily Ultimate Essentials
                </button>
                <button
                    onClick={() => setActiveProduct('longevity')}
                    className={`relative z-[2] inline-flex items-center justify-center px-6 py-3.5 md:px-8 md:py-4 border-none bg-transparent text-[13px] md:text-sm font-medium tracking-[0.03em] cursor-pointer transition-all duration-[280ms] whitespace-nowrap flex-1 min-w-0 ${!isEssentials ? 'text-white scale-[1.02]' : 'text-[#7B1E2A]'
                        }`}
                    style={{
                        fontFamily: 'Aeonik, sans-serif',
                        textShadow: !isEssentials ? '0 1px 2px rgba(0, 0, 0, 0.15)' : 'none',
                        transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)'
                    }}
                    role="tab"
                    aria-selected={!isEssentials}
                >
                    Daily Ultimate Longevity
                </button>

                {/* Sliding indicator */}
                <span
                    className="absolute top-1.5 h-[calc(100%-12px)] w-[calc(50%-6px)] rounded-full z-[1] transition-all duration-[500ms]"
                    style={{
                        left: isEssentials ? '6px' : 'calc(50%)',
                        background: isEssentials
                            ? 'linear-gradient(135deg, #50000B 0%, #A40011 100%)'
                            : 'linear-gradient(135deg, #E78D2D 0%, #3A0000 100%)',
                        transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)'
                    }}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
};
