'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

interface VideoTestimonial {
    id: string;
    thumbnail: string;
    videoUrl: string;
    alt: string;
}

const testimonials: VideoTestimonial[] = [
    {
        id: 'video_1',
        thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065',
        videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/12eb3b01fd54404d81ef22a20d415f15/12eb3b01fd54404d81ef22a20d415f15.HD-1080p-2.5Mbps-38313438.mp4?v=0',
        alt: 'Robin B Testimonial'
    },
    {
        id: 'video_2',
        thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977',
        videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/e83246a2555949139036fce9bc1359a2/e83246a2555949139036fce9bc1359a2.HD-1080p-3.3Mbps-38232086.mp4?v=0',
        alt: 'Bobby Rich Testimonial'
    },
    {
        id: 'video_3',
        thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964',
        videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/f7f68153342f4566ad00f411e2fb407b/f7f68153342f4566ad00f411e2fb407b.HD-1080p-7.2Mbps-38222859.mp4?v=0',
        alt: 'Dr. Amy Shah Testimonial'
    },
    {
        id: 'video_4',
        thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492',
        videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/064b8beaa0b04a4fad25676155936d3a/064b8beaa0b04a4fad25676155936d3a.HD-1080p-2.5Mbps-38221672.mp4?v=0',
        alt: 'Dustin Poirier Testimonial'
    },
    {
        id: 'video_5',
        thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088',
        videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/809d17a1684d40058d499ecd9afe9e21/809d17a1684d40058d499ecd9afe9e21.HD-1080p-4.8Mbps-38222820.mp4?v=0',
        alt: 'Customer Testimonial'
    },
    {
        id: 'video_6',
        thumbnail: 'https://im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287',
        videoUrl: 'https://im8health.com/cdn/shop/videos/c/vp/1f4b2af008104c92a29f9d78814f1aa0/1f4b2af008104c92a29f9d78814f1aa0.HD-1080p-3.3Mbps-38232121.mp4?v=0',
        alt: 'Customer Testimonial'
    }
];

export default function VideoTestimonialsSlider() {
    const [selectedVideo, setSelectedVideo] = useState<VideoTestimonial | null>(null);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);

    const openVideo = (video: VideoTestimonial) => {
        setSelectedVideo(video);
        setIsPlaying(true);
        setIsMuted(false);
    };

    const closeVideo = () => {
        setSelectedVideo(null);
        setIsPlaying(false);
    };

    const togglePlay = () => {
        const videoElement = document.querySelector('.active-video') as HTMLVideoElement;
        if (videoElement) {
            if (isPlaying) {
                videoElement.pause();
            } else {
                videoElement.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        const videoElement = document.querySelector('.active-video') as HTMLVideoElement;
        if (videoElement) {
            videoElement.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    // Auto-play video when modal opens
    useEffect(() => {
        if (selectedVideo) {
            const timer = setTimeout(() => {
                const videoElement = document.querySelector('.active-video') as HTMLVideoElement;
                if (videoElement) {
                    videoElement.muted = false;
                    videoElement.play().catch(err => {
                        console.log('Auto-play failed:', err);
                        // If autoplay fails, try with muted
                        videoElement.muted = true;
                        setIsMuted(true);
                        videoElement.play();
                    });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [selectedVideo]);

    return (
        <div className="my-8 md:my-6">
            {/* Title */}
            <h3 className="text-2xl md:text-xl font-semibold text-[#50000b] text-center mb-6 md:mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
            >
                What our IM8 Ambassadors are saying
            </h3>

            {/* Swiper Slider Container */}
            <div className="overflow-hidden -mx-4 px-4">
                <Swiper
                    modules={[FreeMode]}
                    spaceBetween={12}
                    slidesPerView="auto"
                    freeMode={true}
                    grabCursor={true}
                    className="overflow-visible!"
                >
                    {testimonials.map((video) => (
                        <SwiperSlide key={video.id} className="w-auto!">
                            <button
                                onClick={() => openVideo(video)}
                                className="relative block w-[104px] h-[168px] rounded-2xl overflow-hidden cursor-pointer border-none p-0 group"
                            >
                                <img
                                    src={video.thumbnail}
                                    alt={video.alt}
                                    className="w-full h-full object-cover"
                                />
                                {/* Play Icon */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                                    <svg className="play_icon" style={{ display: 'block' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="11.75" cy="12.25" r="9.25" fill="#50000B"></circle><g clipPath="url(#clip0_2131_26213)"><path fillRule="evenodd" clipRule="evenodd" d="M20.4865 3.51351L12 0L3.51351 3.51351L0 12L3.51351 20.4865L12 24L20.4865 20.4865L24 12L20.4865 3.51351ZM9.75 15.8971L16.5 12L9.75 8.10289V15.8971Z" fill="white"></path></g><defs><clipPath id="clip0_2131_26213"><rect width="24" height="24" fill="white"></rect></clipPath></defs>
                                    </svg>
                                </div>
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <>
                    {/* Overlay */}
                    <div
                        className="fixed inset-0 z-50 backdrop-blur-sm"
                        style={{ backgroundColor: 'rgba(242, 224, 221, 0.5)' }}
                        onClick={closeVideo}
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <div className="relative w-full max-w-md max-h-[664px] aspect-9/16 pointer-events-auto">
                            {/* Video Container */}
                            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black">
                                {/* Close Button - Top Right */}
                                <button
                                    onClick={closeVideo}
                                    className="absolute top-4 right-4 z-20 cursor-pointer"
                                    style={{ background: 'none', border: 'none', padding: 0 }}
                                >
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_2974_31845)">
                                            <g filter="url(#filter0_b_2974_31845)">
                                                <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white" fillOpacity="0.8"></path>
                                                <path d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z" stroke="#50000B"></path>
                                            </g>
                                            <path d="M30.3633 30.3646L17.6354 17.6367" stroke="#50000B" strokeWidth="2" strokeLinecap="square"></path>
                                            <path d="M30.3633 17.6367L17.6354 30.3646" stroke="#50000B" strokeWidth="2" strokeLinecap="square"></path>
                                        </g>
                                        <defs>
                                            <filter id="filter0_b_2974_31845" x="-12" y="-12" width="72" height="72" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"></feGaussianBlur>
                                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2974_31845"></feComposite>
                                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2974_31845" result="shape"></feBlend>
                                            </filter>
                                            <clipPath id="clip0_2974_31845">
                                                <rect width="48" height="48" fill="white"></rect>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>

                                {/* Mute/Unmute Button - Bottom Left */}
                                <button
                                    onClick={toggleMute}
                                    className="absolute bottom-4 left-4 z-20 cursor-pointer"
                                    style={{ background: 'none', border: 'none', padding: 0 }}
                                >
                                    {!isMuted ? (
                                        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2591_34086)">
                                                <path d="M32 0L54.6306 9.36937L64 32L54.6306 54.6306L32 64L9.36937 54.6306L0 32L9.36937 9.36937L32 0Z" fill="white"></path>
                                                <path d="M41.333 32H46.6663" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                <path d="M39.5332 25.3332L44.1332 22.6665" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                <path d="M39.5332 38.6665L44.1332 41.3332" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                <path d="M35.9997 45.3332L25.9997 37.9998H19.9997C19.2924 37.9998 18.6142 37.7189 18.1141 37.2188C17.614 36.7187 17.333 36.0404 17.333 35.3332V28.6665C17.333 27.9593 17.614 27.281 18.1141 26.7809C18.6142 26.2808 19.2924 25.9998 19.9997 25.9998H25.9997L35.9997 18.6665V45.3332Z" stroke="#50000B" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="square"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2591_34086">
                                                    <rect width="64" height="64" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    ) : (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_2974_31836)">
                                                <path d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z" fill="white"></path>
                                                <g clipPath="url(#clip1_2974_31836)">
                                                    <path d="M29.5498 26.8C30.3315 26.0202 30.8319 25.0028 30.9723 23.9076C31.1127 22.8125 30.8851 21.7017 30.3253 20.75" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                    <path d="M32.3496 29.6C33.8136 28.1262 34.7254 26.1933 34.9317 24.1262C35.1381 22.0592 34.6264 19.9841 33.4826 18.25" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                    <path d="M19.5 27.75H15C14.4696 27.75 13.9609 27.5393 13.5858 27.1642C13.2107 26.7891 13 26.2804 13 25.75V20.75C13 20.2196 13.2107 19.7109 13.5858 19.3358C13.9609 18.9607 14.4696 18.75 15 18.75H19.5L27 13.25V20.25" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10"></path>
                                                    <path d="M27 24.25V33.25L22 29.5835" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                    <path d="M13.5 33.75L34.5 12.75" stroke="#50000B" strokeWidth="1.125" strokeMiterlimit="10" strokeLinecap="square"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_2974_31836">
                                                    <rect width="48" height="48" fill="white"></rect>
                                                </clipPath>
                                                <clipPath id="clip1_2974_31836">
                                                    <rect width="24" height="24" fill="white" transform="translate(12 11.25)"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    )}
                                </button>

                                <video
                                    className="active-video w-full h-full object-cover"
                                    src={selectedVideo.videoUrl}
                                    poster={selectedVideo.thumbnail}
                                    loop
                                    playsInline
                                    muted={isMuted}
                                    onClick={togglePlay}
                                />

                                {/* Play/Pause Overlay */}
                                {!isPlaying && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
                                        onClick={togglePlay}
                                    >
                                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" className="drop-shadow-2xl">
                                            <circle cx="12" cy="12" r="9.25" fill="#50000B" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.4865 3.51351L12 0L3.51351 3.51351L0 12L3.51351 20.4865L12 24L20.4865 20.4865L24 12L20.4865 3.51351ZM9.75 15.8971L16.5 12L9.75 8.10289V15.8971Z" fill="white" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
