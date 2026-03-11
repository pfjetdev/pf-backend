"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FlightsService", {
    enumerable: true,
    get: function() {
        return FlightsService;
    }
});
const _common = require("@nestjs/common");
const _prismaservice = require("../prisma/prisma.service");
const _settingsservice = require("../settings/settings.service");
const _tierpricingservice = require("./tier-pricing.service");
const _generateflights = require("./generate-flights");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let FlightsService = class FlightsService {
    /** Generate flight results + tier pricing for a search query */ async search(params) {
        const [airlines, settings] = await Promise.all([
            this.getAirlines(),
            this.settings.getAll()
        ]);
        const config = parseFlightConfig(settings);
        const flights = (0, _generateflights.generateFlightResults)(params, airlines, config);
        // Always derive tier pricing from a business-class baseline so the
        // three-tab prices stay identical regardless of the searched cabin.
        const bizFlights = params.cabin === 'business' ? flights : (0, _generateflights.generateFlightResults)({
            ...params,
            cabin: 'business'
        }, airlines, config);
        const tierPricing = bizFlights.length > 0 ? await this.tierPricing.compute(bizFlights[0].price, 'business') : undefined;
        return {
            flights,
            tierPricing
        };
    }
    /** Reconstruct a single flight from a lead source string (e.g. "flight:fl-NYC-LON-...") */ async reconstructFromSource(source) {
        if (!source.startsWith('flight:fl-')) return null;
        const raw = source.slice('flight:fl-'.length);
        const parts = raw.split('-');
        let from, to, depart, returnDate, cabin, index;
        if (parts.length >= 10) {
            from = parts[0];
            to = parts[1];
            depart = `${parts[2]}-${parts[3]}-${parts[4]}`;
            returnDate = `${parts[5]}-${parts[6]}-${parts[7]}`;
            cabin = parts[8];
            index = parseInt(parts[9], 10);
        } else if (parts.length >= 7) {
            from = parts[0];
            to = parts[1];
            depart = `${parts[2]}-${parts[3]}-${parts[4]}`;
            cabin = parts[5];
            index = parseInt(parts[6], 10);
        } else {
            return null;
        }
        if (isNaN(index)) return null;
        const params = {
            from,
            to,
            depart,
            return: returnDate,
            cabin: cabin,
            adults: 1,
            children: 0,
            infants: 0,
            pets: 0,
            type: returnDate ? 'round' : 'oneway'
        };
        const settings = await this.settings.getAll();
        const config = parseFlightConfig(settings);
        const flights = (0, _generateflights.generateFlightResults)(params, [], config);
        const seed = `${from}-${to}-${depart}-${returnDate || ''}-${cabin}`;
        const flightId = `fl-${seed}-${index}`;
        const flight = flights.find((f)=>f.id === flightId);
        if (!flight) return null;
        return {
            flight,
            params
        };
    }
    /** Fetch active airlines from DB, mapped to AirlineInfo */ async getAirlines() {
        const rows = await this.prisma.airline.findMany({
            where: {
                isActive: true
            },
            orderBy: {
                sortOrder: 'asc'
            }
        });
        return rows.map((a)=>({
                name: a.name,
                logo: a.logoUrl || (0, _generateflights.getAirlineLogo)(a.name),
                routeCodes: a.routeCodes ?? []
            }));
    }
    constructor(prisma, settings, tierPricing){
        this.prisma = prisma;
        this.settings = settings;
        this.tierPricing = tierPricing;
    }
};
FlightsService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _settingsservice.SettingsService === "undefined" ? Object : _settingsservice.SettingsService,
        typeof _tierpricingservice.TierPricingService === "undefined" ? Object : _tierpricingservice.TierPricingService
    ])
], FlightsService);
/** Parse SiteSetting key-value pairs into FlightGeneratorConfig */ function parseFlightConfig(settings) {
    const config = {};
    const rc = parseInt(settings.flight_result_count ?? '', 10);
    if (!Number.isNaN(rc) && rc > 0 && rc <= 50) {
        config.resultCount = rc;
    }
    const seatsRaw = settings.flight_seats_range;
    if (seatsRaw) {
        const parts = seatsRaw.split(',').map(Number);
        if (parts.length === 2 && parts.every((n)=>!Number.isNaN(n) && n >= 0)) {
            config.seatsLeftRange = [
                parts[0],
                parts[1]
            ];
        }
    }
    const cabins = [
        'premium',
        'business',
        'first'
    ];
    const priceRange = {};
    let hasPriceRange = false;
    for (const cabin of cabins){
        const raw = settings[`flight_price_${cabin}`];
        if (raw) {
            const parts = raw.split(',').map(Number);
            if (parts.length === 2 && parts.every((n)=>!Number.isNaN(n) && n > 0)) {
                priceRange[cabin] = [
                    parts[0],
                    parts[1]
                ];
                hasPriceRange = true;
            }
        }
    }
    if (hasPriceRange) config.priceRange = priceRange;
    const markupRange = {};
    let hasMarkupRange = false;
    for (const cabin of cabins){
        const raw = settings[`flight_markup_${cabin}`];
        if (raw) {
            const parts = raw.split(',').map(Number);
            if (parts.length === 2 && parts.every((n)=>!Number.isNaN(n) && n > 0)) {
                markupRange[cabin] = [
                    parts[0],
                    parts[1]
                ];
                hasMarkupRange = true;
            }
        }
    }
    if (hasMarkupRange) config.markupRange = markupRange;
    const routeKeys = [
        'domestic_us',
        'intra_europe',
        'short_haul',
        'transatlantic',
        'us_middle_east',
        'us_east_asia',
        'us_south_asia',
        'europe_east_asia',
        'long_haul'
    ];
    const routePriceFactor = {};
    let hasRouteFactor = false;
    for (const key of routeKeys){
        const raw = settings[`flight_route_factor_${key}`];
        if (raw) {
            const n = parseFloat(raw);
            if (!Number.isNaN(n) && n > 0) {
                routePriceFactor[key] = n;
                hasRouteFactor = true;
            }
        }
    }
    if (hasRouteFactor) config.routePriceFactor = routePriceFactor;
    const sdNonstop = parseFloat(settings.flight_stop_discount_nonstop ?? '');
    const sdOneStop = parseFloat(settings.flight_stop_discount_one_stop ?? '');
    const sdTwoStops = parseFloat(settings.flight_stop_discount_two_stops ?? '');
    if ([
        sdNonstop,
        sdOneStop,
        sdTwoStops
    ].every((n)=>!Number.isNaN(n) && n > 0)) {
        config.stopDiscount = {
            nonstop: sdNonstop,
            oneStop: sdOneStop,
            twoStops: sdTwoStops
        };
    }
    const csp = parseFloat(settings.flight_codeshare_probability ?? '');
    if (!Number.isNaN(csp) && csp >= 0 && csp <= 1) {
        config.codeshareProbability = csp;
    }
    const seatsPerCabin = {};
    let hasSeatsPerCabin = false;
    for (const cabin of cabins){
        const raw = settings[`flight_seats_${cabin}`];
        if (raw) {
            const parts = raw.split(',').map(Number);
            if (parts.length === 2 && parts.every((n)=>!Number.isNaN(n) && n >= 0)) {
                seatsPerCabin[cabin] = [
                    parts[0],
                    parts[1]
                ];
                hasSeatsPerCabin = true;
            }
        }
    }
    if (hasSeatsPerCabin) config.seatsPerCabin = seatsPerCabin;
    return config;
}

//# sourceMappingURL=flights.service.js.map