import { usePillarsContext } from './PillarsContext';

export const SectionHeader = () => {
    const { isEssentials } = usePillarsContext();

    return (
        <header className="text-center mb-12 lg:mb-[72px] relative">
            <span
                className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-6 px-6 py-2.5 rounded-full "
                style={{
                    fontFamily: 'Aeonik, sans-serif',
                    background: isEssentials
                        ? 'linear-gradient(135deg, #50000B 0%, #A40011 100%)'
                        : 'linear-gradient(135deg, #3A0000 0%, #E78D2D 100%)'
                }}
            >
                {isEssentials ? 'Comprehensive Wellness' : 'Advanced Longevity Science'}
            </span>
            <h2
                className="text-[clamp(32px,6vw,56px)] font-normal leading-[1.1] tracking-[-0.02em] m-0 mb-5"
                style={{ fontFamily: 'ABC Arizona Flare, serif', color: '#50000b' }}
            >
                {isEssentials ? '5 Pillars of Total Health' : '5 Pillars of Longevity'}
            </h2>
            <p
                className="text-[clamp(15px,2vw,18px)] font-normal leading-[1.7] max-w-[680px] mx-auto m-0 opacity-90"
                style={{ color: '#50000b', fontFamily: 'Aeonik, sans-serif' }}
            >
                {isEssentials
                    ? 'A holistic approach to wellness, addressing every dimension of your health with precision-formulated ingredients.'
                    : 'Cutting-edge science meets ancient wisdom to optimize your healthspan and support graceful aging.'}
            </p>
            {/* <div
                className="w-[60px] h-[3px] rounded-sm mt-7 mx-auto"
                style={{
                    background: isEssentials
                        ? 'linear-gradient(90deg, #50000B 0%, #FF9693 100%)'
                        : 'linear-gradient(90deg, #3A0000 0%, #F5A855 100%)'
                }}
            /> */}
        </header>
    );
};
