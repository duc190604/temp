'use client';


interface ContentSectionProps {
  selectedFormat?: 'jar' | 'sachet';
}

const ContentSection = ({ selectedFormat = 'jar' }: ContentSectionProps) => {
  const isSachet = selectedFormat === 'sachet';

  const desktopImage = isSachet
    ? "//im8health.com/cdn/shop/files/desktop_insidebanner_yes-sub_essential-trv_4a68fd4e-eb33-4ecd-a0d4-2fb7ae4d979f.jpg?v=1760345876&width=1920"
    : "//im8health.com/cdn/shop/files/desktop_insidebanner_yes-sub_essential-std_f8477d9e-55d0-4e10-9af1-0ac759a41216.jpg?v=1760348439&width=1920";

  const mobileImage = isSachet
    ? "//im8health.com/cdn/shop/files/mobile_insidebanner_yes-sub_essential-trv_1bad9143-132a-4eb5-a4c9-dd1e35937355.jpg?v=1760345875&width=1920"
    : "//im8health.com/cdn/shop/files/mobile_insidebanner_yes-sub_essential-std_62c2a9d0-2a1a-4f43-b4e0-3a74c2af0b46.jpg?v=1760348442&width=1920";

  return (
    <section id="content" className="w-full">
      <img
        src={desktopImage}
        alt="content"
        width={1920}
        height={800}
        className="max-md:hidden w-full h-auto object-cover"
        loading="lazy"
      />
      <img
        src={mobileImage}
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
