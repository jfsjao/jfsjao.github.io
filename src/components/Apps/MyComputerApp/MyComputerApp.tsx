import { BriefcaseBusiness, Code2, Folder, Mail } from 'lucide-react'
import { CONTACTS } from '../../../data/portfolio.data'

const ICONS = {
  github: Code2,
  linkedin: BriefcaseBusiness,
  mail: Mail,
}

export function MyComputerApp() {
  return (
    <section className="h-full bg-white p-4">
      <div className="grid grid-cols-3 gap-4">
        {CONTACTS.map((contact) => {
          const Icon = ICONS[contact.icon as keyof typeof ICONS] ?? Folder

          return (
            <a
              key={contact.label}
              className="flex flex-col items-center gap-2 rounded-[2px] p-2 text-center hover:bg-[#dcecff]"
              href={contact.url}
              rel="noreferrer"
              target="_blank"
            >
              <Icon className="h-10 w-10 text-xp-blue" />
              <span>{contact.label}</span>
            </a>
          )
        })}
      </div>
    </section>
  )
}
