export interface StandardType {
    isTrue: boolean;
    item: string;
    description: string;
}

export const dailyStandards: StandardType[] = [
    { isTrue: true, item: "Superfoods, Greens, Fruits, Herbs", description: "" },
    { isTrue: true, item: "Clinical Dosed B Vitamins", description: "" },
    { isTrue: true, item: "30mcg Clinical Dosed Vitamin D3", description: "" },
    { isTrue: true, item: "40mcg Clinical Dosed Vitamin K2", description: "" },
    { isTrue: true, item: "100mg Clinical Dosed CoQ10", description: "" },
    { isTrue: true, item: "1000mg Clinical Dosed MSM", description: "" },

    {
        isTrue: true,
        item: "3g Prebiotic fiber",
        description: "(50% more)",
    },
    {
        isTrue: true,
        item: "900mg Clinical Dosed Vitamin C",
        description: "(114% more)",
    },
    {
        isTrue: true,
        item: "4.2mg Clinical Dosed Riboflavin",
        description: "(110% more)",
    },
    {
        isTrue: true,
        item: "65mg Magnesium",
        description: "(150% more)",
    },
    {
        isTrue: true,
        item: "70mcg Clinical Dosed Selenium",
        description: "(250% more)",
    },
    {
        isTrue: true,
        item: "100mcg Clinical Dosed Chromium",
        description: "(300% more)",
    },
    {
        isTrue: true,
        item: "1mg Clinical Dosed Copper",
        description: "(413% more)",
    },
    {
        isTrue: true,
        item: "3mg Clinical Dosed Manganese",
        description: "(650% more)",
    },

    { isTrue: true, item: "50mcg Clinical Dosed Molybdenum", description: "" },
    { isTrue: true, item: "150mcg Clinical Dosed Iodine", description: "" },

    {
        isTrue: true,
        item: "10b CFU Probiotics",
        description: "B coagulans BC99®, B subtilis DE111®",
    },
    {
        isTrue: true,
        item: "Postbiotics",
        description: "FloraSMART® (25mg)",
    },
    {
        isTrue: true,
        item: "Cell Rejuvenation Technology 8®",
        description: "",
    },
    {
        isTrue: true,
        item: "Stevia-free",
        description: "(Fermented Sugarcane Extract)",
    },
    {
        isTrue: true,
        item: "No Refrigeration",
        description: "Shelf-stable Probiotics",
    },
    {
        isTrue: true,
        item: "Branded Ingredients",
        description:
            "Quatrefolic®, AstaPure®, DE111®, Bacillus BC99®, VegD3™, FloraSmart™, Nutralga®, Astapure®",
    },
];

export const leadingStandards: StandardType[] = [
    { isTrue: true, item: "Superfoods, Greens, Fruits, Herbs", description: "" },
    { isTrue: true, item: "Clinical Dosed B Vitamins", description: "" },

    { isTrue: false, item: "No Vitamin D3", description: "" },
    { isTrue: false, item: "Vitamin K2 dosage not disclosed", description: "" },
    { isTrue: false, item: "CoQ10 dosage not disclosed", description: "" },
    { isTrue: false, item: "No MSM", description: "" },
    { isTrue: false, item: "2g Prebiotic fiber", description: "" },
    { isTrue: false, item: "420mg Vitamin C", description: "" },
    { isTrue: false, item: "2mg Riboflavin", description: "" },
    { isTrue: false, item: "26mg Magnesium", description: "" },
    { isTrue: false, item: "20mcg Selenium", description: "" },
    { isTrue: false, item: "25mcg Chromium", description: "" },
    { isTrue: false, item: "195mcg Copper", description: "" },
    { isTrue: false, item: "400mcg Manganese", description: "" },
    { isTrue: false, item: "No Molybdenum", description: "" },
    { isTrue: false, item: "No Iodine", description: "" },
    { isTrue: false, item: "7.2b CFU Probiotics", description: "" },
    { isTrue: false, item: "No Postbiotics", description: "" },
    { isTrue: false, item: "No Proprietary Technology", description: "" },
    { isTrue: false, item: "Includes Stevia", description: "" },
    { isTrue: false, item: "Refrigeration Needed", description: "" },
    { isTrue: false, item: "None", description: "" },
];

export const dailyProduct =
    "//im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601";

export const leadingProduct =
    "//im8health.com/cdn/shop/files/179-_Converted_B_1.png?v=1730093105";
