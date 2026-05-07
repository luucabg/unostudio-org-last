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
      })
    })()

    return () => {
      mounted = false
    }
  }, [])

  return (
    <section id="booking" className="px-6 py-16">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="mb-4 text-sm font-medium uppercase text-sky-300">{t.booking.eyebrow}</p>
          <h2 className="mb-5 font-display text-4xl font-bold leading-tight text-zinc-100 md:text-5xl">
            {t.booking.title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-zinc-500 md:text-lg">{t.booking.body}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
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

        <div className="w-full max-w-[520px] overflow-hidden rounded-lg border border-zinc-800/80 bg-zinc-950 shadow-[0_22px_70px_-42px_rgba(125,211,252,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] lg:ml-auto">
          <div className="flex items-center justify-between border-b border-zinc-800/80 px-4 py-3">
            <div>
              <p className="font-heading text-xs font-semibold text-zinc-100">{t.booking.calendarTitle}</p>
              <p className="mt-0.5 text-[11px] text-zinc-500">{t.booking.calendarMeta}</p>
            </div>
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-700" />
            </div>
          </div>

          <div className="h-[390px] min-h-[360px] bg-zinc-50 md:h-[420px]">
            <Cal
              namespace="15min"
              calLink="lucabenidze/15min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
