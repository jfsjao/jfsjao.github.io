import { CONTACTS } from '../../../data/portfolio.data'
import backIcon from '../../../assets/icons/icon__back.png'
import folderIcon from '../../../assets/icons/icon__folders.png'
import githubIcon from '../../../assets/icons/icon__github--large.png'
import goIcon from '../../../assets/icons/icon__go.png'
import mailIcon from '../../../assets/icons/icon__mail--large.png'
import networkIcon from '../../../assets/icons/icon__network_places--large.png'
import searchIcon from '../../../assets/icons/icon__search--large.png'
import foldersIcon from '../../../assets/icons/icon__folders.png'
import viewsIcon from '../../../assets/icons/icon__views.png'

const ICONS = {
  github: githubIcon,
  linkedin: networkIcon,
  mail: mailIcon,
}

export function MyComputerApp() {
  return (
    <section className="flex h-full flex-col bg-white">
      <div className="flex h-8 items-center gap-4 border-b border-[#aca899] bg-xp-window-bg px-2 text-xp-sm">
        <span>Arquivo</span>
        <span>Editar</span>
        <span>Exibir</span>
        <span>Favoritos</span>
        <span>Ferramentas</span>
      </div>
      <div className="flex h-9 items-center gap-2 border-b border-[#aca899] bg-xp-window-bg px-2">
        <button
          type="button"
          className="flex items-center gap-1 border border-[#aca899] bg-xp-btn px-2 py-1 shadow-btn-xp"
        >
          <img src={backIcon} alt="" className="h-4 w-4" draggable={false} />
          Voltar
        </button>
        <button
          type="button"
          className="flex items-center gap-1 border border-transparent px-2 py-1 hover:border-[#aca899] hover:bg-xp-btn"
        >
          <img src={searchIcon} alt="" className="h-5 w-5" draggable={false} />
          Search
        </button>
        <button
          type="button"
          className="flex items-center gap-1 border border-transparent px-2 py-1 hover:border-[#aca899] hover:bg-xp-btn"
        >
          <img src={foldersIcon} alt="" className="h-5 w-5" draggable={false} />
          Folders
        </button>
        <button
          type="button"
          className="flex items-center gap-1 border border-transparent px-2 py-1 hover:border-[#aca899] hover:bg-xp-btn"
        >
          <img src={viewsIcon} alt="" className="h-5 w-5" draggable={false} />
        </button>
      </div>
      <div className="flex h-8 items-center gap-2 border-b border-[#aca899] bg-xp-window-bg px-2">
        <span className="text-xp-text-muted">Address</span>
        <div className="flex flex-1 items-center gap-2 border border-xp-input-border bg-white px-2 py-1">
          <span>Meu Computador</span>
        </div>
        <button
          type="button"
          className="flex items-center gap-1 border border-[#77a85b] bg-[#2f9d2f] px-2 py-[3px] text-white shadow-btn-xp"
        >
          <img src={goIcon} alt="" className="h-4 w-4" draggable={false} />
          Go
        </button>
      </div>
      <div className="grid min-h-0 flex-1 grid-cols-[150px_1fr]">
        <aside className="space-y-3 bg-[linear-gradient(180deg,#7d91d8,#6f80c8)] p-3 text-xp-blue-dark">
          {[
            ['File & Folder Tasks', 'Criar pasta, publicar, compartilhar.'],
            ['Other Places', 'Desktop, Meus Documentos, Rede.'],
            ['Details', 'Links externos do portfolio.'],
          ].map(([title, text]) => (
            <section key={title} className="overflow-hidden rounded-[4px] bg-white/80">
              <div className="bg-[linear-gradient(180deg,#ffffff,#c5d5ff)] px-2 py-1 font-bold">
                {title}
              </div>
              <p className="p-2 text-xp-sm">{text}</p>
            </section>
          ))}
        </aside>
        <div className="grid content-start grid-cols-3 gap-4 p-4">
          {CONTACTS.map((contact) => {
            const icon = ICONS[contact.icon as keyof typeof ICONS] ?? folderIcon

            return (
              <a
                key={contact.label}
                className="flex flex-col items-center gap-2 rounded-[2px] p-2 text-center hover:bg-[#dcecff]"
                href={contact.url}
                rel="noreferrer"
                target="_blank"
              >
                <img src={icon} alt="" className="h-12 w-12 object-contain" draggable={false} />
                <span>{contact.label}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
