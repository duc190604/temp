'use client';

import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

interface Review {
    stars: number;
    quote: string;
    author: string;
}

const reviews: Review[] = [
    {
        stars: 5,
        quote: "Since I started this a month ago I have felt great, energetic, and sleeping better. I have taken a lot of vitamins and am hopeful this will replace most of them. Thank you..",
        author: "Lisa Tradewell., Verified Customer"
    },
    {
        stars: 5,
        quote: "I love it. I have a lot more energy. I am recommending it to all my friends. It is so nice to have almost everything I take in one drink.",
        author: "Bernae VeraKruse., Verified Customer"
    },
    {
        stars: 5,
        quote: "I absolutely love IM8. I see a difference with my gut health and immune system. I have been spreading the word about this great product. Thank you for reaching out!",
        author: "Erika Friesenhahn., Verified Customer"
    },
    {
        stars: 5,
        quote: "I am really feeling full of energy. After about 2 weeks of the IM8, my wife said 'What's got into you, would you slow down and just sit awhile' Thanks for your work!",
        author: "Charlie West., Verified Customer"
    },
    {
        stars: 5,
        quote: "The taste is so delicious and I'm excited to feel the difference. I have tried AG1 but had terrible stomach upset with it and had to discontinue. Fingers crossed this one is better.",
        author: "Trina Fautoux., Verified Customer"
    },
    {
        stars: 5,
        quote: "I'm on my second month of IM8, along with my significant other and we both feel more energy, more brain clarity and overall improved feeling of well-being. I talk about this product with all my golf friends.",
        author: "Jennifer Dunn., Verified Customer"
    }
];

export default function StaticReviewsSection() {
    return (
        <section className="static-reviews-section">
            <link rel="stylesheet" href="/css/static-review.css" />

            <div className="static-reviews" style={{ backgroundColor: '#f9f2ed' }}>
                <div className="static-reviews__inner page-width">

                    <h2 className="static-reviews__heading text-[#50000B]">10,000+ 5 Star Reviews</h2>

                    <p className="static-reviews__description">
                        These are actual IM8 verified customers that have seen successful health outcomes with the consistent use of IM8 Daily Ultimate Essentials.
                    </p>

                    <div className="static-reviews-swiper-container">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            loop={true}
                            slidesPerView="auto"
                            spaceBetween={20}
                            freeMode={true}
                            speed={8000}
                            autoplay={{
                                delay: 1,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            breakpoints={{
                                320: {
                                    spaceBetween: 15,
                                },
                                750: {
                                    spaceBetween: 20,
                                },
                            }}
                            className="static-reviews-swiper swiper-container"
                        >
                            {reviews.map((review, index) => (
                                <SwiperSlide key={index}>
                                    <div className="static-reviews__review">
                                        <div className="static-reviews__stars">
                                            {'★'.repeat(review.stars)}
                                        </div>
                                        <div className="static-reviews__quote">
                                            "{review.quote}"
                                        </div>
                                        <div className="static-reviews__author">
                                            — {review.author}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className="static-reviews__stats">
                        <strong><span className="static-reviews__count">11,825</span> Reviews</strong> | Average Rating: 4.8/5
                    </div>
                </div>
            </div>
        </section>
    );
}
