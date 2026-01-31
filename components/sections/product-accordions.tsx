'use client';

import { useState } from 'react';

interface AccordionItem {
    question: string;
    answer: string;
    isHTML?: boolean;
}

const accordionData: AccordionItem[] = [
    {
        question: 'Ingredients',
        answer: `<p>Our comprehensive formula combines 92 nutrient-rich ingredients to fuel your body with everything it needs for optimal health. Packed with essential vitamins, minerals, antioxidants, superfoods, greens, pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*</p>`,
        isHTML: true
    },
    {
        question: 'Third-Party Tested',
        answer: `<p>Every ingredient and dosage in IM8 is third-party tested. This guarantees that what you see on the label is what you get, so you know exactly what you're putting into your body.</p>`,
        isHTML: true
    },
    {
        question: 'How to Enjoy',
        answer: `<ol><li>Scoop out one serving (12 grams)</li><li>Add 8-12 oz of cold water, juice, smoothie, or your favorite drink (Use less liquid for a stronger taste)</li><li>Shake or blend well then enjoy</li></ol>`,
        isHTML: true
    },
    {
        question: 'Tasting Notes',
        answer: `<p>Experience a delightful blend with earthy undertones, a subtle tartness, and a hint of chocolate, culminating in a smooth acai and mixed berries finish.</p>`,
        isHTML: true
    }
];

export default function ProductAccordions() {
    const [openIndex, setOpenIndex] = useState<number>(0); // First item open by default

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="my-6">
            <ul className="list-none p-0 m-0 space-y-3">
                {accordionData.map((item, index) => (
                    <li key={index} className="border-b border-[#50000b] last:border-b-0">
                        {/* Question */}
                        <div
                            className="flex items-center justify-between cursor-pointer py-4 group"
                            onClick={() => toggleAccordion(index)}
                        >
                            <h4 className="text-base font-bold text-[#50000b] m-0" style={{ fontFamily: 'var(--font-body)' }}>
                                {item.question}
                            </h4>

                            {/* Plus/Minus Icon */}
                            <div className="relative w-3 h-3 shrink-0 ml-2">
                                {/* Horizontal line (always visible) */}
                                <span className="absolute top-1/2 left-0 w-full h-0.5 bg-[#50000b] -translate-y-1/2"></span>

                                {/* Vertical line (hidden when open) */}
                                {openIndex !== index && (
                                    <span className="absolute top-1/2 left-1/2 w-0.5 h-full bg-[#50000b] -translate-x-1/2 -translate-y-1/2"></span>
                                )}
                            </div>
                        </div>

                        {/* Answer */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100 pb-4' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div
                                className="text-sm text-[#50000b] leading-relaxed prose prose-sm max-w-none prose-p:my-2 prose-ol:my-2 prose-li:my-1"
                                dangerouslySetInnerHTML={{ __html: item.answer }}
                            />

                            {/* View Supplement Facts Button - Only for Ingredients */}
                            {index === 0 && openIndex === index && (
                                <button className="mt-3 px-5 py-2.5 bg-[#a40011] text-white text-sm font-semibold rounded-full border-none cursor-pointer transition-all hover:bg-[#50000b] hover:shadow-lg">
                                    View Supplement Facts
                                </button>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
