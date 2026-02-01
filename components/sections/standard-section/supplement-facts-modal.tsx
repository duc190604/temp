import React, { useEffect } from "react";

interface SupplementFactsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SupplementFactsModal: React.FC<SupplementFactsModalProps> = ({
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center ">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[#a11c20]"
                onClick={onClose}
            ></div>

            {/* Popup Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center pt-4 md:p-10 md:pt-4">
                <div className="relative rounded-xl w-full max-h-full flex flex-col">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="ml-auto mb-4 z-10 cursor-pointer hover:opacity-80 transition-opacity"
                    >
                        <svg
                            width="48"
                            height="48"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-10 md:w-12 md:h-12"
                        >
                            <g clipPath="url(#clip0_2574_30233)">
                                <g filter="url(#filter0_b_2574_30233)">
                                    <path
                                        d="M24 0L40.973 7.02703L48 24L40.973 40.973L24 48L7.02703 40.973L0 24L7.02703 7.02703L24 0Z"
                                        fill="white"
                                        fillOpacity="0.8"
                                    ></path>
                                    <path
                                        d="M7.40974 7.40974L24 0.541158L40.5903 7.40974L47.4588 24L40.5903 40.5903L24 47.4588L7.40974 40.5903L0.541158 24L7.40974 7.40974Z"
                                        stroke="#50000B"
                                    ></path>
                                </g>
                                <path
                                    d="M30.3633 30.3639L17.6354 17.636"
                                    stroke="#50000B"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                ></path>
                                <path
                                    d="M30.3633 17.636L17.6354 30.3639"
                                    stroke="#50000B"
                                    strokeWidth="2"
                                    strokeLinecap="square"
                                ></path>
                            </g>
                            <defs>
                                <filter
                                    id="filter0_b_2574_30233"
                                    x="-12"
                                    y="-12"
                                    width="72"
                                    height="72"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                                    <feGaussianBlur
                                        in="BackgroundImageFix"
                                        stdDeviation="6"
                                    ></feGaussianBlur>
                                    <feComposite
                                        in2="SourceAlpha"
                                        operator="in"
                                        result="effect1_backgroundBlur_2574_30233"
                                    ></feComposite>
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="effect1_backgroundBlur_2574_30233"
                                        result="shape"
                                    ></feBlend>
                                </filter>
                                <clipPath id="clip0_2574_30233">
                                    <rect width="48" height="48" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    {/* Content */}
                    <div className="overflow-y-auto max-h-full w-full custom-scrollbar rounded-xl">
                        <div className="hidden md:block">
                            <img
                                src="//im8health.com/cdn/shop/files/pdp_essentials_supp-large_202505_1.webp?v=1759897183"
                                alt="Supplement Facts Desktop"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                        <div className="md:hidden">
                            <img
                                src="//im8health.com/cdn/shop/files/pdp_essentials_supp-mobile_202505.webp?v=1747046933"
                                alt="Supplement Facts Mobile"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
