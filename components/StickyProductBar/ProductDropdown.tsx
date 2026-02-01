'use client';

import React, { useState, useRef, useEffect, useMemo } from 'react';
import type { DropdownOption } from './types';

interface ProductDropdownProps {
    options: DropdownOption[];
    defaultOptionId?: string;
    selectedOptionId?: string; // New prop for external control
    onSelectionChange?: (option: DropdownOption) => void;
    isQuarterlyRegion?: boolean;
}

export const ProductDropdown = React.memo(({
    options,
    defaultOptionId,
    selectedOptionId,
    onSelectionChange,
    isQuarterlyRegion = true
}: ProductDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Logic to determine initial selection and valid options
    // Based on the provided JS snippet logic
    useEffect(() => {
        const isHighlight30dayMode = document.documentElement.classList.contains('highlight-30day-mode');
        let initialOption: DropdownOption | undefined;

        // Prop has highest priority
        if (selectedOptionId) {
            initialOption = options.find(opt => opt.id === selectedOptionId);
        }

        if (!initialOption) {
            if (isHighlight30dayMode) {
                // Prefer regular 30-day subscription
                initialOption = options.find(opt => !opt.isQuarterly && !opt.isDoubleSubscription);
            } else if (isQuarterlyRegion) {
                // US/UK: Prefer quarterly
                initialOption = options.find(opt => opt.isQuarterly);
            } else {
                // Rest of World: Prefer double subscription
                initialOption = options.find(opt => opt.isDoubleSubscription);
                // If hidden/missing, fallback to regular
                if (!initialOption) {
                    initialOption = options.find(opt => !opt.isQuarterly && !opt.isDoubleSubscription);
                }
            }

            // Fallback to default ID or first option
            if (!initialOption) {
                initialOption = options.find(opt => opt.id === defaultOptionId) || options[0];
            }
        }

        if (initialOption) {
            setSelectedOption(initialOption);
            // If we derived a selection that wasn't passed in via props, and we have a callback, 
            // we should probably notify the parent so it stays in sync (e.g. initial load region logic).
            // But we must be careful of infinite loops. 
            // For now, only notify if it wasn't a prop-driven update.
            if (!selectedOptionId && onSelectionChange) {
                onSelectionChange(initialOption);
            }
        }
    }, [options, defaultOptionId, isQuarterlyRegion, selectedOptionId]);


    // Sort options based on logic
    const sortedOptions = useMemo(() => {
        const isHighlight30dayMode = typeof document !== 'undefined' && document.documentElement.classList.contains('highlight-30day-mode');

        if (isHighlight30dayMode) {
            // Regular first, then premium
            return [...options].sort((a, b) => {
                const aIsPremium = a.isQuarterly || a.isDoubleSubscription;
                const bIsPremium = b.isQuarterly || b.isDoubleSubscription;
                if (aIsPremium === bIsPremium) return 0;
                return aIsPremium ? 1 : -1;
            });
        }

        // Default order (usually preserved or specific logic if needed)
        return options;
    }, [options]);

    // Filter options based on region (DoubleSub hidden in US/UK logic from CSS)
    const visibleOptions = useMemo(() => {
        return sortedOptions.filter(opt => {
            // CSS rule: .dropdown-option[data-double-subscription="true"] { display: none !important } (presumed for US/UK or general)
            // The snippet says: "US/UK: Hide double subscription variants in dropdown"
            // converting this to JS logic since we are rendering:
            if (isQuarterlyRegion && opt.isDoubleSubscription) return false;
            return true;
        });
    }, [sortedOptions, isQuarterlyRegion]);


    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    const handleOptionClick = (option: DropdownOption) => {
        setSelectedOption(option);
        setIsOpen(false);
        onSelectionChange?.(option);
    };

    const toggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    if (!selectedOption) return null;

    return (
        <div ref={dropdownRef} id="sticky-buy-dropdown" className="custom-dropdown relative w-full md:w-[280px] overflow-visible text-left">
            {/* Selected Option Display */}
            <div
                onClick={toggleDropdown}
                className={`dropdown-selected flex flex-col justify-center rounded-[20px] border border-[#50000b] bg-[#f9f4f4] py-1 md:py-2 pl-4 md:pl-[30px] pr-8 md:pr-[30px] cursor-pointer relative min-h-[42px] ${isOpen ? 'open' : ''}`}
            >
                <div className="dropdown-selected__title text-xs md:text-sm text-[#50000b] font-bold antialiased min-h-[1.3em] overflow-hidden text-ellipsis whitespace-nowrap">
                    {selectedOption.altName}
                </div>
                {selectedOption.pricePerServing && (
                    <div className="dropdown-selected__meta text-[12px] md:text-xs text-[#50000b] font-normal leading-tight">
                        {selectedOption.pricePerServing}
                    </div>
                )}

                {/* Arrow Icon */}
                <div className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                        <path d="M1 1L5 5L9 1" stroke="#50000b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

            {/* Dropdown Options */}
            {isOpen && (
                <ul id="sticky-buy-options" className="dropdown-options dropdown-up absolute bottom-full mb-[5px] w-full list-none overflow-hidden rounded-[20px] border border-[#50000b] bg-white p-0 shadow-[0_4px_20px_rgba(0,0,0,0.15)] z-1000 block">
                    {visibleOptions.map((option, index) => {
                        const displayName = option.altName.split('(')[0].trim();
                        return (
                            <li
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                className={`dropdown-option cursor-pointer px-[20px] py-[15px] text-[#50000b] text-[15px] font-bold hover:bg-[#f9f4f4] ${index < visibleOptions.length - 1 ? 'border-b border-[#f0f0f0]' : ''
                                    }`}
                                data-option-value-id={option.optionValueId}
                                data-variant-id={option.variantId}
                                data-title={option.title}
                                data-alt-name={option.altName}
                                data-quarterly={option.isQuarterly}
                                data-double-subscription={option.isDoubleSubscription}
                            >
                                {displayName}
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
});

ProductDropdown.displayName = 'ProductDropdown';
