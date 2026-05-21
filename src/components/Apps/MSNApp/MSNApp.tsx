import { MSN_CONTACTS } from '../../../data/portfolio.data'
import { MSNChat } from './MSNChat'
import { MSNContact } from './MSNContact'

export function MSNApp() {
  return (
    <section className="flex h-full flex-col bg-[#d7ecff]">
      <div className="bg-gradient-to-b from-[#4cb7ff] to-[#0b68c0] p-3 text-white">
        <p className="font-bold">João Felipe Silva</p>
        <p className="text-xp-sm">Disponivel</p>
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
