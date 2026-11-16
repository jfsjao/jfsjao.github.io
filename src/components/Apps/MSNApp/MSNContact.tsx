import type { MSN_CONTACTS } from '../../../data/portfolio.data'

export type Contact = (typeof MSN_CONTACTS)[number]

interface MSNContactProps {
  contact: Contact
  onOpen: (contact: Contact) => void
}

export function MSNContact({ contact, onOpen }: MSNContactProps) {
  const away = contact.status === 'away'

  return (
    <button
      type="button"
      onClick={() => onOpen(contact)}
      className="flex w-full items-center gap-2 rounded-[2px] px-2 py-1 text-left hover:bg-[#c6e2ff] focus-visible:bg-[#c6e2ff] focus-visible:outline-none"
    >
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border text-[9px] text-white ${
          away ? 'border-[#c98a00] bg-xp-away' : 'border-[#2f8f2f] bg-xp-online'
        }`}
        aria-hidden
      >
        {away ? '◷' : ''}
      </span>
      <span className="min-w-0 truncate">
        <span className="font-bold text-[#16466a]">{contact.name}</span>
        <span className="text-xp-text-muted"> - {contact.message}</span>
      </span>
      {away && <span className="ml-auto shrink-0 text-[12px] text-xp-text-muted">(Ausente)</span>}
    </button>
  )
}
