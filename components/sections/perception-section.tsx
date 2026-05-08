"use client"

import { Check, Minus } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"

function ComparisonList({
  title,
  points,
  tone,
}: {
  title: string
  points: readonly string[]
  tone: "weak" | "strong"
}) {
  const isStrong = tone === "strong"
  const Icon = isStrong ? Check : Minus

  return (
    <div
      className={[
        "rounded-lg border p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
        isStrong
          ? "border-sky-300/35 bg-sky-300/[0.07]"
          : "border-zinc-800/80 bg-zinc-950/75",
      ].join(" ")}
    >
      <div className="mb-5 flex items-center justify-between gap-4">
        <h3 className="text-base font-semibold text-zinc-100">{title}</h3>
        <span
          className={[
            "h-2 w-2 rounded-full",
            isStrong ? "bg-sky-300 shadow-[0_0_0_5px_rgba(125,211,252,0.08)]" : "bg-zinc-700",
          ].join(" ")}
          aria-hidden="true"
        />
      </div>

      <ul className="space-y-3">
        {points.map((point) => (
          <li key={point} className="flex items-center gap-3 text-sm text-zinc-300">
            <span
              className={[
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-md border",
                isStrong ? "border-sky-300/30 bg-sky-300/10 text-sky-200" : "border-zinc-800 bg-zinc-900 text-zinc-500",
              ].join(" ")}
            >
              <Icon className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PerceptionSection() {
  const { t } = useI18n()

  return (
    <section id="perception" className="relative overflow-hidden px-6 py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(125,211,252,0.08),transparent_30%),linear-gradient(180deg,rgba(9,9,11,0),rgba(12,18,28,0.32),rgba(9,9,11,0))]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.perception.eyebrow}</p>
            <h2 className="max-w-3xl whitespace-pre-line font-display text-4xl font-bold leading-tight text-zinc-100 md:text-6xl">
              {t.perception.title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-500 lg:justify-self-end md:text-lg">
            {t.perception.subtitle}
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/70 p-6 shadow-[0_24px_80px_-54px_rgba(125,211,252,0.45),inset_0_1px_0_rgba(255,255,255,0.05)] md:p-8">
            <h3 className="max-w-xl whitespace-pre-line font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">
              {t.perception.mainTitle}
            </h3>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400">{t.perception.body}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-500">{t.perception.closing}</p>
          </div>

          <div className="rounded-lg border border-zinc-800/70 bg-zinc-950/50 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="grid gap-3 md:grid-cols-2">
              <ComparisonList title={t.perception.weakTitle} points={t.perception.weakPoints} tone="weak" />
              <ComparisonList title={t.perception.strongTitle} points={t.perception.strongPoints} tone="strong" />
            </div>
            <div className="mt-3 rounded-lg border border-zinc-800/80 bg-zinc-950/80 px-5 py-4">
              <p className="text-sm leading-6 text-zinc-400">{t.perception.footnote}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
