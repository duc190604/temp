'use client'
import { useState } from "react";
import {
    dailyProduct,
    dailyStandards,
    leadingProduct,
    leadingStandards,
} from "./mock-data";
import { RedCheck, GreyX, GreenX, GreenCheck } from "./icons";
import { SupplementFactsModal } from "./supplement-facts-modal";

const StandardSection = () => {
    const [isMore, setIsMore] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const redData = isMore
        ? [...dailyStandards]
        : [...dailyStandards.slice(0, 10)];
    const greenData = isMore
        ? [...leadingStandards]
        : [...leadingStandards.slice(0, 10)];

    return (
        <div className="bg-[#eae0d2]">
            <div id="standard" className="im8-container md:py-26 pt-14 pb-9.5">
                <div className="flex flex-col mx-auto">
                    <h1 className="md:text-[52px] text-[40px] text-center text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
                        IM8: The New Gold Standard
                    </h1>
                    <div className="w-full rounded-xl grid grid-cols-2 md:mt-14 mt-20 border border-[#50000b]">
                        <div className="rounded-l-xl ">
                            <div className="bg-[#50000b] p-4 pt-2.5 flex max-md:flex-col-reverse rounded-tl-xl md:h-14 h-20.5">
                                <div className="md:pl-10 pt-1 text-white w-full font-bold max-md:text-sm max-md:text-center">
                                    Daily Ultimate Essentials
                                </div>
                                <div className="md:-mt-20 -mt-60 h-28 w-21.25 relative max-md:translate-x-14">
                                    <img
                                        src={dailyProduct}
                                        alt="daily product"
                                        className="size-full object-contain absolute "
                                    />
                                </div>
                            </div>
                            {redData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center md:gap-5 gap-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 bg-[#f5eaea] border-[#50000b] border-b last:border-b-0 border-r ${isMore ? "last:rounded-bl-xl" : ""
                                        } text-[#50000b]`}
                                >
                                    <div>
                                        {item.isTrue ? (
                                            <RedCheck className="max-md:size-4" />
                                        ) : (
                                            <GreyX className="max-md:size-4" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-bold max-md:text-[13px]">{item.item}</p>
                                        {item.description ? (
                                            <p className="text-xs max-md:text-[11px]">
                                                {item.description}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="rounded-r-xl ">
                            <div className="bg-[#50000b] p-4 pt-2.5 flex max-md:flex-col-reverse rounded-tr-xl md:h-14 h-20.5">
                                <div className="md:pl-10 pt-1 text-white w-full font-bold max-md:text-sm max-md:text-center">
                                    Leading Greens Powder
                                </div>
                                <div className="md:-mt-20 -mt-60 h-28 w-21.25 relative max-md:translate-x-14">
                                    <img
                                        src={leadingProduct}
                                        alt="leading product"
                                        className="size-full object-contain absolute "
                                    />
                                </div>
                            </div>
                            {greenData.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center md:gap-5 gap-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 text-[#2d3b32] bg-[#b6c0b1] border-[#50000b] border-b last:border-b-0 border-l ${isMore ? "last:rounded-br-xl" : ""
                                        }`}
                                >
                                    <div>
                                        {item.isTrue ? (
                                            <GreenCheck className="max-md:size-4" />
                                        ) : (
                                            <GreenX className="max-md:size-4" />
                                        )}
                                    </div>
                                    <div>
                                        <p className="font-bold max-md:text-[13px]">{item.item}</p>
                                        {item.description ? (
                                            <p className="text-xs max-md:text-[11px]">
                                                {item.description}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                            ))}
                        </div>
                        {!isMore && (
                            <div
                                className="col-span-2 md:pl-12 md:py-1.25 md:pr-2.5 p-3.75 md:h-14 h-21.25 border-t border-[#50000b] rounded-b-xl bg-[#f5eaea] flex items-center justify-center cursor-pointer text-[#50000b]"
                                onClick={() => setIsMore(true)}
                            >
                                See more
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="uppercase bg-[#a40011] hover:bg-[#50000b] text-white rounded-full transition duration-300 font-bold py-[13px] px-[17px] text-base min-w-68"
                    >
                        View Supplement Facts
                    </button>
                </div>
            </div>
            <SupplementFactsModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default StandardSection;
