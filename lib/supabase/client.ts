"use client"

import { createBrowserClient } from "@supabase/ssr"

function getClientEnv() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY.")
  }

  return { url, anonKey }
}

export function createClient() {
  const { url, anonKey } = getClientEnv()
  return createBrowserClient(url, anonKey)
}
