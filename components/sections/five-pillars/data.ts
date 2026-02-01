import { ProductType, Pillar, FeatureCard } from './types';
import { PillarIcons, FeatureIcons } from './icons';

export const PILLARS_DATA: Record<ProductType, Pillar[]> = {
    essentials: [
        {
            id: 0,
            number: '01',
            icon: PillarIcons.essentials.pillar1,
            label: 'Comprehensive Nutritional Foundation',
            preview: 'Complete Vitamin & Mineral Profile',
            title: 'Comprehensive Nutritional Foundation',
            tagline: 'Complete Vitamin & Mineral Profile',
            benefits: [
                'All essential vitamins (A, C, D, E, K1, K2, B-complex)',
                'Full mineral spectrum (12 essential)',
                'Vitamin C: 900mg (1000% DV) - Antioxidant Support',
                'Vitamin D3: 1200 IU - From Vegan Lichen',
                'Vitamin B12: 24mcg - Bioactive Methylcobalamin',
                'Bioactive Forms: Quatrefolic®️ & Methylcobalamin for Superior Absorption'
            ]
        },
        {
            id: 1,
            number: '02',
            icon: PillarIcons.essentials.pillar2,
            label: 'Superior Digestive Health Support',
            preview: '4-Tier Digestive System',
            title: 'Superior Digestive Health Support',
            tagline: '4-Tier Digestive System (Unique Advantage)',
            benefits: [
                'PREBIOTICS: Guar Fiber & Agave Inulin (Feeds beneficial bacteria)',
                'PROBIOTICS: 10 Billion CFU (Bacillus subtilis DE111® & Bacillus coagulans BC99®)',
                'POSTBIOTICS: Lactobacillus casei 327 (FloraSMART®) - Clinically Proven for Regularity',
                'DIGESTIVE ENZYMES: Complete Enzyme Complex (Amylase, Protease, Lipase, Cellulase)'
            ]
        },
        {
            id: 2,
            number: '03',
            icon: PillarIcons.essentials.pillar3,
            label: 'Powerful Superfood & Antioxidant Complex',
            preview: '4,100mg Raw Superfoods Blend',
            title: 'Powerful Superfood & Antioxidant Complex',
            tagline: '4,100mg Raw Superfoods Blend',
            benefits: [
                'Organic Greens: Spinach, Beet Root, Carrot Root',
                'Antioxidant Fruits: Blueberry, Pomegranate, Cranberry, Acai',
                'Functional Herbs: Milk Thistle, Turmeric, Ginger, Elderberry',
                'Specialty: Sea Moss, Grape Seed Extract, Green Tea'
            ]
        },
        {
            id: 3,
            number: '04',
            icon: PillarIcons.essentials.pillar4,
            label: 'Specialized Health Complexes',
            preview: 'Targeted Support for Performance',
            title: 'Specialized Health Complexes',
            tagline: 'Targeted Support for Performance',
            benefits: [
                'Advanced Hydration & Electrolyte (2,500mg): Hydra Electrolytes Complex',
                'Essential Amino Acid & Recovery (1,165mg): Amino & Renew Complex',
                'Joint & Muscle Health (1,000mg): MSM, Supports Collagen',
                'Adaptogenic & Mushroom Support (200mg): Ashwagandha, Reishi, Lion\'s Mane',
                'Heart Health Support (100mg): CoQ10, Cellular'
            ]
        },
        {
            id: 4,
            number: '05',
            icon: PillarIcons.essentials.pillar5,
            label: 'Cell Rejuvenation Technology 8™',
            preview: 'Proprietary Longevity Complex',
            title: 'Cell Rejuvenation Technology 8™',
            tagline: 'Proprietary Longevity Complex (25mg)',
            benefits: [
                'Spermidine',
                'Astaxanthin',
                'Trans-resveratrol',
                'Berberine',
                'Urolithin A',
                'Seaweed Extracts'
            ]
        }
    ],
    longevity: [
        {
            id: 0,
            number: '01',
            icon: PillarIcons.longevity.pillar1,
            label: 'Cellular Foundation Builder',
            preview: 'Essential Amino Acid Support',
            title: 'Cellular Foundation Builder',
            tagline: 'Essential Amino Acid Support (5g)',
            description: 'Provides therapeutic dosages of two critical longevity amino acids that naturally decline with age, supporting cellular protection and longevity pathways.',
            benefits: [
                'L-Glycine 3,000mg',
                'Taurine 2,000mg'
            ]
        },
        {
            id: 1,
            number: '02',
            icon: PillarIcons.longevity.pillar2,
            label: 'Cellular Protection Activator',
            preview: 'Senolytic Complex',
            title: 'Cellular Protection Activator',
            tagline: 'Senolytic Complex (600mg)',
            description: 'Triple senolytic complex that targets cellular senescence—one of the primary hallmarks of aging—through complementary compounds that eliminate \'zombie cells\'.',
            benefits: [
                'Trans-Resveratrol 250mg',
                'Quercetin Phytosome 250mg',
                'Fisetin 100mg'
            ]
        },
        {
            id: 2,
            number: '03',
            icon: PillarIcons.longevity.pillar3,
            label: 'NMN NAD+ Energy Booster',
            preview: 'Mitochondrial Support',
            title: 'NMN NAD+ Energy Booster',
            tagline: 'Mitochondrial Support (310mg)',
            description: 'Combines the most direct NAD+ precursor with a mitochondrial biogenesis promoter for comprehensive cellular energy support and DNA repair.',
            benefits: [
                'NMN 300mg',
                'PQQ 10mg'
            ]
        },
        {
            id: 3,
            number: '04',
            icon: PillarIcons.longevity.pillar4,
            label: 'Metabolic AMPK/SIRT1 Activator',
            preview: 'Metabolic Switch',
            title: 'Metabolic AMPK/SIRT1 Activator',
            tagline: 'Metabolic Switch (106mg)',
            description: 'Enhanced bioavailability and metabolic support combined with powerful antioxidant protection for optimal metabolic function and cellular stress resistance.',
            benefits: [
                'Dihydroberberine 100mg',
                'Astaxanthin 6mg'
            ]
        },
        {
            id: 4,
            number: '05',
            icon: PillarIcons.longevity.pillar5,
            label: 'Cellular Renewal Activator',
            preview: 'Autophagy Support',
            title: 'Cellular Renewal Activator',
            tagline: 'Autophagy Support (3mg)',
            description: 'Promotes autophagy—the cellular \'cleaning\' process essential for healthy aging—removing damaged proteins and organelles for optimal cellular function.',
            benefits: [
                'Spermidine 3mg'
            ]
        }
    ]
};

export const FEATURE_CARDS: Record<ProductType, FeatureCard[]> = {
    essentials: [
        {
            icon: FeatureIcons.essentials.card1,
            title: 'Superior Ingredient Forms',
            text: 'Bioactive Vitamins & Organic Minerals for maximum absorption.'
        },
        {
            icon: FeatureIcons.essentials.card2,
            title: 'Clean Formulation',
            text: 'No Stevia (Uses Reb M), Allergen-Free, Non-GMO, Vegan-Friendly.'
        },
        {
            icon: FeatureIcons.essentials.card3,
            title: 'Branded Ingredients',
            text: 'Quatrefolic®, VegD3®, FloraSMART®, AstaPure®.'
        }
    ],
    longevity: [
        {
            icon: FeatureIcons.longevity.card1,
            title: 'Therapeutic Dosing',
            text: 'Clinically relevant doses of key longevity ingredients like NMN and Spermidine.'
        },
        {
            icon: FeatureIcons.longevity.card2,
            title: 'Synergistic Formulation',
            text: 'Ingredients selected to work together to amplify cellular repair and renewal.'
        },
        {
            icon: FeatureIcons.longevity.card3,
            title: 'Premium Purity',
            text: 'Rigorous testing for purity and potency, free from fillers and artificial additives.'
        }
    ]
};
