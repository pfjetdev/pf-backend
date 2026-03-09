import type { SEOContent } from './catalog.types';

export function getDealsHomeSEO(): SEOContent {
  return {
    title: 'Premium Business & First Class Flight Deals',
    intro: 'Priority Flyers specializes in finding heavily discounted business class and first class airfares that are typically unavailable to the general public. Our team of fare experts monitors thousands of routes daily to secure savings of up to 70% off published fares from major airlines worldwide.',
    blocks: [
      {
        heading: 'How We Find These Deals',
        text: 'Our proprietary fare search technology combined with deep airline industry relationships allows us to access consolidator fares, mistake fares, and special promotional rates. Every deal is verified and bookable — we handle the entire process from quote to ticketing, so you can focus on planning your trip.',
      },
      {
        heading: 'Why Book Premium Cabin Through Us',
        text: 'Business class and first class tickets purchased through Priority Flyers come with the same benefits as tickets bought directly from the airline — full frequent flyer miles, lounge access, priority boarding, and flexible change policies. The only difference is the price. Our clients regularly save thousands of dollars per ticket on routes across Europe, Asia, the Middle East, Africa, Oceania, and the Americas.',
      },
    ],
    faqs: [
      { question: 'How much can I save on business class flights?', answer: 'Our clients typically save between 30% and 70% off published business class and first class fares. The exact savings depend on the route, airline, travel dates, and cabin class. On popular long-haul routes, savings of $2,000–$5,000 per ticket are common.' },
      { question: 'Are these real airline tickets?', answer: 'Yes, absolutely. Every ticket we sell is a genuine airline ticket issued directly through the airline\'s ticketing system. You receive the same seat, service, lounge access, and frequent flyer miles as any other business class passenger.' },
      { question: 'How does the booking process work?', answer: 'Simply fill out our quote request form with your travel details. Our fare experts will search for the best available options and respond within 30 minutes during business hours. Once you approve a fare, we handle ticketing and send your confirmation directly.' },
      { question: 'What airlines do you work with?', answer: 'We work with all major international airlines including Emirates, Qatar Airways, Singapore Airlines, Cathay Pacific, British Airways, Lufthansa, Air France, ANA, Japan Airlines, Turkish Airlines, and many more. We can find deals on virtually any airline that offers premium cabin service.' },
      { question: 'Can I earn frequent flyer miles on these tickets?', answer: 'Yes. Our tickets are standard airline tickets that qualify for full frequent flyer mileage accrual. You can credit your miles to the operating airline\'s program or any eligible partner program, just as you would with any other ticket.' },
    ],
  };
}

export function getRegionSEO(regionName: string, destinations: number, deals: number): SEOContent {
  return {
    title: `Business Class Flights to ${regionName}`,
    intro: `Discover exclusive business class and first class deals to ${regionName}'s most sought-after destinations. Priority Flyers currently offers access to ${destinations} premium destinations${deals > 0 ? ` with ${deals} active deals` : ''} across ${regionName}, with savings of up to 70% off published fares from leading airlines.`,
    blocks: [
      { heading: `Popular ${regionName} Routes`, text: `${regionName} is one of the most popular regions for premium cabin travel. Whether you're flying for business or leisure, our team monitors fares across all major routes to ${regionName} and alerts you when exceptional deals become available. We cover direct and connecting flights from major US, European, and Asian gateways.` },
      { heading: `Best Time to Book ${regionName} Business Class`, text: `The best deals to ${regionName} are typically found 2–6 months before departure. Shoulder seasons (spring and fall) often offer the deepest discounts on business class fares. However, our team frequently finds exceptional deals year-round, including during peak travel seasons. Submit a quote request for your preferred dates and we'll find the best available fare.` },
    ],
    faqs: [
      { question: `Which airlines offer the best business class to ${regionName}?`, answer: `The best business class products to ${regionName} vary by route, but top-rated options include airlines with lie-flat seats, direct aisle access, and premium dining. Our experts will recommend the best airline for your specific route and preferences, balancing comfort with price.` },
      { question: `When is the cheapest time to fly business class to ${regionName}?`, answer: `Generally, the lowest business class fares to ${regionName} are found during shoulder seasons — typically March–May and September–November. Mid-week departures (Tuesday–Thursday) also tend to offer lower fares. That said, we regularly find exceptional deals even during peak periods.` },
      { question: `How far in advance should I book business class to ${regionName}?`, answer: `For the best selection of fares and dates, we recommend requesting a quote 2–6 months before your planned departure. However, we also find last-minute deals — sometimes just 1–2 weeks out — so it's always worth checking regardless of your timeline.` },
      { question: `Can I use miles or points for upgrades on these routes?`, answer: `The tickets we offer are purchased fares, not award tickets. However, many of our fares are in booking classes that qualify for complimentary upgrades if available. You'll also earn full frequent flyer miles on every ticket, building toward future award travel.` },
    ],
  };
}

export function getCountrySEO(countryName: string, regionName: string, cities: string[]): SEOContent {
  const cityList = cities.length > 3 ? `${cities.slice(0, 3).join(', ')}, and more` : cities.join(', ');
  return {
    title: `Business Class Flights to ${countryName}`,
    intro: `Fly business class to ${countryName} at a fraction of the published fare. Priority Flyers offers discounted premium cabin tickets to ${cityList} — with savings that make luxury travel accessible. Whether you're traveling for business, vacation, or a special occasion, we'll find you the best deal.`,
    blocks: [
      { heading: `Top Airports in ${countryName}`, text: `${countryName} is served by ${cities.length > 1 ? 'several major international airports' : 'a major international airport'} with business class service from airlines around the world. ${cities.length > 1 ? `Major gateway cities include ${cityList}.` : `The primary gateway is ${cities[0]}.`} Each airport offers connections to major airline hubs, giving us multiple options to find you the lowest fare.` },
      { heading: `Tips for Flying Business Class to ${countryName}`, text: `To get the best deals on business class flights to ${countryName}, flexibility with your travel dates helps significantly. We recommend being open to departing on different days of the week and considering connecting flights through major hubs. Our fare experts handle all of this research — simply tell us your ideal dates and we'll present the best options.` },
    ],
    faqs: [
      { question: `How much does business class to ${countryName} cost?`, answer: `Business class fares to ${countryName} through Priority Flyers typically start significantly below published prices. Exact pricing depends on your departure city, travel dates, and preferred airline. Request a free quote to see current pricing for your specific itinerary.` },
      { question: `Which airlines fly business class to ${countryName}?`, answer: `Multiple international airlines offer business class service to ${countryName}, including both full-service carriers and their alliance partners. Our team has access to fares across all airlines and will recommend the best option based on your route, budget, and comfort preferences.` },
      { question: `Is it worth flying business class to ${countryName}?`, answer: `For long-haul flights to ${countryName}, business class offers a dramatically better experience — lie-flat seats, premium dining, lounge access, and priority services. With Priority Flyers' discounted fares, the upgrade from economy often costs a fraction of the published price difference, making it excellent value for the comfort gained.` },
      { question: `How do I book discounted business class to ${countryName}?`, answer: `Simply fill out our free quote form with your travel details. Our fare experts will search for the best available business class deals to ${countryName} and respond within 30 minutes during business hours. There's no commitment — you only book if you're happy with the price.` },
    ],
  };
}

export function getDealSEO(origin: string, destination: string, cabinClass: string, savings: number): SEOContent {
  return {
    title: `${origin} to ${destination} ${cabinClass} Deals`,
    intro: `Save up to ${savings}% on ${cabinClass.toLowerCase()} flights from ${origin} to ${destination}. Priority Flyers has secured exclusive discounted fares on this popular route — the same seats, service, and frequent flyer benefits at a fraction of the published price.`,
    blocks: [
      { heading: 'About This Route', text: `The ${origin} to ${destination} route is one of the most popular premium cabin routes. Multiple airlines operate ${cabinClass.toLowerCase()} service on this corridor, giving us excellent options to find you the lowest fare. Whether you prefer a direct flight or a connecting itinerary through a major hub, our fare experts will present the best options for your travel dates.` },
      { heading: `What to Expect in ${cabinClass}`, text: `${cabinClass} on this route typically features lie-flat seats with direct aisle access, premium multi-course dining, an extensive entertainment library, and access to airport lounges at departure and arrival. Airlines serving this route invest heavily in their premium cabin products, ensuring an exceptional travel experience from check-in to landing.` },
    ],
    faqs: [
      { question: `How much can I save on ${origin} to ${destination} ${cabinClass.toLowerCase()}?`, answer: `Current deals on this route offer savings of up to ${savings}% off the published ${cabinClass.toLowerCase()} fare. The exact discount depends on travel dates, airline, and availability. Request a free quote to see the best current pricing for your preferred dates.` },
      { question: `Which airlines fly ${cabinClass.toLowerCase()} from ${origin} to ${destination}?`, answer: `Several major airlines offer ${cabinClass.toLowerCase()} service between ${origin} and ${destination}, including both direct and connecting options. Our team will recommend the best airline based on your preferences for comfort, schedule, and price.` },
      { question: 'How do I lock in this deal?', answer: 'Fill out the quote form on this page with your preferred travel dates. Our fare experts will verify current availability and pricing, then send you a detailed quote within 30 minutes during business hours. There\'s absolutely no obligation — you only proceed if you\'re satisfied with the fare.' },
      { question: 'Are the dates flexible?', answer: 'Yes. While the deal shown is based on sample pricing, we can search for discounted fares on any dates you prefer. Often, shifting your departure by a few days can yield even better savings. Tell us your ideal dates and we\'ll find the best available option.' },
    ],
  };
}

export function getAirlinesHomeSEO(): SEOContent {
  return {
    title: 'Best Business & First Class Airlines',
    intro: 'Priority Flyers partners with the world\'s top premium airlines to offer exclusive discounts on business class and first class tickets. From Emirates\' iconic private suites to Singapore Airlines\' legendary service, we help you fly the best cabins at a fraction of the published fare.',
    blocks: [
      { heading: 'Why Book Through Priority Flyers', text: 'We maintain direct relationships with premium carriers worldwide, giving us access to consolidator fares and special rates unavailable to the public. Every ticket includes full frequent flyer miles, lounge access, priority boarding, and the same flexibility as booking direct — the only difference is our price.' },
      { heading: 'Our Airline Partners', text: 'We specialize in business class and first class tickets on award-winning airlines including Emirates, Qatar Airways, Singapore Airlines, Cathay Pacific, Japan Airlines, ANA, Korean Air, Turkish Airlines, Air France, and many more. Whether you\'re flying transatlantic, transpacific, or to the Middle East, we\'ll find the best premium cabin deal for your route.' },
    ],
    faqs: [
      { question: 'Which airlines offer the best business class?', answer: 'Qatar Airways QSuites, Singapore Airlines, and ANA The Room are consistently rated as the world\'s best business class products. Emirates, Cathay Pacific, and Japan Airlines also offer exceptional business class experiences with lie-flat seats and premium dining.' },
      { question: 'How much can I save on business class flights?', answer: 'Our clients typically save 40-70% off published business class fares. Savings vary by airline and route — for example, Emirates business class can be discounted by up to 60%, while Qatar Airways QSuites often sees savings of 50-55%.' },
      { question: 'Do I earn frequent flyer miles with discounted tickets?', answer: 'Yes. All tickets booked through Priority Flyers are regular airline tickets that earn full frequent flyer miles, qualify for upgrades, and include all standard benefits like lounge access and priority boarding.' },
      { question: 'Which first class cabins are worth the premium?', answer: 'Emirates First Class (private suites with shower spa), Singapore Suites (separate bedroom), and Air France La Première (only 4 seats per aircraft) are considered the finest first class products in the sky. We can help you experience them at 50-60% off retail prices.' },
    ],
  };
}

export function getAirlineSEO(name: string, hubCity: string, savingPercent: number, dealCount: number): SEOContent {
  return {
    title: `${name} Business & First Class Deals`,
    intro: `Save up to ${savingPercent}% on ${name} business class and first class flights through Priority Flyers. We currently have ${dealCount} active deal${dealCount !== 1 ? 's' : ''} on ${name} routes${hubCity ? ` via ${hubCity}` : ''}. Our fare experts monitor ${name} pricing daily to find the deepest discounts on premium cabins.`,
    blocks: [
      { heading: `Why Fly ${name} Premium`, text: `${name} is renowned for its exceptional premium cabin experience. Whether you're looking for business class comfort on a long-haul flight or the ultimate luxury of first class, ${name} delivers world-class service, cuisine, and amenities.${hubCity ? ` Their hub in ${hubCity} offers seamless connections to destinations worldwide.` : ''}` },
      { heading: `How to Save on ${name}`, text: `Priority Flyers accesses exclusive consolidator rates and promotional fares on ${name} routes. Simply request a quote with your preferred dates and route — our team will respond within 15 minutes with the best available ${name} fares, typically saving you ${savingPercent > 0 ? `up to ${savingPercent}%` : 'significantly'} compared to booking direct.` },
    ],
    faqs: [
      { question: `How much can I save on ${name} business class?`, answer: `Our clients typically save ${savingPercent > 0 ? `up to ${savingPercent}%` : '40-60%'} on ${name} business class tickets. Exact savings depend on the route, travel dates, and availability.` },
      { question: `Does ${name} have good business class?`, answer: `Yes, ${name} consistently ranks among the world's top airlines for premium cabin experience. Their business class features lie-flat seats, premium dining, and exceptional service${hubCity ? `, with convenient connections through their ${hubCity} hub` : ''}.` },
      { question: `Can I earn miles on discounted ${name} tickets?`, answer: `Absolutely. All ${name} tickets booked through Priority Flyers are standard airline tickets that earn full frequent flyer miles in ${name}'s loyalty program and any partner programs.` },
    ],
  };
}

export function resolveSEOContent(
  settings: Record<string, string>,
  settingsKey: string,
  defaultFn: () => SEOContent,
): SEOContent {
  const raw = settings[settingsKey];
  if (raw) {
    try {
      return JSON.parse(raw) as SEOContent;
    } catch {
      // fall through
    }
  }
  return defaultFn();
}
