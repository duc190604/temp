'use client';


const ContentSection = () => {
  return (
    <section id="content" className="w-full">
      <img
        src="//im8health.com/cdn/shop/files/desktop_insidebanner_yes-sub_essential-std_f8477d9e-55d0-4e10-9af1-0ac759a41216.jpg?v=1760348439&width=1920"
        alt="content"
        width={1920}
        height={800}
        className="max-md:hidden w-full h-auto object-cover"
        loading="lazy"
      />
      <img
        src="//im8health.com/cdn/shop/files/mobile_insidebanner_yes-sub_essential-std_62c2a9d0-2a1a-4f43-b4e0-3a74c2af0b46.jpg?v=1760348442&width=1920"
        alt="content"
        width={1920}
        height={1200}
        className="md:hidden w-full h-auto object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default ContentSection;
