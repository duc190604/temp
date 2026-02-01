"use client";
import React from 'react';
import './ambassadors-styles.css';

// --- TYPES ---
type AmbassadorReviewType = {
  avatar: string;
  name: string;
  content: string;
  videoHref: string;
  thumbnailHref: string;
};

// --- ICONS ---
const FiveStars = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={92}
    height={16}
    viewBox="0 0 92 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M8.494 12.32a.33.33 0 0 1 .345 0l4.095 2.472a.333.333 0 0 0 .497-.361l-1.087-4.66a.33.33 0 0 1 .107-.327l3.618-3.135a.333.333 0 0 0-.19-.584l-4.764-.404a.33.33 0 0 1-.279-.202L8.973.724a.333.333 0 0 0-.613 0L6.497 5.12a.33.33 0 0 1-.279.202l-4.764.404a.333.333 0 0 0-.19.584l3.618 3.135a.33.33 0 0 1 .107.328L3.902 14.43a.333.333 0 0 0 .497.36z"
        fill="#a40011"
      />
    </g>
    <g clipPath="url(#b)">
      <path
        d="M27.16 12.32a.33.33 0 0 1 .345 0l4.096 2.472a.333.333 0 0 0 .496-.361l-1.086-4.66a.33.33 0 0 1 .106-.327l3.619-3.135a.333.333 0 0 0-.19-.584l-4.765-.404a.33.33 0 0 1-.278-.202L27.64.724a.333.333 0 0 0-.614 0L25.163 5.12a.33.33 0 0 1-.278.202l-4.765.404a.333.333 0 0 0-.19.584l3.619 3.135a.33.33 0 0 1 .106.328l-1.087 4.659a.333.333 0 0 0 .497.36z"
        fill="#a40011"
      />
    </g>
    <g clipPath="url(#c)">
      <path
        d="M45.828 12.32a.33.33 0 0 1 .344 0l4.096 2.472a.333.333 0 0 0 .496-.361l-1.086-4.66a.33.33 0 0 1 .106-.327l3.619-3.135a.333.333 0 0 0-.19-.584l-4.765-.404a.33.33 0 0 1-.278-.202L46.307.724a.333.333 0 0 0-.614 0L43.83 5.12a.33.33 0 0 1-.278.202l-4.765.404a.333.333 0 0 0-.19.584l3.619 3.135a.33.33 0 0 1 .106.328l-1.087 4.659a.333.333 0 0 0 .497.36z"
        fill="#a40011"
      />
    </g>
    <g clipPath="url(#d)">
      <path
        d="M64.494 12.32a.33.33 0 0 1 .345 0l4.095 2.472a.333.333 0 0 0 .497-.361l-1.087-4.66a.33.33 0 0 1 .107-.327l3.618-3.135a.333.333 0 0 0-.19-.584l-4.764-.404a.33.33 0 0 1-.279-.202L64.973.724a.333.333 0 0 0-.613 0L62.497 5.12a.33.33 0 0 1-.279.202l-4.764.404a.333.333 0 0 0-.19.584l3.618 3.135a.33.33 0 0 1 .107.328l-1.087 4.659a.333.333 0 0 0 .497.36z"
        fill="#a40011"
      />
    </g>
    <g clipPath="url(#e)">
      <path
        d="M83.16 12.32a.33.33 0 0 1 .345 0l4.096 2.472a.333.333 0 0 0 .496-.361l-1.086-4.66a.33.33 0 0 1 .106-.327l3.619-3.135a.333.333 0 0 0-.19-.584l-4.765-.404a.33.33 0 0 1-.278-.202L83.64.724a.333.333 0 0 0-.614 0L81.163 5.12a.33.33 0 0 1-.278.202l-4.765.404a.333.333 0 0 0-.19.584l3.619 3.135a.33.33 0 0 1 .106.328l-1.087 4.659a.333.333 0 0 0 .497.36z"
        fill="#a40011"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.667 0h16v16h-16z" />
      </clipPath>
      <clipPath id="b">
        <path fill="#fff" d="M19.333 0h16v16h-16z" />
      </clipPath>
      <clipPath id="c">
        <path fill="#fff" d="M38 0h16v16H38z" />
      </clipPath>
      <clipPath id="d">
        <path fill="#fff" d="M56.667 0h16v16h-16z" />
      </clipPath>
      <clipPath id="e">
        <path fill="#fff" d="M75.333 0h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
);

const Rating = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width={64}
    height={12}
    viewBox="0 0 64 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    {...props}
  >
    <path
      d="M5.51 9.48a.25.25 0 0 1 .258 0l3.072 1.853a.25.25 0 0 0 .372-.27l-.815-3.495a.25.25 0 0 1 .08-.245L11.19 4.97a.25.25 0 0 0-.143-.438L7.475 4.23a.25.25 0 0 1-.209-.151L5.869.782a.25.25 0 0 0-.46 0L4.012 4.08a.25.25 0 0 1-.21.151L.23 4.533a.25.25 0 0 0-.142.438L2.8 7.323c.07.06.1.155.08.245l-.816 3.494a.25.25 0 0 0 .373.271zm13 0a.25.25 0 0 1 .258 0l3.072 1.853a.25.25 0 0 0 .372-.27l-.815-3.495a.25.25 0 0 1 .08-.245L24.19 4.97a.25.25 0 0 0-.143-.438l-3.573-.303a.25.25 0 0 1-.209-.151L18.869.782a.25.25 0 0 0-.46 0L17.012 4.08a.25.25 0 0 1-.21.151l-3.573.303a.25.25 0 0 0-.142.438L15.8 7.323c.07.06.1.155.08.245l-.816 3.494a.25.25 0 0 0 .373.271zm13 0a.25.25 0 0 1 .258 0l3.072 1.853a.25.25 0 0 0 .372-.27l-.815-3.495a.25.25 0 0 1 .08-.245L37.19 4.97a.25.25 0 0 0-.143-.438l-3.573-.303a.25.25 0 0 1-.209-.151L31.869.782a.25.25 0 0 0-.46 0L30.012 4.08a.25.25 0 0 1-.21.151l-3.573.303a.25.25 0 0 0-.142.438L28.8 7.323c.07.06.1.155.08.245l-.816 3.494a.25.25 0 0 0 .373.271zm13 0a.25.25 0 0 1 .258 0l3.072 1.853a.25.25 0 0 0 .372-.27l-.815-3.495a.25.25 0 0 1 .08-.245L50.19 4.97a.25.25 0 0 0-.143-.438l-3.573-.303a.25.25 0 0 1-.21-.151L44.87.782a.25.25 0 0 0-.46 0L43.012 4.08a.25.25 0 0 1-.21.151l-3.573.303a.25.25 0 0 0-.142.438L41.8 7.323c.07.06.1.155.08.245l-.816 3.494a.25.25 0 0 0 .373.271zm13 0a.25.25 0 0 1 .258 0l3.072 1.853a.25.25 0 0 0 .372-.27l-.815-3.495a.25.25 0 0 1 .08-.245L63.19 4.97a.25.25 0 0 0-.143-.438l-3.573-.303a.25.25 0 0 1-.21-.151L57.87.782a.25.25 0 0 0-.46 0L56.012 4.08a.25.25 0 0 1-.21.151l-3.573.303a.25.25 0 0 0-.142.438L54.8 7.323c.07.06.1.155.08.245l-.816 3.494a.25.25 0 0 0 .373.271z"
      fill="#a40011"
    />
  </svg>
);

// --- MOCK DATA ---
const bgImg = "//im8health.com/cdn/shop/files/testimonials.png?v=1727769423";
const bgImgSm = "//im8health.com/cdn/shop/files/why_people_like_IM8.png?v=1727769483";

const ambassadorReviews: AmbassadorReviewType[] = [
  {
    avatar: "//im8health.com/cdn/shop/files/Bobby_Rich_aca1a6fc-96f2-448e-8f8c-17f07a91fad6.png?v=1731574045",
    name: "@mrbobbyrich (105K)",
    content: "As a former athlete and trainer to high performers, including David and Victoria Beckham, it means I need to always be on the top of my game. IM8 helps me to do just that and that's why I'm proud to be part of the team.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/277ed49454544ca4a856e0e3faf4730c/277ed49454544ca4a856e0e3faf4730c.SD-480p-0.9Mbps-39412880.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/277ed49454544ca4a856e0e3faf4730c.thumbnail.0000000000.jpg?v=1733712043",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/Carmel_Rodriguez.png?v=1731574701",
    name: "@carmelrodriguezfit (341K)",
    content: "Body positivity and strength are at the heart of my wellness philosophy. IM8 helps me stay energized, strong, and ready to inspire others to achieve balance every day.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/60ab4de92d314471a4bc1335539686a3/60ab4de92d314471a4bc1335539686a3.SD-480p-0.9Mbps-39412898.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/60ab4de92d314471a4bc1335539686a3.thumbnail.0000000000.jpg?v=1733712086",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/Tavi_Castro_e1d9b739-631c-464a-a763-c188f10709eb.png?v=1731573850",
    name: "@tavicastro (4.8M)",
    content: "As a professional freediver, I'm extremely careful with what I put into my body. With IM8, I know I'm fueling my body with only the best, helping me stay resilient both in and out of the water.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/4a3a9f0122d24d6988bbf5b9ed6a38bb/4a3a9f0122d24d6988bbf5b9ed6a38bb.SD-480p-0.9Mbps-39413270.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/4a3a9f0122d24d6988bbf5b9ed6a38bb.thumbnail.0000000000.jpg?v=1733712779",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/dustinpoirier.jpg?v=1731307218",
    name: "@dustinpoirier (5.3M)",
    content: "As a fighter, I've tried it all—endless pills and powders just to keep up. But after my team checked out the science, partnering with IM8 was a no-brainer. Now, I have all the nutrition I need in one powerful formula for training, recovery, and staying sharp.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/a7917aeeef894fc7af8d86db3acafef5/a7917aeeef894fc7af8d86db3acafef5.SD-480p-0.9Mbps-39412856.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/a7917aeeef894fc7af8d86db3acafef5.thumbnail.0000000000.jpg?v=1733711989",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/timbiohacker.jpg?v=1731306875",
    name: "@timbiohacker (484K)",
    content: "I'm all about calling out products that fall short of their claims. IM8, though, delivers exactly what it promises—pure, effective ingredients, third-party tested, and backed by clinical trials. It fuels focus, energy, and resilience, with zero compromises",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/90135e85a8eb49659fc3e2cbb43896e5/90135e85a8eb49659fc3e2cbb43896e5.SD-480p-0.9Mbps-39413342.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/90135e85a8eb49659fc3e2cbb43896e5.thumbnail.0000000000.jpg?v=1733712963",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/dance10fikshun.jpg?v=1731307005",
    name: "@dance10fikshun (2.6M)",
    content: "My life is all about movement, balance, and expression. IM8 keeps me energized and feeling great, allowing me to bring my best to every performance.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/4d801fb0e5524d5a9c43dc987966df6a/4d801fb0e5524d5a9c43dc987966df6a.SD-480p-0.9Mbps-39413304.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/4d801fb0e5524d5a9c43dc987966df6a.thumbnail.0000000000.jpg?v=1733712831",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/influ-carou_davidnurse.png?v=1731575099",
    name: "@davidnursenba (162K)",
    content: "As a performance coach, I'm always seeking ways to stay sharp and energized. IM8 is hands down the best all-in-one supplement. It tastes amazing, and my wife and I take it daily—it's a game-changer.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/01fc5e8bd9934532b9120f5277539ccc/01fc5e8bd9934532b9120f5277539ccc.SD-480p-0.9Mbps-39412912.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/01fc5e8bd9934532b9120f5277539ccc.thumbnail.0000000000.jpg?v=1733712123",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/Joseph_Abell_10732562-f935-4c47-b403-7f9e062cd921.png?v=1731574411",
    name: "@thejosephabell (2M)",
    content: "Nutrition should be as exciting as it is nourishing. IM8 redefines nutrition for me, making health delicious and effective, whether in the kitchen or in my daily routine.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/cb2b8daf5bbe45299c834c593e147522/cb2b8daf5bbe45299c834c593e147522.SD-480p-0.9Mbps-39412954.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/cb2b8daf5bbe45299c834c593e147522.thumbnail.0000000000.jpg?v=1733712233",
  },
  {
    avatar: "//im8health.com/cdn/shop/files/tjdefalco.jpg?v=1731306362",
    name: "@tjdefalco (274K)",
    content: "On the court, peak performance is non-negotiable. IM8 fuels my energy and mental clarity, helping me stay sharp and push my limits every day.",
    videoHref: "//im8health.com/cdn/shop/videos/c/vp/e2c97673de604d8d9395afdda954e1d8/e2c97673de604d8d9395afdda954e1d8.SD-480p-0.9Mbps-39413319.mp4?v=0",
    thumbnailHref: "//im8health.com/cdn/shop/files/preview_images/e2c97673de604d8d9395afdda954e1d8.thumbnail.0000000000.jpg?v=1733712921",
  },
];

// --- SUB COMPONENTS ---
const AmbassadorCard = ({ review }: { review: AmbassadorReviewType }) => {
  const { avatar, content, name, thumbnailHref, videoHref } = review;
  
  return (
    <div className="bg-white md:w-[341px] w-[312px] md:px-6 md:pb-8 px-[22px] pb-[22px] rounded-xl h-full cursor-pointer">
      <div className="py-3 pr-6 flex items-center gap-5">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <p className="font-bold text-sm text-[#50000b]">{name}</p>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={thumbnailHref}
        className="w-full rounded-xl"
      >
        <source src={videoHref} type="video/mp4" />
      </video>
      <div className="pt-6">
        <Rating className="h-3" />
        <div className="pt-4 font-medium text-xl text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
          {content}
        </div>
      </div>
    </div>
  );
};

const Carousel = () => {
  const reviews = [
    ...ambassadorReviews,
    ...ambassadorReviews,
    ...ambassadorReviews,
    ...ambassadorReviews,
  ];
  
  return (
    <div className="relative overflow-hidden">
      <div className="grid grid-flow-col gap-4 animate-scroll">
        {reviews.map((review, index) => (
          <div className="h-full" key={`${review.name}-${index}`}>
            <AmbassadorCard review={review} />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
export const AmbassadorsSection = () => {
  return (
    <section id="ambassadors" className="relative md:py-[104px] py-14 w-full">
      <img
        src={bgImg}
        alt="background image"
        className="w-full h-full absolute inset-0 object-cover object-center -z-10 max-md:hidden"
      />
      <img
        src={bgImgSm}
        alt="background image"
        className="w-full h-full absolute inset-0 object-cover object-center -z-10 md:hidden"
      />
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-6 items-center justify-center">
          <div className="flex items-center gap-4">
            <div>
              <FiveStars />
            </div>
            <p className="uppercase text-sm text-[#50000b]" style={{ fontFamily: 'var(--font-nb-architekt)' }}>Feel The Difference</p>
          </div>
          <h1 className="md:text-[52px] text-[40px] leading-[44px] text-center text-[#50000b]">
            What Our IM8 Ambassadors Are Saying
          </h1>
        </div>
        <Carousel />
      </div>
    </section>
  );
};
