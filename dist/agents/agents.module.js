"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AgentsModule", {
    enumerable: true,
    get: function() {
        return AgentsModule;
    }
});
const _common = require("@nestjs/common");
const _agentscontroller = require("./agents.controller");
const _agentsservice = require("./agents.service");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let AgentsModule = class AgentsModule {
};
AgentsModule = _ts_decorate([
    (0, _common.Module)({
        controllers: [
            _agentscontroller.AgentsController
        ],
        providers: [
            _agentsservice.AgentsService
        ],
        exports: [
            _agentsservice.AgentsService
        ]
    })
], AgentsModule);

//# sourceMappingURL=agents.module.js.map