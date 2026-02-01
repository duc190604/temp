'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

const experts = [
  {
    name: 'Dr. James Dinicolantonio',
    title: 'Cardiovascular Scientist & Best-Selling Author on 12+ Books on Health',
    handle: '@drjamesdinic',
    followers: '3.2M',
    image: 'https://im8health.com/cdn/shop/files/Ellipse_62.png?v=1727768801',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/18ce63f7f6154e888f2a48c2a478e480/18ce63f7f6154e888f2a48c2a478e480.HD-1080p-7.2Mbps-38131720.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/18ce63f7f6154e888f2a48c2a478e480.thumbnail.0000000000.jpg?v=1731647937',
  },
  {
    name: 'Dr. Amy Shah',
    title: 'Double-Board Certified Physician & Host of Podcast “Save Yourself”',
    handle: '@dramyshah',
    followers: '1.4M',
    image: 'https://im8health.com/cdn/shop/files/influencer_drshah_profile.png?v=1730184660',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/ec95f3f8f55f4c1eb679982d43bf091d/ec95f3f8f55f4c1eb679982d43bf091d.HD-1080p-4.8Mbps-38234483.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/ec95f3f8f55f4c1eb679982d43bf091d.thumbnail.0000000000.jpg?v=1731865199',
  },
  {
    name: 'Mona Sharma',
    title: 'Celebrity Nutritionist',
    handle: '@monasharma',
    followers: '183K',
    image: 'https://im8health.com/cdn/shop/files/Monasharma.png?v=1730806896',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/936fe1ac73a046a98e1ff7e701676228/936fe1ac73a046a98e1ff7e701676228.HD-1080p-7.2Mbps-38131732.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/936fe1ac73a046a98e1ff7e701676228.thumbnail.0000000000.jpg?v=1731647963',
  },
  {
    name: 'Elissa Goodman',
    title: 'Holistic Nutritionist',
    handle: '@elissagoodman',
    followers: '189K',
    image: 'https://im8health.com/cdn/shop/files/Ellipse_63.png?v=1727768801',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/17fb74b0dd5d46e8ac4d1668b46b2134/17fb74b0dd5d46e8ac4d1668b46b2134.HD-1080p-7.2Mbps-38131729.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/17fb74b0dd5d46e8ac4d1668b46b2134.thumbnail.0000000000.jpg?v=1731647958',
  },
  {
    name: 'Dr. Bertha Baum',
    title: 'Board-Certified Dermatologist',
    handle: '@drberthabaum',
    followers: '229K',
    image: 'https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/db58a8d3630b47a597fb148aba8a1790/db58a8d3630b47a597fb148aba8a1790.HD-1080p-3.3Mbps-38232043.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/db58a8d3630b47a597fb148aba8a1790.thumbnail.0000000000.jpg?v=1731860106',
  },
  {
    name: 'Dr. Jennifer Tsai',
    title: 'Board-Certified Optometrist & Nutrition Specialist',
    handle: '@drjenandjuice',
    followers: '284K',
    image: 'https://im8health.com/cdn/shop/files/Jen.png?v=1730806923',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/9d07478703af48a2903deb8e3fbd5076/9d07478703af48a2903deb8e3fbd5076.HD-1080p-4.8Mbps-38192239.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/9d07478703af48a2903deb8e3fbd5076.thumbnail.0000000000.jpg?v=1731751112',
  },
  {
    name: 'Tim Biohacker',
    title: "UK's Leading Bio-hacker",
    handle: '@timbiohacker',
    followers: '484K',
    image: 'https://im8health.com/cdn/shop/files/timbiohacker.png?v=1730889002',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/1cfa80d2973d44619564e370d8fb9a5a/1cfa80d2973d44619564e370d8fb9a5a.HD-1080p-7.2Mbps-38201373.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/1cfa80d2973d44619564e370d8fb9a5a.thumbnail.0000000000.jpg?v=1731772919',
  },
  {
    name: 'Dr. Robin Barrett',
    title: 'Doctor of Pharmacy & Wellness Coach',
    handle: '@dr.robinb',
    followers: '1.4M',
    image: 'https://im8health.com/cdn/shop/files/Ellipse_64.png?v=1727768801',
    video: 'https://im8health.com/cdn/shop/videos/c/vp/0cdc39d7dda145e29a333ee5f43ed507/0cdc39d7dda145e29a333ee5f43ed507.HD-1080p-2.5Mbps-38319373.mp4?v=0',
    poster: 'https://im8health.com/cdn/shop/files/preview_images/0cdc39d7dda145e29a333ee5f43ed507.thumbnail.0000000000.jpg?v=1732006454',
  },
];

export const TrustedExpertsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f5eaea]">
      {/* Background Images */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="https://im8health.com/cdn/shop/files/approvedby_bg.jpg?v=1727065114"
          />
          <img
            src="https://im8health.com/cdn/shop/files/approvedby_mbg.jpg?v=1727065186"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 py-14 md:py-16 xl:py-20">
        <div className="im8-container">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-[32px] leading-9 lg:text-[52px] font-normal md:font-light text-[#50000b] max-w-[335px] md:max-w-none mx-auto" style={{ fontFamily: 'var(--font-heading)' }}>
              Trusted by Physicians and Nutrition Experts
            </h2>
          </div>

        </div>

        {/* Carousel - Full width with left alignment matching container */}
        <div className=" w-full">
          <Swiper
            modules={[FreeMode]}
            spaceBetween={16}
            slidesPerView={'auto'}
            freeMode={true}
            className="!pb-4 !w-full"
          >
            {experts.map((expert) => (
              <SwiperSlide key={expert.name} className=" !w-[312px] md:!w-[320px] lg:!w-[360px] 2xl:!w-[400px] ml-5">
                <div className="group cursor-pointer bg-[#f5eaea] rounded-2xl ">
                  {/* Profile & Handle */}
                  <div className="flex items-center gap-2 p-3 border-t border-l border-r rounded-t-2xl border-[#50000b] ">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-[#50000b] whitespace-nowrap">
                        {expert.handle} ({expert.followers})
                      </p>
                    </div>
                  </div>

                  {/* Video Thumbnail */}
                  <div className="relative overflow-hidden bg-gray-200 rounded-b-2xl">
                    <video
                      src={expert.video}
                      poster={expert.poster}
                      className="w-full h-full object-cover pointer-events-none"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  </div>

                  {/* Name & Title */}
                </div>
                <div className="text-[#50000b] mt-4 bg-[#f5eaea] min-h-[136px] md:min-h-[102px] rounded-2xl p-3 font-medium md:font-normal">
                  <p className="text-xl md:text-[18px] leading-tight mb-1" style={{ fontFamily: 'var(--font-heading)' }}>{expert.name}</p>
                  <p className="text-xl md:text-[18px] text-[#50000b] line-clamp-3 leading-snug" style={{ fontFamily: 'var(--font-heading)' }}>{expert.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
