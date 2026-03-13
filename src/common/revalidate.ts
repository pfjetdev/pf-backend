const FRONTEND_URL = process.env.FRONTEND_URL;
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET;

/**
 * Notify the Next.js frontend to revalidate cached data by tag.
 * Fire-and-forget — failures are logged but don't block the caller.
 */
export function revalidateTag(tag = 'catalog'): void {
  if (!FRONTEND_URL || !REVALIDATE_SECRET) return;

  fetch(`${FRONTEND_URL}/api/revalidate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-revalidate-secret': REVALIDATE_SECRET,
    },
    body: JSON.stringify({ tag }),
    signal: AbortSignal.timeout(5_000),
  }).catch((err) => {
    console.warn(`[revalidate] Failed to revalidate tag "${tag}":`, err.message);
  });
}
