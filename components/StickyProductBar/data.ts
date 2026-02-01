export const STICKY_BAR_JAR_DATA = {
    productImage: "https://im8health.com/cdn/shop/files/PDP_060fbac6-1883-4c53-aae5-f791c68056a5.jpg?v=1766566335&width=500",
    productTitle: "Daily Ultimate Essentials: All-in-One Supplement",
    productVariant: "Forever Jar",
    buttonPrice: "$78.33 USD/mo",
    options: [
        {
            id: 'quarterly',
            variantId: '47315076022439',
            optionValueId: '5658043252903',
            title: 'Quarterly Subscription',
            altName: '90-Day Supply (Save 30%)',
            pricePerServing: '$2.61 USD / serving',
            isQuarterly: true,
            buttonPrice: '$78.33 USD/mo'
        },
        {
            id: 'double-sub',
            variantId: '46954316955815',
            optionValueId: '5316462870695',
            title: 'Double Subscription',
            altName: '60-Day Supply',
            pricePerServing: '$2.80 USD / serving',
            isDoubleSubscription: true,
            buttonPrice: '$84.00 USD/mo'
        },
        {
            id: 'subscription',
            variantId: '46073779257511',
            optionValueId: '4599807738023',
            title: 'Subscription',
            altName: '30-Day Supply (Save 20%)',
            pricePerServing: '$2.97 USD / serving',
            buttonPrice: '$89.00 USD/mo'
        }
    ],
    defaultOptionId: "quarterly"
};

export const STICKY_BAR_SACHET_DATA = {
    productImage: "https://im8health.com/cdn/shop/files/pdp_essentials-sachet_carousel01.jpg?v=1761040602&width=500",
    productTitle: "Daily Ultimate Essentials: All-in-One Supplement",
    productVariant: "Single-Serve Sachets",
    buttonPrice: "$87.33 USD/mo",
    options: [
        {
            id: 'quarterly',
            variantId: 'sachet-quarterly-id', // Placeholder ID
            optionValueId: 'sachet-quarterly-val-id',
            title: 'Quarterly Subscription',
            altName: '90-Day Supply (Save 22%)',
            pricePerServing: '$2.91 USD / serving',
            isQuarterly: true,
            buttonPrice: '$87.33 USD/mo'
        },
        // Omitting Double Sub for Sachet as we don't have data
        {
            id: 'subscription',
            variantId: 'sachet-subscription-id', // Placeholder ID
            optionValueId: 'sachet-subscription-val-id',
            title: 'Subscription',
            altName: '30-Day Supply (Save 12%)',
            pricePerServing: '$3.30 USD / serving',
            buttonPrice: '$99.00 USD/mo'
        }
    ],
    defaultOptionId: "quarterly"
};

export const STICKY_BAR_DEFAULT_DATA = STICKY_BAR_JAR_DATA;
