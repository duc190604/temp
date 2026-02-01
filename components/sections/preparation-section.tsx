"use client";
import React from 'react';

// --- TYPES ---
type StepType = {
  title: string;
  videoHref: string;
  thumbnailHref: string;
};

// --- DATA ---
const steps: StepType[] = [
  {
    title: "Step 1: Scoop out one serving of Daily Ultimate Essentials",
    videoHref:
      "//im8health.com/cdn/shop/videos/c/vp/ce78e2bd331f47f79ac745c7ae51f01f/ce78e2bd331f47f79ac745c7ae51f01f.SD-480p-1.2Mbps-37195721.mp4?v=0",
    thumbnailHref:
      "//im8health.com/cdn/shop/files/preview_images/ce78e2bd331f47f79ac745c7ae51f01f.thumbnail.0000000000.jpg?v=1730081912",
  },
  {
    title: "Step 2: Add 8 to 12oz of Water or Your Favorite Smoothie",
    videoHref:
      "//im8health.com/cdn/shop/videos/c/vp/c204aec03aad4763993ff1eda15f0501/c204aec03aad4763993ff1eda15f0501.SD-480p-1.2Mbps-37195734.mp4?v=0",
    thumbnailHref:
      "//im8health.com/cdn/shop/files/preview_images/c204aec03aad4763993ff1eda15f0501.thumbnail.0000000000.jpg?v=1730081950",
  },
  {
    title: "Step 3: Stir Well and Enjoy Daily",
    videoHref:
      "//im8health.com/cdn/shop/videos/c/vp/1f885d4f9245483d97e7efcfffb8a6be/1f885d4f9245483d97e7efcfffb8a6be.SD-480p-1.2Mbps-37107501.mp4?v=0",
    thumbnailHref:
      "//im8health.com/cdn/shop/files/preview_images/1f885d4f9245483d97e7efcfffb8a6be.thumbnail.0000000000.jpg?v=1729902934",
  },
];

const StepCard = ({ step }: { step: StepType }) => {
  return (
    <div className="flex flex-col gap-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={step.thumbnailHref}
        className="w-full rounded-xl"
      >
        <source src={step.videoHref} type="video/mp4" />
      </video>
      <p className="text-[20px] md:text-[24px] font-medium text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
        {step.title}
      </p>
    </div>
  );
};

export const PreparationSection = () => {
  return (
    <section id="preparation" className="w-full py-14 md:py-26 bg-white">
      <div className="im8-container">
        <div className="flex flex-col gap-8 md:gap-14">
          <h2 className="text-center md:font-light text-[40px] md:text-[52px] leading-tight text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
            How to Enjoy
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step) => (
              <StepCard key={step.title} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
