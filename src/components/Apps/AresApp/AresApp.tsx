import { PROJECTS } from '../../../data/portfolio.data'
import { AresItem } from './AresItem'

export function AresApp() {
  return (
    <section className="flex h-full flex-col bg-[#eef5ff]">
      <div className="flex h-10 items-center gap-1 border-b border-[#8aa7cf] bg-[linear-gradient(180deg,#ffffff,#d8e9ff)] px-2">
        {['Biblioteca', 'Buscar', 'Transferencias', 'Chat'].map((tab) => (
          <button
            key={tab}
            type="button"
            className="h-7 rounded-t-[3px] border border-[#8aa7cf] bg-white px-3 shadow-btn-xp"
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="m-3 rounded-[2px] border border-[#8aa7cf] bg-white p-2 shadow-[inset_0_0_0_1px_#edf5ff]">
        <p className="font-bold text-xp-blue-dark">Downloads ativos</p>
        <p className="text-xp-sm text-xp-text-muted">Projetos ficam como arquivos compartilhados.</p>
      </div>
      <div className="mx-3 mb-3 flex-1 overflow-hidden border border-[#8aa7cf] bg-white">
        <div className="grid grid-cols-[1fr_90px_90px] gap-2 border-b border-[#8aa7cf] bg-[#dcecff] px-2 py-1 text-xp-sm font-bold">
          <span>Arquivo</span>
          <span>Tamanho</span>
          <span>Fontes</span>
        </div>
        {PROJECTS.map((project) => (
          <AresItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
