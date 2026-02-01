"use client";
import React, { useState } from 'react';

const logo = "https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155";

const videoBgThumbnail =
    "//im8health.com/cdn/shop/files/preview_images/fbf49de132784b63b1209cf9f32ce77d.thumbnail.0000000000.jpg?v=1724177472";
const videoBg =
    "//im8health.com/cdn/shop/videos/c/vp/fbf49de132784b63b1209cf9f32ce77d/fbf49de132784b63b1209cf9f32ce77d.HD-720p-2.1Mbps-33478040.mp4?v=0";

const plusIcon = "https://im8health.com/cdn/shop/t/121/assets/footer_plus.svg";
const minusIcon = "https://im8health.com/cdn/shop/t/121/assets/footer_minus.svg";

interface NavLink {
    title: string;
    children: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
    {
        title: "SHOP",
        children: [
            { label: "Premium Core Nutrition", href: "#" },
            { label: "The Beckham Stack", href: "#" },
            { label: "Merchandise", href: "#" },
            { label: "Shop All", href: "#" },
        ],
    },
    {
        title: "COMPANY",
        children: [
            { label: "About Us", href: "#" },
            { label: "Science", href: "#" },
            { label: "Impact", href: "#" },
        ],
    },
    {
        title: "LEARN",
        children: [
            { label: "Reviews", href: "#" },
            { label: "Ingredients", href: "#" },
            { label: "Quality and Standards", href: "#" },
            { label: "IM8 Inner Circle", href: "#" },
            { label: "IM8 vs AG1 Next Gen", href: "#" },
            { label: "IM8 vs Live it Up Super Greens", href: "#" },
            { label: "IM8 vs Bloom Greens & Superfoods", href: "#" },
            { label: "IM8 vs Huel Daily Greens", href: "#" },
        ],
    },
    {
        title: "SUPPORT",
        children: [
            { label: "FAQs", href: "#" },
            { label: "Track My Order", href: "#" },
            { label: "Returns / Exchanges", href: "#" },
            { label: "Contact Us", href: "#" },
        ],
    },
    {
        title: "IM8 COMMUNITY",
        children: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "YouTube", href: "#" },
            { label: "Pinterest", href: "#" },
        ],
    },
];

const navLinksSm: NavLink[] = [
    {
        title: "SHOP",
        children: [
            { label: "Premium Core Nutrition", href: "#" },
            { label: "Shop All", href: "#" },
            { label: "The Beckham Stack", href: "#" },
            { label: "Merchandise", href: "#" },
        ],
    },
    {
        title: "COMPANY",
        children: [
            { label: "About Us", href: "#" },
            { label: "Impact", href: "#" },
            { label: "Science", href: "#" },
        ],
    },
    {
        title: "LEARN",
        children: [
            { label: "Reviews", href: "#" },
            { label: "Ingredients", href: "#" },
            { label: "Quality and Standards", href: "#" },
            { label: "IM8 Inner Circle", href: "#" },
            { label: "IM8 vs AG1 Next Gen", href: "#" },
            { label: "IM8 vs Live it Up Super Greens", href: "#" },
            { label: "IM8 vs Bloom Greens & Superfoods", href: "#" },
            { label: "IM8 vs Huel Daily Greens", href: "#" },
        ],
    },
    {
        title: "SUPPORT",
        children: [
            { label: "FAQs", href: "#" },
            { label: "Track My Order", href: "#" },
            { label: "Returns / Exchanges", href: "#" },
            { label: "Contact Us", href: "#" },
        ],
    },
    {
        title: "IM8 COMMUNITY",
        children: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "YouTube", href: "#" },
            { label: "Pinterest", href: "#" },
        ],
    },
];

// --- COMPONENTS ---

// Simply using standard input/button styling
const EmailJoinSm = () => {
    return (
        <div className="md:hidden relative flex flex-1 flex-col items-center gap-7.5">
            <div className="w-full h-full absolute bg-[#e1cbb9]/75 z-1"></div>
            <div className="w-full h-full absolute">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    poster={videoBgThumbnail}
                    className="w-full h-full object-cover"
                >
                    <source src={videoBg} type="video/mp4" />
                </video>
            </div>
            <div className="flex flex-col justify-center py-14 px-5 z-2 max-w-92.5 text-[#50000b] relative">
                <h4 className="text-center text-[40px] font-medium leading-[1.1]" style={{ fontFamily: 'var(--font-heading)' }}>
                    Join the community for exclusive wellness insights
                </h4>
                <div className="flex flex-col gap-3 mt-6">
                    <input
                        placeholder="EMAIL ADDRESS"
                        className="w-full uppercase rounded-full bg-white text-[#50000b] border border-[#50000b] placeholder:text-[#50000b] px-7.5 py-3 focus:ring-0 outline-none leading-5 min-h-12"
                        style={{ fontFamily: 'var(--font-nb-architekt)' }}
                    />
                    <button className="uppercase text-white bg-[#a40011] hover:bg-[#85000e] transition-colors rounded-full p-3.5 leading-5.5 font-bold h-fit w-full text-center">
                        Join Now
                    </button>
                </div>
                <p className="text-xs font-medium max-lg:text-center mt-4">
                    *By joining, you'll receive our wellness insights and can unsubscribe anytime.
                </p>
            </div>
        </div>
    );
};

const LinkAccordion = () => {
    const [openSections, setOpenSections] = useState<string[]>([]);

    const toggleSection = (title: string) => {
        setOpenSections(prev =>
            prev.includes(title)
                ? prev.filter(t => t !== title)
                : [...prev, title]
        );
    };

    return (
        <div className="w-full">
            {navLinksSm.map((section) => {
                const isOpen = openSections.includes(section.title);
                return (
                    <div key={section.title} className="border-b border-[#ff9693]/50 last:border-b text-[#ff9693]">
                        <button
                            onClick={() => toggleSection(section.title)}
                            className="hover:no-underline uppercase font-semibold flex items-center justify-between w-full text-2xl py-4 text-left"
                            style={{ fontFamily: 'var(--font-body)' }}
                        >
                            <h2>{section.title}</h2>
                            <img
                                src={isOpen ? minusIcon : plusIcon}
                                alt={isOpen ? "Collapse" : "Expand"}
                                className="w-6 h-6 shrink-0"
                            />
                        </button>
                        <div
                            className={`grid grid-cols-2 pb-0 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                                }`}
                        >
                            {section.children.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="pb-4 text-sm text-[#ff9693] no-underline"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const Footer = () => {
    return (
        <div className="bg-[#50000b] flex flex-col text-[#ff9693]" style={{ fontFamily: 'var(--font-body)' }}>
            <EmailJoinSm />
            <div className="im8-container lg:pt-18 md:pt-12.5 pt-10 sm:pb-8.5 pb-6 flex flex-col gap-14 lg:gap-12.5 sm:gap-10">
                <div className="flex max-lg:flex-col-reverse max-lg:gap-12.5 items-start md:mb-7.5">
                    <div className="w-full">
                        {/* Desktop Links */}
                        <div className="max-md:hidden grid grid-cols-5 gap-5">
                            {navLinks.map((section) => (
                                <div key={section.title}>
                                    <h2 className="uppercase font-bold text-base tracking-wide pb-2">
                                        {section.title}
                                    </h2>
                                    {section.children.map((item) => (
                                        <div className="py-2 text-sm" key={item.label}>
                                            <a href={item.href} className="hover:text-white transition-colors">
                                                {item.label}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Mobile Accordion */}
                        <div className="md:hidden w-full">
                            <LinkAccordion />
                        </div>
                    </div>

                    {/* Desktop Email Join */}
                    <div className="max-md:hidden flex flex-col gap-5 lg:w-[32.5%] w-[50%] max-lg:mx-auto pl-11.25 lg:border-l border-[#ff9693]/30">
                        <div className="uppercase font-bold text-[13px] tracking-wide max-lg:text-center">
                            Join the community for exclusive wellness insights
                        </div>
                        <div className="flex flex-col gap-3">
                            <input
                                placeholder="EMAIL ADDRESS"
                                className="w-full uppercase rounded-full bg-white text-[#50000b] placeholder:text-[#50000b] px-7.5 pl-7 py-3 focus:ring-0 outline-none leading-5 min-h-12"
                                style={{ fontFamily: 'var(--font-nb-architekt)' }}
                            />
                            <button className="uppercase text-[14px] text-white bg-[#a40011] hover:bg-[#85000e] transition-colors rounded-full p-3 leading-5.5 font-bold h-fit">
                                Join Now
                            </button>
                        </div>
                        <div>
                            <p className="text-xs max-w-70 max-lg:text-center opacity-80">
                                *By joining, you'll receive our wellness insights and can unsubscribe anytime.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col max-sm:items-center">
                    <img src={logo} alt="IM8 Logo" className="w-full max-w-[1240px] shrink-0" />
                    <div className="flex items-center gap-1 md:text-[#ffffff80] sm:pt-7.5 pt-2.5 text-xs opacity-70">
                        <span>© 2026 IM8®</span>
                        <a href="#" className="hover:text-white transition-colors">• Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">• Terms of Service</a>
                    </div>
                    <div className="mx-auto max-w-[800px] flex flex-col gap-2.5 my-12.5 max-sm:my-2.5 text-center">
                        <div className="p-2.5 border border-[#f5eaea]/30">
                            <p className="my-3.75 sm:font-bold text-[15px] sm:text-base">
                                *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
                            </p>
                        </div>
                        <p className="text-xs opacity-70">
                            **Free Welcome Kit available for new subscribers only.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
