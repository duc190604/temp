"use client";
import React from 'react';

// --- MOCK DATA ---
const checkIcon = "https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg";
const badgeBg = "https://im8health.com/cdn/shop/t/121/assets/whole_badge.svg";

interface DealType {
    firstImg: string;
    secondImg: string;
    imgSm: string;
    isBestSeller: boolean;
    isGradient: boolean;
    message: string;
    name: string;
    description: string;
    price: number;
    href: string;
}

const dealsData: DealType[] = [
    {
        firstImg: "//im8health.com/cdn/shop/files/Frame_1171275435.png?v=1762225645",
        secondImg: "//im8health.com/cdn/shop/files/DB.jpg?v=1731598505",
        imgSm: "//im8health.com/cdn/shop/files/Frame_1171275438.png?v=1762225645&width=940",
        isBestSeller: true,
        isGradient: false,
        message: "FEEL AMAZING TODAY",
        name: "Daily Ultimate Essentials: All-in-One Supplement",
        description: "Core nutrition with 92 nutrient-rich ingredients in one delicious drink.",
        price: 162,
        href: "/products/daily-ultimate-essentials",
    },
    {
        firstImg: "//im8health.com/cdn/shop/files/Frame_1171275436.png?v=1762225646",
        secondImg: "//im8health.com/cdn/shop/files/pdp_carousel_ESS01_grid-hover_1.jpg?v=1759218112",
        imgSm: "//im8health.com/cdn/shop/files/Frame_1171275439.png?v=1762225645&width=940",
        isBestSeller: false,
        isGradient: true,
        message: "STAY YOUNG TOMORROW",
        name: "Daily Ultimate Longevity: Healthy Aging",
        description: "The World's first supplement scientifically formulated to support all 12 hallmarks of aging.",
        price: 211,
        href: "/products/daily-ultimate-longevity",
    },
    {
        firstImg: "//im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_1X1_2_1.jpg?v=1762225129",
        secondImg: "//im8health.com/cdn/shop/files/pdp_carousel_BSK01_grid-hover.jpg?v=1759900880",
        imgSm: "//im8health.com/cdn/shop/files/20250922_DB_IM8_S10_102_16X9_1.png?v=1762225057&width=940",
        isBestSeller: true,
        isGradient: true,
        message: "The Ultimate Daily Ritual",
        name: "The Beckham Stack: Essentials + Longevity Set",
        description: "Daily Ultimate Essentials and Daily Ultimate Longevity.",
        price: 336,
        href: "/products/the-beckham-stack",
    },
];

// --- COMPONENTS ---

const BestSellerBadge = () => {
    return (
        <div className="absolute uppercase font-bold lg:w-16 lg:h-16 w-12 h-12 right-4 top-4 z-10" style={{ fontFamily: 'var(--font-nb-architekt)' }}>
            <img
                src={badgeBg}
                alt="Best Seller Badge"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="leading-[1.1] text-white text-center text-[10px]">
                    <div>Best</div>
                    <div>Seller</div>
                </div>
            </div>
        </div>
    );
};

const MessageBadge = ({ isGradient = false, message }: { isGradient?: boolean; message: string }) => {
    return (
        <b
            className={`
                rounded-full text-white py-2 px-4 text-xs w-fit
                ${isGradient
                    ? "bg-gradient-to-r from-[#a40011] to-[#e78d2d]"
                    : "bg-[#960010]"
                }
            `}
            style={{ fontFamily: 'var(--font-nb-architekt)' }}
        >
            {message}
        </b>
    );
};

const ImageAddButton = () => {
    return (
        <button
            className={`
                absolute bottom-4 right-4 uppercase lg:opacity-0 transition-all duration-400 cursor-pointer
                ease-in-out lg:translate-y-full lg:group-hover:translate-y-0 lg:group-hover:opacity-100 pt-3 pb-2.5 px-8
                text-[#50000b] bg-[#ffffff] border border-[#50000b] rounded-full hover:bg-[#50000b]
                hover:text-white font-bold text-[13px] leading-[1.4] text-center h-fit max-md:hidden
            `}
        >
            Add to Cart
        </button>
    );
};

const AddButton = () => {
    return (
        <div className="md:hidden w-full transition duration-300 bg-[#a40011] hover:bg-[#85000e] text-white text-base font-bold uppercase text-center rounded-full py-3 px-4 h-fit mt-2 cursor-pointer">
            Add to Cart
        </div>
    );
};

const Card = ({ item }: { item: DealType }) => {
    const {
        isBestSeller,
        message,
        isGradient,
        description,
        firstImg,
        name,
        price,
        secondImg,
        imgSm,
    } = item;
    return (
        <div className="flex flex-col group cursor-pointer">
            <div className="relative rounded-xl w-full lg:aspect-square aspect-[3/2] overflow-hidden">
                {isBestSeller && <BestSellerBadge />}
                <img
                    src={firstImg}
                    alt={name + " first image"}
                    loading="lazy"
                    className="max-md:hidden rounded-xl w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ease-in-out lg:group-hover:opacity-0"
                />
                <img
                    src={secondImg}
                    alt={name + " second image"}
                    loading="lazy"
                    className="max-lg:hidden rounded-xl w-full h-full absolute inset-0 object-cover transition-all duration-500 opacity-0 ease-in-out group-hover:opacity-100 scale-110 group-hover:scale-100"
                />
                <img
                    src={imgSm}
                    alt={name + " small image"}
                    loading="lazy"
                    className="md:hidden rounded-xl w-full h-full absolute inset-0 object-cover object-top"
                />
                <ImageAddButton />
            </div>
            <div className="py-4 flex flex-col gap-3">
                <MessageBadge message={message} isGradient={isGradient} />
                <h3 className="font-medium text-2xl max-md:text-[20px] w-full md:w-[80%] lg:w-[60%] text-[#50000b]">
                    {name}
                </h3>
                <div className="flex flex-col gap-1 text-sm max-md:text-xs text-[#50000b]">
                    <p>{description}</p>
                    <p className="font-bold">From ${price}</p>
                </div>
                <AddButton />
            </div>
        </div>
    );
};

export const PremiumSection = () => {
    return (
        <section className="bg-white">
            <div className="im8-container md:pt-26 md:pb-10 pt-19.5 pb-7.5">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col">
                        <h2 className="lg:text-[52px] md:text-4xl text-[28px] max-md:mb-4 text-[#50000b] leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                            Premium Core Nutrition
                        </h2>
                        <div className="flex max-md:flex-col md:items-center md:gap-4 gap-2 text-[#50000b] text-[14px]">
                            <div className="flex items-center gap-2">
                                <span>
                                    <img src={checkIcon} alt="check icon" className="mb-px w-4 h-4" />
                                </span>
                                <span>
                                    <strong>30-Day</strong> money back guarantee
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <img src={checkIcon} alt="check icon" className="mb-px w-4 h-4" />
                                </span>
                                <span>
                                    <strong>Update</strong> or <strong>cancel</strong> anytime
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>
                                    <img src={checkIcon} alt="check icon" className="mb-px w-4 h-4" />
                                </span>
                                <span>
                                    <strong>Free shipping</strong> for all subscriptions
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                        {dealsData.map((item) => (
                            <a className="" href={item.href} key={item.name}>
                                <Card item={item} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
