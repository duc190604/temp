"use client";
import { useState } from 'react';
import { useHeaderVisibility } from '@/hooks/use-header-visibility';

const leftNavItems = [
    { label: 'Shop', href: '/collections/all' },
    { label: 'Science', href: '/pages/science' },
    { label: 'The Beckham Stack', href: '/products/beckhamstack' },
    { label: 'Welcome from David', href: '/pages/welcome' },
];

const rightNavItems = [
    { label: 'Reviews', href: '/pages/wall-of-health' },
    { label: 'Ingredients', href: '/pages/ingredients' },
    { label: 'Discover', href: '#' },
];

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
    const [isDiscoverMenuOpen, setIsDiscoverMenuOpen] = useState(false);
    const isHidden = useHeaderVisibility(100);


    return (
        <>
            {/* Announcement Bar */}
            <a
                href="/pages/newyearoffer"
                className={`relative block text-white no-underline cursor-pointer transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'
                    }`}
                style={{
                    background: '#a40011',
                    textDecoration: 'none',
                }}
            >
                {/* Announcement Text */}
                <div className="max-w-600 mx-auto px-6">
                    <div className="py-2.5 text-center">
                        <div
                            className="uppercase text-sm font-bold tracking-wide leading-tight"
                            style={{ fontFamily: 'NB Architekt, sans-serif' }}
                        >
                            <strong>2026 STARTS NOW:</strong>{' '}
                            <br className='md:hidden' />
                            <span className="">35% OFF — Feel Like Yourself Again</span>
                        </div>
                    </div>
                </div>

                {/* Currency Selector - Desktop */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <button
                        className="flex items-center gap-1 text-white text-xs font-bold uppercase tracking-wide"
                        style={{ fontFamily: 'NB Architekt, sans-serif' }}
                    >
                        <span>USD</span>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" className="w-3 h-3">
                            <path d="M9 4.8125L5.625 8.1875L2.25 4.8125" stroke="white" strokeWidth="2" strokeLinecap="square" />
                        </svg>
                    </button>
                </div>
            </a>

            {/* Main Header */}
            <header
                className={`bg-white border-b border-[rgba(80,0,11,0.08)] sticky top-0 z-9 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'
                    }`}
                style={{ fontFamily: 'Aeonik, sans-serif' }}
            >
                <div className="max-w-600 mx-auto px-8 h-16">
                    <div className="grid grid-cols-[1fr_2fr_1fr] lg:grid-cols-3 items-center h-full">

                        {/* Left Section */}
                        <div className="flex items-center justify-start">
                            {/* Mobile Hamburger */}
                            <button
                                className="lg:hidden p-2 -ml-2 hover:opacity-70"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M2 16H30" stroke="#A40011" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M2 7H30" stroke="#A40011" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M2 25H30" stroke="#A40011" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </button>

                            {/* Desktop Left Nav */}
                            <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
                                {leftNavItems.map((item) => (
                                    item.label === 'Shop' ? (
                                        <div key={item.label} className="relative">
                                            <button
                                                onMouseEnter={() => setIsShopMenuOpen(true)}
                                                onMouseLeave={() => setIsShopMenuOpen(false)}
                                                className="flex items-center font-medium gap-1 text-[#50000b] hover:opacity-70 transition-opacity py-2 whitespace-nowrap"
                                                style={{ fontSize: 'clamp(13px, 0.9vw, 14px)' }}
                                            >
                                                <span>{item.label}</span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                                    <path d="M9 4.3125L5.625 7.6875L2.25 4.3125" stroke="#50000B" strokeWidth="2" strokeLinecap="square" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="font-medium text-[#50000b] hover:opacity-70 transition-opacity whitespace-nowrap"
                                            style={{ fontSize: 'clamp(13px, 0.9vw, 14px)' }}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                ))}
                            </nav>
                        </div>

                        {/* Center Logo */}
                        <div className="flex justify-center">
                            <a href="/" className="inline-block">
                                <img
                                    src="https://im8health.com/cdn/shop/files/Header-Logo-New.svg?v=1729066833&width=95"
                                    alt="IM8 Health"
                                    className="h-7 w-auto"
                                    width="95"
                                    height="24"
                                />
                            </a>
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center justify-end gap-4">
                            {/* Desktop Right Nav */}
                            <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
                                {rightNavItems.map((item) => (
                                    item.label === 'Discover' ? (
                                        <div key={item.label} className="relative">
                                            <button
                                                onMouseEnter={() => setIsDiscoverMenuOpen(true)}
                                                onMouseLeave={() => setIsDiscoverMenuOpen(false)}
                                                className="flex items-center gap-1 font-medium text-[#50000b] hover:opacity-70 transition-opacity py-2 whitespace-nowrap"
                                                style={{ fontSize: 'clamp(13px, 0.9vw, 14px)' }}
                                            >
                                                <span>{item.label}</span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                                                    <path d="M9 4.3125L5.625 7.6875L2.25 4.3125" stroke="#50000B" strokeWidth="2" strokeLinecap="square" />
                                                </svg>
                                            </button>
                                        </div>
                                    ) : (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="font-medium text-[#50000b] hover:opacity-70 transition-opacity whitespace-nowrap"
                                            style={{ fontSize: 'clamp(13px, 0.9vw, 14px)' }}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                ))}
                            </nav>




                            {/* Account Icon */}
                            <a href="/account/login" className="p-1 hover:opacity-70">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30" stroke="#50000B" strokeWidth="2" strokeLinecap="square" />
                                    <path d="M16 17C20.1421 17 23.5 13.6421 23.5 9.5C23.5 5.35786 20.1421 2 16 2C11.8579 2 8.5 5.35786 8.5 9.5C8.5 13.6421 11.8579 17 16 17Z" stroke="#50000B" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </a>

                            {/* Cart Icon */}
                            <a href="/cart" className="relative p-1 hover:opacity-70">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z" stroke="#50000B" strokeWidth="2" />
                                    <text className='text-xs' x="16" y="15" textAnchor="middle" dominantBaseline="central" fill="#50000B" fontSize="14" fontWeight="bold" fontFamily="Aeonik, sans-serif">
                                        0
                                    </text>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
                        <div className="p-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mb-6"
                            >
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <path d="M25.428 6.57227L6.57178 25.4284M25.428 25.4284L6.57184 6.57227" stroke="#A40011" strokeWidth="2" strokeLinecap="square" />
                                </svg>
                            </button>

                            <nav className="space-y-4">
                                {[...leftNavItems, ...rightNavItems].map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        className="block text-base text-[#50000b] py-2"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};
