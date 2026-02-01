export type ProductType = 'essentials' | 'longevity';

export interface OrganSystem {
    id: string;
    index: number;
    number: string;
    label: string;
    title: string;
    ingredients: string;
    description: string;
    icon: string;
}

export interface ProductData {
    eyebrow: string;
    title: string;
    subtitle: string;
    systems: OrganSystem[];
}

export interface OrganSystemsData {
    essentials: ProductData;
    longevity: ProductData;
}
