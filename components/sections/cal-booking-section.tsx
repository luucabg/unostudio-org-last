"use client"

import Cal, { getCalApi } from "@calcom/embed-react"
import { CalendarDays, Clock3, Video } from "lucide-react"
import { useEffect } from "react"
import { useI18n } from "@/components/i18n-provider"

export function CalBookingSection() {
  const { t } = useI18n()

  useEffect(() => {
    let mounted = true

    ;(async function initCal() {
      const cal = await getCalApi({ namespace: "15min" })
      if (!mounted) return

      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "dark",
      })
    })()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="booking" className="relative flex min-h-[100dvh] items-center overflow-hidden px-6 py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_42%,rgba(56,189,248,0.11),transparent_34%),linear-gradient(180deg,transparent,rgba(2,6,23,0.18))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase text-sky-300">{t.booking.eyebrow}</p>
          <h2 className="mb-6 max-w-2xl font-display text-5xl font-bold leading-tight text-zinc-100 md:text-6xl">
            {t.booking.title}
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500 md:text-lg">{t.booking.body}</p>

          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {t.booking.bullets.map((bullet, index) => {
              const Icon = index === 0 ? CalendarDays : index === 1 ? Clock3 : Video

              return (
                <div
                  key={bullet}
                  className="flex items-center gap-3 rounded-lg border border-zinc-800/70 bg-zinc-950/70 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-zinc-100 text-zinc-950">
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-medium text-zinc-200">{bullet}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="relative flex min-h-[620px] items-center justify-center lg:justify-end">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_64%_52%,rgba(125,211,252,0.14),transparent_38%)]"
            aria-hidden="true"
          />

          <div className="relative h-[640px] w-full max-w-[704px] overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-900 shadow-[0_28px_90px_-44px_rgba(125,211,252,0.5)] md:h-[520px]">
            <div className="h-[640px] w-full bg-zinc-900 md:h-[760px] md:w-[900px] md:origin-top-left md:scale-[0.78]">
              <Cal
                namespace="15min"
                calLink="lucabenidze/15min"
                style={{ width: "100%", height: "100%", overflow: "auto", colorScheme: "dark" }}
                config={{ layout: "month_view", theme: "dark", useSlotsViewOnSmallScreen: "true" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
