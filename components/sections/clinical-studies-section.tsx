export default function ClinicalStudiesSection() {
    return (
        <section className="relative bg-[#eae0d2]">
            {/* Container */}
            <div className="relative ">
                <div className="[@media(min-width:750px)]:px-[20px] [@media(min-width:989px)]:px-[20px] pt-[80px]">
                    <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://im8health.com/cdn/shop/files/clinical-studies-min.jpg?v=1724176766"
                        alt="Clinical Studies Background"
                        className="w-full h-full object-cover absolute inset-0 hidden md:block"
                    />
                    <img
                        src="https://im8health.com/cdn/shop/files/clinical_studies.jpg?v=1724176815"
                        alt="Clinical Studies Background Mobile"
                        className="w-full h-full object-cover absolute inset-0 md:hidden"
                    />
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden relative z-10 px-4">
                    {/* Mobile Title */}
                    <div className="text-center mb-6">
                        <h2 className="text-white text-[35px] leading-tight">
                            Clinically Proven.<br />
                            More Energy.<br />
                            A Healthier Gut.<span className="text-[0.6em] align-super">*</span>
                        </h2>
                    </div>

                    {/* NSF Banner Mobile */}
                    <NSFCertifiedBanner />

                    {/* Description Mobile */}
                    <div className="mt-6 text-center">
                        <p className="text-white text-sm leading-relaxed">
                            Every ingredient is third-party tested and NSF Certified for Sport, ensuring it&apos;s free from over 280 banned substances, heavy metals and contaminants. Trusted by athletes and sports leagues, including WADA, NFL, MLB, NHL, and PGA.
                        </p>
                    </div>

                    {/* CTA Buttons Mobile */}
                    <div className="mt-8 space-y-3">
                        <a
                            href="/pages/third-party-tested"
                            className="block w-full text-center px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                        >
                            View Third-Party Testing Results
                        </a>
                        <a
                            href="/pages/science"
                            className="block w-full text-center px-6 py-3 bg-[#F4A5A5] text-gray-900 font-semibold rounded-lg hover:bg-[#F29B9B] transition-all duration-300"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden md:block relative z-10 [@media(min-width:990px)]:max-w-[90%] [@media(min-width:1439px)]:max-w-[83.133%] mx-auto">
                    <div className="flex items-center justify-between max-w-[1200px] mx-auto">

                        {/* Left Side - Statistics */}
                        <div className="w-[41.667%]">
                            {/* Title */}
                            <div className="mb-6 max-w-[460px]">
                                <h3 className="text-white font-medium text-xl leading-[120%] tracking-[-0.4px]">
                                    Daily Ultimate Essentials
                                </h3>
                            </div>

                            {/* Stats Grid */}
                            <div className="flex flex-wrap gap-5 gap-x-6 max-w-[460px]">
                                <StatCard
                                    percentage="95"
                                    description="Participants felt a noticeable boost in daily energy levels."
                                />
                                <StatCard
                                    percentage="85"
                                    description="Felt less bloated and had improved digestion."
                                />
                                <StatCard
                                    percentage="80"
                                    description="Participants reported getting better sleep."
                                />
                                <StatCard
                                    percentage="70"
                                    description="Participants noticed sharper focus and improved mental clarity."
                                />
                            </div>
                        </div>

                        {/* Right Side - Title & CTAs */}
                        <div className="w-[54.5%]">
                            {/* Title */}
                            <div className="mb-6">
                                <h2 className="text-white text-center text-[53px] font-light leading-tight tracking-[-1px]">
                                    Clinically Proven.<br />
                                    More Energy.<br />
                                    A Healthier Gut.<span className="text-[0.6em] align-super">*</span>
                                </h2>
                            </div>

                            {/* NSF Certified Banner */}
                            <NSFCertifiedBanner />

                            {/* Description */}
                            <div className="mt-6">
                                <p className="text-white text-center text-base leading-[135%] max-w-[420px] mx-auto">
                                    Every ingredient is third-party tested and NSF Certified for Sport, ensuring it&apos;s free from over 280 banned substances, heavy metals and contaminants. Trusted by athletes and sports leagues, including WADA, NFL, MLB, NHL, and PGA.
                                </p>
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-6 text-center space-y-3">
                                <a
                                    href="/pages/third-party-tested"
                                    className="block w-full max-w-[330px] mx-auto text-center px-1 py-3 bg-[#50000b] font-semibold rounded-full hover:bg-[#a40011] transition-all duration-400 text-white text-base uppercase"
                                >
                                    View Third-Party Testing Results
                                </a>
                                <a
                                    href="/pages/science"
                                    className="block w-full max-w-[330px] mx-auto text-center px-6 py-3 bg-[#F4A5A5] text-[#50000b] font-semibold hover:bg-[#F29B9B] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg uppercase rounded-full"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
                {/* Background Image - Static */}
                

                {/* Disclaimer */}
                <div className="relative z-10 px-4 md:px-[30px] py-6 md:py-10 mt-8 md:mt-0">
                    <p className="text-white text-xs leading-[135%] m-0">
                        *Results Based on a 12-Week Randomized, Controlled, Clinical Trial Conducted by the San Francisco Research Institute. Please Click Here for{' '}
                        <a
                            href="https://clinicaltrials.gov/study/NCT06655597?term=NCT06655597&rank=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-200 transition-colors"
                        >
                            FULL
                        </a>
                        {' '}Details of the National Library of Medicine Trial.
                    </p>
                </div>
            </div>
        </section>
    );
}

// Stat Card Component
function StatCard({ percentage, description }: { percentage: string; description: string }) {
    return (
        <div className="w-[calc(50%-12px)]">
            {/* Percentage */}
            <div className="pb-2 relative">
                <h2 className="text-white text-[80px] font-light leading-[100%] tracking-[-1px] m-0">
                    {percentage}%
                </h2>
                {/* Underline */}
                <div className="absolute left-0 bottom-0 w-full max-w-[184px] h-px bg-white"></div>
            </div>

            {/* Description */}
            <div className="pt-2">
                <p className="text-white text-base leading-[135%] m-0">
                    {description}
                </p>
            </div>
        </div>
    );
}

// NSF Certified Banner Component
function NSFCertifiedBanner() {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center  max-w-[680px] mx-auto mt-6 px-4 sm:pr-4 sm:pl-6 py-5 sm:py-3 rounded-[14px] border-2 border-[#F59E0B] bg-gradient-to-r from-[#FEF9E7] via-[#FEF3C7] to-[#FDE68A] shadow-[0_6px_20px_0_rgba(245,158,11,0.28),0_2px_6px_rgba(0,0,0,0.04)] gap-3 sm:gap-0 text-center sm:text-left w-fit">

            {/* Left Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-[14px] sm:pr-5 w-full sm:w-auto">
                <span className="text-[32px] sm:text-4xl leading-none drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)]">
                    🏆
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-[13px] sm:text-[15px] font-extrabold text-[#44403C] uppercase tracking-[0.6px] sm:tracking-[0.8px] leading-[1.2]">
                        NSF CERTIFIED FOR SPORT
                    </span>
                    <span className="text-xs sm:text-[13px] font-semibold text-[#B45309] tracking-[0.2px]">
                        280+ Substances Tested
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="block w-4/5 sm:w-0.5 h-0.5 sm:h-[52px] bg-gradient-to-r sm:bg-gradient-to-b from-[rgba(245,158,11,0.1)] via-[rgba(245,158,11,0.35)] to-[rgba(245,158,11,0.1)] flex-shrink-0 rounded-sm"></div>

            {/* Right Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 sm:pl-5 w-full sm:w-auto">
                <div className="w-[58px] h-[58px] sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border-2 sm:border-[3px] border-[#F59E0B] shadow-[0_2px_8px_rgba(245,158,11,0.3)] order-first sm:order-last">
                    <img
                        src="https://im8health.com/cdn/shop/files/media_arynasabalenka_2x_1.png?v=1750822572&width=150"
                        alt="Aryna Sabalenka"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-[13px] sm:text-sm font-semibold text-[#44403C] leading-[1.3]">
                        Trusted by <span className="text-[#B45309] font-bold">Aryna Sabalenka</span>
                    </span>
                    <span className="text-xs sm:text-[13px] font-medium text-[#57534E] leading-[1.3]">
                        World No. 1 Tennis Player
                    </span>
                </div>
            </div>
        </div>
    );
}
