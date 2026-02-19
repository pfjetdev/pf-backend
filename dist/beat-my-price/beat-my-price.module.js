"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "BeatMyPriceModule", {
    enumerable: true,
    get: function() {
        return BeatMyPriceModule;
    }
});
const _common = require("@nestjs/common");
const _beatmypricecontroller = require("./beat-my-price.controller");
const _beatmypriceservice = require("./beat-my-price.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let BeatMyPriceModule = class BeatMyPriceModule {
};
BeatMyPriceModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _beatmypricecontroller.BeatMyPriceController
        ],
        providers: [
            _beatmypriceservice.BeatMyPriceService
        ]
    })
], BeatMyPriceModule);

//# sourceMappingURL=beat-my-price.module.js.map