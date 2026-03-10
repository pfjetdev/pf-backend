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
    get paginatedResult () {
        return paginatedResult;
    },
    get parsePagination () {
        return parsePagination;
    }
});
const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 25;
function parsePagination(query) {
    const page = query?.page || 1;
    const limit = Math.min(query?.limit || DEFAULT_LIMIT, MAX_LIMIT);
    const skip = (page - 1) * limit;
    const orderBy = {};
    orderBy[query?.sortBy || 'createdAt'] = query?.sortOrder || 'desc';
    return {
        page,
        limit,
        skip,
        orderBy
    };
}
function paginatedResult(data, total, page, limit) {
    return {
        data,
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
    };
}

//# sourceMappingURL=pagination.js.map