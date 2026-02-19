"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeadsModule", {
    enumerable: true,
    get: function() {
        return LeadsModule;
    }
});
const _common = require("@nestjs/common");
const _leadscontroller = require("./leads.controller");
const _leadsservice = require("./leads.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let LeadsModule = class LeadsModule {
};
LeadsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _leadscontroller.LeadsController
        ],
        providers: [
            _leadsservice.LeadsService
        ]
    })
], LeadsModule);

//# sourceMappingURL=leads.module.js.map