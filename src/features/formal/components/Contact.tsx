import { ABOUT, CONTACTS } from '../../../data/portfolio.data'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  const email = CONTACTS.find((contact) => contact.label === 'Email')

  return (
    <section id="contato" className="scroll-mt-16 border-t border-formal-border md:scroll-mt-[76px]">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeading index="07" label="Contato" title="Vamos conversar." />

        <div data-reveal className="overflow-hidden rounded-3xl bg-formal-dark text-white">
          <div className="grid gap-10 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:p-14">
            <div>
              <p className="max-w-[46ch] text-pretty font-display text-2xl font-normal leading-snug sm:text-3xl">
                Tem um projeto, uma vaga ou só quer trocar uma ideia sobre tecnologia? Me manda um email.
              </p>
              <p className="mt-4 flex items-center gap-1.5 font-meta text-xs uppercase tracking-wide text-white/60">
                <span
                  className={`h-2 w-2 rounded-full ${ABOUT.available ? 'bg-formal-green' : 'bg-white/40'}`}
                  aria-hidden="true"
                />
                {ABOUT.available ? 'Disponível para novos projetos' : 'Indisponível no momento'}
              </p>
            </div>

            {email && (
              <a
                href={email.url}
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-7 py-4 font-meta text-xs font-semibold uppercase tracking-wide text-formal-dark transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Enviar email ↗
              </a>
            )}
          </div>

          <ul className="grid border-t border-white/10 sm:grid-cols-4">
            {CONTACTS.map((contact) => (
              <li key={contact.label} className="border-t border-white/10 sm:border-l sm:border-t-0 first:border-l-0">
                <a
                  href={contact.url}
                  target={contact.url.startsWith('http') ? '_blank' : undefined}
                  rel={contact.url.startsWith('http') ? 'noreferrer noopener' : undefined}
                  className="flex items-center justify-between px-6 py-4 font-meta text-xs font-semibold uppercase tracking-wide text-white/80 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline focus-visible:-outline-offset-2 focus-visible:outline-white"
                >
                  {contact.label}
                  <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
