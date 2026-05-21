import type { MSN_CONTACTS } from '../../../data/portfolio.data'

type Contact = (typeof MSN_CONTACTS)[number]

interface MSNContactProps {
  contact: Contact
}

export function MSNContact({ contact }: MSNContactProps) {
  const statusColor = contact.status === 'away' ? 'bg-xp-away' : 'bg-xp-online'

  return (
    <div className="mb-1 flex items-center gap-2 rounded-[2px] bg-white/70 p-2">
      <span className={`h-3 w-3 rounded-full ${statusColor}`} />
      <div>
        <p>{contact.name}</p>
        <p className="text-xp-sm text-xp-text-muted">{contact.message}</p>
      </div>
    </div>
  )
}
