import { Injectable } from '@nestjs/common';
import { SettingsService } from '../settings/settings.service';
import type { TierPricing } from './flights.types';

/** Default tier multipliers (relative to business = 1.0) */
const DEFAULT_MULTIPLIER: Record<string, number> = {
  economy: 0.18,
  premium: 0.52,
  business: 1,
  first: 2.15,
};

/** Default "published fare" markup per tier */
const DEFAULT_MARKUP: Record<string, number> = {
  premium: 1.55,
  business: 1.58,
  first: 1.62,
};

@Injectable()
export class TierPricingService {
  constructor(private settings: SettingsService) {}

  /**
   * Compute Variant B tier prices from a raw flight price.
   *
   * The raw price is for whatever cabin the user searched.
   * We normalize it to a business-class equivalent, then derive
   * premium / business / first prices using admin-configurable multipliers.
   */
  async compute(rawPrice: number, searchCabin: string): Promise<TierPricing> {
    const all = await this.settings.getAll();
    const multiplier = this.parseMultipliers(all);
    const markup = this.parseMarkups(all);

    const cabinKey = multiplier[searchCabin] !== undefined ? searchCabin : 'business';
    const basePrice = rawPrice / multiplier[cabinKey];

    return {
      premium: this.computeTier(basePrice, 'premium', multiplier, markup),
      business: this.computeTier(basePrice, 'business', multiplier, markup),
      first: this.computeTier(basePrice, 'first', multiplier, markup),
    };
  }

  private computeTier(
    basePrice: number,
    tier: string,
    multiplier: Record<string, number>,
    markup: Record<string, number>,
  ) {
    const price = Math.round((basePrice * multiplier[tier]) / 10) * 10;
    const originalPrice = Math.round((price * markup[tier]) / 10) * 10;
    return { price, originalPrice };
  }

  private parseSetting(settings: Record<string, string>, key: string, fallback: number): number {
    const v = parseFloat(settings[key] ?? '');
    return Number.isFinite(v) && v > 0 ? v : fallback;
  }

  private parseMultipliers(settings: Record<string, string>): Record<string, number> {
    return {
      economy: this.parseSetting(settings, 'variant_b_tier_multiplier_economy', DEFAULT_MULTIPLIER.economy),
      premium: this.parseSetting(settings, 'variant_b_tier_multiplier_premium', DEFAULT_MULTIPLIER.premium),
      business: this.parseSetting(settings, 'variant_b_tier_multiplier_business', DEFAULT_MULTIPLIER.business),
      first: this.parseSetting(settings, 'variant_b_tier_multiplier_first', DEFAULT_MULTIPLIER.first),
    };
  }

  private parseMarkups(settings: Record<string, string>): Record<string, number> {
    return {
      premium: this.parseSetting(settings, 'variant_b_tier_markup_premium', DEFAULT_MARKUP.premium),
      business: this.parseSetting(settings, 'variant_b_tier_markup_business', DEFAULT_MARKUP.business),
      first: this.parseSetting(settings, 'variant_b_tier_markup_first', DEFAULT_MARKUP.first),
    };
  }
}
