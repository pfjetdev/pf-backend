export const REGION_SLUGS = [
  'europe', 'asia', 'middle-east', 'africa', 'oceania', 'americas',
] as const;

export type RegionSlug = (typeof REGION_SLUGS)[number];

export const REGION_DISPLAY_NAMES: Record<RegionSlug, string> = {
  europe: 'Europe',
  asia: 'Asia',
  'middle-east': 'Middle East',
  africa: 'Africa',
  oceania: 'Oceania',
  americas: 'Americas',
};

export const DISPLAY_TO_SLUG: Record<string, RegionSlug> = Object.fromEntries(
  Object.entries(REGION_DISPLAY_NAMES).map(([slug, display]) => [display, slug as RegionSlug]),
) as Record<string, RegionSlug>;

export const REGION_META: Record<RegionSlug, { heroImage: string; description: string }> = {
  europe: {
    heroImage: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1600&q=80',
    description: 'Premium business and first class deals to Europe\'s most iconic cities — London, Paris, Rome, and beyond.',
  },
  asia: {
    heroImage: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1600&q=80',
    description: 'Fly business class to Asia — Tokyo, Singapore, Bangkok, Hong Kong, and more at unbeatable prices.',
  },
  'middle-east': {
    heroImage: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80',
    description: 'Discover luxury flight deals to Dubai, Doha, Abu Dhabi, and other Middle Eastern destinations.',
  },
  africa: {
    heroImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1600&q=80',
    description: 'Premium cabin deals to Africa — Cape Town, Marrakech, Cairo, Nairobi, and more.',
  },
  oceania: {
    heroImage: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=1600&q=80',
    description: 'Business class deals to Australia, New Zealand, and the Pacific — Sydney, Melbourne, Auckland.',
  },
  americas: {
    heroImage: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1600&q=80',
    description: 'Flight deals across the Americas — New York, Miami, Rio de Janeiro, Buenos Aires, and more.',
  },
};

export interface SEOContent {
  title: string;
  intro: string;
  blocks: { heading: string; text: string }[];
  faqs: { question: string; answer: string }[];
}

export interface CountryGroup {
  country: string;
  countryCode: string;
  countrySlug: string;
  cities: DestinationDTO[];
  minPrice: number;
  deals: DealDTO[];
}

export interface RegionGroup {
  slug: RegionSlug;
  displayName: string;
  countries: CountryGroup[];
  destinations: DestinationDTO[];
  deals: DealDTO[];
  minPrice: number;
  heroImage: string;
}

export interface DestinationDTO {
  id: string;
  city: string;
  country: string;
  countryCode: string;
  imageUrl: string;
  fromPrice: number;
  airportCode: string;
  region: string;
}

export interface DealDTO {
  id: string;
  slug: string;
  href: string;
  imageUrl: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  countryCode: string;
  cabinClass: string;
  publicFare: number;
  pfPrice: number;
  themeColor: string;
}
