/**
 * Builds a date range filter for Prisma where clauses.
 * Adds +1 day to `dateTo` so the end date is inclusive.
 * Returns undefined if dates are invalid.
 */
export function buildDateRange(
  dateFrom?: string,
  dateTo?: string,
): Record<string, Date> | undefined {
  if (!dateFrom && !dateTo) return undefined;

  const range: Record<string, Date> = {};

  if (dateFrom) {
    const d = new Date(dateFrom);
    if (isNaN(d.getTime())) return undefined;
    range.gte = d;
  }

  if (dateTo) {
    const end = new Date(dateTo);
    if (isNaN(end.getTime())) return undefined;
    end.setDate(end.getDate() + 1);
    range.lte = end;
  }

  return range;
}
