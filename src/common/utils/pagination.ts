const MAX_LIMIT = 100;
const DEFAULT_LIMIT = 25;

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
  const page = query?.page || 1;
  const limit = Math.min(query?.limit || DEFAULT_LIMIT, MAX_LIMIT);
  const skip = (page - 1) * limit;

  const orderBy: Record<string, string> = {};
  orderBy[query?.sortBy || 'createdAt'] = query?.sortOrder || 'desc';

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
