"use client";
import React, { useState } from 'react';

// --- MOCK DATA ---
const bgImg = "//im8health.com/cdn/shop/files/Rectangle_98-min_2.jpg?v=1731857082";
const bgImgSm = "//im8health.com/cdn/shop/files/Rectangle_3260-min_1.jpg?v=1731857660";
const plusIcon = "https://im8health.com/cdn/shop/t/121/assets/IM8_faq_plus.svg";
const minusIcon = "https://im8health.com/cdn/shop/t/121/assets/IM8_faq_minus.svg";

interface FAQType {
    title: string;
    description: string[];
}

const faqData: FAQType[] = [
    {
        title: "What is IM8?",
        description: [
            "IM8 is the pinnacle of premium core nutrition, born from a collaboration between Prenetics (NASDAQ:PRE), David Beckham as a co-founding partner, and an elite team of scientists spanning space exploration, medical professionals, and academic excellence.",
            "Combining cutting-edge science with nature's most potent ingredients, IM8 delivers a holistic, science-backed approach to health, empowering you to live your most vibrant life.",
        ],
    },
    {
        title: "What is David Beckham's involvement in IM8?",
        description: [
            "David Beckham is a co-founding partner of IM8, driven by his commitment to simplifying wellness. After years of working with top medical professionals and nutrition experts, David wanted to make core nutrition more accessible. In collaboration with the Prenetics team and world-class scientists, IM8 was developed to deliver essential nutrients in a simple and effective way. David's vision for IM8 is to provide best-in-class core nutrition for today and tomorrow, making it easy for everyone to prioritize their health.",
        ],
    },
    {
        title: "Who is on the IM8 Scientific Advisory Board?",
        description: [
            "The IM8 Scientific Advisory Board comprises distinguished professionals with impressive backgrounds:",
            "Dr. Dawn Mussallem, a renowned oncologist at the Mayo Clinic, brings her expertise in integrative and lifestyle medicine.",
            "Dr. James L. Green, the former Chief Scientist at NASA, has an extensive career in space and planetary science.",
            "Dr. David Katz,is a globally recognized preventive medicine specialist and the founding director of the Yale-Griffin Prevention Research Center.",
            "Prof. Suzanne Devkota serves as an Associate Professor and Director of the Microbiome Research Institute at Cedars-Sinai Medical Center, specializing in gut health and microbiome research.",
            "Prof. Stephen Anton is a Professor and Chief of the Division of Clinical Research at the University of Florida's Department of Aging and Geriatric Research, focusing on metabolism and healthy aging.",
            "Dr. James DiNicolantonio is a cardiovascular research scientist and Doctor of Pharmacy, known for his influential work in the field of heart health and evidence-based nutrition.",
            "Prof. Ock Chun is a distinguished expert in nutritional sciences at University of Connecticut with over 25 years of experience in the field.",
            "Their combined academic credentials and scientific expertise form the backbone of IM8's innovation and product development.",
        ],
    },
    {
        title: "What are the main benefits of IM8 Daily Essentials + Hydration?",
        description: [
            "IM8 Daily Essentials is your all-in-one solution, replacing the need for 16 supplements, targeting eight key areas of health: Energy, Immunity, Cognitive Function, Digestion, Cardiovascular Health, Hydration, Nourishment, and Cellular Renewal. With 92 carefully selected premium ingredients, including CoQ10 (100mg) for heart health and MSM (1,000mg) for joint support, IM8 Daily Essentials makes it easier to live a healthier, more vibrant life. Plus, it tastes great, so it's something you'll look forward to each day.",
        ],
    },
    {
        title: "What does IM8 Daily Ultimate Essentials taste like?",
        description: [
            "We've worked hard to make sure IM8 Daily Essentials is something you enjoy drinking every day. Experience a delightful blend of flavors with earthy undertones, complemented by a subtle tartness and a hint of chocolate. The flavor then culminates in a smooth finish of acai and mixed berries.",
            "For a more robust flavor, use less water, or add more water for a delicate, lighter taste. This balance of flavors makes IM8 Daily Essentials both refreshing and satisfying, turning your daily supplement into an enjoyable part of your routine.",
        ],
    },
    {
        title: "What countries do you currently ship to?",
        description: [
            "IM8 currently ships to 31 countries (with free shipping for all subscriptions to the United States, United Kingdom, Canada, Singapore and Hong Kong), including but not limited to the United States, Canada, United Kingdom, Australia, and many countries across Europe, Asia, and South America. The full list of countries we ship to can be found here.",
            "Please note that international shipping rates vary by country and will be reflected during checkout. We do not add any margins to the shipping cost—what you see is the direct charge from our shipping provider.",
        ],
    },
];

export const FAQSection = () => {
    // Only allow one item open at a time (accordion behavior)
    const [openItem, setOpenItem] = useState<string | null>("What is IM8?");

    const toggleItem = (title: string) => {
        setOpenItem(openItem === title ? null : title);
    };

    return (
        <section id="faqs" className="bg-[#a40011]">
            <div className="flex max-md:flex-col md:min-h-screen">
                <div className="flex items-center justify-center md:w-1/2">
                    <div className="pt-10 md:pl-5 md:pr-10 xl:pr-30 px-5 md:pb-10 pb-14 xl:pl-14 ml-auto">
                        <h2
                            className="text-[52px] text-[#ff9693] leading-tight"
                        >
                            FAQs
                        </h2>
                        <div className="mt-2 text-white">
                            <div className="w-full">
                                {faqData.map((section) => {
                                    const { title, description } = section;
                                    const isOpen = openItem === title;
                                    return (
                                        <div
                                            key={title}
                                            className="border-b border-white last:border-b"
                                        >
                                            <button
                                                onClick={() => toggleItem(title)}
                                                className="hover:no-underline font-semibold flex items-center justify-between w-full text-base py-4 text-left cursor-pointer"
                                                style={{ fontFamily: 'var(--font-body)' }}
                                            >
                                                <span className='font-medium'>{title}</span>
                                                <img
                                                    src={isOpen ? minusIcon : plusIcon}
                                                    alt={isOpen ? "Collapse" : "Expand"}
                                                    className="w-4 h-4 shrink-0 pointer-events-none"
                                                />
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="text-base space-y-4">
                                                    {description.map((item, index) => (
                                                        <p key={index} className="leading-relaxed">
                                                            {item}
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-6">
                            <button
                                className="uppercase rounded-full bg-[#50000b] hover:bg-[#50000b] text-white transition-all duration-500 h-fit md:max-w-[230px] w-full py-3.5 px-4.5 font-bold text-base cursor-pointer"
                                style={{ fontFamily: 'var(--font-body)' }}
                            >
                                Explore All Faqs
                            </button>
                        </div>
                    </div>
                </div>
                <div className="max-md:order-first overflow-hidden md:w-1/2">
                    <img
                        src={bgImg}
                        alt="FAQs Background"
                        loading="lazy"
                        className="object-cover w-full h-full max-md:hidden"
                    />
                    <img
                        src={bgImgSm}
                        alt="FAQs Background Mobile"
                        loading="lazy"
                        className="object-cover w-full aspect-[4/3] md:hidden"
                    />
                </div>
            </div>
        </section>
    );
};
