/**
 * Builds a date range filter for Prisma where clauses.
 * Adds +1 day to `dateTo` so the end date is inclusive.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "buildDateRange", {
    enumerable: true,
    get: function() {
        return buildDateRange;
    }
});
function buildDateRange(dateFrom, dateTo) {
    if (!dateFrom && !dateTo) return undefined;
    const range = {};
    if (dateFrom) range.gte = new Date(dateFrom);
    if (dateTo) {
        const end = new Date(dateTo);
        end.setDate(end.getDate() + 1);
        range.lte = end;
    }
    return range;
}

//# sourceMappingURL=query.js.map