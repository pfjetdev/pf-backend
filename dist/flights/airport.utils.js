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
    get getCityCoords () {
        return getCityCoords;
    },
    get getCityCountry () {
        return getCityCountry;
    },
    get getCityName () {
        return getCityName;
    },
    get getPrimaryAirportCode () {
        return getPrimaryAirportCode;
    }
});
const _airportsdata = require("./airports.data");
function getCityName(code) {
    if (!code) return '';
    const city = _airportsdata.cities.find((c)=>c.code === code);
    if (city) return city.name;
    for (const c of _airportsdata.cities){
        const airport = c.airports.find((a)=>a.code === code);
        if (airport) return c.name;
    }
    return '';
}
function getCityCoords(code) {
    if (!code) return null;
    const city = _airportsdata.cities.find((c)=>c.code === code);
    if (city) return {
        lat: city.lat,
        lng: city.lng
    };
    for (const c of _airportsdata.cities){
        if (c.airports.some((a)=>a.code === code)) {
            return {
                lat: c.lat,
                lng: c.lng
            };
        }
    }
    return null;
}
function getCityCountry(code) {
    if (!code) return '';
    const city = _airportsdata.cities.find((c)=>c.code === code);
    if (city) return city.country;
    for (const c of _airportsdata.cities){
        if (c.airports.some((a)=>a.code === code)) {
            return c.country;
        }
    }
    return '';
}
function getPrimaryAirportCode(code) {
    const city = _airportsdata.cities.find((c)=>c.code === code);
    if (city && city.airports.length > 0) return city.airports[0].code;
    return code;
}

//# sourceMappingURL=airport.utils.js.map