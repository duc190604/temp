import { JSX } from 'react';

export type ProductType = 'essentials' | 'longevity';

export interface Pillar {
    id: number;
    number: string;
    icon: JSX.Element;
    label: string;
    preview: string;
    title: string;
    tagline: string;
    description?: string;
    benefits: string[];
}

export interface FeatureCard {
    icon: JSX.Element;
    title: string;
    text: string;
}
