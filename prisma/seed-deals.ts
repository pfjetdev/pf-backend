/**
 * One-time script to seed ~160 deals into existing database.
 * Run: npx tsx prisma/seed-deals.ts
 *
 * Uses createMany with skipDuplicates — safe to run multiple times.
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({ connectionString: process.env.DIRECT_URL! });
const prisma = new PrismaClient({ adapter });

// ── Helpers ──

function toSlug(city: string): string {
  return city
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

type Cabin = "Business Class" | "First Class";

interface Route {
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  countryCode: string;
  cabinClass: Cabin;
  publicFare: number;
  pfPrice: number;
}

function deal(
  origin: string,
  originCode: string,
  destination: string,
  destinationCode: string,
  countryCode: string,
  cabinClass: Cabin,
  publicFare: number,
  pfPrice: number,
): Route {
  return { origin, originCode, destination, destinationCode, countryCode, cabinClass, publicFare, pfPrice };
}

// Shorthand for Business/First
const B = "Business Class" as Cabin;
const F = "First Class" as Cabin;

// ── All deals data ──

const routes: Route[] = [
  // ═══════════════════════════════════════
  // EUROPE
  // ═══════════════════════════════════════

  // ── London (LHR, GB) — 8 new (JFK→LHR exists) ──
  deal("Los Angeles",    "LAX", "London", "LHR", "GB", F, 14200, 5800),
  deal("Chicago",        "ORD", "London", "LHR", "GB", B, 8200,  3100),
  deal("San Francisco",  "SFO", "London", "LHR", "GB", B, 8500,  3300),
  deal("Miami",          "MIA", "London", "LHR", "GB", B, 7900,  2900),
  deal("Washington DC",  "IAD", "London", "LHR", "GB", B, 7600,  2800),
  deal("Dallas",         "DFW", "London", "LHR", "GB", B, 8400,  3200),
  deal("Boston",         "BOS", "London", "LHR", "GB", F, 13500, 5500),
  deal("Atlanta",        "ATL", "London", "LHR", "GB", B, 8100,  3000),

  // ── Paris (CDG, FR) — 8 new (JFK→CDG exists) ──
  deal("Los Angeles",    "LAX", "Paris", "CDG", "FR", F, 13800, 5600),
  deal("Chicago",        "ORD", "Paris", "CDG", "FR", F, 14500, 5900),
  deal("San Francisco",  "SFO", "Paris", "CDG", "FR", B, 8300,  3100),
  deal("Miami",          "MIA", "Paris", "CDG", "FR", B, 7700,  2800),
  deal("Washington DC",  "IAD", "Paris", "CDG", "FR", B, 7400,  2700),
  deal("Boston",         "BOS", "Paris", "CDG", "FR", B, 7200,  2600),
  deal("Atlanta",        "ATL", "Paris", "CDG", "FR", B, 8000,  3000),
  deal("Dallas",         "DFW", "Paris", "CDG", "FR", B, 8600,  3200),

  // ── Rome (FCO, IT) — 6 new ──
  deal("New York",       "JFK", "Rome", "FCO", "IT", F, 15200, 6200),
  deal("Los Angeles",    "LAX", "Rome", "FCO", "IT", B, 8800,  3400),
  deal("Chicago",        "ORD", "Rome", "FCO", "IT", B, 8200,  3100),
  deal("Miami",          "MIA", "Rome", "FCO", "IT", B, 7900,  2900),
  deal("Washington DC",  "IAD", "Rome", "FCO", "IT", B, 8100,  3000),
  deal("Boston",         "BOS", "Rome", "FCO", "IT", B, 7600,  2800),

  // ── Barcelona (BCN, ES) — 5 new ──
  deal("New York",       "JFK", "Barcelona", "BCN", "ES", F, 13200, 5400),
  deal("Los Angeles",    "LAX", "Barcelona", "BCN", "ES", B, 8500,  3200),
  deal("Chicago",        "ORD", "Barcelona", "BCN", "ES", B, 8100,  3000),
  deal("Miami",          "MIA", "Barcelona", "BCN", "ES", B, 7400,  2700),
  deal("Washington DC",  "IAD", "Barcelona", "BCN", "ES", B, 7800,  2900),

  // ── Amsterdam (AMS, NL) — 6 new ──
  deal("New York",       "JFK", "Amsterdam", "AMS", "NL", F, 13800, 5600),
  deal("Los Angeles",    "LAX", "Amsterdam", "AMS", "NL", B, 8600,  3300),
  deal("Chicago",        "ORD", "Amsterdam", "AMS", "NL", B, 7800,  2900),
  deal("San Francisco",  "SFO", "Amsterdam", "AMS", "NL", B, 8900,  3400),
  deal("Washington DC",  "IAD", "Amsterdam", "AMS", "NL", B, 7500,  2800),
  deal("Atlanta",        "ATL", "Amsterdam", "AMS", "NL", B, 8200,  3100),

  // ── Munich (MUC, DE) — 5 new ──
  deal("New York",       "JFK", "Munich", "MUC", "DE", F, 14000, 5700),
  deal("Los Angeles",    "LAX", "Munich", "MUC", "DE", B, 8700,  3300),
  deal("Chicago",        "ORD", "Munich", "MUC", "DE", B, 7900,  2900),
  deal("Washington DC",  "IAD", "Munich", "MUC", "DE", B, 8100,  3000),
  deal("San Francisco",  "SFO", "Munich", "MUC", "DE", B, 9100,  3500),

  // ═══════════════════════════════════════
  // ASIA
  // ═══════════════════════════════════════

  // ── Tokyo (NRT, JP) — 6 new (LAX→NRT exists) ──
  deal("New York",       "JFK", "Tokyo", "NRT", "JP", F, 18500, 7200),
  deal("Chicago",        "ORD", "Tokyo", "NRT", "JP", B, 9800,  3900),
  deal("San Francisco",  "SFO", "Tokyo", "NRT", "JP", F, 17200, 6800),
  deal("Houston",        "IAH", "Tokyo", "NRT", "JP", B, 10400, 4100),
  deal("Dallas",         "DFW", "Tokyo", "NRT", "JP", B, 10200, 4000),
  deal("Seattle",        "SEA", "Tokyo", "NRT", "JP", B, 9200,  3600),

  // ── Singapore (SIN, SG) — 4 new (SFO→SIN exists) ──
  deal("New York",       "JFK", "Singapore", "SIN", "SG", F, 19200, 7500),
  deal("Los Angeles",    "LAX", "Singapore", "SIN", "SG", F, 18500, 7200),
  deal("Houston",        "IAH", "Singapore", "SIN", "SG", B, 9800,  3800),
  deal("Seattle",        "SEA", "Singapore", "SIN", "SG", B, 9400,  3600),

  // ── Bangkok (BKK, TH) — 4 new ──
  deal("New York",       "JFK", "Bangkok", "BKK", "TH", F, 17800, 7000),
  deal("Los Angeles",    "LAX", "Bangkok", "BKK", "TH", B, 9200,  3500),
  deal("San Francisco",  "SFO", "Bangkok", "BKK", "TH", B, 9500,  3700),
  deal("Seattle",        "SEA", "Bangkok", "BKK", "TH", B, 9800,  3800),

  // ── Hong Kong (HKG, HK) — 4 new (JFK→HKG exists) ──
  deal("Los Angeles",    "LAX", "Hong Kong", "HKG", "HK", F, 17500, 6900),
  deal("Chicago",        "ORD", "Hong Kong", "HKG", "HK", B, 10100, 4000),
  deal("San Francisco",  "SFO", "Hong Kong", "HKG", "HK", B, 9600,  3700),
  deal("Dallas",         "DFW", "Hong Kong", "HKG", "HK", B, 10800, 4300),

  // ── Seoul (ICN, KR) — 7 new ──
  deal("New York",       "JFK", "Seoul", "ICN", "KR", F, 18200, 7100),
  deal("Los Angeles",    "LAX", "Seoul", "ICN", "KR", F, 16800, 6600),
  deal("Chicago",        "ORD", "Seoul", "ICN", "KR", B, 9600,  3700),
  deal("San Francisco",  "SFO", "Seoul", "ICN", "KR", B, 9200,  3500),
  deal("Seattle",        "SEA", "Seoul", "ICN", "KR", B, 8800,  3400),
  deal("Atlanta",        "ATL", "Seoul", "ICN", "KR", B, 10200, 4000),
  deal("Dallas",         "DFW", "Seoul", "ICN", "KR", B, 10600, 4200),

  // ── Bali (DPS, ID) — 3 new ──
  deal("New York",       "JFK", "Bali", "DPS", "ID", B, 11200, 4400),
  deal("Los Angeles",    "LAX", "Bali", "DPS", "ID", F, 19500, 7600),
  deal("San Francisco",  "SFO", "Bali", "DPS", "ID", B, 10800, 4200),

  // ═══════════════════════════════════════
  // MIDDLE EAST
  // ═══════════════════════════════════════

  // ── Dubai (DXB, AE) — 6 new (JFK→DXB First exists) ──
  deal("Los Angeles",    "LAX", "Dubai", "DXB", "AE", F, 16500, 6500),
  deal("Chicago",        "ORD", "Dubai", "DXB", "AE", B, 8800,  3400),
  deal("San Francisco",  "SFO", "Dubai", "DXB", "AE", F, 17200, 6800),
  deal("Washington DC",  "IAD", "Dubai", "DXB", "AE", F, 15800, 6200),
  deal("Houston",        "IAH", "Dubai", "DXB", "AE", B, 9200,  3600),
  deal("Dallas",         "DFW", "Dubai", "DXB", "AE", B, 9400,  3700),

  // ── Abu Dhabi (AUH, AE) — 4 new ──
  deal("New York",       "JFK", "Abu Dhabi", "AUH", "AE", F, 15200, 6000),
  deal("Los Angeles",    "LAX", "Abu Dhabi", "AUH", "AE", B, 8500,  3300),
  deal("Chicago",        "ORD", "Abu Dhabi", "AUH", "AE", B, 8800,  3400),
  deal("Washington DC",  "IAD", "Abu Dhabi", "AUH", "AE", B, 8200,  3200),

  // ── Doha (DOH, QA) — 6 new ──
  deal("New York",       "JFK", "Doha", "DOH", "QA", F, 16800, 6600),
  deal("Los Angeles",    "LAX", "Doha", "DOH", "QA", F, 17500, 6900),
  deal("Chicago",        "ORD", "Doha", "DOH", "QA", B, 9100,  3500),
  deal("Washington DC",  "IAD", "Doha", "DOH", "QA", B, 8600,  3300),
  deal("Houston",        "IAH", "Doha", "DOH", "QA", B, 9400,  3700),
  deal("Dallas",         "DFW", "Doha", "DOH", "QA", B, 9600,  3800),

  // ── Tel Aviv (TLV, IL) — 5 new ──
  deal("New York",       "JFK", "Tel Aviv", "TLV", "IL", F, 14500, 5800),
  deal("Los Angeles",    "LAX", "Tel Aviv", "TLV", "IL", B, 8900,  3400),
  deal("Miami",          "MIA", "Tel Aviv", "TLV", "IL", B, 8200,  3100),
  deal("Boston",         "BOS", "Tel Aviv", "TLV", "IL", B, 7800,  2900),
  deal("Washington DC",  "IAD", "Tel Aviv", "TLV", "IL", B, 8100,  3100),

  // ── Amman (AMM, JO) — 4 new ──
  deal("New York",       "JFK", "Amman", "AMM", "JO", F, 14200, 5600),
  deal("Chicago",        "ORD", "Amman", "AMM", "JO", B, 8400,  3200),
  deal("Washington DC",  "IAD", "Amman", "AMM", "JO", B, 7900,  3000),
  deal("Dallas",         "DFW", "Amman", "AMM", "JO", B, 8800,  3400),

  // ── Riyadh (RUH, SA) — 4 new ──
  deal("New York",       "JFK", "Riyadh", "RUH", "SA", F, 15500, 6200),
  deal("Los Angeles",    "LAX", "Riyadh", "RUH", "SA", B, 9200,  3600),
  deal("Washington DC",  "IAD", "Riyadh", "RUH", "SA", B, 8800,  3400),
  deal("Houston",        "IAH", "Riyadh", "RUH", "SA", B, 9500,  3700),

  // ═══════════════════════════════════════
  // AFRICA
  // ═══════════════════════════════════════

  // ── Cape Town (CPT, ZA) — 3 new ──
  deal("New York",       "JFK", "Cape Town", "CPT", "ZA", F, 17500, 7000),
  deal("Washington DC",  "IAD", "Cape Town", "CPT", "ZA", B, 10200, 4200),
  deal("Atlanta",        "ATL", "Cape Town", "CPT", "ZA", B, 9800,  3900),

  // ── Marrakech (RAK, MA) — 4 new ──
  deal("New York",       "JFK", "Marrakech", "RAK", "MA", F, 15500, 6200),
  deal("Los Angeles",    "LAX", "Marrakech", "RAK", "MA", B, 9200,  3600),
  deal("Miami",          "MIA", "Marrakech", "RAK", "MA", B, 8800,  3400),
  deal("Boston",         "BOS", "Marrakech", "RAK", "MA", B, 8400,  3200),

  // ── Cairo (CAI, EG) — 4 new ──
  deal("New York",       "JFK", "Cairo", "CAI", "EG", F, 16200, 6500),
  deal("Los Angeles",    "LAX", "Cairo", "CAI", "EG", B, 9500,  3800),
  deal("Chicago",        "ORD", "Cairo", "CAI", "EG", B, 9100,  3500),
  deal("Washington DC",  "IAD", "Cairo", "CAI", "EG", B, 8700,  3400),

  // ── Nairobi (NBO, KE) — 4 new ──
  deal("New York",       "JFK", "Nairobi", "NBO", "KE", F, 17200, 6800),
  deal("Washington DC",  "IAD", "Nairobi", "NBO", "KE", B, 10500, 4300),
  deal("Atlanta",        "ATL", "Nairobi", "NBO", "KE", B, 9800,  3900),
  deal("Houston",        "IAH", "Nairobi", "NBO", "KE", B, 10800, 4400),

  // ── Johannesburg (JNB, ZA) — 4 new ──
  deal("New York",       "JFK", "Johannesburg", "JNB", "ZA", F, 16800, 6700),
  deal("Washington DC",  "IAD", "Johannesburg", "JNB", "ZA", B, 10200, 4100),
  deal("Atlanta",        "ATL", "Johannesburg", "JNB", "ZA", B, 9600,  3800),
  deal("Houston",        "IAH", "Johannesburg", "JNB", "ZA", B, 10500, 4200),

  // ── Casablanca (CMN, MA) — 4 new ──
  deal("New York",       "JFK", "Casablanca", "CMN", "MA", F, 14800, 5900),
  deal("Miami",          "MIA", "Casablanca", "CMN", "MA", B, 8500,  3300),
  deal("Boston",         "BOS", "Casablanca", "CMN", "MA", B, 8200,  3100),
  deal("Washington DC",  "IAD", "Casablanca", "CMN", "MA", B, 8600,  3400),

  // ═══════════════════════════════════════
  // OCEANIA
  // ═══════════════════════════════════════

  // ── Sydney (SYD, AU) — 4 new (LAX→SYD exists) ──
  deal("New York",       "JFK", "Sydney", "SYD", "AU", F, 22500, 8800),
  deal("San Francisco",  "SFO", "Sydney", "SYD", "AU", F, 21000, 8200),
  deal("Dallas",         "DFW", "Sydney", "SYD", "AU", B, 12800, 5100),
  deal("Houston",        "IAH", "Sydney", "SYD", "AU", B, 13200, 5300),

  // ── Melbourne (MEL, AU) — 4 new ──
  deal("New York",       "JFK", "Melbourne", "MEL", "AU", F, 23000, 9000),
  deal("Los Angeles",    "LAX", "Melbourne", "MEL", "AU", B, 11800, 4600),
  deal("San Francisco",  "SFO", "Melbourne", "MEL", "AU", B, 12200, 4800),
  deal("Dallas",         "DFW", "Melbourne", "MEL", "AU", B, 13500, 5400),

  // ── Auckland (AKL, NZ) — 4 new ──
  deal("New York",       "JFK", "Auckland", "AKL", "NZ", B, 13200, 5200),
  deal("Los Angeles",    "LAX", "Auckland", "AKL", "NZ", F, 22000, 8600),
  deal("San Francisco",  "SFO", "Auckland", "AKL", "NZ", B, 12500, 4900),
  deal("Houston",        "IAH", "Auckland", "AKL", "NZ", B, 14200, 5600),

  // ── Fiji (NAN, FJ) — 2 new ──
  deal("Los Angeles",    "LAX", "Fiji", "NAN", "FJ", B, 10500, 4200),
  deal("San Francisco",  "SFO", "Fiji", "NAN", "FJ", B, 10800, 4300),

  // ── Queenstown (ZQN, NZ) — 2 new ──
  deal("Los Angeles",    "LAX", "Queenstown", "ZQN", "NZ", B, 13500, 5400),
  deal("San Francisco",  "SFO", "Queenstown", "ZQN", "NZ", B, 13800, 5500),

  // ── Perth (PER, AU) — 2 new ──
  deal("Los Angeles",    "LAX", "Perth", "PER", "AU", B, 12200, 4800),
  deal("San Francisco",  "SFO", "Perth", "PER", "AU", B, 12500, 5000),

  // ═══════════════════════════════════════
  // AMERICAS (international only)
  // ═══════════════════════════════════════

  // ── Cancun (CUN, MX) — 7 new ──
  deal("New York",       "JFK", "Cancun", "CUN", "MX", F, 10500, 4200),
  deal("Los Angeles",    "LAX", "Cancun", "CUN", "MX", B, 5800,  2200),
  deal("Chicago",        "ORD", "Cancun", "CUN", "MX", B, 5200,  1900),
  deal("Miami",          "MIA", "Cancun", "CUN", "MX", B, 4800,  1800),
  deal("Dallas",         "DFW", "Cancun", "CUN", "MX", B, 5100,  1900),
  deal("Houston",        "IAH", "Cancun", "CUN", "MX", B, 5000,  1850),
  deal("Atlanta",        "ATL", "Cancun", "CUN", "MX", B, 5400,  2000),

  // ── Rio de Janeiro (GIG, BR) — 6 new ──
  deal("New York",       "JFK", "Rio de Janeiro", "GIG", "BR", F, 12500, 5000),
  deal("Miami",          "MIA", "Rio de Janeiro", "GIG", "BR", B, 6800,  2600),
  deal("Washington DC",  "IAD", "Rio de Janeiro", "GIG", "BR", B, 7200,  2800),
  deal("Atlanta",        "ATL", "Rio de Janeiro", "GIG", "BR", B, 7500,  2900),
  deal("Houston",        "IAH", "Rio de Janeiro", "GIG", "BR", B, 7800,  3000),
  deal("Dallas",         "DFW", "Rio de Janeiro", "GIG", "BR", B, 8100,  3100),

  // ── Buenos Aires (EZE, AR) — 6 new ──
  deal("New York",       "JFK", "Buenos Aires", "EZE", "AR", F, 13200, 5300),
  deal("Miami",          "MIA", "Buenos Aires", "EZE", "AR", B, 7200,  2800),
  deal("Washington DC",  "IAD", "Buenos Aires", "EZE", "AR", B, 7600,  2900),
  deal("Atlanta",        "ATL", "Buenos Aires", "EZE", "AR", B, 7900,  3100),
  deal("Houston",        "IAH", "Buenos Aires", "EZE", "AR", B, 8200,  3200),
  deal("Dallas",         "DFW", "Buenos Aires", "EZE", "AR", B, 8500,  3300),

  // ── Vancouver (YVR, CA) — 5 new ──
  deal("New York",       "JFK", "Vancouver", "YVR", "CA", F, 11200, 4500),
  deal("Los Angeles",    "LAX", "Vancouver", "YVR", "CA", B, 5200,  2000),
  deal("San Francisco",  "SFO", "Vancouver", "YVR", "CA", B, 4800,  1850),
  deal("Chicago",        "ORD", "Vancouver", "YVR", "CA", B, 5600,  2100),
  deal("Seattle",        "SEA", "Vancouver", "YVR", "CA", B, 4200,  1700),

  // ═══════════════════════════════════════
  // NEW DESTINATIONS — Wave 2 (~100 deals)
  // ═══════════════════════════════════════

  // ── Milan (MXP, IT) — 5 new ──
  deal("New York",       "JFK", "Milan", "MXP", "IT", F, 14800, 6000),
  deal("Los Angeles",    "LAX", "Milan", "MXP", "IT", B, 8600,  3300),
  deal("Chicago",        "ORD", "Milan", "MXP", "IT", B, 8100,  3000),
  deal("Miami",          "MIA", "Milan", "MXP", "IT", B, 7700,  2800),
  deal("Boston",         "BOS", "Milan", "MXP", "IT", B, 7400,  2700),

  // ── Istanbul (IST, TR) — 6 new ──
  deal("New York",       "JFK", "Istanbul", "IST", "TR", F, 13500, 5400),
  deal("Los Angeles",    "LAX", "Istanbul", "IST", "TR", B, 8800,  3400),
  deal("Chicago",        "ORD", "Istanbul", "IST", "TR", B, 8400,  3200),
  deal("Washington DC",  "IAD", "Istanbul", "IST", "TR", B, 7900,  3000),
  deal("Atlanta",        "ATL", "Istanbul", "IST", "TR", B, 8200,  3100),
  deal("Houston",        "IAH", "Istanbul", "IST", "TR", B, 8600,  3300),

  // ── Athens (ATH, GR) — 5 new ──
  deal("New York",       "JFK", "Athens", "ATH", "GR", F, 14200, 5700),
  deal("Los Angeles",    "LAX", "Athens", "ATH", "GR", B, 9100,  3500),
  deal("Chicago",        "ORD", "Athens", "ATH", "GR", B, 8600,  3300),
  deal("Miami",          "MIA", "Athens", "ATH", "GR", B, 8200,  3100),
  deal("Boston",         "BOS", "Athens", "ATH", "GR", B, 7800,  2900),

  // ── Dublin (DUB, IE) — 5 new ──
  deal("New York",       "JFK", "Dublin", "DUB", "IE", F, 12800, 5200),
  deal("Los Angeles",    "LAX", "Dublin", "DUB", "IE", B, 8200,  3100),
  deal("Chicago",        "ORD", "Dublin", "DUB", "IE", B, 7600,  2800),
  deal("Boston",         "BOS", "Dublin", "DUB", "IE", B, 6800,  2500),
  deal("Washington DC",  "IAD", "Dublin", "DUB", "IE", B, 7200,  2700),

  // ── Lisbon (LIS, PT) — 5 new ──
  deal("New York",       "JFK", "Lisbon", "LIS", "PT", F, 13000, 5300),
  deal("Los Angeles",    "LAX", "Lisbon", "LIS", "PT", B, 8400,  3200),
  deal("Miami",          "MIA", "Lisbon", "LIS", "PT", B, 7800,  2900),
  deal("Boston",         "BOS", "Lisbon", "LIS", "PT", B, 7200,  2600),
  deal("Washington DC",  "IAD", "Lisbon", "LIS", "PT", B, 7600,  2800),

  // ── Madrid (MAD, ES) — 6 new ──
  deal("New York",       "JFK", "Madrid", "MAD", "ES", F, 13400, 5500),
  deal("Los Angeles",    "LAX", "Madrid", "MAD", "ES", B, 8500,  3200),
  deal("Chicago",        "ORD", "Madrid", "MAD", "ES", B, 8100,  3000),
  deal("Miami",          "MIA", "Madrid", "MAD", "ES", B, 7500,  2800),
  deal("Washington DC",  "IAD", "Madrid", "MAD", "ES", B, 7800,  2900),
  deal("Dallas",         "DFW", "Madrid", "MAD", "ES", B, 8700,  3300),

  // ── Zurich (ZRH, CH) — 5 new ──
  deal("New York",       "JFK", "Zurich", "ZRH", "CH", F, 14500, 5900),
  deal("Los Angeles",    "LAX", "Zurich", "ZRH", "CH", B, 9000,  3400),
  deal("Chicago",        "ORD", "Zurich", "ZRH", "CH", B, 8400,  3200),
  deal("Washington DC",  "IAD", "Zurich", "ZRH", "CH", B, 8200,  3100),
  deal("San Francisco",  "SFO", "Zurich", "ZRH", "CH", B, 9200,  3500),

  // ── Delhi (DEL, IN) — 6 new ──
  deal("New York",       "JFK", "Delhi", "DEL", "IN", F, 18800, 7400),
  deal("Los Angeles",    "LAX", "Delhi", "DEL", "IN", B, 10200, 4000),
  deal("Chicago",        "ORD", "Delhi", "DEL", "IN", B, 9800,  3800),
  deal("San Francisco",  "SFO", "Delhi", "DEL", "IN", B, 10500, 4100),
  deal("Houston",        "IAH", "Delhi", "DEL", "IN", B, 10800, 4300),
  deal("Washington DC",  "IAD", "Delhi", "DEL", "IN", B, 9600,  3700),

  // ── Shanghai (PVG, CN) — 5 new ──
  deal("New York",       "JFK", "Shanghai", "PVG", "CN", F, 17500, 6900),
  deal("Los Angeles",    "LAX", "Shanghai", "PVG", "CN", B, 9400,  3600),
  deal("Chicago",        "ORD", "Shanghai", "PVG", "CN", B, 9800,  3800),
  deal("San Francisco",  "SFO", "Shanghai", "PVG", "CN", B, 9100,  3500),
  deal("Seattle",        "SEA", "Shanghai", "PVG", "CN", B, 8800,  3400),

  // ── Kuala Lumpur (KUL, MY) — 4 new ──
  deal("New York",       "JFK", "Kuala Lumpur", "KUL", "MY", F, 18200, 7200),
  deal("Los Angeles",    "LAX", "Kuala Lumpur", "KUL", "MY", B, 9600,  3700),
  deal("San Francisco",  "SFO", "Kuala Lumpur", "KUL", "MY", B, 9800,  3800),
  deal("Seattle",        "SEA", "Kuala Lumpur", "KUL", "MY", B, 9400,  3600),

  // ── Taipei (TPE, TW) — 5 new ──
  deal("New York",       "JFK", "Taipei", "TPE", "TW", F, 17800, 7000),
  deal("Los Angeles",    "LAX", "Taipei", "TPE", "TW", B, 9200,  3500),
  deal("San Francisco",  "SFO", "Taipei", "TPE", "TW", B, 9000,  3400),
  deal("Seattle",        "SEA", "Taipei", "TPE", "TW", B, 8600,  3300),
  deal("Chicago",        "ORD", "Taipei", "TPE", "TW", B, 9600,  3700),

  // ── Muscat (MCT, OM) — 4 new ──
  deal("New York",       "JFK", "Muscat", "MCT", "OM", F, 15500, 6100),
  deal("Los Angeles",    "LAX", "Muscat", "MCT", "OM", B, 9200,  3600),
  deal("Washington DC",  "IAD", "Muscat", "MCT", "OM", B, 8800,  3400),
  deal("Houston",        "IAH", "Muscat", "MCT", "OM", B, 9500,  3700),

  // ── Kuwait City (KWI, KW) — 4 new ──
  deal("New York",       "JFK", "Kuwait City", "KWI", "KW", F, 15200, 6000),
  deal("Los Angeles",    "LAX", "Kuwait City", "KWI", "KW", B, 9000,  3500),
  deal("Washington DC",  "IAD", "Kuwait City", "KWI", "KW", B, 8500,  3300),
  deal("Houston",        "IAH", "Kuwait City", "KWI", "KW", B, 9200,  3600),

  // ── Lagos (LOS, NG) — 5 new ──
  deal("New York",       "JFK", "Lagos", "LOS", "NG", F, 16500, 6600),
  deal("Washington DC",  "IAD", "Lagos", "LOS", "NG", B, 10200, 4100),
  deal("Atlanta",        "ATL", "Lagos", "LOS", "NG", B, 9800,  3900),
  deal("Houston",        "IAH", "Lagos", "LOS", "NG", B, 10500, 4200),
  deal("Dallas",         "DFW", "Lagos", "LOS", "NG", B, 10800, 4300),

  // ── Addis Ababa (ADD, ET) — 4 new ──
  deal("New York",       "JFK", "Addis Ababa", "ADD", "ET", F, 16200, 6400),
  deal("Washington DC",  "IAD", "Addis Ababa", "ADD", "ET", B, 10500, 4200),
  deal("Atlanta",        "ATL", "Addis Ababa", "ADD", "ET", B, 9800,  3900),
  deal("Houston",        "IAH", "Addis Ababa", "ADD", "ET", B, 10800, 4300),

  // ── Bora Bora (BOB, PF) — 3 new ──
  deal("Los Angeles",    "LAX", "Bora Bora", "BOB", "PF", F, 18500, 7200),
  deal("San Francisco",  "SFO", "Bora Bora", "BOB", "PF", B, 11800, 4700),
  deal("Houston",        "IAH", "Bora Bora", "BOB", "PF", B, 13200, 5300),

  // ── Toronto (YYZ, CA) — 6 new ──
  deal("New York",       "JFK", "Toronto", "YYZ", "CA", F, 10800, 4300),
  deal("Los Angeles",    "LAX", "Toronto", "YYZ", "CA", B, 5600,  2100),
  deal("Chicago",        "ORD", "Toronto", "YYZ", "CA", B, 4800,  1800),
  deal("Miami",          "MIA", "Toronto", "YYZ", "CA", B, 5200,  2000),
  deal("Dallas",         "DFW", "Toronto", "YYZ", "CA", B, 5800,  2200),
  deal("Atlanta",        "ATL", "Toronto", "YYZ", "CA", B, 5400,  2000),

  // ── Lima (LIM, PE) — 5 new ──
  deal("New York",       "JFK", "Lima", "LIM", "PE", F, 12200, 4900),
  deal("Los Angeles",    "LAX", "Lima", "LIM", "PE", B, 6800,  2600),
  deal("Miami",          "MIA", "Lima", "LIM", "PE", B, 6200,  2400),
  deal("Houston",        "IAH", "Lima", "LIM", "PE", B, 7200,  2800),
  deal("Dallas",         "DFW", "Lima", "LIM", "PE", B, 7500,  2900),

  // ── Bogota (BOG, CO) — 5 new ──
  deal("New York",       "JFK", "Bogota", "BOG", "CO", F, 11800, 4700),
  deal("Miami",          "MIA", "Bogota", "BOG", "CO", B, 5800,  2200),
  deal("Washington DC",  "IAD", "Bogota", "BOG", "CO", B, 6400,  2500),
  deal("Atlanta",        "ATL", "Bogota", "BOG", "CO", B, 6200,  2400),
  deal("Houston",        "IAH", "Bogota", "BOG", "CO", B, 6800,  2600),

  // ── Punta Cana (PUJ, DO) — 6 new ──
  deal("New York",       "JFK", "Punta Cana", "PUJ", "DO", F, 10200, 4100),
  deal("Los Angeles",    "LAX", "Punta Cana", "PUJ", "DO", B, 5800,  2200),
  deal("Miami",          "MIA", "Punta Cana", "PUJ", "DO", B, 4600,  1750),
  deal("Chicago",        "ORD", "Punta Cana", "PUJ", "DO", B, 5200,  1950),
  deal("Atlanta",        "ATL", "Punta Cana", "PUJ", "DO", B, 5000,  1900),
  deal("Boston",         "BOS", "Punta Cana", "PUJ", "DO", B, 4800,  1800),

  // ═══════════════════════════════════════
  // WAVE 3 — 2nd cities for key countries (~63 deals)
  // ═══════════════════════════════════════

  // ── Frankfurt (FRA, DE) — 5 new ──
  deal("New York",       "JFK", "Frankfurt", "FRA", "DE", F, 13800, 5600),
  deal("Los Angeles",    "LAX", "Frankfurt", "FRA", "DE", B, 8500,  3200),
  deal("Chicago",        "ORD", "Frankfurt", "FRA", "DE", B, 7800,  2900),
  deal("Washington DC",  "IAD", "Frankfurt", "FRA", "DE", B, 7500,  2800),
  deal("San Francisco",  "SFO", "Frankfurt", "FRA", "DE", B, 8800,  3400),

  // ── Nice (NCE, FR) — 4 new ──
  deal("New York",       "JFK", "Nice", "NCE", "FR", F, 14200, 5800),
  deal("Los Angeles",    "LAX", "Nice", "NCE", "FR", B, 8800,  3400),
  deal("Miami",          "MIA", "Nice", "NCE", "FR", B, 8200,  3100),
  deal("Boston",         "BOS", "Nice", "NCE", "FR", B, 7600,  2800),

  // ── Porto (OPO, PT) — 3 new ──
  deal("New York",       "JFK", "Porto", "OPO", "PT", F, 12600, 5100),
  deal("Boston",         "BOS", "Porto", "OPO", "PT", B, 7100,  2600),
  deal("Miami",          "MIA", "Porto", "OPO", "PT", B, 7800,  2900),

  // ── Geneva (GVA, CH) — 4 new ──
  deal("New York",       "JFK", "Geneva", "GVA", "CH", F, 14200, 5800),
  deal("Los Angeles",    "LAX", "Geneva", "GVA", "CH", B, 8900,  3400),
  deal("Chicago",        "ORD", "Geneva", "GVA", "CH", B, 8300,  3100),
  deal("Washington DC",  "IAD", "Geneva", "GVA", "CH", B, 8100,  3000),

  // ── Manchester (MAN, GB) — 4 new ──
  deal("New York",       "JFK", "Manchester", "MAN", "GB", F, 13200, 5300),
  deal("Chicago",        "ORD", "Manchester", "MAN", "GB", B, 7900,  2900),
  deal("Boston",         "BOS", "Manchester", "MAN", "GB", B, 7200,  2700),
  deal("Atlanta",        "ATL", "Manchester", "MAN", "GB", B, 8100,  3000),

  // ── Osaka (KIX, JP) — 4 new ──
  deal("New York",       "JFK", "Osaka", "KIX", "JP", F, 18200, 7100),
  deal("Los Angeles",    "LAX", "Osaka", "KIX", "JP", B, 9200,  3600),
  deal("San Francisco",  "SFO", "Osaka", "KIX", "JP", B, 8800,  3400),
  deal("Seattle",        "SEA", "Osaka", "KIX", "JP", B, 8500,  3300),

  // ── Mumbai (BOM, IN) — 5 new ──
  deal("New York",       "JFK", "Mumbai", "BOM", "IN", F, 18500, 7300),
  deal("Los Angeles",    "LAX", "Mumbai", "BOM", "IN", B, 10400, 4100),
  deal("Chicago",        "ORD", "Mumbai", "BOM", "IN", B, 9900,  3900),
  deal("San Francisco",  "SFO", "Mumbai", "BOM", "IN", B, 10200, 4000),
  deal("Houston",        "IAH", "Mumbai", "BOM", "IN", B, 10600, 4200),

  // ── Beijing (PEK, CN) — 4 new ──
  deal("New York",       "JFK", "Beijing", "PEK", "CN", F, 17200, 6800),
  deal("Los Angeles",    "LAX", "Beijing", "PEK", "CN", B, 9200,  3500),
  deal("San Francisco",  "SFO", "Beijing", "PEK", "CN", B, 8900,  3400),
  deal("Chicago",        "ORD", "Beijing", "PEK", "CN", B, 9600,  3700),

  // ── Phuket (HKT, TH) — 3 new ──
  deal("Los Angeles",    "LAX", "Phuket", "HKT", "TH", F, 17800, 7000),
  deal("San Francisco",  "SFO", "Phuket", "HKT", "TH", B, 9800,  3800),
  deal("Seattle",        "SEA", "Phuket", "HKT", "TH", B, 10200, 4000),

  // ── Jakarta (CGK, ID) — 4 new ──
  deal("New York",       "JFK", "Jakarta", "CGK", "ID", F, 19200, 7500),
  deal("Los Angeles",    "LAX", "Jakarta", "CGK", "ID", B, 10800, 4300),
  deal("San Francisco",  "SFO", "Jakarta", "CGK", "ID", B, 10500, 4100),
  deal("Seattle",        "SEA", "Jakarta", "CGK", "ID", B, 10200, 4000),

  // ── Jeddah (JED, SA) — 4 new ──
  deal("New York",       "JFK", "Jeddah", "JED", "SA", F, 15800, 6300),
  deal("Los Angeles",    "LAX", "Jeddah", "JED", "SA", B, 9400,  3700),
  deal("Washington DC",  "IAD", "Jeddah", "JED", "SA", B, 9000,  3500),
  deal("Houston",        "IAH", "Jeddah", "JED", "SA", B, 9600,  3800),

  // ── São Paulo (GRU, BR) — 4 new (Miami→GRU already exists as original deal) ──
  deal("New York",       "JFK", "São Paulo", "GRU", "BR", F, 12800, 5100),
  deal("Los Angeles",    "LAX", "São Paulo", "GRU", "BR", B, 7200,  2800),
  deal("Washington DC",  "IAD", "São Paulo", "GRU", "BR", B, 7500,  2900),
  deal("Atlanta",        "ATL", "São Paulo", "GRU", "BR", B, 7800,  3000),

  // ── Mexico City (MEX, MX) — 5 new ──
  deal("New York",       "JFK", "Mexico City", "MEX", "MX", F, 10800, 4300),
  deal("Los Angeles",    "LAX", "Mexico City", "MEX", "MX", B, 5400,  2000),
  deal("Chicago",        "ORD", "Mexico City", "MEX", "MX", B, 5100,  1900),
  deal("Miami",          "MIA", "Mexico City", "MEX", "MX", B, 4800,  1800),
  deal("Dallas",         "DFW", "Mexico City", "MEX", "MX", B, 4600,  1750),

  // ── Montreal (YUL, CA) — 4 new ──
  deal("New York",       "JFK", "Montreal", "YUL", "CA", F, 10200, 4100),
  deal("Chicago",        "ORD", "Montreal", "YUL", "CA", B, 4900,  1850),
  deal("Boston",         "BOS", "Montreal", "YUL", "CA", B, 4200,  1600),
  deal("Miami",          "MIA", "Montreal", "YUL", "CA", B, 5200,  2000),

  // ── Cartagena (CTG, CO) — 3 new ──
  deal("New York",       "JFK", "Cartagena", "CTG", "CO", F, 11500, 4600),
  deal("Miami",          "MIA", "Cartagena", "CTG", "CO", B, 5600,  2100),
  deal("Atlanta",        "ATL", "Cartagena", "CTG", "CO", B, 6200,  2400),
];

// ── Build deal records ──

const dealsData = routes.map((r) => ({
  slug: `${toSlug(r.origin)}-${toSlug(r.destination)}`,
  origin: r.origin,
  originCode: r.originCode,
  destination: r.destination,
  destinationCode: r.destinationCode,
  countryCode: r.countryCode,
  cabinClass: r.cabinClass,
  publicFare: r.publicFare,
  pfPrice: r.pfPrice,
  imageUrl: "",
  themeColor: "",
  sortOrder: 0,
}));

// ── Validate unique slugs ──

const slugs = dealsData.map((d) => d.slug);
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length > 0) {
  console.error("Duplicate slugs found:", [...new Set(dupes)]);
  process.exit(1);
}

// ── Insert ──

async function main() {
  console.log(`Seeding ${dealsData.length} deals...`);

  const result = await prisma.deal.createMany({
    data: dealsData,
    skipDuplicates: true,
  });

  console.log(`✓ Created ${result.count} new deals (${dealsData.length - result.count} already existed)`);
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
