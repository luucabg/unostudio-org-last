"use client"

import { CheckCircle2 } from "lucide-react"
import { useI18n } from "@/components/i18n-provider"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export function ProjectsSection() {
  const { t } = useI18n()

  return (
    <section id="projects" className="px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
          <ScrollReveal>
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-sky-300">{t.projects.eyebrow}</p>
            <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-zinc-100 md:text-5xl">
              {t.projects.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-500 lg:ml-auto">{t.projects.body}</p>
          </ScrollReveal>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {t.projects.items.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 90}>
              <article className="group overflow-hidden rounded-lg border border-zinc-800/75 bg-zinc-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/35">
                <div className="border-b border-zinc-800/75 bg-[radial-gradient(circle_at_24%_20%,rgba(125,211,252,0.16),transparent_28%),linear-gradient(135deg,rgba(39,39,42,0.9),rgba(9,9,11,0.95))] p-4">
                  <div className="rounded-md border border-white/10 bg-zinc-950/55 p-3">
                    <div className="mb-3 flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-zinc-600" />
                      <span className="h-2 w-2 rounded-full bg-zinc-600" />
                      <span className="h-2 w-2 rounded-full bg-sky-300/80" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 w-2/3 rounded bg-zinc-200/80" />
                      <div className="h-2 w-full rounded bg-zinc-700" />
                      <div className="h-2 w-5/6 rounded bg-zinc-800" />
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <div className="h-10 rounded bg-sky-300/20" />
                        <div className="h-10 rounded bg-zinc-800" />
                        <div className="h-10 rounded bg-zinc-800" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-sky-300">{project.type}</p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-100">{project.name}</h3>
                  <ul className="mt-5 space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-sky-300" strokeWidth={1.8} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
