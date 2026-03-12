/**
 * Escapes a CSV field value (RFC 4180).
 * Also prevents CSV formula injection by prefixing dangerous characters.
 */
export function escapeCsvField(val: string): string {
  if (/^[=+\-@\t\r]/.test(val)) {
    val = `'${val}`;
  }
  if (val.includes(',') || val.includes('"') || val.includes('\n')) {
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
  const headerLine = headers.join(',');
  const dataLines = rows.map((row) => row.map(escapeCsvField).join(','));
  return [headerLine, ...dataLines].join('\n');
}
