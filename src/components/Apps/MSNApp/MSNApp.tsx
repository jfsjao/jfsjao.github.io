import { MSN_CONTACTS } from '../../../data/portfolio.data'
import { MSNChat } from './MSNChat'
import { MSNContact } from './MSNContact'

export function MSNApp() {
  return (
    <section className="flex h-full flex-col bg-[#d7ecff]">
      <div className="bg-[linear-gradient(180deg,#87d9ff,#0b68c0)] p-3 text-white">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-[3px] border border-white bg-[#dff5ff] shadow-btn-xp" />
          <div>
            <p className="font-bold [text-shadow:1px_1px_1px_rgba(0,0,0,0.5)]">
              João Felipe Silva
            </p>
            <p className="text-xp-sm">Disponivel</p>
          </div>
        </div>
      </div>
      <div className="border-b border-[#8aa7cf] bg-white px-2 py-1 text-xp-sm text-xp-text-muted">
        Digite uma mensagem pessoal
      </div>
      <div className="flex-1 overflow-auto p-2">
        {MSN_CONTACTS.map((contact) => (
          <MSNContact key={contact.name} contact={contact} />
        ))}
      </div>
      <MSNChat />
    </section>
  )
}
