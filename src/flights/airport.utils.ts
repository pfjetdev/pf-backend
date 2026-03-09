import { cities } from './airports.data';

/** Resolve a city/airport code to a display name (e.g. "NYC" -> "New York") */
export function getCityName(code: string): string {
  if (!code) return '';
  const city = cities.find((c) => c.code === code);
  if (city) return city.name;
  for (const c of cities) {
    const airport = c.airports.find((a) => a.code === code);
    if (airport) return c.name;
  }
  return '';
}

/** Get lat/lng for a city or airport code */
export function getCityCoords(code: string): { lat: number; lng: number } | null {
  if (!code) return null;
  const city = cities.find((c) => c.code === code);
  if (city) return { lat: city.lat, lng: city.lng };
  for (const c of cities) {
    if (c.airports.some((a) => a.code === code)) {
      return { lat: c.lat, lng: c.lng };
    }
  }
  return null;
}

/** Get the country name for a city or airport code */
export function getCityCountry(code: string): string {
  if (!code) return '';
  const city = cities.find((c) => c.code === code);
  if (city) return city.country;
  for (const c of cities) {
    if (c.airports.some((a) => a.code === code)) {
      return c.country;
    }
  }
  return '';
}

/** Get the primary airport code for a city code (e.g. "LON" -> "LHR") */
export function getPrimaryAirportCode(code: string): string {
  const city = cities.find((c) => c.code === code);
  if (city && city.airports.length > 0) return city.airports[0].code;
  return code;
}
