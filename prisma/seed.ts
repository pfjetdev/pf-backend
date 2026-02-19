import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import * as bcrypt from "bcryptjs";

const adapter = new PrismaNeon({
  connectionString: process.env.DIRECT_URL!,
});
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // 1. Agents
  const adminHash = await bcrypt.hash("admin123", 10);

  const agent1 = await prisma.agent.create({
    data: {
      name: "Alex Priority",
      email: "alex@priorityflyers.com",
      phone: "+1-800-555-0001",
      passwordHash: adminHash,
      role: "admin",
      isActive: true,
    },
  });

  const agent2 = await prisma.agent.create({
    data: {
      name: "Sarah Travel",
      email: "sarah@priorityflyers.com",
      phone: "+1-800-555-0002",
      passwordHash: adminHash,
      role: "agent",
      isActive: true,
    },
  });

  console.log(`✓ Agents: ${agent1.name}, ${agent2.name}`);

  // 2. Deals — 168 routes covering all destinations
  type DealRow = { slug: string; origin: string; originCode: string; destination: string; destinationCode: string; countryCode: string; cabinClass: string; publicFare: number; pfPrice: number; imageUrl: string; themeColor: string; sortOrder: number };
  const d = (origin: string, oc: string, dest: string, dc: string, cc: string, cabin: string, pub: number, pf: number, img = "", theme = ""): DealRow => ({
    slug: `${origin.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}-${dest.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
    origin, originCode: oc, destination: dest, destinationCode: dc, countryCode: cc, cabinClass: cabin, publicFare: pub, pfPrice: pf, imageUrl: img, themeColor: theme, sortOrder: 0,
  });
  const B = "Business Class", F = "First Class";

  const dealsData: DealRow[] = [
    // ── Original 8 featured deals (with images) ──
    d("New York","JFK","London","LHR","GB",B,8900,3200,"https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80","220 40% 25%"),
    d("Los Angeles","LAX","Tokyo","NRT","JP",B,9400,3800,"https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80","0 50% 30%"),
    d("New York","JFK","Paris","CDG","FR",B,7800,2900,"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80","240 30% 20%"),
    d("New York","JFK","Dubai","DXB","AE",F,14500,5800,"https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80","35 60% 25%"),
    d("Los Angeles","LAX","Sydney","SYD","AU",B,11200,4200,"https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&q=80","190 50% 25%"),
    d("San Francisco","SFO","Singapore","SIN","SG",B,8900,3400,"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80","150 40% 22%"),
    d("New York","JFK","Hong Kong","HKG","HK",B,10200,4100,"https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80","0 40% 25%"),
    d("Miami","MIA","São Paulo","GRU","BR",B,6400,2600,"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80","120 40% 22%"),

    // ═══ EUROPE ═══
    // London (8 new)
    d("Los Angeles","LAX","London","LHR","GB",F,14200,5800),
    d("Chicago","ORD","London","LHR","GB",B,8200,3100),
    d("San Francisco","SFO","London","LHR","GB",B,8500,3300),
    d("Miami","MIA","London","LHR","GB",B,7900,2900),
    d("Washington DC","IAD","London","LHR","GB",B,7600,2800),
    d("Dallas","DFW","London","LHR","GB",B,8400,3200),
    d("Boston","BOS","London","LHR","GB",F,13500,5500),
    d("Atlanta","ATL","London","LHR","GB",B,8100,3000),
    // Paris (8 new)
    d("Los Angeles","LAX","Paris","CDG","FR",F,13800,5600),
    d("Chicago","ORD","Paris","CDG","FR",F,14500,5900),
    d("San Francisco","SFO","Paris","CDG","FR",B,8300,3100),
    d("Miami","MIA","Paris","CDG","FR",B,7700,2800),
    d("Washington DC","IAD","Paris","CDG","FR",B,7400,2700),
    d("Boston","BOS","Paris","CDG","FR",B,7200,2600),
    d("Atlanta","ATL","Paris","CDG","FR",B,8000,3000),
    d("Dallas","DFW","Paris","CDG","FR",B,8600,3200),
    // Rome (6 new)
    d("New York","JFK","Rome","FCO","IT",F,15200,6200),
    d("Los Angeles","LAX","Rome","FCO","IT",B,8800,3400),
    d("Chicago","ORD","Rome","FCO","IT",B,8200,3100),
    d("Miami","MIA","Rome","FCO","IT",B,7900,2900),
    d("Washington DC","IAD","Rome","FCO","IT",B,8100,3000),
    d("Boston","BOS","Rome","FCO","IT",B,7600,2800),
    // Barcelona (5 new)
    d("New York","JFK","Barcelona","BCN","ES",F,13200,5400),
    d("Los Angeles","LAX","Barcelona","BCN","ES",B,8500,3200),
    d("Chicago","ORD","Barcelona","BCN","ES",B,8100,3000),
    d("Miami","MIA","Barcelona","BCN","ES",B,7400,2700),
    d("Washington DC","IAD","Barcelona","BCN","ES",B,7800,2900),
    // Amsterdam (6 new)
    d("New York","JFK","Amsterdam","AMS","NL",F,13800,5600),
    d("Los Angeles","LAX","Amsterdam","AMS","NL",B,8600,3300),
    d("Chicago","ORD","Amsterdam","AMS","NL",B,7800,2900),
    d("San Francisco","SFO","Amsterdam","AMS","NL",B,8900,3400),
    d("Washington DC","IAD","Amsterdam","AMS","NL",B,7500,2800),
    d("Atlanta","ATL","Amsterdam","AMS","NL",B,8200,3100),
    // Munich (5 new)
    d("New York","JFK","Munich","MUC","DE",F,14000,5700),
    d("Los Angeles","LAX","Munich","MUC","DE",B,8700,3300),
    d("Chicago","ORD","Munich","MUC","DE",B,7900,2900),
    d("Washington DC","IAD","Munich","MUC","DE",B,8100,3000),
    d("San Francisco","SFO","Munich","MUC","DE",B,9100,3500),

    // ═══ ASIA ═══
    // Tokyo (6 new)
    d("New York","JFK","Tokyo","NRT","JP",F,18500,7200),
    d("Chicago","ORD","Tokyo","NRT","JP",B,9800,3900),
    d("San Francisco","SFO","Tokyo","NRT","JP",F,17200,6800),
    d("Houston","IAH","Tokyo","NRT","JP",B,10400,4100),
    d("Dallas","DFW","Tokyo","NRT","JP",B,10200,4000),
    d("Seattle","SEA","Tokyo","NRT","JP",B,9200,3600),
    // Singapore (4 new)
    d("New York","JFK","Singapore","SIN","SG",F,19200,7500),
    d("Los Angeles","LAX","Singapore","SIN","SG",F,18500,7200),
    d("Houston","IAH","Singapore","SIN","SG",B,9800,3800),
    d("Seattle","SEA","Singapore","SIN","SG",B,9400,3600),
    // Bangkok (4 new)
    d("New York","JFK","Bangkok","BKK","TH",F,17800,7000),
    d("Los Angeles","LAX","Bangkok","BKK","TH",B,9200,3500),
    d("San Francisco","SFO","Bangkok","BKK","TH",B,9500,3700),
    d("Seattle","SEA","Bangkok","BKK","TH",B,9800,3800),
    // Hong Kong (4 new)
    d("Los Angeles","LAX","Hong Kong","HKG","HK",F,17500,6900),
    d("Chicago","ORD","Hong Kong","HKG","HK",B,10100,4000),
    d("San Francisco","SFO","Hong Kong","HKG","HK",B,9600,3700),
    d("Dallas","DFW","Hong Kong","HKG","HK",B,10800,4300),
    // Seoul (7 new)
    d("New York","JFK","Seoul","ICN","KR",F,18200,7100),
    d("Los Angeles","LAX","Seoul","ICN","KR",F,16800,6600),
    d("Chicago","ORD","Seoul","ICN","KR",B,9600,3700),
    d("San Francisco","SFO","Seoul","ICN","KR",B,9200,3500),
    d("Seattle","SEA","Seoul","ICN","KR",B,8800,3400),
    d("Atlanta","ATL","Seoul","ICN","KR",B,10200,4000),
    d("Dallas","DFW","Seoul","ICN","KR",B,10600,4200),
    // Bali (3 new)
    d("New York","JFK","Bali","DPS","ID",B,11200,4400),
    d("Los Angeles","LAX","Bali","DPS","ID",F,19500,7600),
    d("San Francisco","SFO","Bali","DPS","ID",B,10800,4200),

    // ═══ MIDDLE EAST ═══
    // Dubai (6 new)
    d("Los Angeles","LAX","Dubai","DXB","AE",F,16500,6500),
    d("Chicago","ORD","Dubai","DXB","AE",B,8800,3400),
    d("San Francisco","SFO","Dubai","DXB","AE",F,17200,6800),
    d("Washington DC","IAD","Dubai","DXB","AE",F,15800,6200),
    d("Houston","IAH","Dubai","DXB","AE",B,9200,3600),
    d("Dallas","DFW","Dubai","DXB","AE",B,9400,3700),
    // Abu Dhabi (4 new)
    d("New York","JFK","Abu Dhabi","AUH","AE",F,15200,6000),
    d("Los Angeles","LAX","Abu Dhabi","AUH","AE",B,8500,3300),
    d("Chicago","ORD","Abu Dhabi","AUH","AE",B,8800,3400),
    d("Washington DC","IAD","Abu Dhabi","AUH","AE",B,8200,3200),
    // Doha (6 new)
    d("New York","JFK","Doha","DOH","QA",F,16800,6600),
    d("Los Angeles","LAX","Doha","DOH","QA",F,17500,6900),
    d("Chicago","ORD","Doha","DOH","QA",B,9100,3500),
    d("Washington DC","IAD","Doha","DOH","QA",B,8600,3300),
    d("Houston","IAH","Doha","DOH","QA",B,9400,3700),
    d("Dallas","DFW","Doha","DOH","QA",B,9600,3800),
    // Tel Aviv (5 new)
    d("New York","JFK","Tel Aviv","TLV","IL",F,14500,5800),
    d("Los Angeles","LAX","Tel Aviv","TLV","IL",B,8900,3400),
    d("Miami","MIA","Tel Aviv","TLV","IL",B,8200,3100),
    d("Boston","BOS","Tel Aviv","TLV","IL",B,7800,2900),
    d("Washington DC","IAD","Tel Aviv","TLV","IL",B,8100,3100),
    // Amman (4 new)
    d("New York","JFK","Amman","AMM","JO",F,14200,5600),
    d("Chicago","ORD","Amman","AMM","JO",B,8400,3200),
    d("Washington DC","IAD","Amman","AMM","JO",B,7900,3000),
    d("Dallas","DFW","Amman","AMM","JO",B,8800,3400),
    // Riyadh (4 new)
    d("New York","JFK","Riyadh","RUH","SA",F,15500,6200),
    d("Los Angeles","LAX","Riyadh","RUH","SA",B,9200,3600),
    d("Washington DC","IAD","Riyadh","RUH","SA",B,8800,3400),
    d("Houston","IAH","Riyadh","RUH","SA",B,9500,3700),

    // ═══ AFRICA ═══
    // Cape Town (3 new)
    d("New York","JFK","Cape Town","CPT","ZA",F,17500,7000),
    d("Washington DC","IAD","Cape Town","CPT","ZA",B,10200,4200),
    d("Atlanta","ATL","Cape Town","CPT","ZA",B,9800,3900),
    // Marrakech (4 new)
    d("New York","JFK","Marrakech","RAK","MA",F,15500,6200),
    d("Los Angeles","LAX","Marrakech","RAK","MA",B,9200,3600),
    d("Miami","MIA","Marrakech","RAK","MA",B,8800,3400),
    d("Boston","BOS","Marrakech","RAK","MA",B,8400,3200),
    // Cairo (4 new)
    d("New York","JFK","Cairo","CAI","EG",F,16200,6500),
    d("Los Angeles","LAX","Cairo","CAI","EG",B,9500,3800),
    d("Chicago","ORD","Cairo","CAI","EG",B,9100,3500),
    d("Washington DC","IAD","Cairo","CAI","EG",B,8700,3400),
    // Nairobi (4 new)
    d("New York","JFK","Nairobi","NBO","KE",F,17200,6800),
    d("Washington DC","IAD","Nairobi","NBO","KE",B,10500,4300),
    d("Atlanta","ATL","Nairobi","NBO","KE",B,9800,3900),
    d("Houston","IAH","Nairobi","NBO","KE",B,10800,4400),
    // Johannesburg (4 new)
    d("New York","JFK","Johannesburg","JNB","ZA",F,16800,6700),
    d("Washington DC","IAD","Johannesburg","JNB","ZA",B,10200,4100),
    d("Atlanta","ATL","Johannesburg","JNB","ZA",B,9600,3800),
    d("Houston","IAH","Johannesburg","JNB","ZA",B,10500,4200),
    // Casablanca (4 new)
    d("New York","JFK","Casablanca","CMN","MA",F,14800,5900),
    d("Miami","MIA","Casablanca","CMN","MA",B,8500,3300),
    d("Boston","BOS","Casablanca","CMN","MA",B,8200,3100),
    d("Washington DC","IAD","Casablanca","CMN","MA",B,8600,3400),

    // ═══ OCEANIA ═══
    // Sydney (4 new)
    d("New York","JFK","Sydney","SYD","AU",F,22500,8800),
    d("San Francisco","SFO","Sydney","SYD","AU",F,21000,8200),
    d("Dallas","DFW","Sydney","SYD","AU",B,12800,5100),
    d("Houston","IAH","Sydney","SYD","AU",B,13200,5300),
    // Melbourne (4 new)
    d("New York","JFK","Melbourne","MEL","AU",F,23000,9000),
    d("Los Angeles","LAX","Melbourne","MEL","AU",B,11800,4600),
    d("San Francisco","SFO","Melbourne","MEL","AU",B,12200,4800),
    d("Dallas","DFW","Melbourne","MEL","AU",B,13500,5400),
    // Auckland (4 new)
    d("New York","JFK","Auckland","AKL","NZ",B,13200,5200),
    d("Los Angeles","LAX","Auckland","AKL","NZ",F,22000,8600),
    d("San Francisco","SFO","Auckland","AKL","NZ",B,12500,4900),
    d("Houston","IAH","Auckland","AKL","NZ",B,14200,5600),
    // Fiji (2 new)
    d("Los Angeles","LAX","Fiji","NAN","FJ",B,10500,4200),
    d("San Francisco","SFO","Fiji","NAN","FJ",B,10800,4300),
    // Queenstown (2 new)
    d("Los Angeles","LAX","Queenstown","ZQN","NZ",B,13500,5400),
    d("San Francisco","SFO","Queenstown","ZQN","NZ",B,13800,5500),
    // Perth (2 new)
    d("Los Angeles","LAX","Perth","PER","AU",B,12200,4800),
    d("San Francisco","SFO","Perth","PER","AU",B,12500,5000),

    // ═══ AMERICAS ═══
    // Cancun (7 new)
    d("New York","JFK","Cancun","CUN","MX",F,10500,4200),
    d("Los Angeles","LAX","Cancun","CUN","MX",B,5800,2200),
    d("Chicago","ORD","Cancun","CUN","MX",B,5200,1900),
    d("Miami","MIA","Cancun","CUN","MX",B,4800,1800),
    d("Dallas","DFW","Cancun","CUN","MX",B,5100,1900),
    d("Houston","IAH","Cancun","CUN","MX",B,5000,1850),
    d("Atlanta","ATL","Cancun","CUN","MX",B,5400,2000),
    // Rio de Janeiro (6 new)
    d("New York","JFK","Rio de Janeiro","GIG","BR",F,12500,5000),
    d("Miami","MIA","Rio de Janeiro","GIG","BR",B,6800,2600),
    d("Washington DC","IAD","Rio de Janeiro","GIG","BR",B,7200,2800),
    d("Atlanta","ATL","Rio de Janeiro","GIG","BR",B,7500,2900),
    d("Houston","IAH","Rio de Janeiro","GIG","BR",B,7800,3000),
    d("Dallas","DFW","Rio de Janeiro","GIG","BR",B,8100,3100),
    // Buenos Aires (6 new)
    d("New York","JFK","Buenos Aires","EZE","AR",F,13200,5300),
    d("Miami","MIA","Buenos Aires","EZE","AR",B,7200,2800),
    d("Washington DC","IAD","Buenos Aires","EZE","AR",B,7600,2900),
    d("Atlanta","ATL","Buenos Aires","EZE","AR",B,7900,3100),
    d("Houston","IAH","Buenos Aires","EZE","AR",B,8200,3200),
    d("Dallas","DFW","Buenos Aires","EZE","AR",B,8500,3300),
    // Vancouver (5 new)
    d("New York","JFK","Vancouver","YVR","CA",F,11200,4500),
    d("Los Angeles","LAX","Vancouver","YVR","CA",B,5200,2000),
    d("San Francisco","SFO","Vancouver","YVR","CA",B,4800,1850),
    d("Chicago","ORD","Vancouver","YVR","CA",B,5600,2100),
    d("Seattle","SEA","Vancouver","YVR","CA",B,4200,1700),

    // ═══ WAVE 2: NEW DESTINATIONS (~99 deals) ═══

    // Milan (5)
    d("New York","JFK","Milan","MXP","IT",F,14800,6000),
    d("Los Angeles","LAX","Milan","MXP","IT",B,8600,3300),
    d("Chicago","ORD","Milan","MXP","IT",B,8100,3000),
    d("Miami","MIA","Milan","MXP","IT",B,7700,2800),
    d("Boston","BOS","Milan","MXP","IT",B,7400,2700),
    // Istanbul (6)
    d("New York","JFK","Istanbul","IST","TR",F,13500,5400),
    d("Los Angeles","LAX","Istanbul","IST","TR",B,8800,3400),
    d("Chicago","ORD","Istanbul","IST","TR",B,8400,3200),
    d("Washington DC","IAD","Istanbul","IST","TR",B,7900,3000),
    d("Atlanta","ATL","Istanbul","IST","TR",B,8200,3100),
    d("Houston","IAH","Istanbul","IST","TR",B,8600,3300),
    // Athens (5)
    d("New York","JFK","Athens","ATH","GR",F,14200,5700),
    d("Los Angeles","LAX","Athens","ATH","GR",B,9100,3500),
    d("Chicago","ORD","Athens","ATH","GR",B,8600,3300),
    d("Miami","MIA","Athens","ATH","GR",B,8200,3100),
    d("Boston","BOS","Athens","ATH","GR",B,7800,2900),
    // Dublin (5)
    d("New York","JFK","Dublin","DUB","IE",F,12800,5200),
    d("Los Angeles","LAX","Dublin","DUB","IE",B,8200,3100),
    d("Chicago","ORD","Dublin","DUB","IE",B,7600,2800),
    d("Boston","BOS","Dublin","DUB","IE",B,6800,2500),
    d("Washington DC","IAD","Dublin","DUB","IE",B,7200,2700),
    // Lisbon (5)
    d("New York","JFK","Lisbon","LIS","PT",F,13000,5300),
    d("Los Angeles","LAX","Lisbon","LIS","PT",B,8400,3200),
    d("Miami","MIA","Lisbon","LIS","PT",B,7800,2900),
    d("Boston","BOS","Lisbon","LIS","PT",B,7200,2600),
    d("Washington DC","IAD","Lisbon","LIS","PT",B,7600,2800),
    // Madrid (6)
    d("New York","JFK","Madrid","MAD","ES",F,13400,5500),
    d("Los Angeles","LAX","Madrid","MAD","ES",B,8500,3200),
    d("Chicago","ORD","Madrid","MAD","ES",B,8100,3000),
    d("Miami","MIA","Madrid","MAD","ES",B,7500,2800),
    d("Washington DC","IAD","Madrid","MAD","ES",B,7800,2900),
    d("Dallas","DFW","Madrid","MAD","ES",B,8700,3300),
    // Zurich (5)
    d("New York","JFK","Zurich","ZRH","CH",F,14500,5900),
    d("Los Angeles","LAX","Zurich","ZRH","CH",B,9000,3400),
    d("Chicago","ORD","Zurich","ZRH","CH",B,8400,3200),
    d("Washington DC","IAD","Zurich","ZRH","CH",B,8200,3100),
    d("San Francisco","SFO","Zurich","ZRH","CH",B,9200,3500),
    // Delhi (6)
    d("New York","JFK","Delhi","DEL","IN",F,18800,7400),
    d("Los Angeles","LAX","Delhi","DEL","IN",B,10200,4000),
    d("Chicago","ORD","Delhi","DEL","IN",B,9800,3800),
    d("San Francisco","SFO","Delhi","DEL","IN",B,10500,4100),
    d("Houston","IAH","Delhi","DEL","IN",B,10800,4300),
    d("Washington DC","IAD","Delhi","DEL","IN",B,9600,3700),
    // Shanghai (5)
    d("New York","JFK","Shanghai","PVG","CN",F,17500,6900),
    d("Los Angeles","LAX","Shanghai","PVG","CN",B,9400,3600),
    d("Chicago","ORD","Shanghai","PVG","CN",B,9800,3800),
    d("San Francisco","SFO","Shanghai","PVG","CN",B,9100,3500),
    d("Seattle","SEA","Shanghai","PVG","CN",B,8800,3400),
    // Kuala Lumpur (4)
    d("New York","JFK","Kuala Lumpur","KUL","MY",F,18200,7200),
    d("Los Angeles","LAX","Kuala Lumpur","KUL","MY",B,9600,3700),
    d("San Francisco","SFO","Kuala Lumpur","KUL","MY",B,9800,3800),
    d("Seattle","SEA","Kuala Lumpur","KUL","MY",B,9400,3600),
    // Taipei (5)
    d("New York","JFK","Taipei","TPE","TW",F,17800,7000),
    d("Los Angeles","LAX","Taipei","TPE","TW",B,9200,3500),
    d("San Francisco","SFO","Taipei","TPE","TW",B,9000,3400),
    d("Seattle","SEA","Taipei","TPE","TW",B,8600,3300),
    d("Chicago","ORD","Taipei","TPE","TW",B,9600,3700),
    // Muscat (4)
    d("New York","JFK","Muscat","MCT","OM",F,15500,6100),
    d("Los Angeles","LAX","Muscat","MCT","OM",B,9200,3600),
    d("Washington DC","IAD","Muscat","MCT","OM",B,8800,3400),
    d("Houston","IAH","Muscat","MCT","OM",B,9500,3700),
    // Kuwait City (4)
    d("New York","JFK","Kuwait City","KWI","KW",F,15200,6000),
    d("Los Angeles","LAX","Kuwait City","KWI","KW",B,9000,3500),
    d("Washington DC","IAD","Kuwait City","KWI","KW",B,8500,3300),
    d("Houston","IAH","Kuwait City","KWI","KW",B,9200,3600),
    // Lagos (5)
    d("New York","JFK","Lagos","LOS","NG",F,16500,6600),
    d("Washington DC","IAD","Lagos","LOS","NG",B,10200,4100),
    d("Atlanta","ATL","Lagos","LOS","NG",B,9800,3900),
    d("Houston","IAH","Lagos","LOS","NG",B,10500,4200),
    d("Dallas","DFW","Lagos","LOS","NG",B,10800,4300),
    // Addis Ababa (4)
    d("New York","JFK","Addis Ababa","ADD","ET",F,16200,6400),
    d("Washington DC","IAD","Addis Ababa","ADD","ET",B,10500,4200),
    d("Atlanta","ATL","Addis Ababa","ADD","ET",B,9800,3900),
    d("Houston","IAH","Addis Ababa","ADD","ET",B,10800,4300),
    // Bora Bora (3)
    d("Los Angeles","LAX","Bora Bora","BOB","PF",F,18500,7200),
    d("San Francisco","SFO","Bora Bora","BOB","PF",B,11800,4700),
    d("Houston","IAH","Bora Bora","BOB","PF",B,13200,5300),
    // Toronto (6)
    d("New York","JFK","Toronto","YYZ","CA",F,10800,4300),
    d("Los Angeles","LAX","Toronto","YYZ","CA",B,5600,2100),
    d("Chicago","ORD","Toronto","YYZ","CA",B,4800,1800),
    d("Miami","MIA","Toronto","YYZ","CA",B,5200,2000),
    d("Dallas","DFW","Toronto","YYZ","CA",B,5800,2200),
    d("Atlanta","ATL","Toronto","YYZ","CA",B,5400,2000),
    // Lima (5)
    d("New York","JFK","Lima","LIM","PE",F,12200,4900),
    d("Los Angeles","LAX","Lima","LIM","PE",B,6800,2600),
    d("Miami","MIA","Lima","LIM","PE",B,6200,2400),
    d("Houston","IAH","Lima","LIM","PE",B,7200,2800),
    d("Dallas","DFW","Lima","LIM","PE",B,7500,2900),
    // Bogota (5)
    d("New York","JFK","Bogota","BOG","CO",F,11800,4700),
    d("Miami","MIA","Bogota","BOG","CO",B,5800,2200),
    d("Washington DC","IAD","Bogota","BOG","CO",B,6400,2500),
    d("Atlanta","ATL","Bogota","BOG","CO",B,6200,2400),
    d("Houston","IAH","Bogota","BOG","CO",B,6800,2600),
    // Punta Cana (6)
    d("New York","JFK","Punta Cana","PUJ","DO",F,10200,4100),
    d("Los Angeles","LAX","Punta Cana","PUJ","DO",B,5800,2200),
    d("Miami","MIA","Punta Cana","PUJ","DO",B,4600,1750),
    d("Chicago","ORD","Punta Cana","PUJ","DO",B,5200,1950),
    d("Atlanta","ATL","Punta Cana","PUJ","DO",B,5000,1900),
    d("Boston","BOS","Punta Cana","PUJ","DO",B,4800,1800),

    // ═══ WAVE 3: 2nd cities ═══
    // Frankfurt (5)
    d("New York","JFK","Frankfurt","FRA","DE",F,13800,5600),
    d("Los Angeles","LAX","Frankfurt","FRA","DE",B,8500,3200),
    d("Chicago","ORD","Frankfurt","FRA","DE",B,7800,2900),
    d("Washington DC","IAD","Frankfurt","FRA","DE",B,7500,2800),
    d("San Francisco","SFO","Frankfurt","FRA","DE",B,8800,3400),
    // Nice (4)
    d("New York","JFK","Nice","NCE","FR",F,14200,5800),
    d("Los Angeles","LAX","Nice","NCE","FR",B,8800,3400),
    d("Miami","MIA","Nice","NCE","FR",B,8200,3100),
    d("Boston","BOS","Nice","NCE","FR",B,7600,2800),
    // Porto (3)
    d("New York","JFK","Porto","OPO","PT",F,12600,5100),
    d("Boston","BOS","Porto","OPO","PT",B,7100,2600),
    d("Miami","MIA","Porto","OPO","PT",B,7800,2900),
    // Geneva (4)
    d("New York","JFK","Geneva","GVA","CH",F,14200,5800),
    d("Los Angeles","LAX","Geneva","GVA","CH",B,8900,3400),
    d("Chicago","ORD","Geneva","GVA","CH",B,8300,3100),
    d("Washington DC","IAD","Geneva","GVA","CH",B,8100,3000),
    // Manchester (4)
    d("New York","JFK","Manchester","MAN","GB",F,13200,5300),
    d("Chicago","ORD","Manchester","MAN","GB",B,7900,2900),
    d("Boston","BOS","Manchester","MAN","GB",B,7200,2700),
    d("Atlanta","ATL","Manchester","MAN","GB",B,8100,3000),
    // Osaka (4)
    d("New York","JFK","Osaka","KIX","JP",F,18200,7100),
    d("Los Angeles","LAX","Osaka","KIX","JP",B,9200,3600),
    d("San Francisco","SFO","Osaka","KIX","JP",B,8800,3400),
    d("Seattle","SEA","Osaka","KIX","JP",B,8500,3300),
    // Mumbai (5)
    d("New York","JFK","Mumbai","BOM","IN",F,18500,7300),
    d("Los Angeles","LAX","Mumbai","BOM","IN",B,10400,4100),
    d("Chicago","ORD","Mumbai","BOM","IN",B,9900,3900),
    d("San Francisco","SFO","Mumbai","BOM","IN",B,10200,4000),
    d("Houston","IAH","Mumbai","BOM","IN",B,10600,4200),
    // Beijing (4)
    d("New York","JFK","Beijing","PEK","CN",F,17200,6800),
    d("Los Angeles","LAX","Beijing","PEK","CN",B,9200,3500),
    d("San Francisco","SFO","Beijing","PEK","CN",B,8900,3400),
    d("Chicago","ORD","Beijing","PEK","CN",B,9600,3700),
    // Phuket (3)
    d("Los Angeles","LAX","Phuket","HKT","TH",F,17800,7000),
    d("San Francisco","SFO","Phuket","HKT","TH",B,9800,3800),
    d("Seattle","SEA","Phuket","HKT","TH",B,10200,4000),
    // Jakarta (4)
    d("New York","JFK","Jakarta","CGK","ID",F,19200,7500),
    d("Los Angeles","LAX","Jakarta","CGK","ID",B,10800,4300),
    d("San Francisco","SFO","Jakarta","CGK","ID",B,10500,4100),
    d("Seattle","SEA","Jakarta","CGK","ID",B,10200,4000),
    // Jeddah (4)
    d("New York","JFK","Jeddah","JED","SA",F,15800,6300),
    d("Los Angeles","LAX","Jeddah","JED","SA",B,9400,3700),
    d("Washington DC","IAD","Jeddah","JED","SA",B,9000,3500),
    d("Houston","IAH","Jeddah","JED","SA",B,9600,3800),
    // São Paulo (4)
    d("New York","JFK","São Paulo","GRU","BR",F,12800,5100),
    d("Los Angeles","LAX","São Paulo","GRU","BR",B,7200,2800),
    d("Washington DC","IAD","São Paulo","GRU","BR",B,7500,2900),
    d("Atlanta","ATL","São Paulo","GRU","BR",B,7800,3000),
    // Mexico City (5)
    d("New York","JFK","Mexico City","MEX","MX",F,10800,4300),
    d("Los Angeles","LAX","Mexico City","MEX","MX",B,5400,2000),
    d("Chicago","ORD","Mexico City","MEX","MX",B,5100,1900),
    d("Miami","MIA","Mexico City","MEX","MX",B,4800,1800),
    d("Dallas","DFW","Mexico City","MEX","MX",B,4600,1750),
    // Montreal (4)
    d("New York","JFK","Montreal","YUL","CA",F,10200,4100),
    d("Chicago","ORD","Montreal","YUL","CA",B,4900,1850),
    d("Boston","BOS","Montreal","YUL","CA",B,4200,1600),
    d("Miami","MIA","Montreal","YUL","CA",B,5200,2000),
    // Cartagena (3)
    d("New York","JFK","Cartagena","CTG","CO",F,11500,4600),
    d("Miami","MIA","Cartagena","CTG","CO",B,5600,2100),
    d("Atlanta","ATL","Cartagena","CTG","CO",B,6200,2400),
  ];

  await prisma.deal.createMany({ data: dealsData, skipDuplicates: true });
  console.log(`✓ Deals: ${dealsData.length}`);

  // 3. Destinations
  const destinationsData = [
    // Europe
    { city: "London", country: "United Kingdom", countryCode: "GB", airportCode: "LHR", imageUrl: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop", fromPrice: 2499, region: "europe", sortOrder: 0 },
    { city: "Paris", country: "France", countryCode: "FR", airportCode: "CDG", imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=300&fit=crop", fromPrice: 2399, region: "europe", sortOrder: 1 },
    { city: "Rome", country: "Italy", countryCode: "IT", airportCode: "FCO", imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=300&fit=crop", fromPrice: 2599, region: "europe", sortOrder: 2 },
    { city: "Barcelona", country: "Spain", countryCode: "ES", airportCode: "BCN", imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=300&fit=crop", fromPrice: 2299, region: "europe", sortOrder: 3 },
    { city: "Amsterdam", country: "Netherlands", countryCode: "NL", airportCode: "AMS", imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=400&h=300&fit=crop", fromPrice: 2449, region: "europe", sortOrder: 4 },
    { city: "Munich", country: "Germany", countryCode: "DE", airportCode: "MUC", imageUrl: "https://images.unsplash.com/photo-1595867818082-083862f3d630?w=400&h=300&fit=crop", fromPrice: 2549, region: "europe", sortOrder: 5 },
    { city: "Milan", country: "Italy", countryCode: "IT", airportCode: "MXP", imageUrl: "https://images.unsplash.com/photo-1520440229-6469a149ac59?w=400&h=300&fit=crop", fromPrice: 2699, region: "europe", sortOrder: 6 },
    { city: "Istanbul", country: "Turkey", countryCode: "TR", airportCode: "IST", imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=400&h=300&fit=crop", fromPrice: 2599, region: "europe", sortOrder: 7 },
    { city: "Athens", country: "Greece", countryCode: "GR", airportCode: "ATH", imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=400&h=300&fit=crop", fromPrice: 2799, region: "europe", sortOrder: 8 },
    { city: "Dublin", country: "Ireland", countryCode: "IE", airportCode: "DUB", imageUrl: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=400&h=300&fit=crop", fromPrice: 2399, region: "europe", sortOrder: 9 },
    { city: "Lisbon", country: "Portugal", countryCode: "PT", airportCode: "LIS", imageUrl: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=400&h=300&fit=crop", fromPrice: 2499, region: "europe", sortOrder: 10 },
    { city: "Madrid", country: "Spain", countryCode: "ES", airportCode: "MAD", imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=400&h=300&fit=crop", fromPrice: 2449, region: "europe", sortOrder: 11 },
    { city: "Zurich", country: "Switzerland", countryCode: "CH", airportCode: "ZRH", imageUrl: "https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=300&fit=crop", fromPrice: 2899, region: "europe", sortOrder: 12 },
    { city: "Frankfurt", country: "Germany", countryCode: "DE", airportCode: "FRA", imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=400&h=300&fit=crop", fromPrice: 2499, region: "europe", sortOrder: 13 },
    { city: "Nice", country: "France", countryCode: "FR", airportCode: "NCE", imageUrl: "https://images.unsplash.com/photo-1491166617655-0723a0999cfc?w=400&h=300&fit=crop", fromPrice: 2699, region: "europe", sortOrder: 14 },
    { city: "Porto", country: "Portugal", countryCode: "PT", airportCode: "OPO", imageUrl: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=400&h=300&fit=crop", fromPrice: 2399, region: "europe", sortOrder: 15 },
    { city: "Geneva", country: "Switzerland", countryCode: "CH", airportCode: "GVA", imageUrl: "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=400&h=300&fit=crop", fromPrice: 2799, region: "europe", sortOrder: 16 },
    { city: "Manchester", country: "United Kingdom", countryCode: "GB", airportCode: "MAN", imageUrl: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?w=400&h=300&fit=crop", fromPrice: 2349, region: "europe", sortOrder: 17 },
    // Asia
    { city: "Tokyo", country: "Japan", countryCode: "JP", airportCode: "NRT", imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=300&fit=crop", fromPrice: 3299, region: "asia", sortOrder: 0 },
    { city: "Singapore", country: "Singapore", countryCode: "SG", airportCode: "SIN", imageUrl: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 1 },
    { city: "Bangkok", country: "Thailand", countryCode: "TH", airportCode: "BKK", imageUrl: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=300&fit=crop", fromPrice: 2899, region: "asia", sortOrder: 2 },
    { city: "Hong Kong", country: "Hong Kong", countryCode: "HK", airportCode: "HKG", imageUrl: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=400&h=300&fit=crop", fromPrice: 3099, region: "asia", sortOrder: 3 },
    { city: "Seoul", country: "South Korea", countryCode: "KR", airportCode: "ICN", imageUrl: "https://images.unsplash.com/photo-1534274867514-d5b47ef89ed7?w=400&h=300&fit=crop", fromPrice: 3149, region: "asia", sortOrder: 4 },
    { city: "Bali", country: "Indonesia", countryCode: "ID", airportCode: "DPS", imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop", fromPrice: 2999, region: "asia", sortOrder: 5 },
    { city: "Delhi", country: "India", countryCode: "IN", airportCode: "DEL", imageUrl: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=300&fit=crop", fromPrice: 3099, region: "asia", sortOrder: 6 },
    { city: "Shanghai", country: "China", countryCode: "CN", airportCode: "PVG", imageUrl: "https://images.unsplash.com/photo-1537531383496-f4749b885535?w=400&h=300&fit=crop", fromPrice: 3249, region: "asia", sortOrder: 7 },
    { city: "Kuala Lumpur", country: "Malaysia", countryCode: "MY", airportCode: "KUL", imageUrl: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop", fromPrice: 3149, region: "asia", sortOrder: 8 },
    { city: "Taipei", country: "Taiwan", countryCode: "TW", airportCode: "TPE", imageUrl: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 9 },
    { city: "Osaka", country: "Japan", countryCode: "JP", airportCode: "KIX", imageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 10 },
    { city: "Mumbai", country: "India", countryCode: "IN", airportCode: "BOM", imageUrl: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=300&fit=crop", fromPrice: 3049, region: "asia", sortOrder: 11 },
    { city: "Beijing", country: "China", countryCode: "CN", airportCode: "PEK", imageUrl: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=400&h=300&fit=crop", fromPrice: 3199, region: "asia", sortOrder: 12 },
    { city: "Phuket", country: "Thailand", countryCode: "TH", airportCode: "HKT", imageUrl: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=400&h=300&fit=crop", fromPrice: 3099, region: "asia", sortOrder: 13 },
    { city: "Jakarta", country: "Indonesia", countryCode: "ID", airportCode: "CGK", imageUrl: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=400&h=300&fit=crop", fromPrice: 3299, region: "asia", sortOrder: 14 },
    // Middle East
    { city: "Dubai", country: "UAE", countryCode: "AE", airportCode: "DXB", imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop", fromPrice: 2799, region: "middle-east", sortOrder: 0 },
    { city: "Abu Dhabi", country: "UAE", countryCode: "AE", airportCode: "AUH", imageUrl: "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?w=400&h=300&fit=crop", fromPrice: 2699, region: "middle-east", sortOrder: 1 },
    { city: "Doha", country: "Qatar", countryCode: "QA", airportCode: "DOH", imageUrl: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?w=400&h=300&fit=crop", fromPrice: 2849, region: "middle-east", sortOrder: 2 },
    { city: "Tel Aviv", country: "Israel", countryCode: "IL", airportCode: "TLV", imageUrl: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&h=300&fit=crop", fromPrice: 2599, region: "middle-east", sortOrder: 3 },
    { city: "Amman", country: "Jordan", countryCode: "JO", airportCode: "AMM", imageUrl: "https://images.unsplash.com/photo-1580834341580-8c17a3a630ca?w=400&h=300&fit=crop", fromPrice: 2449, region: "middle-east", sortOrder: 4 },
    { city: "Riyadh", country: "Saudi Arabia", countryCode: "SA", airportCode: "RUH", imageUrl: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=400&h=300&fit=crop", fromPrice: 2749, region: "middle-east", sortOrder: 5 },
    { city: "Muscat", country: "Oman", countryCode: "OM", airportCode: "MCT", imageUrl: "https://images.unsplash.com/photo-1569551698874-8c818d32a0c4?w=400&h=300&fit=crop", fromPrice: 2899, region: "middle-east", sortOrder: 6 },
    { city: "Kuwait City", country: "Kuwait", countryCode: "KW", airportCode: "KWI", imageUrl: "https://images.unsplash.com/photo-1614101757495-cd37dff9df5d?w=400&h=300&fit=crop", fromPrice: 2799, region: "middle-east", sortOrder: 7 },
    { city: "Jeddah", country: "Saudi Arabia", countryCode: "SA", airportCode: "JED", imageUrl: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?w=400&h=300&fit=crop", fromPrice: 2849, region: "middle-east", sortOrder: 8 },
    // Africa
    { city: "Cape Town", country: "South Africa", countryCode: "ZA", airportCode: "CPT", imageUrl: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=300&fit=crop", fromPrice: 3499, region: "africa", sortOrder: 0 },
    { city: "Marrakech", country: "Morocco", countryCode: "MA", airportCode: "RAK", imageUrl: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=400&h=300&fit=crop", fromPrice: 2399, region: "africa", sortOrder: 1 },
    { city: "Cairo", country: "Egypt", countryCode: "EG", airportCode: "CAI", imageUrl: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=400&h=300&fit=crop", fromPrice: 2299, region: "africa", sortOrder: 2 },
    { city: "Nairobi", country: "Kenya", countryCode: "KE", airportCode: "NBO", imageUrl: "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=400&h=300&fit=crop", fromPrice: 3199, region: "africa", sortOrder: 3 },
    { city: "Johannesburg", country: "South Africa", countryCode: "ZA", airportCode: "JNB", imageUrl: "https://images.unsplash.com/photo-1577948000111-9c970dfe3743?w=400&h=300&fit=crop", fromPrice: 3299, region: "africa", sortOrder: 4 },
    { city: "Casablanca", country: "Morocco", countryCode: "MA", airportCode: "CMN", imageUrl: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=400&h=300&fit=crop", fromPrice: 2199, region: "africa", sortOrder: 5 },
    { city: "Lagos", country: "Nigeria", countryCode: "NG", airportCode: "LOS", imageUrl: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=400&h=300&fit=crop", fromPrice: 3399, region: "africa", sortOrder: 6 },
    { city: "Addis Ababa", country: "Ethiopia", countryCode: "ET", airportCode: "ADD", imageUrl: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=400&h=300&fit=crop", fromPrice: 3299, region: "africa", sortOrder: 7 },
    // Oceania
    { city: "Sydney", country: "Australia", countryCode: "AU", airportCode: "SYD", imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=300&fit=crop", fromPrice: 3699, region: "oceania", sortOrder: 0 },
    { city: "Melbourne", country: "Australia", countryCode: "AU", airportCode: "MEL", imageUrl: "https://images.unsplash.com/photo-1514395462725-fb4566210144?w=400&h=300&fit=crop", fromPrice: 3599, region: "oceania", sortOrder: 1 },
    { city: "Auckland", country: "New Zealand", countryCode: "NZ", airportCode: "AKL", imageUrl: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=400&h=300&fit=crop", fromPrice: 3799, region: "oceania", sortOrder: 2 },
    { city: "Fiji", country: "Fiji", countryCode: "FJ", airportCode: "NAN", imageUrl: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=400&h=300&fit=crop", fromPrice: 3499, region: "oceania", sortOrder: 3 },
    { city: "Queenstown", country: "New Zealand", countryCode: "NZ", airportCode: "ZQN", imageUrl: "https://images.unsplash.com/photo-1589871973318-9ca1258faa5d?w=400&h=300&fit=crop", fromPrice: 3899, region: "oceania", sortOrder: 4 },
    { city: "Perth", country: "Australia", countryCode: "AU", airportCode: "PER", imageUrl: "https://images.unsplash.com/photo-1573935448851-d3c46e0aee4b?w=400&h=300&fit=crop", fromPrice: 3449, region: "oceania", sortOrder: 5 },
    { city: "Bora Bora", country: "French Polynesia", countryCode: "PF", airportCode: "BOB", imageUrl: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=400&h=300&fit=crop", fromPrice: 4499, region: "oceania", sortOrder: 6 },
    // Americas
    { city: "New York", country: "USA", countryCode: "US", airportCode: "JFK", imageUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=300&fit=crop", fromPrice: 1899, region: "americas", sortOrder: 0 },
    { city: "Miami", country: "USA", countryCode: "US", airportCode: "MIA", imageUrl: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&h=300&fit=crop", fromPrice: 1799, region: "americas", sortOrder: 1 },
    { city: "Cancun", country: "Mexico", countryCode: "MX", airportCode: "CUN", imageUrl: "https://images.unsplash.com/photo-1552074284-5e88ef1aef18?w=400&h=300&fit=crop", fromPrice: 1699, region: "americas", sortOrder: 2 },
    { city: "Rio de Janeiro", country: "Brazil", countryCode: "BR", airportCode: "GIG", imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&h=300&fit=crop", fromPrice: 2899, region: "americas", sortOrder: 3 },
    { city: "Buenos Aires", country: "Argentina", countryCode: "AR", airportCode: "EZE", imageUrl: "https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=400&h=300&fit=crop", fromPrice: 2799, region: "americas", sortOrder: 4 },
    { city: "Vancouver", country: "Canada", countryCode: "CA", airportCode: "YVR", imageUrl: "https://images.unsplash.com/photo-1559511260-66a68e582973?w=400&h=300&fit=crop", fromPrice: 2099, region: "americas", sortOrder: 5 },
    { city: "Toronto", country: "Canada", countryCode: "CA", airportCode: "YYZ", imageUrl: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=300&fit=crop", fromPrice: 1999, region: "americas", sortOrder: 6 },
    { city: "Lima", country: "Peru", countryCode: "PE", airportCode: "LIM", imageUrl: "https://images.unsplash.com/photo-1531968455001-5c5272a67c71?w=400&h=300&fit=crop", fromPrice: 2599, region: "americas", sortOrder: 7 },
    { city: "Bogota", country: "Colombia", countryCode: "CO", airportCode: "BOG", imageUrl: "https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=400&h=300&fit=crop", fromPrice: 2499, region: "americas", sortOrder: 8 },
    { city: "Punta Cana", country: "Dominican Republic", countryCode: "DO", airportCode: "PUJ", imageUrl: "https://images.unsplash.com/photo-1580237072617-771c3ecc4a24?w=400&h=300&fit=crop", fromPrice: 1899, region: "americas", sortOrder: 9 },
    { city: "São Paulo", country: "Brazil", countryCode: "BR", airportCode: "GRU", imageUrl: "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=400&h=300&fit=crop", fromPrice: 2699, region: "americas", sortOrder: 10 },
    { city: "Mexico City", country: "Mexico", countryCode: "MX", airportCode: "MEX", imageUrl: "https://images.unsplash.com/photo-1518659526054-190340b32735?w=400&h=300&fit=crop", fromPrice: 1799, region: "americas", sortOrder: 11 },
    { city: "Montreal", country: "Canada", countryCode: "CA", airportCode: "YUL", imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=300&fit=crop", fromPrice: 1949, region: "americas", sortOrder: 12 },
    { city: "Cartagena", country: "Colombia", countryCode: "CO", airportCode: "CTG", imageUrl: "https://images.unsplash.com/photo-1583531172005-814532673540?w=400&h=300&fit=crop", fromPrice: 2299, region: "americas", sortOrder: 13 },
  ];

  await prisma.destination.createMany({ data: destinationsData });
  console.log(`✓ Destinations: ${destinationsData.length}`);

  // 4. Airlines
  const airlinesData = [
    { name: "Emirates", slug: "emirates", iataCode: "EK", alliance: null, hubCity: "Dubai", routeCodes: ["DXB", "AUH"], description: "Emirates is the world's largest international airline, renowned for its luxurious First Class private suites with shower spas, award-winning Business Class lie-flat seats, and exceptional onboard service. Hub in Dubai connects over 150 destinations worldwide.", logoUrl: "/airlines/emirates.svg", imageUrl: "https://images.unsplash.com/photo-1540339832862-474599807836?w=600&q=80", featuredRoute: "Dubai · First & Business", savingPercent: 60, sortOrder: 0 },
    { name: "Qatar Airways", slug: "qatar-airways", iataCode: "QR", alliance: "oneworld", hubCity: "Doha", routeCodes: ["DOH"], description: "Qatar Airways' revolutionary QSuites Business Class features the world's first double bed in business class, with privacy doors and a social dining concept. Consistently voted World's Best Business Class at the Skytrax Awards.", logoUrl: "/airlines/Qatar Airways.svg", imageUrl: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=600&q=80", featuredRoute: "Doha · QSuites Business", savingPercent: 55, sortOrder: 1 },
    { name: "Singapore Airlines", slug: "singapore-airlines", iataCode: "SQ", alliance: "star-alliance", hubCity: "Singapore", routeCodes: ["SIN"], description: "Singapore Airlines sets the standard for premium air travel with its legendary Singapore Suites — featuring a separate bed and armchair in a private cabin. Their Business Class offers fully-flat beds with direct aisle access on every seat.", logoUrl: "/airlines/Singapore Airlines.svg", imageUrl: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?w=600&q=80", featuredRoute: "Singapore · Suites & Business", savingPercent: 50, sortOrder: 2 },
    { name: "Turkish Airlines", slug: "turkish-airlines", iataCode: "TK", alliance: "star-alliance", hubCity: "Istanbul", routeCodes: ["IST"], description: "Turkish Airlines flies to more countries than any other airline, with Istanbul as a strategic hub connecting East and West. Their Business Class features fully-flat beds, award-winning cuisine by Flying Chefs, and access to the world's best airport lounge.", logoUrl: "/airlines/Turkish Airlines.svg", imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=600&q=80", featuredRoute: "Istanbul · Business Class", savingPercent: 45, sortOrder: 3 },
    { name: "Air France", slug: "air-france", iataCode: "AF", alliance: "skyteam", hubCity: "Paris", routeCodes: ["CDG"], description: "Air France's La Première (First Class) is one of the most exclusive products in the sky, with just 4 private suites per aircraft. Their Business Class features lie-flat seats in a 1-2-1 configuration with French haute cuisine and premium Champagne.", logoUrl: "/airlines/Air France.svg", imageUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=600&q=80", featuredRoute: "Paris · La Première & Business", savingPercent: 50, sortOrder: 4 },
    { name: "Cathay Pacific", slug: "cathay-pacific", iataCode: "CX", alliance: "oneworld", hubCity: "Hong Kong", routeCodes: ["HKG"], description: "Cathay Pacific is Asia's premier carrier with award-winning Business Class reverse herringbone seats offering direct aisle access, exceptional dim sum and Asian fusion cuisine, and seamless connections through Hong Kong's world-class airport.", logoUrl: "/airlines/Cathay Pacific.svg", imageUrl: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80", featuredRoute: "Hong Kong · Business Class", savingPercent: 55, sortOrder: 5 },
    { name: "Korean Air", slug: "korean-air", iataCode: "KE", alliance: "skyteam", hubCity: "Seoul", routeCodes: ["ICN"], description: "Korean Air's Prestige Suite Business Class features a fully enclosed private suite with a sliding door, lie-flat bed, and 24-inch entertainment screen. First Class offers Kosmo Suites with luxury amenities and Korean BBQ served at your seat.", logoUrl: "/airlines/Korean Air.svg", imageUrl: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=600&q=80", featuredRoute: "Seoul · Prestige Suite", savingPercent: 50, sortOrder: 6 },
    { name: "Japan Airlines", slug: "japan-airlines", iataCode: "JL", alliance: "oneworld", hubCity: "Tokyo", routeCodes: ["NRT"], description: "Japan Airlines combines legendary Japanese hospitality with cutting-edge cabin design. Their First Class features JAL Suites with a 23-inch screen and full-course kaiseki meals, while Business Class offers Sky Suites III with privacy doors.", logoUrl: "/airlines/Japan Airlines.svg", imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80", featuredRoute: "Tokyo · First & Business", savingPercent: 45, sortOrder: 7 },
    { name: "All Nippon Airways", slug: "all-nippon-airways", iataCode: "NH", alliance: "star-alliance", hubCity: "Tokyo", routeCodes: ["NRT"], description: "ANA's The Room Business Class is one of the most innovative products in the sky — a fully enclosed suite with a door, offering the largest Business Class seat in the industry. Their First Class Square features a spacious private cabin with luxury Japanese dining.", logoUrl: "/airlines/All Nippon Airways.svg", imageUrl: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80", featuredRoute: "Tokyo · The Room Business", savingPercent: 50, sortOrder: 8 },
    { name: "Hainan Airlines", slug: "hainan-airlines", iataCode: "HU", alliance: null, hubCity: "Beijing", routeCodes: ["PEK"], description: "Hainan Airlines is China's only Skytrax 5-Star airline, offering exceptional Business Class with reverse herringbone lie-flat seats, premium Chinese and Western cuisine, and competitive pricing on transpacific routes.", logoUrl: "/airlines/Hainan Airlines.svg", imageUrl: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80", featuredRoute: "Beijing · Business Class", savingPercent: 45, sortOrder: 9 },
  ];

  await prisma.airline.createMany({ data: airlinesData });
  console.log(`✓ Airlines: ${airlinesData.length}`);

  // 5. Blog Posts
  const blogPostsData = [
    {
      slug: "best-business-class-2025",
      title: "The 10 Best Business Class Cabins to Fly in 2025",
      excerpt: "From Qatar's revolutionary QSuites to Singapore Airlines' new A350 product, we reveal the ultimate business class experiences.",
      imageUrl: "https://images.unsplash.com/photo-1540339832862-474599807836?w=800&q=80",
      category: "airline-reviews",
      authorName: "James Mitchell",
      authorRole: "Travel Expert",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      readTime: "8 min read",
      isTrending: true,
      isPublished: true,
      publishedAt: new Date("2025-01-15"),
    },
    {
      slug: "emirates-first-class-review",
      title: "Emirates First Class: Is the $15,000 Ticket Worth It?",
      excerpt: "We tested Emirates' legendary First Class suite with shower spa, onboard bar, and caviar service. Here's our verdict.",
      imageUrl: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80",
      category: "flight-reviews",
      authorName: "Sarah Chen",
      authorRole: "Flight Reviewer",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      readTime: "12 min read",
      isTrending: false,
      isPublished: true,
      publishedAt: new Date("2025-01-12"),
    },
    {
      slug: "travel-hacks-premium-flights",
      title: "7 Insider Secrets to Book Premium Flights for Less",
      excerpt: "Learn the strategies travel agents use to find unpublished fares and save up to 60% on business class tickets.",
      imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
      category: "travel-tips",
      authorName: "Michael Torres",
      authorRole: "Travel Tips Editor",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      readTime: "6 min read",
      isTrending: true,
      isPublished: true,
      publishedAt: new Date("2025-01-10"),
    },
    {
      slug: "first-class-lounges-guide",
      title: "The Ultimate Guide to First Class Airport Lounges",
      excerpt: "From private terminals to à la carte dining — discover the world's most exclusive airport lounges and how to access them.",
      imageUrl: "https://images.unsplash.com/photo-1583418007992-a8e33a92e7b4?w=800&q=80",
      category: "lounges",
      authorName: "Emma Thompson",
      authorRole: "Lounge Reviewer",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      readTime: "10 min read",
      isTrending: false,
      isPublished: true,
      publishedAt: new Date("2025-01-08"),
    },
    {
      slug: "business-class-vs-first-class",
      title: "Business Class vs First Class: Is the Upgrade Really Worth It?",
      excerpt: "A thorough comparison of business class and first class — from seats and dining to lounges and price gaps — to help you decide where your money is best spent.",
      content: `<h2>The Million-Dollar Question at 40,000 Feet</h2>
<p>You have already decided to fly premium. The days of cramming into economy for a 14-hour red-eye are behind you. But now comes the next dilemma: <strong>do you book business class, or go all the way to first?</strong></p>
<p>It is a question we hear from Priority Flyers clients every single day. And the honest answer is not always what you would expect. First class is not automatically "better" for every traveler on every route. Sometimes business class delivers 90% of the experience at half the cost. Other times, that first class upgrade is worth every penny.</p>
<p>Let us break it down, category by category, so you can make a genuinely informed decision.</p>

<h2>Seat and Space: Lie-Flat vs Private Suite</h2>
<p>This is where the gap has narrowed dramatically in recent years. Modern business class seats on top-tier airlines are fully lie-flat, typically 20-22 inches wide, and arranged in a 1-2-1 configuration that gives every passenger direct aisle access. On carriers like Qatar Airways (QSuites), ANA (The Room), and Japan Airlines (Sky Suite III), you get closing privacy doors that effectively create a mini-suite.</p>
<p>First class takes this further. Think enclosed suites with floor-to-ceiling walls, separate seating and sleeping areas, and beds that stretch to 80 inches or longer. Emirates' First Class suites on the 777 include virtual windows for middle seats. Singapore Airlines Suites on the A380 feature a standalone double bed — arguably the most luxurious seat in commercial aviation.</p>
<blockquote>The real question is not whether first class seats are bigger — they are. The question is whether the incremental space justifies the incremental cost.</blockquote>
<p><strong>The verdict on seats:</strong> If your airline offers a door-equipped business class product (QSuites, ANA The Room, Delta One Suites), the comfort gap between business and first shrinks significantly. If your airline still operates an open-plan business class, the jump to first is more dramatic.</p>

<h2>Dining: Excellent vs Extraordinary</h2>
<p>Business class dining on premium carriers is genuinely impressive. Multi-course meals, dine-on-demand service, real chinaware, and wine lists curated by sommeliers. Qatar Airways serves dishes created by celebrity chefs. Japan Airlines offers traditional kaiseki cuisine. Cathay Pacific's dim sum at 40,000 feet is a revelation.</p>
<p>First class elevates this to restaurant-level theater. Emirates serves unlimited caviar with Dom Perignon. Singapore Airlines partners with a rotating roster of Michelin-starred chefs. Lufthansa First Class features a dedicated onboard chef who prepares your meal to order. Air France La Premiere offers a full gastronomic experience with vintage Champagnes dating back decades.</p>
<ul>
<li><strong>Business Class:</strong> Pre-set multi-course menu with 2-3 choices per course, premium wine selection, dine-on-demand on most carriers</li>
<li><strong>First Class:</strong> A la carte ordering, unlimited premium Champagne, caviar service, onboard chefs on select airlines, restaurant-quality presentation</li>
</ul>
<p>For most travelers, business class dining is more than sufficient — and on many airlines, it is genuinely outstanding. First class dining is for those who consider the gastronomic experience a core part of the journey.</p>

<h2>Service Level: Attentive vs Bespoke</h2>
<p>In business class, you will typically share a cabin crew member with 6-8 other passengers. Service is professional, responsive, and polished. Flight attendants remember your name and your drink preference.</p>
<p>In first class, the ratio drops to 1:2 or even 1:1 on some airlines. Service becomes deeply personalized. On Emirates First, your cabin steward introduces themselves by name and provides a direct-dial number to call from your suite. On Singapore Suites, attendants are trained to anticipate needs before you voice them. Etihad's former Residence product (the three-room apartment on the A380) came with a personal butler.</p>

<h2>Lounge Access: Premium vs Ultra-Premium</h2>
<p>Business class tickets grant access to the airline's business class lounge. On carriers like Qatar Airways (Al Mourjan), Turkish Airlines (Istanbul Lounge), and Cathay Pacific (The Pier), these are world-class spaces with hot buffets, cocktail bars, shower suites, and quiet rooms.</p>
<p>First class unlocks an entirely different tier. Emirates has dedicated First Class terminals with private chauffeur transfers. Lufthansa's First Class Terminal in Frankfurt offers a personal assistant, a la carte restaurant, and a limousine ride directly to the aircraft steps. Air France's La Premiere lounge at CDG is an intimate salon with personalized service.</p>
<ul>
<li><strong>Business lounges:</strong> Buffet dining, premium drinks, showers, business facilities</li>
<li><strong>First class lounges:</strong> A la carte dining, vintage wines, spa treatments, private suites, chauffeur transfers to the gate</li>
</ul>

<h2>The Price Gap: What Are You Actually Paying?</h2>
<p>Here is where the math gets interesting. On most long-haul routes, first class costs <strong>2 to 3 times more</strong> than business class. A New York to London business class ticket might run $5,000-$8,000 at published fares, while first class on the same route costs $12,000-$20,000.</p>
<p>Through Priority Flyers, our clients typically save 40-60% on both cabins. That means a business class fare of $3,000-$4,000 versus a first class fare of $6,000-$10,000. The gap is still substantial — but the absolute numbers become much more approachable.</p>
<p><strong>Key consideration:</strong> On some routes, the price difference between a discounted business class fare and a published first class fare can be $8,000-$12,000. That is an entire additional trip in business class.</p>

<h2>When First Class Is Worth It</h2>
<ul>
<li><strong>Ultra-long-haul flights (14+ hours):</strong> Routes like New York to Singapore (18.5 hours) or Los Angeles to Sydney (15+ hours) are where first class truly shines. The extra space and sleep quality make a tangible difference on arrival.</li>
<li><strong>Special occasions:</strong> Honeymoons, milestone birthdays, anniversary trips — sometimes the experience itself is the point.</li>
<li><strong>Airlines with a massive gap between cabins:</strong> Emirates, Singapore Airlines, and Lufthansa have first class products that are light-years ahead of their own business class. The upgrade is dramatic.</li>
<li><strong>When the price is right:</strong> Through services like Priority Flyers, first class fares can sometimes approach published business class prices. When that happens, the upgrade is a no-brainer.</li>
</ul>

<h2>When Business Class Is the Smart Choice</h2>
<ul>
<li><strong>Short-to-medium haul flights (under 10 hours):</strong> On a 7-hour transatlantic flight, you will barely notice the difference between a lie-flat business seat and a first class suite.</li>
<li><strong>Airlines where business class is already exceptional:</strong> Qatar QSuites, ANA The Room, and Japan Airlines Sky Suite III already offer enclosed suites with doors. Paying double for first class on these carriers offers diminishing returns.</li>
<li><strong>Frequent travelers:</strong> If you fly premium 10-20 times a year, business class is the rational choice. The cumulative savings fund additional trips.</li>
<li><strong>Route competition drives quality up:</strong> On routes like New York to London, so many carriers compete that business class products are at an all-time high. You get outstanding value without stepping up to first.</li>
</ul>

<h2>Airlines Where Business Class Rivals Others' First</h2>
<p>Not all cabins are created equal. Some airlines have invested so heavily in their business class products that they rival — or even surpass — the first class offerings of competitors:</p>
<ul>
<li><strong>Qatar Airways QSuites:</strong> Private suites with doors, the world's first double bed in business class, exceptional dining</li>
<li><strong>ANA The Room:</strong> The widest business class seat in the industry, fully enclosed with a door, superb Japanese service</li>
<li><strong>Japan Airlines Sky Suite III:</strong> Privacy doors, herringbone layout, impeccable kaiseki dining</li>
<li><strong>Delta One Suites:</strong> Enclosed suites with doors on the A350, competitive with many first class products</li>
<li><strong>Cathay Pacific Aria Suite:</strong> Their newest business class product features a closed-door suite with a 24-inch screen</li>
</ul>

<h2>The Verdict</h2>
<p>For most travelers, most of the time, <strong>business class on a top-tier airline is the sweet spot</strong>. You get a lie-flat bed, outstanding food, premium lounge access, and arrive rested and ready. The price-to-experience ratio is hard to beat.</p>
<p>First class earns its premium on ultra-long-haul flights, with airlines that offer a dramatically differentiated product, and for special occasions where the journey is part of the celebration.</p>
<p>The smartest move? <strong>Work with a specialist like Priority Flyers</strong> who can find you unpublished fares in either cabin. When first class is priced within reach of published business class fares, you get the best of both worlds — without the usual sticker shock.</p>`,
      imageUrl: "https://images.unsplash.com/photo-1540339832862-474599807836?w=800&q=80",
      category: "travel-tips",
      authorName: "James Mitchell",
      authorRole: "Senior Travel Editor",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
      readTime: "10 min read",
      isTrending: true,
      isPublished: true,
      publishedAt: new Date("2025-01-20"),
    },
    {
      slug: "best-destinations-business-class-2025",
      title: "Top 10 Destinations to Fly Business Class in 2025",
      excerpt: "These are the destinations where business class makes the biggest difference — long flights, incredible carriers, and massive savings through Priority Flyers.",
      content: `<h2>Where Business Class Transforms the Journey</h2>
<p>Not every route demands a premium cabin. A two-hour shuttle from New York to Chicago? Economy is fine. But there are destinations where the flight itself is so long, so grueling, or so perfectly served by outstanding carriers that business class stops being a luxury and starts being a strategy.</p>
<p>These are the 10 destinations in 2025 where flying business class makes the most profound difference — and where Priority Flyers clients are seeing the biggest savings.</p>

<h2>1. Tokyo, Japan</h2>
<h3>Flight time: 13-14 hours from the US West Coast | 14-15 hours from the East Coast</h3>
<p>Tokyo tops this list for a reason. The flight is long enough that a lie-flat seat is not a luxury — it is the difference between arriving functional and arriving destroyed. But more than that, the Japanese carriers serving this route are among the finest in the world.</p>
<p><strong>ANA's The Room</strong> on the 777-300ER is arguably the single best business class seat flying today: a fully enclosed suite with a door, 24-inch screen, and the widest business class bed in the industry. <strong>Japan Airlines' Sky Suite III</strong> offers herringbone seats with privacy doors and exquisite kaiseki dining that rivals Michelin-starred restaurants on the ground.</p>
<ul>
<li><strong>Best airlines:</strong> ANA (The Room), Japan Airlines (Sky Suite III), Singapore Airlines (via SIN)</li>
<li><strong>Typical published fare:</strong> $9,200-$10,400 round trip</li>
<li><strong>Priority Flyers price:</strong> From $3,600 — savings of up to 60%</li>
</ul>
<p>Tokyo in business class is not just comfortable — it is a cultural preview. The Japanese hospitality begins the moment you board.</p>

<h2>2. Dubai, UAE</h2>
<h3>Flight time: 12-14 hours from the US East Coast | 16 hours from the West Coast</h3>
<p>Dubai is the spiritual home of luxury aviation. <strong>Emirates</strong> and <strong>Etihad</strong> have turned the flight to the Gulf into a destination experience in itself. Emirates Business Class features a fully flat seat, onboard bar and lounge on the A380, and a multi-course meal service that would hold its own in any fine-dining restaurant. Etihad's Business Studios offer a separate seat and bed in a private forward-facing suite.</p>
<p>The competition between these two carriers keeps the product constantly evolving and — crucially for our clients — keeps pricing competitive when you know where to look.</p>
<ul>
<li><strong>Best airlines:</strong> Emirates (A380 Business), Etihad (Business Studios)</li>
<li><strong>Typical published fare:</strong> $8,800-$9,400 round trip</li>
<li><strong>Priority Flyers price:</strong> From $3,400 — savings of up to 55%</li>
</ul>

<h2>3. Singapore</h2>
<h3>Flight time: 18.5 hours nonstop from Newark | 17-19 hours from the West Coast</h3>
<p>The world's longest flight (Newark to Singapore on Singapore Airlines) is the ultimate test case for premium travel. At nearly 19 hours in the air, this is one route where business class is not optional — it is essential.</p>
<p><strong>Singapore Airlines Business Class</strong> on the A350 ULR features lie-flat beds in a 1-2-1 layout with direct aisle access, a generous meal service timed to your destination's clock, and the legendary SQ service standard. Plus, Singapore itself offers a compelling <strong>free stopover program</strong> — up to two complimentary nights in a hotel when you transit through Changi.</p>
<ul>
<li><strong>Best airlines:</strong> Singapore Airlines (A350 ULR nonstop), ANA/JAL (via Tokyo)</li>
<li><strong>Typical published fare:</strong> $8,900-$9,800 round trip</li>
<li><strong>Priority Flyers price:</strong> From $3,400 — savings of up to 60%</li>
</ul>

<h2>4. London, United Kingdom</h2>
<h3>Flight time: 7-8 hours from the US East Coast</h3>
<p>London may be a shorter flight, but it is arguably the <strong>best value business class route in the world</strong>. Here is why: more airlines compete on the New York-London corridor than almost any other route on the planet. British Airways, Virgin Atlantic, American Airlines, Delta, United, JetBlue Mint — the competition is relentless, and it drives both product quality and pricing in the right direction.</p>
<p>JetBlue Mint offers lie-flat suites with closing doors at a fraction of legacy carrier prices. British Airways' Club Suite on the A350 features a 1-2-1 configuration with privacy doors. Virgin Atlantic Upper Class combines a great seat with the legendary Clubhouse lounge at Heathrow.</p>
<ul>
<li><strong>Best airlines:</strong> British Airways (Club Suite), Virgin Atlantic (Upper Class), JetBlue (Mint)</li>
<li><strong>Typical published fare:</strong> $7,600-$8,900 round trip</li>
<li><strong>Priority Flyers price:</strong> From $2,800 — savings of up to 55%</li>
</ul>

<h2>5. Maldives</h2>
<h3>Flight time: 16-20 hours (with connection via Dubai, Doha, or Singapore)</h3>
<p>Nobody flies to the Maldives for a weekend. This is a once-in-a-lifetime trip for most travelers, and the journey involves at least one connection — typically through Dubai, Doha, or Singapore — followed by a seaplane transfer to your resort.</p>
<p>Arriving exhausted to paradise defeats the purpose. Business class on Emirates via Dubai or Qatar Airways via Doha means you step off the plane refreshed, with a full night's sleep behind you, ready to appreciate those overwater villas from the moment you land.</p>
<ul>
<li><strong>Best airlines:</strong> Emirates (via Dubai), Qatar Airways (via Doha), Singapore Airlines (via Singapore)</li>
<li><strong>Typical published fare:</strong> $9,000-$12,000 round trip</li>
<li><strong>Priority Flyers price:</strong> From $4,200 — savings of up to 55%</li>
</ul>

<h2>6. Sydney, Australia</h2>
<h3>Flight time: 15-20+ hours depending on routing</h3>
<p>Sydney is the ultimate endurance route. Whether you fly the 20-hour Qantas nonstop from New York (launching on the Project Sunrise 787-9) or connect through Los Angeles, Dallas, or a Pacific hub, you are looking at a <strong>minimum of 15 hours in the air</strong>.</p>
<p>On a flight this long, the difference between economy and business class is not incremental — it is transformational. Qantas Business on the 787 features a Thompson Vantage XL seat in a 1-2-1 layout. United's Polaris is another strong option via San Francisco or Houston.</p>
<ul>
<li><strong>Best airlines:</strong> Qantas (787 Business), United (Polaris), Cathay Pacific (via Hong Kong)</li>
<li><strong>Typical published fare:</strong> $11,200-$13,200 round trip</li>
<li><strong>Priority Flyers price:</strong> From $4,200 — savings of up to 60%</li>
</ul>

<h2>7. Cape Town, South Africa</h2>
<h3>Flight time: 15-17 hours from the US East Coast</h3>
<p>Cape Town is one of the world's most spectacular cities, but the overnight flight from the US is a genuine test of endurance. Most routing goes through Doha, Dubai, or Addis Ababa, with total journey times of 17-22 hours.</p>
<p>Qatar Airways via Doha is the standout option — you get QSuites on both the transatlantic and onward legs, turning the journey into two separate premium experiences. South African Airways offers a direct Johannesburg connection, and Ethiopian Airlines via Addis Ababa is an increasingly competitive option.</p>
<ul>
<li><strong>Best airlines:</strong> Qatar Airways (via Doha), Emirates (via Dubai), Delta/SAA (via Johannesburg)</li>
<li><strong>Typical published fare:</strong> $9,800-$10,500 round trip</li>
<li><strong>Priority Flyers price:</strong> From $3,900 — savings of up to 55%</li>
</ul>

<h2>8. Bangkok, Thailand</h2>
<h3>Flight time: 17-20 hours from the US</h3>
<p>Bangkok is Southeast Asia's most visited city, and the flight from the US is punishingly long through any gateway. <strong>Thai Airways Royal Silk Business Class</strong> is the classic choice — staggered lie-flat seats, exceptional Thai cuisine, and that signature warmth of Thai hospitality that begins the moment you step into the cabin.</p>
<p>For connections, Qatar Airways via Doha and Singapore Airlines via Singapore both offer outstanding business class products with efficient routing into Bangkok's Suvarnabhumi Airport.</p>
<ul>
<li><strong>Best airlines:</strong> Thai Airways (Royal Silk), Singapore Airlines (via SIN), Qatar Airways (via DOH)</li>
<li><strong>Typical published fare:</strong> $9,200-$9,800 round trip</li>
<li><strong>Priority Flyers price:</strong> From $3,500 — savings of up to 60%</li>
</ul>

<h2>9. Doha, Qatar</h2>
<h3>Flight time: 12-14 hours from the US East Coast</h3>
<p>Doha is not just a destination — it is the world's most strategic connecting hub. From Hamad International Airport, Qatar Airways' sprawling network fans out to 150+ destinations across Africa, Asia, and the Indian subcontinent. But the real reason Doha makes this list is <strong>QSuites</strong>.</p>
<p>Qatar Airways' QSuites Business Class is, by almost every objective measure, the best business class product in the world. Private suites with closing doors, the industry's first double bed in business class, a social dining concept, and Diptyque amenity kits. It has won the Skytrax World's Best Business Class award seven times.</p>
<ul>
<li><strong>Best airlines:</strong> Qatar Airways (QSuites — there is really only one choice here)</li>
<li><strong>Typical published fare:</strong> $8,600-$9,600 round trip</li>
<li><strong>Priority Flyers price:</strong> From $3,300 — savings of up to 60%</li>
</ul>
<blockquote>Pro tip: Use Doha as a connecting point to the Maldives, Seychelles, Sri Lanka, or East Africa — and enjoy QSuites on both legs.</blockquote>

<h2>10. Paris, France</h2>
<h3>Flight time: 7-8 hours from the US East Coast</h3>
<p>Paris rounds out our list not because the flight is long, but because <strong>Air France La Premiere</strong> represents one of the most aspirational first class products in the world — and even Air France's business class punches well above its weight.</p>
<p>Air France Business Class on the 777-300ER features reverse herringbone lie-flat seats in a 1-2-1 layout, French cuisine paired with a curated wine and Champagne list, and access to the elegant Air France lounge at CDG. For those who want to splurge, La Premiere offers just four private suites per aircraft, with a dedicated lounge featuring personalized dining by Michelin-starred chefs.</p>
<ul>
<li><strong>Best airlines:</strong> Air France (Business / La Premiere), Delta (via partnership), United (Polaris)</li>
<li><strong>Typical published fare:</strong> $7,400-$8,600 round trip</li>
<li><strong>Priority Flyers price:</strong> From $2,700 — savings of up to 55%</li>
</ul>

<h2>How Priority Flyers Saves You Thousands</h2>
<p>Every destination on this list features published business class fares that most travelers consider out of reach. The retail price for a round-trip business class ticket to Tokyo, Sydney, or Singapore easily exceeds $10,000.</p>
<p>Our team specializes in finding unpublished fares, consolidator rates, and strategic routing options that bring these prices down by <strong>40-60%</strong>. That means the same lie-flat bed, the same Champagne, the same lounge access — at prices that make business class a practical choice rather than an extravagance.</p>
<ul>
<li><strong>Average savings per booking:</strong> $3,000-$7,000</li>
<li><strong>No membership fees or hidden charges</strong></li>
<li><strong>Dedicated travel consultant for every booking</strong></li>
<li><strong>Flexible changes and 24/7 support</strong></li>
</ul>
<p>Ready to fly business class to any of these destinations in 2025? <strong>Contact Priority Flyers today</strong> for a free quote and discover how much you could save on your next premium flight.</p>`,
      imageUrl: "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
      category: "destinations",
      authorName: "Sarah Chen",
      authorRole: "Destinations Editor",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      readTime: "12 min read",
      isTrending: true,
      isPublished: true,
      publishedAt: new Date("2025-01-22"),
    },
  ];

  await prisma.blogPost.createMany({ data: blogPostsData });
  console.log(`✓ Blog Posts: ${blogPostsData.length}`);

  // 6. Testimonials
  const testimonialsData = [
    { name: "James Mitchell", role: "CEO", location: "New York, USA", rating: 5, text: "Saved over $3,000 on my flight to Tokyo. The lie-flat seat was confirmed before I even paid. Exceptional service from start to finish.", sortOrder: 0 },
    { name: "Sarah Chen", role: "Investment Banker", location: "London, UK", rating: 5, text: "I fly Business Class monthly for work. Priority Flyers consistently beats every price I find. Their 24/7 support is a lifesaver.", sortOrder: 1 },
    { name: "Michael Torres", role: "Entrepreneur", location: "Miami, USA", rating: 5, text: "Booked First Class to Dubai for my honeymoon at half the retail price. The lounge access and fast track made the experience perfect.", sortOrder: 2 },
    { name: "Emma Thompson", role: "Creative Director", location: "Sydney, Australia", rating: 5, text: "Finally, a service that understands premium travel. Changed my flight twice with no hassle. Will never book directly again.", sortOrder: 3 },
    { name: "David Park", role: "Tech Executive", location: "San Francisco, USA", rating: 5, text: "My assistant now uses Priority Flyers for all my corporate travel. The savings add up to tens of thousands per year.", sortOrder: 4 },
    { name: "Isabella Romano", role: "Fashion Designer", location: "Milan, Italy", rating: 5, text: "The personal touch is what sets them apart. My consultant remembers my preferences and always finds the best options.", sortOrder: 5 },
  ];

  await prisma.testimonial.createMany({ data: testimonialsData });
  console.log(`✓ Testimonials: ${testimonialsData.length}`);

  // 7. Site Settings
  await prisma.siteSetting.createMany({
    data: [
      { key: "ab_test_enabled", value: "true" },
      { key: "ab_default_variant", value: "A" },
      { key: "homepage_ab_test_enabled", value: "true" },
      { key: "homepage_ab_default_variant", value: "A" },
      // Flight generator config
      { key: "flight_result_count", value: "8" },
      { key: "flight_price_economy", value: "300,1200" },
      { key: "flight_price_premium", value: "800,2500" },
      { key: "flight_price_business", value: "2200,7000" },
      { key: "flight_price_first", value: "5500,15000" },
      { key: "flight_markup_economy", value: "1.05,1.15" },
      { key: "flight_markup_premium", value: "1.10,1.25" },
      { key: "flight_markup_business", value: "1.20,1.50" },
      { key: "flight_markup_first", value: "1.25,1.60" },
      { key: "flight_seats_range", value: "1,7" },
      // Route price factors
      { key: "flight_route_factor_domestic_us", value: "0.30" },
      { key: "flight_route_factor_intra_europe", value: "0.25" },
      { key: "flight_route_factor_short_haul", value: "0.30" },
      { key: "flight_route_factor_transatlantic", value: "1.00" },
      { key: "flight_route_factor_us_middle_east", value: "1.20" },
      { key: "flight_route_factor_us_east_asia", value: "1.30" },
      { key: "flight_route_factor_us_south_asia", value: "1.35" },
      { key: "flight_route_factor_europe_east_asia", value: "1.10" },
      { key: "flight_route_factor_long_haul", value: "1.00" },
      // Stop discounts
      { key: "flight_stop_discount_nonstop", value: "1.00" },
      { key: "flight_stop_discount_one_stop", value: "0.82" },
      { key: "flight_stop_discount_two_stops", value: "0.70" },
      // Codeshare
      { key: "flight_codeshare_probability", value: "0.15" },
      // Seats per cabin
      { key: "flight_seats_economy", value: "3,9" },
      { key: "flight_seats_premium", value: "2,6" },
      { key: "flight_seats_business", value: "2,5" },
      { key: "flight_seats_first", value: "1,3" },
    ],
    skipDuplicates: true,
  });
  console.log(`✓ Site Settings: 31`);

  console.log("\n✅ Seed complete!");
  console.log(`   Agents: 2`);
  console.log(`   Deals: ${dealsData.length}`);
  console.log(`   Destinations: ${destinationsData.length}`);
  console.log(`   Airlines: ${airlinesData.length}`);
  console.log(`   Blog Posts: ${blogPostsData.length}`);
  console.log(`   Testimonials: ${testimonialsData.length}`);
  console.log(`   Site Settings: 31`);
  console.log(`   Leads: 0 (empty)`);
  console.log(`   Beat My Price: 0 (empty)`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
