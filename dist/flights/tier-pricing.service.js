"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TierPricingService", {
    enumerable: true,
    get: function() {
        return TierPricingService;
    }
});
const _common = require("@nestjs/common");
const _settingsservice = require("../settings/settings.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
/** Default tier multipliers (relative to business = 1.0) */ const DEFAULT_MULTIPLIER = {
    premium: 0.52,
    business: 1,
    first: 2.15
};
/** Default "published fare" markup per tier */ const DEFAULT_MARKUP = {
    premium: 1.55,
    business: 1.58,
    first: 1.62
};
let TierPricingService = class TierPricingService {
    /**
   * Compute Variant B tier prices from a raw flight price.
   *
   * The raw price is for whatever cabin the user searched.
   * We normalize it to a business-class equivalent, then derive
   * premium / business / first prices using admin-configurable multipliers.
   */ async compute(rawPrice, searchCabin) {
        const all = await this.settings.getAll();
        const multiplier = this.parseMultipliers(all);
        const markup = this.parseMarkups(all);
        const cabinKey = multiplier[searchCabin] !== undefined ? searchCabin : 'business';
        const basePrice = rawPrice / multiplier[cabinKey];
        return {
            premium: this.computeTier(basePrice, 'premium', multiplier, markup),
            business: this.computeTier(basePrice, 'business', multiplier, markup),
            first: this.computeTier(basePrice, 'first', multiplier, markup)
        };
    }
    computeTier(basePrice, tier, multiplier, markup) {
        const price = Math.round(basePrice * multiplier[tier] / 10) * 10;
        const originalPrice = Math.round(price * markup[tier] / 10) * 10;
        return {
            price,
            originalPrice
        };
    }
    parseSetting(settings, key, fallback) {
        const v = parseFloat(settings[key] ?? '');
        return Number.isFinite(v) && v > 0 ? v : fallback;
    }
    parseMultipliers(settings) {
        return {
            premium: this.parseSetting(settings, 'variant_b_tier_multiplier_premium', DEFAULT_MULTIPLIER.premium),
            business: this.parseSetting(settings, 'variant_b_tier_multiplier_business', DEFAULT_MULTIPLIER.business),
            first: this.parseSetting(settings, 'variant_b_tier_multiplier_first', DEFAULT_MULTIPLIER.first)
        };
    }
    parseMarkups(settings) {
        return {
            premium: this.parseSetting(settings, 'variant_b_tier_markup_premium', DEFAULT_MARKUP.premium),
            business: this.parseSetting(settings, 'variant_b_tier_markup_business', DEFAULT_MARKUP.business),
            first: this.parseSetting(settings, 'variant_b_tier_markup_first', DEFAULT_MARKUP.first)
        };
    }
    constructor(settings){
        this.settings = settings;
    }
};
TierPricingService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _settingsservice.SettingsService === "undefined" ? Object : _settingsservice.SettingsService
    ])
], TierPricingService);

//# sourceMappingURL=tier-pricing.service.js.map