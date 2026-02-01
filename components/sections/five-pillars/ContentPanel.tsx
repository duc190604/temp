import { Pillar } from './types';
import { usePillarsContext } from './PillarsContext';
import { CheckIcon } from './icons';

interface ContentPanelProps {
    pillar: Pillar;
}

export const ContentPanel = ({ pillar }: ContentPanelProps) => {
    const { isEssentials } = usePillarsContext();

    return (
        <div
            className="relative rounded-[28px] lg:rounded-[36px] overflow-hidden min-h-[420px] lg:min-h-[520px]"
            style={{
                background: isEssentials
                    ? 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(245, 234, 234, 0.95) 50%, rgba(255, 245, 245, 0.92) 100%)'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.98) 0%, rgba(255, 250, 240, 0.95) 50%, rgba(255, 252, 245, 0.92) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                borderWidth: '2px',
                borderStyle: 'solid',
                borderColor: isEssentials ? 'rgba(164, 0, 17, 0.08)' : 'rgba(231, 141, 45, 0.15)',
                boxShadow: isEssentials
                    ? '0 24px 64px rgba(164, 0, 17, 0.12), 0 8px 24px rgba(80, 0, 11, 0.06), 0 0 80px rgba(164, 0, 17, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
                    : '0 24px 64px rgba(231, 141, 45, 0.15), 0 8px 24px rgba(231, 141, 45, 0.08), 0 0 80px rgba(231, 141, 45, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.95)'
            }}
            aria-live="polite"
        >
            {/* Decorative overlay */}
            <div
                className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none z-0"
                style={{
                    background: isEssentials
                        ? 'linear-gradient(180deg, rgba(164, 0, 17, 0.06) 0%, rgba(164, 0, 17, 0.02) 50%, transparent 100%)'
                        : 'linear-gradient(180deg, rgba(231, 141, 45, 0.08) 0%, rgba(231, 141, 45, 0.03) 50%, transparent 100%)'
                }}
            />

            {/* Corner accent */}
            <div
                className="absolute top-0 right-0 w-40 h-40 pointer-events-none"
                style={{
                    background: isEssentials
                        ? 'linear-gradient(135deg, transparent 50%, rgba(80, 0, 11, 0.03) 50%)'
                        : 'linear-gradient(135deg, transparent 50%, rgba(231, 141, 45, 0.05) 50%)'
                }}
            />

            {/* Watermark */}
            <span
                className="absolute -top-5 -right-2.5 text-[clamp(180px,24vw,280px)] font-light italic leading-none pointer-events-none select-none"
                style={{
                    fontFamily: 'ABC Arizona Flare, serif',
                    color: isEssentials ? 'rgba(80, 0, 11, 0.025)' : 'rgba(231, 141, 45, 0.04)'
                }}
                aria-hidden="true"
            >
                {pillar.number}
            </span>

            {/* Panel Content */}
            <div className="relative z-[1] p-7 md:p-11 lg:p-[52px]">
                {/* Header */}
                <div className="flex items-start justify-between mb-7">
                    <div
                        className="w-[72px] h-[72px] md:w-[88px] md:h-[88px] flex items-center justify-center rounded-[20px] md:rounded-[24px]"
                        style={{
                            background: isEssentials
                                ? 'linear-gradient(135deg, rgba(80, 0, 11, 0.08) 0%, rgba(80, 0, 11, 0.03) 100%)'
                                : 'linear-gradient(135deg, rgba(231, 141, 45, 0.12) 0%, rgba(231, 141, 45, 0.04) 100%)',
                            color: isEssentials ? '#50000B' : '#E78D2D',
                            border: isEssentials ? '1px solid rgba(80, 0, 11, 0.06)' : '1px solid rgba(231, 141, 45, 0.15)'
                        }}
                    >
                        <div className="w-[55%] h-[55%]">
                            {pillar.icon}
                        </div>
                    </div>

                    <div
                        className="inline-flex items-center px-4 py-2 rounded-full text-[11px] font-semibold tracking-[0.1em] uppercase text-white"
                        style={{
                            fontFamily: 'Aeonik, sans-serif',
                            background: isEssentials ? '#50000B' : '#E78D2D',
                            boxShadow: isEssentials
                                ? '0 2px 8px rgba(80, 0, 11, 0.2)'
                                : '0 2px 8px rgba(231, 141, 45, 0.3)'
                        }}
                    >
                        Pillar {pillar.number}
                    </div>
                </div>

                {/* Body */}
                <div className="max-w-[540px]">
                    <h3
                        className="text-[clamp(23px,4vw,38px)] font-normal leading-[1.15] tracking-[-0.01em] m-0 mb-3"
                        style={{
                            fontFamily: 'ABC Arizona Flare, serif',
                            color: '#50000B'
                        }}
                    >
                        {pillar.title}
                    </h3>

                    {/* Meta line */}
                    <div className="flex items-center gap-4 mb-7">
                        <span
                            className="w-8 h-px flex-shrink-0 opacity-40"
                            style={{ background: isEssentials ? '#50000B' : '#3A0000' }}
                        />
                        <span
                            className="text-[9px] md:text-[11px] font-medium tracking-[0.18em] uppercase opacity-70"
                            style={{
                                fontFamily: 'Aeonik, sans-serif',
                                color: isEssentials ? '#50000B' : '#3A0000'
                            }}
                        >
                            {pillar.tagline}
                        </span>
                    </div>

                    {/* Description (longevity only) */}
                    {pillar.description && (
                        <div className="mb-6">
                            <h4
                                className="text-xs font-semibold tracking-[0.15em] uppercase mb-3"
                                style={{
                                    fontFamily: 'Aeonik, sans-serif',
                                    color: isEssentials ? '#50000B' : '#3A0000'
                                }}
                            >
                                Key Benefits
                            </h4>
                            <p
                                className="text-[13px] md:text-[15px] lg:text-base leading-[1.75] m-0"
                                style={{
                                    fontFamily: 'Aeonik, sans-serif',
                                    color: '#7B1E2A'
                                }}
                            >
                                {pillar.description}
                            </p>
                        </div>
                    )}

                    {/* Benefits */}
                    <div className="pt-6 border-t" style={{ borderColor: 'rgba(80, 0, 11, 0.06)' }}>
                        <h4
                            className="text-[11px] md:text-xs font-semibold tracking-[0.15em] uppercase mb-4"
                            style={{
                                fontFamily: 'Aeonik, sans-serif',
                                color: isEssentials ? '#50000B' : '#3A0000'
                            }}
                        >
                            Key Ingredients
                        </h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-3">
                            {pillar.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-xs md:text-sm" style={{ fontFamily: 'Aeonik, sans-serif', color: '#50000B' }}>
                                    <div className="flex-shrink-0" style={{ color: isEssentials ? '#50000B' : '#E78D2D' }}>
                                        <CheckIcon />
                                    </div>
                                    <span>{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
