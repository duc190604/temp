import {
    checkIcon,
    ingredients,
    pillBg,
    pillBgSm,
    productImg,
} from "./mock-data";

const MonthlyBreakdown = () => {
    return (
        <div className="bg-[#f5eaea]">
            <div className="max-w-[1400px] mx-auto max-lg:px-0! md:px-[20px]">
                <div className="flex max-md:hidden">
                    <div className="flex flex-col gap-6 w-[47%] relative md:pt-16 md:pl-14 pt-10 pl-5">
                        <div className="w-full absolute opacity-25">
                            <img
                                src={pillBg}
                                alt="background"
                                className="w-full object-cover "
                                loading="lazy"
                            />
                        </div>
                        <h1 className="text-[40px] max-lg:text-[28px] leading-10 max-lg:leading-6 z-10 text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
                            Replaces 16
                            <br />
                            Supplements.
                            <br />
                            Saving You Money.
                        </h1>
                        <div className="z-10">
                            <button className="uppercase h-fit rounded-full bg-[#a40011] hover:bg-[#50000b] text-white duration-300 transition min-w-68 font-bold pt-3.25 pb-2.75 px-6.25 cursor-pointer py-3.5">
                                Shop Now
                            </button>
                        </div>
                    </div>
                    <div className="relative w-[53%] flex flex-col pt-20  pb-16 pl-42 pr-20 max-lg:py-10 max-lg:px-7.5">
                        <div className="absolute -left-47.25 max-lg:-left-30 top-20.5 max-lg:top-20 w-94.5 max-xl:w-52.5">
                            <div className="w-full relative">
                                <div className="absolute left-0 max-lg:left-6 bottom-[6%] max-lg:-bottom-8 p-6.5 max-lg:p-3 z-13 flex items-center justify-center flex-col gap-5 max-lg:gap-2 text-center shadow rounded-full bg-[#50000b] text-white translate-x-[calc(-75%-16px)] size-75 max-lg:size-46.5 h-[300px] w-[300px] lg:h-[320px] lg:w-[320px] rounded-full flex flex-col items-center justify-center">
                                    <p className="uppercase text-sm font-bold tracking-widest" style={{ fontFamily: 'var(--font-nb-architekt)' }}>ANNUAL SAVINGS</p>
                                    <div className="text-[34px] leading-10 text-white" style={{ fontFamily: 'var(--font-heading)' }}>
                                        <p className="max-lg:text-xl">$2,532 - $3,000</p>
                                        <p className="max-lg:text-sm text-center">per year</p>
                                    </div>
                                    <p className="text-[13px] max-lg:text-[11px] opacity-80">
                                        when switching to IM8
                                    </p>
                                </div>
                                <img src={productImg} alt="product" className="w-full " />
                            </div>
                        </div>
                        <div className="w-[86.81%] ml-auto text-[#50000b]">
                            <h1 className="text-[40px] max-lg:text-[28px] leading-10 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
                                Monthly Breakdown
                            </h1>
                            <div className="pt-14 max-lg:pt-3 pl-8.25 pr-6.25 max-w-full flex flex-col gap-4.25 max-lg:gap-3 text-[#50000b]">
                                {ingredients.map((item) => (
                                    <div key={item.item} className="relative">
                                        <div className="absolute flex items-center top-0 -left-22 max-lg:-left-8 translate-y-2">
                                            <div className="h-px w-14 max-lg:w-4 bg-[#50000b]"></div>
                                            <div className="size-2 max-lg:size-1 bg-[#a40011] rounded-full"></div>
                                        </div>
                                        <div className="flex justify-between text-xs md:text-[15px] 2xl:text-base">
                                            <p className="font-normal">{item.item}</p>
                                            <s className="opacity-60">${item.cost}</s>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8 max-lg:pt-4">
                                <div className="border border-[#50000b] rounded-xl w-full ">
                                    <div className="bg-[#f5eaea] pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 max-lg:text-xs flex items-center justify-between rounded-t-xl border-b border-[#50000b]">
                                        <p>Your Traditional Supplements</p>
                                        <s className="opacity-60">$545</s>
                                    </div>
                                    <div className="pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 max-lg:text-xs flex items-center justify-between bg-white rounded-b-xl">
                                        <p className="font-bold">IM8 Daily Ultimate Essentials</p>
                                        <p className="">$162</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:hidden px-5 py-14 relative w-full overflow-hidden text-[#50000b]">
                    <div className="absolute inset-0 flex items-start justify-center pt-10">
                        <img
                            src={pillBgSm}
                            alt="background"
                            className="object-contain w-full max-w-2xl opacity-25"
                            loading="lazy"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col">
                        <h1 className="text-center text-[32px] max-w-70 leading-8 mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
                            Replaces
                            <br />
                            16 Supplements,
                            <br />
                            Saving You Money.
                        </h1>

                        <div className="relative mt-23.5">
                            <div className="absolute left-1/2 -translate-x-1/2 -top-23 w-26.75 z-20">
                                <div className="relative">
                                    <img src={productImg} alt="product" className="w-full" />
                                    <div className="absolute bottom-2 right-0 translate-x-1/2 translate-y-1/2 p-3 flex items-center justify-center flex-col gap-2 text-center shadow rounded-full bg-[#50000b] text-white w-[180px] h-[180px] z-30">
                                        <p className="uppercase text-xs font-bold tracking-widest" style={{ fontFamily: 'var(--font-nb-architekt)' }}>
                                            ANNUAL SAVINGS
                                        </p>
                                        <div className="text-[24px] leading-8" style={{ fontFamily: 'var(--font-heading)' }}>
                                            <p className="max-lg:text-xl">$2,532 - $3,000</p>
                                            <p className="max-lg:text-sm">per year</p>
                                        </div>
                                        <p className="text-[10px] max-lg:text-[11px] opacity-80">
                                            when switching to IM8
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3.75 border border-[#50000b] rounded-xl w-full text-sm px-6 pb-7 pt-25 bg-[#f5eaea] mt-32">
                                {ingredients.map((item) => (
                                    <div
                                        key={item.item}
                                        className="flex items-center justify-between"
                                    >
                                        <div className="flex items-center gap-2">
                                            <img src={checkIcon} alt="check icon" className="w-4 h-4" />
                                            <p className="font-normal">{item.item}</p>
                                        </div>
                                        <s className="opacity-60" style={{ fontFamily: 'var(--font-nb-architekt)' }}>${item.cost}</s>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border border-[#50000b] rounded-xl w-full text-sm mt-4">
                            <div className="pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 bg-[#f5eaea] flex items-center justify-between rounded-t-xl border-b border-[#50000b]">
                                <p>Your Traditional Supplements</p>
                                <s className="opacity-60" style={{ fontFamily: 'var(--font-nb-architekt)' }}>$545</s>
                            </div>
                            <div className="pt-4 pr-6.25 pb-2.75 pl-8.25 max-lg:p-3 flex items-center justify-between bg-white rounded-b-xl">
                                <p className="font-bold">IM8 Daily Ultimate Essentials</p>
                                <p className="" style={{ fontFamily: 'var(--font-nb-architekt)' }}>$162</p>
                            </div>
                        </div>

                        <div className="max-w-full mx-auto pt-8">
                            <button className="uppercase h-fit rounded-full bg-[#a40011] hover:bg-[#50000b] text-white duration-300 transition min-w-68 font-bold pt-3.25 pb-2.75 px-6.25 cursor-pointer py-3.5 w-full">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthlyBreakdown;
