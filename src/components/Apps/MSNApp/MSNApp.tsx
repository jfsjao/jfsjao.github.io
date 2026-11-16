import { useMemo, useState } from 'react'
import profilePhoto from '../../../assets/foto-perfil.jpeg'
import { ABOUT, MSN_CONTACTS } from '../../../data/portfolio.data'
import { MSNChat } from './MSNChat'
import { MSNContact, type Contact } from './MSNContact'

const GROUPS = [
  { status: 'online', label: 'Online' },
  { status: 'away', label: 'Ausente' },
] as const

export function MSNApp() {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState<Contact | null>(null)
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({})

  const filtered = useMemo(() => {
    const query = search.trim().toLocaleLowerCase('pt-BR')
    return MSN_CONTACTS.filter((contact) =>
      `${contact.name} ${contact.message}`.toLocaleLowerCase('pt-BR').includes(query),
    )
  }, [search])

  return (
    <section className="flex h-full flex-col bg-[#d7ecff] text-[13px]">
      <div className="bg-[linear-gradient(180deg,#87d9ff,#0b68c0)] p-3 text-white">
        <div className="flex items-center gap-3">
          <img
            src={profilePhoto}
            alt={`Foto de ${ABOUT.name}`}
            className="h-14 w-14 shrink-0 rounded-[4px] border-2 border-white object-cover shadow-btn-xp"
            draggable={false}
          />
          <div className="min-w-0">
            <p className="truncate font-bold [text-shadow:1px_1px_1px_rgba(0,0,0,0.5)]">
              {ABOUT.name} <span className="font-normal">({ABOUT.available ? 'Disponível' : 'Ocupado'})</span>
            </p>
            <p className="truncate italic text-[#e6f6ff]">♪ Procurando vaga júnior de dev</p>
          </div>
        </div>
      </div>

      {open ? (
        <MSNChat key={open.name} contact={open} onBack={() => setOpen(null)} />
      ) : (
        <>
          <div className="border-b border-[#8aa7cf] bg-white p-1.5">
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Localizar um contato"
              placeholder="Localizar um contato..."
              className="h-7 w-full border border-xp-input-border bg-white px-2 outline-none focus-visible:border-[#245edc]"
            />
          </div>

          <div className="min-h-0 flex-1 overflow-auto p-1">
            {GROUPS.map((group) => {
              const items = filtered.filter((contact) => contact.status === group.status)
              const isCollapsed = collapsed[group.status]
              return (
                <div key={group.status} className="mb-1">
                  <button
                    type="button"
                    onClick={() => setCollapsed((current) => ({ ...current, [group.status]: !isCollapsed }))}
                    aria-expanded={!isCollapsed}
                    className="flex w-full items-center gap-1 px-1 py-0.5 font-bold text-[#0b4a8f]"
                  >
                    <span className="w-3 text-[10px]">{isCollapsed ? '▶' : '▼'}</span>
                    {group.label} ({items.length})
                  </button>
                  {!isCollapsed &&
                    items.map((contact) => (
                      <MSNContact key={contact.name} contact={contact} onOpen={setOpen} />
                    ))}
                </div>
              )
            })}
            {filtered.length === 0 && (
              <p className="p-3 text-center text-xp-text-muted">Nenhum contato encontrado</p>
            )}
          </div>

          <p className="border-t border-[#8aa7cf] bg-[#eef6ff] px-2 py-1.5 text-[12px] text-xp-text-muted">
            Clique num contato para abrir a conversa.
          </p>
        </>
      )}
    </section>
  )
}
