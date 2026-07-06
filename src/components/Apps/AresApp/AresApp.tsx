import goIcon from '../../../assets/icons/icon__go.png'
import searchIcon from '../../../assets/icons/icon__search--large.png'
import { PROJECTS } from '../../../data/portfolio.data'
import { AresItem } from './AresItem'

const filters = ['Tudo', 'Audio', 'Video', 'Imagem', 'Documento', 'Software', 'Outros']

export function AresApp() {
  const resultCount = PROJECTS.length * 29 + 1

  return (
    <section className="flex h-full flex-col bg-[#d9ebf7] text-[#16466a]">
      <div className="flex h-10 shrink-0 items-end border-b border-[#8aa7cf] bg-[linear-gradient(180deg,#f5fbff,#c7e0f3)] px-2">
        {['Biblioteca', 'Tela', 'Procurar', 'Transferencia', 'Bate-papo', 'Painel de controle'].map(
          (tab) => (
            <button
              key={tab}
              type="button"
              className={`h-8 min-w-[86px] rounded-t-[3px] border border-[#9cb5ca] px-3 ${
                tab === 'Procurar'
                  ? 'border-b-[#e8f4fb] bg-[#e8f4fb] font-bold'
                  : 'bg-transparent hover:bg-white/50'
              }`}
            >
              {tab}
            </button>
          ),
        )}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[238px_1fr]">
        <aside className="flex min-h-0 flex-col border-r border-[#8aa7cf] bg-[#d9ebf7] p-3">
          <label className="mb-2 flex items-center gap-1">
            <span className="flex h-5 w-5 items-center justify-center border border-[#8aa7cf] bg-white text-[#3b82c4]">
              ?
            </span>
            Procurar arquivo generico
          </label>
          <select className="mb-3 h-7 border border-[#8aa7cf] bg-white px-2">
            <option>tioted</option>
            <option>portfolio xp</option>
          </select>
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              className="h-8 border border-[#c8c8a4] bg-[#f5f2d4] px-3 text-[#a5a082]"
            >
              Procurar agora
            </button>
            <button type="button" className="h-8 border border-[#8aa7cf] bg-white px-3">
              Cancelar procura
            </button>
          </div>

          <div className="space-y-2">
            {filters.map((filter, index) => (
              <label key={filter} className="flex items-center gap-2">
                <input type="radio" name="ares-filter" defaultChecked={index === 0} />
                {filter}
              </label>
            ))}
          </div>

          <div className="mt-auto">
            <p className="mb-2">
              0:27&nbsp;&nbsp; {resultCount} ({resultCount + 1}) resultados para tioted
            </p>
            <div className="flex h-8 items-center border border-[#8aa7cf] bg-white px-2">
              <span className="flex-1 text-xp-text-muted">Filter</span>
              <img src={searchIcon} alt="" className="h-5 w-5" draggable={false} />
            </div>
          </div>
        </aside>

        <main className="flex min-w-0 flex-col bg-white">
          <div className="flex h-10 shrink-0 items-end gap-1 border-b border-[#b4c7d8] bg-[#e8f4fb] px-2">
            <button type="button" className="h-8 border border-[#b4c7d8] bg-white px-3">
              Nova procura
            </button>
            <button type="button" className="h-8 border border-[#b4c7d8] bg-[#e8f4fb] px-3">
              tioted ({resultCount})
            </button>
          </div>
          <div className="grid grid-cols-[24px_minmax(160px,1fr)_120px_70px_78px_64px_110px] gap-1 border-b border-[#b4c7d8] bg-[#eef6ff] px-2 py-1 text-[12px] font-bold">
            <span />
            <span>Titulo</span>
            <span>Autor</span>
            <span>Tipo</span>
            <span>Tamanho</span>
            <span>S...</span>
            <span>Usuario</span>
          </div>
          <div className="min-h-0 flex-1 overflow-auto">
            {PROJECTS.map((project, index) => (
              <AresItem key={project.id} index={index} project={project} />
            ))}
            {PROJECTS.map((project, index) => (
              <AresItem key={`${project.id}-mirror`} index={index + PROJECTS.length} project={project} />
            ))}
          </div>
        </main>
      </div>

      <div className="flex h-12 shrink-0 items-center gap-2 border-t border-[#8aa7cf] bg-[linear-gradient(180deg,#f5fbff,#c7e0f3)] px-3">
        {['|<', 'Play', '>|', 'Stop'].map((control) => (
          <button
            key={control}
            type="button"
            className="h-7 min-w-7 rounded-full border border-[#8aa7cf] bg-[linear-gradient(180deg,#ffffff,#77b9ec)] px-2 text-[#0c72b9] shadow-btn-xp"
          >
            {control}
          </button>
        ))}
        <div className="mx-2 h-6 flex-1 border border-[#6b6b6b] bg-black" />
        <button type="button" className="flex h-7 items-center gap-1 border border-[#8aa7cf] bg-white px-2">
          <img src={goIcon} alt="" className="h-4 w-4" draggable={false} />
          Online
        </button>
      </div>
    </section>
  )
}
