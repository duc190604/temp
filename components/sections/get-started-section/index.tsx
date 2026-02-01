"use client";
import React from 'react';

// --- MOCK DATA ---
const bgImg = "https://im8health.com/cdn/shop/files/welcome-kit-bg.png?v=1731643818";
const productImg = "//im8health.com/cdn/shop/files/welcome-kit-sach.png?v=1761040602&width=1200";
const checkIcon = "https://im8health.com/cdn/shop/t/121/assets/featured_check_icon.svg";

export const GetStartedSection = () => {
  return (
    <div className="relative w-full">
      <img
        src={bgImg}
        alt="background image"
        className="w-full h-full absolute inset-0 object-cover object-center -z-10"
      />
      <div className="im8-container pt-8">
        <h1 className="text-[28px] leading-8 uppercase tracking-wider md:hidden text-center mb-8 text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
          Get Started with IM8 for Daily Ultimate Nutrition
        </h1>
        <div className="md:py-10 pb-0 grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="pb-8 text-[40px] leading-tight uppercase tracking-wider max-md:hidden text-[#50000b]" style={{ fontFamily: 'var(--font-heading)' }}>
              Get Started with IM8 for Daily Ultimate Nutrition
            </h1>
            <div className="flex flex-col text-lg text-[#50000b]">
              <div className="flex items-center justify-between font-bold">
                <p>Daily Ultimate Essentials</p>
                <p>$162</p>
              </div>
              <hr className="bg-[#160505] my-2.5 h-0.5" />
              <p className="uppercase text-[#7e7e7e] text-xs font-bold mb-1">
                FIRST TIME PURCHASE:
              </p>
              <div className="flex items-start justify-between mb-1">
                <p className="w-[65%] font-medium py-1 max-md:font-bold">
                  Signature Red Cup
                </p>
                <div className="flex items-center">
                  <s className="text-[#7e7e7e] font-medium text-base">$52</s>
                  <p className="font-bold w-24 text-right">Free</p>
                </div>
              </div>
              <div className="flex items-start justify-between mb-1">
                <p className="w-[65%] font-medium py-1 max-md:font-bold">
                  Daily Ultimate Essentials Single-Serve Storage Box
                </p>
                <div className="flex items-center">
                  <s className="text-[#7e7e7e] font-medium text-base">$14</s>
                  <p className="font-bold w-24 text-right">Free</p>
                </div>
              </div>
              <div className="flex items-start justify-between mb-1">
                <p className="w-[65%] font-medium py-1 max-md:font-bold">
                  5x Bonus Daily Ultimate Essentials Single-Serve Sachets
                </p>
                <div className="flex items-center">
                  <s className="text-[#7e7e7e] font-medium text-base">$34</s>
                  <p className="font-bold w-24 text-right">Free</p>
                </div>
              </div>
              <hr className="bg-[#160505] my-2.5 h-0.5" />
              <div className="flex items-start justify-between mb-1">
                <p className="font-bold">Total</p>
                <div className="flex items-center">
                  <p className="text-[#7e7e7e] font-medium text-base">
                    Save $100
                  </p>
                  <p className="font-bold w-24 text-right">$162</p>
                </div>
              </div>
            </div>
            <button className="w-full rounded-full text-white bg-[#9b1b1f] hover:bg-[#50000b] transition duration-300 md:uppercase text-base font-bold md:mb-2.5 md:mt-8 mt-10 py-3.5 px-4 cursor-pointer">
              Get your Free IM8 Welcome Kit Now**
            </button>
            <div className="flex max-md:flex-col items-center md:gap-4 gap-2 w-full justify-center my-4 text-[#50000b]">
              <div className="flex items-center gap-2">
                <span>
                  <img src={checkIcon} alt="check icon" className="w-4 h-4" />
                </span>
                <span className="text-sm md:text-base">
                  <strong>30-Day</strong> money back guarantee
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <img src={checkIcon} alt="check icon" className="w-4 h-4" />
                </span>
                <span className="text-sm md:text-base">
                  <strong>Update</strong> or <strong>cancel</strong> anytime
                </span>
              </div>
            </div>
          </div>
          <div className="max-md:order-first">
            <img src={productImg} alt="product" loading="lazy" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
