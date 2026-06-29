type Hit = {
  count: number
  resetAt: number
}

const buckets = new Map<string, Hit>()

export function isRateLimited(key: string, limit = 12, windowMs = 60_000) {
  const now = Date.now()
  const current = buckets.get(key)

  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return false
  }

  current.count += 1
  return current.count > limit
}
