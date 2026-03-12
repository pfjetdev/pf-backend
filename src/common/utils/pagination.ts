const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 25;

/** Whitelist of columns allowed for sorting — prevents prototype pollution */
const ALLOWED_SORT_FIELDS = new Set([
  'createdAt',
  'updatedAt',
  'email',
  'name',
  'status',
  'phone',
  'origin',
  'destination',
  'cabinClass',
  'source',
  'competitorPrice',
  'ourPrice',
  'quotedPrice',
]);

export interface PaginationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export function parsePagination(query?: PaginationQuery) {
  const page = Math.max(query?.page || 1, 1);
  const limit = Math.min(Math.max(query?.limit || DEFAULT_LIMIT, 1), MAX_LIMIT);
  const skip = (page - 1) * limit;

  const sortField = ALLOWED_SORT_FIELDS.has(query?.sortBy ?? '')
    ? query!.sortBy!
    : 'createdAt';
  const sortOrder = query?.sortOrder === 'asc' ? 'asc' : 'desc';

  const orderBy: Record<string, string> = { [sortField]: sortOrder };

  return { page, limit, skip, orderBy };
}

export function paginatedResult<T>(
  data: T[],
  total: number,
  page: number,
  limit: number,
): PaginatedResult<T> {
  return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
}
