/**
 * Escapes a CSV field value (RFC 4180).
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
    get buildCsv () {
        return buildCsv;
    },
    get escapeCsvField () {
        return escapeCsvField;
    }
});
function escapeCsvField(val) {
    if (val.includes(',') || val.includes('"') || val.includes('\n')) {
        return `"${val.replace(/"/g, '""')}"`;
    }
    return val;
}
function buildCsv(headers, rows) {
    const headerLine = headers.join(',');
    const dataLines = rows.map((row)=>row.map(escapeCsvField).join(','));
    return [
        headerLine,
        ...dataLines
    ].join('\n');
}

//# sourceMappingURL=csv.js.map