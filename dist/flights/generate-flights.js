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
    get generateFlightResults () {
        return generateFlightResults;
    },
    get getAirlineLogo () {
        return getAirlineLogo;
    }
});
const _airportutils = require("./airport.utils");
// ── Seeded PRNG (deterministic: same search = same results) ──
function createRng(seed) {
    let h = 0;
    for(let i = 0; i < seed.length; i++){
        h = (h << 5) - h + seed.charCodeAt(i) | 0;
    }
    return ()=>{
        h ^= h << 13;
        h ^= h >> 17;
        h ^= h << 5;
        return (h >>> 0) / 4294967296;
    };
}
// ── Helpers ──
function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}
function formatDuration(minutes) {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}m` : `${h}h`;
}
function formatTime(hour, minute) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const h12 = hour % 12 || 12;
    return `${h12}:${String(minute).padStart(2, '0')} ${period}`;
}
function formatDate(dateStr, dayOffset = 0) {
    if (!dateStr) return undefined;
    const d = new Date(dateStr + 'T12:00:00');
    if (isNaN(d.getTime())) return undefined;
    d.setDate(d.getDate() + dayOffset);
    return d.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
}
function shuffleArray(arr, rng) {
    const result = [
        ...arr
    ];
    for(let i = result.length - 1; i > 0; i--){
        const j = Math.floor(rng() * (i + 1));
        [result[i], result[j]] = [
            result[j],
            result[i]
        ];
    }
    return result;
}
// ── IATA codes for flight numbers ──
const AIRLINE_IATA = {
    'British Airways': 'BA',
    'Air France': 'AF',
    'Lufthansa': 'LH',
    'Delta': 'DL',
    'United': 'UA',
    'American': 'AA',
    'Emirates': 'EK',
    'Qatar Airways': 'QR',
    'Singapore Airlines': 'SQ',
    'Cathay Pacific': 'CX',
    'Korean Air': 'KE',
    'ANA': 'NH',
    'JAL': 'JL',
    'KLM': 'KL',
    'Swiss': 'LX',
    'Aer Lingus': 'EI',
    'Iberia': 'IB',
    'TAP Air Portugal': 'TP',
    'SAS': 'SK',
    'Turkish Airlines': 'TK',
    'Etihad Airways': 'EY',
    'JetBlue': 'B6',
    'Southwest Airlines': 'WN',
    'Alaska Airlines': 'AS',
    'Hainan Airlines': 'HU'
};
function generateFlightNumber(rng, airlineName) {
    const iata = AIRLINE_IATA[airlineName] || airlineName.slice(0, 2).toUpperCase();
    const num = 100 + Math.floor(rng() * 900);
    return `${iata} ${num}`;
}
// ── Aircraft types ──
const WIDE_BODY = [
    'Boeing 777-300ER',
    'Boeing 787-9 Dreamliner',
    'Airbus A350-900',
    'Boeing 777-200LR',
    'Airbus A330-300',
    'Boeing 787-10 Dreamliner'
];
const FLAGSHIP_WIDE_BODY = [
    'Airbus A380-800',
    'Boeing 777-300ER',
    'Airbus A350-1000'
];
const NARROW_BODY = [
    'Airbus A321neo',
    'Boeing 737 MAX 8',
    'Airbus A320neo',
    'Boeing 737-800'
];
function pickAircraft(rng, distanceKm, isPremiumRoute) {
    if (distanceKm > 8000 && isPremiumRoute && rng() < 0.3) {
        return FLAGSHIP_WIDE_BODY[Math.floor(rng() * FLAGSHIP_WIDE_BODY.length)];
    }
    if (distanceKm > 4000) {
        return WIDE_BODY[Math.floor(rng() * WIDE_BODY.length)];
    }
    if (distanceKm > 2000) {
        return rng() < 0.4 ? WIDE_BODY[Math.floor(rng() * WIDE_BODY.length)] : NARROW_BODY[Math.floor(rng() * NARROW_BODY.length)];
    }
    return NARROW_BODY[Math.floor(rng() * NARROW_BODY.length)];
}
// ── Fare classes ──
const FARE_CLASSES = {
    premium: [
        'Premium Economy',
        'Premium Economy Flex'
    ],
    business: [
        'Business Saver',
        'Business Classic',
        'Business Flex'
    ],
    first: [
        'First Class',
        'First Class Suite'
    ]
};
function pickFareClass(rng, cabin) {
    const classes = FARE_CLASSES[cabin] || FARE_CLASSES.business;
    return classes[Math.floor(rng() * classes.length)];
}
// ── Baggage by cabin ──
const CABIN_BAGGAGE = {
    premium: {
        carryOn: true,
        checkedBags: 2,
        checkedBagWeight: '23kg'
    },
    business: {
        carryOn: true,
        checkedBags: 2,
        checkedBagWeight: '32kg'
    },
    first: {
        carryOn: true,
        checkedBags: 3,
        checkedBagWeight: '32kg'
    }
};
// ── Seats left by cabin ──
const CABIN_SEATS_RANGE = {
    premium: [
        2,
        6
    ],
    business: [
        2,
        5
    ],
    first: [
        1,
        3
    ]
};
// ── Codeshare partners ──
const CODESHARE_PARTNERS = {
    'British Airways': [
        'Iberia',
        'American',
        'Aer Lingus'
    ],
    'Lufthansa': [
        'Swiss',
        'SAS'
    ],
    'Delta': [
        'Air France',
        'KLM'
    ],
    'United': [
        'ANA',
        'Lufthansa'
    ],
    'American': [
        'British Airways',
        'JAL',
        'Iberia'
    ],
    'Air France': [
        'KLM',
        'Delta'
    ],
    'KLM': [
        'Air France',
        'Delta'
    ],
    'Emirates': [
        'JetBlue'
    ],
    'Qatar Airways': [
        'British Airways',
        'Iberia'
    ],
    'Singapore Airlines': [
        'Lufthansa',
        'Swiss'
    ],
    'ANA': [
        'United'
    ],
    'JAL': [
        'American',
        'British Airways'
    ],
    'Korean Air': [
        'Delta'
    ],
    'Cathay Pacific': [
        'British Airways',
        'American'
    ]
};
function getCodesharePartner(rng, airlineName, probability) {
    if (rng() > probability) return undefined;
    const partners = CODESHARE_PARTNERS[airlineName];
    if (!partners || partners.length === 0) return undefined;
    return partners[Math.floor(rng() * partners.length)];
}
const COUNTRY_REGION = {
    'United States': 'americas',
    'Canada': 'americas',
    'Mexico': 'americas',
    'Brazil': 'americas',
    'Argentina': 'americas',
    'Colombia': 'americas',
    'Peru': 'americas',
    'Chile': 'americas',
    'Costa Rica': 'americas',
    'Panama': 'americas',
    'Dominican Republic': 'americas',
    'Jamaica': 'americas',
    'Puerto Rico': 'americas',
    'Bahamas': 'americas',
    'Bermuda': 'americas',
    'Barbados': 'americas',
    'Trinidad and Tobago': 'americas',
    'Cayman Islands': 'americas',
    'Ecuador': 'americas',
    'Guatemala': 'americas',
    'United Kingdom': 'europe',
    'Ireland': 'europe',
    'France': 'europe',
    'Germany': 'europe',
    'Italy': 'europe',
    'Spain': 'europe',
    'Portugal': 'europe',
    'Netherlands': 'europe',
    'Belgium': 'europe',
    'Switzerland': 'europe',
    'Austria': 'europe',
    'Sweden': 'europe',
    'Norway': 'europe',
    'Denmark': 'europe',
    'Finland': 'europe',
    'Greece': 'europe',
    'Poland': 'europe',
    'Czech Republic': 'europe',
    'Czechia': 'europe',
    'Hungary': 'europe',
    'Romania': 'europe',
    'Croatia': 'europe',
    'Iceland': 'europe',
    'Bulgaria': 'europe',
    'Serbia': 'europe',
    'Luxembourg': 'europe',
    'Malta': 'europe',
    'Cyprus': 'europe',
    'United Arab Emirates': 'middle_east',
    'Qatar': 'middle_east',
    'Saudi Arabia': 'middle_east',
    'Bahrain': 'middle_east',
    'Oman': 'middle_east',
    'Kuwait': 'middle_east',
    'Jordan': 'middle_east',
    'Israel': 'middle_east',
    'Lebanon': 'middle_east',
    'Turkey': 'middle_east',
    'Türkiye': 'middle_east',
    'Japan': 'east_asia',
    'South Korea': 'east_asia',
    'China': 'east_asia',
    'Taiwan': 'east_asia',
    'Hong Kong': 'east_asia',
    'Singapore': 'east_asia',
    'Malaysia': 'east_asia',
    'Thailand': 'east_asia',
    'Vietnam': 'east_asia',
    'Philippines': 'east_asia',
    'Indonesia': 'east_asia',
    'Cambodia': 'east_asia',
    'Myanmar': 'east_asia',
    'India': 'south_asia',
    'Pakistan': 'south_asia',
    'Sri Lanka': 'south_asia',
    'Bangladesh': 'south_asia',
    'Nepal': 'south_asia',
    'Maldives': 'south_asia',
    'Australia': 'oceania',
    'New Zealand': 'oceania',
    'Fiji': 'oceania',
    'South Africa': 'africa',
    'Kenya': 'africa',
    'Nigeria': 'africa',
    'Egypt': 'africa',
    'Morocco': 'africa',
    'Ethiopia': 'africa',
    'Tanzania': 'africa',
    'Ghana': 'africa',
    'Tunisia': 'africa',
    'Senegal': 'africa'
};
function getRegion(cityCode) {
    const country = (0, _airportutils.getCityCountry)(cityCode);
    return COUNTRY_REGION[country] ?? null;
}
function detectRouteType(fromCode, toCode, distanceKm) {
    const fromRegion = getRegion(fromCode);
    const toRegion = getRegion(toCode);
    const fromCountry = (0, _airportutils.getCityCountry)(fromCode);
    const toCountry = (0, _airportutils.getCityCountry)(toCode);
    if (fromCountry === 'United States' && toCountry === 'United States') return 'domestic_us';
    if (fromRegion === 'europe' && toRegion === 'europe') return 'intra_europe';
    if (fromRegion === 'americas' && toRegion === 'europe') return 'transatlantic_east';
    if (fromRegion === 'europe' && toRegion === 'americas') return 'transatlantic_west';
    if (fromRegion === 'americas' && toRegion === 'middle_east') return 'us_to_middle_east';
    if (fromRegion === 'middle_east' && toRegion === 'americas') return 'middle_east_to_us';
    if (fromRegion === 'americas' && toRegion === 'east_asia') return 'us_to_east_asia';
    if (fromRegion === 'east_asia' && toRegion === 'americas') return 'east_asia_to_us';
    if (fromRegion === 'americas' && toRegion === 'south_asia') return 'us_to_south_asia';
    if (fromRegion === 'south_asia' && toRegion === 'americas') return 'south_asia_to_us';
    if (fromRegion === 'europe' && (toRegion === 'east_asia' || toRegion === 'south_asia')) return 'europe_to_east_asia';
    if ((fromRegion === 'east_asia' || fromRegion === 'south_asia') && toRegion === 'europe') return 'east_asia_to_europe';
    if (distanceKm < 3000) return 'short_haul';
    return 'long_haul';
}
// ── Airline logo resolver ──
const LOGO_FILENAME_OVERRIDES = {
    'Emirates': 'Emirates (airline).svg',
    'Delta': 'Delta Air Lines.svg',
    'United': 'United Airlines.svg',
    'Etihad Airways': 'Etihad Airways (EY).svg',
    'ANA': 'All Nippon Airways.svg',
    'Swiss': 'Swiss International Air Lines.svg',
    'Iberia': 'Iberia (airline).svg',
    'SAS': 'Scandinavian Airlines.svg',
    'JAL': 'Japan Airlines.svg',
    'American': 'American Airlines.svg'
};
function getAirlineLogo(name) {
    const override = LOGO_FILENAME_OVERRIDES[name];
    if (override) return `/airlines/${override}`;
    return `/airlines/${name}.svg`;
}
// ── Route-aware airline pools ──
const ROUTE_AIRLINES = {
    transatlantic_east: [
        'British Airways',
        'Air France',
        'Lufthansa',
        'Delta',
        'United',
        'American',
        'KLM',
        'Swiss',
        'Aer Lingus',
        'Iberia',
        'TAP Air Portugal',
        'SAS'
    ],
    transatlantic_west: [
        'British Airways',
        'Air France',
        'Lufthansa',
        'Delta',
        'United',
        'American',
        'KLM',
        'Swiss',
        'Aer Lingus',
        'Iberia',
        'TAP Air Portugal',
        'SAS'
    ],
    us_to_middle_east: [
        'Emirates',
        'Qatar Airways',
        'Etihad Airways',
        'Turkish Airlines',
        'Delta',
        'United'
    ],
    middle_east_to_us: [
        'Emirates',
        'Qatar Airways',
        'Etihad Airways',
        'Turkish Airlines',
        'Delta',
        'United'
    ],
    us_to_east_asia: [
        'ANA',
        'JAL',
        'Singapore Airlines',
        'Cathay Pacific',
        'Korean Air',
        'Delta',
        'United'
    ],
    east_asia_to_us: [
        'ANA',
        'JAL',
        'Singapore Airlines',
        'Cathay Pacific',
        'Korean Air',
        'Delta',
        'United'
    ],
    us_to_south_asia: [
        'Emirates',
        'Qatar Airways',
        'Etihad Airways',
        'British Airways',
        'Air France',
        'Lufthansa'
    ],
    south_asia_to_us: [
        'Emirates',
        'Qatar Airways',
        'Etihad Airways',
        'British Airways',
        'Air France',
        'Lufthansa'
    ],
    europe_to_east_asia: [
        'Singapore Airlines',
        'Cathay Pacific',
        'ANA',
        'JAL',
        'Emirates',
        'Qatar Airways',
        'Turkish Airlines',
        'British Airways',
        'Lufthansa',
        'Air France'
    ],
    east_asia_to_europe: [
        'Singapore Airlines',
        'Cathay Pacific',
        'ANA',
        'JAL',
        'Emirates',
        'Qatar Airways',
        'Turkish Airlines',
        'British Airways',
        'Lufthansa',
        'Air France'
    ],
    intra_europe: [
        'Lufthansa',
        'Air France',
        'British Airways',
        'KLM',
        'Swiss',
        'Iberia',
        'SAS',
        'Aer Lingus'
    ],
    domestic_us: [
        'Delta',
        'United',
        'American',
        'JetBlue',
        'Southwest Airlines',
        'Alaska Airlines'
    ],
    short_haul: [
        'Delta',
        'United',
        'American',
        'British Airways',
        'Lufthansa',
        'Air France',
        'KLM'
    ],
    long_haul: [
        'Emirates',
        'Qatar Airways',
        'Singapore Airlines',
        'British Airways',
        'Lufthansa',
        'Delta',
        'United',
        'Turkish Airlines'
    ]
};
// ── Route-specific layover cities ──
const ROUTE_LAYOVERS = {
    transatlantic_east: [
        'Dublin',
        'Reykjavik',
        'London',
        'Paris'
    ],
    transatlantic_west: [
        'Dublin',
        'Reykjavik',
        'London',
        'Paris'
    ],
    us_to_middle_east: [
        'London',
        'Paris',
        'Frankfurt',
        'Istanbul'
    ],
    middle_east_to_us: [
        'London',
        'Paris',
        'Frankfurt',
        'Istanbul'
    ],
    us_to_east_asia: [
        'Seoul',
        'Taipei',
        'Tokyo',
        'Honolulu'
    ],
    east_asia_to_us: [
        'Seoul',
        'Taipei',
        'Tokyo',
        'Honolulu'
    ],
    us_to_south_asia: [
        'Dubai',
        'Doha',
        'Abu Dhabi',
        'London'
    ],
    south_asia_to_us: [
        'Dubai',
        'Doha',
        'Abu Dhabi',
        'London'
    ],
    europe_to_east_asia: [
        'Istanbul',
        'Dubai',
        'Doha',
        'Helsinki'
    ],
    east_asia_to_europe: [
        'Istanbul',
        'Dubai',
        'Doha',
        'Helsinki'
    ],
    intra_europe: [
        'Amsterdam',
        'Frankfurt',
        'Paris',
        'London'
    ],
    domestic_us: [
        'Denver',
        'Dallas',
        'Chicago',
        'Atlanta',
        'Charlotte'
    ],
    short_haul: [
        'Amsterdam',
        'Frankfurt',
        'Paris',
        'London',
        'Madrid'
    ],
    long_haul: [
        'Dubai',
        'Istanbul',
        'Singapore',
        'London',
        'Frankfurt'
    ]
};
const ROUTE_LAYOVERS_FAR = {
    transatlantic_east: [
        'London',
        'Amsterdam',
        'Dublin',
        'Frankfurt'
    ],
    transatlantic_west: [
        'New York',
        'Boston',
        'Washington',
        'Chicago'
    ],
    us_to_middle_east: [
        'Dubai',
        'Doha',
        'Bahrain'
    ],
    middle_east_to_us: [
        'New York',
        'Washington',
        'Chicago'
    ],
    us_to_east_asia: [
        'Tokyo',
        'Seoul',
        'Taipei',
        'Osaka'
    ],
    east_asia_to_us: [
        'Honolulu',
        'San Francisco',
        'Seattle',
        'Vancouver'
    ],
    us_to_south_asia: [
        'Dubai',
        'Doha',
        'Abu Dhabi'
    ],
    south_asia_to_us: [
        'New York',
        'Washington',
        'Chicago'
    ],
    europe_to_east_asia: [
        'Singapore',
        'Bangkok',
        'Hong Kong',
        'Delhi'
    ],
    east_asia_to_europe: [
        'Helsinki',
        'Frankfurt',
        'Amsterdam'
    ],
    intra_europe: [
        'Zurich',
        'Munich',
        'Rome',
        'Vienna'
    ],
    domestic_us: [
        'Charlotte',
        'Minneapolis',
        'Phoenix',
        'Salt Lake City'
    ],
    short_haul: [
        'Rome',
        'Barcelona',
        'Lisbon',
        'Milan'
    ],
    long_haul: [
        'Singapore',
        'Hong Kong',
        'Bangkok',
        'Dubai'
    ]
};
function pickStopCities(rng, stops, routeType, excludeCities) {
    if (stops === 0) return undefined;
    const nearPool = ROUTE_LAYOVERS[routeType];
    const filtered1 = nearPool.filter((c)=>!excludeCities.some((e)=>e.toLowerCase() === c.toLowerCase()));
    const pool1 = filtered1.length > 0 ? filtered1 : nearPool;
    const city1 = pool1[Math.floor(rng() * pool1.length)];
    if (stops === 1) return city1;
    const farPool = ROUTE_LAYOVERS_FAR[routeType];
    const exclude2 = [
        ...excludeCities,
        city1
    ];
    const filtered2 = farPool.filter((c)=>!exclude2.some((e)=>e.toLowerCase() === c.toLowerCase()));
    const pool2 = filtered2.length > 0 ? filtered2 : farPool;
    const city2 = pool2[Math.floor(rng() * pool2.length)];
    return `${city1}, ${city2}`;
}
// ── Pricing ──
const ROUTE_PRICE_FACTOR = {
    domestic_us: 0.30,
    intra_europe: 0.25,
    short_haul: 0.30,
    transatlantic_east: 1.0,
    transatlantic_west: 1.0,
    us_to_middle_east: 1.20,
    middle_east_to_us: 1.20,
    us_to_east_asia: 1.30,
    east_asia_to_us: 1.30,
    us_to_south_asia: 1.35,
    south_asia_to_us: 1.35,
    europe_to_east_asia: 1.10,
    east_asia_to_europe: 1.10,
    long_haul: 1.0
};
const DEFAULT_STOP_DISCOUNT = {
    nonstop: 1.0,
    oneStop: 0.82,
    twoStops: 0.70
};
function getStopPriceFactor(stops, discount) {
    if (stops === 0) return discount.nonstop;
    if (stops === 1) return discount.oneStop;
    return discount.twoStops;
}
function rollStops(rng, distanceKm) {
    let direct, oneStop;
    if (distanceKm < 2000) {
        direct = 0.95;
        oneStop = 0.05;
    } else if (distanceKm < 5000) {
        direct = 0.80;
        oneStop = 0.18;
    } else if (distanceKm < 8000) {
        direct = 0.50;
        oneStop = 0.40;
    } else if (distanceKm < 12000) {
        direct = 0.35;
        oneStop = 0.45;
    } else {
        direct = 0.20;
        oneStop = 0.45;
    }
    const roll = rng();
    if (roll < direct) return 0;
    if (roll < direct + oneStop) return 1;
    return 2;
}
const ROUTE_DEP_WINDOWS = {
    transatlantic_east: [
        {
            start: 17,
            end: 23
        }
    ],
    transatlantic_west: [
        {
            start: 8,
            end: 16
        }
    ],
    us_to_middle_east: [
        {
            start: 20,
            end: 23
        }
    ],
    middle_east_to_us: [
        {
            start: 8,
            end: 14
        }
    ],
    us_to_east_asia: [
        {
            start: 10,
            end: 14
        },
        {
            start: 22,
            end: 1
        }
    ],
    east_asia_to_us: [
        {
            start: 10,
            end: 18
        }
    ],
    us_to_south_asia: [
        {
            start: 19,
            end: 23
        }
    ],
    south_asia_to_us: [
        {
            start: 8,
            end: 15
        }
    ],
    europe_to_east_asia: [
        {
            start: 10,
            end: 15
        },
        {
            start: 20,
            end: 23
        }
    ],
    east_asia_to_europe: [
        {
            start: 10,
            end: 14
        },
        {
            start: 23,
            end: 3
        }
    ],
    intra_europe: [
        {
            start: 6,
            end: 21
        }
    ],
    domestic_us: [
        {
            start: 6,
            end: 21
        }
    ],
    short_haul: [
        {
            start: 6,
            end: 21
        }
    ],
    long_haul: [
        {
            start: 8,
            end: 22
        }
    ]
};
function pickDepartureHour(rng, routeType) {
    const windows = ROUTE_DEP_WINDOWS[routeType];
    const idx = Math.floor(rng() * windows.length);
    const w = windows[idx];
    let span = w.end - w.start;
    if (span <= 0) span += 24;
    const hour = (w.start + Math.floor(rng() * span)) % 24;
    const minute = Math.floor(rng() * 4) * 15;
    return {
        hour,
        minute
    };
}
// ── Duration ──
function calcBaseDuration(distanceKm, rng) {
    const base = distanceKm / 900 * 60 + 30;
    const jitter = (rng() - 0.5) * 30;
    return Math.round(Math.max(45, base + jitter));
}
function getJetStreamMinutes(routeType, rng) {
    const v = Math.round(rng() * 15);
    switch(routeType){
        case 'transatlantic_east':
            return -(25 + v);
        case 'transatlantic_west':
            return 25 + v;
        case 'us_to_east_asia':
            return 20 + v;
        case 'east_asia_to_us':
            return -(20 + v);
        default:
            return 0;
    }
}
function calcNextDay(depHour, depMinute, durationMinutes) {
    const totalMin = depHour * 60 + depMinute + durationMinutes;
    return Math.floor(totalMin / (24 * 60));
}
// ── Pricing defaults ──
const CABIN_PRICE_RANGE = {
    premium: [
        800,
        2500
    ],
    business: [
        2200,
        7000
    ],
    first: [
        5500,
        15000
    ]
};
const CABIN_MARKUP_RANGE = {
    premium: [
        1.10,
        1.25
    ],
    business: [
        1.20,
        1.50
    ],
    first: [
        1.25,
        1.60
    ]
};
const ROUTE_TYPE_CONFIG_KEY = {
    domestic_us: 'domestic_us',
    intra_europe: 'intra_europe',
    short_haul: 'short_haul',
    transatlantic_east: 'transatlantic',
    transatlantic_west: 'transatlantic',
    us_to_middle_east: 'us_middle_east',
    middle_east_to_us: 'us_middle_east',
    us_to_east_asia: 'us_east_asia',
    east_asia_to_us: 'us_east_asia',
    us_to_south_asia: 'us_south_asia',
    south_asia_to_us: 'us_south_asia',
    europe_to_east_asia: 'europe_east_asia',
    east_asia_to_europe: 'europe_east_asia',
    long_haul: 'long_haul'
};
const DEFAULT_CONFIG = {
    resultCount: 8,
    seatsLeftRange: [
        1,
        7
    ]
};
function layoverMinutes(rng, isDomestic) {
    if (isDomestic) return 60 + Math.round(rng() * 90);
    return 90 + Math.round(rng() * 120);
}
// ── Multi-city generator ──
function generateMultiCityResults(params, airlines, config) {
    if (!params.legs || params.legs.length < 2) return [];
    const cfg = {
        ...DEFAULT_CONFIG,
        ...config
    };
    const legResults = params.legs.map((leg)=>generateFlightResults({
            ...params,
            from: leg.from,
            to: leg.to,
            depart: leg.depart,
            return: undefined,
            type: 'oneway'
        }, airlines, config));
    const results = [];
    const seed = params.legs.map((l)=>`${l.from}-${l.to}-${l.depart}`).join('|');
    const rng = createRng(seed);
    for(let i = 0; i < cfg.resultCount; i++){
        const pickedLegs = legResults.map((lr)=>lr[Math.floor(rng() * lr.length)]);
        if (pickedLegs.some((l)=>!l)) continue;
        const totalPrice = pickedLegs.reduce((sum, l)=>sum + l.price, 0);
        const totalOriginal = pickedLegs.reduce((sum, l)=>sum + l.originalPrice, 0);
        const savingsPercent = Math.round((totalOriginal - totalPrice) / totalOriginal * 100);
        const minSeats = Math.min(...pickedLegs.map((l)=>l.seatsLeft));
        results.push({
            id: `fl-multi-${seed.replace(/[^a-zA-Z0-9]/g, '').slice(0, 20)}-${i}`,
            outbound: pickedLegs[0].outbound,
            legs: pickedLegs.map((l)=>l.outbound),
            price: totalPrice,
            originalPrice: totalOriginal,
            seatsLeft: minSeats,
            isPremiumPick: false,
            savingsPercent,
            baggage: pickedLegs[0].baggage,
            fareClass: pickedLegs[0].fareClass
        });
    }
    const seen = new Set();
    const unique = results.filter((r)=>{
        if (seen.has(r.price)) return false;
        seen.add(r.price);
        return true;
    });
    unique.sort((a, b)=>a.price - b.price);
    for(let i = 0; i < Math.min(3, unique.length); i++){
        unique[i].isPremiumPick = true;
    }
    return unique;
}
function generateFlightResults(params, airlines, config) {
    if (params.type === 'multi' && params.legs && params.legs.length >= 2) {
        return generateMultiCityResults(params, airlines, config);
    }
    const cfg = {
        ...DEFAULT_CONFIG,
        ...config
    };
    const seed = `${params.from}-${params.to}-${params.depart}-${params.return || ''}-${params.cabin}`;
    const rng = createRng(seed);
    const fromCoords = (0, _airportutils.getCityCoords)(params.from);
    const toCoords = (0, _airportutils.getCityCoords)(params.to);
    let distanceKm = 5000;
    if (fromCoords && toCoords) {
        distanceKm = haversineKm(fromCoords.lat, fromCoords.lng, toCoords.lat, toCoords.lng);
    }
    const fromCode = (0, _airportutils.getPrimaryAirportCode)(params.from);
    const toCode = (0, _airportutils.getPrimaryAirportCode)(params.to);
    const fromCity = (0, _airportutils.getCityName)(params.from) || params.from;
    const toCity = (0, _airportutils.getCityName)(params.to) || params.to;
    const outRouteType = detectRouteType(params.from, params.to, distanceKm);
    const retRouteType = detectRouteType(params.to, params.from, distanceKm);
    const isDomestic = outRouteType === 'domestic_us';
    const routeAirlineNames = ROUTE_AIRLINES[outRouteType];
    const availableAirlines = routeAirlineNames.map((name)=>({
            name,
            logo: getAirlineLogo(name)
        }));
    const shuffledAirlines = shuffleArray(availableAirlines, rng);
    const priceRanges = cfg.priceRange ?? CABIN_PRICE_RANGE;
    const markupRanges = cfg.markupRange ?? CABIN_MARKUP_RANGE;
    const [minPrice, maxPrice] = priceRanges[params.cabin] ?? CABIN_PRICE_RANGE.business;
    const [markupMin, markupMax] = markupRanges[params.cabin] ?? CABIN_MARKUP_RANGE.business;
    const routeConfigKey = ROUTE_TYPE_CONFIG_KEY[outRouteType];
    const routeFactor = cfg.routePriceFactor?.[routeConfigKey] ?? ROUTE_PRICE_FACTOR[outRouteType] ?? 1.0;
    const stopDiscount = cfg.stopDiscount ?? DEFAULT_STOP_DISCOUNT;
    const codeshareProbability = cfg.codeshareProbability ?? 0.15;
    const cabinSeats = cfg.seatsPerCabin?.[params.cabin] ?? CABIN_SEATS_RANGE[params.cabin] ?? cfg.seatsLeftRange;
    const baggage = CABIN_BAGGAGE[params.cabin] ?? CABIN_BAGGAGE.business;
    const isPremiumRoute = [
        'us_to_middle_east',
        'middle_east_to_us',
        'us_to_east_asia',
        'east_asia_to_us'
    ].includes(outRouteType);
    const results = [];
    for(let i = 0; i < cfg.resultCount; i++){
        const airline = shuffledAirlines[i % shuffledAirlines.length];
        const returnAirline = rng() > 0.5 ? shuffledAirlines[Math.floor(rng() * shuffledAirlines.length)] : airline;
        const stops = rollStops(rng, distanceKm);
        const returnStops = rollStops(rng, distanceKm);
        const outBase = calcBaseDuration(distanceKm, rng);
        const jetOut = getJetStreamMinutes(outRouteType, rng);
        const outDuration = Math.max(45, outBase + jetOut + stops * layoverMinutes(rng, isDomestic));
        const inBase = calcBaseDuration(distanceKm, rng);
        const jetIn = getJetStreamMinutes(retRouteType, rng);
        const inDuration = Math.max(45, inBase + jetIn + returnStops * layoverMinutes(rng, isDomestic));
        const outDep = pickDepartureHour(rng, outRouteType);
        const retDep = pickDepartureHour(rng, retRouteType);
        const outArrTotal = outDep.hour * 60 + outDep.minute + outDuration;
        const outArrHour = Math.floor(outArrTotal / 60) % 24;
        const outArrMin = outArrTotal % 60;
        const outNextDay = calcNextDay(outDep.hour, outDep.minute, outDuration);
        const retArrTotal = retDep.hour * 60 + retDep.minute + inDuration;
        const retArrHour = Math.floor(retArrTotal / 60) % 24;
        const retArrMin = retArrTotal % 60;
        const retNextDay = calcNextDay(retDep.hour, retDep.minute, inDuration);
        const rawPrice = minPrice + rng() * (maxPrice - minPrice);
        const stopFactor = getStopPriceFactor(stops, stopDiscount);
        const price = Math.max(50, Math.round(rawPrice * routeFactor * stopFactor / 10) * 10);
        const markup = markupMin + rng() * (markupMax - markupMin);
        const originalPrice = Math.max(price + 10, Math.round(price * markup / 10) * 10);
        const savingsPercent = Math.round((originalPrice - price) / originalPrice * 100);
        const seatsLeft = cabinSeats[0] + Math.floor(rng() * (cabinSeats[1] - cabinSeats[0] + 1));
        const outFlightNumber = generateFlightNumber(rng, airline.name);
        const retFlightNumber = generateFlightNumber(rng, returnAirline.name);
        const outAircraft = pickAircraft(rng, distanceKm, isPremiumRoute);
        const retAircraft = pickAircraft(rng, distanceKm, isPremiumRoute);
        const fareClass = pickFareClass(rng, params.cabin);
        const outOperatedBy = getCodesharePartner(rng, airline.name, codeshareProbability);
        const retOperatedBy = getCodesharePartner(rng, returnAirline.name, codeshareProbability);
        const outDepDate = formatDate(params.depart);
        const outArrDate = outNextDay > 0 ? formatDate(params.depart, outNextDay) : undefined;
        const retDepDate = formatDate(params.return);
        const retArrDate = retNextDay > 0 ? formatDate(params.return, retNextDay) : undefined;
        const outStopCity = pickStopCities(rng, stops, outRouteType, [
            fromCity,
            toCity
        ]);
        const retStopCity = pickStopCities(rng, returnStops, retRouteType, [
            toCity,
            fromCity
        ]);
        const outbound = {
            airlineName: airline.name,
            airlineLogo: airline.logo,
            flightNumber: outFlightNumber,
            departureCode: fromCode,
            arrivalCode: toCode,
            departureCity: fromCity,
            arrivalCity: toCity,
            departureTime: formatTime(outDep.hour, outDep.minute),
            arrivalTime: formatTime(outArrHour, outArrMin),
            departureDate: outDepDate,
            arrivalDate: outArrDate,
            duration: formatDuration(outDuration),
            stops,
            stopCity: outStopCity,
            nextDay: outNextDay > 0 ? outNextDay : undefined,
            aircraftType: outAircraft,
            operatedBy: outOperatedBy ? `Operated by ${outOperatedBy}` : undefined
        };
        const inbound = params.type === 'oneway' ? undefined : {
            airlineName: returnAirline.name,
            airlineLogo: returnAirline.logo,
            flightNumber: retFlightNumber,
            departureCode: toCode,
            arrivalCode: fromCode,
            departureCity: toCity,
            arrivalCity: fromCity,
            departureTime: formatTime(retDep.hour, retDep.minute),
            arrivalTime: formatTime(retArrHour, retArrMin),
            departureDate: retDepDate,
            arrivalDate: retArrDate,
            duration: formatDuration(inDuration),
            stops: returnStops,
            stopCity: retStopCity,
            nextDay: retNextDay > 0 ? retNextDay : undefined,
            aircraftType: retAircraft,
            operatedBy: retOperatedBy ? `Operated by ${retOperatedBy}` : undefined
        };
        results.push({
            id: `fl-${seed}-${i}`,
            outbound,
            inbound,
            price,
            originalPrice,
            seatsLeft,
            isPremiumPick: false,
            savingsPercent,
            baggage,
            fareClass
        });
    }
    results.sort((a, b)=>a.price - b.price);
    for(let i = 0; i < Math.min(3, results.length); i++){
        results[i].isPremiumPick = true;
    }
    return results;
}

//# sourceMappingURL=generate-flights.js.map