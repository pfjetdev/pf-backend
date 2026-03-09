"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get DISPLAY_TO_SLUG () {
        return DISPLAY_TO_SLUG;
    },
    get REGION_DISPLAY_NAMES () {
        return REGION_DISPLAY_NAMES;
    },
    get REGION_META () {
        return REGION_META;
    },
    get REGION_SLUGS () {
        return REGION_SLUGS;
    }
});
const REGION_SLUGS = [
    'europe',
    'asia',
    'middle-east',
    'africa',
    'oceania',
    'americas'
];
const REGION_DISPLAY_NAMES = {
    europe: 'Europe',
    asia: 'Asia',
    'middle-east': 'Middle East',
    africa: 'Africa',
    oceania: 'Oceania',
    americas: 'Americas'
};
const DISPLAY_TO_SLUG = Object.fromEntries(Object.entries(REGION_DISPLAY_NAMES).map(([slug, display])=>[
        display,
        slug
    ]));
const REGION_META = {
    europe: {
        heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80',
        description: 'Premium business and first class deals to Europe\'s most iconic cities — London, Paris, Rome, and beyond.'
    },
    asia: {
        heroImage: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&q=80',
        description: 'Fly business class to Asia — Tokyo, Singapore, Bangkok, Hong Kong, and more at unbeatable prices.'
    },
    'middle-east': {
        heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
        description: 'Discover luxury flight deals to Dubai, Doha, Abu Dhabi, and other Middle Eastern destinations.'
    },
    africa: {
        heroImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80',
        description: 'Premium cabin deals to Africa — Cape Town, Marrakech, Cairo, Nairobi, and more.'
    },
    oceania: {
        heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80',
        description: 'Business class deals to Australia, New Zealand, and the Pacific — Sydney, Melbourne, Auckland.'
    },
    americas: {
        heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80',
        description: 'Flight deals across the Americas — New York, Miami, Rio de Janeiro, Buenos Aires, and more.'
    }
};

//# sourceMappingURL=catalog.types.js.map