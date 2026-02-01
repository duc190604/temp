'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { ProductType } from './types';

interface PillarsContextType {
    activeProduct: ProductType;
    activePillar: Record<ProductType, number>;
    isEssentials: boolean;
    setActiveProduct: (product: ProductType) => void;
    setActivePillar: (product: ProductType, index: number) => void;
}

const PillarsContext = createContext<PillarsContextType | undefined>(undefined);

export const usePillarsContext = () => {
    const context = useContext(PillarsContext);
    if (!context) {
        throw new Error('usePillarsContext must be used within PillarsProvider');
    }
    return context;
};

export const PillarsProvider = ({ children }: { children: ReactNode }) => {
    const [activeProduct, setActiveProduct] = useState<ProductType>('essentials');
    const [activePillar, setActivePillarState] = useState<Record<ProductType, number>>({
        essentials: 0,
        longevity: 0
    });

    const handlePillarChange = (product: ProductType, index: number) => {
        setActivePillarState(prev => ({
            ...prev,
            [product]: index
        }));
    };

    return (
        <PillarsContext.Provider
            value={{
                activeProduct,
                activePillar,
                isEssentials: activeProduct === 'essentials',
                setActiveProduct,
                setActivePillar: handlePillarChange
            }}
        >
            {children}
        </PillarsContext.Provider>
    );
};
