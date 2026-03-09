"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CatalogService", {
    enumerable: true,
    get: function() {
        return CatalogService;
    }
});
const _common = require("@nestjs/common");
const _destinationsservice = require("../destinations/destinations.service");
const _dealsservice = require("../deals/deals.service");
const _airlinesservice = require("../airlines/airlines.service");
const _settingsservice = require("../settings/settings.service");
const _catalogtypes = require("./catalog.types");
const _catalogseo = require("./catalog-seo");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let CatalogService = class CatalogService {
    /** GET /catalog/regions — all regions with grouped countries, deals, min prices */ async getRegions() {
        const [rawDests, rawDeals] = await Promise.all([
            this.destinations.findAll(),
            this.deals.findAll()
        ]);
        const destinations = this.mapDestinations(rawDests);
        const deals = this.mapDeals(rawDeals);
        const groups = [];
        for (const slug of _catalogtypes.REGION_SLUGS){
            const regionDests = destinations.filter((d)=>_catalogtypes.DISPLAY_TO_SLUG[d.region] === slug);
            if (regionDests.length === 0) continue;
            const countries = this.groupByCountry(regionDests, deals);
            const regionDeals = this.matchDeals(regionDests, deals);
            const minPrice = regionDeals.length > 0 ? Math.min(...regionDeals.map((d)=>d.pfPrice)) : Math.min(...regionDests.map((d)=>d.fromPrice));
            groups.push({
                slug,
                displayName: _catalogtypes.REGION_DISPLAY_NAMES[slug],
                countries,
                destinations: regionDests,
                deals: regionDeals,
                minPrice,
                heroImage: _catalogtypes.REGION_META[slug].heroImage
            });
        }
        return groups;
    }
    /** GET /catalog/regions/:region — single region with countries */ async getRegion(region) {
        if (!this.isValidRegion(region)) throw new _common.NotFoundException('Region not found');
        const [rawDests, rawDeals, allSettings] = await Promise.all([
            this.destinations.findAll(),
            this.deals.findAll(),
            this.settings.getAll()
        ]);
        const destinations = this.mapDestinations(rawDests);
        const deals = this.mapDeals(rawDeals);
        const regionDests = destinations.filter((d)=>_catalogtypes.DISPLAY_TO_SLUG[d.region] === region);
        if (regionDests.length === 0) throw new _common.NotFoundException('Region has no destinations');
        const countryGroups = this.groupByCountry(regionDests, deals);
        const regionDeals = this.matchDeals(regionDests, deals);
        const meta = this.resolveRegionMeta(allSettings, region);
        const totalDests = countryGroups.reduce((sum, g)=>sum + g.cities.length, 0);
        const seo = (0, _catalogseo.resolveSEOContent)(allSettings, `catalog_seo_region_${region}`, ()=>(0, _catalogseo.getRegionSEO)(_catalogtypes.REGION_DISPLAY_NAMES[region], totalDests, regionDeals.length));
        return {
            region: region,
            displayName: _catalogtypes.REGION_DISPLAY_NAMES[region],
            heroImage: meta.heroImage,
            description: meta.description,
            countryGroups,
            deals: regionDeals,
            seo
        };
    }
    /** GET /catalog/regions/:region/:country — single country page data */ async getCountry(region, countrySlug) {
        if (!this.isValidRegion(region)) throw new _common.NotFoundException('Region not found');
        const [rawDests, rawDeals, allSettings] = await Promise.all([
            this.destinations.findAll(),
            this.deals.findAll(),
            this.settings.getAll()
        ]);
        const destinations = this.mapDestinations(rawDests);
        const deals = this.mapDeals(rawDeals);
        const regionDests = destinations.filter((d)=>_catalogtypes.DISPLAY_TO_SLUG[d.region] === region);
        const countryName = this.findCountryBySlug(countrySlug, regionDests);
        if (!countryName) throw new _common.NotFoundException('Country not found');
        const cities = regionDests.filter((d)=>d.country === countryName);
        const countryDeals = this.matchDeals(destinations.filter((d)=>d.country === countryName), deals);
        const cityDealsMap = {};
        for (const city of cities){
            cityDealsMap[city.airportCode] = deals.filter((d)=>d.destinationCode === city.airportCode);
        }
        const regionDisplayName = _catalogtypes.REGION_DISPLAY_NAMES[region];
        const seo = (0, _catalogseo.resolveSEOContent)(allSettings, `catalog_seo_country_${countrySlug}`, ()=>(0, _catalogseo.getCountrySEO)(countryName, regionDisplayName, cities.map((c)=>c.city)));
        const rawHeroImage = cities[0]?.imageUrl || _catalogtypes.REGION_META[region].heroImage;
        const heroImage = rawHeroImage.split('?')[0] + '?w=1600&q=80&fit=crop';
        return {
            region: region,
            regionDisplayName,
            countryName,
            countrySlug,
            countryCode: cities[0]?.countryCode || '',
            cities,
            deals: countryDeals,
            cityDealsMap,
            heroImage,
            seo
        };
    }
    /** GET /catalog/deals/:slug — single deal page data */ async getDealPage(slug) {
        const [rawDeal, rawDeals, rawDests, allSettings] = await Promise.all([
            this.deals.findBySlug(slug),
            this.deals.findAll(),
            this.destinations.findAll(),
            this.settings.getAll()
        ]);
        const deal = this.mapDeal(rawDeal);
        const allDeals = this.mapDeals(rawDeals);
        const destinations = this.mapDestinations(rawDests);
        const dest = destinations.find((d)=>d.airportCode === deal.destinationCode);
        const regionSlug = dest ? _catalogtypes.DISPLAY_TO_SLUG[dest.region] : undefined;
        const countrySlug = dest ? this.toCountrySlug(dest.country) : undefined;
        const otherDeals = allDeals.filter((d)=>d.slug !== deal.slug).slice(0, 5);
        const savings = deal.publicFare > 0 ? Math.round((deal.publicFare - deal.pfPrice) / deal.publicFare * 100) : 0;
        const seo = (0, _catalogseo.resolveSEOContent)(allSettings, `catalog_seo_deal_${slug}`, ()=>(0, _catalogseo.getDealSEO)(deal.origin, deal.destination, deal.cabinClass, savings));
        const rawImage = rawDeal.imageUrl || dest?.imageUrl || '';
        const heroImage = rawImage ? rawImage.split('?')[0] + '?w=1600&q=80&fit=crop' : 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1600&q=80';
        return {
            deal,
            otherDeals,
            regionSlug,
            regionName: dest?.region,
            countryName: dest?.country,
            countrySlug,
            heroImage,
            seo
        };
    }
    /** GET /catalog/home — deals home page data */ async getHomePage() {
        const [regionGroups, allSettings] = await Promise.all([
            this.getRegions(),
            this.settings.getAll()
        ]);
        const seo = (0, _catalogseo.resolveSEOContent)(allSettings, 'catalog_seo_home', _catalogseo.getDealsHomeSEO);
        return {
            regionGroups,
            seo
        };
    }
    /** GET /catalog/deals/featured — top 8 deals by savings %, unique destinations */ async getFeaturedDeals() {
        const [rawDeals, rawDests] = await Promise.all([
            this.deals.findAll(),
            this.destinations.findAll()
        ]);
        const deals = this.mapDeals(rawDeals);
        const destImageMap = new Map(rawDests.map((d)=>[
                d.airportCode,
                d.imageUrl
            ]));
        // Sort by savings %, deduplicate by destination, take top 8
        const sorted = [
            ...deals
        ].sort((a, b)=>{
            const savA = a.publicFare > 0 ? (a.publicFare - a.pfPrice) / a.publicFare : 0;
            const savB = b.publicFare > 0 ? (b.publicFare - b.pfPrice) / b.publicFare : 0;
            return savB - savA;
        });
        const result = [];
        const seen = new Set();
        for (const deal of sorted){
            if (seen.has(deal.destinationCode)) continue;
            seen.add(deal.destinationCode);
            const img = (deal.imageUrl || destImageMap.get(deal.destinationCode) || '')?.replace('w=400&h=300&fit=crop', 'w=1200&h=800&fit=crop&q=80') || null;
            result.push({
                ...deal,
                imageUrl: img
            });
            if (result.length === 8) break;
        }
        return result;
    }
    /** GET /catalog/airlines — airlines home page data */ async getAirlinesHome() {
        const [rawAirlines, allSettings] = await Promise.all([
            this.airlines.findAll(),
            this.settings.getAll()
        ]);
        const airlines = this.mapAirlines(rawAirlines);
        const seo = (0, _catalogseo.resolveSEOContent)(allSettings, 'catalog_seo_airlines_home', _catalogseo.getAirlinesHomeSEO);
        return {
            airlines,
            seo
        };
    }
    /** GET /catalog/airlines/:slug — single airline page data */ async getAirlinePage(slug) {
        const [rawAirline, rawAirlines, rawDeals, allSettings] = await Promise.all([
            this.airlines.findBySlug(slug),
            this.airlines.findAll(),
            this.deals.findAll(),
            this.settings.getAll()
        ]);
        const airline = this.mapAirline(rawAirline);
        const allAirlines = this.mapAirlines(rawAirlines);
        const deals = this.mapDeals(rawDeals);
        const routeCodes = new Set(airline.routeCodes || []);
        const airlineDeals = routeCodes.size > 0 ? deals.filter((d)=>routeCodes.has(d.destinationCode)) : [];
        const seo = (0, _catalogseo.resolveSEOContent)(allSettings, `catalog_seo_airline_${slug}`, ()=>(0, _catalogseo.getAirlineSEO)(airline.name, airline.hubCity, airline.savingPercent, airlineDeals.length));
        const heroImage = airline.image ? airline.image.split('?')[0] + '?w=1600&q=80&fit=crop' : 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1600&q=80';
        return {
            airline,
            deals: airlineDeals,
            allAirlines,
            heroImage,
            seo
        };
    }
    // ── Private helpers ──
    isValidRegion(slug) {
        return _catalogtypes.REGION_SLUGS.includes(slug);
    }
    toCountrySlug(country) {
        return country.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }
    findCountryBySlug(slug, destinations) {
        return destinations.find((d)=>this.toCountrySlug(d.country) === slug)?.country;
    }
    matchDeals(destinations, deals) {
        const codes = new Set(destinations.map((d)=>d.airportCode));
        return deals.filter((deal)=>codes.has(deal.destinationCode));
    }
    groupByCountry(destinations, deals) {
        const countryMap = new Map();
        for (const dest of destinations){
            const existing = countryMap.get(dest.country);
            if (existing) existing.push(dest);
            else countryMap.set(dest.country, [
                dest
            ]);
        }
        const groups = [];
        for (const [country, cities] of countryMap){
            const countryDeals = this.matchDeals(cities, deals);
            const minDealPrice = countryDeals.length > 0 ? Math.min(...countryDeals.map((d)=>d.pfPrice)) : 0;
            const minDestPrice = Math.min(...cities.map((c)=>c.fromPrice));
            groups.push({
                country,
                countryCode: cities[0].countryCode,
                countrySlug: this.toCountrySlug(country),
                cities: cities.sort((a, b)=>a.city.localeCompare(b.city)),
                minPrice: minDealPrice || minDestPrice,
                deals: countryDeals
            });
        }
        return groups.sort((a, b)=>a.country.localeCompare(b.country));
    }
    resolveRegionMeta(settings, region) {
        const raw = settings[`catalog_region_${region}`];
        if (raw) {
            try {
                return JSON.parse(raw);
            } catch  {}
        }
        return _catalogtypes.REGION_META[region];
    }
    mapDestinations(raw) {
        return raw.map((d)=>({
                id: d.id || d.airportCode,
                city: d.city,
                country: d.country,
                countryCode: d.countryCode,
                imageUrl: d.imageUrl || '',
                fromPrice: typeof d.fromPrice === 'object' ? Number(d.fromPrice) : d.fromPrice,
                airportCode: d.airportCode,
                region: d.region
            }));
    }
    mapDeals(raw) {
        return raw.map((d)=>this.mapDeal(d));
    }
    mapAirlines(raw) {
        return raw.map((a)=>this.mapAirline(a));
    }
    mapAirline(a) {
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
            routeCodes: a.routeCodes ?? []
        };
    }
    mapDeal(d) {
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
            themeColor: d.themeColor || '220 40% 25%'
        };
    }
    constructor(destinations, deals, airlines, settings){
        this.destinations = destinations;
        this.deals = deals;
        this.airlines = airlines;
        this.settings = settings;
    }
};
CatalogService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _destinationsservice.DestinationsService === "undefined" ? Object : _destinationsservice.DestinationsService,
        typeof _dealsservice.DealsService === "undefined" ? Object : _dealsservice.DealsService,
        typeof _airlinesservice.AirlinesService === "undefined" ? Object : _airlinesservice.AirlinesService,
        typeof _settingsservice.SettingsService === "undefined" ? Object : _settingsservice.SettingsService
    ])
], CatalogService);

//# sourceMappingURL=catalog.service.js.map