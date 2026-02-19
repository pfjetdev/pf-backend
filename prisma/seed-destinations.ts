/**
 * One-time script to seed 20 new destinations into existing database.
 * Run: npx tsx prisma/seed-destinations.ts
 *
 * Checks existing airports to avoid duplicates.
 */

import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

const adapter = new PrismaNeon({ connectionString: process.env.DIRECT_URL! });
const prisma = new PrismaClient({ adapter });

const newDestinations = [
  // ── Europe (+7) ──
  { city: "Milan", country: "Italy", countryCode: "IT", airportCode: "MXP", imageUrl: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=400&h=300&fit=crop", fromPrice: 2699, region: "europe", sortOrder: 6 },
  { city: "Istanbul", country: "Turkey", countryCode: "TR", airportCode: "IST", imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop", fromPrice: 2599, region: "europe", sortOrder: 7 },
  { city: "Athens", country: "Greece", countryCode: "GR", airportCode: "ATH", imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&h=300&fit=crop", fromPrice: 2799, region: "europe", sortOrder: 8 },
  { city: "Dublin", country: "Ireland", countryCode: "IE", airportCode: "DUB", imageUrl: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=400&h=300&fit=crop", fromPrice: 2399, region: "europe", sortOrder: 9 },
  { city: "Lisbon", country: "Portugal", countryCode: "PT", airportCode: "LIS", imageUrl: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=400&h=300&fit=crop", fromPrice: 2499, region: "europe", sortOrder: 10 },
  { city: "Madrid", country: "Spain", countryCode: "ES", airportCode: "MAD", imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop", fromPrice: 2449, region: "europe", sortOrder: 11 },
  { city: "Zurich", country: "Switzerland", countryCode: "CH", airportCode: "ZRH", imageUrl: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=300&fit=crop", fromPrice: 2899, region: "europe", sortOrder: 12 },

  // ── Asia (+4) ──
  { city: "Delhi", country: "India", countryCode: "IN", airportCode: "DEL", imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop", fromPrice: 3099, region: "asia", sortOrder: 6 },
  { city: "Shanghai", country: "China", countryCode: "CN", airportCode: "PVG", imageUrl: "https://images.unsplash.com/photo-1537531383496-f4749b885535?w=400&h=300&fit=crop", fromPrice: 3249, region: "asia", sortOrder: 7 },
  { city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", airportCode: "KUL", imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop", fromPrice: 3149, region: "asia", sortOrder: 8 },
  { city: "Taipei", country: "Taiwan", countryCode: "TW", airportCode: "TPE", imageUrl: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 9 },

  // ── Middle East (+2) ──
  { city: "Muscat", country: "Oman", countryCode: "OM", airportCode: "MCT", imageUrl: "https://images.unsplash.com/photo-1569551698874-8c818d32a0c4?w=400&h=300&fit=crop", fromPrice: 2899, region: "middle-east", sortOrder: 6 },
  { city: "Kuwait City", country: "Kuwait", countryCode: "KW", airportCode: "KWI", imageUrl: "https://images.unsplash.com/photo-1614101757495-cd37dff9df5d?w=400&h=300&fit=crop", fromPrice: 2799, region: "middle-east", sortOrder: 7 },

  // ── Africa (+2) ──
  { city: "Lagos", country: "Nigeria", countryCode: "NG", airportCode: "LOS", imageUrl: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=400&h=300&fit=crop", fromPrice: 3399, region: "africa", sortOrder: 6 },
  { city: "Addis Ababa", country: "Ethiopia", countryCode: "ET", airportCode: "ADD", imageUrl: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&h=300&fit=crop", fromPrice: 3299, region: "africa", sortOrder: 7 },

  // ── Oceania (+1) ──
  { city: "Bora Bora", country: "French Polynesia", countryCode: "PF", airportCode: "BOB", imageUrl: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400&h=300&fit=crop", fromPrice: 4499, region: "oceania", sortOrder: 6 },

  // ── Americas (+4) ──
  { city: "Toronto", country: "Canada", countryCode: "CA", airportCode: "YYZ", imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop", fromPrice: 1999, region: "americas", sortOrder: 6 },
  { city: "Lima", country: "Peru", countryCode: "PE", airportCode: "LIM", imageUrl: "https://images.unsplash.com/photo-1531968455001-5c5272a67c71?w=400&h=300&fit=crop", fromPrice: 2599, region: "americas", sortOrder: 7 },
  { city: "Bogota", country: "Colombia", countryCode: "CO", airportCode: "BOG", imageUrl: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=400&h=300&fit=crop", fromPrice: 2499, region: "americas", sortOrder: 8 },
  { city: "Punta Cana", country: "Dominican Republic", countryCode: "DO", airportCode: "PUJ", imageUrl: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=400&h=300&fit=crop", fromPrice: 1899, region: "americas", sortOrder: 9 },

  // ── Wave 3: Key 2nd cities ──

  // Europe (+5)
  { city: "Frankfurt", country: "Germany", countryCode: "DE", airportCode: "FRA", imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop", fromPrice: 2499, region: "europe", sortOrder: 13 },
  { city: "Nice", country: "France", countryCode: "FR", airportCode: "NCE", imageUrl: "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=400&h=300&fit=crop", fromPrice: 2699, region: "europe", sortOrder: 14 },
  { city: "Porto", country: "Portugal", countryCode: "PT", airportCode: "OPO", imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=300&fit=crop", fromPrice: 2399, region: "europe", sortOrder: 15 },
  { city: "Geneva", country: "Switzerland", countryCode: "CH", airportCode: "GVA", imageUrl: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=400&h=300&fit=crop", fromPrice: 2799, region: "europe", sortOrder: 16 },
  { city: "Manchester", country: "United Kingdom", countryCode: "GB", airportCode: "MAN", imageUrl: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=400&h=300&fit=crop", fromPrice: 2349, region: "europe", sortOrder: 17 },

  // Asia (+5)
  { city: "Osaka", country: "Japan", countryCode: "JP", airportCode: "KIX", imageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 10 },
  { city: "Mumbai", country: "India", countryCode: "IN", airportCode: "BOM", imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop", fromPrice: 3049, region: "asia", sortOrder: 11 },
  { city: "Beijing", country: "China", countryCode: "CN", airportCode: "PEK", imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 12 },
  { city: "Phuket", country: "Thailand", countryCode: "TH", airportCode: "HKT", imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&h=300&fit=crop", fromPrice: 3099, region: "asia", sortOrder: 13 },
  { city: "Jakarta", country: "Indonesia", countryCode: "ID", airportCode: "CGK", imageUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&h=300&fit=crop", fromPrice: 3299, region: "asia", sortOrder: 14 },

  // Middle East (+1)
  { city: "Jeddah", country: "Saudi Arabia", countryCode: "SA", airportCode: "JED", imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop", fromPrice: 2849, region: "middle-east", sortOrder: 8 },

  // Americas (+4)
  { city: "São Paulo", country: "Brazil", countryCode: "BR", airportCode: "GRU", imageUrl: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=400&h=300&fit=crop", fromPrice: 2699, region: "americas", sortOrder: 10 },
  { city: "Mexico City", country: "Mexico", countryCode: "MX", airportCode: "MEX", imageUrl: "https://images.unsplash.com/photo-1518659526054-190340b32735?w=400&h=300&fit=crop", fromPrice: 1799, region: "americas", sortOrder: 11 },
  { city: "Montreal", country: "Canada", countryCode: "CA", airportCode: "YUL", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop", fromPrice: 1949, region: "americas", sortOrder: 12 },
  { city: "Cartagena", country: "Colombia", countryCode: "CO", airportCode: "CTG", imageUrl: "https://images.unsplash.com/photo-1583531172005-814532673540?w=400&h=300&fit=crop", fromPrice: 2299, region: "americas", sortOrder: 13 },
];

async function main() {
  // Get existing airport codes to avoid duplicates
  const existing = await prisma.destination.findMany({ select: { airportCode: true } });
  const existingCodes = new Set(existing.map((d) => d.airportCode));

  const toInsert = newDestinations.filter((d) => !existingCodes.has(d.airportCode));

  if (toInsert.length === 0) {
    console.log("All 20 destinations already exist — nothing to insert.");
    return;
  }

  console.log(`Inserting ${toInsert.length} new destinations (${newDestinations.length - toInsert.length} already existed)...`);

  await prisma.destination.createMany({ data: toInsert });

  console.log(`✓ Created ${toInsert.length} new destinations`);
}

main()
  .catch((e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
