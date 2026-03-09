"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AuthService", {
    enumerable: true,
    get: function() {
        return AuthService;
    }
});
const _common = require("@nestjs/common");
const _jwt = require("@nestjs/jwt");
const _bcryptjs = /*#__PURE__*/ _interop_require_wildcard(require("bcryptjs"));
const _prismaservice = require("../prisma/prisma.service");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let AuthService = class AuthService {
    async validateUser(email, password) {
        const agent = await this.prisma.agent.findUnique({
            where: {
                email
            }
        });
        if (!agent || !agent.passwordHash || !agent.isActive) {
            return null;
        }
        const valid = await _bcryptjs.compare(password, agent.passwordHash);
        if (!valid) return null;
        const { passwordHash: _, ...result } = agent;
        return result;
    }
    async login(email, password) {
        const user = await this.validateUser(email, password);
        if (!user) {
            throw new _common.UnauthorizedException('Invalid email or password');
        }
        const payload = {
            sub: user.id,
            email: user.email,
            role: user.role
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role,
                avatarUrl: user.avatarUrl
            }
        };
    }
    async setup(email, password, name) {
        if (!email || !password || !name) {
            throw new _common.UnauthorizedException('email, password and name are required');
        }
        const adminCount = await this.prisma.agent.count({
            where: {
                role: 'admin'
            }
        });
        if (adminCount > 0) {
            throw new _common.UnauthorizedException('Admin already exists. Use /auth/login');
        }
        if (password.length < 8) {
            throw new _common.UnauthorizedException('Password must be at least 8 characters');
        }
        const hash = await _bcryptjs.hash(password, 12);
        const agent = await this.prisma.agent.create({
            data: {
                email,
                name,
                passwordHash: hash,
                role: 'admin',
                isActive: true
            }
        });
        const payload = {
            sub: agent.id,
            email: agent.email,
            role: agent.role
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: agent.id,
                name: agent.name,
                email: agent.email,
                role: agent.role
            }
        };
    }
    async changePassword(userId, currentPassword, newPassword) {
        const agent = await this.prisma.agent.findUnique({
            where: {
                id: userId
            }
        });
        if (!agent || !agent.passwordHash) {
            throw new _common.UnauthorizedException();
        }
        const valid = await _bcryptjs.compare(currentPassword, agent.passwordHash);
        if (!valid) {
            throw new _common.UnauthorizedException('Current password is incorrect');
        }
        if (newPassword.length < 8) {
            throw new _common.UnauthorizedException('New password must be at least 8 characters');
        }
        const hash = await _bcryptjs.hash(newPassword, 12);
        await this.prisma.agent.update({
            where: {
                id: userId
            },
            data: {
                passwordHash: hash
            }
        });
        return {
            message: 'Password changed successfully'
        };
    }
    async getProfile(userId) {
        const agent = await this.prisma.agent.findUnique({
            where: {
                id: userId
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                avatarUrl: true,
                phone: true,
                isActive: true
            }
        });
        if (!agent || !agent.isActive) {
            throw new _common.UnauthorizedException();
        }
        return agent;
    }
    constructor(prisma, jwtService){
        this.prisma = prisma;
        this.jwtService = jwtService;
    }
};
AuthService = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _prismaservice.PrismaService === "undefined" ? Object : _prismaservice.PrismaService,
        typeof _jwt.JwtService === "undefined" ? Object : _jwt.JwtService
    ])
], AuthService);

//# sourceMappingURL=auth.service.js.map