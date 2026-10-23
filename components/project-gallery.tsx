"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "motion/react"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/projects"

export function ProjectGallery() {
  const reduce = useReducedMotion()

  return (
    <div className="projects-grid studio-projects">
      {projects.map(project => (
        <motion.article
          className="project"
          key={project.name}
          initial={{ y: reduce ? 0 : 42 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: reduce ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`Ver la web de ${project.name} en una pestaña nueva`}>
            <div className="project-image">
              <span className="project-discipline" aria-hidden="true">Diseño web</span>
              <div className="project-window">
                <div className="project-window-bar" aria-hidden="true"><span className="browser-dots"><i /><i /><i /></span><span>{project.domain}</span><span /></div>
                <Image src={project.image} alt={`Proyecto de diseño web para ${project.name}`} width={1424} height={905} sizes="(max-width: 640px) 86vw, (max-width: 1000px) 44vw, 550px" />
              </div>
              <span className="project-open" aria-hidden="true"><ExternalLink size={19} /></span>
            </div>
            <div className="project-caption"><div><h3>{project.name}</h3><p>{project.category}</p></div><span className="project-type">Ver proyecto <ExternalLink size={12} aria-hidden="true" /></span></div>
          </a>
        </motion.article>
      ))}
    </div>
  )
}
