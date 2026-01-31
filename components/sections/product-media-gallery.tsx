'use client';

import { useState } from 'react';
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

    return (
        <div className="relative min-w-0">

            {/* Reviews Summary Bar */}


            <div className="sticky top-2 z-[2] grid grid-cols-1 md:grid-cols-[60px_1fr] xl:grid-cols-[96px_1fr] gap-4 xl:gap-6 items-start">
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
                                    <div className="relative w-full h-full group">
                                        {/* Zoom Icon */}
                                        <span className="absolute top-5 left-5 bg-white/90 rounded-full border border-[#50000b]/10 text-[#50000b] flex items-center justify-center h-12 w-12 z-[1] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                className="w-6 h-6"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 19 19"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M4.66724 7.93978C4.66655 7.66364 4.88984 7.43922 5.16598 7.43853L10.6996 7.42464C10.9758 7.42395 11.2002 7.64724 11.2009 7.92339C11.2016 8.19953 10.9783 8.42395 10.7021 8.42464L5.16849 8.43852C4.89235 8.43922 4.66793 8.21592 4.66724 7.93978Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M7.92576 4.66463C8.2019 4.66394 8.42632 4.88723 8.42702 5.16337L8.4409 10.697C8.44159 10.9732 8.2183 11.1976 7.94215 11.1983C7.66601 11.199 7.44159 10.9757 7.4409 10.6995L7.42702 5.16588C7.42633 4.88974 7.64962 4.66532 7.92576 4.66463Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M12.8324 3.03011C10.1255 0.323296 5.73693 0.323296 3.03011 3.03011C0.323296 5.73693 0.323296 10.1256 3.03011 12.8324C5.73693 15.5392 10.1255 15.5392 12.8324 12.8324C15.5392 10.1256 15.5392 5.73693 12.8324 3.03011ZM2.32301 2.32301C5.42035 -0.774336 10.4421 -0.774336 13.5395 2.32301C16.6101 5.39361 16.6366 10.3556 13.619 13.4588L18.2473 18.0871C18.4426 18.2824 18.4426 18.599 18.2473 18.7943C18.0521 18.9895 17.7355 18.9895 17.5402 18.7943L12.8778 14.1318C9.76383 16.6223 5.20839 16.4249 2.32301 13.5395C-0.774335 10.4421 -0.774335 5.42035 2.32301 2.32301Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                        </span>

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

                                        {/* Toggle Button */}
                                        <button
                                            className="absolute inset-0 w-full h-full opacity-0"
                                            type="button"
                                            aria-haspopup="dialog"
                                        >
                                            <span className="sr-only">
                                                Open media {index + 1} in modal
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div>
    );
}
