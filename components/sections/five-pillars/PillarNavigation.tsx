import { Pillar } from './types';
import { usePillarsContext } from './PillarsContext';

interface PillarNavigationProps {
    pillars: Pillar[];
}

export const PillarNavigation = ({ pillars }: PillarNavigationProps) => {
    const { activeProduct, activePillar, isEssentials, setActivePillar } = usePillarsContext();
    const currentActivePillarIndex = activePillar[activeProduct];

    return (
        <nav className="flex flex-col gap-2 lg:gap-3" role="tablist" aria-label="Select a pillar">
            {pillars.map((pillar, index) => (
                <button
                    key={pillar.id}
                    onClick={() => setActivePillar(activeProduct, index)}
                    className={`relative flex items-center gap-4 lg:gap-5 p-4 lg:p-5 rounded-2xl lg:rounded-[20px] cursor-pointer text-left overflow-hidden transition-all duration-[280ms] ${currentActivePillarIndex === index
                            ? 'translate-x-1'
                            : 'hover:translate-x-[3px]'
                        }`}
                    style={{
                        background: currentActivePillarIndex === index
                            ? isEssentials
                                ? 'linear-gradient(145deg, #A40011 0%, #50000B 60%, #3A0008 100%)'
                                : 'linear-gradient(145deg, #E78D2D 0%, #3A0000 70%, #3A0000 100%)'
                            : 'linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 234, 234, 0.9) 50%, rgba(255, 240, 240, 0.85) 100%)',
                        backdropFilter: currentActivePillarIndex === index ? 'none' : 'blur(12px)',
                        WebkitBackdropFilter: currentActivePillarIndex === index ? 'none' : 'blur(12px)',
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: currentActivePillarIndex === index
                            ? isEssentials ? '#A40011' : '#E78D2D'
                            : 'rgba(164, 0, 17, 0.08)',
                        boxShadow: currentActivePillarIndex === index
                            ? '0 8px 32px rgba(164, 0, 17, 0.18), 0 2px 8px rgba(80, 0, 11, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
                            : '0 4px 20px rgba(164, 0, 17, 0.06), 0 1px 4px rgba(80, 0, 11, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
                        transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)'
                    }}
                    role="tab"
                    aria-selected={currentActivePillarIndex === index}
                >
                    {/* Number badge */}
                    <span
                        className="absolute top-2 left-3 text-[10px] font-medium transition-all duration-[280ms]"
                        style={{
                            fontFamily: 'Aeonik, sans-serif',
                            color: currentActivePillarIndex === index ? 'rgba(255, 255, 255, 0.5)' : '#949596',
                            opacity: currentActivePillarIndex === index ? 1 : 0.6
                        }}
                    >
                        {pillar.number}
                    </span>

                    {/* Icon */}
                    <div
                        className="flex-shrink-0 w-11 h-11 lg:w-[52px] lg:h-[52px] flex items-center justify-center rounded-xl lg:rounded-[14px] transition-all duration-[280ms]"
                        style={{
                            background: currentActivePillarIndex === index
                                ? 'rgba(255, 255, 255, 0.15)'
                                : isEssentials
                                    ? 'linear-gradient(135deg, rgba(80, 0, 11, 0.06) 0%, rgba(80, 0, 11, 0.02) 100%)'
                                    : 'linear-gradient(135deg, rgba(231, 141, 45, 0.1) 0%, rgba(231, 141, 45, 0.03) 100%)',
                            color: currentActivePillarIndex === index
                                ? '#fff'
                                : isEssentials ? '#50000B' : '#E78D2D'
                        }}
                    >
                        <div className="w-[60%] h-[60%]">
                            {pillar.icon}
                        </div>
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0 flex flex-col gap-1">
                        <span
                            className="text-[13px] md:text-[15px] lg:text-base font-semibold leading-[1.3] transition-colors duration-[280ms]"
                            style={{
                                fontFamily: 'Aeonik, sans-serif',
                                color: currentActivePillarIndex === index ? '#fff' : '#50000B'
                            }}
                        >
                            {pillar.label}
                        </span>
                        <span
                            className="text-[10px] md:text-xs leading-[1.4] transition-colors duration-[280ms]"
                            style={{
                                fontFamily: 'Aeonik, sans-serif',
                                color: currentActivePillarIndex === index ? 'rgba(255, 255, 255, 0.7)' : '#7B1E2A'
                            }}
                        >
                            {pillar.preview}
                        </span>
                    </div>

                    {/* Arrow */}
                    <div
                        className={`flex-shrink-0 transition-all duration-[280ms] ${currentActivePillarIndex === index
                                ? 'opacity-80 translate-x-0 text-white'
                                : 'opacity-0 -translate-x-2'
                            }`}
                        style={{ color: currentActivePillarIndex === index ? '#fff' : '#50000B' }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" />
                        </svg>
                    </div>

                    {/* Active line */}
                    {currentActivePillarIndex === index && (
                        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[60%] bg-white rounded-r" />
                    )}
                </button>
            ))}
        </nav>
    );
};
