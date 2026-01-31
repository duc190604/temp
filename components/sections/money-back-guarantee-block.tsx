'use client';

export default function MoneyBackGuaranteeBlock() {
    return (
        <div className="bg-[#F0FDF4] border-2 border-[#16A34A] rounded-2xl md:rounded-2xl px-6 md:px-5 py-5 md:py-4 my-4 flex items-center gap-4 md:gap-3">
            {/* Icon */}
            <div className="shrink-0 w-9 h-9 md:w-[30px] md:h-[30px] flex items-center justify-center">
                <img
                    src="https://im8health.com/cdn/shop/files/greencheck.png?v=1764066515&width=72"
                    alt="Guarantee"
                    width={36}
                    height={36}
                    loading="lazy"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Content */}
            <div className="flex-1">
                <h4 className="text-xl md:text-lg font-semibold text-[#50000b] mb-1 leading-tight"
                    style={{ fontFamily: 'var(--font-heading)' }}
                >
                    30-Day <span className="font-bold">100% Money Back Guarantee</span>
                </h4>
                <p className="text-[13px] md:text-xs font-normal text-[#50000b] m-0 leading-snug">
                    We're so confident you'll love it, take a full 30 days to decide
                </p>
            </div>
        </div>
    );
}
