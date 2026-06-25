"use client"

import { CheckCircle2, ExternalLink } from "lucide-react"
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

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.projects.items.map((project, index) => (
            <ScrollReveal key={project.name} delay={index * 90}>
              <article className="group overflow-hidden rounded-lg border border-zinc-800/75 bg-zinc-950/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#38b6ff]/35 hover:shadow-[0_24px_70px_-48px_rgba(56,182,255,0.75)]">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="relative block aspect-[4/3] overflow-hidden border-b border-zinc-800/75 bg-zinc-900"
                  aria-label={`${project.name}: ${project.displayUrl}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.name} - ${project.type}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-zinc-950/5 to-transparent opacity-80" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-zinc-950/70 px-2.5 py-1 text-[11px] font-medium text-zinc-100 backdrop-blur">
                    {project.displayUrl}
                    <ExternalLink className="h-3 w-3 text-[#38b6ff]" strokeWidth={1.8} />
                  </span>
                </a>
                <div className="p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#38b6ff]">{project.type}</p>
                  <h3 className="mt-2 text-xl font-semibold text-zinc-100">{project.name}</h3>
                  <ul className="mt-5 space-y-3">
                    {project.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-400">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#38b6ff]" strokeWidth={1.8} />
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
