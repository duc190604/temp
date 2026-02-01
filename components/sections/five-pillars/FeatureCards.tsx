import { FeatureCard } from './types';
import { usePillarsContext } from './PillarsContext';

interface FeatureCardsProps {
    cards: FeatureCard[];
}

export const FeatureCards = ({ cards }: FeatureCardsProps) => {
    const { isEssentials } = usePillarsContext();

    return (
        <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {cards.map((card, idx) => (
                    <div
                        key={idx}
                        className="relative p-7 md:p-9 bg-white border rounded-[20px] md:rounded-[24px] text-center overflow-hidden transition-all duration-[280ms] hover:-translate-y-0.5"
                        style={{
                            borderColor: 'rgba(80, 0, 11, 0.06)',
                            transitionTimingFunction: 'cubic-bezier(0.33, 1, 0.68, 1)',
                            boxShadow: '0 2px 8px rgba(80, 0, 11, 0.04)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(80, 0, 11, 0.12)';
                            e.currentTarget.style.boxShadow = '0 8px 32px rgba(80, 0, 11, 0.08), 0 2px 8px rgba(80, 0, 11, 0.04)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(80, 0, 11, 0.06)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(80, 0, 11, 0.04)';
                        }}
                    >
                        <div
                            className="relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl"
                            style={{
                                background: isEssentials
                                    ? 'linear-gradient(135deg, rgba(80, 0, 11, 0.06) 0%, rgba(80, 0, 11, 0.02) 100%)'
                                    : 'linear-gradient(135deg, rgba(231, 141, 45, 0.1) 0%, rgba(231, 141, 45, 0.03) 100%)',
                                color: isEssentials ? '#50000B' : '#E78D2D'
                            }}
                        >
                            <div className="w-[55%] h-[55%]">
                                {card.icon}
                            </div>
                        </div>
                        <h4
                            className="text-[13px] md:text-sm md:text-[15px] font-semibold m-0 mb-2 leading-[1.3]"
                            style={{ fontFamily: 'Aeonik, sans-serif', color: '#50000B' }}
                        >
                            {card.title}
                        </h4>
                        <p
                            className="text-[11px] md:text-[13px] m-0 leading-[1.6]"
                            style={{ fontFamily: 'Aeonik, sans-serif', color: '#7B1E2A' }}
                        >
                            {card.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};
