import { PROJECTS } from '../../../data/portfolio.data'
import { AresItem } from './AresItem'

export function AresApp() {
  return (
    <section className="h-full bg-[#f3f7ff] p-3">
      <div className="mb-3 rounded-[2px] border border-[#8aa7cf] bg-white p-2">
        <p className="font-bold text-xp-blue-dark">Downloads</p>
        <p className="text-xp-sm text-xp-text-muted">Projetos ficam aqui.</p>
      </div>
      <div className="overflow-hidden border border-[#8aa7cf] bg-white">
        {PROJECTS.map((project) => (
          <AresItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
