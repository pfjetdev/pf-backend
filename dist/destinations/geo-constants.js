/**
 * Maps ISO 3166-1 alpha-2 country codes to region slugs.
 * Used to compute destination regions from deal data.
 */ "use strict";
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
    get COUNTRY_TO_REGION () {
        return COUNTRY_TO_REGION;
    },
    get getCountryName () {
        return getCountryName;
    }
});
const COUNTRY_TO_REGION = {
    // Europe
    GB: 'europe',
    FR: 'europe',
    DE: 'europe',
    IT: 'europe',
    ES: 'europe',
    CH: 'europe',
    NL: 'europe',
    GR: 'europe',
    PT: 'europe',
    TR: 'europe',
    CZ: 'europe',
    SE: 'europe',
    NO: 'europe',
    AT: 'europe',
    IE: 'europe',
    PL: 'europe',
    HR: 'europe',
    IS: 'europe',
    DK: 'europe',
    FI: 'europe',
    HU: 'europe',
    BE: 'europe',
    RO: 'europe',
    BG: 'europe',
    // Asia
    JP: 'asia',
    CN: 'asia',
    KR: 'asia',
    TH: 'asia',
    SG: 'asia',
    VN: 'asia',
    MY: 'asia',
    ID: 'asia',
    PH: 'asia',
    IN: 'asia',
    LK: 'asia',
    HK: 'asia',
    TW: 'asia',
    MV: 'asia',
    // Middle East
    AE: 'middle-east',
    QA: 'middle-east',
    SA: 'middle-east',
    KW: 'middle-east',
    BH: 'middle-east',
    OM: 'middle-east',
    JO: 'middle-east',
    IL: 'middle-east',
    // Africa
    ZA: 'africa',
    MA: 'africa',
    EG: 'africa',
    KE: 'africa',
    TZ: 'africa',
    NG: 'africa',
    ET: 'africa',
    MU: 'africa',
    // Oceania
    AU: 'oceania',
    NZ: 'oceania',
    FJ: 'oceania',
    // Americas
    US: 'americas',
    CA: 'americas',
    MX: 'americas',
    BR: 'americas',
    AR: 'americas',
    CL: 'americas',
    CO: 'americas',
    PE: 'americas',
    CR: 'americas',
    PA: 'americas',
    JM: 'americas',
    CU: 'americas',
    DO: 'americas'
};
const displayNames = new Intl.DisplayNames([
    'en'
], {
    type: 'region'
});
function getCountryName(code) {
    try {
        return displayNames.of(code.toUpperCase()) || code;
    } catch  {
        return code;
    }
}

//# sourceMappingURL=geo-constants.js.map