import { useMemo, useState } from 'react'
import goIcon from '../../../assets/icons/icon__go.png'
import searchIcon from '../../../assets/icons/icon__search--large.png'
import { PROJECTS } from '../../../data/portfolio.data'
import { AresItem } from './AresItem'

const filters = ['Tudo', 'Software', 'Documento']

export function AresApp() {
  const [draftQuery, setDraftQuery] = useState('')
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('Tudo')
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('pt-BR')

    return PROJECTS.filter((project) => {
      const searchable = [project.name, project.description, ...project.tech]
        .join(' ')
        .toLocaleLowerCase('pt-BR')
      const matchesQuery = !normalizedQuery || searchable.includes(normalizedQuery)
      const isSoftware = project.name.toLocaleLowerCase('pt-BR').endsWith('.exe')
      const matchesFilter =
        filter === 'Tudo' ||
        (filter === 'Software' && isSoftware) ||
        (filter === 'Documento' && !isSoftware)

      return matchesQuery && matchesFilter
    })
  }, [filter, query])

  const selectedProject = results.find((project) => project.id === selectedId) ?? results[0] ?? null

  const clearSearch = () => {
    setDraftQuery('')
    setQuery('')
    setFilter('Tudo')
    setSelectedId(null)
  }

  return (
    <section className="flex h-full flex-col bg-[#d9ebf7] text-[#16466a]">
      <div className="flex h-10 shrink-0 items-end overflow-x-auto border-b border-[#8aa7cf] bg-[linear-gradient(180deg,#f5fbff,#c7e0f3)] px-2">
        {['Biblioteca', 'Tela', 'Procurar', 'Transferência', 'Bate-papo'].map((tab) => (
          <button
            key={tab}
            type="button"
            disabled={tab !== 'Procurar'}
            className={`h-8 min-w-[86px] rounded-t-[3px] border border-[#9cb5ca] px-3 ${
              tab === 'Procurar'
                ? 'border-b-[#e8f4fb] bg-[#e8f4fb] font-bold'
                : 'cursor-not-allowed bg-transparent opacity-55'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-1 md:grid-cols-[238px_1fr]">
        <aside className="border-r border-[#8aa7cf] bg-[#d9ebf7] p-3">
          <label htmlFor="ares-search" className="mb-2 flex items-center gap-1 font-bold">
            <span className="flex h-5 w-5 items-center justify-center border border-[#8aa7cf] bg-white text-[#3b82c4]">
              ?
            </span>
            Procurar projeto
          </label>
          <input
            id="ares-search"
            name="project-search"
            type="search"
            value={draftQuery}
            onChange={(event) => setDraftQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') setQuery(draftQuery)
            }}
            placeholder="Nome ou tecnologia…"
            autoComplete="off"
            className="mb-3 h-8 w-full border border-[#8aa7cf] bg-white px-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#245edc]"
          />
          <div className="mb-4 flex gap-2">
            <button
              type="button"
              onClick={() => setQuery(draftQuery)}
              className="h-8 border border-[#8aa7cf] bg-white px-3 hover:bg-[#eef6ff]"
            >
              Procurar
            </button>
            <button
              type="button"
              onClick={clearSearch}
              className="h-8 border border-[#8aa7cf] bg-white px-3 hover:bg-[#eef6ff]"
            >
              Limpar
            </button>
          </div>

          <fieldset className="space-y-2">
            <legend className="mb-2 font-bold">Tipo</legend>
            {filters.map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="ares-filter"
                  checked={filter === item}
                  onChange={() => setFilter(item)}
                />
                {item}
              </label>
            ))}
          </fieldset>
        </aside>

        <main className="flex min-w-0 flex-col bg-white">
          <div className="flex h-10 shrink-0 items-end gap-1 border-b border-[#b4c7d8] bg-[#e8f4fb] px-2">
            <button
              type="button"
              onClick={clearSearch}
              className="h-8 border border-[#b4c7d8] bg-white px-3 hover:bg-[#f7fbff]"
            >
              Nova procura
            </button>
            <span className="flex h-8 items-center border border-[#b4c7d8] border-b-white bg-white px-3">
              Projetos ({results.length})
            </span>
          </div>

          <div className="hidden grid-cols-[24px_minmax(160px,1fr)_120px_70px_78px_64px_110px] gap-1 border-b border-[#b4c7d8] bg-[#eef6ff] px-2 py-1 text-[14px] font-bold sm:grid">
            <span />
            <span>Título</span>
            <span>Autor</span>
            <span>Tipo</span>
            <span>Tamanho</span>
            <span>Disp.</span>
            <span>Origem</span>
          </div>

          <div className="min-h-0 flex-1 overflow-auto" role="listbox" aria-label="Projetos">
            {results.length > 0 ? (
              results.map((project, index) => (
                <AresItem
                  key={project.id}
                  index={index}
                  project={project}
                  isSelected={selectedProject?.id === project.id}
                  onSelect={(item) => setSelectedId(item.id)}
                />
              ))
            ) : (
              <div className="flex h-full min-h-36 flex-col items-center justify-center p-6 text-center">
                <img src={searchIcon} alt="" width={32} height={32} draggable={false} />
                <p className="mt-3 font-bold">Nenhum projeto encontrado</p>
                <button type="button" onClick={clearSearch} className="mt-2 underline">
                  Limpar busca
                </button>
              </div>
            )}
          </div>

          <div className="shrink-0 border-t border-[#b4c7d8] bg-[#eef6ff] p-3">
            {selectedProject ? (
              <div className="flex items-start gap-3">
                <img
                  src={goIcon}
                  alt=""
                  width={32}
                  height={32}
                  className="mt-1 shrink-0"
                  draggable={false}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold">{selectedProject.name}</p>
                  <p className="mt-0.5 text-[14px] text-[#3a5a7a]">{selectedProject.description}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-[2px] border border-[#8aa7cf] bg-white px-1.5 py-[1px] text-[13px] text-[#16466a]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex shrink-0 flex-col gap-1">
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="h-8 rounded-[2px] border border-[#8aa7cf] bg-white px-3 text-center text-[14px] leading-8 hover:bg-[#f7fbff]"
                  >
                    Abrir projeto
                  </a>
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="h-8 rounded-[2px] border border-[#8aa7cf] bg-white px-3 text-center text-[14px] leading-8 hover:bg-[#f7fbff]"
                    >
                      Ver código
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <p className="text-center text-[14px] text-[#3a5a7a]">
                Selecione um projeto para ver os detalhes
              </p>
            )}
          </div>
        </main>
      </div>

      <footer className="flex h-9 shrink-0 items-center justify-between border-t border-[#8aa7cf] bg-[linear-gradient(180deg,#f5fbff,#c7e0f3)] px-3">
        <span>{results.length} resultado(s)</span>
        <span className="flex items-center gap-1">
          <img src={goIcon} alt="" width={16} height={16} draggable={false} />
          Online
        </span>
      </footer>
    </section>
  )
}
