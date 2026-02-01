export interface DropdownOption {
    id: string;
    variantId: string;
    title: string;
    altName: string;
    pricePerServing: string;
    isQuarterly?: boolean;
    isDoubleSubscription?: boolean;
    format?: string;
    optionValueId?: string;
    buttonPrice?: string;
}

export interface StickyProductBarProps {
    productImage: string;
    productTitle: string;
    productVariant?: string;
    options: DropdownOption[];
    defaultOptionId?: string;
    isPreorder?: boolean;
    buttonPrice?: string;
    isQuarterlyRegion?: boolean; // Added control for region logic
}
