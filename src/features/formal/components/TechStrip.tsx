import { PROJECTS } from '../../../data/portfolio.data'

const TECHS = Array.from(new Set(PROJECTS.flatMap((project) => project.tech)))

export function TechStrip() {
  return (
    <div className="overflow-hidden border-y border-formal-border bg-formal-surface/60 py-5" aria-hidden="true">
      <div className="flex w-max gap-10 formal-marquee-track">
        {[...TECHS, ...TECHS].map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="whitespace-nowrap font-meta text-sm uppercase tracking-wide text-formal-muted"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
