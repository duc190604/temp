'use client';

import { useState } from 'react';

export default function GorgiasChat() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChat = () => setIsOpen(!isOpen);

    const menuItems = [
        "Why IM8?",
        "30-Day Satisfaction Guarantee",
        "Manage my subscription",
        "Tracking not updating",
        "Billing help: what to expect"
    ];

    return (
        <div className="fixed bottom-[90px] md:bottom-[90px] right-4 z-10000 font-sans flex flex-col items-end">
            {/* Chat Window */}
            <div
                className={`
                    bg-[#a40011] shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right flex flex-col
                    fixed inset-0 w-full h-[100dvh] rounded-none z-[10002]
                    md:relative md:inset-auto md:w-[370px] md:max-w-[calc(100vw-32px)] md:h-auto md:rounded-[20px] md:mb-4 md:z-auto
                    ${isOpen ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-4 invisible h-0'}
                `}
                style={{
                    boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                }}
            >
                {/* Header */}
                <div className="p-6 pb-2 text-white shrink-0 relative">
                    {/* Close Button (Mobile Only) */}
                    <button
                        onClick={toggleChat}
                        className="absolute top-6 right-6 p-2 text-white/80 hover:text-white md:hidden"
                        aria-label="Close chat"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* IM8 Logo */}
                    <div className="mb-4">
                        <svg width="80" height="24" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <text x="0" y="24" fontFamily="serif" fontSize="28" fill="white" letterSpacing="2">I·M·8</text>
                            <text x="75" y="14" fontFamily="sans-serif" fontSize="10" fill="white">TM</text>
                        </svg>
                    </div>
                    <h2 className="text-[20px] font-bold leading-tight mb-2">How can we help you today?</h2>
                </div>

                {/* Content */}
                <div className="p-4 pt-2 overflow-y-auto flex-1 custom-scrollbar">
                    {/* Menu Items */}
                    <div className="bg-white rounded-xl overflow-hidden mb-3">
                        {menuItems.map((item, index) => (
                            <button
                                key={index}
                                className="w-full flex items-center justify-between p-4 bg-white hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 text-left group"
                            >
                                <span className="text-[#333] text-[14px] font-normal font-sans">{item}</span>
                                <span className="text-[#a40011]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 18l6-6-6-6" />
                                    </svg>
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Tracking Section */}
                    <div className="bg-white rounded-xl p-3 mb-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-lg bg-[#ffe8e8] flex items-center justify-center text-[#a40011]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-[#1a1a1a] text-[14px]">Track and manage my orders</h3>
                        </div>
                        <span className="text-[#a40011]">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </span>
                    </div>

                    {/* Welcome Section */}
                    <div className="bg-white rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full bg-[#a40011] flex items-center justify-center text-white text-[10px] font-serif border border-white/10">
                                    I·M·8
                                </div>
                                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#10b981] rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#1a1a1a] text-[14px]">Welcome to IM8</h3>
                                <p className="text-[13px] text-gray-400 font-light">Send us a message</p>
                            </div>
                        </div>
                        <div className="text-[#a40011] pr-1">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toggle Button */}
            <button
                onClick={toggleChat}
                className="w-[66px] h-[66px] rounded-full bg-[#a40011] text-white flex items-center justify-center shadow-lg hover:bg-[#8a000e] transition-all hover:scale-105 group relative"
                aria-label="Chat with us"
            >
                {/* Chat Icon (shown when closed) */}
                <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                    <svg width="30" height="30" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <filter id="shadow">
                            <feGaussianBlur stdDeviation="0,4" in="SourceAlpha" />
                            <feOffset dx="0" dy="4" result="offsetblur" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.4" />
                            </feComponentTransfer>
                            <feComposite operator="in" in2="offsetblur" />
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <path fill="#fff" filter="url(#shadow)" d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50h30.8l0-10.6C92.5,80.2,100,66,100,50C100,22.4,77.6,0,50,0z M32,54.5 c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5C36.5,52.5,34.5,54.5,32,54.5z M50,54.5c-2.5,0-4.5-2-4.5-4.5 c0-2.5,2-4.5,4.5-4.5c2.5,0,4.5,2,4.5,4.5C54.5,52.5,52.5,54.5,50,54.5z M68,54.5c-2.5,0-4.5-2-4.5-4.5c0-2.5,2-4.5,4.5-4.5 s4.5,2,4.5,4.5C72.5,52.5,70.5,54.5,68,54.5z" />
                    </svg>
                </span>

                {/* Close Icon (shown when open) */}
                <span className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.99994 9.63327L2.28327 15.3499C2.06938 15.5638 1.79716 15.6708 1.4666 15.6708C1.13605 15.6708 0.863824 15.5638 0.649935 15.3499C0.436046 15.136 0.329102 14.8638 0.329102 14.5333C0.329102 14.2027 0.436046 13.9305 0.649935 13.7166L6.3666 7.99994L0.649935 2.28327C0.436046 2.06938 0.329102 1.79716 0.329102 1.4666C0.329102 1.13605 0.436046 0.863824 0.649935 0.649935C0.863824 0.436046 1.13605 0.329102 1.4666 0.329102C1.79716 0.329102 2.06938 0.436046 2.28327 0.649935L7.99994 6.3666L13.7166 0.649935C13.9305 0.436046 14.2027 0.329102 14.5333 0.329102C14.8638 0.329102 15.136 0.436046 15.3499 0.649935C15.5638 0.863824 15.6708 1.13605 15.6708 1.4666C15.6708 1.79716 15.5638 2.06938 15.3499 2.28327L9.63327 7.99994L15.3499 13.7166C15.5638 13.9305 15.6708 14.2027 15.6708 14.5333C15.6708 14.8638 15.5638 15.136 15.3499 15.3499C15.136 15.5638 14.8638 15.6708 14.5333 15.6708C14.2027 15.6708 13.9305 15.5638 13.7166 15.3499L7.99994 9.63327Z" fill="#fff" />
                    </svg>
                </span>
            </button>
        </div>
    );
}
