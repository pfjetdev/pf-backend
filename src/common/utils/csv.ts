/**
 * Escapes a CSV field value (RFC 4180).
 * Also prevents CSV formula injection by prefixing dangerous characters.
 */
export function escapeCsvField(val: string): string {
  const needsFormulaEscape = /^[=+\-@\t\r]/.test(val);
  if (needsFormulaEscape) {
    val = `'${val}`;
  }
  if (needsFormulaEscape || val.includes(',') || val.includes('"') || val.includes('\n')) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

/**
 * Builds a CSV string from headers and row data.
 */
export function buildCsv(
  headers: string[],
  rows: string[][],
): string {
  const headerLine = headers.map(escapeCsvField).join(',');
  const dataLines = rows.map((row) => row.map(escapeCsvField).join(','));
  return [headerLine, ...dataLines].join('\n');
}
