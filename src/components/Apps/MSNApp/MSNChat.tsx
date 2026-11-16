import { useEffect, useRef, useState } from 'react'
import { CONTACTS } from '../../../data/portfolio.data'
import type { Contact } from './MSNContact'

interface Message {
  from: 'contact' | 'me'
  text: string
}

interface MSNChatProps {
  contact: Contact
  onBack: () => void
}

const linkedin = CONTACTS.find((item) => item.label === 'LinkedIn')?.url
const email = CONTACTS.find((item) => item.label === 'Email')?.url

export function MSNChat({ contact, onBack }: MSNChatProps) {
  const [messages, setMessages] = useState<Message[]>([{ from: 'contact', text: contact.message }])
  const [draft, setDraft] = useState('')
  const [typing, setTyping] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' })
  }, [messages, typing])

  const send = () => {
    const text = draft.trim()
    if (!text) return
    setMessages((current) => [...current, { from: 'me', text }])
    setDraft('')
    setTyping(true)
    window.setTimeout(() => {
      setTyping(false)
      setMessages((current) => [
        ...current,
        { from: 'contact', text: 'Valeu pela mensagem! Para falar com o João de verdade, chama no LinkedIn ou por e-mail aqui embaixo.' },
      ])
    }, 1200)
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col bg-white">
      <div className="flex items-center gap-2 border-b border-[#8aa7cf] bg-[linear-gradient(180deg,#f5fbff,#d7ecff)] px-2 py-1.5">
        <button
          type="button"
          onClick={onBack}
          className="h-6 border border-[#8aa7cf] bg-white px-2 text-[12px] hover:bg-[#eef6ff]"
        >
          ◀ Contatos
        </button>
        <p className="min-w-0 truncate text-[13px]">
          Para: <span className="font-bold">{contact.name}</span>
        </p>
      </div>

      <div className="min-h-0 flex-1 overflow-auto px-3 py-2 text-[13px]" aria-live="polite">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <p className="text-xp-text-muted">{message.from === 'me' ? 'Você' : contact.name} diz:</p>
            <p className="pl-3 text-[#1a1a1a]">{message.text}</p>
          </div>
        ))}
        {typing && <p className="italic text-xp-text-muted">{contact.name} está digitando...</p>}
        <div ref={endRef} />
      </div>

      <div className="flex gap-2 border-t border-[#8aa7cf] bg-[#eef6ff] px-2 py-1 text-[12px]">
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noreferrer" className="underline">
            LinkedIn
          </a>
        )}
        {email && (
          <a href={email} className="underline">
            E-mail
          </a>
        )}
      </div>

      <form
        className="flex gap-2 border-t border-[#8aa7cf] bg-[#d7ecff] p-2"
        onSubmit={(event) => {
          event.preventDefault()
          send()
        }}
      >
        <textarea
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter' && !event.shiftKey) {
              event.preventDefault()
              send()
            }
          }}
          aria-label="Mensagem"
          className="h-14 min-w-0 flex-1 resize-none border border-xp-input-border bg-white p-1 outline-none"
          placeholder="Digite sua mensagem..."
        />
        <button
          type="submit"
          className="w-16 border border-[#8aa7cf] bg-white font-bold hover:bg-[#eef6ff] disabled:opacity-50"
          disabled={!draft.trim()}
        >
          Enviar
        </button>
      </form>
    </div>
  )
}
