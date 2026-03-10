/**
 * Builds a date range filter for Prisma where clauses.
 * Adds +1 day to `dateTo` so the end date is inclusive.
 */
export function buildDateRange(
  dateFrom?: string,
  dateTo?: string,
): Record<string, Date> | undefined {
  if (!dateFrom && !dateTo) return undefined;

  const range: Record<string, Date> = {};
  if (dateFrom) range.gte = new Date(dateFrom);
  if (dateTo) {
    const end = new Date(dateTo);
    end.setDate(end.getDate() + 1);
    range.lte = end;
  }
  return range;
}
