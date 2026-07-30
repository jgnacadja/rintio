import type { H3Event } from 'h3'

interface RateLimitBucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, RateLimitBucket>()

export function enforceRateLimit(
  event: H3Event,
  { key, max, windowMs }: { key: string; max: number; windowMs: number }
) {
  const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
  const bucketKey = `${key}:${ip}`
  const now = Date.now()

  const bucket = buckets.get(bucketKey)

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(bucketKey, { count: 1, resetAt: now + windowMs })
    return
  }

  if (bucket.count >= max) {
    throw createError({
      statusCode: 429,
      statusMessage: 'Trop de requêtes, veuillez réessayer plus tard'
    })
  }

  bucket.count++
}
