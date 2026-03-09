import { Injectable, NotFoundException } from '@nestjs/common';
import { DestinationsService } from '../destinations/destinations.service';
import { DealsService } from '../deals/deals.service';
import { AirlinesService } from '../airlines/airlines.service';
import { SettingsService } from '../settings/settings.service';
import {
  REGION_SLUGS, REGION_DISPLAY_NAMES, REGION_META, DISPLAY_TO_SLUG,
  type RegionSlug, type RegionGroup, type CountryGroup, type DestinationDTO, type DealDTO, type SEOContent,
} from './catalog.types';
import {
  resolveSEOContent, getDealsHomeSEO, getRegionSEO, getCountrySEO, getDealSEO,
  getAirlinesHomeSEO, getAirlineSEO,
} from './catalog-seo';

@Injectable()
export class CatalogService {
  constructor(
    private destinations: DestinationsService,
    private deals: DealsService,
    private airlines: AirlinesService,
    private settings: SettingsService,
  ) {}

  /** GET /catalog/regions — all regions with grouped countries, deals, min prices */
  async getRegions(): Promise<RegionGroup[]> {
    const [rawDests, rawDeals] = await Promise.all([
      this.destinations.findAll(),
      this.deals.findAll(),
    ]);

    const destinations = this.mapDestinations(rawDests);
    const deals = this.mapDeals(rawDeals);

    const groups: RegionGroup[] = [];

    for (const slug of REGION_SLUGS) {
      const regionDests = destinations.filter((d) => this.matchRegion(d.region, slug));
      if (regionDests.length === 0) continue;

      const countries = this.groupByCountry(regionDests, deals);
      const regionDeals = this.matchDeals(regionDests, deals);
      const minPrice = regionDeals.length > 0
        ? Math.min(...regionDeals.map((d) => d.pfPrice))
        : Math.min(...regionDests.map((d) => d.fromPrice));

      groups.push({
        slug,
        displayName: REGION_DISPLAY_NAMES[slug],
        countries,
        destinations: regionDests,
        deals: regionDeals,
        minPrice,
        heroImage: REGION_META[slug].heroImage,
      });
    }

    return groups;
  }

  /** GET /catalog/regions/:region — single region with countries */
  async getRegion(region: string): Promise<{
    region: RegionSlug;
    displayName: string;
    heroImage: string;
    description: string;
    countryGroups: CountryGroup[];
    deals: DealDTO[];
    seo: SEOContent;
  }> {
    if (!this.isValidRegion(region)) throw new NotFoundException('Region not found');

    const [rawDests, rawDeals, allSettings] = await Promise.all([
      this.destinations.findAll(),
      this.deals.findAll(),
      this.settings.getAll(),
    ]);

    const destinations = this.mapDestinations(rawDests);
    const deals = this.mapDeals(rawDeals);
    const regionDests = destinations.filter((d) => this.matchRegion(d.region, region));
    if (regionDests.length === 0) throw new NotFoundException('Region has no destinations');

    const countryGroups = this.groupByCountry(regionDests, deals);
    const regionDeals = this.matchDeals(regionDests, deals);

    const meta = this.resolveRegionMeta(allSettings, region as RegionSlug);
    const totalDests = countryGroups.reduce((sum, g) => sum + g.cities.length, 0);
    const seo = resolveSEOContent(
      allSettings,
      `catalog_seo_region_${region}`,
      () => getRegionSEO(REGION_DISPLAY_NAMES[region as RegionSlug], totalDests, regionDeals.length),
    );

    return {
      region: region as RegionSlug,
      displayName: REGION_DISPLAY_NAMES[region as RegionSlug],
      heroImage: meta.heroImage,
      description: meta.description,
      countryGroups,
      deals: regionDeals,
      seo,
    };
  }

  /** GET /catalog/regions/:region/:country — single country page data */
  async getCountry(region: string, countrySlug: string): Promise<{
    region: RegionSlug;
    regionDisplayName: string;
    countryName: string;
    countrySlug: string;
    countryCode: string;
    cities: DestinationDTO[];
    deals: DealDTO[];
    cityDealsMap: Record<string, DealDTO[]>;
    heroImage: string;
    seo: SEOContent;
  }> {
    if (!this.isValidRegion(region)) throw new NotFoundException('Region not found');

    const [rawDests, rawDeals, allSettings] = await Promise.all([
      this.destinations.findAll(),
      this.deals.findAll(),
      this.settings.getAll(),
    ]);

    const destinations = this.mapDestinations(rawDests);
    const deals = this.mapDeals(rawDeals);
    const regionDests = destinations.filter((d) => this.matchRegion(d.region, region));
    const countryName = this.findCountryBySlug(countrySlug, regionDests);
    if (!countryName) throw new NotFoundException('Country not found');

    const cities = regionDests.filter((d) => d.country === countryName);
    const countryDeals = this.matchDeals(
      destinations.filter((d) => d.country === countryName),
      deals,
    );

    const cityDealsMap: Record<string, DealDTO[]> = {};
    for (const city of cities) {
      cityDealsMap[city.airportCode] = deals.filter((d) => d.destinationCode === city.airportCode);
    }

    const regionDisplayName = REGION_DISPLAY_NAMES[region as RegionSlug];
    const seo = resolveSEOContent(
      allSettings,
      `catalog_seo_country_${countrySlug}`,
      () => getCountrySEO(countryName, regionDisplayName, cities.map((c) => c.city)),
    );

    const rawHeroImage = cities[0]?.imageUrl || REGION_META[region as RegionSlug].heroImage;
    const heroImage = rawHeroImage.split('?')[0] + '?w=1600&q=80&fit=crop';

    return {
      region: region as RegionSlug,
      regionDisplayName,
      countryName,
      countrySlug,
      countryCode: cities[0]?.countryCode || '',
      cities,
      deals: countryDeals,
      cityDealsMap,
      heroImage,
      seo,
    };
  }

  /** GET /catalog/deals/:slug — single deal page data */
  async getDealPage(slug: string): Promise<{
    deal: DealDTO;
    otherDeals: DealDTO[];
    regionSlug?: string;
    regionName?: string;
    countryName?: string;
    countrySlug?: string;
    heroImage: string;
    seo: SEOContent;
  }> {
    const [rawDeal, rawDeals, rawDests, allSettings] = await Promise.all([
      this.deals.findBySlug(slug),
      this.deals.findAll(),
      this.destinations.findAll(),
      this.settings.getAll(),
    ]);

    const deal = this.mapDeal(rawDeal);
    const allDeals = this.mapDeals(rawDeals);
    const destinations = this.mapDestinations(rawDests);

    const dest = destinations.find((d) => d.airportCode === deal.destinationCode);
    const regionSlug = dest ? (DISPLAY_TO_SLUG[dest.region] || dest.region) : undefined;
    const countrySlug = dest ? this.toCountrySlug(dest.country) : undefined;

    const otherDeals = allDeals.filter((d) => d.slug !== deal.slug).slice(0, 5);
    const savings = deal.publicFare > 0
      ? Math.round(((deal.publicFare - deal.pfPrice) / deal.publicFare) * 100)
      : 0;

    const seo = resolveSEOContent(
      allSettings,
      `catalog_seo_deal_${slug}`,
      () => getDealSEO(deal.origin, deal.destination, deal.cabinClass, savings),
    );

    const rawImage = (rawDeal as any).imageUrl || dest?.imageUrl || '';
    const heroImage = rawImage
      ? rawImage.split('?')[0] + '?w=1600&q=80&fit=crop'
      : 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1600&q=80';

    return {
      deal,
      otherDeals,
      regionSlug,
      regionName: dest?.region,
      countryName: dest?.country,
      countrySlug,
      heroImage,
      seo,
    };
  }

  /** GET /catalog/home — deals home page data */
  async getHomePage(): Promise<{
    regionGroups: RegionGroup[];
    seo: SEOContent;
  }> {
    const [regionGroups, allSettings] = await Promise.all([
      this.getRegions(),
      this.settings.getAll(),
    ]);

    const seo = resolveSEOContent(allSettings, 'catalog_seo_home', getDealsHomeSEO);
    return { regionGroups, seo };
  }

  /** GET /catalog/deals/featured — top 8 deals by savings %, unique destinations */
  async getFeaturedDeals(): Promise<DealDTO[]> {
    const [rawDeals, rawDests] = await Promise.all([
      this.deals.findAll(),
      this.destinations.findAll(),
    ]);

    const deals = this.mapDeals(rawDeals);
    const destImageMap = new Map(
      rawDests.map((d: any) => [d.airportCode, d.imageUrl]),
    );

    // Sort by savings %, deduplicate by destination, take top 8
    const sorted = [...deals].sort((a, b) => {
      const savA = a.publicFare > 0 ? (a.publicFare - a.pfPrice) / a.publicFare : 0;
      const savB = b.publicFare > 0 ? (b.publicFare - b.pfPrice) / b.publicFare : 0;
      return savB - savA;
    });

    const result: DealDTO[] = [];
    const seen = new Set<string>();
    for (const deal of sorted) {
      if (seen.has(deal.destinationCode)) continue;
      seen.add(deal.destinationCode);
      const img = (deal.imageUrl || destImageMap.get(deal.destinationCode) || '')
        ?.replace('w=400&h=300&fit=crop', 'w=1200&h=800&fit=crop&q=80') || null;
      result.push({ ...deal, imageUrl: img });
      if (result.length === 8) break;
    }

    return result;
  }

  /** GET /catalog/airlines — airlines home page data */
  async getAirlinesHome(): Promise<{
    airlines: any[];
    seo: SEOContent;
  }> {
    const [rawAirlines, allSettings] = await Promise.all([
      this.airlines.findAll(),
      this.settings.getAll(),
    ]);

    const airlines = this.mapAirlines(rawAirlines);
    const seo = resolveSEOContent(allSettings, 'catalog_seo_airlines_home', getAirlinesHomeSEO);
    return { airlines, seo };
  }

  /** GET /catalog/airlines/:slug — single airline page data */
  async getAirlinePage(slug: string): Promise<{
    airline: any;
    deals: DealDTO[];
    allAirlines: any[];
    heroImage: string;
    seo: SEOContent;
  }> {
    const [rawAirline, rawAirlines, rawDeals, allSettings] = await Promise.all([
      this.airlines.findBySlug(slug),
      this.airlines.findAll(),
      this.deals.findAll(),
      this.settings.getAll(),
    ]);

    const airline = this.mapAirline(rawAirline);
    const allAirlines = this.mapAirlines(rawAirlines);
    const deals = this.mapDeals(rawDeals);

    const routeCodes = new Set<string>(airline.routeCodes || []);
    const airlineDeals = routeCodes.size > 0
      ? deals.filter((d) => routeCodes.has(d.destinationCode))
      : [];

    const seo = resolveSEOContent(
      allSettings,
      `catalog_seo_airline_${slug}`,
      () => getAirlineSEO(airline.name, airline.hubCity, airline.savingPercent, airlineDeals.length),
    );

    const heroImage = airline.image
      ? airline.image.split('?')[0] + '?w=1600&q=80&fit=crop'
      : 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1600&q=80';

    return { airline, deals: airlineDeals, allAirlines, heroImage, seo };
  }

  // ── Private helpers ──

  /** Match region field (could be slug "europe" or display name "Europe") against a slug */
  private matchRegion(regionField: string, slug: string): boolean {
    return regionField === slug || DISPLAY_TO_SLUG[regionField] === slug;
  }

  private isValidRegion(slug: string): boolean {
    return (REGION_SLUGS as readonly string[]).includes(slug);
  }

  private toCountrySlug(country: string): string {
    return country
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  }

  private findCountryBySlug(slug: string, destinations: DestinationDTO[]): string | undefined {
    return destinations.find((d) => this.toCountrySlug(d.country) === slug)?.country;
  }

  private matchDeals(destinations: DestinationDTO[], deals: DealDTO[]): DealDTO[] {
    const codes = new Set(destinations.map((d) => d.airportCode));
    return deals.filter((deal) => codes.has(deal.destinationCode));
  }

  private groupByCountry(destinations: DestinationDTO[], deals: DealDTO[]): CountryGroup[] {
    const countryMap = new Map<string, DestinationDTO[]>();

    for (const dest of destinations) {
      const existing = countryMap.get(dest.country);
      if (existing) existing.push(dest);
      else countryMap.set(dest.country, [dest]);
    }

    const groups: CountryGroup[] = [];
    for (const [country, cities] of countryMap) {
      const countryDeals = this.matchDeals(cities, deals);
      const minDealPrice = countryDeals.length > 0
        ? Math.min(...countryDeals.map((d) => d.pfPrice))
        : 0;
      const minDestPrice = Math.min(...cities.map((c) => c.fromPrice));

      groups.push({
        country,
        countryCode: cities[0].countryCode,
        countrySlug: this.toCountrySlug(country),
        cities: cities.sort((a, b) => a.city.localeCompare(b.city)),
        minPrice: minDealPrice || minDestPrice,
        deals: countryDeals,
      });
    }

    return groups.sort((a, b) => a.country.localeCompare(b.country));
  }

  private resolveRegionMeta(
    settings: Record<string, string>,
    region: RegionSlug,
  ): { heroImage: string; description: string } {
    const raw = settings[`catalog_region_${region}`];
    if (raw) {
      try { return JSON.parse(raw); } catch {}
    }
    return REGION_META[region];
  }

  private mapDestinations(raw: any[]): DestinationDTO[] {
    return raw.map((d) => ({
      id: d.id || d.airportCode,
      city: d.city,
      country: d.country,
      countryCode: d.countryCode,
      imageUrl: d.imageUrl || '',
      fromPrice: typeof d.fromPrice === 'object' ? Number(d.fromPrice) : d.fromPrice,
      airportCode: d.airportCode,
      region: d.region,
    }));
  }

  private mapDeals(raw: any[]): DealDTO[] {
    return raw.map((d) => this.mapDeal(d));
  }

  private mapAirlines(raw: any[]): any[] {
    return raw.map((a) => this.mapAirline(a));
  }

  private mapAirline(a: any): any {
    return {
      id: a.id,
      name: a.name,
      slug: a.slug || '',
      logo: a.logoUrl || '',
      image: a.imageUrl || '',
      route: a.featuredRoute || '',
      saving: a.savingPercent ? `Save up to ${a.savingPercent}%` : '',
      savingPercent: a.savingPercent ?? 0,
      iataCode: a.iataCode || '',
      description: a.description || '',
      alliance: a.alliance || '',
      hubCity: a.hubCity || '',
      routeCodes: a.routeCodes ?? [],
    };
  }

  private mapDeal(d: any): DealDTO {
    return {
      id: d.id,
      slug: d.slug,
      href: `/deals/${d.slug}`,
      imageUrl: d.imageUrl || '',
      origin: d.origin,
      originCode: d.originCode,
      destination: d.destination,
      destinationCode: d.destinationCode,
      countryCode: d.countryCode,
      cabinClass: d.cabinClass,
      publicFare: typeof d.publicFare === 'object' ? Number(d.publicFare) : d.publicFare,
      pfPrice: typeof d.pfPrice === 'object' ? Number(d.pfPrice) : d.pfPrice,
      themeColor: d.themeColor || '220 40% 25%',
    };
  }
}
