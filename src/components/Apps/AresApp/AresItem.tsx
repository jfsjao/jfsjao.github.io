import musicIcon from '../../../assets/icons/icon__music.png'
import type { PROJECTS } from '../../../data/portfolio.data'

type Project = (typeof PROJECTS)[number]

interface AresItemProps {
  index: number
  project: Project
}

export function AresItem({ index, project }: AresItemProps) {
  const author = index % 2 === 0 ? 'JoaoFS' : 'jfsjao'
  const user = `dht${String(project.seeds + index).padStart(4, '0')}@????`

  return (
    <a
      className={`grid grid-cols-[24px_minmax(160px,1fr)_120px_70px_78px_64px_110px] items-center gap-1 border-b border-[#d7e2f2] px-2 py-[3px] text-[12px] hover:bg-[#dcecff] ${
        index === 0 ? 'bg-[#1f70c7] text-white hover:bg-[#1f70c7]' : 'bg-white'
      }`}
      href={project.url}
      rel="noreferrer"
      target="_blank"
    >
      <span className="text-center">{index === 0 ? '+' : ''}</span>
      <span className="flex min-w-0 items-center gap-1 truncate">
        <img src={musicIcon} alt="" className="h-4 w-4 shrink-0" draggable={false} />
        <span className="truncate">{project.name}</span>
      </span>
      <span className="truncate">{author}</span>
      <span>audio</span>
      <span>{project.size}</span>
      <span className="text-[#f0aa00]">***</span>
      <span className="truncate">{user}</span>
    </a>
  )
}
