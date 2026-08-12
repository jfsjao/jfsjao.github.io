import musicIcon from '../../../assets/icons/icon__music.png'
import type { PROJECTS } from '../../../data/portfolio.data'

type Project = (typeof PROJECTS)[number]

interface AresItemProps {
  index: number
  project: Project
  isSelected: boolean
  onSelect: (project: Project) => void
}

export function AresItem({ index, project, isSelected, onSelect }: AresItemProps) {
  const type = project.name.toLocaleLowerCase('pt-BR').endsWith('.exe')
    ? 'software'
    : 'documento'

  const openProject = () => {
    if (!project.url) return
    window.open(project.url, '_blank', 'noreferrer')
  }

  return (
    <div
      role="option"
      aria-selected={isSelected}
      tabIndex={0}
      onClick={() => onSelect(project)}
      onDoubleClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter') openProject()
      }}
      className={`grid cursor-default grid-cols-[24px_minmax(160px,1fr)_120px_70px_78px_64px_110px] items-center gap-1 border-b border-[#d7e2f2] px-2 py-1 text-[14px] hover:bg-[#dcecff] ${
        isSelected ? 'bg-[#1f70c7] text-white hover:bg-[#1f70c7]' : 'bg-white'
      }`}
    >
      <span className="text-center">{index + 1}</span>
      <span className="flex min-w-0 items-center gap-1 truncate">
        <img
          src={musicIcon}
          alt=""
          width={16}
          height={16}
          className="shrink-0"
          draggable={false}
        />
        <span className="truncate">{project.name}</span>
      </span>
      <span className="truncate">João Felipe</span>
      <span>{type}</span>
      <span>Projeto</span>
      <span className="text-[#17823b]">Sim</span>
      <span className="truncate">GitHub</span>
    </div>
  )
}
