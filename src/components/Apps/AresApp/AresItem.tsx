import type { PROJECTS } from '../../../data/portfolio.data'

type Project = (typeof PROJECTS)[number]

interface AresItemProps {
  project: Project
}

export function AresItem({ project }: AresItemProps) {
  return (
    <a
      className="grid grid-cols-[1fr_90px_90px] gap-2 border-b border-[#d7e2f2] p-2 text-xp-base hover:bg-[#dcecff]"
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <span className="truncate">
        <strong>{project.name}</strong>
        <span className="ml-2 text-xp-text-muted">{project.description}</span>
      </span>
      <span>{project.size}</span>
      <span>{project.seeds} seeds</span>
    </a>
  )
}
