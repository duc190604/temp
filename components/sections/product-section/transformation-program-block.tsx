'use client';

const experts = [
    {
        name: 'Dr. Dawn Mussallem',
        title: 'Cancer Survivor & Physician at Mayo Clinic',
        image: 'https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&width=300',
        link: '/pages/90-day-program#curriculum-dr-dawn-mussallem'
    },
    {
        name: 'Bobby Rich',
        title: 'Trainer to David Beckham and World-class Athletes',
        image: 'https://im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&width=300',
        link: '/pages/90-day-program#curriculum-bobby-rich'
    },
    {
        name: 'Dr. Suzanne Devkota',
        title: 'Gut Health Expert & Prof at Cedars Sinai',
        image: 'https://im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&width=300',
        link: '/pages/90-day-program#curriculum-dr-suzanne-devkota'
    },
    {
        name: 'Tavi Castro',
        title: 'Breathwork Expert & Free-Diving World Record Holder',
        image: 'https://im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&width=300',
        link: '/pages/90-day-program#curriculum-tavi-castro'
    },
    {
        name: 'Dr. Amy Shah',
        title: 'Double-Board Certified Physician and Host of "Save Yourself" Podcast',
        image: 'https://im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&width=300',
        link: '/pages/90-day-program#curriculum-dr-amy-shah'
    },
    {
        name: 'Dr. Ara Suppiah',
        title: 'Performance & Longevity Physician at LIV Golf',
        image: 'https://im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&width=300',
        link: '/pages/90-day-program#curriculum-dr-ara-suppiah'
    }
];

export default function TransformationProgramBlock() {
    return (
        <div className="border-2 border-[#BF9C74] rounded-[20px] md:rounded-[16px] sm:rounded-[14px] p-[18px] md:p-[22px] lg:p-[28px] my-4 md:my-3 sm:my-2.5 shadow-[0_4px_12px_0_rgba(217,119,6,0.12)]"
            style={{
                background: 'linear-gradient(171deg, #FFEFD6 6.83%, rgba(255, 238, 219, 0.50) 135.82%)'
            }}
        >
            {/* Header */}
            <div className="text-center">
                {/* Pill Badge */}
                <div className="inline-flex items-center justify-center gap-1.5 md:gap-[5px] sm:gap-1 rounded-[20px] md:rounded-[20px] sm:rounded-[16px] px-4 md:px-[14px] sm:px-3 py-2 md:py-1.5 sm:py-1 mb-4 md:mb-[14px] sm:mb-3"
                    style={{
                        background: 'linear-gradient(90deg, #EEB87A 0%, #DFCE89 100%)'
                    }}
                >
                    <span className="text-sm">🎓</span>
                    <span className="text-xs font-bold text-[#50000b] uppercase tracking-wide md:tracking-normal sm:tracking-tight">
                        90-DAY MEMBERS ONLY
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-[28px] font-medium text-[#50000B] mb-2 md:mb-1.5 sm:mb-1 leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    90-Day IM8 Transformation Program
                </h3>

                {/* Subtitle */}
                <p className="text-sm font-medium text-[#50000B] mb-5 md:mb-4 sm:mb-3.5 leading-relaxed md:leading-normal sm:leading-snug px-0 sm:px-1">
                    Exclusive access to quarterly masterclasses with our world-class Medical and Performance Experts
                </p>
            </div>

            {/* Experts Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-3 sm:gap-2.5 mb-5 md:mb-4 sm:mb-3.5">
                {experts.map((expert, index) => (
                    <a
                        key={index}
                        href={expert.link}
                        className="flex flex-col items-center text-center no-underline rounded-xl p-2 md:p-1.5 sm:p-1 -m-2 md:-m-1.5 sm:-m-1 transition-transform duration-500 ease-out hover:-translate-y-1 group"
                    >
                        <img
                            src={expert.image}
                            alt={expert.name}
                            width={150}
                            height={150}
                            loading="lazy"
                            className="w-full aspect-square rounded-xl md:rounded-[10px] sm:rounded-lg object-cover mb-2.5 md:mb-2 sm:mb-1.5 border-2 md:border-2 sm:border-[1.5px] border-[#BF9C74] shadow-sm transition-all duration-500 ease-out group-hover:border-[#a57d52] group-hover:shadow-[0_6px_18px_-4px_rgba(165,125,82,0.4)]"
                        />
                        <p className="text-[13px] font-bold text-[#50000b] mb-1 md:mb-0.5 sm:mb-0.5 leading-snug transition-colors duration-500 ease-out group-hover:text-[#3d000a]">
                            {expert.name}
                        </p>
                        <p className="text-[11px] font-normal text-[#6b4c3a] m-0 leading-relaxed md:leading-normal sm:leading-snug">
                            {expert.title}
                        </p>
                    </a>
                ))}
            </div>

            {/* Footer Text */}
            <p className="text-[13px] font-medium text-[#50000b] text-center leading-relaxed md:leading-normal sm:leading-snug m-0 pt-4 md:pt-[14px] sm:pt-3 border-t border-[rgba(191,156,116,0.3)]">
                Get personalized guidance, exclusive content, and direct access to leading experts in health optimization, performance, and longevity.
            </p>

            {/* Learn More Button */}
            <a
                href="/pages/90-day-program"
                className="flex items-center justify-center gap-2 w-full mt-4 px-5 md:px-5 sm:px-4 py-3 md:py-3 sm:py-2 rounded-xl border-none text-[13px] md:text-[13px] sm:text-[11px] font-bold text-[#50000b] no-underline uppercase tracking-wide cursor-pointer relative overflow-hidden shadow-[0_2px_8px_-2px_rgba(191,156,116,0.25),inset_0_1px_0_rgba(255,255,255,0.3)] transition-shadow duration-400 hover:shadow-[0_6px_20px_-4px_rgba(191,156,116,0.4),0_2px_8px_-2px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] group"
                style={{
                    background: 'linear-gradient(90deg, #EEB87A 0%, #DFCE89 100%)'
                }}
            >
                {/* Shimmer effect */}
                <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-all duration-600 ease-out group-hover:left-full pointer-events-none z-10"></span>

                {/* Glow ring */}
                <span className="absolute -inset-0.5 rounded-xl opacity-0 transition-opacity duration-400 group-hover:opacity-100 -z-10 blur-lg"
                    style={{
                        background: 'linear-gradient(135deg, rgba(238, 184, 122, 0.5) 0%, rgba(223, 206, 137, 0.3) 50%, rgba(238, 184, 122, 0.5) 100%)'
                    }}
                ></span>

                <span className="relative z-20">Learn More About the Program</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 relative z-20" aria-hidden="true">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </div>
    );
}
