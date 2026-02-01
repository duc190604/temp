'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs, FreeMode } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';

interface ProductImage {
    id: string;
    url: string;
    alt: string;
    badge?: string;
    variant?: 'jar' | 'sachet' | 'quarterly';
    isQuarterlyAlt?: boolean;
}

const productImages: ProductImage[] = [
    {
        id: 'quarterly-alt',
        url: 'https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=1946',
        alt: 'Quarterly variant image',
        variant: 'jar',
        isQuarterlyAlt: true,
    },
    {
        id: 'quarterly-alt',
        url: 'https://im8health.com/cdn/shop/files/PDP_07c659fc-2e80-4d58-a136-6d06961f00aa.jpg?v=1766566325&width=1946',
        alt: 'Quarterly variant image',
        variant: 'sachet',
        isQuarterlyAlt: true,
    },
    {
        id: '31999526174887',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel01.jpg?v=1761040602&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    },
    {
        id: '31999526076583',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        // badge: 'Best Seller',
        variant: 'sachet'
    },
    {
        id: '31999555403943',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel02.jpg?v=1761042620&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        variant: 'sachet'
    },
    {
        id: '31999526011047',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel03.jpg?v=1761040602&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        variant: 'sachet'
    },
    {
        id: '31999526207655',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel04.jpg?v=1761040602&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        variant: 'sachet'
    },
    {
        id: '31999525945511',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel05.jpg?v=1761040601&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        variant: 'sachet'
    },
    {
        id: '31999526305959',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel06.jpg?v=1761040602&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        variant: 'sachet'
    },
    {
        id: '31999526142119',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel07.jpg?v=1761040602&width=1946',
        alt: 'Daily Ultimate Essentials: All-in-One Supplement',
        variant: 'sachet'
    },
    {
        id: '31999526043815',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel02.jpg?v=1761040602&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    },
    {
        id: '31999525978279',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel03.jpg?v=1761040601&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    },
    {
        id: '31999526273191',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel04.jpg?v=1761040602&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    },
    {
        id: '31999525912743',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel05.jpg?v=1761040602&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    },
    {
        id: '31999526240423',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel06.jpg?v=1761040602&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    },
    {
        id: '31999526109351',
        url: 'https://im8health.com/cdn/shop/files/pdp_essentials-jar_carousel07.jpg?v=1761040602&width=1946',
        alt: 'Forever Jar',
        variant: 'jar'
    }
];

interface ProductMediaGalleryProps {
    selectedVariant?: 'jar' | 'sachet';
    selectedPlan?: 'quarterly' | 'subscription';
}

export default function ProductMediaGallery({ selectedVariant = 'jar', selectedPlan = 'quarterly' }: ProductMediaGalleryProps) {
    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isThumbsBeginning, setIsThumbsBeginning] = useState(true);
    const [isThumbsEnd, setIsThumbsEnd] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    // Filter images based on selected variant and plan
    const filteredImages = productImages.filter(img => {
        // First check if image matches the selected variant
        const variantMatches = (selectedVariant === 'jar' && img.variant === 'jar') ||
            (selectedVariant === 'sachet' && img.variant === 'sachet');

        if (!variantMatches) return false;

        // If subscription plan is selected, hide quarterly alt images
        if (selectedPlan === 'subscription' && img.isQuarterlyAlt) return false;

        // Otherwise show the image
        return true;
    });

    const modalContent = isModalOpen ? (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8"
            style={{
                display: 'block',
                opacity: 1,
                transition: 'opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
        >
            <div
                className="absolute inset-0 bg-[#f2e0dd]/60 backdrop-blur-sm"
                onClick={() => setIsModalOpen(false)}
            />

            <div
                className="relative w-full h-full flex items-center justify-center"
                role="dialog"
                aria-label="Media gallery"
                aria-modal="true"
                tabIndex={-1}
                style={{
                    transform: 'scale(1) translateY(0px)',
                    opacity: 1,
                    transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
            >
                <div
                    className="relative max-w-5xl w-full mx-auto"
                    role="document"
                    aria-label="Media gallery"
                    tabIndex={0}
                >
                    <div className="relative flex items-center justify-center">
                        <div className="relative inline-block">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="absolute -top-5 -right-5 z-[999] cursor-pointer"
                                aria-label="Close"
                            >
                            <svg className="icon icon-close" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <g clipPath="url(#clip0_2571_42707)">
                                    <g filter="url(#filter0_b_2571_42707)">
                                        <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white" fillOpacity="0.8"></path>
                                        <path d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z" stroke="#50000B"></path>
                                    </g>
                                    <path d="M30.3633 30.3639L17.6354 17.636" stroke="#50000B" strokeWidth="2" strokeLinecap="square"></path>
                                    <path d="M30.3633 17.636L17.6354 30.3639" stroke="#50000B" strokeWidth="2" strokeLinecap="square"></path>
                                </g>
                                <defs>
                                    <filter id="filter0_b_2571_42707" x="-12" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"></feGaussianBlur>
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2571_42707"></feComposite>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2571_42707" result="shape"></feBlend>
                                    </filter>
                                    <clipPath id="clip0_2571_42707">
                                        <rect width="48" height="48" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            </button>
                            <img
                                src={filteredImages[activeIndex]?.url}
                                alt={filteredImages[activeIndex]?.alt || 'Product image'}
                                loading="lazy"
                                className="block max-h-[80vh] rounded-lg w-auto object-contain"
                                style={{
                                    objectFit: 'contain',
                                    objectPosition: 'center center'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : null;

    return (
        <div className="md:sticky md:top-24 md:self-start">


            {/* Reviews Summary Bar */}


            <div className="grid grid-cols-1 md:grid-cols-[60px_1fr] xl:grid-cols-[96px_1fr] gap-4 xl:gap-6 items-start">

                {/* Thumbnail Slider */}
                <div className="hidden md:flex flex-col items-center gap-4 h-full max-h-[600px] relative">
                    {/* Up Button */}
                    <button
                        type="button"
                        onClick={() => thumbsSwiper?.slidePrev()}
                        className={`absolute -top-10 left-1/2 -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full border border-[#50000b]/10 text-[#50000b] transition-all duration-300 hover:border-[#50000b] ${isThumbsBeginning ? 'opacity-0 pointer-events-none translate-y-2' : 'opacity-100 translate-y-0'
                            }`}
                        aria-label="Scroll thumbnails up"
                    >
                        <svg width="10" height="10" viewBox="0 0 12 12" className="rotate-180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.3125L5.625 7.6875L2.25 4.3125" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </button>

                    <Swiper
                        modules={[Thumbs, FreeMode]}
                        onSwiper={(swiper) => {
                            setThumbsSwiper(swiper);
                            setIsThumbsBeginning(swiper.isBeginning);
                            setIsThumbsEnd(swiper.isEnd);
                        }}
                        onSlideChange={(swiper) => {
                            setIsThumbsBeginning(swiper.isBeginning);
                            setIsThumbsEnd(swiper.isEnd);
                        }}
                        onProgress={(swiper) => {
                            setIsThumbsBeginning(swiper.isBeginning);
                            setIsThumbsEnd(swiper.isEnd);
                        }}
                        direction="vertical"
                        spaceBetween={12}
                        slidesPerView="auto"
                        freeMode
                        watchSlidesProgress
                        slideToClickedSlide={true}
                        className="w-full h-full"
                    >
                        {filteredImages.map((image, index) => (
                            <SwiperSlide key={image.id} className="h-auto!">
                                <button
                                    className={`block w-full rounded-2xl overflow-hidden border cursor-pointer transition-all bg-[#fbf4ef] p-0 ${index === activeIndex
                                        ? 'border-[#50000b]'
                                        : 'border-transparent hover:border-[#50000b]/30'
                                        }`}
                                    aria-label={`Load image ${index + 1} in gallery view`}
                                    aria-current={index === activeIndex}
                                    onClick={() => {
                                        if (mainSwiper) {
                                            mainSwiper.slideTo(index, 0);
                                            setActiveIndex(index);
                                        }
                                    }}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        loading="lazy"
                                        className="w-full h-full object-cover block"
                                        sizes="(min-width: 1440px) 96px, 60px"
                                    />
                                </button>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Down Button */}
                    <button
                        type="button"
                        onClick={() => thumbsSwiper?.slideNext()}
                        className={`absolute -bottom-10 left-1/2 -translate-x-1/2 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full border border-[#50000b]/10 text-[#50000b] transition-all duration-300 hover:border-[#50000b] ${isThumbsEnd ? 'opacity-0 pointer-events-none -translate-y-2' : 'opacity-100 translate-y-0'
                            }`}
                        aria-label="Scroll thumbnails down"
                    >
                        <svg width="10" height="10" viewBox="0 0 12 12" className="" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4.3125L5.625 7.6875L2.25 4.3125" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </button>
                </div>

                {/* Main Gallery Slider */}
                <div className="min-w-0">
                    <Swiper
                        modules={[Navigation, Thumbs, FreeMode]}
                        onSwiper={setMainSwiper}
                        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                        navigation={{
                            nextEl: '.slider-button--next',
                            prevEl: '.slider-button--prev',
                        }}
                        spaceBetween={0}
                        slidesPerView={1}
                        speed={0}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        className="w-full h-full"
                    >
                        {filteredImages.map((image, index) => (
                            <SwiperSlide
                                key={image.id}
                                className="flex items-center justify-center"
                            >
                                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                                    {/* Badge */}
                                    {image.badge && (
                                        <span className="absolute bottom-6 left-6 bg-[#a40011] text-white rounded-full text-base font-bold z-10">
                                            {image.badge}
                                        </span>
                                    )}

                                    {/* Modal Opener */}
                                    <button
                                        type="button"
                                        aria-haspopup="dialog"
                                        aria-label={`Open media ${index + 1} in modal`}
                                        onClick={() => {
                                            setIsModalOpen(true);
                                        }}
                                        className="relative w-full h-full cursor-pointer"
                                    >
                                        {/* Product Image */}
                                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                                            <img
                                                src={image.url}
                                                alt={image.alt}
                                                loading={index === 0 ? 'eager' : 'lazy'}
                                                className="w-full h-full object-contain rounded-xl"
                                                sizes="(min-width: 1500px) 770px, (min-width: 990px) calc(55.0vw - 10rem), (min-width: 750px) calc((100vw - 11.5rem) / 2), calc(100vw - 4rem)"
                                            />
                                        </div>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Mobile dots */}
                    <div className="mt-4 flex items-center justify-center gap-2 md:hidden">
                        {filteredImages.map((_, index) => (
                            <span
                                key={`dot-${index}`}
                                className={`h-2 w-2 rounded-full transition-colors ${index === activeIndex ? 'bg-[#50000b]' : 'bg-[#50000b]/30'}`}
                                aria-hidden="true"
                            />
                        ))}
                    </div>

                </div>
            </div>

            {isMounted && modalContent ? createPortal(modalContent, document.body) : null}
        </div>
    );
}
